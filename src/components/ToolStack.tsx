
import React from 'react';
import SplitText from './SplitText';
import { Card, CardContent } from '@/components/ui/card';

const tools = [
  { name: 'Figma' },
  { name: 'Adobe Illustrator' },
  { name: 'Adobe Photoshop' },
  { name: 'Protopie' },
  { name: 'Miro' },
  { name: 'Jira' },
  { name: 'Confluence' },
  { name: 'React' },
  { name: 'Next.js' },
  { name: 'Firebase' },
  { name: 'VS Code' },
  { name: 'GSAP' },
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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 mt-12">
          {tools.map((tool, index) => (
            <Card key={index} className="bg-card border border-border rounded-xl aspect-square flex items-center justify-center p-4">
              <CardContent className="p-0">
                <p className="font-headline text-center font-semibold text-lg md:text-xl text-foreground">
                  {tool.name}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolStack;
