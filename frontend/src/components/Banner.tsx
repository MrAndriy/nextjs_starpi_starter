import Link from 'next/link'

import { fetchBanner } from '@/app/[lang]/_api/fetchGlobals'
import ShouldRender from '@/components/ShouldRender'
import { cn } from '@/lib/utils'

function colors(type: string) {
  switch (type) {
    case 'info':
      return 'bg-violet-400'
    case 'warning':
      return 'bg-yellow-500'
    case 'alert':
      return 'bg-pink-500'
    default:
      return 'bg-gray-900'
  }
}

export default async function Banner({ lang }: { lang: string }) {
  const {
    data: {
      attributes: { notificationBanner },
    },
  } = await fetchBanner({ lang })
  if (!notificationBanner || !notificationBanner.show) return null

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 sm:flex sm:justify-center sm:px-6 sm:pb-5 lg:px-8">
      <div className={cn('pointer-events-auto flex items-center justify-between gap-x-6 py-2.5 px-6 sm:rounded-xl sm:py-3 sm:pr-3.5 sm:pl-4', colors(notificationBanner.type))}>
        <p className="text-sm leading-6 text-white">
          <ShouldRender if={notificationBanner.link}>
            <Link href={notificationBanner.link?.url as string} target={notificationBanner.link?.newTab ? '_blank' : '_self'}>
              <strong className="font-semibold">{notificationBanner.heading}</strong> {notificationBanner.text}&nbsp;
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </ShouldRender>
          <ShouldRender if={!notificationBanner.link}>
            <strong className="font-semibold">{notificationBanner.heading}</strong> {notificationBanner.text}&nbsp;
          </ShouldRender>
        </p>
      </div>
    </div>
  )
}
