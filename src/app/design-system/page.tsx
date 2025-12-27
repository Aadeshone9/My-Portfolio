
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SplitText from '@/components/SplitText';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import PillButton from '@/components/PillButton';

const colors = [
    { name: 'Background', variable: '--background', className: 'bg-background' },
    { name: 'Foreground', variable: '--foreground', className: 'bg-foreground' },
    { name: 'Card', variable: '--card', className: 'bg-card' },
    { name: 'Card Foreground', variable: '--card-foreground', className: 'bg-card-foreground' },
    { name: 'Popover', variable: '--popover', className: 'bg-popover' },
    { name: 'Popover Foreground', variable: '--popover-foreground', className: 'bg-popover-foreground' },
    { name: 'Primary', variable: '--primary', className: 'bg-primary' },
    { name: 'Primary Foreground', variable: '--primary-foreground', className: 'bg-primary-foreground' },
    { name: 'Secondary', variable: '--secondary', className: 'bg-secondary' },
    { name: 'Secondary Foreground', variable: '--secondary-foreground', className: 'bg-secondary-foreground' },
    { name: 'Muted', variable: '--muted', className: 'bg-muted' },
    { name: 'Muted Foreground', variable: '--muted-foreground', className: 'bg-muted-foreground' },
    { name: 'Accent', variable: '--accent', className: 'bg-accent' },
    { name: 'Accent Foreground', variable: '--accent-foreground', className: 'bg-accent-foreground' },
    { name: 'Destructive', variable: '--destructive', className: 'bg-destructive' },
    { name: 'Destructive Foreground', variable: '--destructive-foreground', className: 'bg-destructive-foreground' },
    { name: 'Border', variable: '--border', className: 'bg-border' },
    { name: 'Input', variable: '--input', className: 'bg-input' },
    { name: 'Ring', variable: '--ring', className: 'bg-ring' },
    { name: 'Footer', variable: '--footer', className: 'bg-footer' },
    { name: 'Footer Foreground', variable: '--footer-foreground', className: 'bg-footer-foreground' },
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {colors.map(color => (
              <Card key={color.name} className="overflow-hidden">
                <div className={`${color.className} h-24 w-full border-b`}></div>
                <CardContent className="p-4">
                  <p className="font-semibold">{color.name}</p>
                  <p className="text-sm text-muted-foreground">{color.variable}</p>
                </CardContent>
              </Card>
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
