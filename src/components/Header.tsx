
'use client';

import Link from 'next/link';
import PillNav from './PillNav';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { ThemeToggle } from './ThemeToggle';
import { Menu, Home } from 'lucide-react';
import { Button } from './ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { href: '/projects', label: 'Projects' },
    { href: '/#know-me-better', label: 'Know me better' },
    { href: '/learnings', label: 'Learnings & Reflection' },
  ];

  return (
    <div className="sticky top-0 z-50 w-full">
      <header
        className={cn(
          'w-[90%] mx-auto bg-header-background/80 backdrop-blur-sm rounded-b-2xl transition-shadow duration-300',
          isScrolled && 'shadow-lg shadow-primary/20 dark:shadow-primary/10'
        )}
      >
        <div className="container mx-auto flex h-[51px] items-center justify-between py-[13px] px-4 md:px-8">
          <Link href="/" aria-label="Home">
            <Home className="h-6 w-6 text-foreground hover:text-primary transition-colors" />
          </Link>
          <div className="hidden md:flex items-center gap-2">
            <PillNav items={navItems} activeHref={pathname} />
            <ThemeToggle />
          </div>
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            {isClient && (
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
                        className={cn(
                            "flex items-center gap-2 text-lg font-medium", 
                            pathname === item.href ? "text-primary" : "text-foreground"
                        )}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            )}
          </div>
        </div>
      </header>
    </div>
  );
}
