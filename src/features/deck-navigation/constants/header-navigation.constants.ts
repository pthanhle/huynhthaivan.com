export interface AppleHeaderNavItem {
  id: string;
  label: string;
  shortLabel: string;
  targetSlideId: string;
  targetSlideNumber: number;
  matchSlides: readonly number[];
}

export const APPLE_HEADER_NAV_ITEMS: readonly AppleHeaderNavItem[] = [
  {
    id: 'nav-home',
    label: 'HOME',
    shortLabel: 'HOME',
    targetSlideId: 'page-01',
    targetSlideNumber: 1,
    matchSlides: [1],
  },
  {
    id: 'nav-intro',
    label: 'INTRO',
    shortLabel: 'INTRO',
    targetSlideId: 'page-02',
    targetSlideNumber: 2,
    matchSlides: [2],
  },
  {
    id: 'nav-about-me',
    label: 'ABOUT ME',
    shortLabel: 'ABOUT ME',
    targetSlideId: 'page-03',
    targetSlideNumber: 3,
    matchSlides: [3],
  },
  {
    id: 'nav-strengths',
    label: 'STRENGTHS',
    shortLabel: 'STRENGTHS',
    targetSlideId: 'page-04',
    targetSlideNumber: 4,
    matchSlides: [4],
  },
  {
    id: 'nav-csr',
    label: 'CSR & SOCIAL IMPACT',
    shortLabel: 'CSR',
    targetSlideId: 'page-05',
    targetSlideNumber: 5,
    matchSlides: [5, 6, 7, 8],
  },
  {
    id: 'nav-event',
    label: 'EVENT & ENGAGEMENT',
    shortLabel: 'EVENT',
    targetSlideId: 'page-09',
    targetSlideNumber: 9,
    matchSlides: [9, 10, 11],
  },
  {
    id: 'nav-corp-comms',
    label: 'CORPORATE COMMUNICATIONS',
    shortLabel: 'CORP COMMS',
    targetSlideId: 'page-12',
    targetSlideNumber: 12,
    matchSlides: [12],
  },
  {
    id: 'nav-writing',
    label: 'EDITORIAL',
    shortLabel: 'EDITORIAL',
    targetSlideId: 'page-13',
    targetSlideNumber: 13,
    matchSlides: [13],
  },
  {
    id: 'nav-passion',
    label: 'PASSION',
    shortLabel: 'PASSION',
    targetSlideId: 'page-14',
    targetSlideNumber: 14,
    matchSlides: [14],
  },
  {
    id: 'nav-contact',
    label: 'CONTACT',
    shortLabel: 'CONTACT',
    targetSlideId: 'page-15',
    targetSlideNumber: 15,
    matchSlides: [15],
  },
];

export const BURGUNDY_SLIDE_NUMBERS: readonly number[] = [2, 4, 6, 7, 13, 15];
