import Link from 'next/link'
import { generateMetadata as genMeta } from '@/lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = genMeta({
  title: 'Terms of Service - PictoPicSearch',
  description: 'Terms of service for PictoPicSearch. Read our terms and conditions.',
  canonical: '/terms',
})

export default function TermsPage() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="prose prose-lg dark:prose-invert">
          <p className="text-muted-foreground mb-4">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Acceptance of Terms</h2>
            <p>
              By using PictoPicSearch, you agree to these terms of service. If you do not agree, please do not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Service Description</h2>
            <p>
              PictoPicSearch provides tools to help users generate links to official reverse image search providers. 
              We do not store images or perform image searches ourselves.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">User Responsibilities</h2>
            <p>
              Users are responsible for ensuring they have the right to search images and comply with copyright laws. 
              Users must use our services legally and ethically.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Disclaimer</h2>
            <p>
              PictoPicSearch is not affiliated with Google, Bing, Yandex, TinEye, Pinterest, or any other search provider. 
              We provide links to third-party services and are not responsible for their content or practices.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
            <p>
              PictoPicSearch is provided &quot;as is&quot; without warranties. We are not liable for any damages resulting from 
              use of our services or third-party providers.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
