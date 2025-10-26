"use client"

import { motion } from "framer-motion"
import { AfterEffectsIcon, PremierProIcon, BlenderIcon, CapCutIcon, IllustratorIcon } from "./software-icons"

export function ToolsSection() {
  const tools = [
    { name: "After Effects", Icon: AfterEffectsIcon },
    { name: "Premiere Pro", Icon: PremierProIcon },
    { name: "Blender", Icon: BlenderIcon },
    { name: "CapCut", Icon: CapCutIcon },
    { name: "Illustrator", Icon: IllustratorIcon },
  ]

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-clash text-foreground mb-4">Tools & Software</h2>
          <p className="text-lg text-muted-foreground">Professional software I use to bring ideas to life</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              className="flex flex-col items-center justify-center p-6 rounded-xl bg-secondary hover:bg-secondary/80 transition-all duration-300 cursor-pointer group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                <tool.Icon />
              </div>
              <p className="text-foreground font-semibold text-center">{tool.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
