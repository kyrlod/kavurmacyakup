import Navbar from '@/components/sections/Navbar'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import MenuSection from '@/components/sections/MenuSection'
import LezzetGalerisi from '@/components/sections/LezzetGalerisi'
import ReviewsSection from '@/components/sections/ReviewsSection'
import ReservationSection from '@/components/sections/ReservationSection'
import LocationSection from '@/components/sections/LocationSection'
import Footer from '@/components/sections/Footer'
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp'
import ScrollProgress from '@/components/ui/ScrollProgress'

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <LezzetGalerisi />
        <ReviewsSection />
        <ReservationSection />
        <LocationSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
