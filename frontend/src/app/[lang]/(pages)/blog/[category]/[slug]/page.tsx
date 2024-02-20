import React from 'react'

import { fetchDoc } from '@/app/[lang]/_api/fetchDoc'
import Post from '@/components/Blog/blog'
import { Article } from '@/types/Article'

async function getPostBySlug({ slug, lang }: { slug: string; lang: string }) {
  const path = `/articles`
  const urlParamsObject = {
    filters: { slug },
    locale: lang,
    populate: {
      cover: { fields: ['url'] },
      authorsBio: { populate: '*' },
      category: { fields: ['name'] },
      blocks: {
        populate: {
          __component: '*',
          files: '*',
          file: '*',
          url: '*',
          body: '*',
          title: '*',
          author: '*',
        },
      },
    },
  }
  const response = await fetchDoc<Article['attributes']>({ path, urlParamsObject })
  return response
}

async function Page({ params }: { params: { slug: string; lang: string } }) {
  const { slug, lang } = params
  const data = await getPostBySlug({ slug, lang })

  return <Post {...data} />
}

export default Page
