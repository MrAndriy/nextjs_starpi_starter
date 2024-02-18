import { Media } from './Media'

export type Seo = {
  id: number
  metaTitle: string
  metaDescription: string
  shareImage?: { data: Media | null }
}
export type Seo_Plain = {
  id: number
  metaTitle: string
  metaDescription: string
  shareImage?: Media
}

export type Seo_NoRelations = {
  id: number
  metaTitle: string
  metaDescription: string
  shareImage?: number
}
