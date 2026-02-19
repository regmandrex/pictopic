import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { generateMetadata as genMeta } from '@/lib/seo'
import { generateBreadcrumbJSONLD } from '@/lib/seo'
import { getAllPosts } from '@/lib/content'
import { formatDate } from '@/lib/utils'
import type { Metadata } from 'next'

export const metadata: Metadata = genMeta({
  title: 'Blog - Pictopic Search Guides & Tips',
  description: 'Read guides, tutorials, and tips about pictopic search, reverse image search, and image source finding.',
  keywords: ['pictopic search blog', 'reverse image search guides', 'image search tips'],
  canonical: '/blog',
})

export default function BlogPage() {
  const posts = getAllPosts()
  const breadcrumbSchema = generateBreadcrumbJSONLD([
    { name: 'Home', url: 'https://pictopicsearch.com' },
    { name: 'Blog', url: 'https://pictopicsearch.com/blog' },
  ])
  
  // Ensure stable JSON serialization
  const breadcrumbJson = JSON.stringify(breadcrumbSchema)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadcrumbJson }}
        suppressHydrationWarning
      />
      <div className="container py-12">
        <nav className="mb-8 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground">Home</Link>
          <span className="mx-2">/</span>
          <span>Blog</span>
        </nav>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Pictopic Search Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Guides, tutorials, and tips about pictopic search, reverse image search, and finding image sources.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map(post => (
              <Card key={post.slug} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <span>{formatDate(post.frontmatter.date)}</span>
                    <span>•</span>
                    <span>{Math.round(post.readingTime)} min read</span>
                  </div>
                  <CardTitle className="line-clamp-2">
                    <Link href={`/blog/${post.slug}`} className="hover:text-primary">
                      {post.frontmatter.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {post.frontmatter.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.frontmatter.keywords?.slice(0, 3).map((keyword, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-muted text-xs rounded"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <button className="text-primary hover:underline font-medium text-sm">
                      Read More →
                    </button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {posts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No blog posts yet. Check back soon!</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
