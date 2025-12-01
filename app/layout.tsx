import type { Metadata, Viewport } from 'next'
import { playfair, inter } from '@/lib/fonts'
import './globals.css'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import BackToTop from '@/components/ui/back-to-top'

// Viewport Configuration (Next.js 15+)
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FAF8F5' },
    { media: '(prefers-color-scheme: dark)', color: '#2C2C2C' },
  ],
}

export const metadata: Metadata = {
  // Temel Metadata
  title: 'The Q Atelier | Otel Tekstili & Kurumsal Üniforma',
  description: "2018'den beri Türkiye'nin lider otelcilik tekstil üreticisi. Otel nevresim takımı, restoran üniforma, spa tekstili ve özel tasarım çözümleri. 200+ başarılı proje.",
  keywords: [
    'otel tekstili',
    'otel nevresim takımı',
    'restoran üniforma',
    'kurumsal üniforma',
    'spa tekstili',
    'otel havlu',
    'lüks yatak takımı',
    'kurumsal tekstil üretici',
    'otel tekstil tedarikçi türkiye',
    'istanbul tekstil üretici',
  ],
  
  // Yayıncı
  authors: [
    { name: 'The Q Atelier', url: 'https://www.theqatelier.com' }
  ],
  
  creator: 'The Q Atelier',
  publisher: 'The Q Atelier',
  
  // Favicon & İkonlar
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
        color: '#D4AF37',
      },
    ],
  },
  
  // Web App Manifest (PWA)
  manifest: '/site.webmanifest',
  
  // Apple Web App
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'The Q',
  },
  
  // Open Graph (Sosyal Medya)
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://www.theqatelier.com',
    siteName: 'The Q Atelier',
    title: 'The Q Atelier | Otel Tekstili & Kurumsal Üniforma',
    description: "2018'den beri Türkiye'nin lider otelcilik tekstil üreticisi. Kusursuz kalite, zamanında teslimat.",
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'The Q Atelier - Otel Tekstili ve Üniforma',
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    site: '@theqatelier',
    creator: '@theqatelier',
    title: 'The Q Atelier - Otel Tekstili',
    description: "Türkiye'nin lider otelcilik tekstil üreticisi",
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
  
  // Doğrulama (Gerçek kodları ekleyin)
  verification: {
    google: 'your-google-site-verification-code',
  },
  
  // Kategori
  category: 'business',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        {/* Ek meta tag'ler */}
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
