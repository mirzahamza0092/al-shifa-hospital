import type { ReactNode } from 'react'

type Props = {
  title: string
  children: ReactNode
}

export default function FeedbackFormShell({ title, children }: Props) {
  return (
    <div className="max-w-[1100px] mx-auto bg-white rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-6 sm:p-8 md:p-10">
      <h2 className="text-blue-900 font-extrabold text-2xl mb-6">{title}</h2>
      {children}
    </div>
  )
}