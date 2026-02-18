import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { generateMetadata as genMeta } from '@/lib/seo'
import { generateBreadcrumbJSONLD } from '@/lib/seo'
import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = genMeta({
  title: 'Image Source Finder - Track Down Image Origins',
  description: 'Learn how to find the original source and creator of images using image source finder tools. Track down image origins and attribution.',
  keywords: ['image source finder', 'find image origin', 'image attribution', 'pictopic search'],
  canonical: '/image-source-finder',
})

export default function ImageSourceFinderPage() {
  const breadcrumbSchema = generateBreadcrumbJSONLD([
    { name: 'Home', url: 'https://pictopicsearch.com' },
    { name: 'Image Source Finder', url: 'https://pictopicsearch.com/image-source-finder' },
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
          <span>Image Source Finder</span>
        </nav>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Image Source Finder
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Track down the original source and creator of images. Find where images first appeared online and get proper attribution.
          </p>

          <div className="prose prose-lg dark:prose-invert mb-12">
            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4">Why Find Image Sources?</h2>
              <p className="mb-4">
                Finding the original source of an image is important for:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Proper attribution and crediting creators</li>
                <li>Understanding copyright and licensing</li>
                <li>Finding higher quality versions</li>
                <li>Verifying image authenticity</li>
                <li>Research and fact-checking</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4">How Image Source Finding Works</h2>
              <p className="mb-4">
                Image source finder tools use reverse image search technology to scan the web and identify where images first appeared. They analyze metadata, timestamps, and image databases to determine the original source.
              </p>
            </section>
          </div>

          <div className="bg-muted p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold mb-2">Find Image Sources Now</h3>
            <p className="mb-4">Use our tool to track down image origins across multiple search providers.</p>
            <Link href="/tools/image-source-finder-links">
              <Button size="lg">
                Use Image Source Finder Tool
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
