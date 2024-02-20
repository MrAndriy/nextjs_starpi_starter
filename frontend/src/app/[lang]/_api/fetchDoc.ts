import qs from 'qs'

import { env } from '@/env'

import { getStrapiURL } from './shared'

export const fetchDoc = async <T>(args: { path: string; urlParamsObject?: { locale: string; [key: string]: any }; options?: {}; draft?: boolean }): Promise<T | null> => {
  const { path, urlParamsObject, options, draft } = args

  try {
    // Merge default and user options
    const mergedOptions: RequestInit = {
      next: {
        // revalidate: 60, //TODO: implement revalidate?
        tags: [`${path}_${urlParamsObject!.filters.slug}`],
      },
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${env.STRAPI_API_TOKEN}`,
      },
      ...options,
    }

    // Build request URL
    const queryString = qs.stringify({ ...urlParamsObject, locale: urlParamsObject?.locale === 'ua' ? 'uk' : urlParamsObject?.locale })
    const requestUrl = `${getStrapiURL(`/api${path}${queryString ? `?${queryString}` : ''}`)}`

    // Trigger API call
    const data = await fetch(requestUrl, mergedOptions)
    const response = await data.json()
    const attributes: T = response?.data[0]?.attributes ?? null
    return attributes
  } catch (error) {
    console.error(error)
    throw new Error(`Please check if your server is running and you set all the required tokens.`)
  }
}
