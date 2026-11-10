'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

export interface UseMagazineScrollSyncParams {
  issueId: string;
  pageCount: number;
  isOpen: boolean;
}

export function useMagazineScrollSync({
  issueId,
  pageCount,
  isOpen,
}: UseMagazineScrollSyncParams) {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const thumbSidebarRef = useRef<HTMLElement | null>(null);
  const pageRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const thumbRefs = useRef<Record<number, HTMLButtonElement | null>>({});
  const rafScrollIdRef = useRef<number | null>(null);
  const isProgrammaticScrollRef = useRef(false);
  const programmaticTimerRef = useRef<number | null>(null);
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    setActivePage(1);
    isProgrammaticScrollRef.current = false;
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: 'instant' });
    }
    if (thumbSidebarRef.current) {
      thumbSidebarRef.current.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [issueId, isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    const sidebarEl = thumbSidebarRef.current;
    const thumbEl = thumbRefs.current[activePage];
    if (!sidebarEl || !thumbEl) {
      return;
    }
    const targetTop =
      thumbEl.offsetTop - sidebarEl.clientHeight / 2 + thumbEl.offsetHeight / 2;
    sidebarEl.scrollTo({
      top: Math.max(0, targetTop),
      behavior: 'smooth',
    });
  }, [activePage, issueId, isOpen]);

  useEffect(() => {
    return () => {
      if (rafScrollIdRef.current !== null) {
        window.cancelAnimationFrame(rafScrollIdRef.current);
      }
      if (programmaticTimerRef.current !== null) {
        window.clearTimeout(programmaticTimerRef.current);
      }
    };
  }, []);

  const handleMainScroll = useCallback(() => {
    if (isProgrammaticScrollRef.current) {
      return;
    }
    if (rafScrollIdRef.current !== null) {
      return;
    }
    rafScrollIdRef.current = window.requestAnimationFrame(() => {
      rafScrollIdRef.current = null;
      const container = scrollContainerRef.current;
      if (!container) {
        return;
      }
      if (container.scrollTop <= 16) {
        setActivePage((prev) => (prev === 1 ? prev : 1));
        return;
      }
      if (
        container.scrollTop + container.clientHeight >=
        container.scrollHeight - 16
      ) {
        setActivePage((prev) => (prev === pageCount ? prev : pageCount));
        return;
      }

      const containerRect = container.getBoundingClientRect();
      const focalY = containerRect.top + containerRect.height * 0.42;
      let bestPage = 1;
      let minDistance = Number.POSITIVE_INFINITY;

      for (let i = 1; i <= pageCount; i++) {
        const el = pageRefs.current[i];
        if (!el) {
          continue;
        }
        const rect = el.getBoundingClientRect();
        if (focalY >= rect.top && focalY <= rect.bottom) {
          bestPage = i;
          break;
        }
        const center = (rect.top + rect.bottom) / 2;
        const dist = Math.abs(focalY - center);
        if (dist < minDistance) {
          minDistance = dist;
          bestPage = i;
        }
      }

      setActivePage((prev) => (prev === bestPage ? prev : bestPage));
    });
  }, [pageCount]);

  const scrollToPage = useCallback(
    (pageNum: number) => {
      const clamped = Math.max(1, Math.min(pageCount, pageNum));
      isProgrammaticScrollRef.current = true;
      if (programmaticTimerRef.current !== null) {
        window.clearTimeout(programmaticTimerRef.current);
      }
      programmaticTimerRef.current = window.setTimeout(() => {
        isProgrammaticScrollRef.current = false;
      }, 550);

      setActivePage(clamped);
      const container = scrollContainerRef.current;
      const pageEl = pageRefs.current[clamped];
      if (container && pageEl) {
        const targetPageTop = pageEl.offsetTop - 16;
        container.scrollTo({
          top: Math.max(0, targetPageTop),
          behavior: 'smooth',
        });
      }
    },
    [pageCount],
  );

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'PageDown' || e.key === 'ArrowDown') {
        e.preventDefault();
        scrollToPage(activePage + 1);
      } else if (e.key === 'PageUp' || e.key === 'ArrowUp') {
        e.preventDefault();
        scrollToPage(activePage - 1);
      } else if (e.key === 'Home') {
        e.preventDefault();
        scrollToPage(1);
      } else if (e.key === 'End') {
        e.preventDefault();
        scrollToPage(pageCount);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activePage, isOpen, pageCount, scrollToPage]);

  return {
    activePage,
    setActivePage,
    scrollContainerRef,
    thumbSidebarRef,
    pageRefs,
    thumbRefs,
    handleMainScroll,
    scrollToPage,
  };
}
