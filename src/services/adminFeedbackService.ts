export const FEEDBACK_PAGE_SIZE = 50

export const FEEDBACK_TYPES = ['complaint', 'compliment', 'suggestion'] as const

export type FeedbackType = (typeof FEEDBACK_TYPES)[number]
export type ComplaintStatus = 'pending' | 'resolved'
export type ReadFilter = 'all' | 'unread' | 'read'
export type StatusFilter = 'all' | ComplaintStatus

export const FEEDBACK_TYPE_LABELS: Record<FeedbackType, string> = {
  complaint: 'Complaint',
  compliment: 'Compliment',
  suggestion: 'Suggestion',
}

export const FEEDBACK_TYPE_PLURALS: Record<FeedbackType, string> = {
  complaint: 'Complaints',
  compliment: 'Compliments',
  suggestion: 'Suggestions',
}

export type FeedbackItem = {
  id: string
  type: FeedbackType
  patient_name: string
  contact_number: string
  mr_number: string | null
  complaint_type: string | null
  complaint_date: string | null
  location: string | null
  message: string
  status: ComplaintStatus | null
  is_read: boolean
  created_at: string
}

export type UnreadCounts = Record<FeedbackType, number> & { total: number }

export type FeedbackFilters = {
  type: FeedbackType | 'all'
  read: ReadFilter
  status: StatusFilter
  search: string
  dateFrom: string
  dateTo: string
  page: number
}

export const DEFAULT_FEEDBACK_FILTERS: FeedbackFilters = {
  type: 'all',
  read: 'all',
  status: 'all',
  search: '',
  dateFrom: '',
  dateTo: '',
  page: 1,
}

export type FeedbackUpdate = {
  is_read?: boolean
  status?: ComplaintStatus
}

export function isFeedbackType(value: unknown): value is FeedbackType {
  return typeof value === 'string' && (FEEDBACK_TYPES as readonly string[]).includes(value)
}

export function isValidFeedbackId(value: string): boolean {
  return /^[0-9a-fA-F-]{36}$/.test(value)
}

function cleanSearch(value: string | null): string {
  return (value ?? '')
    .replace(/[%,()*\\"']/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 50)
}

function cleanDate(value: string | null): string {
  return value && /^\d{4}-\d{2}-\d{2}$/.test(value) ? value : ''
}

export function parseFeedbackFilters(params: URLSearchParams): FeedbackFilters {
  const typeParam = params.get('type')
  const readParam = params.get('read')
  const statusParam = params.get('status')
  const pageParam = Number.parseInt(params.get('page') ?? '1', 10)

  const type = isFeedbackType(typeParam) ? typeParam : 'all'
  const read = readParam === 'unread' || readParam === 'read' ? readParam : 'all'
  const status =
    type === 'complaint' && (statusParam === 'pending' || statusParam === 'resolved')
      ? statusParam
      : 'all'

  return {
    type,
    read,
    status,
    search: cleanSearch(params.get('search')),
    dateFrom: cleanDate(params.get('dateFrom')),
    dateTo: cleanDate(params.get('dateTo')),
    page: Number.isFinite(pageParam) && pageParam > 0 ? pageParam : 1,
  }
}

export function parseFeedbackUpdate(type: FeedbackType, body: unknown): FeedbackUpdate | null {
  const data = (body ?? {}) as Record<string, unknown>
  const update: FeedbackUpdate = {}

  if (typeof data.is_read === 'boolean') update.is_read = data.is_read
  if (type === 'complaint' && (data.status === 'pending' || data.status === 'resolved')) {
    update.status = data.status
  }

  return Object.keys(update).length > 0 ? update : null
}

export function formatFeedbackDate(value: string | null): string {
  if (!value) return '—'
  return new Date(value).toLocaleDateString('en-GB', {
    timeZone: 'UTC',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}

export function formatFeedbackDateTime(value: string): string {
  return new Date(value).toLocaleString('en-GB', {
    timeZone: 'Asia/Karachi',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  })
}