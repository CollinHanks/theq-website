export default function CollectionsPage() {
  const collections = [
    {
      title: "Bedroom Essentials",
      description: "Luxurious bedding that transforms every night into a five-star experience",
      items: ["Egyptian Cotton Sheets", "Goose Down Duvets", "Memory Foam Pillows", "Mattress Protectors"]
    },
    {
      title: "Bathroom Luxury",
      description: "Premium towels and bathrobes that envelop guests in comfort",
      items: ["Turkish Cotton Towels", "Waffle Bathrobes", "Bath Mats", "Face Cloths"]
    },
    {
      title: "Dining Excellence",
      description: "Table linens that set the stage for memorable culinary experiences",
      items: ["Tablecloths", "Napkins", "Placemats", "Table Runners"]
    },
    {
      title: "Professional Uniforms",
      description: "Sophisticated attire that elevates your team's professional image",
      items: ["Chef Coats", "Server Uniforms", "Reception Attire", "Housekeeping Uniforms"]
    },
    {
      title: "Spa & Wellness",
      description: "Serene textiles designed for relaxation and rejuvenation",
      items: ["Spa Robes", "Massage Table Linens", "Sauna Towels", "Slippers"]
    },
    {
      title: "Outdoor & Poolside",
      description: "Durable yet elegant textiles for outdoor hospitality spaces",
      items: ["Pool Towels", "Cabana Curtains", "Outdoor Cushions", "Beach Towels"]
    }
  ]

  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-brand-cream to-white">
        <div className="container mx-auto px-6">
          <h1 className="font-playfair text-display-md mb-6">Our Collections</h1>
          <p className="text-xl text-brand-stone max-w-3xl">
            Meticulously crafted textile collections designed to elevate every aspect of the hospitality experience. 
            Each piece combines luxury, durability, and timeless design.
          </p>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {collections.map((collection, index) => (
              <div key={index} className="group">
                <div className="aspect-[16/10] bg-gradient-to-br from-neutral-200 to-neutral-300 rounded-subtle overflow-hidden mb-6">
                  <div className="w-full h-full flex items-center justify-center text-neutral-500">
                    [{collection.title} Visual]
                  </div>
                </div>
                <h2 className="font-playfair text-3xl mb-3 group-hover:text-brand-lilac transition-colors">
                  {collection.title}
                </h2>
                <p className="text-brand-stone mb-4">{collection.description}</p>
                <div className="flex flex-wrap gap-2">
                  {collection.items.map((item, i) => (
                    <span key={i} className="text-sm bg-brand-cream px-3 py-1 rounded-subtle">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-20 bg-brand-cream">
        <div className="container mx-auto px-6">
          <h2 className="font-playfair text-display-sm text-center mb-12">Premium Materials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="font-semibold text-lg mb-2">Egyptian Cotton</h3>
              <p className="text-sm text-brand-stone">Long-staple fibers for exceptional softness and durability</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-lg mb-2">Turkish Linen</h3>
              <p className="text-sm text-brand-stone">Breathable and naturally antimicrobial for ultimate comfort</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-lg mb-2">Bamboo Blend</h3>
              <p className="text-sm text-brand-stone">Sustainable and silky-smooth with moisture-wicking properties</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-playfair text-display-sm mb-6">Create Your Custom Collection</h2>
          <p className="text-lg text-brand-stone max-w-2xl mx-auto mb-8">
            Every property is unique. Let us design a bespoke textile collection that perfectly reflects your brand identity.
          </p>
          <a href="/contact" className="inline-block bg-brand-lilac text-white px-8 py-3 rounded-subtle hover:bg-brand-lilac-dark transition-colors">
            Start Your Project →
          </a>
        </div>
      </section>
    </div>
  )
}