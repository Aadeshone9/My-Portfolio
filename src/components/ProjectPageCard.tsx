import { ArrowRight, Lock, Timer } from 'lucide-react';
import Image from 'next/image';
import PillButton from './PillButton';

type ProjectPageCardProps = {
  title: string;
  description?: string;
  role: string;
  img?: string;
  icon?: React.ReactNode;
  comingSoon?: boolean;
  slug?: string;
  isLocked?: boolean;
};

export default function ProjectPageCard({ title, description, role, img, icon, comingSoon = false, slug, isLocked = false }: ProjectPageCardProps) {
  const isUnlockedProject = slug === 'vida' || slug === 'design-research-ops';
  
  const message = encodeURIComponent(`Hi Aadesh, I'm interested in discussing a hiring opportunity and would like to review your work on "${title}". Could you please grant me access to this case study? My official email is [Enter your email here]. Looking forward to connecting!`);
  const linkedinUrl = `https://www.linkedin.com/messaging/compose/?recipient=aadeshgovenkar&body=${message}`;

  const isJioLocked = title === 'JIO Research' && isLocked;

  return (
    <div className="p-6 md:p-8 rounded-2xl bg-card border border-border h-full flex flex-col justify-between relative overflow-hidden">
      {isJioLocked && (
        <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px] z-20 flex items-center justify-center">
          <div className="bg-card/90 p-4 rounded-xl border border-border shadow-xl text-center">
            <Lock className="w-8 h-8 mx-auto text-primary mb-2" />
            <p className="text-xs font-semibold text-primary uppercase tracking-widest">Restricted</p>
          </div>
        </div>
      )}
      <div>
        <div className="w-full aspect-[16/9] rounded-lg flex items-center justify-center overflow-hidden relative group bg-off-white-f4">
          {img ? (
            <Image 
              src={img} 
              alt={title} 
              fill 
              className="object-contain p-4 z-10" 
            />
          ) : icon ? (
            <div className="z-10">{icon}</div>
          ) : null}
        </div>
        <div className="mt-6">
          <h3 className="font-headline font-semibold text-xl text-foreground">{title}</h3>
          {description && <p className="text-muted-foreground mt-2 text-base">{description}</p>}
          {isJioLocked && <p className="text-xs text-primary font-semibold mt-2">Proprietary Strategy: Access Restricted. Password required.</p>}
          <p className="text-sm text-muted-foreground mt-4 whitespace-nowrap">{role}</p>
        </div>
      </div>
      <div className="mt-6">
        {comingSoon ? (
          <div className="flex items-center gap-2 text-muted-foreground">
            <Timer />
            <span className="whitespace-nowrap">Coming soon | NDA Project</span>
          </div>
        ) : isUnlockedProject ? (
           <PillButton href={`/projects/${slug}`} className="group !text-foreground !border-foreground">
            <span className="group-hover:font-semibold">View Project</span>
            <ArrowRight />
          </PillButton>
        ) : (
          <PillButton href={linkedinUrl} className="group !text-foreground !border-foreground">
            <span className="group-hover:font-semibold">Request Access</span>
            <Lock />
          </PillButton>
        )}
      </div>
    </div>
  );
}
