import type { MDXComponents } from 'mdx/types'

// Simplified MDX components to avoid React version conflicts
// Most styling is handled by Tailwind's prose classes
const baseMDXComponents: MDXComponents = {
  a: function Anchor({ href, children, ...props }) {
    if (href?.startsWith('http')) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
          {children}
        </a>
      )
    }
    return <a href={href ?? '#'} {...props}>{children}</a>
  },
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return { ...baseMDXComponents, ...components }
}

/** Use in Server Components (e.g. async pages) where hooks cannot be used */
export function getMDXComponents(components: MDXComponents = {}): MDXComponents {
  return { ...baseMDXComponents, ...components }
}
