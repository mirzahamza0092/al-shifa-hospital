import { NextRequest, NextResponse } from 'next/server'
import { updateDepartment, deleteDepartment } from '@/db/repositories/departmentRepository'
import { requireAdmin } from '@/lib/auth/requireAdmin'
type Ctx = { params: Promise<{ id: string }> }

export async function PUT(request: NextRequest, { params }: Ctx) {
  const unauthorized = requireAdmin(request)
  if (unauthorized) return unauthorized

  try {
    const { id } = await params
    const body = await request.json()
    const department = await updateDepartment(id, body)
    return NextResponse.json({ department })
  } catch {
    return NextResponse.json({ error: 'Failed to update department' }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: Ctx) {
  const unauthorized = requireAdmin(request)
  if (unauthorized) return unauthorized

  try {
    const { id } = await params
    await deleteDepartment(id)
    return NextResponse.json({ message: 'Deleted' })
  } catch {
    return NextResponse.json({ error: 'Failed to delete department' }, { status: 500 })
  }
}