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
  if (!fs.existsSync(contentDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(contentDirectory)
  const allPostsData = fileNames
    .filter(name => name.endsWith('.mdx'))
    .map(fileName => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(contentDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)
      
      const readingTimeResult = readingTime(content)
      
      return {
        slug,
        frontmatter: {
          ...data,
          readingTime: readingTimeResult.minutes,
        } as PostFrontmatter,
        content,
        readingTime: readingTimeResult.minutes,
      }
    })

  return allPostsData.sort((a, b) => {
    if (a.frontmatter.date < b.frontmatter.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getPostBySlug(slug: string): Post | null {
  try {
    const fullPath = path.join(contentDirectory, `${slug}.mdx`)
    if (!fs.existsSync(fullPath)) {
      return null
    }
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    const readingTimeResult = readingTime(content)
    
    return {
      slug,
      frontmatter: {
        ...data,
        readingTime: readingTimeResult.minutes,
      } as PostFrontmatter,
      content,
      readingTime: readingTimeResult.minutes,
    }
  } catch {
    return null
  }
}

export function getRelatedPosts(currentSlug: string, limit: number = 2): Post[] {
  const allPosts = getAllPosts()
  const currentPost = getPostBySlug(currentSlug)
  
  if (!currentPost) {
    return allPosts.slice(0, limit)
  }

  const related = allPosts
    .filter(post => post.slug !== currentSlug)
    .filter(post => {
      const currentKeywords = currentPost.frontmatter.keywords || []
      const postKeywords = post.frontmatter.keywords || []
      return currentKeywords.some(keyword => postKeywords.includes(keyword))
    })
    .slice(0, limit)

  if (related.length < limit) {
    const remaining = allPosts
      .filter(post => post.slug !== currentSlug && !related.includes(post))
      .slice(0, limit - related.length)
    return [...related, ...remaining]
  }

  return related
}
