import React from "react";

// Shared type so you can pass className safely
type IconProps = {
  className?: string;
};

// After Effects
export function AfterEffectsIcon({ className = "w-16 h-16" }: IconProps) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <rect width="100" height="100" rx="20" fill="#9999FF" />
      <text
        x="50"
        y="65"
        fontSize="48"
        fontWeight="bold"
        fill="white"
        textAnchor="middle"
        fontFamily="Arial"
      >
        Ae
      </text>
    </svg>
  );
}

// Premiere Pro
export function PremierProIcon({ className = "w-16 h-16" }: IconProps) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <rect width="100" height="100" rx="20" fill="#1A237E" />
      <text
        x="50"
        y="65"
        fontSize="48"
        fontWeight="bold"
        fill="white"
        textAnchor="middle"
        fontFamily="Arial"
      >
        Pr
      </text>
    </svg>
  );
}

export function BlenderIcon({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <img
      src="/images/blender.png"
      alt="Blender"
      className={`${className} object-contain`}
    />
  );
}

export function CapCutIcon({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <img
      src="/images/capcut.png"
      alt="CapCut"
      className={`${className} object-contain`}
    />
  );
}

// Illustrator
export function IllustratorIcon({ className = "w-16 h-16" }: IconProps) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <rect width="100" height="100" rx="20" fill="#FF9A00" />
      <text
        x="50"
        y="65"
        fontSize="48"
        fontWeight="bold"
        fill="white"
        textAnchor="middle"
        fontFamily="Arial"
      >
        Ai
      </text>
    </svg>
  );
}
