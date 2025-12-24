
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
    isBigger: true,
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
        className={`relative w-[90%] md:w-[70%] lg:w-[55%] ${project.isBigger ? 'lg:w-[65%]' : ''} transform-gpu`}
      >
        <Card className={`p-6 ${project.bgColor} border-border rounded-2xl w-full mx-auto`}>
          <div className={`${project.imageBgColor} w-full ${project.isBigger ? 'h-80 md:h-[500px]' : 'h-64 md:h-96'} rounded-lg flex items-center justify-center`}>
            {project.title === 'Google Cloud Security' && (
              <svg width="100" height="100" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[70px] h-[70px] md:w-[140px] md:h-[140px]">
                  <path d="M49.2599 23.6001C49.2599 21.6801 49.0999 19.8801 48.7599 18.1401H25.0001V28.3201H38.7999C38.2199 31.4201 36.6199 33.9601 34.0599 35.6801V42.5001H42.0299C46.5199 38.3401 49.2599 31.6401 49.2599 23.6001Z" fill="#1976D2"/>
                  <path d="M25.0001 49.9998C31.9201 49.9998 37.7601 47.6798 42.0299 42.4998L34.0601 35.6798C31.7801 37.2198 28.6601 38.1398 25.0001 38.1398C18.4201 38.1398 12.8601 33.7998 11.0201 27.9998H2.78003V34.9998C7.02003 44.0198 15.3601 49.9998 25.0001 49.9998Z" fill="#4CAF50"/>
                  <path d="M11.0199 28.0001C10.5199 26.5401 10.26 24.9801 10.26 23.3401C10.26 21.7001 10.52 20.1401 11.0199 18.6801V11.6801H2.78003C0.980029 15.3401 0 19.1801 0 23.3401C0 27.5001 0.980029 31.3401 2.78003 35.0001L11.0199 28.0001Z" fill="#FFC107"/>
                  <path d="M25.0001 10.86C28.1601 10.86 30.9201 11.94 33.2801 14.16L42.2201 5.22C37.7601 1.98 31.9201 0 25.0001 0C15.3601 0 7.02003 5.98 2.78003 15L11.0201 22C12.8601 16.2 18.4201 10.86 25.0001 10.86Z" fill="#FF3D00"/>
              </svg>
            )}
            {project.title === 'Hero Motocorp Vida App' && (
                <svg width="232" height="40" viewBox="0 0 232 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[150px] h-auto md:w-[232px]">
                    <path d="M0 40V0H9.33333V40H0Z" fill="#F36F2D"/>
                    <path d="M26.6667 40V0H36V40H26.6667Z" fill="#231F20"/>
                    <path d="M26.6667 24.6667V15.3333H54.6667V24.6667H26.6667Z" fill="#231F20"/>
                    <path d="M54.6667 40V0H64V40H54.6667Z" fill="#231F20"/>
                    <path d="M73.3333 40V0H82.6667V40H73.3333Z" fill="#F36F2D"/>
                    <path d="M92 40V0H101.333V40H92Z" fill="#231F20"/>
                    <path d="M128.667 40L110 0H120L138.667 40H128.667Z" fill="#231F20"/>
                    <path d="M129.333 0L148 40H138L119.333 0H129.333Z" fill="#231F20"/>
                    <path d="M157.333 28.16V3.52H166.667V40H157.333V28.16Z" fill="#F36F2D"/>
                    <path d="M188.667 40V15.3333H170V40H188.667V24.6667H179.333V15.3333H188.667V40Z" fill="#231F20"/>
                    <path d="M170 0H188.667V15.3333H170V0Z" fill="#231F20"/>
                    <path d="M213.333 40C204 40 198.667 30.6667 198.667 20C198.667 9.33333 204 0 213.333 0C222.667 0 228 9.33333 228 20C228 30.6667 222.667 40 213.333 40ZM213.333 30.6667C218 30.6667 218.667 24.6667 218.667 20C218.667 15.3333 218 9.33333 213.333 9.33333C208.667 9.33333 208 15.3333 208 20C208 24.6667 208.667 30.6667 213.333 30.6667Z" fill="#231F20"/>
                    <path d="M231.333 28.16V3.52H222V40H231.333V28.16Z" fill="#F36F2D"/>
                </svg>
            )}
          </div>
          <div className="mt-6">
              <CardTitle className="text-2xl md:text-3xl font-headline font-semibold text-foreground">{project.title}</CardTitle>
              <p className="text-base md:text-lg text-muted-foreground mt-1">{project.role}</p>
              <CardDescription className="text-lg md:text-xl text-foreground mt-2">
                  {project.description}
              </CardDescription>
              <div className="flex items-center gap-2 mt-4">
                {project.title === 'Google Cloud Security' ? (
                    <PillButton 
                      href="#"
                      className="group"
                    >
                        <span className="group-hover:font-semibold">Request Access</span>
                        <Lock />
                    </PillButton>
                ) : (
                    <PillButton 
                      href={project.title === 'Hero Motocorp Vida App' ? '/projects/vida-app' : '#'}
                      className="group"
                    >
                        <span className="group-hover:font-semibold">View project</span>
                        <ArrowRight />
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
