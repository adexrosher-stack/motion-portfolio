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

  // Autoplay when visible
  useEffect(() => {
    const vid = videoRef.current;
    if (!autoPlayOnScroll || !vid) return;

    const observer = new IntersectionObserver(
      async (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          try {
            await vid.play();
            setIsPlaying(true);
          } catch (err) {
            console.log("Autoplay blocked:", video);
          }
        } else {
          vid.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.45 }
    );

    observer.observe(vid);
    return () => observer.disconnect();
  }, [autoPlayOnScroll, video]);

  // Tap to play/pause support
  const handleTap = async () => {
    const vid = videoRef.current;
    if (!tapToPlay || !vid) return;

    if (isPlaying) {
      vid.pause();
      setIsPlaying(false);
    } else {
      try {
        await vid.play();
        setIsPlaying(true);
      } catch (err) {
        console.log("Tap-to-play blocked:", video);
      }
    }
  };

  const aspectClass =
    aspectRatio === "9:16" ? "aspect-[9/16]" : "aspect-[16/9]";

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
          poster={image}
          className="w-full h-full object-cover"
          loop
          muted
          playsInline
          preload="auto"
          onLoadedData={() => console.log("Video loaded:", video)}
          onError={() =>
            console.warn(`Failed to load video: ${video}`)
          }
        >
          <source src={video} type="video/mp4" />
        </video>

        {/* Play icon overlay */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-white text-4xl font-bold pointer-events-none">
            ▶
          </div>
        )}
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold text-foreground mb-2">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </motion.div>
  );
}
