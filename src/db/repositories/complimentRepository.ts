import { supabaseAdmin } from '@/db/supabaseClient'

export type Compliment = {
  patient_name: string
  contact_number: string
  location: string
  message: string
}

export async function createCompliment(compliment: Compliment) {
  const { error } = await supabaseAdmin.from('compliments').insert(compliment)
  if (error) throw error
  return true
}