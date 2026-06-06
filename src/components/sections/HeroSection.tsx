'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { RESTAURANT } from '@/lib/data'

export default function HeroSection() {
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    const checkStatus = () => {
      const hour = new Date().getHours()
      // Open between 10:00 and 22:59
      setIsOpen(hour >= 10 && hour < 23)
    }
    checkStatus()
    const interval = setInterval(checkStatus, 60000)
    return () => clearInterval(interval)
  }, [])
  return (
    <section id="hero" className="relative h-[80vh] md:h-screen bg-black overflow-hidden flex flex-col justify-center w-full">
      
      {/* Static Background Image with reduced darkening and scale to crop ezgif watermark */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center scale-110 origin-center"
        style={{
          backgroundImage: 'url("/images/kavurma/ezgif-frame-031.png")',
          filter: 'brightness(0.65) saturate(1.05)',
        }}
      />

      {/* Overlays (Reduced opacity for brighter image) */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% 70%, rgba(92,61,30,0.2) 0%, transparent 70%),
            radial-gradient(ellipse 50% 40% at 30% 80%, rgba(201,146,42,0.1) 0%, transparent 60%),
            linear-gradient(180deg, rgba(10,7,5,0.15) 0%, rgba(10,7,5,0.4) 50%, rgba(10,7,5,0.85) 100%)
          `,
        }}
      />

      {/* Content */}
      <div className="relative z-[2] text-center px-4 max-w-3xl mx-auto w-full pt-20 md:pt-10 flex flex-col items-center justify-center h-full">
        {/* Open Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="mb-5 md:mb-6 mt-6 md:mt-0"
        >
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 text-[0.7rem] md:text-[0.75rem] font-medium tracking-wider uppercase rounded-full backdrop-blur-md transition-colors duration-500 shadow-lg ${
              isOpen
                ? 'bg-green-500/10 border border-green-500/30 text-green-400'
                : 'bg-red-500/10 border border-red-500/30 text-red-400'
            }`}
          >
            <span
              className={`w-2 h-2 rounded-full ${isOpen ? 'bg-green-400' : 'bg-red-400'}`}
              style={{ animation: 'pulse 2s infinite' }}
            />
            {isOpen ? 'Şu An Açık — 23:00\'a Kadar' : 'Şu An Kapalı — 10:00\'da Açılır'}
          </div>
        </motion.div>

        {/* Eyebrow - Hidden on mobile */}
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          className="hidden md:block text-[0.72rem] tracking-[0.32em] uppercase text-[var(--gold)] mb-4"
        >
          — Ferizli · Sakarya · {RESTAURANT.founded}&apos;ten Beri —
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          className="font-serif font-bold leading-[1.05] text-cream mb-2 md:mb-3 drop-shadow-lg text-[3.2rem] sm:text-[4rem] md:text-[6.5rem]"
        >
          Kavurmacı<br />
          <span className="italic text-[var(--gold-light)] drop-shadow-md">Yakup Usta</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="font-serif italic text-cream-dark mb-8 md:mb-8 drop-shadow-sm text-[1.2rem] md:text-[1.6rem]"
        >
          {RESTAURANT.tagline}
        </motion.p>

        {/* Long Description - Hidden on mobile */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
          className="hidden md:block text-[0.95rem] font-light text-[rgba(210,195,170,0.85)] max-w-md mx-auto mb-12 tracking-wide drop-shadow-sm"
        >
          Adapazarı–Karasu yolunun üzerinde, geleneksel kavurma sanatını yaşatan bir lezzet yolculuğuna davet ediyoruz.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: 'easeOut' }}
          className="flex gap-3 md:gap-4 justify-center flex-wrap"
        >
          <a
            href="#menu"
            className="px-7 py-2.5 md:px-9 md:py-3.5 bg-[var(--gold)] text-dark text-[0.8rem] md:text-[0.85rem] font-semibold tracking-wider uppercase hover:bg-[var(--gold-light)] hover:shadow-[0_4px_20px_rgba(201,146,42,0.4)] hover:-translate-y-0.5 active:scale-95 transition-all duration-300 no-underline shadow-lg rounded-[16px]"
          >
            Menüyü Gör
          </a>
          <a
            href="#reservation"
            className="hidden md:inline-flex px-7 py-2.5 md:px-9 md:py-3.5 bg-black/40 backdrop-blur-sm border border-[rgba(201,146,42,0.5)] text-cream text-[0.8rem] md:text-[0.85rem] font-semibold tracking-wider uppercase hover:border-[var(--gold)] hover:bg-black/60 hover:-translate-y-0.5 active:scale-95 transition-all duration-300 no-underline shadow-lg rounded-[16px]"
          >
            Rezervasyon
          </a>
          <a
            href={RESTAURANT.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-2.5 md:px-9 md:py-3.5 bg-black/40 backdrop-blur-sm border border-[rgba(201,146,42,0.5)] text-cream text-[0.8rem] md:text-[0.85rem] font-semibold tracking-wider uppercase hover:border-[var(--gold)] hover:bg-black/60 hover:-translate-y-0.5 active:scale-95 transition-all duration-300 no-underline shadow-lg rounded-[16px]"
          >
            Yol Tarifi
          </a>
        </motion.div>
      </div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-0 right-0 z-[2] hidden md:flex justify-center gap-16 flex-wrap px-4"
      >
        {[
          { num: '816', label: 'Google Yorumu' },
          { num: '4.4★', label: 'Ortalama Puan' },
          { num: '23:00', label: 'Kapanış Saati' },
        ].map(stat => (
          <div key={stat.label} className="text-center drop-shadow-md">
            <span className="block font-serif text-[2rem] font-semibold text-[var(--gold-light)]">{stat.num}</span>
            <span className="text-[0.72rem] tracking-[0.18em] uppercase text-white/70">{stat.label}</span>
          </div>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-2"
      >
        <span className="text-[0.65rem] tracking-[0.2em] uppercase text-white/60">Keşfet</span>
        <div
          className="w-px h-10"
          style={{ background: 'linear-gradient(var(--gold), transparent)', animation: 'scrollPulse 2s infinite' }}
        />
      </motion.div>
    </section>
  )
}
