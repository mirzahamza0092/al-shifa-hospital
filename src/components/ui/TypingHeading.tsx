'use client'

import { useEffect, useState } from 'react'

const PHRASES = [
  '24/7 Emergency Care',
  'Advanced Diagnostics',
  'Specialized Medical Care',
]

function useTypewriterLoop(
  words: string[],
  typeSpeed = 60,
  deleteSpeed = 30,
  pause = 1200
) {
  const [index, setIndex] = useState(0)
  const [display, setDisplay] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[index]
    let t: ReturnType<typeof setTimeout>

    if (!deleting && display === current) {
      t = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && display === '') {
      setDeleting(false)
      setIndex((i) => (i + 1) % words.length)
    } else {
      t = setTimeout(
        () =>
          setDisplay(
            deleting
              ? current.slice(0, display.length - 1)
              : current.slice(0, display.length + 1)
          ),
        deleting ? deleteSpeed : typeSpeed
      )
    }
    return () => clearTimeout(t)
  }, [display, deleting, index, words, typeSpeed, deleteSpeed, pause])

  return display
}

export default function TypingHeading() {
  const typed = useTypewriterLoop(PHRASES)

  return (
    <div className="text-center mb-10 md:mb-14 px-2">
      <h2 className="text-blue-900 font-bold text-xl sm:text-2xl md:text-3xl flex flex-col md:flex-row items-center justify-center gap-1 md:gap-3">
        <span className="whitespace-nowrap">Why Choose Al-Shifa</span>
        <span className="inline-block min-h-[2rem] md:min-h-[2.5rem] md:w-[26ch] md:text-left text-amber-500 whitespace-nowrap">
          {typed}
          <span className="animate-pulse text-blue-900">_</span>
        </span>
      </h2>
    </div>
  )
}