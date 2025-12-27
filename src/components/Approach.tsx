
import React from 'react';
import SplitText from './SplitText';
import { ScrollArea } from './ui/scroll-area';
import { motion } from 'framer-motion';

const approachData = [
  {
    title: 'Discover',
    description: 'Define a clear vision for the future',
  },
  {
    title: 'Define',
    description: "You've proven the concept; now let's perfect the experience.",
  },
  {
    title: 'The Experience Layout',
    description:
      'Crafting MVP with speed, precision with adherence to standard Design System approach',
  },
  {
    title: 'Design',
    description:
      'Shape Strategies & Design with thoughtful purpose and simplicity.',
  },
  {
    title: 'Test & Deliver',
    description:
      'Hand off every element is for implementation with clarity, consistency, and attention to detail.',
  },
];

const Approach = () => {
  return (
    <section className="bg-background">
      <div className="container mx-auto px-4 sm:px-8 md:px-20">
        <div className="flex flex-col lg:flex-row flex-wrap items-start content-start gap-y-8 gap-x-[26px]">
          <div className="w-full">
            <SplitText
              text="/My Approach Towards Problem Solving"
              tag="h2"
              className="font-headline font-semibold text-3xl md:text-4xl leading-[58px] tracking-[0.02em] text-foreground"
              textAlign="left"
            />
          </div>
          <div className="w-full lg:w-auto">
            <SplitText
              text="I believe great design is a result of clarity, collaboration, and craft."
              tag="p"
              splitType="words"
              className="font-subtitle text-lg md:text-2xl lg:text-[32px] text-muted-foreground mt-2 max-w-md leading-[30px] md:leading-[36px] lg:leading-[44px]"
              textAlign="left"
            />
          </div>
          <div className="w-full lg:flex-1 mt-4 lg:mt-0">
            <ScrollArea className="h-[404px] w-full">
              <div className="space-y-6 pr-4">
                {approachData.map((item, index) => (
                  <div
                    key={index}
                    className="bg-background border border-border rounded-2xl p-6 w-full flex flex-col justify-center min-h-[140px]"
                  >
                    <div className="space-y-2">
                      <h3 className="font-headline font-semibold text-2xl md:text-3xl text-foreground leading-tight">
                        {item.title}
                      </h3>
                      <p className="font-body text-base md:text-lg text-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
