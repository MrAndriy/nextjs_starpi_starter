import { Article, Article_Plain } from './Article'
import { Media } from './Media'

export type Author = {
  id: number
  attributes: {
    createdAt: Date
    updatedAt: Date
    publishedAt?: Date
    name?: string
    avatar?: { data: Media }
    email?: string
    articles: { data: Article[] }
  }
}
export type Author_Plain = {
  id: number
  createdAt: Date
  updatedAt: Date
  publishedAt?: Date
  name?: string
  avatar?: Media
  email?: string
  articles: Article_Plain[]
}

export type Author_NoRelations = {
  id: number
  createdAt: Date
  updatedAt: Date
  publishedAt?: Date
  name?: string
  avatar?: number
  email?: string
  articles: number[]
}
