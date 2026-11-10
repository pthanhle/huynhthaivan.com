'use client';

import React from 'react';
import { SLIDE_03_ABOUT_ME_DATA } from '@/entities/slides/constants/slides-01-to-05.constants';
import { SlideCutoutPortrait } from '@/shared/ui/slide-primitives/SlideCutoutPortrait';
import { SlideDashedRule } from '@/shared/ui/slide-primitives/SlideDashedRule';
import { SlideDisplayHeading } from '@/shared/ui/slide-primitives/SlideDisplayHeading';
import { SlideRevealBlock } from '@/shared/ui/slide-primitives/SlideRevealBlock';
import { SlideStarRow } from '@/shared/ui/slide-primitives/SlideStarRow';
import { SlideViewportShell } from '@/shared/ui/slide-primitives/SlideViewportShell';

export function Slide03AboutMeStage() {
  return (
    <SlideViewportShell
      slideNumber={3}
      theme="plaster-cream"
      ariaLabel="Trang 03 — About Me Huỳnh Thái Vân"
    >
      <div className="relative flex flex-1 flex-col justify-between px-[4.2vw] pt-[2.2dvh] pb-[4.5dvh]">
        <SlideRevealBlock preset="fade-up" delay={0.04} className="relative z-10">
          <SlideDisplayHeading tone="crimson-on-plaster" scale="display-lg" align="left">
            {SLIDE_03_ABOUT_ME_DATA.heading}
          </SlideDisplayHeading>
        </SlideRevealBlock>

        <div className="relative z-20 grid flex-1 grid-cols-1 items-center gap-8 lg:grid-cols-12">
          <div className="relative flex items-end justify-center lg:col-span-5 lg:h-full">
            <SlideStarRow
              color="crimson"
              count={1}
              size="lg"
              className="absolute top-[28%] left-[18%] hidden lg:inline-flex"
            />

            <SlideCutoutPortrait
              src={SLIDE_03_ABOUT_ME_DATA.portraitCutoutSrc}
              alt={SLIDE_03_ABOUT_ME_DATA.portraitAlt}
              width={585}
              height={826}
              delay={0.1}
              wrapperClassName="relative z-20"
              imageClassName="h-[46dvh] sm:h-[58dvh] lg:mt-[-7dvh] lg:h-[74dvh]"
            />

            <SlideStarRow
              color="crimson"
              count={1}
              size="lg"
              className="absolute top-[28%] right-[4%] hidden lg:inline-flex"
            />
          </div>

          <SlideRevealBlock
            preset="fade-right"
            delay={0.14}
            className="flex flex-col justify-center gap-5 lg:col-span-7 lg:pl-6"
          >
            <p className="font-sans text-justify text-[clamp(0.96rem,1.45vw,1.42rem)] leading-[1.68] font-medium text-[#AF2A55]">
              {SLIDE_03_ABOUT_ME_DATA.paragraph}
            </p>

            <SlideDashedRule tone="crimson" className="w-full" />
          </SlideRevealBlock>
        </div>
      </div>
    </SlideViewportShell>
  );
}
