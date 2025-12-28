'use client';
import Header from '@/components/Header';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

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
                />
            )}
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 container mx-auto px-4 sm:px-8 md:px-20 flex flex-col justify-end pb-20">
                <motion.p 
                    {...motionProps}
                    className="font-headline font-semibold text-lg md:text-xl text-white/80"
                >
                    Behavioural UX case Study
                </motion.p>
                <motion.h1 
                    {...motionProps}
                    transition={{ ...motionProps.transition, delay: 0.1 }}
                    className="font-headline font-semibold text-4xl md:text-5xl lg:text-6xl text-white leading-tight"
                >
                   Driving Loyalty & Efficiency in 
                </motion.h1>
                 <motion.h1 
                    {...motionProps}
                    transition={{ ...motionProps.transition, delay: 0.2 }}
                    className="font-headline font-semibold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mt-4"
                >
                   EV Mobility with VIDA
                </motion.h1>
            </div>
        </section>

        {/* Contribution Section */}
        <section className="py-24 md:py-40 bg-background text-foreground relative">
            <div className="container mx-auto px-4 sm:px-8 md:px-20 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl">
                    <div className="space-y-12">
                        <motion.div {...motionProps}>
                            <h2 className="font-headline font-semibold text-3xl md:text-4xl text-foreground">Contribution in Project</h2>
                            <p className="text-primary text-lg md:text-xl leading-relaxed mt-4">Research, Strategy, Design, Design System</p>
                        </motion.div>
                        <motion.div {...motionProps} transition={{ ...motionProps.transition, delay: 0.1 }}>
                            <h2 className="font-headline font-semibold text-3xl md:text-4xl text-foreground">My Role</h2>
                            <p className="text-primary text-lg md:text-xl leading-relaxed mt-4">Consultant: CX & UX Design</p>
                        </motion.div>
                    </div>
                     <div className="space-y-12">
                        <motion.div {...motionProps} transition={{ ...motionProps.transition, delay: 0.2 }}>
                            <h2 className="font-headline font-semibold text-3xl md:text-4xl text-foreground">Project Focus</h2>
                            <p className="text-primary text-lg md:text-xl leading-relaxed mt-4">End-to-end connected vehicle platform experience for the launch of the Vida EV.</p>
                        </motion.div>
                        <motion.div {...motionProps} transition={{ ...motionProps.transition, delay: 0.3 }}>
                            <h2 className="font-headline font-semibold text-3xl md:text-4xl text-foreground">Primary Goal</h2>
                            <p className="text-primary text-lg md:text-xl leading-relaxed mt-4">Build a world-class platform to empower EV adoption and drive large-scale sustainable practices, focusing on customer Lifetime Value (LTV).</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
        
        {/* Image Grid 1 */}
        <section className="py-10 bg-background">
            <div className="container mx-auto px-4 sm:px-8 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-10">
                {image1 && (
                    <motion.div {...motionProps} className="aspect-[2/3] relative rounded-lg overflow-hidden">
                         <Image src={image1.imageUrl} alt={image1.description} fill className="object-cover" data-ai-hint={image1.imageHint}/>
                    </motion.div>
                )}
                 {image2 && (
                    <motion.div {...motionProps} transition={{...motionProps.transition, delay: 0.1}} className="aspect-[4/3] relative rounded-lg overflow-hidden">
                         <Image src={image2.imageUrl} alt={image2.description} fill className="object-cover" data-ai-hint={image2.imageHint}/>
                    </motion.div>
                )}
            </div>
        </section>

        {/* Image Grid 2 */}
        <section className="py-10 bg-background">
             <div className="container mx-auto px-4 sm:px-8 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-10">
                 {image6 && (
                    <motion.div {...motionProps} className="aspect-[4/3] relative rounded-lg overflow-hidden">
                         <Image src={image6.imageUrl} alt={image6.description} fill className="object-cover" data-ai-hint={image6.imageHint}/>
                    </motion.div>
                )}
                {image5 && (
                    <motion.div {...motionProps} transition={{...motionProps.transition, delay: 0.1}} className="aspect-[4/3] relative rounded-lg overflow-hidden">
                         <Image src={image5.imageUrl} alt={image5.description} fill className="object-cover" data-ai-hint={image5.imageHint}/>
                    </motion.div>
                )}
                <div />
            </div>
        </section>
        
        {/* Image Grid 3 */}
        <section className="py-10 bg-background">
             <div className="container mx-auto px-4 sm:px-8 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-10">
                 {image8 && (
                    <motion.div {...motionProps} className="aspect-[4/3] relative rounded-lg overflow-hidden">
                         <Image src={image8.imageUrl} alt={image8.description} fill className="object-cover" data-ai-hint={image8.imageHint}/>
                    </motion.div>
                )}
                {image7 && (
                    <motion.div {...motionProps} transition={{...motionProps.transition, delay: 0.1}} className="aspect-[2/3] relative rounded-lg overflow-hidden row-span-2">
                         <Image src={image7.imageUrl} alt={image7.description} fill className="object-cover" data-ai-hint={image7.imageHint}/>
                    </motion.div>
                )}
                {image9 && (
                    <motion.div {...motionProps} transition={{...motionProps.transition, delay: 0.2}} className="aspect-[4/3] relative rounded-lg overflow-hidden">
                         <Image src={image9.imageUrl} alt={image9.description} fill className="object-cover" data-ai-hint={image9.imageHint}/>
                    </motion.div>
                )}
            </div>
        </section>

        {/* Full width image */}
        <section className="py-10 bg-background">
             {image4 && (
                <motion.div {...motionProps} className="h-[90vh] w-full relative">
                    <Image src={image4.imageUrl} alt={image4.description} fill className="object-cover" data-ai-hint={image4.imageHint}/>
                </motion.div>
            )}
        </section>
        
        {/* Result Section */}
        <section className="py-24 md:py-48 bg-background">
            <motion.div {...motionProps} className="container mx-auto px-4 sm:px-8 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
                <div>
                    <h2 className="font-headline font-semibold text-3xl md:text-4xl text-foreground">The Result</h2>
                    <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mt-4">
                        The result is a more intuitive and personalized Headspace experience. By focusing on user intent and context, we designed a system that surfaces the right content at the right time, helping users build a consistent mindfulness practice that fits their life.
                    </p>
                    <Button variant="link" className="group mt-12 px-0 text-lg hover:text-primary text-primary">
                        View Live Site
                    </Button>
                </div>
                 {image3 && (
                    <motion.div {...motionProps} transition={{...motionProps.transition, delay: 0.2}} className="aspect-[2/3] relative rounded-lg overflow-hidden">
                         <Image src={image3.imageUrl} alt={image3.description} fill className="object-cover" data-ai-hint={image3.imageHint}/>
                    </motion.div>
                )}
            </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
