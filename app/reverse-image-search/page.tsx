import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { generateMetadata as genMeta } from '@/lib/seo'
import { generateBreadcrumbJSONLD } from '@/lib/seo'
import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = genMeta({
  title: 'Reverse Image Search - Find Image Sources & Origins',
  description: 'Learn how to use reverse image search to find image sources, origins, and similar images. Complete guide to reverse image search tools and techniques.',
  keywords: ['reverse image search', 'pictopic search', 'image source finder', 'find image origin'],
  canonical: '/reverse-image-search',
})

export default function ReverseImageSearchPage() {
  const breadcrumbSchema = generateBreadcrumbJSONLD([
    { name: 'Home', url: 'https://pictopicsearch.com' },
    { name: 'Reverse Image Search', url: 'https://pictopicsearch.com/reverse-image-search' },
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
          <span>Reverse Image Search</span>
        </nav>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Reverse Image Search Guide
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Reverse image search allows you to find where images appear online, discover their sources, and locate similar or higher-quality versions. It&apos;s an essential tool for content creators, researchers, and anyone who works with images.
          </p>

          <div className="prose prose-lg dark:prose-invert mb-12">
            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4">What is Reverse Image Search?</h2>
              <p className="mb-4">
                Reverse image search is a technology that lets you search the web using an image instead of text. By uploading an image or providing an image URL, search engines analyze the visual content and return results showing where that image (or similar images) appears online.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4">How to Use Reverse Image Search</h2>
              <ol className="list-decimal pl-6 space-y-2 mb-4">
                <li>Choose an image you want to search</li>
                <li>Visit our <Link href="/tools/reverse-image-search-links" className="text-primary hover:underline">reverse image search tool</Link></li>
                <li>Paste the image URL or upload the image</li>
                <li>Select your preferred search provider</li>
                <li>Click to open the search results</li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4">Best Reverse Image Search Providers</h2>
              <p className="mb-4">
                Different providers offer different strengths:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Google Images:</strong> Largest database, great for general searches</li>
                <li><strong>Bing Visual Search:</strong> Good integration with Microsoft services</li>
                <li><strong>Yandex:</strong> Excellent for finding faces and people</li>
                <li><strong>TinEye:</strong> Specialized in finding image sources and metadata</li>
              </ul>
              <Link href="/providers">
                <Button variant="outline">Compare All Providers →</Button>
              </Link>
            </section>
          </div>

          <div className="bg-muted p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold mb-2">Ready to Start?</h3>
            <p className="mb-4">Try our free reverse image search tool to find image sources and similar images.</p>
            <Link href="/tools/reverse-image-search-links">
              <Button size="lg">
                Use Reverse Image Search Tool
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
