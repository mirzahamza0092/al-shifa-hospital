'use client'

import AboutHero from '@/components/about/AboutHero'
import DepartmentGridCard, { DepartmentGridCardSkeleton } from '@/components/ui/DepartmentGridCard'
import ScaleOnLarge from '@/components/ui/ScaleOnLarge'
import { usePublicDepartments } from '@/hooks/usePublicDepartments'

export default function ServicesPage() {
  const { departments, loading } = usePublicDepartments()

  return (
    <>
      <AboutHero
        title="Services"
        icon="/images/handAndBox.PNG"
        iconAnimation="drive"
      />

      <section className="bg-white py-10 md:py-16 px-4 sm:px-6 md:px-12">
        <ScaleOnLarge>
          <div className="max-w-[1250px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {loading ? (
              Array.from({ length: 8 }).map((_, i) => <DepartmentGridCardSkeleton key={i} />)
            ) : departments.length === 0 ? (
              <p className="col-span-full text-center text-slate-500">
                No services available right now.
              </p>
            ) : (
              departments.map((d) => <DepartmentGridCard key={d.id} department={d} />)
            )}
          </div>
        </ScaleOnLarge>
      </section>
    </>
  )
}