import type { StrengthSectionBlock } from '../types/slide-deck.types';

export const SLIDE_01_COVER_DATA = {
  topRoleHeadline: 'PR SPECIALIST & CSR LEAD',
  mainDisplayWord: 'PORTFOLIO',
  yearText: '2026',
  fullName: 'HUỲNH THÁI VÂN',
  quoteLine1: 'Don’t wait for the perfect moment, take',
  quoteLine2: 'the moment and make it perfect',
  portraitCutoutSrc: '/assets/extracted/p01-van-conical-hat-cutout.webp',
  portraitAlt: 'Huỳnh Thái Vân — PR Specialist & CSR Lead',
} as const;

export const SLIDE_02_INTRODUCTION_DATA = {
  heading: 'INTRODUCTION',
  portraitCutoutSrc: '/assets/extracted/p02-van-camera-cutout.webp',
  portraitAlt: 'Huỳnh Thái Vân — PR Specialist & CSR Lead',
  bullets: [
    'Gọi mình là Thái Vân! “Vân” trong áng mây và “Thái” trong ngũ sắc',
    'Tên Tiếng Anh: Vanessa',
    'Sinh ngày 09/01/2001 – Cung Ma Kết',
    'Sống tại TP.HCM',
    'Tốt nghiệp Cử nhân ngành Quan hệ Công chúng – Truyền thông tại Đại học Văn Lang bằng GIỎI (GPA 3.4/4.0)',
    'Kinh nghiệm thực chiến tại thị trường lao động 4 năm, hiện đang theo học Cao học ngành QHCC & Truyền thông tại ĐH Kinh tế – Tài chính (UEF).',
  ],
} as const;

export const SLIDE_03_ABOUT_ME_DATA = {
  heading: 'ABOUT ME',
  portraitCutoutSrc: '/assets/extracted/p03-van-about-cutout.webp',
  portraitAlt: 'Huỳnh Thái Vân trong hoạt động kết nối cộng đồng',
  paragraph:
    'Mình là Chuyên viên Truyền thông với kinh nghiệm trong Corporate Communications, PR, CSR và tổ chức sự kiện, có thế mạnh về giao tiếp, thuyết trình và đại diện hình ảnh doanh nghiệp trước nhiều nhóm đối tượng. Sở hữu tư duy hoạch định truyền thông, khả năng xây dựng câu chuyện thương hiệu và kết nối các bên liên quan từ nhân viên, đối tác đến khách hàng và cộng đồng. Định hướng phát triển chuyên sâu trong PR đối ngoại và Stakeholder Engagement, nơi truyền thông trở thành cầu nối xây dựng uy tín, mối quan hệ và giá trị thương hiệu bền vững.',
} as const;

export const SLIDE_04_STRENGTHS_SECTIONS: readonly StrengthSectionBlock[] = [
  {
    numberTitle: '01. CSR & SOCIAL IMPACT',
    bullets: [
      'Từ các hoạt động cộng đồng đến xây dựng câu chuyện thương hiệu có sức lan tỏa.',
      'Lập chiến lược, vận hành dự án, kết nối đối tác và xây dựng truyền thông CSR tạo giá trị cho cả cộng đồng lẫn doanh nghiệp.',
    ],
  },
  {
    numberTitle: '02. EVENT & ENGAGEMENT',
    bullets: [
      'Biến sự kiện thành trải nghiệm đáng nhớ.',
      'Phát triển concept, nội dung và trực tiếp điều phối các chương trình gắn kết; chú trọng trải nghiệm người tham dự và cảm xúc thương hiệu tại từng điểm chạm.',
    ],
  },
  {
    numberTitle: '03. CORPORATE COMMUNICATIONS',
    bullets: [
      'Kết nối con người – kể câu chuyện – xây dựng hình ảnh doanh nghiệp.',
      'Hoạch định và sản xuất nội dung truyền thông đa kênh, kết nối nhân viên, đối tác, khách quốc tế và các bên liên quan.',
    ],
  },
] as const;

export const SLIDE_04_STRENGTHS_VISUAL = {
  displayHeading: 'STRENGTHS',
  portraitCutoutSrc: '/assets/extracted/p04-van-aodai-cutout.webp',
  portraitAlt: 'Huỳnh Thái Vân — Thế mạnh chuyên môn',
} as const;

export const SLIDE_05_CSR_BMB_DATA = {
  heading: '01. CSR & SOCIAL IMPACT',
  subHeading: 'CSR & SOCIAL IMPACT | BMB LOVE SCHOOL',
  logoSrc: '/assets/extracted/p05-bmb-love-school-logo.webp',
  logoAlt: 'Logo Quỹ Tình thương BMB Love School',
  portraitCutoutSrc: '/assets/extracted/p05-van-csr-child-cutout.webp',
  portraitAlt: 'Huỳnh Thái Vân và em nhỏ tại điểm trường BMB Love School',
  bullets: [
    'Lead truyền thông và vận hành BMB Love School, quản lý xuyên suốt từ hoạch định, gây quỹ đến triển khai dự án.',
    'Xây dựng bộ nhận diện, proposal, trực tiếp kết nối doanh nghiệp tài trợ hiện kim cho Quỹ.',
    'Xây dựng câu chuyện và định hướng nội dung cho Quỹ; nhiều video đạt 10K–20K+ lượt xem, góp phần tăng nhận diện và sức lan tỏa của dự án.',
    'Kết nối doanh nghiệp, đối tác, nhân viên và cộng đồng cùng tham gia, đưa CSR từ hoạt động thiện nguyện thành hành trình có sự đồng hành của nhiều bên.',
  ],
} as const;
