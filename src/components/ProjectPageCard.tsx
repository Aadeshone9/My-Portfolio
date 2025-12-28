

import { ArrowRight, Lock, Timer } from 'lucide-react';
import Image from 'next/image';
import PillButton from './PillButton';

type ProjectPageCardProps = {
  title: string;
  description?: string;
  role: string;
  img?: string;
  comingSoon?: boolean;
};

export default function ProjectPageCard({ title, description, role, img, comingSoon = false }: ProjectPageCardProps) {
  const isVidaProject = title === 'Hero Motocorp Vida App';
  const isMaplegeniProject = title === 'Maplegeni';

  return (
    <div className="p-6 md:p-8 rounded-2xl bg-card border border-border h-full flex flex-col justify-between">
      <div>
        <div className="w-full aspect-[16/9] rounded-lg flex items-center justify-center overflow-hidden relative group">
          <div className="absolute inset-0 bg-off-white"></div>
          {img && (
            <Image 
              src={img} 
              alt={title} 
              fill 
              className="object-contain p-4 z-10" 
            />
          )}
        </div>
        <div className="mt-6">
          <h3 className="font-headline font-semibold text-xl text-foreground">{title}</h3>
          {description && <p className="text-muted-foreground mt-2 text-base">{description}</p>}
          <p className="text-sm text-muted-foreground mt-4">{role}</p>
        </div>
      </div>
      <div className="mt-6">
        {comingSoon ? (
          <div className="flex items-center gap-2 text-muted-foreground">
            <Timer />
            <span>Coming soon</span>
          </div>
        ) : isVidaProject ? (
           <PillButton href="/projects/vida" className="group !text-foreground !border-foreground">
            <span className="group-hover:font-semibold">View Project</span>
            <ArrowRight />
          </PillButton>
        ) : isMaplegeniProject ? (
          <PillButton href="/projects/maplegeni" className="group !text-foreground !border-foreground">
            <span className="group-hover:font-semibold">View Project</span>
            <ArrowRight />
          </PillButton>
        ) : (
          <PillButton href="https://www.linkedin.com/messaging/compose/?recipient=aadeshgovenkar" className="group !text-foreground !border-foreground">
            <span className="group-hover:font-semibold">Request Access</span>
            <Lock />
          </PillButton>
        )}
      </div>
    </div>
  );
}
