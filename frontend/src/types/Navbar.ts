import { ButtonLink, ButtonLink_NoRelations, ButtonLink_Plain } from './ButtonLink'
import { Link, Link_NoRelations, Link_Plain } from './Link'
import { Logo, Logo_NoRelations, Logo_Plain } from './Logo'

export type Navbar = {
  id: number
  links: Link[]
  button?: ButtonLink
  navbarLogo?: Logo
}
export type Navbar_Plain = {
  id: number
  links: Link_Plain[]
  button?: ButtonLink_Plain
  navbarLogo?: Logo_Plain
}

export type Navbar_NoRelations = {
  id: number
  links: Link_NoRelations[]
  button?: ButtonLink_NoRelations
  navbarLogo?: Logo_NoRelations
}
