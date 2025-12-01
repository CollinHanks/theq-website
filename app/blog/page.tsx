import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const blogPosts = [
  {
    slug: 'otel-tekstilinde-kalite',
    title: 'Otel Tekstilinde Kalite Nasıl Anlaşılır?',
    excerpt: 'Premium otel tekstillerinde kaliteyi belirleyen faktörler ve iplik sayısı rehberi',
    date: '15 Kasım 2024',
    category: 'Kalite Rehberi',
    readTime: '5 dk'
  },
  {
    slug: '2025-otelcilik-trendleri',
    title: '2025 Otelcilik Tekstil Trendleri',
    excerpt: 'Gelecek yılın otelcilik sektöründe öne çıkacak tekstil trendleri ve yenilikler',
    date: '10 Kasım 2024',
    category: 'Trendler',
    readTime: '4 dk'
  }
]

export const metadata = {
  title: 'Blog | The Q Atelier',
  description: 'Otel tekstili, restoran üniforma ve hospitality sektörü hakkında ipuçları, trendler ve rehberler.',
}

export default function BlogPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-brand-cream to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-playfair text-4xl md:text-5xl mb-4 text-brand-charcoal">
              Blog & Makaleler
            </h1>
            <p className="text-lg text-brand-stone">
              Tekstil dünyasından haberler, trendler ve ipuçları
            </p>
          </div>
        </div>
      </section>

      {/* Blog Listesi */}
      <section className="py-10 md:py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {blogPosts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white rounded-lg border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="aspect-video bg-neutral-200 flex items-center justify-center">
                    <span className="text-neutral-400 text-sm">[Blog Kapak Görseli]</span>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-brand-stone mb-3">
                      <span className="text-brand-gold">{post.category}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h2 className="font-playfair text-2xl mb-3 text-brand-charcoal">
                      {post.title}
                    </h2>
                    
                    <p className="text-brand-stone mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-brand-gold hover:text-brand-gold-dark font-medium"
                    >
                      Devamını Oku
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
