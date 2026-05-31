'use client';

import { motion } from 'framer-motion';
import FadeIn from '@/components/FadeIn';
import { Counter } from './Counter';
import { ProjectMetric } from '@/lib/project-types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MetricsSectionProps {
  metrics: ProjectMetric[];
  sectionPadding?: string;
}

const motionProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
};

export const MetricsSection = ({
  metrics,
  sectionPadding = "py-20 md:py-24"
}: MetricsSectionProps) => {
  return (
    <section className={cn("bg-background text-foreground", sectionPadding)}>
      <div className="container mx-auto px-4 sm:px-8 md:px-20">
        <div className="max-w-4xl lg:max-w-5xl 2xl:max-w-7xl">
          <motion.div {...motionProps} className="flex items-center gap-4 mb-4">
            <TrendingUp className="w-8 h-8 text-primary" />
            <FadeIn>
              <h2 className="font-headline font-semibold text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl text-foreground text-left">
                Quantifiable Impact
              </h2>
            </FadeIn>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {metrics.map((metric, mIdx) => (
              <motion.div key={`metric-${mIdx}-${metric.title}`} {...motionProps} transition={{ ...motionProps.transition, delay: 0.2 + mIdx * 0.1 }}>
                <Card className="bg-card border-border p-6 h-full flex flex-col">
                  <CardHeader className="p-0">
                    <CardTitle className="font-headline text-lg lg:text-xl 2xl:text-2xl text-muted-foreground">
                      {metric.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 mt-4 flex-grow flex flex-col justify-center">
                    <p className="font-headline font-bold text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl text-primary">
                      <Counter value={metric.value} />
                    </p>
                    <p className="text-lg lg:text-xl 2xl:text-2xl text-foreground mt-2">
                      {metric.description}
                    </p>
                    <p className="text-base lg:text-lg 2xl:text-xl text-muted-foreground mt-4">
                      {metric.detail}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
