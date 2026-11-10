'use client';

import React from 'react';
import { useDeckKeyboardNavigation } from '@/features/deck-navigation/hooks/use-deck-keyboard-navigation.hook';
import { ApplePortfolioHeader } from '@/features/deck-navigation/ui/apple-liquid-glass-header/ApplePortfolioHeader';
import { DeckFloatingToolbar } from '@/features/deck-navigation/ui/floating-toolbar/DeckFloatingToolbar';
import { MagazineReaderModal } from '@/features/interactive-modals/ui/magazine-reader/MagazineReaderModal';
import { PhotoLightboxModal } from '@/features/interactive-modals/ui/photo-lightbox/PhotoLightboxModal';
import { VideoCinemaModal } from '@/features/interactive-modals/ui/video-cinema/VideoCinemaModal';
import { QueryProvider } from '@/shared/providers/QueryProvider';
import { Slide01CoverStage } from '@/widgets/slides-01-to-05/ui/Slide01CoverStage';
import { Slide02IntroductionStage } from '@/widgets/slides-01-to-05/ui/Slide02IntroductionStage';
import { Slide03AboutMeStage } from '@/widgets/slides-01-to-05/ui/Slide03AboutMeStage';
import { Slide04StrengthsStage } from '@/widgets/slides-01-to-05/ui/Slide04StrengthsStage';
import { Slide05CsrBmbOverviewStage } from '@/widgets/slides-01-to-05/ui/Slide05CsrBmbOverviewStage';
import { Slide06CsrMetricsStage } from '@/widgets/slides-06-to-10/ui/Slide06CsrMetricsStage';
import { Slide07CsrFundraisingStage } from '@/widgets/slides-06-to-10/ui/Slide07CsrFundraisingStage';
import { Slide08CsrQrVideoStage } from '@/widgets/slides-06-to-10/ui/Slide08CsrQrVideoStage';
import { Slide09EventOverviewStage } from '@/widgets/slides-06-to-10/ui/Slide09EventOverviewStage';
import { Slide10EventCollageBmbStage } from '@/widgets/slides-06-to-10/ui/Slide10EventCollageBmbStage';
import { Slide11EventInternationalStage } from '@/widgets/slides-11-to-15/ui/Slide11EventInternationalStage';
import { Slide12CorpCommsVideoStage } from '@/widgets/slides-11-to-15/ui/Slide12CorpCommsVideoStage';
import { Slide13EditorialWritingStage } from '@/widgets/slides-11-to-15/ui/Slide13EditorialWritingStage';
import { Slide14PassionMcDanceStage } from '@/widgets/slides-11-to-15/ui/Slide14PassionMcDanceStage';
import { Slide15ContactMeStage } from '@/widgets/slides-11-to-15/ui/Slide15ContactMeStage';

export function PortfolioPageComposer() {
  useDeckKeyboardNavigation();

  return (
    <QueryProvider>
      <ApplePortfolioHeader />

      <main id="main-content" className="relative w-full overflow-x-hidden">
        <Slide01CoverStage />
        <Slide02IntroductionStage />
        <Slide03AboutMeStage />
        <Slide04StrengthsStage />
        <Slide05CsrBmbOverviewStage />
        <Slide06CsrMetricsStage />
        <Slide07CsrFundraisingStage />
        <Slide08CsrQrVideoStage />
        <Slide09EventOverviewStage />
        <Slide10EventCollageBmbStage />
        <Slide11EventInternationalStage />
        <Slide12CorpCommsVideoStage />
        <Slide13EditorialWritingStage />
        <Slide14PassionMcDanceStage />
        <Slide15ContactMeStage />
      </main>

      <DeckFloatingToolbar />

      <VideoCinemaModal />
      <MagazineReaderModal />
      <PhotoLightboxModal />
    </QueryProvider>
  );
}
