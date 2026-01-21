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
    default: "TallyHub Pro - Professional Tally Light System for Video Production",
    template: "%s | TallyHub Pro",
  },
  description:
    "Professional, affordable tally light system for broadcast and video production. Compatible with OBS Studio, vMix, Blackmagic ATEM, TriCaster, Roland, Panasonic, FOR-A, Ross Video. Open-source ESP32-based solution starting at $15. Web-based admin panel, sub-100ms latency, wireless WiFi setup.",
  keywords: [
    // Primary keywords
    "tally light system",
    "professional tally lights",
    "broadcast tally lights",
    "video production tally",
    "camera tally indicator",
    
    // Mixer/software specific
    "OBS Studio tally light",
    "vMix tally system",
    "ATEM tally lights",
    "Blackmagic tally",
    "TriCaster tally",
    "Roland Smart Tally",
    "Panasonic tally system",
    "TSL UMD tally",
    
    // Cost/comparison terms
    "affordable tally lights",
    "cheap tally light system",
    "DIY tally lights",
    "tally light alternative",
    "budget tally system",
    
    // Technical terms
    "ESP32 tally light",
    "M5Stack tally",
    "wireless tally system",
    "WiFi tally lights",
    "open source tally",
    
    // Use cases
    "church live streaming tally",
    "studio tally lights",
    "multi-camera tally system",
    "live production tally",
    "streaming tally indicator",
  ],
  alternates: {
    canonical: "https://tallyhub.pro",
  },
  openGraph: {
    title: "TallyHub Pro - Professional Tally Light System for Video Production",
    description:
      "Professional, affordable tally light system starting at $15. Compatible with OBS Studio, vMix, ATEM, TriCaster, Roland, and 15+ professional mixers. Open-source, wireless, sub-100ms latency.",
    url: "https://tallyhub.pro",
    siteName: "TallyHub Pro",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://tallyhub.pro/og-image-v2.png",
        width: 1200,
        height: 630,
        alt: "TallyHub Pro - Professional Tally Light System",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TallyHub Pro - Professional Tally Light System",
    description:
      "Professional, affordable tally lights starting at $15. Compatible with OBS, vMix, ATEM, and 15+ mixers. Open-source, wireless, sub-100ms latency.",
    images: ["https://tallyhub.pro/og-image-v2.png"],
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
