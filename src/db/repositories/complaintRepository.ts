import { supabaseAdmin } from '@/db/supabaseClient'

export type Complaint = {
  patient_name: string
  contact_number: string
  mr_number: string | null
  complaint_type: string
  complaint_date: string
  message: string
}

export async function createComplaint(complaint: Complaint) {
  const { error } = await supabaseAdmin.from('complaints').insert(complaint)
  if (error) throw error
  return true
}