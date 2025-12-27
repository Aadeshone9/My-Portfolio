
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SplitText from '@/components/SplitText';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Lock, Menu } from 'lucide-react';
import PillButton from '@/components/PillButton';
import SpotlightCard from '@/components/SpotlightCard';
import TiltedCard from '@/components/TiltedCard';
import ProjectPageCard from '@/components/ProjectPageCard';

const colors = [
    { name: 'Primary', light: 'bg-primary', dark: 'dark:bg-primary' },
    { name: 'Secondary', light: 'bg-secondary', dark: 'dark:bg-secondary' },
    { name: 'Background', light: 'bg-background', dark: 'dark:bg-background' },
    { name: 'Foreground', light: 'bg-foreground', dark: 'dark:bg-foreground' },
    { name: 'Card', light: 'bg-card', dark: 'dark:bg-card' },
    { name: 'Border', light: 'bg-border', dark: 'dark:bg-border' },
];

const typography = [
    { name: 'Headline 1 (H1)', className: 'font-headline text-5xl font-bold', text: 'Poppins Bold' },
    { name: 'Headline 2 (H2)', className: 'font-headline text-4xl font-semibold', text: 'Poppins SemiBold' },
    { name: 'Subtitle', className: 'font-subtitle text-2xl', text: 'Playfair Display' },
    { name: 'Body', className: 'font-body text-base', text: 'Poppins Regular' },
];

const icons = [
    { icon: <ArrowRight />, name: 'ArrowRight' },
    { icon: <Lock />, name: 'Lock' },
    { icon: <Menu />, name: 'Menu' },
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
            The foundational elements of the visual identity, organized by atomic design principles.
          </p>
        </div>

        <section className="mt-16">
          <h2 className="font-headline text-4xl font-semibold mb-8">Atoms</h2>
          <div className="space-y-12">
            <div>
              <h3 className="font-headline text-2xl font-semibold mb-4">Color Palette</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
                {colors.map(color => (
                  <div key={color.name}>
                    <h4 className="font-headline text-xl font-semibold mb-4 text-foreground">{color.name}</h4>
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col items-center gap-2">
                        <div className={`w-16 h-16 rounded-full ${color.light} border-2 border-border`}></div>
                        <p className="text-sm text-muted-foreground">Light</p>
                      </div>
                       <div className="flex flex-col items-center gap-2">
                        <div className={`w-16 h-16 rounded-full ${color.dark} border-2 border-border`}></div>
                        <p className="text-sm text-muted-foreground">Dark</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-headline text-2xl font-semibold mb-4">Typography</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {typography.map(type => (
                      <div key={type.name}>
                          <p className="text-sm text-muted-foreground mb-2">{type.name}</p>
                          <p className={type.className}>{type.text}</p>
                      </div>
                  ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-headline text-2xl font-semibold mb-4">Iconography</h3>
              <div className="flex flex-wrap gap-8 items-center">
                {icons.map(icon => (
                  <div key={icon.name} className="flex flex-col items-center gap-2 text-muted-foreground">
                    <div className="w-16 h-16 bg-card border border-border rounded-lg flex items-center justify-center">
                      {icon.icon}
                    </div>
                    <p className="text-xs">{icon.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16">
            <h2 className="font-headline text-4xl font-semibold mb-8">Molecules & Interactions</h2>
            <div className="space-y-12">
                <div>
                    <h3 className="font-headline text-2xl font-semibold mb-4">Buttons</h3>
                    <div className="space-y-8">
                        {/* Standard Button Row */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                            <div className="flex flex-col items-start gap-2">
                                <p className="text-muted-foreground text-sm">Default</p>
                                <Button className="rounded-full">Button</Button>
                            </div>
                            <div className="flex flex-col items-start gap-2">
                                <p className="text-muted-foreground text-sm">Hover (simulated)</p>
                                <Button className="rounded-full bg-primary/90">Button</Button>
                            </div>
                            <div className="flex flex-col items-start gap-2">
                                <p className="text-muted-foreground text-sm">Disabled</p>
                                <Button className="rounded-full" disabled>Button</Button>
                            </div>
                        </div>
                        {/* Pill Button Row */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                             <div className="flex flex-col items-start gap-2">
                                <p className="text-muted-foreground text-sm">Default</p>
                                <PillButton href="#" className="group">
                                    <span className="group-hover:font-semibold">Pill Button</span>
                                    <ArrowRight />
                                </PillButton>
                            </div>
                             <div className="flex flex-col items-start gap-2">
                                <p className="text-muted-foreground text-sm">Hover (simulated)</p>
                                <PillButton href="#" className="group is-active">
                                    <span className="group-hover:font-semibold">Pill Button</span>
                                    <ArrowRight />
                                </PillButton>
                            </div>
                             <div className="flex flex-col items-start gap-2">
                                <p className="text-muted-foreground text-sm">Disabled</p>
                                <PillButton href="#" className="group opacity-50 pointer-events-none">
                                    <span className="group-hover:font-semibold">Pill Button</span>
                                    <ArrowRight />
                                </PillButton>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="font-headline text-2xl font-semibold mb-4">Cards</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className='max-w-sm'>
                            <p className="text-muted-foreground mb-4">Standard Card</p>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Card Title</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p>This is the content of the card. It can hold text, images, or other components.</p>
                                </CardContent>
                            </Card>
                        </div>
                        <div className='max-w-sm'>
                            <p className="text-muted-foreground mb-4">Project Card</p>
                            <ProjectPageCard 
                                title="Sample Project"
                                role="UX/UI Designer"
                            />
                        </div>
                    </div>
                </div>


                <div>
                    <h3 className="font-headline text-2xl font-semibold mb-4">Interactions & Animations</h3>
                    <div className="space-y-8">
                        <div className="flex flex-col gap-4">
                            <p className="text-muted-foreground">Text Reveal Animation</p>
                             <SplitText 
                                text="Animated Text"
                                tag="h4"
                                className="font-headline font-semibold text-3xl text-foreground"
                                textAlign="left"
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                        <div className="flex flex-col gap-4">
                            <p className="text-muted-foreground">Spotlight Card</p>
                            <SpotlightCard className="p-8 rounded-2xl border border-border bg-card">
                            <h4 className="font-headline font-semibold text-lg text-foreground">Spotlight Effect</h4>
                            <p className="text-sm text-muted-foreground mt-2">Move your mouse over this card to see the spotlight effect.</p>
                            </SpotlightCard>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="text-muted-foreground">Tilted Card</p>
                            <TiltedCard>
                            <div className="p-8 rounded-2xl border border-border bg-card">
                                <h4 className="font-headline font-semibold text-lg text-foreground">3D Tilt Effect</h4>
                                <p className="text-sm text-muted-foreground mt-2">Move your mouse over this card to see the tilt effect.</p>
                            </div>
                            </TiltedCard>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
