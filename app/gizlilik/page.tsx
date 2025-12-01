export const metadata = {
  title: 'Gizlilik Politikası | The Q Atelier',
  description: 'Kişisel verilerin korunması ve gizlilik politikamız hakkında bilgi.',
}

export default function GizlilikPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-12 md:py-16 bg-brand-cream">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="font-playfair text-4xl md:text-5xl mb-4 text-brand-charcoal text-center">
            Gizlilik Politikası
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
              <h2 className="font-playfair text-2xl text-brand-charcoal mb-3">1. Giriş</h2>
              <p>
                The Q Atelier olarak, kişisel verilerinizin güvenliği bizim için son derece önemlidir. 
                Bu gizlilik politikası, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında 
                kişisel verilerinizin nasıl toplandığını, kullanıldığını ve korunduğunu açıklamaktadır.
              </p>
            </div>

            <div>
              <h2 className="font-playfair text-2xl text-brand-charcoal mb-3">2. Toplanan Veriler</h2>
              <p>Web sitemiz üzerinden aşağıdaki kişisel verilerinizi toplayabiliriz:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Kimlik bilgileri (ad, soyad)</li>
                <li>İletişim bilgileri (e-posta, telefon, adres)</li>
                <li>Şirket/işletme bilgileri</li>
                <li>Sipariş ve teklif bilgileri</li>
                <li>İnternet site kullanım bilgileri (IP adresi, çerezler)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-playfair text-2xl text-brand-charcoal mb-3">3. Verilerin Kullanım Amacı</h2>
              <p>Toplanan kişisel verileriniz şu amaçlarla kullanılmaktadır:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Sipariş ve teklif süreçlerinin yürütülmesi</li>
                <li>Müşteri ilişkileri yönetimi</li>
                <li>Ürün ve hizmet geliştirme</li>
                <li>Pazarlama ve kampanya bildirimleri (onayınız dahilinde)</li>
                <li>Yasal yükümlülüklerin yerine getirilmesi</li>
              </ul>
            </div>

            <div>
              <h2 className="font-playfair text-2xl text-brand-charcoal mb-3">4. Verilerin Korunması</h2>
              <p>
                Kişisel verileriniz, yetkisiz erişim ve kullanıma karşı teknik ve idari tedbirlerle korunmaktadır. 
                Verileriniz SSL sertifikası ile şifrelenmiş olarak iletilir ve güvenli sunucularda saklanır.
              </p>
            </div>

            <div>
              <h2 className="font-playfair text-2xl text-brand-charcoal mb-3">5. Çerezler (Cookies)</h2>
              <p>
                Web sitemiz, kullanıcı deneyimini iyileştirmek ve site trafiğini analiz etmek amacıyla çerezler kullanmaktadır. 
                Tarayıcı ayarlarınızdan çerez kullanımını yönetebilirsiniz.
              </p>
            </div>

            <div>
              <h2 className="font-playfair text-2xl text-brand-charcoal mb-3">6. Haklarınız</h2>
              <p>KVKK kapsamında aşağıdaki haklara sahipsiniz:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                <li>İşlenmişse bilgi talep etme</li>
                <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
                <li>Yurt içinde/yurt dışında aktarıldığı 3. kişileri bilme</li>
                <li>Eksik/yanlış işlenmişse düzeltilmesini isteme</li>
                <li>Silme veya yok edilmesini isteme</li>
                <li>İtiraz etme</li>
              </ul>
            </div>

            <div>
              <h2 className="font-playfair text-2xl text-brand-charcoal mb-3">7. İletişim</h2>
              <p>
                Gizlilik politikamız veya kişisel verilerinizle ilgili sorularınız için bizimle iletişime geçebilirsiniz:
              </p>
              <p className="mt-2">
                <strong>The Q Atelier</strong><br />
                E-posta: hello@theqatelier.com<br />
                Adres: Bomonti, İstanbul, Türkiye
              </p>
            </div>

            <div className="bg-brand-cream p-6 rounded-lg mt-8">
              <p className="text-sm">
                <strong>Not:</strong> Bu gizlilik politikası, yasal mevzuattaki değişiklikler veya iş süreçlerimizdeKi güncellemeler doğrultusunda değiştirilebilir. 
                Önemli değişiklikler web sitemizde duyurulacaktır.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
