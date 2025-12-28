'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';
import './Showreel.css';

type ShowreelProps = {
  videoUrl: string;
};

export default function Showreel({ videoUrl }: ShowreelProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0.1, 0.25, 0.75, 0.9], [0.9, 1, 1, 0.9]);
  const borderRadius = useTransform(scrollYProgress, [0.1, 0.25], [16, 0]);
  const margin = useTransform(scrollYProgress, [0.1, 0.25], [20, 0]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <motion.div
      ref={containerRef}
      className="h-[150vh] w-full"
      style={{
        paddingLeft: margin,
        paddingRight: margin,
      }}
    >
      <div
        className={cn("sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center")}
      >
        <motion.div
          className={cn(
            'relative w-full h-full bg-muted overflow-hidden',
             isPlaying ? 'cursor-pause' : 'cursor-play'
          )}
          style={{ scale, borderRadius }}
          onClick={togglePlay}
        >
          <video
            ref={videoRef}
            src={videoUrl}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </div>
    </motion.div>
  );
}
