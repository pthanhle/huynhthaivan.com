import type { SlidePhotoCardItem } from '../types/slide-deck.types';

export const SLIDE_06_CSR_METRICS_CARDS: readonly SlidePhotoCardItem[] = [
  {
    id: 'p06-fanpage',
    src: '/assets/extracted/p06-card-1-fanpage.webp',
    alt: 'Huỳnh Thái Vân — Quản trị Fanpage BMB Love School đạt 114K người theo dõi',
    title: 'Fanpage',
    description:
      '114K người theo dõi – 37 đang theo dõi\nBMB Love School là Quỹ xây dựng & phát triển giáo dục phi lợi nhuận tại Việt Nam và Đông Nam Á.',
  },
  {
    id: 'p06-views',
    src: '/assets/extracted/p06-card-2-reels-views.webp',
    alt: 'Huỳnh Thái Vân — Tỉ lệ view sau 6 tháng trên kênh BMB Love School',
    title: 'Tỉ lệ view sau 6 tháng',
    description:
      'Tăng vọt so với các năm trước, lượt view và tương tác tự nhiên đạt hiệu quả tích cực và phủ rộng hơn.',
  },
  {
    id: 'p06-activities',
    src: '/assets/extracted/p06-card-3-khanh-thanh.webp',
    alt: 'Huỳnh Thái Vân — Lễ khánh thành điểm trường BMB Love School',
    title: 'Hoạt động chính',
    description:
      'Hoạt động xuyên suốt theo Mùa / 4 tháng. Mỗi mùa xây dựng 1 – 2 điểm trường tại một tỉnh. Ngoài ra sẽ sinh hoạt cộng đồng như trao quà, kết nối đoàn sinh viên các trường Đại học,...',
  },
] as const;

export const SLIDE_06_HEADING = 'MÌNH CÓ GÌ?';

export const SLIDE_07_CSR_FUNDRAISING_CARDS: readonly SlidePhotoCardItem[] = [
  {
    id: 'p07-banh-mi',
    src: '/assets/extracted/p07-card-1-banh-mi.webp',
    alt: 'Huỳnh Thái Vân — Quầy gây quỹ bánh mì chả cá BMB Love School',
  },
  {
    id: 'p07-the-thao',
    src: '/assets/extracted/p07-card-2-the-thao-quy.webp',
    alt: 'Huỳnh Thái Vân — Hoạt động gây quỹ Trên sân có giải ngoài sân có quỹ',
  },
  {
    id: 'p07-phien-cho',
    src: '/assets/extracted/p07-card-3-phien-cho-1office.webp',
    alt: 'Huỳnh Thái Vân — Phiên chợ ký gửi vùng cao trên nền tảng 1Office',
  },
] as const;

export const SLIDE_07_CSR_FUNDRAISING_TEXT = {
  heading: 'MÌNH CÓ GÌ?',
  subHeading: 'Một số các hoạt động kêu gọi, gây quỹ',
  paragraph:
    'Mỗi một hoạt động, sự kiện tổ chức liên quan đến các giá trị nhân văn mang lại từ doanh nghiệp cho giáo dục đều là những lần nỗ lực, cố gắng và gửi tấm lòng hướng về một mục tiêu chung. Phía trên là những hoạt động tiêu biểu gây quỹ.',
} as const;

export const SLIDE_08_QR_VIDEO_DATA = {
  qrCardSrc: '/assets/extracted/p08-suitcase-qr.webp',
  qrCardAlt: 'Huỳnh Thái Vân — Mã QR xem video dự án CSR BMB Love School',
  floralVanCutoutSrc: '/assets/extracted/p08-floral-van-cutout.webp',
  floralVanAlt: 'Huỳnh Thái Vân — Dự án sản xuất Video CSR BMB Love School',
  captionLine1: 'QUÉT MÃ QR ĐỂ XEM THÊM NHỮNG VIDEO ĐẠT LƯỢT',
  captionLine2: 'VIEW ĐÁNG KỂ MÀ MÌNH ĐÃ THỰC HIỆN NHÉ!',
  driveUrl: 'https://drive.google.com/drive/folders/1YrpICIZUyFoytWByVX4HxsbxEFSI1Ira',
} as const;

export const SLIDE_09_EVENT_OVERVIEW_DATA = {
  topHeading: '02. EVENT & ENGAGEMENT',
  mainHeading: 'MÌNH ĐÃ LÀM NHỮNG GÌ?',
  bottomNote:
    'P.S: Tất cả chương trình quy mô từ 150 – 500 người, được mình lên kế hoạch truyền thông, vận hành tổ chức, làm việc trực tiếp với các vendor,...',
  cards: [
    {
      id: 'p09-yep',
      src: '/assets/extracted/p09-event-1-yep.webp',
      alt: 'Huỳnh Thái Vân — Tổ chức sự kiện Year End Party doanh nghiệp',
      title: 'Year End Party',
    },
    {
      id: 'p09-anniversary',
      src: '/assets/extracted/p09-event-2-anniversary.webp',
      alt: 'Huỳnh Thái Vân — Tổ chức Lễ kỷ niệm thành lập Doanh nghiệp',
      title: 'Kỷ niệm thành lập Doanh nghiệp',
    },
    {
      id: 'p09-company-trip',
      src: '/assets/extracted/p09-event-3-company-trip.webp',
      alt: 'Huỳnh Thái Vân — Tổ chức chương trình Company Trip và Team Building',
      title: 'Company Trip',
    },
  ],
} as const;

export const SLIDE_10_EVENT_COLLAGE_DATA = {
  leftTop: {
    id: 'p10-left-top',
    src: '/assets/extracted/p10-img-x8.webp',
    alt: 'Huỳnh Thái Vân — Tổ chức các ngày Lễ thường niên cho nhân viên Pick Your Color',
    line1: 'Các ngày Lễ thường',
    line2: 'niên cho nhân viên',
  },
  leftBottom: {
    id: 'p10-left-bottom',
    src: '/assets/extracted/p10-img-x11.webp',
    alt: 'Huỳnh Thái Vân — Tổ chức các Giải hội thao nội bộ doanh nghiệp',
    line1: 'Các Giải hội thao',
    line2: '',
  },
  centerTall: {
    id: 'p10-center',
    src: '/assets/extracted/p10-img-x12.webp',
    alt: 'Huỳnh Thái Vân — BMB Skills Bridge chương trình Đào tạo nội bộ toàn Doanh nghiệp',
    line1: 'Các chương trình Đào tạo',
    line2: 'nội bộ toàn Doanh nghiệp',
  },
  rightTop: {
    id: 'p10-right-top',
    src: '/assets/extracted/p10-img-x10.webp',
    alt: 'Huỳnh Thái Vân — Tổ chức sự kiện Trung Thu và Giáng Sinh nội bộ',
    line1: 'Trung Thu, Giáng Sinh',
    line2: '',
  },
  rightBottom: {
    id: 'p10-right-bottom',
    src: '/assets/extracted/p10-img-x9.webp',
    alt: 'Huỳnh Thái Vân — Tổ chức các ngày Lễ thường niên và gắn kết văn hóa doanh nghiệp',
    line1: 'Các ngày Lễ thường',
    line2: 'niên cho nhân viên',
  },
} as const;
