import { Media } from './Media'

export type Logo = {
  logoImg: { data: Media }
  logoText?: string
}
export type Logo_Plain = {
  logoImg: Media
  logoText?: string
}

export type Logo_NoRelations = {
  logoImg: number
  logoText?: string
}
