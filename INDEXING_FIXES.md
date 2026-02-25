# Fixing Google Search Console Indexing Issues

This doc addresses the **Server error (5xx)** and **Page with redirect** issues reported by Google Search Console for pictopicsearch.com.

## Changes Made in This Repo

### 1. Server error (5xx)

- **Sitemap hardening** (`app/sitemap.ts`): Blog post URLs are now built inside a try/catch. If reading content fails (e.g. in serverless when `content/posts` isn’t available), the sitemap still returns all static, provider, and use-case URLs with a 200. That prevents the sitemap URL itself from returning 5xx and ensures crawlers can at least index non-blog pages.
- **File tracing** (`next.config.js`): `outputFileTracingIncludes` was extended so the routes that serve the sitemap include `content/posts`. That makes it more likely blog content is available when generating the sitemap in production (e.g. on Vercel).
- **Root error UI** (`app/error.tsx`): A root `error.tsx` was added so uncaught errors in the app show a “Something went wrong” page with Try again / Home / Blog instead of a raw 5xx. This improves user and crawler experience when something fails.

### 2. Page with redirect

- The app does **not** define redirects in `next.config.js` or middleware. “Page with redirect” in Search Console is usually from:
  - **Host-level redirects**: e.g. `www.pictopicsearch.com` → `pictopicsearch.com` or HTTP → HTTPS (Vercel/hosting).
  - **Canonical**: We already use canonicals; ensure `NEXT_PUBLIC_SITE_URL` is set to the single canonical domain you want (e.g. `https://pictopicsearch.com` with no `www` if that’s your choice).

If you want Google to treat one host as canonical:

- In **Vercel** (or your host): Set the **canonical domain** (e.g. `pictopicsearch.com`) and redirect `www` → non-`www` (or the opposite) once. Avoid redirect chains.
- In **Search Console**: Add the **property** for the canonical host (e.g. `https://pictopicsearch.com`) and optionally the redirecting host (e.g. `https://www.pictopicsearch.com`) so you can see which URLs are “redirect” and confirm they point to the canonical host.

## What You Should Do in Search Console

1. **Open the indexing report** (e.g. “Open indexing report” in the email) and note which URLs get “Server error (5xx)” and which get “Page with redirect”.
2. **Re-check after deploy**: Deploy these changes, then in Search Console use “URL Inspection” for a few previously 5xx URLs (e.g. `/sitemap.xml`, `/blog/…`) and “Test live URL” to confirm they now return 200.
3. **Request re-indexing** for important URLs that were failing; re-crawling may take days.
4. **Redirects**: If the report lists specific “Page with redirect” URLs, open one in a browser (or use “Test live URL”) and confirm the redirect target is your intended canonical URL and that there’s only one redirect (no chain).

## Environment / Hosting Checklist

- [ ] `NEXT_PUBLIC_SITE_URL` set to canonical base URL (e.g. `https://pictopicsearch.com`).
- [ ] One canonical host (www vs non-www) configured and the other redirects to it.
- [ ] After deploy, `/sitemap.xml` returns 200 and includes blog URLs when content is present.
- [ ] No unintended redirects in hosting/DNS (e.g. parking pages, multiple HTTP→HTTPS hops).

Once the above is in place and re-crawls complete, 5xx and redirect indexing issues in Search Console should decrease. If specific URLs still show 5xx, use server/hosting logs and “URL Inspection” to debug those routes.
