'use client';

import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import React, { useCallback, useState } from 'react';
import {
  APPLE_HEADER_NAV_ITEMS,
  type AppleHeaderNavItem,
  BURGUNDY_SLIDE_NUMBERS,
} from '@/features/deck-navigation/constants/header-navigation.constants';
import { AppleHeaderMobileSheet } from '@/features/deck-navigation/ui/apple-liquid-glass-header/AppleHeaderMobileSheet';
import { usePortfolioDeckStore } from '@/shared/stores/use-portfolio-deck.store';
import { cn } from '@/shared/utils/cn.util';

export function ApplePortfolioHeader() {
  const activeSlide = usePortfolioDeckStore((s) => s.activeSlide);
  const setActiveSlide = usePortfolioDeckStore((s) => s.setActiveSlide);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isBurgundySurface = BURGUNDY_SLIDE_NUMBERS.includes(activeSlide);

  const activeNavItem =
    APPLE_HEADER_NAV_ITEMS.find((item) => item.matchSlides.includes(activeSlide)) ??
    APPLE_HEADER_NAV_ITEMS[0];

  const handleSelectSection = useCallback(
    (item: AppleHeaderNavItem) => {
      setActiveSlide(item.targetSlideNumber);
      document.getElementById(item.targetSlideId)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    },
    [setActiveSlide],
  );

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-40 flex justify-center px-2.5 pt-2 sm:px-4 sm:pt-2.5">
        <nav
          aria-label="Điều hướng chính Portfolio Huỳnh Thái Vân"
          className={cn(
            'apple-liquid-glass-capsule pointer-events-auto relative flex w-full max-w-[1480px] items-center justify-between rounded-full px-2 py-1.5 transition-colors duration-300 lg:w-auto lg:justify-center lg:px-2.5 lg:py-1.5',
            isBurgundySurface
              ? 'apple-liquid-glass-burgundy'
              : 'apple-liquid-glass-plaster',
          )}
        >
          <ul className="hidden items-center gap-0.5 lg:flex xl:gap-1">
            {APPLE_HEADER_NAV_ITEMS.map((item) => {
              const isActive = item.id === activeNavItem.id;

              return (
                <li key={item.id} className="relative flex items-center">
                  <button
                    type="button"
                    onClick={() => handleSelectSection(item)}
                    aria-current={isActive ? 'page' : undefined}
                    className={cn(
                      'relative z-10 cursor-pointer rounded-full px-2.5 py-1.5 font-sans text-[10.5px] leading-none font-extrabold tracking-[0.03em] whitespace-nowrap uppercase transition-colors duration-200 xl:px-3 xl:text-[11.5px] 2xl:px-3.5 2xl:text-[12.5px]',
                      isActive
                        ? 'text-[#F2EFEF]'
                        : isBurgundySurface
                          ? 'text-[#F2EFEF]/88 hover:text-white'
                          : 'text-[#4D0F13] hover:text-[#AF2A55]',
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="apple-header-active-pill"
                        aria-hidden="true"
                        transition={{
                          type: 'spring',
                          stiffness: 380,
                          damping: 32,
                          mass: 0.8,
                        }}
                        className="apple-liquid-glass-active-pill absolute inset-0 -z-10 rounded-full"
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="flex w-full items-center justify-between gap-1.5 lg:hidden">
            <div className="flex items-center gap-1">
              {[APPLE_HEADER_NAV_ITEMS[0], APPLE_HEADER_NAV_ITEMS[2], APPLE_HEADER_NAV_ITEMS[9]].map(
                (quickItem) => {
                  const isActive = quickItem.id === activeNavItem.id;

                  return (
                    <button
                      key={quickItem.id}
                      type="button"
                      onClick={() => handleSelectSection(quickItem)}
                      aria-current={isActive ? 'page' : undefined}
                      className={cn(
                        'cursor-pointer rounded-full px-2.5 py-1.5 font-sans text-[10.5px] leading-none font-extrabold tracking-[0.03em] whitespace-nowrap uppercase transition-all',
                        isActive
                          ? 'bg-[#AF2A55] text-[#F2EFEF] shadow-xs'
                          : isBurgundySurface
                            ? 'text-[#F2EFEF]/90 hover:bg-[#F2EFEF]/14'
                            : 'text-[#4D0F13] hover:bg-[#4D0F13]/10',
                      )}
                    >
                      {quickItem.shortLabel}
                    </button>
                  );
                },
              )}
            </div>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Mở danh mục tất cả các phần"
              aria-expanded={isMobileMenuOpen}
              className={cn(
                'inline-flex cursor-pointer items-center gap-1.5 rounded-full px-3 py-1.5 font-sans text-[10.5px] leading-none font-extrabold tracking-[0.03em] uppercase transition-all',
                isBurgundySurface
                  ? 'bg-[#F2EFEF]/16 text-[#F2EFEF]'
                  : 'bg-[#4D0F13] text-[#F2EFEF]',
              )}
            >
              <span className="max-w-[130px] truncate sm:max-w-[200px]">
                {activeNavItem.shortLabel}
              </span>
              <Menu className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            </button>
          </div>
        </nav>
      </header>

      <AppleHeaderMobileSheet
        isOpen={isMobileMenuOpen}
        activeNavId={activeNavItem.id}
        onClose={() => setIsMobileMenuOpen(false)}
        onSelectSection={handleSelectSection}
      />
    </>
  );
}
