import { NextRequest, NextResponse } from 'next/server'
import {
  updateComplaintStatus,
  updateFeedbackRead,
} from '@/db/repositories/feedbackRepository'
import { requireAdmin } from '@/lib/auth/requireAdmin'
import {
  isFeedbackType,
  isValidFeedbackId,
  parseFeedbackUpdate,
} from '@/services/adminFeedbackService'

type Context = { params: Promise<{ type: string; id: string }> }

export async function PATCH(request: NextRequest, { params }: Context) {
  const unauthorized = requireAdmin(request)
  if (unauthorized) return unauthorized

  try {
    const { type, id } = await params

    if (!isFeedbackType(type) || !isValidFeedbackId(id)) {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
    }

    const update = parseFeedbackUpdate(type, await request.json())
    if (!update) {
      return NextResponse.json({ error: 'Nothing to update' }, { status: 400 })
    }

    if (update.is_read !== undefined) await updateFeedbackRead(type, id, update.is_read)
    if (update.status !== undefined) await updateComplaintStatus(id, update.status)

    return NextResponse.json({ success: true })
  } catch (err) {
    return NextResponse.json({ error: 'Failed to update feedback' }, { status: 500 })
  }
}