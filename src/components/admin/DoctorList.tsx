'use client'

import type { Doctor } from '@/hooks/admin/useDoctors'
import type { Department } from '@/hooks/admin/useDepartments'
import { secondaryBtn } from './adminStyles'

type Props = {
  doctors: Doctor[]
  departments: Department[]
  onEdit: (doc: Doctor) => void
  onDelete: (id: string) => void
}

export default function DoctorList({ doctors, departments, onEdit, onDelete }: Props) {
  function deptName(id?: string | null) {
    return departments.find((d) => d.id === id)?.name || '-'
  }

  return (
    <div className="bg-white rounded-xl shadow overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="bg-slate-100 text-left">
          <tr>
            <th className="p-3">Name</th>
            <th className="p-3">Designation</th>
            <th className="p-3">Department</th>
            <th className="p-3">Status</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((d) => (
            <tr key={d.id} className="border-t">
              <td className="p-3 font-semibold">{d.name}</td>
              <td className="p-3">{d.designation || '-'}</td>
              <td className="p-3">{deptName(d.department_id)}</td>
              <td className="p-3">{d.is_active ? 'Active' : 'Inactive'}</td>
              <td className="p-3 flex gap-2">
                <button onClick={() => onEdit(d)} className={secondaryBtn}>Edit</button>
                <button onClick={() => onDelete(d.id)} className="border border-red-300 text-red-600 text-sm rounded-lg px-4 py-2">Delete</button>
              </td>
            </tr>
          ))}
          {doctors.length === 0 && (
            <tr><td className="p-3 text-slate-500" colSpan={5}>Koi doctor nahi hai</td></tr>
          )}
        </tbody>
      </table>
    </div>
  )
}