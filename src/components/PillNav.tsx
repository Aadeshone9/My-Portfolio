"use client";
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import './PillNav.css';

export default function PillNav({ items }) {
  const pathname = usePathname();
  const [hoveredPill, setHoveredPill] = useState(null);

  return (
    <nav 
      className="pill-nav"
      onMouseLeave={() => setHoveredPill(null)}
    >
      {items.map((item, index) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`pill-nav-item ${isActive ? 'active' : ''}`}
            onMouseEnter={() => setHoveredPill(index)}
          >
            {item.text}
            {hoveredPill === index && (
              <motion.div
                className="pill-nav-hover"
                layoutId="pill-nav-hover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
            {isActive && <div className="pill-nav-active" />}
          </Link>
        );
      })}
    </nav>
  );
}
