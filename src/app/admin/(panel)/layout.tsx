import AdminSidebar from '@/components/admin/AdminSidebar'
import LoginBackground from '@/components/admin/LoginBackground'

export default function AdminPanelLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen bg-white">
      <LoginBackground fixed />
      <AdminSidebar />
      <main className="relative z-10 mx-auto max-w-[1400px] p-4 sm:p-6 md:p-8">{children}</main>
    </div>
  )
}