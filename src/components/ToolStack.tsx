
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import SplitText from './SplitText';
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
    <section className="pb-16 md:pb-24 bg-background">
      <div className="mb-16 md:mb-24 container mx-auto px-4 sm:px-8 md:px-20">
        <div className="flex flex-col items-start gap-y-4">
          <AnimatedShape shape="circle" />
          <h2 className="font-headline font-semibold text-5xl leading-[58px] tracking-[0.02em] text-foreground">
            we are almost done...
          </h2>
          <div className="w-32 h-[2px] bg-border my-4"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-8 md:px-20">
        <div className="flex flex-col items-start gap-4">
           <SplitText
              text="/ My Tool Stack"
              tag="h2"
              className="font-headline font-semibold text-3xl md:text-4xl leading-[58px] tracking-[0.02em] text-foreground"
              textAlign="left"
            />
            <SplitText
              text="A collection of my favorite tools that help me to create and deliver the best results."
              tag="p"
              splitType='words'
              className="font-subtitle text-lg md:text-2xl lg:text-[32px] text-muted-foreground mt-2 max-w-2xl leading-[30px] md:leading-[36px] lg:leading-[44px]"
              textAlign="left"
            />
        </div>
      </div>

      <div className="mt-12 container mx-auto px-4 sm:px-8 md:px-20">
        <div className="mb-8">
            <SplitText
                text="Design softwares"
                tag="h3"
                className="font-headline font-semibold text-xl md:text-2xl text-left text-foreground"
                textAlign="left"
            />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
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
      
      <div className="mt-12 container mx-auto px-4 sm:px-8 md:px-20">
         <div className="mb-8">
            <SplitText
                text="Analytical tools"
                tag="h3"
                className="font-headline font-semibold text-xl md:text-2xl text-left text-foreground"
                textAlign="left"
            />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
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

      <div className="mt-16 md:mt-24 container mx-auto px-4 sm:px-8 md:px-20">
        <div className="flex flex-col items-start gap-4">
           <SplitText
              text="/ Skills"
              tag="h2"
              className="font-headline font-semibold text-3xl md:text-4xl leading-[58px] tracking-[0.02em] text-foreground"
              textAlign="left"
            />
          <div className="mt-8">
            <h3 className="font-headline font-semibold text-xl md:text-2xl text-left text-foreground mb-2">
              Research
            </h3>
            <p className="font-subtitle text-lg md:text-xl text-muted-foreground leading-relaxed">
              Design Research | Data Analytics | User Behaviour Analytics | Task Analysis & Persona Hypothesis | Information Architecture | Heuristics
            </p>
          </div>
          <div className="mt-8" id="design-skills-trigger">
            <h3 className="font-headline font-semibold text-xl md:text-2xl text-left text-foreground mb-2">
              Design
            </h3>
            <p className="font-subtitle text-lg md:text-xl text-muted-foreground leading-relaxed">
              User Flows | Concept Sketches | Wireframes & mock ups | Design System
            </p>
          </div>
           <div className="mt-8">
            <h3 className="font-headline font-semibold text-xl md:text-2xl text-left text-foreground mb-2">
              Prototyping
            </h3>
            <p className="font-subtitle text-lg md:text-xl text-muted-foreground leading-relaxed">
                Rapid Prototyping | Advanced Prototyping | Microinteractions | Motion Design
            </p>
          </div>
          <div className="mt-8">
            <div className="w-[84px] h-[84px] rounded-full bg-primary"></div>
          </div>
          <div className='mt-8'>
             <SplitText
                text="Now that you know me better"
                tag="p"
                className="font-headline font-semibold text-4xl md:text-6xl leading-tight tracking-tighter text-muted-foreground"
                textAlign="left"
              />
              <SplitText
                text="than Earlier,"
                tag="p"
                className="font-headline font-semibold text-4xl md:text-6xl leading-tight tracking-tighter text-muted-foreground"
                textAlign="left"
              />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolStack;
