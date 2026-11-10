'use client';

import React from 'react';
import { SLIDE_10_EVENT_COLLAGE_DATA } from '@/entities/slides/constants/slides-06-to-10.constants';
import { SlideInteractivePhotoCard } from '@/shared/ui/slide-primitives/SlideInteractivePhotoCard';
import { SlideViewportShell } from '@/shared/ui/slide-primitives/SlideViewportShell';

export function Slide10EventCollageBmbStage() {
  const { leftTop, leftBottom, centerTall, rightTop, rightBottom } = SLIDE_10_EVENT_COLLAGE_DATA;

  return (
    <SlideViewportShell
      slideNumber={10}
      theme="plaster-cream"
      ariaLabel="Trang 10 — Các chương trình sự kiện và đào tạo nội bộ toàn Doanh nghiệp"
    >
      <div className="relative grid flex-1 grid-cols-1 items-center gap-4 px-[3.2vw] pt-[1.5dvh] pb-[4.2dvh] md:grid-cols-12 lg:gap-6">
        <div className="flex flex-col justify-between gap-3.5 md:col-span-4">
          <figure className="flex flex-col items-center gap-1.5">
            <SlideInteractivePhotoCard
              src={leftTop.src}
              alt={leftTop.alt}
              caption={`${leftTop.line1} ${leftTop.line2}`}
              width={900}
              height={600}
              aspect="16/10"
              delay={0.04}
              className="max-h-[29dvh]"
            />
            <figcaption className="font-sans text-center text-[clamp(0.94rem,1.38vw,1.32rem)] leading-[1.24] font-extrabold text-[#4D0F13]">
              {leftTop.line1}
              <br />
              {leftTop.line2}
            </figcaption>
          </figure>

          <figure className="flex flex-col items-center gap-1.5">
            <SlideInteractivePhotoCard
              src={leftBottom.src}
              alt={leftBottom.alt}
              caption={leftBottom.line1}
              width={820}
              height={461}
              aspect="16/10"
              delay={0.08}
              className="max-h-[29dvh]"
            />
            <figcaption className="font-sans text-center text-[clamp(0.94rem,1.38vw,1.32rem)] leading-[1.24] font-extrabold text-[#4D0F13]">
              {leftBottom.line1}
            </figcaption>
          </figure>
        </div>

        <div className="flex flex-col items-center justify-center md:col-span-4">
          <figure className="flex w-full flex-col items-center gap-2.5">
            <SlideInteractivePhotoCard
              src={centerTall.src}
              alt={centerTall.alt}
              caption={`${centerTall.line1} ${centerTall.line2}`}
              width={768}
              height={1024}
              aspect="3/3.4"
              delay={0.12}
              className="max-h-[62dvh] max-w-[420px]"
            />
            <figcaption className="font-sans text-center text-[clamp(0.96rem,1.44vw,1.38rem)] leading-[1.26] font-extrabold text-[#4D0F13]">
              {centerTall.line1}
              <br />
              {centerTall.line2}
            </figcaption>
          </figure>
        </div>

        <div className="flex flex-col justify-between gap-3.5 md:col-span-4">
          <figure className="flex flex-col items-center gap-1.5">
            <SlideInteractivePhotoCard
              src={rightTop.src}
              alt={rightTop.alt}
              caption={rightTop.line1}
              width={900}
              height={600}
              aspect="16/10"
              delay={0.16}
              className="max-h-[29dvh]"
            />
            <figcaption className="font-sans text-center text-[clamp(0.94rem,1.38vw,1.32rem)] leading-[1.24] font-extrabold text-[#4D0F13]">
              {rightTop.line1}
            </figcaption>
          </figure>

          <figure className="flex flex-col items-center gap-1.5">
            <SlideInteractivePhotoCard
              src={rightBottom.src}
              alt={rightBottom.alt}
              caption={`${rightBottom.line1} ${rightBottom.line2}`}
              width={900}
              height={600}
              aspect="16/10"
              delay={0.2}
              className="max-h-[29dvh]"
            />
            <figcaption className="font-sans text-center text-[clamp(0.94rem,1.38vw,1.32rem)] leading-[1.24] font-extrabold text-[#4D0F13]">
              {rightBottom.line1}
              <br />
              {rightBottom.line2}
            </figcaption>
          </figure>
        </div>
      </div>
    </SlideViewportShell>
  );
}
