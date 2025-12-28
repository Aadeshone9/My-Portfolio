

"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight, Lock } from "lucide-react";
import PillButton from "./PillButton";
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const projects = [
  {
    title: "Thermax - Edge Platform",
    role: "UX Researcher and strategist",
    description: "Defined UX improvements that increased error visibility and user adoption by 25%.",
    bgColor: "bg-background",
    imageBgColor: "bg-muted",
    img: '/images/edge.png',
  },
  {
    title: "Maplegeni",
    role: "Product Designer | Co-Designer",
    description: "Led B2C website product design, boosting mobile-first engagement by 35%.",
    bgColor: "bg-background",
    imageBgColor: "bg-muted",
    img: '/images/maplegenix.webp',
  },
  {
    title: "Mahindra Finance",
    role: "UX Design Consultant | Co-Designer",
    description: "Increased customer retention by 30% and cross-selling by 25% by integrating \"Design for Trust and Growth\" principles.",
    bgColor: "bg-background",
    imageBgColor: "bg-muted",
    img: '/images/mahindra-finance.svg',
  },
  {
    title: "Google Cloud Security",
    role: "Partner Product & UX Design consultant | Co-Designer",
    description: "Optimised a user-centric ticketing system, resulting in a quantifiable efficiency boost of 45% and reducing average resolution time by 30%.",
    bgColor: "bg-background",
    imageBgColor: "bg-muted",
    img: '/images/google-cloud-logo.svg',
  },
  {
    title: "Hero Motocorp Vida App",
    role: "UX Researcher and strategist",
    description: "End-to-end connected vehicle platform experience for the launch of the Vida EV.",
    bgColor: "bg-background",
    imageBgColor: "bg-muted",
    cta: 'View Project',
    href: '/projects/vida',
    img: '/images/hero.svg'
  },
];

const PhoneMockup = () => {
    const vidaAppImage = PlaceHolderImages.find(p => p.id === 'vida-app-screen');
    return (
      <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-[2.5rem] h-[450px] w-[220px] shadow-xl">
          <div className="w-[100px] h-[12px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
          <div className="h-[32px] w-[2px] bg-gray-800 absolute -left-2 top-[72px] rounded-l-lg"></div>
          <div className="h-[32px] w-[2px] bg-gray-800 absolute -left-2 top-[124px] rounded-l-lg"></div>
          <div className="h-[48px] w-[2px] bg-gray-800 absolute -right-2 top-[100px] rounded-r-lg"></div>
          <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white dark:bg-gray-800">
              {vidaAppImage && (
                <Image 
                    src={vidaAppImage.imageUrl} 
                    className="w-full h-full object-cover" 
                    alt={vidaAppImage.description}
                    data-ai-hint={vidaAppImage.imageHint}
                    width={204}
                    height={434}
                />
              )}
          </div>
      </div>
    )
}

const ProjectCard = ({ project, i, progress, range, targetScale }: { project: any, i: number, progress: any, range: number[], targetScale: number }) => {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="sticky top-0 h-screen flex items-center justify-center">
      <motion.div 
        style={{ 
          scale,
          top: `calc(-5vh + ${i * 25}px)`
        }} 
        className={`relative h-[80vh] w-[80vw] md:h-[70vh] md:w-[70vw] lg:h-[600px] lg:w-[600px] transform-gpu`}
      >
        <Card className={`${project.bgColor} border-border rounded-2xl w-full h-full mx-auto flex flex-col p-6 md:p-8`}>
            <div className="w-full aspect-[16/9] bg-background rounded-lg flex items-center justify-center overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-transparent to-primary/20 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
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
                        {project.description}
                    </CardDescription>
                </div>
                <div className="flex items-center gap-2 mt-4">
                    {project.cta === 'View Project' ? (
                      <PillButton 
                        href={project.href || '#'}
                        className="group !text-foreground !border-foreground"
                      >
                          <span className="group-hover:font-semibold">View Project</span>
                          <ArrowRight />
                      </PillButton>
                    ) : (
                      <PillButton 
                        href="https://www.linkedin.com/messaging/compose/?recipient=aadeshgovenkar"
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
        <div ref={containerRef} className="relative">
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
