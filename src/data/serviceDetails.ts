import { allServices } from '@/data/allServices'

export type Block =
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'call'; text: string; phone: string }

export interface Faq {
  q: string
  a: string
}

export interface SideItem {
  label: string
  href?: string
}

export interface ServiceDetail {
  slug: string 
  title: string
  image: string
  related: SideItem[] 
  content: Block[]
  faqs: Faq[] 
}

const SAMPLE_IMG =
  'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop'

export const serviceDetails: ServiceDetail[] = [
  {
    slug: 'cardiac-electrophysiology',
    title: 'Cardiac Electrophysiology',
    image: SAMPLE_IMG,
    related: [
      { label: 'Holter Monitoring For Detection Of Arrhythmia' },
      { label: 'HUTT Test For Syncope/Loss Of Consciousness' },
      { label: 'Programmers For Cardiac Devices & ECG For Detection Of Arrhythmia' },
      { label: 'Elective DC Cardioversion For Arrhythmia' },
      { label: 'EPS & RFA For SVT' },
      { label: 'Atrial Fibrillation Ablation/ VT Ablation' },
      { label: 'Devices For Bradyarrhythmia (PPM)' },
      { label: 'Cardiac Devices For Heart Failure (HF)' },
    ],
    content: [
      { type: 'h2', text: 'Find the Best Cardiac Electrophysiologist in Islamabad for Your Heart Rhythm' },
      {
        type: 'p',
        text: 'That unsettling flutter in your chest, the unexplained dizziness, the feeling of a racing heart. These are signals from your heart that demand expert attention. It\u2019s time to stop worrying and start finding a real solution.',
      },
      {
        type: 'p',
        text: 'At Al-Shifa Hospital, we provide definitive answers and world-class care for all heart rhythm disorders. We are home to a team dedicated to restoring your heart\u2019s natural beat, so you can live your life without fear or limitation.',
      },

      { type: 'h2', text: 'Your Search for the Best Electrophysiologist Ends Here' },
      {
        type: 'p',
        text: 'When it comes to the complex electrical system of your heart, you cannot settle for anything less than a true specialist. An electrophysiologist (EP) is a cardiologist with elite-level training focused exclusively on diagnosing and curing heart rhythm problems.',
      },

      { type: 'h2', text: 'Why Al-Shifa Hospital Has the Best Cardiac Electrophysiologist' },
      {
        type: 'p',
        text: 'Our reputation is built on results. Patients and referring physicians choose us because we provide a clear advantage in cardiac care.',
      },

      { type: 'h3', text: '1. Unrivaled Expertise and Proven Success' },
      {
        type: 'p',
        text: 'Our program is led by a top-tier specialist recognized as the [best cardiac electrophysiologist](/services/cardiology). With a proven track record of successfully treating even the most complex arrhythmias, our expert\u2019s skill is your greatest asset.',
      },

      { type: 'h3', text: '2. Advanced Technology for Definitive Cures' },
      {
        type: 'p',
        text: 'We invest in cutting-edge diagnostic and treatment technology to give our patients the best. This technology allows us to:',
      },
      {
        type: 'ul',
        items: [
          'Precisely locate the source of the arrhythmia.',
          'Perform minimally invasive procedures with higher success rates.',
          'Offer cure, not just management, for conditions like SVT and AFib.',
        ],
      },

      { type: 'h2', text: 'Solutions for All Heart Rhythm Disorders' },
      {
        type: 'ul',
        items: [
          'Atrial Fibrillation (AFib)',
          'Heart Palpitations or Fluttering',
          'Supraventricular Tachycardia (SVT)',
          'Unexplained Fainting (Syncope) & Dizziness',
          'Slow Heartbeat (Bradycardia) requiring a Pacemaker',
        ],
      },

      { type: 'h2', text: 'Don\u2019t Wait. Secure Your Consultation Now.' },
      {
        type: 'p',
        text: 'An irregular heartbeat is a serious condition that can lead to complications like stroke or heart failure if left untreated. Take the first and most important step towards a stable heart rhythm and a healthier future.',
      },
      { type: 'call', text: 'Call Us Now for an Immediate Appointment:', phone: '051-1234568' },
    ],
    faqs: [
      {
        q: 'What does an electrophysiologist cardiologist do?',
        a: 'An electrophysiologist is a heart specialist who diagnoses and treats heart rhythm disorders using specialised tests and minimally invasive procedures.',
      },
      {
        q: 'How much does an EP test cost in Pakistan?',
        a: 'The cost depends on the type of study or procedure needed. Please contact our appointment desk for current pricing.',
      },
      {
        q: 'What kind of tests does an electrophysiologist do?',
        a: 'Common tests include ECG, Holter monitoring, tilt-table testing and electrophysiology (EP) studies.',
      },
      {
        q: 'What is the work of cardiac electrophysiology?',
        a: 'Cardiac electrophysiology focuses on the electrical system of the heart, including finding the source of abnormal rhythms and treating them.',
      },
      {
        q: 'Why would I be referred to an electrophysiologist?',
        a: 'You may be referred for palpitations, unexplained fainting, a very fast or slow heartbeat, or if you need a pacemaker or similar device.',
      },
    ],
  },


]

const FALLBACK_TEXT = 'Detailed information for this service will be added soon.'

export function getServiceDetail(slug: string): ServiceDetail | null {
  const found = serviceDetails.find((s) => s.slug === slug)
  if (found) return found

  const base = allServices.find((s) => s.slug === slug)
  if (!base) return null

  return {
    slug,
    title: base.title,
    image: SAMPLE_IMG,
    related: [],
    content: [
      { type: 'h2', text: base.title },
      { type: 'p', text: FALLBACK_TEXT },
    ],
    faqs: [],
  }
}