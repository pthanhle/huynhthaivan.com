'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Maximize2 } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { usePortfolioDeckStore } from '@/shared/stores/use-portfolio-deck.store';
import { cn } from '@/shared/utils/cn.util';

export type PhotoAspectPreset =
  | '16/10'
  | '3/2'
  | '1/1'
  | '3/3.4'
  | '4/3';

export interface SlideInteractivePhotoCardProps {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
  aspect?: PhotoAspectPreset;
  framedBorder?: boolean;
  delay?: number;
  className?: string;
  imageClassName?: string;
}

const ASPECT_CLASS_MAP: Record<PhotoAspectPreset, string> = {
  '16/10': 'aspect-[16/10]',
  '3/2': 'aspect-[3/2]',
  '1/1': 'aspect-square',
  '3/3.4': 'aspect-[3/3.4]',
  '4/3': 'aspect-[4/3]',
};

export function SlideInteractivePhotoCard({
  src,
  alt,
  caption,
  width = 900,
  height = 600,
  aspect = '16/10',
  framedBorder = false,
  delay = 0,
  className,
  imageClassName,
}: SlideInteractivePhotoCardProps) {
  const openPhotoLightbox = usePortfolioDeckStore((s) => s.openPhotoLightbox);
  const prefersReducedMotion = useReducedMotion();
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (imgRef.current?.complete) {
      setIsLoaded(true);
    }
  }, [src]);

  return (
    <motion.button
      type="button"
      onClick={() =>
        openPhotoLightbox({
          src,
          alt,
          caption: caption ?? alt,
        })
      }
      aria-label={`Phóng to hình ${caption ?? alt}`}
      initial={false}
      whileInView={
        prefersReducedMotion
          ? undefined
          : {
              opacity: 1,
              y: 0,
              scale: 1,
            }
      }
      whileHover={
        prefersReducedMotion
          ? undefined
          : {
              y: -3,
            }
      }
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        type: 'spring',
        stiffness: 240,
        damping: 26,
        delay,
      }}
      className={cn(
        'group relative w-full cursor-pointer overflow-hidden bg-black/15 text-left shadow-[0_10px_28px_rgba(0,0,0,0.18)] transition-shadow duration-300 hover:shadow-[0_16px_36px_rgba(0,0,0,0.28)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#AF2A55]',
        ASPECT_CLASS_MAP[aspect],
        framedBorder && 'border-[3px] border-[#F5F3F3]',
        className,
      )}
    >
      {!isLoaded && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 animate-pulse bg-gradient-to-r from-white/10 via-white/25 to-white/10"
        />
      )}

      <img
        ref={imgRef}
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        className={cn(
          'relative z-10 h-full w-full object-cover opacity-100 transition-transform duration-500 ease-out group-hover:scale-[1.035]',
          imageClassName,
        )}
      />

      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-2.5 right-2.5 flex h-7 w-7 items-center justify-center rounded-full bg-black/55 text-white opacity-85 backdrop-blur-xs transition-opacity duration-200 sm:opacity-0 sm:group-hover:opacity-100"
      >
        <Maximize2 className="h-3.5 w-3.5" />
      </span>
    </motion.button>
  );
}
