# 03. Tối Ưu Hiệu Năng (Core Web Vitals 2026) & Chiến Lược SEO / AEO / GEO

## 1. Giải Quyết Triệt Để Bài Toán File Gốc `146.89 MB`
- **Bản gốc Canva PDF**: Nặng `146.89 MB` do chứa 72 luồng ảnh PNG/RGB chưa nén, không thể gửi qua Gmail (`25 MB`) hoặc tải lên cổng tuyển dụng ATS (`2–10 MB`).
- **Kết quả sau tối ưu hóa**:
  1. **Bản PDF Chuẩn ATS & Email (`/downloads/Huynh-Thai-Van-PR-Specialist-CSR-Lead-Portfolio-2026.pdf`)**: Được đóng gói trực tiếp bằng luồng `/Filter /DCTDecode` chuẩn PDF 1.7 với độ phân giải `1440×809 pt`, giảm từ **`146.89 MB` xuống còn `3.9 MB` (giảm `97.3%` dung lượng)**, giữ nguyên độ sắc nét để đính kèm Gmail, Zalo và mọi cổng ATS.
  2. **Tốc độ tải trang Web (`First Load JS = 122 kB`)**: Toàn bộ trang chủ `/` và `/en` được prerender tĩnh (SSG) với gói JS riêng chỉ `124 Bytes`, kết hợp `fetchPriority="high"` cho ảnh chân dung Hero và `loading="lazy"` + `decoding="async"` cho toàn bộ ảnh bên dưới.

## 2. Chiến Lược Thống Trị Tìm Kiếm Google (`SEO`) & AI Search (`AEO / GEO`)
1. **Đồ thị Tri thức `JSON-LD @graph` (`src/shared/utils/seo-jsonld.util.ts`)**:
   - Khai báo liên kết chặt chẽ giữa `WebSite`, `ProfilePage` và `Person` (**Huỳnh Thái Vân / Vanessa**), đầy đủ `alumniOf` (ĐH Văn Lang VLU, ĐH Kinh tế - Tài chính UEF), `award` (Giải MC Xuất sắc NVH Thanh Niên, Cử nhân Loại Giỏi GPA 3.4/4.0), `email` (`huynhthaivan0901@gmail.com`) và `telephone` (`+84-703165031`).
2. **Điểm cuối AI Visibility (`/llms.txt`)**:
   - Cung cấp bản tóm tắt chuẩn Markdown tại `https://huynhthaivan.com/llms.txt` giúp ChatGPT Search, Google Gemini, Claude và Perplexity trích xuất chính xác 100% hồ sơ năng lực của Huỳnh Thái Vân.
3. **Bản CV Chuẩn Máy Quét ATS (`/cv`)**:
   - Trang `/cv` cung cấp văn bản ngữ nghĩa thuần túy (`Semantic HTML`) không lặp từ, giúp các hệ thống ATS đọc chính xác từng dự án và bằng cấp.
4. **Bảo vệ Hình ảnh Trẻ em CSR (`X-Robots-Tag: noimageai`)**:
   - Cấu hình Header bảo mật trong `next.config.ts` và Nginx ngăn chặn các bot huấn luyện AI tự động thu thập hình ảnh học sinh vùng cao trong dự án BMB Love School.
