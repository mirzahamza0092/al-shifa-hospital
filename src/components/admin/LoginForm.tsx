'use client'

import { useState } from 'react'
import { useLogin } from '@/hooks/admin/useLogin'
import { inputClass, primaryBtn } from './adminStyles'

export default function LoginForm() {
  const { login, error, loading } = useLogin()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    login(email, password)
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm bg-white rounded-xl shadow p-6 flex flex-col gap-4">
      <h1 className="text-xl font-bold text-blue-900">Admin Login</h1>
      <input className={inputClass} type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input className={inputClass} type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      {error && <p className="text-sm text-red-600">{error}</p>}
      <button type="submit" disabled={loading} className={primaryBtn}>
        {loading ? 'Logging in...' : 'Login'}
      </button>
    </form>
  )
}