'use client'

import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { gallery } from '@/data/gallery'

export default function GallerySection() {
  const [perPage, setPerPage] = useState(2)
  const [page, setPage] = useState(0)

  useEffect(() => {
    const update = () => setPerPage(window.innerWidth < 768 ? 1 : 2)
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const pages: (typeof gallery)[] = []
  for (let i = 0; i < gallery.length; i += perPage) {
    pages.push(gallery.slice(i, i + perPage))
  }

  const totalPages = pages.length
  const current = Math.min(page, totalPages - 1)

  const next = () => setPage((current + 1) % totalPages)
  const prev = () => setPage((current - 1 + totalPages) % totalPages)

  return (
    <section className="bg-white pt-10 md:pt-16 pb-10 md:pb-16 px-4 sm:px-6 md:px-12">
      <div className="max-w-[1300px] mx-auto">
        <div className="text-center mb-6">
          <span className="inline-block bg-amber-50 text-amber-600 px-4 py-1.5 rounded-full font-semibold text-[0.85rem] border border-dashed border-amber-200">
            Gallery
          </span>
        </div>

        <div className="relative bg-[#00507c] rounded-[2rem] py-10 md:py-14 px-12 sm:px-16 md:px-24">
          {/* Left arrow */}
          <button
            onClick={prev}
            aria-label="Previous"
            className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-slate-300/90 text-[#00507c] flex items-center justify-center hover:bg-white transition"
          >
            <ChevronLeft size={22} strokeWidth={3} />
          </button>

          {/* Slides */}
          <div className="overflow-hidden py-4">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {pages.map((group, pageIndex) => (
                <div
                  key={pageIndex}
                  className="w-full flex-shrink-0 flex gap-4 md:gap-6 items-start"
                >
                  {group.map((item) => (
                    <div
                      key={item.id}
                      className="flex-1 min-w-0 bg-white rounded-lg p-1.5 shadow-lg"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-[200px] sm:h-[240px] md:h-[260px] object-cover rounded-lg"
                      />
                      <p className="text-center font-bold text-[#00507c] text-sm py-3">
                        {item.title}
                      </p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Right arrow */}
          <button
            onClick={next}
            aria-label="Next"
            className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-slate-300/90 text-[#00507c] flex items-center justify-center hover:bg-white transition"
          >
            <ChevronRight size={22} strokeWidth={3} />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 md:gap-3 mt-8 flex-wrap">
            {pages.map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`w-4 h-4 rounded-full transition ${
                  i === current ? 'bg-[#03111f]' : 'bg-[#003a5c]'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}