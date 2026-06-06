'use client'

import { RESTAURANT } from '@/lib/data'
import { Instagram, Facebook, MessageCircle } from 'lucide-react'

const footerLinks = {
  menu: ['Kavurma', 'Izgara', 'Kahvaltı', 'Tatlılar', 'İçecekler'],
  quickLinks: [
    { label: 'Hakkımızda', href: '#about' },
    { label: 'Galeri', href: '#gallery' },
    { label: 'Yorumlar', href: '#reviews' },
    { label: 'Rezervasyon', href: '#reservation' },
    { label: 'Konum', href: '#location' },
  ],
  hours: [
    { day: 'Pzt – Cum', time: '10:00 – 23:00' },
    { day: 'Cumartesi', time: '10:00 – 23:00' },
    { day: 'Pazar',     time: '10:00 – 23:00' },
  ],
}

export default function Footer() {
  return (
    <footer
      className="px-8 pt-16 pb-8"
      style={{ background: 'var(--dark)', borderTop: '0.5px solid rgba(201,146,42,0.15)' }}
    >
      <div className="max-w-5xl mx-auto">

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 pb-12" style={{ borderBottom: '0.5px solid rgba(201,146,42,0.1)' }}>

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div
              className="font-serif text-[1.4rem] font-bold mb-3"
              style={{ color: 'var(--gold-light)', textShadow: '0 0 20px rgba(232,184,75,0.25)' }}
            >
              {RESTAURANT.name}
            </div>
            <p className="text-[0.82rem] font-light leading-relaxed mb-6" style={{ color: 'var(--muted)' }}>
              1954&apos;ten bu yana Ferizli&apos;nin efsanevi lezzet adresi. Geleneksel kavurma sanatını yaşatıyoruz.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <Instagram size={18} />, href: RESTAURANT.social.instagram, label: 'Instagram' },
                { icon: <Facebook size={18} />, href: RESTAURANT.social.facebook, label: 'Facebook' },
                { icon: <MessageCircle size={18} />, href: `https://wa.me/${RESTAURANT.whatsapp}`, label: 'WhatsApp' },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 flex items-center justify-center rounded-full no-underline transition-all duration-300 bg-[rgba(201,146,42,0.05)]"
                  style={{ border: '0.5px solid rgba(201,146,42,0.2)', color: 'var(--muted)' }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--gold)'
                    e.currentTarget.style.color = 'var(--gold-light)'
                    e.currentTarget.style.backgroundColor = 'rgba(201,146,42,0.1)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(201,146,42,0.2)'
                    e.currentTarget.style.color = 'var(--muted)'
                    e.currentTarget.style.backgroundColor = 'rgba(201,146,42,0.05)'
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Menu */}
          <div>
            <div className="text-[0.72rem] tracking-[0.2em] uppercase mb-5" style={{ color: 'var(--gold)' }}>Menü</div>
            <ul className="flex flex-col gap-2.5 list-none">
              {footerLinks.menu.map(item => (
                <li key={item}>
                  <a
                    href="#menu"
                    className="text-[0.88rem] font-light no-underline transition-colors duration-300"
                    style={{ color: 'var(--muted)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--cream)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <div className="text-[0.72rem] tracking-[0.2em] uppercase mb-5" style={{ color: 'var(--gold)' }}>Hızlı Erişim</div>
            <ul className="flex flex-col gap-2.5 list-none">
              {footerLinks.quickLinks.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[0.88rem] font-light no-underline transition-colors duration-300"
                    style={{ color: 'var(--muted)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--cream)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours + Contact - Side by side on mobile */}
          <div className="col-span-2 md:col-span-1 grid grid-cols-2 md:grid-cols-1 gap-6">
            <div>
              <div className="text-[0.72rem] tracking-[0.2em] uppercase mb-5" style={{ color: 'var(--gold)' }}>Çalışma Saatleri</div>
              <div className="flex flex-col gap-2">
                {footerLinks.hours.map(h => (
                  <div key={h.day} className="flex flex-col lg:flex-row lg:justify-between text-[0.75rem] md:text-[0.85rem]">
                    <span className="font-light" style={{ color: 'var(--muted)' }}>{h.day}</span>
                    <span style={{ color: 'var(--cream-dark)' }}>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="text-[0.72rem] tracking-[0.2em] uppercase mb-3" style={{ color: 'var(--gold)' }}>İletişim</div>
              <a
                href={`tel:${RESTAURANT.phone.replace(/\s/g,'')}`}
                className="block text-[0.75rem] md:text-[0.88rem] no-underline mb-1.5"
                style={{ color: 'var(--muted)' }}
              >
                📞 {RESTAURANT.phone}
              </a>
              <a
                href={`https://wa.me/${RESTAURANT.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[0.75rem] md:text-[0.82rem] no-underline"
                style={{ color: '#25D366' }}
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-wrap justify-between items-center gap-4 mt-6">
          <span className="text-[0.78rem]" style={{ color: 'var(--muted)' }}>
            © 2025 {RESTAURANT.name}. Tüm hakları saklıdır.
          </span>
          <span className="text-[0.78rem]" style={{ color: 'var(--muted)' }}>
            {RESTAURANT.address}
          </span>
        </div>
      </div>
    </footer>
  )
}
