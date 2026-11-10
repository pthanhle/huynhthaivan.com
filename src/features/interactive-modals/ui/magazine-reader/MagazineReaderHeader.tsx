'use client';

import {
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Download,
  Maximize,
  Minimize,
  X,
  ZoomIn,
  ZoomOut,
} from 'lucide-react';
import React from 'react';
import { RT_CONNECTION_ISSUES_LIST } from '@/entities/media-work/constants/rt-magazines.constants';
import type { MagazineIssueEntry } from '@/entities/media-work/types/media-work.types';
import { cn } from '@/shared/utils/cn.util';

export interface MagazineReaderHeaderProps {
  currentIssue: MagazineIssueEntry;
  activePage: number;
  isZoomed: boolean;
  isBrowserFullscreen: boolean;
  onToggleZoom: () => void;
  onToggleFullscreen: () => void;
  onStepIssue: (delta: number) => void;
  onSelectIssue: (issueId: string) => void;
  onClose: () => void;
}

export function MagazineReaderHeader({
  currentIssue,
  activePage,
  isZoomed,
  isBrowserFullscreen,
  onToggleZoom,
  onToggleFullscreen,
  onStepIssue,
  onSelectIssue,
  onClose,
}: MagazineReaderHeaderProps) {
  return (
    <header className="flex shrink-0 flex-col gap-2 border-b border-white/12 bg-black/55 px-3 py-2 sm:px-6 sm:py-2.5">
      <div className="flex items-center justify-between gap-2">
        <div className="flex min-w-0 items-center gap-2">
          <BookOpen className="h-4 w-4 shrink-0 text-[#F2EFEF] sm:h-5 sm:w-5" aria-hidden="true" />
          <h2
            id="magazine-reader-modal-title"
            className="truncate text-xs font-extrabold sm:text-base"
          >
            {currentIssue.title}
          </h2>
          <span className="apple-tabular-nums hidden rounded-full bg-white/12 px-2.5 py-0.5 text-xs font-semibold text-white/85 sm:inline-flex">
            Trang {String(activePage).padStart(2, '0')} / {currentIssue.pageCount}
          </span>
        </div>

        <div className="flex shrink-0 items-center gap-1.5">
          <button
            type="button"
            onClick={onToggleZoom}
            aria-label={isZoomed ? 'Thu nhỏ trang báo' : 'Phóng to trang báo'}
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white/12 text-white transition-colors hover:bg-white/24"
          >
            {isZoomed ? (
              <ZoomOut className="h-4 w-4" aria-hidden="true" />
            ) : (
              <ZoomIn className="h-4 w-4" aria-hidden="true" />
            )}
          </button>

          <button
            type="button"
            onClick={onToggleFullscreen}
            aria-label="Toàn màn hình"
            className="hidden h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white/12 text-white transition-colors hover:bg-white/24 sm:flex"
          >
            {isBrowserFullscreen ? (
              <Minimize className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Maximize className="h-4 w-4" aria-hidden="true" />
            )}
          </button>

          <a
            href={currentIssue.localPdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-full bg-white/12 px-2.5 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-white/22 sm:px-3"
          >
            <Download className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="hidden xs:inline sm:inline">PDF</span>
          </a>

          <button
            type="button"
            onClick={onClose}
            aria-label="Đóng trình đọc tạp chí"
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#AF2A55] text-white transition-opacity hover:opacity-90"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5">
        <button
          type="button"
          onClick={() => onStepIssue(-1)}
          aria-label="Kỳ nội san trước"
          className="flex h-7 w-7 shrink-0 cursor-pointer items-center justify-center rounded-full bg-white/12 text-white transition-colors hover:bg-white/24"
        >
          <ChevronLeft className="h-4 w-4" aria-hidden="true" />
        </button>

        {RT_CONNECTION_ISSUES_LIST.map((issue) => (
          <button
            key={issue.id}
            type="button"
            onClick={() => onSelectIssue(issue.id)}
            className={cn(
              'apple-tabular-nums shrink-0 cursor-pointer rounded-full px-3 py-1 text-xs font-bold whitespace-nowrap transition-colors',
              issue.id === currentIssue.id
                ? 'bg-[#AF2A55] text-white shadow-xs'
                : 'bg-white/10 text-white/80 hover:bg-white/20',
            )}
          >
            No. {issue.issueNumber}
          </button>
        ))}

        <button
          type="button"
          onClick={() => onStepIssue(1)}
          aria-label="Kỳ nội san tiếp theo"
          className="flex h-7 w-7 shrink-0 cursor-pointer items-center justify-center rounded-full bg-white/12 text-white transition-colors hover:bg-white/24"
        >
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}
