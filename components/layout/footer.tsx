'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage(null)

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setMessage({ type: 'success', text: data.message })
        setEmail('')
      } else {
        setMessage({ type: 'error', text: data.error })
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Bir hata oluştu, lütfen tekrar deneyin' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer className="bg-brand-charcoal text-white py-10 mt-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-5">
          {/* Logo & Açıklama - 4 columns */}
          <div className="lg:col-span-4">
            <div className="relative h-12 w-44 mb-3">
              <Image
                src="/images/logo-white.png"
                alt="The Q Atelier - Otel Tekstili"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-sm text-neutral-300 leading-relaxed pr-4">
              2018'den beri otelcilik sektörünün tekstil partneri. Premium otel nevresim, restoran üniforma ve lüks spa tekstilleri üretiyoruz. Türkiye'nin dört bir yanındaki 200+ kurumsal müşterimize hizmet veriyoruz.
            </p>
          </div>

          {/* Ürünler - 2 columns */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold mb-3 text-base">Ürünler</h4>
            <ul className="space-y-1.5 text-sm text-neutral-300">
              <li><Link href="/urunler" className="hover:text-brand-lilac transition-colors">Ürün Kataloğu</Link></li>
              <li><Link href="/hizmetler" className="hover:text-brand-lilac transition-colors">Hizmetler</Link></li>
              <li><Link href="/referanslar" className="hover:text-brand-lilac transition-colors">Referanslar</Link></li>
            </ul>
          </div>

          {/* Kurumsal - 2 columns */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold mb-3 text-base">Kurumsal</h4>
            <ul className="space-y-1.5 text-sm text-neutral-300">
              <li><Link href="/hakkimizda" className="hover:text-brand-lilac transition-colors">Hakkımızda</Link></li>
              <li><Link href="/sunum" className="hover:text-brand-lilac transition-colors">Şirket Sunumu</Link></li>
              <li><Link href="/blog" className="hover:text-brand-lilac transition-colors">Blog</Link></li>
              <li><Link href="/teklif-al" className="hover:text-brand-lilac transition-colors">Teklif Al</Link></li>
            </ul>
          </div>

          {/* İletişim & Bülten - 4 columns */}
          <div className="lg:col-span-4">
            <h4 className="font-semibold mb-3 text-base">Bize Ulaşın</h4>

            {/* İletişim Bilgileri */}
            <div className="space-y-2 mb-4">
              <div className="flex items-start gap-2 text-sm text-neutral-300">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-brand-gold" />
                <span>Cumhuriyet, İncirli Dede Cd. No:8, Sinpaş Queen Bomonti, 34380 Şişli/İstanbul</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-neutral-300">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-brand-gold" />
                <Link href="mailto:hello@theqatelier.com" className="hover:text-brand-gold transition-colors">
                  hello@theqatelier.com
                </Link>
              </div>
              <div className="flex items-start gap-2 text-sm text-neutral-300">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-brand-gold" />
                <a href="tel:+905302424848" className="hover:text-brand-gold transition-colors">
                  +90 530 242 48 48
                </a>
              </div>
            </div>

            {/* E-Bülten Aboneliği */}
            <div className="mt-4">
              <p className="text-xs text-neutral-400 mb-2">Kampanya ve yeniliklerden haberdar olun</p>
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-posta adresiniz"
                    required
                    className="flex-1 px-3 py-2 text-sm bg-neutral-800 border border-neutral-700 rounded-subtle 
                             text-white placeholder-neutral-500
                             focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold
                             transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-4 py-2 text-sm font-medium bg-brand-gold text-white rounded-subtle
                             hover:bg-brand-gold/90 transition-colors
                             disabled:opacity-50 disabled:cursor-not-allowed
                             whitespace-nowrap"
                  >
                    {isSubmitting ? 'Gönderiliyor...' : 'Abone Ol'}
                  </button>
                </div>
                {message && (
                  <p className={`text-xs ${message.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                    {message.text}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Alt Bar */}
        <div className="border-t border-neutral-800 mt-6 pt-5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-neutral-400 text-center md:text-left">
            © 2025 The Q Atelier. Tüm hakları saklıdır. Türkiye'de tutkuyla üretilmektedir.
          </p>
          <div className="flex gap-4 text-xs text-neutral-400">
            <Link href="/gizlilik" className="hover:text-brand-lilac transition-colors">Gizlilik Politikası</Link>
            <Link href="/kullanim-sartlari" className="hover:text-brand-lilac transition-colors">Kullanım Şartları</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}