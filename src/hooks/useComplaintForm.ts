'use client'

import { useFeedbackForm } from '@/hooks/useFeedbackForm'
import { validateComplaint, type ComplaintInput } from '@/components/services/feedbackService'

const INITIAL_VALUES: ComplaintInput = {
  patient_name: '',
  contact_number: '',
  mr_number: '',
  complaint_type: '',
  complaint_date: '',
  message: '',
}

export function useComplaintForm() {
  return useFeedbackForm<ComplaintInput>({
    endpoint: '/api/complaints',
    initialValues: INITIAL_VALUES,
    validate: validateComplaint,
  })
}