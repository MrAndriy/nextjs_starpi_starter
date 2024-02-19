import { Footer } from './Footer'
import { Media } from './Media'
import { Navbar } from './Navbar'
import { NotificationBanner } from './NotificationBanner'
import { Seo } from './Seo'

export type Payload<T> = {
  data: T
  meta: {
    pagination?: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

export type Page = {
  id: number
  attributes: {
    createdAt: Date | string
    updatedAt: Date | string
    publishedAt?: Date | string
    shortName?: string
    contentSections?: any
    slug?: string
    heading?: string
    description?: string
    seo?: Seo
    locale: string
    localizations?: { data: Page[] }
  }
}

export type Metadata = {
  metaTitle: string
  metaDescription: string
}

export type GlobalGeneric<K extends string, T> = {
  id: number
  attributes: {
    createdAt: Date
    updatedAt: Date
    locale: string
  } & { [P in K]: T }
}

export type Global = {
  id: number
  attributes: {
    createdAt: Date
    updatedAt: Date
    publishedAt?: Date
    metadata?: Metadata
    favicon: { data: Media }
    notificationBanner?: NotificationBanner
    navbar?: Navbar
    footer?: Footer
    locale: string
    localizations?: { data: Global[] }
  }
}
