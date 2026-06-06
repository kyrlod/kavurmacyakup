# Kavurmacı Yakup Usta — Premium Restoran Web Sitesi

Next.js 14 + TypeScript + TailwindCSS + Framer Motion ile hazırlanmış premium restoran web sitesi.

---

## 🚀 Kurulum

### Gereksinimler
- Node.js 18+
- npm veya yarn

### Adımlar

```bash
# 1. Bağımlılıkları yükle
npm install

# 2. Geliştirme sunucusunu başlat
npm run dev

# 3. Tarayıcıda aç
# http://localhost:3000
```

### Production Build

```bash
npm run build
npm start
```

---

## 📁 Klasör Yapısı

```
kavurmaci-yakup-usta/
├── src/
│   ├── app/
│   │   ├── layout.tsx       ← Font, metadata, global layout
│   │   └── page.tsx         ← Ana sayfa (tüm sectionları birleştirir)
│   ├── components/
│   │   ├── sections/        ← Her bölüm ayrı component
│   │   │   ├── Navbar.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── MenuSection.tsx
│   │   │   ├── GallerySection.tsx
│   │   │   ├── ReviewsSection.tsx
│   │   │   ├── ReservationSection.tsx
│   │   │   ├── LocationSection.tsx
│   │   │   └── Footer.tsx
│   │   └── ui/              ← Küçük yeniden kullanılabilir componentler
│   │       ├── FloatingWhatsApp.tsx
│   │       └── ScrollProgress.tsx
│   ├── lib/
│   │   └── data.ts          ← ⭐ TÜM İÇERİKLER BURADAN DÜZENLENİR
│   └── styles/
│       └── globals.css
├── public/
│   └── images/              ← Gerçek fotoğrafları buraya koy
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.mjs
```

---

## ✏️ İçerik Düzenleme

### Restoran Bilgileri
`src/lib/data.ts` dosyasını aç ve `RESTAURANT` objesini güncelle:

```typescript
export const RESTAURANT = {
  name: 'Kavurmacı Yakup Usta',
  phone: '0537 878 81 87',
  whatsapp: '905378788187',
  address: '...',
  // vb.
}
```

### Menü Öğeleri
Aynı `data.ts` dosyasında `MENU_ITEMS` objesini düzenle:

```typescript
export const MENU_ITEMS = {
  kavurma: [
    {
      name: 'Kavurma',
      desc: 'Açıklama...',
      price: '₺280',
      badge: 'En Çok Satan', // null yapılırsa rozet çıkmaz
      img: '/images/kavurma.jpg', // kendi fotoğrafını kullan
    },
    // ...
  ],
}
```

### Yorumlar
`REVIEWS` dizisini güncelleyerek gerçek Google yorumlarını ekle.

### Galeri
`GALLERY_IMAGES` dizisine kendi restoran fotoğraflarını ekle:
```typescript
export const GALLERY_IMAGES = [
  { src: '/images/foto1.jpg', alt: 'Kavurma tabağı' },
  // ...
]
```

---

## 🖼️ Gerçek Fotoğraf Ekleme

1. Fotoğrafları `public/images/` klasörüne koy
2. `data.ts` içinde `img` değerlerini `/images/foto-adi.jpg` olarak güncelle
3. `next.config.mjs` içindeki `remotePatterns` artık gerekmez (silebilirsin)

---

## 🌐 Hosting Seçenekleri

### Ücretsiz
- **Vercel** (önerilen): `vercel.com` — GitHub'a push et, otomatik deploy
- **Netlify**: Benzer şekilde

### Ücretli (Domain + Hosting)
- Domain: `kavurmaciyakupusta.com.tr` — yaklaşık ₺200-400/yıl (isimtescil.net)
- Vercel Pro: $20/ay (gerekli değil, ücretsiz plan yeterli)

---

## 📱 Google Maps Embed Güncelleme

1. Google Maps'te restoranı bul
2. "Paylaş" → "Harita Yerleştir" → iframe kodunu kopyala
3. `data.ts` içinde `mapsEmbed` değerini güncelle

---

## 🎨 Renkler

`tailwind.config.ts` ve `globals.css` içinden değiştirilebilir:
- `--gold: #C9922A` — Altın sarısı
- `--dark: #0A0705` — Ana arka plan
- `--cream: #F2E8D5` — Ana metin rengi
