export default function BackgroundPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 1200"
      >
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
            patternTransform="translate(0,0) scale(1)"
          >
            <rect width="40" height="40" fill="transparent" />
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="rgba(14, 165, 233, 0.1)"
              strokeWidth="1"
            />
          </pattern>
          <radialGradient id="gradient1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(14, 165, 233, 0.3)" stopOpacity="1" />
            <stop offset="100%" stopColor="rgba(14, 165, 233, 0)" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <circle cx="200" cy="200" r="300" fill="url(#gradient1)" />
        <circle cx="1000" cy="800" r="400" fill="url(#gradient1)" />
      </svg>
    </div>
  )
}

