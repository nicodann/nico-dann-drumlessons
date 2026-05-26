import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

/*
 * Contact form API route — sends an email via Gmail API.
 *
 * Required env variables:
 *   GMAIL_CLIENT_ID
 *   GMAIL_CLIENT_SECRET
 *   GMAIL_REFRESH_TOKEN
 *   GMAIL_USER  (your gmail address, e.g. nicodann@gmail.com)
 *
 * To get a refresh token:
 *   1. Create an OAuth2 app in Google Cloud Console
 *   2. Enable the Gmail API
 *   3. Create OAuth2 credentials (type: Web Application)
 *   4. Use the OAuth2 Playground (https://developers.google.com/oauthplayground)
 *      to authorize with scope https://www.googleapis.com/auth/gmail.send
 *      and exchange the auth code for a refresh token.
 */

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const oauth2Client = new google.auth.OAuth2(
      process.env.GMAIL_CLIENT_ID,
      process.env.GMAIL_CLIENT_SECRET
    );

    oauth2Client.setCredentials({
      refresh_token: process.env.GMAIL_REFRESH_TOKEN,
    });

    const gmail = google.gmail({ version: "v1", auth: oauth2Client });

    const to = process.env.GMAIL_USER ?? "nicodann@gmail.com";

    const rawMessage = [
      `From: ${to}`,
      `To: ${to}`,
      `Reply-To: ${email}`,
      `Subject: New lesson inquiry from ${name}`,
      `Content-Type: text/plain; charset="UTF-8"`,
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      ``,
      `Message:`,
      message,
    ].join("\n");

    const encodedMessage = Buffer.from(rawMessage)
      .toString("base64")
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "");

    await gmail.users.messages.send({
      userId: "me",
      requestBody: { raw: encodedMessage },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 500 }
    );
  }
}
