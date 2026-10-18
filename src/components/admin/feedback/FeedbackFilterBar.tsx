'use client'

import { Search } from 'lucide-react'
import type { FeedbackFilters, ReadFilter } from '@/services/adminFeedbackService'

type Props = {
  filters: FeedbackFilters
  searchInput: string
  hasActiveFilters: boolean
  unreadCount: number
  onSearchChange: (value: string) => void
  onChange: (patch: Partial<Omit<FeedbackFilters, 'page' | 'search'>>) => void
  onReset: () => void
  onMarkAllRead: () => void
}

const controlClass =
  'h-10 rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-700 outline-none focus:border-[#00507c]'

const READ_OPTIONS: { value: ReadFilter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'unread', label: 'Unread' },
  { value: 'read', label: 'Read' },
]

export default function FeedbackFilterBar({
  filters,
  searchInput,
  hasActiveFilters,
  unreadCount,
  onSearchChange,
  onChange,
  onReset,
  onMarkAllRead,
}: Props) {
  return (
    <div className="mb-4 flex flex-col gap-4 rounded-xl bg-white p-4 shadow">
      <div className="flex flex-col gap-3 md:flex-row md:items-center">
        <div className="relative flex-1">
          <Search
            size={16}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            type="text"
            value={searchInput}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search by name, contact or MR number..."
            className={`${controlClass} w-full pl-9`}
          />
        </div>

        <div className="flex overflow-hidden rounded-lg border border-slate-300">
          {READ_OPTIONS.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => onChange({ read: option.value })}
              className={`h-10 px-4 text-sm font-medium transition ${
                filters.read === option.value
                  ? 'bg-[#00507c] text-white'
                  : 'bg-white text-slate-600 hover:bg-slate-100'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-end">
        {filters.type === 'complaint' && (
          <label className="flex flex-col gap-1 text-xs font-semibold text-slate-500">
            Complaint status
            <select
              value={filters.status}
              onChange={(e) =>
                onChange({ status: e.target.value as FeedbackFilters['status'] })
              }
              className={controlClass}
            >
              <option value="all">All</option>
              <option value="pending">Pending</option>
              <option value="resolved">Resolved</option>
            </select>
          </label>
        )}

        <label className="flex flex-col gap-1 text-xs font-semibold text-slate-500">
          From date
          <input
            type="date"
            value={filters.dateFrom}
            max={filters.dateTo || undefined}
            onChange={(e) => onChange({ dateFrom: e.target.value })}
            className={controlClass}
          />
        </label>

        <label className="flex flex-col gap-1 text-xs font-semibold text-slate-500">
          To date
          <input
            type="date"
            value={filters.dateTo}
            min={filters.dateFrom || undefined}
            onChange={(e) => onChange({ dateTo: e.target.value })}
            className={controlClass}
          />
        </label>

        <div className="flex gap-2 sm:ml-auto">
          {hasActiveFilters && (
            <button
              type="button"
              onClick={onReset}
              className="h-10 rounded-lg border border-slate-300 px-4 text-sm font-medium text-slate-600 transition hover:bg-slate-100"
            >
              Reset filters
            </button>
          )}
          {unreadCount > 0 && (
            <button
              type="button"
              onClick={onMarkAllRead}
              className="h-10 rounded-lg bg-[#00507c] px-4 text-sm font-medium text-white transition hover:bg-blue-900"
            >
              Mark all as read ({unreadCount})
            </button>
          )}
        </div>
      </div>
    </div>
  )
}