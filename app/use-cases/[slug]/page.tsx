import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { generateMetadata as genMeta } from '@/lib/seo'
import { generateBreadcrumbJSONLD, generateFAQJSONLD } from '@/lib/seo'
import { getUseCaseBySlug, useCases } from '@/lib/use-cases'
import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'

export async function generateStaticParams() {
  return useCases.map(useCase => ({
    slug: useCase.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const useCase = getUseCaseBySlug(slug)
  if (!useCase) {
    return {}
  }

  return genMeta({
    title: `${useCase.title} - Pictopic Search Guide`,
    description: useCase.description,
    keywords: [...useCase.keywords, 'pictopic search', 'reverse image search'],
    canonical: `/use-cases/${useCase.slug}`,
  })
}

export default async function UseCasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const useCase = getUseCaseBySlug(slug)
  
  if (!useCase) {
    notFound()
  }

  const breadcrumbSchema = generateBreadcrumbJSONLD([
    { name: 'Home', url: 'https://pictopicsearch.com' },
    { name: 'Use Cases', url: 'https://pictopicsearch.com/use-cases' },
    { name: useCase.title, url: `https://pictopicsearch.com/use-cases/${useCase.slug}` },
  ])

  const faqs = [
    {
      question: `How can I ${useCase.title.toLowerCase()}?`,
      answer: `You can ${useCase.title.toLowerCase()} by using reverse image search tools. Upload your image to a search provider and review the results to find what you're looking for.`,
    },
    {
      question: `Which provider is best for ${useCase.title.toLowerCase()}?`,
      answer: `Different providers excel in different areas. Google Images has the largest database, Yandex is great for faces, and TinEye is excellent for finding sources. Try multiple providers for best results.`,
    },
    {
      question: `Is it free to ${useCase.title.toLowerCase()}?`,
      answer: `Yes, most reverse image search providers offer free access to their tools. You can use our free tools to search across multiple providers.`,
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
          <span>Use Cases</span>
          <span className="mx-2">/</span>
          <span>{useCase.title}</span>
        </nav>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {useCase.title}
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            {useCase.description}
          </p>

          <div className="prose prose-lg dark:prose-invert mb-12">
            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4">Overview</h2>
              <p className="mb-4">
                {useCase.description} Using pictopic search and reverse image search tools, you can accomplish this task efficiently and effectively.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4">Step-by-Step Guide</h2>
              <ol className="list-decimal pl-6 space-y-2 mb-4">
                <li>Identify the image you want to search</li>
                <li>Visit our <Link href="/tools/reverse-image-search-links" className="text-primary hover:underline">reverse image search tool</Link></li>
                <li>Upload the image or paste its URL</li>
                <li>Select one or more search providers</li>
                <li>Review the search results</li>
                <li>Click through to relevant sources</li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4">Tips for Best Results</h2>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Use high-quality images when possible</li>
                <li>Try multiple search providers for comprehensive results</li>
                <li>Check different result pages for more matches</li>
                <li>Use specific search filters when available</li>
                <li>Verify information from multiple sources</li>
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
              <CardTitle>Ready to Get Started?</CardTitle>
              <CardDescription>
                Use our free tools to start your search
              </CardDescription>
            </CardHeader>
            <CardContent>
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
