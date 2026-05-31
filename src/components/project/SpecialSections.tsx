'use client';

import { motion } from 'framer-motion';
import FadeIn from '@/components/FadeIn';
import { MethodologyItem, ArtefactItem } from '@/lib/project-types';
import { getIcon } from '@/lib/icon-map';
import { cn } from '@/lib/utils';

interface MethodologySectionProps {
  methodology: MethodologyItem[];
  sectionPadding?: string;
}

interface ArtefactsSectionProps {
  artefacts: ArtefactItem[];
  sectionPadding?: string;
}

const motionProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
};

export const MethodologySection = ({
  methodology,
  sectionPadding = "py-20 md:py-24"
}: MethodologySectionProps) => {
  return (
    <section className={cn("bg-card text-card-foreground relative", sectionPadding)}>
      <div className="container mx-auto px-4 sm:px-8 md:px-20 relative z-10">
        <FadeIn>
          <h2 className="font-headline font-semibold text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl text-primary mb-12 text-left">
            Research Methodology
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {methodology.map((item, index) => {
            const Icon = getIcon(item.icon);
            return (
              <motion.div 
                key={`methodology-${index}-${item.title}`} 
                {...motionProps} 
                transition={{ ...motionProps.transition, delay: 0.1 * index }}
                className="p-8 border border-border rounded-2xl bg-background shadow-sm hover:border-primary/30 transition-colors"
              >
                <div className="mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-headline font-semibold text-xl lg:text-2xl 2xl:text-3xl text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-base md:text-lg lg:text-xl 2xl:text-[24px] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export const ArtefactsSection = ({
  artefacts,
  sectionPadding = "py-20 md:py-24"
}: ArtefactsSectionProps) => {
  return (
    <section className={cn("bg-background text-foreground relative", sectionPadding)}>
      <div className="container mx-auto px-4 sm:px-8 md:px-20 relative z-10">
        <div className="max-w-4xl lg:max-w-5xl 2xl:max-w-7xl">
          <FadeIn>
            <h2 className="font-headline font-semibold text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl text-foreground mb-12 text-left">
              Audit Deliverables & Artefacts
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {artefacts.map((artefact, index) => (
              <motion.div 
                key={`artefact-${index}-${artefact.title}`}
                {...motionProps}
                className="flex items-start p-6 bg-card border border-border rounded-xl"
              >
                <div className="mr-4 mt-1">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-xs">{index + 1}</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-headline font-semibold text-lg lg:text-xl 2xl:text-2xl text-foreground">
                    {artefact.title}
                  </h4>
                  <p className="text-primary font-bold text-sm lg:text-base 2xl:text-lg mb-1">
                    {artefact.count}
                  </p>
                  <p className="text-sm lg:text-lg 2xl:text-xl text-muted-foreground">
                    {artefact.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
