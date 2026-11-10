'use client';

import React from 'react';
import { cn } from '@/shared/utils/cn.util';

export type SlideHeadingTone =
  | 'crimson-on-plaster'
  | 'burgundy-on-plaster'
  | 'offwhite-on-burgundy';

export type SlideHeadingScale =
  | 'hero-cover'
  | 'contact-giant'
  | 'display-xl'
  | 'display-lg'
  | 'display-md'
  | 'section-banner';

export interface SlideDisplayHeadingProps {
  as?: 'h1' | 'h2' | 'h3' | 'p';
  tone: SlideHeadingTone;
  scale: SlideHeadingScale;
  align?: 'left' | 'center' | 'right';
  children: React.ReactNode;
  className?: string;
}

const HEADING_TONE_CLASSES: Record<SlideHeadingTone, string> = {
  'crimson-on-plaster': 'text-[#AF2A55] slide-shadow-plaster',
  'burgundy-on-plaster': 'text-[#4D0F13] slide-shadow-plaster-sm',
  'offwhite-on-burgundy': 'text-[#F5F3F3] slide-shadow-burgundy',
};

const HEADING_SCALE_CLASSES: Record<SlideHeadingScale, string> = {
  'hero-cover': 'text-[clamp(4.4rem,18.2vw,17.8rem)] leading-[0.84] tracking-[0.01em]',
  'contact-giant': 'text-[clamp(4rem,14.6vw,14.2rem)] leading-[0.84] tracking-[0.01em]',
  'display-xl': 'text-[clamp(3.1rem,11.2vw,11rem)] leading-[0.86] tracking-[0.01em]',
  'display-lg': 'text-[clamp(2.9rem,8.8vw,8.6rem)] leading-[0.88] tracking-[0.01em]',
  'display-md': 'text-[clamp(2.2rem,5.8vw,5.6rem)] leading-[0.92] tracking-[0.01em]',
  'section-banner': 'text-[clamp(2rem,4.9vw,4.75rem)] leading-[0.92] tracking-[0.01em]',
};

const HEADING_ALIGN_CLASSES: Record<'left' | 'center' | 'right', string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

export function SlideDisplayHeading({
  as: Tag = 'h2',
  tone,
  scale,
  align = 'left',
  children,
  className,
}: SlideDisplayHeadingProps) {
  return (
    <Tag
      className={cn(
        'font-display uppercase select-text',
        HEADING_TONE_CLASSES[tone],
        HEADING_SCALE_CLASSES[scale],
        HEADING_ALIGN_CLASSES[align],
        className,
      )}
    >
      {children}
    </Tag>
  );
}
