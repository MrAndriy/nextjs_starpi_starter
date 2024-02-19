import { Media } from './Media'

export type Metadata = {
  metaTitle: string
  metaDescription: string
  metaSiteName?: string
  metaImage: { data: Media }
}
export type Metadata_Plain = {
  metaTitle: string
  metaDescription: string
  metaSiteName?: string
  metaImage: Media
}

export type Metadata_NoRelations = {
  metaTitle: string
  metaDescription: string
  metaSiteName?: string
  metaImage: number
}
