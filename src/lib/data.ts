// ================================================================
// KAVURMACI YAKUP USTA — Site Verileri
// Bu dosyadan tüm içerikleri kolayca düzenleyebilirsiniz.
// ================================================================

export const RESTAURANT = {
  name: 'Kavurmacı Yakup Usta',
  tagline: 'Otoyolun Efsanevi Lezzet Durağı',
  founded: '1954',
  phone: '0537 878 81 87',
  whatsapp: '905378788187',
  address: 'İnönü Mah., Adapazarı Karasu Yolu, 54110 Ferizli / Sakarya',
  mapsUrl: 'https://maps.app.goo.gl/5Fp4L99ubgDxBPux6',
  mapsEmbed: 'https://maps.google.com/maps?q=Kavurmac%C4%B1%20Yakup%20Usta,%20Ferizli&t=&z=14&ie=UTF8&iwloc=&output=embed',
  rating: 4.4,
  reviewCount: 816,
  priceRange: '₺400 – ₺600',
  hours: 'Her gün 10:00 – 23:00',
  closingTime: '23:00',
  social: {
    instagram: 'https://instagram.com/', // güncelleyin
    facebook: 'https://facebook.com/',  // güncelleyin
  },
}

export const MENU_CATEGORIES = [
  { id: 'kavurma', label: 'Kavurma' },
  { id: 'izgara',  label: 'Izgara' },
  { id: 'kahvalti', label: 'Kahvaltı' },
  { id: 'tatli',   label: 'Tatlı' },
  { id: 'icecek',  label: 'İçecek' },
]

export const MENU_ITEMS: Record<string, MenuItem[]> = {
  kavurma: [
    {
      name: 'Kavurma',
      desc: 'Geleneksel usulde pişirilmiş, tereyağlı dana kavurma. Ustanın imzası.',
      price: '₺280',
      tag: 'Öne Çıkan',
      badge: 'En Çok Satan',
      img: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80',
    },
    {
      name: 'Kuzu Kavurma',
      desc: 'Kuzunun en lezzetli parçalarından hazırlanan özel kavurma.',
      price: '₺320',
      tag: 'Özel',
      badge: null,
      img: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600&q=80',
    },
    {
      name: 'Karışık Kavurma',
      desc: 'Dana ve kuzu kavurma karışımı. İki tadı bir arada.',
      price: '₺300',
      tag: 'Tavsiye',
      badge: 'Şefin Seçimi',
      img: 'https://images.unsplash.com/photo-1558030006-450675393462?w=600&q=80',
    },
  ],
  izgara: [
    {
      name: 'Izgara Köfte',
      desc: 'El yapımı, ızgarada pişirilmiş dana köfte. Yanında pilav.',
      price: '₺180',
      tag: 'Klasik',
      badge: null,
      img: 'https://images.unsplash.com/photo-1550317138-10000687a72b?w=600&q=80',
    },
    {
      name: 'Dana Biftek',
      desc: 'Seçme dana bonfile, orta pişirilmiş, garnitürle servis.',
      price: '₺380',
      tag: 'Premium',
      badge: 'Yeni',
      img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80',
    },
    {
      name: 'Kaburga',
      desc: 'Odun ateşinde yavaş pişirilmiş dana kaburga.',
      price: '₺350',
      tag: 'Özel',
      badge: null,
      img: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&q=80',
    },
  ],
  kahvalti: [
    {
      name: 'Serpme Kahvaltı',
      desc: 'Zengin çeşitlerle dolu geleneksel Türk serpme kahvaltısı.',
      price: '₺150',
      tag: 'Kişi başı',
      badge: 'Hafta Sonu',
      img: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&q=80',
    },
    {
      name: 'Sucuklu Yumurta',
      desc: 'Yöresel sucukla pişirilmiş taze yumurta.',
      price: '₺90',
      tag: 'Klasik',
      badge: null,
      img: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=600&q=80',
    },
    {
      name: 'Menemen',
      desc: 'Domates, biber ve yumurta ile hazırlanan menemen.',
      price: '₺80',
      tag: 'Hafif',
      badge: null,
      img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80',
    },
  ],
  tatli: [
    {
      name: 'Kadayıf',
      desc: 'Cevizli, şerbetli geleneksel Türk kadayıfı.',
      price: '₺60',
      tag: 'Tatlı',
      badge: null,
      img: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&q=80',
    },
    {
      name: 'Sütlaç',
      desc: 'Fırında pişirilmiş, üstü kızarmış geleneksel sütlaç.',
      price: '₺55',
      tag: 'Hafif',
      badge: null,
      img: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80',
    },
  ],
  icecek: [
    {
      name: 'Ayran',
      desc: 'Ev yapımı, taze çırpılmış köy ayranı.',
      price: '₺25',
      tag: 'Tavsiye',
      badge: null,
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&q=80',
    },
    {
      name: 'Türk Çayı',
      desc: 'Demlenmiş, ince belli bardakta Türk çayı.',
      price: '₺15',
      tag: 'Klasik',
      badge: null,
      img: 'https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?w=600&q=80',
    },
    {
      name: 'Şalgam Suyu',
      desc: 'Doğal fermente şalgam suyu, serin servis.',
      price: '₺30',
      tag: 'Yöresel',
      badge: null,
      img: 'https://images.unsplash.com/photo-1543362906-acfc16c67564?w=600&q=80',
    },
  ],
}

