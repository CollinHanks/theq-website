import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal text-white py-16 mt-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div>
            {/* Logo - White Version - LARGER SIZE */}
            <div className="relative h-16 w-56 mb-6">
              <Image
                src="/images/logo-white.png"
                alt="The Q - Premium Hospitality Textiles"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-sm text-neutral-300 leading-relaxed">
              Signature textiles for exceptional hospitality. 7+ years of excellence, 200+ global clients.
            </p>
          </div>
          
          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Products</h4>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li><Link href="/collections" className="hover:text-brand-lilac transition-colors">Collections</Link></li>
              <li><Link href="/industries" className="hover:text-brand-lilac transition-colors">Industries</Link></li>
              <li><Link href="/projects" className="hover:text-brand-lilac transition-colors">Projects</Link></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Company</h4>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li><Link href="/about" className="hover:text-brand-lilac transition-colors">About</Link></li>
              <li><Link href="/atelier" className="hover:text-brand-lilac transition-colors">Atelier</Link></li>
              <li><Link href="/manufacture" className="hover:text-brand-lilac transition-colors">Manufacture</Link></li>
              <li><Link href="/care-guide" className="hover:text-brand-lilac transition-colors">Care Guide</Link></li>
            </ul>
          </div>
          
          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Connect</h4>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li><Link href="/contact" className="hover:text-brand-lilac transition-colors">Contact</Link></li>
              <li><Link href="/inspirations" className="hover:text-brand-lilac transition-colors">Inspirations</Link></li>
              <li>Istanbul, Türkiye</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 mt-12 pt-8 text-center text-sm text-neutral-400">
          <p>© 2025 The Q Atelier. All rights reserved. Crafted with passion in Türkiye.</p>
        </div>
      </div>
    </footer>
  )
}