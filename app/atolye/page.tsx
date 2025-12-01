import Image from 'next/image'
import Link from 'next/link'
import { Heart, Scissors, Users, Award } from 'lucide-react'

export const metadata = {
  title: 'Atölyemiz | The Q Atelier - El İşçiliği ve Tasarım',
  description: 'İstanbul merkezli atölyemizde geleneksel el sanatlarını modern tasarımla buluşturuyoruz. Usta ekibimiz ve üretim sürecimiz.',
}

export default function AtolyePage() {
  return (
    <div>
      {/* Hero - KOMPAKT */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-brand-cream to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-playfair text-4xl md:text-5xl mb-5 text-brand-charcoal">
              Atölyemiz
            </h1>
            <p className="text-lg md:text-xl text-brand-stone">
              İstanbul'un kalbinde, geleneksel Türk dokuma sanatını çağdaş tasarımla buluşturan atölyemiz.
              Her parça, usta ellerle özenle üretiliyor.
            </p>
          </div>
        </div>
      </section>

      {/* El İşçiliği - KOMPAKT */}
      <section className="py-10 md:py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
            <div className="aspect-[4/3] bg-neutral-200 rounded-lg"></div>
            <div className="space-y-4">
              <h2 className="font-playfair text-3xl md:text-4xl text-brand-charcoal">
                El İşçiliği Geleneği
              </h2>
              <p className="text-brand-stone">
                Atölyemizde, Türk tekstil geleneğinin köklü birikimi ile modern üretim tekniklerini harmanlıyoruz. 
                Her ürün, deneyimli ustalarımızın titiz işçiliğinden geçerek hayat buluyor.
              </p>
              <p className="text-brand-stone">
                Kumaş seçiminden nakış detaylarına, renk uyumundan dikiş kalitesine kadar her aşamada 
                mükemmelliği hedefliyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tasarım Süreci - KOMPAKT */}
      <section className="py-10 md:py-12 bg-brand-cream">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-playfair text-3xl md:text-4xl text-center mb-8">Tasarım Sürecimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-brand-lilac-light rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-brand-lilac font-bold text-lg">1</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Konsept</h3>
              <p className="text-sm text-brand-stone">Müşteri ihtiyaçları ve marka kimliği analizi</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-brand-lilac-light rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-brand-lilac font-bold text-lg">2</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Tasarım</h3>
              <p className="text-sm text-brand-stone">Özel çizimler ve renk paletleri oluşturma</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-brand-lilac-light rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-brand-lilac font-bold text-lg">3</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Numune</h3>
              <p className="text-sm text-brand-stone">Prototip üretim ve onay süreci</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-brand-lilac-light rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-brand-lilac font-bold text-lg">4</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Üretim</h3>
              <p className="text-sm text-brand-stone">Toplu üretim ve kalite kontrolü</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ekibimiz - KOMPAKT */}
      <section className="py-10 md:py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-playfair text-3xl md:text-4xl text-center mb-8">Usta Ekibimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <Heart className="w-12 h-12 text-brand-lilac" strokeWidth={1.5} />
              </div>
              <h3 className="font-semibold mb-1">Tasarım Ekibi</h3>
              <p className="text-sm text-brand-stone">Yaratıcı çözümler üreten 8 kişilik ekip</p>
            </div>
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <Scissors className="w-12 h-12 text-brand-lilac" strokeWidth={1.5} />
              </div>
              <h3 className="font-semibold mb-1">Kesim & Dikiş</h3>
              <p className="text-sm text-brand-stone">15+ yıl deneyimli usta kadrosu</p>
            </div>
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <Users className="w-12 h-12 text-brand-lilac" strokeWidth={1.5} />
              </div>
              <h3 className="font-semibold mb-1">Kalite Kontrol</h3>
              <p className="text-sm text-brand-stone">Her üründe titiz inceleme</p>
            </div>
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <Award className="w-12 h-12 text-brand-lilac" strokeWidth={1.5} />
              </div>
              <h3 className="font-semibold mb-1">Nakış Ustası</h3>
              <p className="text-sm text-brand-stone">Özel logo ve desen işlemeleri</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - KOMPAKT */}
      <section className="py-10 md:py-12 bg-brand-charcoal text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl mb-5">
            Atölyemizi Ziyaret Edin
          </h2>
          <p className="text-lg text-neutral-300 mb-6 max-w-2xl mx-auto">
            İstanbul'daki atölyemizde üretim sürecimizi yakından görmek ister misiniz? 
            Randevu için bizimle iletişime geçin.
          </p>
          <Link href="/iletisim" className="bg-brand-lilac text-white px-10 py-4 rounded-subtle hover:bg-brand-lilac-light transition-colors font-medium inline-block">
            Randevu Al
          </Link>
        </div>
      </section>
    </div>
  )
}
