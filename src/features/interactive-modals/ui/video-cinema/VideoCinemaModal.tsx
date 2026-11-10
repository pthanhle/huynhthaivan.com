'use client';

import { ChevronLeft, ChevronRight, Maximize2, Play, X } from 'lucide-react';
import React, { useCallback, useEffect, useRef } from 'react';
import { PRODUCTION_VIDEOS_LIST } from '@/entities/media-work/constants/video-showreel.constants';
import { useFocusTrap } from '@/shared/hooks/use-focus-trap.hook';
import { usePortfolioDeckStore } from '@/shared/stores/use-portfolio-deck.store';
import { cn } from '@/shared/utils/cn.util';

type WebkitFullscreenVideoElement = HTMLVideoElement & {
  webkitEnterFullscreen?: () => void;
};

export function VideoCinemaModal() {
  const activeModal = usePortfolioDeckStore((s) => s.activeModal);
  const selectedVideoId = usePortfolioDeckStore((s) => s.selectedVideoId);
  const selectVideo = usePortfolioDeckStore((s) => s.openVideoCinema);
  const closeModal = usePortfolioDeckStore((s) => s.closeModal);

  const isOpen = activeModal === 'video-cinema';
  const dialogRef = useFocusTrap<HTMLDivElement>(isOpen, closeModal);
  const videoRef = useRef<WebkitFullscreenVideoElement | null>(null);
  const playlistContainerRef = useRef<HTMLDivElement | null>(null);
  const videoItemRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const currentIndex = Math.max(
    0,
    PRODUCTION_VIDEOS_LIST.findIndex((item) => item.id === selectedVideoId),
  );
  const activeVideo = PRODUCTION_VIDEOS_LIST[currentIndex] ?? PRODUCTION_VIDEOS_LIST[0];

  const goPrev = useCallback(() => {
    const prevIdx =
      (currentIndex - 1 + PRODUCTION_VIDEOS_LIST.length) % PRODUCTION_VIDEOS_LIST.length;
    selectVideo(PRODUCTION_VIDEOS_LIST[prevIdx].id);
  }, [currentIndex, selectVideo]);

  const goNext = useCallback(() => {
    const nextIdx = (currentIndex + 1) % PRODUCTION_VIDEOS_LIST.length;
    selectVideo(PRODUCTION_VIDEOS_LIST[nextIdx].id);
  }, [currentIndex, selectVideo]);

  const handleToggleFullscreen = useCallback(async () => {
    const videoEl = videoRef.current;
    if (!videoEl) {
      return;
    }
    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
        return;
      }
      if (typeof videoEl.webkitEnterFullscreen === 'function') {
        videoEl.webkitEnterFullscreen();
        return;
      }
      if (typeof videoEl.requestFullscreen === 'function') {
        await videoEl.requestFullscreen();
      }
    } catch {
      if (typeof videoEl.webkitEnterFullscreen === 'function') {
        videoEl.webkitEnterFullscreen();
      }
    }
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    const container = playlistContainerRef.current;
    const itemEl = videoItemRefs.current[activeVideo.id];
    if (!container || !itemEl) {
      return;
    }
    const targetTop =
      itemEl.offsetTop - container.clientHeight / 2 + itemEl.offsetHeight / 2;
    container.scrollTo({
      top: Math.max(0, targetTop),
      behavior: 'smooth',
    });
  }, [activeVideo.id, isOpen]);

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

  if (!isOpen) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Danh sách Video"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-0 backdrop-blur-md sm:p-3"
      onClick={closeModal}
    >
      <div
        ref={dialogRef}
        onClick={(e) => e.stopPropagation()}
        className="flex h-dvh w-screen flex-col overflow-hidden bg-[#1B0507] text-[#F5F3F3] shadow-2xl sm:h-[94dvh] sm:max-w-[96vw] sm:rounded-[24px] sm:border sm:border-white/15"
      >
        <header className="flex shrink-0 items-center justify-between gap-2 border-b border-white/12 bg-[#260609] px-3.5 py-2 sm:px-6 sm:py-2.5">
          <div className="min-w-0 flex-1">
            <p className="apple-tabular-nums text-[10px] font-bold tracking-widest text-[#F2EFEF]/70 uppercase sm:text-[11px]">
              VIDEO ({activeVideo.indexNumber} / {PRODUCTION_VIDEOS_LIST.length})
            </p>
            <h2 className="truncate font-sans text-xs font-extrabold text-white sm:text-base">
              {activeVideo.title}
            </h2>
          </div>

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <button
              type="button"
              onClick={handleToggleFullscreen}
              aria-label="Xem toàn màn hình"
              className="inline-flex cursor-pointer items-center gap-1.5 rounded-full bg-white/12 px-2.5 py-1.5 text-[11px] font-bold text-white transition-colors hover:bg-white/22 sm:px-3 sm:text-xs"
            >
              <Maximize2 className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Toàn màn hình</span>
            </button>

            <button
              type="button"
              onClick={closeModal}
              aria-label="Đóng"
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#AF2A55] text-white transition-opacity hover:opacity-90"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </header>

        <div className="flex min-h-0 flex-1 flex-col lg:grid lg:grid-cols-12">
          <div className="flex w-full shrink-0 flex-col bg-black lg:col-span-9 lg:h-full lg:min-h-0">
            <div className="relative flex h-[44dvh] min-h-[280px] w-full items-center justify-center overflow-hidden bg-black sm:h-[52dvh] lg:h-auto lg:min-h-0 lg:flex-1">
              <video
                ref={videoRef}
                key={activeVideo.id}
                src={activeVideo.videoSrc}
                poster={activeVideo.posterSrc}
                controls
                playsInline
                autoPlay
                preload="auto"
                onEnded={goNext}
                className="h-full w-full bg-black object-contain"
              />
            </div>

            <div className="flex shrink-0 items-center justify-between gap-2 border-t border-white/12 bg-[#230609] px-3 py-2 sm:px-5 sm:py-2.5">
              <button
                type="button"
                onClick={goPrev}
                aria-label="Chuyển sang video trước"
                className="inline-flex min-h-[36px] cursor-pointer items-center gap-1.5 rounded-full bg-white/12 px-3.5 py-1.5 text-xs font-bold text-white transition-colors hover:bg-[#AF2A55] active:scale-95"
              >
                <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                <span>Video trước</span>
              </button>

              <span className="apple-tabular-nums rounded-full bg-white/10 px-3 py-1 text-xs font-extrabold text-[#F2EFEF]">
                {String(activeVideo.indexNumber).padStart(2, '0')} /{' '}
                {String(PRODUCTION_VIDEOS_LIST.length).padStart(2, '0')}
              </span>

              <button
                type="button"
                onClick={goNext}
                aria-label="Chuyển sang video tiếp theo"
                className="inline-flex min-h-[36px] cursor-pointer items-center gap-1.5 rounded-full bg-[#AF2A55] px-3.5 py-1.5 text-xs font-bold text-white transition-opacity hover:opacity-90 active:scale-95"
              >
                <span>Video tiếp</span>
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          <aside className="flex min-h-0 flex-1 flex-col overflow-hidden border-t border-white/12 bg-[#2B080C] lg:col-span-3 lg:border-t-0 lg:border-l">
            <div className="shrink-0 border-b border-white/10 px-3.5 py-2 text-[11px] font-extrabold tracking-wider text-[#F2EFEF]/80 uppercase sm:px-4 sm:py-2.5 sm:text-xs">
              Danh sách 9 Video thực tế
            </div>

            <div
              ref={playlistContainerRef}
              className="relative flex-1 space-y-1.5 overflow-y-auto overscroll-contain p-2 sm:p-2.5"
            >
              {PRODUCTION_VIDEOS_LIST.map((vid) => {
                const isSelected = vid.id === activeVideo.id;

                return (
                  <button
                    key={vid.id}
                    ref={(el) => {
                      videoItemRefs.current[vid.id] = el;
                    }}
                    type="button"
                    onClick={() => selectVideo(vid.id)}
                    className={cn(
                      'flex w-full cursor-pointer items-center gap-2.5 rounded-[14px] p-2 text-left transition-all',
                      isSelected
                        ? 'bg-[#AF2A55] text-white shadow-md'
                        : 'bg-white/6 text-white/85 hover:bg-white/14',
                    )}
                  >
                    <div className="relative h-11 w-16 shrink-0 overflow-hidden rounded-[8px] bg-black">
                      <img
                        src={vid.posterSrc}
                        alt={vid.title}
                        width={160}
                        height={110}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover"
                      />
                      <span className="absolute inset-0 flex items-center justify-center bg-black/35">
                        <Play className="h-3.5 w-3.5 fill-white text-white" />
                      </span>
                    </div>

                    <span className="line-clamp-2 text-xs font-bold leading-snug">
                      {vid.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
