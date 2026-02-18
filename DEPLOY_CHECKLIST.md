# Deployment Checklist

## Pre-Deployment

### Environment Variables
- [ ] Set `NEXT_PUBLIC_SITE_URL` to your production domain (e.g., `https://pictopicsearch.com`)
- [ ] Verify all environment variables are set correctly

### Build Verification
- [ ] Run `pnpm install` to install all dependencies
- [ ] Run `pnpm build` to verify build succeeds
- [ ] Check for build warnings or errors
- [ ] Verify all pages generate correctly (SSG)
- [ ] Test dynamic routes work properly

### Content Verification
- [ ] Verify all 25 MDX blog posts are present in `/content/posts/`
- [ ] Check all provider pages generate correctly
- [ ] Verify use-case pages generate correctly
- [ ] Test blog index and individual post pages

### Functionality Testing
- [ ] Test reverse image search tool
- [ ] Test similar image search tool
- [ ] Test image source finder tool
- [ ] Test keyword generator tool
- [ ] Verify all internal links work
- [ ] Test navigation menu
- [ ] Verify footer links

### SEO Files
- [ ] Verify `/sitemap.xml` generates correctly
- [ ] Verify `/robots.txt` is accessible
- [ ] Check all canonical URLs are correct
- [ ] Verify JSON-LD schemas render correctly

## Vercel Deployment

### Initial Setup
- [ ] Connect repository to Vercel
- [ ] Set build command: `pnpm build`
- [ ] Set output directory: `.next`
- [ ] Set install command: `pnpm install`

### Environment Configuration
- [ ] Add `NEXT_PUBLIC_SITE_URL` environment variable
- [ ] Verify environment variables are set in Vercel dashboard

### Domain Configuration
- [ ] Add custom domain (pictopicsearch.com)
- [ ] Configure DNS records
- [ ] Enable SSL/HTTPS
- [ ] Verify domain redirects work

### Post-Deployment

### Verification
- [ ] Test homepage loads correctly
- [ ] Verify all pages are accessible
- [ ] Check sitemap is accessible at `/sitemap.xml`
- [ ] Verify robots.txt at `/robots.txt`
- [ ] Test all tools functionality
- [ ] Check mobile responsiveness
- [ ] Verify performance metrics

### SEO Verification
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Verify structured data with Google Rich Results Test
- [ ] Check OpenGraph tags with social media debuggers
- [ ] Verify canonical URLs

### Monitoring
- [ ] Set up error monitoring (e.g., Sentry)
- [ ] Configure analytics (e.g., Google Analytics)
- [ ] Set up uptime monitoring
- [ ] Configure performance monitoring

## Platform-Agnostic Notes

If deploying elsewhere (not Vercel):

### Static Export Option
- [ ] Run `next build` and `next export` if needed
- [ ] Upload `.next` or `out` directory to hosting
- [ ] Configure server for Next.js if using SSR features

### Server Requirements
- [ ] Node.js 18+ installed
- [ ] Sufficient memory for build process
- [ ] Proper file permissions set

## Post-Launch

### Content Updates
- [ ] Plan regular blog post schedule
- [ ] Update provider information as needed
- [ ] Keep use-case content current

### Performance Optimization
- [ ] Monitor Core Web Vitals
- [ ] Optimize images if needed
- [ ] Consider CDN for static assets
- [ ] Monitor bundle sizes

### Security
- [ ] Review security headers
- [ ] Verify HTTPS is enforced
- [ ] Check for security vulnerabilities
- [ ] Keep dependencies updated

## Rollback Plan

If issues occur:
- [ ] Keep previous deployment as backup
- [ ] Document rollback procedure
- [ ] Test rollback process
