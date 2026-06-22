import type { Metadata } from "next"
import HomePageClient from "@/components/HomePageClient"

const homepageUrl = "https://thriftshopper.ai"
const homepageTitle = "ThriftShopper – The Magic of Discovery"
const homepageDescription =
  "Discover secondhand treasures. Browse by feeling, story, and trust."
const ogImage = `${homepageUrl}/splash_screen.jpg`

export const metadata: Metadata = {
  title: homepageTitle,
  description: homepageDescription,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: homepageUrl,
    siteName: "ThriftShopper",
    title: homepageTitle,
    description: homepageDescription,
    images: [
      {
        url: ogImage,
        width: 3024,
        height: 4032,
        alt: "ThriftShopper app splash screen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: homepageTitle,
    description: homepageDescription,
    images: [ogImage],
  },
}

export default function HomePage() {
  return <HomePageClient />
}
