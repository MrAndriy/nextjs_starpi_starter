import { env } from '@/env'

export const API_URL = env.STRAPI_API_URL

export function getStrapiURL(path = '') {
  return `${env.STRAPI_API_URL || 'http://localhost:1337'}${path}`
}

export const token = env.STRAPI_API_TOKEN
