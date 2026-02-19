'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { providers, generateProviderSearchUrl } from '@/lib/providers'
import { ExternalLink, AlertCircle } from 'lucide-react'

export default function SimilarImageSearchLinksPage() {
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
        alert('Image preview loaded. Please upload this image directly to your chosen provider.')
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Similar Image Search Links</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Find visually similar images across multiple providers. Discover alternatives, variations, and related visual content.
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
              Choose which search providers to use for similar image search
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
          Open Similar Image Searches
          <ExternalLink className="ml-2 h-4 w-4" />
        </Button>

        <article className="mt-16 prose prose-lg dark:prose-invert max-w-none">
          <h2 className="text-3xl font-bold mb-6">Complete Guide to Similar Image Search</h2>
          
          <p className="text-lg mb-6">
            Similar image search is a powerful technology that helps you find visually related images based on style, composition, 
            subject matter, colors, or overall aesthetic. Unlike reverse image search which focuses on finding exact matches or 
            the same image, similar image search discovers images that share visual characteristics even if they're completely 
            different photos. Our similar image search links tool makes it easy to search across multiple providers simultaneously, 
            giving you access to the widest range of visually similar content. This comprehensive guide explains how similar image 
            search works, when to use it, and how to get the best results.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">What Is Similar Image Search?</h3>
          <p className="mb-4">
            Similar image search uses advanced computer vision and machine learning algorithms to analyze the visual features of 
            an image and find other images that share similar characteristics. These characteristics can include color palettes, 
            composition, textures, patterns, subjects, styles, moods, or overall aesthetic. The technology doesn't require exact 
            pixel matching—it understands visual concepts and can identify images that feel similar even if they're completely 
            different photographs.
          </p>
          <p className="mb-4">
            This technology is particularly powerful for creative professionals, designers, marketers, and anyone looking for 
            inspiration or alternatives. For example, if you have a photo of a sunset over the ocean, similar image search can 
            find other sunset photos, ocean scenes, or images with similar color schemes and moods, even if they're taken in 
            different locations or by different photographers.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">How Similar Image Search Differs from Reverse Image Search</h3>
          <p className="mb-4">
            While both technologies use images as search queries, they serve different purposes. Reverse image search is designed 
            to find exact matches, track image sources, and verify authenticity. It's best when you want to find where a specific 
            image appears online or locate the original source of an image.
          </p>
          <p className="mb-4">
            Similar image search, on the other hand, is designed for discovery and inspiration. It's ideal when you want to find 
            alternatives, explore variations, discover related content, or get design inspiration. If you're working on a project 
            and need images with a similar style or mood, similar image search can help you discover options you might not have 
            found through text-based search alone.
          </p>
          <p className="mb-4">
            Many search providers offer both exact match and similar image results. Our similar image search links tool focuses 
            on providers that excel at finding visually similar content, helping you get the best results for discovery and 
            inspiration purposes.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Common Use Cases for Similar Image Search</h3>
          <p className="mb-4">
            <strong>Design Inspiration:</strong> Designers and creative professionals use similar image search to find inspiration 
            for projects. By searching with a reference image that captures the style, mood, or aesthetic they're aiming for, they 
            can discover other images that share those characteristics. This is particularly useful for mood boards, concept 
            development, and exploring different visual directions.
          </p>
          <p className="mb-4">
            <strong>Finding Alternatives:</strong> If you've found an image you like but can't use (due to licensing, quality, or 
            other reasons), similar image search can help you find alternatives with similar visual characteristics. This is 
            especially useful for stock photo searches, where you might need multiple options that match a particular style or theme.
          </p>
          <p className="mb-4">
            <strong>Product Discovery:</strong> E-commerce and shopping sites use similar image search to help customers find 
            products that look similar to items they're interested in. If you see a product in an image and want to find similar 
            items, similar image search can surface alternatives from different brands or retailers.
          </p>
          <p className="mb-4">
            <strong>Style Exploration:</strong> Photographers, artists, and content creators use similar image search to explore 
            different styles and techniques. By searching with images that represent a particular style, they can discover other 
            work in that style, learn from different approaches, and find inspiration for their own projects.
          </p>
          <p className="mb-4">
            <strong>Content Curation:</strong> Content creators and marketers use similar image search to find images that match 
            their brand aesthetic or campaign theme. This helps maintain visual consistency across different pieces of content and 
            ensures all images align with the desired look and feel.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">How Our Similar Image Search Links Tool Works</h3>
          <p className="mb-4">
            Our tool simplifies the process of searching for similar images across multiple providers. You provide an image (via 
            URL or file upload), select which providers you want to use, and our tool generates links that take you directly to 
            each provider's similar image search interface. This saves time compared to manually uploading your image to each 
            provider separately.
          </p>
          <p className="mb-4">
            The tool supports all major providers that offer similar image search capabilities, including Google Images, Pinterest, 
            Bing Visual Search, and Yandex. Each provider has different strengths—Pinterest excels at style-based similarity and 
            design inspiration, Google Images has the largest index for general similarity, Bing is strong for product-related 
            similarity, and Yandex is excellent for finding visually similar content across different languages and regions.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Best Practices for Effective Similar Image Search</h3>
          <p className="mb-4">
            <strong>Use Clear, Representative Images:</strong> The quality of your source image directly impacts the quality of 
            your similar image results. Use clear, well-lit images that clearly represent the style, subject, or aesthetic you're 
            looking for. Avoid images that are too busy or contain multiple unrelated subjects, as this can confuse the search 
            algorithm.
          </p>
          <p className="mb-4">
            <strong>Focus on the Visual Elements You Want:</strong> If you're searching for images with a specific color scheme, 
            crop your image to emphasize those colors. If you're looking for similar compositions, use an image that clearly 
            shows the composition you want. The more focused your reference image is on the characteristics you're seeking, the 
            better your results will be.
          </p>
          <p className="mb-4">
            <strong>Try Multiple Providers:</strong> Different providers use different algorithms and have different indexes, so 
            you'll get different results from each. Our tool makes it easy to search across multiple providers simultaneously, 
            giving you access to the widest range of similar images.
          </p>
          <p className="mb-4">
            <strong>Refine Your Search:</strong> If your initial results aren't quite what you're looking for, try cropping your 
            image to focus on the most distinctive visual elements. You can also try different reference images that represent 
            the same style or aesthetic—different inputs will yield different similar image sets.
          </p>
          <p className="mb-4">
            <strong>Combine with Keywords:</strong> Many providers allow you to add text keywords along with your image search. 
            This can help narrow down results to specific themes or subjects while maintaining the visual similarity you're looking for.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Understanding Similar Image Results</h3>
          <p className="mb-4">
            When you perform a similar image search, you'll see results ranked by visual similarity. The most similar images 
            typically appear first, but similarity can be measured in different ways:
          </p>
          <p className="mb-4">
            <strong>Color Similarity:</strong> Images that share similar color palettes, even if the subjects are different. This 
            is useful for finding images that match a particular color scheme or mood.
          </p>
          <p className="mb-4">
            <strong>Composition Similarity:</strong> Images with similar layouts, framing, or compositional elements. Useful for 
            finding images that match a particular photographic style or design approach.
          </p>
          <p className="mb-4">
            <strong>Subject Similarity:</strong> Images featuring similar subjects, even if photographed differently. This helps 
            you find variations of the same type of content.
          </p>
          <p className="mb-4">
            <strong>Style Similarity:</strong> Images that share artistic styles, techniques, or aesthetic approaches. This is 
            particularly useful for design inspiration and exploring different visual styles.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Provider-Specific Strengths</h3>
          <p className="mb-4">
            <strong>Pinterest:</strong> Excellent for design inspiration, style-based similarity, and mood-based matching. Pinterest's 
            algorithm is particularly good at understanding aesthetic preferences and finding images that match a particular visual 
            style or mood. It's ideal for creative professionals looking for design inspiration.
          </p>
          <p className="mb-4">
            <strong>Google Images:</strong> Has the largest index and is good for general similarity across a wide range of content 
            types. Google's similar image search works well for finding alternatives and variations across different subjects and styles.
          </p>
          <p className="mb-4">
            <strong>Bing Visual Search:</strong> Strong for product-related similarity and shopping. If you're looking for similar 
            products or items, Bing often surfaces shopping links and product alternatives.
          </p>
          <p className="mb-4">
            <strong>Yandex:</strong> Excellent for finding visually similar content across different languages and regions. Yandex 
            has particularly strong coverage of images from Russian and Eastern European sources, which can be valuable for 
            international projects.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Advanced Techniques</h3>
          <p className="mb-4">
            <strong>Iterative Refinement:</strong> Use your search results to refine your search. If you find an image in the 
            results that's closer to what you want, use that image as a new search query to find even more similar images.
          </p>
          <p className="mb-4">
            <strong>Style Transfer Exploration:</strong> Search with images that represent different aspects of the style you want. 
            For example, search with an image that has the color scheme you want, then search with an image that has the composition 
            you want, and combine insights from both searches.
          </p>
          <p className="mb-4">
            <strong>Mood Board Creation:</strong> Use similar image search to build mood boards by searching with reference images 
            and collecting the best results. This helps you explore different visual directions and refine your creative vision.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Privacy and Usage Considerations</h3>
          <p className="mb-4">
            Our similar image search links tool maintains the same privacy standards as our other tools. We don't store your images 
            or process them on our servers. Your images are handled client-side until you choose to upload them to a provider. 
            However, when you upload images to search providers, they will process them according to their own privacy policies.
          </p>
          <p className="mb-4">
            When using similar image search results, always respect copyright and licensing. Just because you found an image through 
            similar image search doesn't mean you have the right to use it. Always check licensing information and obtain proper 
            permissions or licenses before using images in your projects.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Conclusion</h3>
          <p className="mb-4">
            Similar image search is a powerful tool for discovery, inspiration, and finding alternatives. Whether you're a designer 
            seeking inspiration, a marketer looking for brand-consistent imagery, or someone exploring visual styles, similar image 
            search can help you discover content you might not have found through traditional text-based search.
          </p>
          <p className="mb-4">
            Our similar image search links tool makes it easy to search across multiple providers simultaneously, giving you access 
            to the widest range of visually similar content. By understanding how similar image search works, following best practices, 
            and using multiple providers, you can unlock new creative possibilities and find exactly the visual content you need for 
            your projects.
          </p>
        </article>
      </div>
    </div>
  )
}
