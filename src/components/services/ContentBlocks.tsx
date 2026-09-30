import Link from 'next/link'
import { Phone } from 'lucide-react'
import { Block } from '@/data/serviceDetails'


function Inline({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g)
  return (
    <>
      {parts.map((part, i) => {
        const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
        if (link) {
          const [, label, href] = link
          const cls = 'text-blue-600 underline'
          return href.startsWith('/') ? (
            <Link key={i} href={href} className={cls}>
              {label}
            </Link>
          ) : (
            <a key={i} href={href} className={cls}>
              {label}
            </a>
          )
        }
        const bold = part.match(/^\*\*([^*]+)\*\*$/)
        if (bold) {
          return (
            <b key={i} className="font-semibold text-slate-800">
              {bold[1]}
            </b>
          )
        }
        return <span key={i}>{part}</span>
      })}
    </>
  )
}

export default function ContentBlocks({ blocks }: { blocks: Block[] }) {
  return (
    <div>
      {blocks.map((b, i) => {
        switch (b.type) {
          case 'h2':
            return (
              <h2
                key={i}
                className="mt-8 mb-3 text-blue-900 font-bold leading-snug text-[1.3rem] sm:text-[1.6rem]"
              >
                {b.text}
              </h2>
            )
          case 'h3':
            return (
              <h3 key={i} className="mt-6 mb-2 text-blue-900 font-semibold text-base sm:text-lg">
                {b.text}
              </h3>
            )
          case 'p':
            return (
              <p key={i} className="mb-4 text-slate-600 text-sm sm:text-[0.95rem] leading-relaxed">
                <Inline text={b.text} />
              </p>
            )
          case 'ul':
            return (
              <ul
                key={i}
                className="mb-4 ml-5 list-disc space-y-2 text-slate-600 text-sm sm:text-[0.95rem] leading-relaxed"
              >
                {b.items.map((item, j) => (
                  <li key={j}>
                    <Inline text={item} />
                  </li>
                ))}
              </ul>
            )
          case 'call':
            return (
              <p key={i} className="mb-4 flex items-center gap-2 text-slate-700 text-sm sm:text-[0.95rem]">
                <Phone size={16} className="text-red-700 shrink-0" />
                <span>
                  {b.text}{' '}
                  <a
                    href={`tel:${b.phone.replace(/[^0-9+]/g, '')}`}
                    className="text-blue-600 underline"
                  >
                    {b.phone}
                  </a>
                </span>
              </p>
            )
        }
      })}
    </div>
  )
}