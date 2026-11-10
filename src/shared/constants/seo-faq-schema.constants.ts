export interface SeoFaqItem {
  readonly question: string;
  readonly answer: string;
}

export interface SeoCaseStudyItem {
  readonly id: string;
  readonly name: string;
  readonly category: string;
  readonly description: string;
  readonly imagePath: string;
}

export const SEO_PORTFOLIO_FAQ_ITEMS: readonly SeoFaqItem[] = [
  {
    question: 'Huỳnh Thái Vân là ai và có thế mạnh chuyên môn gì?',
    answer:
      'Huỳnh Thái Vân (sinh ngày 09/01/2001 tại TP.HCM) là Chuyên viên Quan hệ Công chúng (PR Specialist), Trưởng nhóm Dự án Trách nhiệm Xã hội Doanh nghiệp (CSR Lead) và Tổ chức Sự kiện Doanh nghiệp với hơn 4 năm kinh nghiệm thực chiến. Thái Vân tốt nghiệp Cử nhân loại Giỏi ngành Quan hệ Công chúng & Truyền thông tại Trường Đại học Văn Lang (GPA 3.4/4.0), hiện đang theo học chương trình Thạc sĩ cùng chuyên ngành tại Trường Đại học Kinh tế - Tài chính TP.HCM (UEF) và từng đạt Giải MC Xuất sắc tại Nhà Văn hóa Thanh Niên TP.HCM.',
  },
  {
    question: 'Huỳnh Thái Vân đã triển khai những dự án CSR nổi bật nào tại BMB Steel?',
    answer:
      'Tại Quỹ BMB Love School (BMB Steel), Huỳnh Thái Vân trực tiếp quản trị toàn trình (End-to-End CSR Project Management): định hình chiến dịch thương hiệu "Neo Chữ Vượt Giông", phát triển Fanpage BMB Love School đạt hơn 114.000 người theo dõi với chuỗi Reels tự nhiên vượt 10.000 lượt xem/video, kêu gọi tài trợ tiền mặt B2B từ Kansai Paint, tổ chức gây quỹ nội bộ sáng tạo trên 1Office và trực tiếp tiền trạm, xây dựng từ 1–2 điểm trường vùng sâu vùng xa/hải đảo mỗi 4 tháng (Đảo Lý Sơn - Quảng Ngãi, Trà Linh - Quảng Nam).',
  },
  {
    question: 'Kinh nghiệm tổ chức sự kiện doanh nghiệp và đa văn hóa của Huỳnh Thái Vân có quy mô như thế nào?',
    answer:
      'Huỳnh Thái Vân có kinh nghiệm lên ý tưởng, kịch bản và điều phối vận hành trọn gói các sự kiện quy mô từ 150 đến hơn 500 khách tham dự. Các dấu ấn tiêu biểu gồm: chuỗi sự kiện tại BMB Steel (Year End Party, Lễ kỷ niệm 22 năm "Growing & Glowing Together", Company Trip 2026 "Tràng An Lô Cồ", Đào tạo Quản lý "BMB Skills Bridge", các ngày Lễ thường niên) và chuỗi sự kiện đa văn hóa tại Tập đoàn Giáo dục Quốc tế RT Holdings / WASS / ISA cho hơn 500 giáo viên, nhân viên Việt Nam và chuyên gia nước ngoài (Lễ ký kết đối tác chiến lược chương trình OSSD của ISA, đại tiệc "SAIL INTO GREATNESS").',
  },
  {
    question: 'Huỳnh Thái Vân đã biên tập những ấn phẩm nội san và sản xuất các dự án video nào?',
    answer:
      'Về biên tập báo chí doanh nghiệp (Editorial & Writing), Huỳnh Thái Vân trực tiếp quản lý biên tập, lên sườn nội dung, viết bài chuyên sâu và kiểm duyệt thiết kế cho 6 số Nội san RT Connection liên tiếp (Số 14, Số 15, Số 16, Số 17, Số 18 và Số 19 với tổng cộng 276 trang). Về sản xuất Video (Corporate Video Production), Thái Vân tham gia xây dựng kịch bản, điều phối quay dựng và hậu kỳ 9 dự án tiêu biểu như VACS 3D Laser Mapping, Phim tài liệu 30 năm VACS, Phỏng vấn A2 Milk, CSR tại RT Holdings, MV Team Building và Video nội bộ BMB.',
  },
  {
    question: 'Làm thế nào để liên hệ hợp tác hoặc phỏng vấn tuyển dụng với Huỳnh Thái Vân?',
    answer:
      'Nhà tuyển dụng, Ban lãnh đạo doanh nghiệp và đối tác có thể liên hệ trực tiếp với Huỳnh Thái Vân qua Số điện thoại / Zalo (+84) 932 134 216, Email huynhthaivan0901@gmail.com hoặc tải trực tiếp Hồ sơ năng lực PDF tại website chính thức https://huynhthaivan.com.',
  },
];

