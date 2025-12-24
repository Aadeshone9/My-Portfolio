

import Header from '@/components/Header';
import PillButton from '@/components/PillButton';
import ProjectPageCard from '@/components/ProjectPageCard';
import SpotlightCard from '@/components/SpotlightCard';
import SplitText from '@/components/SplitText';
import { ArrowRight } from 'lucide-react';
import Footer from '@/components/Footer';

const projects = [
  {
    title: 'Google',
    description: 'Optimised a user-centric ticketing system, resulting in a quantifiable efficiency boost of 45% and reducing average resolution time by 30%.',
    role: 'Lead + Individual Contributor',
    image: '/google-cloud-logo.svg',
  },
  {
    title: 'Thermax Global - Edge Platform',
    description: 'Defined UX improvements that increased error visibility and user adoption by 25%.',
    role: 'Product Designer',
    image: '/google-cloud-logo.svg',
  },
  {
    title: 'Maplegeni',
    description: 'Led B2C website product design, boosting mobile-first engagement by 35%.',
    role: 'Product Designer',
    image: '/google-cloud-logo.svg',
  },
  {
    title: 'Mahindra Finance',
    description: 'Increased customer retention by 30% and cross-selling by 25% by integrating "Design for Trust and Growth" principles.',
    role: 'UX Design Consultant',
    image: '/google-cloud-logo.svg',
  },
    {
    title: 'Spotify',
    description: 'Conducted foundational research to inform the strategy for personalized playlists.',
    role: 'UX Researcher',
    image: '/google-cloud-logo.svg',
  },
  {
    title: 'Another Company',
    description: 'Conducted foundational research to inform the strategy for personalized playlists.',
    role: 'UX Researcher',
    image: '/google-cloud-logo.svg',
  },
];

const comingSoonProjects = [
    {
        title: 'Project Alpha',
    },
    {
        title: 'Project Beta',
    },
    {
        title: 'Project Gamma',
    },
]

export default function ProjectsPage() {
  return (
    <div className="bg-background">
      <Header />
      <main className="container mx-auto px-4 sm:px-8 md:px-20 py-16 md:py-24">
        <div className="flex flex-col items-start gap-6">
           <SplitText 
            text="Projects"
            tag="h1"
            className="font-headline font-semibold text-5xl md:text-8xl lg:text-[100px] leading-tight tracking-wide text-foreground"
            textAlign="left"
          />
          <div className="flex flex-wrap gap-4">
            <PillButton href="#" className="is-active">UX Design</PillButton>
            <PillButton href="#" >Visual Design</PillButton>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mt-16">
          {projects.map((project, index) => (
            <ProjectPageCard key={index} {...project} />
          ))}
        </div>

        <div className='my-24'>
            <h2 className="font-headline font-semibold text-3xl md:text-5xl text-center text-foreground">New Projects On the way, stay Tuned!</h2>
            <div className="mt-12 flex flex-col md:flex-row gap-8 overflow-x-auto">
                {comingSoonProjects.map((project, index) => (
                    <div key={index} className="flex-shrink-0 w-full md:w-[577px]">
                         <ProjectPageCard title={project.title} description='' role='' image='' comingSoon />
                    </div>
                ))}
            </div>
        </div>

        <div className="mx-auto my-16 md:my-24">
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
