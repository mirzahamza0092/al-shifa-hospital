import { NextRequest, NextResponse } from 'next/server'
import { markAllFeedbackRead } from '@/db/repositories/feedbackRepository'
import { requireAdmin } from '@/lib/auth/requireAdmin'
import { isFeedbackType } from '@/services/adminFeedbackService'

export async function POST(request: NextRequest) {
  const unauthorized = requireAdmin(request)
  if (unauthorized) return unauthorized

  try {
    const body = await request.json().catch(() => ({}))
    const type = isFeedbackType(body?.type) ? body.type : undefined
    await markAllFeedbackRead(type)
    return NextResponse.json({ success: true })
  } catch (err) {
    return NextResponse.json({ error: 'Failed to mark as read' }, { status: 500 })
  }
}