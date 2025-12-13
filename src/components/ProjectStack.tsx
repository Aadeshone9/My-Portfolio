"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import LogoLoop from "./LogoLoop";

const projects = [
  {
    title: "Google",
    role: "Lead + Individual Contributor",
    description: "Body Text description Body Text description Body Text description Body Text description",
    bgColor: "bg-[#F2F2F2]",
    imageBgColor: "bg-[#D9D9D9]",
  },
  {
    title: "Microsoft",
    role: "Product Designer",
    description: "Another project description detailing the work done and technologies used.",
    bgColor: "bg-[#EAEBEE]",
    imageBgColor: "bg-[#C9CED4]",
  },
  {
    title: "Apple",
    role: "UX/UI Designer",
    description: "A third project description for another great company to showcase skills.",
    bgColor: "bg-[#F0F0F0]",
    imageBgColor: "bg-[#DADADA]",
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
        className={`relative w-[55%] transform-gpu`}
      >
        <Card className={`p-6 ${project.bgColor} border border-[#BFBFBF] rounded-2xl w-full mx-auto`}>
          <div className={`${project.imageBgColor} w-full h-96 rounded-lg flex items-center justify-center`}>
            {i === 0 && (
              <svg width="140" height="140" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M49.2599 23.6001C49.2599 21.6801 49.0999 19.8801 48.7599 18.1401H25.0001V28.3201H38.7999C38.2199 31.4201 36.6199 33.9601 34.0599 35.6801V42.5001H42.0299C46.5199 38.3401 49.2599 31.6401 49.2599 23.6001Z" fill="#1976D2"/>
                  <path d="M25.0001 49.9998C31.9201 49.9998 37.7601 47.6798 42.0299 42.4998L34.0601 35.6798C31.7801 37.2198 28.6601 38.1398 25.0001 38.1398C18.4201 38.1398 12.8601 33.7998 11.0201 27.9998H2.78003V34.9998C7.02003 44.0198 15.3601 49.9998 25.0001 49.9998Z" fill="#4CAF50"/>
                  <path d="M11.0199 28.0001C10.5199 26.5401 10.26 24.9801 10.26 23.3401C10.26 21.7001 10.52 20.1401 11.0199 18.6801V11.6801H2.78003C0.980029 15.3401 0 19.1801 0 23.3401C0 27.5001 0.980029 31.3401 2.78003 35.0001L11.0199 28.0001Z" fill="#FFC107"/>
                  <path d="M25.0001 10.86C28.1601 10.86 30.9201 11.94 33.2801 14.16L42.2201 5.22C37.7601 1.98 31.9201 0 25.0001 0C15.3601 0 7.02003 5.98 2.78003 15L11.0201 22C12.8601 16.2 18.4201 10.86 25.0001 10.86Z" fill="#FF3D00"/>
              </svg>
            )}
          </div>
          <div className="mt-6">
              <CardTitle className="text-3xl font-headline font-semibold text-black">{project.title}</CardTitle>
              <p className="text-lg text-gray-500 mt-1">{project.role}</p>
              <CardDescription className="text-xl text-black mt-2">
                  {project.description}
              </CardDescription>
              <Button variant="link" className="p-0 h-auto text-lg mt-4 text-black">
                  View project <ArrowRight className="w-5 h-5 ml-1"/>
              </Button>
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
        <div ref={containerRef} className="relative z-10">
            <LogoLoop />
            {projects.map((project, i) => {
                const targetScale = 1 - ((projects.length - i) * 0.05);
                return <ProjectCard key={i} i={i} {...{project, progress: scrollYProgress, range: [i * .25, 1], targetScale}}/>
            })}
        </div>
    )
}

export default ProjectStack;
