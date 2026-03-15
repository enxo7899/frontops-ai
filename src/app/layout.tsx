import type { Metadata } from "next";
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
  title: {
    default: "FrontOps AI — AI Employee for Customer Operations",
    template: "%s | FrontOps AI",
  },
  description:
    "FrontOps AI is an AI-powered operational employee for customer communication. Handle WhatsApp, Instagram, Messenger, and web chat — never miss a lead again.",
  keywords: [
    "AI customer operations",
    "AI employee",
    "WhatsApp automation",
    "Instagram DM automation",
    "lead qualification",
    "customer communication",
    "AI front desk",
    "FrontOps AI",
  ],
  authors: [{ name: "FrontOps AI" }],
  creator: "FrontOps AI",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://frontops-ai.com",
    siteName: "FrontOps AI",
    title: "FrontOps AI — AI Employee for Customer Operations",
    description:
      "AI-powered operational employee for customer communication across WhatsApp, Instagram, Messenger, and web chat.",
  },
  twitter: {
    card: "summary_large_image",
    title: "FrontOps AI — AI Employee for Customer Operations",
    description:
      "AI-powered operational employee for customer communication across WhatsApp, Instagram, Messenger, and web chat.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
