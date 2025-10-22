import Link from 'next/link'

export default function InspirationsPage() {
  const posts = [
    {
      id: 'turkish-textile-heritage',
      category: 'Heritage',
      title: 'The Rich Legacy of Turkish Textile Craftsmanship',
      excerpt: 'Explore centuries of Turkish textile tradition and how it influences modern hospitality design.',
      date: 'January 15, 2025',
      readTime: '5 min read'
    },
    {
      id: 'sustainable-hospitality-textiles',
      category: 'Sustainability',
      title: 'The Future is Green: Sustainable Textiles in Luxury Hospitality',
      excerpt: 'How eco-conscious practices are reshaping the luxury textile industry without compromising quality.',
      date: 'January 10, 2025',
      readTime: '7 min read'
    },
    {
      id: 'color-psychology-hotels',
      category: 'Design Trends',
      title: 'Color Psychology in Hotel Textiles: Creating Memorable Guest Experiences',
      excerpt: 'Understanding how textile colors influence guest mood and satisfaction in hospitality spaces.',
      date: 'January 5, 2025',
      readTime: '6 min read'
    },
    {
      id: 'boutique-hotel-trends-2025',
      category: 'Industry News',
      title: 'Boutique Hotel Textile Trends for 2025',
      excerpt: 'Emerging patterns, materials, and design philosophies shaping boutique hospitality this year.',
      date: 'December 28, 2024',
      readTime: '8 min read'
    }
  ]

  const categories = ['All', 'Heritage', 'Sustainability', 'Design Trends', 'Industry News', 'Case Studies']

  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-brand-cream to-white">
        <div className="container mx-auto px-6">
          <h1 className="font-playfair text-display-md mb-6">Inspirations</h1>
          <p className="text-xl text-brand-stone max-w-3xl">
            Insights, trends, and stories from the world of luxury hospitality textiles. 
            Discover what's shaping the industry and inspiring our creations.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b border-neutral-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-subtle text-sm font-medium transition-colors ${
                  cat === 'All' 
                    ? 'bg-brand-lilac text-white' 
                    : 'bg-brand-cream text-brand-charcoal hover:bg-brand-lilac-light'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {posts.map((post) => (
              <article key={post.id} className="group cursor-pointer">
                <div className="aspect-[16/9] bg-gradient-to-br from-neutral-200 to-neutral-300 rounded-subtle overflow-hidden mb-6">
                  <div className="w-full h-full flex items-center justify-center text-neutral-500 group-hover:scale-105 transition-transform duration-300">
                    [Article Image]
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-4 text-sm text-brand-stone">
                    <span className="text-brand-lilac font-semibold">{post.category}</span>
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="font-playfair text-2xl group-hover:text-brand-lilac transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-brand-stone">{post.excerpt}</p>
                  <Link href={`/inspirations/${post.id}`} className="inline-flex items-center text-brand-lilac font-medium hover:gap-2 transition-all">
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-brand-cream">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-playfair text-display-sm mb-6">Stay Inspired</h2>
            <p className="text-lg text-brand-stone mb-8">
              Subscribe to our newsletter for exclusive insights, industry trends, and design inspiration 
              delivered monthly to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-subtle border border-neutral-300 focus:outline-none focus:border-brand-lilac"
              />
              <button className="bg-brand-lilac text-white px-6 py-3 rounded-subtle hover:bg-brand-lilac-dark transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}