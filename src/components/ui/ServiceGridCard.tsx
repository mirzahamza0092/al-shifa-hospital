'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ServiceItem } from '@/data/allServices'

export default function ServiceGridCard({ service }: { service: ServiceItem }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative bg-white rounded-3xl overflow-hidden shadow-[0_-10px_20px_rgba(0,0,0,0.06),0_10px_30px_rgba(0,0,0,0.08)] flex flex-col items-center text-center h-full"
    >
      <div className="relative w-full aspect-[4/3]">
        <img
          src="/images/imgframe.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        />
        <motion.div
          animate={hovered ? { x: [0, -3, 3, -3, 3, 0] } : { x: 0 }}
          transition={hovered ? { duration: 0.4, ease: 'easeInOut' } : { duration: 0.15 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[52%] h-[68%] overflow-hidden rounded-md z-10"
        >
          <img
            src={service.icon}
            alt={service.title}
            className="w-full h-full object-contain"
          />
        </motion.div>
      </div>

      <div className="px-3 sm:px-4 pt-3 pb-5 flex flex-col items-center flex-1 w-full">
        <h4 className="font-bold text-blue-900 text-sm sm:text-base leading-snug min-h-[2.6rem] flex items-center justify-center">
          {service.title}
        </h4>

        <Link
          href={`/services/${service.slug}`}
          className="mt-5 inline-block bg-blue-900 text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-xl"
        >
          View More
        </Link>
      </div>
    </div>
  )
}