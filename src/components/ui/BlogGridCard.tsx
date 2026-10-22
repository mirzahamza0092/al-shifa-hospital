import Link from 'next/link'
import { Calendar, ChevronRight } from 'lucide-react'
import type { Blog } from '@/data/blogs'

export default function BlogGridCard({ blog }: { blog: Blog }) {
  const href = `/blogs/${blog.slug}`

  return (
    <div className="relative flex h-full w-full flex-col rounded-2xl border-2 border-slate-200 bg-white p-3 transition-all duration-300 hover:-translate-y-2 hover:border-transparent hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)]">
      <Link href={href}>
        <img src={blog.image} alt={blog.title} className="w-full h-auto rounded-lg" />
      </Link>

      <div className="mt-5 flex flex-wrap items-center gap-4 px-3">
        <div className="flex items-center gap-2">
          <img
            src="/images/logoImage.png"
            alt=""
            className="h-7 w-7 rounded-full object-contain"
          />
          <span className="text-sm text-amber-500">{blog.author}</span>
        </div>
        <div className="flex items-center gap-1.5 text-sm text-amber-500">
          <Calendar size={16} />
          <span>{blog.date}</span>
        </div>
      </div>

      <h4 className="mt-4 px-3 text-xl font-bold leading-snug text-blue-900 line-clamp-3">
        <Link href={href}>{blog.title}</Link>
      </h4>

      <div className="mt-auto px-3 pb-3 pt-8">
        <Link
          href={href}
          className="inline-flex items-center gap-6 rounded-lg border-2 border-blue-900 py-1.5 pl-6 pr-1.5 text-sm text-blue-900"
        >
          Read More
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-900 text-white">
            <ChevronRight size={18} strokeWidth={3} />
          </span>
        </Link>
      </div>
    </div>
  )
}