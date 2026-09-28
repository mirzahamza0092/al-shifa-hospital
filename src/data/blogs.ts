export interface Blog {
  id: string
  title: string
  author: string
  date: string
  image: string
}

const SAMPLE =
  'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop'

export const blogs: Blog[] = [
  { id: '1', title: 'Struggling with Stubborn Skin Issues?', author: 'Media Team', date: '06/01/2026', image: SAMPLE },
  { id: '2', title: 'Whitening Injection in Pakistan', author: 'Media Team', date: '28/02/2026', image: SAMPLE },
  { id: '3', title: 'Post-Surgical Care: Essential Tips for a Smooth Recovery', author: 'Media Team', date: '13/11/2025', image: SAMPLE },
  { id: '4', title: 'Knee Pain: Causes and Treatment', author: 'Media Team', date: '02/10/2025', image: SAMPLE },
  { id: '5', title: 'Healthy Diet Tips for a Better Life', author: 'Media Team', date: '15/09/2025', image: SAMPLE },
  { id: '6', title: 'Why Regular Health Check-ups Matter', author: 'Media Team', date: '20/08/2025', image: SAMPLE },
]