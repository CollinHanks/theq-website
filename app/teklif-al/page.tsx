'use client'

import { useState } from 'react'

export default function TeklifAlPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    sector: '',
    services: [] as string[],
    quantity: '',
    budget: '',
    deadline: '',
    message: '',
    agree: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // TODO: Form gönderme mantığı
    
    setTimeout(() => {
      setIsSubmitting(false)
      alert('Teklifiniz başarıyla alındı! En kısa sürede size dönüş yapacağız.')
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      if (name === 'agree') {
        setFormData({ ...formData, agree: checked })
      } else {
        const services = checked
          ? [...formData.services, value]
          : formData.services.filter(s => s !== value)
        setFormData({ ...formData, services })
      }
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  return (
    <div>
      {/* Hero - KOMPAKT */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-brand-cream to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-playfair text-4xl md:text-5xl mb-5 text-brand-charcoal">
              Teklif Talep Formu
            </h1>
            <p className="text-lg text-brand-stone">
              Tekstil ihtiyaçlarınız için detaylı teklif almak üzere formu doldurun. 
              24 saat içinde size dönüş yapacağız.
            </p>
          </div>
        </div>
      </section>

      {/* Form - KOMPAKT */}
      <section className="py-10 md:py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto bg-brand-cream p-6 md:p-8 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Kişisel Bilgiler */}
              <div>
                <h2 className="font-playfair text-2xl mb-4 text-brand-charcoal">Kişisel Bilgiler</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Ad Soyad *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-subtle border border-neutral-300 focus:border-brand-lilac focus:ring-1 focus:ring-brand-lilac outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">E-posta *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-subtle border border-neutral-300 focus:border-brand-lilac focus:ring-1 focus:ring-brand-lilac outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Telefon *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-subtle border border-neutral-300 focus:border-brand-lilac focus:ring-1 focus:ring-brand-lilac outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Şirket/İşletme *</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-subtle border border-neutral-300 focus:border-brand-lilac focus:ring-1 focus:ring-brand-lilac outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Proje Detayları */}
              <div>
                <h2 className="font-playfair text-2xl mb-4 text-brand-charcoal">Proje Detayları</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Sektör *</label>
                    <select
                      name="sector"
                      value={formData.sector}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-subtle border border-neutral-300 focus:border-brand-lilac focus:ring-1 focus:ring-brand-lilac outline-none"
                    >
                      <option value="">Seçiniz...</option>
                      <option value="otel">Otel</option>
                      <option value="restoran">Restoran/Kafe</option>
                      <option value="spa">Spa/Wellness</option>
                      <option value="beach-club">Beach Club</option>
                      <option value="kurumsal">Kurumsal</option>
                      <option value="diger">Diğer</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">İlgilendiğiniz Hizmetler *</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {['Yatak Tekstili', 'Banyo Tekstili', 'Üniforma', 'Masa Örtüsü', 'Özel Tasarım', 'Diğer'].map(service => (
                        <label key={service} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            name="services"
                            value={service}
                            checked={formData.services.includes(service)}
                            onChange={handleChange}
                            className="w-4 h-4 text-brand-lilac"
                          />
                          <span className="text-sm">{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Tahmini Miktar</label>
                      <input
                        type="text"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        placeholder="Örn: 100 adet nevresim"
                        className="w-full px-4 py-3 rounded-subtle border border-neutral-300 focus:border-brand-lilac focus:ring-1 focus:ring-brand-lilac outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Bütçe Aralığı</label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-subtle border border-neutral-300 focus:border-brand-lilac focus:ring-1 focus:ring-brand-lilac outline-none"
                      >
                        <option value="">Seçiniz...</option>
                        <option value="10k-25k">10.000 - 25.000 TL</option>
                        <option value="25k-50k">25.000 - 50.000 TL</option>
                        <option value="50k-100k">50.000 - 100.000 TL</option>
                        <option value="100k+">100.000 TL +</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Termin Tarihi</label>
                    <input
                      type="date"
                      name="deadline"
                      value={formData.deadline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-subtle border border-neutral-300 focus:border-brand-lilac focus:ring-1 focus:ring-brand-lilac outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Ek Bilgiler</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Projenizle ilgili detayları paylaşın..."
                      className="w-full px-4 py-3 rounded-subtle border border-neutral-300 focus:border-brand-lilac focus:ring-1 focus:ring-brand-lilac outline-none resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* Onay */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="agree"
                    checked={formData.agree}
                    onChange={handleChange}
                    required
                    className="w-5 h-5 mt-0.5"
                  />
                  <span className="text-sm text-brand-stone">
                    Gizlilik politikasını okudum ve kabul ediyorum. *
                  </span>
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-lilac text-white px-6 py-4 rounded-subtle hover:bg-brand-lilac-dark transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Gönderiliyor...' : 'Teklif Talebini Gönder'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
