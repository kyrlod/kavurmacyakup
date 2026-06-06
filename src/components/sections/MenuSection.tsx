'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { MENU_ITEMS, MENU_CATEGORIES } from '@/lib/data'

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState('kavurma')
  const items = MENU_ITEMS[activeTab] || []

  return (
    <section id="menu" className="py-24 bg-[var(--dark-2)] relative overflow-hidden">
      {/* Decorative Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[var(--gold)] opacity-[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#F5A623] opacity-[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="block text-[0.75rem] tracking-[0.35em] uppercase text-[var(--gold)] mb-4">
            Ne Yesek
          </span>
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-cream leading-tight">
            Premium <em className="italic text-[var(--gold-light)]">Menü</em>
          </h2>
          <div className="w-20 h-px mt-6 mx-auto" style={{ background: 'linear-gradient(90deg, transparent, var(--gold), transparent)' }} />
        </motion.div>

        {/* Tabs - Modern & Glowing - STICKY on scroll */}
        <div className="sticky top-16 z-40 flex flex-wrap justify-center mb-8 md:mb-14 pb-2 gap-2 md:gap-4 bg-[var(--dark-2)]">
          {MENU_CATEGORIES.map(cat => {
            const isActive = activeTab === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`relative px-5 py-2.5 md:px-8 md:py-3.5 text-[0.7rem] md:text-[0.8rem] tracking-[0.15em] md:tracking-[0.2em] uppercase whitespace-nowrap border border-transparent rounded-full font-sans transition-all duration-500 overflow-hidden group ${
                  isActive
                    ? 'text-dark font-bold'
                    : 'text-[var(--muted)] hover:text-cream hover:border-[rgba(201,146,42,0.3)]'
                }`}
              >
                {/* Active Tab Background (Gold) */}
                <div 
                  className={`absolute inset-0 transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}
                  style={{ background: 'linear-gradient(135deg, var(--gold-light) 0%, var(--gold) 100%)' }}
                />
                
                {/* Active Tab Glow */}
                {isActive && (
                  <div className="absolute inset-0 bg-white opacity-20 blur-md rounded-full pointer-events-none" />
                )}

                <span className="relative z-10">{cat.label}</span>
              </button>
            )
          })}
        </div>

        {/* Menu Grid - Responsive */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8"
          >
            {items.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative rounded-[16px] md:rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1.5 active:scale-95 cursor-pointer flex flex-col h-full"
                style={{
                  background: 'linear-gradient(180deg, rgba(42,31,20,0.4) 0%, rgba(20,15,10,0.8) 100%)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
                  border: '1px solid rgba(201,146,42,0.1)',
                }}
              >
                {/* Hover Border Glow */}
                <div className="absolute inset-0 border border-[var(--gold)] rounded-[16px] md:rounded-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none z-20" />
                
                {/* Image Wrapper */}
                <div className="relative w-full aspect-[4/3] sm:aspect-[4/3] md:aspect-[3/2] overflow-hidden bg-[var(--dark-4)]">
                  {item.badge && (
                    <div
                      className="absolute top-2 right-2 md:top-3 md:right-3 z-20 px-2 md:px-3 py-1 text-[0.55rem] md:text-[0.65rem] font-bold tracking-widest uppercase rounded shadow-lg"
                      style={{ 
                        background: 'linear-gradient(135deg, var(--gold-light) 0%, var(--gold) 100%)', 
                        color: 'var(--dark)' 
                      }}
                    >
                      {item.badge}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                    style={{ filter: 'saturate(0.9)' }}
                  />
                  {/* Fade from image to content */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24 bg-gradient-to-t from-[rgba(20,15,10,0.9)] to-transparent z-10" />
                </div>

                {/* Card Content */}
                <div className="p-3 md:p-6 pt-2 md:pt-4 flex-grow flex flex-col relative z-20">
                  <div className="font-serif text-[1.05rem] sm:text-[1.1rem] md:text-2xl font-semibold text-cream mb-1 md:mb-2 group-hover:text-[var(--gold-light)] transition-colors duration-300 line-clamp-2 leading-tight">
                    {item.name}
                  </div>
                  <div
                    className="text-[0.7rem] md:text-[0.85rem] font-light mb-3 md:mb-5 leading-snug md:leading-relaxed flex-grow line-clamp-2 md:line-clamp-3"
                    style={{ color: 'rgba(210,195,170,0.7)' }}
                  >
                    {item.desc}
                  </div>
                  <div className="flex items-center justify-between pt-2 md:pt-4 border-t border-[rgba(201,146,42,0.15)] mt-auto">
                    <span className="font-serif text-[1.1rem] md:text-[1.4rem] font-bold" style={{ color: 'var(--gold-light)' }}>
                      {item.price}
                    </span>
                    {item.tag && (
                      <span
                        className="text-[0.55rem] md:text-[0.7rem] tracking-[0.1em] md:tracking-[0.15em] uppercase font-medium px-2 md:px-3 py-1 md:py-1.5 rounded-full whitespace-nowrap hidden sm:block"
                        style={{ 
                          color: 'var(--gold)', 
                          background: 'rgba(201,146,42,0.1)' 
                        }}
                      >
                        {item.tag}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  )
}
