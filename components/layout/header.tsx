'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Prevent body scroll when menu is open
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
            <Link href="/" className="font-playfair text-2xl text-brand-charcoal" onClick={closeMenu}>
              The Q
            </Link>
            
            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center space-x-8">
              <li><Link href="/about" className="text-sm uppercase tracking-wider hover:text-brand-lilac-dark transition-colors">About</Link></li>
              <li><Link href="/collections" className="text-sm uppercase tracking-wider hover:text-brand-lilac-dark transition-colors">Collections</Link></li>
              <li><Link href="/industries" className="text-sm uppercase tracking-wider hover:text-brand-lilac-dark transition-colors">Industries</Link></li>
              <li><Link href="/projects" className="text-sm uppercase tracking-wider hover:text-brand-lilac-dark transition-colors">Projects</Link></li>
              <li><Link href="/atelier" className="text-sm uppercase tracking-wider hover:text-brand-lilac-dark transition-colors">Atelier</Link></li>
              <li><Link href="/manufacture" className="text-sm uppercase tracking-wider hover:text-brand-lilac-dark transition-colors">Manufacture</Link></li>
              <li><Link href="/care-guide" className="text-sm uppercase tracking-wider hover:text-brand-lilac-dark transition-colors">Care Guide</Link></li>
              <li><Link href="/inspirations" className="text-sm uppercase tracking-wider hover:text-brand-lilac-dark transition-colors">Inspirations</Link></li>
              <li><Link href="/contact" className="text-sm uppercase tracking-wider bg-brand-lilac text-white px-6 py-2 rounded-subtle hover:bg-brand-lilac-dark transition-colors">Contact</Link></li>
            </ul>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden z-50 relative"
              aria-label="Toggle menu"
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

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={closeMenu}
          />
          
          {/* Mobile Menu Panel */}
          <div className="fixed top-0 right-0 h-full w-80 bg-brand-cream z-40 lg:hidden shadow-2xl overflow-y-auto">
            <div className="pt-24 px-6 pb-6">
              <nav className="flex flex-col space-y-6">
                <Link 
                  href="/about" 
                  className="text-lg text-brand-charcoal hover:text-brand-lilac-dark transition-colors border-b border-neutral-200 pb-4"
                  onClick={closeMenu}
                >
                  About
                </Link>
                <Link 
                  href="/collections" 
                  className="text-lg text-brand-charcoal hover:text-brand-lilac-dark transition-colors border-b border-neutral-200 pb-4"
                  onClick={closeMenu}
                >
                  Collections
                </Link>
                <Link 
                  href="/industries" 
                  className="text-lg text-brand-charcoal hover:text-brand-lilac-dark transition-colors border-b border-neutral-200 pb-4"
                  onClick={closeMenu}
                >
                  Industries
                </Link>
                <Link 
                  href="/projects" 
                  className="text-lg text-brand-charcoal hover:text-brand-lilac-dark transition-colors border-b border-neutral-200 pb-4"
                  onClick={closeMenu}
                >
                  Projects
                </Link>
                <Link 
                  href="/atelier" 
                  className="text-lg text-brand-charcoal hover:text-brand-lilac-dark transition-colors border-b border-neutral-200 pb-4"
                  onClick={closeMenu}
                >
                  Atelier
                </Link>
                <Link 
                  href="/manufacture" 
                  className="text-lg text-brand-charcoal hover:text-brand-lilac-dark transition-colors border-b border-neutral-200 pb-4"
                  onClick={closeMenu}
                >
                  Manufacture
                </Link>
                <Link 
                  href="/care-guide" 
                  className="text-lg text-brand-charcoal hover:text-brand-lilac-dark transition-colors border-b border-neutral-200 pb-4"
                  onClick={closeMenu}
                >
                  Care Guide
                </Link>
                <Link 
                  href="/inspirations" 
                  className="text-lg text-brand-charcoal hover:text-brand-lilac-dark transition-colors border-b border-neutral-200 pb-4"
                  onClick={closeMenu}
                >
                  Inspirations
                </Link>
                <Link 
                  href="/contact" 
                  className="bg-brand-lilac text-white px-8 py-3 rounded-subtle hover:bg-brand-lilac-dark transition-colors text-center mt-4"
                  onClick={closeMenu}
                >
                  Contact
                </Link>
              </nav>
            </div>
          </div>
        </>
      )}
    </>
  )
}