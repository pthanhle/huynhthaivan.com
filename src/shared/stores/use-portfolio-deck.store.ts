import { create } from 'zustand';

export type DeckModalType =
  | 'none'
  | 'video-cinema'
  | 'magazine-reader'
  | 'slide-map'
  | 'contact-drawer'
  | 'photo-lightbox';

export interface LightboxPhotoPayload {
  src: string;
  alt: string;
  caption?: string;
}

export interface PortfolioDeckState {
  activeSlide: number;
  activeModal: DeckModalType;
  selectedVideoId: string;
  selectedMagazineId: string;
  lightboxPhoto: LightboxPhotoPayload | null;
  setActiveSlide: (slideNumber: number) => void;
  openModal: (modal: DeckModalType) => void;
  closeModal: () => void;
  openVideoCinema: (videoId?: string) => void;
  openMagazineReader: (magazineId?: string) => void;
  openPhotoLightbox: (payload: LightboxPhotoPayload) => void;
}

export const usePortfolioDeckStore = create<PortfolioDeckState>((set) => ({
  activeSlide: 1,
  activeModal: 'none',
  selectedVideoId: 'vid-01',
  selectedMagazineId: 'rt-19',
  lightboxPhoto: null,
  setActiveSlide: (slideNumber) =>
    set({
      activeSlide: Math.max(1, Math.min(15, slideNumber)),
    }),
  openModal: (modal) =>
    set({
      activeModal: modal,
    }),
  closeModal: () =>
    set({
      activeModal: 'none',
      lightboxPhoto: null,
    }),
  openVideoCinema: (videoId) =>
    set((state) => ({
      activeModal: 'video-cinema',
      selectedVideoId: videoId ?? state.selectedVideoId,
    })),
  openMagazineReader: (magazineId) =>
    set((state) => ({
      activeModal: 'magazine-reader',
      selectedMagazineId: magazineId ?? state.selectedMagazineId,
    })),
  openPhotoLightbox: (payload) =>
    set({
      activeModal: 'photo-lightbox',
      lightboxPhoto: payload,
    }),
}));
