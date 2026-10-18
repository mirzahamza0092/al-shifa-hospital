import { NextRequest, NextResponse } from 'next/server'
import { createCompliment } from '@/db/repositories/complimentRepository'
import {
  normalizePatientFeedback,
  parsePatientFeedbackBody,
  validatePatientFeedback,
} from '@/services/feedbackService'

export async function POST(request: NextRequest) {
  try {
    const input = parsePatientFeedbackBody(await request.json())
    const validationError = validatePatientFeedback(input)

    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 })
    }

    await createCompliment(normalizePatientFeedback(input))
    return NextResponse.json({ success: true }, { status: 201 })
  } catch (err) {
    return NextResponse.json({ error: 'Failed to submit compliment' }, { status: 500 })
  }
}