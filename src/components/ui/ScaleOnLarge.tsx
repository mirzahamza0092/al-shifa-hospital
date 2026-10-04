'use client'

import { useEffect, useState, ReactNode } from 'react'

const BASE_WIDTH = 1440
const MAX_SCALE = 1.6

export default function ScaleOnLarge({ children }: { children: ReactNode }) {
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const update = () =>
      setScale(Math.min(MAX_SCALE, Math.max(1, window.innerWidth / BASE_WIDTH)))
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return <div style={{ zoom: scale }}>{children}</div>
}