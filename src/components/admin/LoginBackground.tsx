'use client'

import { motion } from 'framer-motion'
import {
  Stethoscope,
  HeartPulse,
  Pill,
  Syringe,
  Activity,
  Thermometer,
  Plus,
  Heart,
} from 'lucide-react'

const ITEMS = [
  { Icon: Stethoscope, top: '8%', left: '8%', size: 56, delay: 0, duration: 6, color: 'text-blue-200' },
  { Icon: HeartPulse, top: '15%', left: '78%', size: 64, delay: 1, duration: 7, color: 'text-amber-200' },
  { Icon: Pill, top: '70%', left: '10%', size: 48, delay: 0.5, duration: 5.5, color: 'text-amber-200' },
  { Icon: Syringe, top: '75%', left: '82%', size: 56, delay: 1.5, duration: 6.5, color: 'text-blue-200' },
  { Icon: Activity, top: '42%', left: '4%', size: 52, delay: 2, duration: 7.5, color: 'text-blue-200' },
  { Icon: Thermometer, top: '40%', left: '90%', size: 52, delay: 0.8, duration: 6, color: 'text-amber-200' },
  { Icon: Plus, top: '88%', left: '45%', size: 44, delay: 1.2, duration: 5, color: 'text-blue-200' },
  { Icon: Heart, top: '4%', left: '45%', size: 40, delay: 0.3, duration: 5.8, color: 'text-amber-200' },
  { Icon: Plus, top: '28%', left: '20%', size: 32, delay: 1.8, duration: 6.2, color: 'text-amber-200' },
  { Icon: Pill, top: '58%', left: '70%', size: 36, delay: 2.4, duration: 7, color: 'text-blue-200' },
]

export default function LoginBackground({ fixed = false }: { fixed?: boolean }) {
  return (
    <div
      className={`pointer-events-none ${fixed ? 'fixed' : 'absolute'} inset-0 overflow-hidden`}
      aria-hidden="true"
    >
      <div
        className="absolute -top-48 -left-48 h-[640px] w-[640px]"
        style={{
          background:
            'radial-gradient(circle closest-side, rgba(191,219,254,0.7), rgba(191,219,254,0))',
        }}
      />
      <div
        className="absolute -bottom-48 -right-48 h-[640px] w-[640px]"
        style={{
          background:
            'radial-gradient(circle closest-side, rgba(253,230,138,0.55), rgba(253,230,138,0))',
        }}
      />

      {ITEMS.map(({ Icon, top, left, size, delay, duration, color }, i) => (
        <motion.div
          key={i}
          className={`absolute ${color}`}
          style={{ top, left }}
          animate={{ y: [0, -22, 0], rotate: [0, 10, -10, 0] }}
          transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Icon size={size} strokeWidth={1.5} />
        </motion.div>
      ))}
    </div>
  )
}