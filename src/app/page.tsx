import Header from '@/components/Header';
import ProjectStack from '@/components/ProjectStack';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import SpotlightCard from '@/components/SpotlightCard';
import SplitText from '@/components/SplitText';
import TiltedCard from '@/components/TiltedCard';
import Approach from '@/components/Approach';

export default function Home() {
  const mainImage = PlaceHolderImages[0];
  return (
    <div className="bg-white">
      <Header />
      <main className="flex flex-col">
        <div className="container mx-auto px-20 pt-10">
            <div className="py-20">
              <SplitText 
                text="Hi, I’m Aadesh" 
                tag="h1"
                className="font-headline font-semibold text-7xl md:text-[100px] leading-tight tracking-wide text-black"
                textAlign="left"
              />
            <SplitText
                text="I have contributed to products at scale, Chances are you've used some!"
                tag="p"
                splitType="words"
                className="font-subtitle text-2xl md:text-[32px] leading-snug text-[#757575] max-w-xl mt-4"
                textAlign="left"
              />
            </div>

            {mainImage && (
            <div className="relative w-full h-[400px] md:h-[696px] bg-[#E2E2E2] rounded-2xl overflow-hidden">
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

        <section className="py-20">
          <div className="container mx-auto px-20 relative z-10">
            <div className="flex justify-between items-center">
                <div>
                <SplitText
                  text="/Recent Projects"
                  tag="h2"
                  className="font-headline font-semibold text-[32px] leading-[58px] tracking-[0.02em] text-black"
                  textAlign="left"
                />
                <SplitText
                  text="A curated collection of latest Projects i have contributed which reflect my commitment to simplicity, timeless, and purposeful design."
                  tag="p"
                  splitType="words"
                  className="font-subtitle text-[32px] leading-[43px] text-[#757575] mt-2 max-w-[700px]"
                  textAlign="left"
                />
                </div>
                <Button variant="secondary" className="bg-[#EBEAEB] rounded-full text-black font-medium text-lg px-6 py-3 hover:bg-black hover:text-white">
                  View all projects
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
            </div>
          </div>

          <div className="relative mt-4">
            <ProjectStack />
          </div>
        </section>

        <section className="pt-8 pb-2 container mx-auto px-20 mb-2">
          <div className="flex flex-col items-start gap-4">
            <div className="w-[104px] h-[104px] border-2 border-[#757575] rounded-lg"></div>
            <div className="w-[109px] border-2 border-[#757575]"></div>
            <SplitText
              text="Know me better..."
              tag="h2"
              className="font-headline font-semibold text-5xl leading-[58px] tracking-wide text-black"
              textAlign="left"
            />
          </div>
        </section>

        <section className="pb-4 container mx-auto px-20 pt-2">
           <div className="flex flex-row items-center justify-between gap-8 md:gap-[297px]">
                <div className="flex flex-col items-start max-w-[875px]">
                    <SplitText
                      text="/Let’s Break some ice"
                      tag="h2"
                      className="font-headline font-semibold text-[32px] leading-[58px] tracking-[0.02em] text-black flex items-center"
                      textAlign="left"
                    />
                    <div className="mt-2">
                        <SplitText
                            text="I create to solve, and I solve to create. I am a designer, defined by my craft, dedicated to crafting better experiences for my fellow beings."
                            tag="p"
                            splitType="words"
                            className="font-subtitle font-medium text-[32px] leading-[43px] text-[#757575]"
                            textAlign="left"
                        />
                    </div>
                </div>
            </div>
        </section>

        <section className="bg-transparent py-4">
            <div className="container mx-auto px-20 grid grid-cols-1 md:grid-cols-2 gap-8">
                <TiltedCard>
                    <div className="bg-white border border-[#BFBFBF] rounded-3xl p-8 h-full w-full">
                        <h3 className="font-headline font-semibold text-3xl text-black">Visual Roots</h3>
                        <p className="font-subtitle text-xl text-black mt-4">
                            With a background in Applied Art and Visual Communication, I bring a rigorous understanding of form, composition, and detail to every pixel.
                        </p>
                    </div>
                </TiltedCard>
                <TiltedCard>
                    <div className="bg-white border border-[#BFBFBF] rounded-3xl p-8 h-full w-full">
                        <h3 className="font-headline font-semibold text-3xl text-black">Cognitive Focus</h3>
                        <p className="font-subtitle text-xl text-black mt-4">
                            My transition from Visual Design driven by a fascination with Cognitive Psychology. I focus on the subtle details and emotional connections that determine how users perceive and interact with a product.
                        </p>
                    </div>
                </TiltedCard>
                <TiltedCard>
                    <div className="bg-white border border-[#BFBFBF] rounded-3xl p-8 h-full w-full">
                        <h3 className="font-headline font-semibold text-3xl text-black">Building Since 2022</h3>
                        <p className="font-subtitle text-xl text-black mt-4">
                            For the past few years, I’ve used this blend of psychology & aesthetics to build breakthrough products that are not just usable & memorable.
                        </p>
                    </div>
                </TiltedCard>
                <TiltedCard>
                    <div className="bg-white border border-[#BFBFBF] rounded-3xl p-8 h-full w-full">
                        <h3 className="font-headline font-semibold text-3xl text-black">Inspired Living</h3>
                        <p className="font-subtitle text-xl text-black mt-4">
                            My designs are grounded in real life. As a passionate biker, illustrator, and hobby cook I draw inspiration from the world around me to keep my work fresh, organic, and deeply human.
                        </p>
                    </div>
                </TiltedCard>
            </div>
        </section>
        
        <Approach />

        <div className="w-[90%] mx-auto my-20">
          <SpotlightCard>
            <div className="bg-[#F2F2F2] rounded-2xl py-4 px-6 flex items-center">
              <SplitText 
                text="Find out" 
                tag="h2"
                className="font-headline font-semibold text-4xl leading-tight tracking-[0.02em] text-black"
                textAlign="left"
              />
              <Button variant="secondary" className="bg-[#EBEAEB] rounded-[20px] text-black font-medium text-xl px-4 py-2 h-auto ml-2 hover:bg-black hover:text-white">
                Why you should hire me
              </Button>
            </div>
          </SpotlightCard>
        </div>

      </main>
      <footer className="bg-[#131313] text-white mt-20 py-16 px-5">
        <div className="container mx-auto px-4 md:px-20 flex flex-col gap-10">
          <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-4'>
              <p className="font-headline font-semibold text-[#757575] text-2xl tracking-[0.02em] leading-[1.2]">
                Now that you know me better than Earlier, Lets get in Touch....
              </p>
              <div className="flex flex-col gap-4">
                <a href="mailto:Aadesh.one9@gmail.com" className="font-headline font-semibold text-2xl tracking-[0.02em] underline leading-[1.2]">Aadesh.one9@gmail.com</a>
                <p className="font-headline font-semibold text-2xl tracking-[0.02em] leading-[1.2]">+ (91) 8975143018</p>
                <a href="https://www.linkedin.com/in/aadeshgovenkar/" target="_blank" rel="noopener noreferrer" className="font-headline font-semibold text-2xl tracking-[0.02em] underline leading-[1.2]">
                  https://www.linkedin.com/in/aadeshgovenkar/
                </a>
              </div>
            </div>
            <div className="p-2.5">
              <p className="font-headline font-semibold text-[160px] leading-[1.3] tracking-[0.02em] break-words">
                Aadesh. One9.com
              </p>
            </div>
          </div>
          <div className="text-right text-base font-normal tracking-[0.02em] flex flex-col gap-2">
            <p>Design In Figma By Aadesh Govenkar Developed in Curser by Harshad Pachore</p>
            <p>2026 Copyright All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
