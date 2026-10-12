'use client'

import { useEffect, useState } from 'react'
import type { Department, DepartmentInput } from '@/hooks/admin/useDepartments'
import { inputClass, primaryBtn, secondaryBtn } from './adminStyles'

const EMPTY: DepartmentInput = { name: '', slug: '', description: '' }

type Props = {
  editing: Department | null
  loading: boolean
  onSubmit: (values: DepartmentInput) => Promise<boolean>
  onCancel: () => void
}

export default function DepartmentForm({ editing, loading, onSubmit, onCancel }: Props) {
  const [form, setForm] = useState<DepartmentInput>(EMPTY)

  useEffect(() => {
    setForm(
      editing
        ? { name: editing.name, slug: editing.slug, description: editing.description || '' }
        : EMPTY
    )
  }, [editing])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const ok = await onSubmit(form)
    if (ok) setForm(EMPTY)
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow p-5 flex flex-col gap-3 mb-6 max-w-xl">
      <h2 className="font-semibold text-blue-900">{editing ? 'Edit Department' : 'Add Department'}</h2>
      <input className={inputClass} placeholder="Name (e.g. Cardiology)" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
      <input className={inputClass} placeholder="Slug (e.g. cardiology)" value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} required />
      <textarea className={inputClass} placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
      <div className="flex gap-2">
        <button type="submit" disabled={loading} className={primaryBtn}>
          {loading ? 'Saving...' : editing ? 'Update' : 'Add'}
        </button>
        {editing && (
          <button type="button" onClick={onCancel} className={secondaryBtn}>
            Cancel
          </button>
        )}
      </div>
    </form>
  )
}