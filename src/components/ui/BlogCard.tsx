'use client'

import { Calendar, ChevronRight } from 'lucide-react'
import { Blog } from '@/data/blogs'

interface BlogCardProps {
  blog: Blog
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <div className="relative flex-shrink-0 w-[300px] sm:w-[340px] md:w-[360px] bg-white rounded-2xl p-3 border-2 border-slate-200 shadow-none transition-all duration-300 hover:-translate-y-2 hover:border-transparent hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] flex flex-col">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-[230px] object-cover rounded-lg"
      />

      <div className="flex items-center gap-4 mt-5 px-3">
        <div className="flex items-center gap-2">
          <img
            src="/images/Medical.png"
            alt=""
            className="w-7 h-7 rounded-full object-contain"
          />
          <span className="text-amber-500 text-sm">{blog.author}</span>
        </div>
        <div className="flex items-center gap-1.5 text-amber-500 text-sm">
          <Calendar size={16} />
          <span>{blog.date}</span>
        </div>
      </div>

      <h4 className="px-3 mt-4 font-bold text-blue-900 text-xl leading-snug min-h-[84px]">
        {blog.title}
      </h4>

      <div className="px-3 mt-auto pt-14 pb-3">
        <button className="inline-flex items-center gap-6 border-2 border-blue-900 rounded-lg pl-6 pr-1.5 py-1.5 text-blue-900 text-sm">
          Read More
          <span className="w-8 h-8 rounded-md bg-blue-900 text-white flex items-center justify-center">
            <ChevronRight size={18} strokeWidth={3} />
          </span>
        </button>
      </div>
    </div>
  )
}