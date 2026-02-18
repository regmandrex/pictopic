import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { generateMetadata as genMeta } from '@/lib/seo'
import { generateBreadcrumbJSONLD } from '@/lib/seo'
import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = genMeta({
  title: 'Similar Image Search - Find Visually Similar Images',
  description: 'Discover how to find visually similar images using similar image search tools. Find inspiration, alternatives, and related visual content.',
  keywords: ['similar image search', 'pictopic search', 'visual search', 'find similar images'],
  canonical: '/similar-image-search',
})

export default function SimilarImageSearchPage() {
  const breadcrumbSchema = generateBreadcrumbJSONLD([
    { name: 'Home', url: 'https://pictopicsearch.com' },
    { name: 'Similar Image Search', url: 'https://pictopicsearch.com/similar-image-search' },
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
          <span>Similar Image Search</span>
        </nav>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Similar Image Search
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Find visually similar images, discover design inspiration, and locate alternative versions of images using similar image search technology.
          </p>

          <div className="prose prose-lg dark:prose-invert mb-12">
            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4">What is Similar Image Search?</h2>
              <p className="mb-4">
                Similar image search helps you find images that are visually similar to your query image. Unlike exact matches, similar image search uses AI to identify images with similar colors, compositions, subjects, or styles.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4">Use Cases</h2>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Finding design inspiration and alternatives</li>
                <li>Discovering variations of the same image</li>
                <li>Locating images in different styles or formats</li>
                <li>Finding stock photo alternatives</li>
              </ul>
            </section>
          </div>

          <div className="bg-muted p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold mb-2">Try Similar Image Search</h3>
            <p className="mb-4">Use our tool to find visually similar images across multiple providers.</p>
            <Link href="/tools/similar-image-search-links">
              <Button size="lg">
                Use Similar Image Search Tool
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
