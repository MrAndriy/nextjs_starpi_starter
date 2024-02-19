import React from 'react'

import { fetchHeader } from '@/app/[lang]/_api/fetchGlobals'
import { getStrapiMedia } from '@/app/[lang]/_api/shared'

import NavbarWrapper from './Navbar'

async function Navbar({ lang }: { lang: string }) {
  const data = await fetchHeader({ lang })
  const { navbar } = data.data.attributes
  const navbarLogoUrl = getStrapiMedia(navbar.navbarLogo!.logoImg.data.attributes.url)

  return <NavbarWrapper links={navbar!.links} logoUrl={navbarLogoUrl} logoText={navbar!.navbarLogo!.logoText} />
}

export default Navbar
