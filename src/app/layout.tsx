import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import '../styles/globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['300', '400', '500'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Kavurmacı Yakup Usta | Ferizli, Sakarya — Otantik Türk Kavurması',
  description: "Ferizli'nin efsanevi kavurma ustası. Adapazarı-Karasu yolu üzerinde, 1954'ten beri aynı lezzet. Rezervasyon: 0537 878 81 87",
  keywords: 'kavurma, restoran, Ferizli, Sakarya, Yakup Usta, et, ızgara, Adapazarı',
  openGraph: {
    title: 'Kavurmacı Yakup Usta — Ferizli',
    description: 'Otoyol üzerindeki en lezzetli adres. 1954\'ten beri geleneksel kavurma sanatı.',
    type: 'website',
    locale: 'tr_TR',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-sans bg-dark text-cream overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
