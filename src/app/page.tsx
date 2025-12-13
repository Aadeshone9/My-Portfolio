import Header from '@/components/Header';
import LogoLoop from '@/components/LogoLoop';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const mainImage = PlaceHolderImages[0];
  return (
    <div className="bg-white">
      <Header />
      <main className="container mx-auto px-20 pt-[100px] flex flex-col">
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

        <section className="py-24 relative">
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

          <div className="relative mt-12 z-10">
            <Card className="p-6 bg-[#F2F2F2] border border-[#BFBFBF] rounded-2xl w-[60vw] mx-auto">
              <div className="bg-[#D9D9D9] w-full h-96 rounded-lg flex items-center justify-center">
                  <svg width="140" height="140" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M49.2599 23.6001C49.2599 21.6801 49.0999 19.8801 48.7599 18.1401H25.0001V28.3201H38.7999C38.2199 31.4201 36.6199 33.9601 34.0599 35.6801V42.5001H42.0299C46.5199 38.3401 49.2599 31.6401 49.2599 23.6001Z" fill="#1976D2"/>
                      <path d="M25.0001 49.9998C31.9201 49.9998 37.7601 47.6798 42.0299 42.4998L34.0601 35.6798C31.7801 37.2198 28.6601 38.1398 25.0001 38.1398C18.4201 38.1398 12.8601 33.7998 11.0201 27.9998H2.78003V34.9998C7.02003 44.0198 15.3601 49.9998 25.0001 49.9998Z" fill="#4CAF50"/>
                      <path d="M11.0199 28.0001C10.5199 26.5401 10.26 24.9801 10.26 23.3401C10.26 21.7001 10.52 20.1401 11.0199 18.6801V11.6801H2.78003C0.980029 15.3401 0 19.1801 0 23.3401C0 27.5001 0.980029 31.3401 2.78003 35.0001L11.0199 28.0001Z" fill="#FFC107"/>
                      <path d="M25.0001 10.86C28.1601 10.86 30.9201 11.94 33.2801 14.16L42.2201 5.22C37.7601 1.98 31.9201 0 25.0001 0C15.3601 0 7.02003 5.98 2.78003 15L11.0201 22C12.8601 16.2 18.4201 10.86 25.0001 10.86Z" fill="#FF3D00"/>
                  </svg>
              </div>
              <div className="mt-6">
                  <CardTitle className="text-3xl font-headline font-semibold text-black">Google</CardTitle>
                  <p className="text-lg text-gray-500 mt-1">Lead + Individual Contributor</p>
                  <CardDescription className="text-xl text-black mt-2">
                      Body Text description Body Text description Body Text description Body Text description
                  </CardDescription>
                  <Button variant="link" className="p-0 h-auto text-lg mt-4 text-black">
                      View project <ArrowRight className="w-5 h-5 ml-1"/>
                  </Button>
              </div>
            </Card>
          </div>
          <LogoLoop />
        </section>

        <section className="py-12">
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
