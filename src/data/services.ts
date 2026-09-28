export interface Service {
  id: string
  title: string
  description: string
  icon: string
}

export const services: Service[] = [
  { id: '1', title: 'Emergency', description: 'Emergency Department at PAF Hospital', icon: '/images/Medical.png' },
  { id: '2', title: 'Nephrology', description: 'Nephrology', icon: '/images/Medical.png' },
  { id: '3', title: 'Pediatrics', description: 'Meet Child Specialists', icon: '/images/Medical.png' },
  { id: '4', title: 'Cardiology', description: 'Meet Heart Specialists', icon: '/images/Medical.png' },
  { id: '5', title: 'Orthopedic', description: 'Meet Bone Specialists', icon: '/images/Medical.png' },
  { id: '6', title: 'Radiology', description: 'Advanced Imaging Department', icon: '/images/Medical.png' },
  { id: '7', title: 'Neurology', description: 'Meet Brain Specialists', icon: '/images/Medical.png' },
]