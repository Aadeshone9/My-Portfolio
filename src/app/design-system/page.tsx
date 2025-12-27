
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SplitText from '@/components/SplitText';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import PillButton from '@/components/PillButton';

const colors = [
    { name: 'Primary', variable: '--primary', className: 'bg-primary' },
    { name: 'Primary Foreground', variable: '--primary-foreground', className: 'bg-primary-foreground' },
    { name: 'Secondary', variable: '--secondary', className: 'bg-secondary' },
    { name: 'Secondary Foreground', variable: '--secondary-foreground', className: 'bg-secondary-foreground' },
];

const typography = [
    { name: 'Headline', className: 'font-headline text-5xl', text: 'Poppins' },
    { name: 'Subtitle', className: 'font-subtitle text-4xl', text: 'Playfair Display' },
    { name: 'Body', className: 'font-body text-3xl', text: 'Inter' },
    { name: 'Code', className: 'font-code text-2xl', text: 'Monospace' },
]

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
            The foundational elements of the visual identity.
          </p>
        </div>

        <section className="mt-16">
          <h2 className="font-headline text-3xl md:text-4xl font-semibold mb-8">Colors</h2>
          <div className="flex flex-wrap gap-8">
            {colors.map(color => (
              <div key={color.name} className="flex flex-col items-center gap-4">
                <div className={`relative w-32 h-32 rounded-full ${color.className} border-2 ${color.name.includes('Foreground') ? 'border-muted' : 'border-border'}`}>
                    {(color.name === 'Primary Foreground' || color.name === 'Secondary Foreground') && (
                        <div className={`absolute inset-0 rounded-full ${color.name === 'Primary Foreground' ? 'bg-primary' : 'bg-secondary'} -z-10`}></div>
                    )}
                </div>
                <div className="text-center">
                  <p className="font-semibold">{color.name}</p>
                  <p className="text-sm text-muted-foreground">{color.variable}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
            <h2 className="font-headline text-3xl md:text-4xl font-semibold mb-8">Typography</h2>
            <div className="space-y-8">
                {typography.map(type => (
                    <div key={type.name}>
                        <p className="text-sm text-muted-foreground mb-2">{type.name}</p>
                        <p className={type.className}>{type.text}</p>
                    </div>
                ))}
            </div>
        </section>

        <section className="mt-16">
            <h2 className="font-headline text-3xl md:text-4xl font-semibold mb-8">Components</h2>
            <div className="space-y-8">
                <div>
                    <h3 className="font-headline text-2xl font-semibold mb-4">Buttons</h3>
                    <div className="flex flex-wrap gap-4 items-center">
                         <Button>Default Button</Button>
                         <Button variant="secondary">Secondary</Button>
                         <Button variant="destructive">Destructive</Button>
                         <Button variant="ghost">Ghost</Button>
                         <Button variant="link">Link</Button>
                         <Button variant="outline">Outline</Button>
                         <PillButton href="#" className="group">
                            <span className="group-hover:font-semibold">Pill Button</span>
                            <ArrowRight />
                        </PillButton>
                    </div>
                </div>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
