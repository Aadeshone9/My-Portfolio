
'use client';

export default function DotGrid() {
  return (
    <div 
      className="fixed inset-0 -z-10 h-full w-full pointer-events-none opacity-20 dark:opacity-10" 
      style={{
        backgroundImage: `radial-gradient(hsl(var(--border)) 1px, transparent 1px)`,
        backgroundSize: '32px 32px',
        maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)'
      }}
      aria-hidden="true"
    />
  );
}
