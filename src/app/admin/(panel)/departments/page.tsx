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
    else alert('Not saved')
    return ok
  }

  async function handleDelete(id: string) {
    if (!confirm('Do you want to Delete?')) return
    const ok = await remove(id)
    if (!ok) alert('It has not been deleted. If there are doctors from that department, remove them first.')
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-blue-900 mb-6">Departments</h1>
      <DepartmentForm
        editing={editing}
        loading={loading}
        existingSlugs={departments.map((d) => d.slug)}
        onSubmit={handleSubmit}
        onCancel={() => setEditing(null)}
      />
      <DepartmentList departments={departments} onEdit={setEditing} onDelete={handleDelete} />
    </div>
  )
}