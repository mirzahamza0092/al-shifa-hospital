'use client'

import { useEffect, useState } from 'react'
import type { Department, DepartmentInput } from '@/hooks/admin/useDepartments'
import { departmentSuggestions, getSlug } from '@/data/departmentSuggestions'
import { inputClass, primaryBtn, secondaryBtn } from './adminStyles'

const EMPTY: DepartmentInput = { name: '', slug: '', description: '' }

type Props = {
  editing: Department | null
  loading: boolean
  existingSlugs?: string[]
  onSubmit: (values: DepartmentInput) => Promise<boolean>
  onCancel: () => void
}

export default function DepartmentForm({
  editing,
  loading,
  existingSlugs = [],
  onSubmit,
  onCancel,
}: Props) {
  const [form, setForm] = useState<DepartmentInput>(EMPTY)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setForm(
      editing
        ? { name: editing.name, slug: editing.slug, description: editing.description || '' }
        : EMPTY
    )
  }, [editing])

  const query = form.name.trim().toLowerCase()
  const suggestions = departmentSuggestions.filter(
    (s) => !existingSlugs.includes(s.slug) && s.name.toLowerCase().includes(query)
  )

  function handleNameChange(name: string) {
    setForm({ ...form, name, slug: editing ? form.slug : getSlug(name) })
    setOpen(true)
  }

  function pick(name: string) {
    setForm({ ...form, name, slug: editing ? form.slug : getSlug(name) })
    setOpen(false)
  }

  const isDuplicate = !editing && existingSlugs.includes(form.slug)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (isDuplicate) return
    const ok = await onSubmit(form)
    if (ok) {
      setForm(EMPTY)
      setOpen(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow p-5 flex flex-col gap-3 mb-6 max-w-xl">
      <h2 className="font-semibold text-blue-900">{editing ? 'Edit Department' : 'Add Department'}</h2>

      <div className="relative">
        <input
          className={inputClass}
          placeholder="Type a department name or choose from the list"
          value={form.name}
          onChange={(e) => handleNameChange(e.target.value)}
          onFocus={() => setOpen(true)}
          onBlur={() => setOpen(false)}
          autoComplete="off"
          required
        />

        {open && suggestions.length > 0 && (
          <ul className="absolute left-0 right-0 top-full z-30 mt-1 max-h-60 overflow-y-auto rounded-lg border border-slate-200 bg-white shadow-xl">
            {suggestions.map((s) => (
              <li
                key={s.slug}
                onMouseDown={(e) => {
                  e.preventDefault() 
                  pick(s.name)
                }}
                className="cursor-pointer px-3 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-900"
              >
                {s.name}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <input
          className={`${inputClass} bg-slate-100 text-slate-500 cursor-not-allowed`}
          placeholder="Slug (generated automatically)"
          value={form.slug}
          readOnly
          tabIndex={-1}
        />
        <p className="mt-1 text-xs text-slate-400">
          {editing
            ? 'The slug cannot be changed once it has been created.'
            : 'The slug is generated from the name and cannot be edited.'}
        </p>
        {isDuplicate && (
          <p className="mt-1 text-xs text-red-600">This department already exists.</p>
        )}
      </div>

      <textarea
        className={inputClass}
        placeholder="Description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />

      <div className="flex gap-2">
        <button type="submit" disabled={loading || isDuplicate} className={primaryBtn}>
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