export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-brand-cream to-white">
        <div className="container mx-auto px-6">
          <h1 className="font-playfair text-display-md mb-6">Our Story</h1>
          <p className="text-xl text-brand-stone max-w-3xl">
            Where Turkish heritage meets contemporary luxury. The Q represents a new generation of textile excellence, 
            built on 27 years of founders' expertise and a passion for exceptional craftsmanship.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="font-playfair text-3xl mb-6">Heritage & Innovation</h2>
              <p className="text-brand-stone mb-4">
                Founded in 2018 in the heart of Istanbul, The Q emerged from a vision to revolutionize hospitality textiles. 
                Our founders, with their combined 27 years of experience in the textile industry, recognized a gap in the market 
                for truly bespoke, luxury textiles that could withstand the demands of high-end hospitality while maintaining elegance.
              </p>
              <p className="text-brand-stone mb-4">
                Today, we serve over 200 clients globally, from intimate boutique hotels in the Aegean coast to Michelin-starred 
                restaurants in Dubai, each receiving the same meticulous attention to detail and commitment to excellence.
              </p>
              <p className="text-brand-stone">
                Our atelier in Istanbul bridges the gap between traditional Turkish textile craftsmanship and cutting-edge 
                production techniques, ensuring every piece we create tells a story of quality, durability, and timeless design.
              </p>
            </div>
            <div>
              <h2 className="font-playfair text-3xl mb-6">Our Philosophy</h2>
              <p className="text-brand-stone mb-4">
                At The Q, we believe textiles are more than functional items – they're the silent ambassadors of your brand, 
                the first touch your guests experience, and the lasting impression they take home.
              </p>
              <p className="text-brand-stone mb-4">
                Our approach combines three core principles: <strong>Craftsmanship</strong> that honors centuries of Turkish 
                textile tradition, <strong>Innovation</strong> that embraces modern sustainability and performance standards, 
                and <strong>Partnership</strong> that sees each client relationship as a collaborative journey.
              </p>
              <p className="text-brand-stone">
                We don't just supply textiles; we craft experiences. Every thread is chosen with purpose, every design 
                element considered for both aesthetics and longevity. This dedication has made us the trusted partner 
                for hospitality brands that refuse to compromise on quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-brand-cream">
        <div className="container mx-auto px-6">
          <h2 className="font-playfair text-display-sm text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-brand-lilac rounded-full mx-auto mb-4"></div>
              <h3 className="font-semibold text-lg mb-2">Quality First</h3>
              <p className="text-sm text-brand-stone">Every product undergoes rigorous quality control to ensure perfection.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-brand-lilac rounded-full mx-auto mb-4"></div>
              <h3 className="font-semibold text-lg mb-2">Sustainable Practice</h3>
              <p className="text-sm text-brand-stone">Committed to eco-friendly materials and responsible production methods.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-brand-lilac rounded-full mx-auto mb-4"></div>
              <h3 className="font-semibold text-lg mb-2">Bespoke Design</h3>
              <p className="text-sm text-brand-stone">Tailored solutions that reflect your brand's unique identity.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-brand-lilac rounded-full mx-auto mb-4"></div>
              <h3 className="font-semibold text-lg mb-2">Timeless Elegance</h3>
              <p className="text-sm text-brand-stone">Designs that transcend trends and stand the test of time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-playfair text-display-sm mb-6">The Team Behind The Q</h2>
          <p className="text-lg text-brand-stone max-w-3xl mx-auto mb-12">
            Our team of 50+ skilled artisans, designers, and textile specialists work collaboratively to bring 
            your vision to life. From our master weavers to our innovative designers, each member contributes 
            their expertise to create textiles that define luxury hospitality.
          </p>
          <a href="/contact" className="inline-block bg-brand-lilac text-white px-8 py-3 rounded-subtle hover:bg-brand-lilac-dark transition-colors">
            Meet Our Team →
          </a>
        </div>
      </section>
    </div>
  )
}