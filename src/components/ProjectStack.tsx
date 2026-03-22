
"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { Card, CardTitle } from "@/components/ui/card";
import { ArrowRight, Lock } from "lucide-react";
import PillButton from "./PillButton";
import Image from 'next/image';

const projects = [
  {
    title: "VIDA EV Mobility",
    role: "UX Design Consultant and Researcher",
    description: "Driving Loyalty & Efficiency for an end-to-end connected vehicle platform experience.",
    cta: 'View Project',
    href: '/projects/vida',
    img: '/images/hero.svg'
  },
  {
    title: "Unified Financial Ecosystem",
    role: "UX Design Consultant",
    description: "Designing for Trust & Growth. Streamlining products into a seamless 'Life Companion'.",
    cta: 'View Project',
    href: '/projects/mahindra-finance',
    img: '/images/mahindra-finance.svg',
  },
  {
    title: "Research Ops",
    role: "Consultant: UX Strategy & Ops",
    description: "Scaling research for 300+ Designers, reducing time-to-insight by 40%.",
    cta: 'View Project',
    href: '/projects/design-research-ops',
    img: '/images/jio.png',
    isLocked: false,
  },
  {
    title: "Industrial UX Audit",
    role: "UX Strategy Consultant",
    description: "Benchmarking the 'Customer Connect' ecosystem to define scalable roadmaps.",
    img: '/images/edge.png',
    cta: 'View Project',
    href: '/projects/thermax-edge',
  },
  {
    title: "Scalable B2C Design",
    role: "Lead Product & UX Designer",
    description: "Global Software Services Platform. Unified digital presence for global services.",
    cta: 'View Project',
    href: '/projects/maplegeni',
    img: '/images/maplegenix.webp',
  },
  {
    title: "Google Cloud Security",
    role: "Partner Product & UX Design Consultant | Co-Designer",
    description: "Optimized ticketing workflows, reducing resolution time by 30%.",
    img: '/images/Google.png',
  }
];

const ProjectCard = ({ project, i, progress, range, targetScale }: { project: any, i: number, progress: any, range: number[], targetScale: number }) => {
  const scale = useTransform(progress, range, [1, targetScale]);
  const y = useTransform(progress, range, [0, -50 * (projects.length - 1 - i)]);

  const message = encodeURIComponent(`Hi Aadesh, I'm interested in discussing a hiring opportunity and would like to review your work on "${project.title}". Could you please grant me access to this case study? My official email is [Enter your email here]. Looking forward to connecting!`);
  const linkedinUrl = `https://www.linkedin.com/messaging/compose/?recipient=aadeshgovenkar&body=${message}`;

  const isLocked = project.isLocked;
  const shakeAnimation = isLocked ? {
    hover: {
      x: [-2, 2, -2, 2, 0],
      transition: { duration: 0.4, ease: "easeInOut" }
    }
  } : {};

  return (
    <div className="sticky top-0 h-screen flex items-center justify-center">
      <motion.div 
        style={{ 
          scale,
          y,
          top: `calc(5vh + ${i * 25}px)`
        }} 
        whileHover="hover"
        variants={shakeAnimation}
        className={`relative h-auto transform-gpu`}
      >
        <Card className={`bg-card border-border rounded-3xl w-[92vw] md:w-[85vw] lg:w-[600px] xl:w-[700px] h-full mx-auto flex flex-col p-8 md:p-10 relative overflow-hidden shadow-2xl`}>
            {project.isLocked && (
              <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px] z-20 flex items-center justify-center">
                <div className="bg-card/90 p-4 rounded-xl border border-border shadow-xl text-center">
                  <Lock className="w-8 h-8 mx-auto text-primary mb-2" />
                  <p className="text-xs font-semibold text-primary uppercase tracking-widest">NDA Protected</p>
                </div>
              </div>
            )}
            <div className="w-full aspect-[16/9] bg-off-white-f4 rounded-2xl flex items-center justify-center overflow-hidden relative group">
              {project.img && (
                <Image 
                  src={project.img} 
                  alt={project.title} 
                  fill 
                  className="object-contain p-10 z-10 transition-transform duration-500 group-hover:scale-105" 
                />
              )}
            </div>
            <div className="flex flex-col flex-grow justify-between mt-8">
                <div className="space-y-4 text-left">
                    <CardTitle className="text-2xl md:text-3xl lg:text-[32px] font-headline font-semibold text-foreground tracking-tight">{project.title}</CardTitle>
                    <p className="text-sm md:text-base font-body text-muted-foreground font-medium tracking-wide">{project.role}</p>
                    <p className="text-base md:text-lg text-foreground/80 leading-relaxed font-normal">
                        {project.description}
                    </p>
                </div>
                <div className="flex items-center gap-2 mt-8">
                    {project.cta ? (
                      <PillButton 
                        href={project.href || '#'}
                        className="group !text-foreground !border-foreground"
                      >
                          <span className="group-hover:font-semibold">{project.cta}</span>
                          <ArrowRight />
                      </PillButton>
                    ) : (
                      <PillButton 
                        href={linkedinUrl}
                        className="group !text-foreground !border-foreground"
                      >
                          <span className="group-hover:font-semibold">Request Access</span>
                          <Lock />
                      </PillButton>
                    )}
                </div>
            </div>
        </Card>
      </motion.div>
    </div>
  )
}

const ProjectStack = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ['start start', 'end end']
    });

    return (
        <div ref={containerRef} className="relative h-[calc(100vh*var(--project-count))]">
            <style jsx>{`
              .relative {
                --project-count: ${projects.length};
              }
            `}</style>
            {projects.map((project, i) => {
                const totalProjects = projects.length;
                const step = 1 / totalProjects;
                const rangeStart = i * step;
                const rangeEnd = rangeStart + step;
                const range = [rangeStart, rangeEnd];
                const targetScale = 1 - ((totalProjects - i - 1) * 0.04);
                return <ProjectCard key={i} i={i} {...{project, progress: scrollYProgress, range, targetScale}}/>
            })}
        </div>
    )
}

export default ProjectStack;
