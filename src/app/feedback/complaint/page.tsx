import type { Metadata } from 'next'
import AboutHero from '@/components/about/AboutHero'
import ComplaintForm from '@/components/feedback/ComplaintForm'
import ContactInfoCards from '@/components/feedback/ContactInfoCards'
import ScaleOnLarge from '@/components/ui/ScaleOnLarge'

export const metadata: Metadata = {
  title: 'Complaint | Al-Shifa Hospital',
}

export default function ComplaintPage() {
  return (
    <>
      <AboutHero title="Complaint" />
      <section className="bg-white py-10 md:py-16 px-4 sm:px-6 md:px-12">
        <ScaleOnLarge>
          <ComplaintForm />
          <ContactInfoCards />
        </ScaleOnLarge>
      </section>
    </>
  )
}