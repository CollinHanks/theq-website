import Link from 'next/link'

export const metadata = {
  title: 'Referanslarımız | The Q Atelier - Başarılı Projeler',
  description: '200+ kurumsal müşteri, 500+ başarılı proje. Lüks oteller, restoranlar ve spa merkezleri için gerçekleştirdiğimiz tekstil projelerimiz.',
}

export default function ReferanslarPage() {
  const projects = [
    {
      title: "Cratos Premium Hotel & Casino",
      category: "Premium Otel - Kıbrıs",
      year: "2023-2024",
      scope: "150 oda + 2 restoran + spa merkezi",
      description: "Kıbrıs'ın en prestijli otellerinden Cratos Premium Hotel için kapsamlı tekstil tedarik projesi. Tüm odalarda premium Mısır pamuğu nevresim takımları, 600 GSM havlu setleri ve spa bornozu uygulaması gerçekleştirildi.",
      deliverables: [
        "150 oda için yatak grubu (nevresim, çarşaf, yastık kılıfı)",
        "Banyo tekstili paketi (havlu, bornoz, paspas, yüz havlusu)",
        "Spa & Wellness tekstili (masaj örtüsü, terapi havlusu, bornoz)",
        "2 restoran için masa tekstili ve personel üniforması"
      ],
      results: "Misafir memnuniyet oranında %15 artış, yıllık tedarik anlaşması imzalandı"
    },
    {
      title: "Anex Tour Otel Zincirleri",
      category: "Turizm & Toplu Tedarik",
      year: "2022-2024",
      scope: "12 otel + 2500+ oda",
      description: "Anex Tour'un Türkiye genelindeki otel portföyü için merkezi tekstil tedarik çözümü. Standart kalite ve tasarım dili ile tüm otellerde tutarlı konuk deneyimi sağlandı.",
      deliverables: [
        "2500+ oda için yatak grubu toplu üretimi",
        "Otel bazında özelleştirilebilir havlu ve bornoz setleri",
        "Mevsimsel stok yönetimi ve düzenli teslimat",
        "Kurumsal kimlik uyumlu özel tasarım uygulamaları"
      ],
      results: "3 yıllık tedarik anlaşması, %20 maliyet optimizasyonu"
    },
    {
      title: "Köşebaşı Restaurant Zinciri",
      category: "Fine Dining - 8 Şube",
      year: "2023",
      scope: "8 restoran + 150 personel",
      description: "Türkiye'nin köklü restoran markası Köşebaşı'nın tüm şubeleri için yeni üniforma ve masa tekstili konsepti. Modern çizgiler ve geleneksel dokular bir arada tasarlandı.",
      deliverables: [
        "Şef ve mutfak ekibi için profesyonel üniforma (150 adet)",
        "Servis personeli için zarif ve fonksiyonel kıyafetler",
        "Masa örtüsü, peçete ve runner setleri (8 şube)",
        "Logolu nakış ve kurumsal renk uygulaması"
      ],
      results: "Marka imajında güçlenme, personel memnuniyetinde artış"
    },
    {
      title: "Four Seasons Hotel Istanbul Bosphorus",
      category: "Luxury Hotel - Boğaz",
      year: "2023",
      scope: "65 süit + spa + restoran",
      description: "İstanbul Boğazı'nın incisi Four Seasons'ın executive ve süit odaları için özel tasarım tekstil uygulaması. Her detayda lüks ve zarafet ön planda tutuldu.",
      deliverables: [
        "Executive ve süit odalar için özel ölçü nevresim takımları",
        "Premium Türk pamuğu havlu setleri (800 GSM)",
        "Spa & Wellness merkezi için özel bornoz koleksiyonu",
        "İtalyan peştemal ve Jakar dokuma uygulamaları"
      ],
      results: "Misafir yorumlarında tekstil kalitesi övgüsü, sürekli tedarik"
    },
    {
      title: "Hilton Garden Inn Türkiye",
      category: "Otel Zinciri - 5 Şehir",
      year: "2022-2023",
      scope: "400 oda + ortak alanlar",
      description: "Hilton Garden Inn'in Türkiye'deki 5 otelinde standart oda tekstil paketleri ve yenileme projesi. Hilton global standartlarına uygun üretim ve teslimat.",
      deliverables: [
        "400 standart oda için yatak grubu (OEKO-TEX sertifikalı)",
        "Banyo tekstili paketi (havlu, paspas, duş perdesi)",
        "Ortak alan dekoratif yastık ve koltuk örtüleri",
        "Yıllık yenileme ve bakım planlaması"
      ],
      results: "Global standartta kalite onayı, uzun vadeli işbirliği"
    },
    {
      title: "The Ritz-Carlton Istanbul",
      category: "Luxury Hotel - Şişli",
      year: "2023",
      scope: "Spa & Wellness merkezi",
      description: "Ritz-Carlton İstanbul'un yeni açılan spa ve wellness merkezinin tüm tekstil ihtiyaçları. Dünya standartlarında lüks doku ve estetik.",
      deliverables: [
        "12 terapi odası için masaj masası örtü setleri",
        "Spa bornoz koleksiyonu (kadın, erkek, çocuk)",
        "Sauna ve hamam havluları (600 GSM Türk pamuğu)",
        "Terlik, başlık ve diğer spa aksesuarları"
      ],
      results: "Spa müşteri değerlendirmelerinde 5/5 puan"
    },
    {
      title: "Swissôtel The Bosphorus Istanbul",
      category: "5 Yıldız Otel - Beşiktaş",
      year: "2022",
      scope: "50 oda yenileme + banket salonları",
      description: "Swissôtel'in oda yenileme projesinde yatak grubu ve banyo tekstili tedariki. İsviçre kalite standartlarında hassas üretim.",
      deliverables: [
        "50 renovated oda için premium yatak grubu",
        "Yüksek emicilikte havlu setleri",
        "Banket salonları için masa örtüsü ve peçete (300 kişilik)",
        "VIP süitler için özel tasarım nevresim"
      ],
      results: "Yenileme sonrası oda fiyatlarında %10 artış"
    },
    {
      title: "Marriott Hotel Istanbul",
      category: "Business Hotel - Şişli",
      year: "2023",
      scope: "200 oda + konferans salonları",
      description: "Marriott İstanbul için iş seyahati konseptine uygun pratik ve dayanıklı tekstil çözümleri. Yüksek yıkama döngüsüne dayanıklı kumaşlar.",
      deliverables: [
        "200 oda için standart yatak paketi",
        "Konferans salonları için masa örtüsü ve kürsü örtüsü",
        "Executive lounge için özel tekstil aksesuarları",
        "Marriott kurumsal renk ve logo uygulaması"
      ],
      results: "200+ yıkamada renk ve doku kalitesi korundu"
    }
  ]

  const clients = [
    { name: "Anex Tour", category: "Turizm & Konaklama" },
    { name: "Cratos Premium Hotel", category: "Kıbrıs" },
    { name: "Köşebaşı Restaurant", category: "Fine Dining" },
    { name: "Four Seasons Istanbul", category: "Luxury Hotels" },
    { name: "The Ritz-Carlton Istanbul", category: "Luxury Hotels" },
    { name: "Hilton Garden Inn", category: "Hotel Chain" },
    { name: "Swissôtel The Bosphorus", category: "5 Star Hotel" },
    { name: "Marriott Hotels", category: "Business Hotels" },
    { name: "Raffles Istanbul", category: "Ultra Luxury" },
    { name: "Kempinski Hotels", category: "Luxury Hotels" },
    { name: "Park Hyatt Istanbul", category: "Luxury Hotels" },
    { name: "Shangri-La Bosphorus", category: "Luxury Hotels" }
  ]

  return (
    <div>
      {/* Hero - KOMPAKT */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-brand-cream to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-playfair text-4xl md:text-5xl mb-5 text-brand-charcoal">
              Referanslarımız
            </h1>
            <p className="text-lg md:text-xl text-brand-stone">
              Türkiye ve dünya çapında 200+ kurumsal müşteriye hizmet vermenin gururunu yaşıyoruz.
              Her proje, kalite ve güven üzerine kurulu ortaklığımızın bir göstergesi.
            </p>
          </div>
        </div>
      </section>

      {/* Rakamlar - KOMPAKT */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
            <div>
              <div className="font-playfair text-4xl md:text-5xl text-brand-gold mb-2">200+</div>
              <p className="text-sm text-brand-stone">Kurumsal Müşteri</p>
            </div>
            <div>
              <div className="font-playfair text-4xl md:text-5xl text-brand-gold mb-2">500+</div>
              <p className="text-sm text-brand-stone">Başarılı Proje</p>
            </div>
            <div>
              <div className="font-playfair text-4xl md:text-5xl text-brand-gold mb-2">%98</div>
              <p className="text-sm text-brand-stone">Müşteri Memnuniyeti</p>
            </div>
            <div>
              <div className="font-playfair text-4xl md:text-5xl text-brand-gold mb-2">27</div>
              <p className="text-sm text-brand-stone">Farklı Ülke</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projeler - Detaylı Metin Tabanlı */}
      <section className="py-10 md:py-12 bg-brand-cream">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-playfair text-3xl md:text-4xl text-center mb-8">Gerçekleştirdiğimiz Projeler</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                {/* Başlık ve Kategori */}
                <div className="mb-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-playfair text-2xl text-brand-charcoal pr-4">
                      {project.title}
                    </h3>
                    <span className="text-xs text-brand-gold font-semibold bg-brand-gold/10 px-3 py-1 rounded-full whitespace-nowrap">
                      {project.year}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-brand-stone mb-2">
                    <span className="font-medium text-brand-gold">{project.category}</span>
                    <span className="text-neutral-300">•</span>
                    <span>{project.scope}</span>
                  </div>
                </div>

                {/* Açıklama */}
                <p className="text-sm text-brand-stone leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Teslimatlar */}
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-brand-charcoal mb-2 uppercase tracking-wide">
                    Teslimatlar:
                  </h4>
                  <ul className="space-y-1.5">
                    {project.deliverables.map((item, i) => (
                      <li key={i} className="text-sm text-brand-stone flex items-start gap-2">
                        <span className="text-brand-gold mt-0.5 flex-shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Sonuçlar */}
                <div className="pt-4 border-t border-neutral-200">
                  <p className="text-xs font-medium text-brand-gold">
                    ✓ {project.results}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Müşteri Listesi - Metin Tabanlı */}
      <section className="py-10 md:py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-playfair text-3xl md:text-4xl text-center mb-8">İşbirliği Yaptığımız Markalar</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {clients.map((client, index) => (
              <div key={index} className="bg-brand-cream rounded-lg p-5 hover:bg-brand-gold/10 transition-colors">
                <h3 className="font-semibold text-brand-charcoal mb-1 text-sm">
                  {client.name}
                </h3>
                <p className="text-xs text-brand-stone">
                  {client.category}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - KOMPAKT */}
      <section className="py-10 md:py-12 bg-brand-charcoal text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl mb-5">
            Bir Sonraki Referansımız Siz Olun
          </h2>
          <p className="text-lg text-neutral-300 mb-6 max-w-2xl mx-auto">
            Başarılı projelerimize katılın, markanızı kaliteli tekstillerle güçlendirin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/teklif-al" className="bg-brand-gold text-white px-10 py-4 rounded-subtle hover:bg-brand-gold-light transition-colors font-medium">
              Teklif Alın
            </Link>
            <Link href="/sunum" className="border-2 border-white text-white px-10 py-4 rounded-subtle hover:bg-white hover:text-brand-charcoal transition-colors font-medium">
              Şirket Sunumu
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}