import { NextRequest, NextResponse } from 'next/server'
import { createSuggestion } from '@/db/repositories/suggestionRepository'
import {
  normalizePatientFeedback,
  parsePatientFeedbackBody,
  validatePatientFeedback,
} from '@/components/services/feedbackService'

export async function POST(request: NextRequest) {
  try {
    const input = parsePatientFeedbackBody(await request.json())
    const validationError = validatePatientFeedback(input)

    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 })
    }

    await createSuggestion(normalizePatientFeedback(input))
    return NextResponse.json({ success: true }, { status: 201 })
  } catch (err) {
    return NextResponse.json({ error: 'Failed to submit suggestion' }, { status: 500 })
  }
}