'use client';

import React from 'react';
import { SLIDE_14_PASSION_MC_DANCE_DATA } from '@/entities/slides/constants/slides-11-to-15.constants';
import { SlideDisplayHeading } from '@/shared/ui/slide-primitives/SlideDisplayHeading';
import { SlideInteractivePhotoCard } from '@/shared/ui/slide-primitives/SlideInteractivePhotoCard';
import { SlideRevealBlock } from '@/shared/ui/slide-primitives/SlideRevealBlock';
import { SlideViewportShell } from '@/shared/ui/slide-primitives/SlideViewportShell';

export function Slide14PassionMcDanceStage() {
  const { leftCard, rightCard } = SLIDE_14_PASSION_MC_DANCE_DATA;

  return (
    <SlideViewportShell
      slideNumber={14}
      theme="plaster-cream"
      ariaLabel="Trang 14 — Nghề Chọn Người Nhưng Người Chọn Thêm Đam Mê"
    >
      <div className="relative flex flex-1 flex-col justify-between px-[4.2vw] pt-[2dvh] pb-[4.5dvh]">
        <SlideRevealBlock preset="fade-up" delay={0.04}>
          <SlideDisplayHeading tone="burgundy-on-plaster" scale="display-md" align="center">
            {SLIDE_14_PASSION_MC_DANCE_DATA.heading}
          </SlideDisplayHeading>
        </SlideRevealBlock>

        <div className="my-auto grid grid-cols-1 gap-8 py-3 md:grid-cols-2 lg:gap-14 lg:px-[5vw]">
          <figure className="flex flex-col items-center gap-3">
            <SlideInteractivePhotoCard
              src={leftCard.src}
              alt={leftCard.alt}
              caption={`${leftCard.line1} ${leftCard.line2}`}
              width={1000}
              height={1000}
              aspect="1/1"
              delay={0.1}
              className="max-h-[54dvh] max-w-[440px]"
            />

            <figcaption className="font-sans text-center text-[clamp(0.98rem,1.5vw,1.44rem)] leading-[1.32] font-extrabold text-[#AF2A55] uppercase">
              {leftCard.line1}
              <br />
              {leftCard.line2}
            </figcaption>
          </figure>

          <figure className="flex flex-col items-center gap-3">
            <SlideInteractivePhotoCard
              src={rightCard.src}
              alt={rightCard.alt}
              caption={`${rightCard.line1} ${rightCard.line2}`}
              width={900}
              height={900}
              aspect="1/1"
              delay={0.16}
              className="max-h-[54dvh] max-w-[440px]"
            />

            <figcaption className="font-sans text-center text-[clamp(0.98rem,1.5vw,1.44rem)] leading-[1.32] font-extrabold text-[#AF2A55] uppercase">
              {rightCard.line1}
              <br />
              {rightCard.line2}
            </figcaption>
          </figure>
        </div>
      </div>
    </SlideViewportShell>
  );
}
