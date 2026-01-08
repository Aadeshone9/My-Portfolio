'use client';

import { cn } from '@/lib/utils';

type ShinyTextProps = {
  text: string;
  className?: string;
};

const ShinyText = ({ text, className }: ShinyTextProps) => {
  return (
    <span className={cn('shiny-text', className)}>
      {text}
    </span>
  );
};

export default ShinyText;
