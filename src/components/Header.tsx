import Link from 'next/link';
import PillNav from './PillNav';

export default function Header() {
  const navItems = [
    { href: '/projects', text: 'Projects' },
    { href: '/why-hire-me', text: 'Why Hire Me' },
    { href: '/learnings', text: 'Learnings & Reflection' },
  ];

  return (
    <header className="sticky top-0 z-50 mx-auto h-auto w-[90%] bg-[#EDEDED] [border-bottom-left-radius:24px] [border-bottom-right-radius:24px]">
      <div className="container mx-auto flex h-[51px] items-center justify-between">
        <Link href="/" className="font-headline font-semibold text-lg">
          Aadesh
        </Link>
        <PillNav items={navItems} />
      </div>
    </header>
  );
}
