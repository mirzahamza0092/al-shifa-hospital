import { supabaseAdmin } from '@/db/supabaseClient'
import {
  FEEDBACK_PAGE_SIZE,
  FEEDBACK_TYPES,
  type ComplaintStatus,
  type FeedbackFilters,
  type FeedbackItem,
  type FeedbackType,
  type UnreadCounts,
} from '@/services/adminFeedbackService'

const TABLES: Record<FeedbackType, string> = {
  complaint: 'complaints',
  compliment: 'compliments',
  suggestion: 'suggestions',
}

const PK_OFFSET = '+05:00'

function fetchPage(filters: FeedbackFilters, page: number) {
  const from = (page - 1) * FEEDBACK_PAGE_SIZE
  const to = from + FEEDBACK_PAGE_SIZE - 1

  let query = supabaseAdmin.from('feedback_all').select('*', { count: 'exact' })

  if (filters.type !== 'all') query = query.eq('type', filters.type)
  if (filters.read === 'unread') query = query.eq('is_read', false)
  if (filters.read === 'read') query = query.eq('is_read', true)
  if (filters.status !== 'all') query = query.eq('status', filters.status)
  if (filters.dateFrom) {
    query = query.gte('created_at', `${filters.dateFrom}T00:00:00${PK_OFFSET}`)
  }
  if (filters.dateTo) {
    query = query.lte('created_at', `${filters.dateTo}T23:59:59.999${PK_OFFSET}`)
  }
  if (filters.search) {
    const term = `%${filters.search}%`
    query = query.or(
      `patient_name.ilike.${term},contact_number.ilike.${term},mr_number.ilike.${term}`
    )
  }

  return query
    .order('is_read', { ascending: true })
    .order('created_at', { ascending: false })
    .order('id', { ascending: true })
    .range(from, to)
}

export async function getFeedbackPage(filters: FeedbackFilters) {
  let page = filters.page
  let result = await fetchPage(filters, page)

  if (result.error && page > 1) {
    page = 1
    result = await fetchPage(filters, page)
  }
  if (result.error) throw result.error

  const total = result.count ?? 0
  return {
    items: (result.data ?? []) as FeedbackItem[],
    total,
    page,
    pageSize: FEEDBACK_PAGE_SIZE,
    totalPages: Math.max(1, Math.ceil(total / FEEDBACK_PAGE_SIZE)),
  }
}

export async function getUnreadCounts(): Promise<UnreadCounts> {
  const results = await Promise.all(
    FEEDBACK_TYPES.map((type) =>
      supabaseAdmin
        .from('feedback_all')
        .select('id', { count: 'exact', head: true })
        .eq('type', type)
        .eq('is_read', false)
    )
  )

  const counts = results.map((result) => {
    if (result.error) throw result.error
    return result.count ?? 0
  })
  const [complaint, compliment, suggestion] = counts

  return { complaint, compliment, suggestion, total: complaint + compliment + suggestion }
}

export async function updateFeedbackRead(type: FeedbackType, id: string, isRead: boolean) {
  const { error } = await supabaseAdmin
    .from(TABLES[type])
    .update({ is_read: isRead })
    .eq('id', id)
  if (error) throw error
  return true
}

export async function updateComplaintStatus(id: string, status: ComplaintStatus) {
  const { error } = await supabaseAdmin.from('complaints').update({ status }).eq('id', id)
  if (error) throw error
  return true
}

export async function markAllFeedbackRead(type?: FeedbackType) {
  const types = type ? [type] : [...FEEDBACK_TYPES]
  const results = await Promise.all(
    types.map((t) =>
      supabaseAdmin.from(TABLES[t]).update({ is_read: true }).eq('is_read', false)
    )
  )
  results.forEach((result) => {
    if (result.error) throw result.error
  })
  return true
}