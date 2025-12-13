import Header from '@/components/Header';
import LogoLoop from '@/components/LogoLoop';
import ProjectStack from '@/components/ProjectStack';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const mainImage = PlaceHolderImages[0];
  return (
    <div className="bg-white">
      <Header />
      <main className="flex flex-col">
        <div className="container mx-auto px-20 pt-[100px]">
            <div className="py-8">
            <h1 className="font-headline font-semibold text-7xl md:text-[100px] leading-tight tracking-wide text-black">
                Hi, I’m Aadesh
            </h1>
            <p className="font-subtitle text-2xl md:text-[32px] leading-snug text-[#757575] max-w-xl mt-4">
                I have contributed to products at scale, Chances are you&apos;ve used some!
            </p>
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

        <section className="py-24">
          <div className="container mx-auto px-20 relative z-10">
            <div className="flex justify-between items-center">
                <div>
                <h2 className="font-headline font-semibold text-[32px] leading-[58px] tracking-[0.02em] text-black">
                    /Recent Projects
                </h2>
                <p className="font-subtitle text-[32px] leading-[43px] text-[#757575] mt-2 max-w-[700px]">
                    A curated collection of latest Projects i have contributed which reflect my commitment to simplicity, timeless, and purposeful design.
                </p>
                </div>
                <Button variant="secondary" className="bg-[#EBEAEB] rounded-full text-black font-medium text-lg px-6 py-3 hover:bg-black hover:text-white">
                View all projects
                <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
            </div>
          </div>

          <div className="relative mt-12">
            <ProjectStack />
          </div>
        </section>

        <section className="py-12 container mx-auto px-20">
           <div className="flex flex-col md:flex-row items-start justify-between gap-8">
                <div className="max-w-4xl">
                    <h2 className="font-headline font-semibold text-3xl md:text-[32px] leading-tight tracking-wide text-black flex items-center gap-2">
                        /Let’s Break some ice
                    </h2>
                    <p className="font-subtitle text-2xl md:text-[32px] leading-snug text-[#757575] mt-4">
                        I create to solve, and I solve to create. I am a designer, defined by my craft, dedicated to crafting better experiences for my fellow beings.
                    </p>
                </div>
            </div>
        </section>
      </main>
      <footer className="bg-[#131313] text-white mt-24">
        <div className="container mx-auto px-20 py-16">
            <div className="grid md:grid-cols-2 gap-16">
                <div>
                    <h3 className="font-semibold text-[#757575] text-2xl tracking-wide">Now that you know me better than Earlier, Lets get in Touch....</h3>
                    <div className="mt-6 space-y-2">
                        <a href="mailto:Aadesh.one9@gmail.com" className="block text-2xl underline">Aadesh.one9@gmail.com</a>
                        <p className="text-2xl">+ (91) 8975143018</p>
                        <a href="https://www.linkedin.com/in/aadeshgovenkar/" target="_blank" rel="noopener noreferrer" className="block text-2xl underline">https://www.linkedin.com/in/aadeshgovenkar/</a>
                    </div>
                </div>
                <div className="font-headline font-semibold text-5xl md:text-8xl lg:text-[160px] leading-tight tracking-wide break-words">
                    Aadesh. One9.com
                </div>
            </div>
            <div className="mt-24 text-right text-sm">
                <p>Design In Figma By Aadesh Govenkar Developed in Curser by Harshad Pachore</p>
                <p>2026 Copyright All Rights Reserved</p>
            </div>
        </div>
      </footer>
    </div>
  );
}
