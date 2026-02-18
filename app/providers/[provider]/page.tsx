import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { generateMetadata as genMeta } from '@/lib/seo'
import { generateBreadcrumbJSONLD, generateFAQJSONLD } from '@/lib/seo'
import { getProviderById, providers } from '@/lib/providers'
import type { Metadata } from 'next'
import { Check, X, ExternalLink } from 'lucide-react'

export async function generateStaticParams() {
  return providers.map(provider => ({
    provider: provider.id,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ provider: string }> }): Promise<Metadata> {
  const { provider: providerId } = await params
  const provider = getProviderById(providerId)
  if (!provider) {
    return {}
  }

  return genMeta({
    title: `${provider.displayName} - Reverse Image Search Guide`,
    description: `Learn how to use ${provider.displayName} for reverse image search. ${provider.description}`,
    keywords: [`${provider.name}`, 'reverse image search', 'pictopic search', provider.id],
    canonical: `/providers/${provider.id}`,
  })
}

export default async function ProviderPage({ params }: { params: Promise<{ provider: string }> }) {
  const { provider: providerId } = await params
  const provider = getProviderById(providerId)
  
  if (!provider) {
    notFound()
  }

  const breadcrumbSchema = generateBreadcrumbJSONLD([
    { name: 'Home', url: 'https://pictopicsearch.com' },
    { name: 'Providers', url: 'https://pictopicsearch.com/providers' },
    { name: provider.displayName, url: `https://pictopicsearch.com/providers/${provider.id}` },
  ])

  const faqs = [
    {
      question: `Is ${provider.displayName} free to use?`,
      answer: provider.free 
        ? `Yes, ${provider.displayName} offers free reverse image search capabilities.`
        : `${provider.displayName} may require a paid subscription for full features.`,
    },
    {
      question: `Do I need an account to use ${provider.displayName}?`,
      answer: provider.requiresAccount
        ? `Yes, ${provider.displayName} requires an account to access reverse image search features.`
        : `No, you can use ${provider.displayName} for reverse image search without creating an account.`,
    },
    {
      question: `What image formats does ${provider.displayName} support?`,
      answer: `${provider.displayName} supports ${provider.supportedFormats.join(', ')} image formats.`,
    },
    {
      question: `How do I use ${provider.displayName} for reverse image search?`,
      answer: `Visit ${provider.displayName} and use their reverse image search feature. You can upload an image or paste an image URL to find similar images and sources.`,
    },
  ]

  const faqSchema = generateFAQJSONLD(faqs)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container py-12">
        <nav className="mb-8 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/providers" className="hover:text-foreground">Providers</Link>
          <span className="mx-2">/</span>
          <span>{provider.displayName}</span>
        </nav>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {provider.displayName} - Reverse Image Search Guide
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            {provider.description}
          </p>

          <div className="prose prose-lg dark:prose-invert mb-12">
            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4">About {provider.displayName}</h2>
              <p className="mb-4">
                {provider.displayName} is one of the leading platforms for reverse image search and visual discovery. 
                It offers powerful image matching capabilities that help users find similar images, discover sources, 
                and locate higher-resolution versions.
              </p>
              <p className="mb-4">
                Whether you&apos;re looking for the original source of an image, trying to find similar visual content, 
                or need to verify image authenticity, {provider.displayName} provides the tools you need for effective pictopic search.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Pros</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {provider.pros.map((pro, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Cons</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {provider.cons.map((con, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <X className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4">How to Use {provider.displayName}</h2>
              <ol className="list-decimal pl-6 space-y-2 mb-4">
                <li>Visit the {provider.displayName} website</li>
                <li>Navigate to the reverse image search or visual search feature</li>
                <li>Upload an image file or paste an image URL</li>
                <li>Wait for the search to process your image</li>
                <li>Review the results showing similar images and sources</li>
                <li>Click on results to visit the original sources</li>
              </ol>
              <p className="mb-4">
                For a faster experience, you can use our <Link href="/tools/reverse-image-search-links" className="text-primary hover:underline">reverse image search tool</Link> to generate direct links to {provider.displayName}&apos;s search page.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4">Supported Formats</h2>
              <p className="mb-4">
                {provider.displayName} supports the following image formats:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                {provider.supportedFormats.map((format, i) => (
                  <li key={i} className="uppercase">{format}</li>
                ))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4">Best Use Cases</h2>
              <p className="mb-4">
                {provider.displayName} is particularly effective for:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Finding the original source of images</li>
                <li>Discovering similar or related visual content</li>
                <li>Locating higher-resolution versions</li>
                <li>Verifying image authenticity</li>
                <li>Tracking image usage across the web</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqs.map((faq, i) => (
                  <div key={i}>
                    <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 mb-8">
            <CardHeader>
              <CardTitle>Try {provider.displayName} Now</CardTitle>
              <CardDescription>
                Use our tool to generate a direct link to {provider.displayName}&apos;s reverse image search
              </CardDescription>
            </CardHeader>
            <CardContent className="flex gap-4">
              <Link href="/tools/reverse-image-search-links">
                <Button>
                  Use Search Tool
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a href={provider.url} target="_blank" rel="noopener noreferrer">
                <Button variant="outline">
                  Visit {provider.displayName}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </CardContent>
          </Card>

          <div className="text-center">
            <Link href="/providers">
              <Button variant="outline">
                ← Compare All Providers
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
