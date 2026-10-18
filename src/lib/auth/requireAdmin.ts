import { NextRequest, NextResponse } from 'next/server'
import { verifyToken } from '@/lib/auth/token'

export function requireAdmin(request: NextRequest): NextResponse | null {
  const token = request.cookies.get('admin_token')?.value
  const admin = token ? verifyToken(token) : null

  if (!admin) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  return null
}