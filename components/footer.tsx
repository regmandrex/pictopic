import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">PictoPicSearch</h3>
            <p className="text-sm text-muted-foreground">
              Your trusted companion for pictopic search and reverse image search. Find similar images, sources, and higher-resolution versions.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Tools</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/tools/reverse-image-search-links" className="text-muted-foreground hover:text-foreground">
                  Reverse Image Search
                </Link>
              </li>
              <li>
                <Link href="/tools/similar-image-search-links" className="text-muted-foreground hover:text-foreground">
                  Similar Image Search
                </Link>
              </li>
              <li>
                <Link href="/tools/image-source-finder-links" className="text-muted-foreground hover:text-foreground">
                  Image Source Finder
                </Link>
              </li>
              <li>
                <Link href="/tools/image-keyword-generator" className="text-muted-foreground hover:text-foreground">
                  Keyword Generator
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/pictopic-search" className="text-muted-foreground hover:text-foreground">
                  Pictopic Search Guide
                </Link>
              </li>
              <li>
                <Link href="/providers" className="text-muted-foreground hover:text-foreground">
                  Compare Providers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} PictoPicSearch. All rights reserved.</p>
          <p className="mt-2">Pictopic search tools and guides to help you find images safely.</p>
        </div>
      </div>
    </footer>
  )
}
