import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Check, Star, TrendingUp, Shield, Clock, Users } from 'lucide-react'

const serviceData: Record<string, any> = {
  'luks-oteller': {
    title: 'Lüks Oteller İçin Premium Tekstil Çözümleri',
    subtitle: '5 Yıldızlı Oteller İçin Nevresim, Havlu ve Tüm Yatak Tekstilleri',
    description: 'Türkiye\'nin önde gelen lüks otel zincirlerine hizmet veren The Q Atelier, misafir deneyimini zirveye taşıyan premium yatak ve banyo tekstilleri üretiyor. Mısır pamuğu çarşaflardan kaz tüyü yorganlara, her detay konfor ve lüks için tasarlandı.',
    seoText: '5 yıldızlı otel tekstili sektöründe 7+ yıllık deneyimimizle, dünya standartlarında nevresim takımı, havlu seti, bornoz ve yatak aksesuarları üretiyoruz. 400+ iplik sayısı, OEKO-TEX sertifikalı kumaşlar ve özel tasarım seçenekleriyle otel misafirlerinize unutulmaz bir konaklama deneyimi sunuyoruz.',
    features: [
      { title: 'Premium Mısır Pamuğu Nevresim', description: '400-600 iplik sayısı, yumuşak ve nefes alan kumaş' },
      { title: 'Lüks Havlu Setleri', description: 'Yüksek emicilik, dayanıklılık ve zarafet bir arada' },
      { title: 'Waffle & Kimonolu Bornoz', description: 'Spa kalitesinde premium bornoz çeşitleri' },
      { title: 'Yatak Koruyucu & Aksesuarlar', description: 'Uzun ömürlü, hijyenik yatak koruma çözümleri' },
      { title: 'Dekoratif Yastıklar', description: 'Otel odanıza estetik katan özel tasarım yastıklar' },
      { title: 'Özel Logo & Nakış', description: 'Marka kimliğinizi yansıtan kişiselleştirme' }
    ],
    benefits: ['OEKO-TEX Standard 100 sertifikalı kumaşlar', 'Yüksek yıkama dayanımı (200+ yıkama)', 'Renk sabitliği garantisi', 'Hızlı teslimat ve stok yönetimi', 'Yıllık tedarik anlaşmaları', 'Profesyonel bakım önerileri'],
    process: [
      { step: '01', title: 'İhtiyaç Analizi', description: 'Otel konsepti ve oda sayısına göre detaylı ihtiyaç belirleme' },
      { step: '02', title: 'Ürün Seçimi', description: 'Bütçe ve kalite standartlarına uygun ürün önerileri' },
      { step: '03', title: 'Numune & Onay', description: 'Fiziksel numune testi ve sipariş onayı' },
      { step: '04', title: 'Üretim & Teslimat', description: '15-30 gün içinde kaliteli ve zamanında teslimat' }
    ]
  },
  'fine-dining': {
    title: 'Fine Dining Restoran Tekstili ve Üniforma',
    subtitle: 'Restoran ve Mutfak Ekipleri İçin Profesyonel Üniforma',
    description: 'Michelin yıldızlı restoranlardan butik mekanlara kadar, yemek deneyimini tamamlayan masa tekstilleri ve profesyonel şef üniformaları. Hem fonksiyonel hem estetik, her detay lezzete hizmet eder.',
    seoText: 'Restoran üniforma üretiminde uzman kadromuzla, şef ceketlerinden garson kıyafetlerine, masa örtüsünden peçeteye kadar eksiksiz tekstil çözümleri sunuyoruz. Leke tutmayan kumaşlar, nefes alan tasarımlar ve markanıza özel renk seçenekleriyle mutfak ve salon ekiplerinizi profesyonel kılıyoruz.',
    features: [
      { title: 'Profesyonel Şef Ceketi', description: 'Çift sıra düğme, nefes alan, leke tutmayan kumaş' },
      { title: 'Garson & Servis Üniforma', description: 'Zarif kesim, hareket özgürlüğü, dayanıklı dikiş' },
      { title: 'Mutfak Önlük & Peştemal', description: 'Su geçirmez, kolay temizlenir, ergonomik' },
      { title: 'Premium Masa Örtüsü', description: 'Leke tutmaz, ütü gerektirmez, zarafetle kıvrılır' },
      { title: 'Damask Peçete', description: 'Fine dining standartlarında lüks peçeteler' },
      { title: 'Logo & Branding', description: 'İşlemeli logo, özel renk, marka kimliği' }
    ],
    benefits: ['Yüksek sıcaklığa dayanıklı kumaşlar', 'Endüstriyel yıkamaya uygun', 'Leke önleyici nano teknoloji', 'Hızlı kuruma özelliği', 'Renk ve beden çeşitliliği', 'Mevsimsel koleksiyon desteği'],
    process: [
      { step: '01', title: 'Konsept Görüşme', description: 'Restoran konsepti, mutfak türü ve ekip sayısı analizi' },
      { step: '02', title: 'Tasarım Önerisi', description: 'Marka kimliğine uygun üniforma ve masa tekstili tasarımı' },
      { step: '03', title: 'Prototip Üretim', description: 'İlk numune üretimi ve ekip üzerinde deneme' },
      { step: '04', title: 'Toplu Üretim', description: 'Onaylanmış tasarımın toplu üretimi ve teslimat' }
    ]
  },
  'spa-wellness': {
    title: 'Spa & Wellness Merkezi Tekstil Çözümleri',
    subtitle: 'Rahatlama ve Yenilenme İçin Tasarlanmış Premium Tekstiller',
    description: 'Spa deneyimini mükemmelleştiren yumuşak bornozlar, emici havlular ve konforlu masaj masası örtüleri. Tüm ürünlerimiz ciltte test edilmiş, hipoalerjenik ve dinlendirici aromalarla uyumlu.',
    seoText: 'Spa tekstili üretiminde öncü konumumuzla, organik pamuk bornozlar, bamboo havlular ve terapi amaçlı masaj örtüleri sunuyoruz. GOTS sertifikalı, kimyasal içermeyen ve sürdürülebilir üretim anlayışımızla, misafirlerinize gerçek wellness deneyimi yaşatıyoruz.',
    features: [
      { title: 'Organik Pamuk Spa Bornoz', description: 'Yumuşak, emici, cildi tahriş etmeyen yapı' },
      { title: 'Bamboo Fiber Havlu', description: 'Antibakteriyel, çabuk kurur, süper emici' },
      { title: 'Masaj Masası Örtü Seti', description: 'Yıkama dayanımlı, leke tutmaz, konforlu' },
      { title: 'Sauna & Hamam Havlusu', description: 'Yüksek sıcaklığa dayanıklı, hızlı kuruma' },
      { title: 'Terapi Terlik', description: 'Anatomik taban, kaymaz, hijyenik' },
      { title: 'Özel Koku & Renk', description: 'Aromaterapi uyumlu, sakinleştirici renkler' }
    ],
    benefits: ['Hipoalerjenik, kimyasal içermez', 'GOTS & OEKO-TEX sertifikalı', 'Sürdürülebilir üretim', 'Yüksek emicilik (600 GSM)', 'Yumuşatıcı gerektirmez', 'Uzun ömürlü (300+ yıkama)'],
    process: [
      { step: '01', title: 'Spa Konsept Analizi', description: 'Spa türü, tedavi odası sayısı ve günlük misafir kapasitesi' },
      { step: '02', title: 'Ürün Portföyü', description: 'Bornoz, havlu, örtü ve aksesuar seçimi' },
      { step: '03', title: 'Duyusal Test', description: 'Dokunma, koku ve görsel uyum testi' },
      { step: '04', title: 'Tedarik & Bakım', description: 'Düzenli teslimat ve profesyonel bakım desteği' }
    ]
  },
  'butik-oteller': {
    title: 'Butik Oteller İçin Özel Tasarım Tekstil',
    subtitle: 'Karakterli Mekanlar İçin Benzersiz Tekstil Koleksiyonları',
    description: 'Her butik otel bir hikaye anlatır. Biz de o hikayeyi tekstille anlatmanıza yardımcı oluyoruz. Sınırlı üretim, özel tasarım ve marka kimliğinize özel çözümlerle, otelinizdeki her odayı sanat eserine dönüştürüyoruz.',
    seoText: 'Butik otel tekstili tasarımında uzman ekibimiz, konseptinize özel yatak grubu, perde, dekoratif yastık ve banyo tekstilleri üretiyor. Vintage, modern, bohemian veya minimalist - hangi konseptte olursanız olun, sizin için özgün koleksiyon yaratıyoruz.',
    features: [
      { title: 'Özel Tasarım Nevresim', description: 'Konseptinize özel desen, renk ve dokuma' },
      { title: 'Sınırlı Üretim', description: 'Benzersiz olma garantisi, özel koleksiyon' },
      { title: 'Marka Kimliği Entegrasyonu', description: 'Logo, renk paleti ve hikaye anlatımı' },
      { title: 'Dekoratif Tekstil', description: 'Perde, runner, yastık, şal gibi aksesuar' },
      { title: 'Özel Ölçü', description: 'Standart dışı yatak ölçüleri için özel üretim' },
      { title: 'Konsept Danışmanlığı', description: 'İç mimar ve tasarımcı desteği' }
    ],
    benefits: ['Tamamen özgün tasarım', 'İç mimar işbirliği', 'Mood board & 3D görselleştirme', 'Küçük parti üretim esnekliği', 'Instagram-worthy estetik', 'Hikaye anlatıcılığı'],
    process: [
      { step: '01', title: 'Konsept Keşif', description: 'Otel hikayesi, hedef kitle ve estetik vizyon' },
      { step: '02', title: 'Tasarım Geliştirme', description: 'Mood board, renk paleti ve desen tasarımı' },
      { step: '03', title: 'Prototip Oda', description: 'Bir oda tam ekipman ile test üretimi' },
      { step: '04', title: 'Seri Üretim', description: 'Tüm odalar için toplu üretim ve kurulum' }
    ]
  },
  'kurumsal-mekanlar': {
    title: 'Kurumsal Mekan Tekstil Çözümleri',
    subtitle: 'Ofis, Toplantı Salonu ve Kurumsal Tesisler İçin',
    description: 'Kurumsal kimliğinizi tekstille güçlendirin. Resepsiyon üniformasından toplantı salonu tekstiline, kurumsal renklere uygun, profesyonel ve prestijli çözümler. Çalışan memnuniyeti ve kurumsal imaj bir arada.',
    seoText: 'Kurumsal tekstil tedarikçisi olarak, banka, holding, hastane ve otel resepsiyonları için özel üniforma, kravat, fular ve tekstil aksesuarları üretiyoruz. Kurumsal kimlik kılavuzunuza %100 uyumlu, yüksek kaliteli ve dayanıklı ürünlerle markanızı güçlendiriyoruz.',
    features: [
      { title: 'Resepsiyon Üniforma', description: 'Profesyonel kesim, kurumsal renklerde zarif tasarım' },
      { title: 'Toplantı Salonu Tekstili', description: 'Masa örtüsü, koltuk kılıfı, kürsü örtüsü' },
      { title: 'Lounge Mobilya Tekstili', description: 'Kanape, puf ve sandalye kılıfları' },
      { title: 'Kurumsal Kimlik Uygulaması', description: 'Logo, renk ve tipografi entegrasyonu' },
      { title: 'Fuar & Etkinlik Tekstili', description: 'Stand örtüsü, branda, flamalar' },
      { title: 'Toplu Sipariş Avantajı', description: 'Şube ve departman için tek seferde üretim' }
    ],
    benefits: ['Kurumsal kimlik danışmanlığı', 'Pantone renk garantisi', 'Beden ve model çeşitliliği', 'Yıllık tedarik anlaşması', 'Stok takip sistemi', 'Çalışan memnuniyet anketi'],
    process: [
      { step: '01', title: 'Kurumsal Analiz', description: 'Marka kılavuzu, çalışan sayısı ve ihtiyaç listesi' },
      { step: '02', title: 'Tasarım Portföyü', description: 'Kurumsal renklerle uyumlu üniforma önerileri' },
      { step: '03', title: 'Pilot Uygulama', description: 'Seçili departmanda deneme uygulaması' },
      { step: '04', title: 'Toplu Teslimat', description: 'Tüm şube ve birimlere koordineli teslimat' }
    ]
  },
  'kafe-bistro': {
    title: 'Kafe & Bistro Tekstil Çözümleri',
    subtitle: 'Küçük ve Orta Ölçekli Yeme-İçme Mekanları İçin',
    description: 'Sıcak ve samimi atmosferinizi tamamlayan pratik tekstil çözümleri. Kahve lekelerine dayanıklı, kolay yıkanır, bütçe dostu ve Instagram\'ı kıskandıracak kadar şık. Hem personel hem müşteri memnuniyeti için tasarlandı.',
    seoText: 'Kafe tekstili ve bistro üniforma üretiminde, küçük işletmelerin ihtiyaçlarını anlayan yaklaşımımızla, uygun fiyatlı ama kaliteli çözümler sunuyoruz. Barista önlüğünden masa düzenine, marka kimliğinizi yansıtan, pratik ve estetik tekstiller.',
    features: [
      { title: 'Barista Önlüğü', description: 'Kahve lekesi tutmaz, cep çokluğu, rahat kesim' },
      { title: 'Servis Personeli Kıyafeti', description: 'Casual ama profesyonel, hareket özgürlüğü' },
      { title: 'Masa Düzeni', description: 'Renk uyumlu runner, peçete, supla setleri' },
      { title: 'Dekor Tekstil', description: 'Perde, minder, duvar örtüsü' },
      { title: 'Logo Baskı & Nakış', description: 'Uygun fiyatlı marka görünürlüğü' },
      { title: 'Esnek Miktar', description: '10 adet bile üretim yapıyoruz' }
    ],
    benefits: ['Küçük parti üretim', 'Uygun fiyat garantisi', 'Hızlı teslimat (7-10 gün)', 'Renk ve model seçeneği', 'İade ve değişim kolaylığı', 'Mevsimsel kampanyalar'],
    process: [
      { step: '01', title: 'İhtiyaç Belirleme', description: 'Personel sayısı, konsept ve bütçe görüşmesi' },
      { step: '02', title: 'Ürün Kataloğu', description: 'Hazır koleksiyonlardan seçim veya özel tasarım' },
      { step: '03', title: 'Hızlı Üretim', description: '10 iş günü içinde üretim ve teslimat' },
      { step: '04', title: 'Destek', description: 'Yıkama talimatları ve bakım önerileri' }
    ]
  },
  'beach-club': {
    title: 'Beach Club & Havuz Başı Tekstil',
    subtitle: 'Sahil ve Havuz İşletmeleri İçin Dayanıklı Lüks Tekstiller',
    description: 'Güneş, tuz ve klora meydan okuyan premium dış mekan tekstilleri. Plaj havlusudan şezlong örtüsüne, yaz boyunca dayanıklılığını koruyan, renklerini kaybetmeyen ve misafirlerinizin konforunu garanti eden ürünler.',
    seoText: 'Beach club tekstili ve havuz havlusu üretiminde uzman kadromuzla, UV korumalı, klora dayanıklı ve hızlı kuruma özellikli ürünler sunuyoruz. Büyük boy plaj havluları, şezlong örtüleri ve kabin tekstilleriyle yaz sezonunu kusursuz geçirin.',
    features: [
      { title: 'XXL Plaj Havlusu', description: '100x180 cm, kum tutmaz, çabuk kurur' },
      { title: 'Şezlong Örtüsü', description: 'Elastik bantlı, kaymaz, UV koruma' },
      { title: 'Kabin Perdesi', description: 'Su geçirmez, çabuk kurur, renk solmaz' },
      { title: 'Dış Mekan Minderi', description: 'Su itici kumaş, kolay temizlenir' },
      { title: 'Havuz Kenarı Tekstil', description: 'Klora dayanıklı, rengini korur' },
      { title: 'Marka Logosu', description: 'Büyük logo baskısı, reklam değeri' }
    ],
    benefits: ['UV & Klor koruması', 'Renk solması garantisi', 'Yüksek emicilik', 'Hızlı kuruma özelliği', 'Toplu sipariş indirim', 'Sezon başı stok planlaması'],
    process: [
      { step: '01', title: 'Mekan Analizi', description: 'Şezlong sayısı, kabin ihtiyacı ve günlük kapasite' },
      { step: '02', title: 'Ürün Seçimi', description: 'Renk, boyut ve logo yerleşimi belirleme' },
      { step: '03', title: 'Toplu Üretim', description: 'Sezon öncesi tam kapasite üretim' },
      { step: '04', title: 'Sezon Desteği', description: 'Yaz boyunca ek sipariş ve yedek stok' }
    ]
  },
  'ozel-yatlar': {
    title: 'Özel Yat & Tekne Tekstili',
    subtitle: 'Deniz Araçları İçin Özel Üretim Premium Tekstiller',
    description: 'Denizin zorlu koşullarına özel üretilen yat tekstilleri. Tuzlu hava, nem ve güneşe karşı dirençli, lüks dokusu ve estetiği ile yat konforunuzu zirveye taşıyan koleksiyon. Her kabin bir süit, her detay bir sanat eseri.',
    seoText: 'Yat tekstili üretiminde öncü konumumuzla, deniz dayanımlı kumaşlar, özel ölçü yatak setleri ve güverte havluları sunuyoruz. Tuzlu hava korozyonuna karşı özel işlem görmüş, rüzgar ve nem testlerinden geçmiş, marinacılar tarafından onaylanmış premium kalite.',
    features: [
      { title: 'Özel Ölçü Nevresim', description: 'V-berth, queen, king - her kabin ölçüsü' },
      { title: 'Deniz Dayanımlı Havlu', description: 'Tuz ve nem direnci, hızlı kuruma' },
      { title: 'Güverte Tekstili', description: 'UV koruma, rüzgar direnci, su itici' },
      { title: 'Kabin Perdesi', description: 'Karartma özellik, nem tutmaz, kolay montaj' },
      { title: 'Premium Bornoz', description: 'Lüks doku, hafif, çabuk kurur' },
      { title: 'Kişiselleştirme', description: 'Yat adı nakışı, özel monogram' }
    ],
    benefits: ['Tuzlu hava korozyonu testi', 'Nem ve küf direnci', 'Kompakt depolama', 'Hafif ama dayanıklı', 'Lüks otel standardı', 'Uluslararası teslimat'],
    process: [
      { step: '01', title: 'Yat Ölçümü', description: 'Kabin sayısı, yatak ölçüleri ve özel ihtiyaçlar' },
      { step: '02', title: 'Kumaş Seçimi', description: 'Deniz dayanımlı, lüks dokuda kumaş önerileri' },
      { step: '03', title: 'Özel Üretim', description: 'Her kabin için özel ölçü ve tasarım' },
      { step: '04', title: 'Marina Teslimat', description: 'Yatınıza kadar teslimat ve kurulum desteği' }
    ]
  }
}

