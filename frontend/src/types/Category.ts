import { Article, Article_Plain } from './Article'

export type Category = {
  id: number
  attributes: {
    createdAt: Date
    updatedAt: Date
    publishedAt?: Date
    name?: string
    slug?: string
    articles: { data: Article[] }
    description?: string
  }
}
export type Category_Plain = {
  id: number
  createdAt: Date
  updatedAt: Date
  publishedAt?: Date
  name?: string
  slug?: string
  articles: Article_Plain[]
  description?: string
}

export type Category_NoRelations = {
  id: number
  createdAt: Date
  updatedAt: Date
  publishedAt?: Date
  name?: string
  slug?: string
  articles: number[]
  description?: string
}
