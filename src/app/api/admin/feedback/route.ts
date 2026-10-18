import { NextRequest, NextResponse } from 'next/server'
import { getFeedbackPage } from '@/db/repositories/feedbackRepository'
import { requireAdmin } from '@/lib/auth/requireAdmin'
import { parseFeedbackFilters } from '@/services/adminFeedbackService'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  const unauthorized = requireAdmin(request)
  if (unauthorized) return unauthorized

  try {
    const filters = parseFeedbackFilters(request.nextUrl.searchParams)
    const result = await getFeedbackPage(filters)
    return NextResponse.json(result)
  } catch (err) {
    return NextResponse.json({ error: 'Failed to load feedback' }, { status: 500 })
  }
}