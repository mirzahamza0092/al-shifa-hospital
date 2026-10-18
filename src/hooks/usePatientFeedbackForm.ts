'use client'

import { useFeedbackForm } from '@/hooks/useFeedbackForm'
import { FEEDBACK_LOCATIONS } from '@/data/feedbackOptions'
import {
  validatePatientFeedback,
  type PatientFeedbackInput,
} from '@/components/services/feedbackService'

export type PatientFeedbackKind = 'compliment' | 'suggestion'

const ENDPOINTS: Record<PatientFeedbackKind, string> = {
  compliment: '/api/compliments',
  suggestion: '/api/suggestions',
}

const INITIAL_VALUES: PatientFeedbackInput = {
  patient_name: '',
  contact_number: '',
  location: FEEDBACK_LOCATIONS[0],
  message: '',
}

export function usePatientFeedbackForm(kind: PatientFeedbackKind) {
  return useFeedbackForm<PatientFeedbackInput>({
    endpoint: ENDPOINTS[kind],
    initialValues: INITIAL_VALUES,
    validate: validatePatientFeedback,
  })
}