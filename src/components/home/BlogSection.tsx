'use client'

import BlogCard from '@/components/ui/BlogCard'
import { blogs } from '@/data/blogs'
import FloatingIcon from '@/components/ui/FloatingIcon'
import ScaleOnLarge from '@/components/ui/ScaleOnLarge'
export default function BlogSection() {
  const loopedBlogs = [...blogs, ...blogs]

  return (
    <section className="relative bg-white py-12 md:py-16 px-4 sm:px-6 md:px-12 overflow-hidden">
        <FloatingIcon
        src="/images/news.png"
        animation="float"
        duration={2.5}
        distance={10}
        className="hidden md:block absolute left-[18%] top-8 w-10 h-10 object-contain z-20"
      />
      <FloatingIcon
        src="/images/hartAndPlus.png"
        animation="spin"
        duration={2.5}
        distance={10}
        className="hidden md:block absolute right-[18%] top-6 w-10 h-10 object-contain z-20"
      />
      <FloatingIcon
        src="/images/bag.PNG"
        animation="sway"
        duration={2.5}
        distance={10}
        className="hidden md:block absolute right-[8%] bottom-4 w-8 h-8 object-contain z-20"
      />
      <FloatingIcon
        src="/images/news2.png"
        animation="float"
        duration={2.4}
        distance={10}
        className="hidden md:block absolute left-[10%] bottom-4 w-6 h-6 object-contain z-20"
      />
    <svg
        className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[260px] z-0 pointer-events-none"
        viewBox="0 0 1300 260"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M0 130 C 150 20, 300 240, 450 130 S 750 20, 900 130 S 1150 240, 1300 130"
          stroke="#cbd5e1"
          strokeWidth="2"
          strokeDasharray="8 8"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M0 170 C 150 60, 300 280, 450 170 S 750 60, 900 170 S 1150 280, 1300 170"
          stroke="#fcd34d"
          strokeWidth="2"
          strokeDasharray="8 8"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
            <ScaleOnLarge>
      <h2 className="relative text-center text-blue-900 font-extrabold text-[1.8rem] sm:text-[2.2rem] md:text-[2.6rem] mb-10 px-4">
        Latest News/Blogs
      </h2>

      <div className="marquee-wrap relative z-10 w-full overflow-hidden">
        <div className="marquee-track flex w-max py-8">
          {loopedBlogs.map((blog, index) => (
            <div key={`${blog.id}-${index}`} className="px-4">
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>
      </div>
      </ScaleOnLarge>

      <style jsx>{`
        .marquee-track {
          animation: blog-scroll 40s linear infinite;
        }
        .marquee-wrap:hover .marquee-track {
          animation-play-state: paused;
        }
        @keyframes blog-scroll {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0%);
          }
        }
      `}</style>
    </section>
  )
}