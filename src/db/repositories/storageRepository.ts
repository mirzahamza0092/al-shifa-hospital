import { supabaseAdmin } from '@/db/supabaseClient'

const BUCKET = 'doctor-photos'

export async function uploadDoctorPhoto(file: File): Promise<string> {
  const ext = file.name.split('.').pop() || 'jpg'
  const fileName = `${crypto.randomUUID()}.${ext}`
  const buffer = Buffer.from(await file.arrayBuffer())

  const { error } = await supabaseAdmin.storage
    .from(BUCKET)
    .upload(fileName, buffer, { contentType: file.type })

  if (error) throw new Error(error.message)

  const { data } = supabaseAdmin.storage.from(BUCKET).getPublicUrl(fileName)
  return data.publicUrl
}