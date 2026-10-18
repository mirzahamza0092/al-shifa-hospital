'use client'

import { useEffect, useState } from 'react'
import { notifyUnreadChanged } from '@/hooks/admin/useUnreadFeedbackCounts'
import {
  DEFAULT_FEEDBACK_FILTERS,
  type ComplaintStatus,
  type FeedbackFilters,
  type FeedbackItem,
} from '@/services/adminFeedbackService'

type FilterPatch = Partial<Omit<FeedbackFilters, 'page' | 'search'>>

function toQueryString(filters: FeedbackFilters): string {
  const params = new URLSearchParams()
  params.set('type', filters.type)
  params.set('read', filters.read)
  params.set('status', filters.status)
  params.set('page', String(filters.page))
  if (filters.search) params.set('search', filters.search)
  if (filters.dateFrom) params.set('dateFrom', filters.dateFrom)
  if (filters.dateTo) params.set('dateTo', filters.dateTo)
  return params.toString()
}

async function patchItem(item: FeedbackItem, body: Record<string, unknown>): Promise<boolean> {
  try {
    const res = await fetch(`/api/admin/feedback/${item.type}/${item.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
    return res.ok
  } catch {
    return false
  }
}

export function useFeedbackList() {
  const [filters, setFilters] = useState<FeedbackFilters>(DEFAULT_FEEDBACK_FILTERS)
  const [searchInput, setSearchInput] = useState('')
  const [items, setItems] = useState<FeedbackItem[]>([])
  const [total, setTotal] = useState(0)
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [reloadKey, setReloadKey] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      const value = searchInput.trim()
      setFilters((prev) => (prev.search === value ? prev : { ...prev, search: value, page: 1 }))
    }, 400)
    return () => clearTimeout(timer)
  }, [searchInput])

  useEffect(() => {
    const controller = new AbortController()

    async function load() {
      setLoading(true)
      setError('')
      try {
        const res = await fetch(`/api/admin/feedback?${toQueryString(filters)}`, {
          signal: controller.signal,
          cache: 'no-store',
        })
        const data = await res.json()
        if (!res.ok) throw new Error(data.error || 'Failed to load feedback')

        setItems(data.items)
        setTotal(data.total)
        setTotalPages(data.totalPages)
        if (data.page !== filters.page) {
          setFilters((prev) => ({ ...prev, page: data.page }))
        }
      } catch (err) {
        if (controller.signal.aborted) return
        setError(err instanceof Error ? err.message : 'Failed to load feedback')
      } finally {
        if (!controller.signal.aborted) setLoading(false)
      }
    }

    load()
    return () => controller.abort()
  }, [filters, reloadKey])

  function changeFilters(patch: FilterPatch) {
    setFilters((prev) => {
      const next = { ...prev, ...patch, page: 1 }
      if (next.type !== 'complaint') next.status = 'all'
      return next
    })
  }

  function setPage(page: number) {
    setFilters((prev) => ({ ...prev, page }))
  }

  function resetFilters() {
    setSearchInput('')
    setFilters(DEFAULT_FEEDBACK_FILTERS)
  }

  function refresh() {
    setReloadKey((key) => key + 1)
  }

  function replaceItem(updated: FeedbackItem) {
    setItems((prev) =>
      prev.map((item) => (item.id === updated.id && item.type === updated.type ? updated : item))
    )
  }

  async function setRead(item: FeedbackItem, isRead: boolean): Promise<boolean> {
    const ok = await patchItem(item, { is_read: isRead })
    if (!ok) return false
    replaceItem({ ...item, is_read: isRead })
    notifyUnreadChanged()
    return true
  }

  async function setStatus(item: FeedbackItem, status: ComplaintStatus): Promise<boolean> {
    const ok = await patchItem(item, { status })
    if (!ok) return false
    replaceItem({ ...item, status })
    return true
  }

  async function markAllRead(): Promise<boolean> {
    try {
      const res = await fetch('/api/admin/feedback/mark-all-read', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: filters.type === 'all' ? undefined : filters.type }),
      })
      if (!res.ok) return false
      refresh()
      notifyUnreadChanged()
      return true
    } catch {
      return false
    }
  }

  const hasActiveFilters =
    filters.type !== 'all' ||
    filters.read !== 'all' ||
    filters.status !== 'all' ||
    filters.dateFrom !== '' ||
    filters.dateTo !== '' ||
    searchInput.trim() !== ''

  return {
    filters,
    searchInput,
    setSearchInput,
    items,
    total,
    totalPages,
    loading,
    error,
    hasActiveFilters,
    changeFilters,
    setPage,
    resetFilters,
    refresh,
    setRead,
    setStatus,
    markAllRead,
  }
}