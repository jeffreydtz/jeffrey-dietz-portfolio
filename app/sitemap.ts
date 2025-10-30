import { MetadataRoute } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://jeffreydietz.dev'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/experience',
    '/projects',
    '/skills',
    '/contact',
  ]

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
    alternates: {
      languages: {
        en: `${siteUrl}${route}`,
        es: `${siteUrl}/es${route}`,
      },
    },
  }))
}

