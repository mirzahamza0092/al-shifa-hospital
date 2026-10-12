'use client'

import { useEffect, useMemo, useState } from 'react'

export type PublicDoctor = {
  id: string
  name: string
  photo_url: string | null
  designation: string | null
  departmentName: string | null
}

const MIN_CARDS = 6 

export function usePublicDoctors() {
  const [doctors, setDoctors] = useState<PublicDoctor[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        const res = await fetch('/api/doctors')
        const data = await res.json()
        if (cancelled) return

        const list: PublicDoctor[] = (data.doctors || []).map((d: any) => {
          const dept = Array.isArray(d.departments) ? d.departments[0] : d.departments
          return {
            id: d.id,
            name: d.name,
            photo_url: d.photo_url || null,
            designation: d.designation || null,
            departmentName: dept?.name || null,
          }
        })
        setDoctors(list)
      } catch {
        if (!cancelled) setDoctors([])
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    load()
    return () => {
      cancelled = true
    }
  }, [])

  const marqueeDoctors = useMemo(() => {
    if (doctors.length === 0) return []
    const repeats = Math.ceil(MIN_CARDS / doctors.length)
    const base = Array.from({ length: repeats }, () => doctors).flat()
    return [...base, ...base]
  }, [doctors])

  return { doctors, marqueeDoctors, loading }
}