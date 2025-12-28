'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, Pause } from 'lucide-react';
import { cn } from '@/lib/utils';
import './Showreel.css';

type ShowreelProps = {
  videoUrl: string;
};

export default function Showreel({ videoUrl }: ShowreelProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0.1, 0.25, 0.75, 0.9], [0.9, 1, 1, 0.9]);
  const borderRadius = useTransform(scrollYProgress, [0.1, 0.25], [16, 0]);
  const margin = useTransform(scrollYProgress, [0.1, 0.25], [20, 0]);

  const handleTogglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
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
        className={cn("sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center", isHovered ? (isPlaying ? 'cursor-pause' : 'cursor-play') : '')}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleTogglePlay}
      >
        <motion.div
          className={cn(
            'relative w-full h-full bg-muted overflow-hidden'
          )}
          style={{ scale, borderRadius }}
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
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div 
              className="bg-black/50 backdrop-blur-sm rounded-full p-4 flex items-center justify-center"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: isHovered ? 1 : 0, opacity: isHovered ? 1 : 0}}
              transition={{ duration: 0.3 }}
            >
              {isPlaying ? <Pause size={32} className="text-white" /> : <Play size={32} className="text-white" />}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
