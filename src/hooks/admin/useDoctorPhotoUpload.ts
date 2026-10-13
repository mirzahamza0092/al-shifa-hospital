'use client'

import { useState } from 'react'

export function useDoctorPhotoUpload() {
  const [uploading, setUploading] = useState(false)
  const [uploadError, setUploadError] = useState('')

  async function uploadPhoto(file: File): Promise<string | null> {
    setUploading(true)
    setUploadError('')
    try {
      const formData = new FormData()
      formData.append('file', file)
      const res = await fetch('/api/admin/upload', { method: 'POST', body: formData })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Upload failed')
      return data.url as string
    } catch (err) {
      setUploadError(err instanceof Error ? err.message : 'Upload failed')
      return null
    } finally {
      setUploading(false)
    }
  }

  return { uploading, uploadError, uploadPhoto }
}