import Image from 'next/image'
import Link from 'next/link'
import { Award, Users, Globe, TrendingUp, Shield, Target, Sparkles, Heart } from 'lucide-react'

export const metadata = {
  title: 'Hakkımızda | The Q Atelier - Otel Tekstili',
  description: "2018'den beri Türkiye'nin lider otelcilik tekstil üreticisi. 27 yıllık kurucu tecrübesi, 200+ kurumsal müşteri. Kalite, sürdürülebilirlik ve özel tasarım.",
}

export default function HakkimizdaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Bölümü - KOMPAKT */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-brand-cream to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-playfair text-4xl md:text-5xl mb-5 text-brand-charcoal">
              Hikayemiz
            </h1>
            <p className="text-lg md:text-xl text-brand-stone leading-relaxed">
              Türk el sanatlarının çağdaş lüks ile buluştuğu nokta. The Q Atelier, 27 yıllık kurucu tecrübesi ve kusursuz işçilik tutkusuyla yeni nesil tekstil mükemmeliyetini temsil ediyor.
            </p>
          </div>
        </div>
      </section>

      {/* Görsel + Hikaye - KOMPAKT */}
      <section className="py-10 md:py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-center max-w-7xl mx-auto">
            {/* Görsel */}
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/team/about-workshop.jpg"
                alt="The Q Atelier atölyesi İstanbul"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

            {/* İçerik */}
            <div className="space-y-5">
              <h2 className="font-playfair text-3xl md:text-4xl text-brand-charcoal">
                Miras & Yenilik
              </h2>
              <div className="space-y-4 text-brand-stone leading-relaxed text-base md:text-lg">
                <p>
                  2018 yılında İstanbul'un kalbinde kurulan The Q Atelier, otelcilik tekstillerinde devrim yaratma vizyonuyla hayata geçti. Kurucularımızın tekstil sektöründeki 27 yıllık birikimiyle, lüks ve dayanıklılığı bir araya getiren özel tasarım tekstillere duyulan ihtiyacı gördük.
                </p>
                <p>
                  Bugün Ege kıyılarındaki butik otellerden Dubai'deki Michelin yıldızlı restoranlara kadar 200'den fazla müşteriye hizmet veriyoruz. Her birine aynı titizlik ve mükemmellik taahhüdüyle yaklaşıyoruz.
                </p>
                <p>
                  İstanbul'daki atölyemiz, geleneksel Türk dokuma sanatını modern üretim teknikleriyle buluşturarak her ürettiğimiz parçanın kalite, dayanıklılık ve zamansız tasarım hikayesini anlatmasını sağlıyor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Felsefemiz + Görsel - KOMPAKT */}
      <section className="py-10 md:py-12 bg-brand-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-center max-w-7xl mx-auto">
            {/* İçerik */}
            <div className="space-y-5 order-2 lg:order-1">
              <h2 className="font-playfair text-3xl md:text-4xl text-brand-charcoal">
                Felsefemiz
              </h2>
              <div className="space-y-4 text-brand-stone leading-relaxed text-base md:text-lg">
                <p>
                  The Q Atelier'de tekstillerin fonksiyonel ürünlerden çok daha fazlası olduğuna inanıyoruz. Markanızın sessiz elçileri, misafirlerinizin ilk teması ve evlerine götürdükleri kalıcı izlenimdir.
                </p>
                <p>
                  Yaklaşımımız üç temel prensip üzerine kurulu: Yüzyıllık Türk tekstil geleneğini onurlandıran <span className="font-semibold text-brand-charcoal">El İşçiliği</span>, modern sürdürülebilirlik ve performans standartlarını benimseyen <span className="font-semibold text-brand-charcoal">Yenilikçilik</span>, ve her müşteri ilişkisini ortak bir yolculuk olarak gören <span className="font-semibold text-brand-charcoal">Ortaklık</span>.
                </p>
                <p>
                  Sadece tekstil tedarik etmiyoruz, deneyim yaratıyoruz. Her iplik bilinçli seçiliyor, her tasarım öğesi hem estetik hem de uzun ömür için düşünülüyor. Bu özveri, kalitede ödün vermeyi reddeden otelcilik markalarının güvenilir ortağı olmamızı sağladı.
                </p>
              </div>
            </div>

            {/* Görsel */}
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-xl order-1 lg:order-2">
              <Image
                src="/images/team/about-craftsmanship.jpg"
                alt="The Q Atelier usta işçiliği"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Değerlerimiz - KOMPAKT */}
      <section className="py-10 md:py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-playfair text-3xl md:text-4xl text-center mb-10 md:mb-12 text-brand-charcoal">
            Değerlerimiz
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
            {/* Kalite Önceliği */}
            <div className="text-center group">
              <div className="mb-4 flex justify-center">
                <div className="w-12 h-12 flex items-center justify-center">
                  <Award className="w-full h-full text-brand-lilac transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="font-semibold text-xl mb-2 text-brand-charcoal">
                Kalite Önceliği
              </h3>
              <p className="text-sm text-brand-stone leading-relaxed">
                Her ürün mükemmelliği garanti altına almak için titiz kalite kontrolünden geçer.
              </p>
            </div>

            {/* Sürdürülebilirlik */}
            <div className="text-center group">
              <div className="mb-4 flex justify-center">
                <div className="w-12 h-12 flex items-center justify-center">
                  <Sparkles className="w-full h-full text-brand-lilac transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="font-semibold text-xl mb-2 text-brand-charcoal">
                Sürdürülebilirlik
              </h3>
              <p className="text-sm text-brand-stone leading-relaxed">
                Çevre dostu malzemeler ve sorumlu üretim yöntemlerine kararlı bağlılık.
              </p>
            </div>

            {/* Özel Tasarım */}
            <div className="text-center group">
              <div className="mb-4 flex justify-center">
                <div className="w-12 h-12 flex items-center justify-center">
                  <Target className="w-full h-full text-brand-lilac transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="font-semibold text-xl mb-2 text-brand-charcoal">
                Özel Tasarım
              </h3>
              <p className="text-sm text-brand-stone leading-relaxed">
                Markanızın benzersiz kimliğini yansıtan özelleştirilmiş çözümler.
              </p>
            </div>

            {/* Zamansız Zarafet */}
            <div className="text-center group">
              <div className="mb-4 flex justify-center">
                <div className="w-12 h-12 flex items-center justify-center">
                  <Heart className="w-full h-full text-brand-lilac transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="font-semibold text-xl mb-2 text-brand-charcoal">
                Zamansız Zarafet
              </h3>
              <p className="text-sm text-brand-stone leading-relaxed">
                Trendleri aşan, yıllarca değerini koruyan tasarımlar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rakamlarla Biz - KOMPAKT */}
      <section className="py-10 md:py-12 bg-brand-cream">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-playfair text-3xl md:text-4xl text-center mb-8 md:mb-10 text-brand-charcoal">
            Rakamlarla The Q Atelier
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 md:mb-10">
              <div className="text-center">
                <div className="font-playfair text-4xl md:text-5xl text-brand-lilac mb-2">
                  2018
                </div>
                <p className="text-sm text-brand-stone">
                  Kuruluş Yılı
                </p>
              </div>
              <div className="text-center">
                <div className="font-playfair text-4xl md:text-5xl text-brand-lilac mb-2">
                  200+
                </div>
                <p className="text-sm text-brand-stone">
                  Kurumsal Müşteri
                </p>
              </div>
              <div className="text-center">
                <div className="font-playfair text-4xl md:text-5xl text-brand-lilac mb-2">
                  %98
                </div>
                <p className="text-sm text-brand-stone">
                  Müşteri Memnuniyeti
                </p>
              </div>
              <div className="text-center">
                <div className="font-playfair text-4xl md:text-5xl text-brand-lilac mb-2">
                  27 Yıl
                </div>
                <p className="text-sm text-brand-stone">
                  Kurucu Tecrübesi
                </p>
              </div>
            </div>

            {/* Görsel Grid - KOMPAKT */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8 md:mb-10">
              <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/team/team-workshop.jpg"
                  alt="Atölyemizde çalışan ustalarımız"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/team/team-design.jpg"
                  alt="Tasarım ekibi işbirliği"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link 
                href="/iletisim"
                className="inline-block bg-brand-lilac text-white px-10 py-4 rounded-subtle hover:bg-brand-lilac-dark transition-all duration-300 text-base font-medium shadow-lg hover:shadow-xl"
              >
                Bizimle Çalışın →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Neden Bizi Seçiyorlar - KOMPAKT */}
      <section className="py-10 md:py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-playfair text-3xl md:text-4xl text-center mb-10 md:mb-12 text-brand-charcoal">
            Lider Markalar Neden The Q Atelier'i Tercih Ediyor
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            <div className="bg-brand-cream p-6 md:p-8 rounded-lg">
              <div className="w-12 h-12 mb-4 flex items-center justify-center">
                <Shield className="w-full h-full text-brand-lilac" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-brand-charcoal">
                Kanıtlanmış Mükemmellik
              </h3>
              <p className="text-sm text-brand-stone leading-relaxed">
                7+ yıldır lüks otelciliğe hizmet, %98 müşteri memnuniyet oranı.
              </p>
            </div>

            <div className="bg-brand-cream p-6 md:p-8 rounded-lg">
              <div className="w-12 h-12 mb-4 flex items-center justify-center">
                <Target className="w-full h-full text-brand-lilac" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-brand-charcoal">
                Tam Özelleştirme
              </h3>
              <p className="text-sm text-brand-stone leading-relaxed">
                İplik seçiminden son nakışa kadar her şey vizyonunuza göre tasarlanıyor.
              </p>
            </div>

            <div className="bg-brand-cream p-6 md:p-8 rounded-lg">
              <div className="w-12 h-12 mb-4 flex items-center justify-center">
                <Globe className="w-full h-full text-brand-lilac" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-brand-charcoal">
                Küresel Erişim
              </h3>
              <p className="text-sm text-brand-stone leading-relaxed">
                Dünya çapında 200+ müşteriye kusursuz uluslararası lojistik.
              </p>
            </div>

            <div className="bg-brand-cream p-6 md:p-8 rounded-lg">
              <div className="w-12 h-12 mb-4 flex items-center justify-center">
                <Sparkles className="w-full h-full text-brand-lilac" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-brand-charcoal">
                Premium Malzemeler
              </h3>
              <p className="text-sm text-brand-stone leading-relaxed">
                Mısır pamuğu, Türk havlusu, Avrupa keteni – sadece en iyisi.
              </p>
            </div>

            <div className="bg-brand-cream p-6 md:p-8 rounded-lg">
              <div className="w-12 h-12 mb-4 flex items-center justify-center">
                <Award className="w-full h-full text-brand-lilac" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-brand-charcoal">
                Endüstriyel Dayanıklılık
              </h3>
              <p className="text-sm text-brand-stone leading-relaxed">
                Kaliteden ödün vermeden 300+ endüstriyel yıkamaya dayanıklı.
              </p>
            </div>

            <div className="bg-brand-cream p-6 md:p-8 rounded-lg">
              <div className="w-12 h-12 mb-4 flex items-center justify-center">
                <Heart className="w-full h-full text-brand-lilac" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-brand-charcoal">
                Kişisel Dokunuş
              </h3>
              <p className="text-sm text-brand-stone leading-relaxed">
                Her proje için konseptten teslimata özel hesap yöneticisi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Bölümü - KOMPAKT */}
      <section className="py-10 md:py-12 bg-brand-charcoal text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl mb-5">
            The Q Farkını Yaşamaya Hazır mısınız?
          </h2>
          <p className="text-lg text-neutral-300 mb-6 max-w-2xl mx-auto leading-relaxed">
            Birlikte olağanüstü şeyler yaratalım. Ekibimiz tekstil vizyonunuzu hayata geçirmeye hazır.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/iletisim"
              className="bg-brand-lilac text-white px-10 py-4 rounded-subtle hover:bg-brand-lilac-light transition-colors text-base font-medium"
            >
              Projenize Başlayın
            </Link>
            <Link
              href="/referanslar"
              className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-subtle hover:bg-white hover:text-brand-charcoal transition-colors text-base font-medium"
            >
              Referanslarımızı Görün
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
