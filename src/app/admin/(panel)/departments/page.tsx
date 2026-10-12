'use client'

import { useState } from 'react'
import { useDepartments, type Department, type DepartmentInput } from '@/hooks/admin/useDepartments'
import DepartmentForm from '@/components/admin/DepartmentForm'
import DepartmentList from '@/components/admin/DepartmentList'

export default function DepartmentsPage() {
  const { departments, loading, create, update, remove } = useDepartments()
  const [editing, setEditing] = useState<Department | null>(null)

  async function handleSubmit(values: DepartmentInput) {
    const ok = editing ? await update(editing.id, values) : await create(values)
    if (ok) setEditing(null)
    else alert('Save nahi hua')
    return ok
  }

  async function handleDelete(id: string) {
    if (!confirm('Delete karna hai?')) return
    const ok = await remove(id)
    if (!ok) alert('Delete nahi hua. Agar is department ke doctors hain to pehle unhe hatao.')
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-blue-900 mb-6">Departments</h1>
      <DepartmentForm editing={editing} loading={loading} onSubmit={handleSubmit} onCancel={() => setEditing(null)} />
      <DepartmentList departments={departments} onEdit={setEditing} onDelete={handleDelete} />
    </div>
  )
}