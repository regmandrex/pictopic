import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

export interface PostFrontmatter {
  title: string
  description: string
  date: string
  category: 'pillar' | 'how-to' | 'use-case'
  keywords: string[]
  readingTime?: number
  canonical?: string
  image?: string
  author?: string
}

export interface Post {
  slug: string
  frontmatter: PostFrontmatter
  content: string
  readingTime: number
}

const contentDirectory = path.join(process.cwd(), 'content', 'posts')

export function getAllPosts(): Post[] {
  try {
    if (!fs.existsSync(contentDirectory)) {
      return []
    }

    const fileNames = fs.readdirSync(contentDirectory)
    const allPostsData = fileNames
      .filter(name => name.endsWith('.mdx'))
      .map(fileName => {
        try {
          const slug = fileName.replace(/\.mdx$/, '')
          const fullPath = path.join(contentDirectory, fileName)
          const fileContents = fs.readFileSync(fullPath, 'utf8')
          const { data, content } = matter(fileContents)
          const readingTimeResult = content ? readingTime(content) : { minutes: 0 }
          const minutes = typeof readingTimeResult.minutes === 'number' ? readingTimeResult.minutes : 0
          return {
            slug,
            frontmatter: {
              ...data,
              readingTime: minutes,
              keywords: Array.isArray(data.keywords) ? data.keywords : [],
            } as PostFrontmatter,
            content: content ?? '',
            readingTime: minutes,
          }
        } catch {
          return null
        }
      })
      .filter((p): p is Post => p !== null)

    return allPostsData.sort((a, b) => {
      const dateA = a.frontmatter.date ?? ''
      const dateB = b.frontmatter.date ?? ''
      return dateA < dateB ? 1 : -1
    })
  } catch {
    return []
  }
}

export function getPostBySlug(slug: string): Post | null {
  try {
    const fullPath = path.join(contentDirectory, `${slug}.mdx`)
    if (!fs.existsSync(fullPath)) {
      return null
    }
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    const raw = content ?? ''
    const readingTimeResult = raw ? readingTime(raw) : { minutes: 0 }
    const minutes = typeof readingTimeResult.minutes === 'number' ? readingTimeResult.minutes : 0
    return {
      slug,
      frontmatter: {
        ...data,
        readingTime: minutes,
        keywords: Array.isArray(data.keywords) ? data.keywords : [],
      } as PostFrontmatter,
      content: raw,
      readingTime: minutes,
    }
  } catch {
    return null
  }
}

export function getRelatedPosts(currentSlug: string, limit: number = 2): Post[] {
  try {
    const allPosts = getAllPosts()
    const currentPost = getPostBySlug(currentSlug)

    if (!currentPost) {
      return allPosts.slice(0, limit)
    }

    const currentKeywords = Array.isArray(currentPost.frontmatter.keywords) ? currentPost.frontmatter.keywords : []
    const related = allPosts
      .filter(post => post.slug !== currentSlug)
      .filter(post => {
        const postKeywords = Array.isArray(post.frontmatter.keywords) ? post.frontmatter.keywords : []
        return currentKeywords.some((keyword: string) => postKeywords.includes(keyword))
      })
      .slice(0, limit)

    if (related.length < limit) {
      const remaining = allPosts
        .filter(post => post.slug !== currentSlug && !related.includes(post))
        .slice(0, limit - related.length)
      return [...related, ...remaining]
    }

    return related
  } catch {
    return []
  }
}
