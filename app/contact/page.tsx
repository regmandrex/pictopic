import Link from 'next/link'
import { generateMetadata as genMeta } from '@/lib/seo'
import type { Metadata } from 'next'
import { ContactForm } from '@/components/contact-form'

export const metadata: Metadata = genMeta({
  title: 'Contact Us - PictoPicSearch',
  description: 'Get in touch with PictoPicSearch. We welcome your questions, feedback, and suggestions.',
  canonical: '/contact',
})

export default function ContactPage() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-muted-foreground mb-6 text-lg">
            We'd love to hear from you! Whether you have questions, feedback, suggestions, or need support, 
            we're here to help.
          </p>

          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-6 mt-10">Get in Touch</h2>
            <p className="mb-4">
              For general inquiries, feedback, or questions about our tools and services, please use the 
              contact form below or reach out through the methods listed.
            </p>
            <div className="bg-muted/50 p-6 rounded-lg border border-border mb-6">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <ul className="space-y-3">
                <li>
                  <strong>Email:</strong> For general inquiries, please use the contact form below or 
                  reach out through our website's contact mechanisms.
                </li>
                <li>
                  <strong>Response Time:</strong> We aim to respond to all inquiries within 2-3 business days.
                </li>
                <li>
                  <strong>Support:</strong> For technical issues or questions about using our tools, 
                  please check our <Link href="/blog" className="text-primary hover:underline font-medium">blog guides</Link> first, 
                  as many common questions are answered there.
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-6 mt-10">Contact Form</h2>
            <div className="bg-muted/30 p-8 rounded-lg border border-border">
              <p className="mb-6">
                Please fill out the form below with your inquiry. We&apos;ll get back to you as soon as possible.
              </p>
              <ContactForm />
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-6 mt-10">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">How do I use reverse image search?</h3>
                <p>
                  Check out our comprehensive guide on{' '}
                  <Link href="/blog/how-to-use-reverse-image-search" className="text-primary hover:underline font-medium">
                    how to use reverse image search
                  </Link> for step-by-step instructions.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Do you store my images?</h3>
                <p>
                  No, we don't store your images. Images are processed client-side only and never sent to our servers. 
                  See our <Link href="/privacy" className="text-primary hover:underline font-medium">Privacy Policy</Link> for details.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Is PictoPicSearch free to use?</h3>
                <p>
                  Yes, all our tools and resources are completely free to use. We provide links to official 
                  search providers, and those providers may have their own terms and conditions.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Can I report a problem or suggest a feature?</h3>
                <p>
                  Absolutely! Use the contact form above to share your feedback, report issues, or suggest 
                  new features. We value your input.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-6 mt-10">Other Ways to Reach Us</h2>
            <div className="bg-muted/50 p-6 rounded-lg border border-border">
              <ul className="space-y-3">
                <li>
                  <strong>Privacy Concerns:</strong> For privacy-related inquiries, please review our{' '}
                  <Link href="/privacy" className="text-primary hover:underline font-medium">Privacy Policy</Link> 
                  {' '}and <Link href="/cookie-policy" className="text-primary hover:underline font-medium">Cookie Policy</Link>.
                </li>
                <li>
                  <strong>Legal Matters:</strong> For legal inquiries, please see our{' '}
                  <Link href="/terms" className="text-primary hover:underline font-medium">Terms of Service</Link>.
                </li>
                <li>
                  <strong>Partnerships:</strong> For partnership or collaboration inquiries, please use the 
                  contact form above with "Partnership" as the subject.
                </li>
                <li>
                  <strong>Press:</strong> For media inquiries, please use the contact form above with "Press" 
                  as the subject.
                </li>
              </ul>
            </div>
          </section>

          <div className="mt-12 p-6 bg-muted/50 rounded-lg border border-border">
            <p className="text-sm text-muted-foreground mb-0">
              <strong>Response Time:</strong> We typically respond to inquiries within 2-3 business days. 
              For urgent matters, please indicate "Urgent" in your subject line.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
