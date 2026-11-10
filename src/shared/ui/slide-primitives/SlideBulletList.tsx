'use client';

import { motion, useReducedMotion } from 'framer-motion';
import React from 'react';
import { cn } from '@/shared/utils/cn.util';

export interface SlideBulletListProps {
  items: readonly string[];
  tone: 'crimson' | 'offwhite';
  size?: 'sm' | 'md';
  baseDelay?: number;
  className?: string;
}

export function SlideBulletList({
  items,
  tone,
  size = 'md',
  baseDelay = 0.08,
  className,
}: SlideBulletListProps) {
  const prefersReducedMotion = useReducedMotion();
  const textToneClass = tone === 'crimson' ? 'text-[#AF2A55] font-medium' : 'text-[#F5F3F3] font-normal';
  const dotToneClass = tone === 'crimson' ? 'bg-[#AF2A55]' : 'bg-[#F5F3F3]';
  const sizeClass =
    size === 'sm'
      ? 'gap-1.5 text-[clamp(0.88rem,1.22vw,1.18rem)] leading-[1.5]'
      : 'gap-2.5 text-[clamp(0.94rem,1.38vw,1.34rem)] leading-[1.56]';

  return (
    <ul className={cn('flex flex-col', textToneClass, sizeClass, className)}>
      {items.map((item, idx) => {
        if (prefersReducedMotion) {
          return (
            <li key={item} className="flex items-start gap-3">
              <span
                aria-hidden="true"
                className={cn(
                  'mt-[0.55em] shrink-0 rounded-full',
                  size === 'sm' ? 'h-1.5 w-1.5' : 'h-2 w-2',
                  dotToneClass,
                )}
              />
              <span className="text-pretty">{item}</span>
            </li>
          );
        }

        return (
          <motion.li
            key={item}
            initial={false}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              type: 'spring',
              stiffness: 240,
              damping: 26,
              delay: baseDelay + idx * 0.05,
            }}
            className="flex items-start gap-3"
          >
            <span
              aria-hidden="true"
              className={cn(
                'mt-[0.55em] shrink-0 rounded-full',
                size === 'sm' ? 'h-1.5 w-1.5' : 'h-2 w-2',
                dotToneClass,
              )}
            />
            <span className="text-pretty">{item}</span>
          </motion.li>
        );
      })}
    </ul>
  );
}
