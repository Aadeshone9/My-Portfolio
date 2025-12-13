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
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-x-8 gap-y-12">
          <div className="lg:col-span-2">
            <h2 className="font-headline font-semibold text-[32px] leading-[58px] tracking-[0.02em] text-black">
              / My Approach Towards <br /> Problem Solving
            </h2>
          </div>
          <div className="flex flex-col justify-end">
            <p className="font-subtitle text-2xl md:text-[32px] leading-snug text-[#757575] mt-4 max-w-md">
              I believe great design is a result of clarity, collaboration, and
              craft.
            </p>
          </div>
          <div className="w-full">
            <div className="space-y-6 max-h-[404px] overflow-y-auto pr-4">
              {approachData.map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-[#BFBFBF] rounded-2xl p-6"
                >
                  <h3 className="font-headline font-semibold text-2xl md:text-3xl text-black">
                    {item.title}
                  </h3>
                  <p className="font-headline text-lg md:text-xl text-black mt-2">
                    {item.description}
                  </p>
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
