'use client'

import {
  FEEDBACK_TYPES,
  FEEDBACK_TYPE_PLURALS,
  type FeedbackFilters,
  type UnreadCounts,
} from '@/services/adminFeedbackService'

type Props = {
  active: FeedbackFilters['type']
  counts: UnreadCounts
  onChange: (type: FeedbackFilters['type']) => void
}

export default function FeedbackTypeTabs({ active, counts, onChange }: Props) {
  const tabs: { value: FeedbackFilters['type']; label: string; unread: number }[] = [
    { value: 'all', label: 'All', unread: counts.total },
    ...FEEDBACK_TYPES.map((type) => ({
      value: type,
      label: FEEDBACK_TYPE_PLURALS[type],
      unread: counts[type],
    })),
  ]

  return (
    <div className="mb-4 flex flex-wrap gap-2">
      {tabs.map((tab) => {
        const isActive = tab.value === active
        return (
          <button
            key={tab.value}
            type="button"
            onClick={() => onChange(tab.value)}
            className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition ${
              isActive
                ? 'bg-gradient-to-r from-[#00507c] to-red-600 font-semibold text-white shadow-md shadow-blue-900/30'
                : 'border border-slate-200 bg-white text-slate-600 hover:bg-slate-100 hover:text-[#00507c]'
            }`}
          >
            {tab.label}
            {tab.unread > 0 && (
              <span className="min-w-[1.25rem] rounded-full bg-amber-500 px-1.5 py-0.5 text-center text-[0.7rem] font-bold leading-none text-white">
                {tab.unread > 99 ? '99+' : tab.unread}
              </span>
            )}
          </button>
        )
      })}
    </div>
  )
}