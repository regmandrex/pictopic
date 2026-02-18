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
      </div>
    </div>
  )
}
