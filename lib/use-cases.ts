export interface UseCase {
  slug: string
  title: string
  description: string
  keywords: string[]
}

export const useCases: UseCase[] = [
  {
    slug: 'find-image-origin',
    title: 'Find the Original Source of an Image',
    description: 'Learn how to trace images back to their original source using reverse image search techniques.',
    keywords: ['image source', 'origin', 'attribution', 'pictopic search'],
  },
  {
    slug: 'find-higher-resolution',
    title: 'Find Higher Resolution Versions',
    description: 'Discover how to locate higher quality and resolution versions of images you find online.',
    keywords: ['high resolution', 'HD images', 'quality', 'pictopic search'],
  },
  {
    slug: 'find-stock-photo-source',
    title: 'Find Stock Photo Sources',
    description: 'Identify which stock photo site an image comes from and find licensing information.',
    keywords: ['stock photos', 'licensing', 'copyright', 'pictopic search'],
  },
  {
    slug: 'verify-image-authenticity',
    title: 'Verify Image Authenticity',
    description: 'Use reverse image search to verify if images are authentic or have been manipulated.',
    keywords: ['verification', 'authenticity', 'fact-checking', 'pictopic search'],
  },
  {
    slug: 'find-similar-designs',
    title: 'Find Similar Designs and Inspiration',
    description: 'Discover similar designs, artwork, and visual inspiration using image search.',
    keywords: ['design', 'inspiration', 'similar images', 'pictopic search'],
  },
  {
    slug: 'identify-products',
    title: 'Identify Products in Images',
    description: 'Find products, brands, and shopping links from images using visual search.',
    keywords: ['products', 'shopping', 'identification', 'pictopic search'],
  },
  {
    slug: 'find-person-online',
    title: 'Find People Online',
    description: 'Learn how to find where a person\'s photo appears online using reverse image search.',
    keywords: ['people search', 'faces', 'social media', 'pictopic search'],
  },
  {
    slug: 'check-copyright-violations',
    title: 'Check for Copyright Violations',
    description: 'Use reverse image search to check if your images are being used without permission.',
    keywords: ['copyright', 'violations', 'protection', 'pictopic search'],
  },
]

export function getUseCaseBySlug(slug: string): UseCase | undefined {
  return useCases.find(uc => uc.slug === slug)
}
