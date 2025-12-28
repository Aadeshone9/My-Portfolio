'use client';
import Header from '@/components/Header';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import SplitText from '@/components/SplitText';
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
  const heroImage = PlaceHolderImages.find(p => p.id === 'vida-hero');
  const image1 = PlaceHolderImages.find(p => p.id === 'project-image-1');
  const image2 = PlaceHolderImages.find(p => p.id === 'project-image-2');
  const image3 = PlaceHolderImages.find(p => p.id === 'project-image-3');
  const image4 = PlaceHolderImages.find(p => p.id === 'project-image-4');
  const image5 = PlaceHolderImages.find(p => p.id === 'project-image-5');
  const image6 = PlaceHolderImages.find(p => p.id === 'project-image-6');
  const image7 = PlaceHolderImages.find(p => p.id === 'project-image-7');
  const image8 = PlaceHolderImages.find(p => p.id === 'project-image-8');
  const image9 = PlaceHolderImages.find(p => p.id === 'project-image-9');

  return (
    <div className="bg-black text-white">
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
                    className="font-headline font-semibold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mt-2"
                >
                    Driving Loyalty & Efficiency in EV Mobility with VIDA
                </motion.h1>
            </div>
        </section>

        {/* Intro Section */}
        <section className="py-24 md:py-40 bg-black">
            <div className="container mx-auto px-4 sm:px-8 md:px-20">
                 <motion.div {...motionProps} className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20 text-white/90">
                    <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-white/60">Project Type</h3>
                    <p className="text-lg mt-2">Behavioural UX case Study</p>
                    </div>
                    <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-white/60">Stage</h3>
                    <p className="text-lg mt-2">Research to Launch</p>
                    </div>
                    <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-white/60">Deliverables</h3>
                    <p className="text-lg mt-2">Product Strategy, UX, Visual design</p>
                    </div>
                </motion.div>
                <motion.div {...motionProps} transition={{...motionProps.transition, delay: 0.2}} className='mt-24 max-w-4xl'>
                    <h2 className="font-headline font-semibold text-xl md:text-2xl text-white">Project Focus</h2>
                    <p className="text-white/80 text-lg md:text-xl leading-relaxed mt-4">
                        End-to-end connected vehicle platform experience for the launch of the Vida EV.
                    </p>
                </motion.div>
            </div>
        </section>

        {/* Challenge, Role, Goal Section */}
        <section className="py-24 md:py-40 bg-black">
            <div className="container mx-auto px-4 sm:px-8 md:px-20">
                <motion.div {...motionProps} className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                    <div className="max-w-lg">
                        <h2 className="font-headline font-semibold text-3xl md:text-4xl text-white">The Challenge</h2>
                        <p className="text-white/80 text-lg md:text-xl leading-relaxed mt-6">
                        Build a world-class platform to empower EV adoption and drive large-scale sustainable practices, focusing on customer Lifetime Value.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-12">
                         <div>
                            <h3 className="font-headline font-semibold text-2xl md:text-3xl text-white">My Role</h3>
                            <p className="text-white/80 text-lg md:text-xl leading-relaxed mt-4">
                                Consultant : CX & UX Design
                            </p>
                        </div>
                        <div>
                            <h3 className="font-headline font-semibold text-2xl md:text-3xl text-white">Primary Goal</h3>
                            <p className="text-white/80 text-lg md:text-xl leading-relaxed mt-4">
                                Build a world-class platform to empower EV adoption and drive large-scale sustainable practices, focusing on customer Lifetime Value (LTV).
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>

        {/* Image Grid 1 */}
        <section className="py-10 bg-black">
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
        <section className="py-10 bg-black">
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
        <section className="py-10 bg-black">
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
        <section className="py-10 bg-black">
             {image4 && (
                <motion.div {...motionProps} className="h-[90vh] w-full relative">
                    <Image src={image4.imageUrl} alt={image4.description} fill className="object-cover" data-ai-hint={image4.imageHint}/>
                </motion.div>
            )}
        </section>
        
        {/* Result Section */}
        <section className="py-24 md:py-48 bg-black">
            <motion.div {...motionProps} className="container mx-auto px-4 sm:px-8 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
                <div>
                    <h2 className="font-headline font-semibold text-3xl md:text-4xl text-white">The Result</h2>
                    <p className="text-white/80 text-lg md:text-xl leading-relaxed mt-4">
                        The result is a more intuitive and personalized Headspace experience. By focusing on user intent and context, we designed a system that surfaces the right content at the right time, helping users build a consistent mindfulness practice that fits their life.
                    </p>
                    <Button variant="link" className="group mt-12 px-0 text-white text-lg hover:text-primary">
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
