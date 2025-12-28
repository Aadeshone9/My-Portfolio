'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Search, Target, User, TrendingUp } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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
  
  const mentalModelImage1 = PlaceHolderImages.find(p => p.id === 'mental-model-1');
  const mentalModelImage2 = PlaceHolderImages.find(p => p.id === 'mental-model-2');
  const avatar1 = PlaceHolderImages.find(p => p.id === 'mental-model-avatar-1');
  const avatar2 = PlaceHolderImages.find(p => p.id === 'mental-model-avatar-2');
  const avatar3 = PlaceHolderImages.find(p => p.id === 'mental-model-avatar-3');


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

  const rangeAnxietySolutions = [
    {
      title: 'Inefficient Journey',
      description: 'Finding a charging station typically required five inefficient steps in existing systems.',
    },
    {
      title: 'Design Solution',
      description: 'We drastically simplified the charging station flow from five steps to just two by intelligently sharing contextual charging stations based on planned or daily commuted routes.',
    },
    {
      title: 'Design Rationale (Map vs. List)',
      description: 'We used a combined Map View (for quick spatial context/familiarity) and List View (optimized for detailed comparison of price/connector type) to maximize user trust and efficiency.',
    },
    {
      title: 'Testing & Iteration',
      description: 'Initial usability tests showed users struggled to verify station compatibility. We iterated by simplifying and highlighting the connector type and status on the information card, which was crucial to achieving the final efficiency gains.',
    },
  ];

  const saferBehaviourPoints = [
    {
      title: 'Strategic Gap Addressed',
      description: 'The need for personalized riding tips and transparent maintenance.',
    },
    {
      title: 'Design Rationale (Behavioral Nudges)',
      description: 'We used Behavioral Design (Nudges) by providing actionable tips (e.g., "Tips on Harsh-braking") instead of just a raw score. This personalized, supportive approach successfully drove better habits.',
    },
    {
      title: 'Data Hierarchy',
      description: "On the 'My Rides' screen, we prioritized functional metrics like Distance and Avg Speed over the subjective star rating, reflecting our focus on utility and safety improvement.",
    },
    {
      title: 'Maintenance Transparency',
      description: 'We addressed the trust gap by designing an Easy, Quick, and Transparent Maintenance Process with proactive alerts and upfront pricing, directly combating the after-sales inconvenience seen in competitors.',
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
              Driving Loyalty &amp; Efficiency in
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
        <section className="py-24 md:py-32 bg-background text-foreground relative">
          <div className="container mx-auto px-4 sm:px-8 md:px-20 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
              <motion.div {...motionProps}>
                <h2 className="font-headline font-semibold text-xl md:text-2xl text-foreground">Contribution in Project</h2>
                <p className="text-primary text-lg md:text-xl leading-relaxed mt-4">Research, Strategy, Design, Design System</p>
              </motion.div>
              <motion.div {...motionProps} transition={{ ...motionProps.transition, delay: 0.1 }}>
                <h2 className="font-headline font-semibold text-xl md:text-2xl text-foreground">My Role</h2>
                <p className="text-primary text-lg md:text-xl leading-relaxed mt-4">Consultant: CX &amp; UX Design</p>
              </motion.div>
              <motion.div {...motionProps} transition={{ ...motionProps.transition, delay: 0.2 }}>
                <h2 className="font-headline font-semibold text-xl md:text-2xl text-foreground">Project Focus</h2>
                <p className="text-primary text-lg md:text-xl leading-relaxed mt-4">End-to-end connected vehicle platform experience for the launch of the Vida EV.</p>
              </motion.div>
               <motion.div {...motionProps} transition={{ ...motionProps.transition, delay: 0.3 }}>
                <h2 className="font-headline font-semibold text-xl md:text-2xl text-foreground">Primary Goal</h2>
                <p className="text-primary text-lg md:text-xl leading-relaxed mt-4">Build a world-class platform to empower EV adoption and drive large-scale sustainable practices, focusing on customer Lifetime Value (LTV).</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Key Outcomes Section */}
        <section className="py-24 md:py-32 bg-background text-foreground relative">
            <div className="container mx-auto px-4 sm:px-8 md:px-20 relative">
                <motion.h2 
                    {...motionProps}
                    className="font-headline font-semibold text-3xl md:text-4xl text-foreground mb-16"
                >
                    Key Outcomes
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
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
        <section className="py-24 md:py-32 bg-background text-foreground relative">
          <div className="container mx-auto px-4 sm:px-8 md:px-20 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div {...motionProps} className="flex items-center justify-center gap-4">
                <Target className="w-8 h-8 text-primary" />
                <h2 className="font-headline font-semibold text-2xl md:text-3xl text-foreground">
                  Problem Definition &amp; Strategic Gap
                </h2>
              </motion.div>
              <motion.p
                {...motionProps}
                transition={{ ...motionProps.transition, delay: 0.1 }}
                className="font-headline text-4xl md:text-5xl font-semibold text-primary leading-snug md:leading-relaxed mt-8"
              >
                Our research identified significant gaps in the emerging EV market that fueled user anxiety and distrust.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Core Design Challenge Section */}
        <section className="py-24 md:py-32 bg-background text-foreground relative">
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
                    <span className="text-primary mr-4 mt-1">&#8226;</span>
                    <p className="text-lg md:text-xl text-muted-foreground">
                      <span className="font-semibold text-foreground">{challenge.title}: </span>
                      {challenge.description}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Dummy Slide 6 */}
        <section className="py-24 md:py-32 bg-background">
          <div className="container mx-auto px-4 sm:px-8 md:px-20">
            <div className="w-full h-[60vh] bg-muted rounded-2xl flex items-center justify-center">
              <p className="text-muted-foreground">Dummy Slide</p>
            </div>
          </div>
        </section>

        {/* Design Process & Strategic Solutions Section */}
        <section className="py-24 md:py-32 bg-background text-foreground relative">
          <div className="container mx-auto px-4 sm:px-8 md:px-20 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div {...motionProps} className="flex items-center justify-center gap-3">
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                    <Search className="w-4 h-4 text-muted-foreground" />
                </div>
                <h2 className="font-headline font-semibold text-2xl md:text-3xl text-foreground">
                  Design Process &amp; Strategic Solutions
                </h2>
              </motion.div>
              <motion.p
                {...motionProps}
                transition={{ ...motionProps.transition, delay: 0.1 }}
                className="font-headline text-4xl md:text-5xl font-semibold text-primary leading-snug md:leading-relaxed mt-8"
              >
                Our strategy focused on translating complex vehicle data into trust-building, actionable intelligence through two key experience enhancers:
              </motion.p>
            </div>
          </div>
        </section>
        
        {/* Dummy Slide 8 */}
        <section className="py-24 md:py-32 bg-background">
          <div className="container mx-auto px-4 sm:px-8 md:px-20">
            <div className="w-full h-[60vh] bg-muted rounded-2xl flex items-center justify-center">
              <p className="text-muted-foreground">Dummy Slide</p>
            </div>
          </div>
        </section>

        {/* Solving Range Anxiety Section */}
        <section className="py-24 md:py-32 bg-background text-foreground">
          <div className="container mx-auto px-4 sm:px-8 md:px-20">
            <div className="max-w-4xl mx-auto">
              <motion.h2
                {...motionProps}
                className="font-headline font-semibold text-3xl md:text-4xl text-foreground mb-12"
              >
                Solving Range Anxiety (Resource Findability):
              </motion.h2>
              <ul className="space-y-8">
                {rangeAnxietySolutions.map((solution, index) => (
                  <motion.li
                    key={index}
                    {...motionProps}
                    transition={{ ...motionProps.transition, delay: 0.1 * (index + 1) }}
                    className="flex items-start"
                  >
                    <span className="text-primary mr-4 mt-1">&#8226;</span>
                    <p className="text-lg md:text-xl text-muted-foreground">
                      <span className="font-semibold text-primary">{solution.title}: </span>
                      {solution.description}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Dummy Slide 10 */}
        <section className="py-24 md:py-32 bg-background">
          <div className="container mx-auto px-4 sm:px-8 md:px-20">
            <div className="w-full h-[60vh] bg-muted rounded-2xl flex items-center justify-center">
              <p className="text-muted-foreground">Dummy Slide</p>
            </div>
          </div>
        </section>

        {/* Dummy Slide 11 */}
        <section className="py-24 md:py-32 bg-background">
          <div className="container mx-auto px-4 sm:px-8 md:px-20">
            <div className="w-full h-[60vh] bg-muted rounded-2xl flex items-center justify-center">
              <p className="text-muted-foreground">Dummy Slide</p>
            </div>
          </div>
        </section>

        {/* Driving Safer Behaviour & Trust Section */}
        <section className="py-24 md:py-32 bg-background text-foreground">
          <div className="container mx-auto px-4 sm:px-8 md:px-20">
            <div className="max-w-4xl mx-auto">
              <motion.h2
                {...motionProps}
                className="font-headline font-semibold text-3xl md:text-4xl text-foreground mb-12"
              >
                Driving Safer Behaviour &amp; Trust (Maintenance &amp; Tips):
              </motion.h2>
              <ul className="space-y-8">
                {saferBehaviourPoints.map((point, index) => (
                  <motion.li
                    key={index}
                    {...motionProps}
                    transition={{ ...motionProps.transition, delay: 0.1 * (index + 1) }}
                    className="flex items-start"
                  >
                    <span className="text-primary mr-4 mt-1">&#8226;</span>
                    <p className="text-lg md:text-xl text-muted-foreground">
                      <span className="font-semibold text-primary">{point.title}: </span>
                      {point.description}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Dummy Slide 13 */}
        <section className="py-24 md:py-32 bg-background">
          <div className="container mx-auto px-4 sm:px-8 md:px-20">
            <div className="w-full h-[60vh] bg-muted rounded-2xl flex items-center justify-center">
              <p className="text-muted-foreground">Dummy Slide</p>
            </div>
          </div>
        </section>

        {/* Dummy Slide 14 */}
        <section className="py-24 md:py-32 bg-background">
          <div className="container mx-auto px-4 sm:px-8 md:px-20">
            <div className="w-full h-[60vh] bg-muted rounded-2xl flex items-center justify-center">
              <p className="text-muted-foreground">Dummy Slide</p>
            </div>
          </div>
        </section>

        {/* Quantifiable Outcomes & Impact Section */}
        <section className="py-24 md:py-32 bg-background text-foreground">
            <div className="container mx-auto px-4 sm:px-8 md:px-20">
                <div className="max-w-4xl mx-auto">
                    <motion.div {...motionProps} className="flex items-center gap-4 mb-4">
                        <TrendingUp className="w-8 h-8 text-primary" />
                        <h2 className="font-headline font-semibold text-3xl md:text-4xl text-foreground">
                        Quantifiable Outcomes & Impact
                        </h2>
                    </motion.div>
                    <motion.p
                        {...motionProps}
                        transition={{ ...motionProps.transition, delay: 0.1 }}
                        className="text-lg md:text-xl text-muted-foreground mb-16"
                    >
                        The strategic, data-driven design interventions resulted in the following measurable customer and business impact.
                    </motion.p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div {...motionProps} transition={{ ...motionProps.transition, delay: 0.2 }}>
                            <Card className="bg-card border-border p-6 h-full flex flex-col">
                                <CardHeader className="p-0">
                                <CardTitle className="font-headline text-lg text-muted-foreground">Charging Efficiency</CardTitle>
                                </CardHeader>
                                <CardContent className="p-0 mt-4 flex-grow flex flex-col justify-center">
                                    <p className="font-headline font-bold text-5xl md:text-6xl text-primary">50%</p>
                                    <p className="text-lg text-foreground mt-2">Reduction in the average time to locate a charging station.</p>
                                    <p className="text-base text-muted-foreground mt-4">Directly reduced Range Anxiety and improved trip planning.</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                        <motion.div {...motionProps} transition={{ ...motionProps.transition, delay: 0.3 }}>
                            <Card className="bg-card border-border p-6 h-full flex flex-col">
                                <CardHeader className="p-0">
                                <CardTitle className="font-headline text-lg text-muted-foreground">Customer Retention</CardTitle>
                                </CardHeader>
                                <CardContent className="p-0 mt-4 flex-grow flex flex-col justify-center">
                                    <p className="font-headline font-bold text-5xl md:text-6xl text-primary">20%</p>
                                    <p className="text-lg text-foreground mt-2">Increase in re-subscription rates.</p>
                                    <p className="text-base text-muted-foreground mt-4">Validated the strategy of building trust through transparent ownership.</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>


      </main>
      <Footer />
    </div>
  );
}
