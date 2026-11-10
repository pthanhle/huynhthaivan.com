'use client';

import React from 'react';
import { SLIDE_02_INTRODUCTION_DATA } from '@/entities/slides/constants/slides-01-to-05.constants';
import { SlideBulletList } from '@/shared/ui/slide-primitives/SlideBulletList';
import { SlideCutoutPortrait } from '@/shared/ui/slide-primitives/SlideCutoutPortrait';
import { SlideDashedRule } from '@/shared/ui/slide-primitives/SlideDashedRule';
import { SlideDisplayHeading } from '@/shared/ui/slide-primitives/SlideDisplayHeading';
import { SlideRevealBlock } from '@/shared/ui/slide-primitives/SlideRevealBlock';
import { SlideStarRow } from '@/shared/ui/slide-primitives/SlideStarRow';
import { SlideViewportShell } from '@/shared/ui/slide-primitives/SlideViewportShell';

export function Slide02IntroductionStage() {
  return (
    <SlideViewportShell
      slideNumber={2}
      theme="burgundy-velvet"
      ariaLabel="Trang 02 — Introduction Huỳnh Thái Vân"
    >
      <div className="relative flex flex-1 flex-col justify-between px-[3.2vw] pt-[2dvh] pb-[4.5dvh]">
        <SlideRevealBlock
          preset="fade-up"
          delay={0.04}
          className="relative z-10 flex w-full items-center justify-between gap-2"
        >
          <SlideStarRow
            color="white"
            direction="vertical"
            size="md"
            className="hidden sm:inline-flex"
          />

          <SlideDisplayHeading
            tone="offwhite-on-burgundy"
            scale="display-xl"
            align="center"
            className="flex-1"
          >
            {SLIDE_02_INTRODUCTION_DATA.heading}
          </SlideDisplayHeading>

          <SlideStarRow
            color="white"
            direction="vertical"
            size="md"
            className="hidden sm:inline-flex"
          />
        </SlideRevealBlock>

        <div className="relative z-20 mt-3 grid flex-1 grid-cols-1 items-center gap-6 lg:grid-cols-12">
          <div className="flex flex-col gap-5 lg:col-span-7 lg:pl-[2.2vw]">
            <SlideRevealBlock preset="fade-left" delay={0.08}>
              <SlideDashedRule tone="offwhite" className="w-[min(360px,70vw)]" />
            </SlideRevealBlock>

            <SlideBulletList
              items={SLIDE_02_INTRODUCTION_DATA.bullets}
              tone="offwhite"
              baseDelay={0.1}
            />
          </div>
        </div>

        <SlideCutoutPortrait
          src={SLIDE_02_INTRODUCTION_DATA.portraitCutoutSrc}
          alt={SLIDE_02_INTRODUCTION_DATA.portraitAlt}
          width={594}
          height={991}
          priority
          delay={0.14}
          wrapperClassName="relative z-20 mx-auto mt-4 flex justify-center lg:absolute lg:right-[5.2vw] lg:bottom-0 lg:mt-0"
          imageClassName="h-[46dvh] sm:h-[58dvh] lg:h-[75dvh]"
        />
      </div>
    </SlideViewportShell>
  );
}
