import { NextRequest, NextResponse } from 'next/server'
import { getAllDoctors, createDoctor } from '@/db/repositories/doctorRepository'

export async function GET() {
  try {
    const doctors = await getAllDoctors()
    return NextResponse.json({ doctors })
  } catch (err) {
    return NextResponse.json({ error: 'Failed to fetch doctors' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    if (!body.name) {
      return NextResponse.json(
        { error: 'Name is required' },
        { status: 400 }
      )
    }

    const doctor = await createDoctor(body)
    return NextResponse.json({ doctor }, { status: 201 })
  } catch (err) {
    return NextResponse.json({ error: 'Failed to create doctor' }, { status: 500 })
  }
}