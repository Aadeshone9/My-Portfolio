
'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import PillButton from '@/components/PillButton';
import ProjectPageCard from '@/components/ProjectPageCard';
import FadeIn from '@/components/FadeIn';
import { Hotel, Car, Home } from 'lucide-react';
import Footer from '@/components/Footer';

const uxProjects = [
  {
    title: 'Hero Motocorp Vida App',
    role: 'UX Design consultant and Researcher',
    img: '/images/hero.svg',
  },
  {
    title: 'Thermax - Edge Platform',
    role: 'UX Researcher and Strategist',
    img: '/images/edge.png',
  },
  {
    title: 'Maplegeni',
    role: 'Product Designer | Co-Designer',
    img: '/images/maplegenix.webp',
  },
  {
    title: 'Mahindra Finance',
    role: 'UX Design Consultant | Co-Designer',
    img: '/images/mahindra-finance.svg',
  },
  {
    title: 'Google Cloud Security',
    role: 'Partner Product & UX Design consultant | Co-Designer',
    img: '/images/Google.png',
  },
  {
    title: 'JIO Reliance',
    role: 'UX Design Consultant | Co-Designer',
    img: '/images/jio.png',
  },
  {
    title: 'General Motors - Enterprise Security Restriction For Mobile Devices',
    role: 'UX Design Consultant | Individual Contributor',
    img: '/images/gm.png',
  },
];

const upcomingProjects = [
  {
    title: 'ITC Hotels Ltd | Club ITC Website UX & UI',
    role: 'Senior UX Design consultant | Co Designer',
    comingSoon: true,
  },
  {
    title: 'Skoda - India Website vehicle Booking Journey site',
    role: 'Senior UX and UI Design consultant',
    comingSoon: true,
  },
  {
    title: 'HDFC - Corporate Bank Loan Journey Responsive Site',
    role: 'UX Design & Strategist',
    comingSoon: true,
  },
  {
    title: 'Club ITC - ITC In-Hotel Guest Experience Mobile Version',
    role: 'Lead UX Designer',
    comingSoon: true,
  },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('UX');

  return (
    <div className="bg-background">
      <Header />
      <main className="container mx-auto px-4 sm:px-8 md:px-20 py-20 md:py-32">
        <div className="flex flex-col items-start gap-8">
           <FadeIn>
            <h1 className="font-headline font-semibold text-5xl md:text-8xl lg:text-[100px] leading-tight tracking-wide text-foreground text-left">
              Projects
            </h1>
          </FadeIn>
          <div className="flex flex-wrap gap-4">
            <button onClick={() => setActiveCategory('UX')}>
                <PillButton href="#" className={activeCategory === 'UX' ? 'is-active' : ''}>UX Design</PillButton>
            </button>
            <button onClick={() => setActiveCategory('UI')}>
                <PillButton href="#" className={activeCategory === 'UI' ? 'is-active' : ''}>UI Design</PillButton>
            </button>
          </div>
        </div>

        <div className="mt-20">
          {activeCategory === 'UX' ? (
            <div className="space-y-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
                {uxProjects.map((project, index) => (
                  <ProjectPageCard key={index} {...project} />
                ))}
              </div>
              <div>
                <FadeIn>
                  <h2 className="font-headline font-semibold text-3xl md:text-4xl text-foreground text-left mb-10">
                    Stay tuned for new projects
                  </h2>
                </FadeIn>
                <div className="flex overflow-x-auto space-x-10 pb-4">
                  {upcomingProjects.map((project, index) => (
                    <div key={index} className="flex-shrink-0 w-[300px] md:w-[350px]">
                      <ProjectPageCard {...project} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="flex justify-center items-center h-64">
              <p className="text-muted-foreground text-xl text-center">
                This page will be updated soon with new projects.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
