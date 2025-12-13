import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-auto w-full flex-row items-center justify-between bg-[#EDEDED] px-8 py-3 md:h-[51px] [border-bottom-left-radius:24px] [border-bottom-right-radius:24px] max-w-7xl mx-auto">
        <Link href="/" className="font-headline font-semibold text-lg">
            Aadesh
        </Link>
      <nav className="hidden md:flex items-center gap-6">
        <Link href="/projects" className="text-sm font-medium text-gray-500 hover:text-black">
          Projects
        </Link>
        <Link href="/why-hire-me" className="text-sm font-medium text-gray-500 hover:text-black">
          Why Hire Me
        </Link>
        <Link href="/learnings" className="text-sm font-medium text-gray-500 hover:text-black">
          Learnings and Reflection
        </Link>
      </nav>
    </header>
  );
}
