import React from "react"

export function CapCutIcon({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <rect width="100" height="100" rx="15" fill="white" stroke="#E0E0E0" strokeWidth="1" />
      <g stroke="black" strokeWidth="8" strokeLinecap="round" fill="none">
        <path d="M 30 35 Q 50 50 70 65" />
        <path d="M 70 35 Q 50 50 30 65" />
        <path d="M 65 25 L 75 35" />
      </g>
    </svg>
  )
}
