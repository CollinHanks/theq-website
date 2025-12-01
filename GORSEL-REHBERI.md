# 📸 GÖRSEL YERLEŞTİRME REHBERİ

> **The Q Atelier Web Sitesi**  
> **Versiyon:** GOLD Edition  
> **Tarih:** 1 Aralık 2024

---

## ✅ KISA CEVAP

**EVET!** `/public` klasörüne koyduğunuz görseller **otomatik çalışır!**

Next.js'te `/public` klasörü **statik dosyalar** için özel bir klasördür.

---

## 📂 KLASÖR YAPISI

```
theq-website/
└── public/
    └── images/
        ├── hero/              ← Ana sayfa hero görselleri
        ├── products/          ← Ürün görselleri
        ├── references/        ← Müşteri logoları
        ├── team/              ← Ekip/atölye fotoğrafları
        ├── about-workshop.jpg
        ├── about-craftsmanship.jpg
        ├── team-workshop.jpg
        ├── team-design.jpg
        ├── og-image.jpg       ← Sosyal medya paylaşım görseli
        └── twitter-image.jpg  ← Twitter Card görseli
```

---

## 🎯 GÖRSEL KULLANIM ÖRNEKLERİ

### 1. Kodda Nasıl Kullanılır?

```tsx
import Image from 'next/image'

// ✅ DOĞRU
<Image 
  src="/images/hero/main.jpg"    // public/ yazmıyoruz!
  alt="The Q Atelier"
  width={1920}
  height={1080}
/>

// ✅ DOĞRU (normal img tag)
<img src="/images/products/nevresim.jpg" alt="Nevresim" />

// ❌ YANLIŞ
<Image src="/public/images/hero/main.jpg" />  // public/ yazmayın!
```

### 2. Public Klasörü Nasıl Çalışır?

```
Dosya yolu:          /public/images/hero/main.jpg
URL'de görünür:      /images/hero/main.jpg
Tarayıcıda açılır:   http://localhost:3000/images/hero/main.jpg
```

**Önemli:** `/public` kısmı URL'de **otomatik atlanır!**

---

## 📋 İHTİYAÇ DUYULAN GÖRSELLER

### Ana Sayfa (`app/page.tsx`)

| Görsel | Önerilen Boyut | Kullanım Yeri |
|--------|----------------|---------------|
| Hero arka plan | 1920x1080px | Ana ekran büyük görsel |
| Ürün kartları | 800x600px | Koleksiyonlar bölümü |

**Kodda Placeholder:**
```tsx
// Satır ~30
<div className="aspect-[4/3] bg-neutral-200">
  [Placeholder]  ← Buraya gerçek görsel gelecek
</div>
```

---

### Hakkımızda (`app/hakkimizda/page.tsx`)

| Dosya Adı | Boyut | Satır No | Açıklama |
|-----------|-------|----------|----------|
| `about-workshop.jpg` | 1200x900px | ~29 | Atölye fotoğrafı |
| `about-craftsmanship.jpg` | 1200x900px | ~83 | El işçiliği detayı |
| `team-workshop.jpg` | 1280x720px | ~218 | Ekip çalışması |
| `team-design.jpg` | 1280x720px | ~227 | Tasarım ekibi |

**Kodda kullanım:**
```tsx
// Satır 28-35
<Image
  src="/images/about-workshop.jpg"  // ← Görseli buraya koyun
  alt="The Q Atelier atölyesi İstanbul"
  fill
  className="object-cover"
/>
```

---

### Ürünler (`app/urunler/page.tsx`)

| Kategori | Dosya Öneri | Boyut |
|----------|-------------|-------|
| Yatak Grubu | `yatak-grubu.jpg` | 800x600px |
| Banyo Grubu | `banyo-grubu.jpg` | 800x600px |
| Restoran Tekstili | `restoran.jpg` | 800x600px |
| Üniforma | `uniforma.jpg` | 800x600px |
| Spa & Wellness | `spa.jpg` | 800x600px |
| Açık Alan & Havuz | `havuz.jpg` | 800x600px |

