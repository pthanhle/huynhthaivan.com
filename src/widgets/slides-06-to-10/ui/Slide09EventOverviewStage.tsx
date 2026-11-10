'use client';

import React from 'react';
import { SLIDE_09_EVENT_OVERVIEW_DATA } from '@/entities/slides/constants/slides-06-to-10.constants';
import { SlideDisplayHeading } from '@/shared/ui/slide-primitives/SlideDisplayHeading';
import { SlideInteractivePhotoCard } from '@/shared/ui/slide-primitives/SlideInteractivePhotoCard';
import { SlideRevealBlock } from '@/shared/ui/slide-primitives/SlideRevealBlock';
import { SlideViewportShell } from '@/shared/ui/slide-primitives/SlideViewportShell';

export function Slide09EventOverviewStage() {
  return (
    <SlideViewportShell
      slideNumber={9}
      theme="plaster-cream"
      ariaLabel="Trang 09 — 02. Event & Engagement Mình Đã Làm Những Gì?"
    >
      <div className="relative flex flex-1 flex-col justify-between px-[3.2vw] pt-[1.8dvh] pb-[4.5dvh]">
        <SlideRevealBlock preset="fade-up" delay={0.04} className="flex flex-col gap-1">
          <SlideDisplayHeading tone="crimson-on-plaster" scale="section-banner" align="left">
            {SLIDE_09_EVENT_OVERVIEW_DATA.topHeading}
          </SlideDisplayHeading>

          <SlideDisplayHeading
            as="h3"
            tone="burgundy-on-plaster"
            scale="display-md"
            align="center"
          >
            {SLIDE_09_EVENT_OVERVIEW_DATA.mainHeading}
          </SlideDisplayHeading>
        </SlideRevealBlock>

        <div className="my-auto grid grid-cols-1 gap-5 py-2 md:grid-cols-3 lg:gap-7">
          {SLIDE_09_EVENT_OVERVIEW_DATA.cards.map((card, idx) => (
            <figure key={card.id} className="flex flex-col items-center gap-2.5">
              <SlideInteractivePhotoCard
                src={card.src}
                alt={card.alt}
                caption={card.title}
                width={900}
                height={600}
                aspect="3/2"
                delay={0.08 + idx * 0.06}
              />

              <figcaption className="font-sans text-center text-[clamp(1.04rem,1.56vw,1.5rem)] font-extrabold text-[#4D0F13]">
                {card.title}
              </figcaption>
            </figure>
          ))}
        </div>

        <SlideRevealBlock preset="fade-up" delay={0.18}>
          <p className="font-sans text-center text-[clamp(0.9rem,1.34vw,1.3rem)] font-extrabold text-[#AF2A55]">
            {SLIDE_09_EVENT_OVERVIEW_DATA.bottomNote}
          </p>
        </SlideRevealBlock>
      </div>
    </SlideViewportShell>
  );
}
