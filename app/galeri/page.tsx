import Image from 'next/image'

export const metadata = {
  title: 'Galeri | The Q Atelier - İlham Veren Projeler',
  description: 'Gerçekleştirdiğimiz projelerden görseller, tasarım ilhamları ve tekstil trendleri.',
}

export default function GaleriPage() {
  const galleries = [
    { title: "Otel Projeleri", count: 45, category: "projects" },
    { title: "Restoran Tasarımları", count: 32, category: "restaurant" },
    { title: "Spa & Wellness", count: 28, category: "spa" },
    { title: "Özel Tasarımlar", count: 51, category: "custom" },
    { title: "Renk Paletleri", count: 24, category: "colors" },
    { title: "Kumaş Detayları", count: 38, category: "fabric" }
  ]

  return (
    <div>
      {/* Hero - KOMPAKT */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-brand-cream to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-playfair text-4xl md:text-5xl mb-5 text-brand-charcoal">
              İlham Galerisi
            </h1>
            <p className="text-lg md:text-xl text-brand-stone">
              Projelerimizden görseller, tasarım fikirleri ve sektör trendleri. 
              Tekstil dünyasından ilham veren kareler.
            </p>
          </div>
        </div>
      </section>

      {/* Galeri Kategorileri - KOMPAKT */}
      <section className="py-10 md:py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {galleries.map((gallery, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="aspect-[4/3] bg-gradient-to-br from-neutral-200 to-neutral-300 rounded-lg overflow-hidden mb-4 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-neutral-500">[{gallery.title}]</span>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
                </div>
                <h3 className="font-playfair text-xl mb-1 group-hover:text-brand-lilac transition-colors">
                  {gallery.title}
                </h3>
                <p className="text-sm text-brand-stone">{gallery.count} Görsel</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trend Raporları - KOMPAKT */}
      <section className="py-10 md:py-12 bg-brand-cream">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-playfair text-3xl md:text-4xl text-center mb-8">2025 Tekstil Trendleri</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-3">Sürdürülebilir Kumaşlar</h3>
              <p className="text-sm text-brand-stone">
                Organik pamuk, bambu ve geri dönüştürülmüş malzemeler ön planda.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-3">Doğal Tonlar</h3>
              <p className="text-sm text-brand-stone">
                Toprak tonları, bej, terrakota ve haki renkler popülerliğini sürdürüyor.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-3">Minimal Tasarım</h3>
              <p className="text-sm text-brand-stone">
                Sade, temiz hatlar ve fonksiyonel estetik tercih ediliyor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - KOMPAKT */}
      <section className="py-10 md:py-12 bg-brand-charcoal text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl mb-5">
            Projeniz İçin İlham Alalım
          </h2>
          <p className="text-lg text-neutral-300 mb-6 max-w-2xl mx-auto">
            Tasarım fikirlerinizi paylaşın, birlikte benzersiz tekstiller yaratalalım.
          </p>
          <a href="/iletisim" className="bg-brand-lilac text-white px-10 py-4 rounded-subtle hover:bg-brand-lilac-light transition-colors font-medium inline-block">
            Proje Görüşmesi
          </a>
        </div>
      </section>
    </div>
  )
}
