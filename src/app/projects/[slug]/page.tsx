
'use client';
import Header from '@/components/Header';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import SplitText from '@/components/SplitText';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const testimonials = [
    {
      quote: "It's like having a little pocket of peace with me at all times. I've never felt more centered.",
      author: 'Aarav Sharma'
    },
    {
      quote: "The sleep stories are magical. I'm sleeping better than I have in years. Highly recommended!",
      author: 'Priya Patel'
    },
    {
      quote: 'I was skeptical at first, but the guided meditations have genuinely reduced my daily stress levels.',
      author: 'Rohan Mehta'
    },
    {
      quote: "A beautiful, intuitive app that makes mindfulness accessible to everyone. It's a game-changer.",
      author: 'Ananya Rao'
    },
     {
      quote: "The focus exercises helped me get through my finals. I couldn't have done it without Headspace.",
      author: 'Vikram Singh'
    },
  ];

const motionProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: "easeOut" },
};

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const heroImage = PlaceHolderImages.find(p => p.id === 'headspace-hero');
  const challengeImage = PlaceHolderImages.find(p => p.id === 'headspace-challenge');
  
  const galleryImages = [
    PlaceHolderImages.find(p => p.id === 'headspace-gallery-1'),
    PlaceHolderImages.find(p => p.id === 'headspace-gallery-2'),
    PlaceHolderImages.find(p => p.id === 'headspace-gallery-3'),
  ].filter(Boolean);

  const articlesImage = PlaceHolderImages.find(p => p.id === 'headspace-articles');
  const resultFaceImage = PlaceHolderImages.find(p => p.id === 'headspace-result-face');
  const finalDesignImage1 = PlaceHolderImages.find(p => p.id === 'headspace-final-design-1');
  const finalDesignImage2 = PlaceHolderImages.find(p => p.id === 'headspace-final-design-2');
  const visualImage1 = PlaceHolderImages.find(p => p.id === 'headspace-visual-1');
  const visualImage2 = PlaceHolderImages.find(p => p.id === 'headspace-visual-2');
  const vdlImage1 = PlaceHolderImages.find(p => p.id === 'headspace-vdl-1');
  const vdlImage2 = PlaceHolderImages.find(p => p.id === 'headspace-vdl-2');
  const testimonialBgImage = PlaceHolderImages.find(p => p.id === 'headspace-testimonial-bg');


  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-background py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-8 md:px-20 text-center">
                <SplitText
                    text="Driving Loyalty & Efficiency in EV Mobility with VIDA"
                    tag="h1"
                    className="font-headline font-semibold text-4xl md:text-6xl lg:text-7xl leading-tight tracking-wide"
                />
                {heroImage && (
                    <motion.div {...motionProps} className="relative w-full max-w-4xl mx-auto h-[300px] md:h-[500px] rounded-2xl overflow-hidden mt-12">
                    <Image
                        src={heroImage.imageUrl}
                        alt={heroImage.description}
                        fill
                        className="object-contain"
                        data-ai-hint={heroImage.imageHint}
                    />
                    </motion.div>
                )}
            </div>
        </section>

        {/* Challenge Section */}
        <section className="py-16 md:py-24 bg-background">
            <motion.div {...motionProps} className="container mx-auto px-4 sm:px-8 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
                <div>
                    <h2 className="font-headline font-semibold text-3xl md:text-4xl text-foreground">The Challenge</h2>
                    <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mt-4">
                    Headspace, the global leader in mindfulness and meditation, had a mission to improve the health and happiness of the world. But with over 70 million users, they faced the challenge of keeping the experience fresh, personal, and engaging. We helped them move beyond a one-size-fits-all approach to a more dynamic and personalized user journey.
                    </p>
                    <div className="mt-8">
                        <h3 className="font-headline font-semibold text-2xl text-foreground">My Role</h3>
                        <ul className="list-disc list-inside text-muted-foreground text-lg md:text-xl leading-relaxed mt-4 space-y-2">
                            <li>Lead UX Researcher</li>
                            <li>User Interview & Synthesis</li>
                            <li>Workshop Facilitation</li>
                            <li>Design Strategy</li>
                        </ul>
                    </div>
                </div>
                 {challengeImage && (
                    <div className="relative w-full h-[300px] md:h-[450px] rounded-2xl overflow-hidden">
                        <Image
                            src={challengeImage.imageUrl}
                            alt={challengeImage.description}
                            fill
                            className="object-cover"
                            data-ai-hint={challengeImage.imageHint}
                        />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                )}
            </motion.div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 sm:px-8 md:px-20">
                <motion.div {...motionProps} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {galleryImages.map((img, index) => img && (
                    <div key={index} className="relative w-full aspect-square bg-muted rounded-2xl overflow-hidden">
                        <Image
                        src={img.imageUrl}
                        alt={img.description}
                        fill
                        className="object-cover"
                        data-ai-hint={img.imageHint}
                        />
                    </div>
                    ))}
                </motion.div>
            </div>
        </section>
        
        {/* All Articles Section */}
        {articlesImage && (
             <section className="py-16 md:py-24 bg-card">
                <motion.div {...motionProps} className="container mx-auto px-4 sm:px-8 md:px-20 text-center">
                     <SplitText
                        text="All articles"
                        tag="h2"
                        className="font-headline font-semibold text-4xl md:text-6xl text-foreground"
                    />
                    <div className="relative w-full h-[300px] md:h-[600px] rounded-2xl overflow-hidden mt-12">
                        <Image
                            src={articlesImage.imageUrl}
                            alt={articlesImage.description}
                            fill
                            className="object-contain"
                            data-ai-hint={articlesImage.imageHint}
                        />
                    </div>
                </motion.div>
            </section>
        )}

        {/* Result Section */}
        <section className="py-16 md:py-24 bg-background">
            <motion.div {...motionProps} className="container mx-auto px-4 sm:px-8 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
                <div>
                    <h2 className="font-headline font-semibold text-3xl md:text-4xl text-foreground">The Result</h2>
                    <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mt-4">
                        The result is a more intuitive and personalized Headspace experience. By focusing on user intent and context, we designed a system that surfaces the right content at the right time, helping users build a consistent mindfulness practice that fits their life.
                    </p>
                    <Button variant="link" className="group mt-8 px-0 text-foreground text-lg hover:text-primary">
                        View Live Site
                    </Button>
                </div>
                {resultFaceImage && (
                    <div className="relative w-full aspect-square max-w-sm mx-auto">
                        <Image
                            src={resultFaceImage.imageUrl}
                            alt={resultFaceImage.description}
                            fill
                            className="object-contain"
                            data-ai-hint={resultFaceImage.imageHint}
                        />
                    </div>
                )}
            </motion.div>
        </section>

        {/* Final Design Section */}
        <section className="py-16 md:py-24 bg-card">
            <motion.div {...motionProps} className="container mx-auto px-4 sm:px-8 md:px-20">
                <div className="text-center">
                     <SplitText
                        text="Final design"
                        tag="h2"
                        className="font-headline font-semibold text-4xl md:text-6xl text-foreground"
                    />
                     <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mt-4">
                        We developed a dynamic content system that adapts to user's goals, from managing stress to improving sleep.
                    </p>
                </div>
                <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-8">
                    {finalDesignImage1 && (
                        <div className="relative w-full max-w-[250px] h-[500px]">
                             <Image
                                src={finalDesignImage1.imageUrl}
                                alt={finalDesignImage1.description}
                                fill
                                className="object-contain"
                                data-ai-hint={finalDesignImage1.imageHint}
                            />
                        </div>
                    )}
                     {finalDesignImage2 && (
                        <div className="relative w-48 h-48">
                             <Image
                                src={finalDesignImage2.imageUrl}
                                alt={finalDesignImage2.description}
                                fill
                                className="object-contain"
                                data-ai-hint={finalDesignImage2.imageHint}
                            />
                        </div>
                    )}
                </div>
            </motion.div>
        </section>
        
        {/* Visuals Section */}
        <section className="py-16 md:py-24 bg-background">
             <motion.div {...motionProps} className="container mx-auto px-4 sm:px-8 md:px-20">
                 <div className="text-center mb-12">
                     <h2 className="font-headline font-semibold text-3xl md:text-4xl text-foreground">The Visuals</h2>
                      <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mt-4">
                        The visual language of Headspace is a key part of its appeal. We worked to evolve the existing brand, introducing new layouts, typographic styles, and interactive elements to create a more engaging and cohesive experience across the platform.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {visualImage1 && (
                         <div className="relative w-full h-[300px] md:h-[450px] bg-muted rounded-2xl overflow-hidden">
                            <Image
                                src={visualImage1.imageUrl}
                                alt={visualImage1.description}
                                fill
                                className="object-cover"
                                data-ai-hint={visualImage1.imageHint}
                            />
                        </div>
                    )}
                    {visualImage2 && (
                         <div className="relative w-full h-[300px] md:h-[450px] bg-muted rounded-2xl overflow-hidden">
                            <Image
                                src={visualImage2.imageUrl}
                                alt={visualImage2.description}
                                fill
                                className="object-cover"
                                data-ai-hint={visualImage2.imageHint}
                            />
                        </div>
                    )}
                </div>
            </motion.div>
        </section>

         {/* Visual Design Language Section */}
        <section className="py-16 md:py-24 bg-card">
            <motion.div {...motionProps} className="container mx-auto px-4 sm:px-8 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                 {vdlImage1 && (
                    <div className="relative w-full h-96 bg-[#F9C900] rounded-2xl overflow-hidden p-8 flex items-center justify-center">
                        <div className="relative w-48 h-80">
                         <Image
                            src={vdlImage1.imageUrl}
                            alt={vdlImage1.description}
                            fill
                            className="object-contain"
                            data-ai-hint={vdlImage1.imageHint}
                        />
                        </div>
                    </div>
                )}
                 <div>
                    <h2 className="font-headline font-semibold text-3xl md:text-4xl text-foreground">Visual Design Language</h2>
                     <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mt-4">
                        Our goal was to create a design system that felt friendly, accessible, and unmistakably Headspace. We established a clear typography system, a versatile color palette, and a library of reusable components that allowed for consistency and scalability.
                    </p>
                     {vdlImage2 && (
                        <div className="relative w-full h-48 mt-8">
                             <Image
                                src={vdlImage2.imageUrl}
                                alt={vdlImage2.description}
                                fill
                                className="object-contain"
                                data-ai-hint={vdlImage2.imageHint}
                            />
                        </div>
                    )}
                </div>
            </motion.div>
        </section>


        {/* Testimonials Section */}
        <section className="relative py-16 md:py-36 bg-background">
             {testimonialBgImage && (
                <Image
                    src={testimonialBgImage.imageUrl}
                    alt={testimonialBgImage.description}
                    fill
                    className="object-cover opacity-10 dark:opacity-5"
                    data-ai-hint={testimonialBgImage.imageHint}
                />
             )}
            <div className="relative container mx-auto px-4 sm:px-8 md:px-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                     {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg p-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <p className="text-foreground">"{item.quote}"</p>
                            <p className="text-muted-foreground text-sm mt-4">- {item.author}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
