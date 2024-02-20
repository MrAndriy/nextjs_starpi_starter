import Image from 'next/image'

import { getStrapiMedia } from '@/app/[lang]/_api/shared'
import { PostRenderer } from '@/components/post-renderer'
import { formatDate } from '@/lib/formatDateTime'
import { Article } from '@/types/Article'

export default function Post(data: any) {
  const { title, description, publishedAt, cover, authorsBio, blocks } = data || {}
  const author = authorsBio?.data?.attributes
  const imageUrl = getStrapiMedia(cover?.data?.attributes?.url)
  const authorImgUrl = getStrapiMedia(authorsBio?.data?.attributes?.avatar?.data?.attributes?.url)

  return (
    <article className="space-y-8 dark:bg-black dark:text-gray-50">
      {imageUrl && <Image src={imageUrl} alt="article cover image" width={400} height={400} className="w-full h-96 object-cover rounded-lg" />}
      <div className="space-y-6">
        <h1 className="leading-tight text-5xl font-bold ">{title}</h1>
        <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-400">
          <div className="flex items-center md:space-x-2">
            {authorImgUrl && (
              <Image src={authorImgUrl} alt="article cover image" width={400} height={400} className="w-14 h-14 border rounded-full dark:bg-gray-500 dark:border-gray-700" />
            )}
            <p className="text-md dark:text-violet-400">
              {author && author.name} • {formatDate(publishedAt as string)}
            </p>
          </div>
        </div>
      </div>

      <div className="dark:text-gray-100">
        <p>{description}</p>

        {blocks?.map((section: any, index: number) => PostRenderer(section, index))}
      </div>
    </article>
  )
}
