/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  experimental: {
    mdxRs: false,
    outputFileTracingIncludes: {
      '/blog/[slug]': ['./content/posts/**/*'],
    },
  },
}

module.exports = nextConfig
