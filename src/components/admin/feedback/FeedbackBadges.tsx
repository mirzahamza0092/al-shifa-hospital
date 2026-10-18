import {
  FEEDBACK_TYPE_LABELS,
  type ComplaintStatus,
  type FeedbackType,
} from '@/services/adminFeedbackService'

const TYPE_STYLES: Record<FeedbackType, string> = {
  complaint: 'bg-red-50 text-red-700 border-red-200',
  compliment: 'bg-green-50 text-green-700 border-green-200',
  suggestion: 'bg-blue-50 text-blue-700 border-blue-200',
}

const STATUS_STYLES: Record<ComplaintStatus, string> = {
  pending: 'bg-amber-50 text-amber-700 border-amber-200',
  resolved: 'bg-green-50 text-green-700 border-green-200',
}

const badgeClass =
  'inline-block whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold'

export function FeedbackTypeBadge({ type }: { type: FeedbackType }) {
  return <span className={`${badgeClass} ${TYPE_STYLES[type]}`}>{FEEDBACK_TYPE_LABELS[type]}</span>
}

export function FeedbackStatusBadge({ status }: { status: ComplaintStatus | null }) {
  if (!status) return <span className="text-slate-400">—</span>
  return (
    <span className={`${badgeClass} capitalize ${STATUS_STYLES[status]}`}>{status}</span>
  )
}