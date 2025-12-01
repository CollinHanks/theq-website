import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Referanslarımız | The Q Atelier - Başarılı Projeler',
  description: '200+ kurumsal müşteri, 500+ başarılı proje. Lüks oteller, restoranlar ve spa merkezleri için gerçekleştirdiğimiz tekstil projelerimiz.',
}

export default function ReferanslarPage() {
  const projects = [
    {
      title: "Cratos Premium Hotel",
      category: "Premium Otel",
      description: "150 oda için premium yatak ve banyo tekstili",
      items: ["Nevresim Takımı", "Banyo Grubu", "Bornoz & Terlik"]
    },
    {
      title: "Anex Tour",
      category: "Turizm & Konaklama",
      description: "Otel zincirleri için toplu tekstil tedariki",
      items: ["Yatak Grubu", "Havlu Seti", "Kurumsal Tekstil"]
    },
    {
      title: "Köşebaşı Restaurant",
      category: "Fine Dining",
      description: "Restoran zinciri için üniforma ve masa tekstili",
      items: ["Şef & Personel Üniforması", "Masa Örtüsü", "Peçete Seti"]
    },
    {
      title: "Four Seasons Istanbul",
      category: "Lüks Otel",
      description: "Süit ve executive odalar için özel tekstil",
      items: ["Premium Nevresim", "Lüks Havlu", "Spa Bornoz"]
    },
    {
      title: "Hilton Garden Inn",
      category: "Otel Zinciri",
      description: "Standart oda tekstil paketleri",
      items: ["Yatak Tekstili", "Banyo Grubu", "Dekoratif Yastık"]
    },
    {
      title: "Ritz-Carlton",
      category: "Luxury Hotel",
      description: "Spa ve wellness merkezi tekstil çözümleri",
      items: ["Spa Tekstili", "Masaj Örtüsü", "Premium Havlu"]
    }
  ]

  const clients = [
    "Anex Tour",
    "Cratos Premium Hotel",
    "Köşebaşı Restaurant",
    "Four Seasons",
    "Ritz-Carlton",
    "Hilton",
    "Swissôtel",
    "Raffles",
    "Kempinski",
    "Park Hyatt",
    "Shangri-La",
    "Marriott"
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

      {/* Projeler - KOMPAKT */}
      <section className="py-10 md:py-12 bg-brand-cream">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-playfair text-3xl md:text-4xl text-center mb-8">Öne Çıkan Projeler</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-neutral-200 to-neutral-300 flex items-center justify-center">
                  <span className="text-neutral-500 text-sm">[{project.title}]</span>
                </div>
                <div className="p-5">
                  <div className="text-xs text-brand-gold font-medium mb-2">{project.category}</div>
                  <h3 className="font-playfair text-xl mb-2 text-brand-charcoal">{project.title}</h3>
                  <p className="text-sm text-brand-stone mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.items.map((item, i) => (
                      <span key={i} className="text-xs bg-brand-cream px-2 py-1 rounded-subtle">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Müşteri Logoları - KOMPAKT */}
      <section className="py-10 md:py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-playfair text-3xl md:text-4xl text-center mb-8">İşbirliği Yaptığımız Markalar</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {clients.map((client, index) => (
              <div key={index} className="bg-brand-cream rounded-lg p-4 flex items-center justify-center h-20 hover:bg-brand-gold-light transition-colors">
                <span className="text-brand-stone text-sm font-medium text-center">{client}</span>
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