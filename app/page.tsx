import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      {/* Hero Section - KOMPAKT */}
      <section className="h-[90vh] relative flex items-center justify-center overflow-hidden">
        {/* Arka Plan Görseli */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero/hero-banner.jpg"
            alt="Premium otel tekstili ve lüks nevresim takımları"
            fill
            priority
            quality={90}
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* Koyu Overlay */}
        <div className="absolute inset-0 bg-black/40 z-[1]"></div>

        {/* İçerik */}
        <div className="relative text-center max-w-5xl px-6 z-10">
          <h1 className="font-playfair text-5xl md:text-display-lg mb-5 text-white leading-tight" style={{textShadow: '0 2px 8px rgba(0,0,0,0.3)'}}>
            Kusursuz Tekstil<br />Ustalığı
          </h1>
          
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto" style={{textShadow: '0 1px 4px rgba(0,0,0,0.3)'}}>
            Türk el sanatları ile modern tasarımın buluştuğu nokta. 
            2018'den beri otelcilik sektörünün tekstil partneri.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/urunler" 
              className="bg-brand-lilac text-white px-10 py-4 rounded-subtle hover:bg-brand-lilac-dark transition-all duration-300 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Ürünleri İncele
            </Link>
            <Link 
              href="/iletisim" 
              className="border-2 border-white text-white px-10 py-4 rounded-subtle hover:bg-white hover:text-brand-charcoal transition-all duration-300 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Numune Talebi
            </Link>
          </div>
        </div>

        {/* Scroll İndikatör */}
        <div className="absolute bottom-12 right-8 z-10 opacity-40 hover:opacity-80 transition-opacity">
          <div className="flex flex-col items-center gap-2">
            <span className="text-white text-xs uppercase tracking-wider">Kaydır</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center animate-bounce">
              <div className="w-1.5 h-3 bg-white rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Rakamlar - KOMPAKT */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="font-playfair text-5xl text-brand-lilac mb-2">7+</h3>
              <p className="text-lg text-brand-stone">Yıllık Deneyim</p>
            </div>
            <div>
              <h3 className="font-playfair text-5xl text-brand-lilac mb-2">200+</h3>
              <p className="text-lg text-brand-stone">Kurumsal Müşteri</p>
            </div>
            <div>
              <h3 className="font-playfair text-5xl text-brand-lilac mb-2">27</h3>
              <p className="text-lg text-brand-stone">Yıl Kurucu Tecrübesi</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ürün Koleksiyonları - KOMPAKT */}
      <section className="py-12 bg-brand-cream">
        <div className="container mx-auto px-6">
          <h2 className="font-playfair text-display-md text-center mb-3">Ürün Koleksiyonları</h2>
          <p className="text-center text-brand-stone text-lg mb-8 max-w-2xl mx-auto">
            Butik otellerden büyük zincirlere, her ölçekteki işletme için özel tekstil çözümleri.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Yatak Grubu */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/5] relative rounded-subtle overflow-hidden mb-3 bg-neutral-200">
                <Image 
                  src="/images/products/bedding-collection.jpg"
                  alt="Lüks otel nevresim takımı ve yatak tekstilleri"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="font-playfair text-2xl mb-2 group-hover:text-brand-lilac transition-colors">Yatak Grubu</h3>
              <p className="text-brand-stone">Premium nevresim, çarşaf ve yastık kılıfları. Misafir konforu için özel dokumalar.</p>
            </div>

            {/* Restoran Üniforma */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/5] relative rounded-subtle overflow-hidden mb-3 bg-neutral-200">
                <Image 
                  src="/images/products/restaurant-uniforms.jpg"
                  alt="Profesyonel restoran ve mutfak üniformaları"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="font-playfair text-2xl mb-2 group-hover:text-brand-lilac transition-colors">Restoran Üniforma</h3>
              <p className="text-brand-stone">Şef, garson ve servis ekibi için fonksiyonel ve şık tasarımlar.</p>
            </div>

            {/* Spa & Wellness */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/5] relative rounded-subtle overflow-hidden mb-3 bg-neutral-200">
                <Image 
                  src="/images/products/spa-wellness.jpg"
                  alt="Lüks spa bornoz, havlu ve wellness tekstilleri"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="font-playfair text-2xl mb-2 group-hover:text-brand-lilac transition-colors">Spa & Wellness</h3>
              <p className="text-brand-stone">Yumuşak bornozslar, emici havlular ve huzurlu ortamlar için tekstiller.</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/urunler" className="inline-block border-2 border-brand-charcoal text-brand-charcoal px-8 py-3 rounded-subtle hover:bg-brand-charcoal hover:text-white transition-all duration-300">
              Tüm Ürünleri Gör →
            </Link>
          </div>
        </div>
      </section>

      {/* Hizmet Verdiğimiz Sektörler - KOMPAKT */}
      <section className="py-12 bg-white" id="sektorler">
        <div className="container mx-auto px-6">
          <h2 className="font-playfair text-display-md text-center mb-3">Hizmet Verdiğimiz Sektörler</h2>
          <p className="text-center text-brand-stone text-lg mb-8 max-w-2xl mx-auto">
            Her sektörün kendine özgü ihtiyaçları için özel tekstil çözümleri geliştiriyoruz.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link 
              href="/hizmetler/otel-tekstili"
              className="text-center py-6 px-4 bg-brand-cream rounded-subtle hover:bg-brand-lilac-light hover:shadow-md transition-all duration-300 cursor-pointer group"
            >
              <p className="font-medium text-brand-charcoal group-hover:text-brand-lilac-dark transition-colors">Lüks Oteller</p>
            </Link>

            <Link 
              href="/hizmetler/restoran-uniforma"
              className="text-center py-6 px-4 bg-brand-cream rounded-subtle hover:bg-brand-lilac-light hover:shadow-md transition-all duration-300 cursor-pointer group"
            >
              <p className="font-medium text-brand-charcoal group-hover:text-brand-lilac-dark transition-colors">Fine Dining</p>
            </Link>

            <Link 
              href="/hizmetler/spa-wellness"
              className="text-center py-6 px-4 bg-brand-cream rounded-subtle hover:bg-brand-lilac-light hover:shadow-md transition-all duration-300 cursor-pointer group"
            >
              <p className="font-medium text-brand-charcoal group-hover:text-brand-lilac-dark transition-colors">Butik Tesisler</p>
            </Link>

            <Link 
              href="/hizmetler/spa-wellness"
              className="text-center py-6 px-4 bg-brand-cream rounded-subtle hover:bg-brand-lilac-light hover:shadow-md transition-all duration-300 cursor-pointer group"
            >
              <p className="font-medium text-brand-charcoal group-hover:text-brand-lilac-dark transition-colors">Wellness Merkezleri</p>
            </Link>

            <Link 
              href="/hizmetler/kurumsal-cozumler"
              className="text-center py-6 px-4 bg-brand-cream rounded-subtle hover:bg-brand-lilac-light hover:shadow-md transition-all duration-300 cursor-pointer group"
            >
              <p className="font-medium text-brand-charcoal group-hover:text-brand-lilac-dark transition-colors">Kurumsal Mekanlar</p>
            </Link>

            <Link 
              href="/hizmetler/restoran-uniforma"
              className="text-center py-6 px-4 bg-brand-cream rounded-subtle hover:bg-brand-lilac-light hover:shadow-md transition-all duration-300 cursor-pointer group"
            >
              <p className="font-medium text-brand-charcoal group-hover:text-brand-lilac-dark transition-colors">Kafe & Bistro</p>
            </Link>

            <Link 
              href="/hizmetler/otel-tekstili"
              className="text-center py-6 px-4 bg-brand-cream rounded-subtle hover:bg-brand-lilac-light hover:shadow-md transition-all duration-300 cursor-pointer group"
            >
              <p className="font-medium text-brand-charcoal group-hover:text-brand-lilac-dark transition-colors">Beach Club</p>
            </Link>

            <Link 
              href="/hizmetler/ozel-tasarim"
              className="text-center py-6 px-4 bg-brand-cream rounded-subtle hover:bg-brand-lilac-light hover:shadow-md transition-all duration-300 cursor-pointer group"
            >
              <p className="font-medium text-brand-charcoal group-hover:text-brand-lilac-dark transition-colors">Özel Yatlar</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Bölümü - KOMPAKT */}
      <section className="py-12 bg-brand-charcoal text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-playfair text-display-md mb-3">Projenize Başlayalım</h2>
          <p className="text-xl mb-6 text-neutral-300 max-w-2xl mx-auto">
            Konseptten üretime kadar her aşamada yanınızdayız. Tekstil vizyonunuzu birlikte hayata geçirelim.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/iletisim" className="bg-brand-lilac text-white px-10 py-4 rounded-subtle hover:bg-brand-lilac-light transition-all duration-300 text-lg font-medium">
              Teklif Al
            </Link>
            <Link href="/referanslar" className="border-2 border-white text-white px-10 py-4 rounded-subtle hover:bg-white hover:text-brand-charcoal transition-all duration-300 text-lg font-medium">
              Referanslarımız
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
