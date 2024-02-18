import type { Metadata } from 'next'

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  siteName: 'E-Commerce Template',
  title: 'E-Commerce Template',
  description: 'An open-source e-commerce store built with Strapi and Next.js.',
  images: [
    {
      url: 'https://change-me/images/og-image.jpg',
    },
  ],
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
