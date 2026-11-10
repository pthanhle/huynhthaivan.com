'use client';

import React from 'react';
import {
  SLIDE_11_CAPTION,
  SLIDE_11_INTERNATIONAL_EVENTS_CARDS,
} from '@/entities/slides/constants/slides-11-to-15.constants';
import { SlideInteractivePhotoCard } from '@/shared/ui/slide-primitives/SlideInteractivePhotoCard';
import { SlideRevealBlock } from '@/shared/ui/slide-primitives/SlideRevealBlock';
import { SlideViewportShell } from '@/shared/ui/slide-primitives/SlideViewportShell';

export function Slide11EventInternationalStage() {
  return (
    <SlideViewportShell
      slideNumber={11}
      theme="plaster-cream"
      ariaLabel="Trang 11 — Một số hình ảnh các chương trình đã tổ chức cho Nhân viên; Giáo viên hơn 500 người"
    >
      <div className="relative flex flex-1 flex-col justify-between px-[3.2vw] pt-[1.8dvh] pb-[4.2dvh]">
        <div className="my-auto grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {SLIDE_11_INTERNATIONAL_EVENTS_CARDS.map((card, idx) => (
            <SlideInteractivePhotoCard
              key={card.id}
              src={card.src}
              alt={card.alt}
              caption={card.alt}
              width={900}
              height={600}
              aspect="3/2"
              delay={0.04 + idx * 0.045}
              className="lg:max-h-[32dvh]"
            />
          ))}
        </div>

        <SlideRevealBlock preset="fade-up" delay={0.22}>
          <p className="font-sans mt-2.5 text-center text-[clamp(0.98rem,1.52vw,1.46rem)] leading-[1.35] font-extrabold text-[#4D0F13]">
            {SLIDE_11_CAPTION.line1}
            <br />
            {SLIDE_11_CAPTION.line2}
          </p>
        </SlideRevealBlock>
      </div>
    </SlideViewportShell>
  );
}
