import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { generateMetadata as genMeta } from '@/lib/seo'
import { WaitlistForm } from './waitlist-form'
import type { Metadata } from 'next'
import { Check } from 'lucide-react'

export const metadata: Metadata = genMeta({
  title: 'PictoPicSearch Pro - Coming Soon',
  description: 'Join the waitlist for PictoPicSearch Pro - advanced pictopic search features and tools.',
  keywords: ['pictopic search pro', 'premium image search', 'advanced reverse image search'],
  canonical: '/pro',
})

export default function ProPage() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            PictoPicSearch Pro
          </h1>
          <p className="text-xl text-muted-foreground">
            Advanced pictopic search features coming soon
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Join the Waitlist</CardTitle>
            <CardDescription>
              Be the first to know when Pro features launch
            </CardDescription>
          </CardHeader>
          <CardContent>
            <WaitlistForm />
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Pro Features (Coming Soon)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-600" />
                  <span>Bulk image search</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-600" />
                  <span>Advanced filters</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-600" />
                  <span>API access</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-600" />
                  <span>Priority support</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Free Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-600" />
                  <span>Reverse image search links</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-600" />
                  <span>Multiple provider support</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-600" />
                  <span>Image keyword generator</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-600" />
                  <span>Guides and tutorials</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Link href="/tools">
            <Button variant="outline">
              Try Free Tools →
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
