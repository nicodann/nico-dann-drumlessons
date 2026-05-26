/**
 * Run once to generate a Gmail OAuth refresh token.
 *
 * Usage:
 *   GMAIL_CLIENT_ID=xxx GMAIL_CLIENT_SECRET=yyy node scripts/get-gmail-token.mjs
 *
 * Then copy the printed refresh token into your .env.local as GMAIL_REFRESH_TOKEN.
 */

import http from "http";
import { exec } from "child_process";
import { google } from "googleapis";

const CLIENT_ID = process.env.GMAIL_CLIENT_ID;
const CLIENT_SECRET = process.env.GMAIL_CLIENT_SECRET;
const REDIRECT_URI = "http://localhost:3333/oauth/callback";
const SCOPES = ["https://www.googleapis.com/auth/gmail.send"];

if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error(
    "Error: GMAIL_CLIENT_ID and GMAIL_CLIENT_SECRET must be set.\n" +
      "Usage: GMAIL_CLIENT_ID=xxx GMAIL_CLIENT_SECRET=yyy node scripts/get-gmail-token.mjs"
  );
  process.exit(1);
}

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

const authUrl = oauth2Client.generateAuthUrl({
  access_type: "offline",
  scope: SCOPES,
  prompt: "consent", // force consent screen so Google always returns a refresh token
});

console.log("\nOpening browser for Google OAuth consent...");
console.log("If it doesn't open automatically, visit:\n");
console.log(" ", authUrl, "\n");

// Open the browser
const open =
  process.platform === "darwin"
    ? `open "${authUrl}"`
    : process.platform === "win32"
      ? `start "" "${authUrl}"`
      : `xdg-open "${authUrl}"`;
exec(open);

// Start a local server to catch the redirect
const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://localhost:3333`);

  if (url.pathname !== "/oauth/callback") {
    res.writeHead(404);
    res.end();
    return;
  }

  const code = url.searchParams.get("code");
  const error = url.searchParams.get("error");

  if (error) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<h2>Error: ${error}</h2><p>Check the terminal for details.</p>`);
    console.error("\nOAuth error:", error);
    server.close();
    return;
  }

  try {
    const { tokens } = await oauth2Client.getToken(code);

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(
      "<h2>Success!</h2><p>You can close this tab and check your terminal.</p>"
    );

    console.log("\n✓ Success! Add this to your .env.local:\n");
    console.log(`GMAIL_REFRESH_TOKEN=${tokens.refresh_token}`);
    if (!tokens.refresh_token) {
      console.warn(
        "\nWarning: no refresh_token returned. This usually means the account\n" +
          "already granted consent and Google didn't re-issue one.\n" +
          "To force a new one: revoke access at https://myaccount.google.com/permissions\n" +
          "then run this script again."
      );
    }
  } catch (err) {
    res.writeHead(500, { "Content-Type": "text/html" });
    res.end(`<h2>Token exchange failed</h2><pre>${err.message}</pre>`);
    console.error("\nToken exchange failed:", err.message);
  } finally {
    server.close();
  }
});

server.listen(3333, () => {
  console.log("Waiting for OAuth callback on http://localhost:3333 ...");
});
