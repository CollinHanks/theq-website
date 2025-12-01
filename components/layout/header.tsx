'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Menü açıkken body scroll'u engelle
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      <header className="sticky top-0 z-50 bg-brand-cream/95 backdrop-blur-sm border-b border-neutral-200">
        <div className="container mx-auto px-6">
          <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="relative h-12 w-44" onClick={closeMenu}>
              <Image
                src="/images/logo-black.png"
                alt="The Q Atelier - Otel Tekstili ve Üniforma"
                fill
                className="object-contain"
                priority
              />
            </Link>
            
            {/* Desktop Menü */}
            <ul className="hidden lg:flex items-center space-x-8">
              <li><Link href="/hakkimizda" className="text-sm uppercase tracking-wider text-brand-charcoal hover:text-brand-gold transition-colors">Hakkımızda</Link></li>
              <li><Link href="/urunler" className="text-sm uppercase tracking-wider text-brand-charcoal hover:text-brand-gold transition-colors">Ürünler</Link></li>
              <li><Link href="/hizmetler" className="text-sm uppercase tracking-wider text-brand-charcoal hover:text-brand-gold transition-colors">Hizmetler</Link></li>
              <li><Link href="/referanslar" className="text-sm uppercase tracking-wider text-brand-charcoal hover:text-brand-gold transition-colors">Referanslar</Link></li>
              <li><Link href="/sunum" className="text-sm uppercase tracking-wider text-brand-charcoal hover:text-brand-gold transition-colors">Sunum</Link></li>
              <li><Link href="/blog" className="text-sm uppercase tracking-wider text-brand-charcoal hover:text-brand-gold transition-colors">Blog</Link></li>
              <li><Link href="/iletisim" className="text-sm uppercase tracking-wider bg-brand-gold text-white px-6 py-2 rounded-lg hover:bg-brand-gold-dark transition-colors">İletişim</Link></li>
            </ul>

            {/* Mobil Menü Butonu */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden z-50 relative"
              aria-label="Menüyü aç/kapat"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-brand-charcoal" />
              ) : (
                <Menu className="w-6 h-6 text-brand-charcoal" />
              )}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobil Menü Overlay */}
      {isMenuOpen && (
        <>
          {/* Arka Plan */}
          <div 
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={closeMenu}
          />
          
          {/* Mobil Menü Paneli */}
          <div className="fixed top-0 right-0 h-full w-80 bg-brand-cream z-40 lg:hidden shadow-2xl overflow-y-auto">
            <div className="pt-24 px-6 pb-6">
              <nav className="flex flex-col space-y-6">
                <Link 
                  href="/hakkimizda" 
                  className="text-lg text-brand-charcoal hover:text-brand-gold transition-colors border-b border-neutral-200 pb-4"
                  onClick={closeMenu}
                >
                  Hakkımızda
                </Link>
                <Link 
                  href="/urunler" 
                  className="text-lg text-brand-charcoal hover:text-brand-gold transition-colors border-b border-neutral-200 pb-4"
                  onClick={closeMenu}
                >
                  Ürünler
                </Link>
                <Link 
                  href="/hizmetler" 
                  className="text-lg text-brand-charcoal hover:text-brand-gold transition-colors border-b border-neutral-200 pb-4"
                  onClick={closeMenu}
                >
                  Hizmetler
                </Link>
                <Link 
                  href="/referanslar" 
                  className="text-lg text-brand-charcoal hover:text-brand-gold transition-colors border-b border-neutral-200 pb-4"
                  onClick={closeMenu}
                >
                  Referanslar
                </Link>
                <Link 
                  href="/sunum" 
                  className="text-lg text-brand-charcoal hover:text-brand-gold transition-colors border-b border-neutral-200 pb-4"
                  onClick={closeMenu}
                >
                  Sunum
                </Link>
                <Link 
                  href="/blog" 
                  className="text-lg text-brand-charcoal hover:text-brand-gold transition-colors border-b border-neutral-200 pb-4"
                  onClick={closeMenu}
                >
                  Blog
                </Link>
                <Link 
                  href="/iletisim" 
                  className="bg-brand-lilac text-white px-8 py-3 rounded-subtle hover:bg-brand-lilac-dark transition-colors text-center mt-4"
                  onClick={closeMenu}
                >
                  İletişim
                </Link>
              </nav>
            </div>
          </div>
        </>
      )}
    </>
  )
}
