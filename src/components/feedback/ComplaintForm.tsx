'use client'

import { User, Phone, Hash, FileText, Calendar } from 'lucide-react'
import FormField, { fieldInputClass, fieldTextareaClass } from '@/components/feedback/FormField'
import FeedbackFormShell from '@/components/feedback/FeedbackFormShell'
import FormStatus from '@/components/feedback/FormStatus'
import { useComplaintForm } from '@/hooks/useComplaintForm'
import { COMPLAINT_TYPES, MAX_MESSAGE_LENGTH } from '@/data/feedbackOptions'

export default function ComplaintForm() {
  const { values, setValue, submit, loading, error, success } = useComplaintForm()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    await submit()
  }

  return (
    <FeedbackFormShell title="Submit a Complaint">
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

          <FormField label="MR No (Optional)" icon={<Hash size={18} />}>
            <input
              className={fieldInputClass}
              placeholder="Enter medical record number"
              value={values.mr_number}
              onChange={(e) => setValue('mr_number', e.target.value)}
            />
          </FormField>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <FormField label="Complaint Type" required icon={<FileText size={18} />}>
            <select
              className={fieldInputClass}
              value={values.complaint_type}
              onChange={(e) => setValue('complaint_type', e.target.value)}
            >
              <option value="">Select Type</option>
              {COMPLAINT_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </FormField>

          <FormField label="Complaint Date" required icon={<Calendar size={18} />}>
            <input
              type="date"
              className={fieldInputClass}
              value={values.complaint_date}
              onChange={(e) => setValue('complaint_date', e.target.value)}
            />
          </FormField>
        </div>

        <div>
          <FormField label={`Message (max ${MAX_MESSAGE_LENGTH} characters)`} required>
            <textarea
              className={fieldTextareaClass}
              placeholder="Please describe your complaint in detail..."
              maxLength={MAX_MESSAGE_LENGTH}
              value={values.message}
              onChange={(e) => setValue('message', e.target.value)}
            />
          </FormField>
          <p className="mt-1 text-xs text-slate-500">
            Character count: {values.message.length}/{MAX_MESSAGE_LENGTH}
          </p>
        </div>

        <FormStatus
          error={error}
          success={success}
          successMessage="Thank you! Your complaint has been submitted."
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3.5 rounded-lg transition-colors disabled:opacity-60"
        >
          {loading ? 'Submitting...' : 'Submit Complaint'}
        </button>
      </form>
    </FeedbackFormShell>
  )
}