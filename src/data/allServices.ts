export interface ServiceItem {
  id: string
  title: string
  slug: string
  icon: string
}

const ICON = '/images/Medical.png'

export const allServices: ServiceItem[] = [
  { id: '1', title: 'Aesthetics', slug: 'aesthetics', icon: ICON },
  { id: '2', title: 'Anesthesia', slug: 'anesthesia', icon: ICON },
  { id: '3', title: 'Cardiac Electrophysiology', slug: 'cardiac-electrophysiology', icon: ICON },
  { id: '4', title: 'Cardiac Surgery', slug: 'cardiac-surgery', icon: ICON },
  { id: '5', title: 'Cardiology', slug: 'cardiology', icon: ICON },
  { id: '6', title: 'Dentistry', slug: 'dentistry', icon: ICON },
  { id: '7', title: 'Dermatology', slug: 'dermatology', icon: ICON },
  { id: '8', title: 'Emergency', slug: 'emergency', icon: ICON },
  { id: '9', title: 'Endocrinology and Diabetes', slug: 'endocrinology-diabetes', icon: ICON },
  { id: '10', title: 'ENT', slug: 'ent', icon: ICON },
  { id: '11', title: 'Gastroenterology & Hepatology', slug: 'gastroenterology-hepatology', icon: ICON },
  { id: '12', title: 'Gynae & Obs', slug: 'gynae-obs', icon: ICON },
  { id: '13', title: 'Medicine', slug: 'medicine', icon: ICON },
  { id: '14', title: 'Nephrology', slug: 'nephrology', icon: ICON },
  { id: '15', title: 'Neurology', slug: 'neurology', icon: ICON },
  { id: '16', title: 'Neurosurgery', slug: 'neurosurgery', icon: ICON },
  { id: '17', title: 'Nutrition', slug: 'nutrition', icon: ICON },
  { id: '18', title: 'Oncology', slug: 'oncology', icon: ICON },
  { id: '19', title: 'Ophthalmology', slug: 'ophthalmology', icon: ICON },
  { id: '20', title: 'Oral & Maxillofacial Surgery', slug: 'oral-maxillofacial-surgery', icon: ICON },
  { id: '21', title: 'Orthopedics', slug: 'orthopedics', icon: ICON },
  { id: '22', title: 'Pathology', slug: 'pathology', icon: ICON },
  { id: '23', title: 'Pediatrics', slug: 'pediatrics', icon: ICON },
  { id: '24', title: 'Physical Therapy & Rehab', slug: 'physical-therapy-rehab', icon: ICON },
  { id: '25', title: 'Plastic Surgery', slug: 'plastic-surgery', icon: ICON },
  { id: '26', title: 'Psychiatry', slug: 'psychiatry', icon: ICON },
  { id: '27', title: 'Pulmonology', slug: 'pulmonology', icon: ICON },
  { id: '28', title: 'Radiology', slug: 'radiology', icon: ICON },
  { id: '29', title: 'Rheumatology', slug: 'rheumatology', icon: ICON },
  { id: '30', title: 'Surgical', slug: 'surgical', icon: ICON },
  { id: '31', title: 'Thoracic Surgery', slug: 'thoracic-surgery', icon: ICON },
  { id: '32', title: 'Urology', slug: 'urology', icon: ICON },
]