'use client'

import { useEffect, useState } from 'react'

type Department = {
  id: string
  name: string
  slug: string
  icon?: string
  description?: string
}

export default function DepartmentsPage() {
  const [departments, setDepartments] = useState<Department[]>([])
  const [name, setName] = useState('')
  const [slug, setSlug] = useState('')
  const [description, setDescription] = useState('')
  const [loading, setLoading] = useState(false)

  async function fetchDepartments() {
    const res = await fetch('/api/admin/departments')
    const data = await res.json()
    setDepartments(data.departments || [])
  }

  useEffect(() => {
    fetchDepartments()
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)

    const res = await fetch('/api/admin/departments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, slug, description }),
    })

    if (res.ok) {
      setName('')
      setSlug('')
      setDescription('')
      fetchDepartments()
    } else {
      alert('Failed to create department')
    }

    setLoading(false)
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '600px' }}>
      <h1>Departments</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
        <div>
          <input
            placeholder="Name (e.g. Cardiology)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            placeholder="Slug (e.g. cardiology)"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            required
          />
        </div>
        <div>
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Saving...' : 'Add Department'}
        </button>
      </form>

      <ul>
        {departments.map((dept) => (
          <li key={dept.id}>
            <strong>{dept.name}</strong> ({dept.slug}) — {dept.description}
          </li>
        ))}
      </ul>
    </div>
  )
}