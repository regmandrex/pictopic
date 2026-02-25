/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Required for Turbopack compatibility with next-mdx-remote
  transpilePackages: ['next-mdx-remote'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Use Turbopack (Next 16 default). Custom webpack React aliases broke react/jsx-runtime resolution on Vercel.
  turbopack: {},
  outputFileTracingIncludes: {
    '/blog/[slug]': ['./content/posts/**/*'],
    '/sitemap': ['./content/posts/**/*'],
    '/sitemap.xml': ['./content/posts/**/*'],
  },
}

module.exports = nextConfig
