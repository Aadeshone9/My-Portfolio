'use client';

import { motion } from 'framer-motion';
import FadeIn from '@/components/FadeIn';
import { ProjectLearning } from '@/lib/project-types';
import { Lightbulb } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LearningsSectionProps {
  learnings: ProjectLearning[];
  sectionPadding?: string;
}

const motionProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
};

export const LearningsSection = ({
  learnings,
  sectionPadding = "py-20 md:py-24"
}: LearningsSectionProps) => {
  return (
    <section className={cn("bg-background text-foreground", sectionPadding)}>
      <div className="container mx-auto px-4 sm:px-8 md:px-20">
        <div className="max-w-4xl lg:max-w-5xl 2xl:max-w-7xl">
          <motion.div {...motionProps} className="flex items-center gap-4 mb-8">
            <Lightbulb className="w-8 h-8 text-primary" />
            <FadeIn>
              <h2 className="font-headline font-semibold text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl text-foreground text-left">
                Key Learnings & Reflection
              </h2>
            </FadeIn>
          </motion.div>
          <ul className="space-y-8">
            {learnings.map((learning, index) => (
              <motion.li
                key={`learning-${index}-${learning.title}`}
                {...motionProps}
                transition={{ ...motionProps.transition, delay: 0.2 + index * 0.1 }}
                className="flex items-start"
              >
                <span className="text-primary mr-4 mt-1">&#8226;</span>
                <p className="text-lg md:text-xl lg:text-2xl 2xl:text-[28px] text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground">{learning.title}: </span>
                  {learning.description}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
