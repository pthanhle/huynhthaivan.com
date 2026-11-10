import type { SlidePhotoCardItem, SlideWritingLinkItem } from '../types/slide-deck.types';

export const SLIDE_11_INTERNATIONAL_EVENTS_CARDS: readonly SlidePhotoCardItem[] = [
  {
    id: 'p11-isa-signing',
    src: '/assets/extracted/p11-img-x8.webp',
    alt: 'Huỳnh Thái Vân — Lễ ký kết đối tác chiến lược ISA OSSD Program tại RT Holdings',
  },
  {
    id: 'p11-sail-backdrop',
    src: '/assets/extracted/p11-img-x9.webp',
    alt: 'Huỳnh Thái Vân — Tổ chức sự kiện Sail Into Greatness tại RT Holdings',
  },
  {
    id: 'p11-sail-gala',
    src: '/assets/extracted/p11-img-x11.webp',
    alt: 'Huỳnh Thái Vân — Đêm Gala Sail Into Greatness RT Holdings & WASS',
  },
  {
    id: 'p11-wass-heart',
    src: '/assets/extracted/p11-img-x10.webp',
    alt: 'Huỳnh Thái Vân — Sự kiện gắn kết Giáo viên và Nhân viên Hệ thống trường Quốc tế Tây Úc WASS',
  },
  {
    id: 'p11-tet-aodai',
    src: '/assets/extracted/p11-img-x12.webp',
    alt: 'Huỳnh Thái Vân — Tổ chức sự kiện Tết cổ truyền tại hệ thống trường Quốc tế',
  },
  {
    id: 'p11-costume-festival',
    src: '/assets/extracted/p11-img-x13.webp',
    alt: 'Huỳnh Thái Vân — Ngày hội hóa trang và tri ân Giáo viên, Nhân viên Quốc tế',
  },
] as const;

export const SLIDE_11_CAPTION = {
  line1: 'Một số hình ảnh các chương trình đã tổ chức cho Nhân viên, Giáo viên',
  line2: 'hơn 500 người tại các điểm trường Quốc tế năm 2024 – 2025',
} as const;

export const SLIDE_12_CORP_COMMS_VIDEO_DATA = {
  heading: '03. CORPORATE COMMUNICATIONS',
  retroTvPortraitSrc: '/assets/extracted/p12-van-retro-tv.webp',
  retroTvPortraitAlt: 'Huỳnh Thái Vân — Corporate Communications & Sản xuất Video Doanh nghiệp',
  tvQrCodeSrc: '/assets/extracted/p12-tv-qr-code.webp',
  tvQrCodeAlt: 'Huỳnh Thái Vân — Mã QR xem danh sách video doanh nghiệp',
  captionLine1: 'QUÉT MÃ QR ĐỂ XEM THÊM NHỮNG VIDEO MÌNH',
  captionLine2: 'ĐÃ VIẾT KỊCH BẢN VÀ TRỰC TIẾP THỰC HIỆN TỪ',
  captionLine3: 'CÁC DOANH NGHIỆP LỚN NHỎ NHÉ!',
  driveUrl: 'https://drive.google.com/drive/folders/1YrpICIZUyFoytWByVX4HxsbxEFSI1Ira',
} as const;

export const SLIDE_13_WRITING_DATA = {
  heading: 'VIẾT LÁCH CHÚT',
  paragraph1:
    'Có những điều khi nói ra dễ bị lãng quên, nhưng khi được viết xuống lại có thể ở lại rất lâu trong lòng người đọc. Với tôi, viết là cách quan sát cuộc sống, thấu hiểu con người và tìm tiếng nói cho những cảm xúc chưa được gọi tên.',
  paragraph2:
    'Và nếu một ngày, những con chữ của tôi có thể khiến ai đó rung động, suy ngẫm hoặc thay đổi theo hướng tốt đẹp hơn, thì đó chính là lý do tôi muốn tiếp tục viết.',
  linksIntro: 'BẠN CÓ THỂ XEM MỘT SỐ NỘI DUNG MÌNH ĐÃ VÀ VẪN VIẾT:',
  beachPortraitSrc: '/assets/extracted/p13-van-beach-events.webp',
  beachPortraitAlt: 'Huỳnh Thái Vân — Biên tập nội san RT Connection và sáng tạo nội dung PR',
} as const;

export const SLIDE_13_WRITING_LINKS: readonly SlideWritingLinkItem[] = [
  {
    index: 1,
    url: 'https://drive.google.com/drive/folders/1qxGSi-nV6wHxwe_-NLSj8keqjaGYv1Tn?usp=sharing',
    displayUrl:
      'https://drive.google.com/drive/folders/1qxGSi-nV6wHxwe_-NLSj8keqjaGYv1Tn?usp=sharing',
    actionType: 'magazine-modal',
  },
  {
    index: 2,
    url: 'https://www.facebook.com/bmbloveschool?locale=vi_VN',
    displayUrl: 'https://www.facebook.com/bmbloveschool?locale=vi_VN',
    actionType: 'external-link',
  },
] as const;

export const SLIDE_14_PASSION_MC_DANCE_DATA = {
  heading: 'NGHỀ CHỌN NGƯỜI NHƯNG NGƯỜI CHỌN THÊM ĐAM MÊ',
  leftCard: {
    id: 'p14-mc-award',
    src: '/assets/extracted/p14-img-x7.webp',
    alt: 'Huỳnh Thái Vân — Tốt nghiệp & nhận giải MC Xuất sắc của Nhà Văn hóa Thanh niên TP.HCM',
    line1: 'TỐT NGHIỆP & NHẬN GIẢI MC XUẤT SẮC',
    line2: 'CỦA NHÀ VĂN HÓA THANH NIÊN TP.HCM',
  },
  rightCard: {
    id: 'p14-dance-crew',
    src: '/assets/extracted/p14-img-x9.webp',
    alt: 'Huỳnh Thái Vân — Thành viên CLB Art - Dance Crew thuộc Trường ĐH Văn Lang',
    line1: 'THÀNH VIÊN CLB ART - DANCE CREW',
    line2: 'THUỘC TRƯỜNG ĐH VĂN LANG',
  },
} as const;

export const SLIDE_15_CONTACT_ME_DATA = {
  headingLine1: 'CONTACT',
  headingLine2: 'ME',
  phoneDisplay: '(+84) 932 134 216',
  phoneHref: 'tel:+84932134216',
  locationDisplay: 'TP.HCM',
  emailDisplay: 'huynhthaivan0901@gmail.com',
  emailHref: 'mailto:huynhthaivan0901@gmail.com',
  portraitCutoutSrc: '/assets/extracted/p15-van-contact-cutout.webp',
  portraitAlt: 'Huỳnh Thái Vân — PR Specialist & CSR Lead — Contact Me',
  pdfDownloadHref: '/downloads/Huynh-Thai-Van-Portfolio-2026.pdf',
} as const;
