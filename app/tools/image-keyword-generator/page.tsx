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

        <article className="mt-16 prose prose-lg dark:prose-invert max-w-none">
          <h2 className="text-3xl font-bold mb-6">Complete Guide to Image Keyword Generation</h2>
          
          <p className="text-lg mb-6">
            Finding the right images through text-based search requires effective keywords that accurately describe what you're 
            looking for. Our image keyword generator helps you extract relevant search terms from image descriptions, making it 
            easier to find images through traditional search engines. This comprehensive guide explains how keyword generation works, 
            why it matters, and how to use our tool effectively to improve your image search results.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">The Challenge of Image Search</h3>
          <p className="mb-4">
            While reverse image search and similar image search are powerful tools, they require you to already have an image to 
            search with. Often, you need to find images based on a concept, idea, or description rather than an existing image. 
            This is where text-based image search comes in, and effective keywords are essential for getting good results.
          </p>
          <p className="mb-4">
            The challenge is that describing images in words can be difficult. A single image might contain multiple subjects, 
            various visual elements, different moods, and complex compositions. Converting this visual complexity into effective 
            search keywords requires understanding what search engines look for and how to describe images accurately.
          </p>
          <p className="mb-4">
            Our image keyword generator helps bridge this gap by analyzing your image description and extracting the most relevant 
            search terms. It removes common words (stop words) that don't help with search, identifies key concepts, and presents 
            them as a clean list of keywords you can use in image search engines.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">How Keyword Generation Works</h3>
          <p className="mb-4">
            Our keyword generator uses natural language processing techniques to analyze your image description. It identifies 
            important nouns, adjectives, and descriptive terms while filtering out common words that don't contribute to search 
            effectiveness. The process involves several steps:
          </p>
          <p className="mb-4">
            <strong>Text Analysis:</strong> The generator analyzes your description to identify individual words and phrases. It 
            removes punctuation and normalizes the text to make processing easier.
          </p>
          <p className="mb-4">
            <strong>Stop Word Removal:</strong> Common words like "the," "a," "and," "is," etc., are removed because they don't 
            help with image search. These words appear in almost every description and don't narrow down results effectively.
          </p>
          <p className="mb-4">
            <strong>Keyword Extraction:</strong> Important nouns (subjects, objects), adjectives (descriptors, qualities), and 
            descriptive terms are extracted. These are the words that actually help search engines find relevant images.
          </p>
          <p className="mb-4">
            <strong>Deduplication and Sorting:</strong> Duplicate keywords are removed, and the remaining keywords are sorted 
            alphabetically for easy use. The generator typically returns up to 20 of the most relevant keywords.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Why Effective Keywords Matter</h3>
          <p className="mb-4">
            The quality of your keywords directly impacts the quality of your image search results. Good keywords help search 
            engines understand exactly what you're looking for, leading to more relevant results. Poor keywords can return 
            irrelevant images or miss the images you actually want.
          </p>
          <p className="mb-4">
            <strong>Precision:</strong> Specific, descriptive keywords help you find exactly the type of image you need. Generic 
            keywords return generic results, while specific keywords return targeted results.
          </p>
          <p className="mb-4">
            <strong>Efficiency:</strong> Good keywords reduce the time you spend sifting through irrelevant results. They help you 
            find what you need faster and more directly.
          </p>
          <p className="mb-4">
            <strong>Discovery:</strong> Well-chosen keywords can help you discover images you might not have found otherwise. They 
            can lead you to related concepts, variations, and alternatives you hadn't considered.
          </p>
          <p className="mb-4">
            <strong>SEO and Metadata:</strong> If you're creating content, understanding effective keywords helps you optimize 
            images for search engines and create better metadata that improves discoverability.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">How to Write Effective Image Descriptions</h3>
          <p className="mb-4">
            The quality of keywords generated depends on the quality of your description. Here are tips for writing descriptions 
            that yield effective keywords:
          </p>
          <p className="mb-4">
            <strong>Be Specific:</strong> Instead of "a person," say "a young woman" or "a businessman." Instead of "an animal," 
            say "a golden retriever" or "a red cardinal." Specificity helps generate more targeted keywords.
          </p>
          <p className="mb-4">
            <strong>Include Visual Details:</strong> Mention colors, textures, lighting, composition, and mood. These details 
            help generate keywords that capture the visual essence of what you're looking for.
          </p>
          <p className="mb-4">
            <strong>Describe the Setting:</strong> Include information about the environment, location, or context. "Sunset 
            over ocean" is more effective than just "sunset" because it provides context.
          </p>
          <p className="mb-4">
            <strong>Mention Actions or States:</strong> If relevant, describe what's happening or the state of subjects. "Running," 
            "smiling," "peaceful," "energetic" are all useful descriptive terms.
          </p>
          <p className="mb-4">
            <strong>Include Style Information:</strong> If style matters, mention it. "Vintage," "modern," "minimalist," "abstract" 
            are all valuable keywords for finding images with specific aesthetics.
          </p>
          <p className="mb-4">
            <strong>Be Comprehensive:</strong> Don't be too brief. A detailed description generates more keywords and gives you more 
            options for searching. However, avoid being overly verbose—focus on relevant details.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Using Generated Keywords Effectively</h3>
          <p className="mb-4">
            Once you have generated keywords, there are several strategies for using them effectively:
          </p>
          <p className="mb-4">
            <strong>Start Broad, Then Narrow:</strong> Begin with a few general keywords to see what's available, then add more 
            specific keywords to refine your search. This helps you understand the landscape of available images before narrowing down.
          </p>
          <p className="mb-4">
            <strong>Combine Keywords:</strong> Use multiple keywords together to create more specific searches. Most search engines 
            support multiple keywords, and combining them helps you find images that match multiple criteria.
          </p>
          <p className="mb-4">
            <strong>Try Variations:</strong> If your initial search doesn't yield good results, try variations of your keywords. 
            Synonyms, related terms, and alternative phrasings can lead to different results.
          </p>
          <p className="mb-4">
            <strong>Use Quotes for Exact Phrases:</strong> Some search engines allow you to search for exact phrases using quotes. 
            This can be useful when you need images that match a specific concept or phrase.
          </p>
          <p className="mb-4">
            <strong>Exclude Unwanted Terms:</strong> Many search engines allow you to exclude terms using minus signs. If your 
            results include unwanted content, exclude relevant keywords to filter it out.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Common Use Cases</h3>
          <p className="mb-4">
            <strong>Stock Photo Search:</strong> When searching stock photo sites, effective keywords help you find images that 
            match your project's needs. Our generator helps you create keyword lists optimized for stock photo searches.
          </p>
          <p className="mb-4">
            <strong>Blog and Content Creation:</strong> Content creators need images that match their articles' themes. Generating 
            keywords from article topics helps find relevant images quickly.
          </p>
          <p className="mb-4">
            <strong>Design Projects:</strong> Designers often need images with specific styles, moods, or aesthetics. Keyword generation 
            helps translate visual concepts into searchable terms.
          </p>
          <p className="mb-4">
            <strong>Social Media:</strong> Social media managers need images that match brand aesthetics and campaign themes. Effective 
            keywords help maintain visual consistency across content.
          </p>
          <p className="mb-4">
            <strong>Research and Education:</strong> Researchers and educators need images that illustrate specific concepts or topics. 
            Keyword generation helps find educational and illustrative images.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Best Practices for Keyword Generation</h3>
          <p className="mb-4">
            <strong>Write Detailed Descriptions:</strong> The more detail you provide, the more keywords you'll generate. Don't 
            be afraid to be comprehensive—you can always select the most relevant keywords from the generated list.
          </p>
          <p className="mb-4">
            <strong>Focus on Visual Elements:</strong> Emphasize what can be seen in an image rather than abstract concepts. Visual 
            keywords are more effective for image search than conceptual keywords.
          </p>
          <p className="mb-4">
            <strong>Review and Refine:</strong> After generating keywords, review them and select the most relevant ones. You don't 
            have to use all generated keywords—choose the ones that best represent what you're looking for.
          </p>
          <p className="mb-4">
            <strong>Iterate and Experiment:</strong> If your first keyword set doesn't yield good results, try modifying your 
            description or selecting different keywords from the generated list. Experimentation helps you find the most effective 
            search terms.
          </p>
          <p className="mb-4">
            <strong>Combine with Other Search Methods:</strong> Keyword search works best when combined with other methods. Use 
            keywords to find initial images, then use reverse image search or similar image search to find variations and alternatives.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Limitations and Considerations</h3>
          <p className="mb-4">
            While keyword generation is useful, it has limitations:
          </p>
          <p className="mb-4">
            <strong>Language Dependency:</strong> Our generator works best with English descriptions. Descriptions in other languages 
            may not generate as effective keywords, though the basic process still works.
          </p>
          <p className="mb-4">
            <strong>Subjectivity:</strong> What makes a "good" keyword is somewhat subjective and depends on what you're looking for. 
            The generator provides a starting point, but you may need to refine keywords based on your specific needs.
          </p>
          <p className="mb-4">
            <strong>Search Engine Differences:</strong> Different image search engines interpret keywords differently. Keywords that 
            work well on one platform may not work as well on another. Experiment with different engines to find what works best.
          </p>
          <p className="mb-4">
            <strong>Visual vs. Textual:</strong> Some visual concepts are difficult to express in words. For highly visual or 
            abstract concepts, reverse image search or similar image search may be more effective than keyword search.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Advanced Techniques</h3>
          <p className="mb-4">
            <strong>Keyword Combinations:</strong> Experiment with different combinations of keywords. Sometimes pairing unexpected 
            keywords yields interesting results that single keywords wouldn't find.
          </p>
          <p className="mb-4">
            <strong>Synonym Exploration:</strong> If certain keywords aren't working, try synonyms or related terms. Different words 
            for the same concept can lead to different image sets.
          </p>
          <p className="mb-4">
            <strong>Multi-Language Keywords:</strong> Some search engines support multiple languages. If you're searching 
            international sources, consider translating keywords or using keywords in multiple languages.
          </p>
          <p className="mb-4">
            <strong>Trending Terms:</strong> Stay aware of trending terms and popular keywords in your field. Using current 
            terminology can help you find more recent and relevant images.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Conclusion</h3>
          <p className="mb-4">
            Effective keyword generation is essential for successful text-based image search. Our image keyword generator simplifies 
            this process by analyzing your descriptions and extracting relevant search terms. By understanding how keyword generation 
            works, writing effective descriptions, and using generated keywords strategically, you can significantly improve your 
            image search results.
          </p>
          <p className="mb-4">
            Whether you're searching stock photos, finding images for content creation, or looking for design inspiration, effective 
            keywords are the foundation of successful image discovery. Use our tool to generate keywords, experiment with different 
            combinations, and combine keyword search with reverse image search and similar image search for the most comprehensive 
            image discovery experience.
          </p>
        </article>
      </div>
    </div>
  )
}
