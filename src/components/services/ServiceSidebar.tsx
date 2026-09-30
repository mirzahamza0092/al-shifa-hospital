import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { SideItem } from '@/data/serviceDetails'

function Row({ item }: { item: SideItem }) {
  const cls =
    'flex items-start justify-between gap-3 bg-[#00507c] text-white text-xs sm:text-sm leading-snug rounded-lg px-4 py-3.5'
  const inner = (
    <>
      <span>{item.label}</span>
      <span className="shrink-0 w-7 h-7 rounded-md bg-amber-50 text-amber-500 flex items-center justify-center">
        <ChevronRight size={16} strokeWidth={3} />
      </span>
    </>
  )

  return item.href ? (
    <Link href={item.href} className={`${cls} hover:bg-blue-900 transition-colors`}>
      {inner}
    </Link>
  ) : (
    <div className={cls}>{inner}</div>
  )
}

export default function ServiceSidebar({ items }: { items: SideItem[] }) {
  return (
    <aside className="lg:sticky lg:top-24 self-start">
      <h3 className="text-blue-900 font-extrabold text-[1.6rem] sm:text-[1.9rem] mb-4">
        Our Services
      </h3>
      <div className="bg-white rounded-lg border border-slate-200 border-b-2 border-b-[#00507c] shadow-sm p-4 space-y-3">
        {items.map((item, i) => (
          <Row key={i} item={item} />
        ))}
      </div>
    </aside>
  )
}