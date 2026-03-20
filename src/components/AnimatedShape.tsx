
'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

type AnimatedShapeProps = {
  shape: 'square' | 'circle';
  className?: string;
};

export default function AnimatedShape({ shape, className }: AnimatedShapeProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start 0.8'],
  });

  const fromColor = 'hsl(var(--border))';
  const toColor = 'hsl(var(--primary))';

  const borderColor = useTransform(
    scrollYProgress,
    [0, 1],
    [fromColor, toColor]
  );
  
  const shapeClasses = {
    square: 'w-[84px] h-[84px] border-2 rounded-[8px]',
    circle: 'w-[84px] h-[84px] border-2 rounded-full',
  };

  return (
    <motion.div
      ref={ref}
      className={cn(shapeClasses[shape], className)}
      style={{ borderColor }}
    />
  );
}
