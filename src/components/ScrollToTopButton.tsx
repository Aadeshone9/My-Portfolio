'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className={cn('transition-opacity duration-300', isVisible ? 'opacity-100' : 'opacity-0')}>
        <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-5 py-2 rounded-full border border-footer-muted-foreground text-footer-muted-foreground hover:text-footer-foreground hover:border-footer-foreground transition-all duration-200"
        >
            <span className="font-headline font-semibold text-xs uppercase tracking-wider">Go up</span>
            <ArrowUp size={14} />
        </button>
    </div>
  );
};

export default ScrollToTopButton;
