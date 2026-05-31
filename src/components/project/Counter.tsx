'use client';

import { useRef, useEffect, useState } from 'react';
import { useInView, animate } from 'framer-motion';

interface CounterProps {
  value: string;
}

const motionProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
};

export const Counter = ({ value }: CounterProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [displayValue, setDisplayValue] = useState("0");
  
  const isNumber = /\d/.test(value);

  useEffect(() => {
    if (isInView) {
      const match = /(\d+)/.exec(value);
      if (match) {
        const target = Number.parseInt(match[0], 10);
        const suffix = value.replace(match[0], '');
        const prefix = value.split(match[0])[0];
        
        const controls = animate(0, target, {
          duration: 1.5,
          ease: "easeOut",
          onUpdate: (latest) => {
            setDisplayValue(`${prefix}${Math.floor(latest)}${suffix}`);
          }
        });
        return () => controls.stop();
      } else {
        setDisplayValue(value);
      }
    }
  }, [isInView, value]);

  return (
    <span 
      ref={ref} 
      className="inline-flex" 
      style={{ minWidth: isNumber ? `${value.length}ch` : 'auto' }}
    >
      {displayValue}
    </span>
  );
};
