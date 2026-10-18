'use client'

import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import { FeedbackStatusBadge, FeedbackTypeBadge } from '@/components/admin/feedback/FeedbackBadges'
import {
  formatFeedbackDate,
  formatFeedbackDateTime,
  type ComplaintStatus,
  type FeedbackItem,
} from '@/services/adminFeedbackService'

type Props = {
  item: FeedbackItem | null
  onClose: () => void
  onSetRead: (item: FeedbackItem, isRead: boolean) => Promise<boolean>
  onSetStatus: (item: FeedbackItem, status: ComplaintStatus) => Promise<boolean>
}

function DetailRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</p>
      <div className="mt-1 text-sm text-slate-800">{children}</div>
    </div>
  )
}

export default function FeedbackDetailModal({ item, onClose, onSetRead, onSetStatus }: Props) {
  const [busy, setBusy] = useState(false)
  const open = item !== null

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previousOverflow
    }
  }, [open, onClose])

  async function run(action: () => Promise<boolean>) {
    setBusy(true)
    const ok = await action()
    setBusy(false)
    if (!ok) alert('Could not update. Please try again.')
  }

  if (!item) return null
  const isComplaint = item.type === 'complaint'

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[300] flex items-center justify-center bg-black/50 p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        className="max-h-[90vh] w-full max-w-[640px] overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <FeedbackTypeBadge type={item.type} />
            {isComplaint && <FeedbackStatusBadge status={item.status} />}
            <span className="text-xs text-slate-500">
              {item.is_read ? 'Read' : 'Unread'}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="rounded-lg p-1.5 text-slate-500 transition hover:bg-slate-100"
          >
            <X size={20} />
          </button>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <DetailRow label="Patient Name">{item.patient_name}</DetailRow>
          <DetailRow label="Contact No">{item.contact_number}</DetailRow>

          {isComplaint ? (
            <>
              <DetailRow label="MR No">{item.mr_number || '—'}</DetailRow>
              <DetailRow label="Complaint Type">{item.complaint_type || '—'}</DetailRow>
              <DetailRow label="Complaint Date">{formatFeedbackDate(item.complaint_date)}</DetailRow>
            </>
          ) : (
            <DetailRow label="Location">{item.location || '—'}</DetailRow>
          )}

          <DetailRow label="Received">{formatFeedbackDateTime(item.created_at)}</DetailRow>
        </div>

        <div className="mt-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Message</p>
          <p className="mt-1 whitespace-pre-wrap break-words rounded-lg bg-slate-50 p-4 text-sm leading-relaxed text-slate-700">
            {item.message}
          </p>
        </div>

        <div className="mt-6 flex flex-wrap justify-end gap-2">
          <button
            type="button"
            disabled={busy}
            onClick={() => run(() => onSetRead(item, !item.is_read))}
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 disabled:opacity-50"
          >
            {item.is_read ? 'Mark as unread' : 'Mark as read'}
          </button>

          {isComplaint && (
            <button
              type="button"
              disabled={busy}
              onClick={() =>
                run(() => onSetStatus(item, item.status === 'resolved' ? 'pending' : 'resolved'))
              }
              className={`rounded-lg px-4 py-2 text-sm font-medium text-white transition disabled:opacity-50 ${
                item.status === 'resolved'
                  ? 'bg-amber-500 hover:bg-amber-600'
                  : 'bg-green-600 hover:bg-green-700'
              }`}
            >
              {item.status === 'resolved' ? 'Reopen complaint' : 'Mark as resolved'}
            </button>
          )}

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg bg-[#00507c] px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-900"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}