
'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import './PillButton.css';
import { cn } from '@/lib/utils';

const PillButton = ({
  children,
  href,
  className = '',
  ease = 'power3.easeOut',
}) => {
  const circleRef = useRef(null);
  const tlRef = useRef(null);
  const activeTweenRef = useRef(null);
  const buttonRef = useRef(null);

  const cssVars = {
    ['--base']: 'transparent',
    ['--pill-bg']: 'hsl(var(--primary))',
    ['--hover-text']: 'hsl(var(--primary-foreground))',
    ['--pill-text']: 'hsl(var(--primary))',
  };

  useEffect(() => {
    const button = buttonRef.current;
    if (!button || button.classList.contains('is-active')) {
      if (tlRef.current) {
        tlRef.current.progress(0).pause();
      }
      return;
    };

    const layout = () => {
      const circle = circleRef.current;
      if (!circle?.parentElement) return;

      const pill = circle.parentElement;
      const rect = pill.getBoundingClientRect();
      const { width: w, height: h } = rect;
      if (w === 0 || h === 0) return;

      const R = ((w * w) / 4 + h * h) / (2 * h);
      const D = Math.ceil(2 * R) + 2;
      const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
      const originY = D - delta;

      gsap.set(circle, {
        width: `${D}px`,
        height: `${D}px`,
        bottom: `-${delta}px`,
        xPercent: -50,
        scale: 0,
        transformOrigin: `50% ${originY}px`,
      });
      
      const label = pill.querySelector('.pill-label');
      const white = pill.querySelector('.pill-label-hover');

      if (label) gsap.set(label, { y: 0 });
      if (white) gsap.set(white, { y: h + 12, opacity: 0 });

      tlRef.current?.kill();
      const tl = gsap.timeline({ paused: true });

      tl.to(circle, { scale: 1.2, xPercent: -50, duration: 2, ease, overwrite: 'auto' }, 0);
      
      if (label) {
        tl.to(label, { y: -(h + 8), duration: 2, ease, overwrite: 'auto' }, 0);
      }
      
      if (white) {
        gsap.set(white, { y: Math.ceil(h + 10), opacity: 0 });
        tl.to(white, { y: 0, opacity: 1, duration: 2, ease, overwrite: 'auto' }, 0);
      }

      tlRef.current = tl;
    };

    const runLayout = () => {
      setTimeout(layout, 100);
    }

    runLayout();

    if (document.fonts?.ready) {
      document.fonts.ready.then(runLayout).catch(() => {});
    }

    window.addEventListener('resize', runLayout);

    return () => window.removeEventListener('resize', runLayout);
  }, [ease, className]);

  const handleEnter = () => {
    const button = buttonRef.current;
    if (!button || button.classList.contains('is-active')) return;
    const tl = tlRef.current;
    if (!tl) return;
    activeTweenRef.current?.kill();
    activeTweenRef.current = tl.tweenTo(tl.duration(), {
      duration: 0.3,
      ease,
      overwrite: 'auto',
    });
  };

  const handleLeave = () => {
    const button = buttonRef.current;
    if (!button || button.classList.contains('is-active')) return;
    const tl = tlRef.current;
    if (!tl) return;
    activeTweenRef.current?.kill();
    activeTweenRef.current = tl.tweenTo(0, {
      duration: 0.2,
      ease,
      overwrite: 'auto',
    });
  };
  
  return (
    <Link
        href={href}
        ref={buttonRef}
        className={cn('pill-button', className)}
        style={cssVars}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
    >
        <span
          className="hover-circle"
          aria-hidden="true"
          ref={circleRef}
        />
        <span className="label-stack">
            <span className="pill-label">{children}</span>
            <span className="pill-label-hover" aria-hidden="true">
                {children}
            </span>
        </span>
    </Link>
  );
};

export default PillButton;
