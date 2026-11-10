'use client';

import React, { useEffect, useRef } from 'react';
import { usePortfolioDeckStore } from '@/shared/stores/use-portfolio-deck.store';
import { cn } from '@/shared/utils/cn.util';

export type SlideSurfaceTheme = 'plaster-cream' | 'burgundy-velvet';

export interface SlideViewportShellProps {
  slideNumber: number;
  theme: SlideSurfaceTheme;
  ariaLabel: string;
  children: React.ReactNode;
  className?: string;
}

export function SlideViewportShell({
  slideNumber,
  theme,
  ariaLabel,
  children,
  className,
}: SlideViewportShellProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const setActiveSlide = usePortfolioDeckStore((s) => s.setActiveSlide);
  const paddedSlide = String(slideNumber).padStart(2, '0');

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.45) {
            setActiveSlide(slideNumber);
          }
        }
      },
      {
        threshold: [0.45, 0.65],
      },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [slideNumber, setActiveSlide]);

  return (
    <section
      ref={sectionRef}
      id={`page-${paddedSlide}`}
      aria-label={ariaLabel}
      className={cn(
        'slide-stage relative flex min-h-dvh w-full snap-start flex-col overflow-hidden select-text',
        theme === 'plaster-cream' ? 'slide-surface-plaster' : 'slide-surface-burgundy',
        className,
      )}
    >
      <div
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute inset-0 z-0 bg-[url("/assets/extracted/texture-grunge-overlay.webp")] bg-cover bg-center',
          theme === 'plaster-cream'
            ? 'opacity-45 mix-blend-multiply'
            : 'opacity-48 mix-blend-multiply',
        )}
      />

      <div className="relative z-10 flex min-h-dvh w-full flex-1 flex-col pt-[52px] sm:pt-[58px]">
        {children}
      </div>
    </section>
  );
}
