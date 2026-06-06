'use client';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { GALLERY_IMAGES } from '@/lib/data';

export default function GallerySection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollStep = () => window.innerWidth * 0.8;
  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -scrollStep(), behavior: 'smooth' });
  };
  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: scrollStep(), behavior: 'smooth' });
  };

  return (
    <section id="gallery" className="py-24 px-4 sm:px-6 md:px-8 bg-[var(--dark-2)]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="block text-[0.72rem] tracking-[0.3em] uppercase text-[var(--gold)] mb-3">
            Görsel Şölen
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream">
            Lezzetin <em className="italic text-[var(--gold-light)]">Galerisi</em>
          </h2>
          <div className="w-14 h-px mt-6 mx-auto" style={{ background: 'linear-gradient(90deg, var(--gold), transparent)' }} />
        </motion.div>

        {/* Slider with horizontal scroll */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-[var(--gold)] text-dark flex items-center justify-center shadow-lg hover:bg-[var(--gold-light)] transition-colors"
            aria-label="Previous images"
          >
            ←
          </button>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-[var(--gold)] text-dark flex items-center justify-center shadow-lg hover:bg-[var(--gold-light)] transition-colors"
            aria-label="Next images"
          >
            →
          </button>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 py-4"
          >
            {GALLERY_IMAGES.map((img, i) => (
              <div
                key={i}
                
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ filter: 'brightness(0.85) saturate(0.9)' }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-3xl text-cream">+</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