**Kodda placeholder:**
```tsx
// Satır ~44
<div className="aspect-[16/10] bg-gradient-to-br from-neutral-200 to-neutral-300">
  [Yatak Grubu Görseli]  ← Buraya gerçek görsel
</div>
```

---

### Referanslar (`app/referanslar/page.tsx`)

**Müşteri Logoları:**
- Boyut: 200x100px (max)
- Format: **PNG** (şeffaf arka plan)
- İsim: `logo-four-seasons.png`, `logo-hilton.png`, vb.

**Proje Görselleri:**
- Boyut: 1280x720px (16:9)
- Format: JPG/WebP
- Satır ~59: Proje kartları

---

### İletişim (`app/iletisim/page.tsx`)

**Google Maps:**
```tsx
// Satır ~144 - Placeholder bu:
<div className="aspect-video bg-neutral-200">
  [Google Maps Harita]
</div>

// Bununla değiştirin:
<iframe
  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"
  width="100%"
  height="400"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  className="rounded-lg"
/>
```

**Maps Embed Kodu Alma:**
1. Google Maps'te adresi arayın
2. "Paylaş" → "Haritayı yerleştir"
3. Kodu kopyalayın

---

### SEO & Sosyal Medya

**Open Graph & Twitter Card:**

```
Dosya: /public/images/og-image.jpg
Boyut: 1200x630px
Kullanım: Facebook, LinkedIn paylaşımlarında
```

```
Dosya: /public/images/twitter-image.jpg
Boyut: 1200x600px
Kullanım: Twitter paylaşımlarında
```

**Kodda kullanım:** (`app/layout.tsx` - Satır 84)
```tsx
images: [
  {
    url: '/images/og-image.jpg',  // ← Görseli buraya koyun
    width: 1200,
    height: 630,
  },
]
```

---

## 🎨 GÖRSEL OPTİMİZASYONU

### Format Önerileri

| Kullanım | Format | Açıklama |
|----------|--------|----------|
| Fotoğraflar | **WebP** | %30 daha küçük, modern tarayıcılar destekler |
| Logoler | **PNG** veya **SVG** | Şeffaf arka plan gerekiyorsa PNG |
| İkonlar | **SVG** | Keskin, ölçeklendirilebilir |
| Fallback | **JPG** | Eski tarayıcılar için |

### Next.js Image Optimization

```tsx
import Image from 'next/image'

<Image
  src="/images/hero.jpg"
  alt="Açıklama"
  width={1920}
  height={1080}
  quality={85}              // %85 kalite (optimal)
  priority                  // Above-the-fold görseller için
  placeholder="blur"        // Blur efekti (opsiyonel)
/>
```

**Next.js otomatik olarak:**
- ✅ WebP'ye dönüştürür
- ✅ Responsive boyutlar oluşturur
- ✅ Lazy loading ekler
- ✅ Optimize eder

---

## 📐 GÖRSEL BOYUT REHBERİ

### Önerilen Boyutlar

```
Hero (Tam ekran):        1920x1080px (16:9)
Ürün kartı:              800x600px (4:3)
Blog kapak:              1200x630px (OG uyumlu)
Logo:                    200x100px (max)
Thumbnail:               400x300px
Ekip fotoğrafı:          800x800px (kare)
```

### Aspect Ratio (En-Boy Oranı)

```css
aspect-[4/3]    → 4:3 oran (ürün kartları)
aspect-[16/9]   → 16:9 oran (video benzeri)
aspect-video    → 16:9 (Tailwind alias)
aspect-square   → 1:1 (kare)
```

---

## 🔥 HIZLI BAŞLANGIÇ

### 1. Görselleri Hazırlayın

