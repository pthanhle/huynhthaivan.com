'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { BookOpen, Download, Film, X } from 'lucide-react';
import React from 'react';
import { SLIDE_15_CONTACT_ME_DATA } from '@/entities/slides/constants/slides-11-to-15.constants';
import {
  APPLE_HEADER_NAV_ITEMS,
  type AppleHeaderNavItem,
} from '@/features/deck-navigation/constants/header-navigation.constants';
import { useFocusTrap } from '@/shared/hooks/use-focus-trap.hook';
import { usePortfolioDeckStore } from '@/shared/stores/use-portfolio-deck.store';
import { cn } from '@/shared/utils/cn.util';

export interface AppleHeaderMobileSheetProps {
  isOpen: boolean;
  activeNavId: string;
  onClose: () => void;
  onSelectSection: (item: AppleHeaderNavItem) => void;
}

export function AppleHeaderMobileSheet({
  isOpen,
  activeNavId,
  onClose,
  onSelectSection,
}: AppleHeaderMobileSheetProps) {
  const sheetRef = useFocusTrap<HTMLDivElement>(isOpen, onClose);
  const openVideoCinema = usePortfolioDeckStore((s) => s.openVideoCinema);
  const openMagazineReader = usePortfolioDeckStore((s) => s.openMagazineReader);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Danh mục Portfolio Huỳnh Thái Vân"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-start justify-center bg-[#260507]/75 p-3 pt-16 backdrop-blur-md lg:hidden"
        >
          <motion.div
            ref={sheetRef}
            initial={{ opacity: 0, y: -16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            transition={{
              type: 'spring',
              stiffness: 380,
              damping: 32,
              mass: 0.8,
            }}
            onClick={(e) => e.stopPropagation()}
            className="apple-liquid-glass-capsule apple-liquid-glass-burgundy relative flex max-h-[82dvh] w-full max-w-lg flex-col overflow-hidden rounded-[26px] p-4 text-[#F2EFEF]"
          >
            <div className="flex items-center justify-between border-b border-[#F2EFEF]/15 pb-3">
              <span className="font-display text-base tracking-[0.06em] text-[#F2EFEF] uppercase">
                HUỲNH THÁI VÂN — PORTFOLIO
              </span>

              <button
                type="button"
                onClick={onClose}
                aria-label="Đóng danh mục"
                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#F2EFEF]/14 text-[#F2EFEF] transition-colors hover:bg-[#AF2A55]"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            <div className="mt-3 grid grid-cols-1 gap-1.5 overflow-y-auto pr-0.5 sm:grid-cols-2">
              {APPLE_HEADER_NAV_ITEMS.map((item) => {
                const isActive = item.id === activeNavId;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      onSelectSection(item);
                      onClose();
                    }}
                    aria-current={isActive ? 'page' : undefined}
                    className={cn(
                      'flex cursor-pointer items-center justify-between rounded-[16px] px-3.5 py-2.5 text-left text-xs font-extrabold tracking-[0.04em] uppercase transition-all',
                      isActive
                        ? 'bg-[#AF2A55] text-[#F2EFEF]'
                        : 'bg-[#F2EFEF]/10 text-[#F2EFEF]/90 hover:bg-[#F2EFEF]/18 hover:text-white',
                    )}
                  >
                    <span className="truncate">{item.label}</span>
                    {isActive && (
                      <span
                        aria-hidden="true"
                        className="ml-2 h-2 w-2 shrink-0 rounded-full bg-[#F2EFEF]"
                      />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="mt-3.5 grid grid-cols-3 gap-2 border-t border-[#F2EFEF]/15 pt-3">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  openVideoCinema('vid-01');
                }}
                className="inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-full bg-[#F2EFEF]/12 px-3 py-2 text-xs font-bold text-[#F2EFEF] transition-colors hover:bg-[#F2EFEF]/22"
              >
                <Film className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Video</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  onClose();
                  openMagazineReader('rt-19');
                }}
                className="inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-full bg-[#F2EFEF]/12 px-3 py-2 text-xs font-bold text-[#F2EFEF] transition-colors hover:bg-[#F2EFEF]/22"
              >
                <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Nội San</span>
              </button>

              <a
                href={SLIDE_15_CONTACT_ME_DATA.pdfDownloadHref}
                download="Huynh-Thai-Van-Portfolio-2026.pdf"
                onClick={onClose}
                className="inline-flex items-center justify-center gap-1.5 rounded-full border border-[#F2EFEF]/20 bg-[#F2EFEF]/14 px-3 py-2 text-xs font-bold text-[#F2EFEF] transition-colors hover:bg-[#F2EFEF]/24"
              >
                <Download className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Tải PDF</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
