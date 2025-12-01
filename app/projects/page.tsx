import Link from 'next/link'

export default function ProjectsPage() {
  const projects = [
    {
      id: 'mandarin-oriental-istanbul',
      title: 'Mandarin Oriental Bosphorus',
      location: 'Istanbul, Turkey',
      category: 'Luxury Hotel',
      description: 'Complete textile transformation for 100 rooms and suites overlooking the Bosphorus.',
      scope: '500+ custom pieces',
      highlight: 'Bespoke monogrammed linens with Ottoman-inspired motifs'
    },
    {
      id: 'nobu-dubai',
      title: 'Nobu Restaurant',
      location: 'Dubai, UAE',
      category: 'Fine Dining',
      description: 'Exclusive table linen collection reflecting Japanese minimalism with Middle Eastern luxury.',
      scope: '200+ table settings',
      highlight: 'Custom weave pattern inspired by traditional sushi mat textures'
    },
    {
      id: 'six-senses-kaplankaya',
      title: 'Six Senses Kaplankaya',
      location: 'Bodrum, Turkey',
      category: 'Wellness Resort',
      description: 'Sustainable spa textiles for award-winning wellness destination on the Aegean coast.',
      scope: '1000+ spa items',
      highlight: 'Organic bamboo-cotton blend with natural dyes'
    },
    {
      id: 'soho-house-istanbul',
      title: 'Soho House Istanbul',
      location: 'Istanbul, Turkey',
      category: 'Members Club',
      description: 'Boutique textile collection balancing British heritage with Turkish craftsmanship.',
      scope: '87 rooms + public spaces',
      highlight: 'Vintage-inspired patterns with modern performance fabrics'
    },
    {
      id: 'raffles-istanbul',
      title: 'Raffles Istanbul',
      location: 'Istanbul, Turkey',
      category: 'Ultra-Luxury Hotel',
      description: 'Premium bedding and bath linens for one of Istanbul\'s most prestigious addresses.',
      scope: '180 suites',
      highlight: '1000-thread count Egyptian cotton with pearl button details'
    },
    {
      id: 'private-yacht-collection',
      title: 'MY Quantum Blue',
      location: 'Mediterranean',
      category: 'Superyacht',
      description: 'Exclusive marine-grade luxury textiles for 104m private yacht.',
      scope: 'Full vessel outfit',
      highlight: 'Salt-resistant fabrics with custom nautical embroidery'
    }
  ]

  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-brand-cream to-white">
        <div className="container mx-auto px-6">
          <h1 className="font-playfair text-display-md mb-6">Our Projects</h1>
          <p className="text-xl text-brand-stone max-w-3xl">
            Each project tells a story of collaboration, craftsmanship, and attention to detail. 
            Explore how we've helped leading hospitality brands create unforgettable guest experiences.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group cursor-pointer">
                <div className="aspect-[4/3] bg-gradient-to-br from-neutral-200 to-neutral-300 rounded-subtle overflow-hidden mb-4">
                  <div className="w-full h-full flex items-center justify-center text-neutral-500 group-hover:scale-105 transition-transform duration-300">
                    [{project.title} Image]
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider text-brand-lilac font-semibold">{project.category}</span>
                    <span className="text-xs text-brand-stone">{project.location}</span>
                  </div>
                  <h3 className="font-playfair text-2xl group-hover:text-brand-lilac transition-colors">{project.title}</h3>
                  <p className="text-sm text-brand-stone">{project.description}</p>
                  <div className="pt-2 space-y-1">
                    <p className="text-xs text-brand-stone"><strong>Scope:</strong> {project.scope}</p>
                    <p className="text-xs text-brand-stone"><strong>Highlight:</strong> {project.highlight}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-brand-cream">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-playfair text-2xl text-brand-charcoal mb-6 italic">
              "The Q transformed our vision into reality. Their attention to detail and understanding of luxury 
              hospitality is unmatched. Every piece they created elevated our guest experience."
            </p>
            <p className="text-brand-stone">
              <strong>Mehmet Özer</strong><br />
              General Manager, Mandarin Oriental Bosphorus
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-playfair text-display-sm mb-6">Ready to Be Our Next Success Story?</h2>
          <p className="text-lg text-brand-stone max-w-2xl mx-auto mb-8">
            Join the ranks of world-class hospitality brands who trust The Q with their textile needs.
          </p>
          <a href="/contact" className="inline-block bg-brand-lilac text-white px-8 py-3 rounded-subtle hover:bg-brand-lilac-dark transition-colors">
            Start Your Project →
          </a>
        </div>
      </section>
    </div>
  )
}