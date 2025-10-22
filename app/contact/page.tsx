'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission
  }

  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-brand-cream to-white">
        <div className="container mx-auto px-6">
          <h1 className="font-playfair text-display-md mb-6">Get in Touch</h1>
          <p className="text-xl text-brand-stone max-w-3xl">
            Ready to elevate your hospitality space with exceptional textiles? 
            Let's discuss your project and create something extraordinary together.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="font-playfair text-3xl mb-8">Start Your Project</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-subtle focus:outline-none focus:border-brand-lilac"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Company *</label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-subtle focus:outline-none focus:border-brand-lilac"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-subtle focus:outline-none focus:border-brand-lilac"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-subtle focus:outline-none focus:border-brand-lilac"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Project Type *</label>
                  <select
                    required
                    value={formData.projectType}
                    onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-subtle focus:outline-none focus:border-brand-lilac"
                  >
                    <option value="">Select project type</option>
                    <option value="hotel">Hotel</option>
                    <option value="restaurant">Restaurant</option>
                    <option value="spa">Spa & Wellness</option>
                    <option value="residential">Private Residence</option>
                    <option value="yacht">Yacht</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Project Details *</label>
                  <textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-subtle focus:outline-none focus:border-brand-lilac resize-none"
                    placeholder="Tell us about your project, requirements, and timeline..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-brand-lilac text-white py-4 rounded-subtle hover:bg-brand-lilac-dark transition-colors font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="font-playfair text-3xl mb-8">Visit Our Showroom</h2>
              <div className="space-y-6 mb-12">
                <div>
                  <h3 className="font-semibold mb-2">Istanbul Headquarters</h3>
                  <p className="text-brand-stone">
                    Maslak Mahallesi, Büyükdere Caddesi<br />
                    No: 237, Sarıyer<br />
                    34398 Istanbul, Türkiye
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Contact Information</h3>
                  <p className="text-brand-stone">
                    Phone: +90 212 285 0000<br />
                    Email: info@theqatelier.com<br />
                    WhatsApp: +90 532 000 0000
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Business Hours</h3>
                  <p className="text-brand-stone">
                    Monday - Friday: 9:00 - 18:00<br />
                    Saturday: 10:00 - 16:00<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-brand-cream p-8 rounded-subtle">
                <h3 className="font-semibold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <a href="#" className="flex items-center justify-between p-3 bg-white rounded-subtle hover:bg-brand-lilac-light transition-colors group">
                    <span>Request Fabric Samples</span>
                    <span className="text-brand-lilac group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                  <a href="#" className="flex items-center justify-between p-3 bg-white rounded-subtle hover:bg-brand-lilac-light transition-colors group">
                    <span>Download Product Catalog</span>
                    <span className="text-brand-lilac group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                  <a href="#" className="flex items-center justify-between p-3 bg-white rounded-subtle hover:bg-brand-lilac-light transition-colors group">
                    <span>Schedule Showroom Visit</span>
                    <span className="text-brand-lilac group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 bg-gradient-to-br from-neutral-200 to-neutral-300">
        <div className="w-full h-full flex items-center justify-center text-neutral-500">
          [Interactive Map - Istanbul Location]
        </div>
      </section>
    </div>
  )
}