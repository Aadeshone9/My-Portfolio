'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import FadeIn from '@/components/FadeIn';
import { RationaleBlock } from '@/lib/project-types';
import { getIcon } from '@/lib/icon-map';
import { cn } from '@/lib/utils';
import { PlaceHolderImages } from '@/lib/placeholder-images';

interface RationaleSectionProps {
  rationales: RationaleBlock[];
  imageStrategy: {
    placement: 'before' | 'after' | 'alternating' | 'none';
    rationaleImages?: Record<number, string[]>;
    inlineContent?: Record<number, string>;
  };
  projectSlug: string;
  imagePrefix: string;
  isTextFirst?: boolean;
  sectionPadding?: string;
}

const motionProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
};

const getImageUrl = (imageId: string) => {
  const image = PlaceHolderImages.find(p => p.id === imageId);
  return image?.imageUrl || '';
};

const RationaleImage = ({ imageId }: { imageId: string }) => {
  const imageUrl = getImageUrl(imageId);
  
  if (!imageUrl) return null;

  return (
    <motion.div {...motionProps} className="w-full relative rounded-2xl overflow-hidden bg-muted">
      <Image
        src={imageUrl}
        alt="Project image"
        width={1280}
        height={720}
        className="w-full h-auto object-contain"
      />
    </motion.div>
  );
};

const FigmaEmbed = ({ embedUrl }: { embedUrl: string }) => {
  return (
    <motion.div {...motionProps} className="w-full aspect-video relative rounded-2xl overflow-hidden bg-muted border border-border">
      <iframe 
        className="w-full h-full"
        src={embedUrl}
        title="Interactive prototype"
        allowFullScreen
      />
    </motion.div>
  );
};

export const RationaleSection = ({
  rationales,
  imageStrategy,
  projectSlug,
  imagePrefix,
  isTextFirst = false,
  sectionPadding = "py-20 md:py-24"
}: RationaleSectionProps) => {
  const embedUrls: Record<string, string> = {
    'figma-research-ops': "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fsbg0dKpE8BV4MnGFdoTDsu%2Fportfolio%3Fpage-id%3D1403%253A173%26node-id%3D1403-7250%26viewport%3D-2931%252C-1913%252C0.21%26t%3Df3q7lEBvUcL4G0Ub-8%26scaling%3Dscale-down-width%26content-scaling%3Dfixed%26starting-point-node-id%3D1403%253A7250%26hide-ui%3D1",
    'figma-maplegeni': "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fsbg0dKpE8BV4MnGFdoTDsu%2Fportfolio%3Fpage-id%3D1403%253A173%26node-id%3D1403-18699%26viewport%3D-2931%252C-1913%252C0.21%26t%3Df3q7lEBvUcL4G0Ub-8%26scaling%3Dscale-down-width%26content-scaling%3Dfixed%26starting-point-node-id%3D1403%3A18699%26hide-ui%3D1",
    'figma-mahindra': "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FUmpbABs5apfO6S1sKdSD0l%2FUntitled%3Fpage-id%3D0%253A1%26node-id%3D3-189%26viewport%3D185%252C288%252C0.52%26t%3DjpxilzSKnjIhFbJn-8%26scaling%3Dscale-down%26content-scaling%3Dfixed%26starting-point-node-id%3D3%253A189%26hide-ui%3D1",
  };

  return (
    <>
      {rationales.map((block, blockIdx) => {
        const RationaleIcon = getIcon(block.icon);
        const isSpacingFix = isTextFirst;
        const imageIds = imageStrategy.rationaleImages?.[blockIdx] || [];
        const inlineContentType = imageStrategy.inlineContent?.[blockIdx];

        const renderTitle = (
          <section className={cn(
            "bg-background text-foreground relative", 
            isSpacingFix ? "pt-20 md:pt-24 pb-6 md:pb-8" : sectionPadding
          )}>
            <div className="container mx-auto px-4 sm:px-8 md:px-20 relative z-10">
              <div className="max-w-4xl lg:max-w-5xl 2xl:max-w-7xl">
                <motion.div {...motionProps} className="flex items-center gap-4">
                  <RationaleIcon className="w-8 h-8 text-primary" />
                  <FadeIn>
                    <h2 className="font-headline font-semibold text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl text-foreground text-left">
                      {block.title}
                    </h2>
                  </FadeIn>
                </motion.div>
              </div>
            </div>
          </section>
        );

        const imageContent = inlineContentType && embedUrls[inlineContentType] ? (
          <FigmaEmbed embedUrl={embedUrls[inlineContentType]} />
        ) : imageIds.length > 0 ? (
          <div className="grid grid-cols-1 gap-8">
            {imageIds.map((imageId, idx) => (
              <RationaleImage key={`rationale-image-${blockIdx}-${idx}-${imageId}`} imageId={imageId} />
            ))}
          </div>
        ) : null;

        const renderImage = imageStrategy.placement !== 'none' && (
          <section className={cn(
            "bg-background",
            isSpacingFix ? "pt-0 pb-10 md:pb-12" : "py-10 md:py-12"
          )}>
            <div className="container mx-auto px-4 sm:px-8 md:px-20">
              {imageContent}
            </div>
          </section>
        );

        const renderPoints = (
          <section className={cn(
            "bg-background text-foreground", 
            isSpacingFix ? "pb-20 md:pb-24 pt-4 md:pt-6" : sectionPadding
          )}>
            <div className="container mx-auto px-4 sm:px-8 md:px-20">
              <div className="max-w-4xl lg:max-w-5xl 2xl:max-w-7xl">
                <ul className="space-y-8">
                  {block.points.map((point, pIdx) => (
                    <motion.li
                      key={`rationale-point-${blockIdx}-${pIdx}-${point.title}`}
                      {...motionProps}
                      transition={{ ...motionProps.transition, delay: 0.1 * (pIdx + 1) }}
                      className="flex items-start"
                    >
                      <span className="text-primary mr-4 mt-1">&#8226;</span>
                      <p className="text-lg md:text-xl lg:text-2xl 2xl:text-[28px] text-muted-foreground leading-relaxed">
                        <span className="font-semibold text-primary">{point.title}: </span>
                        {point.description}
                      </p>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        );

        return (
          <div key={`rationale-block-${blockIdx}-${block.title}`}>
            {renderTitle}
            {isTextFirst && renderPoints}
            {renderImage}
            {!isTextFirst && renderPoints}
          </div>
        );
      })}
    </>
  );
};
