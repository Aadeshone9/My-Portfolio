import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-[51px] w-full flex-row items-center justify-between bg-[#EDEDED] px-8 py-[13px] [border-bottom-left-radius:24px] [border-bottom-right-radius:24px] max-w-[1280px] left-1/2 -translate-x-1/2">
      <nav className="flex items-center gap-6">
        <Link href="/" className="text-sm font-medium text-gray-500 hover:text-black">
          Home
        </Link>
        <Link href="/about" className="text-sm font-medium text-gray-500 hover:text-black">
          About
        </Link>
        <Link href="/projects" className="text-sm font-medium text-gray-500 hover:text-black">
          Projects
        </Link>
        <Link href="/contact" className="text-sm font-medium text-gray-500 hover:text-black">
          Contact
        </Link>
      </nav>
      <Button>Get in touch</Button>
    </header>
  );
}
