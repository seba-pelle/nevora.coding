import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import BackToTop from '@/components/ui/BackToTop'
import HeroSection from '@/components/sections/HeroSection'
import PortfolioSection from '@/components/sections/PortfolioSection'
import ServicesSection from '@/components/sections/ServicesSection'
import ProcessSection from '@/components/sections/ProcessSection'
import AboutSection from '@/components/sections/AboutSection'
import FAQSection from '@/components/sections/FAQSection'
import CTASection from '@/components/sections/CTASection'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <PortfolioSection />
        <ServicesSection />
        <ProcessSection />
        <AboutSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
