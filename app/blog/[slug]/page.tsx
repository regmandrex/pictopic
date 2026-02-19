import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { generateMetadata as genMeta } from '@/lib/seo'
import { generateBreadcrumbJSONLD, generateArticleJSONLD, generateFAQJSONLD } from '@/lib/seo'
import { getPostBySlug, getAllPosts, getRelatedPosts } from '@/lib/content'
import { formatDate } from '@/lib/utils'
import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import { MDXContent } from '@/components/mdx-content'

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
  let post
  let relatedPosts: ReturnType<typeof getRelatedPosts> = []
  
  try {
    post = getPostBySlug(slug)
    if (!post) {
      notFound()
    }
    relatedPosts = getRelatedPosts(slug, 2)
  } catch (error) {
    console.error('Error loading blog post:', error)
    notFound()
  }
  
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
  
  // Ensure stable JSON serialization
  const breadcrumbJson = JSON.stringify(breadcrumbSchema)
  const articleJson = JSON.stringify(articleSchema)
  const faqJson = JSON.stringify(faqSchema)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadcrumbJson }}
        suppressHydrationWarning
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: articleJson }}
        suppressHydrationWarning
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqJson }}
        suppressHydrationWarning
      />
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        <div className="container py-8 md:py-14 px-4 md:px-6 max-w-5xl">
          <nav className="mb-10 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link>
            <span className="mx-2">/</span>
            <span className="line-clamp-1 text-foreground">{post.frontmatter.title}</span>
          </nav>

          <article className="relative">
            <header className="mb-12 pb-10 border-b border-border/80">
              <h1 className="text-4xl md:text-5xl lg:text-[2.75rem] font-bold mb-6 leading-[1.15] tracking-tight text-foreground">
                {post.frontmatter.title}
              </h1>
              <div className="flex items-center gap-5 text-muted-foreground text-sm mb-6">
                <time dateTime={post.frontmatter.date}>
                  {formatDate(post.frontmatter.date)}
                </time>
                <span className="text-muted-foreground/60">·</span>
                <span>{Math.round(Number(post.readingTime) || 0)} min read</span>
              </div>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
                {post.frontmatter.description}
              </p>
            </header>

            <div className="blog-article prose prose-lg dark:prose-invert mb-14 
            prose-headings:font-bold prose-headings:tracking-tight prose-headings:scroll-mt-20
            prose-h1:text-4xl prose-h1:mt-12 prose-h1:mb-7 prose-h1:pt-2 prose-h1:border-t prose-h1:border-border prose-h1:pt-6
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pt-2 prose-h2:border-t prose-h2:border-border prose-h2:pt-6 prose-h2:first:mt-0 prose-h2:first:border-0 prose-h2:first:pt-0
            prose-h3:text-2xl prose-h3:mt-9 prose-h3:mb-5 prose-h3:pt-1
            prose-h4:text-xl prose-h4:mt-7 prose-h4:mb-4
            prose-p:mb-6 prose-p:leading-7 prose-p:text-[17px] prose-p:text-foreground/90
            prose-ul:mb-7 prose-ul:ml-6 prose-ul:space-y-3 prose-ul:list-disc
            prose-ol:mb-7 prose-ol:ml-6 prose-ol:space-y-3 prose-ol:list-decimal
            prose-li:leading-7 prose-li:text-[17px] prose-li:pl-2
            prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-6 prose-blockquote:pr-5 prose-blockquote:py-5 prose-blockquote:italic prose-blockquote:my-9 prose-blockquote:bg-muted/50 prose-blockquote:rounded-r prose-blockquote:text-[17px] prose-blockquote:shadow-sm
            prose-code:bg-muted prose-code:text-foreground prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:font-semibold
            prose-pre:bg-muted prose-pre:p-5 prose-pre:rounded-lg prose-pre:overflow-x-auto prose-pre:my-9 prose-pre:border prose-pre:border-border prose-pre:shadow-sm
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-a:font-medium prose-a:transition-colors
            prose-strong:font-semibold prose-strong:text-foreground
            prose-hr:my-12 prose-hr:border-border prose-hr:border-t-2
            prose-img:rounded-lg prose-img:my-9 prose-img:shadow-xl prose-img:border prose-img:border-border
            [&>*:first-child]:mt-0 [&>*:last-child]:mb-0
            [&>h2+*]:mt-4 [&>h3+*]:mt-3 [&>h4+*]:mt-2">
            {post.content && post.content.trim() ? (
              <MDXContent source={post.content} />
            ) : (
              <p className="text-muted-foreground">Content is being loaded...</p>
            )}
          </div>

          {/* CTA Block */}
          <Card className="mb-14 overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-background to-primary/10 dark:from-primary/10 dark:to-primary/5 shadow-lg">
            <CardContent className="pt-8 pb-8 px-8">
              <h2 className="text-2xl font-bold mb-3">Start a PictoPic Search</h2>
              <p className="text-muted-foreground mb-6 max-w-xl">
                Ready to find images, sources, and higher-resolution versions? Use our free reverse image search tools.
              </p>
              <Link href="/tools/reverse-image-search-links">
                <Button size="lg" className="shadow-md">
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
                  <Card key={relatedPost.slug} className="hover:shadow-xl hover:border-primary/30 transition-all duration-200 border">
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

          <div className="text-center pt-4">
            <Link href="/blog">
              <Button variant="outline" size="lg" className="rounded-full px-8">
                ← Back to Blog
              </Button>
            </Link>
          </div>
        </article>
        </div>
      </div>
    </>
  )
}
