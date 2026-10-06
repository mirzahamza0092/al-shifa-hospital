'use client'

import { motion } from 'framer-motion'
import { ChevronRight, LucideIcon } from 'lucide-react'
import { ReactNode } from 'react'
import Link from 'next/link'
interface WorkingHoursCardProps {
  icon: LucideIcon
  title: string
  children: ReactNode
  buttonLabel: string
  href: string
  variant?: 'light' | 'dark'
}

export default function WorkingHoursCard({
  icon: Icon,
  title,
  children,
  buttonLabel,
  href,
  variant = 'light',
}: WorkingHoursCardProps) {
  const isDark = variant === 'dark'

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`group relative rounded-2xl px-7 py-4 flex flex-col overflow-hidden transition-shadow ${
        isDark
            ? 'bg-blue-900 text-white shadow-[0_20px_50px_-12px_rgba(30,58,138,0.5)] md:-translate-y-8'
            : 'bg-white text-slate-700 shadow-[0_10px_40px_rgba(0,0,0,0.15)]'
        }`}
    >
      {!isDark && (
        <div className="absolute inset-0 bg-blue-900 origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out z-0" />
      )}

      <div className="relative z-10 flex flex-col flex-1">
        <Icon
          size={80}
          strokeWidth={1.5}
          className={`mb-2 transition-colors duration-500 ${
            isDark ? 'text-white' : 'text-blue-900 group-hover:text-white'
          }`}
        />

        <h3
          className={`font-bold text-lg mb-1 transition-colors duration-500 ${
            isDark ? 'text-white' : 'text-amber-500 group-hover:text-white'
          }`}
        >
          {title}
        </h3>

        <div
          className={`flex-1 text-sm leading-relaxed space-y-1 transition-colors duration-500 ${
            isDark ? 'text-slate-100' : 'text-slate-600 group-hover:text-slate-100'
          }`}
        >
          {children}
        </div>

        <Link
          href={href}
          className={`mt-3 inline-flex items-center gap-3 self-start rounded-lg font-semibold text-sm pl-4 pr-1.5 py-1.5 no-underline transition-colors duration-500 ${
            isDark
              ? 'bg-white text-blue-900'
              : 'bg-blue-900 text-white group-hover:bg-white group-hover:text-blue-900'
          }`}
        >
          {buttonLabel}
          <span
            className={`flex items-center justify-center w-10 h-10 rounded-md transition-colors duration-500 ${
              isDark ? 'bg-blue-900' : 'bg-white group-hover:bg-blue-900'
            }`}
          >
            <ChevronRight
              size={18}
              className={`transition-colors duration-500 ${
                isDark ? 'text-white' : 'text-blue-900 group-hover:text-white'
              }`}
            />
          </span>
        </Link>
      </div>
    </motion.div>
  )
}