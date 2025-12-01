import Link from 'next/link'
import { Building2, MapPin, CheckCircle2 } from 'lucide-react'

export const metadata = {
  title: 'Referanslarımız | The Q Atelier',
  description: 'Türkiye\'nin önde gelen otel, restoran ve kurumsal markalarına tekstil çözümleri sunuyoruz.',
}

export default function ReferanslarPage() {
  const references = [
    {
      name: "Cratos Premium Hotel",
      location: "Kıbrıs",
      services: ["Otel Tekstili", "Banyo Grubu", "Spa Ürünleri"]
    },
    {
      name: "Anex Tour",
      location: "Türkiye",
      services: ["Otel Zincirleri Tekstil Tedariki"]
    },
    {
      name: "Köşebaşı",
      location: "Türkiye",
      services: ["Restoran Üniforma", "Masa Tekstili"]
    },
    {
      name: "Four Seasons Istanbul",
      location: "İstanbul",
      services: ["Otel Tekstili", "Spa & Wellness"]
    },
    {
      name: "The Ritz-Carlton Istanbul",
      location: "İstanbul",
      services: ["Spa Tekstili", "Wellness Ürünleri"]
    },
    {
      name: "Hilton Garden Inn",
      location: "Türkiye",
      services: ["Otel Tekstili", "Banyo Grubu"]
    },
    {
      name: "Swissôtel The Bosphorus",
      location: "İstanbul",
      services: ["Otel Tekstili", "Banket Tekstili"]
    },
    {
      name: "Marriott Hotels",
      location: "İstanbul",
      services: ["Otel Tekstili", "Konferans Tekstili"]
    },
    {
      name: "Raffles Istanbul",
      location: "İstanbul",
      services: ["Lüks Otel Tekstili"]
    },
    {
      name: "Kempinski Hotels",
      location: "Türkiye",
      services: ["Otel Tekstili"]
    },
    {
      name: "Park Hyatt Istanbul",
      location: "İstanbul",
      services: ["Otel Tekstili", "Spa Ürünleri"]
    },
    {
      name: "Shangri-La Bosphorus",
      location: "İstanbul",
      services: ["Otel Tekstili"]
    }
  ]

  const stats = [
    { value: "200+", label: "Mutlu Müşteri" },
    { value: "500+", label: "Tamamlanan Proje" },
    { value: "7+", label: "Yıllık Deneyim" },
    { value: "15", label: "Farklı Şehir" }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-brand-cream to-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-brand-charcoal mb-4">
            Referanslarımız
          </h1>
          <p className="text-lg md:text-xl text-brand-stone max-w-2xl mx-auto">
            Türkiye'nin önde gelen otel, restoran ve kurumsal markalarına
            profesyonel tekstil çözümleri sunuyoruz
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 bg-white border-b border-neutral-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-playfair text-4xl md:text-5xl text-brand-gold mb-2">
                  {stat.value}
                </div>
                <p className="text-sm text-brand-stone">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* References Grid - MODERN */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-white to-brand-cream/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="font-playfair text-3xl md:text-4xl text-brand-charcoal mb-3">
              İşbirliği Yaptığımız Markalar
            </h2>
            <p className="text-brand-stone">
              Güvenilir ve kaliteli hizmet sunduğumuz prestijli markalar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {references.map((ref, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-100 hover:border-brand-gold/30"
              >
                {/* İkon */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center group-hover:bg-brand-gold/20 transition-colors">
                    <Building2 className="w-6 h-6 text-brand-gold" strokeWidth={1.5} />
                  </div>
                  <div className="flex items-center gap-1.5 text-brand-stone text-sm">
                    <MapPin className="w-4 h-4" strokeWidth={1.5} />
                    <span>{ref.location}</span>
                  </div>
                </div>

                {/* Başlık */}
                <h3 className="font-playfair text-xl text-brand-charcoal mb-3 group-hover:text-brand-gold transition-colors">
                  {ref.name}
                </h3>

                {/* Hizmetler */}
                <div className="space-y-2">
                  {ref.services.map((service, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-gold mt-0.5 flex-shrink-0" strokeWidth={2} />
                      <span className="text-sm text-brand-stone">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-brand-gold/5 to-brand-cream">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-playfair text-3xl md:text-4xl text-brand-charcoal mb-4">
              Sizin Projeniz İçin de Çözümlerimiz Hazır
            </h2>
            <p className="text-lg text-brand-stone mb-8">
              Otel, restoran, spa veya kurumsal işletmeniz için profesyonel tekstil
              çözümlerimizi keşfedin
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/teklif-al"
                className="bg-brand-gold hover:bg-brand-gold/90 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg"
              >
                Teklif Alın
              </Link>
              <Link
                href="/iletisim"
                className="border-2 border-brand-charcoal text-brand-charcoal hover:bg-brand-charcoal hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-200"
              >
                İletişime Geçin
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}