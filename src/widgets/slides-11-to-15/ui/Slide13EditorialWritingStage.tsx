'use client';

import React from 'react';
import {
  SLIDE_13_WRITING_DATA,
  SLIDE_13_WRITING_LINKS,
} from '@/entities/slides/constants/slides-11-to-15.constants';
import { SlideDisplayHeading } from '@/shared/ui/slide-primitives/SlideDisplayHeading';
import { SlideRevealBlock } from '@/shared/ui/slide-primitives/SlideRevealBlock';
import { SlideStarRow } from '@/shared/ui/slide-primitives/SlideStarRow';
import { SlideViewportShell } from '@/shared/ui/slide-primitives/SlideViewportShell';

export function Slide13EditorialWritingStage() {
  return (
    <SlideViewportShell
      slideNumber={13}
      theme="burgundy-velvet"
      ariaLabel="Trang 13 — Viết Lách Chút"
    >
      <div className="pointer-events-none absolute top-0 right-0 bottom-0 z-0 hidden w-[38%] overflow-hidden lg:block">
        <img
          src={SLIDE_13_WRITING_DATA.beachPortraitSrc}
          alt={SLIDE_13_WRITING_DATA.beachPortraitAlt}
          width={1400}
          height={1867}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="relative z-10 grid flex-1 grid-cols-1 items-center gap-6 px-[4.2vw] pt-[2dvh] pb-[4.5dvh] lg:grid-cols-12">
        <div className="flex flex-col gap-4 lg:col-span-7 lg:pr-6">
          <SlideRevealBlock preset="fade-up" delay={0.04}>
            <SlideDisplayHeading tone="offwhite-on-burgundy" scale="display-lg" align="left">
              {SLIDE_13_WRITING_DATA.heading}
            </SlideDisplayHeading>
          </SlideRevealBlock>

          <div className="flex justify-end pr-[12%]">
            <SlideStarRow color="white" size="md" />
          </div>

          <SlideRevealBlock
            preset="fade-up"
            delay={0.1}
            className="flex flex-col gap-2 text-[clamp(0.94rem,1.35vw,1.32rem)] leading-[1.58] text-[#F5F3F3]"
          >
            <p className="text-pretty">{SLIDE_13_WRITING_DATA.paragraph1}</p>
            <p className="text-pretty">{SLIDE_13_WRITING_DATA.paragraph2}</p>
          </SlideRevealBlock>

          <SlideRevealBlock preset="fade-up" delay={0.16} className="mt-1.5 flex flex-col gap-2.5">
            <h3 className="font-sans text-center text-[clamp(0.98rem,1.38vw,1.34rem)] font-extrabold text-[#F5F3F3] uppercase lg:text-left">
              {SLIDE_13_WRITING_DATA.linksIntro}
            </h3>

            <ol className="flex flex-col gap-2.5 list-decimal pl-5 text-[clamp(0.88rem,1.28vw,1.24rem)] leading-[1.45] text-[#F5F3F3]">
              {SLIDE_13_WRITING_LINKS.map((item) => (
                <li key={item.index} className="min-w-0 break-all">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-1 underline-offset-4 transition-opacity hover:opacity-80"
                  >
                    {item.displayUrl}
                  </a>
                </li>
              ))}
            </ol>
          </SlideRevealBlock>
        </div>

        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm shadow-xl lg:hidden">
          <img
            src={SLIDE_13_WRITING_DATA.beachPortraitSrc}
            alt={SLIDE_13_WRITING_DATA.beachPortraitAlt}
            width={900}
            height={1200}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </SlideViewportShell>
  );
}
