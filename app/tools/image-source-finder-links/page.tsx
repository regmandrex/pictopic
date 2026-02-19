'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { providers, generateProviderSearchUrl } from '@/lib/providers'
import { ExternalLink, AlertCircle } from 'lucide-react'

export default function ImageSourceFinderLinksPage() {
  const [imageUrl, setImageUrl] = useState('')
  const [selectedProviders, setSelectedProviders] = useState<string[]>(['tineye'])
  const [imagePreview, setImagePreview] = useState<string | null>(null)

  const handleImageUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value
    setImageUrl(url)
    if (url && isValidUrl(url)) {
      setImagePreview(url)
    } else {
      setImagePreview(null)
    }
  }

  const isValidUrl = (string: string) => {
    try {
      new URL(string)
      return true
    } catch (_) {
      return false
    }
  }

  const handleProviderToggle = (providerId: string) => {
    setSelectedProviders(prev =>
      prev.includes(providerId)
        ? prev.filter(id => id !== providerId)
        : [...prev, providerId]
    )
  }

  const handleSearch = () => {
    if (!imageUrl || !isValidUrl(imageUrl)) {
      alert('Please enter a valid image URL')
      return
    }

    if (selectedProviders.length === 0) {
      alert('Please select at least one provider')
      return
    }

    selectedProviders.forEach(providerId => {
      const searchUrl = generateProviderSearchUrl(providerId, imageUrl)
      if (searchUrl) {
        window.open(searchUrl, '_blank', 'noopener,noreferrer')
      }
    })
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const dataUrl = reader.result as string
        setImagePreview(dataUrl)
        alert('Image preview loaded. Please upload this image directly to your chosen provider.')
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Image Source Finder Links</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Track down the original source and creator of images. Find where images first appeared online.
        </p>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Image Input</CardTitle>
            <CardDescription>
              Enter an image URL or upload an image file
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="imageUrl">Image URL</Label>
              <Input
                id="imageUrl"
                type="url"
                placeholder="https://example.com/image.jpg"
                value={imageUrl}
                onChange={handleImageUrlChange}
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="fileUpload">Or Upload Image (Preview Only)</Label>
              <Input
                id="fileUpload"
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="mt-2"
              />
            </div>
            {imagePreview && (
              <div className="mt-4">
                <p className="text-sm font-medium mb-2">Preview:</p>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="max-w-full h-auto max-h-64 rounded border"
                  onError={() => setImagePreview(null)}
                />
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Select Providers</CardTitle>
            <CardDescription>
              Choose providers best suited for finding image sources (TinEye is recommended)
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {providers.map(provider => (
              <div key={provider.id} className="flex items-start space-x-3 p-4 border rounded-lg">
                <Checkbox
                  id={provider.id}
                  checked={selectedProviders.includes(provider.id)}
                  onCheckedChange={() => handleProviderToggle(provider.id)}
                />
                <div className="flex-1">
                  <Label
                    htmlFor={provider.id}
                    className="text-base font-medium cursor-pointer"
                  >
                    {provider.displayName}
                  </Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    {provider.description}
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="bg-yellow-50 dark:bg-yellow-950 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-8 flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
          <div className="flex-1">
            <p className="font-medium text-yellow-900 dark:text-yellow-100 mb-1">
              Disclaimer
            </p>
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              We don&apos;t store images. We only generate links to official provider search pages.
            </p>
          </div>
        </div>

        <Button
          size="lg"
          onClick={handleSearch}
          disabled={!imageUrl || selectedProviders.length === 0}
          className="w-full"
        >
          Find Image Sources
          <ExternalLink className="ml-2 h-4 w-4" />
        </Button>

        <article className="mt-16 prose prose-lg dark:prose-invert max-w-none">
          <h2 className="text-3xl font-bold mb-6">Complete Guide to Finding Image Sources</h2>
          
          <p className="text-lg mb-6">
            Finding the original source of an image is crucial for proper attribution, licensing, copyright verification, and 
            understanding an image's context and history. Our image source finder links tool simplifies this process by connecting 
            you to the best providers for tracking down image origins. This comprehensive guide explains everything you need to 
            know about finding image sources, why it matters, and how to use our tool effectively to locate original creators 
            and sources.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Why Finding Image Sources Matters</h3>
          <p className="mb-4">
            In today's digital age, images are shared, reposted, and reused constantly across the web. An image you find on one 
            website might have originated from a completely different source, and tracking down that original source is essential 
            for several reasons:
          </p>
          <p className="mb-4">
            <strong>Proper Attribution:</strong> If you're using an image in your own work, you need to credit the original creator. 
            Finding the source helps you identify who created the image and how they want to be credited. This is not just ethical—it's 
            often legally required.
          </p>
          <p className="mb-4">
            <strong>Licensing and Permissions:</strong> Before using an image, you need to understand its licensing terms. Some images 
            are free to use, some require attribution, some require payment, and some cannot be used without explicit permission. 
            Finding the source helps you understand what rights you have and what permissions you need.
          </p>
          <p className="mb-4">
            <strong>Copyright Protection:</strong> If you're a photographer, artist, or content creator, finding where your images 
            appear helps you protect your copyright. You can identify unauthorized use, request proper attribution, or take action 
            against copyright infringement.
          </p>
          <p className="mb-4">
            <strong>Verification and Fact-Checking:</strong> In journalism and research, verifying image sources is crucial for 
            accuracy. Finding the original source helps confirm an image's authenticity, context, and whether it's being used 
            appropriately.
          </p>
          <p className="mb-4">
            <strong>Higher Quality Versions:</strong> Often, the original source has higher resolution or better quality versions 
            of an image. Finding the source can lead you to the best quality version available.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">How Image Source Finding Works</h3>
          <p className="mb-4">
            Image source finding uses reverse image search technology combined with date tracking and source verification. When you 
            search for an image's source, search engines analyze the image and find where it appears across the web. By examining 
            publication dates, metadata, and context, you can identify which appearance is likely the original source.
          </p>
          <p className="mb-4">
            The process involves several steps: first, the search engine finds all instances of the image (or similar images) across 
            its index. Then, it provides information about when each instance was first seen or published. The earliest date is often 
            (though not always) the original source. Finally, you examine the context of each result to determine which is the most 
            credible original source.
          </p>
          <p className="mb-4">
            Some search providers specialize in source finding. TinEye, for example, tracks "first seen" dates for images, making 
            it particularly useful for finding original sources. Other providers like Google Images and Bing can also help, but 
            they may not always provide clear date information.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">How Our Image Source Finder Links Tool Works</h3>
          <p className="mb-4">
            Our tool is specifically designed to help you find image sources efficiently. It connects you to providers that excel 
            at source finding, particularly TinEye, which specializes in tracking image origins. The tool works similarly to our 
            other tools—you provide an image (via URL or file upload), select providers, and our tool generates links that take you 
            directly to each provider's search interface.
          </p>
          <p className="mb-4">
            The tool is pre-configured to prioritize TinEye, which is the best provider for finding image sources due to its "first 
            seen" date tracking. However, you can also select other providers to cross-reference results and get a more 
            comprehensive view of where an image appears online.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Step-by-Step Process for Finding Image Sources</h3>
          <p className="mb-4">
            <strong>Step 1: Prepare Your Image</strong> Use the highest quality version available. If the image is small or heavily 
            compressed, try to find a better version first. Avoid editing or re-saving the image, as this can change its digital 
            signature and reduce match accuracy.
          </p>
          <p className="mb-4">
            <strong>Step 2: Use Our Tool</strong> Paste the image URL or upload the image file, select providers (TinEye is 
            recommended for source finding), and click the search button. Our tool will open each provider's search page with your 
            image ready to search.
          </p>
          <p className="mb-4">
            <strong>Step 3: Review Dates and Context</strong> Look for "first seen" dates or publication dates. The earliest date 
            is often the original source, but not always—sometimes images are uploaded to multiple platforms simultaneously. Check 
            the context of each result to determine credibility.
          </p>
          <p className="mb-4">
            <strong>Step 4: Examine Source Credibility</strong> Click through to promising results and look for creator names, 
            copyright notices, original captions, and links to creator websites. More credible sources typically include attribution 
            information and links to the creator's portfolio or website.
          </p>
          <p className="mb-4">
            <strong>Step 5: Cross-Reference Multiple Providers</strong> Don't rely on just one provider. Use multiple providers 
            to cross-reference results and verify findings. Consistency across providers strengthens your conclusion about the 
            original source.
          </p>
          <p className="mb-4">
            <strong>Step 6: Document Your Findings</strong> Save the URL of the original source, the date you found it, creator 
            information, and any licensing details. This documentation is essential if you plan to use the image or need to provide 
            attribution.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Best Practices for Finding Image Sources</h3>
          <p className="mb-4">
            <strong>Start with TinEye:</strong> TinEye is specifically designed for source finding and provides "first seen" dates 
            that are invaluable for identifying original sources. Always include TinEye in your search when looking for image origins.
          </p>
          <p className="mb-4">
            <strong>Check Multiple Providers:</strong> Different providers have different indexes and may find different instances 
            of an image. Using multiple providers gives you a more complete picture of where an image appears and helps you identify 
            the most credible original source.
          </p>
          <p className="mb-4">
            <strong>Look Beyond the First Result:</strong> The first result isn't always the original source. Review multiple results, 
            check dates carefully, and examine context. Sometimes the original source appears further down in the results.
          </p>
          <p className="mb-4">
            <strong>Examine Context Carefully:</strong> Look at the webpage where each result appears. Original sources typically 
            have creator information, copyright notices, original captions, and links to creator websites. Reposted images often 
            lack this context.
          </p>
          <p className="mb-4">
            <strong>Check Metadata When Possible:</strong> Some images contain EXIF metadata with creation dates, camera information, 
            and sometimes creator information. While this metadata can be stripped or modified, it can provide valuable clues about 
            the image's origin.
          </p>
          <p className="mb-4">
            <strong>Consider Multiple "Originals":</strong> Sometimes an image has multiple legitimate sources—for example, a 
            photographer might post to their website, a stock photo site, and social media simultaneously. In these cases, look 
            for the most authoritative source (typically the creator's own website or portfolio).
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Understanding Search Results</h3>
          <p className="mb-4">
            When searching for image sources, you'll encounter different types of results:
          </p>
          <p className="mb-4">
            <strong>Exact Matches:</strong> These are identical copies of your image. They're the most reliable for source finding, 
            as they represent the same image appearing in different places.
          </p>
          <p className="mb-4">
            <strong>Date Information:</strong> Some providers show "first seen" dates or publication dates. This is crucial for 
            identifying original sources—the earliest date is often the original, though you should verify this with context.
          </p>
          <p className="mb-4">
            <strong>Context and Attribution:</strong> Each result links to a webpage where the image appears. Examining this 
            context helps you determine which source is most credible and original.
          </p>
          <p className="mb-4">
            <strong>Similar Images:</strong> Sometimes you'll find similar but not identical images. These can still be useful—they 
            might be variations from the same creator or related content that helps you understand the image's origin.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Common Challenges and Solutions</h3>
          <p className="mb-4">
            <strong>No Results Found:</strong> If you're not getting results, the image might be very new, very obscure, or not 
            indexed by search engines. Try using different providers, and consider that some images genuinely may not have a 
            traceable online source.
          </p>
          <p className="mb-4">
            <strong>Multiple Early Dates:</strong> Sometimes multiple results show similar early dates. This can happen when images 
            are uploaded to multiple platforms simultaneously. In these cases, look for the most authoritative source (creator's 
            website, official portfolio, or reputable stock photo site).
          </p>
          <p className="mb-4">
            <strong>Stolen or Reposted Images:</strong> Unfortunately, many images are reposted without attribution. If you find an 
            image on a site that doesn't credit the creator, look for earlier instances or check if the site links to an original 
            source. Sometimes reposted images include watermarks or metadata that point to the original creator.
          </p>
          <p className="mb-4">
            <strong>Stock Photos:</strong> Stock photos can be challenging because they appear on many sites. Look for the stock 
            photo agency's website (like Shutterstock, Getty Images, or Unsplash) as the authoritative source, even if the image 
            appears elsewhere first chronologically.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Legal and Ethical Considerations</h3>
          <p className="mb-4">
            Finding image sources isn't just about convenience—it's often a legal and ethical requirement. When you use an image, 
            you need to:
          </p>
          <p className="mb-4">
            <strong>Respect Copyright:</strong> Most images are protected by copyright, even if they don't have a visible copyright 
            notice. Finding the source helps you understand who owns the copyright and what rights you have.
          </p>
          <p className="mb-4">
            <strong>Follow Licensing Terms:</strong> Different images have different licenses. Some are free to use with attribution, 
            some require payment, and some cannot be used without explicit permission. Finding the source helps you understand 
            and comply with licensing terms.
          </p>
          <p className="mb-4">
            <strong>Provide Proper Attribution:</strong> Even when images are free to use, proper attribution is often required. 
            Finding the source helps you credit the creator correctly.
          </p>
          <p className="mb-4">
            <strong>Request Permissions:</strong> If an image requires permission to use, finding the source helps you contact 
            the right person or organization to request that permission.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Advanced Techniques</h3>
          <p className="mb-4">
            <strong>Crop to Distinctive Elements:</strong> If your full image isn't finding good results, try cropping to the most 
            distinctive element (like a unique logo, face, or object). This can improve match accuracy and help you find sources 
            more effectively.
          </p>
          <p className="mb-4">
            <strong>Search Variations:</strong> If an image has been edited or modified, try searching with different versions. 
            Sometimes the original unedited version appears in search results even if the edited version doesn't.
          </p>
          <p className="mb-4">
            <strong>Check Watermarks:</strong> Many images have watermarks that indicate their source. Even if a watermark is 
            removed in a reposted version, searching with the watermarked version can help you find the original source.
          </p>
          <p className="mb-4">
            <strong>Use Metadata:</strong> If you have access to the original image file, check its EXIF metadata for creation 
            dates, camera information, and sometimes creator information. This can provide valuable clues about the image's origin.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Conclusion</h3>
          <p className="mb-4">
            Finding image sources is essential for proper attribution, licensing compliance, copyright protection, and verification. 
            Our image source finder links tool makes this process easier by connecting you to the best providers for source finding, 
            particularly TinEye with its "first seen" date tracking.
          </p>
          <p className="mb-4">
            By understanding how image source finding works, following best practices, using multiple providers, and carefully 
            examining dates and context, you can reliably track down original sources and ensure you're using images legally and 
            ethically. Whether you're a content creator protecting your work, a researcher verifying information, or someone using 
            images in your projects, finding sources is a crucial skill in today's digital landscape.
          </p>
        </article>
      </div>
    </div>
  )
}
