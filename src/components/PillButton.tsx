
'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import './PillButton.css';

const PillButton = ({
  children,
  href,
  className = '',
  ease = 'power3.easeOut',
  baseColor = 'hsl(var(--secondary))',
  pillColor = 'hsl(var(--primary))',
  hoveredPillTextColor = 'hsl(var(--primary-foreground))',
  pillTextColor,
}) => {
  const resolvedPillTextColor = pillTextColor ?? 'hsl(var(--secondary-foreground))';
  const circleRef = useRef(null);
  const tlRef = useRef(null);
  const activeTweenRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
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

      circle.style.width = `${D}px`;
      circle.style.height = `${D}px`;
      circle.style.bottom = `-${delta}px`;

      gsap.set(circle, {
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
        gsap.set(white, { y: Math.ceil(h + 100), opacity: 0 });
        tl.to(white, { y: 0, opacity: 1, duration: 2, ease, overwrite: 'auto' }, 0);
      }

      tlRef.current = tl;
    };

    const runLayout = () => {
      // Delay layout to allow for font loading and rendering
      setTimeout(layout, 100);
    }

    runLayout();

    if (document.fonts?.ready) {
      document.fonts.ready.then(runLayout).catch(() => {});
    }

    window.addEventListener('resize', runLayout);

    return () => window.removeEventListener('resize', runLayout);
  }, [ease]);

  const handleEnter = () => {
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
    const tl = tlRef.current;
    if (!tl) return;
    activeTweenRef.current?.kill();
    activeTweenRef.current = tl.tweenTo(0, {
      duration: 0.2,
      ease,
      overwrite: 'auto',
    });
  };
  
  const cssVars = {
    ['--base']: baseColor,
    ['--pill-bg']: pillColor,
    ['--hover-text']: hoveredPillTextColor,
    ['--pill-text']: resolvedPillTextColor,
  };

  return (
    <Link
        href={href}
        ref={buttonRef}
        className={`pill-button ${className}`}
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
