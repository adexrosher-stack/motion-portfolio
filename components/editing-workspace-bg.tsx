"use client"

import { motion } from "framer-motion"

export function EditingWorkspaceBg() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      {/* Main editing interface - left panel */}
      <motion.div
        className="absolute left-0 top-0 w-1/4 h-full bg-gradient-to-r from-slate-800/80 to-slate-800/40 border-r border-blue-500/20 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Project panel header */}
        <div className="p-4 border-b border-blue-500/20">
          <div className="text-blue-400 text-xs font-mono font-bold tracking-wider">PROJECT</div>
        </div>
        {/* Project items */}
        <div className="p-3 space-y-2">
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="h-8 bg-blue-500/10 rounded border border-blue-500/20 flex items-center px-2"
              animate={{ opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 3, delay: i * 0.3, repeat: Number.POSITIVE_INFINITY }}
            >
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-2" />
              <span className="text-blue-300/60 text-xs font-mono">Sequence_{i}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Center preview area */}
      <motion.div
        className="absolute left-1/4 top-0 w-1/2 h-2/3 bg-gradient-to-b from-slate-900/60 to-slate-950/80 border-b border-blue-500/20 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        {/* Video preview */}
        <div className="w-4/5 h-5/6 bg-gradient-to-br from-blue-900/40 to-slate-900/60 rounded-lg border border-blue-400/30 flex items-center justify-center overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          />
          <div className="text-blue-400/40 text-sm font-mono">PREVIEW</div>
        </div>
      </motion.div>

      {/* Right panel - effects/properties */}
      <motion.div
        className="absolute right-0 top-0 w-1/4 h-2/3 bg-gradient-to-l from-slate-800/80 to-slate-800/40 border-l border-blue-500/20 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <div className="p-4 border-b border-blue-500/20">
          <div className="text-blue-400 text-xs font-mono font-bold tracking-wider">EFFECTS</div>
        </div>
        <div className="p-3 space-y-2">
          {["Color Correction", "Blur", "Transition", "Audio"].map((effect, i) => (
            <motion.div
              key={effect}
              className="h-7 bg-blue-500/10 rounded border border-blue-500/20 flex items-center px-2"
              animate={{ opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 3, delay: i * 0.25, repeat: Number.POSITIVE_INFINITY }}
            >
              <span className="text-blue-300/60 text-xs font-mono">{effect}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Timeline at bottom */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-slate-900/90 to-slate-900/40 border-t border-blue-500/20 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <div className="p-4 border-b border-blue-500/20">
          <div className="text-blue-400 text-xs font-mono font-bold tracking-wider">TIMELINE</div>
        </div>
        <div className="flex items-center h-full px-4 gap-1 overflow-hidden">
          {Array.from({ length: 24 }).map((_, i) => (
            <motion.div
              key={i}
              className="flex-1 h-20 bg-gradient-to-b from-blue-500/20 to-blue-500/5 rounded-sm border border-blue-500/30"
              animate={{
                opacity: [0.3, 0.7, 0.3],
                boxShadow: [
                  "0 0 0px rgba(59, 130, 246, 0)",
                  "0 0 8px rgba(59, 130, 246, 0.5)",
                  "0 0 0px rgba(59, 130, 246, 0)",
                ],
              }}
              transition={{ duration: 2.5, delay: i * 0.1, repeat: Number.POSITIVE_INFINITY }}
            />
          ))}
        </div>
      </motion.div>

      {/* Ambient glow effects */}
      <motion.div
        className="absolute top-1/3 left-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl"
        animate={{ opacity: [0.15, 0.35, 0.15] }}
        transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
      />

      {/* Subtle scan lines effect */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="scanlines" width="100%" height="2" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="100%" y2="0" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#scanlines)" />
        </svg>
      </div>
    </div>
  )
}
