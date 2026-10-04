'use client'

import { motion } from 'framer-motion'
import { stats } from '@/data/stats'
import ScaleOnLarge from '@/components/ui/ScaleOnLarge'
export default function StatsSection() {
  return (
    <section className="bg-slate-200 py-10 md:py-16 px-4 sm:px-6 md:px-12">
            <ScaleOnLarge>
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-8 md:gap-x-8 md:gap-y-10 lg:gap-10 pt-2 pl-2 sm:pt-3 sm:pl-3">
        {stats.map((s, i) => (
          <motion.div
            key={s.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative isolate cursor-pointer"
          >
            <div className="absolute -top-2 -left-2 right-2 bottom-2 sm:-top-3 sm:-left-3 sm:right-3 sm:bottom-3 rounded-2xl sm:rounded-3xl border-2 border-indigo-500 z-0" />

            <div className="relative z-10 h-full min-h-[150px] sm:min-h-[190px] lg:min-h-[210px] flex flex-col items-center justify-center bg-white group-hover:bg-blue-900 transition-colors duration-300 rounded-2xl sm:rounded-3xl text-center py-6 sm:py-8 lg:py-10 px-3 sm:px-4">
              <p className="text-amber-500 group-hover:text-white transition-colors duration-300 font-extrabold leading-none text-[2.4rem] sm:text-5xl lg:text-6xl">
                {s.value}
              </p>
              <h4 className="text-blue-900 group-hover:text-white transition-colors duration-300 font-bold text-base sm:text-xl mt-3 sm:mt-4 break-words">
                {s.title}
              </h4>
              <p className="text-slate-600 group-hover:text-white transition-colors duration-300 text-xs sm:text-sm mt-1">
                {s.subtitle}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      </ScaleOnLarge>
    </section>
  )
}