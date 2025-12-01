export const metadata = {
  title: 'Bakım Rehberi | The Q Atelier - Tekstil Bakımı',
  description: 'Otel nevresim, havlu, üniforma ve diğer tekstil ürünlerinizin uzun ömürlü olması için bakım ipuçları.',
}

export default function BakimRehberiPage() {
  const categories = [
    {
      title: "Nevresim & Çarşaf Bakımı",
      tips: [
        "60°C'de yıkayın, bakterileri etkili şekilde temizler",
        "Renkli ve beyazları ayrı yıkayın",
        "Yumuşatıcı kullanmayın, kumaş nefes almasını engeller",
        "Güneş ışığında kurutun, doğal beyazlatır",
        "Orta ısıda ütüleyin, pamuklu kumaşlar için idealdir"
      ]
    },
    {
      title: "Havlu & Bornoz Bakımı",
      tips: [
        "İlk yıkamada tek başına yıkayın, fazla tüy bırakabilir",
        "Yumuşatıcı yerine sirke kullanın, emiciliği korur",
        "40-60°C arası sıcaklıkta yıkayın",
        "Yüksek ısıda kurutmayın, lifler zarar görür",
        "Ütülemeye gerek yoktur, düz serip kurutun"
      ]
    },
    {
      title: "Üniforma Bakımı",
      tips: [
        "Leke çıkarıcı ön işlem yapın",
        "Fermuarları kapatıp ters çevirerek yıkayın",
        "Beyaz üniforma için ağartıcı kullanılabilir",
        "Düşük devirde sıkın, kumaş deforme olmasın",
        "Askıda kurutun, şekil bozulmalarını önler"
      ]
    },
    {
      title: "Masa Örtüsü & Peçete",
      tips: [
        "Lekeler kurumadan hemen müdahale edin",
        "Yağ lekesi için bulaşık deterjanı kullanın",
        "Keten ürünleri yüksek ısıda yıkayın",
        "Kırışıklık için hafif nemli ütüleyin",
        "Katlamadan önce tamamen kuruduğundan emin olun"
      ]
    }
  ]

  return (
    <div>
      {/* Hero - KOMPAKT */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-brand-cream to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-playfair text-4xl md:text-5xl mb-5 text-brand-charcoal">
              Tekstil Bakım Rehberi
            </h1>
            <p className="text-lg md:text-xl text-brand-stone">
              Ürünlerinizin uzun ömürlü olması ve ilk günkü kalitesini koruması için profesyonel bakım önerileri.
            </p>
          </div>
        </div>
      </section>

      {/* Bakım İpuçları - KOMPAKT */}
      <section className="py-10 md:py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto space-y-8">
            {categories.map((category, index) => (
              <div key={index} className="bg-brand-cream p-6 md:p-8 rounded-lg">
                <h2 className="font-playfair text-2xl md:text-3xl mb-4 text-brand-charcoal">
                  {category.title}
                </h2>
                <ul className="space-y-3">
                  {category.tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-brand-lilac mt-1">✓</span>
                      <span className="text-brand-stone">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Genel Kurallar - KOMPAKT */}
      <section className="py-10 md:py-12 bg-brand-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-3xl md:text-4xl text-center mb-8">Genel Bakım Kuralları</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3 text-brand-charcoal">Yapılması Gerekenler</h3>
                <ul className="space-y-2 text-sm text-brand-stone">
                  <li>• Yıkama etiketlerini mutlaka okuyun</li>
                  <li>• Renklere göre ayrı yıkayın</li>
                  <li>• Uygun deterjan kullanın</li>
                  <li>• Makinenizi fazla doldurmayın</li>
                  <li>• Hemen kurutmaya başlayın</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3 text-brand-charcoal">Yapılmaması Gerekenler</h3>
                <ul className="space-y-2 text-sm text-brand-stone">
                  <li>• Fazla deterjan kullanmayın</li>
                  <li>• Klorlu ağartıcıdan kaçının</li>
                  <li>• Çok yüksek ısıda yıkamayın</li>
                  <li>• Islak bırakmayın, küf oluşur</li>
                  <li>• Direkt güneşte uzun süre bırakmayın</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profesyonel Destek - KOMPAKT */}
      <section className="py-10 md:py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto bg-brand-cream p-8 rounded-lg">
            <h2 className="font-playfair text-2xl md:text-3xl mb-4">Profesyonel Bakım Desteği</h2>
            <p className="text-brand-stone mb-6">
              Endüstriyel yıkama ve bakım hizmetleri için önerilerimiz var. 
              Ürünlerinizin ömrünü uzatmak için bizimle iletişime geçin.
            </p>
            <a href="/iletisim" className="bg-brand-lilac text-white px-8 py-3 rounded-subtle hover:bg-brand-lilac-dark transition-colors font-medium inline-block">
              Bize Ulaşın
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
