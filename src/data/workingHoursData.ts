export type IconName = 'UserRound' | 'Timer' | 'PhoneCall'

export interface WorkingHoursCardData {
  id: string
  variant: 'light' | 'dark'
  icon: IconName
  title: string
  buttonLabel: string
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
    lines: [
      '24-hour emergency service is available.',
      'For booking, please reach us at:',
      '051-9564000.',
    ],
  },
  {
    id: 'opd-hours',
    variant: 'dark',
    icon: 'Timer',
    title: 'OPD Working Hours',
    buttonLabel: 'Services',
    schedule: [
      { day: 'Mon - Sat :', time: '8:00AM - 03:00PM' },
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
    lines: [
      'UAN - 1464',
      'Appointment - (051) 9564000',
      'Medical Information',
      '(051) 9567000',
      'Accident & Emergency',
      '(051) 9564210',
    ],
  },
]