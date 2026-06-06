'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { RESTAURANT } from '@/lib/data'

const navLinks = [
  { href: '#about',      label: 'Hakkımızda' },
  { href: '#menu',       label: 'Menü' },
  { href: '#gallery',    label: 'Galeri' },
  { href: '#reviews',    label: 'Yorumlar' },
  { href: '#location',   label: 'Konum' },
  { href: '#reservation',label: 'Rezervasyon' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between transition-all duration-500 ${
          scrolled
            ? 'px-8 py-3 bg-dark/85 backdrop-blur-xl border-b border-gold/20'
            : 'px-8 py-5'
        }`}
      >
        <a
          href="#hero"
          className="font-serif text-xl font-bold text-gold-light tracking-wider"
          style={{ textShadow: '0 0 30px rgba(232,184,75,0.4)' }}
        >
          {RESTAURANT.name}
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 list-none">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-cream-dark text-xs font-normal tracking-widest uppercase hover:text-gold-light transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop: Call & Reservation Buttons */}
        <div className="hidden md:flex gap-3">
          <a
            href={`tel:${RESTAURANT.phone.replace(/\s/g, '')}`}
            className="px-6 py-2.5 text-[0.7rem] font-semibold tracking-wider uppercase border border-[rgba(201,146,42,0.4)] text-cream hover:border-[var(--gold)] hover:bg-[var(--gold)] hover:text-dark transition-all duration-300 whitespace-nowrap rounded-[16px] shadow-sm"
          >
            📞 Ara
          </a>
          <a
            href="#reservation"
            className="px-7 py-2.5 text-[0.7rem] font-semibold tracking-wider uppercase bg-[var(--gold)] text-dark hover:bg-[var(--gold-light)] transition-all duration-300 rounded-[16px] shadow-sm hover:shadow-[0_4px_15px_rgba(201,146,42,0.4)] hover:-translate-y-0.5"
          >
            Rezervasyon
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 cursor-pointer bg-transparent border-none p-1"
          onClick={() => setMobileOpen(true)}
          aria-label="Menüyü aç"
        >
          <span className="block w-6 h-px bg-cream" />
          <span className="block w-6 h-px bg-cream" />
          <span className="block w-6 h-px bg-cream" />
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[999] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-10">
          <button
            className="absolute top-6 right-8 text-3xl text-cream bg-transparent border-none cursor-pointer leading-none"
            onClick={() => setMobileOpen(false)}
          >
            ✕
          </button>
          
          {/* Mobile Menu Links */}
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="font-serif text-3xl font-semibold text-cream hover:text-gold-light transition-colors duration-300 no-underline tracking-wider"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          
        </div>
      )}
    </>
  )
}
