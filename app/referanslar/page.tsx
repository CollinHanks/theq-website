import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Referanslarımız | The Q Atelier - Başarılı Projeler',
  description: '200+ kurumsal müşteri, 500+ başarılı proje. Lüks oteller, restoranlar ve spa merkezleri için gerçekleştirdiğimiz tekstil projelerimiz.',
}

export default function ReferanslarPage() {
  const projects = [
    {
      title: "Mandarin Oriental Istanbul",
      category: "Lüks Otel",
      description: "120 oda için tam tekstil çözümü",
      items: ["Nevresim Takımı", "Banyo Grubu", "Spa Tekstili"]
    },
    {
      title: "Mikla Restaurant",
      category: "Fine Dining",
      description: "Michelin yıldızlı restoran üniforma projesi",
      items: ["Şef Üniforması", "Servis Ekibi", "Masa Tekstili"]
    },
    {
      title: "Six Senses Kaplankaya",
      category: "Wellness Resort",
      description: "Spa ve wellness tekstil tedariki",
      items: ["Spa Bornoz", "Havlu Seti", "Terapi Örtüsü"]
    },
    {
      title: "Çırağan Palace",
      category: "Tarihi Otel",
      description: "Restorasyon sonrası tekstil yenileme",
      items: ["Özel Tasarım Nevresim", "Lüks Havlu", "Süit Tekstili"]
    },
    {
      title: "Soho House Istanbul",
      category: "Boutique Club",
      description: "Üye kulübü için tüm tekstil ihtiyaçları",
      items: ["Yatak Grubu", "Restoran Üniforma", "Lounge Tekstili"]
    },
    {
      title: "Nusr-Et Steakhouse",
      category: "Restoran Zinciri",
      description: "6 şube için standart üniforma üretimi",
      items: ["Personel Üniforma", "Masa Düzeni", "Branding"]
    }
  ]

  const clients = [
    "Four Seasons", "Ritz-Carlton", "Shangri-La", "Hilton", "Raffles",
    "Swissôtel", "Kempinski", "Park Hyatt", "St. Regis", "W Hotels",
    "Edition Hotels", "Aman Resorts", "Bulgari Hotels", "Peninsula Hotels"
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
              <div className="font-playfair text-4xl md:text-5xl text-brand-lilac mb-2">200+</div>
              <p className="text-sm text-brand-stone">Kurumsal Müşteri</p>
            </div>
            <div>
              <div className="font-playfair text-4xl md:text-5xl text-brand-lilac mb-2">500+</div>
              <p className="text-sm text-brand-stone">Başarılı Proje</p>
            </div>
            <div>
              <div className="font-playfair text-4xl md:text-5xl text-brand-lilac mb-2">%98</div>
              <p className="text-sm text-brand-stone">Müşteri Memnuniyeti</p>
            </div>
            <div>
              <div className="font-playfair text-4xl md:text-5xl text-brand-lilac mb-2">27</div>
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
                  <div className="text-xs text-brand-lilac font-medium mb-2">{project.category}</div>
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
              <div key={index} className="bg-brand-cream rounded-lg p-4 flex items-center justify-center h-20 hover:bg-brand-lilac-light transition-colors">
                <span className="text-brand-stone text-sm font-medium text-center">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Müşteri Yorumları - KOMPAKT */}
      <section className="py-10 md:py-12 bg-brand-cream">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-playfair text-3xl md:text-4xl text-center mb-8">Müşterilerimiz Ne Diyor</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg">
              <p className="text-sm text-brand-stone mb-4 italic">
                "The Q Atelier ile çalışmak, kalite standartlarımızı bir üst seviyeye taşıdı. Hem ürün kalitesi hem de hizmet anlayışları mükemmel."
              </p>
              <div className="font-semibold text-sm">Alper K.</div>
              <div className="text-xs text-brand-stone">Genel Müdür, Lüks Otel</div>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <p className="text-sm text-brand-stone mb-4 italic">
                "Restoran zincimizin tüm şubelerinde standart kaliteyi yakalamak The Q sayesinde mümkün oldu. Teşekkürler!"
              </p>
              <div className="font-semibold text-sm">Mehmet Y.</div>
              <div className="text-xs text-brand-stone">İşletme Sahibi, Restoran Zinciri</div>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <p className="text-sm text-brand-stone mb-4 italic">
                "Spa tekstillerimiz için aradığımız kalite ve konforu The Q Atelier'de bulduk. Misafir memnuniyeti arttı."
              </p>
              <div className="font-semibold text-sm">Ayşe T.</div>
              <div className="text-xs text-brand-stone">Spa Direktörü, Wellness Resort</div>
            </div>
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
            <Link href="/teklif-al" className="bg-brand-lilac text-white px-10 py-4 rounded-subtle hover:bg-brand-lilac-light transition-colors font-medium">
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
