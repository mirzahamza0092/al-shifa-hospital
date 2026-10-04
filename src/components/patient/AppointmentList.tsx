'use client'

import { useEffect, useMemo, useState } from 'react'
import DoctorModal from '@/components/doctors/DoctorModal'
import ScaleOnLarge from '@/components/ui/ScaleOnLarge'
import { doctorsList, DoctorItem } from '@/data/doctorsList'

const fieldClass =
  'w-full border border-[#00507c] bg-white rounded-md px-4 py-3 text-sm text-[#00507c] outline-none focus:ring-2 focus:ring-amber-300'

export default function AppointmentList() {
  const departments = useMemo(
    () => Array.from(new Set(doctorsList.map((d) => d.department))).sort(),
    []
  )

  const [dept, setDept] = useState(departments[0] ?? '')
  const [date, setDate] = useState('')
  const [selected, setSelected] = useState<DoctorItem | null>(null)

  // aaj ki date default mein
  useEffect(() => {
    setDate(new Date().toISOString().slice(0, 10))
  }, [])

  const filtered = doctorsList.filter((d) => d.department === dept)

  return (
    <section className="bg-white py-10 md:py-16 px-4 sm:px-6 md:px-12">
      <ScaleOnLarge>
        <div className="max-w-[1300px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-10 mb-6">
            <select value={dept} onChange={(e) => setDept(e.target.value)} className={fieldClass}>
              {departments.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className={fieldClass}
            />
          </div>

          {filtered.length === 0 ? (
            <p className="text-center text-slate-500">No doctors found.</p>
          ) : (
            <div className="space-y-4">
              {filtered.map((d) => (
                <div
                  key={d.id}
                  className="flex flex-col sm:flex-row items-center gap-4 border border-slate-200 rounded-lg p-3 shadow-sm"
                >
                  <div className="w-[110px] h-[110px] shrink-0 rounded-xl overflow-hidden border border-amber-400">
                    <img
                      src={d.image}
                      alt={d.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  <div className="flex-1 text-center">
                    <h4 className="text-[#00507c] font-bold text-lg">{d.name}</h4>
                    <p className="text-[#00507c] text-sm mt-1">{d.designation}</p>
                  </div>

                  <div className="flex flex-col gap-3 w-full sm:w-auto sm:pr-2">
                    <button
                      type="button"
                      onClick={() => alert('Booking form baad mein connect hoga')}
                      className="border border-[#00507c] text-[#00507c] text-xs font-semibold rounded-full px-5 py-2 hover:bg-[#00507c] hover:text-white transition"
                    >
                      Book Appointment
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelected(d)}
                      className="border border-amber-400 text-amber-500 text-xs font-semibold rounded-full px-5 py-2 hover:bg-amber-400 hover:text-white transition"
                    >
                      View Profile
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </ScaleOnLarge>

      <DoctorModal doctor={selected} onClose={() => setSelected(null)} />
    </section>
  )
}