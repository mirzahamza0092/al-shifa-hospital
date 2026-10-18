import type { Metadata } from 'next'
import AboutHero from '@/components/about/AboutHero'
import PatientFeedbackForm from '@/components/feedback/PatientFeedbackForm'
import ContactInfoCards from '@/components/feedback/ContactInfoCards'
import ScaleOnLarge from '@/components/ui/ScaleOnLarge'

export const metadata: Metadata = {
  title: 'Compliment | Al-Shifa Hospital',
}

export default function ComplimentPage() {
  return (
    <>
      <AboutHero title="Compliment" />
      <section className="bg-white py-10 md:py-16 px-4 sm:px-6 md:px-12">
        <ScaleOnLarge>
          <PatientFeedbackForm kind="compliment" />
          <ContactInfoCards />
        </ScaleOnLarge>
      </section>
    </>
  )
}