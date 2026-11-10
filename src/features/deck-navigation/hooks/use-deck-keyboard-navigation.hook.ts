'use client';

import { useEffect } from 'react';
import { usePortfolioDeckStore } from '@/shared/stores/use-portfolio-deck.store';

export function useDeckKeyboardNavigation() {
  const activeSlide = usePortfolioDeckStore((s) => s.activeSlide);
  const activeModal = usePortfolioDeckStore((s) => s.activeModal);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (activeModal !== 'none') {
        return;
      }

      const target = event.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.tagName === 'SELECT' ||
          target.isContentEditable)
      ) {
        return;
      }

      if (event.key === 'ArrowDown' || event.key === 'PageDown') {
        event.preventDefault();
        const nextSlide = Math.min(15, activeSlide + 1);
        const padded = String(nextSlide).padStart(2, '0');
        document.getElementById(`page-${padded}`)?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      } else if (event.key === 'ArrowUp' || event.key === 'PageUp') {
        event.preventDefault();
        const prevSlide = Math.max(1, activeSlide - 1);
        const padded = String(prevSlide).padStart(2, '0');
        document.getElementById(`page-${padded}`)?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSlide, activeModal]);
}
