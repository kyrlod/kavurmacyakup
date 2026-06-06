'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { RESTAURANT } from '@/lib/data'

export default function ReservationSection() {
  const [formData, setFormData] = useState({ name: '', phone: '', date: '', time: '', guests: '2', notes: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = 'Adınız gerekli'
    if (!formData.phone.trim()) newErrors.phone = 'Telefon gerekli'
    if (!formData.date) newErrors.date = 'Tarih seçin'
    if (!formData.time) newErrors.time = 'Saat seçin'
    return newErrors
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors = validateForm()
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    
    // Success
    setIsSubmitted(true)
    setTimeout(() => {
      alert(`Rezervasyon talebiniz alındı!\n${formData.name}\nTarih: ${formData.date} ${formData.time}\nKonuk: ${formData.guests}\n\nSizi en kısa sürede arayacağız: ${RESTAURANT.phone}`)
      setFormData({ name: '', phone: '', date: '', time: '', guests: '2', notes: '' })
      setIsSubmitted(false)
    }, 500)
  }

  return (
    <section id="reservation" className="py-16 md:py-24 px-4 md:px-8 bg-[var(--dark-4)]">
      <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_1.4fr] gap-8 md:gap-20 items-start">

        {/* Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="block text-[0.65rem] md:text-[0.72rem] tracking-[0.3em] uppercase text-[var(--gold)] mb-2 md:mb-3">Masa Ayırt</span>
          <h2 className="font-serif text-2xl md:text-5xl font-bold text-cream leading-tight mb-3 md:mb-4">
            Yerinizi<br /><em className="italic text-[var(--gold-light)]">Rezerve Edin</em>
          </h2>
          <div className="w-12 md:w-14 h-px mb-4 md:mb-8" style={{ background: 'linear-gradient(90deg, var(--gold), transparent)' }} />
          <p className="text-[0.8rem] md:text-[0.95rem] font-light mb-6 md:mb-8 leading-relaxed" style={{ color: 'rgba(210,195,170,0.65)' }}>
            Özel günleriniz, aile buluşmaları ve grup yemekleriniz için masanızı önceden ayırtın.
          </p>

          {[
            { icon: '📞', title: 'Telefon', content: <a href={`tel:${RESTAURANT.phone.replace(/\s/g,'')}`} className="no-underline hover:text-[var(--gold-light)] transition-colors" style={{ color: 'var(--cream-dark)' }}>{RESTAURANT.phone}</a> },
            { icon: '📍', title: 'Adres', content: <span style={{ color: 'var(--cream-dark)' }}>{RESTAURANT.address}</span> },
            { icon: '🕐', title: 'Çalışma Saatleri', content: <span style={{ color: 'var(--cream-dark)' }}>{RESTAURANT.hours}</span> },
            { icon: '💰', title: 'Fiyat Aralığı', content: <span style={{ color: 'var(--cream-dark)' }}>Kişi başı {RESTAURANT.priceRange}</span> },
          ].map(d => (
            <div key={d.title} className="flex gap-3 md:gap-4 items-start mb-4 md:mb-5">
              <div
                className="w-8 md:w-9 h-8 md:h-9 flex items-center justify-center flex-shrink-0 text-sm md:text-lg"
                style={{ border: '0.5px solid rgba(201,146,42,0.3)', color: 'var(--gold)' }}
              >
                {d.icon}
              </div>
              <div className="min-w-0">
                <strong className="block text-[0.6rem] md:text-[0.72rem] tracking-[0.08em] uppercase mb-0.5" style={{ color: 'var(--gold-light)' }}>
                  {d.title}
                </strong>
                <span className="text-[0.75rem] md:text-[0.88rem] font-light break-words">{d.content}</span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="p-6 md:p-10 rounded-[24px] md:rounded-[32px] shadow-2xl relative overflow-hidden"
          style={{ 
            background: 'linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(201,146,42,0.02) 100%)', 
            border: '1px solid rgba(201,146,42,0.15)',
          }}
        >
          {/* Decorative subtle glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--gold)] opacity-[0.03] blur-[80px] pointer-events-none rounded-full" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-5">
            {[
              { label: 'Adınız', type: 'text', placeholder: 'Ad Soyad', name: 'name' },
              { label: 'Telefon', type: 'tel', placeholder: '05XX XXX XX XX', name: 'phone' },
            ].map(f => (
              <div key={f.label}>
                <label className="block text-[0.6rem] md:text-[0.72rem] tracking-[0.15em] uppercase mb-1.5 md:mb-2" style={{ color: 'var(--gold)' }}>
                  {f.label}
                </label>
                <input
                  type={f.type}
                  name={f.name}
                  placeholder={f.placeholder}
                  value={formData[f.name as keyof typeof formData]}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 md:py-3.5 text-[0.85rem] md:text-[0.95rem] font-light font-sans outline-none transition-colors duration-300 rounded-[14px] ${
                    errors[f.name] ? 'ring-2 ring-red-500/50' : ''
                  }`}
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: errors[f.name] ? '1px solid rgba(255,0,0,0.5)' : '0.5px solid rgba(201,146,42,0.2)',
                    color: 'var(--cream)',
                  }}
                  onFocus={e => (e.target.style.borderColor = 'var(--gold)')}
                  onBlur={e => (e.target.style.borderColor = 'rgba(201,146,42,0.2)')}
                />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-5">
            {[
              { label: 'Tarih', type: 'date', name: 'date' },
              { label: 'Saat', type: 'time', name: 'time' },
            ].map(f => (
              <div key={f.label}>
                <label className="block text-[0.6rem] md:text-[0.72rem] tracking-[0.15em] uppercase mb-1.5 md:mb-2" style={{ color: 'var(--gold)' }}>
                  {f.label}
                </label>
                <input
                  type={f.type}
                  name={f.name}
                  value={formData[f.name as keyof typeof formData]}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 md:py-3.5 text-[0.85rem] md:text-[0.95rem] font-light font-sans outline-none transition-colors duration-300 rounded-[14px] ${
                    errors[f.name] ? 'ring-2 ring-red-500/50' : ''
                  }`}
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: errors[f.name] ? '1px solid rgba(255,0,0,0.5)' : '0.5px solid rgba(201,146,42,0.2)',
                    color: 'var(--cream)',
                  }}
                  onFocus={e => (e.target.style.borderColor = 'var(--gold)')}
                  onBlur={e => (e.target.style.borderColor = errors[f.name] ? 'rgba(255,0,0,0.5)' : 'rgba(201,146,42,0.2)')}
                />
                {errors[f.name] && <span className="text-[0.7rem] text-red-400 mt-1 block">{errors[f.name]}</span>}
              </div>
            ))}
          </div>
          <div className="mb-4 md:mb-5">
            <label className="block text-[0.6rem] md:text-[0.72rem] tracking-[0.15em] uppercase mb-1.5 md:mb-2" style={{ color: 'var(--gold)' }}>
              Kişi Sayısı
            </label>
            <select
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              className="w-full px-4 py-3 md:py-3.5 text-[0.85rem] md:text-[0.95rem] font-light font-sans outline-none cursor-pointer appearance-none transition-colors duration-300 rounded-[14px]"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '0.5px solid rgba(201,146,42,0.2)',
                color: 'var(--cream)',
              }}
            >
              {['2', '3', '4', '5', '6', '7', '8', '10', '12'].map(o => (
                <option key={o} value={o} style={{ background: 'var(--dark-3)' }}>{o} Kişi</option>
              ))}
            </select>
          </div>
          <div className="mb-4 md:mb-6">
            <label className="block text-[0.6rem] md:text-[0.72rem] tracking-[0.15em] uppercase mb-1.5 md:mb-2" style={{ color: 'var(--gold)' }}>
              Notunuz (Opsiyonel)
            </label>
            <textarea
              name="notes"
              placeholder="Özel istek veya notlarınızı yazabilirsiniz..."
              value={formData.notes}
              onChange={handleChange}
              rows={2}
              className="w-full px-4 py-3 md:py-3.5 text-[0.85rem] md:text-[0.95rem] font-light font-sans outline-none resize-vertical rounded-[14px]"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '0.5px solid rgba(201,146,42,0.2)',
                color: 'var(--cream)',
                minHeight: '80px',
              }}
              onFocus={e => (e.target.style.borderColor = 'var(--gold)')}
              onBlur={e => (e.target.style.borderColor = 'rgba(201,146,42,0.2)')}
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={isSubmitted}
            className={`w-full py-3.5 md:py-4 text-[0.8rem] md:text-[0.85rem] font-semibold tracking-widest uppercase border-none cursor-pointer font-sans transition-all duration-300 hover:shadow-[0_4px_20px_rgba(201,146,42,0.4)] hover:-translate-y-0.5 rounded-[16px] ${
              isSubmitted ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            style={{ background: 'linear-gradient(135deg, var(--gold-light) 0%, var(--gold) 100%)', color: 'var(--dark)' }}
          >
            {isSubmitted ? '✓ Gönderiliyor...' : 'Rezervasyon Yap'}
          </button>

          <a
            href={`https://wa.me/${RESTAURANT.whatsapp}?text=Merhaba,%20rezervasyon%20yapmak%20istiyorum.`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 md:mt-4 w-full py-3.5 md:py-4 flex items-center justify-center gap-2 text-[0.8rem] md:text-[0.85rem] font-semibold tracking-widest uppercase no-underline transition-all duration-300 hover:bg-[#25D366] hover:text-white rounded-[16px]"
            style={{ border: '1.5px solid #25D366', color: '#25D366', display: 'flex' }}
          >
            💬 WhatsApp ile Rezervasyon
          </a>
        </motion.div>

      </div>
    </section>
  )
}
