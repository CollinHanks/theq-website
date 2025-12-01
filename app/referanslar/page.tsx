import Link from 'next/link'
import { Hotel, UtensilsCrossed, Waves, Building2, Sparkles } from 'lucide-react'

export const metadata = {
  title: 'Referanslarımız | The Q Atelier - Türkiye\'nin Önde Gelen Tekstil Markası',
  description: 'The Q Atelier, Türkiye\'nin en prestijli otel, restoran ve wellness merkezlerine premium tekstil çözümleri sunmaktadır. 500+ başarılı proje, 200+ mutlu müşteri.',
  keywords: 'otel tekstili referanslar, restoran üniforma müşteriler, spa tekstil tedarikçi, kurumsal tekstil referans'
}

export default function ReferanslarPage() {
  // Sektörlere göre kategorize edilmiş referanslar
  const categories = [
    {
      icon: Hotel,
      title: "Lüks Oteller & Konaklama",
      description: "Türkiye ve bölgenin en prestijli otellerine yatak grubu, banyo tekstili ve spa ürünleri tedarik ediyoruz.",
      clients: [
        "Cratos Premium Hotel - Kıbrıs",
        "Four Seasons Istanbul - Boğaz",
        "The Ritz-Carlton Istanbul",
        "Swissôtel The Bosphorus",
        "Hilton Garden Inn Türkiye",
        "Raffles Istanbul",
        "Park Hyatt Istanbul",
        "Shangri-La Bosphorus Istanbul",
        "Kempinski Hotels"
      ]
    },
    {
      icon: UtensilsCrossed,
      title: "Restoran & Fine Dining",
      description: "Restoranların profesyonel imajını tamamlayan üniforma ve masa tekstili çözümleri sunuyoruz.",
      clients: [
        "Köşebaşı Restaurant Zinciri",
        "Fine Dining Restoranlar",
        "Butik Restoranlar",
        "Beach Club Restoranlar"
      ]
    },
    {
      icon: Waves,
      title: "Spa & Wellness Merkezleri",
      description: "Spa deneyimini üst seviyeye taşıyan premium havlu, bornoz ve wellness ürünleri tedarik ediyoruz.",
      clients: [
        "5 Yıldızlı Otel Spa Merkezleri",
        "Bağımsız Wellness Merkezleri",
        "Termal Oteller",
        "Hamam & Sauna İşletmeleri"
      ]
    },
    {
      icon: Building2,
      title: "Kurumsal & Toplu Tedarik",
      description: "Otel zincirleri ve büyük ölçekli projeler için merkezi tedarik ve özel çözümler sunuyoruz.",
      clients: [
        "Anex Tour Otel Portföyü",
        "Marriott Hotels Istanbul",
        "Uluslararası Otel Zincirleri",
        "Kurumsal İşletmeler"
      ]
    }
  ]

  const whyChooseUs = [
    {
      title: "Yüksek Kalite Standartları",
      description: "Tüm ürünlerimiz OEKO-TEX sertifikalı, premium Türk ve Mısır pamuğundan üretilir. Lüks otel standartlarında kalite garantisi."
    },
    {
      title: "Hızlı ve Güvenilir Teslimat",
      description: "15-30 gün içinde üretim ve teslimat. Acil projeler için ekspres üretim seçeneği. Türkiye geneline kargo."
    },
    {
      title: "Özelleştirme ve Logo Uygulaması",
      description: "Markanıza özel tasarım, renk ve logo nakış/baskı hizmetleri. Kurumsal kimliğinize uygun özel üretim."
    },
    {
      title: "Rekabetçi Fiyatlandırma",
      description: "Fabrika fiyatlarıyla direkt tedarik. Toplu siparişlerde özel indirimler. Uzun vadeli işbirliği fırsatları."
    }
  ]

  const stats = [
    { number: "7+", label: "Yıllık Tecrübe" },
    { number: "200+", label: "Mutlu Müşteri" },
    { number: "500+", label: "Tamamlanan Proje" },
    { number: "%98", label: "Müşteri Memnuniyeti" }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-brand-cream to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-playfair text-4xl md:text-5xl text-brand-charcoal mb-4">
              Referanslarımız
            </h1>
            <p className="text-lg text-brand-stone leading-relaxed">
              Türkiye'nin en prestijli otel, restoran ve wellness merkezlerinin güvendiği tekstil tedarikçisi.
              7 yıldır kaliteli hizmet, zamanında teslimat ve müşteri memnuniyeti odaklı çalışıyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 bg-white border-y border-neutral-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-playfair text-4xl md:text-5xl text-brand-gold mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-brand-stone">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Referanslar - Sektör Bazlı */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="font-playfair text-3xl md:text-4xl text-brand-charcoal mb-3">
              Hizmet Verdiğimiz Sektörler ve Markalar
            </h2>
            <p className="text-brand-stone max-w-2xl mx-auto">
              Her sektörün kendine özgü ihtiyaçlarını anlıyor ve en uygun tekstil çözümlerini sunuyoruz
            </p>
          </div>

          <div className="space-y-8 max-w-6xl mx-auto">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-brand-cream to-white rounded-lg p-6 md:p-8 border border-neutral-200"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-brand-gold rounded-lg flex items-center justify-center flex-shrink-0">
                    <category.icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-playfair text-2xl text-brand-charcoal mb-2">
                      {category.title}
                    </h3>
                    <p className="text-brand-stone mb-4">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ml-0 md:ml-16">
                  {category.clients.map((client, i) => (
                    <div
                      key={i}
                      className="bg-white px-4 py-3 rounded-lg text-sm text-brand-charcoal border border-neutral-200"
                    >
                      {client}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neden Bizi Seçiyorlar */}
      <section className="py-12 md:py-16 bg-brand-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="font-playfair text-3xl md:text-4xl text-brand-charcoal mb-3">
              Neden The Q Atelier?
            </h2>
            <p className="text-brand-stone max-w-2xl mx-auto">
              Müşterilerimiz bizi neden tercih ediyor ve uzun vadeli işbirliği yapıyor?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 border border-neutral-200"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 bg-brand-gold/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Sparkles className="w-4 h-4 text-brand-gold" strokeWidth={2} />
                  </div>
                  <h3 className="font-semibold text-lg text-brand-charcoal">
                    {item.title}
                  </h3>
                </div>
                <p className="text-brand-stone text-sm leading-relaxed ml-11">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sosyal Kanıt */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-brand-gold/5 to-brand-cream rounded-xl p-8 md:p-10 border border-brand-gold/20">
              <div className="text-center mb-8">
                <h2 className="font-playfair text-3xl text-brand-charcoal mb-3">
                  Müşterilerimizin Güvenini Kazandık
                </h2>
                <p className="text-brand-stone">
                  7 yıldır hospitality sektörüne özel tekstil çözümleri sunuyoruz
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-lg p-5 text-center">
                  <div className="text-2xl font-playfair text-brand-gold mb-2">
                    OEKO-TEX®
                  </div>
                  <p className="text-sm text-brand-stone">
                    Sertifikalı Ürünler
                  </p>
                </div>
                <div className="bg-white rounded-lg p-5 text-center">
                  <div className="text-2xl font-playfair text-brand-gold mb-2">
                    15-30 Gün
                  </div>
                  <p className="text-sm text-brand-stone">
                    Hızlı Üretim & Teslimat
                  </p>
                </div>
                <div className="bg-white rounded-lg p-5 text-center">
                  <div className="text-2xl font-playfair text-brand-gold mb-2">
                    %98
                  </div>
                  <p className="text-sm text-brand-stone">
                    Müşteri Memnuniyeti
                  </p>
                </div>
              </div>

              <p className="text-center text-brand-stone italic">
                "Premium kalite, zamanında teslimat ve profesyonel destek ile hospitality
                sektörünün güvendiği tekstil partneri"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-brand-charcoal to-neutral-800 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl mb-4">
            Siz de Kaliteli Tekstil Çözümlerinden Yararlanın
          </h2>
          <p className="text-neutral-300 text-lg mb-8 max-w-2xl mx-auto">
            Otel, restoran veya wellness işletmeniz için özel tekstil çözümlerimizi keşfedin.
            Ücretsiz teklif almak için hemen iletişime geçin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/teklif-al"
              className="bg-brand-gold hover:bg-brand-gold/90 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-block"
            >
              Ücretsiz Teklif Alın
            </Link>
            <Link
              href="/iletisim"
              className="bg-white hover:bg-neutral-100 text-brand-charcoal px-8 py-4 rounded-lg font-semibold transition-colors inline-block"
            >
              İletişime Geçin
            </Link>
          </div>
          <p className="text-neutral-400 text-sm mt-6">
            📞 WhatsApp: +90 555 123 45 67 | 📧 info@theqatelier.com
          </p>
        </div>
      </section>
    </div>
  )
}