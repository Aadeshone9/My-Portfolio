
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

export default function Home() {
  const mainImage = PlaceHolderImages[0];
  return (
    <div className="bg-background">
      <Header />
      <main className="flex flex-col">
        <div className="container mx-auto px-4 sm:px-8 md:px-20 pt-10">
            <div className="py-10 md:py-20">
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
                className="font-subtitle text-lg md:text-2xl lg:text-[32px] leading-7 md:leading-8 text-muted-foreground max-w-xl mt-6"
                textAlign="left"
              />
            </div>

            {mainImage && (
            <div className="relative w-full h-[300px] md:h-[696px] bg-secondary rounded-2xl overflow-hidden">
                <Image
                src={mainImage.imageUrl}
                alt={mainImage.description}
                fill
                className="object-cover"
                data-ai-hint={mainImage.imageHint}
                />
            </div>
            )}
        </div>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-8 md:px-20 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                <SplitText
                  text="/Recent Projects"
                  tag="h2"
                  className="font-headline font-semibold text-3xl md:text-[32px] leading-snug tracking-[0.02em] text-foreground"
                  textAlign="left"
                />
                <SplitText
                  text="A curated collection of latest Projects i have contributed which reflect my commitment to simplicity, timeless, and purposeful design."
                  tag="p"
                  splitType="words"
                  className="font-subtitle text-lg md:text-xl lg:text-[28px] leading-normal md:leading-[43px] text-muted-foreground mt-4 max-w-[700px]"
                  textAlign="left"
                />
                </div>
                <PillButton href="/projects" className="group mt-4 md:mt-0 flex-shrink-0">
                    <span className="group-hover:font-semibold">View all Projects</span>
                    <ArrowRight />
                </PillButton>
            </div>
          </div>

          <div className="relative mt-12 md:mt-16">
            <ProjectStack />
          </div>
        </section>

        <section className="pt-4 pb-4 container mx-auto px-4 sm:px-8 md:px-20">
          <div className="flex flex-col items-start gap-2">
            <div className="w-[8px] h-[8px] border border-muted-foreground rounded-sm"></div>
            <div className="w-[12px] border border-muted-foreground"></div>
            <SplitText
              text="Know me better..."
              tag="h2"
              className="font-headline font-semibold text-3xl md:text-5xl leading-[58px] tracking-wide text-foreground mt-4"
              textAlign="left"
            />
          </div>
        </section>

        <section className="pt-8 pb-16 container mx-auto px-4 sm:px-8 md:px-20">
           <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex flex-col items-start w-full">
                    <SplitText
                      text="/Let’s Break some ice"
                      tag="h2"
                      className="font-headline font-semibold text-2xl md:text-[32px] leading-[58px] tracking-[0.02em] text-foreground flex items-center"
                      textAlign="left"
                    />
                    <div className="mt-4">
                        <SplitText
                            text="I create to solve, and I solve to create. I am a designer, defined by my craft, dedicated to crafting better experiences for my fellow beings."
                            tag="p"
                            splitType="words"
                            className="font-subtitle font-medium text-xl md:text-3xl lg:text-[32px] leading-snug md:leading-[43px] text-muted-foreground"
                            textAlign="left"
                        />
                    </div>
                </div>
            </div>
        </section>

        <section className="pb-16 pt-4">
            <div className="container mx-auto px-4 sm:px-8 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-8">
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
        
        <div className="py-16 md:py-24">
            <Approach />
        </div>
        
        <div className="w-[90%] mx-auto my-16 md:my-24">
          <SpotlightCard>
            <div className="bg-background border border-border rounded-2xl py-4 px-6 flex flex-col sm:flex-row items-center justify-start gap-4">
              <SplitText 
                text="Find out" 
                tag="h2"
                className="font-headline font-semibold text-2xl leading-tight tracking-[0.02em] text-foreground"
                textAlign="left"
              />
              <PillButton 
                href="#"
                className="group"
              >
                  <span className="group-hover:font-semibold">Why Hire Me</span>
                  <ArrowRight />
              </PillButton>
            </div>
          </SpotlightCard>
        </div>

      </main>
      <Footer />
    </div>
  );
}
