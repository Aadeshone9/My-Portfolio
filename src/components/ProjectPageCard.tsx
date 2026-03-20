
'use client';

import { ArrowRight, Lock, Timer } from 'lucide-react';
import Image from 'next/image';
import PillButton from './PillButton';
import { motion } from 'framer-motion';

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
  const isUnlockedProject = slug === 'vida' || slug === 'design-research-ops' || slug === 'mahindra-finance' || slug === 'thermax-edge' || slug === 'maplegeni';
  
  const message = encodeURIComponent(`Hi Aadesh, I'm interested in discussing a hiring opportunity and would like to review your work on "${title}". Could you please grant me access to this case study? My official email is [Enter your email here]. Looking forward to connecting!`);
  const linkedinUrl = `https://www.linkedin.com/messaging/compose/?recipient=aadeshgovenkar&body=${message}`;

  const isJioLocked = title === 'Jio Research' || isLocked;

  // NDA Shake animation for locked cards
  const shakeAnimation = {
    hover: isJioLocked && !isUnlockedProject ? {
      x: [-2, 2, -2, 2, 0],
      transition: { duration: 0.4, ease: "easeInOut" }
    } : {}
  };

  return (
    <motion.div 
      whileHover="hover"
      variants={shakeAnimation}
      className="p-6 md:p-8 rounded-2xl bg-card border border-border h-full flex flex-col justify-between relative overflow-hidden"
    >
      {(isJioLocked && !isUnlockedProject) && (
        <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px] z-20 flex items-center justify-center">
          <div className="bg-card/90 p-4 rounded-xl border border-border shadow-xl text-center">
            <Lock className="w-8 h-8 mx-auto text-primary mb-2" />
            <p className="text-xs font-semibold text-primary uppercase tracking-widest">NDA Protected</p>
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
          {(isJioLocked && !isUnlockedProject) && <p className="text-xs text-primary font-semibold mt-2">Proprietary Strategy: Access Restricted. Password required.</p>}
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
    </motion.div>
  );
}
