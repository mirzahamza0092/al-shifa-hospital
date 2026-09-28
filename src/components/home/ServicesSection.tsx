'use client'

import { useState } from 'react'
import ServiceCard from '@/components/ui/ServiceCard'
import { services } from '@/data/services'
import FloatingIcon from '@/components/ui/FloatingIcon'

export default function ServicesSection() {
  const [isPaused, setIsPaused] = useState(false)
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null)

  const loopedServices = [...services, ...services]

  return (
    <div className="bg-white pt-10 md:pt-16">
      <section className="relative bg-white pt-16 md:pt-20 pb-16 md:pb-20 overflow-hidden">
        <div className="hidden md:block absolute right-0 top-0 h-full w-[46%] rounded-l-[3rem] bg-blue-900 z-0" />
        <div className="hidden md:block absolute left-0 top-0 h-full w-[38%] bg-white z-20" />

        <div className="relative max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 items-center px-4 sm:px-6 md:px-12 overflow-visible">
          <FloatingIcon
            src="/images/hartAndPlus.png"
            animation="float"
            duration={2.5}
            distance={10}
            className="hidden md:block absolute left-[44%] -top-15 w-8 h-8 object-contain z-30"
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
                src="/images/scopy.png"
                animation="spin"
                duration={8}
                className="hidden md:block absolute -top-10 right-9 w-9 h-8 object-contain opacity-40 z-20"
              />
              <span className="relative inline-block bg-amber-50 text-amber-600 px-4 py-1.5 rounded-full font-semibold text-[0.85rem] border border-dashed border-amber-200 mb-4">
                Our Services
              </span>
            </div>

            <h2 className="text-blue-900 font-extrabold leading-[1.15] mb-5 text-[1.8rem] sm:text-[2.1rem] md:text-[2.3rem]">
              Comprehensive Services at Al-Shifa Hospital
            </h2>

            <p className="text-slate-600 leading-relaxed mb-8">
              Al-Shifa Hospital offers a wide range of medical services with
              modern facilities and a team of skilled doctors. The hospital
              provides excellent care in areas like heart, brain, bone, and
              mother &amp; baby health. We use advanced tools and the latest
              treatments to ensure patients get the best care.
            </p>

            <div className="relative isolate">
              <button className="bg-amber-500 text-white font-semibold px-8 py-3.5 rounded-lg">
                All Services
              </button>
              <FloatingIcon
                src="/images/aks.PNG"
                animation="float"
                duration={2.5}
                distance={10}
                className="hidden md:block absolute left-10 -bottom-14 w-8 h-8 object-contain z-20"
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
              {loopedServices.map((service, index) => (
                <ServiceCard
                  key={`${service.id}-${index}`}
                  service={service}
                  isPaused={hoveredCardId === `${service.id}-${index}`}
                  onCardHover={(hovering) => {
                    setHoveredCardId(hovering ? `${service.id}-${index}` : null)
                    setIsPaused(hovering)
                  }}
                  onCardClick={() => setIsPaused((prev) => !prev)}
                />
              ))}
            </div>
          </div>
        </div>

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