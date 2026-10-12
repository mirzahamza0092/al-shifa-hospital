'use client'

import { useState } from 'react'
import { useDoctors, type Doctor, type DoctorInput } from '@/hooks/admin/useDoctors'
import { useDepartments } from '@/hooks/admin/useDepartments'
import DoctorForm from '@/components/admin/DoctorForm'
import DoctorList from '@/components/admin/DoctorList'

export default function DoctorsPage() {
  const { doctors, loading, create, update, remove } = useDoctors()
  const { departments } = useDepartments()
  const [editing, setEditing] = useState<Doctor | null>(null)

  async function handleSubmit(values: DoctorInput) {
    const ok = editing ? await update(editing.id, values) : await create(values)
    if (ok) setEditing(null)
    else alert('Save nahi hua')
    return ok
  }

  async function handleDelete(id: string) {
    if (!confirm('Delete karna hai?')) return
    const ok = await remove(id)
    if (!ok) alert('Delete nahi hua. Shayad is doctor ki appointments ya schedule hai.')
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-blue-900 mb-6">Doctors</h1>
      <DoctorForm editing={editing} departments={departments} loading={loading} onSubmit={handleSubmit} onCancel={() => setEditing(null)} />
      <DoctorList doctors={doctors} departments={departments} onEdit={setEditing} onDelete={handleDelete} />
    </div>
  )
}