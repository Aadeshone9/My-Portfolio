'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
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
        <Button
            onClick={scrollToTop}
            variant="outline"
            className="rounded-full text-footer-muted-foreground border-footer-muted-foreground hover:text-footer-foreground hover:border-footer-foreground"
        >
            <span className="font-headline font-semibold tracking-tight">Go up</span>
            <ArrowUp size={16} />
        </Button>
    </div>
  );
};

export default ScrollToTopButton;
