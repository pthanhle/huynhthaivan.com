# 02. Kiến Trúc Phân Tầng FSD v2.1 & 10-Role Backend/Frontend SRP

## 1. Nguyên Tắc Thiết Kế Cốt Lõi
Toàn bộ mã nguồn trong `src/` tuân thủ nghiêm ngặt quy tắc **Single Responsibility Principle (SRP)**, **Feature-Sliced Design (FSD v2.1)** và **Canonical Vertical Formatting**:
- **Zero Code Comments**: `0` dòng comment thừa trong toàn bộ `.ts`, `.tsx`, `.css`.
- **Zero `any` Type**: `100%` kiểu dữ liệu tường minh, tách riêng vào `types/*.types.ts`.
- **Trần dòng SRP (`<= 295` dòng/file)**: Tổng cộng `81` tệp mã nguồn được chia nhỏ theo từng trách nhiệm đơn nhất.

## 2. Sơ Đồ Phân Tầng FSD (`Frontend`) & 10-Role (`Backend`)

### A. Tầng `src/shared/` (Hạt nhân Dùng chung)
- `config/site.config.ts`: Cấu hình định danh tập trung (`Huỳnh Thái Vân`, `huynhthaivan0901@gmail.com`, `0703165031`, `huynhthaivan.com`).
- `types/`: Định nghĩa kiểu dữ liệu đa ngôn ngữ (`i18n.types.ts`), thực thể Portfolio (`portfolio.types.ts`) và Lead (`lead.types.ts`).
- `constants/`: Cấu hình thanh điều hướng (`navigation.constants.ts`) và bộ từ khóa SEO/GEO (`seo-keywords.constants.ts`).
- `utils/`: Hàm thuần túy xử lý chuỗi/URL Drive (`formatters.util.ts`), sinh danh bạ `vCard 3.0` (`vcard-builder.util.ts`) và sinh đồ thị `JSON-LD @graph` (`seo-jsonld.util.ts`).
- `styles/`: 9 tệp CSS phân tách theo từng chương giao diện (`01-tokens-and-base.css` đến `05b-cv-admin-and-responsive.css`).
- `ui/`: Các nguyên tử giao diện tạp chí (`EditorialBadge`, `SectionHeader`, `PolaroidFrame`).

### B. Tầng `src/entities/` (Thực thể Nghiệp vụ)
- `profile/`: Dữ liệu định danh, 6 chỉ số KPI, học vấn VLU/UEF, Giải MC Xuất sắc và 4 trụ cột `STRENGTHS`.
- `csr-project/`: Dữ liệu dự án `BMB Love School`, 4 sáng kiến gây quỹ (`Kansai Paint`, `1Office`, Giải thể thao, Gian hàng ẩm thực) và 6 chỉ số Reels tự nhiên.
- `event-project/`: Dữ liệu 4 nhóm đại sự kiện tại `BMB Steel` và `RT Holdings / WASS / ISA`.
- `media-work/`: Danh mục 9 kênh Video sản xuất, 6 số tạp chí `RT Connection` (Số 14–19), hoạt động MC sân khấu và 15 trang Lookbook gốc.

### C. Tầng `src/features/` (Tính năng Tương tác)
- `retro-tv-player/`: Hook điều khiển chuyển kênh và khung Tivi Retro phát trực tiếp 9 video từ Google Drive.
- `original-pdf-slides/`: Trình lật xem 15 trang thiết kế gốc kèm thanh cuộn Thumbnail.
- `lead-concierge/`: Form liên hệ chống Bot (Honeypot + Rate Limit) và thẻ lưu danh bạ trực tiếp.

### D. Tầng `src/widgets/` (12 Khối Giao diện Lớn)
- Tách biệt 12 phân khu độc lập được lắp ghép bởi `PortfolioPageComposer.tsx`.

### E. Tầng `src/server/modules/leads/` (Backend 10-Role SRP)
- `constants/leads.constants.ts` $\rightarrow$ `types/leads.types.ts` $\rightarrow$ `utils/leads-security.util.ts` $\rightarrow$ `validators/leads.validator.ts` $\rightarrow$ `mappers/leads.mapper.ts` $\rightarrow$ `repositories/leads.repository.ts` $\rightarrow$ `services/leads.service.ts` $\rightarrow$ `controllers/leads.controller.ts`.