export default async function HizmetDetayPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = serviceData[slug]
  
  if (!service) {
    notFound()
  }

  return (
    <div>
      {/* Hero - GOLD Vurgulu */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-brand-cream via-white to-brand-cream/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <h1 className="font-playfair text-3xl md:text-5xl mb-4 text-brand-charcoal leading-tight">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl text-brand-gold font-medium mb-6">
              {service.subtitle}
            </p>
            <p className="text-lg text-brand-stone leading-relaxed mb-6">
              {service.description}
            </p>
            <p className="text-base text-brand-stone/90 leading-relaxed">
              {service.seoText}
            </p>
          </div>
        </div>
      </section>

      {/* Özellikler Grid */}
      <section className="py-10 md:py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-playfair text-3xl md:text-4xl mb-8 text-center">Neler Sunuyoruz?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.features.map((feature: any, i: number) => (
                <div key={i} className="bg-brand-cream p-6 rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3 mb-3">
                    <Check className="w-6 h-6 text-brand-gold flex-shrink-0 mt-1" strokeWidth={2} />
                    <h3 className="font-semibold text-lg text-brand-charcoal">{feature.title}</h3>
                  </div>
                  <p className="text-sm text-brand-stone pl-9">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Avantajlar */}
      <section className="py-10 md:py-12 bg-gradient-to-b from-brand-gold/5 to-transparent">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-playfair text-3xl mb-6">Neden The Q Atelier?</h2>
                <div className="space-y-3">
                  {service.benefits.map((benefit: string, i: number) => (
                    <div key={i} className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" fill="currentColor" />
                      <span className="text-brand-stone">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <TrendingUp className="w-8 h-8 text-brand-gold mx-auto mb-2" />
                    <div className="font-playfair text-3xl text-brand-charcoal mb-1">7+</div>
                    <div className="text-sm text-brand-stone">Yıl Tecrübe</div>
                  </div>
                  <div className="text-center">
                    <Users className="w-8 h-8 text-brand-gold mx-auto mb-2" />
                    <div className="font-playfair text-3xl text-brand-charcoal mb-1">500+</div>
                    <div className="text-sm text-brand-stone">Mutlu Müşteri</div>
                  </div>
                  <div className="text-center">
                    <Shield className="w-8 h-8 text-brand-gold mx-auto mb-2" />
                    <div className="font-playfair text-3xl text-brand-charcoal mb-1">%100</div>
                    <div className="text-sm text-brand-stone">Kalite Garantisi</div>
                  </div>
                  <div className="text-center">
                    <Clock className="w-8 h-8 text-brand-gold mx-auto mb-2" />
                    <div className="font-playfair text-3xl text-brand-charcoal mb-1">15-30</div>
                    <div className="text-sm text-brand-stone">Gün Teslimat</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Süreç Adımları */}
      <section className="py-10 md:py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-playfair text-3xl md:text-4xl mb-10 text-center">Nasıl Çalışıyoruz?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.process.map((step: any, i: number) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="font-playfair text-2xl font-bold text-brand-gold">{step.step}</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-brand-charcoal">{step.title}</h3>
                  <p className="text-sm text-brand-stone">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-brand-charcoal to-brand-charcoal/90 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-playfair text-3xl md:text-4xl mb-4">Projeniz İçin Teklif Alın</h2>
            <p className="text-lg text-neutral-200 mb-8">
              {service.title} hizmetimiz hakkında detaylı bilgi ve özel fiyat teklifi için bizimle iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/teklif-al" className="bg-brand-gold text-white px-10 py-4 rounded-lg hover:bg-brand-gold-dark transition-colors font-medium">
                Teklif Formu
              </Link>
              <Link href="/iletisim" className="border-2 border-white text-white px-10 py-4 rounded-lg hover:bg-white hover:text-brand-charcoal transition-colors font-medium">
                İletişime Geçin
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Diğer Hizmetler */}
      <section className="py-10 bg-brand-cream/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h3 className="font-playfair text-2xl mb-4">Diğer Hizmetlerimiz</h3>
            <Link href="/hizmetler" className="text-brand-gold hover:text-brand-gold-dark font-medium inline-flex items-center gap-2">
              Tüm Hizmetleri Görüntüle →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
