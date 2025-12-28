'use client';

import Header from '@/components/Header';
import ProjectStack from '@/components/ProjectStack';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import SpotlightCard from '@/components/SpotlightCard';
import SplitText from '@/components/SplitText';
import TiltedCard from '@/components/TiltedCard';
import Approach from '@/components/Approach';
import PillButton from '@/components/PillButton';
import Footer from '@/components/Footer';
import ToolStack from '@/components/ToolStack';
import { motion } from 'framer-motion';
import AnimatedShape from '@/components/AnimatedShape';
import DesignSystemCTA from '@/components/DesignSystemCTA';
import Showreel from '@/components/Showreel';

export default function Home() {
  const mainImage = PlaceHolderImages.find(p => p.id === 'hero-image');
  return (
    <div className="bg-background">
      <Header />
      <main className="flex flex-col">
        <div className="container mx-auto px-4 sm:px-8 md:px-20 pt-16">
            <div className="pb-1 md:pb-2">
              <SplitText 
                text="Hi, I’m Aadesh" 
                tag="h1"
                className="font-headline font-semibold text-5xl md:text-8xl lg:text-[100px] leading-tight tracking-wide text-foreground"
                textAlign="left"
              />
            <SplitText
                text="I have contributed to products at scale, Chances are you've used some!"
                tag="p"
                splitType="words"
                className="font-subtitle text-lg md:text-2xl lg:text-[32px] leading-[28px] md:leading-[34px] lg:leading-[42px] text-muted-foreground max-w-xl mt-4"
                textAlign="left"
              />
            </div>
        </div>

        {mainImage && (
          <div className="pt-16">
            <Showreel
              imageUrl={mainImage.imageUrl}
              alt={mainImage.description}
              aiHint={mainImage.imageHint}
            />
          </div>
        )}

        <section className="py-4 md:py-6">
          <div className="container mx-auto px-4 sm:px:8 md:px-20 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex-1 flex flex-col">
                <SplitText
                  text="/ Recent Projects"
                  tag="h2"
                  className="font-headline font-semibold text-3xl md:text-[32px] leading-snug tracking-[0.02em] text-foreground"
                  textAlign="left"
                />
                <SplitText
                  text="A curated collection of latest Projects i have contributed which reflect my commitment to simplicity, timeless, and purposeful design."
                  tag="p"
                  splitType="words"
                  className="font-subtitle text-lg md:text-2xl lg:text-[32px] leading-[28px] md:leading-[34px] lg:leading-[42px] text-muted-foreground mt-2 max-w-[700px]"
                  textAlign="left"
                />
                </div>
                <PillButton href="/projects" className="group mt-4 md:mt-0 flex-shrink-0">
                    <span className="group-hover:font-semibold">View all Projects</span>
                    <ArrowRight />
                </PillButton>
            </div>
          </div>

          <div className="relative mt-3 md:mt-4">
            <ProjectStack />
          </div>
        </section>

        <section id="know-me-better" className="pt-0.5 pb-0.5 container mx-auto px-4 sm:px-8 md:px-20 scroll-mt-20">
          <div className="flex flex-col items-start gap-4">
            <AnimatedShape shape="square" />
            <SplitText
              text="Know me better..."
              tag="h2"
              className="font-headline font-semibold text-3xl md:text-5xl leading-[58px] tracking-wide text-foreground mt-2"
              textAlign="left"
            />
          </div>
          <div className="w-32 h-[2px] bg-border my-1"></div>
        </section>

        <section className="pt-1 pb-2 container mx-auto px-4 sm:px-8 md:px-20">
           <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="flex flex-col items-start w-full">
                    <SplitText
                      text="/ Let’s break some ice"
                      tag="h2"
                      className="font-headline font-semibold text-2xl md:text-[32px] leading-[58px] tracking-[0.02em] text-foreground flex items-center"
                      textAlign="left"
                    />
                    <div className="mt-2">
                        <SplitText
                            text="I create to solve, and I solve to create."
                            tag="p"
                            splitType="words"
                            className="font-subtitle font-medium text-xl md:text-3xl lg:text-[32px] leading-snug md:leading-[43px] text-muted-foreground"
                            textAlign="left"
                        />
                        <SplitText
                            text="I am a designer, defined by my craft, dedicated to"
                            tag="p"
                            splitType="words"
                            className="font-subtitle font-medium text-xl md:text-3xl lg:text-[32px] leading-[snug] md:leading-[43px] text-muted-foreground"
                            textAlign="left"
                        />
                        <SplitText
                            text="crafting better experiences for my fellow beings."
                            tag="p"
                            splitType="words"
                            className="font-subtitle font-medium text-xl md:text-3xl lg:text-[32px] leading-snug md:leading-[43px] text-muted-foreground"
                            textAlign="left"
                        />
                    </div>
                </div>
            </div>
        </section>

        <section className="py-2">
            <div className="container mx-auto px-4 sm:px-8 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-10">
                <TiltedCard>
                    <div className="bg-background border border-border rounded-3xl p-8 h-full w-full">
                        <h3 className="font-headline font-semibold text-2xl md:text-3xl text-foreground">Visual Roots</h3>
                        <p className="font-subtitle text-lg md:text-xl text-foreground mt-4">
                            With a background in Applied Art and Visual Communication, I bring a rigorous understanding of form, composition, and detail to every pixel.
                        </p>
                    </div>
                </TiltedCard>
                <TiltedCard>
                    <div className="bg-background border border-border rounded-3xl p-8 h-full w-full">
                        <h3 className="font-headline font-semibold text-2xl md:text-3xl text-foreground">Cognitive Focus</h3>
                        <p className="font-subtitle text-lg md:text-xl text-foreground mt-4">
                            My transition from Visual Design driven by a fascination with Cognitive Psychology. I focus on the subtle details and emotional connections that determine how users perceive and interact with a product.
                        </p>
                    </div>
                </TiltedCard>
                <TiltedCard>
                    <div className="bg-background border border-border rounded-3xl p-8 h-full w-full">
                        <h3 className="font-headline font-semibold text-2xl md:text-3xl text-foreground">Building Since 2022</h3>
                        <p className="font-subtitle text-lg md:text-xl text-foreground mt-4">
                            For the past few years, I’ve used this blend of psychology & aesthetics to build breakthrough products that are not just usable & memorable.
                        </p>
                    </div>
                </TiltedCard>
                <TiltedCard>
                    <div className="bg-background border border-border rounded-3xl p-8 h-full w-full">
                        <h3 className="font-headline font-semibold text-2xl md:text-3xl text-foreground">Inspired Living</h3>
                        <p className="font-subtitle text-lg md:text-xl text-foreground mt-4">
                            My designs are grounded in real life. As a passionate biker, illustrator, and hobby cook I draw inspiration from the world around me to keep my work fresh, organic, and deeply human.
                        </p>
                    </div>
                </TiltedCard>
            </div>
        </section>
        
        <div className="py-4 md:py-6">
            <Approach />
        </div>

        <ToolStack />

      </main>
      <Footer />
      <DesignSystemCTA />
    </div>
  );
}
