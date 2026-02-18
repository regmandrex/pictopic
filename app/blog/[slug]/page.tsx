import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { generateMetadata as genMeta } from '@/lib/seo'
import { generateBreadcrumbJSONLD, generateArticleJSONLD, generateFAQJSONLD } from '@/lib/seo'
import { getPostBySlug, getAllPosts, getRelatedPosts } from '@/lib/content'
import { formatDate } from '@/lib/utils'
import { MDXRemote } from 'next-mdx-remote/rsc'
import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import remarkGfm from 'remark-gfm'
import { getMDXComponents } from '@/components/mdx-components'

// Keep dynamic: static generation hits React version mismatch with next-mdx-remote
export const dynamic = 'force-dynamic'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map(post => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) {
    return {}
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://pictopicsearch.com'
  const url = `${siteUrl}/blog/${post.slug}`

  return genMeta({
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    keywords: post.frontmatter.keywords,
    canonical: `/blog/${slug}`,
    type: 'article',
    publishedTime: post.frontmatter.date,
    ogImage: post.frontmatter.image,
  })
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  const relatedPosts = post ? getRelatedPosts(slug, 2) : []
  
  if (!post) {
    notFound()
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://pictopicsearch.com'
  const url = `${siteUrl}/blog/${post.slug}`

  const breadcrumbSchema = generateBreadcrumbJSONLD([
    { name: 'Home', url: siteUrl },
    { name: 'Blog', url: `${siteUrl}/blog` },
    { name: post.frontmatter.title, url },
  ])

  const articleSchema = generateArticleJSONLD({
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    url,
    publishedTime: post.frontmatter.date,
    image: post.frontmatter.image,
    author: post.frontmatter.author || 'PictoPicSearch Team',
  })

  // Extract FAQs from content (simplified - in production, parse from MDX)
  const faqs = [
    {
      question: 'What is pictopic search?',
      answer: 'Pictopic search is a method of searching the web using images instead of text, helping you find similar images, sources, and higher-resolution versions.',
    },
    {
      question: 'How do I use reverse image search?',
      answer: 'Upload an image or paste an image URL to a reverse image search tool, then review the results to find similar images and sources.',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container py-12">
        <nav className="mb-8 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-foreground">Blog</Link>
          <span className="mx-2">/</span>
          <span className="line-clamp-1">{post.frontmatter.title}</span>
        </nav>

        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {post.frontmatter.title}
            </h1>
            <div className="flex items-center gap-4 text-muted-foreground mb-6">
              <time dateTime={post.frontmatter.date}>
                {formatDate(post.frontmatter.date)}
              </time>
              <span>•</span>
              <span>{Math.round(Number(post.readingTime) || 0)} min read</span>
            </div>
            <p className="text-xl text-muted-foreground">
              {post.frontmatter.description}
            </p>
          </header>

          <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
            <MDXRemote
              source={post.content || '\n'}
              components={getMDXComponents()}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                },
              }}
            />
          </div>

          {/* CTA Block */}
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 mb-12">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4">Start a PictoPic Search</h2>
              <p className="text-muted-foreground mb-6">
                Ready to find images, sources, and higher-resolution versions? Use our free reverse image search tools.
              </p>
              <Link href="/tools/reverse-image-search-links">
                <Button size="lg">
                  Try Reverse Image Search Tool
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.map(relatedPost => (
                  <Card key={relatedPost.slug} className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-2">
                        <Link href={`/blog/${relatedPost.slug}`} className="hover:text-primary">
                          {relatedPost.frontmatter.title}
                        </Link>
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {relatedPost.frontmatter.description}
                      </p>
                      <Link href={`/blog/${relatedPost.slug}`}>
                        <Button variant="link" className="p-0">
                          Read More →
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          <div className="text-center">
            <Link href="/blog">
              <Button variant="outline">
                ← Back to Blog
              </Button>
            </Link>
          </div>
        </article>
      </div>
    </>
  )
}
