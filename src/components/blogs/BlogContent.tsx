import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function BlogContent({ content }: { content: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h2: ({ children }) => (
          <h2 className="mt-10 mb-3 text-blue-900 font-extrabold text-xl sm:text-2xl leading-snug">
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3 className="mt-6 mb-2 text-blue-900 font-bold text-base sm:text-lg leading-snug">
            {children}
          </h3>
        ),
        p: ({ children }) => (
          <p className="mb-4 text-slate-600 text-sm sm:text-[0.95rem] leading-relaxed">{children}</p>
        ),
        ul: ({ children }) => (
          <ul className="mb-4 pl-6 list-disc space-y-1.5 text-slate-600 text-sm sm:text-[0.95rem] leading-relaxed">
            {children}
          </ul>
        ),
        ol: ({ children }) => (
          <ol className="mb-4 pl-6 list-decimal space-y-1.5 text-slate-600 text-sm sm:text-[0.95rem] leading-relaxed">
            {children}
          </ol>
        ),
        strong: ({ children }) => <strong className="font-bold text-blue-900">{children}</strong>,
        table: ({ children }) => (
          <div className="mb-6 overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">{children}</table>
          </div>
        ),
        th: ({ children }) => (
          <th className="bg-blue-900 text-white text-left font-semibold px-3 py-2">{children}</th>
        ),
        td: ({ children }) => (
          <td className="border-t border-slate-200 text-slate-600 px-3 py-2">{children}</td>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  )
}