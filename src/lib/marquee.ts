
export function repeatForMarquee<T>(items: T[], minCards = 6): T[] {
  if (items.length === 0) return []
  const repeats = Math.ceil(minCards / items.length)
  const base = Array.from({ length: repeats }, () => items).flat()
  return [...base, ...base]
}