'use client';

import React from 'react';
import {
  SLIDE_06_CSR_METRICS_CARDS,
  SLIDE_06_HEADING,
} from '@/entities/slides/constants/slides-06-to-10.constants';
import { SlideDashedRule } from '@/shared/ui/slide-primitives/SlideDashedRule';
import { SlideDisplayHeading } from '@/shared/ui/slide-primitives/SlideDisplayHeading';
import { SlideInteractivePhotoCard } from '@/shared/ui/slide-primitives/SlideInteractivePhotoCard';
import { SlideRevealBlock } from '@/shared/ui/slide-primitives/SlideRevealBlock';
import { SlideStarRow } from '@/shared/ui/slide-primitives/SlideStarRow';
import { SlideViewportShell } from '@/shared/ui/slide-primitives/SlideViewportShell';

export function Slide06CsrMetricsStage() {
  return (
    <SlideViewportShell
      slideNumber={6}
      theme="burgundy-velvet"
      ariaLabel="Trang 06 — Mình Có Gì? Kết quả truyền thông BMB Love School"
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
            {SLIDE_06_HEADING}
          </SlideDisplayHeading>
        </SlideRevealBlock>

        <div className="mt-4 grid flex-1 grid-cols-1 items-start gap-6 md:grid-cols-3 lg:gap-8">
          {SLIDE_06_CSR_METRICS_CARDS.map((card, idx) => (
            <article key={card.id} className="flex h-full flex-col justify-between gap-3">
              <div className="flex flex-col gap-3">
                <SlideInteractivePhotoCard
                  src={card.src}
                  alt={card.alt}
                  caption={card.title}
                  width={840}
                  height={520}
                  aspect="16/10"
                  framedBorder
                  delay={0.08 + idx * 0.06}
                />

                <SlideRevealBlock preset="fade-up" delay={0.12 + idx * 0.06}>
                  <h3 className="font-sans text-[clamp(1.14rem,1.68vw,1.64rem)] font-extrabold text-[#F5F3F3]">
                    {card.title}
                  </h3>

                  <p className="font-sans mt-1.5 text-[clamp(0.86rem,1.15vw,1.12rem)] leading-[1.48] whitespace-pre-line text-[#F5F3F3]">
                    {card.description}
                  </p>
                </SlideRevealBlock>
              </div>

              <SlideStarRow color="white" size="md" className="pt-1" />
            </article>
          ))}
        </div>
      </div>
    </SlideViewportShell>
  );
}
