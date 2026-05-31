'use client';

import { use, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NextProjectFooter from '@/components/NextProjectFooter';
import FadeIn from '@/components/FadeIn';

// Import data and types
import { getProjectConfig } from '@/lib/projects-config';

// Import section components
import { HeroSection } from '@/components/project/HeroSection';
import { ContributionGrid } from '@/components/project/ContributionGrid';
import { OutcomesSection } from '@/components/project/OutcomesSection';
import { ChallengesSection } from '@/components/project/ChallengesSection';
import { RationaleSection } from '@/components/project/RationaleSection';
import { MetricsSection } from '@/components/project/MetricsSection';
import { LearningsSection } from '@/components/project/LearningsSection';
import { MethodologySection, ArtefactsSection } from '@/components/project/SpecialSections';
import { ExperienceEnhancersSection, CustomerImpactSection } from '@/components/project/VidaSections';

const SECTION_PADDING = "py-20 md:py-24";

export default function ProjectPage({ params: paramsPromise }: { readonly params: Promise<{ slug: string }> }) {
  const params = use(paramsPromise);
  const project = getProjectConfig(params.slug);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-background text-foreground" ref={containerRef}>
      <Header />
      <main>
        {/* Hero Section */}
        <HeroSection
          heroTag={project.heroTag}
          subtitle={project.subtitle}
          title={project.title}
          showImage={project.showHeroImage}
          imagePrefix={project.imagePrefix}
          containerRef={containerRef}
        />

        {/* Contribution Grid */}
        <ContributionGrid
          contribution={project.contribution}
          role={project.role}
          focus={project.focus}
          primaryGoal={project.primaryGoal}
          sectionPadding={SECTION_PADDING}
        />

        {/* Key Outcomes */}
        <OutcomesSection
          outcomes={project.outcomes}
          sectionPadding={SECTION_PADDING}
        />

        {/* Methodology Section (Thermax Only) */}
        {project.methodology && (
          <MethodologySection
            methodology={project.methodology}
            sectionPadding={SECTION_PADDING}
          />
        )}

        {/* Strategic Gap Analysis & Challenges */}
        <ChallengesSection
          challenges={project.challenges}
          sectionPadding={SECTION_PADDING}
        />

       

        {/* Rationale Sections */}
        <RationaleSection
          rationales={project.rationales}
          imageStrategy={project.imageStrategy}
          projectSlug={project.slug}
          imagePrefix={project.imagePrefix}
          isTextFirst={project.layoutType === 'text-first'}
          sectionPadding={SECTION_PADDING}
        />

        {/* Audit Artefacts (Thermax Only) */}
        {project.artefacts && (
          <ArtefactsSection
            artefacts={project.artefacts}
            sectionPadding={SECTION_PADDING}
          />
        )}

        {/* Quantifiable Impact */}
        <MetricsSection
          metrics={project.metrics}
          sectionPadding={SECTION_PADDING}
        />

        {/* Experience Enhancers (VIDA Only) */}
        {project.experienceEnhancers && (
          <ExperienceEnhancersSection
            enhancers={project.experienceEnhancers}
            sectionPadding={SECTION_PADDING}
          />
        )}

        {/* Key Learnings */}
        <LearningsSection
          learnings={project.learnings}
          sectionPadding={SECTION_PADDING}
        />

        {/* Customer Experience Impact (VIDA Only) */}
        {project.customerImpact && (
          <CustomerImpactSection
            items={project.customerImpact}
            sectionPadding={SECTION_PADDING}
          />
        )}

        {/* Next Project Footer */}
        <NextProjectFooter currentSlug={params.slug} />

        {/* Call to Action Section */}
        <section className="pb-20 container mx-auto px-4 sm:px-8 md:px-20">
          <div className="flex flex-col items-start gap-6">
            <div className="w-[84px] h-[84px] rounded-full bg-primary mb-6"></div>
            <FadeIn>
              <p className="font-headline font-semibold text-xl md:text-2xl lg:text-3xl 2xl:text-4xl tracking-normal text-muted-foreground text-left">
                you made it to the end of the scroll! Let's discuss the project in detail.
              </p>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
