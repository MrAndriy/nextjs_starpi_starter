export enum Type {
  Primary = 'primary',
  Secondary = 'secondary',
}

export type ButtonLink = {
  url?: string
  newTab?: boolean
  text?: string
  type?: Type
}
export type ButtonLink_Plain = {
  url?: string
  newTab?: boolean
  text?: string
  type?: Type
}

export type ButtonLink_NoRelations = {
  url?: string
  newTab?: boolean
  text?: string
  type?: Type
}
