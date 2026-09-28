import Hero from '@/components/home/Hero'
import AboutSection from '@/components/home/AboutSection'
import WorkingHoursSection from '@/components/home/WorkingHoursSection'
import TeamSection from '@/components/home/TeamSection'
import GallerySection from '@/components/home/GallerySection'
import ServicesSection from '@/components/home/ServicesSection'
import TestimonialSection from '@/components/home/TestimonialSection'
import BlogSection from '@/components/home/BlogSection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <WorkingHoursSection />
      <TeamSection />
      <GallerySection />
      <ServicesSection />
      <TestimonialSection />
      <BlogSection />
    </>
  )
}