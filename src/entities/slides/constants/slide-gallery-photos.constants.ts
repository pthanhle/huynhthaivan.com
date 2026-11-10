import {
  SLIDE_06_CSR_METRICS_CARDS,
  SLIDE_07_CSR_FUNDRAISING_CARDS,
  SLIDE_09_EVENT_OVERVIEW_DATA,
  SLIDE_10_EVENT_COLLAGE_DATA,
} from '@/entities/slides/constants/slides-06-to-10.constants';
import {
  SLIDE_11_INTERNATIONAL_EVENTS_CARDS,
  SLIDE_14_PASSION_MC_DANCE_DATA,
} from '@/entities/slides/constants/slides-11-to-15.constants';

export interface GalleryPhotoEntry {
  src: string;
  alt: string;
  caption: string;
}

export const ALL_PORTFOLIO_GALLERY_PHOTOS: readonly GalleryPhotoEntry[] = [
  ...SLIDE_06_CSR_METRICS_CARDS.map((card) => ({
    src: card.src,
    alt: card.alt,
    caption: card.title ?? card.alt,
  })),
  ...SLIDE_07_CSR_FUNDRAISING_CARDS.map((card) => ({
    src: card.src,
    alt: card.alt,
    caption: card.alt,
  })),
  ...SLIDE_09_EVENT_OVERVIEW_DATA.cards.map((card) => ({
    src: card.src,
    alt: card.alt,
    caption: card.title,
  })),
  {
    src: SLIDE_10_EVENT_COLLAGE_DATA.leftTop.src,
    alt: SLIDE_10_EVENT_COLLAGE_DATA.leftTop.alt,
    caption: `${SLIDE_10_EVENT_COLLAGE_DATA.leftTop.line1} ${SLIDE_10_EVENT_COLLAGE_DATA.leftTop.line2}`,
  },
  {
    src: SLIDE_10_EVENT_COLLAGE_DATA.leftBottom.src,
    alt: SLIDE_10_EVENT_COLLAGE_DATA.leftBottom.alt,
    caption: SLIDE_10_EVENT_COLLAGE_DATA.leftBottom.line1,
  },
  {
    src: SLIDE_10_EVENT_COLLAGE_DATA.centerTall.src,
    alt: SLIDE_10_EVENT_COLLAGE_DATA.centerTall.alt,
    caption: `${SLIDE_10_EVENT_COLLAGE_DATA.centerTall.line1} ${SLIDE_10_EVENT_COLLAGE_DATA.centerTall.line2}`,
  },
  {
    src: SLIDE_10_EVENT_COLLAGE_DATA.rightTop.src,
    alt: SLIDE_10_EVENT_COLLAGE_DATA.rightTop.alt,
    caption: SLIDE_10_EVENT_COLLAGE_DATA.rightTop.line1,
  },
  {
    src: SLIDE_10_EVENT_COLLAGE_DATA.rightBottom.src,
    alt: SLIDE_10_EVENT_COLLAGE_DATA.rightBottom.alt,
    caption: `${SLIDE_10_EVENT_COLLAGE_DATA.rightBottom.line1} ${SLIDE_10_EVENT_COLLAGE_DATA.rightBottom.line2}`,
  },
  ...SLIDE_11_INTERNATIONAL_EVENTS_CARDS.map((card) => ({
    src: card.src,
    alt: card.alt,
    caption: card.alt,
  })),
  {
    src: SLIDE_14_PASSION_MC_DANCE_DATA.leftCard.src,
    alt: SLIDE_14_PASSION_MC_DANCE_DATA.leftCard.alt,
    caption: `${SLIDE_14_PASSION_MC_DANCE_DATA.leftCard.line1} ${SLIDE_14_PASSION_MC_DANCE_DATA.leftCard.line2}`,
  },
  {
    src: SLIDE_14_PASSION_MC_DANCE_DATA.rightCard.src,
    alt: SLIDE_14_PASSION_MC_DANCE_DATA.rightCard.alt,
    caption: `${SLIDE_14_PASSION_MC_DANCE_DATA.rightCard.line1} ${SLIDE_14_PASSION_MC_DANCE_DATA.rightCard.line2}`,
  },
];
