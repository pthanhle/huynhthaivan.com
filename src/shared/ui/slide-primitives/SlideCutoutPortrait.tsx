'use client';

import { motion, useReducedMotion } from 'framer-motion';
import React from 'react';
import { cn } from '@/shared/utils/cn.util';

export interface SlideCutoutPortraitProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  delay?: number;
  wrapperClassName?: string;
  imageClassName?: string;
}

export function SlideCutoutPortrait({
  src,
  alt,
  width,
  height,
  priority = false,
  delay = 0.1,
  wrapperClassName,
  imageClassName,
}: SlideCutoutPortraitProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className={cn('pointer-events-none select-none', wrapperClassName)}>
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          fetchPriority={priority ? 'high' : 'auto'}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          className={cn(
            'w-auto object-contain object-bottom drop-shadow-[0_16px_32px_rgba(0,0,0,0.24)]',
            imageClassName,
          )}
        />
      </div>
    );
  }

  return (
    <motion.div
      initial={false}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        type: 'spring',
        stiffness: 210,
        damping: 26,
        mass: 0.95,
        delay,
      }}
      className={cn('pointer-events-none select-none', wrapperClassName)}
    >
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        fetchPriority={priority ? 'high' : 'auto'}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className={cn(
          'w-auto object-contain object-bottom drop-shadow-[0_16px_32px_rgba(0,0,0,0.24)]',
          imageClassName,
        )}
      />
    </motion.div>
  );
}
