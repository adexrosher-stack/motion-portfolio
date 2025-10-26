export function AfterEffectsIcon() {
  return (
    <svg viewBox="0 0 100 100" className="w-16 h-16">
      <defs>
        <linearGradient id="aeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9D4EDD" />
          <stop offset="100%" stopColor="#5A189A" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="20" fill="url(#aeGradient)" />
      <text x="50" y="65" fontSize="48" fontWeight="bold" fill="white" textAnchor="middle" fontFamily="Arial">
        Ae
      </text>
    </svg>
  )
}

export function PremierProIcon() {
  return (
    <svg viewBox="0 0 100 100" className="w-16 h-16">
      <defs>
        <linearGradient id="prGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1F71B8" />
          <stop offset="100%" stopColor="#0D47A1" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="20" fill="url(#prGradient)" />
      <text x="50" y="65" fontSize="48" fontWeight="bold" fill="white" textAnchor="middle" fontFamily="Arial">
        Pr
      </text>
    </svg>
  )
}

export function BlenderIcon() {
  return (
    <svg viewBox="0 0 100 100" className="w-16 h-16">
      <g>
        <path d="M 25 35 Q 45 25 65 35 Q 75 40 70 55 Q 65 65 50 70 Q 35 72 25 60 Z" fill="#EA7600" />
        <path d="M 65 35 L 75 25 L 70 40 Z" fill="#EA7600" />
        <circle cx="55" cy="55" r="18" fill="#1F3A93" />
      </g>
    </svg>
  )
}

export function CapCutIcon() {
  return (
    <svg viewBox="0 0 100 100" className="w-16 h-16">
      <rect width="100" height="100" rx="15" fill="white" stroke="#E0E0E0" strokeWidth="1" />
      <g stroke="black" strokeWidth="8" strokeLinecap="round" fill="none">
        <path d="M 30 35 Q 50 50 70 65" />
        <path d="M 70 35 Q 50 50 30 65" />
        <path d="M 65 25 L 75 35" />
      </g>
    </svg>
  )
}

export function IllustratorIcon() {
  return (
    <svg viewBox="0 0 100 100" className="w-16 h-16">
      <defs>
        <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFB900" />
          <stop offset="100%" stopColor="#FF8C00" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="20" fill="url(#aiGradient)" />
      <text x="50" y="65" fontSize="48" fontWeight="bold" fill="white" textAnchor="middle" fontFamily="Arial">
        Ai
      </text>
    </svg>
  )
}
