'use client'

import { motion } from 'framer-motion'
import { Doctor } from '@/data/doctors'

interface DoctorCardProps {
  doctor: Doctor
  isPaused: boolean
  onCardHover: (hovering: boolean) => void
  onCardClick: () => void
}

export default function DoctorCard({
  doctor,
  isPaused,
  onCardHover,
  onCardClick,
}: DoctorCardProps) {
  return (
    <div
      onMouseEnter={() => onCardHover(true)}
      onMouseLeave={() => onCardHover(false)}
      onClick={onCardClick}
      className="relative flex-shrink-0 w-[250px] bg-white rounded-3xl overflow-hidden shadow-[0_-10px_20px_rgba(0,0,0,0.06),0_10px_30px_rgba(0,0,0,0.08)] flex flex-col items-center text-center cursor-pointer"
    >
    <div className="relative w-full aspect-square">
    <img
        src="/images/imgframe.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
    />
  <motion.div
      animate={
          isPaused
          ? { x: [0, -3, 3, -3, 3, 0] }
          : { x: 0 }
      }
      transition={
          isPaused
          ? { duration: 0.4, ease: 'easeInOut' }
          : { duration: 0.15 }
      }
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[65%] h-[65%] overflow-hidden rounded-md z-10"
  >
    <img
        src={doctor.image}
        alt={doctor.name}
        className="w-full h-full object-cover"
    />
  </motion.div>
</div>

<div className="px-5 pt-6 pb-8 flex flex-col items-center flex-1 w-full">
  <h4 className="font-bold text-blue-900 text-base leading-snug mb-3">
    {doctor.name}
  </h4>
  <p className="text-slate-500 text-sm mb-20">{doctor.designation}</p>
  <button className="mt-auto bg-blue-900 text-white text-sm font-semibold px-6 py-2.5 rounded-lg">
    View More
  </button>
</div>
</div>
  )
}