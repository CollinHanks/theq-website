import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      {/* Hero Section - FIXED VERSION */}
      <section className="h-[90vh] relative flex items-center justify-center overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero-banner.jpg"
            alt="Premium Turkish hospitality textiles - luxury hotel bedding and linens"
            fill
            priority
            quality={90}
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* Dark Overlay for Contrast - Simple & Clean */}
        <div className="absolute inset-0 bg-black/40 z-[1]"></div>

        {/* Content */}
        <div className="relative text-center max-w-5xl px-6 z-10">
          {/* Heading - Pure White with Shadow */}
          <h1 className="font-playfair text-5xl md:text-display-lg mb-6 text-white leading-tight" style={{textShadow: '0 2px 8px rgba(0,0,0,0.3)'}}>
            Signature textiles for<br />exceptional hospitality
          </h1>
          
          {/* Subheading - Pure White with Shadow */}
          <p className="text-xl md:text-2xl text-white mb-10 max-w-3xl mx-auto" style={{textShadow: '0 1px 4px rgba(0,0,0,0.3)'}}>
            Where Turkish craftsmanship meets contemporary luxury. 
            Elevating spaces through timeless textile excellence since 2018.
          </p>
          
          {/* CTA Buttons - Consistent Style */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/collections" 
              className="bg-brand-lilac text-white px-10 py-4 rounded-subtle hover:bg-brand-lilac-dark transition-all duration-300 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Explore Collections
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-white text-white px-10 py-4 rounded-subtle hover:bg-white hover:text-brand-charcoal transition-all duration-300 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Request Samples
            </Link>
          </div>
        </div>

        {/* Scroll Indicator - Bottom Right Corner */}
        <div className="absolute bottom-12 right-8 z-10 opacity-40 hover:opacity-80 transition-opacity">
          <div className="flex flex-col items-center gap-2">
            <span className="text-white text-xs uppercase tracking-wider">Scroll</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center animate-bounce">
              <div className="w-1.5 h-3 bg-white rounded-full mt-2"></div>
            </div>
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
            {/* Bedding Collection Card */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/5] relative rounded-subtle overflow-hidden mb-4 bg-neutral-200">
                <Image 
                  src="/images/bedding-collection.jpg"
                  alt="Luxury bedding collection with Egyptian cotton sheets and plush duvets"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="font-playfair text-2xl mb-2 group-hover:text-brand-lilac transition-colors">Bedding Excellence</h3>
              <p className="text-brand-stone">Egyptian cotton sheets, plush duvets, and elegant pillowcases crafted for ultimate comfort.</p>
            </div>

            {/* Restaurant Uniforms Card */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/5] relative rounded-subtle overflow-hidden mb-4 bg-neutral-200">
                <Image 
                  src="/images/restaurant-uniforms.jpg"
                  alt="Professional restaurant uniforms and hospitality attire"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="font-playfair text-2xl mb-2 group-hover:text-brand-lilac transition-colors">Professional Attire</h3>
              <p className="text-brand-stone">Bespoke uniforms that blend functionality with sophisticated design for hospitality teams.</p>
            </div>

            {/* Spa & Wellness Card */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/5] relative rounded-subtle overflow-hidden mb-4 bg-neutral-200">
                <Image 
                  src="/images/spa-wellness.jpg"
                  alt="Luxury spa robes, premium towels and wellness textiles"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
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

      {/* Industries - FIXED AND CLICKABLE */}
      <section className="py-20 bg-white" id="industries">
        <div className="container mx-auto px-6">
          <h2 className="font-playfair text-display-md text-center mb-4">Industries We Serve</h2>
          <p className="text-center text-brand-stone text-lg mb-12 max-w-2xl mx-auto">
            Tailored textile solutions for diverse hospitality sectors, each crafted with meticulous attention to industry-specific needs.
          </p>
          
          {/* FIXED: Proper grid with equal sized boxes */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Luxury Hotels */}
            <Link 
              href="/industries/luxury-hotels"
              className="text-center py-8 px-4 bg-brand-cream rounded-subtle hover:bg-brand-lilac-light hover:shadow-md transition-all duration-300 cursor-pointer group"
            >
              <p className="font-medium text-brand-charcoal group-hover:text-brand-lilac-dark">Luxury Hotels</p>
            </Link>

            {/* Fine Dining */}
            <Link 
              href="/industries/fine-dining"
              className="text-center py-8 px-4 bg-brand-lilac-light rounded-subtle hover:bg-brand-lilac hover:shadow-md transition-all duration-300 cursor-pointer group"
            >
              <p className="font-medium text-brand-charcoal">Fine Dining</p>
            </Link>

            {/* Boutique Resorts */}
            <Link 
              href="/industries/boutique-resorts"
              className="text-center py-8 px-4 bg-brand-lilac-light rounded-subtle hover:bg-brand-lilac hover:shadow-md transition-all duration-300 cursor-pointer group"
            >
              <p className="font-medium text-brand-charcoal">Boutique Resorts</p>
            </Link>

            {/* Wellness Centers */}
            <Link 
              href="/industries/wellness-centers"
              className="text-center py-8 px-4 bg-brand-cream rounded-subtle hover:bg-brand-lilac-light hover:shadow-md transition-all duration-300 cursor-pointer group"
            >
              <p className="font-medium text-brand-charcoal group-hover:text-brand-lilac-dark">Wellness Centers</p>
            </Link>

            {/* Corporate Venues */}
            <Link 
              href="/industries/corporate-venues"
              className="text-center py-8 px-4 bg-brand-cream rounded-subtle hover:bg-brand-lilac-light hover:shadow-md transition-all duration-300 cursor-pointer group"
            >
              <p className="font-medium text-brand-charcoal group-hover:text-brand-lilac-dark">Corporate Venues</p>
            </Link>

            {/* Cafés & Bistros */}
            <Link 
              href="/industries/cafes-bistros"
              className="text-center py-8 px-4 bg-brand-cream rounded-subtle hover:bg-brand-lilac-light hover:shadow-md transition-all duration-300 cursor-pointer group"
            >
              <p className="font-medium text-brand-charcoal group-hover:text-brand-lilac-dark">Cafés & Bistros</p>
            </Link>

            {/* Beach Clubs */}
            <Link 
              href="/industries/beach-clubs"
              className="text-center py-8 px-4 bg-brand-cream rounded-subtle hover:bg-brand-lilac-light hover:shadow-md transition-all duration-300 cursor-pointer group"
            >
              <p className="font-medium text-brand-charcoal group-hover:text-brand-lilac-dark">Beach Clubs</p>
            </Link>

            {/* Private Yachts */}
            <Link 
              href="/industries/private-yachts"
              className="text-center py-8 px-4 bg-brand-lilac-light rounded-subtle hover:bg-brand-lilac hover:shadow-md transition-all duration-300 cursor-pointer group"
            >
              <p className="font-medium text-brand-charcoal">Private Yachts</p>
            </Link>
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