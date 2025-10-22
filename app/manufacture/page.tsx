export default function ManufacturePage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-brand-cream to-white">
        <div className="container mx-auto px-6">
          <h1 className="font-playfair text-display-md mb-6">Manufacturing Excellence</h1>
          <p className="text-xl text-brand-stone max-w-3xl">
            State-of-the-art production capabilities combined with artisanal attention to detail. 
            Discover how we bring textile excellence to life at scale.
          </p>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="font-playfair text-3xl mb-6">Production Capacity</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-brand-lilac pl-4">
                  <h3 className="font-semibold mb-1">50,000+ Items Monthly</h3>
                  <p className="text-sm text-brand-stone">From boutique orders to large-scale hotel chains</p>
                </div>
                <div className="border-l-4 border-brand-lilac pl-4">
                  <h3 className="font-semibold mb-1">15-Day Lead Time</h3>
                  <p className="text-sm text-brand-stone">For standard orders with expedited options available</p>
                </div>
                <div className="border-l-4 border-brand-lilac pl-4">
                  <h3 className="font-semibold mb-1">MOQ 50 Pieces</h3>
                  <p className="text-sm text-brand-stone">Flexible minimums for boutique properties</p>
                </div>
                <div className="border-l-4 border-brand-lilac pl-4">
                  <h3 className="font-semibold mb-1">100% Quality Control</h3>
                  <p className="text-sm text-brand-stone">Every item inspected before shipping</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-playfair text-3xl mb-6">Technology & Equipment</h2>
              <p className="text-brand-stone mb-4">
                Our manufacturing facility features the latest in textile technology, ensuring consistent quality 
                and efficiency across all production runs.
              </p>
              <ul className="space-y-2 text-sm text-brand-stone">
                <li>✓ Computerized weaving looms with 1000+ pattern capabilities</li>
                <li>✓ Digital printing for custom designs and logos</li>
                <li>✓ Automated cutting systems for precision</li>
                <li>✓ Industrial washing and finishing equipment</li>
                <li>✓ Climate-controlled storage facilities</li>
                <li>✓ In-house testing laboratory for quality assurance</li>
              </ul>
            </div>
          </div>

          {/* Sustainability */}
          <div className="bg-brand-cream p-12 rounded-subtle">
            <h2 className="font-playfair text-3xl mb-6 text-center">Sustainable Manufacturing</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-lilac rounded-full mx-auto mb-4"></div>
                <h3 className="font-semibold mb-2">Eco-Friendly Materials</h3>
                <p className="text-sm text-brand-stone">OEKO-TEX certified fabrics and organic options available</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-lilac rounded-full mx-auto mb-4"></div>
                <h3 className="font-semibold mb-2">Water Conservation</h3>
                <p className="text-sm text-brand-stone">Closed-loop water systems reduce consumption by 40%</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-lilac rounded-full mx-auto mb-4"></div>
                <h3 className="font-semibold mb-2">Waste Reduction</h3>
                <p className="text-sm text-brand-stone">Zero-waste cutting patterns and fabric recycling program</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-playfair text-display-sm mb-8">Certifications & Standards</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-brand-cream px-6 py-3 rounded-subtle">ISO 9001:2015</div>
            <div className="bg-brand-cream px-6 py-3 rounded-subtle">OEKO-TEX Standard 100</div>
            <div className="bg-brand-cream px-6 py-3 rounded-subtle">GOTS Certified</div>
            <div className="bg-brand-cream px-6 py-3 rounded-subtle">Turkish Standards Institution</div>
          </div>
        </div>
      </section>
    </div>
  )
}