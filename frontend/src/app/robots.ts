import { MetadataRoute } from 'next'

import { env } from '@/env'

export default function robots(): MetadataRoute.Robots {
  if (env.APP_ENV !== 'production') {
    return {
      rules: [
        {
          userAgent: '*',
          disallow: '/',
        },
      ],
    }
  }

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/', // Allow all pages
      },
      {
        userAgent: '*',
        disallow: '/*?page=', // Disallow all pages with query parameters page
      },
    ],
    sitemap: `${env.STRAPI_API_URL}/api/sitemap/index.xml`,
  }
}
