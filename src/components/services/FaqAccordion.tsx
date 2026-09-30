'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Faq } from '@/data/serviceDetails'

export default function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="mt-10">
      <h3 className="text-blue-900 font-bold text-[1.5rem] sm:text-[1.8rem] mb-4">Questions</h3>

      {faqs.map((f, i) => (
        <div key={i} className="mb-3 rounded-lg overflow-hidden">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-3 bg-[#00507c] text-white text-left font-semibold text-sm px-5 py-4"
          >
            {f.q}
            <ChevronDown
              size={18}
              className={`shrink-0 transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}
            />
          </button>

          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden bg-slate-50"
              >
                <p className="px-5 py-4 text-sm text-slate-600 leading-relaxed">{f.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}