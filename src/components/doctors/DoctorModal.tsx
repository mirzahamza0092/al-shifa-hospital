'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { DoctorItem } from '@/data/doctorsList'

interface DoctorModalProps {
  doctor: DoctorItem | null
  onClose: () => void
}

export default function DoctorModal({ doctor, onClose }: DoctorModalProps) {
  useEffect(() => {
    if (!doctor) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [doctor, onClose])

  return (
    <AnimatePresence>
      {doctor && (
        <motion.div
          key="doctor-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-[300] bg-black/50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={doctor.name}
            className="w-full max-w-[400px] max-h-[90vh] overflow-y-auto bg-white rounded-xl shadow-2xl px-6 py-6 text-center"
          >
            <div className="w-[150px] h-[150px] mx-auto rounded-2xl overflow-hidden border border-[#00507c] bg-white">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-full object-cover object-top"
              />
            </div>

            <h3 className="mt-4 font-extrabold text-[#00507c] text-[1.6rem] sm:text-[1.9rem] leading-tight">
              {doctor.name}
            </h3>

            <p className="mt-3 text-slate-800 text-sm sm:text-base">{doctor.designation}</p>

            {doctor.qualifications && (
              <p className="mt-3 text-slate-700 text-sm sm:text-[0.95rem] leading-relaxed uppercase">
                {doctor.qualifications}
              </p>
            )}

            <button
              type="button"
              onClick={onClose}
              className="mt-5 bg-[#00507c] hover:bg-blue-900 text-white text-sm font-semibold px-5 py-2 rounded-md transition-colors"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}