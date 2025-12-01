import Image from 'next/image'

export const metadata = {
  title: 'Ürünlerimiz | The Q Atelier - Otel Tekstili Kataloğu',
  description: 'Otel nevresim takımı, restoran üniforma, spa havlu ve bornoz, masa örtüsü. Premium kalite, özel tasarım tekstil ürünleri. 200+ kurumsal müşteri.',
}

export default function UrunlerPage() {
  const collections = [
    {
      title: "Yatak Grubu",
      image: "/images/products/bedding-collection.jpg",
      description: "Her geceyi beş yıldızlı bir deneyime dönüştüren lüks yatak tekstilleri",
      items: ["Mısır Pamuğu Çarşaf", "Kaz Tüyü Yorgan", "Memory Foam Yastık", "Yatak Koruyucu"]
    },
    {
      title: "Banyo Grubu",
      image: "/images/products/bathroom-collection.jpg",
      description: "Misafirlerinizi konfor içinde sardıran premium havlu ve bornozlar",
      items: ["Türk Pamuğu Havlu", "Waffle Bornoz", "Banyo Paspası", "Yüz Havlusu"]
    },
    {
      title: "Restoran Tekstili",
      image: "/images/products/restaurant-textile.jpg",
      description: "Unutulmaz yemek deneyimleri için sahne hazırlayan masa tekstilleri",
      items: ["Masa Örtüsü", "Peçete", "Amerikan Servis", "Masa Yolu"]
    },
    {
      title: "Profesyonel Üniforma",
      image: "/images/products/professional-uniform.jpg",
      description: "Ekibinizin profesyonel imajını yükselten sofistike kıyafetler",
      items: ["Şef Ceketi", "Garson Üniforma", "Resepsiyon Kıyafeti", "Kat Görevlisi Üniforma"]
    },
    {
      title: "Spa & Wellness",
      image: "/images/products/spa-wellness-collection.jpg",
      description: "Rahatlama ve yenilenme için tasarlanmış huzur veren tekstiller",
      items: ["Spa Bornoz", "Masaj Masası Örtüsü", "Sauna Havlusu", "Terlik"]
    },
    {
      title: "Açık Alan & Havuz",
      image: "/images/products/outdoor-pool-collection.jpg",
      description: "Dış mekan otelcilik alanları için dayanıklı ve zarif tekstiller",
      items: ["Havlu Plaj", "Kabin Perdesi", "Dış Mekan Minderi", "Plaj Havlusu"]
    },
    {
      title: "Özel Tasarım",
      image: "/images/products/custom-design-collection.jpg",
      description: "Markanıza özel tamamen kişiselleştirilmiş tekstil çözümleri",
      items: ["Logo Nakış", "Renk Özelleştirme", "Bespoke Tasarım", "Prototip Üretim"]
    },
    {
      title: "Kurumsal Paketler",
      image: "/images/products/corporate-packages.jpg",
      description: "Kapsamlı tekstil ihtiyaçları için toplu sipariş çözümleri",
      items: ["Yıllık Tedarik", "Tesis Kadrosu", "Mevsimsel Koleksiyon", "Stok Yönetimi"]
    }
  ]

  return (
    <div>
      {/* Hero - KOMPAKT */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-brand-cream to-white">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="font-playfair text-4xl md:text-5xl mb-5 text-brand-charcoal">Ürün Koleksiyonları</h1>
          <p className="text-lg md:text-xl text-brand-stone max-w-3xl">
            Otelcilik deneyiminin her yönünü yükseltmek için titizlikle üretilmiş tekstil koleksiyonları. 
            Her parça lüks, dayanıklılık ve zamansız tasarımı bir araya getiriyor.
          </p>
        </div>
      </section>

      {/* Ürün Grid - KOMPAKT */}
      <section className="py-10 md:py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {collections.map((collection, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="aspect-[16/10] bg-neutral-200 rounded-lg overflow-hidden mb-4 relative">
                  <Image
                    src={collection.image}
                    alt={collection.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h2 className="font-playfair text-2xl md:text-3xl mb-3 group-hover:text-brand-gold transition-colors">
                  {collection.title}
                </h2>
                <p className="text-brand-stone mb-4 text-sm md:text-base">{collection.description}</p>
                <div className="flex flex-wrap gap-2">
                  {collection.items.map((item, i) => (
                    <span key={i} className="text-xs md:text-sm bg-brand-cream px-3 py-1 rounded-lg">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Malzemeler - KOMPAKT */}
      <section className="py-10 md:py-12 bg-brand-cream">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-playfair text-3xl md:text-4xl text-center mb-8">Premium Malzemelerimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="text-center bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Mısır Pamuğu</h3>
              <p className="text-sm text-brand-stone">Olağanüstü yumuşaklık ve dayanıklılık için uzun elyaflı iplik</p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Türk Keteni</h3>
              <p className="text-sm text-brand-stone">Nefes alan ve doğal antibakteriyel yapısıyla üstün konfor</p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Bambu Karışım</h3>
              <p className="text-sm text-brand-stone">Sürdürülebilir ve ipeksi yumuşak, nem emici özellikli</p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Mikro Fiber</h3>
              <p className="text-sm text-brand-stone">Ultra emici ve hızlı kuruyan yüksek performans kumaş</p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Saten Dokuma</h3>
              <p className="text-sm text-brand-stone">Parlak yüzey ve lüks dokunuş için premium saten</p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Organik Pamuk</h3>
              <p className="text-sm text-brand-stone">Çevre dostu, kimyasal içermeyen sertifikalı organik pamuk</p>
            </div>
          </div>
        </div>
      </section>

      {/* Özellikler - KOMPAKT */}
      <section className="py-10 md:py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-playfair text-3xl md:text-4xl text-center mb-8">Ürün Özelliklerimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="text-brand-lilac font-playfair text-3xl mb-2">300+</div>
              <p className="text-sm text-brand-stone">Endüstriyel Yıkama Dayanımı</p>
            </div>
            <div className="text-center">
              <div className="text-brand-lilac font-playfair text-3xl mb-2">ISO 9001</div>
              <p className="text-sm text-brand-stone">Kalite Yönetim Sertifikası</p>
            </div>
            <div className="text-center">
              <div className="text-brand-lilac font-playfair text-3xl mb-2">OEKO-TEX</div>
              <p className="text-sm text-brand-stone">Zararsız Madde Sertifikası</p>
            </div>
            <div className="text-center">
              <div className="text-brand-lilac font-playfair text-3xl mb-2">%100</div>
              <p className="text-sm text-brand-stone">Müşteri Memnuniyeti Garantisi</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - KOMPAKT */}
      <section className="py-10 md:py-12 bg-brand-charcoal text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl mb-5">Özel Koleksiyonunuzu Oluşturun</h2>
          <p className="text-lg text-neutral-300 mb-6 max-w-2xl mx-auto">
            Markanıza özel tasarlanmış, ihtiyaçlarınıza tam uygun tekstil çözümleri için bizimle iletişime geçin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/iletisim" className="bg-brand-lilac text-white px-10 py-4 rounded-subtle hover:bg-brand-lilac-light transition-colors text-base font-medium">
              Teklif Alın
            </a>
            <a href="/sunum" className="border-2 border-white text-white px-10 py-4 rounded-subtle hover:bg-white hover:text-brand-charcoal transition-colors text-base font-medium">
              Şirket Sunumu
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
