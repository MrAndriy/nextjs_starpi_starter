import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import React from 'react'

import { fetchDocs } from '@/app/[lang]/_api/fetchDocs'
import { generateMeta } from '@/lib/generateMeta'
import type { Page, Payload } from '@/types'

// This means that we can turn off Next.js data caching and instead rely solely on the Cloudflare CDN
// To do this, we include the `no-cache` header on the fetch requests used to get the data for this page
// But we also need to force Next.js to dynamically render this page on each request for preview mode to work
// See https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamic
export const dynamic = 'force-dynamic'

export default async function Page({ params: { slug = 'home', lang = 'en' } }) {
  const { isEnabled: isDraftMode } = draftMode()

  //TODO: past PAGE type
  let page: Page | null = null

  try {
    // page = await fetchDoc<Page>({
    //   collection: 'pages',
    //   slug,
    //   draft: isDraftMode,
    // })
  } catch (error) {
    // when deploying this template on Payload Cloud, this page needs to build before the APIs are live
    // so swallow the error here and simply render the page with fallback data where necessary
    // in production you may want to redirect to a 404  page or at least log the error somewhere
    // console.error(error)
  }

  // if no `home` page exists, render a static one using dummy content
  // you should delete this code once you have a home page in the CMS
  // this is really only useful for those who are demoing this template
  // if (!page && slug === 'home') {
  //   // page = staticHome
  // }

  //TODO: make static data for page if no data
  // if (!page) {
  //   return <NotFound />
  // }

  // page = await fetchDocs<Page>({
  //   path: '/pages',
  //   urlParamsObject: { filters: { slug }, locale: lang },
  // })

  // console.log('page', page)

  return (
    <div>
      <div>slug {slug}</div>
      <div>lang {lang}</div>
    </div>
  )
}

export async function generateStaticParams() {
  try {
    const pages = await fetchDocs<Payload<Page[]>>({
      path: '/pages',
      urlParamsObject: { locale: 'en' },
    })
    const staticPages = pages.data.map((p) => p.attributes.slug)
    console.log('staticPages', staticPages)
    return staticPages
  } catch (error) {
    return []
  }
}

export async function generateMetadata({ params: { slug = 'home' } }): Promise<Metadata> {
  const { isEnabled: isDraftMode } = draftMode()

  //TODO: get type of Page from compiled strapi
  let page: any | null = null

  try {
    //   page = await fetchDoc<Page>({
    //     collection: 'pages',
    //     slug,
    //     draft: isDraftMode,
    //   })
  } catch (error) {
    //   // don't throw an error if the fetch fails
    //   // this is so that we can render a static home page for the demo
    //   // when deploying this template on Payload Cloud, this page needs to build before the APIs are live
    //   // in production you may want to redirect to a 404  page or at least log the error somewhere
  }

  //TODO: make static data for page if no data
  // if (!page && slug === 'home') {
  //   page = staticHome
  // }

  return generateMeta({ doc: page })
}
