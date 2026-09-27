'use client'

import { motion } from 'framer-motion'

export interface Feature {
  image: string
  label: string
  bg: string
  border: string
  circle: string
}

interface FeatureCardProps {
  feature: Feature
}

export default function FeatureCard({ feature }: FeatureCardProps) {
  const { image, label, border, circle } = feature

  return (
    <div
      className={`relative flex flex-col items-center justify-center text-center gap-2 border ${border} bg-white rounded-2xl px-2 py-3 md:py-2 overflow-hidden shadow-sm`}
    >
      <div className={`absolute -top-6 -left-5 w-24 h-24 rounded-full ${circle} opacity-70`} />

      <motion.div
        whileHover={{
          x: [0, -3, 3, -3, 3, 0],
          transition: { duration: 0.3 },
        }}
        className="relative z-10"
      >
        <img src={image} alt={label} className="w-11 h-11 object-contain" />
      </motion.div>

      <span className="relative font-bold text-blue-900 text-xs sm:text-sm md:text-base z-10">
        {label}
      </span>
    </div>
  )
}