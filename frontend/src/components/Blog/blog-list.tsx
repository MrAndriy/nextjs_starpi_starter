'use client'
import Image from 'next/image'
import Link from 'next/link'

import { getStrapiMedia } from '@/app/[lang]/_api/shared'
import PaginationSection from '@/components/PaginationSection'
import useQueryParams from '@/hooks/useQueryParams'
import { formatDate } from '@/lib/formatDateTime'
import { Article } from '@/types/Article'

export default function PostList({ data: articles, children, meta, limit, page }: { data: Article[]; limit: number; page: number; meta: any; children?: React.ReactNode }) {
  const { setQueryParams } = useQueryParams()

  return (
    <section className="container p-6 mx-auto space-y-6 sm:space-y-12">
      <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => {
          const imageUrl = getStrapiMedia(article.attributes.cover!.data?.attributes.url)

          const category = article.attributes.category!.data?.attributes
          const authorsBio = article.attributes.authorsBio!.data?.attributes

          const avatarUrl = getStrapiMedia(authorsBio?.avatar!.data.attributes.url)

          return (
            <Link
              href={`/blog/${category?.slug}/${article.attributes.slug}`}
              key={article.id}
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 lg:w-[300px] xl:min-w-[375px] rounded-2xl overflow-hidden shadow-lg"
            >
              {imageUrl && <Image alt="presentation" width="240" height="240" className="object-cover w-full h-44 " src={imageUrl} />}
              <div className="p-6 space-y-2 relative">
                {avatarUrl && <Image alt="avatar" width="80" height="80" src={avatarUrl} className="rounded-full h-16 w-16 object-cover absolute -top-8 right-4" />}

                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{article.attributes.title}</h3>

                <div className="flex justify-between items-center">
                  <span className="text-xs dark:text-gray-400">{formatDate(article.attributes.publishedAt as string)}</span>
                  {authorsBio && <span className="text-xs dark:text-gray-400">{authorsBio.name}</span>}
                </div>
                <p className="py-4">{article.attributes.description}</p>
              </div>
            </Link>
          )
        })}
      </div>
      <PaginationSection totalPosts={meta.pagination?.total} postsPerPage={limit} currentPage={page} setCurrentPage={(page: number) => setQueryParams({ page })} />
      {children && children}
    </section>
  )
}
