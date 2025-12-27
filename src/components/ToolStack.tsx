
import React from 'react';

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
      <div className="container mx-auto px-4 sm:px-8 md:px-20">
        <div className="flex flex-col items-start gap-4">
          <h2 className="font-headline font-semibold text-3xl md:text-4xl leading-[58px] tracking-[0.02em] text-foreground">
            / My Tool Stack
          </h2>
          <p className="font-subtitle text-lg md:text-2xl lg:text-[32px] text-muted-foreground mt-2 max-w-2xl leading-[30px] md:leading-[36px] lg:leading-[44px]">
            A collection of my favorite tools that help me to create and deliver the best results.
          </p>
        </div>
      </div>

      <div className="mt-12 container mx-auto px-4 sm:px-8 md:px-20">
        <h3 className="font-headline font-semibold text-xl md:text-2xl text-left text-foreground mb-8">
            Design softwares
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {designTools.map((tool, index) => (
            <div key={index}>
              <div className="bg-card border border-border rounded-xl flex items-center justify-center p-6 h-28">
                <p className="font-headline text-center font-semibold text-lg md:text-xl text-foreground whitespace-nowrap">
                  {tool.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-12 container mx-auto px-4 sm:px-8 md:px-20">
        <h3 className="font-headline font-semibold text-xl md:text-2xl text-left text-foreground mb-8">
            Analytical tools
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {analyticalTools.map((tool, index) => (
            <div key={index}>
              <div className="bg-card border border-border rounded-xl flex items-center justify-center p-6 h-28">
                <p className="font-headline text-center font-semibold text-lg md:text-xl text-foreground whitespace-nowrap">
                  {tool.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 md:mt-24 container mx-auto px-4 sm:px-8 md:px-20">
        <div className="flex flex-col items-start gap-4">
          <h2 className="font-headline font-semibold text-3xl md:text-4xl leading-[58px] tracking-[0.02em] text-foreground">
            / Skills
          </h2>
          <div className='mt-4'>
            <h3 className="font-headline font-semibold text-xl md:text-2xl text-left text-foreground mb-4">
              Research
            </h3>
            <p className="font-subtitle text-lg md:text-xl text-muted-foreground leading-relaxed">
              Design Research | Data Analytics | User Behaviour Analytics | Task Analysis & Persona Hypothesis | Information Architecture | Heuristics
            </p>
          </div>
          <div className='mt-8'>
            <h3 className="font-headline font-semibold text-xl md:text-2xl text-left text-foreground mb-4">
              Design
            </h3>
            <p className="font-subtitle text-lg md:text-xl text-muted-foreground leading-relaxed">
              User Flows | Concept Sketches | Wireframes & mock ups | Design System
            </p>
          </div>
           <div className='mt-8'>
            <h3 className="font-headline font-semibold text-xl md:text-2xl text-left text-foreground mb-4">
              Prototyping
            </h3>
            <p className="font-subtitle text-lg md:text-xl text-muted-foreground leading-relaxed">
                Rapid Prototyping | Advanced Prototyping | Microinteractions | Motion Design
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolStack;
