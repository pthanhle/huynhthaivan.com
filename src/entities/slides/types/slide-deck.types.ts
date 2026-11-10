export interface SlideDirectoryEntry {
  slideNumber: number;
  id: string;
  shortTitle: string;
  theme: 'plaster-cream' | 'burgundy-velvet';
  topBarVariant?: 'none' | 'offwhite-on-burgundy' | 'crimson-on-plaster';
  activeNavTab?: 'HOME' | 'ABOUT ME' | 'CONTACT';
}

export interface StrengthSectionBlock {
  numberTitle: string;
  bullets: readonly string[];
}

export interface SlidePhotoCardItem {
  id: string;
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

export interface SlideWritingLinkItem {
  index: number;
  url: string;
  displayUrl: string;
  actionType: 'magazine-modal' | 'external-link';
}
