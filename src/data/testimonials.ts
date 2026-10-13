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
    name: 'Mirza Hamza',
    role: 'Al-Shifa Hospital Patient',
    text: 'Doctors behavior is very friendly. They give full attention to patients, very neat and clean, and pharmacy also in good. Recommend..',
    image: '/images/pat1.jpg',
  },
  {
    id: '2',
    name: 'Aftab Shahzad',
    role: 'Al-Shifa Hospital Patient',
    text: 'I visited the nutritionist here. Very professional in the area of diet planning, a good listener and ever ready to help. Highly recommended!',
    image: '/images/pat2.jpg',
  },
  {
    id: '3',
    name: 'Abid Ali',
    role: 'Al-Shifa Hospital Patient',
    text: 'Staff is very cooperative and the emergency department responded quickly. Best hospital in the area.',
    image: '/images/pat3.jpg',
  },
  {
    id: '4',
    name: 'Syed Zulfiqar',
    role: 'Al-Shifa Hospital Patient',
    text: 'Excellent care for my child. Pediatrics doctors are kind and explain everything clearly.',
    image: '/images/pat4.jpg',
  },
  {
    id: '5',
    name: 'Fiazan Riaz',
    role: 'Al-Shifa Hospital Patient',
    text: 'Modern facilities and clean environment. Lab reports were on time and the doctor was very helpful.',
    image: '/images/pat5.jpg',
  },
  {
    id: '6',
    name: 'Abul Hassan',
    role: 'Al-Shifa Hospital Patient',
    text: 'Very satisfied with the treatment and the behavior of the staff. Thank you Al-Shifa Hospital.',
    image: '/images/pat6.jpg',
  },
]