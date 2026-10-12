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
      <h2 className="text-blue-900 font-bold text-xl sm:text-2xl md:text-3xl min-h-[2.5rem]">
        Why Choose Al-Shifa{' '}
        <span className="text-amber-500">{typed}</span>
        <span className="animate-pulse">_</span>
      </h2>
    </div>
  )
}