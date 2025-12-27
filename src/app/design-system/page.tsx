

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SplitText from '@/components/SplitText';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Menu } from 'lucide-react';
import PillButton from '@/components/PillButton';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from 'next/link';
import ProjectPageCard from '@/components/ProjectPageCard';

const colors = [
    { name: 'Primary', light: 'bg-primary', dark: 'dark:bg-primary' },
    { name: 'Secondary', light: 'bg-secondary', dark: 'dark:bg-secondary' },
    { name: 'Background', light: 'bg-background', dark: 'dark:bg-background' },
    { name: 'Foreground', light: 'bg-foreground', dark: 'dark:bg-foreground' },
    { name: 'Card', light: 'bg-card', dark: 'dark:bg-card' },
    { name: 'Popover', light: 'bg-popover', dark: 'dark:bg-popover' },
];

const typography = [
    { name: 'Headline', className: 'font-headline text-5xl', text: 'Poppins', size: '5xl (3rem)' },
    { name: 'Subtitle', className: 'font-subtitle text-4xl', text: 'Playfair Display', size: '4xl (2.25rem)' },
    { name: 'Body', className: 'font-body text-3xl', text: 'Poppins', size: '3xl (1.875rem)' },
]

const navItems = [
    { href: '/projects', label: 'Projects' },
    { href: '/#know-me-better', label: 'Know me better' },
    { href: '/learnings', label: 'Learnings & Reflection' },
    { href: '/design-system', label: 'Design System' },
  ];

export default function DesignSystemPage() {
  return (
    <div className="bg-background">
      <Header />
      <main className="container mx-auto px-4 sm:px-8 md:px-20 py-16 md:py-24">
        <div className="flex flex-col items-start gap-6">
          <SplitText 
            text="Design System"
            tag="h1"
            className="font-headline font-semibold text-5xl md:text-8xl lg:text-[100px] leading-tight tracking-wide text-foreground"
            textAlign="left"
          />
          <p className="font-subtitle text-lg md:text-2xl lg:text-[32px] leading-[28px] md:leading-[34px] lg:leading-[42px] text-muted-foreground max-w-2xl">
            The foundational elements of the visual identity, organized by atomic design principles.
          </p>
        </div>

        {/* Atoms Section */}
        <section className="mt-16">
          <h2 className="font-headline text-3xl md:text-4xl font-semibold mb-8">Atoms</h2>
          <div className="space-y-12">
            <div>
              <h3 className="font-headline text-2xl font-semibold mb-4">Colors</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
                {colors.map(color => (
                  <div key={color.name}>
                    <h4 className="font-headline text-xl font-semibold mb-4 text-foreground">{color.name}</h4>
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col items-center gap-2">
                        <div className={`w-24 h-24 rounded-full ${color.light} border-2 border-border`}></div>
                        <p className="text-sm text-muted-foreground">Light</p>
                      </div>
                       <div className="flex flex-col items-center gap-2">
                        <div className={`w-24 h-24 rounded-full ${color.dark} border-2 border-border`}></div>
                        <p className="text-sm text-muted-foreground">Dark</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-headline text-2xl font-semibold mb-4">Typography</h3>
              <div className="space-y-8">
                  {typography.map(type => (
                      <div key={type.name}>
                          <p className="text-sm text-muted-foreground mb-2">{type.name} - {type.size}</p>
                          <p className={type.className}>{type.text}</p>
                      </div>
                  ))}
              </div>
            </div>

            <div>
                <h3 className="font-headline text-2xl font-semibold mb-4">Buttons</h3>
                <div className="flex flex-wrap gap-4 items-center">
                     <Button className="rounded-full">Button</Button>
                     <PillButton href="#" className="group">
                        <span className="group-hover:font-semibold">Button</span>
                        <ArrowRight />
                    </PillButton>
                </div>
            </div>
          </div>
        </section>

        {/* Molecules Section */}
        <section className="mt-16">
            <h2 className="font-headline text-3xl md:text-4xl font-semibold mb-8">Molecules</h2>
            <div className="space-y-12">
                <div>
                    <h3 className="font-headline text-2xl font-semibold mb-4">Card</h3>
                     <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        <Card>
                            <CardHeader>
                                <CardTitle>Card Title</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>This is the content of the card. It can hold text, images, or other components.</p>
                            </CardContent>
                        </Card>
                        <ProjectPageCard 
                            title="Sample Project"
                            role="UX/UI Designer"
                            description="This is a sample description for a project card to demonstrate its appearance in the design system."
                        />
                    </div>
                </div>
            </div>
        </section>

        {/* Organisms Section */}
        <section className="mt-16">
            <h2 className="font-headline text-3xl md:text-4xl font-semibold mb-8">Organisms</h2>
             <div className="space-y-12">
                <div>
                    <h3 className="font-headline text-2xl font-semibold mb-4">Header</h3>
                    <p className="text-muted-foreground mb-4">The header contains the primary navigation and theme toggle.</p>
                     <div className="relative border border-border rounded-lg p-4">
                        <Header />
                    </div>
                </div>
                 <div>
                    <h3 className="font-headline text-2xl font-semibold mb-4">Footer</h3>
                    <p className="text-muted-foreground mb-4">The footer contains contact information and site credits.</p>
                     <div className="relative border border-border rounded-lg">
                        <Footer />
                    </div>
                </div>
             </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
