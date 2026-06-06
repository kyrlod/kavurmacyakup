// src/components/sections/LezzetGalerisi.tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState } from 'react';

// Local assets from /public/images

const IMAGES = {
  large:     { src: '/images/kavurma/ezgif-frame-020.png', alt: 'Kavurma tabağı' },
  sideA:     { src: '/images/kavurma/ezgif-frame-010.png', alt: 'Izgara kavurma' },
  sideB:     { src: '/images/fire1.jpg',                   alt: 'Ateş ve duman' },
  tall:      { src: '/images/kavurma/ezgif-frame-025.png', alt: 'Özel sunumu' },
  landscape: { src: '/images/kavurma/ezgif-frame-031.png', alt: 'Tam kavurma sofrası' },
};

const layoutClasses: Record<string, string> = {
  large: 'col-span-2 md:col-span-2 md:row-span-2 h-[220px] md:h-[600px] cursor-pointer rounded-[16px] md:rounded-[28px]',
  tall: 'col-span-2 md:col-span-1 md:row-span-2 h-[220px] md:h-[600px] cursor-pointer rounded-[16px] md:rounded-[28px]',
  landscape: 'col-span-2 md:col-span-4 h-[160px] md:h-[300px] cursor-pointer rounded-[16px] md:rounded-[28px]',
};

export default function LezzetGalerisi() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <section id="lezzet-galerisi" className="bg-[#090402] py-24 overflow-hidden">
        {/* Section Header */}
        <div className="max-w-5xl mx-auto text-center mb-16 px-4">
          {/* Glass‑morphism eyebrow pill */}
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-5 py-1 text-[0.72rem] tracking-[0.3em] uppercase border border-[#e6a84a]/30 bg-black/30 backdrop-blur-md text-[#e6a84a] rounded-full mb-3"
          >
            GÖRSEL ŞÖLEN
          </motion.span>
          {/* Main title */}
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="font-cormorant text-5xl md:text-6xl font-bold"
          >
            <span className="text-[#faf4e6]">Lezzet </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#e6a84a] to-[#c8962b] italic">Galerisi</span>
          </motion.h2>
          {/* Thin solid gold divider */}
          <hr className="border-t border-[#e6a84a] w-24 mx-auto my-4" />
        </div>

        {/* Asymmetrical masonry layout - Mobile first */}
        <div ref={scrollRef} className="relative max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 px-4">
          {/* Large dominant image */}
          <motion.div
            className={`relative ${layoutClasses.large} overflow-hidden border border-[#e6a84a]/20 bg-[#140904]`}
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 200 }}
            onClick={() => setSelectedImage(IMAGES.large.src)}
          >
            <Image src={IMAGES.large.src} alt={IMAGES.large.alt} fill className="object-cover scale-[1.15] origin-center transition-transform duration-500" />
            <div className="absolute inset-0 bg-black/30 hover:bg-black/10 transition-colors" />
          </motion.div>

          {/* Two side cards - side by side on mobile, stack on desktop */}
          <div className="col-span-2 md:col-span-1 md:row-span-2 grid grid-cols-2 md:grid-cols-1 gap-3 md:gap-4">
            {[IMAGES.sideA, IMAGES.sideB].map((img, idx) => (
              <motion.div
                key={idx}
                className="relative rounded-[16px] md:rounded-[28px] overflow-hidden border border-[#e6a84a]/20 bg-[#140904] h-[140px] md:h-[calc(300px-8px)] cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 200 }}
                onClick={() => setSelectedImage(img.src)}
              >
                <Image src={img.src} alt={img.alt} fill className="object-cover scale-[1.15] origin-center transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/30 hover:bg-black/10 transition-colors" />
              </motion.div>
            ))}
          </div>

          <motion.div
            className={`relative ${layoutClasses.tall} overflow-hidden border border-[#e6a84a]/20 bg-[#140904]`}
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 200 }}
            onClick={() => setSelectedImage(IMAGES.tall.src)}
          >
            <Image src={IMAGES.tall.src} alt={IMAGES.tall.alt} fill className="object-cover scale-[1.15] origin-center transition-transform duration-500" />
            <div className="absolute inset-0 bg-black/30 hover:bg-black/10 transition-colors" />
          </motion.div>

          <motion.div
            className={`relative ${layoutClasses.landscape} overflow-hidden border border-[#e6a84a]/20 bg-[#140904]`}
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 200 }}
            onClick={() => setSelectedImage(IMAGES.landscape.src)}
          >
            <Image src={IMAGES.landscape.src} alt={IMAGES.landscape.alt} fill className="object-cover scale-[1.15] origin-center transition-transform duration-500" />
            <div className="absolute inset-0 bg-black/30 hover:bg-black/10 transition-colors" />
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm cursor-pointer"
          >
            <motion.button
              className="absolute top-6 right-6 text-white bg-white/10 hover:bg-[#e6a84a] rounded-full w-12 h-12 flex items-center justify-center transition-colors z-[110]"
              onClick={() => setSelectedImage(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </motion.button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-6xl aspect-[4/3] md:aspect-video rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={selectedImage} alt="Büyük Görsel" fill className="object-contain scale-[1.15] origin-center" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
