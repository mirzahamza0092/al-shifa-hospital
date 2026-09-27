'use client'

interface YouTubeBackgroundProps {
  videoId: string
  title?: string
  className?: string
}

export default function YouTubeBackground({
  videoId,
  title = 'Background video',
  className = '',
}: YouTubeBackgroundProps) {
  const src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0&showinfo=0`

  return (
    <div className={`relative overflow-hidden bg-black ${className}`}>
      <iframe
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute border-0"
        style={{
          top: '50%',
          left: '50%',
          width: '150%',
          height: '150%',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </div>
  )
}