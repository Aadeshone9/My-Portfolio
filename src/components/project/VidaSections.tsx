'use client';

import { motion } from 'framer-motion';
import FadeIn from '@/components/FadeIn';
import { ExperienceEnhancer, CustomerImpactItem } from '@/lib/project-types';
import { getIcon } from '@/lib/icon-map';
import { cn } from '@/lib/utils';

interface ExperienceEnhancersSectionProps {
  enhancers: ExperienceEnhancer[];
  sectionPadding?: string;
}

interface CustomerImpactSectionProps {
  items: CustomerImpactItem[];
  sectionPadding?: string;
}

const motionProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
};

export const ExperienceEnhancersSection = ({
  enhancers,
  sectionPadding = "py-20 md:py-24"
}: ExperienceEnhancersSectionProps) => {
  return (
    <section className={cn("bg-background text-foreground", sectionPadding)}>
      <div className="container mx-auto px-4 sm:px-8 md:px-20">
        <FadeIn>
          <h2 className="font-headline font-semibold text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl text-primary mb-4 text-left">
            Key Experience Enhancers
          </h2>
        </FadeIn>
        <FadeIn>
          <p className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl text-muted-foreground mb-16 max-w-2xl text-left">
            a user journey that fulfils user needs and expectations.
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {enhancers.map((enhancer, index) => {
            const Icon = getIcon(enhancer.icon);
            return (
              <motion.div
                key={`enhancer-${index}-${enhancer.title}`}
                {...motionProps}
                transition={{ ...motionProps.transition, delay: 0.2 + index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="flex-shrink-0">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-headline font-semibold text-xl lg:text-2xl 2xl:text-3xl text-foreground">
                    {enhancer.title}
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg lg:text-xl 2xl:text-2xl mt-1">
                    {enhancer.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export const CustomerImpactSection = ({
  items,
  sectionPadding = "py-20 md:py-24"
}: CustomerImpactSectionProps) => {
  return (
    <section className={cn("bg-background text-foreground", sectionPadding)}>
      <div className="container mx-auto px-4 sm:px-8 md:px-20">
        <motion.div {...motionProps} className="max-w-4xl mb-16">
          <FadeIn>
            <h2 className="font-headline font-semibold text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl text-primary mb-4 text-left">
              Customer Experience Impact
            </h2>
          </FadeIn>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => {
            const Icon = getIcon(item.icon);
            return (
              <motion.div 
                key={`impact-${index}-${item.title}`}
                {...motionProps} 
                transition={{...motionProps.transition, delay: 0.2 + (index * 0.1)}}
                className="bg-card border border-border rounded-2xl p-8 space-y-4"
              >
                <div className="flex-shrink-0">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-headline font-semibold text-xl lg:text-2xl 2xl:text-3xl text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg lg:text-xl 2xl:text-2xl mt-1">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
