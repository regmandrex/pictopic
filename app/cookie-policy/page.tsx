import Link from 'next/link'
import { generateMetadata as genMeta } from '@/lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = genMeta({
  title: 'Cookie Policy - PictoPicSearch',
  description: 'Learn about how PictoPicSearch uses cookies and similar technologies to improve your experience.',
  canonical: '/cookie-policy',
})

export default function CookiePolicyPage() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-muted-foreground mb-6">
            Last updated: December 1, 2024
          </p>
          
          <p className="mb-6 text-lg">
            This Cookie Policy explains how PictoPicSearch ("we," "us," or "our") uses cookies and similar 
            tracking technologies on our website. By using our website, you consent to the use of cookies 
            as described in this policy.
          </p>

          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-6 mt-10">What Are Cookies?</h2>
            <p className="mb-4">
              Cookies are small text files that are placed on your device (computer, tablet, or mobile) when 
              you visit a website. They are widely used to make websites work more efficiently and provide 
              information to website owners.
            </p>
            <p>
              Cookies allow websites to recognize your device and store some information about your preferences 
              or past actions. This helps improve your browsing experience by remembering your settings and 
              providing personalized content.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-6 mt-10">How We Use Cookies</h2>
            <p className="mb-4">
              PictoPicSearch uses cookies for the following purposes:
            </p>
            <ul className="space-y-3 mb-6">
              <li>
                <strong>Essential Cookies:</strong> These cookies are necessary for the website to function 
                properly. They enable core functionality such as security, network management, and accessibility. 
                You cannot opt-out of these cookies.
              </li>
              <li>
                <strong>Analytics Cookies:</strong> We use analytics cookies to understand how visitors 
                interact with our website. These cookies help us improve our website by collecting and 
                reporting information anonymously.
              </li>
              <li>
                <strong>Advertising Cookies:</strong> We may use advertising cookies (including third-party 
                cookies from Google AdSense) to deliver relevant advertisements and track the effectiveness 
                of our advertising campaigns. These cookies may also be used to build a profile of your 
                interests and show you relevant ads on other websites.
              </li>
              <li>
                <strong>Functionality Cookies:</strong> These cookies allow our website to remember choices 
                you make (such as your preferred language or region) and provide enhanced, personalized features.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-6 mt-10">Third-Party Cookies</h2>
            <p className="mb-4">
              In addition to our own cookies, we may also use various third-party cookies to report usage 
              statistics and deliver advertisements:
            </p>
            <ul className="space-y-3 mb-6">
              <li>
                <strong>Google Analytics:</strong> We use Google Analytics to understand how visitors use 
                our site. Google Analytics uses cookies to collect information such as how often users visit 
                our site, what pages they visit, and what other sites they used prior to coming to our site. 
                We use this information to improve our website. Google's ability to use and share information 
                collected by Google Analytics is restricted by the{' '}
                <a href="https://www.google.com/analytics/terms/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
                  Google Analytics Terms of Service
                </a> and the{' '}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
                  Google Privacy Policy
                </a>.
              </li>
              <li>
                <strong>Google AdSense:</strong> We use Google AdSense to display advertisements on our website. 
                Google AdSense uses cookies to serve ads based on your prior visits to our website and other 
                websites. You can opt out of personalized advertising by visiting{' '}
                <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
                  Google's Ads Settings
                </a>.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-6 mt-10">Types of Cookies We Use</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Session Cookies</h3>
                <p>
                  These cookies are temporary and are deleted when you close your browser. They help our 
                  website remember your actions during a single browsing session.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Persistent Cookies</h3>
                <p>
                  These cookies remain on your device for a set period or until you delete them. They help 
                  our website remember your preferences and actions across multiple visits.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">First-Party Cookies</h3>
                <p>
                  These cookies are set directly by our website and are used to provide core functionality 
                  and improve your experience on our site.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Third-Party Cookies</h3>
                <p>
                  These cookies are set by domains other than ours, such as Google Analytics and Google AdSense. 
                  They are used for analytics and advertising purposes.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-6 mt-10">Managing Cookies</h2>
            <p className="mb-4">
              You have the right to accept or reject cookies. Most web browsers automatically accept cookies, 
              but you can usually modify your browser settings to decline cookies if you prefer.
            </p>
            <p className="mb-4">
              However, please note that disabling cookies may affect the functionality of our website and 
              your ability to access certain features.
            </p>
            <div className="bg-muted/50 p-6 rounded-lg border border-border mb-6">
              <h3 className="text-xl font-semibold mb-4">How to Manage Cookies in Your Browser</h3>
              <ul className="space-y-2">
                <li>
                  <strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data
                </li>
                <li>
                  <strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data
                </li>
                <li>
                  <strong>Safari:</strong> Preferences → Privacy → Cookies and website data
                </li>
                <li>
                  <strong>Edge:</strong> Settings → Privacy, search, and services → Cookies and site permissions
                </li>
              </ul>
            </div>
            <p>
              You can also opt out of personalized advertising from Google by visiting{' '}
              <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
                Google's Ads Settings
              </a> or using the{' '}
              <a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
                Digital Advertising Alliance's opt-out page
              </a>.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-6 mt-10">Do Not Track Signals</h2>
            <p className="mb-4">
              Some browsers include a "Do Not Track" (DNT) feature that signals to websites you visit that 
              you do not want to have your online activity tracked. Currently, there is no standard for how 
              DNT signals should be interpreted. As a result, our website does not currently respond to DNT 
              browser signals or mechanisms.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-6 mt-10">Updates to This Cookie Policy</h2>
            <p className="mb-4">
              We may update this Cookie Policy from time to time to reflect changes in our practices or 
              for other operational, legal, or regulatory reasons. We will notify you of any material changes 
              by posting the new Cookie Policy on this page and updating the "Last updated" date.
            </p>
            <p>
              We encourage you to review this Cookie Policy periodically to stay informed about how we use cookies.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-6 mt-10">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about our use of cookies or this Cookie Policy, please contact us 
              through our <Link href="/contact" className="text-primary hover:underline font-medium">contact page</Link>.
            </p>
            <p>
              For more information about how we handle your personal data, please see our{' '}
              <Link href="/privacy" className="text-primary hover:underline font-medium">Privacy Policy</Link>.
            </p>
          </section>

          <div className="mt-12 p-6 bg-muted/50 rounded-lg border border-border">
            <p className="text-sm text-muted-foreground mb-0">
              <strong>Note:</strong> This Cookie Policy is part of our broader Privacy Policy. By using our 
              website, you consent to our use of cookies in accordance with this policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
