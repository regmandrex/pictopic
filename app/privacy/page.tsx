import Link from 'next/link'
import { generateMetadata as genMeta } from '@/lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = genMeta({
  title: 'Privacy Policy - PictoPicSearch',
  description: 'Privacy policy for PictoPicSearch. Learn how we handle your data and protect your privacy.',
  canonical: '/privacy',
})

export default function PrivacyPage() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-lg dark:prose-invert">
          <p className="text-muted-foreground mb-4">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Data Collection</h2>
            <p>
              PictoPicSearch does not store images uploaded through our tools. We only generate links to official provider search pages. 
              Images are processed client-side only and never sent to our servers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
            <p>
              We may collect standard web analytics data such as page views and referrers. We do not collect personal information 
              unless you voluntarily provide it (e.g., email for waitlist).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
            <p>
              Our tools redirect users to third-party providers (Google Images, Bing, Yandex, etc.). We are not responsible for 
              the privacy practices of these external services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Cookies</h2>
            <p>
              We may use cookies for analytics and functionality. You can disable cookies in your browser settings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Contact</h2>
            <p>
              For privacy concerns, please contact us through our website.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
