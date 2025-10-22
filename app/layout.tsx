import type { Metadata } from 'next'
import { playfair, inter } from '@/lib/fonts'
import './globals.css'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'

export const metadata: Metadata = {
  title: 'The Q - Premium Hospitality Textiles & Uniforms',
  description: 'Signature textiles for exceptional hospitality. Premium hotel linens, restaurant uniforms, and bespoke textile solutions crafted in Turkey.',
  keywords: 'hospitality textiles, hotel linens, restaurant uniforms, Turkish textiles, luxury bedding',
  openGraph: {
    title: 'The Q - Premium Hospitality Textiles',
    description: 'Signature textiles for exceptional hospitality',
    url: 'https://www.theqatelier.com',
    siteName: 'The Q',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-inter antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}