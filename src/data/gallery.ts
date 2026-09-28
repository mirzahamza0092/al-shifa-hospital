export interface GalleryItem {
  id: number
  title: string
  image: string
}

const SAMPLE =
  'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop'

export const gallery: GalleryItem[] = [
  { id: 1, title: 'Anesthesia', image: SAMPLE },
  { id: 2, title: 'Oral & Maxillofacial Surgery', image: SAMPLE },
  { id: 3, title: 'Cardiology', image: SAMPLE },
  { id: 4, title: 'Orthopedic', image: SAMPLE },
  { id: 5, title: 'Radiology', image: SAMPLE },
  { id: 6, title: 'Pediatrics', image: SAMPLE },
  { id: 7, title: 'Neurology', image: SAMPLE },
  { id: 8, title: 'Dental', image: SAMPLE },
]