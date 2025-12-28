'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Search, Target, TrendingUp, ShieldCheck, Navigation, Phone, MapPin, BarChartBig, Lightbulb, Users, Cog, Ear, Cloud, UserCheck, CheckCircle, Package, UserPlus, FileText, Bell, Route, Shield, Fence } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SplitText from '@/components/SplitText';

const motionProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" },
};

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const heroImage = PlaceHolderImages.find(p => p.id === 'uber-hero');
  const projectImage1 = PlaceHolderImages.find(p => p.id === 'project1-image-1');
  const projectImage2 = PlaceHolderImages.find(p => p.id === 'project1-image-2');
  const projectImage3 = PlaceHolderImages.find(p => p.id === 'project1-image-3');
  const projectImage4 = PlaceHolderImages.find(p => p.id === 'project1-image-4');
  const projectImage5 = PlaceHolderImages.find(p => p.id === 'project1-image-5');
  const projectImage6 = PlaceHolderImages.find(p => p.id === 'project1-image-6');
  

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

  const experienceEnhancers = [
    {
      icon: <Package className="w-8 h-8 text-primary" />,
      title: 'Services and Subscriptions',
      description: 'Drive subscriptions and show value with contextual nudges for pre-paid services.',
    },
    {
      icon: <FileText className="w-8 h-8 text-primary" />,
      title: 'Reports and Analytics',
      description: 'Provided client with performance data tracking, analytics, and insightful reports.',
    },
    {
      icon: <Navigation className="w-8 h-8 text-primary" />,
      title: 'Tailored Navigation',
      description: 'Personalized navigation to increase user engagement.',
    },
    {
      icon: <Phone className="w-8 h-8 text-primary" />,
      title: 'Roadside Assistance',
      description: 'Dependable roadside assistance for emergencies and breakdowns.',
    },
    {
      icon: <Route className="w-8 h-8 text-primary" />,
      title: 'Custom Riding Mode',
      description: 'Streamline journeys with our centralized route planner and access.',
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: 'Priority Safety and Security',
      description: 'Enhanced user control and visibility of vehicle usage and status for safer and more secure driving.',
    },
    {
      icon: <Fence className="w-8 h-8 text-primary" />,
      title: 'Geo-Fencing',
      description: 'Boost sales by offering informative content to aid decision-making on website and app.',
    },
  ];

    const keyLearnings = [
    {
      title: 'Contextual Data',
      description: 'Successfully driving behavior requires translating data into immediate, actionable tips, not just presenting raw numbers.',
    },
    {
      title: 'Trust as a Feature',
      description: 'In the EV market, providing transparency in maintenance and verified information is the foundational feature that prevents churn.',
    },
    {
      title: 'Iteration is Impact',
      description: 'Simple changes, like refining the information hierarchy of the charging card based on feedback, can yield outsized results (the 50% efficiency gain) in critical, high-anxiety user flows.',
    },
  ];

  const customerExperienceImpact = [
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: 'The Bigger Picture',
      description:
        'Empowering users to engage and participate in a larger community for a sense of inclusivity and involvement.',
    },
    {
      icon: <Cog className="w-8 h-8 text-primary" />,
      title: 'Easy and Quick Maintenance',
      description:
        'Using an advanced system that proactively alerts users of potential issues and simplifies maintenance with easy booking, door-to-door pickup and drop-off, and other convenient services.',
    },
    {
      icon: <Ear className="w-8 h-8 text-primary" />,
      title: 'Assistance and Support',
      description:
        "Providing a comprehensive and supportive experience as a dependable companion for the user's journey.",
    },
    {
      icon: <Cloud className="w-8 h-8 text-primary" />,
      title: 'Eco-friendly Tools',
      description:
        "Promoting eco-conscious choices by displaying users' eco-footprint as earth points, creating awareness, and offering brands an opportunity to make a positive impact in e-commerce.",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-primary" />,
      title: 'Hassle Free Ownership',
      description:
        'Leveraging intelligent technology for personalized and relevant recommendations and insights, delivering a smooth and effortless ownership experience.',
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
            <SplitText
              tag="p"
              text="Behavioural UX case Study"
              className="font-headline font-semibold text-lg md:text-xl text-white/80"
              textAlign='left'
            />
            <SplitText
              tag="h1"
              text="Driving Loyalty & Efficiency in"
              className="font-headline font-semibold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mt-4"
              textAlign='left'
            />
            <SplitText
              tag="h1"
              text="EV Mobility with VIDA"
              className="font-headline font-semibold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mt-2"
              textAlign='left'
            />
          </div>
        </section>

        {/* Contribution Section */}
        <section className="py-20 md:py-24 bg-background text-foreground relative">
          <div className="container mx-auto px-4 sm:px-8 md:px-20 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
              <motion.div {...motionProps}>
                <SplitText 
                  tag="h2" 
                  text="My Contribution"
                  className="font-headline font-semibold text-xl md:text-2xl text-foreground" 
                  textAlign='left'
                />
                 <div className="text-primary text-lg md:text-xl leading-relaxed mt-4">
                  <p>UX Research</p>
                  <p>User Journeys</p>
                  <p>Strategy & Design Conceptualisation</p>
                  <p>Design System</p>
                </div>
              </motion.div>
              <motion.div {...motionProps} transition={{ ...motionProps.transition, delay: 0.1 }}>
                <SplitText 
                  tag="h2"
                  text="My Role"
                  className="font-headline font-semibold text-xl md:text-2xl text-foreground"
                  textAlign='left'
                />
                <SplitText
                  tag="p"
                  text="Consultant: CX & UX Design"
                  className="text-primary text-lg md:text-xl leading-relaxed mt-4"
                  textAlign='left'
                  splitType='words'
                />
              </motion.div>
              <motion.div {...motionProps} transition={{ ...motionProps.transition, delay: 0.2 }}>
                <SplitText
                  tag="h2"
                  text="Project Focus"
                  className="font-headline font-semibold text-xl md:text-2xl text-foreground"
                  textAlign='left'
                />
                <SplitText
                  tag="p"
                  text="End-to-end connected vehicle platform experience for the launch of the Vida EV."
                  className="text-primary text-lg md:text-xl leading-relaxed mt-4"
                  textAlign='left'
                  splitType='words'
                />
              </motion.div>
               <motion.div {...motionProps} transition={{ ...motionProps.transition, delay: 0.3 }}>
                <SplitText
                  tag="h2"
                  text="Primary Goal"
                  className="font-headline font-semibold text-xl md:text-2xl text-foreground"
                  textAlign='left'
                />
                <SplitText
                  tag="p"
                  text="Build a world-class platform to empower EV adoption and drive large-scale sustainable practices, focusing on customer Lifetime Value (LTV)."
                  className="text-primary text-lg md:text-xl leading-relaxed mt-4"
                  textAlign='left'
                  splitType='words'
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Key Outcomes Section */}
        <section className="py-20 md:py-24 bg-background text-foreground relative">
            <div className="container mx-auto px-4 sm:px-8 md:px-20 relative">
                <SplitText 
                    tag="h2"
                    text="Key Outcomes"
                    className="font-headline font-semibold text-3xl md:text-4xl text-foreground mb-16"
                    textAlign='left'
                />
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
        <section className="py-20 md:py-24 bg-background text-foreground relative">
          <div className="container mx-auto px-4 sm:px-8 md:px-20 relative z-10">
            <div className="max-w-4xl">
              <motion.div {...motionProps} className="flex items-center gap-4">
                <Target className="w-8 h-8 text-primary" />
                 <SplitText
                  tag="h2"
                  text="Problem Definition & Strategic Gap"
                  className="font-headline font-semibold text-2xl md:text-3xl text-foreground"
                  textAlign='left'
                />
              </motion.div>
              <SplitText
                tag="p"
                text="Our research identified significant gaps in the emerging EV market that fueled user anxiety and distrust."
                splitType="words"
                className="font-headline text-4xl md:text-5xl font-semibold text-primary leading-snug md:leading-relaxed mt-8"
                textAlign='left'
              />
            </div>
          </div>
        </section>

        {/* Core Design Challenge Section */}
        <section className="py-20 md:py-24 bg-background text-foreground relative">
          <div className="container mx-auto px-4 sm:px-8 md:px-20 relative z-10">
            <div className="max-w-4xl mx-auto">
              <SplitText 
                tag="h2" 
                text="This led to our core design challenge:"
                className="font-headline font-semibold text-3xl md:text-4xl text-foreground mb-12"
                textAlign='left'
              />
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

        <section className="py-10 md:py-12 bg-background">
            <div className="container mx-auto px-4 sm:px-8 md:px-20 grid grid-cols-1 gap-8">
                {projectImage1 && (
                    <motion.div {...motionProps} className="w-full aspect-[16/9] relative rounded-2xl overflow-hidden bg-muted">
                        <Image
                            src={projectImage1.imageUrl}
                            alt={projectImage1.description}
                            fill
                            className="object-contain"
                            data-ai-hint={projectImage1.imageHint}
                        />
                    </motion.div>
                )}
            </div>
        </section>

        {/* Design Process & Strategic Solutions Section */}
        <section className="py-20 md:py-24 bg-background text-foreground relative">
          <div className="container mx-auto px-4 sm:px-8 md:px-20 relative z-10">
            <div className="max-w-4xl">
              <motion.div {...motionProps} className="flex items-center gap-4">
                <Search className="w-8 h-8 text-primary" />
                <SplitText
                  tag="h2"
                  text="Design Process & Strategic Solutions"
                  className="font-headline font-semibold text-2xl md:text-3xl text-foreground"
                  textAlign='left'
                />
              </motion.div>
              <SplitText
                tag="p"
                text="Our strategy focused on translating complex vehicle data into trust-building, actionable intelligence through two key experience enhancers:"
                splitType="words"
                className="font-headline text-4xl md:text-5xl font-semibold text-primary leading-snug md:leading-relaxed mt-8"
                textAlign='left'
              />
            </div>
          </div>
        </section>
        
        <section className="py-10 md:py-12 bg-background">
          <div className="container mx-auto px-4 sm:px-8 md:px-20 grid grid-cols-1 gap-8">
             {projectImage2 && (
                <motion.div {...motionProps} className="w-full aspect-video relative rounded-2xl overflow-hidden bg-muted">
                    <Image
                        src={projectImage2.imageUrl}
                        alt={projectImage2.description}
                        fill
                        className="object-contain"
                        data-ai-hint={projectImage2.imageHint}
                    />
                </motion.div>
            )}
          </div>
        </section>

        {/* Solving Range Anxiety Section */}
        <section className="py-20 md:py-24 bg-background text-foreground">
          <div className="container mx-auto px-4 sm:px-8 md:px-20">
            <div className="max-w-4xl mx-auto">
              <SplitText
                tag="h2"
                text="Solving Range Anxiety (Resource Findability):"
                className="font-headline font-semibold text-3xl md:text-4xl text-foreground mb-12"
                textAlign='left'
              />
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

        <section className="py-10 md:py-12 bg-background">
          <div className="container mx-auto px-4 sm:px-8 md:px-20 grid grid-cols-1 gap-8">
             {projectImage3 && (
                <motion.div {...motionProps} className="w-full aspect-video relative rounded-2xl overflow-hidden bg-muted">
                    <Image
                        src={projectImage3.imageUrl}
                        alt={projectImage3.description}
                        fill
                        className="object-contain"
                        data-ai-hint={projectImage3.imageHint}
                    />
                </motion.div>
            )}
          </div>
        </section>

        {/* Driving Safer Behaviour & Trust Section */}
        <section className="py-20 md:py-24 bg-background text-foreground">
          <div className="container mx-auto px-4 sm:px-8 md:px-20">
            <div className="max-w-4xl mx-auto">
              <SplitText
                tag="h2"
                text="Driving Safer Behaviour & Trust (Maintenance & Tips):"
                className="font-headline font-semibold text-3xl md:text-4xl text-foreground mb-12"
                textAlign='left'
              />
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

        <section className="py-10 md:py-12 bg-background">
            <div className="container mx-auto px-4 sm:px-8 md:px-20 grid grid-cols-1 gap-8">
                {projectImage4 && (
                    <motion.div {...motionProps} className="w-full aspect-video relative rounded-2xl overflow-hidden bg-muted">
                        <Image
                            src={projectImage4.imageUrl}
                            alt={projectImage4.description}
                            fill
                            className="object-contain"
                            data-ai-hint={projectImage4.imageHint}
                        />
                    </motion.div>
                )}
            </div>
        </section>
        
        <section className="py-10 md:py-12 bg-background">
            <div className="container mx-auto px-4 sm:px-8 md:px-20 grid grid-cols-1 gap-8">
                {projectImage5 && (
                    <motion.div {...motionProps} className="w-full aspect-video relative rounded-2xl overflow-hidden bg-muted">
                        <Image
                            src={projectImage5.imageUrl}
                            alt={projectImage5.description}
                            fill
                            className="object-contain"
                            data-ai-hint={projectImage5.imageHint}
                        />
                    </motion.div>
                )}
            </div>
        </section>

        <section className="py-10 md:py-12 bg-background">
            <div className="container mx-auto px-4 sm:px-8 md:px-20 grid grid-cols-1 gap-8">
                {projectImage6 && (
                    <motion.div {...motionProps} className="w-full aspect-video relative rounded-2xl overflow-hidden bg-muted">
                        <Image
                            src={projectImage6.imageUrl}
                            alt={projectImage6.description}
                            fill
                            className="object-contain"
                            data-ai-hint={projectImage6.imageHint}
                        />
                    </motion.div>
                )}
            </div>
        </section>


        {/* Quantifiable Outcomes & Impact Section */}
        <section className="py-20 md:py-24 bg-background text-foreground">
            <div className="container mx-auto px-4 sm:px-8 md:px-20">
                <div className="max-w-4xl mx-auto">
                    <motion.div {...motionProps} className="flex items-center gap-4 mb-4">
                        <TrendingUp className="w-8 h-8 text-primary" />
                        <SplitText 
                          tag="h2" 
                          text="Quantifiable Outcomes & Impact"
                          className="font-headline font-semibold text-3xl md:text-4xl text-foreground"
                          textAlign='left'
                        />
                    </motion.div>
                    <SplitText
                        tag="p"
                        text="The strategic, data-driven design interventions resulted in the following measurable customer and business impact."
                        splitType='words'
                        className="text-lg md:text-xl text-muted-foreground mb-16"
                        textAlign='left'
                    />
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

        {/* Key Experience Enhancers Section */}
        <section className="py-20 md:py-24 bg-background text-foreground">
          <div className="container mx-auto px-4 sm:px-8 md:px-20">
            <SplitText
              tag="h2"
              text="Key Experience Enhancers"
              className="font-headline font-semibold text-3xl md:text-4xl text-primary mb-4"
              textAlign='left'
            />
            <SplitText
              tag="p"
              text="A user journey that fulfils user needs and expectations."
              splitType='words'
              className="text-lg md:text-xl text-muted-foreground mb-16 max-w-2xl"
              textAlign='left'
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
              {experienceEnhancers.map((enhancer, index) => (
                <motion.div
                  key={index}
                  {...motionProps}
                  transition={{ ...motionProps.transition, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0">{enhancer.icon}</div>
                  <div>
                    <h3 className="font-headline font-semibold text-xl text-foreground">
                      {enhancer.title}
                    </h3>
                    <p className="text-muted-foreground mt-1">
                      {enhancer.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Learnings & Reflection Section */}
        <section className="py-20 md:py-24 bg-background text-foreground">
          <div className="container mx-auto px-4 sm:px-8 md:px-20">
            <div className="max-w-4xl mx-auto">
              <motion.div {...motionProps} className="flex items-center gap-4 mb-8">
                <Lightbulb className="w-8 h-8 text-primary" />
                <SplitText 
                  tag="h2" 
                  text="Key Learnings & Reflection"
                  className="font-headline font-semibold text-3xl md:text-4xl text-foreground"
                  textAlign='left'
                />
              </motion.div>
              <SplitText
                tag="p"
                text="This project underscored that designing for a new technology requires a focus on trust and context over features."
                splitType='words'
                className="text-lg md:text-xl text-muted-foreground mb-12"
                textAlign='left'
              />
              <ul className="space-y-8">
                {keyLearnings.map((learning, index) => (
                  <motion.li
                    key={index}
                    {...motionProps}
                    transition={{ ...motionProps.transition, delay: 0.2 + index * 0.1 }}
                    className="flex items-start"
                  >
                    <span className="text-primary mr-4 mt-1">&#8226;</span>
                    <p className="text-lg md:text-xl text-muted-foreground">
                      <span className="font-semibold text-foreground">{learning.title}: </span>
                      {learning.description}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Customer Experience Impact Section */}
        <section className="py-20 md:py-24 bg-background text-foreground">
          <div className="container mx-auto px-4 sm:px-8 md:px-20">
            <motion.div {...motionProps} className="max-w-4xl mx-auto mb-16">
              <SplitText
                tag="h2"
                text="Customer Experience Impact"
                className="font-headline font-semibold text-3xl md:text-4xl text-primary mb-4"
                textAlign='left'
              />
              <SplitText
                tag="p"
                text="Performing data analysis to uncover insights and develop effective strategies, collaborating with cross-functional teams for seamless company-wide growth and communication."
                splitType='words'
                className="text-lg md:text-xl text-muted-foreground"
                textAlign='left'
              />
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {customerExperienceImpact.map((item, index) => (
                <motion.div 
                  key={index}
                  {...motionProps} 
                  transition={{...motionProps.transition, delay: 0.2 + (index * 0.1)}}
                  className="bg-card border border-border rounded-2xl p-8 space-y-4"
                >
                  <div className="flex-shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="font-headline font-semibold text-xl text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground mt-1">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="pb-20 container mx-auto px-4 sm:px-8 md:px-20">
          <div className="flex flex-col items-start gap-6">
            <div className="w-[84px] h-[84px] rounded-full bg-primary mb-6"></div>
            <SplitText
              tag="p"
              text="you made it to the end of the scroll! Let's discuss the project in detail."
              className="font-headline font-semibold text-xl md:text-2xl tracking-normal text-muted-foreground"
              textAlign='left'
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
