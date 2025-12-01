# ÜRÜNLER GÖRSEL YERLEŞTİRME REHBERİ

## 📸 GÖRSEL GEREKSİNİMLERİ

### Koleksiyon Görselleri (4 adet)

Her koleksiyon için 1 ana görsel gerekiyor:

1. **Spa & Wellness**
   - Dosya adı: `spa-wellness-collection.jpg`
   - Konum: `public/images/products/spa-wellness-collection.jpg`
   - Boyut: 800x600px (4:3 oran)
   - İçerik: Bornoz, havlu, spa tekstili görseli

2. **Açık Alan & Havuz**
   - Dosya adı: `outdoor-pool-collection.jpg`
   - Konum: `public/images/products/outdoor-pool-collection.jpg`
   - Boyut: 800x600px
   - İçerik: Plaj havlusu, şezlong örtüsü

3. **Özel Tasarım**
   - Dosya adı: `custom-design-collection.jpg`
   - Konum: `public/images/products/custom-design-collection.jpg`
   - Boyut: 800x600px
   - İçerik: Özel üretim, bespoke tasarım örnekleri

4. **Kurumsal Paketler**
   - Dosya adı: `corporate-packages-collection.jpg`
   - Konum: `public/images/products/corporate-packages-collection.jpg`
   - Boyut: 800x600px
   - İçerik: Toplu sipariş, kurumsal çözümler

---

## 📁 KLASÖR YAPISI

```
public/images/products/
├── bedding-collection.jpg (MEVCUT)
├── restaurant-uniforms.jpg (MEVCUT)
├── spa-wellness.jpg (MEVCUT)
├── spa-wellness-collection.jpg (YENİ - EKLENECEaccess)
├── outdoor-pool-collection.jpg (YENİ - EKLENECEK)
├── custom-design-collection.jpg (YENİ - EKLENECEK)
└── corporate-packages-collection.jpg (YENİ - EKLENECEK)
```

---

## 🎨 GÖRSEL ÖZELLİKLERİ

### Format
- JPG (önerilen)
- WebP (daha iyi performans için opsiyonel)

### Boyut
- Genişlik: 800px
- Yükseklik: 600px
- Oran: 4:3

### Kalite
- DPI: 72 (web için yeterli)
- Sıkıştırma: Orta kalite (70-80%)
- Dosya boyutu: 100-300 KB arası ideal

### İçerik Önerileri
- Parlak, iyi ışıklandırılmış
- Ürünler net görünüyor
- Profesyonel çekim
- Markaya uygun renk paleti
- Minimalist arka plan

---

## 🔄 GÖRSEL EKLEDİKTEN SONRA

```bash
# Test için:
npm run dev

# Kontrol edin:
http://localhost:3000/urunler
```

Tüm görseller yüklendiğinde placeholder'lar gerçek görsellerle değiştirilecek!

---

## 📝 NOTLAR

- Görseller `public/images/products/` klasörüne konulduğunda otomatik çalışacak
- Dosya adları TAMAMEN eşleşmeli (küçük-büyük harf duyarlı)
- JPG format tercih edilmeli
- Boyut standartları korunmalı (4:3 oran)
