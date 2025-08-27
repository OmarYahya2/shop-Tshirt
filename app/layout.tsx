import type React from "react"
import type { Metadata } from "next"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "متجر البلايز - T-Shirt Store",
    template: "%s | متجر البلايز",
  },
  description:
    "متجر البلايز الشبابي - أحدث تصاميم التيشرتات والبلايز بأسلوب تومي هيلفيغر والأحذية العصرية | Youth T-Shirt Store - Latest Tommy-style shirts and trendy boots",
  keywords: ["بلايز", "تيشرت", "تومي", "أحذية", "ملابس شبابية", "t-shirts", "tommy style", "boots", "youth fashion"],
  authors: [{ name: "LUXE Fashion" }],
  creator: "LUXE Fashion",
  publisher: "LUXE Fashion",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://luxe-fashion.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: "https://tshirt-store.com",
    title: "متجر البلايز - T-Shirt Store",
    description: "متجر البلايز الشبابي - أحدث تصاميم التيشرتات والأحذية العصرية",
    siteName: "متجر البلايز",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LUXE Fashion - Modern Clothing Store",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LUXE - Modern Clothing Store",
    description: "Discover the latest fashion trends with our curated collection of modern clothing.",
    images: ["/og-image.jpg"],
    creator: "@luxefashion",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`font-sans ${GeistMono.variable} antialiased`}>{children}</body>
    </html>
  )
}
