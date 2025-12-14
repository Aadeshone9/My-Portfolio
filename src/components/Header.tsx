'use client';

import Link from 'next/link';
import PillNav from './PillNav';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const navItems = [
    { href: '/projects', label: 'Projects' },
    { href: '/why-hire-me', label: 'Why Hire Me' },
    { href: '/learnings', label: 'Learnings & Reflection' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm rounded-b-2xl">
      <div className="container mx-auto flex h-[51px] items-center justify-between py-[13px] px-8">
        <Link href="/" className="font-headline font-semibold text-lg text-foreground">
          Aadesh.one9.com
        </Link>
        <PillNav items={navItems} activeHref={pathname} />
      </div>
    </header>
  );
}
