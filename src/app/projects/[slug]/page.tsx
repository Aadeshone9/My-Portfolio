'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Target } from 'lucide-react';

const motionProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" },
};

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const heroImage = PlaceHolderImages.find(p => p.id === 'uber-hero');
  const image1 = PlaceHolderImages.find(p => p.id === 'uber-image-1');
  const image2 = PlaceHolderImages.find(p => p.id === 'uber-image-2');
  const image3 = PlaceHolderImages.find(p => p.id === 'uber-image-3');
  const image4 = PlaceHolderImages.find(p => p.id === 'uber-image-4');
  const image5 = PlaceHolderImages.find(p => p.id === 'uber-image-5');
  const image6 = PlaceHolderImages.find(p => p.id === 'uber-image-6');
  const image7 = PlaceHolderImages.find(p => p.id === 'uber-image-7');
  const image8 = PlaceHolderImages.find(p => p.id === 'uber-image-8');
  const image9 = PlaceHolderImages.find(p => p.id === 'uber-image-9');

  const outcomes = [
    {
      value: '50%',
      description: 'Reduction in time to find a charging station',
    },
    {
      value: '10%',
      description: 'Reduction in costly riding habits',
    },
    {
      value: '20%',
      description: 'Increase in re-subscription rates.',
    },
  ];

    const designChallenges = [
    {
      title: 'User Pain Point',
      description: 'Frustration with Range Anxiety and the lack of verified information for charging, Vehicle adaptation.',
    },
    {
      title: 'Business Challenge',
      description: 'Lack of convenience and transparency in after-sales services, leading to high potential subscriber churn.',
    },
    {
      title: 'Competitive Gap',
      description: 'Competitors lacked a clear, personalized system for proactive maintenance alerts and data-driven riding feedback, Safety of Vehicle.',
    },
  ];

  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="h-screen w-full relative">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover"
              data-ai-hint={heroImage.imageHint}
              priority
            />
          )}
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 container mx-auto px-4 sm:px-8 md:px-20 flex flex-col justify-end pb-20 md:pb-32">
            <motion.p
              {...motionProps}
              className="font-headline font-semibold text-lg md:text-xl text-white/80"
            >
              Behavioural UX case Study
            </motion.p>
            <motion.h1
              {...motionProps}
              transition={{ ...motionProps.transition, delay: 0.1 }}
              className="font-headline font-semibold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mt-4"
            >
              Driving Loyalty & Efficiency in
            </motion.h1>
            <motion.h1
              {...motionProps}
              transition={{ ...motionProps.transition, delay: 0.2 }}
              className="font-headline font-semibold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mt-2"
            >
              EV Mobility with VIDA
            </motion.h1>
          </div>
        </section>

        {/* Contribution Section */}
        <section className="py-24 md:py-40 bg-background text-foreground relative">
          <div className="container mx-auto px-4 sm:px-8 md:px-20 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
              <motion.div {...motionProps}>
                <h2 className="font-headline font-semibold text-2xl md:text-3xl text-foreground">Contribution in Project</h2>
                <p className="text-primary text-lg md:text-xl leading-relaxed mt-4">Research, Strategy, Design, Design System</p>
              </motion.div>
              <motion.div {...motionProps} transition={{ ...motionProps.transition, delay: 0.1 }}>
                <h2 className="font-headline font-semibold text-2xl md:text-3xl text-foreground">My Role</h2>
                <p className="text-primary text-lg md:text-xl leading-relaxed mt-4">Consultant: CX & UX Design</p>
              </motion.div>
              <motion.div {...motionProps} transition={{ ...motionProps.transition, delay: 0.2 }}>
                <h2 className="font-headline font-semibold text-2xl md:text-3xl text-foreground">Project Focus</h2>
                <p className="text-primary text-lg md:text-xl leading-relaxed mt-4">End-to-end connected vehicle platform experience for the launch of the Vida EV.</p>
              </motion.div>
               <motion.div {...motionProps} transition={{ ...motionProps.transition, delay: 0.3 }}>
                <h2 className="font-headline font-semibold text-2xl md:text-3xl text-foreground">Primary Goal</h2>
                <p className="text-primary text-lg md:text-xl leading-relaxed mt-4">Build a world-class platform to empower EV adoption and drive large-scale sustainable practices, focusing on customer Lifetime Value (LTV).</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Key Outcomes Section */}
        <section className="py-24 md:py-40 bg-background text-foreground relative">
            <div className="absolute inset-0 bg-grid-zinc-500/10 [mask-image:linear-gradient(to_bottom,white_10%,transparent_70%)] dark:bg-grid-white/10"></div>
            <div className="container mx-auto px-4 sm:px-8 md:px-20 relative">
                <motion.h2 
                    {...motionProps}
                    className="font-headline font-semibold text-3xl md:text-4xl text-foreground mb-20"
                >
                    Key Outcomes
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                    {outcomes.map((outcome, index) => (
                         <motion.div 
                            key={index} 
                            {...motionProps} 
                            transition={{ ...motionProps.transition, delay: 0.1 * (index + 1) }}
                            className="flex items-start gap-6"
                        >
                            <span className="font-headline font-bold text-5xl md:text-6xl text-primary">{outcome.value}</span>
                            <p className="text-lg md:text-xl text-muted-foreground mt-2">{outcome.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

        {/* Problem Definition Section */}
        <section className="py-24 md:py-40 bg-background text-foreground relative">
          <div className="absolute inset-0 bg-grid-zinc-500/10 [mask-image:linear-gradient(to_bottom,transparent,white_40%,white_60%,transparent)] dark:bg-grid-white/10"></div>
          <div className="container mx-auto px-4 sm:px-8 md:px-20 relative z-10">
            <div className="max-w-4xl mx-auto">
              <motion.div {...motionProps} className="flex items-center gap-4">
                <Target className="w-8 h-8 text-primary" />
                <h2 className="font-headline font-semibold text-2xl md:text-3xl text-foreground">
                  Problem Definition &amp; Strategic Gap
                </h2>
              </motion.div>
              <motion.p
                {...motionProps}
                transition={{ ...motionProps.transition, delay: 0.1 }}
                className="font-headline text-4xl md:text-5xl lg:text-6xl font-semibold text-primary leading-tight mt-8"
              >
                Our research identified significant gaps in the emerging EV market that fueled user anxiety and distrust.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Core Design Challenge Section */}
        <section className="py-24 md:py-40 bg-background text-foreground relative">
          <div className="container mx-auto px-4 sm:px-8 md:px-20 relative z-10">
            <div className="max-w-4xl mx-auto">
              <motion.h2 
                {...motionProps} 
                className="font-headline font-semibold text-3xl md:text-4xl text-foreground mb-12"
              >
                This led to our core design challenge:
              </motion.h2>
              <ul className="space-y-8">
                {designChallenges.map((challenge, index) => (
                  <motion.li 
                    key={index}
                    {...motionProps}
                    transition={{ ...motionProps.transition, delay: 0.1 * (index + 1) }}
                    className="flex items-start"
                  >
                    <span className="text-primary mr-4">&#8226;</span>
                    <p className="text-lg md:text-xl text-foreground/80">
                      <span className="font-semibold text-primary">{challenge.title}: </span>
                      {challenge.description}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
