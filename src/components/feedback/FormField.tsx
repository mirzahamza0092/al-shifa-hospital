import type { ReactNode } from 'react'

type Props = {
  label: string
  required?: boolean
  icon?: ReactNode
  children: ReactNode
  className?: string
}

export const fieldInputClass =
  'w-full border border-slate-300 bg-white rounded-md pl-11 pr-3 py-3 text-sm text-slate-700 outline-none focus:border-blue-900'

export const fieldTextareaClass =
  'w-full border border-slate-300 bg-white rounded-md px-4 py-3 text-sm text-slate-700 outline-none focus:border-blue-900 min-h-[140px] resize-y'

export default function FormField({ label, required, icon, children, className = '' }: Props) {
  return (
    <label className={`flex flex-col gap-2 ${className}`}>
      <span className="text-sm font-semibold text-blue-900">
        {label}
        {required && <span className="text-red-500"> *</span>}
      </span>
      <span className="relative block">
        {icon && (
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-amber-500 pointer-events-none">
            {icon}
          </span>
        )}
        {children}
      </span>
    </label>
  )
}