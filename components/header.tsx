import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              PictoPicSearch
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/pictopic-search" className="text-sm font-medium hover:text-primary transition-colors">
              Pictopic Search
            </Link>
            <Link href="/reverse-image-search" className="text-sm font-medium hover:text-primary transition-colors">
              Reverse Search
            </Link>
            <Link href="/tools" className="text-sm font-medium hover:text-primary transition-colors">
              Tools
            </Link>
            <Link href="/providers" className="text-sm font-medium hover:text-primary transition-colors">
              Providers
            </Link>
            <Link href="/blog" className="text-sm font-medium hover:text-primary transition-colors">
              Blog
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/pro">
            <Button variant="outline" size="sm">Pro</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
