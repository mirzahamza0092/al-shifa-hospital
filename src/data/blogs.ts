export interface Blog {
  id: string
  slug: string
  title: string
  author: string
  date: string
  image: string
}

export const blogs: Blog[] = [
  { id: '1', slug: 'when-to-see-an-orthopedic-surgeon', title: 'When Should You See an Orthopedic Surgeon? Signs You Should Never Ignore', author: 'Media Team', date: '06/01/2026', image: '/images/ortho.jpg' },
  { id: '2', slug: 'pcos-symptoms-causes-diagnosis-management', title: 'PCOS: Early Symptoms, Causes, Diagnosis, and Management', author: 'Media Team', date: '28/02/2026', image: '/images/pcos.jpg' },
  { id: '3', slug: 'lose-weight-without-starving-yourself', title: 'How to Lose Weight Without Starving Yourself: A Healthy and Sustainable Approach', author: 'Media Team', date: '13/11/2025', image: '/images/weight.jpg' },
  { id: '4', slug: 'is-your-child-growing-normally', title: 'Is Your Child Growing Normally? Signs Parents Should Know', author: 'Media Team', date: '02/10/2025', image: '/images/child.jpg' },
  { id: '5', slug: 'why-eyes-feel-tired-after-using-mobile-phone', title: 'Why Do Your Eyes Feel Tired After Using a Mobile Phone?', author: 'Media Team', date: '15/09/2025', image: '/images/eyes.jpg' },
]