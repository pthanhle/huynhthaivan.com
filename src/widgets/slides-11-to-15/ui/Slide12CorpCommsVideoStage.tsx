'use client';

import { Play } from 'lucide-react';
import React from 'react';
import { SLIDE_12_CORP_COMMS_VIDEO_DATA } from '@/entities/slides/constants/slides-11-to-15.constants';
import { usePortfolioDeckStore } from '@/shared/stores/use-portfolio-deck.store';
import { SlideDisplayHeading } from '@/shared/ui/slide-primitives/SlideDisplayHeading';
import { SlideRevealBlock } from '@/shared/ui/slide-primitives/SlideRevealBlock';
import { SlideViewportShell } from '@/shared/ui/slide-primitives/SlideViewportShell';

export function Slide12CorpCommsVideoStage() {
  const openVideoCinema = usePortfolioDeckStore((s) => s.openVideoCinema);

  return (
    <SlideViewportShell
      slideNumber={12}
      theme="plaster-cream"
      ariaLabel="Trang 12 — 03. Corporate Communications Video đa nền tảng"
    >
      <div className="relative flex flex-1 flex-col justify-between px-[4.2vw] pt-[2dvh] pb-0">
        <SlideRevealBlock preset="fade-up" delay={0.04}>
          <SlideDisplayHeading tone="crimson-on-plaster" scale="section-banner" align="left">
            {SLIDE_12_CORP_COMMS_VIDEO_DATA.heading}
          </SlideDisplayHeading>
        </SlideRevealBlock>

        <div className="mt-2 grid flex-1 grid-cols-1 items-center gap-8 lg:grid-cols-12">
          <SlideRevealBlock
            preset="scale-up"
            delay={0.1}
            className="relative flex h-full items-end justify-center lg:col-span-6 lg:justify-start"
          >
            <button
              type="button"
              onClick={() => openVideoCinema('vid-05')}
              aria-label="Mở trình phát 9 video doanh nghiệp đã viết kịch bản và thực hiện"
              className="group relative aspect-square w-[min(480px,88vw)] max-w-full cursor-pointer overflow-hidden shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#AF2A55] lg:h-[64dvh] lg:w-auto"
            >
              <img
                src={SLIDE_12_CORP_COMMS_VIDEO_DATA.retroTvPortraitSrc}
                alt={SLIDE_12_CORP_COMMS_VIDEO_DATA.retroTvPortraitAlt}
                width={800}
                height={800}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.025]"
              />

              <div className="absolute bottom-[1.8%] left-[51%] aspect-square w-[32.2%] bg-white p-1.5 shadow-md transition-transform duration-300 group-hover:scale-105">
                <img
                  src={SLIDE_12_CORP_COMMS_VIDEO_DATA.tvQrCodeSrc}
                  alt={SLIDE_12_CORP_COMMS_VIDEO_DATA.tvQrCodeAlt}
                  width={400}
                  height={400}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-contain"
                />

                <span
                  aria-hidden="true"
                  className="absolute right-1.5 bottom-1.5 flex h-7 w-7 items-center justify-center rounded-full bg-[#AF2A55] text-white shadow-md transition-transform duration-200 group-hover:scale-110"
                >
                  <Play className="h-3.5 w-3.5 fill-white" />
                </span>
              </div>
            </button>
          </SlideRevealBlock>

          <SlideRevealBlock
            preset="fade-right"
            delay={0.16}
            className="flex flex-col items-center justify-center pb-8 lg:col-span-6 lg:pb-0"
          >
            <p className="font-sans text-center text-[clamp(1.02rem,1.58vw,1.54rem)] leading-[1.52] font-extrabold text-[#4D0F13] uppercase">
              {SLIDE_12_CORP_COMMS_VIDEO_DATA.captionLine1}
              <br />
              {SLIDE_12_CORP_COMMS_VIDEO_DATA.captionLine2}
              <br />
              {SLIDE_12_CORP_COMMS_VIDEO_DATA.captionLine3}
            </p>
          </SlideRevealBlock>
        </div>
      </div>
    </SlideViewportShell>
  );
}
