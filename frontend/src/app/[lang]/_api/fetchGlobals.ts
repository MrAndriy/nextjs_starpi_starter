import type { Global, GlobalGeneric, Payload } from '@/types'
import { Navbar } from '@/types/Navbar'

import { fetchDocs } from './fetchDocs'

export const fetchHeader = async ({ lang }: { lang: string }): Promise<Payload<GlobalGeneric<'navbar', Navbar>>> => {
  const path = `/global`
  const urlParamsObject = { populate: ['navbar.links', 'navbar.button', 'navbar.navbarLogo.logoImg'], locale: lang }
  const navbar = await fetchDocs<Payload<GlobalGeneric<'navbar', Navbar>>>({ path, urlParamsObject })
  return navbar
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
