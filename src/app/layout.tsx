import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "../contexts/AuthContext";
import React from "react";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SportsTradeX - India's First Sports Trading Platform",
  description:
    "Join the future of sports trading. Learn, invest, and earn with Sportstradex!",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "SportsTradeX - India's First Sports Trading Platform",
    description:
      "The ultimate destination for sports trading education and earning opportunities.",
    url: "https://sportstradex.com",
    siteName: "SportsTradeX",
    images: [
      {
        url: "/og-image.jpg", // Add OG image in public folder
        width: 1200,
        height: 630,
        alt: "Sportstradex Cover",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SportsTradeX",
    description: "India's first sports trading platform.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${manrope.variable} ${sora.variable} antialiased`}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
