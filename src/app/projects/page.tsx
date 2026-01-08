
import Header from '@/components/Header';
import PillButton from '@/components/PillButton';
import ProjectPageCard from '@/components/ProjectPageCard';
import SpotlightCard from '@/components/SpotlightCard';
import FadeIn from '@/components/FadeIn';
import { ArrowRight, Lock, Hotel, Car, Home } from 'lucide-react';
import Footer from '@/components/Footer';

const projects = [
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
  },
];

const comingSoonProjects = [
    {
        title: 'ITC Hotels LTD Website Revamp',
        role: 'Lead | Individual Contributor',
        icon: <Hotel className="w-16 h-16 text-muted-foreground" />
    },
    {
        title: 'SKoda Automobiles India Website Revamp',
        role: 'Lead | Individual Contributor',
        icon: <Car className="w-16 h-16 text-muted-foreground" />
    },
    {
        title: 'Club ITC - ITC In-Hotel Guest Experience',
        role: 'Lead | Individual Contributor',
        icon: <Hotel className="w-16 h-16 text-muted-foreground" />
    },
    {
        title: 'MyIFB App',
        role: 'Lead | Individual Contributor',
        icon: <Home className="w-16 h-16 text-muted-foreground" />
    },
]

export default function ProjectsPage() {
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
            <PillButton href="#" className="is-active">UX Design</PillButton>
            <PillButton href="#" >Visual Design</PillButton>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 mt-20">
          {projects.map((project, index) => (
            <ProjectPageCard key={index} {...project} />
          ))}
        </div>

        <div className='my-32'>
            <FadeIn>
              <h2 className="font-headline font-semibold text-3xl md:text-5xl text-left text-foreground text-left">
                Stay tuned for new projects
              </h2>
            </FadeIn>
            <div className="mt-16 flex overflow-x-auto gap-10 pb-10">
                {comingSoonProjects.map((project, index) => (
                    <div key={index} className="flex-shrink-0 w-[80vw] md:w-[40vw] lg:w-[30vw]">
                        <ProjectPageCard {...project} comingSoon={true} />
                    </div>
                ))}
            </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}
