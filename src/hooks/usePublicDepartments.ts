'use client'

import { useEffect, useMemo, useState } from 'react'
import { getDepartmentIcon } from '@/lib/departmentIcon'
import { repeatForMarquee } from '@/lib/marquee'

export type PublicDepartment = {
  id: string
  name: string
  slug: string
  iconUrl: string
  description: string
}

export function usePublicDepartments() {
  const [departments, setDepartments] = useState<PublicDepartment[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        const res = await fetch('/api/departments')
        const data = await res.json()
        if (cancelled) return

        const list: PublicDepartment[] = (data.departments || []).map((d: any) => ({
          id: d.id,
          name: d.name,
          slug: d.slug,
          iconUrl: getDepartmentIcon(d.slug, d.icon),
          description: d.description || '',
        }))
        setDepartments(list)
      } catch {
        if (!cancelled) setDepartments([])
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    load()
    return () => {
      cancelled = true
    }
  }, [])

  const marqueeDepartments = useMemo(() => repeatForMarquee(departments), [departments])

  return { departments, marqueeDepartments, loading }
}