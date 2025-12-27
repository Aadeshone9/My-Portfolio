
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

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
  { name: 'Mouseflow - User behaviour' },
  { name: 'Google Analytics - Page Analytics' },
];

const allTools = [...designTools, ...analyticalTools];

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

      <div className="mt-12 w-full overflow-hidden">
        <div className="flex animate-looping-scroll">
          {[...allTools, ...allTools].map((tool, index) => (
            <div key={index} className="flex-shrink-0 mx-4">
              <Card className="bg-card border border-border rounded-xl flex items-center justify-center p-6 h-28 w-60">
                <CardContent className="p-0">
                  <p className="font-headline text-center font-semibold text-lg md:text-xl text-foreground whitespace-nowrap">
                    {tool.name}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolStack;
