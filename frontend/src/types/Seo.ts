import { Media } from './Media'

export type Seo = {
  id: number
  metaTitle: string
  metaDescription: string
  metaImage?: { data: Media | null }
  keywords?: string
  structuredData?: any
}
export type Seo_Plain = {
  id: number
  metaTitle: string
  metaDescription: string
  metaImage?: Media
  keywords?: string
  structuredData?: any
}

export type Seo_NoRelations = {
  id: number
  metaTitle: string
  metaDescription: string
  metaImage?: number
  keywords?: string
  structuredData?: any
}
