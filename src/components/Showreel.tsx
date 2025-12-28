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

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0.1, 0.25, 0.75, 0.9], [0.9, 1, 1, 0.9]);
  const borderRadius = useTransform(scrollYProgress, [0.1, 0.25], [16, 0]);
  const margin = useTransform(scrollYProgress, [0.1, 0.25], [20, 0]);

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
        </motion.div>
      </div>
    </motion.div>
  );
}
