import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { Calendar } from 'lucide-react'
import AboutHero from '@/components/about/AboutHero'
import BlogContent from '@/components/blogs/BlogContent'
import ScaleOnLarge from '@/components/ui/ScaleOnLarge'
import { getAllBlogs, getBlogBySlug } from '@/services/blogService'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return getAllBlogs().map((b) => ({ slug: b.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const blog = getBlogBySlug(slug)
  if (!blog) return {}
  return { title: `${blog.title} | Al-Shifa Hospital` }
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params
  const blog = getBlogBySlug(slug)
  if (!blog) notFound()

  return (
    <>
      <AboutHero title="Blog Details" />

      <section className="bg-white py-10 md:py-16 px-4 sm:px-6 md:px-12">
        <ScaleOnLarge>
          <article className="max-w-[900px] mx-auto">
            <h1 className="text-blue-900 font-extrabold leading-[1.15] text-[1.7rem] sm:text-[2.1rem] md:text-[2.5rem]">
              {blog.title}
            </h1>

            <div className="flex items-center gap-4 mt-4 text-sm">
              <div className="flex items-center gap-2">
                <img
                  src="/images/logoImage.png"
                  alt=""
                  className="w-7 h-7 rounded-full object-contain"
                />
                <span className="text-amber-500">{blog.author}</span>
              </div>
              <div className="flex items-center gap-1.5 text-amber-500">
                <Calendar size={16} />
                <span>{blog.date}</span>
              </div>
            </div>

            <img
              src={blog.image}
              alt={blog.title}
              className="w-full max-h-[480px] object-cover rounded-xl mt-6"
            />

            <div className="mt-8">
              <BlogContent content={blog.content} />
            </div>
          </article>
        </ScaleOnLarge>
      </section>
    </>
  )
}