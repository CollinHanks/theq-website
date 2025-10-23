import Image from 'next/image'
import Link from 'next/link'
import { Award, Users, Globe, TrendingUp, Shield, Target, Sparkles, Heart } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-brand-cream to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl mb-6 text-brand-charcoal">
              Our Story
            </h1>
            <p className="text-lg md:text-xl text-brand-stone leading-relaxed">
              Where Turkish heritage meets contemporary luxury. The Q represents a new generation of textile excellence, built on 27 years of founders' expertise and a passion for exceptional craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Image + Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center max-w-7xl mx-auto">
            {/* Image */}
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/about-workshop.jpg"
                alt="The Q atelier workshop in Istanbul"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Content */}
            <div className="space-y-6">
              <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-brand-charcoal">
                Heritage & Innovation
              </h2>
              <div className="space-y-5 text-brand-stone leading-relaxed text-base md:text-lg">
                <p>
                  Founded in 2018 in the heart of Istanbul, The Q emerged from a vision to revolutionize hospitality textiles. Our founders, with their combined 27 years of experience in the textile industry, recognized a gap in the market for truly bespoke, luxury textiles that could withstand the demands of high-end hospitality while maintaining elegance.
                </p>
                <p>
                  Today, we serve over 200 clients globally, from intimate boutique hotels in the Aegean coast to Michelin-starred restaurants in Dubai, each receiving the same meticulous attention to detail and commitment to excellence.
                </p>
                <p>
                  Our atelier in Istanbul bridges the gap between traditional Turkish textile craftsmanship and cutting-edge production techniques, ensuring every piece we create tells a story of quality, durability, and timeless design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section with Image */}
      <section className="py-16 md:py-24 bg-brand-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center max-w-7xl mx-auto">
            {/* Content - Left Side */}
            <div className="space-y-6 order-2 lg:order-1">
              <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-brand-charcoal">
                Our Philosophy
              </h2>
              <div className="space-y-5 text-brand-stone leading-relaxed text-base md:text-lg">
                <p>
                  At The Q, we believe textiles are more than functional items – they're the silent ambassadors of your brand, the first touch your guests experience, and the lasting impression they take home.
                </p>
                <p>
                  Our approach combines three core principles: <span className="font-semibold text-brand-charcoal">Craftsmanship</span> that honors centuries of Turkish textile tradition, <span className="font-semibold text-brand-charcoal">Innovation</span> that embraces modern sustainability and performance standards, and <span className="font-semibold text-brand-charcoal">Partnership</span> that sees each client relationship as a collaborative journey.
                </p>
                <p>
                  We don't just supply textiles; we craft experiences. Every thread is chosen with purpose, every design element considered for both aesthetics and longevity. This dedication has made us the trusted partner for hospitality brands that refuse to compromise on quality.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-xl order-1 lg:order-2">
              <Image
                src="/images/about-craftsmanship.jpg"
                alt="Artisan craftsmanship at The Q"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - MINIMALIST */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-center mb-16 md:mb-20 text-brand-charcoal">
            Our Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 max-w-7xl mx-auto">
            {/* Quality First */}
            <div className="text-center group">
              <div className="mb-6 flex justify-center">
                <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center">
                  <Award className="w-full h-full text-brand-lilac transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="font-semibold text-xl md:text-2xl mb-3 text-brand-charcoal">
                Quality First
              </h3>
              <p className="text-sm md:text-base text-brand-stone leading-relaxed">
                Every product undergoes rigorous quality control to ensure perfection.
              </p>
            </div>

            {/* Sustainable Practice */}
            <div className="text-center group">
              <div className="mb-6 flex justify-center">
                <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center">
                  <Sparkles className="w-full h-full text-brand-lilac transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="font-semibold text-xl md:text-2xl mb-3 text-brand-charcoal">
                Sustainable Practice
              </h3>
              <p className="text-sm md:text-base text-brand-stone leading-relaxed">
                Committed to eco-friendly materials and responsible production methods.
              </p>
            </div>

            {/* Bespoke Design */}
            <div className="text-center group">
              <div className="mb-6 flex justify-center">
                <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center">
                  <Target className="w-full h-full text-brand-lilac transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="font-semibold text-xl md:text-2xl mb-3 text-brand-charcoal">
                Bespoke Design
              </h3>
              <p className="text-sm md:text-base text-brand-stone leading-relaxed">
                Tailored solutions that reflect your brand's unique identity.
              </p>
            </div>

            {/* Timeless Elegance */}
            <div className="text-center group">
              <div className="mb-6 flex justify-center">
                <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center">
                  <Heart className="w-full h-full text-brand-lilac transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="font-semibold text-xl md:text-2xl mb-3 text-brand-charcoal">
                Timeless Elegance
              </h3>
              <p className="text-sm md:text-base text-brand-stone leading-relaxed">
                Designs that transcend trends and stand the test of time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-brand-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-center mb-6 md:mb-8 text-brand-charcoal">
              The Team Behind The Q
            </h2>
            <p className="text-center text-lg md:text-xl text-brand-stone mb-12 md:mb-16 leading-relaxed max-w-4xl mx-auto">
              Our collaborative network brings together master artisans, innovative designers, and textile specialists across Istanbul and beyond. From traditional weavers who've perfected their craft over decades to forward-thinking production partners embracing the latest sustainability standards, every member of our extended team contributes their unique expertise to create textiles that define luxury hospitality.
            </p>

            {/* Team Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
              <div className="bg-white p-8 md:p-10 rounded-lg shadow-md text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-5 bg-brand-lilac-light rounded-full flex items-center justify-center">
                  <Users className="w-7 h-7 md:w-8 md:h-8 text-brand-lilac-dark" strokeWidth={1.5} />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-brand-lilac mb-2">
                  Expert Network
                </div>
                <p className="text-sm md:text-base text-brand-stone">
                  Master artisans & designers
                </p>
              </div>

              <div className="bg-white p-8 md:p-10 rounded-lg shadow-md text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-5 bg-brand-lilac-light rounded-full flex items-center justify-center">
                  <Globe className="w-7 h-7 md:w-8 md:h-8 text-brand-lilac-dark" strokeWidth={1.5} />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-brand-lilac mb-2">
                  Global Partners
                </div>
                <p className="text-sm md:text-base text-brand-stone">
                  Production facilities worldwide
                </p>
              </div>

              <div className="bg-white p-8 md:p-10 rounded-lg shadow-md text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-5 bg-brand-lilac-light rounded-full flex items-center justify-center">
                  <TrendingUp className="w-7 h-7 md:w-8 md:h-8 text-brand-lilac-dark" strokeWidth={1.5} />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-brand-lilac mb-2">
                  27 Years
                </div>
                <p className="text-sm md:text-base text-brand-stone">
                  Combined founders' experience
                </p>
              </div>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
              <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/team-workshop.jpg"
                  alt="Our artisans at work"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/team-design.jpg"
                  alt="Design team collaboration"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link 
                href="/contact"
                className="inline-block bg-brand-lilac text-white px-10 md:px-12 py-4 md:py-5 rounded-subtle hover:bg-brand-lilac-dark transition-all duration-300 text-base md:text-lg font-medium shadow-lg hover:shadow-xl"
              >
                Work With Us →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-center mb-16 md:mb-20 text-brand-charcoal">
            Why Leading Brands Choose The Q
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-7xl mx-auto">
            <div className="bg-brand-cream p-8 md:p-10 rounded-lg">
              <div className="w-12 h-12 md:w-14 md:h-14 mb-5 flex items-center justify-center">
                <Shield className="w-full h-full text-brand-lilac" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-brand-charcoal">
                Proven Excellence
              </h3>
              <p className="text-sm md:text-base text-brand-stone leading-relaxed">
                7+ years serving luxury hospitality with 98% client satisfaction rate.
              </p>
            </div>

            <div className="bg-brand-cream p-8 md:p-10 rounded-lg">
              <div className="w-12 h-12 md:w-14 md:h-14 mb-5 flex items-center justify-center">
                <Target className="w-full h-full text-brand-lilac" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-brand-charcoal">
                Complete Customization
              </h3>
              <p className="text-sm md:text-base text-brand-stone leading-relaxed">
                From thread selection to final embroidery, everything is tailored to your vision.
              </p>
            </div>

            <div className="bg-brand-cream p-8 md:p-10 rounded-lg">
              <div className="w-12 h-12 md:w-14 md:h-14 mb-5 flex items-center justify-center">
                <Globe className="w-full h-full text-brand-lilac" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-brand-charcoal">
                Global Reach
              </h3>
              <p className="text-sm md:text-base text-brand-stone leading-relaxed">
                Serving 200+ clients worldwide with seamless international logistics.
              </p>
            </div>

            <div className="bg-brand-cream p-8 md:p-10 rounded-lg">
              <div className="w-12 h-12 md:w-14 md:h-14 mb-5 flex items-center justify-center">
                <Sparkles className="w-full h-full text-brand-lilac" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-brand-charcoal">
                Premium Materials
              </h3>
              <p className="text-sm md:text-base text-brand-stone leading-relaxed">
                Egyptian cotton, Turkish terry, European linens – only the finest.
              </p>
            </div>

            <div className="bg-brand-cream p-8 md:p-10 rounded-lg">
              <div className="w-12 h-12 md:w-14 md:h-14 mb-5 flex items-center justify-center">
                <Award className="w-full h-full text-brand-lilac" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-brand-charcoal">
                Commercial Grade
              </h3>
              <p className="text-sm md:text-base text-brand-stone leading-relaxed">
                Built to withstand 300+ industrial wash cycles without losing quality.
              </p>
            </div>

            <div className="bg-brand-cream p-8 md:p-10 rounded-lg">
              <div className="w-12 h-12 md:w-14 md:h-14 mb-5 flex items-center justify-center">
                <Heart className="w-full h-full text-brand-lilac" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-brand-charcoal">
                Personal Touch
              </h3>
              <p className="text-sm md:text-base text-brand-stone leading-relaxed">
                Dedicated account manager for every project, from concept to delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-brand-charcoal text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl mb-6 md:mb-8">
            Ready to Experience The Q Difference?
          </h2>
          <p className="text-lg md:text-xl text-neutral-300 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
            Let's create something extraordinary together. Our team is ready to bring your textile vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
            <Link
              href="/contact"
              className="bg-brand-lilac text-white px-10 md:px-12 py-4 md:py-5 rounded-subtle hover:bg-brand-lilac-light transition-colors text-base md:text-lg font-medium"
            >
              Start Your Project
            </Link>
            <Link
              href="/projects"
              className="bg-transparent border-2 border-white text-white px-10 md:px-12 py-4 md:py-5 rounded-subtle hover:bg-white hover:text-brand-charcoal transition-colors text-base md:text-lg font-medium"
            >
              View Our Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}