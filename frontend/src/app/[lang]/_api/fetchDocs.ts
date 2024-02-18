import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'
import qs from 'qs'

import { getStrapiURL, token } from './shared'

export const fetchDocs = async <T>(args: { path: string; urlParamsObject?: {}; options?: {}; draft?: boolean }): Promise<T> => {
  const { path, urlParamsObject, options, draft } = args

  // //TODO: implement draft mode
  // let token: RequestCookie | undefined

  // if (draft) {
  //   const { cookies } = await import('next/headers')
  //   token = cookies().get()
  // }

  try {
    // Merge default and user options
    const mergedOptions: RequestInit = {
      next: {
        // revalidate: 60, //TODO: implement revalidate?
        // tags: [`${path}`],
      },
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      ...options,
    }

    // Build request URL
    const queryString = qs.stringify(urlParamsObject)
    const requestUrl = `${getStrapiURL(`/api${path}${queryString ? `?${queryString}` : ''}`)}`

    // Trigger API call
    const response = await fetch(requestUrl, mergedOptions)
    const data: T = await response.json()
    return data
  } catch (error) {
    console.error(error)
    throw new Error(`Please check if your server is running and you set all the required tokens.`)
  }
}
