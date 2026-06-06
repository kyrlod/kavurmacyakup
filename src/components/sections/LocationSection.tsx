'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { RESTAURANT } from '@/lib/data'

export default function LocationSection() {
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    const checkStatus = () => {
      const hour = new Date().getHours()
      setIsOpen(hour >= 10 && hour < 23)
    }
    checkStatus()
    const interval = setInterval(checkStatus, 60000)
    return () => clearInterval(interval)
  }, [])
  return (
    <section id="location" className="py-16 md:py-24 px-4 md:px-8 bg-[var(--dark-2)]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-12"
        >
          <span className="block text-[0.7rem] md:text-[0.72rem] tracking-[0.3em] uppercase text-[var(--gold)] mb-3">Bizi Bulun</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-cream">Neredeyiz?</h2>
          <div className="w-12 md:w-14 h-px mt-4 md:mt-6 mx-auto" style={{ background: 'linear-gradient(90deg, var(--gold), transparent)' }} />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <iframe
              src={RESTAURANT.mapsEmbed}
              className="w-full rounded-[24px] shadow-2xl"
              style={{
                aspectRatio: '4/3',
                border: '1px solid rgba(201,146,42,0.15)',
                filter: 'grayscale(0.5) brightness(0.85) invert(0.9) hue-rotate(180deg)',
                display: 'block',
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4 md:gap-6"
          >
            <div
              className={`inline-flex items-center gap-2 px-3 py-1.5 text-[0.7rem] md:text-[0.75rem] font-medium tracking-wider uppercase rounded-full transition-colors duration-500 ${
                isOpen
                  ? 'bg-green-500/10 border border-green-500/30 text-green-400'
                  : 'bg-red-500/10 border border-red-500/30 text-red-400'
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${isOpen ? 'bg-green-400' : 'bg-red-400'}`}
                style={{ animation: 'pulse 2s infinite' }}
              />
              {isOpen ? 'Şu An Açık — 23:00\'a Kadar' : 'Şu An Kapalı — 10:00\'da Açılır'}
            </div>

            {[
              { icon: '📍', title: 'Adres', content: RESTAURANT.address },
              { icon: '📞', title: 'Telefon', content: RESTAURANT.phone },
              { icon: '🕐', title: 'Çalışma Saatleri', content: RESTAURANT.hours },
              { icon: '🛣️', title: 'Otoyol Konumu', content: 'Adapazarı–Karasu karayolu üzeri. Kolayca erişilebilir, geniş park alanı.' },
            ].map(d => (
              <div key={d.title} className="flex gap-3 md:gap-4 items-start">
                <div
                  className="w-8 md:w-10 h-8 md:h-10 flex items-center justify-center flex-shrink-0 text-base md:text-lg"
                  style={{
                    background: 'rgba(201,146,42,0.1)',
                    border: '0.5px solid rgba(201,146,42,0.2)',
                    color: 'var(--gold)',
                  }}
                >
                  {d.icon}
                </div>
                <div className="min-w-0">
                  <div className="text-[0.65rem] md:text-[0.72rem] tracking-[0.15em] uppercase mb-0.5 md:mb-1" style={{ color: 'var(--gold)' }}>
                    {d.title}
                  </div>
                  <div className="text-[0.85rem] md:text-[0.92rem] font-light break-words" style={{ color: 'var(--cream-dark)' }}>
                    {d.content}
                  </div>
                </div>
              </div>
            ))}

            <a
              href={RESTAURANT.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 md:py-4 text-[0.8rem] md:text-[0.85rem] font-semibold tracking-widest uppercase no-underline transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(201,146,42,0.4)] mt-3 md:mt-5 rounded-[16px]"
              style={{ background: 'var(--gold)', color: 'var(--dark)' }}
            >
              📍 Yol Tarifi Al
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
