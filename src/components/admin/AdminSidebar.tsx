'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Stethoscope, Building2, Users, MessageSquare, LogOut } from 'lucide-react'
import { useUnreadFeedbackCounts } from '@/hooks/admin/useUnreadFeedbackCounts'

const ITEMS = [
  { label: 'Departments', href: '/admin/departments', Icon: Building2 },
  { label: 'Doctors', href: '/admin/doctors', Icon: Users },
  { label: 'Feedback', href: '/admin/feedback', Icon: MessageSquare },
]

export default function AdminSidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const { counts } = useUnreadFeedbackCounts()
  async function handleLogout() {
    await fetch('/api/admin/logout', { method: 'POST' })
    router.push('/admin/login')
  }

  return (
    <div className="sticky top-3 z-20 mx-auto max-w-[1400px] px-4 pt-3 sm:px-6 md:px-8">
      <header className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-100 bg-white/95 px-4 py-3 shadow-xl shadow-blue-900/15 backdrop-blur sm:px-5">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#00507c] to-red-600 text-white shadow-md shadow-blue-900/30">
            <Stethoscope size={22} />
          </div>
          <h2 className="text-lg font-bold text-[#00507c]">Admin Panel</h2>
        </div>

        <nav className="order-last flex w-full items-center gap-2 overflow-x-auto md:order-none md:w-auto">
          {ITEMS.map(({ label, href, Icon }) => {
            const active = pathname.startsWith(href)
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-2 whitespace-nowrap rounded-xl px-4 py-2.5 text-sm font-medium transition ${
                  active
                    ? 'bg-gradient-to-r from-[#00507c] to-red-600 font-semibold text-white shadow-md shadow-blue-900/30'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-[#00507c]'
                }`}
              >
                <Icon size={16} />
                {label}
                {href === '/admin/feedback' && counts.total > 0 && (
                  <span className="min-w-[1.25rem] rounded-full bg-amber-500 px-1.5 py-0.5 text-center text-[0.7rem] font-bold leading-none text-white">
                    {counts.total > 99 ? '99+' : counts.total}
                  </span>
                )}
              </Link>
            )
          })}
        </nav>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 rounded-xl border border-red-200 px-4 py-2.5 text-sm font-medium text-red-600 transition hover:bg-red-600 hover:text-white"
        >
          <LogOut size={16} />
          Logout
        </button>
      </header>
    </div>
  )
}