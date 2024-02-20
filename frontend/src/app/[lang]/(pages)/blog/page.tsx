import { fetchDocs } from '@/app/[lang]/_api/fetchDocs'
import Blog from '@/components/Blog/blog-list'
import PageHeader from '@/components/PageHeader'
import { Payload } from '@/types'
import { Article } from '@/types/Article'

// Force this page to be dynamic so that Next.js does not cache it
// See the note in '../[slug]/page.tsx' about this
export const dynamic = 'force-dynamic'

const getBlogData = async ({ page, limit, lang }: { page: number; limit: number; lang: string }) => {
  const skip = (page - 1) * limit

  const urlParamsObject = {
    sort: { createdAt: 'desc' },
    locale: lang,
    populate: {
      cover: { fields: ['url'] },
      category: { populate: '*' },
      authorsBio: {
        populate: '*',
      },
    },
    pagination: {
      start: skip,
      limit: limit,
    },
  }
  const res = await fetchDocs<Payload<Article[]>>({
    path: '/articles',
    urlParamsObject,
  })

  return res
}

export default async function Profile({ params, searchParams }: { params: { lang: string }; searchParams?: { [key: string]: string | string[] | undefined } }) {
  const page = typeof searchParams?.page === 'string' ? Number(searchParams.page) : 0
  const limit = typeof searchParams?.limit === 'string' ? Number(searchParams.limit) : 10
  // const search = typeof searchParams?.search === 'string' ? searchParams.search : undefined // TODO: implement search
  const { data, meta } = await getBlogData({ page, limit, lang: params.lang })

  return (
    <div>
      <PageHeader heading="Our Blog" text="Checkout Something Cool" />
      <Blog data={data} meta={meta} page={page} limit={limit} />
    </div>
  )
}