export const REVIEWS = [
  { initials: 'AY', name: 'Ahmet Yıldız', rating: 5, text: 'Yıllardır uğrıyorum, hep aynı kalite. Kavurma gerçekten efsane. Otoyoldan geçerken mutlaka durun, pişman olmazsınız.', date: '1 ay önce' },
  { initials: 'MK', name: 'Merve Kaya', rating: 5, text: 'Ailemizle birlikte her geçişimizde uğruyoruz. Porsiyon büyüklüğü ve lezzet mükemmel. Personel çok ilgili ve sıcak.', date: '2 ay önce' },
  { initials: 'HÖ', name: 'Hakan Öztürk', rating: 4, text: 'İş seyahatimde keşfettim. O günden beri Sakarya\'ya her gelişimde uğruyorum. Gerçek anlamda ev yemeği kalitesinde.', date: '3 ay önce' },
  { initials: 'SB', name: 'Selin Baş', rating: 5, text: 'Kavurma siparişi verdim, hayatımda yediğim en güzel kavurmaydı. Mekan temiz, servis hızlı.', date: '2 hafta önce' },
  { initials: 'CA', name: 'Can Arslan', rating: 5, text: 'Fiyat performans muhteşem. ₺400-600 arası böyle bir yemek deneyimi başka yerde bulamazsınız.', date: '5 gün önce' },
  { initials: 'FD', name: 'Fatma Demir', rating: 4, text: 'Çocuklarımla geldik. Hepsi beğendi. Özellikle ızgara köfte süper. Park yeri çok rahat, otoyoldan çıkışı kolay.', date: '1 ay önce' },
  { initials: 'EE', name: 'Emre Erdoğan', rating: 5, text: 'Gece geç saatte uğradık, sıcacık ve taze kavurma bulduk. Yol yorgunluğunu anında aldı.', date: '2 gün önce' },
  { initials: 'ZP', name: 'Zeynep Polat', rating: 5, text: 'Atmosferi çok nezih, çalışanlar güleryüzlü. Hem gözünüze hem midenize hitap eden harika bir menü.', date: '1 hafta önce' },
]

export const GALLERY_IMAGES = [
  { src: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80', alt: 'Kavurma' },
  { src: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600&q=80', alt: 'Izgara Et' },
  { src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80', alt: 'Premium Yemek' },
  { src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80', alt: 'Restoran İçi' },
  { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80', alt: 'Özel Tabak' },
  { src: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&q=80', alt: 'Et Çeşitleri' },
]

// Types
export interface MenuItem {
  name: string
  desc: string
  price: string
  tag: string
  badge: string | null
  img: string
}

export interface Review {
  initials: string
  name: string
  rating: number
  text: string
  date: string
}
