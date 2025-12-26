'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const DevNoticeBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const hasAccepted = localStorage.getItem('dev-notice-accepted');
      if (!hasAccepted) {
        setIsVisible(true);
      }
    } catch (error) {
      // localStorage is not available
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem('dev-notice-accepted', 'true');
    } catch (error) {
      // localStorage is not available
    }
    setIsVisible(false);
  };

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
          <div className="bg-card border border-border shadow-2xl rounded-lg p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="text-sm text-foreground flex-grow">
              This website is under development. Soon all the projects and data will be updated.
            </p>
            <Button onClick={handleAccept} size="sm" className="flex-shrink-0 w-full sm:w-auto">
              Got it
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DevNoticeBanner;
