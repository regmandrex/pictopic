import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { generateMetadata as genMeta } from '@/lib/seo'
import { generateBreadcrumbJSONLD } from '@/lib/seo'
import type { Metadata } from 'next'
import { Search, Image as ImageIcon, Link2, FileText } from 'lucide-react'

export const metadata: Metadata = genMeta({
  title: 'Free Image Search Tools - Pictopic Search Tools',
  description: 'Access free pictopic search tools including reverse image search, similar image search, image source finder, and keyword generator.',
  keywords: ['pictopic search tools', 'reverse image search tools', 'free image search', 'image tools'],
  canonical: '/tools',
})

export default function ToolsPage() {
  const breadcrumbSchema = generateBreadcrumbJSONLD([
    { name: 'Home', url: 'https://pictopicsearch.com' },
    { name: 'Tools', url: 'https://pictopicsearch.com/tools' },
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
          <span>Tools</span>
        </nav>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Free Pictopic Search Tools
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Access our collection of free tools to help you find images, discover sources, and locate higher-resolution versions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Search className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Reverse Image Search Links</CardTitle>
                <CardDescription>
                  Generate safe links to official reverse image search providers. Paste an image URL and open searches across multiple platforms.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/tools/reverse-image-search-links">
                  <button className="text-primary hover:underline font-medium">
                    Use Tool →
                  </button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <ImageIcon className="h-10 w-10 text-primary mb-4" aria-hidden />
                <CardTitle>Similar Image Search Links</CardTitle>
                <CardDescription>
                  Find visually similar images across the web. Discover alternatives, variations, and related visual content.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/tools/similar-image-search-links">
                  <button className="text-primary hover:underline font-medium">
                    Use Tool →
                  </button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Link2 className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Image Source Finder Links</CardTitle>
                <CardDescription>
                  Track down the original source and creator of images. Find where images first appeared online.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/tools/image-source-finder-links">
                  <button className="text-primary hover:underline font-medium">
                    Use Tool →
                  </button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <FileText className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Image Keyword Generator</CardTitle>
                <CardDescription>
                  Generate search keywords from image descriptions. Helps create effective search terms for finding images.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/tools/image-keyword-generator">
                  <button className="text-primary hover:underline font-medium">
                    Use Tool →
                  </button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="bg-muted p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">How Our Tools Work</h2>
            <p className="text-muted-foreground mb-4">
              Our tools help you generate safe, properly encoded URLs to official image search providers. We don&apos;t store or process your images - we simply help you open searches on the official provider websites.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>No image storage or processing on our servers</li>
              <li>Direct links to official provider search pages</li>
              <li>Support for multiple search providers</li>
              <li>100% free to use</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
