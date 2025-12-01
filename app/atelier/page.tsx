export default function AtelierPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-brand-cream to-white">
        <div className="container mx-auto px-6">
          <h1 className="font-playfair text-display-md mb-6">Our Atelier</h1>
          <p className="text-xl text-brand-stone max-w-3xl">
            Step inside our Istanbul atelier, where traditional Turkish craftsmanship meets modern innovation. 
            This is where your textile visions come to life.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="font-playfair text-3xl mb-6">The Heart of Creation</h2>
              <p className="text-brand-stone mb-4">
                Our 5,000 square meter atelier in Istanbul is more than a production facility – it's a creative hub where 
                50+ master craftspeople bring decades of expertise to every project. Located strategically between Europe 
                and Asia, we blend the best of both worlds in our approach to textile excellence.
              </p>
              <p className="text-brand-stone mb-4">
                From hand-selecting the finest raw materials to the final quality inspection, every step of our process 
                happens under one roof. This vertical integration ensures complete control over quality, timing, and 
                customization possibilities.
              </p>
              <p className="text-brand-stone">
                Our atelier features state-of-the-art weaving looms alongside traditional handcrafting stations, 
                allowing us to offer both cutting-edge efficiency and artisanal attention to detail.
              </p>
            </div>
            <div className="aspect-square bg-gradient-to-br from-neutral-200 to-neutral-300 rounded-subtle overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-neutral-500">
                [Atelier Interior Image]
              </div>
            </div>
          </div>

          {/* Capabilities */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="text-center p-6 bg-brand-cream rounded-subtle">
              <h3 className="font-playfair text-xl mb-3">Design Studio</h3>
              <p className="text-sm text-brand-stone">
                Our in-house design team creates custom patterns, weaves, and embroideries tailored to your brand identity.
              </p>
            </div>
            <div className="text-center p-6 bg-brand-cream rounded-subtle">
              <h3 className="font-playfair text-xl mb-3">Weaving Floor</h3>
              <p className="text-sm text-brand-stone">
                Advanced looms produce up to 10,000 meters of fabric daily while maintaining exceptional quality standards.
              </p>
            </div>
            <div className="text-center p-6 bg-brand-cream rounded-subtle">
              <h3 className="font-playfair text-xl mb-3">Finishing Department</h3>
              <p className="text-sm text-brand-stone">
                Specialized treatments for durability, softness, and performance tailored to hospitality demands.
              </p>
            </div>
          </div>

          {/* Process */}
          <div className="bg-brand-charcoal text-white p-12 rounded-subtle">
            <h2 className="font-playfair text-3xl mb-8 text-center">Our Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="w-12 h-12 bg-brand-lilac rounded-full mb-4 flex items-center justify-center font-bold">1</div>
                <h3 className="font-semibold mb-2">Consultation</h3>
                <p className="text-sm text-neutral-300">Understanding your vision, requirements, and brand identity</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-brand-lilac rounded-full mb-4 flex items-center justify-center font-bold">2</div>
                <h3 className="font-semibold mb-2">Design</h3>
                <p className="text-sm text-neutral-300">Creating custom designs and selecting perfect materials</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-brand-lilac rounded-full mb-4 flex items-center justify-center font-bold">3</div>
                <h3 className="font-semibold mb-2">Production</h3>
                <p className="text-sm text-neutral-300">Crafting your textiles with precision and care</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-brand-lilac rounded-full mb-4 flex items-center justify-center font-bold">4</div>
                <h3 className="font-semibold mb-2">Delivery</h3>
                <p className="text-sm text-neutral-300">Quality control and worldwide shipping</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship */}
      <section className="py-20 bg-brand-cream">
        <div className="container mx-auto px-6">
          <h2 className="font-playfair text-display-sm text-center mb-12">Master Craftsmanship</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="font-semibold text-lg mb-3">Traditional Techniques</h3>
              <p className="text-sm text-brand-stone mb-4">
                Our artisans preserve centuries-old Turkish textile traditions, from intricate hand-embroidery 
                to specialized weaving patterns passed down through generations.
              </p>
              <ul className="space-y-2 text-sm text-brand-stone">
                <li>• Hand-guided embroidery for logos and monograms</li>
                <li>• Traditional Turkish weaving patterns</li>
                <li>• Artisanal finishing techniques</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3">Modern Innovation</h3>
              <p className="text-sm text-brand-stone mb-4">
                We embrace cutting-edge technology to ensure consistency, efficiency, and innovation in every 
                piece we create.
              </p>
              <ul className="space-y-2 text-sm text-brand-stone">
                <li>• Computer-aided design and pattern making</li>
                <li>• Automated quality control systems</li>
                <li>• Sustainable production technologies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-playfair text-display-sm mb-6">Visit Our Atelier</h2>
          <p className="text-lg text-brand-stone max-w-2xl mx-auto mb-8">
            We welcome clients to visit our Istanbul atelier and witness the craftsmanship firsthand. 
            Schedule your private tour today.
          </p>
          <a href="/contact" className="inline-block bg-brand-lilac text-white px-8 py-3 rounded-subtle hover:bg-brand-lilac-dark transition-colors">
            Schedule a Visit →
          </a>
        </div>
      </section>
    </div>
  )
}