"use client";

import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

type SpotlightCardProps = {
  children: React.ReactNode;
  className?: string;
};

const SpotlightCard: React.FC<SpotlightCardProps> = ({ children, className }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${(x / rect.width) * 100}%`);
      card.style.setProperty('--mouse-y', `${(y / rect.height) * 100}%`);
    };

    card.addEventListener('mousemove', handleMouseMove);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={cn('spotlight-card', className)}
    >
      {children}
    </div>
  );
};

export default SpotlightCard;
