'use client';

import React from 'react';
import { SLIDE_05_CSR_BMB_DATA } from '@/entities/slides/constants/slides-01-to-05.constants';
import { SlideBulletList } from '@/shared/ui/slide-primitives/SlideBulletList';
import { SlideCutoutPortrait } from '@/shared/ui/slide-primitives/SlideCutoutPortrait';
import { SlideDashedRule } from '@/shared/ui/slide-primitives/SlideDashedRule';
import { SlideDisplayHeading } from '@/shared/ui/slide-primitives/SlideDisplayHeading';
import { SlideRevealBlock } from '@/shared/ui/slide-primitives/SlideRevealBlock';
import { SlideViewportShell } from '@/shared/ui/slide-primitives/SlideViewportShell';

export function Slide05CsrBmbOverviewStage() {
  return (
    <SlideViewportShell
      slideNumber={5}
      theme="plaster-cream"
      ariaLabel="Trang 05 — 01. CSR & Social Impact BMB Love School"
    >
      <div className="relative flex flex-1 flex-col justify-between overflow-hidden px-[4.2vw] pt-[2.2dvh] pb-0 lg:grid lg:grid-cols-12 lg:items-center">
        <div className="relative z-20 flex flex-col gap-4 pb-[5.5dvh] lg:col-span-7">
          <SlideRevealBlock preset="fade-up" delay={0.04}>
            <SlideDisplayHeading tone="crimson-on-plaster" scale="section-banner" align="left">
              {SLIDE_05_CSR_BMB_DATA.heading}
            </SlideDisplayHeading>
          </SlideRevealBlock>

          <SlideRevealBlock preset="fade-up" delay={0.08}>
            <h3 className="font-sans text-[clamp(1.08rem,1.8vw,1.74rem)] font-extrabold text-[#AF2A55] uppercase">
              {SLIDE_05_CSR_BMB_DATA.subHeading}
            </h3>
          </SlideRevealBlock>

          <SlideBulletList
            items={SLIDE_05_CSR_BMB_DATA.bullets}
            tone="crimson"
            baseDelay={0.12}
          />

          <SlideRevealBlock preset="fade-left" delay={0.2}>
            <SlideDashedRule tone="crimson" className="mt-1.5 w-[min(340px,65vw)]" />
          </SlideRevealBlock>
        </div>

        <div className="relative flex min-h-[38dvh] flex-col items-center justify-end lg:col-span-5 lg:h-full lg:items-end">
          <SlideRevealBlock
            preset="scale-up"
            delay={0.1}
            className="relative z-10 mb-2 lg:absolute lg:top-[8dvh] lg:right-[2vw] lg:mb-0"
          >
            <img
              src={SLIDE_05_CSR_BMB_DATA.logoSrc}
              alt={SLIDE_05_CSR_BMB_DATA.logoAlt}
              width={665}
              height={405}
              loading="lazy"
              decoding="async"
              className="w-[min(240px,54vw)] object-contain lg:w-[23vw]"
            />
          </SlideRevealBlock>

          <SlideCutoutPortrait
            src={SLIDE_05_CSR_BMB_DATA.portraitCutoutSrc}
            alt={SLIDE_05_CSR_BMB_DATA.portraitAlt}
            width={935}
            height={703}
            delay={0.16}
            wrapperClassName="relative z-20 lg:absolute lg:right-0 lg:bottom-0"
            imageClassName="max-h-[42dvh] sm:max-h-[48dvh] lg:max-h-[58dvh]"
          />
        </div>
      </div>
    </SlideViewportShell>
  );
}
