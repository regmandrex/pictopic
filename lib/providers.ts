export interface Provider {
  id: string
  name: string
  displayName: string
  description: string
  url: string
  pros: string[]
  cons: string[]
  supportedFormats: string[]
  free: boolean
  requiresAccount: boolean
}

export const providers: Provider[] = [
  {
    id: 'google',
    name: 'Google Images',
    displayName: 'Google Images',
    description: 'Google\'s reverse image search powered by their visual search technology.',
    url: 'https://images.google.com',
    pros: ['Largest image database', 'Fast results', 'Multiple result types'],
    cons: ['May require account for some features', 'Limited advanced filters'],
    supportedFormats: ['jpg', 'png', 'gif', 'webp'],
    free: true,
    requiresAccount: false,
  },
  {
    id: 'bing',
    name: 'Bing Visual Search',
    displayName: 'Bing Visual Search',
    description: 'Microsoft\'s visual search engine with reverse image lookup capabilities.',
    url: 'https://www.bing.com/images',
    pros: ['Good image matching', 'Integrated with Bing search', 'Free to use'],
    cons: ['Smaller database than Google', 'Fewer advanced options'],
    supportedFormats: ['jpg', 'png', 'gif', 'webp'],
    free: true,
    requiresAccount: false,
  },
  {
    id: 'yandex',
    name: 'Yandex Images',
    displayName: 'Yandex Images',
    description: 'Russian search engine with powerful reverse image search capabilities.',
    url: 'https://yandex.com/images',
    pros: ['Excellent image matching', 'Works well with faces', 'Free'],
    cons: ['Interface in Russian', 'Less known globally'],
    supportedFormats: ['jpg', 'png', 'gif', 'webp'],
    free: true,
    requiresAccount: false,
  },
  {
    id: 'tineye',
    name: 'TinEye',
    displayName: 'TinEye',
    description: 'Specialized reverse image search engine focused on finding image sources.',
    url: 'https://tineye.com',
    pros: ['Great for finding sources', 'API available', 'Detailed metadata'],
    cons: ['Smaller database', 'Some features require account'],
    supportedFormats: ['jpg', 'png', 'gif', 'webp'],
    free: true,
    requiresAccount: false,
  },
  {
    id: 'pinterest',
    name: 'Pinterest Visual Search',
    displayName: 'Pinterest',
    description: 'Visual discovery platform with reverse image search for finding similar pins.',
    url: 'https://www.pinterest.com',
    pros: ['Great for design inspiration', 'Large collection', 'Visual similarity'],
    cons: ['Requires account', 'Focused on Pinterest content'],
    supportedFormats: ['jpg', 'png', 'webp'],
    free: true,
    requiresAccount: true,
  },
]

export function getProviderById(id: string): Provider | undefined {
  return providers.find(p => p.id === id)
}

export function generateProviderSearchUrl(providerId: string, imageUrl: string): string {
  const provider = getProviderById(providerId)
  if (!provider) return ''

  const encodedUrl = encodeURIComponent(imageUrl)
  
  switch (providerId) {
    case 'google':
      return `https://images.google.com/searchbyimage?image_url=${encodedUrl}`
    case 'bing':
      return `https://www.bing.com/images/search?view=detailv2&iss=sbi&form=SBIVSP&sbisrc=UrlPaste&q=imgurl:${encodedUrl}`
    case 'yandex':
      return `https://yandex.com/images/search?rpt=imageview&url=${encodedUrl}`
    case 'tineye':
      return `https://tineye.com/search?url=${encodedUrl}`
    case 'pinterest':
      return `https://www.pinterest.com/search/pins/?q=${encodedUrl}&rs=typed`
    default:
      return provider.url
  }
}
