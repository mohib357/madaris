# Dikkhaloy — Institution Landing Page

একটি আধুনিক, multi-tenant, responsive institution landing page — **Next.js 14 (App Router) + TypeScript + Tailwind CSS** দিয়ে তৈরি।

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 |
| Icons | Lucide React |
| Fonts | Google Fonts (Noto Sans Bengali, Noto Naskh Arabic) |
| Image Optimization | Next.js `<Image>` component |

---

## 📁 প্রজেক্ট স্ট্রাকচার

```
Landing_Page/
├── src/
│   ├── app/
│   │   ├── globals.css          # CSS variables, design tokens, utilities
│   │   ├── layout.tsx           # Root layout (fonts, metadata)
│   │   └── page.tsx             # Main landing page — সব section একত্রিত
│   ├── components/
│   │   ├── UtilityBar.tsx       # Top bar — phone, email, language switcher
│   │   ├── Navbar.tsx           # Sticky navbar — dropdown, mobile menu, bottom nav
│   │   ├── NoticeTicker.tsx     # Scrolling emergency notice ticker
│   │   ├── HeroBanner.tsx       # Hero section — bg image, CTA buttons, wave
│   │   ├── QuickActions.tsx     # Quick action cards — ভর্তি, নোটিশ, ফলাফল ইত্যাদি
│   │   ├── Statistics.tsx       # Animated count-up statistics section
│   │   ├── AboutInstitution.tsx # About section — image + text
│   │   ├── Leadership.tsx       # Principal/Chairman message cards
│   │   ├── Departments.tsx      # Academic departments — card grid + modal
│   │   ├── AdmissionSection.tsx # Admission form + process stepper
│   │   ├── Facilities.tsx       # Facilities icon grid
│   │   ├── WhyChooseUs.tsx      # Why choose us — feature points
│   │   ├── NoticeResult.tsx     # Notice board + result search (tabbed)
│   │   ├── Teachers.tsx         # Featured teachers grid
│   │   ├── Testimonials.tsx     # Reviews — filter, pagination, submit form
│   │   ├── Donation.tsx         # Donation section — preset amounts + payment
│   │   ├── Gallery.tsx          # Photo gallery — category filter + lightbox
│   │   ├── Events.tsx           # Upcoming events cards
│   │   ├── Achievements.tsx     # Achievements grid
│   │   ├── Downloads.tsx        # Document download center
│   │   ├── ContactSection.tsx   # Contact info + Google Map + inquiry form
│   │   └── Footer.tsx           # 4-column footer + Powered by Dikkhaloy
│   ├── data/
│   │   └── mockInstitution.ts   # Mock institution data (production-এ API দিয়ে replace করুন)
│   ├── types/
│   │   └── institution.ts       # TypeScript type definitions
│   └── lib/
│       └── theme.ts             # Dynamic theme CSS variable helper
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
└── postcss.config.mjs
```

---

## 🚀 রান করার পদ্ধতি

### ধাপ ১ — এই ফোল্ডারে যান

```bash
cd Landing_Page
```

### ধাপ ২ — Dependencies ইনস্টল করুন

```bash
npm install
```

### ধাপ ৩ — Development server চালু করুন

```bash
npm run dev
```

এরপর browser-এ যান: **http://localhost:3001**

---

## 📦 অন্যান্য কমান্ড

```bash
# Production build তৈরি করুন
npm run build

# Production server চালু করুন (build করার পর)
npm start

# Code lint চেক করুন
npm run lint
```

---

## 🎨 Theme পরিবর্তন করার পদ্ধতি

প্রতিটি institution-এর জন্য `src/data/mockInstitution.ts` ফাইলে `theme` অবজেক্ট পরিবর্তন করুন:

```ts
theme: {
  primaryColor: "#1a6b3c",      // মূল রঙ (HEX)
  primaryDark: "#14532d",        // গাঢ় রঙ (hover/active)
  primaryLight: "#d1fae5",       // হালকা রঙ (backgrounds)
  primaryForeground: "#ffffff",  // primary bg-এর উপর text রঙ
}
```

রঙ পরিবর্তন করলে সম্পূর্ণ website-এ — Navbar, Buttons, Cards, Headings — সব automatically পরিবর্তন হবে।

---

## 🏫 Multi-Tenant Architecture

Production-এ নতুন institution যোগ করতে:

1. `src/data/mockInstitution.ts`-এর structure অনুসরণ করে নতুন institution data তৈরি করুন
2. `src/app/page.tsx`-এ `mockInstitution` এর জায়গায় subdomain/path অনুযায়ী API call করুন
3. Domain routing:
   - **Subdomain:** `x.dikkhaloy.com` → `hostname` থেকে slug বের করুন
   - **Path:** `dikkhaloy.com/x` → Next.js dynamic route `[slug]/page.tsx` ব্যবহার করুন
   - **Custom Domain:** middleware দিয়ে domain → institution map করুন

---

## ✅ Implemented Features

| Feature | Status |
|---|---|
| Dynamic theme (CSS variables) | ✅ |
| Language switcher (UI) | ✅ |
| Sticky Navbar + dropdown + mobile menu | ✅ |
| Mobile bottom navigation bar | ✅ |
| Emergency notice ticker | ✅ |
| Hero banner with CTA | ✅ |
| Quick action cards | ✅ |
| Animated statistics counter | ✅ |
| About institution section | ✅ |
| Leadership message cards | ✅ |
| Departments grid + modal | ✅ |
| Online admission form | ✅ |
| Admission process stepper | ✅ |
| Facilities grid | ✅ |
| Why choose us section | ✅ |
| Notice board (tabbed) | ✅ |
| Result search (mock output) | ✅ |
| Teachers section | ✅ |
| Testimonials (filter + pagination + submit) | ✅ |
| Donation section (preset amounts + payment) | ✅ |
| Photo gallery (filter + lightbox) | ✅ |
| Events section | ✅ |
| Achievements section | ✅ |
| Download center | ✅ |
| Contact form + Google Map | ✅ |
| Footer (4-column) | ✅ |
| Powered by Dikkhaloy | ✅ |
| SEO / Open Graph metadata | ✅ |
| Fully responsive (mobile-first) | ✅ |
| Accessibility (ARIA labels, focus management) | ✅ |
| Section visibility control | ✅ |

---

## 🔧 Production-এ ব্যবহারের আগে

- `src/data/mockInstitution.ts` → প্রকৃত API/DB call দিয়ে replace করুন
- Google Maps embed URL → প্রকৃত institution location দিন
- `public/assets/` → প্রকৃত logo ও favicon যোগ করুন
- Payment gateway → bKash/Nagad/card SDK integrate করুন
- Contact form → backend API endpoint সংযুক্ত করুন
- Result API → central database থেকে real data টানুন

---

*Powered by [Dikkhaloy](https://dikkhaloy.com)*
