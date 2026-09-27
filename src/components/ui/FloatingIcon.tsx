'use client'

import { motion } from 'framer-motion'

type AnimationType = 'float' | 'sway' | 'spin'

const ANIMATIONS: Record<AnimationType, (distance: number) => Record<string, number[] | number>> = {
  float: (distance) => ({ y: [0, -distance, 0] }),
  sway: (distance) => ({ x: [0, distance, 0] }),
  spin: () => ({ rotate: 360 }),
}

interface FloatingIconProps {
  src: string
  animation?: AnimationType
  duration?: number
  distance?: number
  className?: string
}

export default function FloatingIcon({
  src,
  animation = 'float',
  duration = 2.5,
  distance = 12,
  className = '',
}: FloatingIconProps) {
  const animate = ANIMATIONS[animation](distance)

  return (
    <motion.img
      src={src}
      alt=""
      animate={animate}
      transition={{
        duration,
        repeat: Infinity,
        ease: animation === 'spin' ? 'linear' : 'easeInOut',
      }}
      className={`hidden md:block pointer-events-none ${className}`}
    />
  )
}