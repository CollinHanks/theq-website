import Link from 'next/link'
import { Download, FileText, ExternalLink } from 'lucide-react'

export const metadata = {
  title: 'Şirket Sunumu | The Q Atelier',
  description: 'The Q Atelier şirket sunumu, ürün kataloğu ve referanslar.',
}

export default function SunumPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-brand-cream to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-playfair text-4xl md:text-5xl mb-4 text-brand-charcoal">
              Şirket Sunumu
            </h1>
            <p className="text-lg text-brand-stone">
              The Q Atelier kurumsal tanıtım dosyaları ve ürün kataloğu
            </p>
          </div>
        </div>
      </section>

      {/* Sunum İçeriği */}
      <section className="py-10 md:py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            
            {/* Ana Sunum */}
            <div className="bg-white rounded-lg border border-neutral-200 p-8 mb-6">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-brand-gold/10 rounded-lg flex items-center justify-center">
                  <FileText className="w-8 h-8 text-brand-gold" />
                </div>
                
                <div className="flex-1">
                  <h2 className="font-playfair text-2xl mb-2 text-brand-charcoal">
                    Şirket Tanıtım Sunumu
                  </h2>
                  <p className="text-brand-stone mb-4">
                    The Q Atelier'in hizmetleri, referansları ve üretim kapasitesi hakkında detaylı bilgi içeren kurumsal sunum dosyası.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <button className="inline-flex items-center gap-2 bg-brand-gold text-white px-6 py-3 rounded-lg hover:bg-brand-gold-dark transition-colors font-medium">
                      <Download className="w-4 h-4" />
                      PDF İndir
                    </button>
                    <button className="inline-flex items-center gap-2 border border-brand-charcoal text-brand-charcoal px-6 py-3 rounded-lg hover:bg-brand-charcoal hover:text-white transition-colors font-medium">
                      <ExternalLink className="w-4 h-4" />
                      Online Görüntüle
                    </button>
                  </div>
                  <p className="text-sm text-brand-stone mt-4">
                    Dosya Boyutu: 8.5 MB • 24 sayfa • PDF Format
                  </p>
                </div>
              </div>
            </div>

            {/* Ürün Kataloğu */}
            <div className="bg-white rounded-lg border border-neutral-200 p-8 mb-6">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-brand-gold/10 rounded-lg flex items-center justify-center">
                  <FileText className="w-8 h-8 text-brand-gold" />
                </div>
                
                <div className="flex-1">
                  <h2 className="font-playfair text-2xl mb-2 text-brand-charcoal">
                    Ürün Kataloğu 2025
                  </h2>
                  <p className="text-brand-stone mb-4">
                    Yatak tekstili, banyo grubu, üniforma ve tüm ürün gruplarımızı içeren kapsamlı katalog.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <button className="inline-flex items-center gap-2 bg-brand-gold text-white px-6 py-3 rounded-lg hover:bg-brand-gold-dark transition-colors font-medium">
                      <Download className="w-4 h-4" />
                      Katalog İndir
                    </button>
                  </div>
                  <p className="text-sm text-brand-stone mt-4">
                    Dosya Boyutu: 12 MB • 48 sayfa • PDF Format
                  </p>
                </div>
              </div>
            </div>

            {/* Teknik Şartnameler */}
            <div className="bg-brand-cream rounded-lg p-8">
              <h3 className="font-playfair text-xl mb-4 text-brand-charcoal">
                Özel Proje Sunumu
              </h3>
              <p className="text-brand-stone mb-6">
                Özel projeniz için detaylı sunum ve teknik şartname hazırlamak ister misiniz?
              </p>
              <Link
                href="/iletisim"
                className="inline-flex items-center gap-2 bg-brand-charcoal text-white px-6 py-3 rounded-lg hover:bg-brand-charcoal/90 transition-colors font-medium"
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
