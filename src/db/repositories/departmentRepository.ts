import { supabaseAdmin } from '@/db/supabaseClient'

export type Department = {
  id?: string
  name: string
  slug: string
  icon?: string
  description?: string
  latest_equipment_text?: string
}

export async function getAllDepartments() {
  const { data, error } = await supabaseAdmin
    .from('departments')
    .select('*')
    .order('name')

  if (error) throw error
  return data
}

export async function getDepartmentById(id: string) {
  const { data, error } = await supabaseAdmin
    .from('departments')
    .select('*')
    .eq('id', id)
    .single()

  if (error) throw error
  return data
}

export async function createDepartment(department: Department) {
  const { data, error } = await supabaseAdmin
    .from('departments')
    .insert(department)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function updateDepartment(id: string, department: Partial<Department>) {
  const { data, error } = await supabaseAdmin
    .from('departments')
    .update(department)
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function deleteDepartment(id: string) {
  const { error } = await supabaseAdmin
    .from('departments')
    .delete()
    .eq('id', id)

  if (error) throw error
  return true
}