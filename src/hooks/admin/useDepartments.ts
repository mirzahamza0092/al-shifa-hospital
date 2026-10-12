'use client'

import { useCallback, useEffect, useState } from 'react'

export type Department = {
  id: string
  name: string
  slug: string
  icon?: string | null
  description?: string | null
}

export type DepartmentInput = {
  name: string
  slug: string
  description: string
}

export function useDepartments() {
  const [departments, setDepartments] = useState<Department[]>([])
  const [loading, setLoading] = useState(false)

  const fetchAll = useCallback(async () => {
    const res = await fetch('/api/admin/departments')
    const data = await res.json()
    setDepartments(data.departments || [])
  }, [])

  useEffect(() => {
    fetchAll()
  }, [fetchAll])

  async function create(input: DepartmentInput) {
    setLoading(true)
    const res = await fetch('/api/admin/departments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(input),
    })
    setLoading(false)
    if (res.ok) await fetchAll()
    return res.ok
  }

  async function update(id: string, input: DepartmentInput) {
    setLoading(true)
    const res = await fetch(`/api/admin/departments/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(input),
    })
    setLoading(false)
    if (res.ok) await fetchAll()
    return res.ok
  }

  async function remove(id: string) {
    const res = await fetch(`/api/admin/departments/${id}`, { method: 'DELETE' })
    if (res.ok) await fetchAll()
    return res.ok
  }

  return { departments, loading, create, update, remove }
}