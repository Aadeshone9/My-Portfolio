
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import FadeIn from './FadeIn';
import AnimatedShape from './AnimatedShape';

const designTools = [
  { name: 'Figma' },
  { name: 'Adobe XD' },
  { name: 'Axure' },
  { name: 'Sketch' },
  { name: 'Adobe Illustrator' },
  { name: 'Adobe After Effects' },
  { name: 'Adobe Photoshop' },
  { name: 'Adobe Premiere Pro' },
];

const analyticalTools = [
  { name: 'Mouseflow' },
  { name: 'Google Analytics' },
];

const ToolStack = () => {
  return (
    <section className="pb-20 md:pb-32 bg-background">
      <div className="mb-20 md:mb-32 container mx-auto px-4 sm:px-8 md:px-20">
        <div className="flex flex-col items-start gap-y-4">
          <AnimatedShape shape="circle" />
          <h2 className="font-headline font-semibold text-5xl leading-[58px] tracking-[0.02em] text-foreground">
            we are almost done...
          </h2>
          <div className="w-32 h-[2px] bg-border my-6"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-8 md:px-20">
        <div className="flex flex-col items-start gap-4">
           <FadeIn>
              <h2 className="font-headline font-semibold text-3xl md:text-4xl leading-[58px] tracking-[0.02em] text-foreground text-left">
                / My Tool Stack
              </h2>
            </FadeIn>
            <FadeIn>
              <p className="font-subtitle text-lg md:text-2xl lg:text-[32px] text-muted-foreground mt-2 max-w-2xl leading-[30px] md:leading-[36px] lg:leading-[44px] text-left">
                A collection of my favorite tools that help me to create and deliver the best results.
              </p>
            </FadeIn>
        </div>
      </div>

      <div className="mt-16 container mx-auto px-4 sm:px-8 md:px-20">
        <div className="mb-10">
            <FadeIn>
                <h3 className="font-headline font-semibold text-xl md:text-2xl text-left text-foreground text-left">
                  Design softwares
                </h3>
            </FadeIn>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {designTools.map((tool, index) => (
            <div key={index}>
              <div className="bg-card border border-border rounded-xl flex items-center justify-center p-4 h-24">
                <p className="font-headline text-center font-semibold text-base md:text-lg text-foreground whitespace-nowrap">
                  {tool.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-16 container mx-auto px-4 sm:px-8 md:px-20">
         <div className="mb-10">
            <FadeIn>
                <h3 className="font-headline font-semibold text-xl md:text-2xl text-left text-foreground text-left">
                  Analytical tools
                </h3>
            </FadeIn>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {analyticalTools.map((tool, index) => (
            <div key={index}>
              <div className="bg-card border border-border rounded-xl flex items-center justify-center p-4 h-24">
                <p className="font-headline text-center font-semibold text-base md:text-lg text-foreground whitespace-nowrap">
                  {tool.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 md:mt-32 container mx-auto px-4 sm:px-8 md:px-20">
        <div className="flex flex-col items-start gap-6">
           <FadeIn>
              <h2 className="font-headline font-semibold text-3xl md:text-4xl leading-[58px] tracking-[0.02em] text-foreground text-left">
                / Skills
              </h2>
            </FadeIn>
          <div className="mt-10">
            <h3 className="font-headline font-semibold text-xl md:text-2xl text-left text-foreground mb-2">
              Research
            </h3>
            <p className="font-subtitle text-lg md:text-xl text-muted-foreground leading-relaxed">
              Design Research | Data Analytics | User Behaviour Analytics | Task Analysis & Persona Hypothesis | Information Architecture | Heuristics
            </p>
          </div>
          <div className="mt-10" id="design-skills-trigger">
            <h3 className="font-headline font-semibold text-xl md:text-2xl text-left text-foreground mb-2">
              Design
            </h3>
            <p className="font-subtitle text-lg md:text-xl text-muted-foreground leading-relaxed">
              User Flows | Concept Sketches | Wireframes & mock ups | Design System
            </p>
          </div>
           <div className="mt-10">
            <h3 className="font-headline font-semibold text-xl md:text-2xl text-left text-foreground mb-2">
              Prototyping
            </h3>
            <p className="font-subtitle text-lg md:text-xl text-muted-foreground leading-relaxed">
                Rapid Prototyping | Advanced Prototyping | Microinteractions | Motion Design
            </p>
          </div>
          <div className="mt-10">
            <h3 className="font-headline font-semibold text-xl md:text-2xl text-left text-foreground mb-2">
              Strategy & Innovation
            </h3>
            <p className="font-subtitle text-lg md:text-xl text-muted-foreground leading-relaxed">
              Design Consulting | Business Design Strategy | Product Innovation | Customer Experience (CX) | <span className="whitespace-nowrap">Problem Solving</span>
            </p>
          </div>
          <div className="mt-10">
            <div className="w-[84px] h-[84px] rounded-full bg-primary"></div>
          </div>
          <div className='mt-10'>
             <FadeIn>
                <p className="font-headline font-semibold text-xl md:text-2xl leading-tight tracking-tighter text-muted-foreground text-left">
                  Now that you know me better than earlier,
                </p>
              </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolStack;