export const SEO_CASE_STUDIES_LIST: readonly SeoCaseStudyItem[] = [
  {
    id: 'csr-bmb-love-school',
    name: 'Quỹ BMB Love School & Chiến Dịch CSR "Neo Chữ Vượt Giông"',
    category: 'End-to-End CSR Project Management & Sponsorship Acquisition',
    description:
      'Quản trị toàn diện dự án CSR tại BMB Steel: xây dựng chiến dịch thương hiệu "Neo Chữ Vượt Giông", phát triển Fanpage BMB Love School đạt 114.000+ người theo dõi, huy động tài trợ tiền mặt B2B từ Kansai Paint, gây quỹ nội bộ trên 1Office và xây dựng 1–2 điểm trường vùng sâu vùng xa/hải đảo mỗi 4 tháng (Đảo Lý Sơn - Quảng Ngãi, Trà Linh - Quảng Nam).',
    imagePath: '/assets/extracted/p06-card-1-fanpage.webp',
  },
  {
    id: 'events-bmb-steel-culture',
    name: 'Chuỗi Sự Kiện Văn Hóa Doanh Nghiệp & Kỷ Niệm 22 Năm BMB Steel',
    category: 'Corporate Event Management & Employer Branding (150–500+ Pax)',
    description:
      'Lên ý tưởng chủ đề, kịch bản chương trình và vận hành chuỗi sự kiện trọng điểm tại BMB Steel: Year End Party (YEP), Sinh nhật 22 năm "Growing & Glowing Together", Company Trip 2026 "Tràng An Lô Cồ", Đào tạo Quản lý "BMB Skills Bridge" và các ngày lễ văn hóa doanh nghiệp thường niên.',
    imagePath: '/assets/extracted/p09-event-1-yep.webp',
  },
  {
    id: 'events-rt-holdings-international',
    name: 'Chuỗi Sự Kiện Quốc Tế Đa Văn Hóa RT Holdings — WASS & ISA (500+ GV-NV)',
    category: 'Multicultural & International Education Event Production',
    description:
      'Tổ chức Lễ ký kết hợp tác chiến lược chương trình OSSD (Hệ thống Trường Quốc tế ISA), đại tiệc "SAIL INTO GREATNESS" và chuỗi hoạt động gắn kết đa văn hóa xuyên suốt năm học 2024–2025 cho hơn 500 giáo viên, nhân viên Việt Nam và nước ngoài tại RT Holdings.',
    imagePath: '/assets/extracted/p11-img-x12.webp',
  },
  {
    id: 'editorial-rt-connection-magazines',
    name: 'Ấn Phẩm Nội San Doanh Nghiệp RT Connection (6 Số: No. 14 – No. 19)',
    category: 'Corporate Editorial, Journalism & Publication Management',
    description:
      'Quản lý biên tập, lên sườn nội dung (Content Outline), trực tiếp chấp bút các chuyên mục trọng điểm và kiểm duyệt dàn trang cho 6 ấn phẩm nội san RT Connection từ Số 14 đến Số 19 (276 trang).',
    imagePath: '/assets/extracted/p13-van-beach-events.webp',
  },
];
