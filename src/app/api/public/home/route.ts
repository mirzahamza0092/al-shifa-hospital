import { NextResponse } from 'next/server'
import { getAllDoctors } from '@/db/repositories/doctorRepository'
import { getAllDepartments } from '@/db/repositories/departmentRepository'

export async function GET() {
  try {
    const [doctors, departments] = await Promise.all([
      getAllDoctors(),
      getAllDepartments(),
    ])

    const activeDoctors = doctors.filter((d) => d.is_active)

    return NextResponse.json({
      doctors: activeDoctors,
      departments,
    })
  } catch (err) {
    return NextResponse.json({ error: 'Failed to fetch home data' }, { status: 500 })
  }
}