'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { PhoneCall, Mail, MapPin, type LucideIcon } from 'lucide-react'
import { hospitalContact } from '@/data/contactInfo'

type CardLine = { text: string; href?: string }

type CardData = {
  title: string
  icon: LucideIcon
  border: string
  circle: string
  lines: CardLine[]
}

function InfoCard({ card }: { card: CardData }) {
  const [hovered, setHovered] = useState(false)
  const Icon = card.icon

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative flex flex-col items-center text-center gap-3 border ${card.border} bg-white rounded-2xl px-5 py-8 overflow-hidden shadow-sm transition-shadow duration-300 hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)]`}
    >
      <div className={`absolute -top-8 -left-7 w-28 h-28 rounded-full ${card.circle} opacity-70`} />

      <motion.div
        animate={hovered ? { x: [0, -3, 3, -3, 3, 0] } : { x: 0 }}
        transition={hovered ? { duration: 0.4, ease: 'easeInOut' } : { duration: 0.15 }}
        className="relative z-10 w-16 h-16 rounded-full bg-white shadow-[0_4px_14px_rgba(0,0,0,0.1)] flex items-center justify-center text-blue-900"
      >
        <Icon size={32} strokeWidth={1.6} />
      </motion.div>

      <h3 className="relative z-10 text-blue-900 font-bold text-lg">{card.title}</h3>

      <div className="relative z-10 flex flex-col gap-1 text-slate-600 text-sm">
        {card.lines.map((line) =>
          line.href ? (
            <a key={line.text} href={line.href} className="hover:text-blue-900 transition-colors">
              {line.text}
            </a>
          ) : (
            <span key={line.text}>{line.text}</span>
          )
        )}
      </div>
    </div>
  )
}

export default function ContactInfoCards() {
  const cards: CardData[] = [
    {
      title: 'Contact Number',
      icon: PhoneCall,
      border: 'border-violet-200',
      circle: 'bg-violet-100',
      lines: hospitalContact.phones.map((phone) => ({
        text: phone,
        href: `tel:${phone.replace(/[^\d+]/g, '')}`,
      })),
    },
    {
      title: 'Email Address',
      icon: Mail,
      border: 'border-rose-200',
      circle: 'bg-rose-100',
      lines: [{ text: hospitalContact.email, href: `mailto:${hospitalContact.email}` }],
    },
    {
      title: 'Address',
      icon: MapPin,
      border: 'border-emerald-200',
      circle: 'bg-emerald-100',
      lines: [{ text: hospitalContact.address }],
    },
  ]

  return (
    <div className="max-w-[1100px] mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
      {cards.map((card) => (
        <InfoCard key={card.title} card={card} />
      ))}
    </div>
  )
}