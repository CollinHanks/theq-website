# The Q Website - Kurulum Rehberi 🚀

## Nasıl Çalıştırırsın? (Çok Basit!)

### 1. Terminal'i Aç
VS Code'da üstten: Terminal > New Terminal

### 2. Paketleri Yükle
Terminale şunu yaz ve enter'a bas:
```bash
npm install
```
(Eğer npm yoksa pnpm kullan: `pnpm install`)

### 3. Siteyi Çalıştır
Terminale şunu yaz:
```bash
npm run dev
```

### 4. Tarayıcıyı Aç
Chrome'u aç ve şu adrese git:
```
http://localhost:3000
```

## Neyi Nereden Değiştirirsin? 📝

- **Yazıları değiştir:** `app` klasöründeki `.tsx` dosyaları
- **Renkleri değiştir:** `tailwind.config.ts` dosyası
- **Resimleri koy:** `public/images` klasörüne at
- **Yeni sayfa ekle:** `app` klasörüne yeni klasör aç

## Vercel'e Nasıl Yüklersin? 🌐

1. GitHub'a yükle (git push)
2. vercel.com'a gir
3. "Import Project" de
4. GitHub'dan seç
5. Deploy'a bas - otomatik kurar!

## Sorun mu Var? 🤔

- Node.js yüklü mü? (nodejs.org'dan indir)
- `npm install` yaptın mı?
- Port 3000 boş mu? (başka site açık olmasın)

**Kolay gelsin! 💜**