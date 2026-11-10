'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import {
  BookOpen,
  ChevronDown,
  ChevronUp,
  Download,
  Film,
} from 'lucide-react';
import React, { useState } from 'react';
import { SLIDE_15_CONTACT_ME_DATA } from '@/entities/slides/constants/slides-11-to-15.constants';
import { usePortfolioDeckStore } from '@/shared/stores/use-portfolio-deck.store';

export function DeckFloatingToolbar() {
  const openVideoCinema = usePortfolioDeckStore((s) => s.openVideoCinema);
  const openMagazineReader = usePortfolioDeckStore((s) => s.openMagazineReader);
  const [isMinimized, setIsMinimized] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div
        aria-hidden="true"
        style={{ scaleX }}
        className="pointer-events-none fixed inset-x-0 top-0 z-50 h-[2px] origin-left bg-[#AF2A55]"
      />

      <nav
        aria-label="Thanh công cụ nhanh Portfolio"
        className="apple-liquid-glass-capsule apple-liquid-glass-burgundy fixed bottom-2.5 left-1/2 z-40 flex -translate-x-1/2 items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold text-[#F2EFEF] sm:gap-2 sm:px-3.5 sm:py-1.5"
      >
        {!isMinimized && (
          <>
            <button
              type="button"
              onClick={() => openVideoCinema('vid-01')}
              aria-label="Xem Video"
              className="inline-flex cursor-pointer items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-[#F2EFEF] transition-colors hover:bg-white/18"
            >
              <Film className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="hidden sm:inline">Video</span>
            </button>

            <button
              type="button"
              onClick={() => openMagazineReader('rt-19')}
              aria-label="Đọc Nội san RT Connection"
              className="inline-flex cursor-pointer items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-[#F2EFEF] transition-colors hover:bg-white/18"
            >
              <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="hidden sm:inline">Nội San</span>
            </button>

            <span aria-hidden="true" className="h-3.5 w-px bg-white/15" />

            <a
              href={SLIDE_15_CONTACT_ME_DATA.pdfDownloadHref}
              download="Huynh-Thai-Van-Portfolio-2026.pdf"
              aria-label="Tải PDF"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/18 bg-white/12 px-2.5 py-1 font-bold text-[#F2EFEF] transition-colors hover:bg-white/22"
            >
              <Download className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="hidden sm:inline">Tải PDF</span>
            </a>
          </>
        )}

        <button
          type="button"
          onClick={() => setIsMinimized((prev) => !prev)}
          aria-label={isMinimized ? 'Mở rộng thanh công cụ' : 'Thu gọn thanh công cụ'}
          className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-white/10 text-[#F2EFEF]/85 transition-colors hover:bg-white/20"
        >
          {isMinimized ? (
            <ChevronUp className="h-3.5 w-3.5" aria-hidden="true" />
          ) : (
            <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
          )}
        </button>
      </nav>
    </>
  );
}
