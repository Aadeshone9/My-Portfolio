"use client";

import React, { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

type SpotlightCardProps = {
  children: React.ReactNode;
  className?: string;
};

const SpotlightCard: React.FC<SpotlightCardProps> = ({ children, className }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--spotlight-x', `${x}px`);
      card.style.setProperty('--spotlight-y', `${y}px`);
    };

    if (isHovering) {
      card.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isHovering]);

  return (
    <div
      ref={cardRef}
      className={cn('spotlight-card', className)}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {children}
    </div>
  );
};

export default SpotlightCard;
