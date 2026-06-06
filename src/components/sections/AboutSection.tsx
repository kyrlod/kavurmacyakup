// AboutSection with image hidden on small screens
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const features = [
  { icon: '🔥', text: 'Geleneksel Kavurma Sanatı' },
  { icon: '🥩', text: 'Günlük Taze Malzeme' },
  { icon: '🚗', text: 'Otoyol Üzeri Konum' },
  { icon: '📦', text: 'Paket Servis' },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 px-4 md:px-8 bg-[var(--dark-2)]">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 md:gap-20 items-center">
        {/* Image – hidden on mobile */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative hidden md:block"
        >
          {/* Decorative frame */}
          <div className="absolute -top-6 -left-6 right-6 bottom-6 border border-[rgba(201,146,42,0.25)] pointer-events-none" />

          <Image
            src="https://images.unsplash.com/photo-1558030006-450675393462?w=800&q=80"
            alt="Kavurmacı Yakup Usta Restoran"
            width={600}
            height={750}
            className="w-full object-cover rounded-lg"
            style={{ aspectRatio: '4/5', filter: 'brightness(0.85) saturate(0.9)' }}
          />

          {/* Badge */}
          <div
            className="absolute -bottom-8 -right-8 w-24 md:w-28 h-24 md:h-28 rounded-full flex flex-col items-center justify-center text-center shadow-lg"
            style={{ background: 'var(--gold)' }}
          >
            <span className="font-serif text-2xl md:text-3xl font-bold text-dark leading-none">70+</span>
            <span className="text-[0.5rem] md:text-[0.6rem] font-medium tracking-wide uppercase text-[var(--dark-4)] mt-1">
              Yıllık<br />Lezzet
            </span>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <span className="block text-[0.65rem] md:text-[0.72rem] tracking-[0.3em] uppercase text-[var(--gold)] mb-2 md:mb-4">Hikayemiz</span>
          <h2 className="font-serif text-2xl md:text-5xl font-bold text-cream leading-tight mb-3 md:mb-6">
            Ateşin<br />
            <em className="italic text-[var(--gold-light)]">Ustasıyız</em>
          </h2>
          <div className="w-12 md:w-14 h-px mb-4 md:mb-8" style={{ background: 'linear-gradient(90deg, var(--gold), transparent)' }} />

          <p className="text-[0.8rem] md:text-base font-light mb-3 md:mb-5 leading-relaxed" style={{ color: 'rgba(210,195,170,0.75)' }}>
            Kavurmacı Yakup Usta, 1954 yılından bu yana Ferizli'nun efsanevi lezzet adresi olarak yolcuları ağırlamaktadır. Adapazarı–Karasu karayolu üzerindeki konumuyla hem yerel halkın hem de yolcuların vazgeçilmezi olmuştur.
          </p>
          <p className="text-[0.8rem] md:text-base font-light mb-6 md:mb-10 leading-relaxed" style={{ color: 'rgba(210,195,170,0.75)' }}>
            Kuşaktan kuşağa aktarılan geleneksel kavurma tarifleri, taze malzemeler ve odun ateşinin büyüsüyle birleşerek her tabakta tarifsiz bir tat yaratıyoruz.
          </p>

          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {features.map(f => (
              <div key={f.text} className="flex gap-2 md:gap-3 items-start">
                <div
                  className="w-7 md:w-8 h-7 md:h-8 flex items-center justify-center flex-shrink-0 text-xs md:text-sm rounded"
                  style={{
                    background: 'rgba(201,146,42,0.1)',
                    border: '0.5px solid rgba(201,146,42,0.25)',
                    color: 'var(--gold)',
                  }}
                >
                  {f.icon}
                </div>
                <span className="text-[0.75rem] md:text-[0.85rem] text-[var(--cream-dark)] font-normal">{f.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
