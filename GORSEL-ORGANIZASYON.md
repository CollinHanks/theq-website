# 📸 GÖRSEL ORGANİZASYONU - KOMUTLAR

> **The Q Atelier - GOLD Edition**  
> **Tarih:** 1 Aralık 2024

---

## ✅ YAPILDI: KOD GÜNCELLEMELERİ

Tüm görsel yolları güncellendi! Artık görselleri taşıyabilirsiniz.

---

## 📂 ADIM 1: GÖRSELLERİ TAŞIYIN

### Yöntem A: VS Code İle (Kolay)

1. VS Code'da `public/images` klasörünü açın
2. Dosyaları **sürükle-bırak** ile taşıyın:

```
hero-banner.jpg          → hero/ klasörüne sürükle
bedding-collection.jpg   → products/ klasörüne sürükle
restaurant-uniforms.jpg  → products/ klasörüne sürükle
spa-wellness.jpg         → products/ klasörüne sürükle
about-workshop.jpg       → team/ klasörüne sürükle
about-craftsmanship.jpg  → team/ klasörüne sürükle
team-workshop.jpg        → team/ klasörüne sürükle
team-design.jpg          → team/ klasörüne sürükle
```

### Yöntem B: Terminal İle

```bash
# Terminal'i açın (VS Code içinde: Ctrl+`)
cd public/images

# Hero klasörüne
mv hero-banner.jpg hero/

# Products klasörüne
mv bedding-collection.jpg products/
mv restaurant-uniforms.jpg products/
mv spa-wellness.jpg products/

