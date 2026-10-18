'use client'

import { useState } from 'react'

type Options<T> = {
  endpoint: string
  initialValues: T
  validate: (values: T) => string | null
}

export function useFeedbackForm<T extends Record<string, string>>({
  endpoint,
  initialValues,
  validate,
}: Options<T>) {
  const [values, setValues] = useState<T>(initialValues)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  function setValue(field: keyof T & string, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }))
    setSuccess(false)
  }

  async function submit(): Promise<boolean> {
    setError('')
    setSuccess(false)

    const validationError = validate(values)
    if (validationError) {
      setError(validationError)
      return false
    }

    setLoading(true)
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Failed to submit')

      setValues(initialValues)
      setSuccess(true)
      return true
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit')
      return false
    } finally {
      setLoading(false)
    }
  }

  return { values, setValue, submit, loading, error, success }
}