
import { ArrowRight, Timer } from 'lucide-react';
import Image from 'next/image';
import PillButton from './PillButton';

type ProjectPageCardProps = {
  title: string;
  description?: string;
  role: string;
  image?: string;
  comingSoon?: boolean;
};

export default function ProjectPageCard({ title, description, role, image, comingSoon = false }: ProjectPageCardProps) {
  return (
    <div className="p-6 md:p-8 rounded-2xl bg-card border border-border h-full flex flex-col justify-between">
      <div>
        <div className="w-full aspect-[16/9] bg-muted rounded-lg flex items-center justify-center overflow-hidden">
          {image && <Image src={image} alt={`${title} logo`} width={287} height={287} className="w-36 h-36 object-contain" />}
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
        ) : (
          <PillButton href="#" className="group">
            <span className="group-hover:font-semibold">View project</span>
            <ArrowRight />
          </PillButton>
        )}
      </div>
    </div>
  );
}
