'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeartPulse } from 'lucide-react'
import type { PublicDepartment } from '@/hooks/usePublicDepartments'

export default function DepartmentGridCard({ department }: { department: PublicDepartment }) {
  const [hovered, setHovered] = useState(false)
  const [imgFailed, setImgFailed] = useState(false)
  const showImage = !!department.iconUrl && !imgFailed

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative bg-white rounded-3xl overflow-hidden shadow-[0_-10px_20px_rgba(0,0,0,0.06),0_10px_30px_rgba(0,0,0,0.08)] flex flex-col items-center text-center h-full"
    >
      <div className="relative w-full aspect-square">
        <img
          src="/images/imgframe.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        />
        <motion.div
          animate={hovered ? { x: [0, -3, 3, -3, 3, 0] } : { x: 0 }}
          transition={hovered ? { duration: 0.4, ease: 'easeInOut' } : { duration: 0.15 }}
          className="absolute inset-x-0 mx-auto top-[24%] w-[65%] h-[65%] overflow-hidden rounded-md z-10"
        >
          {showImage ? (
            <img
              src={department.iconUrl}
              alt={department.name}
              onError={() => setImgFailed(true)}
              className="w-full h-full object-contain bg-white p-2"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-blue-900">
              <HeartPulse size={64} strokeWidth={1.5} />
            </div>
          )}
        </motion.div>
      </div>

      <div className="px-3 sm:px-4 pt-3 pb-5 flex flex-col items-center flex-1 w-full">
        <h4 className="font-bold text-blue-900 text-sm sm:text-base leading-snug min-h-[2.6rem] flex items-center justify-center">
          {department.name}
        </h4>

        <Link
          href={`/services/${department.slug}`}
          className="mt-5 inline-block bg-blue-900 text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-xl"
        >
          View More
        </Link>
      </div>
    </div>
  )
}

export function DepartmentGridCardSkeleton() {
  return <div className="w-full h-[260px] rounded-3xl bg-slate-200/70 animate-pulse" />
}