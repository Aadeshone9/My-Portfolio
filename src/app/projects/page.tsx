
import Header from '@/components/Header';
import PillButton from '@/components/PillButton';
import ProjectPageCard from '@/components/ProjectPageCard';
import SpotlightCard from '@/components/SpotlightCard';
import SplitText from '@/components/SplitText';
import { ArrowRight, Lock } from 'lucide-react';
import Footer from '@/components/Footer';

const projects = [
  {
    title: 'Hero Motocorp Vida App',
    role: 'UX Design Consultant | Co-Designer',
  },
  {
    title: 'Thermax - Edge Platform',
    role: 'UX Researcher and strategist',
  },
  {
    title: 'Maplegeni',
    role: 'Product Designer | Co-Designer',
  },
  {
    title: 'Mahindra Finance',
    role: 'UX Design Consultant | Co-Designer',
  },
  {
    title: 'Google Cloud Security',
    role: 'Partner Product & UX Design consultant | Co-Designer',
  },
  {
    title: 'JIO Reliance',
    role: 'UX Design Consultant | Co-Designer',
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
    },
    {
        title: 'SKoda Automobiles India Website Revamp',
        role: 'Lead | Individual Contributor',
    },
    {
        title: 'Club ITC - ITC In-Hotel Guest Experience',
        role: 'Lead | Individual Contributor',
    },
    {
        title: 'MyIFB App',
        role: 'Lead | Individual Contributor',
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
            <SplitText
              text="stay tuned for new Projects"
              tag="h2"
              className="font-headline font-semibold text-3xl md:text-5xl text-left text-foreground"
              textAlign="left"
            />
            <div className="mt-12 flex overflow-x-auto gap-8 pb-8">
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
