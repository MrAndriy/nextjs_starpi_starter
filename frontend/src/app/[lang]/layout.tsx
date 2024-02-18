import './globals.css'

import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { PropsWithChildren } from 'react'

import { fetchGlobals } from '@/app/[lang]/_api/fetchGlobals'
import { getStrapiURL } from '@/app/[lang]/_api/shared'
import Banner from '@/components/Banner'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { getStrapiMedia } from '@/lib/api-helpers'
import { mergeOpenGraph } from '@/lib/mergeOpenGraph'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

export default async function RootLayout({ children, params: { lang = 'en' } }: PropsWithChildren & { params: { lang: string } }) {
  const global = await fetchGlobals(lang)

  // TODO: CREATE A CUSTOM ERROR PAGE
  if (!global.data) return null
  const { notificationBanner, navbar, footer } = global.data.attributes
  const navbarLogoUrl = getStrapiMedia(navbar!.navbarLogo!.logoImg.data.attributes.url)
  const footerLogoUrl = getStrapiMedia(footer!.footerLogo!.logoImg.data.attributes.url)

  return (
    <html lang={lang} suppressHydrationWarning className="h-full">
      <body className={cn('relative h-full antialiased', inter.className)}>
        <Navbar links={navbar!.links} logoUrl={navbarLogoUrl} logoText={navbar!.navbarLogo!.logoText} />

        <main className="dark:bg-black dark:text-gray-100 min-h-screen">{children}</main>

        <Banner data={notificationBanner} />

        <Footer
          logoUrl={footerLogoUrl}
          logoText={footer!.footerLogo?.logoText}
          menuLinks={footer!.menuLinks}
          categoryLinks={footer!.categories.data}
          legalLinks={footer!.legalLinks}
          socialLinks={footer!.socialLinks}
        />
      </body>
    </html>
  )
}

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const meta = await fetchGlobals(params.lang)

  const { metadata, favicon } = meta.data?.attributes
  const { url } = favicon.data.attributes

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000/en'), //TODO: implement dynamic server url
    title: metadata?.metaTitle,
    description: metadata?.metaDescription,
    icons: {
      icon: [new URL(url, getStrapiURL())],
    },
    openGraph: mergeOpenGraph(),
  }
}
