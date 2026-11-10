'use client';

import React from 'react';
import {
  SLIDE_07_CSR_FUNDRAISING_CARDS,
  SLIDE_07_CSR_FUNDRAISING_TEXT,
} from '@/entities/slides/constants/slides-06-to-10.constants';
import { SlideDashedRule } from '@/shared/ui/slide-primitives/SlideDashedRule';
import { SlideDisplayHeading } from '@/shared/ui/slide-primitives/SlideDisplayHeading';
import { SlideInteractivePhotoCard } from '@/shared/ui/slide-primitives/SlideInteractivePhotoCard';
import { SlideRevealBlock } from '@/shared/ui/slide-primitives/SlideRevealBlock';
import { SlideStarRow } from '@/shared/ui/slide-primitives/SlideStarRow';
import { SlideViewportShell } from '@/shared/ui/slide-primitives/SlideViewportShell';

export function Slide07CsrFundraisingStage() {
  return (
    <SlideViewportShell
      slideNumber={7}
      theme="burgundy-velvet"
      ariaLabel="Trang 07 — Mình Có Gì? Một số các hoạt động kêu gọi, gây quỹ"
    >
      <div className="relative flex flex-1 flex-col justify-between px-[3.2vw] pt-[1.8dvh] pb-[4.5dvh]">
        <SlideRevealBlock
          preset="fade-up"
          delay={0.04}
          className="flex flex-col items-end justify-between gap-4 lg:flex-row lg:items-end"
        >
          <SlideDashedRule
            tone="offwhite"
            thickness="bold"
            className="mb-3 hidden flex-1 lg:mr-8 lg:block"
          />

          <SlideDisplayHeading tone="offwhite-on-burgundy" scale="display-lg" align="right">
            {SLIDE_07_CSR_FUNDRAISING_TEXT.heading}
          </SlideDisplayHeading>
        </SlideRevealBlock>

        <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {SLIDE_07_CSR_FUNDRAISING_CARDS.map((card, idx) => (
            <SlideInteractivePhotoCard
              key={card.id}
              src={card.src}
              alt={card.alt}
              caption={card.alt}
              width={771}
              height={578}
              aspect="16/10"
              framedBorder
              delay={0.08 + idx * 0.06}
            />
          ))}
        </div>

        <SlideRevealBlock
          preset="fade-up"
          delay={0.18}
          className="mt-4 flex flex-col items-center gap-2.5 text-center"
        >
          <h3 className="font-sans text-[clamp(1.18rem,1.74vw,1.68rem)] font-extrabold text-[#F5F3F3]">
            {SLIDE_07_CSR_FUNDRAISING_TEXT.subHeading}
          </h3>

          <p className="font-sans max-w-[92vw] text-center text-[clamp(0.92rem,1.38vw,1.34rem)] leading-[1.52] text-[#F5F3F3] lg:max-w-[86vw]">
            {SLIDE_07_CSR_FUNDRAISING_TEXT.paragraph}
          </p>

          <div className="mt-1.5 grid w-full grid-cols-3 items-center">
            <div className="flex justify-start">
              <SlideStarRow color="white" size="md" />
            </div>
            <div className="flex justify-center">
              <SlideStarRow color="white" size="md" />
            </div>
            <div className="flex justify-end">
              <SlideStarRow color="white" size="md" />
            </div>
          </div>
        </SlideRevealBlock>
      </div>
    </SlideViewportShell>
  );
}
