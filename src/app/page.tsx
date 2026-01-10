'use client';

import Header from '@/components/Header';
import ProjectStack from '@/components/ProjectStack';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import SpotlightCard from '@/components/SpotlightCard';
import FadeIn from '@/components/FadeIn';
import TiltedCard from '@/components/TiltedCard';
import Approach from '@/components/Approach';
import PillButton from '@/components/PillButton';
import Footer from '@/components/Footer';
import ToolStack from '@/components/ToolStack';
import { motion } from 'framer-motion';
import AnimatedShape from '@/components/AnimatedShape';
import DesignSystemCTA from '@/components/DesignSystemCTA';
import Showreel from '@/components/Showreel';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function Home() {
  return (
    <div className="bg-background">
      <Header />
      <main>
        <div className="container mx-auto px-4 sm:px-8 md:px-20 pt-20 md:pt-24 pb-10 md:pb-12">
            <div className="pb-1 md:pb-2">
              <FadeIn>
                <h1 className="font-headline font-semibold text-5xl md:text-8xl lg:text-[100px] leading-tight tracking-wide text-foreground text-left">
                  Hi, I’m Aadesh
                </h1>
              </FadeIn>
              <FadeIn>
                <p className="font-subtitle text-lg md:text-2xl lg:text-[32px] leading-snug md:leading-[43px] text-muted-foreground max-w-xl mt-4 text-left">
                  I have contributed to products at scale, Chances are you've used some!
                </p>
              </FadeIn>
            </div>
        </div>

        <div>
            <Showreel
              videoUrl="/videos/banner.mp4"
            />
        </div>

        <section className="py-20 md:py-24">
          <div className="container mx-auto px-4 sm:px:8 md:px-20 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex-1 flex flex-col">
                <FadeIn>
                  <h2 className="font-headline font-semibold text-3xl md:text-[32px] leading-snug tracking-[0.02em] text-foreground text-left">
                    / Recent Projects
                  </h2>
                </FadeIn>
                <FadeIn>
                  <p className="font-subtitle text-lg md:text-2xl lg:text-[32px] leading-[28px] md:leading-[34px] lg:leading-[42px] text-muted-foreground mt-2 max-w-[700px] text-left">
                    A curated collection of latest Projects i have contributed which reflect my commitment to simplicity, timeless, and purposeful design.
                  </p>
                </FadeIn>
                </div>
                <PillButton href="/projects" className="group mt-4 md:mt-0 flex-shrink-0">
                    <span className="group-hover:font-semibold">View all Projects</span>
                    <ArrowRight />
                </PillButton>
            </div>
          </div>

          <div className="relative mt-16">
            <ProjectStack />
          </div>
        </section>

        <section id="know-me-better" className="py-20 md:py-24 container mx-auto px-4 sm:px-8 md:px-20 scroll-mt-20">
          <div className="flex flex-col items-start gap-4">
            <AnimatedShape shape="square" />
            <FadeIn>
              <h2 className="font-headline font-semibold text-3xl md:text-5xl leading-[58px] tracking-wide text-foreground mt-2 text-left">
                Know me better...
              </h2>
            </FadeIn>
          </div>
          <div className="w-32 h-[2px] bg-border my-4"></div>
        </section>

        <section className="pb-20 md:pb-24 container mx-auto px-4 sm:px-8 md:px-20">
           <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="flex flex-col items-start w-full">
                    <FadeIn>
                      <h2 className="font-headline font-semibold text-2xl md:text-[32px] leading-[58px] tracking-[0.02em] text-foreground flex items-center text-left">
                        / Let’s break some ice
                      </h2>
                    </FadeIn>
                    <div className="mt-6 space-y-4">
                        <FadeIn>
                          <p className="font-subtitle font-medium text-xl md:text-3xl lg:text-[32px] text-muted-foreground text-left mb-4">
                            I create to solve, and I solve to create.
                          </p>
                        </FadeIn>
                        <FadeIn>
                          <p className="font-subtitle font-medium text-xl md:text-3xl lg:text-[32px] text-muted-foreground text-left mb-4">
                            I am a designer, defined by my craft, dedicated to
                          </p>
                        </FadeIn>
                        <FadeIn>
                          <p className="font-subtitle font-medium text-xl md:text-3xl lg:text-[32px] text-muted-foreground text-left">
                            crafting better experiences for my fellow beings.
                          </p>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>

        <section className="pb-20 md:pb-24">
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
        
        <div className="pb-20 md:pb-24">
            <Approach />
        </div>

        <ToolStack />

      </main>
      <Footer />
      <DesignSystemCTA />
    </div>
  );
}
