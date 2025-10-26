"use client"

import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="bg-white border-t border-border py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground">© 2025 Alex Chen — Designed & Built with ❤️</p>
          <p className="text-sm text-muted-foreground mt-2">Video Editor & Motion Graphics Designer</p>
        </motion.div>
      </div>
    </footer>
  )
}
