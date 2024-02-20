import { env } from '@/env'

export const API_URL = env.NEXT_PUBLIC_STRAPI_API_URL

export function getStrapiURL(path = '') {
  return `${env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'}${path}`
}

export function getStrapiMedia(url: string | null | undefined) {
  if (url == null) {
    return null
  }

  // Return the full URL if the media is hosted on an external provider
  if (url.startsWith('http') || url.startsWith('//')) {
    return url
  }

  // Otherwise prepend the URL path with the Strapi URL
  return `${getStrapiURL()}${url}`
}
