'use client';

import { Globe, Mail, Phone } from 'lucide-react';
import React from 'react';
import { SLIDE_15_CONTACT_ME_DATA } from '@/entities/slides/constants/slides-11-to-15.constants';
import { SlideCutoutPortrait } from '@/shared/ui/slide-primitives/SlideCutoutPortrait';
import { SlideDashedRule } from '@/shared/ui/slide-primitives/SlideDashedRule';
import { SlideDisplayHeading } from '@/shared/ui/slide-primitives/SlideDisplayHeading';
import { SlideRevealBlock } from '@/shared/ui/slide-primitives/SlideRevealBlock';
import { SlideStarRow } from '@/shared/ui/slide-primitives/SlideStarRow';
import { SlideViewportShell } from '@/shared/ui/slide-primitives/SlideViewportShell';

export function Slide15ContactMeStage() {
  return (
    <SlideViewportShell
      slideNumber={15}
      theme="burgundy-velvet"
      ariaLabel="Trang 15 — Contact Me Huỳnh Thái Vân"
    >
      <div className="relative flex flex-1 flex-col justify-between px-[4.2vw] pt-[2dvh] pb-[5dvh]">
        <div className="relative z-10 flex flex-col">
          <SlideRevealBlock
            preset="fade-up"
            delay={0.04}
            className="flex items-start justify-between gap-4"
          >
            <SlideDisplayHeading tone="offwhite-on-burgundy" scale="contact-giant" align="left">
              {SLIDE_15_CONTACT_ME_DATA.headingLine1}
            </SlideDisplayHeading>

            <SlideStarRow
              color="white"
              size="md"
              className="mt-4 hidden sm:inline-flex"
            />
          </SlideRevealBlock>

          <div className="mt-1 flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:gap-10">
            <SlideRevealBlock preset="fade-up" delay={0.09}>
              <SlideDisplayHeading tone="offwhite-on-burgundy" scale="contact-giant" align="left">
                {SLIDE_15_CONTACT_ME_DATA.headingLine2}
              </SlideDisplayHeading>
            </SlideRevealBlock>

            <SlideRevealBlock
              preset="fade-right"
              delay={0.14}
              className="flex flex-col gap-3.5 pb-2 text-[clamp(1.02rem,1.62vw,1.58rem)] font-medium text-[#F5F3F3]"
            >
              <a
                href={SLIDE_15_CONTACT_ME_DATA.phoneHref}
                className="inline-flex items-center gap-3.5 transition-opacity hover:opacity-85"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F5F3F3] text-[#4D0F13]">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="apple-tabular-nums">
                  {SLIDE_15_CONTACT_ME_DATA.phoneDisplay}
                </span>
              </a>

              <div className="inline-flex items-center gap-3.5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F5F3F3] text-[#4D0F13]">
                  <Globe className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>{SLIDE_15_CONTACT_ME_DATA.locationDisplay}</span>
              </div>

              <a
                href={SLIDE_15_CONTACT_ME_DATA.emailHref}
                className="inline-flex min-w-0 items-center gap-3.5 break-all transition-opacity hover:opacity-85"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F5F3F3] text-[#4D0F13]">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>{SLIDE_15_CONTACT_ME_DATA.emailDisplay}</span>
              </a>
            </SlideRevealBlock>
          </div>
        </div>

        <SlideRevealBlock preset="fade-left" delay={0.18} className="relative z-20 mt-6">
          <SlideDashedRule tone="offwhite" className="w-[min(320px,65vw)]" />
        </SlideRevealBlock>

        <SlideCutoutPortrait
          src={SLIDE_15_CONTACT_ME_DATA.portraitCutoutSrc}
          alt={SLIDE_15_CONTACT_ME_DATA.portraitAlt}
          width={744}
          height={937}
          delay={0.16}
          wrapperClassName="relative z-20 mx-auto mt-4 flex justify-center lg:absolute lg:right-[3.5vw] lg:bottom-0 lg:mt-0"
          imageClassName="h-[44dvh] sm:h-[56dvh] lg:h-[76dvh]"
        />
      </div>
    </SlideViewportShell>
  );
}
