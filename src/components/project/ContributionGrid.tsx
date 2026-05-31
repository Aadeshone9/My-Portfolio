'use client';

import { motion } from 'framer-motion';
import FadeIn from '@/components/FadeIn';
import { cn } from '@/lib/utils';

interface ContributionGridProps {
  contribution: string[];
  role: string;
  focus: string;
  primaryGoal: string;
  sectionPadding?: string;
}

const motionProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
};

export const ContributionGrid = ({
  contribution,
  role,
  focus,
  primaryGoal,
  sectionPadding = "py-20 md:py-24"
}: ContributionGridProps) => {
  return (
    <section className={cn("bg-background text-foreground relative", sectionPadding)}>
      <div className="container mx-auto px-4 sm:px-8 md:px-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          <motion.div {...motionProps}>
            <FadeIn>
              <h2 className="font-headline font-semibold text-xl md:text-2xl lg:text-3xl 2xl:text-4xl text-foreground text-left">
                My Contribution
              </h2>
            </FadeIn>
            <div className="text-primary text-lg md:text-xl lg:text-2xl 2xl:text-[28px] leading-relaxed mt-4">
              {contribution.map((item: string) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </motion.div>
          
          <motion.div {...motionProps} transition={{ ...motionProps.transition, delay: 0.1 }}>
            <FadeIn>
              <h2 className="font-headline font-semibold text-xl md:text-2xl lg:text-3xl 2xl:text-4xl text-foreground text-left">
                My Role
              </h2>
            </FadeIn>
            <FadeIn>
              <p className="text-primary text-lg md:text-xl lg:text-2xl 2xl:text-[28px] leading-relaxed mt-4 text-left">
                {role}
              </p>
            </FadeIn>
          </motion.div>
          
          <motion.div {...motionProps} transition={{ ...motionProps.transition, delay: 0.2 }}>
            <FadeIn>
              <h2 className="font-headline font-semibold text-xl md:text-2xl lg:text-3xl 2xl:text-4xl text-foreground text-left">
                Project Focus
              </h2>
            </FadeIn>
            <FadeIn>
              <p className="text-primary text-lg md:text-xl lg:text-2xl 2xl:text-[28px] leading-relaxed mt-4 text-left">
                {focus}
              </p>
            </FadeIn>
          </motion.div>
          
          <motion.div {...motionProps} transition={{ ...motionProps.transition, delay: 0.3 }}>
            <FadeIn>
              <h2 className="font-headline font-semibold text-xl md:text-2xl lg:text-3xl 2xl:text-4xl text-foreground text-left">
                Primary Goal
              </h2>
            </FadeIn>
            <FadeIn>
              <p className="text-primary text-lg md:text-xl lg:text-2xl 2xl:text-[28px] leading-relaxed mt-4 text-left">
                {primaryGoal}
              </p>
            </FadeIn>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
