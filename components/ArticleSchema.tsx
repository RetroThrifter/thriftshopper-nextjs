const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thriftshopper.ai"

interface ArticleSchemaProps {
  title: string
  description: string
  date: string
  image?: string
  author?: string
  path: string
}

export function ArticleSchema({
  title,
  description,
  date,
  image,
  author = "ThriftShopper",
  path,
}: ArticleSchemaProps) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: image ? `${siteUrl}${image}` : `${siteUrl}/og-image.jpg`,
    datePublished: new Date(date).toISOString(),
    dateModified: new Date(date).toISOString(),
    author: {
      "@type": "Organization",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: "ThriftShopper",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/thriftshopper-logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}${path}`,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
    />
  )
}

