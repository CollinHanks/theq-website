export default function CareGuidePage() {
  const careCategories = [
    {
      title: "Bedding & Linens",
      items: [
        { name: "Sheets & Pillowcases", temp: "60°C", cycle: "Normal", dry: "Medium heat", iron: "Medium", special: "Wash whites separately" },
        { name: "Duvet Covers", temp: "40°C", cycle: "Gentle", dry: "Low heat", iron: "Medium", special: "Button/zip closed before washing" },
        { name: "Mattress Protectors", temp: "60°C", cycle: "Normal", dry: "Low heat", iron: "No", special: "Monthly washing recommended" }
      ]
    },
    {
      title: "Bath Textiles",
      items: [
        { name: "Towels", temp: "60°C", cycle: "Normal", dry: "High heat", iron: "No", special: "Avoid fabric softener for absorbency" },
        { name: "Bathrobes", temp: "40°C", cycle: "Gentle", dry: "Medium heat", iron: "Low", special: "Wash separately first 3 times" },
        { name: "Bath Mats", temp: "60°C", cycle: "Normal", dry: "High heat", iron: "No", special: "Shake well before washing" }
      ]
    },
    {
      title: "Table Linens",
      items: [
        { name: "Tablecloths", temp: "40°C", cycle: "Gentle", dry: "Low heat", iron: "High", special: "Treat stains immediately" },
        { name: "Napkins", temp: "60°C", cycle: "Normal", dry: "Medium heat", iron: "High", special: "Starch for crisp finish" },
        { name: "Placemats", temp: "30°C", cycle: "Gentle", dry: "Air dry", iron: "Medium", special: "Store flat to prevent creasing" }
      ]
    }
  ]

  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-brand-cream to-white">
        <div className="container mx-auto px-6">
          <h1 className="font-playfair text-display-md mb-6">Care Guide</h1>
          <p className="text-xl text-brand-stone max-w-3xl">
            Proper care ensures your textiles maintain their luxury feel and appearance for years. 
            Follow our expert guidelines for optimal longevity.
          </p>
        </div>
      </section>

      {/* Care Instructions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          {careCategories.map((category, index) => (
            <div key={index} className="mb-16">
              <h2 className="font-playfair text-3xl mb-8">{category.title}</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-brand-cream">
                      <th className="text-left p-4 font-semibold">Item</th>
                      <th className="text-left p-4 font-semibold">Temperature</th>
                      <th className="text-left p-4 font-semibold">Wash Cycle</th>
                      <th className="text-left p-4 font-semibold">Drying</th>
                      <th className="text-left p-4 font-semibold">Ironing</th>
                      <th className="text-left p-4 font-semibold">Special Instructions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {category.items.map((item, i) => (
                      <tr key={i} className="border-b border-neutral-200">
                        <td className="p-4">{item.name}</td>
                        <td className="p-4">{item.temp}</td>
                        <td className="p-4">{item.cycle}</td>
                        <td className="p-4">{item.dry}</td>
                        <td className="p-4">{item.iron}</td>
                        <td className="p-4 text-sm text-brand-stone">{item.special}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-20 bg-brand-cream">
        <div className="container mx-auto px-6">
          <h2 className="font-playfair text-display-sm text-center mb-12">Professional Care Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-subtle">
              <h3 className="font-semibold mb-3">Pre-Treatment</h3>
              <p className="text-sm text-brand-stone">Always check for stains before washing. Pre-treat with appropriate stain remover for best results.</p>
            </div>
            <div className="bg-white p-6 rounded-subtle">
              <h3 className="font-semibold mb-3">Sorting</h3>
              <p className="text-sm text-brand-stone">Separate by color, fabric type, and soil level. This prevents color transfer and ensures proper cleaning.</p>
            </div>
            <div className="bg-white p-6 rounded-subtle">
              <h3 className="font-semibold mb-3">Loading</h3>
              <p className="text-sm text-brand-stone">Don't overload machines. Items need room to move for effective cleaning and to prevent wear.</p>
            </div>
            <div className="bg-white p-6 rounded-subtle">
              <h3 className="font-semibold mb-3">Detergent</h3>
              <p className="text-sm text-brand-stone">Use professional-grade, pH-neutral detergents. Avoid bleach on colored items.</p>
            </div>
            <div className="bg-white p-6 rounded-subtle">
              <h3 className="font-semibold mb-3">Drying</h3>
              <p className="text-sm text-brand-stone">Remove items promptly to prevent wrinkles. Shake out before loading dryer.</p>
            </div>
            <div className="bg-white p-6 rounded-subtle">
              <h3 className="font-semibold mb-3">Storage</h3>
              <p className="text-sm text-brand-stone">Store in cool, dry place. Use breathable storage bags for seasonal items.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-playfair text-display-sm mb-6">Professional Laundry Manual</h2>
          <p className="text-lg text-brand-stone max-w-2xl mx-auto mb-8">
            Download our comprehensive care manual for detailed instructions on maintaining your Q textiles.
          </p>
          <a href="/contact" className="inline-block bg-brand-lilac text-white px-8 py-3 rounded-subtle hover:bg-brand-lilac-dark transition-colors">
            Request Care Manual →
          </a>
        </div>
      </section>
    </div>
  )
}