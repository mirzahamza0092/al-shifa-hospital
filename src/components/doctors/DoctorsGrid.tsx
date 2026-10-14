'use client'

import { useMemo, useState } from 'react'
import DoctorListCard, { DoctorListCardSkeleton } from '@/components/ui/DoctorListCard'
import DoctorModal from '@/components/doctors/DoctorModal'
import type { DoctorItem } from '@/data/doctorsList'
import ScaleOnLarge from '@/components/ui/ScaleOnLarge'
import { usePublicDoctors } from '@/hooks/usePublicDoctors'

const fieldClass =
  'w-full sm:w-[230px] border border-slate-300 bg-white rounded-md px-3 py-2.5 text-sm text-slate-700 outline-none focus:border-blue-900'

export default function DoctorsGrid() {
  const [query, setQuery] = useState('')
  const [dept, setDept] = useState('')
  const [selected, setSelected] = useState<DoctorItem | null>(null)

  const { doctors, loading } = usePublicDoctors()

  const items = useMemo(
    () =>
      doctors.map((d) => ({
        id: d.id,
        name: d.name,
        department: d.departmentName || '',
        designation: d.designation || '',
        qualifications: d.qualifications || '',
        image: d.photo_url || '',
      })) as DoctorItem[],
    [doctors]
  )

  const departments = useMemo(
    () => Array.from(new Set(items.map((d) => d.department).filter(Boolean))).sort(),
    [items]
  )

  const filtered = items.filter((d) => {
    const matchName = d.name.toLowerCase().includes(query.trim().toLowerCase())
    const matchDept = dept === '' || d.department === dept
    return matchName && matchDept
  })

  return (
    <section className="bg-white py-10 md:py-16 px-4 sm:px-6 md:px-12">
      <ScaleOnLarge>
        <div className="max-w-[1000px] mx-auto flex flex-col sm:flex-row justify-center gap-3 mb-10">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Doctor by name..."
            className={fieldClass}
          />
          <select value={dept} onChange={(e) => setDept(e.target.value)} className={fieldClass}>
            <option value="">Select Department</option>
            {departments.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>

        {!loading && filtered.length === 0 ? (
          <p className="text-center text-slate-500">No doctors found.</p>
        ) : (
          <div className="max-w-[1000px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading
              ? Array.from({ length: 6 }).map((_, i) => <DoctorListCardSkeleton key={i} />)
              : filtered.map((d) => (
                  <DoctorListCard key={d.id} doctor={d} onView={setSelected} />
                ))}
          </div>
        )}
      </ScaleOnLarge>

      <DoctorModal doctor={selected} onClose={() => setSelected(null)} />
    </section>
  )
}