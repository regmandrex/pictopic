import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { HomeArticle } from '@/components/home-article'
import { HomeFAQ, HOME_FAQS } from '@/components/home-faq'
import { Search, Image as ImageIcon, Link2, FileSearch } from 'lucide-react'
import { generateMetadata as genMeta, generateFAQJSONLD } from '@/lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = genMeta({
  title: 'Pictopic Search - Find Images, Sources & Higher Resolution Versions',
  description: 'Pictopic search tools and guides to help you find similar images, sources, and higher-resolution versions. Start your reverse image search journey with PictoPicSearch.',
  keywords: ['pictopic search', 'picto pic search', 'reverse image search', 'similar image search', 'image source finder'],
})

export default function HomePage() {
  const faqSchema = generateFAQJSONLD(HOME_FAQS)
  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero Section */}
      <section className="container py-20 md:py-32">
        <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Pictopic Search Made Simple
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Find similar images, discover sources, and locate higher-resolution versions with our pictopic search tools and guides.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
            <Link href="/tools/reverse-image-search-links" className="flex-1">
              <Button size="lg" className="w-full">
                Start Pictopic Search
              </Button>
            </Link>
            <Link href="/pictopic-search" className="flex-1">
              <Button size="lg" variant="outline" className="w-full">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <Search className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Pictopic Search</CardTitle>
              <CardDescription>
                Find images using our comprehensive pictopic search tools
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/pictopic-search">
                <Button variant="link" className="p-0">
                  Explore →
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <ImageIcon className="h-8 w-8 text-primary mb-2" aria-hidden />
              <CardTitle>Reverse Image Search</CardTitle>
              <CardDescription>
                Discover sources and origins of any image
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/reverse-image-search">
                <Button variant="link" className="p-0">
                  Learn More →
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Link2 className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Image Source Finder</CardTitle>
              <CardDescription>
                Track down where images originally came from
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/image-source-finder">
                <Button variant="link" className="p-0">
                  Get Started →
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <FileSearch className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Similar Image Search</CardTitle>
              <CardDescription>
                Find visually similar images across the web
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/similar-image-search">
                <Button variant="link" className="p-0">
                  Try It →
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Long-form article: Pic to Pic Search (SEO) */}
      <HomeArticle />

      {/* FAQ Section: 20 long-form FAQs for SEO */}
      <HomeFAQ />

      {/* CTA Section */}
      <section className="container py-16">
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-0">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl md:text-3xl">
              Ready to Start Your Pictopic Search?
            </CardTitle>
            <CardDescription className="text-base">
              Access our free tools and start finding images, sources, and higher-resolution versions today.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Link href="/tools/reverse-image-search-links">
              <Button size="lg">
                Access Free Tools
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
