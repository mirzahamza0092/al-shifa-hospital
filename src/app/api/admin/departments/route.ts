import { NextRequest, NextResponse } from 'next/server'
import { getAllDepartments, createDepartment } from '@/db/repositories/departmentRepository'

export async function GET() {
  try {
    const departments = await getAllDepartments()
    return NextResponse.json({ departments })
  } catch (err) {
    return NextResponse.json({ error: 'Failed to fetch departments' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    if (!body.name || !body.slug) {
      return NextResponse.json(
        { error: 'Name and slug are required' },
        { status: 400 }
      )
    }

    const department = await createDepartment(body)
    return NextResponse.json({ department }, { status: 201 })
  } catch (err) {
    return NextResponse.json({ error: 'Failed to create department' }, { status: 500 })
  }
}