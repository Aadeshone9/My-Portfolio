'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const DesignSystemCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const triggerElement = document.getElementById('design-skills-trigger');
    if (!triggerElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    observer.observe(triggerElement);

    return () => {
      observer.unobserve(triggerElement);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ ease: 'easeOut', duration: 0.5 }}
          className="fixed bottom-4 right-4 z-[100] w-auto max-w-[calc(100%-2rem)]"
        >
          <Button asChild size="lg" className="rounded-full shadow-lg">
            <Link href="/design-system">
              Explore the Design System
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DesignSystemCTA;
