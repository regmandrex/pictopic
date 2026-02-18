import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { generateMetadata as genMeta } from '@/lib/seo'
import { generateBreadcrumbJSONLD } from '@/lib/seo'
import type { Metadata } from 'next'
import { Search, ArrowRight } from 'lucide-react'

export const metadata: Metadata = genMeta({
  title: 'Pictopic Search - Complete Guide to Image Search',
  description: 'Learn everything about pictopic search - how to find similar images, discover sources, and locate higher-resolution versions. Your complete guide to reverse image search.',
  keywords: ['pictopic search', 'picto pic search', 'pictopic image search', 'reverse image search guide'],
  canonical: '/pictopic-search',
})

const breadcrumbs = [
  { name: 'Home', url: 'https://pictopicsearch.com' },
  { name: 'Pictopic Search', url: 'https://pictopicsearch.com/pictopic-search' },
]

export default function PictopicSearchPage() {
  const breadcrumbSchema = generateBreadcrumbJSONLD(breadcrumbs)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="container py-12">
        {/* Breadcrumbs */}
        <nav className="mb-8 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground">Home</Link>
          <span className="mx-2">/</span>
          <span>Pictopic Search</span>
        </nav>

        {/* Hero */}
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Pictopic Search: Your Complete Guide
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Pictopic search is a powerful way to find images, discover their sources, and locate higher-resolution versions. Whether you&apos;re looking for similar images, tracking down image origins, or finding better quality versions, pictopic search tools can help.
          </p>
          <Link href="/tools/reverse-image-search-links">
            <Button size="lg">
              Start Pictopic Search Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">What is Pictopic Search?</h2>
            <p className="mb-4">
              Pictopic search, also known as reverse image search or visual search, allows you to search the web using an image instead of text. By uploading an image or providing an image URL, you can find:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Similar or identical images across the web</li>
              <li>The original source and creator of an image</li>
              <li>Higher resolution or better quality versions</li>
              <li>Websites where the image appears</li>
              <li>Related images and visual content</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">How Pictopic Search Works</h2>
            <p className="mb-4">
              Pictopic search engines use advanced computer vision and machine learning algorithms to analyze the visual features of your image. They then compare these features against billions of images in their databases to find matches and similar content.
            </p>
            <p className="mb-4">
              The process typically involves:
            </p>
            <ol className="list-decimal pl-6 mb-4 space-y-2">
              <li>Uploading an image or providing an image URL</li>
              <li>The search engine analyzes visual features (colors, shapes, patterns, objects)</li>
              <li>Comparison against indexed images</li>
              <li>Returning results ranked by similarity</li>
            </ol>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Popular Pictopic Search Providers</h2>
            <p className="mb-4">
              Several major search engines and platforms offer pictopic search capabilities:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <Card>
                <CardHeader>
                  <CardTitle>Google Images</CardTitle>
                  <CardDescription>Largest image database with powerful reverse image search</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="/providers/google">
                    <Button variant="outline" size="sm">Learn More →</Button>
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Bing Visual Search</CardTitle>
                  <CardDescription>Microsoft&apos;s visual search with reverse image lookup</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="/providers/bing">
                    <Button variant="outline" size="sm">Learn More →</Button>
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Yandex Images</CardTitle>
                  <CardDescription>Excellent image matching, especially for faces</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="/providers/yandex">
                    <Button variant="outline" size="sm">Learn More →</Button>
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>TinEye</CardTitle>
                  <CardDescription>Specialized reverse image search for finding sources</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="/providers/tineye">
                    <Button variant="outline" size="sm">Learn More →</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
            <Link href="/providers">
              <Button variant="outline">Compare All Providers →</Button>
            </Link>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Common Use Cases for Pictopic Search</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Find Image Sources</CardTitle>
                  <CardDescription>Discover where images originally came from</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="/use-cases/find-image-origin">
                    <Button variant="link" className="p-0">Learn How →</Button>
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Find Higher Resolution</CardTitle>
                  <CardDescription>Locate better quality versions of images</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="/use-cases/find-higher-resolution">
                    <Button variant="link" className="p-0">Learn How →</Button>
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Verify Authenticity</CardTitle>
                  <CardDescription>Check if images are authentic or manipulated</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="/use-cases/verify-image-authenticity">
                    <Button variant="link" className="p-0">Learn How →</Button>
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Check Copyright</CardTitle>
                  <CardDescription>Find unauthorized use of your images</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="/use-cases/check-copyright-violations">
                    <Button variant="link" className="p-0">Learn How →</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Getting Started with Pictopic Search</h2>
            <p className="mb-4">
              Ready to start using pictopic search? Our free tools make it easy to search across multiple providers:
            </p>
            <div className="bg-muted p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-2">Quick Start Guide</h3>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Visit our <Link href="/tools/reverse-image-search-links" className="text-primary hover:underline">Reverse Image Search Tool</Link></li>
                <li>Paste an image URL or upload an image</li>
                <li>Select your preferred provider(s)</li>
                <li>Click to open the search in a new tab</li>
              </ol>
            </div>
            <Link href="/tools">
              <Button size="lg">
                Explore All Tools
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">What is pictopic search?</h3>
                <p className="text-muted-foreground">
                  Pictopic search is a method of searching the web using an image instead of text. It helps you find similar images, discover sources, and locate higher-resolution versions.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Is pictopic search free?</h3>
                <p className="text-muted-foreground">
                  Yes, most pictopic search providers offer free access to their reverse image search tools. Some advanced features may require accounts or subscriptions.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Do you store my images?</h3>
                <p className="text-muted-foreground">
                  No, we don&apos;t store images. Our tools only help you generate links to official provider search pages. You upload directly to the providers.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Which provider is best for pictopic search?</h3>
                <p className="text-muted-foreground">
                  Different providers excel in different areas. Google Images has the largest database, Yandex is excellent for faces, and TinEye is great for finding sources. Check our <Link href="/providers" className="text-primary hover:underline">provider comparison</Link> to find the best fit for your needs.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto mt-12">
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Ready to Try Pictopic Search?</CardTitle>
              <CardDescription>Start finding images, sources, and higher-resolution versions today</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Link href="/tools/reverse-image-search-links">
                <Button size="lg">
                  Start Pictopic Search
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
