'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import type { Footer } from '@/types/Footer'

export default function FooterLink({ url, text }: Footer['menuLinks'][0]) {
  const path = usePathname()
  return (
    <li className="flex">
      <Link href={url} className={`hover:dark:text-violet-400 ${path === url && 'dark:text-violet-400 dark:border-violet-400'}}`}>
        {text}
      </Link>
    </li>
  )
}