```bash
# Klasör yapısını oluşturun
mkdir -p public/images/hero
mkdir -p public/images/products
mkdir -p public/images/references
mkdir -p public/images/team
```

### 2. Görselleri Kopyalayın

```bash
# Örnek: Hero görseli
cp ~/Desktop/hero-image.jpg public/images/hero/main.jpg

# Örnek: Ürün görseli
cp ~/Desktop/yatak.jpg public/images/products/yatak-grubu.jpg
```

### 3. Kodda Placeholder'ları Değiştirin

**Önce:**
```tsx
<div className="bg-neutral-200">
  [Placeholder]
</div>
```

**Sonra:**
```tsx
<Image 
  src="/images/products/yatak-grubu.jpg"
  alt="Yatak Grubu"
  fill
  className="object-cover"
/>
```

### 4. Test Edin

```bash
npm run dev
# http://localhost:3000 → Görselleri kontrol edin
```

---

## 🐛 SORUN GİDERME

### Görsel Görünmüyor

**Olası Nedenler:**

1. **Yanlış yol:**
   ```tsx
   ❌ src="/public/images/hero.jpg"
   ✅ src="/images/hero.jpg"
   ```

2. **Dosya adı yanlış:**
   ```tsx
   ❌ src="/images/Hero.jpg"    // Büyük H
   ✅ src="/images/hero.jpg"    // Küçük h
   ```

3. **Uzantı yanlış:**
   ```tsx
   ❌ src="/images/hero.png"    // Dosya .jpg
   ✅ src="/images/hero.jpg"
   ```

4. **Klasör yok:**
   ```bash
   # Kontrol edin:
   ls public/images/
   
   # Yoksa oluşturun:
   mkdir -p public/images
   ```

### 404 Hatası

```bash
# Tarayıcıda direkt deneyin:
http://localhost:3000/images/hero/main.jpg

# Eğer 404 alıyorsanız:
1. Dosya gerçekten /public/images/hero/main.jpg yolunda mı?
2. Dev sunucusunu yeniden başlatın: Ctrl+C → npm run dev
```

---

## 📝 PLACEHOLDER LİSTESİ

Koddaki tüm placeholder'lar:

| Dosya | Satır | Placeholder Metni | Değiştirilecek |
|-------|-------|-------------------|----------------|
| `app/page.tsx` | ~30 | `[Hero Background]` | Hero görseli |
| `app/hakkimizda/page.tsx` | ~29 | `[Atölye]` | about-workshop.jpg |
| `app/hakkimizda/page.tsx` | ~83 | `[El İşçiliği]` | about-craftsmanship.jpg |
| `app/urunler/page.tsx` | ~44 | `[Yatak Grubu]` | yatak-grubu.jpg |
| `app/referanslar/page.tsx` | ~59 | `[Proje]` | Proje görselleri |
| `app/iletisim/page.tsx` | ~144 | `[Google Maps]` | Maps iframe |

---

## ✅ KONTROL LİSTESİ

Görselleri yerleştirdikten sonra:

- [ ] Ana sayfa hero görseli çalışıyor
- [ ] Ürün kartları görselleri yüklenmiş
- [ ] Hakkımızda sayfası görselleri tamam
- [ ] Referans logoları eklendi
- [ ] Google Maps haritası eklenmiş
- [ ] OG image sosyal medya paylaşımında görünüyor
- [ ] Tüm görseller mobilde düzgün görünüyor
- [ ] Görseller optimize edilmiş (WebP veya sıkıştırılmış)

---

## 🚀 PRODUCTION BUILD

Görselleri ekledikten sonra production build yapın:

```bash
# Build
npm run build

# Preview
npm start
```

Next.js tüm görselleri otomatik optimize edecek! ✨

---

**Hazırlayan:** Claude  
**Tarih:** 1 Aralık 2024  
**Proje:** The Q Atelier - GOLD Edition

---

*Sorularınız için README dosyasını inceleyin veya bana ulaşın! 🎨*
