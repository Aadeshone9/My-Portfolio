'use client';

import { motion } from 'framer-motion';
import FadeIn from '@/components/FadeIn';
import { Counter } from './Counter';
import { ProjectOutcome } from '@/lib/project-types';
import { cn } from '@/lib/utils';

interface OutcomesSectionProps {
  outcomes: ProjectOutcome[];
  sectionPadding?: string;
}

const motionProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
};

export const OutcomesSection = ({
  outcomes,
  sectionPadding = "py-20 md:py-24"
}: OutcomesSectionProps) => {
  return (
    <section className={cn("bg-background text-foreground relative", sectionPadding)}>
      <div className="container mx-auto px-4 sm:px-8 md:px-20 relative">
        <FadeIn>
          <h2 className="font-headline font-semibold text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl text-foreground mb-16 text-left">
            Key Outcomes
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 lg:gap-20">
          {outcomes.map((outcome: ProjectOutcome, index: number) => {
            const isNumeric = /\d/.test(outcome.value);
            return (
              <motion.div 
                key={`outcome-${index}-${outcome.value}`} 
                {...motionProps} 
                transition={{ ...motionProps.transition, delay: 0.1 * (index + 1) }}
                className="flex flex-col items-start gap-4"
              >
                <span className={cn(
                  "font-headline font-bold text-primary leading-none shrink-0",
                  isNumeric 
                    ? "text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl" 
                    : "text-3xl md:text-4xl lg:text-5xl"
                )}>
                  <Counter value={outcome.value} />
                </span>
                <p className="text-lg md:text-xl lg:text-2xl 2xl:text-[28px] text-muted-foreground leading-tight">
                  {outcome.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
