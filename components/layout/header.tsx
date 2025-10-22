'use client'

import Link from 'next/link'
import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-brand-cream/95 backdrop-blur-sm border-b border-neutral-200">
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between h-20">
          <Link href="/" className="font-playfair text-2xl text-brand-charcoal">
            The Q
          </Link>
          
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

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden"
          >
            <Menu className="w-6 h-6" />
          </button>
        </nav>
      </div>
    </header>
  )
}