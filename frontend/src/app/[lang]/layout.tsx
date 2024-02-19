import './globals.css'

import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { PropsWithChildren, Suspense } from 'react'

import { fetchGlobals } from '@/app/[lang]/_api/fetchGlobals'
import { getStrapiURL } from '@/app/[lang]/_api/shared'
import Banner from '@/components/Banner'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { mergeOpenGraph } from '@/lib/mergeOpenGraph'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

export default async function RootLayout({ children, params: { lang = 'en' } }: PropsWithChildren & { params: { lang: string } }) {
  return (
    <html lang={lang} suppressHydrationWarning className="h-full">
      <body className={cn('relative h-full antialiased dark', inter.className)}>
        {/* TODO: wrap suspense callback loader */}
        <Navbar lang={lang} />

        <main className="dark:bg-black dark:text-gray-100 min-h-screen">{children}</main>

        {/* TODO: wrap suspense callback loader */}
        <Banner lang={lang} />

        {/* TODO: wrap suspense callback loader */}
        <Footer lang={lang} />
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
