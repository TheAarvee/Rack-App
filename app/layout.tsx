import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
      (process.env.VERCEL_PROJECT_PRODUCTION_URL
        ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
        : process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000")
  ),
  title: "Rack | Stash Anything",
  description:
    "An invisible drop-zone for Windows. Stash Anything. Anywhere. Grab Anytime.",
  openGraph: {
    title: "Rack | Stash Anything",
    description:
      "An invisible drop-zone for Windows. Stash Anything. Anywhere. Grab Anytime.",
    url: "/",
    siteName: "Rack",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Rack - Stash Anything. Anywhere. Grab Anytime.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rack | Stash Anything",
    description:
      "An invisible drop-zone for Windows. Stash Anything. Anywhere. Grab Anytime.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
      <Analytics />
    </html>
  );
}
