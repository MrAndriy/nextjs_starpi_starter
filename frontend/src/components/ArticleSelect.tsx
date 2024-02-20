import Link from 'next/link'

import ShouldRender from '@/components/ShouldRender'
import { Article } from '@/types/Article'
import { Category } from '@/types/Category'

function selectedFilter(current: string, selected: string) {
  return current === selected
    ? 'px-3 py-1 rounded-lg hover:underline dark:bg-violet-700 dark:text-gray-100'
    : 'px-3 py-1 rounded-lg hover:underline dark:bg-violet-400 dark:text-gray-900'
}

export default function ArticleSelect({
  categories,
  articles,
  params,
}: {
  categories: Category[]
  articles: Article[]
  params: {
    slug: string
    category: string
  }
}) {
  return (
    <div className="p-4 rounded-lg dark:bg-gray-900 min-h-[365px] relative">
      <h4 className="text-xl font-semibold">Browse By Category</h4>

      <div>
        <div className="flex flex-wrap py-6 space-x-2 dark:border-gray-400">
          <ShouldRender if={categories.length}>
            {categories.map((category: Category) => {
              return (
                <Link key={category.attributes.slug} href={`/blog/${category.attributes.slug}`} className={selectedFilter(category.attributes.slug as string, params.category)}>
                  #{category.attributes.name}
                </Link>
              )
            })}
          </ShouldRender>
          <Link href={'/blog'} className={selectedFilter('', 'filter')}>
            #all
          </Link>
        </div>

        <div className="space-y-2">
          <h4 className="text-lg font-semibold">Other Posts You May Like</h4>
          <ul className="ml-4 space-y-1 list-disc">
            <ShouldRender if={articles.length}>
              {articles.map((article) => (
                <li key={article.attributes.slug}>
                  <Link
                    rel="noopener noreferrer"
                    href={`/blog/${params.category}/${article.attributes.slug}`}
                    className={`${params.slug === article.attributes.slug && 'text-violet-400'}  hover:underline hover:text-violet-400 transition-colors duration-200`}
                  >
                    {article.attributes.title}
                  </Link>
                </li>
              ))}
            </ShouldRender>
          </ul>
        </div>
      </div>
    </div>
  )
}
