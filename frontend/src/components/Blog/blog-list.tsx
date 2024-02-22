'use client'
import Image from 'next/image'
import Link from 'next/link'

import { getStrapiMedia } from '@/app/[lang]/_api/shared'
import PaginationSection from '@/components/PaginationSection'
import { Show } from '@/components/Show'
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card'
import useQueryParams from '@/hooks/useQueryParams'
import { formatDate } from '@/lib/formatDateTime'
import { Article } from '@/types/Article'

export default function PostList({ data: articles, children, meta, limit, page }: { data: Article[]; limit: number; page: number; meta: any; children?: React.ReactNode }) {
  const { setQueryParams } = useQueryParams()

  return (
    <section className="container p-6 mx-auto space-y-6 sm:space-y-12">
      <div className="grid justify-center grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
        {articles.map((article) => {
          const imageUrl = getStrapiMedia(article.attributes.cover!.data?.attributes.url)

          const category = article.attributes.category!.data?.attributes
          const authorsBio = article.attributes.authorsBio!.data?.attributes
          const avatarUrl = getStrapiMedia(authorsBio?.avatar!.data.attributes.url)

          return (
            <CardContainer className="w-full h-full" key={article.id}>
              <CardBody className="h-full flex flex-col bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] rounded-xl p-6 border">
                <Show>
                  <Show.When isTrue={!!imageUrl}>
                    <CardItem translateZ="100" className="w-full">
                      <Image alt="presentation" width="240" height="240" className="object-cover w-full h-44 rounded-xl group-hover/card:shadow-xl" src={imageUrl as string} />
                    </CardItem>
                  </Show.When>
                </Show>

                <CardItem className="flex flex-col space-y-3 w-full relative h-full justify-between mt-4">
                  <CardItem translateZ="50" className="w-full relative text-2xl font-bold text-neutral-600 dark:text-white break-keep" as="h3">
                    {article.attributes.title}
                  </CardItem>

                  <CardItem translateZ="60" className="text-neutral-500 text-sm w-full dark:text-neutral-300 flex justify-between items-end" as="p">
                    {article.attributes.description}
                  </CardItem>

                  <CardItem translateZ={40} className="text-xs dark:text-gray-400 w-full">
                    <div className="text-neutral-500 text-sm mt-2 w-full dark:text-neutral-300 flex justify-between items-end">
                      <span className="text-xs dark:text-gray-400">{formatDate(article.attributes.publishedAt as string)}</span>
                      <div className="items-center flex flex-col">
                        {/* {avatarUrl && <Image alt="avatar" width="80" height="80" src={avatarUrl} className="rounded-full h-16 w-16 object-cover" />} */}
                        <span className="text-xs dark:text-gray-400">{authorsBio.name}</span>
                      </div>
                    </div>
                  </CardItem>
                </CardItem>
              </CardBody>
            </CardContainer>
          )
        })}
      </div>
      <PaginationSection totalPosts={meta.pagination?.total} postsPerPage={limit} currentPage={page} setCurrentPage={(page: number) => setQueryParams({ page })} />
      {children && children}
    </section>
  )
}
