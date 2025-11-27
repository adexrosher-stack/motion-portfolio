"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-140 rounded-xl overflow-hidden shadow-lg"
          >
            <Image src="/port.jpg" alt="About me" fill className="object-cover" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-clash text-foreground mb-6">About Me</h2>

            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              With over 2 years of experience in video editing and motion graphics, I've worked with brands ranging from
              startups to Fortune companies. My passion is transforming raw footage into compelling visual stories
              that resonate with audiences.
            </p>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I specialize in Adobe Creative Suite (Premiere Pro, After Effects, Photoshop) and DaVinci Resolve,
              bringing technical expertise combined with creative vision to every project.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-bold font-clash text-foreground mb-4">Tools & Expertise</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Premiere Pro",
                  "After Effects",
                  "DaVinci Resolve",
                  "Photoshop",
                  "Motion Design",
                  "Color Grading",
                ].map((tool) => (
                  <div key={tool} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-foreground">{tool}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-lg">Download Resume</Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
