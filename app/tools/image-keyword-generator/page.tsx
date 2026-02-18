'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function ImageKeywordGeneratorPage() {
  const [description, setDescription] = useState('')
  const [keywords, setKeywords] = useState<string[]>([])

  const generateKeywords = () => {
    if (!description.trim()) {
      alert('Please enter an image description')
      return
    }

    const words = description
      .toLowerCase()
      .replace(/[^\w\s]/g, ' ')
      .split(/\s+/)
      .filter(word => word.length > 2)

    const stopWords = new Set([
      'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by',
      'from', 'as', 'is', 'was', 'are', 'were', 'been', 'be', 'have', 'has', 'had', 'do', 'does',
      'did', 'will', 'would', 'could', 'should', 'may', 'might', 'must', 'can', 'this', 'that',
      'these', 'those', 'i', 'you', 'he', 'she', 'it', 'we', 'they', 'what', 'which', 'who',
      'whom', 'whose', 'where', 'when', 'why', 'how', 'all', 'each', 'every', 'both', 'few',
      'more', 'most', 'other', 'some', 'such', 'no', 'nor', 'not', 'only', 'own', 'same', 'so',
      'than', 'too', 'very', 'just', 'about', 'into', 'through', 'during', 'before', 'after',
      'above', 'below', 'up', 'down', 'out', 'off', 'over', 'under', 'again', 'further', 'then',
      'once', 'here', 'there', 'when', 'where', 'why', 'how', 'all', 'any', 'both', 'each',
      'few', 'more', 'most', 'other', 'some', 'such', 'no', 'nor', 'not', 'only', 'own', 'same',
      'so', 'than', 'too', 'very', 'can', 'will', 'just', 'should', 'now'
    ])

    const filtered = words.filter(word => !stopWords.has(word))
    const unique = Array.from(new Set(filtered))
    const sorted = unique.sort()

    setKeywords(sorted.slice(0, 20))
  }

  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Image Keyword Generator</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Generate search keywords from image descriptions. Helps create effective search terms for finding images.
        </p>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Image Description</CardTitle>
            <CardDescription>
              Describe the image you&apos;re looking for
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="e.g., A beautiful sunset over the ocean with orange and pink clouds..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="mt-2 min-h-[120px]"
              />
            </div>
            <Button onClick={generateKeywords}>
              Generate Keywords
            </Button>
          </CardContent>
        </Card>

        {keywords.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Generated Keywords</CardTitle>
              <CardDescription>
                Use these keywords to search for images
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {keywords.map((keyword, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
              <div className="mt-4">
                <p className="text-sm text-muted-foreground mb-2">
                  Copy all keywords (comma-separated):
                </p>
                <div className="flex gap-2">
                  <textarea
                    readOnly
                    value={keywords.join(', ')}
                    className="flex-1 p-2 border rounded text-sm"
                    onClick={(e) => (e.target as HTMLTextAreaElement).select()}
                  />
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      navigator.clipboard.writeText(keywords.join(', '))
                      alert('Keywords copied to clipboard!')
                    }}
                  >
                    Copy
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">How to Use</h2>
          <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
            <li>Enter a description of the image you want to find</li>
            <li>Click &quot;Generate Keywords&quot; to extract relevant search terms</li>
            <li>Use the generated keywords in image search engines</li>
            <li>Combine multiple keywords for more specific searches</li>
          </ol>
        </div>
      </div>
    </div>
  )
}
