"use client";

import React, { useRef } from 'react';
import { cn } from '@/lib/utils';

type SpotlightCardProps = {
  children: React.ReactNode;
  className?: string;
};

const SpotlightCard: React.FC<SpotlightCardProps> = ({ children, className }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={cn('spotlight-card', className)}
    >
      {children}
    </div>
  );
};

export default SpotlightCard;
