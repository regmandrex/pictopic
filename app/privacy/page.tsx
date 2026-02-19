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
            Last updated: December 1, 2024
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
            <p className="mb-4">
              Our tools redirect users to third-party providers (Google Images, Bing, Yandex, etc.). We are not responsible for 
              the privacy practices of these external services.
            </p>
            <p>
              We also use third-party services for analytics and advertising, including Google Analytics and Google AdSense. 
              These services may collect information about your use of our website. Please review their privacy policies for 
              more information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Advertising and Google AdSense</h2>
            <p className="mb-4">
              We use Google AdSense to display advertisements on our website. Google AdSense uses cookies and similar 
              technologies to serve ads based on your prior visits to our website and other websites. This allows Google 
              and its partners to show you relevant advertisements.
            </p>
            <p className="mb-4">
              Google may use information (not including your name, address, email address, or telephone number) about your 
              visits to this and other websites to provide advertisements about goods and services of interest to you. 
              If you would like more information about this practice and to know your choices about not having this 
              information used by Google, please visit{' '}
              <a href="https://www.google.com/policies/privacy/partners/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
                Google's Privacy & Terms
              </a>.
            </p>
            <p>
              You can opt out of personalized advertising by visiting{' '}
              <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
                Google's Ads Settings
              </a> or the{' '}
              <a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
                Digital Advertising Alliance's opt-out page
              </a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Cookies and Tracking Technologies</h2>
            <p className="mb-4">
              We use cookies and similar tracking technologies to track activity on our website and hold certain information. 
              Cookies are files with a small amount of data which may include an anonymous unique identifier.
            </p>
            <p className="mb-4">
              We use both session cookies (which expire when you close your browser) and persistent cookies (which stay on 
              your device until deleted or expired). We use cookies for:
            </p>
            <ul className="list-disc ml-6 space-y-2 mb-4">
              <li>Essential website functionality</li>
              <li>Analytics to understand how visitors use our site</li>
              <li>Advertising to deliver relevant ads</li>
              <li>Remembering your preferences and settings</li>
            </ul>
            <p>
              For detailed information about our use of cookies, please see our{' '}
              <Link href="/cookie-policy" className="text-primary hover:underline font-medium">Cookie Policy</Link>. 
              You can control cookies through your browser settings, though disabling cookies may affect website functionality.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Data Security</h2>
            <p className="mb-4">
              We implement appropriate technical and organizational measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the 
              Internet or electronic storage is 100% secure.
            </p>
            <p>
              Since we don't store images uploaded through our tools and process them client-side only, your images never 
              leave your device until you choose to upload them to a third-party provider.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
            <p className="mb-4">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc ml-6 space-y-2 mb-4">
              <li>The right to access your personal information</li>
              <li>The right to correct inaccurate information</li>
              <li>The right to delete your personal information</li>
              <li>The right to object to processing of your personal information</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent</li>
            </ul>
            <p>
              To exercise these rights, please contact us through our{' '}
              <Link href="/contact" className="text-primary hover:underline font-medium">contact page</Link>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
            <p>
              Our website is not intended for children under the age of 13. We do not knowingly collect personal 
              information from children under 13. If you are a parent or guardian and believe your child has provided 
              us with personal information, please contact us immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new 
              Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy 
              Policy periodically for any changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our privacy practices, please contact us through 
              our <Link href="/contact" className="text-primary hover:underline font-medium">contact page</Link>.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
