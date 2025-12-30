import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://thriftshopper.ai'

  // Static pages
  const routes = [
    '',
    '/for-buyers',
    '/for-sellers',
    '/concierge',
    '/join',
    '/about',
    '/blog',
    '/our-story',
    '/marketplace-focus',
    '/ai-environment',
    '/how-it-works',
    '/faq',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' || route === '/blog' ? 'weekly' : 'monthly' as const,
    priority: route === '' ? 1.0 : route === '/join' ? 0.9 : 0.7,
  }))

  return routes
}

