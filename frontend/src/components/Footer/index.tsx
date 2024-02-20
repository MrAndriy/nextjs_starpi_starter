import Link from 'next/link'

import { fetchFooter } from '@/app/[lang]/_api/fetchGlobals'
import { getStrapiMedia } from '@/app/[lang]/_api/shared'
import Logo from '@/components/Logo'
import RenderSocialIcon from '@/components/RenderSocialIcon'
import ShouldRender from '@/components/ShouldRender'
import type { Footer } from '@/types/Footer'

import FooterLink from './FooterLink'

function CategoryLink({ attributes }: Footer['categories']['data'][0]) {
  return (
    <li className="flex">
      <Link href={`/blog/${attributes.slug}`} className="hover:dark:text-violet-400">
        {attributes.name}
      </Link>
    </li>
  )
}

export default async function Footer({ lang }: { lang: string }) {
  const data = await fetchFooter({ lang })
  const { footer } = data.data.attributes
  const logoUrl = getStrapiMedia(footer!.footerLogo!.logoImg.data.attributes.url)
  const logoText = footer!.footerLogo?.logoText
  const categoryLinks = footer.categories.data
  const legalLinks = footer.legalLinks
  const socialLinks = footer.socialLinks
  const menuLinks = footer.menuLinks

  return (
    <footer className="py-6 dark:bg-black dark:text-gray-50">
      <div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
        <div className="grid grid-cols-12">
          <div className="pb-6 col-span-full md:pb-0 md:col-span-6">
            <Logo src={logoUrl as string}>{logoText && <h2 className="text-2xl font-bold">{logoText}</h2>}</Logo>
          </div>

          <ShouldRender if={categoryLinks.length}>
            <div className="col-span-6 text-center md:text-left md:col-span-3">
              <p className="pb-1 text-lg font-medium">Categories</p>
              <ul>
                {categoryLinks.map((link) => (
                  <CategoryLink key={link.id} {...link} />
                ))}
              </ul>
            </div>
          </ShouldRender>

          <ShouldRender if={menuLinks.length}>
            <div className="col-span-6 text-center md:text-left md:col-span-3">
              <p className="pb-1 text-lg font-medium">Menu</p>
              <ul>
                {menuLinks.map((link) => (
                  <FooterLink key={link.id} {...link} />
                ))}
              </ul>
            </div>
          </ShouldRender>
        </div>
        <div className="grid justify-center pt-6 lg:justify-between">
          <ShouldRender if={legalLinks.length}>
            <div className="flex">
              <span className="mr-2">©{new Date().getFullYear()} All rights reserved</span>
              <div className="flex">
                {legalLinks.map((link) => (
                  <Link href={link.url} className="text-gray-400 hover:text-gray-300 mr-2" key={link.id}>
                    {link.text}
                  </Link>
                ))}
              </div>
            </div>
          </ShouldRender>

          <ShouldRender if={socialLinks.length}>
            <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
              {socialLinks.map((link) => {
                return (
                  <a
                    key={link.id}
                    rel="noopener noreferrer"
                    href={link.url}
                    title={link.text}
                    target={link.newTab ? '_blank' : '_self'}
                    className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-400 dark:text-gray-900"
                  >
                    <RenderSocialIcon social={link.social} />
                  </a>
                )
              })}
            </div>
          </ShouldRender>
        </div>
      </div>
    </footer>
  )
}
