'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Stethoscope, Mail, Lock, Eye, EyeOff } from 'lucide-react'
import { useLogin } from '@/hooks/admin/useLogin'

const fieldClass =
  'w-full bg-white text-slate-800 placeholder:text-slate-400 rounded-xl pl-11 pr-4 py-3 text-sm outline-none transition focus:ring-4 focus:ring-white/40'

export default function LoginForm() {
  const { login, error, loading } = useLogin()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    login(email, password)
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="relative w-full max-w-md overflow-hidden rounded-3xl bg-gradient-to-br from-[#03111f] via-[#00507c] to-red-600 p-8 flex flex-col gap-5 shadow-2xl shadow-blue-900/40 ring-1 ring-white/20"
    >
      <div className="pointer-events-none absolute -top-20 -left-20 h-56 w-56 rounded-full bg-sky-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-red-400/30 blur-3xl" />

      <div className="relative flex flex-col items-center text-center gap-2">
        <div className="w-16 h-16 rounded-2xl bg-white text-red-600 flex items-center justify-center shadow-lg shadow-black/30">
          <Stethoscope size={30} />
        </div>
        <h1 className="text-2xl font-bold text-white">Admin Login</h1>
        <p className="text-sm text-blue-100">Log in to your account.</p>
      </div>

      <div className="relative">
        <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#00507c]" />
        <input
          className={fieldClass}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="relative">
        <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#00507c]" />
        <input
          className={`${fieldClass} pr-12`}
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="button"
          onClick={() => setShowPassword((s) => !s)}
          aria-label={showPassword ? 'Hide password' : 'Show password'}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#00507c]"
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>

      {error && (
        <p className="relative text-sm text-red-700 bg-white rounded-lg px-3 py-2 shadow">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="relative w-full bg-white text-[#00507c] font-bold rounded-xl py-3 shadow-lg shadow-black/30 transition hover:bg-red-50 hover:text-red-600 active:scale-[0.98] disabled:opacity-60"
      >
        {loading ? 'Logging in...' : 'Login'}
      </button>
    </motion.form>
  )
}