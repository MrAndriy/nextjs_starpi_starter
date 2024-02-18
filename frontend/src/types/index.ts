import { Media } from './Media'
import { Navbar } from './Navbar'
import { NotificationBanner } from './NotificationBanner'

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
    createdAt: Date
    updatedAt: Date
    publishedAt?: Date
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

export type Seo = {
  metaTitle: string
  metaDescription: string
  shareImage?: { data: Media }
}

export type Metadata = {
  metaTitle: string
  metaDescription: string
}

export type Link = {
  url: string
  newTab?: boolean
  text: string
}

export enum ButtonLinkType {
  Primary = 'primary',
  Secondary = 'secondary',
}

export type ButtonLink = {
  url?: string
  newTab?: boolean
  text?: string
  type?: ButtonLinkType
}

export type Logo = {
  logoImg: { data: Media }
  logoText?: string
}

export enum Social {
  Youtube = 'YOUTUBE',
  Twitter = 'TWITTER',
  Discord = 'DISCORD',
  Website = 'WEBSITE',
}

export type SocialLink = {
  url: string
  newTab?: boolean
  text: string
  social?: Social
}

export interface Author {
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

export interface Article {
  id: number
  attributes: {
    createdAt: Date
    updatedAt: Date
    publishedAt?: Date
    title?: string
    description: string
    slug?: string
    cover?: { data: Media }
    category?: { data: Category }
    blocks?: any
    authorsBio?: { data: Author }
    seo?: Seo
  }
}

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

export type Footer = {
  footerLogo?: Logo
  menuLinks: Link[]
  legalLinks: Link[]
  socialLinks: SocialLink[]
  categories: { data: Category[] }
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
