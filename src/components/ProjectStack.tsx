
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
  },
  {
    title: "Maplegeni",
    role: "Product Designer | Co-Designer",
    description: "Led B2C website product design, boosting mobile-first engagement by 35%.",
    bgColor: "bg-background",
    imageBgColor: "bg-muted",
  },
  {
    title: "Mahindra Finance",
    role: "UX Design Consultant | Co-Designer",
    description: "Increased customer retention by 30% and cross-selling by 25% by integrating \"Design for Trust and Growth\" principles.",
    bgColor: "bg-background",
    imageBgColor: "bg-muted",
  },
  {
    title: "Google Cloud Security",
    role: "Partner Product & UX Design consultant | Co-Designer",
    description: "Optimised a user-centric ticketing system, resulting in a quantifiable efficiency boost of 45% and reducing average resolution time by 30%.",
    bgColor: "bg-background",
    imageBgColor: "bg-muted",
  },
  {
    title: "Hero Motocorp Vida App",
    role: "UX Design Consultant | Co-Designer",
    description: "End-to-end connected vehicle platform experience for the launch of the Vida EV.",
    bgColor: "bg-background",
    imageBgColor: "bg-muted",
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
        className={`relative h-[80vh] w-[80vh] md:h-[70vh] md:w-[70vh] transform-gpu`}
      >
        <Card className={`${project.bgColor} border-border rounded-2xl w-full h-full mx-auto flex flex-col overflow-hidden`}>
          <div className={`relative ${project.imageBgColor} w-full h-full rounded-lg flex items-center justify-center`}>
            {project.title === 'Hero Motocorp Vida App' ? (
                <PhoneMockup />
            ) : null }
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 flex flex-col justify-end">
                <div className="text-white">
                  <CardTitle className="text-2xl md:text-3xl font-headline font-semibold text-white">{project.title}</CardTitle>
                  <p className="text-base md:text-lg text-slate-300 mt-1">{project.role}</p>
                  <CardDescription className="text-lg md:text-xl text-slate-100 mt-2">
                      {project.description}
                  </CardDescription>
                  <div className="flex items-center gap-2 mt-4">
                    {project.title === 'Google Cloud Security' ? (
                        <PillButton 
                          href="#"
                          className="group !text-white !border-white"
                        >
                            <span className="group-hover:font-semibold">Request Access</span>
                            <Lock />
                        </PillButton>
                    ) : (
                        <PillButton 
                          href={project.title === 'Hero Motocorp Vida App' ? '/projects/vida-app' : '#'}
                          className="group !text-white !border-white"
                        >
                            <span className="group-hover:font-semibold">View project</span>
                            <ArrowRight />
                        </PillButton>
                    )}
                  </div>
                </div>
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
