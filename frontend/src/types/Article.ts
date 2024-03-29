import { Author, Author_Plain } from './Author'
import { Category, Category_Plain } from './Category'
import { Media } from './Media'
import { Seo, Seo_NoRelations, Seo_Plain } from './Seo'

export type Article = {
  id: number
  attributes: {
    createdAt: Date | string | undefined
    updatedAt: Date | string | undefined
    publishedAt?: Date | string | undefined
    title?: string
    description: string
    slug?: string
    cover?: { data: Media }
    category?: { data: Category }
    blocks?: any
    authorsBio?: { data: Author }
    seo?: Seo
    locale: string
    localizations?: Article[]
  }
}
export interface Article_Plain {
  id: number
  createdAt: Date | string
  updatedAt: Date | string
  publishedAt?: Date | string
  title?: string
  description: string
  slug?: string
  cover?: Media
  category?: Category_Plain
  blocks?: any
  authorsBio?: Author_Plain
  seo?: Seo_Plain
  locale: string
  localizations?: Article[]
}

export interface Article_NoRelations {
  id: number
  createdAt: Date | string
  updatedAt: Date | string
  publishedAt?: Date | string
  title?: string
  description: string
  slug?: string
  cover?: number
  category?: number
  blocks?: any
  authorsBio?: number
  seo?: Seo_NoRelations
  locale: string
  localizations?: Article[]
}
