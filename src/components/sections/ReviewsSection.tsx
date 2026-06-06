'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { REVIEWS, RESTAURANT } from '@/lib/data';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function ReviewsSection() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % REVIEWS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  const currentReview = REVIEWS[index];

  return (
    <section id="reviews" className="py-24 md:py-32 bg-[#090402] relative overflow-hidden flex flex-col items-center justify-center min-h-[80vh]">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-[radial-gradient(circle,rgba(200,150,43,0.15)_0%,transparent_70%)] rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 text-[0.65rem] uppercase tracking-[0.4em] text-[#e6a84a] border border-[#e6a84a]/20 rounded-full mb-6"
          >
            MİSAFİR DENEYİMLERİ
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-bold text-[#faf4e6]"
          >
            Misafirlerimizin <span className="italic text-[#c8962b] font-light">Gözünden</span>
          </motion.h2>
        </div>

        {/* Review Carousel Container */}
        <div 
          className="relative w-full max-w-3xl min-h-[500px] md:min-h-[320px] flex flex-col items-center justify-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full absolute inset-0 flex items-center justify-center px-2 md:px-12"
            >
              {/* Review Card/Box */}
              <div className="bg-[#140904] border border-[#e6a84a]/20 rounded-3xl p-8 md:p-12 shadow-2xl relative w-full text-center md:text-left flex flex-col md:flex-row gap-8 items-center h-full max-h-[480px] md:max-h-[300px] overflow-y-auto scrollbar-hide">
                <Quote className="absolute top-6 right-8 w-12 h-12 md:w-16 md:h-16 text-[#e6a84a]/10" />
                
                <div className="flex flex-col items-center md:items-start shrink-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#1a0f0a] to-[#0a0604] border border-[#e6a84a]/30 flex items-center justify-center text-[#e6a84a] font-serif text-2xl md:text-3xl shadow-lg mb-4">
                    {currentReview.initials}
                  </div>
                  <h4 className="text-[0.95rem] md:text-[1.05rem] font-semibold text-white tracking-widest uppercase">{currentReview.name}</h4>
                  <p className="text-xs text-[#e6a84a]/60 mt-1">{currentReview.date}</p>
                  <div className="flex gap-1 mt-3">
                    {[...Array(currentReview.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 md:w-4 md:h-4 fill-[#e6a84a] text-[#e6a84a]" />
                    ))}
                  </div>
                </div>

                <div className="w-full h-px md:w-px md:h-32 bg-[#e6a84a]/10 block" />

                <div className="flex-1">
                  <p className="font-serif italic text-lg md:text-2xl text-[#faf4e6]/90 leading-relaxed md:leading-relaxed">
                    "{currentReview.text}"
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between w-full absolute top-1/2 -translate-y-1/2 pointer-events-none px-0 md:-px-8 z-20">
            <button
              onClick={handlePrev}
              className="pointer-events-auto w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border border-white/10 text-white/60 hover:text-[#e6a84a] hover:border-[#e6a84a]/60 hover:bg-[#e6a84a]/10 transition-all bg-[#090402]/80 backdrop-blur-sm -translate-x-2 md:-translate-x-12 shadow-lg"
              aria-label="Önceki Yorum"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2} />
            </button>
            <button
              onClick={handleNext}
              className="pointer-events-auto w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border border-white/10 text-white/60 hover:text-[#e6a84a] hover:border-[#e6a84a]/60 hover:bg-[#e6a84a]/10 transition-all bg-[#090402]/80 backdrop-blur-sm translate-x-2 md:translate-x-12 shadow-lg"
              aria-label="Sonraki Yorum"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2} />
            </button>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex gap-3 mt-12 md:mt-12 z-20">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              aria-label={`Yoruma git ${i + 1}`}
              className={`transition-all duration-500 rounded-full ${
                i === index ? 'w-8 md:w-10 h-[3px] md:h-[4px] bg-[#e6a84a] shadow-[0_0_10px_rgba(230,168,74,0.5)]' : 'w-3 h-[3px] md:h-[4px] bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href={RESTAURANT.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3.5 bg-transparent border border-[#e6a84a]/40 text-[#e6a84a] hover:bg-[#e6a84a] hover:text-[#090402] transition-all duration-300 uppercase tracking-[0.2em] text-[0.75rem] font-medium rounded-lg"
          >
            Google'da İncele
          </a>
        </div>
      </div>
    </section>
  );
}
