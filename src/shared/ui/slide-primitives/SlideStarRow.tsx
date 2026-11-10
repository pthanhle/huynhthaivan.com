import React from 'react';
import { cn } from '@/shared/utils/cn.util';

export interface SlideStarRowProps {
  color?: 'crimson' | 'white';
  direction?: 'horizontal' | 'vertical';
  count?: number;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function SlideStarRow({
  color = 'white',
  direction = 'horizontal',
  count = 4,
  size = 'md',
  className,
}: SlideStarRowProps) {
  const stars = Array.from({ length: count }, (_, idx) => idx);
  const sizeClass =
    size === 'lg'
      ? 'h-9 w-9 md:h-12 md:w-12'
      : size === 'sm'
        ? 'h-3.5 w-3.5 md:h-4 md:w-4'
        : 'h-4 w-4 md:h-5 md:w-5';

  return (
    <div
      aria-hidden="true"
      className={cn(
        'inline-flex items-center',
        direction === 'vertical' ? 'flex-col gap-3 md:gap-4' : 'flex-row gap-4 md:gap-6',
        color === 'crimson' ? 'text-[#AF2A55]' : 'text-[#F5F3F3]',
        className,
      )}
    >
      {stars.map((idx) => (
        <svg
          key={idx}
          viewBox="0 0 24 24"
          fill="currentColor"
          className={cn('shrink-0', sizeClass)}
        >
          <path d="M12 0C12.7 7.5 16.5 11.3 24 12C16.5 12.7 12.7 16.5 12 24C11.3 16.5 7.5 12.7 0 12C7.5 11.3 11.3 7.5 12 0Z" />
        </svg>
      ))}
    </div>
  );
}
