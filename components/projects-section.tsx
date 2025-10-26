"use client"

import { motion } from "framer-motion"
import { ProjectCard } from "./project-card"

const projects = [
  {
    id: "corporate-promo",
    title: "Corporate Promo",
    description: "High-energy promotional video for tech startup",
    image: "/corporate-video-editing.png",
    category: "Commercial",
  },
  {
    id: "music-video",
    title: "Music Video",
    description: "Cinematic music video with motion graphics",
    image: "/music-video-production.png",
    category: "Music",
  },
  {
    id: "product-demo",
    title: "Product Demo",
    description: "Sleek product demonstration with animations",
    image: "/product-demo-video.png",
    category: "Product",
  },
  {
    id: "brand-story",
    title: "Brand Story",
    description: "Emotional brand narrative with motion design",
    image: "/brand-storytelling-video.jpg",
    category: "Branding",
  },
  {
    id: "event-recap",
    title: "Event Recap",
    description: "Dynamic event coverage with creative editing",
    image: "/event-video-production.jpg",
    category: "Events",
  },
  {
    id: "animation-reel",
    title: "Animation Reel",
    description: "Showcase of motion graphics and animations",
    image: "/abstract-motion-graphics.png",
    category: "Animation",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="w-16 h-1 bg-primary mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold font-clash text-foreground mb-4">Featured Work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of recent projects showcasing video editing and motion graphics expertise
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>

        {/* View all button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <button className="px-8 py-3 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-all duration-300">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  )
}
