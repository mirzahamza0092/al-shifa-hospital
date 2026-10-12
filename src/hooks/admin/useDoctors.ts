'use client'

import { useCallback, useEffect, useState } from 'react'

export type Doctor = {
  id: string
  name: string
  photo_url?: string | null
  designation?: string | null
  department_id?: string | null
  bio?: string | null
  qualifications?: string | null
  specialization?: string | null
  is_active: boolean
}

export type DoctorInput = {
  name: string
  photo_url: string
  designation: string
  department_id: string
  bio: string
  qualifications: string
  specialization: string
  is_active: boolean
}

function clean(input: DoctorInput) {
  return {
    ...input,
    photo_url: input.photo_url || null,
    designation: input.designation || null,
    department_id: input.department_id || null,
    bio: input.bio || null,
    qualifications: input.qualifications || null,
    specialization: input.specialization || null,
  }
}

export function useDoctors() {
  const [doctors, setDoctors] = useState<Doctor[]>([])
  const [loading, setLoading] = useState(false)

  const fetchAll = useCallback(async () => {
    const res = await fetch('/api/admin/doctors')
    const data = await res.json()
    setDoctors(data.doctors || [])
  }, [])

  useEffect(() => {
    fetchAll()
  }, [fetchAll])

  async function create(input: DoctorInput) {
    setLoading(true)
    const res = await fetch('/api/admin/doctors', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(clean(input)),
    })
    setLoading(false)
    if (res.ok) await fetchAll()
    return res.ok
  }

  async function update(id: string, input: DoctorInput) {
    setLoading(true)
    const res = await fetch(`/api/admin/doctors/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(clean(input)),
    })
    setLoading(false)
    if (res.ok) await fetchAll()
    return res.ok
  }

  async function remove(id: string) {
    const res = await fetch(`/api/admin/doctors/${id}`, { method: 'DELETE' })
    if (res.ok) await fetchAll()
    return res.ok
  }

  return { doctors, loading, create, update, remove }
}