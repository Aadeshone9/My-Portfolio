
'use client';
import { useMemo, use, useEffect, useState, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion, useScroll, useTransform, useInView, animate } from 'framer-motion';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { 
  Search, 
  Target, 
  TrendingUp, 
  Lightbulb, 
  Package, 
  FileText, 
  Navigation, 
  Phone, 
  Route, 
  Shield, 
  Fence, 
  Users, 
  Cog, 
  Ear, 
  Cloud, 
  CheckCircle,
  MapPin,
  ShieldCheck,
  Zap,
  Layers,
  Rocket,
  BellRing,
  Eye,
  Brain,
  ClipboardCheck,
  BarChart3,
  Map,
  Microscope,
  FileSearch,
  Activity,
  Network
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import FadeIn from '@/components/FadeIn';
import { cn } from '@/lib/utils';

const motionProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
};

// Count-up component for metrics
const Counter = ({ value }: { value: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [displayValue, setDisplayValue] = useState("0");
  
  useEffect(() => {
    if (isInView) {
      const match = value.match(/(\d+)/);
      if (match) {
        const target = parseInt(match[0]);
        const suffix = value.replace(match[0], '');
        const prefix = value.split(match[0])[0];
        
        const controls = animate(0, target, {
          duration: 1.5,
          ease: "easeOut",
          onUpdate: (latest) => {
            setDisplayValue(`${prefix}${Math.floor(latest)}${suffix}`);
          }
        });
        return () => controls.stop();
      } else {
        setDisplayValue(value);
      }
    }
  }, [isInView, value]);

  return (
    <span 
      ref={ref} 
      className="inline-flex" 
      style={{ minWidth: value.match(/\d/) ? `${value.length}ch` : 'auto' }}
    >
      {displayValue}
    </span>
  );
};

const projectData: Record<string, any> = {
  'vida': {
    title: 'EV Mobility with VIDA',
    subtitle: 'Driving Loyalty & Efficiency in EV Mobility',
    heroTag: 'Behavioural UX Case Study',
    contribution: ['UX Research', 'User Journeys', 'Strategy & Design Conceptualisation', 'Design System'],
    role: 'Consultant: CX & UX Design',
    focus: 'End-to-end connected vehicle platform experience for the launch of the Vida EV.',
    primaryGoal: 'Build a world-class platform to empower EV adoption and drive large-scale sustainable practices, focusing on customer Lifetime Value (LTV).',
    outcomes: [
      { value: '50%', description: 'Reduction in time to find a charging station' },
      { value: '10%', description: 'Reduction in costly riding habits' },
      { value: '20%', description: 'Increase in re-subscription rates.' },
    ],
    challenges: [
      { title: 'User Pain Point', description: 'Frustration with Range Anxiety and the lack of verified information for charging, Vehicle adaptation.' },
      { title: 'Business Challenge', description: 'Lack of convenience and transparency in after-sales services, leading to high potential subscriber churn.' },
      { title: 'Competitive Gap', description: 'Competitors lacked a clear, personalized system for proactive maintenance alerts and data-driven riding feedback, Safety of Vehicle.' },
    ],
    rationales: [
      {
        title: 'Solving Range Anxiety (Resource Findability)',
        icon: 'MapPin',
        points: [
          { title: 'Inefficient Journey', description: 'Finding a charging station typically required five inefficient steps in existing systems.' },
          { title: 'Design Solution', description: 'We drastically simplified the charging station flow from five steps to just two by intelligently sharing contextual charging stations based on planned or daily commuted routes.' },
          { title: 'Design Rationale (Map vs. List)', description: 'We used a combined Map View (for quick spatial context/familiarity) and List View (optimized for detailed comparison of price/connector type) to maximize user trust and efficiency.' },
          { title: 'Testing & Iteration', description: 'Initial usability tests showed users struggled to verify station compatibility. We iterated by simplifying and highlighting the connector type and status on the information card.' },
        ]
      },
      {
        title: 'Driving Safer Behaviour & Trust (Maintenance & Tips)',
        icon: 'ShieldCheck',
        points: [
          { title: 'Strategic Gap Addressed', description: 'The need for personalized riding tips and transparent maintenance.' },
          { title: 'Design Rationale (Behavioral Nudges)', description: 'We used Behavioral Design (Nudges) by providing actionable tips instead of just a raw score. This personalized, supportive approach successfully drove better habits.' },
          { title: 'Data Hierarchy', description: "On the 'My Rides' screen, we prioritized functional metrics like Distance and Avg Speed over the subjective star rating." },
          { title: 'Maintenance Transparency', description: 'We addressed the trust gap by designing an Easy, Quick, and Transparent Maintenance Process with proactive alerts and upfront pricing.' },
        ]
      }
    ],
    metrics: [
      { title: 'Charging Efficiency', value: '50%', description: 'Reduction in the average time to locate a charging station.', detail: 'Directly reduced Range Anxiety and improved trip planning.' },
      { title: 'Customer Retention', value: '20%', description: 'Increase in re-subscription rates.', detail: 'Validated the strategy of building trust through transparent ownership.' }
    ],
    learnings: [
      { title: 'Contextual Data', description: 'Successfully driving behavior requires translating data into immediate, actionable tips, not just presenting raw numbers.' },
      { title: 'Trust as a Feature', description: 'In the EV market, providing transparency in maintenance and verified information is the foundational feature that prevents churn.' },
      { title: 'Iteration is Impact', description: 'Simple changes, like refining the information hierarchy of the charging card based on feedback, can yield outsized results in critical user flows.' },
    ]
  },
  'maplegeni': {
    title: 'Scalable B2C Experience Design',
    subtitle: 'Unified digital presence for global software services.',
    heroTag: 'B2C Software Platform Case Study',
    contribution: ['UX Strategy', 'Visual Experience (VX)', 'Information Architecture', 'Mobile-First Design'],
    role: 'Lead Product & UX Designer',
    focus: "Designing a responsive, multi-domain service platform with a 'Mobile-First' strategy.",
    primaryGoal: 'To transform a technical services site into an intuitive, world-class digital product.',
    outcomes: [
      { value: '35%', description: 'Rise in Mobile-First user engagement.' },
      { value: '100%', description: 'Brand consistency across UK & US market assets.' },
      { value: 'Streamlined', description: "Onshore-Offshore handoff through a unified Design System." },
    ],
    challenges: [
      { title: 'The Challenge', description: 'Information overload within the legacy IA made it difficult for diverse clients (Startups to Enterprises) to locate relevant services.' },
      { title: 'Business', description: 'Lack of a unified brand identity led to low credibility and missed opportunities in competitive markets like the UK & US.' },
      { title: 'Internal', description: 'Siloed onshore/offshore team workflows resulted in inconsistent handoffs and fragmented user journeys.' },
    ],
    rationales: [
      {
        title: 'Design Ethics (Core Pillars)',
        icon: 'ShieldCheck',
        points: [
          { title: 'Useful', description: 'Providing clear and concise service activities to help users understand the value proposition quickly.' },
          { title: 'Usable', description: 'Creating an intuitive interaction model that minimizes friction in service discovery.' },
          { title: 'Desirable', description: 'Implementing delightful craft and visual polish to build emotional resonance.' }
        ]
      },
      {
        title: 'VX Strategy (Visual Trust)',
        icon: 'Eye',
        points: [
          { title: 'Visual Palette', description: 'Detail the use of soft pastel tones and Poppins typography to evoke a welcoming and professional atmosphere.' },
          { title: 'Approachable Tech', description: 'This choice demystifies complex tech services, making them feel accessible to both startups and enterprises.' }
        ]
      },
      {
        title: 'Mobile-First Architecture',
        icon: 'Zap',
        points: [
          { title: 'Proposed IA', description: 'Describe the complete Information Architecture overhaul optimized for vertical viewing.' },
          { title: 'Responsive Continuity', description: 'A seamless, "one-size-fits-all" approach that caters to individual user preferences on any device.' }
        ]
      }
    ],
    metrics: [
      { title: 'User Engagement', value: '35%', description: 'Rise in Mobile-First user engagement.', detail: 'Direct result of the responsive design strategy.' },
      { title: 'Market Credibility', value: '100%', description: 'Brand consistency across UK & US.', detail: 'Unified brand identity across all international market assets.' }
    ],
    learnings: [
      { title: 'Design as Communication', description: 'Visual Design is an asset for communication. It bridges the gap between technical complexity and user understanding.' },
      { title: 'Ethics & Strategy', description: 'By balancing Design Ethics with a clean VX strategy, we transformed a technical services site into an intuitive digital product.' }
    ]
  },
  'design-research-ops': {
    title: 'Research Ops & Governance',
    subtitle: 'Streamlining research for 300+ enterprise designers.',
    heroTag: 'Research Operations Case Study',
    contribution: ['Research Ops Strategy', 'Interactive Workflows', 'Governance', 'Pilot Testing'],
    role: 'Consultant: UX Strategy & Ops',
    focus: 'Engineering a self-service ecosystem for 300+ designers across a massive digital ecosystem.',
    primaryGoal: "To eliminate 'Knowledge Debt' and standardize research artifacts across a massive digital ecosystem.",
    outcomes: [
      { value: '40%', description: "Reduction in 'Time-to-Insight'" },
      { value: '1,700+', description: "Annual Design Hours Saved" },
      { value: '80%', description: "Organization-wide Adoption Rate" },
    ],
    challenges: [
      { title: 'User', description: "Designers faced 'Analysis Paralysis' and manual friction when choosing research methods." },
      { title: 'Business', description: "High 'Knowledge Debt' and redundant costs ($250k+) due to siloed data." },
      { title: 'Internal', description: "Lack of a unified, searchable repository across the 'X' digital ecosystem." },
    ],
    rationales: [
      {
        title: 'The Logic-Gate Flow (Cognitive Load)',
        icon: 'Zap',
        points: [
          { title: 'Design Solution', description: "We designed a 'logic-gate' interface that reduced cognitive load, guiding designers from 20+ methods to the top 3 relevant choices in under 2 minutes." },
          { title: 'Decision Velocity', description: "This intervention resulted in a 65% reduction in decision time for research planning." }
        ]
      },
      {
        title: 'Systemic Quality (Master Templates)',
        icon: 'Layers',
        points: [
          { title: 'Standardization', description: "Developed interactive 'Stakeholder-Ready' templates to ensure 100% brand and data consistency across all 300+ designers." },
          { title: 'Consistency', description: "Automated templates eliminated manual errors, ensuring that every insight followed organizational standards." }
        ]
      },
      {
        title: 'Scaling (Automated Mentor)',
        icon: 'Rocket',
        points: [
          { title: 'Onboarding Efficiency', description: "Reduced onboarding from 3 days to 2 hours using the 'Automated Mentor' guide for new hires." },
          { title: 'Knowledge Scaling', description: "The self-service guide allowed the research team to scale support without proportional headcount growth." }
        ]
      }
    ],
    metrics: [
      { title: 'Time-to-Insight', value: '40%', description: "Reduction in 'Time-to-Insight'", detail: 'Achieved through standardized logic-gates and templates.' },
      { title: 'Operational Savings', value: '1,700+', description: 'Annual Design Hours Saved', detail: 'Direct impact on organizational velocity and resource allocation.' }
    ],
    learnings: [
      { title: 'Governance as Enabler', description: 'Standardization is not about restriction; it is about providing the guardrails that allow designers to move faster with higher confidence.' },
      { title: 'Infrastructure for Impact', description: 'The most powerful research tools are those that integrate seamlessly into existing design workflows.' },
      { title: 'Data Democracy', description: 'Making research searchable transforms it from a one-time project artifact into a living business asset.' },
    ]
  },
  'mahindra-finance': {
    title: 'Designing for Trust & Growth',
    subtitle: "Streamlining financial products into a seamless 'Life Companion' experience.",
    heroTag: 'Financial Ecosystem Strategy',
    contribution: ['UX Strategy', 'Financial Journey Mapping', 'Cross-selling Logic', 'High-Fidelity Design'],
    role: 'Senior UX Consultant | Lead Designer',
    focus: "Transforming a transactional financial app into a long-term life companion that grows with the user's life stages.",
    primaryGoal: "To eliminate friction in complex financial journeys and drive business growth through contextual, trust-based empowerment.",
    outcomes: [
      { value: '30%', description: 'Increase in Customer Retention' },
      { value: '25%', description: 'Boost in Cross-selling Efficiency' },
      { value: '35%', description: 'Rise in Mobile-First User Engagement' },
    ],
    challenges: [
      { title: 'The Audit', description: "Cognitive overload caused by fragmented apps and a lack of personalized financial guidance." },
      { title: 'The Benchmarking', description: "Missed revenue due to siloed data and inefficient cross-selling of insurance and loan products." },
      { title: 'The Strategy', description: "Inconsistent design language across the ecosystem leading to user distrust and high churn." },
    ],
    rationales: [
      {
        title: 'The Life Stages Framework (Mental Models)',
        icon: 'Users',
        points: [
          { title: 'Design Solution', description: "We designed a 'Life Stages' map tailored for two distinct personas: the Salaried Professional (Wealth Growth) and the Transport Operator (Asset & Business Management)." },
          { title: 'Impact', description: "By aligning product offerings with major life milestones, we moved from generic services to proactive financial partnership." }
        ]
      },
      {
        title: 'Contextual Revenue Growth (Nudges)',
        icon: 'BellRing',
        points: [
          { title: 'Strategic Integration', description: "Integrated 'Contextual Nudges' that suggest relevant products like insurance or top-up loans at the exact moment of user need." },
          { title: 'Result', description: "This non-intrusive approach directly drove a 25% increase in cross-selling conversions." }
        ]
      },
      {
        title: 'Visual Trust & Data Clarity',
        icon: 'Eye',
        points: [
          { title: 'Design Rationale', description: "Shifted from wireframes to the final Dark-themed UI that prioritizes data legibility and demystifies complex assets and liabilities." },
          { title: 'Confidence', description: "Clean, professional data visualization significantly increased user confidence in performing high-value transactions." }
        ]
      }
    ],
    metrics: [
      { title: 'Retention Growth', value: '30%', description: 'Increase in Customer Retention', detail: 'Achieved through personalized guidance and seamless UX.' },
      { title: 'Engagement Surge', value: '35%', description: 'Rise in Mobile-First User Engagement', detail: 'Direct result of the intuitive, simplified life-companion interface.' }
    ],
    learnings: [
      { title: 'Empowerment vs Transactions', description: 'By shifting the narrative from "scarcity" to "empowerment," we transformed a transactional app into a long-term life companion that grows with the user.' },
      { title: 'Context is Everything', description: 'Financial products are most successful when offered at the precise moment they solve a real-life need.' },
      { title: 'Trust through Consistency', description: 'A unified design language is not just aesthetic; it is the foundation of trust in a financial ecosystem.' },
    ]
  },
  'thermax-edge': {
    title: 'Industrial UX Audit',
    subtitle: "Benchmarking 'Customer Connect'",
    heroTag: 'UX Audit & Research Benchmarking',
    contribution: ['UX Audit & Heuristics', 'Research Benchmarking', 'Information Architecture', 'Design Strategy'],
    role: 'UX Strategy Consultant',
    focus: "Identifying friction and benchmarking task success rates for the 'Customer Connect' ecosystem.",
    primaryGoal: 'Defining a scalable roadmap and benchmarking performance to justify the ROI of a strategic overhaul.',
    outcomes: [
      { value: '70+', description: 'Critical Friction Points identified and mapped for resolution.' },
      { value: '30%', description: 'Roadmap for a reduction in task completion time.' },
      { value: '100%', description: 'Alignment on a new Information Architecture across all business units.' },
    ],
    methodology: [
      { icon: <ClipboardCheck className="w-8 h-8 text-primary" />, title: 'Heuristic Evaluation', description: 'Applied 10 Usability Heuristics to identify severe interface violations affecting operational safety.' },
      { icon: <Users className="w-8 h-8 text-primary" />, title: 'User Task Analysis', description: 'Deep-dive interviews and observations with 70+ Plant Managers to map 20+ critical operational paths.' },
      { icon: <BarChart3 className="w-8 h-8 text-primary" />, title: 'Research Benchmarking', description: 'Quantitative performance measurement against industry standards to justify the ROI of design debt resolution.' },
      { icon: <Map className="w-8 h-8 text-primary" />, title: 'Strategic Roadmap', description: 'A prioritized 12-month evolution blueprint balanced against technical feasibility and business urgency.' },
    ],
    artefacts: [
      { title: 'Heuristic Violation Map', count: '45 Points', description: 'Identified UI elements leading to data entry errors.' },
      { title: 'Task Success Benchmarks', count: '12 Metrics', description: 'Quantifiable time-on-task measurements for core flows.' },
      { title: 'Systemic Pain Points', count: '70+ Points', description: 'Comprehensive registry of cross-platform friction areas.' },
      { title: 'Unified IA Blueprint', count: 'V1.0 Draft', description: 'Standardized structure for all future industrial modules.' },
    ],
    challenges: [
      { title: 'The Audit', description: "Identified significant 'Friction Debt' in the legacy IA, leading to 70+ identified pain points across the platform." },
      { title: 'Benchmarking', description: "Benchmarked 'Task Success Rates' against industry standards, revealing a 30% lag in critical maintenance workflows." },
      { title: 'The Strategy', description: "Absence of a North Star design language, requiring a unified strategy to prevent fragmented development across global teams." },
    ],
    rationales: [
      {
        title: 'Audit Methodology (Heuristics)',
        icon: 'ClipboardCheck',
        points: [
          { title: 'Analysis', description: "Detail the heuristic evaluation and plant visits. Audited task flows for Plant Heads and Managers to identify high-risk friction areas." },
          { title: 'Insight', description: "Identified systemic usability issues that directly impacted plant operational safety and data entry accuracy." }
        ]
      },
      {
        title: 'Research Benchmarking (70+ Participants)',
        icon: 'BarChart3',
        points: [
          { title: 'Process', description: "Describe the benchmarking process with 70+ participants. We didn't just design; we measured current performance to justify ROI." },
          { title: 'Data-Driven Validation', description: "Quantifiable metrics allowed stakeholders to see the direct correlation between UX friction and operational downtime." }
        ]
      },
      {
        title: 'Strategic Roadmap (The Blueprint)',
        icon: 'Map',
        points: [
          { title: 'Implementation', description: "Explain the Proposed IA and Task Flow Recommendations. This served as the master blueprint for the design team." },
          { title: 'Scalability', description: "A unified Information Architecture ensures that future features can be integrated without increasing user cognitive load." }
        ]
      }
    ],
    metrics: [
      { title: 'Audit Value', value: '70+', description: 'Critical Friction Points identified', detail: 'Mapped for immediate resolution in the next development cycle.' },
      { title: 'Efficiency Goal', value: '30%', description: 'Target Reduction in Task Time', detail: 'Achieved through streamlined maintenance and booking workflows.' }
    ],
    learnings: [
      { title: 'Data over Opinion', description: 'A UX Audit isn\'t just about finding what\'s broken; it\'s about defining the ROI of fixing it.' },
      { title: 'Contextual Reality', description: 'Visiting energy plants revealed that "desk-side" design doesn\'t account for high-pressure industrial environments.' },
      { title: 'Master Blueprints', description: 'By benchmarking the current state, we gave the design team the data-driven confidence to build a world-class industrial hub.' },
    ]
  }
};

const IconMap: Record<string, any> = {
  MapPin,
  ShieldCheck,
  Zap,
  Layers,
  Rocket,
  BellRing,
  Eye,
  Users,
  Search,
  ClipboardCheck,
  BarChart3,
  Map,
  Microscope,
  FileSearch,
  Activity,
  Network
};

export default function ProjectPage({ params: paramsPromise }: { params: Promise<{ slug: string }> }) {
  const params = use(paramsPromise);
  const project = useMemo(() => projectData[params.slug] || projectData['vida'], [params.slug]);

  const showImages = params.slug !== 'thermax-edge';
  const isThermax = params.slug === 'thermax-edge';
  const sectionPadding = showImages ? "py-20 md:py-24" : "py-12 md:py-16";

  const imagePrefix = 
    params.slug === 'design-research-ops' ? 'project2' : 
    params.slug === 'mahindra-finance' ? 'project3' : 
    params.slug === 'maplegeni' ? 'project4' :
    'project1';

  const heroImage = PlaceHolderImages.find(p => p.id === `${imagePrefix}-image-1`);
  const projectImage1 = PlaceHolderImages.find(p => p.id === `${imagePrefix}-image-2`);
  const projectImage2 = PlaceHolderImages.find(p => p.id === `${imagePrefix}-image-3`);
  const projectImage3 = PlaceHolderImages.find(p => p.id === `${imagePrefix}-image-4`);
  const projectImage4 = PlaceHolderImages.find(p => p.id === `${imagePrefix}-image-5`);
  const projectImage5 = PlaceHolderImages.find(p => p.id === `${imagePrefix}-image-7`);
  const projectImage6 = PlaceHolderImages.find(p => p.id === `${imagePrefix}-image-6`);

  // Parallax Hero effect
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const heroBlur = useTransform(scrollYProgress, [0, 1], ["blur(0px)", "blur(10px)"]);

  const experienceEnhancers = [
    { icon: <Package className="w-8 h-8 text-primary" />, title: 'Services and Subscriptions', description: 'Drive subscriptions and show value with contextual nudges for pre-paid services.' },
    { icon: <FileText className="w-8 h-8 text-primary" />, title: 'Reports and Analytics', description: 'Provided client with performance data tracking, analytics, and insightful reports.' },
    { icon: <Navigation className="w-8 h-8 text-primary" />, title: 'Tailored Navigation', description: 'Personalized navigation to increase user engagement.' },
    { icon: <Phone className="w-8 h-8 text-primary" />, title: 'Roadside Assistance', description: 'Dependable roadside assistance for emergencies and breakdowns.' },
    { icon: <Route className="w-8 h-8 text-primary" />, title: 'Custom Riding Mode', description: 'Streamline journeys with our centralized route planner and access.' },
    { icon: <Shield className="w-8 h-8 text-primary" />, title: 'Priority Safety and Security', description: 'Enhanced user control and visibility of vehicle usage and status for safer and more secure driving.' },
    { icon: <Fence className="w-8 h-8 text-primary" />, title: 'Geo-Fencing', description: 'Boost sales by offering informative content to aid decision-making on website and app.' },
  ];

  const customerExperienceImpact = [
    { icon: <Users className="w-8 h-8 text-primary" />, title: 'The Bigger Picture', description: 'Empowering users to engage and participate in a larger community for a sense of inclusivity and involvement.' },
    { icon: <Cog className="w-8 h-8 text-primary" />, title: 'Easy and Quick Maintenance', description: 'Using an advanced system that proactively alerts users of potential issues and simplifies maintenance.' },
    { icon: <Ear className="w-8 h-8 text-primary" />, title: 'Assistance and Support', description: "Providing a comprehensive and supportive experience as a dependable companion for the user's journey." },
    { icon: <Cloud className="w-8 h-8 text-primary" />, title: 'Eco-friendly Tools', description: "Promoting eco-conscious choices by displaying users' eco-footprint as earth points." },
    { icon: <CheckCircle className="w-8 h-8 text-primary" />, title: 'Hassle Free Ownership', description: 'Leveraging intelligent technology for personalized and relevant recommendations and insights.' },
  ];

  return (
    <div className="bg-background text-foreground" ref={containerRef}>
      <Header />
      <main>
        {/* Hero Section */}
        <section className={cn("w-full relative overflow-hidden flex items-center", showImages ? "h-screen" : "min-h-[60vh] md:min-h-[70vh]")}>
          <motion.div 
            style={{ scale: heroScale, opacity: heroOpacity, filter: heroBlur }}
            className="absolute inset-0"
          >
            {showImages && heroImage ? (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover"
                data-ai-hint={heroImage.imageHint}
                priority
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-background" />
            )}
            <div className="absolute inset-0 bg-black/50" />
          </motion.div>
          <div className="container mx-auto px-4 sm:px-8 md:px-20 relative z-10 flex flex-col justify-end h-full pb-20 md:pb-32">
            <FadeIn>
              <p className="font-headline font-semibold text-lg md:text-xl text-white/80 text-left">
                {project.heroTag}
              </p>
            </FadeIn>
            <FadeIn>
              <h1 className="font-headline font-semibold text-4xl md:text-5xl lg:text-7xl text-white leading-tight mt-4 text-left">
                {project.subtitle}
              </h1>
            </FadeIn>
            <FadeIn>
              <h1 className="font-headline font-semibold text-4xl md:text-5xl lg:text-7xl text-white leading-tight mt-2 text-left">
                {project.title}
              </h1>
            </FadeIn>
          </div>
        </section>

        {/* Contribution Section */}
        <section className={cn("bg-background text-foreground relative", sectionPadding)}>
          <div className="container mx-auto px-4 sm:px-8 md:px-20 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
              <motion.div {...motionProps}>
                <FadeIn>
                  <h2 className="font-headline font-semibold text-xl md:text-2xl text-foreground text-left">
                    My Contribution
                  </h2>
                </FadeIn>
                 <div className="text-primary text-lg md:text-xl leading-relaxed mt-4">
                  {project.contribution.map((item: string, i: number) => (
                    <p key={i}>{item}</p>
                  ))}
                </div>
              </motion.div>
              <motion.div {...motionProps} transition={{ ...motionProps.transition, delay: 0.1 }}>
                <FadeIn>
                  <h2 className="font-headline font-semibold text-xl md:text-2xl text-foreground text-left">
                    My Role
                  </h2>
                </FadeIn>
                <FadeIn>
                  <p className="text-primary text-lg md:text-xl leading-relaxed mt-4 text-left">
                    {project.role}
                  </p>
                </FadeIn>
              </motion.div>
              <motion.div {...motionProps} transition={{ ...motionProps.transition, delay: 0.2 }}>
                <FadeIn>
                  <h2 className="font-headline font-semibold text-xl md:text-2xl text-foreground text-left">
                    Project Focus
                  </h2>
                </FadeIn>
                <FadeIn>
                  <p className="text-primary text-lg md:text-xl leading-relaxed mt-4 text-left">
                    {project.focus}
                  </p>
                </FadeIn>
              </motion.div>
               <motion.div {...motionProps} transition={{ ...motionProps.transition, delay: 0.3 }}>
                <FadeIn>
                  <h2 className="font-headline font-semibold text-xl md:text-2xl text-foreground text-left">
                    Primary Goal
                  </h2>
                </FadeIn>
                <FadeIn>
                  <p className="text-primary text-lg md:text-xl leading-relaxed mt-4 text-left">
                    {project.primaryGoal}
                  </p>
                </FadeIn>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Audit Methodology (Only for Thermax) */}
        {isThermax && project.methodology && (
          <section className={cn("bg-card text-card-foreground relative", sectionPadding)}>
            <div className="container mx-auto px-4 sm:px-8 md:px-20 relative z-10">
              <FadeIn>
                <h2 className="font-headline font-semibold text-3xl md:text-4xl text-primary mb-12 text-left">
                  Research Methodology
                </h2>
              </FadeIn>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {project.methodology.map((item: any, index: number) => (
                  <motion.div 
                    key={index} 
                    {...motionProps} 
                    transition={{ ...motionProps.transition, delay: 0.1 * index }}
                    className="p-8 border border-border rounded-2xl bg-background shadow-sm hover:border-primary/30 transition-colors"
                  >
                    <div className="mb-4">{item.icon}</div>
                    <h3 className="font-headline font-semibold text-xl text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Key Outcomes Section */}
        <section className={cn("bg-background text-foreground relative", sectionPadding)}>
            <div className="container mx-auto px-4 sm:px-8 md:px-20 relative">
                <FadeIn>
                    <h2 className="font-headline font-semibold text-3xl md:text-4xl text-foreground mb-16 text-left">
                      Key Outcomes
                    </h2>
                </FadeIn>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 lg:gap-20">
                    {project.outcomes.map((outcome: any, index: number) => (
                         <motion.div 
                            key={index} 
                            {...motionProps} 
                            transition={{ ...motionProps.transition, delay: 0.1 * (index + 1) }}
                            className="flex flex-col items-start gap-4"
                        >
                            <span className="font-headline font-bold text-5xl md:text-6xl text-primary leading-none shrink-0">
                              <Counter value={outcome.value} />
                            </span>
                            <p className="text-lg md:text-xl text-muted-foreground leading-tight">{outcome.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

        {/* Audit Artefacts (Only for Thermax) */}
        {isThermax && project.artefacts && (
          <section className={cn("bg-background text-foreground relative", sectionPadding)}>
            <div className="container mx-auto px-4 sm:px-8 md:px-20 relative z-10">
              <div className="max-w-4xl">
                <FadeIn>
                  <h2 className="font-headline font-semibold text-3xl md:text-4xl text-foreground mb-12 text-left">
                    Audit Deliverables & Artefacts
                  </h2>
                </FadeIn>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.artefacts.map((artefact: any, index: number) => (
                    <motion.div 
                      key={index}
                      {...motionProps}
                      className="flex items-start p-6 bg-card border border-border rounded-xl"
                    >
                      <div className="mr-4 mt-1">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-primary font-bold text-xs">{index + 1}</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-headline font-semibold text-lg text-foreground">{artefact.title}</h4>
                        <p className="text-primary font-bold text-sm mb-1">{artefact.count}</p>
                        <p className="text-sm text-muted-foreground">{artefact.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
        
        {/* Strategic Gap Section */}
        <section className={cn("bg-background text-foreground relative", sectionPadding)}>
          <div className="container mx-auto px-4 sm:px-8 md:px-20 relative z-10">
            <div className="max-w-4xl">
              <motion.div {...motionProps} className="flex items-center gap-4">
                <Target className="w-8 h-8 text-primary" />
                 <FadeIn>
                  <h2 className="font-headline font-semibold text-2xl md:text-3xl text-foreground text-left">
                    Strategic Gap Analysis
                  </h2>
                </FadeIn>
              </motion.div>
              <FadeIn>
                <p className="font-headline text-4xl md:text-5xl font-semibold text-primary leading-snug md:leading-relaxed mt-8 text-left">
                  Our evaluation identified critical friction points that hindered operational velocity.
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Core Challenge Section */}
        <section className={cn("bg-background text-foreground relative", sectionPadding)}>
          <div className="container mx-auto px-4 sm:px-8 md:px-20 relative z-10">
            <div className="max-w-4xl">
              <ul className="space-y-8">
                {project.challenges.map((challenge: any, index: number) => (
                  <motion.li 
                    key={index}
                    {...motionProps}
                    transition={{ ...motionProps.transition, delay: 0.1 * (index + 1) }}
                    className="flex items-start"
                  >
                    <span className="text-primary mr-4 mt-1">&#8226;</span>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-foreground">{challenge.title}: </span>
                      {challenge.description}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {showImages && (
          <section className="py-10 md:py-12 bg-background">
              <div className="container mx-auto px-4 sm:px-8 md:px-20 grid grid-cols-1 gap-8">
                  {projectImage1 && (
                      <motion.div {...motionProps} className="w-full relative rounded-2xl overflow-hidden bg-muted">
                          <Image
                              src={projectImage1.imageUrl}
                              alt={projectImage1.description}
                              width={1280}
                              height={720}
                              className="w-full h-auto object-contain"
                              data-ai-hint={projectImage1.imageHint}
                          />
                      </motion.div>
                  )}
              </div>
          </section>
        )}

        {/* Rationale Blocks */}
        {project.rationales.map((block: any, blockIdx: number) => {
          const RationaleIcon = IconMap[block.icon] || Search;
          return (
            <div key={blockIdx}>
              <section className={cn("bg-background text-foreground relative", sectionPadding)}>
                <div className="container mx-auto px-4 sm:px-8 md:px-20 relative z-10">
                  <div className="max-w-4xl">
                    <motion.div {...motionProps} className="flex items-center gap-4">
                      <RationaleIcon className="w-8 h-8 text-primary" />
                      <FadeIn>
                        <h2 className="font-headline font-semibold text-2xl md:text-3xl text-foreground text-left">
                          {block.title}
                        </h2>
                      </FadeIn>
                    </motion.div>
                  </div>
                </div>
              </section>
              
              {showImages && (
                <section className="py-10 md:py-12 bg-background">
                  <div className="container mx-auto px-4 sm:px-8 md:px-20">
                    {params.slug === 'design-research-ops' && blockIdx === 2 ? (
                        <motion.div {...motionProps} className="w-full aspect-video relative rounded-2xl overflow-hidden bg-muted border border-border">
                            <iframe 
                                className="w-full h-full"
                                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fsbg0dKpE8BV4MnGFdoTDsu%2Fportfolio%3Fpage-id%3D1403%253A173%26node-id%3D1403-7250%26viewport%3D-2931%252C-1913%252C0.21%26t%3Df3q7lEBvUcL4G0Ub-8%26scaling%3Dscale-down-width%26content-scaling%3Dfixed%26starting-point-node-id%3D1403%253A7250%26hide-ui%3D1" 
                                allowFullScreen
                            />
                        </motion.div>
                    ) : (
                      blockIdx % 2 === 0 ? projectImage2 && (
                        <motion.div {...motionProps} className="w-full relative rounded-2xl overflow-hidden bg-muted">
                            <Image
                                src={projectImage2.imageUrl}
                                alt={projectImage2.description}
                                width={1280}
                                height={720}
                                className="w-full h-auto object-contain"
                            />
                        </motion.div>
                      ) : projectImage3 && (
                        <motion.div {...motionProps} className="w-full relative rounded-2xl overflow-hidden bg-muted">
                            <Image
                                src={projectImage3.imageUrl}
                                alt={projectImage3.description}
                                width={1280}
                                height={720}
                                className="w-full h-auto object-contain"
                            />
                        </motion.div>
                      )
                    )}
                  </div>
                </section>
              )}

              <section className={cn("bg-background text-foreground", sectionPadding)}>
                <div className="container mx-auto px-4 sm:px-8 md:px-20">
                  <div className="max-w-4xl">
                    <ul className="space-y-8">
                      {block.points.map((point: any, pIdx: number) => (
                        <motion.li
                          key={pIdx}
                          {...motionProps}
                          transition={{ ...motionProps.transition, delay: 0.1 * (pIdx + 1) }}
                          className="flex items-start"
                        >
                          <span className="text-primary mr-4 mt-1">&#8226;</span>
                          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                            <span className="font-semibold text-primary">{point.title}: </span>
                            {point.description}
                          </p>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          );
        })}

        {/* Quantifiable Outcomes Section */}
        <section className={cn("bg-background text-foreground", sectionPadding)}>
            <div className="container mx-auto px-4 sm:px-8 md:px-20">
                <div className="max-w-4xl">
                    <motion.div {...motionProps} className="flex items-center gap-4 mb-4">
                        <TrendingUp className="w-8 h-8 text-primary" />
                        <FadeIn>
                          <h2 className="font-headline font-semibold text-3xl md:text-4xl text-foreground text-left">
                            Quantifiable Impact
                          </h2>
                        </FadeIn>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                        {project.metrics.map((metric: any, mIdx: number) => (
                          <motion.div key={mIdx} {...motionProps} transition={{ ...motionProps.transition, delay: 0.2 + mIdx * 0.1 }}>
                              <Card className="bg-card border-border p-6 h-full flex flex-col">
                                  <CardHeader className="p-0">
                                  <CardTitle className="font-headline text-lg text-muted-foreground">{metric.title}</CardTitle>
                                  </CardHeader>
                                  <CardContent className="p-0 mt-4 flex-grow flex flex-col justify-center">
                                      <p className="font-headline font-bold text-5xl md:text-6xl text-primary">
                                        <Counter value={metric.value} />
                                      </p>
                                      <p className="text-lg text-foreground mt-2">{metric.description}</p>
                                      <p className="text-base text-muted-foreground mt-4">{metric.detail}</p>
                                  </CardContent>
                              </Card>
                          </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* Experience Enhancers (Only for VIDA) */}
        {params.slug === 'vida' && (
          <section className={cn("bg-background text-foreground", sectionPadding)}>
            <div className="container mx-auto px-4 sm:px-8 md:px-20">
              <FadeIn>
                <h2 className="font-headline font-semibold text-3xl md:text-4xl text-primary mb-4 text-left">
                  Key Experience Enhancers
                </h2>
              </FadeIn>
              <FadeIn>
                <p className="text-lg md:text-xl text-muted-foreground mb-16 max-w-2xl text-left">
                  A user journey that fulfils user needs and expectations.
                </p>
              </FadeIn>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                {experienceEnhancers.map((enhancer, index) => (
                  <motion.div
                    key={index}
                    {...motionProps}
                    transition={{ ...motionProps.transition, delay: 0.2 + index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0">{enhancer.icon}</div>
                    <div>
                      <h3 className="font-headline font-semibold text-xl text-foreground">
                        {enhancer.title}
                      </h3>
                      <p className="text-muted-foreground mt-1">
                        {enhancer.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Key Learnings Section */}
        <section className={cn("bg-background text-foreground", sectionPadding)}>
          <div className="container mx-auto px-4 sm:px-8 md:px-20">
            <div className="max-w-4xl">
              <motion.div {...motionProps} className="flex items-center gap-4 mb-8">
                <Lightbulb className="w-8 h-8 text-primary" />
                <FadeIn>
                  <h2 className="font-headline font-semibold text-3xl md:text-4xl text-foreground text-left">
                    Key Learnings & Reflection
                  </h2>
                </FadeIn>
              </motion.div>
              <ul className="space-y-8">
                {project.learnings.map((learning: any, index: number) => (
                  <motion.li
                    key={index}
                    {...motionProps}
                    transition={{ ...motionProps.transition, delay: 0.2 + index * 0.1 }}
                    className="flex items-start"
                  >
                    <span className="text-primary mr-4 mt-1">&#8226;</span>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-foreground">{learning.title}: </span>
                      {learning.description}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Customer Experience Impact (VIDA only) */}
        {params.slug === 'vida' && (
          <section className={cn("bg-background text-foreground", sectionPadding)}>
            <div className="container mx-auto px-4 sm:px-8 md:px-20">
              <motion.div {...motionProps} className="max-w-4xl mb-16">
                <FadeIn>
                  <h2 className="font-headline font-semibold text-3xl md:text-4xl text-primary mb-4 text-left">
                    Customer Experience Impact
                  </h2>
                </FadeIn>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {customerExperienceImpact.map((item, index) => (
                  <motion.div 
                    key={index}
                    {...motionProps} 
                    transition={{...motionProps.transition, delay: 0.2 + (index * 0.1)}}
                    className="bg-card border border-border rounded-2xl p-8 space-y-4"
                  >
                    <div className="flex-shrink-0">{item.icon}</div>
                    <div>
                      <h3 className="font-headline font-semibold text-xl text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground mt-1">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Call to Action Section */}
        <section className="pb-20 container mx-auto px-4 sm:px-8 md:px-20">
          <div className="flex flex-col items-start gap-6">
            <div className="w-[84px] h-[84px] rounded-full bg-primary mb-6"></div>
            <FadeIn>
              <p className="font-headline font-semibold text-xl md:text-2xl tracking-normal text-muted-foreground text-left">
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
