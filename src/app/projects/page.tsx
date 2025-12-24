
import Header from '@/components/Header';
import PillButton from '@/components/PillButton';
import ProjectPageCard from '@/components/ProjectPageCard';
import SpotlightCard from '@/components/SpotlightCard';
import SplitText from '@/components/SplitText';
import { ArrowRight } from 'lucide-react';
import Footer from '@/components/Footer';

const projects = [
  {
    title: 'Hero Motocorp Vida App',
    role: 'UX Design Consultant | Co-Designer',
    image: '/google-cloud-logo.svg',
  },
  {
    title: 'Thermax Global - Edge Platform',
    role: 'UX Design Consultant | Co-Designer',
    image: '/google-cloud-logo.svg',
  },
  {
    title: 'Maplegeni',
    role: 'Product Designer | Co-Designer',
    image: '/google-cloud-logo.svg',
  },
  {
    title: 'Mahindra Finance',
    role: 'UX Design Consultant | Co-Designer',
    image: '/google-cloud-logo.svg',
  },
  {
    title: 'Google Cloud Security',
    role: 'Partner Product & UX Design consultant | Co-Designer',
    image: '/google-cloud-logo.svg',
  },
  {
    title: 'JIO Reliance',
    role: 'UX Design Consultant | Co-Designer',
    image: '/google-cloud-logo.svg',
  },
];

const comingSoonProjects = [
    {
        title: 'ITC Hotels LTD Website Revamp',
        role: 'Lead | Individual Contributor',
        image: '/google-cloud-logo.svg',
    },
    {
        title: 'SKoda Automobiles India Website Revamp',
        role: 'Lead | Individual Contributor',
        image: '/google-cloud-logo.svg',
    },
    {
        title: 'Club ITC - ITC In-Hotel Guest Experience',
        role: 'Lead | Individual Contributor',
        image: '/google-cloud-logo.svg',
    },
    {
        title: 'MyIFB App',
        role: 'Lead | Individual Contributor',
        image: '/google-cloud-logo.svg',
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
            <h2 className="font-headline font-semibold text-3xl md:text-5xl text-left text-foreground">stay tuned for new Projects</h2>
            <div className="mt-12 flex overflow-x-auto gap-8 pb-8">
                {comingSoonProjects.map((project, index) => (
                    <div key={index} className="flex-shrink-0 w-[80vw] md:w-[40vw] lg:w-[30vw]">
                        <ProjectPageCard {...project} comingSoon={true} />
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
