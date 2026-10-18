import type { Metadata } from 'next'
import AboutHero from '@/components/about/AboutHero'
import PatientFeedbackForm from '@/components/feedback/PatientFeedbackForm'
import ContactInfoCards from '@/components/feedback/ContactInfoCards'
import ScaleOnLarge from '@/components/ui/ScaleOnLarge'

export const metadata: Metadata = {
  title: 'Suggestion | Al-Shifa Hospital',
}

export default function SuggestionPage() {
  return (
    <>
      <AboutHero title="Suggestion" />
      <section className="bg-white py-10 md:py-16 px-4 sm:px-6 md:px-12">
        <ScaleOnLarge>
          <PatientFeedbackForm kind="suggestion" />
          <ContactInfoCards />
        </ScaleOnLarge>
      </section>
    </>
  )
}