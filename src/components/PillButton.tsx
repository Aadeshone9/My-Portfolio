'use client';
import Link from 'next/link';
import './PillButton.css';
import { cn } from '@/lib/utils';

type PillButtonProps = {
  children: React.ReactNode;
  href: string;
  className?: string;
};

const PillButton = ({
  children,
  href,
  className = '',
}: PillButtonProps) => {
  const cssVars = {
    ['--base']: 'transparent',
    ['--pill-bg']: 'hsl(var(--primary))',
    ['--hover-text']: 'hsl(var(--primary-foreground))',
    ['--pill-text']: 'hsl(var(--primary))',
  } as React.CSSProperties;

  return (
    <Link
      href={href}
      className={cn('pill-button', className)}
      style={cssVars}
    >
      <span className="pill-content">
        {children}
      </span>
    </Link>
  );
};

export default PillButton;
