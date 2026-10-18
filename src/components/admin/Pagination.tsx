'use client'

type Props = {
  page: number
  totalPages: number
  total: number
  pageSize: number
  onChange: (page: number) => void
}

function getPageList(page: number, totalPages: number): (number | '…')[] {
  if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1)

  const pages = Array.from(new Set([1, totalPages, page - 1, page, page + 1]))
    .filter((p) => p >= 1 && p <= totalPages)
    .sort((a, b) => a - b)

  const result: (number | '…')[] = []
  pages.forEach((p, index) => {
    if (index > 0 && p - pages[index - 1] > 1) result.push('…')
    result.push(p)
  })
  return result
}

const buttonClass =
  'min-w-[2.25rem] rounded-lg border px-3 py-1.5 text-sm font-medium transition disabled:cursor-not-allowed disabled:opacity-40'

export default function Pagination({ page, totalPages, total, pageSize, onChange }: Props) {
  const start = total === 0 ? 0 : (page - 1) * pageSize + 1
  const end = Math.min(page * pageSize, total)

  return (
    <div className="mt-4 flex flex-col items-center justify-between gap-3 sm:flex-row">
      <p className="text-sm text-slate-500">
        {total === 0 ? 'No entries' : `Showing ${start}–${end} of ${total} entries`}
      </p>

      {totalPages > 1 && (
        <div className="flex flex-wrap items-center justify-center gap-1.5">
          <button
            type="button"
            disabled={page <= 1}
            onClick={() => onChange(page - 1)}
            className={`${buttonClass} border-slate-300 bg-white text-slate-700 hover:bg-slate-100`}
          >
            Previous
          </button>

          {getPageList(page, totalPages).map((item, index) =>
            item === '…' ? (
              <span key={`gap-${index}`} className="px-1 text-slate-400">
                …
              </span>
            ) : (
              <button
                key={item}
                type="button"
                onClick={() => onChange(item)}
                className={`${buttonClass} ${
                  item === page
                    ? 'border-[#00507c] bg-[#00507c] text-white'
                    : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100'
                }`}
              >
                {item}
              </button>
            )
          )}

          <button
            type="button"
            disabled={page >= totalPages}
            onClick={() => onChange(page + 1)}
            className={`${buttonClass} border-slate-300 bg-white text-slate-700 hover:bg-slate-100`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  )
}