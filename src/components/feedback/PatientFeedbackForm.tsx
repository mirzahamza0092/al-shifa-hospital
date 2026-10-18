'use client'

import { User, Phone, Building2 } from 'lucide-react'
import FormField, { fieldInputClass, fieldTextareaClass } from '@/components/feedback/FormField'
import FeedbackFormShell from '@/components/feedback/FeedbackFormShell'
import FormStatus from '@/components/feedback/FormStatus'
import {
  usePatientFeedbackForm,
  type PatientFeedbackKind,
} from '@/hooks/usePatientFeedbackForm'
import { FEEDBACK_LOCATIONS, MAX_MESSAGE_LENGTH } from '@/data/feedbackOptions'

const CONFIG: Record<
  PatientFeedbackKind,
  { title: string; placeholder: string; button: string; success: string }
> = {
  compliment: {
    title: 'Submit a Compliment',
    placeholder: 'Please describe your compliment...',
    button: 'Submit Compliment',
    success: 'Thank you! Your compliment has been submitted.',
  },
  suggestion: {
    title: 'Submit a Suggestion',
    placeholder: 'Please describe your suggestion...',
    button: 'Submit Suggestion',
    success: 'Thank you! Your suggestion has been submitted.',
  },
}

export default function PatientFeedbackForm({ kind }: { kind: PatientFeedbackKind }) {
  const { values, setValue, submit, loading, error, success } = usePatientFeedbackForm(kind)
  const config = CONFIG[kind]

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    await submit()
  }

  return (
    <FeedbackFormShell title={config.title}>
      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <FormField label="Patient Name" required icon={<User size={18} />}>
            <input
              className={fieldInputClass}
              placeholder="Enter patient name"
              value={values.patient_name}
              onChange={(e) => setValue('patient_name', e.target.value)}
            />
          </FormField>

          <FormField label="Contact No" required icon={<Phone size={18} />}>
            <input
              className={fieldInputClass}
              placeholder="Enter contact number"
              inputMode="tel"
              value={values.contact_number}
              onChange={(e) => setValue('contact_number', e.target.value)}
            />
          </FormField>

          <FormField label="Location" required icon={<Building2 size={18} />}>
            <select
              className={fieldInputClass}
              value={values.location}
              onChange={(e) => setValue('location', e.target.value)}
            >
              {FEEDBACK_LOCATIONS.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </FormField>
        </div>

        <div>
          <FormField label={`Message (max ${MAX_MESSAGE_LENGTH} characters)`} required>
            <textarea
              className={fieldTextareaClass}
              placeholder={config.placeholder}
              maxLength={MAX_MESSAGE_LENGTH}
              value={values.message}
              onChange={(e) => setValue('message', e.target.value)}
            />
          </FormField>
          <p className="mt-1 text-xs text-slate-500">
            Character count: {values.message.length}/{MAX_MESSAGE_LENGTH}
          </p>
        </div>

        <FormStatus error={error} success={success} successMessage={config.success} />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3.5 rounded-lg transition-colors disabled:opacity-60"
        >
          {loading ? 'Submitting...' : config.button}
        </button>
      </form>
    </FeedbackFormShell>
  )
}