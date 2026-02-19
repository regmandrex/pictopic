import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'

interface MDXContentProps {
  source: string
}

export function MDXContent({ source }: MDXContentProps) {
  if (!source || source.trim() === '') {
    return <p className="text-muted-foreground">Content not available.</p>
  }

  return (
    <MDXRemote
      source={source}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
        },
        parseFrontmatter: false,
      }}
    />
  )
}
