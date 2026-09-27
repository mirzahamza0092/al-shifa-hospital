import Hero from '@/components/home/Hero'
import AboutSection from '@/components/home/AboutSection'
import WorkingHoursSection from '@/components/home/WorkingHoursSection'
import TeamSection from '@/components/home/TeamSection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <WorkingHoursSection />
      <TeamSection />
    </>
  )
}