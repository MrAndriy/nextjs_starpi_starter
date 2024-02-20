import { revalidateTag } from 'next/cache'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export async function GET(request: NextRequest): Promise<Response> {
  const path = request.nextUrl.searchParams.get('path')
  const slug = request.nextUrl.searchParams.get('slug')
  const secret = request.nextUrl.searchParams.get('secret')

  if (!secret || secret !== process.env.NEXT_PRIVATE_REVALIDATION_KEY || typeof path !== 'string' || typeof slug !== 'string') {
    // Do not indicate that the revalidation key is incorrect in the response
    // This will protect this API route from being exploited
    return new Response('Invalid request', { status: 400 })
  }

  if (typeof path === 'string' && typeof slug === 'string') {
    revalidateTag(`${path}_${slug}`)
    return NextResponse.json({ revalidated: true, now: Date.now() })
  }

  return NextResponse.json({ revalidated: false, now: Date.now() })
}
