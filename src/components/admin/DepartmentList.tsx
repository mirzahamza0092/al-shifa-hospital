'use client'

import type { Department } from '@/hooks/admin/useDepartments'
import { secondaryBtn } from './adminStyles'

type Props = {
  departments: Department[]
  onEdit: (dept: Department) => void
  onDelete: (id: string) => void
}

export default function DepartmentList({ departments, onEdit, onDelete }: Props) {
  return (
    <div className="bg-white rounded-xl shadow overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="bg-slate-100 text-left">
          <tr>
            <th className="p-3">Name</th>
            <th className="p-3">Slug</th>
            <th className="p-3">Description</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((d) => (
            <tr key={d.id} className="border-t">
              <td className="p-3 font-semibold">{d.name}</td>
              <td className="p-3">{d.slug}</td>
              <td className="p-3">{d.description}</td>
              <td className="p-3 flex gap-2">
                <button onClick={() => onEdit(d)} className={secondaryBtn}>Edit</button>
                <button onClick={() => onDelete(d.id)} className="border border-red-300 text-red-600 text-sm rounded-lg px-4 py-2">Delete</button>
              </td>
            </tr>
          ))}
          {departments.length === 0 && (
            <tr><td className="p-3 text-slate-500" colSpan={4}>No departments found</td></tr>
          )}
        </tbody>
      </table>
    </div>
  )
}