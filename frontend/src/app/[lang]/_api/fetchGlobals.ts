import type { Global, Payload } from '@/types'

import { fetchDocs } from './fetchDocs'

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
