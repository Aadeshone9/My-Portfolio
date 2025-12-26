
"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight, Lock } from "lucide-react";
import PillButton from "./PillButton";

const projects = [
  {
    title: "Thermax Global - Edge Platform",
    role: "UX Design Consultant | Co-Designer",
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
                null
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
