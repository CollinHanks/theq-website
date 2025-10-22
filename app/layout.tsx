import type { Metadata } from 'next'
import { playfair, inter } from '@/lib/fonts'
import './globals.css'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import BackToTop from '@/components/ui/back-to-top'

export const metadata: Metadata = {
  // Basic Metadata
  title: 'The Q - Premium Hospitality Textiles & Uniforms',
  description: 'Signature textiles for exceptional hospitality. Premium hotel linens, restaurant uniforms, and bespoke textile solutions crafted in Turkey since 2018.',
  keywords: [
    'hospitality textiles',
    'hotel linens',
    'restaurant uniforms',
    'Turkish textiles',
    'luxury bedding',
    'spa textiles',
    'custom uniforms',
    'premium hospitality',
    'textile manufacturer Turkey',
    'hotel textile supplier',
  ],
  
  // Authors
  authors: [
    { name: 'The Q Atelier', url: 'https://www.theqatelier.com' }
  ],
  
  creator: 'The Q Atelier',
  publisher: 'The Q Atelier',
  
  // Favicon & Icons
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#B469FF',
      },
    ],
  },
  
  // Web App Manifest (PWA)
  manifest: '/site.webmanifest',
  
  // Theme Color
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FAF8F5' },
    { media: '(prefers-color-scheme: dark)', color: '#2C2C2C' },
  ],
  
  // Viewport
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  
  // Apple Web App
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'The Q',
  },
  
  // Open Graph (Social Media)
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.theqatelier.com',
    siteName: 'The Q Atelier',
    title: 'The Q - Premium Hospitality Textiles & Uniforms',
    description: 'Signature textiles for exceptional hospitality. Elevating spaces through timeless textile excellence since 2018.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'The Q - Premium Hospitality Textiles',
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    site: '@theqatelier',
    creator: '@theqatelier',
    title: 'The Q - Premium Hospitality Textiles',
    description: 'Signature textiles for exceptional hospitality',
    images: ['/images/twitter-image.jpg'],
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Verification (Add your actual verification codes)
  verification: {
    google: 'your-google-site-verification-code',
  },
  
  // Category
  category: 'business',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        {/* Additional meta tags if needed */}
        <meta name="format-detection" content="telephone=no" />
        <link rel="canonical" href="https://www.theqatelier.com" />
      </head>
      <body className="font-inter antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  )
}