"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

// Sample project data - replace with actual data fetching
const projectsData: Record<string, any> = {
  "corporate-promo": {
    title: "Corporate Promo",
    category: "Commercial",
    year: 2024,
    client: "TechStart Inc.",
    description:
      "A high-energy promotional video designed to showcase TechStart Inc.'s innovative solutions. The project involved color grading, motion graphics integration, and sound design to create a compelling brand narrative.",
    challenge:
      "The main challenge was condensing complex technical features into an engaging 60-second video while maintaining visual consistency with the brand guidelines.",
    solution:
      "We utilized dynamic transitions, kinetic typography, and carefully selected music to create momentum throughout the piece.",
    tools: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
    image: "/images/corporate-video-scene.png",
    gallery: ["/thumbnails/video-editing-frame-1.jpg", "/thumbnails/video-editing-frame-2.jpg", "/thumbnails/video-editing-frame-3.jpg"],
  },
  "music-video": {
    title: "Music Video",
    category: "Music",
    year: 2024,
    client: "Independent Artist",
    description:
      "A cinematic music video featuring intricate motion graphics and color grading. The project showcases storytelling through visual effects and creative editing techniques.",
    challenge: "Synchronizing complex motion graphics with the music beat while maintaining narrative coherence.",
    solution: "Developed a detailed storyboard and used precise keyframing to align visual elements with musical cues.",
    tools: ["After Effects", "Premiere Pro", "Photoshop"],
    image: "/images/music-video-production.png",
    gallery: ["/thumbnails/music-video-frame-1.jpg", "/thumbnails/music-video-frame-2.jpg", "/thumbnails/music-video-frame-3.jpg"],
  },
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projectsData[params.slug] || projectsData["corporate-promo"]
  const [activeTab, setActiveTab] = useState("overview")

  const allProjects = Object.keys(projectsData)
  const currentIndex = allProjects.indexOf(params.slug)
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length]
  const prevProject = allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length]

  return (
    <main className="w-full bg-white">
      {/* Hero */}
      <section className="relative w-full h-96 md:h-screen overflow-hidden pt-16">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </section>

      {/* Project Info */}
      <section className="py-12 px-4 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link href="/#projects" className="text-primary hover:underline mb-6 inline-block">
              ← Back to Projects
            </Link>

            <h1 className="text-5xl font-bold font-clash text-foreground mb-4">{project.title}</h1>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Category</p>
                <p className="font-semibold text-foreground">{project.category}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Year</p>
                <p className="font-semibold text-foreground">{project.year}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Client</p>
                <p className="font-semibold text-foreground">{project.client}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Tools</p>
                <p className="font-semibold text-foreground">{project.tools.length} tools</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Tabs */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Tab buttons */}
          <div className="flex gap-4 mb-12 border-b border-border">
            {["overview", "breakdown", "gallery"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 font-semibold capitalize transition-colors ${
                  activeTab === tab
                    ? "text-primary border-b-2 border-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === "overview" && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold font-clash text-foreground mb-4">Project Overview</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">{project.description}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold font-clash text-foreground mb-3">Challenge</h3>
                    <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-clash text-foreground mb-3">Solution</h3>
                    <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold font-clash text-foreground mb-4">Tools Used</h3>
                  <div className="flex flex-wrap gap-3">
                    {project.tools.map((tool: string) => (
                      <span
                        key={tool}
                        className="px-4 py-2 bg-secondary text-foreground rounded-full text-sm font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "breakdown" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold font-clash text-foreground">Creative Breakdown</h2>
                <p className="text-muted-foreground leading-relaxed">
                  This section showcases the creative process and key decisions made during production.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="bg-secondary rounded-lg p-6 h-48 flex items-center justify-center">
                      <p className="text-muted-foreground">Process image {i}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "gallery" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold font-clash text-foreground">Gallery</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {project.gallery.map((image: string, i: number) => (
                    <div key={i} className="relative h-64 rounded-lg overflow-hidden">
                      <Image src={image || "/placeholder.svg"} alt={`Gallery ${i + 1}`} fill className="object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Navigation footer */}
      <section className="py-16 px-4 border-t border-border bg-secondary">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Link href={`/projects/${prevProject}`}>
              <motion.div
                className="p-6 bg-white rounded-lg hover:shadow-lg transition-shadow cursor-pointer"
                whileHover={{ x: -5 }}
              >
                <p className="text-sm text-muted-foreground mb-2">← Previous Project</p>
                <p className="font-bold text-foreground">{projectsData[prevProject]?.title}</p>
              </motion.div>
            </Link>

            <Link href={`/projects/${nextProject}`}>
              <motion.div
                className="p-6 bg-white rounded-lg hover:shadow-lg transition-shadow cursor-pointer text-right"
                whileHover={{ x: 5 }}
              >
                <p className="text-sm text-muted-foreground mb-2">Next Project →</p>
                <p className="font-bold text-foreground">{projectsData[nextProject]?.title}</p>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
