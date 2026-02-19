'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { providers, generateProviderSearchUrl } from '@/lib/providers'
import { ExternalLink, AlertCircle } from 'lucide-react'

export default function ReverseImageSearchLinksPage() {
  const [imageUrl, setImageUrl] = useState('')
  const [selectedProviders, setSelectedProviders] = useState<string[]>([])
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
        alert('Image preview loaded. Please upload this image directly to your chosen provider. We only generate links to official search pages.')
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Reverse Image Search Links</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Generate safe links to official reverse image search providers. Paste an image URL or upload an image to get started.
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
              <p className="text-sm text-muted-foreground mt-2">
                Note: We only generate previews. You&apos;ll need to upload directly to providers.
              </p>
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
              Choose which search providers to use
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
                  <div className="flex gap-4 mt-2 text-xs text-muted-foreground">
                    <span>{provider.free ? 'Free' : 'Paid'}</span>
                    {provider.requiresAccount && <span>Requires Account</span>}
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="bg-yellow-50 dark:bg-yellow-950 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-8 flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
          <div className="flex-1">
            <p className="font-medium text-yellow-900 dark:text-yellow-100 mb-1">
              Important Disclaimer
            </p>
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              We don&apos;t store images or send files to any servers. We only generate links to official provider search pages. 
              You&apos;ll upload images directly to the providers when you click the search links.
            </p>
          </div>
        </div>

        <Button
          size="lg"
          onClick={handleSearch}
          disabled={!imageUrl || selectedProviders.length === 0}
          className="w-full"
        >
          Open Searches in New Tabs
          <ExternalLink className="ml-2 h-4 w-4" />
        </Button>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">How to Use</h2>
          <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
            <li>Paste an image URL or upload an image file</li>
            <li>Select one or more search providers</li>
            <li>Click the button to open searches in new tabs</li>
            <li>Upload your image directly to each provider&apos;s search page</li>
            <li>Review the search results</li>
          </ol>
        </div>

        <article className="mt-16 prose prose-lg dark:prose-invert max-w-none">
          <h2 className="text-3xl font-bold mb-6">Complete Guide to Reverse Image Search Links</h2>
          
          <p className="text-lg mb-6">
            Reverse image search is one of the most powerful tools available for finding image sources, verifying authenticity, 
            discovering similar content, and tracking where images appear online. Our reverse image search links tool simplifies 
            this process by allowing you to search the same image across multiple providers simultaneously. This comprehensive 
            guide explains everything you need to know about reverse image search, how to use our tool effectively, and the 
            best practices for getting accurate, useful results.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">What Is Reverse Image Search?</h3>
          <p className="mb-4">
            Reverse image search (also called pictopic search or search by image) lets you search the web using an image 
            instead of text. Instead of typing keywords, you upload a photo or paste an image URL, and the search engine 
            analyzes the visual content to find where that image—or visually similar images—appears online. This technology 
            uses computer vision and machine learning to identify images based on their visual features, colors, shapes, 
            textures, and patterns.
          </p>
          <p className="mb-4">
            The technology behind reverse image search has evolved significantly over the past decade. Early systems relied 
            primarily on exact pixel matching, which meant they could only find identical copies of images. Modern systems use 
            advanced algorithms that can recognize images even when they've been resized, cropped, edited, or compressed. Some 
            engines can even identify the same subject photographed from different angles or in different lighting conditions.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Why Use Multiple Search Providers?</h3>
          <p className="mb-4">
            Different reverse image search providers have different strengths, indexes, and algorithms. Google Images has the 
            largest index and is excellent for finding where images appear across the web. Yandex excels at face recognition 
            and finding similar images, especially for faces and people. TinEye specializes in finding exact matches and tracking 
            image origins with "first seen" dates. Bing Visual Search is strong for product identification and shopping-related 
            queries. Pinterest is excellent for design inspiration and style-based similarity.
          </p>
          <p className="mb-4">
            By using multiple providers simultaneously, you dramatically increase your chances of finding what you're looking for. 
            An image might appear in Google's index but not in TinEye's, or vice versa. Some providers index certain types of 
            content more thoroughly—for example, TinEye has extensive coverage of stock photos and news images, while Pinterest 
            has better coverage of design and creative work. Our reverse image search links tool eliminates the need to manually 
            paste your image URL into each provider's website, saving time and ensuring you don't miss any important results.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">How Our Reverse Image Search Links Tool Works</h3>
          <p className="mb-4">
            Our tool is designed to be simple, fast, and privacy-focused. When you paste an image URL or upload an image file, 
            we generate properly encoded links to the official search pages of each provider you select. We don't store your 
            images, process them on our servers, or send them anywhere—we simply create the links that take you directly to each 
            provider's search interface with your image ready to search.
          </p>
          <p className="mb-4">
            The process is straightforward: you provide the image (via URL or file upload), select which providers you want to 
            use, and click the button. The tool opens each provider's search page in a new tab, and you upload your image 
            directly to each provider according to their interface. This approach ensures maximum privacy—your images never 
            pass through our servers—and gives you direct access to each provider's full feature set.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Common Use Cases for Reverse Image Search</h3>
          <p className="mb-4">
            <strong>Finding Image Sources:</strong> One of the most common uses is tracking down the original source or creator 
            of an image. This is essential for proper attribution, licensing, or simply learning more about an image's origin. 
            When you find an image online and want to know where it came from, reverse image search can trace it back to its 
            original publication, photographer, or website.
          </p>
          <p className="mb-4">
            <strong>Verifying Authenticity:</strong> Reverse image search is invaluable for fact-checking and verifying whether 
            an image is real or has been manipulated. By finding where else an image appears online and checking the dates and 
            context, you can determine if an image is being used misleadingly or if it's been edited or taken out of context.
          </p>
          <p className="mb-4">
            <strong>Finding Higher Resolution:</strong> If you have a small or low-quality version of an image, reverse image 
            search can help you find larger, higher-resolution versions. Many search results will show different sizes of the same 
            image, allowing you to download a better quality version for your needs.
          </p>
          <p className="mb-4">
            <strong>Discovering Similar Images:</strong> Whether you're looking for design inspiration, product alternatives, or 
            variations of a particular image, reverse image search can surface visually similar content. This is particularly 
            useful for designers, marketers, and content creators who need alternatives or want to explore different styles.
          </p>
          <p className="mb-4">
            <strong>Tracking Image Usage:</strong> If you're a photographer, artist, or content creator, reverse image search 
            helps you monitor where your images appear online. This is crucial for copyright protection and understanding how 
            your work is being used across the web.
          </p>
          <p className="mb-4">
            <strong>Identifying Products:</strong> Have you ever seen a product in an image and wanted to know what it is or 
            where to buy it? Reverse image search can identify products, find shopping links, and help you locate where to 
            purchase items you've seen in photos.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Best Practices for Effective Reverse Image Search</h3>
          <p className="mb-4">
            <strong>Use High-Quality Images:</strong> The better the quality of your source image, the better your search results 
            will be. Blurry, heavily compressed, or very small images may not match well. If possible, use the highest resolution 
            version available, and avoid re-saving or re-compressing images before searching.
          </p>
          <p className="mb-4">
            <strong>Crop to Key Elements:</strong> If your image contains multiple subjects or is very busy, consider cropping 
            to the most distinctive or important element. For example, if you're searching for a person, crop to focus on their 
            face. If you're searching for a product, crop to show just the product. This can improve match accuracy and reduce 
            irrelevant results.
          </p>
          <p className="mb-4">
            <strong>Try Multiple Providers:</strong> As mentioned earlier, different providers have different strengths. Don't 
            rely on just one provider—use our tool to search across multiple engines simultaneously. You'll get more comprehensive 
            results and increase your chances of finding what you need.
          </p>
          <p className="mb-4">
            <strong>Check Multiple Result Pages:</strong> Don't stop at the first page of results. The most relevant or earliest 
            source might appear on page 2, 3, or beyond. Take time to explore multiple pages, especially when looking for original 
            sources or tracking image usage.
          </p>
          <p className="mb-4">
            <strong>Compare Dates and Context:</strong> When verifying authenticity or finding sources, pay attention to publication 
            dates and context. The earliest date is often (though not always) the original source. Compare the context across 
            different results to understand how the image has been used and whether any usage is misleading.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Understanding Search Results</h3>
          <p className="mb-4">
            When you perform a reverse image search, you'll typically see several types of results:
          </p>
          <p className="mb-4">
            <strong>Exact Matches:</strong> These are identical or nearly identical copies of your image. They're useful for 
            finding duplicates, tracking usage, and locating sources. Exact matches are usually the most reliable for finding 
            where an image originally appeared.
          </p>
          <p className="mb-4">
            <strong>Similar Images:</strong> These are visually related images that share similar colors, composition, subjects, 
            or styles. They're useful for finding alternatives, inspiration, or related content. Similar image results can help 
            you discover variations, different angles, or related products.
          </p>
          <p className="mb-4">
            <strong>Different Sizes:</strong> The same image may appear at various resolutions across different websites. Some 
            results will link to larger or higher-quality versions, which is helpful when you need a better quality image.
          </p>
          <p className="mb-4">
            <strong>Websites and Context:</strong> Each result links to a webpage where the image appears. This context is 
            crucial for understanding how the image is being used, finding attribution information, and verifying authenticity.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Privacy and Security Considerations</h3>
          <p className="mb-4">
            Our reverse image search links tool is designed with privacy in mind. We don't store your images, process them on 
            our servers, or track your searches. When you use our tool, your images are handled entirely client-side until you 
            choose to upload them to a provider. This means your images never leave your device until you explicitly upload them 
            to a search provider.
          </p>
          <p className="mb-4">
            However, it's important to understand that when you upload an image to a search provider (like Google Images or TinEye), 
            that provider will process and potentially store your image according to their privacy policy. Each provider has 
            different policies regarding how long they store images, whether they use them to improve their services, and how 
            they handle your data. We recommend reviewing each provider's privacy policy if you have concerns about how your 
            images are handled.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Troubleshooting Common Issues</h3>
          <p className="mb-4">
            <strong>No Results Found:</strong> If you're not getting results, try using a different provider—some engines have 
            better coverage for certain types of images. Also, ensure you're using a high-quality image and consider cropping to 
            focus on the most distinctive element.
          </p>
          <p className="mb-4">
            <strong>Too Many Irrelevant Results:</strong> If you're getting too many irrelevant matches, try cropping your image 
            to focus on the specific element you're searching for. You can also try different providers, as some are better at 
            filtering and ranking results.
          </p>
          <p className="mb-4">
            <strong>Image URL Not Working:</strong> Make sure the image URL is publicly accessible and points directly to an image 
            file (usually ending in .jpg, .png, .gif, etc.). Some URLs point to pages containing images rather than the images 
            themselves, which won't work for reverse image search.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Advanced Tips and Techniques</h3>
          <p className="mb-4">
            <strong>Search Individual Elements:</strong> If your image contains multiple distinct subjects, try searching each 
            element separately. For example, if you have an image with a person and a product, search for each separately to 
            find more specific results for each.
          </p>
          <p className="mb-4">
            <strong>Use Browser Extensions:</strong> Many reverse image search providers offer browser extensions that let you 
            right-click any image on a webpage and search it instantly. This can be faster than copying URLs or uploading files.
          </p>
          <p className="mb-4">
            <strong>Combine with Text Search:</strong> After identifying key elements from your image search results, combine 
            that information with text searches to find more context or related information. For example, if you identify a 
            person or product, search for their name along with relevant keywords.
          </p>
          <p className="mb-4">
            <strong>Monitor Your Own Images:</strong> If you're a content creator, regularly run reverse image searches on your 
            own key images to monitor where they appear online. This helps with copyright protection and understanding how your 
            work is being used.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Conclusion</h3>
          <p className="mb-4">
            Reverse image search is an incredibly powerful tool for finding sources, verifying authenticity, discovering similar 
            content, and tracking image usage. Our reverse image search links tool makes it easy to search across multiple 
            providers simultaneously, saving you time and ensuring comprehensive results. By understanding how reverse image 
            search works, following best practices, and using multiple providers, you can unlock the full potential of this 
            technology for your specific needs.
          </p>
          <p className="mb-4">
            Whether you're a content creator protecting your work, a researcher verifying information, a designer seeking inspiration, 
            or simply someone trying to find the source of an interesting image, reverse image search can help you achieve your 
            goals. Start using our tool today and experience the power of searching the web with images instead of words.
          </p>
        </article>
      </div>
    </div>
  )
}
