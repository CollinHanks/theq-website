import Link from 'next/link'

export default function IndustriesSection() {
  const sectors = [
    { title: "Lüks Oteller", href: "/hizmetler/otel-tekstili" },
    { title: "Fine Dining", href: "/hizmetler/restoran-uniforma" },
    { title: "Butik Oteller", href: "/hizmetler/butik-otel" },
    { title: "Spa & Wellness", href: "/hizmetler/spa-wellness" },
    { title: "Kurumsal", href: "/hizmetler/kurumsal-cozumler" },
    { title: "Kafe & Bistro", href: "/hizmetler/kafe-bistro" },
    { title: "Beach Club", href: "/hizmetler/beach-club" },
    { title: "Özel Yatlar", href: "/hizmetler/ozel-yat" }
  ]

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="font-playfair text-3xl md:text-4xl text-center mb-8">
          Hizmet Verdiğimiz Sektörler
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {sectors.map((sector, index) => (
            <Link
              key={index}
              href={sector.href}
              className="text-center py-6 px-4 bg-brand-cream rounded-subtle hover:bg-brand-lilac-light hover:shadow-md transition-all duration-300 cursor-pointer group"
            >
              <p className="font-medium text-brand-charcoal group-hover:text-brand-lilac-dark transition-colors">
                {sector.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
