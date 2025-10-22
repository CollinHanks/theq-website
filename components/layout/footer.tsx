'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // TODO: Add your newsletter subscription logic here
    // Example: await subscribeToNewsletter(email)
    
    setTimeout(() => {
      setIsSubmitting(false)
      setEmail('')
      alert('Thank you for subscribing!')
    }, 1000)
  }

  return (
    <footer className="bg-brand-charcoal text-white py-12 mt-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6">
          {/* Logo & Description - 4 columns */}
          <div className="lg:col-span-4">
            {/* Logo - White Version - SAME SIZE AS HEADER */}
            <div className="relative h-12 w-44 mb-4">
              <Image
                src="/images/logo-white.png"
                alt="The Q - Premium Hospitality Textiles"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-sm text-neutral-300 leading-relaxed pr-4">
              Elevating hospitality spaces with signature textiles since 2018. We craft premium hotel linens, bespoke restaurant uniforms, and luxury spa textiles for exceptional properties worldwide. Trusted by 200+ global clients across 27 cities, delivering Turkish craftsmanship with contemporary design excellence.
            </p>
          </div>
          
          {/* Products - 2 columns */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold mb-3 text-base">Products</h4>
            <ul className="space-y-1.5 text-sm text-neutral-300">
              <li><Link href="/collections" className="hover:text-brand-lilac transition-colors">Collections</Link></li>
              <li><Link href="/industries" className="hover:text-brand-lilac transition-colors">Industries</Link></li>
              <li><Link href="/projects" className="hover:text-brand-lilac transition-colors">Projects</Link></li>
            </ul>
          </div>
          
          {/* Company - 2 columns */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold mb-3 text-base">Company</h4>
            <ul className="space-y-1.5 text-sm text-neutral-300">
              <li><Link href="/about" className="hover:text-brand-lilac transition-colors">About</Link></li>
              <li><Link href="/atelier" className="hover:text-brand-lilac transition-colors">Atelier</Link></li>
              <li><Link href="/manufacture" className="hover:text-brand-lilac transition-colors">Manufacture</Link></li>
              <li><Link href="/care-guide" className="hover:text-brand-lilac transition-colors">Care Guide</Link></li>
              <li><Link href="/inspirations" className="hover:text-brand-lilac transition-colors">Inspirations</Link></li>
            </ul>
          </div>
          
          {/* Contact & Subscribe - 4 columns */}
          <div className="lg:col-span-4">
            <h4 className="font-semibold mb-3 text-base">Stay Connected</h4>
            
            {/* Contact Info */}
            <div className="space-y-2 mb-4">
              <div className="flex items-start gap-2 text-sm text-neutral-300">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-brand-lilac" />
                <span>Istanbul, Türkiye</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-neutral-300">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-brand-lilac" />
                <Link href="mailto:info@theqatelier.com" className="hover:text-brand-lilac transition-colors">
                  info@theqatelier.com
                </Link>
              </div>
              <div className="flex items-start gap-2 text-sm text-neutral-300">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-brand-lilac" />
                <Link href="/contact" className="hover:text-brand-lilac transition-colors">
                  Get in Touch
                </Link>
              </div>
            </div>

            {/* Newsletter Subscribe */}
            <div className="mt-4">
              <p className="text-xs text-neutral-400 mb-2">Subscribe to our newsletter for exclusive updates</p>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-3 py-2 text-sm bg-neutral-800 border border-neutral-700 rounded-subtle 
                           text-white placeholder-neutral-500
                           focus:outline-none focus:border-brand-lilac focus:ring-1 focus:ring-brand-lilac
                           transition-colors"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-4 py-2 text-sm font-medium bg-brand-lilac text-white rounded-subtle
                           hover:bg-brand-lilac-dark transition-colors
                           disabled:opacity-50 disabled:cursor-not-allowed
                           whitespace-nowrap"
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-neutral-400 text-center md:text-left">
            © 2025 The Q Atelier. All rights reserved. Crafted with passion in Türkiye.
          </p>
          <div className="flex gap-4 text-xs text-neutral-400">
            <Link href="/privacy" className="hover:text-brand-lilac transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-brand-lilac transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}