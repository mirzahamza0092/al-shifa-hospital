'use client'

import { useState } from 'react'
import Pagination from '@/components/admin/Pagination'
import FeedbackDetailModal from '@/components/admin/feedback/FeedbackDetailModal'
import FeedbackFilterBar from '@/components/admin/feedback/FeedbackFilterBar'
import FeedbackTable from '@/components/admin/feedback/FeedbackTable'
import FeedbackTypeTabs from '@/components/admin/feedback/FeedbackTypeTabs'
import { useFeedbackList } from '@/hooks/admin/useFeedbackList'
import { useUnreadFeedbackCounts } from '@/hooks/admin/useUnreadFeedbackCounts'
import {
  FEEDBACK_PAGE_SIZE,
  type FeedbackItem,
  type FeedbackType,
} from '@/services/adminFeedbackService'

export default function FeedbackPage() {
  const list = useFeedbackList()
  const { counts } = useUnreadFeedbackCounts()
  const [selectedKey, setSelectedKey] = useState<{ type: FeedbackType; id: string } | null>(null)

  const selected = selectedKey
    ? list.items.find((i) => i.type === selectedKey.type && i.id === selectedKey.id) ?? null
    : null

  const unreadCount = list.filters.type === 'all' ? counts.total : counts[list.filters.type]

  function handleOpen(item: FeedbackItem) {
    setSelectedKey({ type: item.type, id: item.id })
    if (!item.is_read) list.setRead(item, true)
  }

  async function handleMarkAllRead() {
    if (!confirm('Mark all unread entries as read?')) return
    const ok = await list.markAllRead()
    if (!ok) alert('Could not update. Please try again.')
  }

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-end justify-between gap-2">
        <h1 className="text-2xl font-bold text-blue-900">Feedback</h1>
        <p className="text-sm text-slate-500">{list.total} entries</p>
      </div>

      <FeedbackTypeTabs
        active={list.filters.type}
        counts={counts}
        onChange={(type) => list.changeFilters({ type })}
      />

      <FeedbackFilterBar
        filters={list.filters}
        searchInput={list.searchInput}
        hasActiveFilters={list.hasActiveFilters}
        unreadCount={unreadCount}
        onSearchChange={list.setSearchInput}
        onChange={list.changeFilters}
        onReset={list.resetFilters}
        onMarkAllRead={handleMarkAllRead}
      />

      {list.error && (
        <div className="mb-4 flex items-center justify-between gap-3 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          <span>{list.error}</span>
          <button type="button" onClick={list.refresh} className="font-semibold underline">
            Try again
          </button>
        </div>
      )}

      <FeedbackTable items={list.items} loading={list.loading} onOpen={handleOpen} />

      <Pagination
        page={list.filters.page}
        totalPages={list.totalPages}
        total={list.total}
        pageSize={FEEDBACK_PAGE_SIZE}
        onChange={list.setPage}
      />

      <FeedbackDetailModal
        item={selected}
        onClose={() => setSelectedKey(null)}
        onSetRead={list.setRead}
        onSetStatus={list.setStatus}
      />
    </div>
  )
}