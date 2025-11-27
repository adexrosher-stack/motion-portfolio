"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  video: string;
  image: string;
  category: string;
  autoPlayOnScroll?: boolean;
  tapToPlay?: boolean;
  aspectRatio?: "16:9" | "9:16";
}

export function ProjectCard({
  title,
  description,
  video,
  image,
  autoPlayOnScroll = false,
  tapToPlay = false,
  aspectRatio = "16:9",
}: ProjectCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Autoplay on scroll
  useEffect(() => {
    if (!autoPlayOnScroll || !videoRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (videoRef.current) {
          if (entry.isIntersecting) {
            videoRef.current.play().catch(() => {});
            setIsPlaying(true);
          } else {
            videoRef.current.pause();
            setIsPlaying(false);
          }
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, [autoPlayOnScroll]);

  // Tap-to-play
  const handleTap = () => {
    if (tapToPlay && videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const aspectClass = aspectRatio === "9:16" ? "aspect-[9/16]" : "aspect-[16/9]";

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer border border-gray-200 hover:shadow-xl transition-shadow"
      onClick={handleTap}
    >
      <div className={`relative w-full bg-black ${aspectClass}`}>
        <video
          ref={videoRef}
          src={video}
          poster={image}
          className="w-full h-full object-cover"
          loop
          muted
          playsInline
        />
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-white text-4xl font-bold">
            ▶
          </div>
        )}
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </motion.div>
  );
}
