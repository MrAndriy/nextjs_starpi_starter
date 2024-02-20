import { fetchDocs } from '@/app/[lang]/_api/fetchDocs'
import BlogList from '@/components/Blog/blog-list'
import PageHeader from '@/components/PageHeader'
import { Payload } from '@/types'
import { Article } from '@/types/Article'

async function fetchPostsByCategory({ page, limit, filter, lang }: { page: number; limit: number; filter: string; lang: string }) {
  const skip = (page - 1) * limit
  const path = `/articles`
  const urlParamsObject = {
    sort: { createdAt: 'desc' },
    locale: lang,
    filters: {
      category: {
        slug: filter,
      },
    },
    populate: {
      cover: { fields: ['url'] },
      category: {
        populate: '*',
      },
      authorsBio: {
        populate: '*',
      },
    },
    pagination: {
      start: skip,
      limit: limit,
    },
  }
  const responseData = await fetchDocs<Payload<Article[]>>({ path, urlParamsObject })
  return responseData as Payload<Article[]>
}

export default async function CategoryRoute({
  params,
  searchParams,
}: {
  params: { category: string; lang: string }
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  const page = typeof searchParams?.page === 'string' ? Number(searchParams.page) : 0
  const limit = typeof searchParams?.limit === 'string' ? Number(searchParams.limit) : 10
  const filter = params.category
  const { data, meta } = await fetchPostsByCategory({ filter, lang: params.lang, page, limit })

  //TODO: CREATE A COMPONENT FOR THIS
  if (data.length === 0) return <div>Not Posts In this category</div>

  const { name, description } = (data && data[0]?.attributes?.category?.data?.attributes) || {}

  return (
    <div>
      <PageHeader heading={name as string} text={description} />
      <BlogList data={data} meta={meta} page={page} limit={limit} />
    </div>
  )
}
