import AboutHero from '@/components/about/AboutHero'
import AboutSection from '@/components/home/AboutSection'
import StatsSection from '@/components/about/StatsSection'
import ManagementSection from '@/components/about/ManagementSection'

const ABOUT_IMAGES: [string, string, string] = [
  '/images/logoImage.png',
  '/images/logoImage.png',
  '/images/logoImage.png',
]

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutSection images={ABOUT_IMAGES} />
      <StatsSection />
      <ManagementSection />
    </>
  )
}