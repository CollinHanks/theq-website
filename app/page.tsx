import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="h-[90vh] relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-cream via-brand-lilac-light/30 to-brand-cream"></div>
        <div className="relative text-center max-w-5xl px-6 z-10">
          <h1 className="font-playfair text-5xl md:text-display-lg mb-6 text-brand-charcoal leading-tight">
            Signature textiles for<br />exceptional hospitality
          </h1>
          <p className="text-xl md:text-2xl text-brand-stone mb-10 max-w-3xl mx-auto">
            Where Turkish craftsmanship meets contemporary luxury. 
            Elevating spaces through timeless textile excellence since 2018.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/collections" className="bg-brand-lilac text-white px-10 py-4 rounded-subtle hover:bg-brand-lilac-dark transition-all duration-300 text-lg font-medium">
              Explore Collections
            </Link>
            <Link href="/contact" className="border-2 border-brand-charcoal text-brand-charcoal px-10 py-4 rounded-subtle hover:bg-brand-charcoal hover:text-white transition-all duration-300 text-lg font-medium">
              Request Samples
            </Link>
          </div>
        </div>
      </section>

      {/* Numbers Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-playfair text-5xl text-brand-lilac mb-2">7+</h3>
              <p className="text-lg text-brand-stone">Years of Excellence</p>
            </div>
            <div>
              <h3 className="font-playfair text-5xl text-brand-lilac mb-2">200+</h3>
              <p className="text-lg text-brand-stone">Global & Local Clients</p>
            </div>
            <div>
              <h3 className="font-playfair text-5xl text-brand-lilac mb-2">27</h3>
              <p className="text-lg text-brand-stone">Years Founders' Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Preview */}
      <section className="py-20 bg-brand-cream">
        <div className="container mx-auto px-6">
          <h2 className="font-playfair text-display-md text-center mb-4">Curated Collections</h2>
          <p className="text-center text-brand-stone text-lg mb-12 max-w-2xl mx-auto">
            From intimate boutique hotels to grand luxury resorts, our collections embody sophistication and durability.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="aspect-[4/5] bg-gradient-to-b from-neutral-200 to-neutral-300 rounded-subtle overflow-hidden mb-4">
                <div className="w-full h-full flex items-center justify-center text-neutral-500">
                  [Luxury Bedding Collection]
                </div>
              </div>
              <h3 className="font-playfair text-2xl mb-2 group-hover:text-brand-lilac transition-colors">Bedding Excellence</h3>
              <p className="text-brand-stone">Egyptian cotton sheets, plush duvets, and elegant pillowcases crafted for ultimate comfort.</p>
            </div>
            <div className="group cursor-pointer">
              <div className="aspect-[4/5] bg-gradient-to-b from-neutral-200 to-neutral-300 rounded-subtle overflow-hidden mb-4">
                <div className="w-full h-full flex items-center justify-center text-neutral-500">
                  [Restaurant Uniforms]
                </div>
              </div>
              <h3 className="font-playfair text-2xl mb-2 group-hover:text-brand-lilac transition-colors">Professional Attire</h3>
              <p className="text-brand-stone">Bespoke uniforms that blend functionality with sophisticated design for hospitality teams.</p>
            </div>
            <div className="group cursor-pointer">
              <div className="aspect-[4/5] bg-gradient-to-b from-neutral-200 to-neutral-300 rounded-subtle overflow-hidden mb-4">
                <div className="w-full h-full flex items-center justify-center text-neutral-500">
                  [Spa & Wellness Textiles]
                </div>
              </div>
              <h3 className="font-playfair text-2xl mb-2 group-hover:text-brand-lilac transition-colors">Spa & Wellness</h3>
              <p className="text-brand-stone">Luxurious robes, premium towels, and serene textile solutions for wellness sanctuaries.</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/collections" className="inline-block border-2 border-brand-charcoal text-brand-charcoal px-8 py-3 rounded-subtle hover:bg-brand-charcoal hover:text-white transition-all duration-300">
              View All Collections →
            </Link>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="font-playfair text-display-md text-center mb-4">Industries We Serve</h2>
          <p className="text-center text-brand-stone text-lg mb-12 max-w-2xl mx-auto">
            Tailored textile solutions for diverse hospitality sectors, each crafted with meticulous attention to industry-specific needs.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Luxury Hotels', 'Fine Dining', 'Boutique Resorts', 'Wellness Centers', 'Corporate Venues', 'Cafés & Bistros', 'Beach Clubs', 'Private Yachts'].map((industry) => (
              <div key={industry} className="text-center py-8 px-4 bg-brand-cream rounded-subtle hover:bg-brand-lilac-light transition-all duration-300 cursor-pointer">
                <p className="font-medium text-brand-charcoal">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-charcoal text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-playfair text-display-md mb-4">Ready to Elevate Your Space?</h2>
          <p className="text-xl mb-8 text-neutral-300 max-w-2xl mx-auto">
            Let's create something extraordinary together. From concept to creation, we bring your textile vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-brand-lilac text-white px-10 py-4 rounded-subtle hover:bg-brand-lilac-light transition-all duration-300 text-lg font-medium">
              Start Your Project
            </Link>
            <Link href="/projects" className="border-2 border-white text-white px-10 py-4 rounded-subtle hover:bg-white hover:text-brand-charcoal transition-all duration-300 text-lg font-medium">
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}