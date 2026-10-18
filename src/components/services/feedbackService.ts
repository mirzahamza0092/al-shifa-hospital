import {
  COMPLAINT_TYPES,
  FEEDBACK_LOCATIONS,
  MAX_MESSAGE_LENGTH,
} from '@/data/feedbackOptions'

export type ComplaintInput = {
  patient_name: string
  contact_number: string
  mr_number: string
  complaint_type: string
  complaint_date: string
  message: string
}

export type PatientFeedbackInput = {
  patient_name: string
  contact_number: string
  location: string
  message: string
}

function toText(value: unknown): string {
  return typeof value === 'string' ? value : ''
}

function isValidPhone(value: string): boolean {
  const digits = value.replace(/\D/g, '')
  return /^[0-9+\-\s()]+$/.test(value.trim()) && digits.length >= 10 && digits.length <= 13
}

function getNameError(name: string): string | null {
  const text = name.trim()
  if (!text) return 'Patient name is required'
  if (text.length > 100) return 'Patient name is too long'
  return null
}

function getMessageError(message: string): string | null {
  const text = message.trim()
  if (!text) return 'Message is required'
  if (text.length > MAX_MESSAGE_LENGTH) {
    return `Message must be ${MAX_MESSAGE_LENGTH} characters or less`
  }
  return null
}

function getDateError(value: string): string | null {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return 'Please select the complaint date'
  const time = new Date(value).getTime()
  if (Number.isNaN(time)) return 'Please select a valid complaint date'
  const oneDayAhead = Date.now() + 24 * 60 * 60 * 1000
  if (time > oneDayAhead) return 'Complaint date cannot be in the future'
  return null
}

/* ---------- Complaint ---------- */

export function parseComplaintBody(body: unknown): ComplaintInput {
  const data = (body ?? {}) as Record<string, unknown>
  return {
    patient_name: toText(data.patient_name),
    contact_number: toText(data.contact_number),
    mr_number: toText(data.mr_number),
    complaint_type: toText(data.complaint_type),
    complaint_date: toText(data.complaint_date),
    message: toText(data.message),
  }
}

export function validateComplaint(input: ComplaintInput): string | null {
  const nameError = getNameError(input.patient_name)
  if (nameError) return nameError
  if (!isValidPhone(input.contact_number)) return 'Please enter a valid contact number'
  if (input.mr_number.trim().length > 50) return 'MR number is too long'
  if (!COMPLAINT_TYPES.includes(input.complaint_type)) return 'Please select a complaint type'
  const dateError = getDateError(input.complaint_date)
  if (dateError) return dateError
  return getMessageError(input.message)
}

export function normalizeComplaint(input: ComplaintInput) {
  return {
    patient_name: input.patient_name.trim(),
    contact_number: input.contact_number.trim(),
    mr_number: input.mr_number.trim() || null,
    complaint_type: input.complaint_type,
    complaint_date: input.complaint_date,
    message: input.message.trim(),
  }
}

/* ---------- Compliment / Suggestion ---------- */

export function parsePatientFeedbackBody(body: unknown): PatientFeedbackInput {
  const data = (body ?? {}) as Record<string, unknown>
  return {
    patient_name: toText(data.patient_name),
    contact_number: toText(data.contact_number),
    location: toText(data.location),
    message: toText(data.message),
  }
}

export function validatePatientFeedback(input: PatientFeedbackInput): string | null {
  const nameError = getNameError(input.patient_name)
  if (nameError) return nameError
  if (!isValidPhone(input.contact_number)) return 'Please enter a valid contact number'
  if (!FEEDBACK_LOCATIONS.includes(input.location)) return 'Please select a location'
  return getMessageError(input.message)
}

export function normalizePatientFeedback(input: PatientFeedbackInput) {
  return {
    patient_name: input.patient_name.trim(),
    contact_number: input.contact_number.trim(),
    location: input.location,
    message: input.message.trim(),
  }
}