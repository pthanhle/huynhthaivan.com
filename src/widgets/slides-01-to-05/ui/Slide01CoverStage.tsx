'use client';

import React from 'react';
import { SLIDE_01_COVER_DATA } from '@/entities/slides/constants/slides-01-to-05.constants';
import { SlideCutoutPortrait } from '@/shared/ui/slide-primitives/SlideCutoutPortrait';
import { SlideDashedRule } from '@/shared/ui/slide-primitives/SlideDashedRule';
import { SlideDisplayHeading } from '@/shared/ui/slide-primitives/SlideDisplayHeading';
import { SlideRevealBlock } from '@/shared/ui/slide-primitives/SlideRevealBlock';
import { SlideStarRow } from '@/shared/ui/slide-primitives/SlideStarRow';
import { SlideViewportShell } from '@/shared/ui/slide-primitives/SlideViewportShell';

export function Slide01CoverStage() {
  return (
    <SlideViewportShell
      slideNumber={1}
      theme="plaster-cream"
      ariaLabel="Trang 01 — Huỳnh Thái Vân — Portfolio"
    >
      <div className="relative flex flex-1 flex-col justify-between px-[3.2vw] pt-[1.4dvh] pb-[6.2dvh] lg:pb-[4.8dvh]">
        <SlideRevealBlock preset="fade-up" delay={0.04} className="relative z-10 w-full text-center">
          <p className="font-sans text-[clamp(1.28rem,4.3vw,4.25rem)] font-extrabold tracking-[0.11em] text-[#AF2A55] uppercase slide-shadow-plaster-sm">
            {SLIDE_01_COVER_DATA.topRoleHeadline}
          </p>
        </SlideRevealBlock>

        <SlideRevealBlock
          preset="scale-up"
          delay={0.09}
          className="relative my-auto flex w-full items-center justify-center py-2"
        >
          <SlideDisplayHeading
            as="p"
            tone="crimson-on-plaster"
            scale="hero-cover"
            align="center"
            className="pointer-events-none relative z-10 w-full select-none"
          >
            {SLIDE_01_COVER_DATA.mainDisplayWord}
          </SlideDisplayHeading>
        </SlideRevealBlock>

        <SlideCutoutPortrait
          src={SLIDE_01_COVER_DATA.portraitCutoutSrc}
          alt={SLIDE_01_COVER_DATA.portraitAlt}
          width={1136}
          height={1099}
          priority
          delay={0.14}
          wrapperClassName="relative z-20 mx-auto my-1 flex justify-center sm:absolute sm:inset-x-0 sm:bottom-0 sm:my-0"
          imageClassName="h-[38dvh] max-w-[86vw] sm:h-[62dvh] lg:h-[74dvh]"
        />

        <div className="relative z-30 mt-auto flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">
          <SlideRevealBlock preset="fade-left" delay={0.16} className="flex flex-col items-start gap-2.5">
            <p className="font-display apple-tabular-nums text-[clamp(3.2rem,9.4vw,9rem)] leading-[0.86] text-[#AF2A55] slide-shadow-plaster-sm">
              {SLIDE_01_COVER_DATA.yearText}
            </p>
            <SlideStarRow color="crimson" size="md" className="mt-0.5" />
          </SlideRevealBlock>

          <SlideRevealBlock
            preset="fade-right"
            delay={0.18}
            className="flex w-full flex-col items-end gap-2 sm:w-auto sm:max-w-[42vw]"
          >
            <h1 className="font-display text-right text-[clamp(1.6rem,3.25vw,3.15rem)] leading-none tracking-[0.02em] text-[#AF2A55] uppercase slide-shadow-plaster-xs">
              {SLIDE_01_COVER_DATA.fullName}
              <span className="sr-only">
                {' — PR Specialist & CSR Lead | Corporate Communications & Event Specialist — Portfolio'}
              </span>
            </h1>

            <SlideDashedRule tone="crimson" className="w-[min(320px,65vw)]" />

            <div className="rounded-xs bg-[#F6F5F3]/90 px-4 py-2 text-right shadow-xs backdrop-blur-[2px]">
              <p className="font-sans text-[clamp(0.9rem,1.44vw,1.38rem)] leading-[1.45] font-medium text-[#AF2A55]">
                {SLIDE_01_COVER_DATA.quoteLine1}
                <br />
                {SLIDE_01_COVER_DATA.quoteLine2}
              </p>
            </div>

            <SlideStarRow color="crimson" size="md" className="mt-0.5" />
          </SlideRevealBlock>
        </div>
      </div>
    </SlideViewportShell>
  );
}
