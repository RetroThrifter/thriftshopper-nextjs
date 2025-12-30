export function StructuredData() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thriftshopper.ai"

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ThriftShopper",
    url: siteUrl,
    logo: `${siteUrl}/thriftshopper-logo.png`,
    description: "AI-powered thrift marketplace connecting thoughtful buyers and sellers through discovery, not search.",
    email: "hello@thriftshopper.com",
    sameAs: [
      // Add social media URLs when available
      // "https://twitter.com/thriftshopper",
      // "https://instagram.com/thriftshopper",
    ],
    foundingDate: "2024",
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ThriftShopper",
    url: siteUrl,
    description: "Discover one-of-a-kind secondhand treasures where the magic isn't just what you find, it's the human connection behind it.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  )
}

