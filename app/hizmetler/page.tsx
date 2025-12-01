import Link from 'next/link'
import { Hotel, Utensils, Heart, Building2, Coffee, Waves, Anchor, Home } from 'lucide-react'

export const metadata = {
  title: 'Hizmetlerimiz | The Q Atelier - Sektörel Tekstil Çözümleri',
  description: 'Otel, restoran, spa, beach club ve kurumsal mekanlar için özel tekstil hizmetleri. Her sektöre özel çözümler, premium kalite.',
}

export default function HizmetlerPage() {
  const sectors = [
    {
      title: "Lüks Oteller",
      slug: "luks-oteller",
      description: "5 yıldızlı oteller için nevresim, havlu ve tüm yatak tekstilleri",
      icon: Hotel,
      features: ["Premium Nevresim", "Lüks Havlu Seti", "Bornoz & Terlik", "Yatak Aksesuarları"]
    },
    {
      title: "Fine Dining",
      slug: "fine-dining",
      description: "Restoran ve mutfak ekipleri için profesyonel üniforma ve masa tekstili",
      icon: Utensils,
      features: ["Şef Üniforması", "Garson Kıyafeti", "Masa Örtüsü", "Peçete Seti"]
    },
    {
      title: "Spa & Wellness",
      slug: "spa-wellness",
      description: "Wellness merkezleri için rahatlık odaklı tekstil çözümleri",
      icon: Heart,
      features: ["Spa Bornoz", "Masaj Örtüsü", "Sauna Havlusu", "Terapi Tekstili"]
    },
    {
      title: "Butik Oteller",
      slug: "butik-oteller",
      description: "Karakterli mekanlar için özel tasarım tekstil koleksiyonları",
      icon: Home,
      features: ["Özel Tasarım", "Sınırlı Üretim", "Marka Kimliği", "Kişiselleştirme"]
    },
    {
      title: "Kurumsal Mekanlar",
      slug: "kurumsal-mekanlar",
      description: "Ofis, toplantı salonu ve kurumsal tesisler için tekstil çözümleri",
      icon: Building2,
      features: ["Resepsiyon Üniforma", "Toplantı Tekstili", "Lounge Mobilya", "Kurumsal Kimlik"]
    },
    {
      title: "Kafe & Bistro",
      slug: "kafe-bistro",
      description: "Küçük ve orta ölçekli yeme-içme mekanları için uygun çözümler",
      icon: Coffee,
      features: ["Personel Önlüğü", "Masa Düzeni", "Dekor Tekstil", "Branding"]
    },
    {
      title: "Beach Club",
      slug: "beach-club",
      description: "Sahil ve havuz başı işletmeleri için dayanıklı lüks tekstiller",
      icon: Waves,
      features: ["Havlu Plaj", "Şezlong Örtüsü", "Kabin Perdesi", "Dış Mekan Minderi"]
    },
    {
      title: "Özel Yatlar",
      slug: "ozel-yatlar",
      description: "Yatlar ve deniz araçları için özel üretim premium tekstiller",
      icon: Anchor,
      features: ["Kabin Tekstili", "Güverte Havlusu", "Deniz Dayanıklı", "Özel Ölçü"]
    }
  ]

  return (
    <div>
      {/* Hero - KOMPAKT */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-brand-cream to-white">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="font-playfair text-4xl md:text-5xl mb-5 text-brand-charcoal text-center">
            Hizmet Verdiğimiz Sektörler
          </h1>
          <p className="text-lg md:text-xl text-brand-stone max-w-3xl mx-auto text-center">
            Her sektörün kendine özgü ihtiyaçları için özel tekstil çözümleri geliştiriyoruz. 
            7+ yıllık deneyimimizle size en uygun ürünleri sunuyoruz.
          </p>
        </div>
      </section>

      {/* Sektörler Grid - KOMPAKT */}
      <section className="py-10 md:py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {sectors.map((sector, index) => (
              <Link 
                key={index}
                href={`/hizmetler/${sector.slug}`}
                className="group bg-brand-cream hover:bg-brand-gold-light rounded-lg p-6 transition-all duration-300 hover:shadow-lg cursor-pointer"
              >
                <div className="mb-4">
                  <sector.icon className="w-10 h-10 text-brand-gold group-hover:text-brand-gold-dark transition-colors" strokeWidth={1.5} />
                </div>
                <h2 className="font-playfair text-2xl mb-3 text-brand-charcoal group-hover:text-brand-gold-dark transition-colors">
                  {sector.title}
                </h2>
                <p className="text-sm text-brand-stone mb-4">
                  {sector.description}
                </p>
                <ul className="space-y-1.5">
                  {sector.features.map((feature, i) => (
                    <li key={i} className="text-xs text-brand-stone flex items-start">
                      <span className="text-brand-gold mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 text-brand-gold group-hover:text-brand-gold-dark text-sm font-medium">
                  Detayları Gör →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Neden Biz - KOMPAKT */}
      <section className="py-10 md:py-12 bg-brand-cream">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-playfair text-3xl md:text-4xl text-center mb-8">Her Sektöre Özel Yaklaşım</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="text-brand-gold font-playfair text-4xl mb-3">01</div>
              <h3 className="font-semibold text-lg mb-2">İhtiyaç Analizi</h3>
              <p className="text-sm text-brand-stone">Sektörünüze özel gereksinimleri detaylı analiz ediyoruz</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="text-brand-gold font-playfair text-4xl mb-3">02</div>
              <h3 className="font-semibold text-lg mb-2">Özel Tasarım</h3>
              <p className="text-sm text-brand-stone">Markanıza ve mekanınıza özel çözümler üretiyoruz</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="text-brand-gold font-playfair text-4xl mb-3">03</div>
              <h3 className="font-semibold text-lg mb-2">Sürekli Destek</h3>
              <p className="text-sm text-brand-stone">Teslimat sonrası bakım ve stok yönetimi desteği</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - KOMPAKT */}
      <section className="py-10 md:py-12 bg-brand-charcoal text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl mb-5">
            Sektörünüz İçin Özel Çözüm Alalım
          </h2>
          <p className="text-lg text-neutral-300 mb-6 max-w-2xl mx-auto">
            Hangi sektörde olursanız olun, size özel tekstil çözümleri için ekibimizle görüşün.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/iletisim" className="bg-brand-gold text-white px-10 py-4 rounded-subtle hover:bg-brand-gold-light transition-colors text-base font-medium">
              İletişime Geçin
            </Link>
            <Link href="/referanslar" className="border-2 border-white text-white px-10 py-4 rounded-subtle hover:bg-white hover:text-brand-charcoal transition-colors text-base font-medium">
              Referanslarımız
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
