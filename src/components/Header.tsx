'use client';

import Link from 'next/link';
import PillNav from './PillNav';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

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
    { href: '/why-hire-me', label: 'Why Hire Me' },
    { href: '/learnings', label: 'Learnings & Reflection' },
  ];

  return (
    <div className="sticky top-0 z-50 w-full">
        <header className={cn(
            "w-[90%] mx-auto bg-background/80 backdrop-blur-sm rounded-b-2xl transition-shadow",
            isScrolled && "shadow-lg"
        )}>
        <div className="container mx-auto flex h-[51px] items-center justify-between py-[13px] px-8">
            <Link href="/" className="font-headline font-semibold text-lg text-foreground">
            Aadesh.one9.com
            </Link>
            <PillNav items={navItems} activeHref={pathname} />
        </div>
        </header>
    </div>
  );
}
