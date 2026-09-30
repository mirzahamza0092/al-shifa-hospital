'use client'

import { motion } from 'framer-motion'
import { DocumentData } from '@/data/documents'

const boxClass =
  'border border-slate-500 px-2 py-1 text-[0.85rem] sm:text-base leading-snug text-justify text-slate-900'
const labelClass = 'font-bold text-slate-900 text-sm sm:text-base mb-1.5'

export default function DocumentCard({ doc }: { doc: DocumentData }) {
  return (
    <section className="bg-white py-10 md:py-16 px-4 sm:px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-[720px] mx-auto bg-white rounded-xl border border-slate-700 shadow-[0_10px_30px_rgba(0,0,0,0.12)] px-4 py-8 sm:px-8 sm:py-12 md:px-12 md:py-14"
      >
        <div className="flex border border-slate-500 mb-8">
          <div className="w-[80px] sm:w-[120px] shrink-0 border-r border-slate-500 flex items-center justify-center p-2">
            <img
              src="/images/logoImage.png"
              alt="Al Shifa Hospital"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="flex-1 flex items-center justify-center px-2 py-4 text-center">
            <h3 className="font-bold text-slate-900 text-base sm:text-xl md:text-2xl">
              {doc.cardTitle}
            </h3>
          </div>
        </div>

        {doc.sections.map((s, idx) => (
          <div key={s.label} className={idx > 0 ? 'mt-8' : ''}>
            <p className={labelClass}>{s.label}</p>

            {s.type === 'text' ? (
              <div className={boxClass}>{s.text}</div>
            ) : (
              <div className="border border-slate-500 w-full sm:w-[230px]">
                <p className="font-bold text-slate-900 px-3 py-1 text-sm sm:text-base">
                  {s.listTitle}
                </p>
                <ol className="px-3 pb-3 space-y-1.5 text-sm sm:text-base text-slate-900">
                  {s.items.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span>{i + 1}.</span>
                      <span>
                        {item.letter && <b>{item.letter}</b>}
                        {item.rest}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        ))}

        {doc.footerNote && (
          <p className="mt-16 sm:mt-24 text-[0.6rem] text-slate-800">{doc.footerNote}</p>
        )}
      </motion.div>
    </section>
  )
}