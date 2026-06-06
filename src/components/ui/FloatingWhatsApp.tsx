'use client'

import { RESTAURANT } from '@/lib/data'
import { MapPin, Phone, MessageCircle } from 'lucide-react'

export default function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/${RESTAURANT.whatsapp}?text=Merhaba%2C%20bilgi%20almak%20istiyorum.`
  const mapsUrl = 'https://maps.app.goo.gl/5Fp4L99ubgDxBPux6'
  const phoneUrl = `tel:${RESTAURANT.phone.replace(/\s+/g, '')}`

  return (
    <div className="fixed bottom-6 right-6 z-[500] flex flex-col gap-3 md:gap-4 items-center">
      {/* Location Button */}
      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Haritada Gör"
        className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center no-underline transition-all duration-300 hover:scale-110 hover:-translate-y-1 text-white"
        style={{
          background: '#EA4335',
          boxShadow: '0 4px 15px rgba(234, 67, 53, 0.35)',
        }}
      >
        <MapPin className="w-5 h-5 md:w-6 md:h-6" />
      </a>

      {/* Phone Button */}
      <a
        href={phoneUrl}
        aria-label="Telefonla Ara"
        className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center no-underline transition-all duration-300 hover:scale-110 hover:-translate-y-1 text-black"
        style={{
          background: 'var(--gold)',
          boxShadow: '0 4px 15px rgba(201, 146, 42, 0.35)',
        }}
      >
        <Phone className="w-5 h-5 md:w-6 md:h-6" />
      </a>

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp ile İletişim"
        className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center no-underline transition-all duration-300 hover:scale-110 hover:-translate-y-1 text-white"
        style={{
          background: '#25D366',
          boxShadow: '0 4px 20px rgba(37,211,102,0.35)',
          animation: 'floatBounce 3s ease-in-out infinite',
        }}
      >
        <MessageCircle className="w-6 h-6 md:w-7 md:h-7" fill="currentColor" />
      </a>
    </div>
  )
}
