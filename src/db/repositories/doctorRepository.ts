import { supabaseAdmin } from '@/db/supabaseClient'

export type Doctor = {
  id?: string
  name: string
  photo_url?: string
  designation?: string
  department_id?: string
  bio?: string
  qualifications?: string
  specialization?: string
  is_active?: boolean
}

export async function getAllDoctors() {
  const { data, error } = await supabaseAdmin
    .from('doctors')
    .select('*, departments(name, slug)')
    .order('name')

  if (error) throw error
  return data
}

export async function getDoctorById(id: string) {
  const { data, error } = await supabaseAdmin
    .from('doctors')
    .select('*, departments(name, slug)')
    .eq('id', id)
    .single()

  if (error) throw error
  return data
}

export async function createDoctor(doctor: Doctor) {
  const { data, error } = await supabaseAdmin
    .from('doctors')
    .insert(doctor)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function updateDoctor(id: string, doctor: Partial<Doctor>) {
  const { data, error } = await supabaseAdmin
    .from('doctors')
    .update(doctor)
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function deleteDoctor(id: string) {
  const { error } = await supabaseAdmin
    .from('doctors')
    .delete()
    .eq('id', id)

  if (error) throw error
  return true
}