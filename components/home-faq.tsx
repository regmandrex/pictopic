import Link from 'next/link'

export const HOME_FAQS: { question: string; answer: string }[] = [
  {
    question: 'What is pic to pic search and how does it work?',
    answer: 'Pic to pic search (also called pictopic search or reverse image search) is a way to search the web using an image instead of text. You upload a photo or paste an image URL, and the engine returns pages and images that match or relate to it. The technology uses computer vision to extract visual features from your image and compare them to a large index, so you can find similar images, discover where a picture came from, or get higher-resolution versions. Major engines like Google and Bing offer pic to pic search; tools like TinEye focus on finding image sources, while others excel at similar image search. You can use our free reverse image search links tool to run a pic to pic search across multiple providers at once.',
  },
  {
    question: 'What is the difference between pictopic search and reverse image search?',
    answer: 'Pictopic search and reverse image search mean the same thing: searching the web by providing an image as your query instead of keywords. "Pictopic" suggests using a picture as the topic of your search; "reverse image search" suggests reversing the usual direction (image in, results out). Both refer to the same family of tools—Google Images, Bing Visual Search, Yandex, TinEye—that let you upload or paste an image URL and get back matching or similar images and pages. Visual search and search by image are related terms. Our site supports all of these with free tools for reverse image search, similar image search, and image source finder.',
  },
  {
    question: 'How do I do a reverse image search for free?',
    answer: 'You can do a free reverse image search by visiting Google Images, Bing Visual Search, Yandex Images, or TinEye and either uploading an image or pasting an image URL. For the easiest multi-engine search, use our reverse image search links tool: paste your image URL, select one or more providers (Google, Bing, Yandex, TinEye, Pinterest), and click to open each search in a new tab. We do not store your images; we only generate links to the official search pages. All of these pic to pic search and pictopic search options are free for normal use.',
  },
  {
    question: 'What is the best similar image search engine?',
    answer: 'The best similar image search engine depends on your goal. For breadth and mix of exact and similar matches, Google Images is the most used. For strong similar image search and different crops or resolutions, Yandex Images often returns more variations. Bing Visual Search is good for products and sometimes surfaces different results from Google. For finding where an image came from rather than similar images, TinEye is best. Running a pic to pic search on two or three engines—for example via our similar image search links tool—gives you the best coverage. We recommend trying Google, Yandex, and TinEye for a complete pictopic search experience.',
  },
  {
    question: 'How can I find the original source of an image?',
    answer: 'To find the original source of an image, use an image source finder or reverse image search. Start with TinEye, which is built for tracking where images appear and often shows the earliest known use. Then run the same image through Google Images or Bing Visual Search, which index more of the web and can surface the creator’s site, a news article, or a stock library. Our image source finder links tool lets you paste one image URL and open TinEye and other source-focused engines at once. Look for the oldest or most authoritative result, check for bylines and credits, and bookmark the URL for attribution or permission requests.',
  },
  {
    question: 'Is pic to pic search the same as visual search?',
    answer: 'Pic to pic search is a type of visual search. Visual search is the broad category of any search driven by visual input; it can include pic to pic search (upload an image, get web results), similar image search (find images that look like yours), and in-app visual search (e.g. shopping by photo). When people say "visual search" they often mean pic to pic search or pictopic search—using an image to search the web. So in practice, pic to pic search and visual search overlap heavily. Our tools support both: reverse image search for general pic to pic search and similar image search for finding visually similar content.',
  },
  {
    question: 'Can I search by image on Google?',
    answer: 'Yes. Google supports search by image (pic to pic search) via Google Images. On desktop, go to images.google.com and click the camera icon in the search box to upload an image or paste an image URL. On mobile, you may need to request the desktop site to see the camera option, or use the Google app. Google’s reverse image search returns exact and near-exact matches, visually similar images, and pages that contain the image. For a quicker workflow, use our reverse image search links tool: paste your image URL and open Google (and other engines) in one click for a full pictopic search.',
  },
  {
    question: 'How do I find higher-resolution versions of an image?',
    answer: 'Use reverse image search or pic to pic search: upload or paste the URL of the low-resolution image and check the results for the same image at larger size. Google Images, Bing, and Yandex often show "View original" or "Full size" links. Run the image on multiple engines—our reverse image search links tool makes this easy—since different indexes surface different mirrors. Prefer results from official sites, stock libraries, or news outlets for the best quality. If the first engine does not find a higher resolution, try another; pictopic search across several providers usually yields a better version.',
  },
  {
    question: 'What is an image source finder and when should I use it?',
    answer: 'An image source finder is a tool or feature that helps you find where an image originally came from—the creator, publisher, or first appearance online. It is a focused form of reverse image search or pic to pic search aimed at attribution and source-finding. Use an image source finder when you need to credit a photo, verify authenticity, get permission, or track image use. TinEye is the best-known image source finder; Google and Bing also surface sources. Our image source finder links tool lets you paste one image URL and open TinEye and other source-oriented engines so you can find the original quickly.',
  },
  {
    question: 'Why would I use similar image search instead of reverse image search?',
    answer: 'Reverse image search finds the same or near-identical image and where it appears; similar image search finds images that look like yours (different angles, versions, or concepts). Use similar image search when you want alternatives, inspiration, different resolutions, or product lookalikes. Use reverse image search when you want the source, verification, or exact matches. Many engines do both in one pic to pic search: they show exact matches first, then visually similar results. Our similar image search links tool opens multiple providers so you can get both exact and similar image search results in one workflow.',
  },
  {
    question: 'Is pictopic search free?',
    answer: 'Yes. Pictopic search (pic to pic search, reverse image search) is free on Google Images, Bing Visual Search, Yandex Images, and TinEye for normal personal use. You can run as many searches as you need without paying. Our tools are also free: we generate links to these official pic to pic search pages; we do not store or process your images. Some providers offer paid APIs or premium features for heavy or commercial use, but for typical pictopic search, similar image search, and image source finder needs, the free options are sufficient.',
  },
  {
    question: 'How do I do a reverse image search on my phone?',
    answer: 'On mobile you can do a reverse image search by visiting Google Images, Bing, Yandex, or TinEye in your browser and using their upload or camera option. Google sometimes requires switching to "Desktop site" on mobile to see the camera icon. Alternatively, if you have the image URL (e.g. from a shared link), open our reverse image search links or similar image search links tool on your phone, paste the URL, and open the same pic to pic search on multiple engines without re-uploading. That gives you a full pictopic search experience on the go.',
  },
  {
    question: 'Can I use pic to pic search to verify if an image is real?',
    answer: 'Yes. Pic to pic search and reverse image search are standard for fact-checking and verifying images. Upload or paste the image URL and run it on Google, TinEye, and optionally Bing or Yandex. Check the earliest results and their dates; if the same image appears with different captions or in older articles, that can indicate misuse or manipulation. Use TinEye’s date filters and Google’s tools (e.g. time filter) to narrow by when the image was first indexed. Cross-checking with multiple pic to pic search engines improves accuracy. Our tools let you open several reverse image search providers at once for faster verification.',
  },
  {
    question: 'What is search by image and how is it different from keyword search?',
    answer: 'Search by image means using an image as your query instead of typing words—the same as pic to pic search or pictopic search. In keyword search you type text and get pages that match; in search by image you provide an image and get matching or related images and pages. Search by image is better when you do not know the right words, when the same concept has many names, or when you need to find the source or similar visuals. You can combine both: run a reverse image search first, then add keywords on the results page if the engine allows it.',
  },
  {
    question: 'How can content creators use reverse image search?',
    answer: 'Content creators use reverse image search (pic to pic search) to see where their images appear online, find unauthorized use, check attribution, and enforce licensing. Run a pictopic search on your key images periodically—portfolio pieces, logos, or viral content—and save or track where they show up. When you find misuse, you can send a takedown or license request. Reverse image search also helps when someone uses your work without permission: you can find the page and contact them. Our image source finder and reverse image search links tools make it easy to run this check across multiple engines.',
  },
  {
    question: 'Which pic to pic search engine is best for finding product images?',
    answer: 'For product-related pic to pic search, Bing Visual Search and Google Images are strong; both often return shopping and "similar items" results. Pinterest’s visual search is useful for lifestyle and inspiration. Run the same image on two or three engines—our reverse image search links and similar image search links tools support this—to compare product matches. For identifying or naming a product you do not know, pictopic search on Google or Bing usually surfaces retail and review pages that name the item.',
  },
  {
    question: 'Do I need to create an account to use pictopic search?',
    answer: 'No. You can use Google Images, Bing Visual Search, Yandex Images, and TinEye for pic to pic search and reverse image search without signing in. Our tools also do not require an account: you paste an image URL and we generate links to open each provider’s search. We do not store your images. Some platforms (e.g. Pinterest) may require an account for full similar image search features, but for core pictopic search and image source finder use, no account is needed.',
  },
  {
    question: 'Why do different reverse image search engines give different results?',
    answer: 'Each reverse image search engine has its own index (which pages and images it has crawled) and its own ranking algorithm. So the same image can produce different results on Google, Bing, Yandex, and TinEye. One may have indexed the source page; another may emphasize similar images. That is why running a pic to pic search on multiple engines—via our reverse image search links or similar image search links tool—often gives better coverage. For source-finding, try TinEye and Google; for similar image search, add Yandex.',
  },
  {
    question: 'Can I do a pic to pic search with a screenshot?',
    answer: 'Yes. A screenshot is an image, so you can use it for pic to pic search, reverse image search, or similar image search. Upload the screenshot to Google Images, Bing, Yandex, or TinEye, or paste a URL if the screenshot is hosted. This is useful for finding the source of something you saw on screen, identifying a product, or getting a higher-resolution version. Pictopic search works the same whether the input is a photo, screenshot, or downloaded file. Use our tools to run the same screenshot search across multiple engines at once.',
  },
  {
    question: 'How do I find the original creator of an image using pic to pic search?',
    answer: 'Run a reverse image search or use an image source finder: upload the image or paste its URL on TinEye, Google Images, and optionally Bing. Look for the earliest or most authoritative result—often a portfolio, news outlet, or stock site—and check the page for credits, bylines, or "Image by" links. TinEye is especially good for tracking first use. Our image source finder links tool opens several source-focused pic to pic search engines with one image URL so you can compare results and identify the creator quickly for attribution or permission.',
  },
  {
    question: 'Where can I get free tools for reverse image search and similar image search?',
    answer: 'You can use our free tools on this site: the reverse image search links tool (paste an image URL and open Google, Bing, Yandex, TinEye, Pinterest), the similar image search links tool (same workflow for finding visually similar images), and the image source finder links tool (focused on finding where an image came from). We do not store or process your images; we only generate links to the official pic to pic search pages. All are free and require no account. Visit our tools page to access pictopic search, reverse image search, and image source finder in one place.',
  },
]

export function HomeFAQ() {
  return (
    <section className="container py-16 md:py-24" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto">
        <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold tracking-tight mb-8 scroll-mt-20">
          Frequently Asked Questions About Pic to Pic Search & Reverse Image Search
        </h2>
        <p className="text-muted-foreground mb-10">
          Answers to common questions about pictopic search, reverse image search, similar image search, and finding image sources. Use our <Link href="/tools" className="text-primary hover:underline">free tools</Link> to run a pic to pic search across multiple engines.
        </p>
        <div className="space-y-2">
          {HOME_FAQS.map((faq, index) => (
            <details
              key={index}
              className="group border rounded-lg bg-muted/30 dark:bg-muted/10 overflow-hidden"
            >
              <summary className="flex items-center justify-between gap-4 py-4 px-5 cursor-pointer list-none font-medium hover:bg-muted/50 dark:hover:bg-muted/20 transition-colors [&::-webkit-details-marker]:hidden">
                <span className="text-left">{faq.question}</span>
                <span className="shrink-0 text-muted-foreground group-open:rotate-180 transition-transform" aria-hidden>▼</span>
              </summary>
              <div className="px-5 pb-4 pt-4 text-muted-foreground border-t border-border/50">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
