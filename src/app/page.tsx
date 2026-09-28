import Hero from '@/components/home/Hero'
import AboutSection from '@/components/home/AboutSection'
import WorkingHoursSection from '@/components/home/WorkingHoursSection'
import TeamSection from '@/components/home/TeamSection'
import GallerySection from '@/components/home/GallerySection'
import ServicesSection from '@/components/home/ServicesSection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <WorkingHoursSection />
      <TeamSection />
      <GallerySection />
      <ServicesSection />
    </>
  )
}