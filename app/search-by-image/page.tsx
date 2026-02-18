import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { generateMetadata as genMeta } from '@/lib/seo'
import { generateBreadcrumbJSONLD } from '@/lib/seo'
import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = genMeta({
  title: 'Search by Image - Visual Search Made Easy',
  description: 'Learn how to search the web using images instead of text. Complete guide to search by image tools and techniques.',
  keywords: ['search by image', 'visual search', 'pictopic search', 'image search'],
  canonical: '/search-by-image',
})

export default function SearchByImagePage() {
  const breadcrumbSchema = generateBreadcrumbJSONLD([
    { name: 'Home', url: 'https://pictopicsearch.com' },
    { name: 'Search by Image', url: 'https://pictopicsearch.com/search-by-image' },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="container py-12">
        <nav className="mb-8 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground">Home</Link>
          <span className="mx-2">/</span>
          <span>Search by Image</span>
        </nav>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Search by Image
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Search the web using images instead of text. Find information, products, and related content using visual search technology.
          </p>

          <div className="prose prose-lg dark:prose-invert mb-12">
            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4">What is Search by Image?</h2>
              <p className="mb-4">
                Search by image is a visual search technology that allows you to use an image as your search query instead of typing keywords. The search engine analyzes the image and returns relevant results based on visual content.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4">Benefits of Visual Search</h2>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Find information when you don&apos;t know the right keywords</li>
                <li>Identify objects, places, and products</li>
                <li>Discover related visual content</li>
                <li>Get more accurate search results</li>
              </ul>
            </section>
          </div>

          <div className="bg-muted p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold mb-2">Try Search by Image</h3>
            <p className="mb-4">Start searching with images using our free tools.</p>
            <Link href="/tools/reverse-image-search-links">
              <Button size="lg">
                Start Visual Search
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
