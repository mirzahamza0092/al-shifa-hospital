import { supabaseAdmin } from '@/db/supabaseClient'

export type Suggestion = {
  patient_name: string
  contact_number: string
  location: string
  message: string
}

export async function createSuggestion(suggestion: Suggestion) {
  const { error } = await supabaseAdmin.from('suggestions').insert(suggestion)
  if (error) throw error
  return true
}