import type { Global, GlobalGeneric, Payload } from '@/types'
import { Footer } from '@/types/Footer'
import { Navbar } from '@/types/Navbar'
import { NotificationBanner } from '@/types/NotificationBanner'

import { fetchDocs } from './fetchDocs'

export const fetchHeader = async ({ lang }: { lang: string }): Promise<Payload<GlobalGeneric<'navbar', Navbar>>> => {
  const path = `/global`
  const urlParamsObject = { populate: ['navbar.links', 'navbar.button', 'navbar.navbarLogo.logoImg'], locale: lang }
  const navbar = await fetchDocs<Payload<GlobalGeneric<'navbar', Navbar>>>({ path, urlParamsObject })
  return navbar
}

export const fetchFooter = async ({ lang }: { lang: string }): Promise<Payload<GlobalGeneric<'footer', Footer>>> => {
  const path = `/global`
  const urlParamsObject = {
    populate: ['footer.footerLogo.logoImg', 'footer.menuLinks', 'footer.legalLinks', 'footer.socialLinks', 'footer.categories'],
    locale: lang,
  }
  const footer = await fetchDocs<Payload<GlobalGeneric<'footer', Footer>>>({ path, urlParamsObject })
  return footer
}

export const fetchBanner = async ({ lang }: { lang: string }): Promise<Payload<GlobalGeneric<'notificationBanner', NotificationBanner>>> => {
  const path = `/global`
  const urlParamsObject = { populate: ['notificationBanner.link'], locale: lang }
  const banner = await fetchDocs<Payload<GlobalGeneric<'notificationBanner', NotificationBanner>>>({ path, urlParamsObject })
  return banner
}

export const fetchGlobals = async (lang: string): Promise<Payload<Global>> => {
  const path = `/global`

  const urlParamsObject = {
    populate: [
      'metadata.shareImage',
      'favicon',
      'notificationBanner.link',
      'navbar.links',
      'navbar.navbarLogo.logoImg',
      'footer.footerLogo.logoImg',
      'footer.menuLinks',
      'footer.legalLinks',
      'footer.socialLinks',
      'footer.categories',
    ],
    locale: lang,
  }
  const globals = await fetchDocs<Payload<Global>>({ path, urlParamsObject })

  return globals
}
