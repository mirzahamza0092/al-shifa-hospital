'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Eye, CalendarDays } from 'lucide-react'
import HexPhoto from '@/components/ui/HexPhoto'
import { DoctorItem } from '@/data/doctorsList'

const iconBtn =
  'w-9 h-9 rounded-md bg-blue-900 text-white flex items-center justify-center shadow-[0_6px_14px_rgba(30,58,138,0.25)] hover:bg-amber-500 transition-colors duration-200'

export default function DoctorListCard({
  doctor,
  onView,
}: {
  doctor: DoctorItem
  onView: (doctor: DoctorItem) => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-[300px] mx-auto h-full"
    >
      <div className="group h-full flex flex-col bg-white rounded-3xl border-2 border-[#b8cfdb] px-5 pt-8 pb-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-transparent hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)]">
        <HexPhoto src={doctor.image} alt={doctor.name} />

        <h4 className="mt-4 font-bold text-blue-900 text-base sm:text-lg leading-snug min-h-[3.2rem] flex items-center justify-center">
          {doctor.name}
        </h4>
        <p className="text-amber-500 text-xs sm:text-[0.8rem] mt-1 min-h-[2.2rem]">
          {doctor.designation}
        </p>

        <div className="mt-auto pt-5 flex justify-center gap-2">
          <button
            type="button"
            onClick={() => onView(doctor)}
            aria-label="View details"
            title="View details"
            className={iconBtn}
          >
            <Eye size={18} />
          </button>
          <Link
            href={`/patient/appointment?doctor=${doctor.slug}`}
            aria-label="Book appointment"
            title="Book appointment"
            className={iconBtn}
          >
            <CalendarDays size={18} />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}