'use client';

import React from 'react';
import { cn } from '@/shared/utils/cn.util';

export interface SlideDashedRuleProps {
  tone: 'crimson' | 'offwhite' | 'burgundy';
  thickness?: 'normal' | 'bold';
  className?: string;
}

const TONE_MAP: Record<SlideDashedRuleProps['tone'], string> = {
  crimson: 'border-[#AF2A55]',
  offwhite: 'border-[#F5F3F3]',
  burgundy: 'border-[#4D0F13]',
};

export function SlideDashedRule({
  tone,
  thickness = 'normal',
  className,
}: SlideDashedRuleProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'border-dashed',
        thickness === 'bold' ? 'border-t-[5px]' : 'border-t-[3.5px]',
        TONE_MAP[tone],
        className,
      )}
    />
  );
}
