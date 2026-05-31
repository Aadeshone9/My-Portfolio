'use client';

import { motion } from 'framer-motion';
import FadeIn from '@/components/FadeIn';
import { ProjectChallenge } from '@/lib/project-types';
import { Target } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ChallengesSectionProps {
  challenges: ProjectChallenge[];
  sectionPadding?: string;
}

const motionProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
};

export const ChallengesSection = ({
  challenges,
  sectionPadding = "py-20 md:py-24"
}: ChallengesSectionProps) => {
  return (
    <>
      <section className={cn("bg-background text-foreground relative pt-20 md:pt-24 pb-0")}>
        <div className="container mx-auto px-4 sm:px-8 md:px-20 relative z-10">
          <div className="max-w-4xl lg:max-w-5xl 2xl:max-w-7xl">
            <motion.div {...motionProps} className="flex items-center gap-4">
              <Target className="w-8 h-8 text-primary" />
              <FadeIn>
                <h2 className="font-headline font-semibold text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl text-foreground text-left">
                  Strategic Gap Analysis
                </h2>
              </FadeIn>
            </motion.div>
            <FadeIn>
              <p className="font-headline text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-semibold text-primary leading-snug md:leading-relaxed mt-8 text-left">
                Our evaluation identified critical friction points that hindered operational velocity.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className={cn("bg-background text-foreground relative pb-20 md:pb-24 pt-12 md:pt-16")}>
        <div className="container mx-auto px-4 sm:px-8 md:px-20 relative z-10">
          <div className="max-w-4xl lg:max-w-5xl 2xl:max-w-7xl">
            <ul className="space-y-8">
              {challenges.map((challenge, index) => (
                <motion.li 
                  key={`challenge-${index}-${challenge.title}`}
                  {...motionProps}
                  transition={{ ...motionProps.transition, delay: 0.1 * (index + 1) }}
                  className="flex items-start"
                >
                  <span className="text-primary mr-4 mt-1">&#8226;</span>
                  <p className="text-lg md:text-xl lg:text-2xl 2xl:text-[28px] text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-foreground">{challenge.title}: </span>
                    {challenge.description}
                  </p>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
