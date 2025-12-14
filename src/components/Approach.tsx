import React from 'react';
import SplitText from './SplitText';

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
      'Crafting MVP with Speed, Precision with adherence to standard Design System Approach',
  },
  {
    title: 'Design',
    description:
      'Shape Strategies & Design thoughtful design and always rooted in purpose and simplicity.',
  },
  {
    title: 'Test & Deliver',
    description:
      'Hand off Every element is for implementation with clarity, consistency, and attention to detail.',
  },
];

const Approach = () => {
  return (
    <section className="bg-background">
      <div className="container mx-auto px-4 sm:px-8 md:px-20">
        <div className="flex flex-col lg:flex-row flex-wrap items-start content-start gap-y-6 gap-x-[26px]">
          <div className="w-full">
            <h2 className="font-headline font-semibold text-3xl leading-[58px] tracking-[0.02em] text-foreground">
              /My Approach Towards Problem Solving
            </h2>
          </div>
          <div className="w-full lg:w-auto">
            <p className="font-subtitle text-2xl md:text-[32px] leading-snug text-muted-foreground mt-2 max-w-md">
              I believe great design is a result of clarity, collaboration, and
              craft.
            </p>
          </div>
          <div className="w-full lg:flex-1">
            <div className="space-y-6 max-h-[404px] overflow-y-auto pr-4 scroll-fade">
              {approachData.map((item, index) => (
                <div
                  key={index}
                  className="bg-background border border-border rounded-2xl p-6 w-full flex flex-col justify-center min-h-[140px]"
                >
                  <div className="space-y-1">
                    <h3 className="font-headline font-semibold text-3xl text-foreground leading-tight">
                      {item.title}
                    </h3>
                    <p className="font-body text-base text-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
