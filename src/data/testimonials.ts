export interface Testimonial {
  id: string
  name: string
  role: string
  text: string
  image: string
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sadia Batool',
    role: 'Al-Shifa Hospital Patient',
    text: 'Doctors behavior is very friendly. They give full attention to patients, very neat and clean, and pharmacy also in good. Recommend..',
    image: '/images/Medical.png',
  },
  {
    id: '2',
    name: 'Ali Raza',
    role: 'Al-Shifa Hospital Patient',
    text: 'I visited the nutritionist here. Very professional in the area of diet planning, a good listener and ever ready to help. Highly recommended!',
    image: '/images/Medical.png',
  },
  {
    id: '3',
    name: 'Usman Khan',
    role: 'Al-Shifa Hospital Patient',
    text: 'Staff is very cooperative and the emergency department responded quickly. Best hospital in the area.',
    image: '/images/Medical.png',
  },
  {
    id: '4',
    name: 'Hina Malik',
    role: 'Al-Shifa Hospital Patient',
    text: 'Excellent care for my child. Pediatrics doctors are kind and explain everything clearly.',
    image: '/images/Medical.png',
  },
  {
    id: '5',
    name: 'Bilal Ahmed',
    role: 'Al-Shifa Hospital Patient',
    text: 'Modern facilities and clean environment. Lab reports were on time and the doctor was very helpful.',
    image: '/images/Medical.png',
  },
  {
    id: '6',
    name: 'Ayesha Noor',
    role: 'Al-Shifa Hospital Patient',
    text: 'Very satisfied with the treatment and the behavior of the staff. Thank you Al-Shifa Hospital.',
    image: '/images/Medical.png',
  },
]