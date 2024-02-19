import type { Metadata } from 'next'

import { getStrapiMedia } from '@/app/[lang]/_api/shared'
import { Page } from '@/types'

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  siteName: 'E-Commerce Template', //TODO: add site name from globals
  title: 'E-Commerce Template',
  description: 'An open-source e-commerce store built with Strapi and Next.js.',
  images: [
    {
      url: 'https://change-me/images/og-image.jpg',
    },
  ],
}

const defaultSeo: Metadata = {
  title: 'E-Commerce Template',
  description: 'An open-source e-commerce store built with Strapi and Next.js.',
  openGraph: defaultOpenGraph,
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  const meta: Metadata['openGraph'] = {
    ...og,
  }

  og?.images && (meta.images = og.images)

  return meta
}

export const generateMeta = async (args: { doc: Page['attributes'] }): Promise<Metadata> => {
  const { doc } = args || {}

  const ogImage = typeof doc?.seo?.metaImage === 'object' && doc?.seo?.metaImage !== null && getStrapiMedia(doc.seo.metaImage.data?.attributes.url || null)

  const meta: Metadata = {
    openGraph: mergeOpenGraph({
      title: doc?.seo?.metaTitle || defaultSeo.openGraph?.title,
      description: doc?.seo?.metaDescription || defaultSeo.openGraph?.description,
      url: Array.isArray(doc?.slug) ? doc?.slug.join('/') : '/',
      images: ogImage
        ? [
            {
              url: ogImage,
            },
          ]
        : undefined,
    }),
  }

  doc?.seo?.metaTitle && (meta.title = doc?.seo?.metaTitle)
  doc?.seo?.metaDescription && (meta.description = doc?.seo?.metaDescription)
  doc?.seo?.keywords && (meta.keywords = doc?.seo?.keywords)

  return meta
}
