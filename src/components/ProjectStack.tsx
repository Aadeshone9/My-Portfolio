
"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight, Lock } from "lucide-react";
import PillButton from "./PillButton";
import Image from 'next/image';

const projects = [
  {
    title: "Hero Motocorp Vida App",
    role: "UX Design consultant and Researcher",
    description: "End-to-end connected vehicle platform experience for the launch of the Vida EV.",
    cta: 'View Project',
    href: '/projects/vida',
    img: '/images/hero.svg'
  },
  {
    title: "Unified Financial Ecosystem",
    role: "Senior UX Consultant | Lead Designer",
    description: "Increased customer retention by 30% and cross-selling by 25% by integrating \"Design for Trust and Growth\" principles.",
    cta: 'View Project',
    href: '/projects/mahindra-finance',
    img: '/images/mahindra-finance.svg',
  },
  {
    title: "Research Ops & Governance",
    role: "Consultant: UX Strategy & Ops",
    description: "Streamlining research workflows for 300+ enterprise designers, reducing time-to-insight by 40%.",
    cta: 'View Project',
    href: '/projects/design-research-ops',
    img: '/images/jio.png',
  },
  {
    title: "Thermax - Edge Platform",
    role: "UX Researcher and Strategist",
    description: "Defined UX improvements that increased error visibility and user adoption by 25%.",
    img: '/images/edge.png',
    cta: 'View Case Study',
    href: '/projects/thermax-edge',
  },
  {
    title: "Maplegeni",
    role: "Product Designer | Co-Designer",
    description: "A AI driven search tool for students to find the best college and course based on their profile.",
    cta: 'View Project',
    href: '/projects/maplegeni',
    img: '/images/maplegenix.webp',
  },
  {
    title: "Google Cloud Security",
    role: "Partner Product & UX Design consultant | Co-Designer",
    description: "Optimized ticketing workflows and reduced average resolution time by 30% for cloud security infrastructure.",
    img: '/images/Google.png',
  }
];

const ProjectCard = ({ project, i, progress, range, targetScale }: { project: any, i: number, progress: any, range: number[], targetScale: number }) => {
  const scale = useTransform(progress, range, [1, targetScale]);
  
  const y = useTransform(progress, range, [0, -50 * (projects.length - 1 - i)]);

  const message = encodeURIComponent(`Hi Aadesh, I'm interested in discussing a hiring opportunity and would like to review your work on "${project.title}". Could you please grant me access to this case study? My official email is [Enter your email here]. Looking forward to connecting!`);
  const linkedinUrl = `https://www.linkedin.com/messaging/compose/?recipient=aadeshgovenkar&body=${message}`;

  return (
    <div className="sticky top-0 h-screen flex items-center justify-center">
      <motion.div 
        style={{ 
          scale,
          y,
          top: `calc(5vh + ${i * 25}px)`
        }} 
        className={`relative h-auto md:h-auto lg:h-auto transform-gpu`}
      >
        <Card className={`bg-card border-border rounded-2xl w-[80vw] md:w-[70vw] lg:w-[600px] h-full mx-auto flex flex-col p-6 md:p-8 relative overflow-hidden`}>
            {project.isLocked && (
              <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px] z-20 flex items-center justify-center">
                <div className="bg-card/90 p-4 rounded-xl border border-border shadow-xl text-center">
                  <Lock className="w-8 h-8 mx-auto text-primary mb-2" />
                  <p className="text-xs font-semibold text-primary uppercase tracking-widest">NDA Protected</p>
                </div>
              </div>
            )}
            <div className="w-full aspect-[16/9] bg-off-white-f4 rounded-lg flex items-center justify-center overflow-hidden relative group">
              {project.img && (
                <Image 
                  src={project.img} 
                  alt={project.title} 
                  fill 
                  className="object-contain p-8 z-10" 
                />
              )}
            </div>
            <div className="flex flex-col flex-grow justify-between mt-6">
                <div>
                    <CardTitle className="text-xl md:text-2xl font-headline font-semibold text-foreground">{project.title}</CardTitle>
                    <p className="text-sm md:text-base text-muted-foreground mt-1">{project.role}</p>
                    <CardDescription className="text-base md:text-lg text-foreground/80 mt-2">
                        {Array.isArray(project.description) ? (
                          project.description.map((line: string, index: number) => (
                            <span key={index} className="block">{line}</span>
                          ))
                        ) : (
                          project.description
                        )}
                    </CardDescription>
                </div>
                <div className="flex items-center gap-2 mt-4">
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
                const targetScale = 1 - ((totalProjects - i - 1) * 0.05);
                return <ProjectCard key={i} i={i} {...{project, progress: scrollYProgress, range, targetScale}}/>
            })}
        </div>
    )
}

export default ProjectStack;
