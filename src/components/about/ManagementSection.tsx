'use client'

import { motion } from 'framer-motion'
import { managers } from '@/data/managers'
import FloatingIcon from '@/components/ui/FloatingIcon'
import ScaleOnLarge from '@/components/ui/ScaleOnLarge'

const SIZE = 300
const C = SIZE / 2
const VERTEX = [0, 60, 120, 180, 240, 300]

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

function ManagerCard({ manager }: { manager: (typeof managers)[number] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-[340px]"
    >
      <div className="group bg-white rounded-3xl border-2 border-[#b8cfdb] px-5 pt-8 pb-8 sm:px-8 text-center cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:border-transparent hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)]">
        <div className="relative w-full max-w-[260px] aspect-square mx-auto mb-4">
          <svg
            viewBox={`0 0 ${SIZE} ${SIZE}`}
            width="100%"
            height="100%"
            className="absolute inset-0"
            fill="none"
          >
            <path
              d={roundedHex(135, 42, -4)}
              strokeWidth="3"
              className="stroke-[#d5e0e6] group-hover:stroke-blue-900 transition-colors duration-300"
            />
            <path
              d={roundedHex(102, 34, 8)}
              strokeWidth="3"
              className="stroke-[#f7ecd3] group-hover:stroke-amber-400 transition-colors duration-300"
            />
          </svg>

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[52%] h-[52%] overflow-hidden rounded-b-[2.5rem]">
            <img
              src={manager.image}
              alt={manager.name}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        <h4 className="font-bold text-blue-900 text-lg sm:text-xl">{manager.name}</h4>
        <p className="text-amber-500 text-xs sm:text-sm uppercase mt-2 mb-8">{manager.role}</p>
      </div>
    </motion.div>
  )
}

export default function ManagementSection() {
  const [head, ...rest] = managers

  return (
    <section className="relative bg-white py-14 md:py-20 px-4 sm:px-6 md:px-12 overflow-hidden">
      <FloatingIcon
        src="/images/goldenWinged.png"
        animation="float"
        duration={2.6}
        distance={14}
        className="hidden lg:block absolute left-[0%] top-1/2 w-8 h-auto object-contain"
      />
      <FloatingIcon
        src="/images/astrature.png"
        animation="sway"
        duration={2.5}
        distance={12}
        className="hidden lg:block absolute right-[4%] top-1/2 w-10 h-10 object-contain"
      />
            <ScaleOnLarge>
      <h2 className="text-center text-blue-900 font-extrabold text-[1.8rem] sm:text-[2.2rem] md:text-[2.6rem] mb-14">
        Meet Our Management
      </h2>

      <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-10 md:gap-12">
        <div className="relative w-full flex justify-center">
          <FloatingIcon
            src="/images/bedSun.PNG"
            animation="float"
            duration={2.5}
            distance={10}
            className="hidden md:block absolute left-[0%] lg:left-[18%] top-1/2 w-10 h-10 object-contain"
          />
          <ManagerCard manager={head} />
          <FloatingIcon
            src="/images/pad.png"
            animation="sway"
            duration={2.5}
            distance={12}
            className="hidden md:block absolute right-[8%] lg:right-[18%] top-1/2 w-10 h-10 object-contain"
          />
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 justify-items-center">
          {rest.map((m) => (
            <ManagerCard key={m.id} manager={m} />
          ))}
        </div>
      </div>
      </ScaleOnLarge>
    </section>
  )
}