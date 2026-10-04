'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HEADER_HEIGHT } from '@/components/layout/Header'
import FloatingIcon from '@/components/ui/FloatingIcon'
import { Home } from 'lucide-react'
import ScaleOnLarge from '@/components/ui/ScaleOnLarge'
interface AboutHeroProps {
  title?: string
  icon?: string
  iconAnimation?: 'drive' | 'float' | 'sway' | 'spin'
}

export default function AboutHero({
  title = 'About Us',
  icon = '/images/anbulance.png',
  iconAnimation = 'drive',
}: AboutHeroProps) {
  return (
    <section
      className="relative z-[1] overflow-hidden bg-[#f8fafc]"
       style={{
        marginTop: -HEADER_HEIGHT,
        paddingTop: HEADER_HEIGHT,
        paddingBottom: 275,
      }}
    >
      <img
        src="/images/abouthero.png"
        alt=""
        className="absolute left-0 top-0 w-full h-full object-cover z-0 pointer-events-none"
      />

      {iconAnimation === 'drive' ? (
        <motion.img
          src={icon}
          alt=""
          initial={{ x: 250 }}
          animate={{ x: 100 }}
          transition={{ duration: 2.4, repeat: Infinity, repeatType: 'mirror', ease: 'linear' }}
          className="hidden md:block absolute bottom-6 left-[28%] w-16 h-auto z-[3]"
        />
      ) : (
        <FloatingIcon
          src={icon}
          animation={iconAnimation}
          duration={2.5}
          distance={10}
          className="hidden md:block absolute bottom-8 left-[28%] w-14 h-14 object-contain z-[3]"
        />
      )}
      <FloatingIcon
        src="/images/hartAndPlus.png"
        animation="spin"
        duration={8}
        className="hidden md:block absolute right-[8%] top-[35%] w-10 h-10 object-contain z-[2]"
      />
      <FloatingIcon
        src="/images/bag.PNG"
        animation="float"
        duration={2.5}
        distance={10}
        className="hidden md:block absolute left-[3%] top-[25%] w-5 h-5 object-contain z-[2]"
      />
      <ScaleOnLarge>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-[2] text-center pt-10 pb-14 px-4 min-h-[220px] sm:min-h-[260px] md:min-h-[300px] flex flex-col items-center justify-center"
      >
        <h1 className="text-blue-900 font-extrabold text-[2.2rem] sm:text-[2.8rem] md:text-[3.4rem]">
          {title}
        </h1>

        <div className="inline-flex items-center gap-2.5 mt-4 bg-blue-900 text-white text-sm font-semibold px-7 py-3 rounded-xl shadow-[0_8px_20px_rgba(30,58,138,0.25)]">
          <Link href="/" className="flex items-center gap-1.5 hover:text-amber-300 transition">
            <Home size={24} />
            Home
          </Link>
          <span className="text-white/50">/</span>
          <span>{title}</span>
        </div>
      </motion.div>
      </ScaleOnLarge>
    </section>
  )
}