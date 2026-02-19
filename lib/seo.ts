import { Metadata } from 'next'

export interface SEOConfig {
  title: string
  description: string
  canonical?: string
  keywords?: string[]
  ogImage?: string
  noindex?: boolean
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  authors?: string[]
}

export function generateMetadata(config: SEOConfig): Metadata {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://pictopicsearch.com'
  const canonicalUrl = config.canonical || `${siteUrl}${config.canonical || ''}`

  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords?.join(', '),
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: !config.noindex,
      follow: !config.noindex,
    },
    openGraph: {
      title: config.title,
      description: config.description,
      url: canonicalUrl,
      siteName: 'PictoPicSearch',
      type: config.type || 'website',
      images: config.ogImage ? [{ url: config.ogImage }] : [],
      publishedTime: config.publishedTime,
      modifiedTime: config.modifiedTime,
      authors: config.authors,
    },
    twitter: {
      card: 'summary_large_image',
      title: config.title,
      description: config.description,
      images: config.ogImage ? [config.ogImage] : [],
    },
  }
}

export function generateArticleJSONLD({
  title,
  description,
  url,
  publishedTime,
  modifiedTime,
  image,
  author = 'PictoPicSearch Team',
}: {
  title: string
  description: string
  url: string
  publishedTime?: string
  modifiedTime?: string
  image?: string
  author?: string
}) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://pictopicsearch.com'
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url,
    datePublished: publishedTime || '',
    dateModified: modifiedTime || publishedTime || '',
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'PictoPicSearch',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo.png`,
      },
    },
  }
  
  if (image) {
    schema.image = {
      '@type': 'ImageObject',
      url: image,
    }
  }
  
  return schema
}

export function generateBreadcrumbJSONLD(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function generateFAQJSONLD(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function generateWebsiteJSONLD() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://pictopicsearch.com'
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'PictoPicSearch',
    url: siteUrl,
    description: 'Image search companion and reverse image search hub for pictopic search',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

export function generateOrganizationJSONLD() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://pictopicsearch.com'
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'PictoPicSearch',
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description: 'Image search companion and reverse image search hub',
  }
}
