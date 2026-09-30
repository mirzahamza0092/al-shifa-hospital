export interface Manager {
  id: string
  name: string
  role: string
  image: string
}

export const managers: Manager[] = [
  { id: '1', name: 'Dr Aamir Halim', role: 'Medical Director', image: '/images/Medical.png' },
  { id: '2', name: 'Mr Khizar Hayat', role: 'Chief Finance & Business Development', image: '/images/Medical.png' },
  { id: '3', name: 'Mr Rizwan Shafique', role: 'Chief Technology Officer', image: '/images/Medical.png' },
  { id: '4', name: 'Mr Muhammad Asim Zia', role: 'Chief HR Officer', image: '/images/Medical.png' },
  { id: '5', name: 'Mr Muhammad Qasim Bajwa', role: 'Chief Admin & Security', image: '/images/Medical.png' },
  { id: '6', name: 'Mr Umer Amjad', role: 'Chief Quality Officer', image: '/images/Medical.png' },
]