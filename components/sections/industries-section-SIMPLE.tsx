import Link from 'next/link'

const industries = [
  {
    name: 'Luxury Hotels',
    slug: 'luxury-hotels',
    description: 'Premium textile solutions for 5-star hotels and luxury accommodations worldwide',
    color: 'bg-neutral-100 hover:bg-neutral-200'
  },
  {
    name: 'Fine Dining',
    slug: 'fine-dining',
    description: 'Elegant table linens and restaurant textiles for upscale dining establishments',
    color: 'bg-brand-lilac-light hover:bg-brand-lilac'
  },
  {
    name: 'Boutique Resorts',
    slug: 'boutique-resorts',
    description: 'Bespoke textile collections for exclusive resort properties and destination hotels',
    color: 'bg-neutral-100 hover:bg-neutral-200'
  },
  {
    name: 'Wellness Centers',
    slug: 'wellness-centers',
    description: 'Spa and wellness textiles designed for comfort, hygiene, and luxury',
    color: 'bg-neutral-100 hover:bg-neutral-200'
  },
  {
    name: 'Corporate Venues',
    slug: 'corporate-venues',
    description: 'Professional textile solutions for conference centers, offices, and corporate events',
    color: 'bg-neutral-100 hover:bg-neutral-200'
  },
  {
    name: 'Cafes & Bistros',
    slug: 'cafes-bistros',
    description: 'Casual yet stylish textile solutions for cafes, bistros, and casual dining',
    color: 'bg-neutral-100 hover:bg-neutral-200'
  },
  {
    name: 'Beach Clubs',
    slug: 'beach-clubs',
    description: 'Durable outdoor textiles for beach clubs, pool areas, and waterfront venues',
    color: 'bg-neutral-100 hover:bg-neutral-200'
  },
  {
    name: 'Private Yachts',
    slug: 'private-yachts',
    description: 'Luxury marine textiles for superyachts and private vessels',
    color: 'bg-brand-lilac-light hover:bg-brand-lilac'
  }
]

export default function IndustriesSection() {
  return (
    <section className="py-20 bg-brand-cream" id="industries">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl mb-6 text-brand-charcoal">
            Industries We Serve
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Tailored textile solutions for diverse hospitality sectors, each crafted with meticulous attention to industry-specific needs.
          </p>
        </div>

        {/* Industries Grid - NOW CLICKABLE! */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry) => (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className={`${industry.color} p-8 rounded-lg transition-all duration-300 group hover:shadow-lg border border-neutral-200 block cursor-pointer`}
            >
              <div className="text-center">
                <h3 className="font-semibold text-xl mb-3 text-brand-charcoal group-hover:text-brand-lilac-dark transition-colors">
                  {industry.name}
                </h3>
                <p className="text-sm text-neutral-600">
                  {industry.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}