'use client'

import { FeedbackStatusBadge, FeedbackTypeBadge } from '@/components/admin/feedback/FeedbackBadges'
import {
  formatFeedbackDate,
  formatFeedbackDateTime,
  type FeedbackItem,
} from '@/services/adminFeedbackService'

type Props = {
  items: FeedbackItem[]
  loading: boolean
  onOpen: (item: FeedbackItem) => void
}

const COLUMNS = [
  '',
  'Type',
  'Patient',
  'Contact',
  'MR No',
  'Category / Location',
  'Complaint Date',
  'Status',
  'Message',
  'Received',
  '',
]

export default function FeedbackTable({ items, loading, onOpen }: Props) {
  return (
    <div className="overflow-x-auto rounded-xl bg-white shadow">
      <table
        className={`w-full text-sm transition-opacity ${loading && items.length > 0 ? 'opacity-50' : ''}`}
      >
        <thead className="bg-slate-100 text-left">
          <tr>
            {COLUMNS.map((column, index) => (
              <th key={index} className="whitespace-nowrap p-3">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr
              key={`${item.type}-${item.id}`}
              onClick={() => onOpen(item)}
              className={`cursor-pointer border-t transition hover:bg-slate-50 ${
                item.is_read ? '' : 'bg-blue-50/60 font-semibold'
              }`}
            >
              <td className="w-6 p-3">
                {!item.is_read && (
                  <span
                    title="Unread"
                    className="block h-2.5 w-2.5 rounded-full bg-red-500"
                  />
                )}
              </td>
              <td className="p-3">
                <FeedbackTypeBadge type={item.type} />
              </td>
              <td className="whitespace-nowrap p-3">{item.patient_name}</td>
              <td className="whitespace-nowrap p-3">{item.contact_number}</td>
              <td className="whitespace-nowrap p-3">{item.mr_number || '—'}</td>
              <td className="whitespace-nowrap p-3">
                {item.complaint_type || item.location || '—'}
              </td>
              <td className="whitespace-nowrap p-3">{formatFeedbackDate(item.complaint_date)}</td>
              <td className="p-3">
                <FeedbackStatusBadge status={item.status} />
              </td>
              <td className="max-w-[260px] p-3">
                <p className="line-clamp-2 font-normal text-slate-600">{item.message}</p>
              </td>
              <td className="whitespace-nowrap p-3 font-normal text-slate-500">
                {formatFeedbackDateTime(item.created_at)}
              </td>
              <td className="p-3">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    onOpen(item)
                  }}
                  className="rounded-lg border border-[#00507c] px-3 py-1.5 text-xs font-semibold text-[#00507c] transition hover:bg-[#00507c] hover:text-white"
                >
                  View
                </button>
              </td>
            </tr>
          ))}

          {items.length === 0 && (
            <tr>
              <td className="p-6 text-center text-slate-500" colSpan={COLUMNS.length}>
                {loading ? 'Loading...' : 'No feedback found'}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}