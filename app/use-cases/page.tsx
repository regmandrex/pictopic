import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { generateMetadata as genMeta } from '@/lib/seo'
import { generateBreadcrumbJSONLD } from '@/lib/seo'
import { useCases } from '@/lib/use-cases'
import type { Metadata } from 'next'

export const metadata: Metadata = genMeta({
  title: 'Use Cases - Pictopic Search Applications',
  description: 'Explore common use cases for pictopic search and reverse image search. Learn how to find image sources, verify authenticity, and more.',
  keywords: ['pictopic search use cases', 'reverse image search uses', 'image search applications'],
  canonical: '/use-cases',
})

export default function UseCasesPage() {
  const breadcrumbSchema = generateBreadcrumbJSONLD([
    { name: 'Home', url: 'https://pictopicsearch.com' },
    { name: 'Use Cases', url: 'https://pictopicsearch.com/use-cases' },
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
          <span>Use Cases</span>
        </nav>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Pictopic Search Use Cases
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover common applications for pictopic search and reverse image search. Learn how to solve real-world problems with visual search.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map(useCase => (
              <Card key={useCase.slug} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="line-clamp-2">
                    <Link href={`/use-cases/${useCase.slug}`} className="hover:text-primary">
                      {useCase.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {useCase.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href={`/use-cases/${useCase.slug}`}>
                    <button className="text-primary hover:underline font-medium text-sm">
                      Learn More →
                    </button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
