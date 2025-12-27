'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { Play, Pause } from 'lucide-react';
import { cn } from '@/lib/utils';
import './Showreel.css';

type ShowreelProps = {
  imageUrl: string;
  alt: string;
  aiHint: string;
};

export default function Showreel({ imageUrl, alt, aiHint }: ShowreelProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
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
    setIsPlaying((prev) => !prev);
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
        className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleTogglePlay}
      >
        <motion.div
          className={cn(
            'relative w-full h-full bg-muted overflow-hidden cursor-pointer',
            isHovered && (isPlaying ? 'cursor-pause' : 'cursor-play')
          )}
          style={{ scale, borderRadius }}
        >
          <Image src={imageUrl} alt={alt} fill className="object-cover" data-ai-hint={aiHint} />
          <div className="absolute inset-0 bg-black/10" />
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-black/50 backdrop-blur-sm rounded-full p-4 flex items-center gap-4 px-8">
              {isPlaying ? (
                <>
                  <Pause className="h-12 w-12 text-white" />
                  <span className="text-white text-2xl font-headline">Pause</span>
                </>
              ) : (
                <>
                  <Play className="h-12 w-12 text-white" />
                   <span className="text-white text-2xl font-headline">Play</span>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
