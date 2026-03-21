'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const projects = [
  { slug: 'vida', title: 'EV Mobility with VIDA', img: '/images/hero.svg' },
  { slug: 'mahindra-finance', title: 'Unified Financial Ecosystem', img: '/images/mahindra-finance.svg' },
  { slug: 'design-research-ops', title: 'Research Ops', img: '/images/jio.png' },
  { slug: 'thermax-edge', title: 'Industrial UX Audit', img: '/images/edge.png' },
  { slug: 'maplegeni', title: 'Scalable B2C Design', img: '/images/maplegenix.webp' },
];

export default function NextProjectFooter({ currentSlug }: { currentSlug: string }) {
  const currentIndex = projects.findIndex(p => p.slug === currentSlug);
  const nextIndex = (currentIndex + 1) % projects.length;
  const nextProject = projects[nextIndex];

  return (
    <section className="pt-[120px] pb-20 container mx-auto px-4 sm:px-8 md:px-20">
      <Link href={`/projects/${nextProject.slug}`} className="group block">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-[1000px] mx-auto rounded-3xl border-t border-white/10 bg-black/5 dark:bg-white/[0.03] backdrop-blur-[20px] p-8 md:p-12 transition-all duration-300 group-hover:bg-black/10 dark:group-hover:bg-white/[0.08]"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="flex flex-col items-start space-y-6">
              <div className="h-[48px] px-6 bg-white rounded-lg flex items-center justify-center shadow-sm">
                <div className="relative h-[32px] w-[120px]">
                  <Image 
                    src={nextProject.img} 
                    alt={nextProject.title} 
                    fill 
                    className="object-contain" 
                    priority
                  />
                </div>
              </div>
              <h3 className="font-headline font-semibold text-2xl md:text-3xl lg:text-4xl text-foreground text-left">
                Explore: {nextProject.title}
              </h3>
            </div>
            
            <div className="flex-shrink-0">
               <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary text-primary font-medium transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <span className="text-sm md:text-base font-semibold">View Project</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </motion.div>
      </Link>
    </section>
  );
}
