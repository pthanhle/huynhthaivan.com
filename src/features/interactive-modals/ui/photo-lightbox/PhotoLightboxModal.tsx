'use client';

import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from 'lucide-react';
import React, { useCallback, useEffect, useState } from 'react';
import { ALL_PORTFOLIO_GALLERY_PHOTOS } from '@/entities/slides/constants/slide-gallery-photos.constants';
import { useFocusTrap } from '@/shared/hooks/use-focus-trap.hook';
import { usePortfolioDeckStore } from '@/shared/stores/use-portfolio-deck.store';
import { cn } from '@/shared/utils/cn.util';

export function PhotoLightboxModal() {
  const activeModal = usePortfolioDeckStore((s) => s.activeModal);
  const lightboxPhoto = usePortfolioDeckStore((s) => s.lightboxPhoto);
  const openPhotoLightbox = usePortfolioDeckStore((s) => s.openPhotoLightbox);
  const closeModal = usePortfolioDeckStore((s) => s.closeModal);
  const [isZoomed, setIsZoomed] = useState(false);

  const isOpen = activeModal === 'photo-lightbox' && Boolean(lightboxPhoto);
  const dialogRef = useFocusTrap<HTMLDivElement>(isOpen, () => {
    setIsZoomed(false);
    closeModal();
  });

  const currentIndex = lightboxPhoto
    ? ALL_PORTFOLIO_GALLERY_PHOTOS.findIndex((item) => item.src === lightboxPhoto.src)
    : -1;

  const goPrev = useCallback(() => {
    if (ALL_PORTFOLIO_GALLERY_PHOTOS.length === 0) {
      return;
    }
    const baseIdx = currentIndex >= 0 ? currentIndex : 0;
    const prevIdx =
      (baseIdx - 1 + ALL_PORTFOLIO_GALLERY_PHOTOS.length) %
      ALL_PORTFOLIO_GALLERY_PHOTOS.length;
    setIsZoomed(false);
    openPhotoLightbox(ALL_PORTFOLIO_GALLERY_PHOTOS[prevIdx]);
  }, [currentIndex, openPhotoLightbox]);

  const goNext = useCallback(() => {
    if (ALL_PORTFOLIO_GALLERY_PHOTOS.length === 0) {
      return;
    }
    const baseIdx = currentIndex >= 0 ? currentIndex : 0;
    const nextIdx = (baseIdx + 1) % ALL_PORTFOLIO_GALLERY_PHOTOS.length;
    setIsZoomed(false);
    openPhotoLightbox(ALL_PORTFOLIO_GALLERY_PHOTOS[nextIdx]);
  }, [currentIndex, openPhotoLightbox]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        goPrev();
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        goNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, goPrev, goNext]);

  if (!isOpen || !lightboxPhoto) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={lightboxPhoto.caption}
      className="fixed inset-0 z-50 flex h-dvh w-screen flex-col justify-between bg-black/94 p-2 backdrop-blur-md sm:p-4"
      onClick={() => {
        setIsZoomed(false);
        closeModal();
      }}
    >
      <div
        ref={dialogRef}
        onClick={(e) => e.stopPropagation()}
        className="apple-liquid-glass-capsule apple-liquid-glass-burgundy mx-auto flex w-full max-w-[96vw] shrink-0 items-center justify-between gap-3 rounded-full px-3.5 py-2 text-[#F2EFEF] sm:px-5"
      >
        <p className="truncate font-sans text-xs font-bold sm:text-sm">
          {lightboxPhoto.caption}
        </p>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <button
            type="button"
            onClick={() => setIsZoomed((z) => !z)}
            aria-label={isZoomed ? 'Thu nhỏ' : 'Phóng to'}
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#F2EFEF]/15 text-[#F2EFEF] transition-colors hover:bg-[#F2EFEF]/25"
          >
            {isZoomed ? (
              <ZoomOut className="h-4 w-4" aria-hidden="true" />
            ) : (
              <ZoomIn className="h-4 w-4" aria-hidden="true" />
            )}
          </button>

          <button
            type="button"
            onClick={() => {
              setIsZoomed(false);
              closeModal();
            }}
            aria-label="Đóng"
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#AF2A55] text-white transition-transform hover:scale-105"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div
        onClick={(e) => e.stopPropagation()}
        className={cn(
          'my-auto flex min-h-0 flex-1 overflow-auto py-2',
          isZoomed ? 'items-start justify-start' : 'items-center justify-center',
        )}
      >
        <img
          src={lightboxPhoto.src}
          alt={lightboxPhoto.alt}
          onClick={() => setIsZoomed((z) => !z)}
          className={cn(
            'mx-auto rounded-[12px] object-contain shadow-2xl transition-all duration-200',
            isZoomed
              ? 'w-[165vw] max-w-none cursor-zoom-out sm:w-[130vw]'
              : 'max-h-[76dvh] max-w-[96vw] cursor-zoom-in sm:max-h-[80dvh]',
          )}
        />
      </div>

      <div
        onClick={(e) => e.stopPropagation()}
        className="mx-auto flex shrink-0 items-center justify-center gap-3 pb-1"
      >
        <button
          type="button"
          onClick={goPrev}
          aria-label="Ảnh trước"
          className="inline-flex min-h-[36px] cursor-pointer items-center gap-1.5 rounded-full bg-white/14 px-3.5 py-1.5 text-xs font-bold text-white transition-colors hover:bg-[#AF2A55] active:scale-95"
        >
          <ChevronLeft className="h-4 w-4" aria-hidden="true" />
          <span>Ảnh trước</span>
        </button>

        {currentIndex >= 0 && (
          <span className="apple-tabular-nums rounded-full bg-white/10 px-3 py-1 text-xs font-extrabold text-[#F2EFEF]">
            {String(currentIndex + 1).padStart(2, '0')} /{' '}
            {String(ALL_PORTFOLIO_GALLERY_PHOTOS.length).padStart(2, '0')}
          </span>
        )}

        <button
          type="button"
          onClick={goNext}
          aria-label="Ảnh tiếp theo"
          className="inline-flex min-h-[36px] cursor-pointer items-center gap-1.5 rounded-full bg-[#AF2A55] px-3.5 py-1.5 text-xs font-bold text-white transition-opacity hover:opacity-90 active:scale-95"
        >
          <span>Ảnh tiếp</span>
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
