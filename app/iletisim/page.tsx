'use client'

import { useState } from 'react'
import { MapPin, Mail, Phone, Clock } from 'lucide-react'

export default function IletisimPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [responseMessage, setResponseMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setResponseMessage(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setResponseMessage({ type: 'success', text: data.message })
        setFormData({ name: '', email: '', phone: '', company: '', message: '' })
      } else {
        setResponseMessage({ type: 'error', text: data.error })
      }
    } catch (error) {
      setResponseMessage({ type: 'error', text: 'Bir hata oluştu, lütfen tekrar deneyin' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      {/* Hero - KOMPAKT */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-brand-cream to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-playfair text-4xl md:text-5xl mb-5 text-brand-charcoal">
              İletişime Geçin
            </h1>
            <p className="text-lg text-brand-stone">
              Tekstil ihtiyaçlarınız için bize ulaşın. Uzman ekibimiz en kısa sürede size dönüş yapacaktır.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Bilgiler - KOMPAKT */}
      <section className="py-10 md:py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Form */}
            <div className="bg-brand-cream p-6 md:p-8 rounded-lg">
              <h2 className="font-playfair text-2xl md:text-3xl mb-5 text-brand-charcoal">
                Mesaj Gönderin
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-brand-charcoal mb-1">
                    Ad Soyad *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-subtle border border-neutral-300 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brand-charcoal mb-1">
                    E-posta *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-subtle border border-neutral-300 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-brand-charcoal mb-1">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-subtle border border-neutral-300 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-brand-charcoal mb-1">
                    Şirket / İşletme Adı
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-subtle border border-neutral-300 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-brand-charcoal mb-1">
                    Mesajınız *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-subtle border border-neutral-300 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-gold text-white px-6 py-3 rounded-subtle hover:bg-brand-gold/90 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Gönderiliyor...' : 'Mesaj Gönder'}
                </button>

                {responseMessage && (
                  <div className={`p-4 rounded-lg ${responseMessage.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
                    <p className="text-sm">{responseMessage.text}</p>
                  </div>
                )}
              </form>
            </div>

            {/* İletişim Bilgileri */}
            <div className="space-y-6">
              <div>
                <h2 className="font-playfair text-2xl md:text-3xl mb-5 text-brand-charcoal">
                  İletişim Bilgilerimiz
                </h2>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-brand-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-charcoal mb-1">Adres</h3>
                    <p className="text-sm text-brand-stone">
                      Cumhuriyet, İncirli Dede Cd. No:8<br />
                      Sinpaş Queen Bomonti Rezidans<br />
                      34380 Şişli/İstanbul<br />
                      Türkiye
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-brand-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-charcoal mb-1">E-posta</h3>
                    <a href="mailto:hello@theqatelier.com" className="text-sm text-brand-gold hover:text-brand-gold/80 transition-colors">
                      hello@theqatelier.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-brand-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-charcoal mb-1">Telefon & WhatsApp</h3>
                    <a href="tel:+905302424848" className="text-sm text-brand-gold hover:text-brand-gold/80 transition-colors">
                      +90 530 242 48 48
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-brand-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-charcoal mb-1">Çalışma Saatleri</h3>
                    <p className="text-sm text-brand-stone">
                      Pazartesi - Cuma: 09:00 - 18:00<br />
                      Cumartesi: 10:00 - 16:00<br />
                      Pazar: Kapalı
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div className="aspect-video rounded-lg overflow-hidden mt-6 border border-neutral-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.5892959755747!2d28.97285391530143!3d41.05771762192756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab736216f1c8d%3A0x36ccf31ef571605a!2sSinpa%C5%9F%20Queen%20Bomonti%20Rezidans!5e0!3m2!1str!2str!4v1733077200000!5m2!1str!2str"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="The Q Atelier - Sinpaş Queen Bomonti Konum"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hızlı İletişim - KOMPAKT */}
      <section className="py-10 bg-brand-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-playfair text-2xl md:text-3xl mb-5">Hızlı İletişim Seçenekleri</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/905302424848"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-8 py-3 rounded-subtle hover:bg-[#20BA5A] transition-colors font-medium"
              >
                WhatsApp ile Yaz
              </a>
              <a
                href="mailto:hello@theqatelier.com"
                className="bg-brand-lilac text-white px-8 py-3 rounded-subtle hover:bg-brand-lilac-dark transition-colors font-medium"
              >
                E-posta Gönder
              </a>
              <a
                href="/teklif-al"
                className="border-2 border-brand-charcoal text-brand-charcoal px-8 py-3 rounded-subtle hover:bg-brand-charcoal hover:text-white transition-colors font-medium"
              >
                Online Teklif Al
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}