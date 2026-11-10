'use client';

import React from 'react';
import {
  SLIDE_04_STRENGTHS_SECTIONS,
  SLIDE_04_STRENGTHS_VISUAL,
} from '@/entities/slides/constants/slides-01-to-05.constants';
import { SlideBulletList } from '@/shared/ui/slide-primitives/SlideBulletList';
import { SlideCutoutPortrait } from '@/shared/ui/slide-primitives/SlideCutoutPortrait';
import { SlideDisplayHeading } from '@/shared/ui/slide-primitives/SlideDisplayHeading';
import { SlideRevealBlock } from '@/shared/ui/slide-primitives/SlideRevealBlock';
import { SlideStarRow } from '@/shared/ui/slide-primitives/SlideStarRow';
import { SlideViewportShell } from '@/shared/ui/slide-primitives/SlideViewportShell';

export function Slide04StrengthsStage() {
  return (
    <SlideViewportShell
      slideNumber={4}
      theme="burgundy-velvet"
      ariaLabel="Trang 04 — Strengths Huỳnh Thái Vân"
    >
      <div className="relative grid flex-1 grid-cols-1 items-center gap-8 px-[4.2vw] pt-[2.2dvh] pb-[4dvh] lg:grid-cols-12">
        <div className="relative z-20 flex flex-col gap-5 lg:col-span-5">
          {SLIDE_04_STRENGTHS_SECTIONS.map((sec, secIdx) => (
            <SlideRevealBlock
              key={sec.numberTitle}
              preset="fade-left"
              delay={0.05 + secIdx * 0.06}
              className="flex flex-col gap-2"
            >
              <h3 className="font-sans text-[clamp(1.05rem,1.52vw,1.48rem)] font-extrabold tracking-[0.01em] text-[#F5F3F3] uppercase">
                {sec.numberTitle}
              </h3>

              <SlideBulletList
                items={sec.bullets}
                tone="offwhite"
                size="sm"
                baseDelay={0.08 + secIdx * 0.06}
                className="pl-1"
              />
            </SlideRevealBlock>
          ))}
        </div>

        <div className="relative flex h-full min-h-[48dvh] flex-col items-center justify-end lg:col-span-7">
          <SlideStarRow
            color="white"
            size="md"
            className="mb-3 self-start lg:absolute lg:top-[38%] lg:left-[2%]"
          />

          <SlideCutoutPortrait
            src={SLIDE_04_STRENGTHS_VISUAL.portraitCutoutSrc}
            alt={SLIDE_04_STRENGTHS_VISUAL.portraitAlt}
            width={769}
            height={1107}
            delay={0.12}
            wrapperClassName="relative z-10"
            imageClassName="h-[52dvh] sm:h-[64dvh] lg:h-[82dvh]"
          />

          <SlideDisplayHeading
            tone="offwhite-on-burgundy"
            scale="display-lg"
            align="center"
            className="pointer-events-none absolute inset-x-0 top-[46%] z-20"
          >
            {SLIDE_04_STRENGTHS_VISUAL.displayHeading}
          </SlideDisplayHeading>

          <SlideStarRow
            color="white"
            size="md"
            className="mt-3 self-end lg:absolute lg:right-[2%] lg:bottom-[8%]"
          />
        </div>
      </div>
    </SlideViewportShell>
  );
}
