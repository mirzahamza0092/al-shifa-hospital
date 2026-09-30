export type DocSection =
  | { type: 'text'; label: string; text: string }
  | {
      type: 'list'
      label: string
      listTitle: string
      items: { letter?: string; rest: string }[]
    }

export interface DocumentData {
  heroTitle: string
  heroIcon?: string
  heroIconAnimation?: 'drive' | 'float' | 'sway' | 'spin'
  cardTitle: string
  footerNote?: string
  sections: DocSection[]
}

export const missionVision: DocumentData = {
  heroTitle: 'Mission/ Vision',
  heroIcon: '/images/bedSun.PNG',
  heroIconAnimation: 'drive',
  cardTitle: 'Mission/ Vision/Values/Quality Policy',
  footerNote: 'Form# FM-QA-033 Rev# 01 Effective Date 15/07/2025 Issue #01',
  sections: [
    {
      type: 'text',
      label: 'Mission',
      text: 'Our mission is to bring together medical education, research, and patient care in a unique environment where the next generation of doctors, nurses, and other health professionals are trained.',
    },
    {
      type: 'text',
      label: 'Vision',
      text: 'As a second to none in the skies, we envision offering the best quaternary healthcare facility to the nation in line with international standards.',
    },
    {
      type: 'list',
      label: 'Core Values',
      listTitle: 'Patient-CARE',
      items: [
        { letter: 'P', rest: 'atient Centeredness' },
        { letter: 'C', rest: 'ompassion' },
        { letter: 'A', rest: 'ccountability' },
        { letter: 'R', rest: 'espect' },
        { letter: 'E', rest: 'thics' },
      ],
    },
    {
      type: 'text',
      label: 'Quality Policy',
      text: 'At Al-Shifa Hospital we are committed to provide quality care and patient satisfaction. Our aim is to exceed our patient\u2019s expectations through dimensions of quality, continual quality improvement and compliance to all regulatory and applicable standards.',
    },
  ],
}