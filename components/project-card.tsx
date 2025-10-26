"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

interface ProjectCardProps {
  id: string
  title: string
  description: string
  image: string
  category: string
}

export function ProjectCard({ id, title, description, image, category }: ProjectCardProps) {
  return (
    <Link href={`/projects/${id}`}>
      <motion.div
        className="group relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer h-full"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        {/* Image container */}
        <div className="relative w-full h-64 overflow-hidden bg-muted">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-accent/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <div className="text-white">
              <p className="text-sm font-medium mb-2">{category}</p>
              <h3 className="text-xl font-bold font-clash">{title}</h3>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-lg font-bold font-clash text-foreground mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm line-clamp-2">{description}</p>
          <div className="mt-4 flex items-center text-primary font-medium text-sm">View Project →</div>
        </div>
      </motion.div>
    </Link>
  )
}
