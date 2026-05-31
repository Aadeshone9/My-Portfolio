'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import FadeIn from '@/components/FadeIn';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  heroTag: string;
  subtitle: string;
  title: string;
  showImage: boolean;
  imagePrefix?: string;
  containerRef?: React.RefObject<HTMLDivElement | null>;
}

export const HeroSection = ({
  heroTag,
  subtitle,
  title,
  showImage,
  imagePrefix = 'project1',
  containerRef
}: HeroSectionProps) => {
  const localRef = useRef(null);
  const ref = containerRef || localRef;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const heroBlur = useTransform(scrollYProgress, [0, 1], ["blur(0px)", "blur(10px)"]);

  const heroImage = showImage ? PlaceHolderImages.find(p => p.id === `${imagePrefix}-image-1`) : null;

  return (
    <section className={cn("w-full relative overflow-hidden flex items-center", showImage ? "h-screen" : "min-h-[60vh] md:min-h-[70vh]")} ref={ref}>
      <motion.div 
        style={{ scale: heroScale, opacity: heroOpacity, filter: heroBlur }}
        className="absolute inset-0"
      >
        {showImage && heroImage ? (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            data-ai-hint={heroImage.imageHint}
            priority
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-background" />
        )}
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>
      
      <div className="container mx-auto px-4 sm:px-8 md:px-20 relative z-10 flex flex-col justify-end h-full pb-20 md:pb-32">
        <FadeIn>
          <p className="font-headline font-semibold text-lg md:text-xl text-white/80 text-left">
            {heroTag}
          </p>
        </FadeIn>
        <FadeIn>
          <h1 className="font-headline font-semibold text-4xl md:text-5xl lg:text-7xl 2xl:text-8xl text-white leading-tight mt-4 text-left">
            {subtitle}
          </h1>
        </FadeIn>
        <FadeIn>
          <h1 className="font-headline font-semibold text-4xl md:text-5xl lg:text-7xl 2xl:text-8xl text-white leading-tight mt-2 text-left">
            {title}
          </h1>
        </FadeIn>
      </div>
    </section>
  );
};
