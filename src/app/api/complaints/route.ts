import { NextRequest, NextResponse } from 'next/server'
import { createComplaint } from '@/db/repositories/complaintRepository'
import { normalizeComplaint, parseComplaintBody, validateComplaint } from '@/services/feedbackService'

export async function POST(request: NextRequest) {
  try {
    const input = parseComplaintBody(await request.json())
    const validationError = validateComplaint(input)

    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 })
    }

    await createComplaint(normalizeComplaint(input))
    return NextResponse.json({ success: true }, { status: 201 })
  } catch (err) {
    return NextResponse.json({ error: 'Failed to submit complaint' }, { status: 500 })
  }
}