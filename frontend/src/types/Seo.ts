import { Media } from './Media'

export type Seo = {
  metaTitle: string
  metaDescription: string
  shareImage?: { data: Media }
}
export type Seo_Plain = {
  metaTitle: string
  metaDescription: string
  shareImage?: Media
}

export type Seo_NoRelations = {
  metaTitle: string
  metaDescription: string
  shareImage?: number
}
