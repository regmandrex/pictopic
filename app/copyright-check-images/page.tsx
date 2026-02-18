import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { generateMetadata as genMeta } from '@/lib/seo'
import { generateBreadcrumbJSONLD } from '@/lib/seo'
import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = genMeta({
  title: 'Copyright Check Images - Protect Your Visual Content',
  description: 'Learn how to check if your images are being used without permission. Use reverse image search to find copyright violations and protect your work.',
  keywords: ['copyright check', 'image copyright', 'copyright violation', 'pictopic search'],
  canonical: '/copyright-check-images',
})

export default function CopyrightCheckImagesPage() {
  const breadcrumbSchema = generateBreadcrumbJSONLD([
    { name: 'Home', url: 'https://pictopicsearch.com' },
    { name: 'Copyright Check Images', url: 'https://pictopicsearch.com/copyright-check-images' },
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
          <span>Copyright Check Images</span>
        </nav>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Copyright Check for Images
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Protect your visual content by checking if your images are being used without permission. Use reverse image search to find unauthorized use of your work.
          </p>

          <div className="prose prose-lg dark:prose-invert mb-12">
            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4">Why Check Image Copyright?</h2>
              <p className="mb-4">
                Regularly checking where your images appear online helps you:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Protect your intellectual property</li>
                <li>Find unauthorized use of your images</li>
                <li>Ensure proper attribution</li>
                <li>Enforce licensing agreements</li>
                <li>Monitor your brand&apos;s visual content</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4">How to Check Copyright</h2>
              <p className="mb-4">
                Use reverse image search to find where your images appear online:
              </p>
              <ol className="list-decimal pl-6 space-y-2 mb-4">
                <li>Upload your original image to a reverse image search tool</li>
                <li>Review results to see where the image appears</li>
                <li>Check if usage is authorized and properly attributed</li>
                <li>Contact sites using your images without permission</li>
              </ol>
            </section>
          </div>

          <div className="bg-muted p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold mb-2">Check Your Images Now</h3>
            <p className="mb-4">Use our reverse image search tool to find where your images appear online.</p>
            <Link href="/tools/reverse-image-search-links">
              <Button size="lg">
                Check Image Copyright
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
