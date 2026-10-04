'use client'

import { Stethoscope, Timer, PhoneCall, LucideIcon } from 'lucide-react'
import FloatingIcon from '@/components/ui/FloatingIcon'
import WorkingHoursCard from '@/components/ui/WorkingHoursCard'
import { workingHoursCards, IconName } from '@/data/workingHoursData'
import ScaleOnLarge from '@/components/ui/ScaleOnLarge'

const ICONS: Record<IconName, LucideIcon> = { UserRound: Stethoscope, Timer, PhoneCall }

export default function WorkingHoursSection() {
  return (
    <section className="relative bg-white py-8 md:py-10 px-4 sm:px-6 md:px-12 overflow-hidden">
      <svg
        className="hidden md:block absolute top-1/2 left-0 w-full -translate-y-1/2 pointer-events-none"
        height="120"
        viewBox="0 0 1300 120"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M0 60 C 150 10, 300 110, 450 60 S 750 10, 900 60 S 1150 110, 1300 60"
          stroke="#cbd5e1"
          strokeWidth="2"
          strokeDasharray="8 8"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

        <FloatingIcon
            src="/images/bottleAndCap.PNG"
            animation="float"
            duration={2.4}
            distance={10}
            className="absolute left-6 bottom-6 w-10 h-10 object-contain"
        />
        <img
            src="/images/Medical.png"
            alt=""
            className="hidden md:block absolute right-62 bottom-1 w-10 h-10 object-contain"
        />
        <FloatingIcon
            src="/images/injection.PNG"
            animation="float"
            duration={2.4}
            distance={10}
            className="absolute right-10 top-2/3 w-6 h-6 object-contain"
        />
      <ScaleOnLarge>
      <h2 className="relative text-blue-900 font-extrabold text-center text-[1.8rem] sm:text-[2.2rem] md:text-[2.6rem] mb-14">
        Working Hours
      </h2>

      <div className="relative max-w-[840px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {workingHoursCards.map((card) => (
          <WorkingHoursCard
            key={card.id}
            icon={ICONS[card.icon]}
            title={card.title}
            buttonLabel={card.buttonLabel}
            variant={card.variant}
          >
            {card.lines && card.lines.map((line, i) => <p key={i}>{line}</p>)}

            {card.schedule &&
              card.schedule.map((row, i) => (
                <p key={i}>
                  <span className="font-semibold">{row.day}</span> {row.time}
                </p>
              ))}
          </WorkingHoursCard>
         ))}
      </div>
      </ScaleOnLarge>
    </section>
  )
}