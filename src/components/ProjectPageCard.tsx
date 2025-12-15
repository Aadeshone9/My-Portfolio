
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import PillButton from './PillButton';

type ProjectPageCardProps = {
  title: string;
  description: string;
  role: string;
  image?: string;
  comingSoon?: boolean;
};

export default function ProjectPageCard({ title, description, role, image, comingSoon = false }: ProjectPageCardProps) {
  if (comingSoon) {
    return (
         <div className="p-8 rounded-2xl bg-card border border-border h-full flex flex-col justify-between">
            <div>
                <div className="w-full h-72 bg-muted rounded-lg flex items-center justify-center">
                    {image && (
                        <Image src={image} alt={`${title} logo`} width={287} height={287} className="w-36 h-36 md:w-72 md:h-72" />
                    )}
                </div>
                 <div className="mt-6">
                    <h3 className="font-headline font-semibold text-xl text-foreground">{title}</h3>
                </div>
            </div>
        </div>
    )
  }
    
  return (
    <div className="p-8 rounded-2xl bg-card border border-border h-full flex flex-col justify-between">
        <div>
            <div className="w-full h-72 bg-muted rounded-lg flex items-center justify-center">
                {image && (
                    <Image src={image} alt={`${title} logo`} width={287} height={287} className="w-36 h-36 md:w-48 md:h-48" />
                )}
            </div>
            <div className="mt-6">
                <h3 className="font-headline font-semibold text-xl text-foreground">{title}</h3>
                <p className="text-muted-foreground mt-2">{description}</p>
                <p className="text-sm text-muted-foreground mt-4">{role}</p>
            </div>
        </div>
      <div className="mt-4">
        <PillButton href="#" className="group">
          <span className='group-hover:font-semibold'>View project</span>
          <ArrowRight />
        </PillButton>
      </div>
    </div>
  );
}
