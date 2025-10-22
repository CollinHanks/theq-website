export default function IndustriesPage() {
  const industries = [
    {
      name: "Luxury Hotels",
      description: "From boutique properties to international chains, we provide comprehensive textile solutions that enhance guest comfort and reinforce brand prestige.",
      services: ["Custom bedding programs", "Branded amenities", "Seasonal collections", "Express replenishment"]
    },
    {
      name: "Fine Dining Restaurants",
      description: "Elevate your culinary presentation with table linens that complement your cuisine and ambiance, from Michelin-starred establishments to trendy bistros.",
      services: ["Bespoke table linens", "Chef uniforms", "Napkin programs", "Special event textiles"]
    },
    {
      name: "Wellness & Spa Centers",
      description: "Create sanctuaries of relaxation with our premium spa textiles, designed for durability while maintaining the softest touch.",
      services: ["Treatment room linens", "Luxury robes", "Aromatherapy-ready fabrics", "Hypoallergenic options"]
    },
    {
      name: "Corporate Venues",
      description: "Professional textiles for business hotels, conference centers, and corporate hospitality spaces that balance functionality with sophistication.",
      services: ["Meeting room textiles", "Executive suite bedding", "Corporate branded items", "Quick turnaround services"]
    },
    {
      name: "Beach Clubs & Resorts",
      description: "Weather-resistant, quick-dry textiles designed to withstand sun, sand, and saltwater while maintaining vibrant colors and soft textures.",
      services: ["Pool towel programs", "Cabana textiles", "UV-resistant fabrics", "Beach-safe materials"]
    },
    {
      name: "Private Residences & Yachts",
      description: "Exclusive textile solutions for discerning private clients, from luxury villas to superyachts, with complete discretion and personalization.",
      services: ["Fully custom designs", "Monogramming services", "Small batch production", "White-glove delivery"]
    }
  ]

  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-brand-cream to-white">
        <div className="container mx-auto px-6">
          <h1 className="font-playfair text-display-md mb-6">Industries We Serve</h1>
          <p className="text-xl text-brand-stone max-w-3xl">
            Specialized textile solutions for every hospitality sector. With 200+ clients across diverse industries, 
            we understand the unique requirements of each business and deliver accordingly.
          </p>
        </div>
      </section>

      {/* Industries Detail */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {industries.map((industry, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 0 ? 'md:order-1' : 'md:order-2'}>
                  <h2 className="font-playfair text-3xl mb-4">{industry.name}</h2>
                  <p className="text-brand-stone mb-6">{industry.description}</p>
                  <div className="space-y-2">
                    <p className="font-semibold text-sm uppercase tracking-wider text-brand-lilac-dark mb-3">Our Services:</p>
                    {industry.services.map((service, i) => (
                      <div key={i} className="flex items-start">
                        <span className="text-brand-lilac mr-2 mt-1">•</span>
                        <span className="text-sm text-brand-stone">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={index % 2 === 0 ? 'md:order-2' : 'md:order-1'}>
                  <div className="aspect-[4/3] bg-gradient-to-br from-neutral-200 to-neutral-300 rounded-subtle overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center text-neutral-500">
                      [{industry.name} Image]
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-brand-cream">
        <div className="container mx-auto px-6">
          <h2 className="font-playfair text-display-sm text-center mb-12">Our Reach</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <p className="font-playfair text-4xl text-brand-lilac mb-2">15+</p>
              <p className="text-sm text-brand-stone">Countries Served</p>
            </div>
            <div className="text-center">
              <p className="font-playfair text-4xl text-brand-lilac mb-2">200+</p>
              <p className="text-sm text-brand-stone">Active Clients</p>
            </div>
            <div className="text-center">
              <p className="font-playfair text-4xl text-brand-lilac mb-2">50K+</p>
              <p className="text-sm text-brand-stone">Items Monthly</p>
            </div>
            <div className="text-center">
              <p className="font-playfair text-4xl text-brand-lilac mb-2">98%</p>
              <p className="text-sm text-brand-stone">Client Retention</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-playfair text-display-sm mb-6">Your Industry, Our Expertise</h2>
          <p className="text-lg text-brand-stone max-w-2xl mx-auto mb-8">
            Whatever your hospitality sector, we have the experience and capability to deliver exceptional textile solutions.
          </p>
          <a href="/contact" className="inline-block bg-brand-lilac text-white px-8 py-3 rounded-subtle hover:bg-brand-lilac-dark transition-colors">
            Discuss Your Needs →
          </a>
        </div>
      </section>
    </div>
  )
}