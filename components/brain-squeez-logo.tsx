export function BrainSqueezelogo() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative w-8 h-8">
        {/* Brain icon with colorful style */}
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Main brain shape with gradient colors */}
          <circle cx="35" cy="30" r="12" fill="url(#gradient1)" />
          <circle cx="65" cy="30" r="12" fill="url(#gradient2)" />
          <circle cx="25" cy="55" r="11" fill="url(#gradient3)" />
          <circle cx="75" cy="55" r="11" fill="url(#gradient4)" />
          <ellipse cx="50" cy="45" rx="18" ry="20" fill="url(#gradient5)" />

          {/* Squeeze symbol - two hands/curves */}
          <path
            d="M 20 70 Q 15 80 20 85 Q 25 82 25 75"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-pink-500"
          />
          <path
            d="M 80 70 Q 85 80 80 85 Q 75 82 75 75"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-cyan-500"
          />

          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#0ea5e9" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#f43f5e" />
            </linearGradient>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#f97316" />
            </linearGradient>
            <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
            <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div>
        <div className="font-bold text-lg bg-gradient-to-r from-blue-600 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
          Brain Squeez
        </div>
        <div className="text-xs text-muted-foreground">Master Your Subjects</div>
      </div>
    </div>
  )
}
