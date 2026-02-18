import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { generateWebsiteJSONLD, generateOrganizationJSONLD } from '@/lib/seo'

const inter = Inter({ subsets: ['latin'] })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://pictopicsearch.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'PictoPicSearch - Pictopic Search & Reverse Image Search Hub',
    template: '%s | PictoPicSearch',
  },
  description: 'Your trusted companion for pictopic search and reverse image search. Find similar images, sources, and higher-resolution versions using multiple providers.',
  keywords: ['pictopic search', 'reverse image search', 'similar image search', 'image source finder', 'visual search'],
  authors: [{ name: 'PictoPicSearch Team' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'PictoPicSearch',
    title: 'PictoPicSearch - Pictopic Search & Reverse Image Search Hub',
    description: 'Your trusted companion for pictopic search and reverse image search.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PictoPicSearch - Pictopic Search & Reverse Image Search Hub',
    description: 'Your trusted companion for pictopic search and reverse image search.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.png', type: 'image/png', sizes: '32x32' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const websiteSchema = generateWebsiteJSONLD()
  const organizationSchema = generateOrganizationJSONLD()

  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8764610479002120"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
