import { Link, Link_NoRelations, Link_Plain } from './Link'

export enum Type {
  Alert = 'alert',
  Info = 'info',
  Warning = 'warning',
}

export type NotificationBanner = {
  id: number
  type: Type
  heading: string
  text: string
  show?: boolean
  link?: Link
}
export type NotificationBanner_Plain = {
  type: Type
  heading: string
  text: string
  show?: boolean
  link?: Link_Plain
}

export type NotificationBanner_NoRelations = {
  type: Type
  heading: string
  text: string
  show?: boolean
  link?: Link_NoRelations
}
