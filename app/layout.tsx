import type React from "react"
import type { Metadata } from "next"
import { Merriweather as Meriweather, Playfair_Display, Source_Sans_3 } from "next/font/google"
import Script from "next/script"
import { SiteHeader } from "@/components/SiteHeader"
import { StructuredData } from "@/components/StructuredData"
import "./globals.css"

const meriweather = Meriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-meriweather",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  // Playfair supports common weights like 400–900; include what you’ll use
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
  display: "swap",
})

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-source-sans",
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thriftshopper.ai"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ThriftShopper - The Magic of Discovery™",
    template: "%s | ThriftShopper",
  },
  description: "Discover one-of-a-kind secondhand treasures where the magic isn't just what you find, it's the human connection behind it. AI-powered thrift marketplace connecting thoughtful buyers and sellers.",
  keywords: ["thrift shopping", "vintage marketplace", "secondhand", "sustainable shopping", "thrift store", "vintage finds", "recommerce", "AI shopping", "thrift marketplace"],
  authors: [{ name: "ThriftShopper" }],
  creator: "ThriftShopper",
  publisher: "ThriftShopper",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "ThriftShopper",
    title: "ThriftShopper - The Magic of Discovery™",
    description: "Discover one-of-a-kind secondhand treasures where the magic isn't just what you find, it's the human connection behind it.",
    images: [
      {
        url: `${siteUrl}/og-image`,
        width: 1200,
        height: 630,
        alt: "ThriftShopper - The Magic of Discovery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ThriftShopper - The Magic of Discovery™",
    description: "Discover one-of-a-kind secondhand treasures where the magic isn't just what you find, it's the human connection behind it.",
    images: [`${siteUrl}/og-image`],
    creator: "@thriftshopper",
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
    // Add when you have them
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
    lang="en"
    className={`${meriweather.variable} ${sourceSans.variable} ${playfair.variable} antialiased`}
  >
  
      <body className="font-sans">
        <StructuredData />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}
        <SiteHeader />
        {children}
      </body>
    </html>
  )
}
