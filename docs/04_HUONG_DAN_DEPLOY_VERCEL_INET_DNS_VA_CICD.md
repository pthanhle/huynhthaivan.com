# 04. Hướng Dẫn Triển Khai `huynhthaivan.com` (Vercel / VPS / iNET OneShield DNS)

## 1. Cấu Hình Bản Ghi DNS Trên `iNET OneShield` (`portal.inet.vn`)

Để trỏ tên miền **`huynhthaivan.com`** về máy chủ Web (Vercel hoặc VPS) trong khi giữ nguyên các bản ghi hiện có:

### Trường hợp A: Chạy trên Vercel Edge (Khuyên dùng — Miễn phí SSL & CDN Toàn cầu)
| Loại (`Type`) | Tên (`Host`) | Giá trị (`Value / Target`) | TTL | Mục đích |
| :---: | :---: | :--- | :---: | :--- |
| **`A`** | **`@`** | `76.76.21.21` | `3600` | Trỏ tên miền gốc `huynhthaivan.com` về Vercel Anycast Edge |
| **`CNAME`** | **`www`** | `cname.vercel-dns.com` | `3600` | Trỏ `www.huynhthaivan.com` về Vercel (Tự động Redirect 308 về `@`) |

### Trường hợp B: Chạy trên Máy chủ VPS Riêng (PM2 Cluster / Docker + Nginx)
| Loại (`Type`) | Tên (`Host`) | Giá trị (`Value / Target`) | TTL | Mục đích |
| :---: | :---: | :--- | :---: | :--- |
| **`A`** | **`@`** | `<IP_MAY_CHU_VPS>` | `3600` | Trỏ `huynhthaivan.com` về IP máy chủ VPS |
| **`CNAME`** | **`www`** | `huynhthaivan.com` | `3600` | Chuyển hướng `www` về tên miền gốc |

---

## 2. Khởi Chạy & Kiểm Thử Trực Tiếp

```bash
# 1. Di chuyển vào thư mục dự án
cd /Users/lephuocthanh/development/huynhthaivan.com

# 2. Kiểm tra Type & Đóng gói bản Production
npm run typecheck
npm run build

# 3. Khởi chạy Server Production (Port 3005)
npm run start
```

### Các Đường Dẫn Nghiệm Thu Trực Tiếp:
- **Trang chủ Portfolio (Tiếng Việt)**: `http://localhost:3005/`
- **Trang chủ Portfolio (Tiếng Anh Quốc tế)**: `http://localhost:3005/en`
- **Bản CV Chuẩn ATS (`/cv`)**: `http://localhost:3005/cv`
- **Tải File PDF 15 Trang Đã Tối Ưu (`3.9 MB`)**: `http://localhost:3005/downloads/Huynh-Thai-Van-PR-Specialist-CSR-Lead-Portfolio-2026.pdf`
- **Tải Danh bạ Điện thoại (`vCard .vcf`)**: `http://localhost:3005/api/vcard`
- **Trang Quản trị Liên hệ CRM**: `http://localhost:3005/admin/leads`
- **AI Search Visibility (`/llms.txt`)**: `http://localhost:3005/llms.txt`
- **Sitemap XML & Robots**: `http://localhost:3005/sitemap.xml` & `http://localhost:3005/robots.txt`
