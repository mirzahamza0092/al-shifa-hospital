import AboutHero from '@/components/about/AboutHero'
import AppointmentList from '@/components/patient/AppointmentList'

export default function AppointmentPage() {
  return (
    <>
      <AboutHero title="Appointments" icon="/images/bedSun.PNG" iconAnimation="float" />
      <AppointmentList />
    </>
  )
}