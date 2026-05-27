import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const displayFont = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-heading",
  display: "swap",
});

const bodyFont = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nico Dann — Drum Lessons in East Toronto",
  description:
    "Private drum lessons for all ages and levels near Greenwood & Danforth. Patient, personalised instruction from a professional drummer with 20+ years of performing and teaching experience.",
  keywords: [
    "drum lessons",
    "drum teacher",
    "Toronto",
    "east Toronto",
    "Danforth",
    "Greenwood",
    "percussion lessons",
    "music lessons",
    "kids drum lessons",
    "adult drum lessons",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Nico Dann — Drum Lessons in East Toronto",
    description:
      "Private drum lessons for all ages and levels near Greenwood & Danforth.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable} scroll-smooth`}
    >
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
