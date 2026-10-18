import { NextRequest, NextResponse } from 'next/server'
import { uploadDoctorPhoto } from '@/db/repositories/storageRepository'
import { requireAdmin } from '@/lib/auth/requireAdmin'
const MAX_SIZE = 2 * 1024 * 1024

export async function POST(request: NextRequest) {
  const unauthorized = requireAdmin(request)
  if (unauthorized) return unauthorized

  try {
    const formData = await request.formData()
    const file = formData.get('file')

    if (!(file instanceof File)) {
      return NextResponse.json({ error: 'File is required' }, { status: 400 })
    }
    if (!file.type.startsWith('image/')) {
      return NextResponse.json({ error: 'Only image files are allowed' }, { status: 400 })
    }
    if (file.size > MAX_SIZE) {
      return NextResponse.json({ error: 'Image must be smaller than 2MB' }, { status: 400 })
    }

    const url = await uploadDoctorPhoto(file)
    return NextResponse.json({ url }, { status: 201 })
  } catch (err) {
    return NextResponse.json({ error: 'Failed to upload photo' }, { status: 500 })
  }
}