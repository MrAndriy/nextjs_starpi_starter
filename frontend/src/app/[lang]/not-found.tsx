import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="dark:text-violet-500 text-center">
      <h2 className="text-3xl font-bold">Not Found</h2>
      <p className="text-xl ">Could not find requested resource</p>
      <Link href="/" className="dark:hover:text-violet-100 text-red-500">
        Return Home
      </Link>
    </div>
  )
}
