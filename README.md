# Portfolio Chính Thức: `huynhthaivan.com` — Huỳnh Thái Vân (Vanessa)

Hệ thống Website Portfolio & Hồ sơ Năng lực Chuyên nghiệp chuẩn Quốc tế 2026 dành cho **Huỳnh Thái Vân (`Vanessa`) — PR Specialist & CSR Lead**, được thiết kế và xây dựng theo chuẩn kiến trúc **Feature-Sliced Design (FSD v2.1) + 10-Role Backend/Frontend SRP + Next.js App Router + SEO/AEO/GEO 2026**.

- **Chủ sở hữu thương hiệu**: **Huỳnh Thái Vân (`Vanessa`)** — *PR Specialist & CSR Lead*
- **Tên miền chính thức**: `https://huynhthaivan.com` (Đã kích hoạt trên iNET & khai báo Bộ TT&TT `thongbaotenmien.vn`)
- **Điện thoại / Zalo**: `0703 165 031` (`https://zalo.me/0703165031`)
- **Email chính thức (Giữ nguyên theo bản gốc)**: `huynhthaivan0901@gmail.com`
- **Bản PDF Chuẩn ATS & Email (Đã nén từ `146.89 MB` xuống `3.9 MB`)**: `/downloads/Huynh-Thai-Van-PR-Specialist-CSR-Lead-Portfolio-2026.pdf`

---

## 1. Kiến Trúc Phân Tầng Chuẩn FSD v2.1 & 10-Role SRP

```text
huynhthaivan.com/
├── README.md
├── package.json / tsconfig.json / next.config.ts / vercel.json
├── Dockerfile / docker-compose.yml / ecosystem.config.cjs
├── .github/workflows/ci-cd-huynhthaivan.yml
├── deploy/
│   └── nginx-huynhthaivan.com.conf
├── data/
│   └── leads.json
├── public/
│   ├── assets/
│   │   ├── pages/       # 15 trang Portfolio gốc độ phân giải cao (page-01..15.jpg & thumb)
│   │   ├── crops/       # 16 cụm ảnh cắt bóc tách theo từng chuyên mục
│   │   └── og/          # Ảnh OpenGraph 1200x630 chuẩn Zalo / LinkedIn / Facebook
│   ├── downloads/
│   │   └── Huynh-Thai-Van-PR-Specialist-CSR-Lead-Portfolio-2026.pdf (3.9 MB)
│   └── huynhthaivan2026indexnowkey.txt
└── src/
    ├── middleware.ts    # Edge WAF, chống dò quét & tự động chuyển hướng 308 www -> @
    ├── shared/          # [FSD Layer 1: Shared] Config, Types, Constants, Utils, Styles (01..05.css), UI Atoms
    ├── entities/        # [FSD Layer 2: Entities] Profile, CSR Project, Event Project, Media Work
    ├── features/        # [FSD Layer 3: Features] Retro TV 9-Video Player, 15-Slide Deck, Lead Concierge
    ├── widgets/         # [FSD Layer 4: Widgets] 12 Section Widgets độc lập
    ├── server/          # [Backend 10-Role SRP] Controllers, Services, Repositories, Validators, Mappers, Utils
    └── app/             # [Next.js App Router] /, /en, /cv, /admin/leads, /sitemap.xml, /robots.txt, /llms.txt, /api/*
```
