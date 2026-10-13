'use client'

import { useEffect, useState } from 'react'
import type { Doctor, DoctorInput } from '@/hooks/admin/useDoctors'
import type { Department } from '@/hooks/admin/useDepartments'
import { inputClass, primaryBtn, secondaryBtn } from './adminStyles'
import { useDoctorPhotoUpload } from '@/hooks/admin/useDoctorPhotoUpload'

const EMPTY: DoctorInput = {
  name: '',
  photo_url: '',
  designation: '',
  department_id: '',
  bio: '',
  qualifications: '',
  specialization: '',
  is_active: true,
}

type Props = {
  editing: Doctor | null
  departments: Department[]
  loading: boolean
  onSubmit: (values: DoctorInput) => Promise<boolean>
  onCancel: () => void
}

export default function DoctorForm({ editing, departments, loading, onSubmit, onCancel }: Props) {
  const [form, setForm] = useState<DoctorInput>(EMPTY)
  const { uploading, uploadError, uploadPhoto } = useDoctorPhotoUpload()
  useEffect(() => {
    setForm(
      editing
        ? {
            name: editing.name,
            photo_url: editing.photo_url || '',
            designation: editing.designation || '',
            department_id: editing.department_id || '',
            bio: editing.bio || '',
            qualifications: editing.qualifications || '',
            specialization: editing.specialization || '',
            is_active: editing.is_active,
          }
        : EMPTY
    )
  }, [editing])

  async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const input = e.target
    const file = input.files?.[0]
    if (!file) return

    const url = await uploadPhoto(file)
    if (url) setForm((f) => ({ ...f, photo_url: url }))
    input.value = ''
  }
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const ok = await onSubmit(form)
    if (ok) setForm(EMPTY)
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow p-5 flex flex-col gap-3 mb-6 max-w-xl">
      <h2 className="font-semibold text-blue-900">{editing ? 'Edit Doctor' : 'Add Doctor'}</h2>
      <input className={inputClass} placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
      <input className={inputClass} placeholder="Designation (e.g. Consultant)" value={form.designation} onChange={(e) => setForm({ ...form, designation: e.target.value })} />
      <select className={inputClass} value={form.department_id} onChange={(e) => setForm({ ...form, department_id: e.target.value })}>
        <option value="">-- Select Department--</option>
        {departments.map((d) => (
          <option key={d.id} value={d.id}>{d.name}</option>
        ))}
      </select>
      <input className={inputClass} placeholder="Specialization" value={form.specialization} onChange={(e) => setForm({ ...form, specialization: e.target.value })} />
      <input className={inputClass} placeholder="Qualifications" value={form.qualifications} onChange={(e) => setForm({ ...form, qualifications: e.target.value })} />

      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full overflow-hidden bg-slate-100 border flex items-center justify-center text-xs text-slate-400 shrink-0">
          {form.photo_url ? (
            <img src={form.photo_url} alt="Doctor" className="w-full h-full object-cover" />
          ) : (
            'No photo'
          )}
        </div>
        <div className="flex flex-col gap-1">
          <input type="file" accept="image/*" onChange={handleFile} disabled={uploading} className="text-sm" />
          {uploading && <span className="text-xs text-blue-900">Uploading...</span>}
          {uploadError && <span className="text-xs text-red-600">{uploadError}</span>}
        </div>
      </div>

      <textarea className={inputClass} placeholder="Bio" value={form.bio} onChange={(e) => setForm({ ...form, bio: e.target.value })} />
      <label className="flex items-center gap-2 text-sm">
        <input type="checkbox" checked={form.is_active} onChange={(e) => setForm({ ...form, is_active: e.target.checked })} />
        Active
      </label>
      <div className="flex gap-2">
        <button type="submit" disabled={loading || uploading} className={primaryBtn}>
          {loading ? 'Saving...' : editing ? 'Update' : 'Add'}
        </button>
        {editing && (
          <button type="button" onClick={onCancel} className={secondaryBtn}>Cancel</button>
        )}
      </div>
    </form>
  )
}