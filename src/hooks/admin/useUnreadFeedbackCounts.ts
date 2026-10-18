'use client'

import { useCallback, useEffect, useState } from 'react'
import type { UnreadCounts } from '@/services/adminFeedbackService'

export const FEEDBACK_UNREAD_EVENT = 'feedback:unread-changed'

const REFRESH_INTERVAL_MS = 60000
const EMPTY_COUNTS: UnreadCounts = { complaint: 0, compliment: 0, suggestion: 0, total: 0 }

export function notifyUnreadChanged() {
  window.dispatchEvent(new Event(FEEDBACK_UNREAD_EVENT))
}

export function useUnreadFeedbackCounts() {
  const [counts, setCounts] = useState<UnreadCounts>(EMPTY_COUNTS)

  const refresh = useCallback(async () => {
    try {
      const res = await fetch('/api/admin/feedback/unread-count', { cache: 'no-store' })
      if (!res.ok) return
      setCounts(await res.json())
    } catch {
    }
  }, [])

  useEffect(() => {
    refresh()
    const timer = setInterval(refresh, REFRESH_INTERVAL_MS)
    window.addEventListener(FEEDBACK_UNREAD_EVENT, refresh)
    return () => {
      clearInterval(timer)
      window.removeEventListener(FEEDBACK_UNREAD_EVENT, refresh)
    }
  }, [refresh])

  return { counts, refresh }
}