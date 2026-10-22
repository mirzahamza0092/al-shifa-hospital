import type { Metadata } from 'next'
import AboutHero from '@/components/about/AboutHero'
import BlogGridCard from '@/components/ui/BlogGridCard'
import ScaleOnLarge from '@/components/ui/ScaleOnLarge'
import { getAllBlogs } from '@/services/blogService'

export const metadata: Metadata = {
  title: 'Blogs | Al-Shifa Hospital',
}

export default function BlogsPage() {
  const blogs = getAllBlogs()

  return (
    <>
      <AboutHero title="Blogs" />

      <section className="bg-white py-10 md:py-16 px-4 sm:px-6 md:px-12">
        <ScaleOnLarge>
          {blogs.length === 0 ? (
            <p className="text-center text-slate-500">No blogs available right now.</p>
          ) : (
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {blogs.map((blog) => (
                <BlogGridCard key={blog.id} blog={blog} />
              ))}
            </div>
          )}
        </ScaleOnLarge>
      </section>
    </>
  )
}