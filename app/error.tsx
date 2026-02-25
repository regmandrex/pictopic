'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="container py-20">
      <div className="max-w-xl mx-auto text-center">
        <h1 className="text-2xl font-bold mb-2">Something went wrong</h1>
        <p className="text-muted-foreground mb-6">
          We couldn’t load this page. Please try again or go back home.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button onClick={reset}>Try again</Button>
          <Link href="/">
            <Button variant="outline">Home</Button>
          </Link>
          <Link href="/blog">
            <Button variant="outline">Blog</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
