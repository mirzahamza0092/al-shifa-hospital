import { NextRequest, NextResponse } from 'next/server'
import { updateDoctor, deleteDoctor } from '@/db/repositories/doctorRepository'

type Ctx = { params: Promise<{ id: string }> }

export async function PUT(request: NextRequest, { params }: Ctx) {
  try {
    const { id } = await params
    const body = await request.json()
    const doctor = await updateDoctor(id, body)
    return NextResponse.json({ doctor })
  } catch {
    return NextResponse.json({ error: 'Failed to update doctor' }, { status: 500 })
  }
}

export async function DELETE(_request: NextRequest, { params }: Ctx) {
  try {
    const { id } = await params
    await deleteDoctor(id)
    return NextResponse.json({ message: 'Deleted' })
  } catch {
    return NextResponse.json({ error: 'Failed to delete doctor' }, { status: 500 })
  }
}