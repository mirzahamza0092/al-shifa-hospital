export type DepartmentSuggestion = { name: string; slug: string }

export const departmentSuggestions: DepartmentSuggestion[] = [
  { name: 'Aesthetics & Dermatology', slug: 'aesthetics-dermatology' },
  { name: 'Anesthesia', slug: 'anesthesia' },
  { name: 'Cardiac Electrophysiology', slug: 'cardiac-electrophysiology' },
  { name: 'Cardic Surgery', slug: 'cardic-surgery' },
  { name: 'Cardiology', slug: 'cardiology' },
  { name: 'Dentistry', slug: 'dentistry' },
  { name: 'Emergency', slug: 'emergency' },
  { name: 'Endocrinology and Diabetes', slug: 'endocrinology-and-diabetes' },
  { name: 'ENT', slug: 'ent' },
  { name: 'Gastroenterology & Hepatology', slug: 'gastroenterology-and-hepatology' },
  { name: 'Gynae & Obs', slug: 'gynae-and-obs' },
  { name: 'Medicine', slug: 'medicine' },
  { name: 'Nephrology', slug: 'nephrology' },
  { name: 'Neurology', slug: 'neurology' },
  { name: 'Neurosurgery', slug: 'neurosurgery' },
  { name: 'Nutrition', slug: 'nutrition' },
  { name: 'Oncology', slug: 'oncology' },
  { name: 'Ophthalmology', slug: 'ophthalmology' },
  { name: 'Oral & Maxillofacial Surgery', slug: 'oral-and-maxillofacial-surgery' },
  { name: 'Orthopedics', slug: 'orthopedics' },
  { name: 'Pathology', slug: 'pathology' },
  { name: 'Pediatrics', slug: 'pediatrics' },
  { name: 'Physical Therapy', slug: 'physical-therapy' },
  { name: 'Plastic Surgery', slug: 'plastic-surgery' },
  { name: 'Psychiatry', slug: 'psychiatry' },
  { name: 'Pulmonology', slug: 'pulmonology' },
  { name: 'Radiology', slug: 'radiology' },
  { name: 'Rheumatology', slug: 'rheumatology' },
  { name: 'Surgical', slug: 'surgical' },
  { name: 'Thoracic Surgery', slug: 'thoracic-surgery' },
  { name: 'Urology', slug: 'urology' },
]

export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function getSlug(name: string) {
  const match = departmentSuggestions.find(
    (d) => d.name.toLowerCase() === name.trim().toLowerCase()
  )
  return match ? match.slug : slugify(name)
}