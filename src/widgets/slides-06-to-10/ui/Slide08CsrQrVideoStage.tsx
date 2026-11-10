'use client';

import { Play } from 'lucide-react';
import React from 'react';
import { SLIDE_08_QR_VIDEO_DATA } from '@/entities/slides/constants/slides-06-to-10.constants';
import { usePortfolioDeckStore } from '@/shared/stores/use-portfolio-deck.store';
import { SlideCutoutPortrait } from '@/shared/ui/slide-primitives/SlideCutoutPortrait';
import { SlideRevealBlock } from '@/shared/ui/slide-primitives/SlideRevealBlock';
import { SlideViewportShell } from '@/shared/ui/slide-primitives/SlideViewportShell';

export function Slide08CsrQrVideoStage() {
  const openVideoCinema = usePortfolioDeckStore((s) => s.openVideoCinema);

  return (
    <SlideViewportShell
      slideNumber={8}
      theme="plaster-cream"
      ariaLabel="Trang 08 — Quét mã QR để xem thêm những video đạt lượt view đáng kể"
    >
      <div className="relative flex flex-1 flex-col justify-between overflow-hidden px-[4.2vw] pt-[2dvh] pb-0">
        <SlideRevealBlock
          preset="scale-up"
          delay={0.06}
          className="relative z-20 mx-auto my-auto flex flex-col items-center gap-4 py-4 lg:mx-0 lg:w-[44%] lg:items-center lg:py-6"
        >
          <button
            type="button"
            onClick={() => openVideoCinema('vid-01')}
            aria-label="Mở trình phát 9 video thực tế đã thực hiện"
            className="group relative flex cursor-pointer flex-col items-center rounded-[22px] bg-white p-3.5 shadow-[0_18px_42px_rgba(77,15,19,0.18)] transition-transform duration-300 hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#AF2A55] sm:p-5"
          >
            <img
              src={SLIDE_08_QR_VIDEO_DATA.qrCardSrc}
              alt={SLIDE_08_QR_VIDEO_DATA.qrCardAlt}
              width={700}
              height={700}
              loading="lazy"
              decoding="async"
              className="h-[22dvh] w-[22dvh] max-h-[280px] max-w-[280px] min-h-[160px] min-w-[160px] object-contain sm:h-[30dvh] sm:w-[30dvh]"
            />

            <span
              aria-hidden="true"
              className="absolute right-3 bottom-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#AF2A55] text-white shadow-md transition-transform duration-200 group-hover:scale-110"
            >
              <Play className="h-4 w-4 fill-white" />
            </span>
          </button>

          <p className="font-sans text-center text-[clamp(0.9rem,1.38vw,1.34rem)] leading-[1.45] font-extrabold text-[#4D0F13] uppercase">
            {SLIDE_08_QR_VIDEO_DATA.captionLine1}
            <br />
            {SLIDE_08_QR_VIDEO_DATA.captionLine2}
          </p>
        </SlideRevealBlock>

        <SlideCutoutPortrait
          src={SLIDE_08_QR_VIDEO_DATA.floralVanCutoutSrc}
          alt={SLIDE_08_QR_VIDEO_DATA.floralVanAlt}
          width={1800}
          height={911}
          delay={0.12}
          wrapperClassName="pointer-events-none relative z-10 mt-auto flex justify-center lg:absolute lg:inset-x-0 lg:bottom-0 lg:justify-end"
          imageClassName="h-[36dvh] w-full object-contain object-bottom sm:h-[52dvh] lg:h-[85dvh] lg:object-cover"
        />
      </div>
    </SlideViewportShell>
  );
}
