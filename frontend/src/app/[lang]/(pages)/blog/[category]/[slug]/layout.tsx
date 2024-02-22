import { PropsWithChildren } from 'react'

import { fetchDocs } from '@/app/[lang]/_api/fetchDocs'
import ArticleSelect from '@/components/ArticleSelect'
import { Payload } from '@/types'
import { Article } from '@/types/Article'
import { Category } from '@/types/Category'

async function fetchSideMenuData({ filter, lang }: { filter: string; lang: string }) {
  try {
    const categoriesResponse = await fetchDocs<Payload<Category[]>>({ path: '/categories' })

    const articlesResponse = await fetchDocs<Payload<Article[]>>({
      path: '/articles',
      urlParamsObject: filter
        ? {
            filters: {
              category: {
                name: filter,
              },
            },
            locale: lang,
          }
        : {
            locale: lang,
          },
    })

    return {
      articles: articlesResponse.data,
      categories: categoriesResponse.data,
    }
  } catch (error) {
    console.error(error)
  }
}

type Data = {
  categories: Category[]
  articles: Article[]
}

export default async function LayoutRoute({ params, children }: PropsWithChildren<{ params: { slug: string; lang: string; category: string } }>) {
  const { category, lang } = params
  const { categories = [], articles = [] } = (await fetchSideMenuData({ filter: category, lang })) as Data

  return (
    <section className="container p-8 mx-auto space-y-6 sm:space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 lg:gap-4">
        <div className="col-span-2">{children}</div>
        <aside>
          <ArticleSelect categories={categories} articles={articles} params={params} />
        </aside>
      </div>
    </section>
  )
}

export async function generateStaticParams() {
  const { data } = await fetchDocs<Payload<Article[]>>({
    path: '/articles',
    urlParamsObject: {
      populate: ['category'],
    },
  })

  const articleResponse = data.map(({ attributes }) => {
    return { slug: attributes.slug, category: attributes.category?.data?.attributes?.slug }
  })

  return articleResponse
}
