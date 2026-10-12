import { NextResponse } from 'next/server'
import { getActiveDoctors } from '@/db/repositories/doctorRepository'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const doctors = await getActiveDoctors()
    return NextResponse.json({ doctors })
  } catch {
    return NextResponse.json({ error: 'Failed to fetch doctors' }, { status: 500 })
  }
}