
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SplitText from '@/components/SplitText';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import PillButton from '@/components/PillButton';

const colors = [
    { name: 'Primary', light: 'bg-[#F26302]', dark: 'bg-[#F57A1B]' },
    { name: 'Secondary', light: 'bg-[#84C5E3]', dark: 'bg-[#92D1ED]' },
    { name: 'Background', light: 'bg-[#F9F3F0]', dark: 'bg-[#111827]' },
    { name: 'Foreground', light: 'bg-[#31363F]', dark: 'bg-[#F9FAFB]' },
    { name: 'Card', light: 'bg-[#F9F3F0]', dark: 'bg-[#1C2433]' },
    { name: 'Footer', light: 'bg-[#1C2433]', dark: 'bg-[#1C2433]' },
];

const typography = [
    { name: 'Headline', className: 'font-headline text-5xl', text: 'Poppins', size: '5xl (3rem)' },
    { name: 'Subtitle', className: 'font-subtitle text-4xl', text: 'Playfair Display', size: '4xl (2.25rem)' },
    { name: 'Body', className: 'font-body text-3xl', text: 'Poppins', size: '3xl (1.875rem)' },
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {colors.map(color => (
              <div key={color.name}>
                <h3 className="font-headline text-xl font-semibold mb-4 text-foreground">{color.name}</h3>
                <div className="flex gap-4">
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
        </section>

        <section className="mt-16">
            <h2 className="font-headline text-3xl md:text-4xl font-semibold mb-8">Typography</h2>
            <div className="space-y-8">
                {typography.map(type => (
                    <div key={type.name}>
                        <p className="text-sm text-muted-foreground mb-2">{type.name} - {type.size}</p>
                        <p className={type.className}>{type.text}</p>
                    </div>
                ))}
            </div>
        </section>

        <section className="mt-16">
            <h2 className="font-headline text-3xl md:text-4xl font-semibold mb-8">Components</h2>
            <div>
                <h3 className="font-headline text-2xl font-semibold mb-4">Call to Actions (CTAs)</h3>
                <div className="flex flex-wrap gap-4 items-center">
                     <Button>Button</Button>
                     <PillButton href="#" className="group">
                        <span className="group-hover:font-semibold">CTA</span>
                        <ArrowRight />
                    </PillButton>
                </div>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
