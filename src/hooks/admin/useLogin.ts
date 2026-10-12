'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export function useLogin() {
  const router = useRouter()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function login(email: string, password: string) {
    setError('')
    setLoading(true)

    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
    const data = await res.json()

    if (res.ok) {
      router.push('/admin/departments')
    } else {
      setError(data.error || 'Login failed')
    }
    setLoading(false)
  }

  return { login, error, loading }
}