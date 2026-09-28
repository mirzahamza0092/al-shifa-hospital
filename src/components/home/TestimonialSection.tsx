'use client'

import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react'
import FloatingIcon from '@/components/ui/FloatingIcon'
import { testimonials } from '@/data/testimonials'

const SIZE = 480
const C = SIZE / 2
const ANGLES = [-90, -30, 30, 90, 150, 210]
const VERTEX = [0, 60, 120, 180, 240, 300]
const AVATAR = 72
const OUTER_R = 230
const OUTER_APOTHEM = OUTER_R * Math.cos(Math.PI / 6)

const hexPoints = (r: number) =>
  ANGLES.map((a) => {
    const rad = (a * Math.PI) / 180
    return `${(C + r * Math.cos(rad)).toFixed(2)},${(C + r * Math.sin(rad)).toFixed(2)}`
  }).join(' ')

const roundedHex = (r: number, corner: number, rot = 0) => {
  const pts = VERTEX.map((a) => {
    const rad = ((a + rot) * Math.PI) / 180
    return [C + r * Math.cos(rad), C + r * Math.sin(rad)]
  })
  const t = corner / r
  const lerp = (a: number[], b: number[]) => [
    a[0] + (b[0] - a[0]) * t,
    a[1] + (b[1] - a[1]) * t,
  ]
  let d = ''
  pts.forEach((p, i) => {
    const prev = pts[(i + 5) % 6]
    const next = pts[(i + 1) % 6]
    const s = lerp(p, prev)
    const e = lerp(p, next)
    d += `${i === 0 ? 'M' : 'L'}${s[0].toFixed(2)},${s[1].toFixed(2)} Q${p[0].toFixed(2)},${p[1].toFixed(2)} ${e[0].toFixed(2)},${e[1].toFixed(2)} `
  })
  return d + 'Z'
}

export default function TestimonialSection() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const total = testimonials.length
  const avatars = testimonials.slice(0, 6)

  const next = () => setIndex((index + 1) % total)
  const prev = () => setIndex((index - 1 + total) % total)

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => {
      setIndex((p) => (p + 1) % total)
    }, 4000)
    return () => clearInterval(id)
  }, [paused, total])

  return (
    <section className="relative bg-white py-12 md:py-16 px-4 sm:px-6 md:px-12 overflow-hidden">
      <FloatingIcon
        src="/images/drip.png"
        animation="float"
        duration={2.5}
        distance={10}
        className="hidden md:block absolute left-[12%] top-24 w-10 h-10 object-contain"
      />
      <FloatingIcon
        src="/images/astrature.png"
        animation="sway"
        duration={2.5}
        distance={10}
        className="hidden md:block absolute right-[10%] top-16 w-10 h-10 object-contain"
      />
      <FloatingIcon
        src="/images/bottleAndCap.PNG"
        animation="float"
        duration={2.4}
        distance={10}
        className="hidden md:block absolute left-4 bottom-10 w-8 h-8 object-contain"
      />
      <FloatingIcon
        src="/images/hartAndPlus.png"
        animation="spin"
        duration={8}
        className="hidden md:block absolute right-8 bottom-6 w-14 h-14 object-contain opacity-60"
      />

      <div className="relative max-w-[1300px] mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block bg-amber-50 text-amber-600 px-4 py-1.5 rounded-full font-semibold text-[0.85rem] border border-dashed border-amber-200 mb-4">
            Testimonial
          </span>
          <h2 className="text-blue-900 font-extrabold text-[1.8rem] sm:text-[2.2rem] md:text-[2.6rem]">
            Patient Stories: Journeys of Hope
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* LEFT: hexagon circle (mobile pe bhi, upar dikhega) */}
          <div className="flex lg:col-span-6 justify-center px-2">
            <div className="relative w-full max-w-[340px] sm:max-w-[420px] xl:max-w-[480px] aspect-square">
              <svg
                viewBox={`0 0 ${SIZE} ${SIZE}`}
                width="100%"
                height="100%"
                className="absolute inset-0"
              >
                <path
                  d={roundedHex(OUTER_R, 50)}
                  fill="none"
                  stroke="#ecb442"
                  strokeWidth="2.5"
                />
                <path
                  d={roundedHex(148, 36, 30)}
                  fill="none"
                  stroke="#ecb442"
                  strokeWidth="2.5"
                />
                <path
                  d={roundedHex(105, 30)}
                  fill="#ecb442"
                  stroke="#ecb442"
                  strokeWidth="2"
                />
              </svg>

              {avatars.map((t, i) => {
                const rad = (ANGLES[i] * Math.PI) / 180
                const cx = C + OUTER_APOTHEM * Math.cos(rad)
                const cy = C + OUTER_APOTHEM * Math.sin(rad)
                const active = i === index
                return (
                  <button
                    key={t.id}
                    onClick={() => setIndex(i)}
                    aria-label={t.name}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden bg-white shadow-lg transition-all duration-300 ${
                      active ? 'ring-4 ring-amber-400 scale-110' : 'ring-2 ring-white'
                    }`}
                    style={{
                      width: `${(AVATAR / SIZE) * 100}%`,
                      height: `${(AVATAR / SIZE) * 100}%`,
                      left: `${(cx / SIZE) * 100}%`,
                      top: `${(cy / SIZE) * 100}%`,
                    }}
                  >
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-full h-full object-cover"
                    />
                  </button>
                )
              })}
            </div>
          </div>

          <div
            className="lg:col-span-6 min-w-0 max-w-[520px] w-full mx-auto"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="overflow-hidden pt-12 pb-14 -mx-3 px-0">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${index * 100}%)` }}
              >
                {testimonials.map((t) => (
                  <div key={t.id} className="w-full flex-shrink-0 px-3">
                    <div className="relative bg-white rounded-[2rem] px-6 sm:px-8 pt-12 pb-8 shadow-[0_15px_45px_rgba(236,180,66,0.10)] border border-amber-100">
                      <div className="absolute -top-8 left-8 w-[75px] h-[75px] rounded-2xl bg-blue-900 flex items-center justify-center">
                        <Quote size={32} className="text-amber-400" fill="currentColor" />
                      </div>

                      <p className="italic text-blue-900 leading-relaxed min-h-[130px]">
                        {t.text}
                      </p>

                      <h4 className="mt-4 font-bold text-blue-900 text-xl">{t.name}</h4>
                      <p className="text-blue-900 text-xs font-bold uppercase mt-1">
                        {t.role}
                      </p>

                      <Quote
                        size={70}
                        className="absolute right-6 bottom-6 text-blue-900/25 rotate-180"
                        fill="currentColor"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-4 mt-4 px-3">
              <button
                onClick={prev}
                aria-label="Previous"
                className="w-[50px] h-[50px] rounded-lg bg-blue-900/60 text-amber-400 flex items-center justify-center hover:bg-blue-900 transition"
              >
                <ArrowLeft size={22} />
              </button>
              <button
                onClick={next}
                aria-label="Next"
                className="w-[50px] h-[50px] rounded-lg bg-blue-900 text-amber-400 flex items-center justify-center hover:bg-blue-800 transition"
              >
                <ArrowRight size={22} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}