export const metadata = {
  title: 'Kullanım Şartları | The Q Atelier',
  description: 'Web sitesi kullanım şartları ve koşulları.',
}

export default function KullanimSartlariPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-12 md:py-16 bg-brand-cream">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="font-playfair text-4xl md:text-5xl mb-4 text-brand-charcoal text-center">
            Kullanım Şartları
          </h1>
          <p className="text-center text-brand-stone">
            Son güncelleme: Aralık 2024
          </p>
        </div>
      </section>

      <section className="py-10 md:py-12">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="prose prose-stone max-w-none space-y-6 text-brand-stone">
            <div>
              <h2 className="font-playfair text-2xl text-brand-charcoal mb-3">1. Genel Koşullar</h2>
              <p>
                Bu web sitesini (theqatelier.com) kullanarak, aşağıdaki kullanım şartlarını kabul etmiş sayılırsınız. 
                Bu şartları kabul etmiyorsanız, lütfen siteyi kullanmayınız.
              </p>
            </div>

            <div>
              <h2 className="font-playfair text-2xl text-brand-charcoal mb-3">2. Fikri Mülkiyet Hakları</h2>
              <p>
                Bu web sitesinde yer alan tüm içerik, tasarım, logo, görsel, metin ve yazılım The Q Atelier'in 
                fikri mülkiyetidir ve telif hakları ile korunmaktadır. İzinsiz kopyalama, çoğaltma veya 
                dağıtma yasaktır.
              </p>
            </div>

            <div>
              <h2 className="font-playfair text-2xl text-brand-charcoal mb-3">3. Ürün Bilgileri</h2>
              <p>
                Web sitemizdeki ürün açıklamaları, görseller ve fiyatlar bilgilendirme amaçlıdır. 
                The Q Atelier, önceden haber vermeksizin ürün özelliklerini, fiyatlarını ve 
                kullanılabilirliğini değiştirme hakkını saklı tutar.
              </p>
            </div>

            <div>
              <h2 className="font-playfair text-2xl text-brand-charcoal mb-3">4. Sipariş ve Sözleşme</h2>
              <p>
                Web sitesi üzerinden yapılan teklif talepleri bağlayıcı sipariş değildir. 
                Resmi sipariş ve sözleşme, karşılıklı yazılı anlaşma ile oluşur. 
                Fiyat ve teslimat koşulları her proje için ayrı belirlenir.
              </p>
            </div>

            <div>
              <h2 className="font-playfair text-2xl text-brand-charcoal mb-3">5. Sorumluluk Sınırlaması</h2>
              <p>
                The Q Atelier, web sitesinin kesintisiz ve hatasız çalışacağını garanti etmez. 
                Sitedeki bilgilerin doğruluğu için çaba gösterilse de, olası hatalardan kaynaklanan 
                zararlardan sorumlu tutulamaz.
              </p>
            </div>

            <div>
              <h2 className="font-playfair text-2xl text-brand-charcoal mb-3">6. Üçüncü Taraf Bağlantıları</h2>
              <p>
                Web sitemizde yer alan dış bağlantılar (sosyal medya, iş ortağı siteleri) yalnızca 
                bilgilendirme amaçlıdır. Bu sitelerin içeriğinden The Q Atelier sorumlu değildir.
              </p>
            </div>

            <div>
              <h2 className="font-playfair text-2xl text-brand-charcoal mb-3">7. Uygulanacak Hukuk</h2>
              <p>
                Bu kullanım şartları Türkiye Cumhuriyeti yasalarına tabidir. 
                Ortaya çıkabilecek uyuşmazlıklarda İstanbul mahkemeleri ve icra daireleri yetkilidir.
              </p>
            </div>

            <div>
              <h2 className="font-playfair text-2xl text-brand-charcoal mb-3">8. Değişiklikler</h2>
              <p>
                The Q Atelier, bu kullanım şartlarını önceden haber vermeksizin güncelleme hakkını saklı tutar. 
                Güncel kullanım şartları web sitesinde yayınlanır ve yayın tarihi itibariyle geçerlilik kazanır.
              </p>
            </div>

            <div>
              <h2 className="font-playfair text-2xl text-brand-charcoal mb-3">9. İletişim</h2>
              <p>
                Kullanım şartlarıyla ilgili sorularınız için:
              </p>
              <p className="mt-2">
                <strong>The Q Atelier</strong><br />
                E-posta: hello@theqatelier.com<br />
                Telefon: +90 555 123 45 67<br />
                Adres: Bomonti, İstanbul, Türkiye
              </p>
            </div>

            <div className="bg-brand-cream p-6 rounded-lg mt-8">
              <p className="text-sm">
                Bu web sitesini kullanmaya devam ederek, yukarıdaki kullanım şartlarını okuduğunuzu, 
                anladığınızı ve kabul ettiğinizi beyan etmiş olursunuz.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
