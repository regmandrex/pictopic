import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { generateMetadata as genMeta } from '@/lib/seo'
import { generateBreadcrumbJSONLD } from '@/lib/seo'
import { providers } from '@/lib/providers'
import type { Metadata } from 'next'
import { Check, X } from 'lucide-react'

export const metadata: Metadata = genMeta({
  title: 'Compare Reverse Image Search Providers - Best Pictopic Search Engines',
  description: 'Compare the best reverse image search providers including Google Images, Bing Visual Search, Yandex, TinEye, and Pinterest. Find the best pictopic search engine for your needs.',
  keywords: ['reverse image search providers', 'pictopic search engines', 'compare providers', 'best image search'],
  canonical: '/providers',
})

export default function ProvidersPage() {
  const breadcrumbSchema = generateBreadcrumbJSONLD([
    { name: 'Home', url: 'https://pictopicsearch.com' },
    { name: 'Providers', url: 'https://pictopicsearch.com/providers' },
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
          <span>Providers</span>
        </nav>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Compare Reverse Image Search Providers
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find the best pictopic search engine for your needs. Compare features, pros, and cons of popular reverse image search providers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {providers.map(provider => (
              <Card key={provider.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{provider.displayName}</CardTitle>
                  <CardDescription>{provider.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Pros:</h4>
                    <ul className="space-y-1">
                      {provider.pros.map((pro, i) => (
                        <li key={i} className="text-sm flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Cons:</h4>
                    <ul className="space-y-1">
                      {provider.cons.map((con, i) => (
                        <li key={i} className="text-sm flex items-start gap-2">
                          <X className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex gap-2 text-sm text-muted-foreground">
                    <span>{provider.free ? 'Free' : 'Paid'}</span>
                    {provider.requiresAccount && <span>• Requires Account</span>}
                  </div>
                  <Link href={`/providers/${provider.id}`}>
                    <Button variant="outline" className="w-full">
                      Learn More →
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-4xl mx-auto">
            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4">Choosing the Right Provider</h2>
              <p className="mb-4">
                Different reverse image search providers excel in different areas:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Google Images:</strong> Best for general searches and largest database</li>
                <li><strong>Bing Visual Search:</strong> Good integration with Microsoft services</li>
                <li><strong>Yandex:</strong> Excellent for finding faces and people</li>
                <li><strong>TinEye:</strong> Specialized in finding image sources and metadata</li>
                <li><strong>Pinterest:</strong> Great for design inspiration and visual discovery</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4">How to Use Multiple Providers</h2>
              <p className="mb-4">
                For best results, try searching the same image across multiple providers. Each provider has different strengths and may return different results. Use our <Link href="/tools/reverse-image-search-links" className="text-primary hover:underline">reverse image search tool</Link> to easily search across multiple providers.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
