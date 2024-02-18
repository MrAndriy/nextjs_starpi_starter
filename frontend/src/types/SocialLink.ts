export enum Social {
  Youtube = 'YOUTUBE',
  Twitter = 'TWITTER',
  Discord = 'DISCORD',
  Website = 'WEBSITE',
}

export type SocialLink = {
  id: number
  url: string
  newTab?: boolean
  text: string
  social?: Social
}
export type SocialLink_Plain = {
  id: number
  url: string
  newTab?: boolean
  text: string
  social?: Social
}

export type SocialLink_NoRelations = {
  id: number
  url: string
  newTab?: boolean
  text: string
  social?: Social
}
