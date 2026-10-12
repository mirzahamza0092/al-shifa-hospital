import { NextResponse } from 'next/server'
import { getPublicDepartments } from '@/db/repositories/departmentRepository'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const departments = await getPublicDepartments()
    return NextResponse.json({ departments })
  } catch {
    return NextResponse.json({ error: 'Failed to fetch departments' }, { status: 500 })
  }
}