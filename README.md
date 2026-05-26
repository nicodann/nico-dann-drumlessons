# Nico Dann — Drum Lessons Website

A single-page Next.js site for Nico Dann's drum teaching business.

## Quick Start

```bash
npm install
cp .env.local.example .env.local   # then fill in your Gmail API credentials
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Hero Image

Drop your hero image at `public/hero.jpg`. A wide, landscape photo works best (ideally 1920×1080 or larger). It'll be used as a full-bleed background with a dark gradient overlay, so both light and dark photos work — but action shots or studio shots look great.

## Gmail API Setup

The contact form sends emails via the Gmail API (OAuth2). You'll need:

1. A **Google Cloud project** with the Gmail API enabled.
2. **OAuth2 credentials** (Web Application type).
3. A **refresh token** — the easiest way:
   - Go to [Google OAuth Playground](https://developers.google.com/oauthplayground)
   - Click the gear icon → check "Use your own OAuth credentials" → paste your client ID & secret
   - Authorize the scope `https://www.googleapis.com/auth/gmail.send`
   - Exchange the authorization code for tokens
   - Copy the refresh token

Then fill in `.env.local`:

```
GMAIL_CLIENT_ID=...
GMAIL_CLIENT_SECRET=...
GMAIL_REFRESH_TOKEN=...
GMAIL_USER=nicodann@gmail.com
```

## Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19**
- **Tailwind CSS 4** (CSS-first config via `@theme`)
- **TypeScript**
- **Google APIs** (googleapis)

## Deployment

Works out of the box on **Vercel** — just connect the repo and add env variables. Also deployable anywhere that supports Node.js.
