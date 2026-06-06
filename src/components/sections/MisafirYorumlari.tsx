'use client';
import { motion } from 'framer-motion';
import { REVIEWS } from '@/lib/data';

export default function MisafirYorumlari() {
  return (
    <section className="bg-[#090402] py-20" id="misafir-yorumlari">
      {/* Header */}
      <div className="text-center mb-10 px-4">
        <span className="inline-block px-4 py-1 text-[0.7rem] uppercase tracking-[0.3em] text-[#E6A84A] border border-[rgba(230,168,74,0.12)] rounded-full bg-[#140904]">
          MİSAFİR YORUMLARI
        </span>
        <h2 className="mt-4 font-cormorant text-4xl md:text-5xl font-bold text-[#FAF4E6]">
          Onlar <span className="italic bg-clip-text text-transparent bg-gradient-to-r from-[#E6A84A] to-[#C8962B]">Anlatsın</span>
        </h2>
        <div className="mx-auto w-10 h-px mt-4 bg-gradient-to-r from-[#E6A84A] to-transparent" />
      </div>

      {/* Mobile-first Horizontal Scroll Container */}
      <div className="w-full">
        <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 px-4 pb-8">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="snap-center shrink-0 w-[85vw] max-w-[320px] p-6 rounded-[24px] border border-[rgba(230,168,74,0.15)] bg-[#140904] relative flex flex-col justify-between shadow-2xl"
            >
              <div>
                {/* Header (Avatar & Info) */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 shrink-0 rounded-full flex items-center justify-center font-cormorant text-[1.1rem] font-bold text-[#090402] bg-gradient-to-br from-[#E6A84A] to-[#C8962B]">
                    {review.initials}
                  </div>
                  <div>
                    <h3 className="font-cormorant text-[1.1rem] font-semibold text-[#FAF4E6] leading-tight">{review.name}</h3>
                    <p className="text-[0.75rem] text-[#E6A84A] opacity-80">{review.date}</p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-[2px] mb-3 text-[#E6A84A] text-sm">
                  {'★'.repeat(review.rating)}
                </div>

                {/* Body text */}
                <p className="text-[0.9rem] font-light italic text-[#FAF4E6] leading-relaxed opacity-90">
                  "{review.text}"
                </p>
              </div>

              {/* Bottom Badge */}
              <div className="mt-6 flex justify-end">
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[rgba(230,168,74,0.1)] border border-[rgba(230,168,74,0.2)]">
                  <span className="text-[0.65rem] font-bold tracking-wider text-[#E6A84A]">GOOGLE</span>
                  <span className="text-[0.65rem] text-[#FAF4E6]">{review.rating}/5</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}