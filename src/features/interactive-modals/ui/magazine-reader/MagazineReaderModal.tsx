'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { RT_CONNECTION_ISSUES_LIST } from '@/entities/media-work/constants/rt-magazines.constants';
import { useMagazineScrollSync } from '@/features/interactive-modals/hooks/use-magazine-scroll-sync.hook';
import { MagazineReaderHeader } from '@/features/interactive-modals/ui/magazine-reader/MagazineReaderHeader';
import { useFocusTrap } from '@/shared/hooks/use-focus-trap.hook';
import { usePortfolioDeckStore } from '@/shared/stores/use-portfolio-deck.store';
import { cn } from '@/shared/utils/cn.util';

export function MagazineReaderModal() {
  const activeModal = usePortfolioDeckStore((s) => s.activeModal);
  const selectedMagazineId = usePortfolioDeckStore((s) => s.selectedMagazineId);
  const openMagazineReader = usePortfolioDeckStore((s) => s.openMagazineReader);
  const closeModal = usePortfolioDeckStore((s) => s.closeModal);
  const isOpen = activeModal === 'magazine-reader';
  const dialogRef = useFocusTrap<HTMLDivElement>(isOpen, closeModal);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isBrowserFullscreen, setIsBrowserFullscreen] = useState(false);

  const currentIssue =
    RT_CONNECTION_ISSUES_LIST.find((m) => m.id === selectedMagazineId) ??
    RT_CONNECTION_ISSUES_LIST[0];

  const currentIndex = RT_CONNECTION_ISSUES_LIST.findIndex((m) => m.id === currentIssue.id);
  const hasLandscapeSpreads = currentIssue.id === 'rt-19' || currentIssue.id === 'rt-18';

  const {
    activePage,
    scrollContainerRef,
    thumbSidebarRef,
    pageRefs,
    thumbRefs,
    handleMainScroll,
    scrollToPage,
  } = useMagazineScrollSync({
    issueId: currentIssue.id,
    pageCount: currentIssue.pageCount,
    isOpen,
  });

  const pagesArray = Array.from({ length: currentIssue.pageCount }, (_, idx) => {
    const pageNumber = idx + 1;
    const padded = String(pageNumber).padStart(2, '0');
    const isSpread =
      hasLandscapeSpreads && pageNumber > 1 && pageNumber < currentIssue.pageCount;
    return {
      pageNumber,
      isSpread,
      src: `${currentIssue.pagesFolder}/page-${padded}.webp`,
    };
  });

  useEffect(() => {
    setIsZoomed(false);
  }, [currentIssue.id, isOpen]);

  useEffect(() => {
    const syncFullscreen = () => {
      setIsBrowserFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener('fullscreenchange', syncFullscreen);
    return () => document.removeEventListener('fullscreenchange', syncFullscreen);
  }, []);

  const handleStepIssue = (delta: number) => {
    const nextIdx =
      (currentIndex + delta + RT_CONNECTION_ISSUES_LIST.length) %
      RT_CONNECTION_ISSUES_LIST.length;
    openMagazineReader(RT_CONNECTION_ISSUES_LIST[nextIdx].id);
  };

  const toggleBrowserFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch {
      setIsBrowserFullscreen(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="magazine-reader-modal-title"
          tabIndex={-1}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="fixed inset-0 z-50 flex h-dvh w-screen flex-col bg-[#120305]/98 text-white backdrop-blur-xl"
        >
          <MagazineReaderHeader
            currentIssue={currentIssue}
            activePage={activePage}
            isZoomed={isZoomed}
            isBrowserFullscreen={isBrowserFullscreen}
            onToggleZoom={() => setIsZoomed((prev) => !prev)}
            onToggleFullscreen={toggleBrowserFullscreen}
            onStepIssue={handleStepIssue}
            onSelectIssue={openMagazineReader}
            onClose={closeModal}
          />

          <div className="flex min-h-0 flex-1 overflow-hidden">
            <aside
              ref={thumbSidebarRef}
              aria-label="Danh sách trang thu nhỏ"
              className="relative hidden w-44 shrink-0 flex-col gap-2 overflow-y-auto overscroll-contain border-r border-white/12 bg-black/40 p-3 md:flex"
            >
              {pagesArray.map((page) => {
                const isCurrent = page.pageNumber === activePage;
                return (
                  <button
                    key={page.pageNumber}
                    ref={(el) => {
                      thumbRefs.current[page.pageNumber] = el;
                    }}
                    type="button"
                    aria-current={isCurrent ? 'page' : undefined}
                    onClick={() => scrollToPage(page.pageNumber)}
                    className={cn(
                      'group flex shrink-0 cursor-pointer flex-col items-center gap-1 rounded-md p-1.5 transition-all duration-200',
                      isCurrent
                        ? 'scale-[1.02] bg-[#AF2A55]/30 ring-2 ring-[#AF2A55]'
                        : 'opacity-75 hover:bg-white/10 hover:opacity-100',
                    )}
                  >
                    <img
                      src={page.src}
                      alt={`${currentIssue.title} — Trang ${page.pageNumber}`}
                      width={160}
                      height={page.isSpread ? 102 : 204}
                      loading={page.pageNumber <= 8 ? 'eager' : 'lazy'}
                      decoding="async"
                      className={cn(
                        'w-full rounded-xs bg-white/10 object-cover',
                        page.isSpread ? 'aspect-[11/7]' : 'aspect-[11/14]',
                      )}
                    />
                    <span className="apple-tabular-nums text-[11px] font-bold text-white/90">
                      Trang {String(page.pageNumber).padStart(2, '0')}
                    </span>
                  </button>
                );
              })}
            </aside>

            <div
              ref={scrollContainerRef}
              onScroll={handleMainScroll}
              className="relative flex flex-1 flex-col items-center gap-4 overflow-y-auto overscroll-contain bg-[#0D0204] px-2.5 py-4 sm:gap-5 sm:px-8 sm:py-5"
            >
              {pagesArray.map((page) => (
                <div
                  key={page.pageNumber}
                  id={`mag-page-${page.pageNumber}`}
                  ref={(el) => {
                    pageRefs.current[page.pageNumber] = el;
                  }}
                  className={cn(
                    'relative shrink-0 overflow-hidden rounded-sm bg-white shadow-[0_18px_48px_rgba(0,0,0,0.65)] transition-all duration-200',
                    page.isSpread
                      ? isZoomed
                        ? 'aspect-[11/7] w-full max-w-[1320px]'
                        : 'aspect-[11/7] w-full max-w-[1020px]'
                      : isZoomed
                        ? 'aspect-[11/14] w-full max-w-[1060px]'
                        : 'aspect-[11/14] w-full max-w-[740px]',
                  )}
                >
                  <img
                    src={page.src}
                    alt={`${currentIssue.title} — Trang ${page.pageNumber}`}
                    width={1100}
                    height={page.isSpread ? 700 : 1400}
                    loading={page.pageNumber <= 4 ? 'eager' : 'lazy'}
                    decoding="async"
                    onClick={() => setIsZoomed((prev) => !prev)}
                    className={cn(
                      'h-full w-full object-contain',
                      isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in',
                    )}
                  />
                </div>
              ))}
            </div>
          </div>

          <footer className="flex shrink-0 items-center justify-between border-t border-white/12 bg-[#1E0508] px-3.5 py-2 md:hidden">
            <button
              type="button"
              onClick={() => scrollToPage(activePage - 1)}
              disabled={activePage <= 1}
              aria-label="Trang trước"
              className="inline-flex min-h-[34px] cursor-pointer items-center gap-1 rounded-full bg-white/12 px-3 py-1 text-xs font-bold text-white disabled:opacity-40"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
              <span>Trang trước</span>
            </button>

            <span className="apple-tabular-nums text-xs font-extrabold text-[#F2EFEF]">
              Trang {String(activePage).padStart(2, '0')} / {currentIssue.pageCount}
            </span>

            <button
              type="button"
              onClick={() => scrollToPage(activePage + 1)}
              disabled={activePage >= currentIssue.pageCount}
              aria-label="Trang tiếp theo"
              className="inline-flex min-h-[34px] cursor-pointer items-center gap-1 rounded-full bg-[#AF2A55] px-3 py-1 text-xs font-bold text-white disabled:opacity-40"
            >
              <span>Trang tiếp</span>
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </footer>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
