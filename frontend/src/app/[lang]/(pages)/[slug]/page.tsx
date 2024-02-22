import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import React from 'react'

import { fetchDoc } from '@/app/[lang]/_api/fetchDoc'
import { fetchDocs } from '@/app/[lang]/_api/fetchDocs'
import { staticHome } from '@/app/[lang]/_static/home'
import LangRedirect from '@/components/LangRedirect'
import { SectionRenderer } from '@/components/section-renderer'
import { generateMeta } from '@/lib/seo'
import type { Page, Payload } from '@/types'

// This means that we can turn off Next.js data caching and instead rely solely on the Cloudflare CDN
// To do this, we include the `no-cache` header on the fetch requests used to get the data for this page
// But we also need to force Next.js to dynamically render this page on each request for preview mode to work
// See https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamic
export const dynamic = 'force-dynamic'

export default async function Page({ params: { slug = 'home', lang = 'en' } }: { params: { slug: string; lang: string } }) {
  let page: Page['attributes'] | null = null

  try {
    page = await fetchDoc<Page['attributes']>({
      path: '/pages',

      urlParamsObject: {
        filters: { slug },
        locale: lang,
      },
    })
    if (!page && lang !== 'en') return <LangRedirect />
  } catch (error) {
    // when deploying this template, this page needs to build before the APIs are live
    // so swallow the error here and simply render the page with fallback data where necessary
    // in production you may want to redirect to a 404  page or at least log the error somewhere
    console.log('Missing or invalid credentials')
  }

  // if no `home` page exists, render a static one using dummy content
  // you should delete this code once you have a home page in the CMS
  // this is really only useful for those who are demoing this template
  if (!page && slug === 'home') {
    page = staticHome
  }

  if (!page) {
    notFound()
  }

  return page.contentSections.map((section: any, index: number) => SectionRenderer(section, index))
}

export async function generateStaticParams() {
  try {
    const pages = await fetchDocs<Payload<Page[]>>({
      path: '/pages',
      urlParamsObject: { locale: 'en', populate: null },
    })
    const staticPages = pages?.data.map((p) => ({
      slug: p.attributes.slug,
    }))
    return staticPages
  } catch (error) {
    return []
  }
}

export async function generateMetadata({ params: { slug = 'home', lang = 'en' } }: { params: { lang: string; slug: string } }): Promise<Metadata> {
  let page: Page['attributes'] | null = null

  try {
    page = await fetchDoc<Page['attributes']>({
      path: '/pages',
      urlParamsObject: {
        populate: ['seo', 'seo.metaImage'],
        filters: { slug: slug || 'home' },
        locale: lang,
      },
    })
  } catch (error) {
    // don't throw an error if the fetch fails
    // this is so that we can render a static home page for the demo
    // when deploying this template on Payload Cloud, this page needs to build before the APIs are live
    // in production you may want to redirect to a 404  page or at least log the error somewhere
  }

  //  make static data for page if no data
  if (!page && slug === 'home') {
    page = staticHome
  }

  return generateMeta({ doc: page as Page['attributes'] })
}
