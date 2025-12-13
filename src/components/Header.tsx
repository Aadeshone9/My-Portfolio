import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 mx-auto h-auto w-[90%] bg-[#EDEDED] [border-bottom-left-radius:24px] [border-bottom-right-radius:24px]">
        <div className="container mx-auto flex h-[51px] items-center justify-between">
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
              Learnings &amp; Reflection
            </Link>
          </nav>
        </div>
    </header>
  );
}
