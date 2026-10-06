'use client'

import { useState } from 'react'
import DoctorCard from '@/components/ui/DoctorCard'
import { doctors } from '@/data/doctors'
import FloatingIcon from '@/components/ui/FloatingIcon'
import ScaleOnLarge from '@/components/ui/ScaleOnLarge'
import Link from 'next/link'

export default function TeamSection() {
  const [isPaused, setIsPaused] = useState(false)
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null)

  const loopedDoctors = [...doctors, ...doctors]

  return (
    <div className="bg-white pt-10 md:pt-16">
    <section className="relative bg-blue-900 md:bg-white pt-16 md:pt-20 pb-16 md:pb-20 overflow-hidden">
      <div className="hidden md:block absolute right-0 top-0 h-full w-[46%] rounded-l-[3rem] bg-blue-900 z-0" />
      <div className="hidden md:block absolute left-0 top-0 h-full w-[38%] bg-white z-20" />
      <ScaleOnLarge>
      <div className="relative max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 items-center px-4 sm:px-6 md:px-12 overflow-visible">
        <FloatingIcon
          src="/images/handAndBox.PNG"
          animation="float"
          duration={2.5}
          distance={10}
          className="hidden md:block absolute left-[44%] -top-8 w-8 h-8 object-contain z-30"
        />
        <FloatingIcon
          src="/images/goldenTeal.png"
          animation="sway"
          duration={2.5}
          distance={10}
          className="hidden md:block absolute left-[44%] -bottom-5 w-14 h-14 object-contain z-30"
        />
        <div className="md:col-span-4 relative z-30">
         <div className="relative inline-block isolate">
        <FloatingIcon
        src="/images/hartAndPlus.png"
        animation="spin"
        duration={8}
        className="hidden md:block absolute -top-10 right-9 w-9 h-8 object-contain opacity-40 z-20"
      />
        <span className="relative inline-block bg-amber-50 text-amber-600 px-4 py-1.5 rounded-full font-semibold text-[0.85rem] border border-dashed border-amber-200 mb-4">
          Our Team
        </span>
      </div>

          <h2 className="text-white md:text-blue-900 font-extrabold leading-[1.15] mb-5 text-[1.8rem] sm:text-[2.1rem] md:text-[2.3rem]">
            Al-Shifa Hospital Mandi Bahauddin - Trusted Healthcare
          </h2>

          <p className="text-blue-100 md:text-slate-600 leading-relaxed mb-8">
            At Al-Shifa Hospital, Mandi Bahauddin, our specialized departments bring together qualified doctors, experienced healthcare professionals, and modern medical facilities to provide comprehensive and patient-centered care. From emergency services and diagnostic care to specialized medical and surgical treatment, each department is dedicated to delivering safe, timely, and compassionate healthcare.
          </p>

          <div className="relative isolate">
            <Link
              href="/doctors"
              className="inline-block bg-amber-500 text-white font-semibold px-8 py-3.5 rounded-lg no-underline"
            >
              All Doctors
            </Link>
            <FloatingIcon
              src="/images/bedSun.PNG"
              animation="float"
              duration={2.5}
              distance={10}
              className="hidden md:block absolute left-10 -bottom-14 w-5 h-5 object-contain z-20"
            />
          </div>
        </div>

        <div className="md:col-span-8 md:-ml-24 md:w-screen relative h-full min-h-[420px] z-0">
          <div
            className="marquee-track relative z-0 flex gap-6 w-max py-10 pl-0"
            style={{
              animationPlayState: isPaused ? 'paused' : 'running',
            }}
          >
            {loopedDoctors.map((doctor, index) => (
              <DoctorCard
                key={`${doctor.id}-${index}`}
                doctor={doctor}
                isPaused={hoveredCardId === `${doctor.id}-${index}`}
                onCardHover={(hovering) => {
                  setHoveredCardId(hovering ? `${doctor.id}-${index}` : null)
                  setIsPaused(hovering)
                }}
                onCardClick={() => setIsPaused((prev) => !prev)}
              />
            ))}
          </div>
        </div>
      </div>
      </ScaleOnLarge>

      <style jsx>{`
        .marquee-track {
          animation: marquee-scroll 20s linear infinite;
        }
        @keyframes marquee-scroll {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0%);
          }
        }
      `}</style>
    </section>
    </div>
  )
}