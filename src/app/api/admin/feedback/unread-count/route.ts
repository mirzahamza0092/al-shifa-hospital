import { NextRequest, NextResponse } from 'next/server'
import { getUnreadCounts } from '@/db/repositories/feedbackRepository'
import { requireAdmin } from '@/lib/auth/requireAdmin'
export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  const unauthorized = requireAdmin(request)
  if (unauthorized) return unauthorized

  try {
    const counts = await getUnreadCounts()
    return NextResponse.json(counts)
  } catch (err) {
    return NextResponse.json({ error: 'Failed to load unread count' }, { status: 500 })
  }
}