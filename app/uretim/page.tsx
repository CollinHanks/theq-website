import { Factory, Shield, Sparkles, TrendingUp } from 'lucide-react'

export const metadata = {
  title: 'Üretim Kapasitemiz | The Q Atelier - Tekstil Üretim',
  description: 'Modern üretim tesisimiz, kalite kontrol süreçlerimiz ve üretim kapasitemiz hakkında bilgi.',
}

export default function UretimPage() {
  return (
    <div>
      {/* Hero - KOMPAKT */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-brand-cream to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-playfair text-4xl md:text-5xl mb-5 text-brand-charcoal">
              Üretim Kapasitemiz
            </h1>
            <p className="text-lg md:text-xl text-brand-stone">
              Geleneksel ustalık ile modern teknoloji buluşması. İstanbul'daki 2.000m² tesisimizde 
              aylık binlerce ürün üretim kapasitesine sahibiz.
            </p>
          </div>
        </div>
      </section>

      {/* Kapasite - KOMPAKT */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto text-center">
            <div>
              <div className="font-playfair text-4xl text-brand-lilac mb-2">2.000m²</div>
              <p className="text-sm text-brand-stone">Üretim Alanı</p>
            </div>
            <div>
              <div className="font-playfair text-4xl text-brand-lilac mb-2">50+</div>
              <p className="text-sm text-brand-stone">Çalışan Sayısı</p>
            </div>
            <div>
              <div className="font-playfair text-4xl text-brand-lilac mb-2">10K+</div>
              <p className="text-sm text-brand-stone">Aylık Üretim</p>
            </div>
            <div>
              <div className="font-playfair text-4xl text-brand-lilac mb-2">24/7</div>
              <p className="text-sm text-brand-stone">Üretim Vardiyası</p>
            </div>
          </div>
        </div>
      </section>

      {/* Özellikler - KOMPAKT */}
      <section className="py-10 md:py-12 bg-brand-cream">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-playfair text-3xl md:text-4xl text-center mb-8">Üretim Özelliklerimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="mb-4 flex justify-center">
                <Factory className="w-12 h-12 text-brand-lilac" strokeWidth={1.5} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Modern Makine Parkı</h3>
              <p className="text-sm text-brand-stone">Endüstri 4.0 uyumlu üretim makineleri</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="mb-4 flex justify-center">
                <Shield className="w-12 h-12 text-brand-lilac" strokeWidth={1.5} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Kalite Kontrol</h3>
              <p className="text-sm text-brand-stone">Her üründe 3 aşamalı kontrol sistemi</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="mb-4 flex justify-center">
                <Sparkles className="w-12 h-12 text-brand-lilac" strokeWidth={1.5} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Sürdürülebilirlik</h3>
              <p className="text-sm text-brand-stone">Çevre dostu üretim prosesleri</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="mb-4 flex justify-center">
                <TrendingUp className="w-12 h-12 text-brand-lilac" strokeWidth={1.5} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Hızlı Üretim</h3>
              <p className="text-sm text-brand-stone">Acil siparişlerde 48 saat teslimat</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sertifikalar - KOMPAKT */}
      <section className="py-10 md:py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-playfair text-3xl md:text-4xl text-center mb-8">Kalite Sertifikalarımız</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-brand-cream p-6 rounded-lg text-center">
              <div className="text-brand-lilac font-playfair text-3xl mb-2">ISO 9001</div>
              <p className="text-sm text-brand-stone">Kalite Yönetim Sistemi</p>
            </div>
            <div className="bg-brand-cream p-6 rounded-lg text-center">
              <div className="text-brand-lilac font-playfair text-3xl mb-2">OEKO-TEX</div>
              <p className="text-sm text-brand-stone">Zararsız Madde Sertifikası</p>
            </div>
            <div className="bg-brand-cream p-6 rounded-lg text-center">
              <div className="text-brand-lilac font-playfair text-3xl mb-2">CE</div>
              <p className="text-sm text-brand-stone">Avrupa Uygunluk Belgesi</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - KOMPAKT */}
      <section className="py-10 md:py-12 bg-brand-charcoal text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl mb-5">
            Üretim Kapasitemizi Projeniz İçin Ayıralım
          </h2>
          <p className="text-lg text-neutral-300 mb-6 max-w-2xl mx-auto">
            Toplu sipariş ve özel üretim talepleriniz için bizimle görüşün.
          </p>
          <a href="/teklif-al" className="bg-brand-lilac text-white px-10 py-4 rounded-subtle hover:bg-brand-lilac-light transition-colors font-medium inline-block">
            Teklif İste
          </a>
        </div>
      </section>
    </div>
  )
}
