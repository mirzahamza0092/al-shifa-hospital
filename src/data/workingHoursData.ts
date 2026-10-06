export type IconName = 'UserRound' | 'Timer' | 'PhoneCall'

export interface WorkingHoursCardData {
  id: string
  variant: 'light' | 'dark'
  icon: IconName
  title: string
  buttonLabel: string
  href: string
  lines?: string[]
  schedule?: { day: string; time: string }[]
}

export const workingHoursCards: WorkingHoursCardData[] = [
  {
    id: 'appointment',
    variant: 'light',
    icon: 'UserRound',
    title: 'Make Appointment',
    buttonLabel: 'Appointment',
    href: '/patient/appointment',
    lines: [
      '24-hour emergency service is available.',
      'For booking, please reach us at:',
      '0349-6601065.',
    ],
  },
  {
    id: 'opd-hours',
    variant: 'dark',
    icon: 'Timer',
    title: 'OPD Working Hours',
    buttonLabel: 'Services',
    href: '/services',
    schedule: [
      { day: 'Mon - Sat :', time: '9:00AM - 05:00PM' },
      { day: 'Friday :', time: '08:00AM - 1:00PM' },
      { day: 'Sunday :', time: '24 hours Emergency' },
    ],
  },
  {
    id: 'reach-us',
    variant: 'light',
    icon: 'PhoneCall',
    title: 'Reach Us',
    buttonLabel: 'Contact Us',
    href: '/contact',
    lines: [
      'Appointment and ',
      'Medical Information',
      '0349-6601065',
      'Accident & Emergency',
      '0307-5501065',
      'Location - Marala Road, Near Sit Sara Chowk, Mandi Bahauddin',
    ],
  },
]