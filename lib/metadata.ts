import { Metadata } from "next"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thriftshopper.ai"

export function createMetadata({
  title,
  description,
  path = "",
  image,
  type = "website",
}: {
  title: string
  description: string
  path?: string
  image?: string
  type?: "website" | "article"
}): Metadata {
  const url = `${siteUrl}${path}`
  const ogImage = image || `${siteUrl}/og-image.jpg`

  return {
    title,
    description,
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: "ThriftShopper",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  }
}

