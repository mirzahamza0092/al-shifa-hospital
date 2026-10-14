import { blogs, type Blog } from '@/data/blogs'
import { blogContent } from '@/data/blogContent'

export type BlogWithContent = Blog & { content: string }

export function getAllBlogs(): Blog[] {
  return blogs
}

export function getBlogBySlug(slug: string): BlogWithContent | null {
  const blog = blogs.find((b) => b.slug === slug)
  if (!blog) return null
  return { ...blog, content: blogContent[blog.slug] || '' }
}