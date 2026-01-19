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
  metadataBase: new URL("https://tallyhub.pro"),
  title: {
    default: "TallyHub Pro - Professional Tally Light System",
    template: "%s | TallyHub Pro",
  },
  description:
    "Professional tally light system for modern video production. Cost-effective, open-source tally lights for OBS Studio, vMix, ATEM, and more.",
  keywords: [
    "TallyHub",
    "tally lights",
    "video production",
    "OBS Studio",
    "vMix",
    "ATEM",
    "broadcast",
    "ESP32",
    "open source",
  ],
  alternates: {
    canonical: "https://tallyhub.pro",
  },
  openGraph: {
    title: "TallyHub Pro - Professional Tally Light System",
    description:
      "Professional tally light system for modern video production. Cost-effective, open-source tally lights for OBS Studio, vMix, ATEM, and more.",
    url: "https://tallyhub.pro",
    siteName: "TallyHub Pro",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://tallyhub.pro/og-image.png",
        width: 1200,
        height: 630,
        alt: "TallyHub Pro - Professional Tally Light System",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TallyHub Pro - Professional Tally Light System",
    description:
      "Professional tally light system for modern video production. Cost-effective, open-source tally lights for OBS Studio, vMix, ATEM, and more.",
    images: ["https://tallyhub.pro/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
