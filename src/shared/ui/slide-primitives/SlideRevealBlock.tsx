'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import React from 'react';
import { cn } from '@/shared/utils/cn.util';

export type SlideRevealPreset =
  | 'fade-up'
  | 'fade-left'
  | 'fade-right'
  | 'scale-up'
  | 'portrait-rise';

export interface SlideRevealBlockProps {
  children: React.ReactNode;
  preset?: SlideRevealPreset;
  delay?: number;
  className?: string;
}

const REVEAL_VARIANTS_MAP: Record<SlideRevealPreset, Variants> = {
  'fade-up': {
    hidden: {
      opacity: 1,
      y: 18,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  },
  'fade-left': {
    hidden: {
      opacity: 1,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  },
  'fade-right': {
    hidden: {
      opacity: 1,
      x: 20,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  },
  'scale-up': {
    hidden: {
      opacity: 1,
      scale: 0.96,
    },
    visible: {
      opacity: 1,
      scale: 1,
    },
  },
  'portrait-rise': {
    hidden: {
      opacity: 1,
      y: 24,
      scale: 0.98,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  },
};

export function SlideRevealBlock({
  children,
  preset = 'fade-up',
  delay = 0,
  className,
}: SlideRevealBlockProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={REVEAL_VARIANTS_MAP[preset]}
      initial={false}
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        type: 'spring',
        stiffness: 230,
        damping: 26,
        mass: 0.88,
        delay,
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
