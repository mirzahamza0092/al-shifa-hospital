'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { HeartPulse } from 'lucide-react'
import Link from 'next/link'
import type { PublicDepartment } from '@/hooks/usePublicDepartments'

interface ServiceCardProps {
  department: PublicDepartment
  isPaused: boolean
  onCardHover: (hovering: boolean) => void
  onCardClick: () => void
}

export default function ServiceCard({
  department,
  isPaused,
  onCardHover,
  onCardClick,
}: ServiceCardProps) {
  const [imgFailed, setImgFailed] = useState(false)

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
          animate={isPaused ? { x: [0, -3, 3, -3, 3, 0] } : { x: 0 }}
          transition={isPaused ? { duration: 0.4, ease: 'easeInOut' } : { duration: 0.15 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[65%] h-[65%] overflow-hidden rounded-md z-10"
        >
          {imgFailed ? (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 text-blue-900">
              <HeartPulse size={64} strokeWidth={1.5} />
            </div>
          ) : (
            <img
              src={department.iconUrl}
              alt={department.name}
              onError={() => setImgFailed(true)}
              className="w-30 h-30 object-contain bg-white pl-10 mt-10"
            />
          )}
        </motion.div>
      </div>

      <div className="px-5 pt-6 pb-8 flex flex-col items-center flex-1 w-full">
        <h4 className="font-bold text-blue-900 text-base leading-snug mb-3">
          {department.name}
        </h4>
        <p className="text-slate-500 text-sm mb-20 line-clamp-3">{department.description}</p>
        <Link
          href={`/services/${department.slug}`}
          onClick={(e) => e.stopPropagation()}
          className="mt-auto inline-block bg-blue-900 text-white text-sm font-semibold px-6 py-2.5 rounded-lg no-underline"
        >
          View More
        </Link>
      </div>
    </div>
  )
}

export function ServiceCardSkeleton() {
  return (
    <div className="flex-shrink-0 w-[250px] h-[430px] rounded-3xl bg-slate-200/70 animate-pulse" />
  )
}