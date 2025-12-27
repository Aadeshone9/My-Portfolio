
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
            <div className="space-y-8">
                <div>
                    <h3 className="font-headline text-2xl font-semibold mb-4">Call to Actions (CTAs)</h3>
                    <div className="flex flex-wrap gap-4 items-center">
                         <Button className="rounded-full">Button</Button>
                         <PillButton href="#" className="group">
                            <span className="group-hover:font-semibold">CTA</span>
                            <ArrowRight />
                        </PillButton>
                    </div>
                </div>
                <div>
                    <h3 className="font-headline text-2xl font-semibold mb-4">Cards</h3>
                    <div className='max-w-sm'>
                        <Card>
                            <CardHeader>
                                <CardTitle>Card Title</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>This is the content of the card. It can hold text, images, or other components.</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
                 <div>
                    <h3 className="font-headline text-2xl font-semibold mb-4">Mobile Elements</h3>
                    <p className="text-muted-foreground mb-4">This demonstrates the slide-out menu used on mobile devices.</p>
                     <Sheet>
                        <SheetTrigger asChild>
                        <Button variant="outline" size="icon" className="rounded-full">
                            <Menu className="h-[1.2rem] w-[1.2rem]" />
                            <span className="sr-only">Open menu</span>
                        </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                        <SheetHeader>
                            <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
                        </SheetHeader>
                        <nav className="flex flex-col gap-4 mt-8">
                            {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={"text-lg font-medium text-foreground"}
                            >
                                {item.label}
                            </Link>
                            ))}
                        </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
