import type { Category, Category_Plain } from './Category'
import type { Link, Link_NoRelations, Link_Plain } from './Link'
import type { Logo, Logo_NoRelations, Logo_Plain } from './Logo'
import type { SocialLink, SocialLink_NoRelations, SocialLink_Plain } from './SocialLink'

export interface Footer {
  footerLogo?: Logo
  menuLinks: Link[]
  legalLinks: Link[]
  socialLinks: SocialLink[]
  categories: { data: Category[] }
}
export interface Footer_Plain {
  footerLogo?: Logo_Plain
  menuLinks: Link_Plain[]
  legalLinks: Link_Plain[]
  socialLinks: SocialLink_Plain[]
  categories: Category_Plain[]
}

export interface Footer_NoRelations {
  footerLogo?: Logo_NoRelations
  menuLinks: Link_NoRelations[]
  legalLinks: Link_NoRelations[]
  socialLinks: SocialLink_NoRelations[]
  categories: number[]
}
