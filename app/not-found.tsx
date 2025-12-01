import Link from 'next/link'
import { Home, Search } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-brand-cream to-white px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="font-playfair text-9xl md:text-[12rem] font-bold text-brand-gold mb-4">
          404
        </h1>
        
        <h2 className="font-playfair text-3xl md:text-4xl mb-4 text-brand-charcoal">
          Sayfa Bulunamadı
        </h2>
        
        <p className="text-lg text-brand-stone mb-8">
          Aradığınız sayfa taşınmış, silinmiş veya hiç var olmamış olabilir.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-brand-gold text-white px-8 py-4 rounded-lg hover:bg-brand-gold-dark transition-colors font-medium"
          >
            <Home className="w-5 h-5" />
            Ana Sayfaya Dön
          </Link>
          
          <Link
            href="/urunler"
            className="inline-flex items-center gap-2 border border-brand-charcoal text-brand-charcoal px-8 py-4 rounded-lg hover:bg-brand-charcoal hover:text-white transition-colors font-medium"
          >
            <Search className="w-5 h-5" />
            Ürünleri İncele
          </Link>
        </div>
        
        <div className="mt-12 pt-8 border-t border-neutral-200">
          <p className="text-sm text-brand-stone mb-4">
            Hızlı Erişim:
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/hakkimizda" className="text-brand-gold hover:underline">
              Hakkımızda
            </Link>
            <span className="text-neutral-300">•</span>
            <Link href="/hizmetler" className="text-brand-gold hover:underline">
              Hizmetler
            </Link>
            <span className="text-neutral-300">•</span>
            <Link href="/referanslar" className="text-brand-gold hover:underline">
              Referanslar
            </Link>
            <span className="text-neutral-300">•</span>
            <Link href="/iletisim" className="text-brand-gold hover:underline">
              İletişim
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
