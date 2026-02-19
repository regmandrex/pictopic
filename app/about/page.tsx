import Link from 'next/link'
import { generateMetadata as genMeta } from '@/lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = genMeta({
  title: 'About Us - PictoPicSearch',
  description: 'Learn about PictoPicSearch - your trusted companion for reverse image search and pictopic search tools.',
  canonical: '/about',
})

export default function AboutPage() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About PictoPicSearch</h1>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-muted-foreground mb-6 text-lg">
            PictoPicSearch is your trusted companion for reverse image search and pictopic search tools. 
            We help you find image sources, discover similar images, locate higher-resolution versions, 
            and verify image authenticity—all in one place.
          </p>

          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-6 mt-10">Our Mission</h2>
            <p className="mb-4">
              Our mission is to make reverse image search accessible, fast, and reliable for everyone. 
              Whether you're a designer looking for image sources, a content creator verifying authenticity, 
              or a researcher tracking image usage, PictoPicSearch provides the tools and knowledge you need.
            </p>
            <p>
              We believe that finding image sources, verifying content, and discovering visual information 
              should be simple and straightforward. That's why we've built comprehensive tools that connect 
              you to the best reverse image search providers while providing detailed guides and resources 
              to help you master pictopic search.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-6 mt-10">What We Offer</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Powerful Search Tools</h3>
                <p className="mb-4">
                  Our suite of tools includes reverse image search links, similar image search, image source finder, 
                  and keyword generators. Each tool is designed to help you accomplish specific tasks efficiently, 
                  whether you're finding the origin of an image or discovering visually similar content.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Comprehensive Guides</h3>
                <p className="mb-4">
                  We provide detailed, SEO-optimized guides covering everything from basic reverse image search 
                  techniques to advanced use cases. Our blog features in-depth articles on finding image sources, 
                  verifying authenticity, protecting your images, and much more.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Provider Comparisons</h3>
                <p className="mb-4">
                  Not all reverse image search providers are created equal. We compare Google Images, Yandex, 
                  TinEye, Bing, and other providers to help you choose the right tool for your specific needs.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-6 mt-10">How We Work</h2>
            <p className="mb-4">
              PictoPicSearch operates as a tool aggregator and resource hub. We don't store your images or 
              perform searches ourselves. Instead, we provide convenient links and interfaces that connect you 
              directly to official reverse image search providers like Google Images, Yandex, TinEye, and Bing.
            </p>
            <p className="mb-4">
              When you use our tools, your images are processed client-side only—they never leave your device 
              until you choose to upload them to a provider. This ensures your privacy and security while 
              giving you access to powerful search capabilities.
            </p>
            <p>
              We're committed to transparency, user privacy, and providing accurate, helpful information. 
              Our tools are free to use, and we maintain independence from search providers to give you 
              unbiased comparisons and recommendations.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-6 mt-10">Our Values</h2>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="font-semibold mr-2">Privacy First:</span>
                <span>We don't store your images or personal data. Your searches remain private.</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">Transparency:</span>
                <span>We're clear about how our tools work and what data we collect (or don't collect).</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">Accessibility:</span>
                <span>Our tools and guides are designed to be easy to use for everyone, regardless of technical expertise.</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">Accuracy:</span>
                <span>We provide reliable information and keep our guides up-to-date with the latest best practices.</span>
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-6 mt-10">Who We Serve</h2>
            <p className="mb-4">
              PictoPicSearch serves a diverse community of users:
            </p>
            <ul className="space-y-2 mb-6">
              <li><strong>Content Creators:</strong> Verify image sources, find higher-resolution versions, and protect your work</li>
              <li><strong>Designers:</strong> Discover image origins, find similar designs, and locate stock photo sources</li>
              <li><strong>Researchers:</strong> Track image usage, verify authenticity, and conduct visual research</li>
              <li><strong>Journalists:</strong> Verify images, check copyright, and find original sources</li>
              <li><strong>Businesses:</strong> Monitor brand image usage, check for copyright violations, and protect intellectual property</li>
              <li><strong>Students:</strong> Find image sources for projects and verify visual content</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-6 mt-10">Contact Us</h2>
            <p className="mb-4">
              Have questions, feedback, or suggestions? We'd love to hear from you. Visit our{' '}
              <Link href="/contact" className="text-primary hover:underline font-medium">contact page</Link> to get in touch.
            </p>
            <p>
              For privacy concerns, please review our <Link href="/privacy" className="text-primary hover:underline font-medium">Privacy Policy</Link>. 
              For terms of use, see our <Link href="/terms" className="text-primary hover:underline font-medium">Terms of Service</Link>.
            </p>
          </section>

          <div className="mt-12 p-6 bg-muted/50 rounded-lg border border-border">
            <p className="text-sm text-muted-foreground mb-0">
              <strong>Note:</strong> PictoPicSearch is not affiliated with Google, Bing, Yandex, TinEye, Pinterest, 
              or any other search provider. We provide links to third-party services and are not responsible for 
              their content or practices. All trademarks are the property of their respective owners.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