# Team klasörüne
mv about-workshop.jpg team/
mv about-craftsmanship.jpg team/
mv team-workshop.jpg team/
mv team-design.jpg team/
```

---

## ✅ ADIM 2: KONTROL EDİN

Taşıma işleminden sonra klasör yapısı şöyle olmalı:

```
public/images/
├── hero/
│   └── hero-banner.jpg              ✅
├── products/
│   ├── bedding-collection.jpg       ✅
│   ├── restaurant-uniforms.jpg      ✅
│   └── spa-wellness.jpg             ✅
├── references/
│   └── (müşteri logoları buraya)    📋 Eklenecek
├── team/
│   ├── about-workshop.jpg           ✅
│   ├── about-craftsmanship.jpg      ✅
│   ├── team-workshop.jpg            ✅
│   └── team-design.jpg              ✅
├── logo-black.png                   ✅ (root'ta kalacak)
└── logo-white.png                   ✅ (root'ta kalacak)
```

---

## 🔍 ADIM 3: TEST EDİN

```bash
# Dev sunucuyu başlatın
npm run dev

# Tarayıcıda açın
http://localhost:3000

# Test sayfaları:
✅ Ana sayfa - Hero görseli görünüyor mu?
✅ Ana sayfa - Ürün kartları (3 görsel) görünüyor mu?
✅ Hakkımızda - Atölye görselleri (4 görsel) görünüyor mu?
```

---

## 📸 ADIM 4: EKSİK GÖRSELLERİ EKLEYİN

### 4.1 Referans Logoları

Müşteri logolarını ekleyin (PNG format, şeffaf arka plan):

```
public/images/references/
├── logo-hilton.png
├── logo-four-seasons.png
├── logo-ritz-carlton.png
├── logo-marriott.png
├── logo-shangri-la.png
└── ... (diğer müşteri logoları)
```

**Önerilen boyut:** 200x100px (max)

### 4.2 Ürün Görselleri (Opsiyonel)

Daha fazla ürün görseli ekleyebilirsiniz:

```
public/images/products/
├── yatak-grubu-1.jpg
├── yatak-grubu-2.jpg
├── banyo-grubu-1.jpg
├── uniforma-1.jpg
└── ... (diğer ürünler)
```

### 4.3 SEO & Sosyal Medya

Bu görseller önemli! Sosyal medyada paylaşım için:

```
public/images/
├── og-image.jpg        ← Facebook/LinkedIn için (1200x630px)
└── twitter-image.jpg   ← Twitter için (1200x600px)
```

**Nasıl hazırlanır:**
1. Sitenizin ekran görüntüsü veya hero görselini alın
2. 1200x630px boyutunda kırpın
3. Logo ve "The Q Atelier" yazısı ekleyin (opsiyonel)
4. `og-image.jpg` olarak kaydedin

---

## 🔧 ADIM 5: GEREKLİ DÜZELTMELERİ YAPIN

### 5.1 İletişim Bilgileri

**Güncellenecek dosyalar:**
- `app/layout.tsx` (Footer metadata)
- `app/iletisim/page.tsx`
- `components/layout/footer.tsx`

**Değiştirilecek bilgiler:**
```tsx
// PLACEHOLDER → GERÇEK BİLGİLER
Telefon: "+90 555 123 45 67" → "+90 212 XXX XX XX"
E-posta: "hello@theqatelier.com" → "info@theqatelier.com.tr"
Adres: "Bomonti, İstanbul" → "TAM ADRES BİLGİSİ"
```

### 5.2 Google Maps

**Dosya:** `app/iletisim/page.tsx` (Satır ~144)

1. Google Maps'te adresinizi arayın
2. "Paylaş" → "Haritayı yerleştir" tıklayın
3. Embed kodunu kopyalayın
4. Placeholder'ı değiştirin:

```tsx
// ÖNCE:
<div className="aspect-video bg-neutral-200 rounded-lg">
  [Google Maps Harita]
</div>

// SONRA:
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

---

## 🚀 ADIM 6: PRODUCTION BUILD

Tüm değişiklikler tamamlandıktan sonra:

```bash
# Build test
npm run build

# Eğer başarılı olursa:
✓ Compiled successfully
✓ Collecting page data
✓ Generating static pages

# Preview
npm start
```

---

## 📋 KONTROL LİSTESİ

Deploy öncesi mutlaka kontrol edin:

### Görseller
- [ ] Tüm görseller doğru klasörlerde
- [ ] Ana sayfa hero görseli çalışıyor
- [ ] Ürün kartları görselleri yükleniyor
- [ ] Hakkımızda sayfası görselleri tamam
- [ ] Referans logoları eklendi (opsiyonel)
- [ ] OG image ve Twitter image eklendi

### İçerik
- [ ] İletişim bilgileri güncellendi
- [ ] Google Maps eklendi
- [ ] Form backend'i çalışıyor (opsiyonel)

### Test
- [ ] Desktop görünümü test edildi
- [ ] Mobil görünümü test edildi
- [ ] Tablet görünümü test edildi
- [ ] Tüm sayfalar yükleniyor
- [ ] Hiçbir 404 hatası yok

### SEO
- [ ] Tüm sayfalarda metadata var
- [ ] Alt text'ler yazılmış
- [ ] Sitemap.xml oluşturuldu (Next.js otomatik)
- [ ] robots.txt kontrol edildi

### Performance
- [ ] `npm run build` başarılı
- [ ] Lighthouse skoru kontrol edildi
- [ ] Görseller optimize edildi (WebP)

---

## 🎯 CANLI SUNUCU (DEPLOY)

### Önerilen Platformlar:

**1. Vercel (Önerilen - Ücretsiz)**
```bash
# Vercel CLI kur
npm install -g vercel

# Deploy et
vercel

# Production
vercel --prod
```

**2. Netlify**
1. GitHub'a push yapın
2. Netlify'a bağlayın
3. Otomatik deploy

**3. GitHub Pages (Static)**
```bash
npm run build
npm run export
# out/ klasörünü GitHub Pages'e yükle
```

---

## 🐛 SORUN GİDERME

### Görsel görünmüyor?

1. **Yol doğru mu kontrol et:**
   ```tsx
   ✅ /images/hero/hero-banner.jpg
   ❌ /images/hero-banner.jpg  (taşındı)
   ❌ /public/images/hero/hero-banner.jpg  (public yazma!)
   ```

2. **Dosya adı doğru mu:**
   - Büyük/küçük harf duyarlı!
   - `Hero.jpg` ≠ `hero.jpg`

3. **Dosya gerçekten orada mı:**
   ```bash
   ls public/images/hero/
   ls public/images/products/
   ls public/images/team/
   ```

4. **Cache temizle:**
   ```bash
   rm -rf .next
   npm run dev
   ```

### 404 Hatası?

1. Dev sunucuyu yeniden başlat
2. Tarayıcı cache'ini temizle (Ctrl+Shift+R)
3. Dosya yolunu direkt test et:
   ```
   http://localhost:3000/images/hero/hero-banner.jpg
   ```

---

## ✅ SONUÇ

Tüm adımlar tamamlandı mı?

- ✅ Görseller organize edildi
- ✅ Kod güncellemeleri yapıldı
- ✅ Test edildi
- ✅ Build başarılı

**Artık canlıya almaya hazırsınız!** 🚀

---

**Hazırlayan:** Claude  
**Tarih:** 1 Aralık 2024  
**Proje:** The Q Atelier - GOLD Edition

*Başarılar dileriz! 🎉*
