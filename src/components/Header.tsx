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
    <header className="sticky top-0 z-50 mx-auto h-auto w-[80%] bg-[#EDEDED] flex justify-start [border-bottom-left-radius:24px] [border-bottom-right-radius:24px]">
      <div className="container mx-auto flex h-[51px] items-center justify-between">
        <Link href="/" className="font-headline font-semibold text-lg">
          Aadesh
        </Link>
        <PillNav items={navItems} activeHref={pathname} />
      </div>
    </header>
  );
}
