'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

export default function CountUp({
  to,
  duration = 1.2,
  suffix = '',
}: {
  to: number
  duration?: number
  suffix?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    const start = performance.now()
    let raf: number

    const tick = (now: number) => {
      const progress = Math.min((now - start) / (duration * 1000), 1)
      setValue(Math.round(progress * to))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, to, duration])

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  )
}