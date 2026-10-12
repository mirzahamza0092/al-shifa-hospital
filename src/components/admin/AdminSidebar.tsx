'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

const ITEMS = [
  { label: 'Departments', href: '/admin/departments' },
  { label: 'Doctors', href: '/admin/doctors' },
]

export default function AdminSidebar() {
  const pathname = usePathname()
  const router = useRouter()

  async function handleLogout() {
    await fetch('/api/admin/logout', { method: 'POST' })
    router.push('/admin/login')
  }

  return (
    <aside className="w-56 shrink-0 bg-blue-900 text-white flex flex-col p-4">
      <h2 className="text-lg font-bold mb-6">Admin Panel</h2>

      <nav className="flex flex-col gap-2 flex-1">
        {ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`rounded-lg px-3 py-2 text-sm ${
              pathname.startsWith(item.href) ? 'bg-amber-400 text-blue-900 font-semibold' : 'hover:bg-blue-800'
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <button onClick={handleLogout} className="text-left rounded-lg px-3 py-2 text-sm hover:bg-blue-800">
        Logout
      </button>
    </aside>
  )
}