import AboutHero from '@/components/about/AboutHero'
import ServiceGridCard from '@/components/ui/ServiceGridCard'
import { allServices } from '@/data/allServices'
import ScaleOnLarge from '@/components/ui/ScaleOnLarge'
export default function ServicesPage() {
  return (
    <>
      <AboutHero
        title="Services"
        icon="/images/handAndBox.PNG"
        iconAnimation="drive"
      />

      <section className="bg-white py-10 md:py-16 px-4 sm:px-6 md:px-12">
                <ScaleOnLarge>
        <div className="max-w-[1100px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {allServices.map((s) => (
            <ServiceGridCard key={s.id} service={s} />
          ))}
        </div>
        </ScaleOnLarge>
      </section>
    </>
  )
}