export interface DoctorItem {
  id: string
  slug: string 
  name: string
  designation: string
  department: string 
  image: string
  qualifications?: string
}

const PHOTO = '/images/Medical.png'

export const doctorsList: DoctorItem[] = [
  {
    id: '1',
    slug: 'dr-ahmed-khan',
    name: 'Dr Ahmed Khan',
    designation: 'Head of Department Cardiology',
    department: 'Cardiology',
    image: PHOTO,
    qualifications:
      'MBBS, FCPS (CARDIOLOGY), FCPS (MEDICINE), FELLOWSHIP IN INTERVENTIONAL CARDIOLOGY.',
  },
  { id: '2', slug: 'ms-sara-ali', name: 'Ms Sara Ali', designation: 'Consultant Nutritionist', department: 'Nutrition', image: PHOTO },
  { id: '3', slug: 'dr-usman-raza', name: 'Dr Usman Raza', designation: 'Consultant Plastic Surgeon', department: 'Plastic Surgery', image: PHOTO },
  { id: '4', slug: 'dr-shehnaz', name: 'Dr Shehnaz', designation: 'Consultant Gynaecologist', department: 'Gynae & Obs', image: PHOTO },
  { id: '5', slug: 'dr-bilal-ahmed', name: 'Dr Bilal Ahmed', designation: 'Consultant Pediatrician', department: 'Pediatrics', image: PHOTO },
  { id: '6', slug: 'dr-hina-malik', name: 'Dr Hina Malik', designation: 'Consultant Neurologist', department: 'Neurology', image: PHOTO },
  { id: '7', slug: 'dr-imran-shah', name: 'Dr Imran Shah', designation: 'Consultant Orthopedic Surgeon', department: 'Orthopedics', image: PHOTO },
  { id: '8', slug: 'dr-ayesha-noor', name: 'Dr Ayesha Noor', designation: 'Consultant Dentist', department: 'Dentistry', image: PHOTO },
  { id: '9', slug: 'dr-farhan-iqbal', name: 'Dr Farhan Iqbal', designation: 'Consultant Radiologist', department: 'Radiology', image: PHOTO },
]