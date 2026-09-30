const SIZE = 300
const C = SIZE / 2
const VERTEX = [0, 60, 120, 180, 240, 300]

const roundedHex = (r: number, corner: number, rot = 0) => {
  const pts = VERTEX.map((a) => {
    const rad = ((a + rot) * Math.PI) / 180
    return [C + r * Math.cos(rad), C + r * Math.sin(rad)]
  })
  const t = corner / r
  const lerp = (a: number[], b: number[]) => [
    a[0] + (b[0] - a[0]) * t,
    a[1] + (b[1] - a[1]) * t,
  ]
  let d = ''
  pts.forEach((p, i) => {
    const prev = pts[(i + 5) % 6]
    const next = pts[(i + 1) % 6]
    const s = lerp(p, prev)
    const e = lerp(p, next)
    d += `${i === 0 ? 'M' : 'L'}${s[0].toFixed(2)},${s[1].toFixed(2)} Q${p[0].toFixed(2)},${p[1].toFixed(2)} ${e[0].toFixed(2)},${e[1].toFixed(2)} `
  })
  return d + 'Z'
}

export default function HexPhoto({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-full max-w-[240px] aspect-square mx-auto">
      <svg
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        width="100%"
        height="100%"
        className="absolute inset-0"
        fill="none"
      >
        <path
          d={roundedHex(135, 42, -4)}
          strokeWidth="3"
          className="stroke-[#d5e0e6] group-hover:stroke-blue-900 transition-colors duration-300"
        />
        <path
          d={roundedHex(102, 34, 8)}
          strokeWidth="3"
          className="stroke-[#f7ecd3] group-hover:stroke-amber-400 transition-colors duration-300"
        />
      </svg>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[52%] h-[52%] overflow-hidden rounded-b-[2.5rem]">
        <img src={src} alt={alt} className="w-full h-full object-cover object-top" />
      </div>
    </div>
  )
}