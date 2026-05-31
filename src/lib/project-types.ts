// Project data types and interfaces

export interface ProjectOutcome {
  value: string;
  description: string;
}

export interface ProjectChallenge {
  title: string;
  description: string;
}

export interface RationalePoint {
  title: string;
  description: string;
}

export interface RationaleBlock {
  title: string;
  icon: string; // Key from IconMap
  points: RationalePoint[];
}

export interface ProjectMetric {
  title: string;
  value: string;
  description: string;
  detail: string;
}

export interface ProjectLearning {
  title: string;
  description: string;
}

export interface MethodologyItem {
  icon: string; // Icon name
  title: string;
  description: string;
}

export interface ArtefactItem {
  title: string;
  count: string;
  description: string;
}

export interface ExperienceEnhancer {
  icon: string; // Icon name
  title: string;
  description: string;
}

export interface CustomerImpactItem {
  icon: string; // Icon name
  title: string;
  description: string;
}

export interface ProjectConfig {
  slug: string;
  title: string;
  subtitle: string;
  heroTag: string;
  contribution: string[];
  role: string;
  focus: string;
  primaryGoal: string;
  
  // Layout type
  layoutType: 'standard' | 'text-first' | 'audit';
  
  // Image handling
  imagePrefix: string;
  showHeroImage: boolean;
  heroImageId?: string;
  
  // Content sections
  outcomes: ProjectOutcome[];
  challenges: ProjectChallenge[];
  rationales: RationaleBlock[];
  metrics: ProjectMetric[];
  learnings: ProjectLearning[];
  
  // Optional sections
  methodology?: MethodologyItem[];
  artefacts?: ArtefactItem[];
  experienceEnhancers?: ExperienceEnhancer[];
  customerImpact?: CustomerImpactItem[];
  
  // Image placement strategy
  imageStrategy: {
    // Where images appear in relation to rationale blocks
    // 'before' | 'after' | 'alternating' | 'none'
    placement: 'before' | 'after' | 'alternating' | 'none';
    // Specific images to use at which rationale index
    rationaleImages?: Record<number, string[]>;
    // Special inline content (iframes, custom components)
    inlineContent?: Record<number, string>; // rationale index -> content type
  };
}

export type ProjectData = Record<string, ProjectConfig>;
