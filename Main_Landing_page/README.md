# Dikkhaloy — Landing Page

> **স্কুল ও মাদরাসার সম্পূর্ণ ডিজিটাল ব্যবস্থাপনা প্ল্যাটফর্মের মূল মার্কেটিং ল্যান্ডিং পেজ**
>
> Domain: [dikkhaloy.com](https://dikkhaloy.com) | [madaris.com.bd](https://madaris.com.bd)

---

## সূচিপত্র

1. [প্রজেক্ট পরিচিতি](#প্রজেক্ট-পরিচিতি)
2. [Tech Stack](#tech-stack)
3. [প্রজেক্ট স্ট্রাকচার](#প্রজেক্ট-স্ট্রাকচার)
4. [Section-ভিত্তিক বিবরণ](#section-ভিত্তিক-বিবরণ)
5. [Context ও State Management](#context-ও-state-management)
6. [Design System](#design-system)
7. [Animation ও Effects](#animation-ও-effects)
8. [Dummy Data — কোথায়, কীভাবে Real Data দিতে হবে](#dummy-data)
9. [Environment Setup ও Run করার নিয়ম](#environment-setup)
10. [Build ও Deploy](#build-ও-deploy)
11. [Developer Guidelines](#developer-guidelines)
12. [Future Integrations](#future-integrations)

---

## প্রজেক্ট পরিচিতি

এটি **Dikkhaloy SaaS Platform**-এর মূল মার্কেটিং ওয়েবসাইটের ল্যান্ডিং পেজ। এটি একটি **Multi-Tenant SaaS** প্ল্যাটফর্মের frontend শোকেস যেখানে:

- স্কুল ও মাদরাসা তাদের নিজস্ব **subdomain** (`abc.dikkhaloy.com`) বা **custom domain** (`mqmadrasa.com`) ব্যবহার করে সিস্টেম পরিচালনা করতে পারবে
- প্রতিটি প্রতিষ্ঠান আলাদা data, branding, ও website পাবে
- Admin, Teacher, Student, Guardian — সবার জন্য আলাদা portal

**এই landing page-এর উদ্দেশ্য:** Potential client (স্কুল/মাদরাসা কর্তৃপক্ষ)-কে platform সম্পর্কে সম্পূর্ণ ধারণা দেওয়া এবং trial/signup-এ convert করা।

---

## Tech Stack

| বিভাগ | প্রযুক্তি | Version |
|---|---|---|
| Framework | Next.js (App Router) | 15.4.8 |
| UI Library | React | 19.x |
| Language | TypeScript | 5.x |
| Styling | Tailwind CSS | 3.4.x |
| Icons | Lucide React | 0.414.x |
| Animation | Framer Motion (installed, future use) | 11.x |
| Utilities | clsx, tailwind-merge | latest |
| Font | Inter (Latin), Hind Siliguri (Bengali) | Google Fonts |

---

## প্রজেক্ট স্ট্রাকচার

```
dikkhaloy-landing/
│
├── src/
│   ├── app/
│   │   ├── globals.css          ← Design tokens, patterns, animations
│   │   ├── layout.tsx           ← Root layout — metadata, fonts, LanguageProvider
│   │   └── page.tsx             ← Main page — সব section একত্রিত
│   │
│   ├── components/
│   │   ├── FloatingChat.tsx     ← Live chat FAB + ScrollToTop button
│   │   └── sections/            ← প্রতিটি section আলাদা component
│   │       ├── UtilityBar.tsx
│   │       ├── Navbar.tsx
│   │       ├── HeroSection.tsx
│   │       ├── TrustSection.tsx
│   │       ├── ProblemSection.tsx
│   │       ├── SolutionSection.tsx
│   │       ├── CoreFeatures.tsx
│   │       ├── ModuleShowcase.tsx
│   │       ├── MadrasaFeatures.tsx
│   │       ├── InstitutionWebsite.tsx
│   │       ├── MultiTenant.tsx
│   │       ├── ThemeShowcase.tsx
│   │       ├── RolePortals.tsx
│   │       ├── AdmissionJourney.tsx
│   │       ├── FinanceSection.tsx
│   │       ├── ResultSection.tsx
│   │       ├── CommunicationSection.tsx
│   │       ├── DashboardAnalytics.tsx
│   │       ├── HowItWorks.tsx
│   │       ├── SecuritySection.tsx
│   │       ├── Testimonials.tsx
│   │       ├── PricingSection.tsx
│   │       ├── EnterpriseCTA.tsx
│   │       ├── FAQSection.tsx
│   │       ├── FinalCTA.tsx
│   │       └── Footer.tsx
│   │
│   ├── context/
│   │   └── LanguageContext.tsx  ← বহুভাষা সুইচার (bn/en/ar)
│   │
│   ├── lib/
│   │   └── utils.ts             ← cn(), formatBDT(), calculatePrice()
│   │
│   └── types/
│       └── index.ts             ← TypeScript types (Language, NavItem, etc.)
│
├── tailwind.config.ts           ← Custom colors, fonts, keyframes, shadows
├── next.config.ts
├── package.json
└── .env.local                   ← Environment variables (নিচে দেখুন)
```

---

## Section-ভিত্তিক বিবরণ

নিচে page.tsx-এ যে ক্রমে section render হয়, সেই ক্রমে প্রতিটির বিবরণ দেওয়া হলো।

---

### 01 — UtilityBar (`UtilityBar.tsx`)

**অবস্থান:** পেজের একদম উপরে, Navbar-এর উপরে

**কার্যকারিতা:**
- ভাষা পরিবর্তনের **pill-toggle switcher** — বাংলা 🇧🇩 / English 🇬🇧 / العربية 🕌
- Center-এ announcement ticker ("অনলাইন ভর্তি ও গার্ডিয়ান পোর্টাল এখন সম্পূর্ণ লাইভ!")
- Right: Help, Sales Hotline, WhatsApp, Login link, Close button

**LanguageContext:**
```typescript
// UtilityBar.tsx ব্যবহার করে:
const { lang, setLang } = useLang();
// Arabic select করলে html[dir="rtl"] set হয়
```

**Real data দেওয়ার জায়গা:**
```typescript
// UtilityBar.tsx এ:
href="tel:+8801XXXXXXXXX"   // ← আসল phone number দিন
href="https://wa.me/8801XXXXXXXXX"  // ← আসল WhatsApp number দিন
```

---

### 02 — Navbar (`Navbar.tsx`)

**কার্যকারিতা:**
- Sticky header (scroll করলে shadow/backdrop-blur যোগ হয়)
- Desktop: Logo, 6-item nav (ফিচার dropdown সহ), Login, বিনামূল্যে শুরু করুন
- Mobile: Hamburger → full dropdown
- **Login button:** Dark slate gradient + shimmer hover effect (premium look)

**Real data:**
```typescript
// Navbar.tsx-এ nav items-এর href সঠিক route দিন
{ label: "ফিচার", href: "#features" }  // অথবা /features page
href="/login"  // actual auth route
href="#trial"  // registration/signup page
```

---

### 03 — HeroSection (`HeroSection.tsx`)

**কার্যকারিতা:**
- Dark blue gradient background + Islamic star pattern + geo pattern
- 4টি premium feature badge cards (gradient, glow, sublabel, badge)
- Interactive **Dashboard Mockup** — animated bar chart, sidebar, stats
- Live Demo modal (placeholder — "Demo video শীঘ্রই আসছে")
- CTA: "বিনামূল্যে শুরু করুন" + "Live Demo দেখুন"

**Feature cards (floatingCards array):**
```typescript
// HeroSection.tsx এর floatingCards — পরিবর্তন করতে হবে না
// কিন্তু Live Demo modal-এ আসল demo video/booking link দিন:
href="https://cal.com/dikkhaloy/demo"  // Calendly/Cal.com booking
```

**Dashboard mockup data:**
```typescript
// HeroSection.tsx এর stats[] — UI demo only, এগুলো static
{ label: "মোট শিক্ষার্থী", value: "১,২৪৮" }  // ← static UI data
```

---

### 04 — TrustSection (`TrustSection.tsx`)

**⚠️ সম্পূর্ণ DUMMY DATA — Production-এ API থেকে লোড করতে হবে**

**কার্যকারিতা:**
- 5টি animated counter stat cards (প্রতিষ্ঠান, শিক্ষার্থী, শিক্ষক, ওয়েবসাইট, প্রদেশ)
- Partner logo infinite scroll (right → left)
  - Hover: slow down (not stop)
  - Drag: left/right সরানো যায়
  - Center item: 2× বড় + glow effect
  - Random shuffle প্রতি page load-এ

**Real data integration:**

```typescript
// TrustSection.tsx এর STATS array:
const STATS = [
  { label: "প্রতিষ্ঠান", n: 120 }  // ← /api/stats থেকে লোড করুন
];

// API example:
// GET /api/platform/stats
// Response: { institutions: 120, students: 18500, teachers: 2400, websites: 95, provinces: 8 }

// BASE partners array:
const BASE = [
  { name: "মারকাযুল কুরআন মাদরাসা", abbr: "MQM", url: "https://mqmadrasa.com" }
  // ← GET /api/partners (registered institutions)
  // Response: [{ name, abbreviation, logoUrl, websiteUrl, gradientFrom, gradientTo }]
];
```

**Logo integration:**
```typescript
// বর্তমানে: abbr text দিয়ে gradient circle
// Production-এ: <img src={p.logoUrl} /> দিয়ে প্রতিষ্ঠানের আসল logo দেখাবে
// ITEM_W, LOGO_S, LOGO_L adjust করতে হতে পারে logo size অনুযায়ী
```

---

### 05 — ProblemSection (`ProblemSection.tsx`)

**কার্যকারিতা:**
- 5টি "সমস্যা" card — প্রতিটি আলাদা color + rotating CW border glow
- Background: arabesque + arc pattern, warm gradient bg

**বিশেষত্ব:** `.rotate-border-cw` CSS class ব্যবহার করে spinning conic-gradient border। Animation speed: 9s।

---

### 06 — SolutionSection (`SolutionSection.tsx`)

**কার্যকারিতা:**
- 4-pillar architecture diagram (Academic, Finance, Communication, Website)
- Center hub "DIKKHALOY" থেকে radiating lines
- প্রতিটি pillar card-এ CW rotating glow
- "ONE DIGITAL CAMPUS" CTA banner

---

### 07 — CoreFeatures (`CoreFeatures.tsx`)

**কার্যকারিতা:**
- 10টি feature card — প্রতিটি unique color
- **CCW (counter-clockwise)** rotating border glow (Problem/Solution-এর বিপরীত দিক)
- Hover-এ "বিস্তারিত দেখুন" link প্রকাশ পায়
- Background: grid + arabesque pattern

---

### 08 — ModuleShowcase (`ModuleShowcase.tsx`)

**কার্যকারিতা:**
- **Interactive Demo** section
- 8টি module-এর sidebar (Accounting, Student, Attendance, Exam, Admission, Website, Boarding, HR)
- ক্লিক করলে stacked preview cards (z-index effect) দেখায়
- Description card-এ dynamic glow (active module color অনুযায়ী)

---

### 09 — MadrasaFeatures (`MadrasaFeatures.tsx`)

**কার্যকারিতা:**
- Dark green gradient bg + Islamic star + mesh pattern (উজ্জ্বল)
- 7টি মাদরাসা-specific feature card
- Hover: glow animation (box-shadow transition)
- "শীঘ্রই আপডেট" badge — কিন্তু সব card available (disabled নয়)

**Note:** স্টোর/ইনভেন্টরি ও কওমি কাঠামো card-এ "শীঘ্রই আপডেট" label আছে — এগুলো আসলে development-এ আছে বোঝাতে। Backend ready হলে label সরিয়ে দিন।

---

### 10 — InstitutionWebsite (`InstitutionWebsite.tsx`)

**"Killer Feature" section**

**কার্যকারিতা:**
- DIKKHALOY → Tenant tree diagram
- Toggle: Subdomain preview ↔ Custom domain preview (mqmadrasa.com)
- 9টি feature card (প্রতিটি unique color, floating + shimmer hover)
- Custom domain note

**Real data:**
```typescript
// tenants array — demo purposes
// Production-এ: /api/registered-institutions থেকে লোড
```

---

### 11 — MultiTenant (`MultiTenant.tsx`)

**কার্যকারিতা:**
- Multi-tenant architecture diagram
- 3টি tenant card (CW glow) — unique colors
- 4টি benefit card (dark gradient bg — blue/purple/green/orange)
- Background: hex pattern

---

### 12 — ThemeShowcase (`ThemeShowcase.tsx`)

**কার্যকারিতা:**
- 5টি theme selector (Modern School, Academic Classic, Islamic Madrasa, Minimal, Premium)
- Active button-এ gradient + glow (theme color অনুযায়ী)
- Live browser mockup preview — theme change হলে preview update
- Background: checker pattern, warm gradient bg

---

### 13 — RolePortals (`RolePortals.tsx`)

**কার্যকারিতা:**
- 4টি portal tab (Admin, Teacher, Student, Guardian)
- Inactive buttons-এ colored border + hover shimmer
- Active portal preview: colored header, dot pattern, feature grid
- Feature card-এ intense hover glow (portal color অনুযায়ী)
- Background: dot pattern + eightstar pattern

---

### 14 — AdmissionJourney (`AdmissionJourney.tsx`)

**কার্যকারিতা:**
- 7-step animated admission flow (auto-advance প্রতি 1.5s)
- Progress bar (blue → green)
- Active step description card
- Manual step click করা যায়
- Background: arc + grid pattern

---

### 15 — FinanceSection (`FinanceSection.tsx`)

**কার্যকারিতা:**
- Payment flow diagram (Guardian → Online → Gateway → Institution → Record → Receipt)
- 6টি feature card — প্রতিটি unique color + CW rotating glow
- Fee types: Admission, Monthly, Exam, Hostel, Custom
- Background: stripe pattern

---

### 16 — ResultSection (`ResultSection.tsx`)

**কার্যকারিতা:**
- 6-step exam workflow
- Grade distribution bar chart (animated on hover)
- Summary stats (pass rate, GPA 5, total students)
- Background: checker pattern

---

### 17 — CommunicationSection (`CommunicationSection.tsx`)

**কার্যকারিতা:**
- 4টি channel card (Notice Board, Announcement, Push, Email) — প্রতিটি unique dark gradient + hover glow
- Communication reach diagram (Institution → Teacher → Student → Guardian)
- Notice board mockup (live feed appearance)

---

### 18 — DashboardAnalytics (`DashboardAnalytics.tsx`)

**কার্যকারিতা:**
- OS-style browser mockup (address bar, traffic lights)
- 5 KPI cards (animated bar chart inside)
- Dual chart: monthly bar chart + class-wise progress bars
- Recent activity feed
- Background: grid pattern

**⚠️ DUMMY:** সব data static/demo। Real deployment-এ `/api/dashboard/stats` থেকে লোড করতে হবে।

---

### 19 — HowItWorks (`HowItWorks.tsx`)

**কার্যকারিতা:**
- 3-step onboarding (Register → Import Data → Go Live)
- প্রতিটি card আলাদা color (blue/indigo/green) + CW rotating glow
- Connector lines between steps (desktop only)
- Background: hex pattern

---

### 20 — SecuritySection (`SecuritySection.tsx`)

**কার্যকারিতা:**
- Dark navy/indigo gradient + Moroccan tile + Islamic pattern
- Animated scanning line (security scanner effect)
- 6 security feature card — entrance animation (fade + slide on scroll)
- Hover: intense glow
- Security badges: SSL, Data Isolated, Role-based, Backup

---

### 21 — Testimonials (`Testimonials.tsx`)

**⚠️ সম্পূর্ণ DUMMY — Real customer data দিয়ে replace করতে হবে**

**কার্যকারিতা:**
- **2 rows** — Row 1: LTR scroll, Row 2: RTL scroll (zigzag)
- Pure JS RAF scroll — CSS animation নয় (blinking prevent করতে)
- Hover: slow down (speedRef: 0.45 → 0.16), not stop
- Drag: left/right সরানো যায়
- Hover on card: rotating glow border
- "সব রিভিউ দেখুন" → modal popup
- Random shuffle প্রতি page load-এ

**Real data integration:**
```typescript
// Testimonials.tsx এর ALL array replace করুন:
// GET /api/testimonials?limit=20&status=approved
// Response: [{ name, role, institution, text, rating, avatarUrl }]

// ALL array-এ প্রতিটি item-এ gradient color ও assign করুন
// অথবা সব একই default color রাখুন
```

---

### 22 — PricingSection (`PricingSection.tsx`)

**কার্যকারিতা:**
- **Dynamic price calculator:**
  - Slider: unlimited (auto-expand when near max)
  - Manual input: unlimited
  - Toggle: মাসিক / বার্ষিক (2 মাস ফ্রি)
  - Real-time breakdown table
  - Per-student cost display
- Included features list (10 items)
- Pricing slab table (colored rows)
- Custom domain add-on (৳2,500 one-time)

**Price calculation logic** (`src/lib/utils.ts`-এ এবং component-এ duplicate):
```
Students | Rate
1–50     | Flat ৳500/month
51–100   | +৳10/student
101–200  | +৳8/student
201–500  | +৳7/student
501+     | +৳5/student
```

**⚠️ Important:** `calculatePrice()` ফাংশন `PricingSection.tsx`-এ hardcoded। Backend pricing এই logic অনুসরণ করবে।

---

### 23 — EnterpriseCTA (`EnterpriseCTA.tsx`)

Enterprise/বড় প্রতিষ্ঠানের জন্য custom package contact section।

**Real data:**
```typescript
// Contact form integration দিন
// অথবা direct WhatsApp/Email link রাখুন
```

---

### 24 — FAQSection (`FAQSection.tsx`)

**কার্যকারিতা:**
- 10টি accordion FAQ
- প্রতিটি-তে category badge (colored)
- Active item: blue border + glow
- Background: arc pattern

---

### 25 — FinalCTA (`FinalCTA.tsx`)

**"আপনার প্রতিষ্ঠানকে নিয়ে যান ডিজিটাল যুগে"**

**কার্যকারিতা:**
- Dark navy gradient background
- **2-layer animated SVG pattern:**
  - OLD layer: খাতা + × mark, কলম, ক্যালকুলেটর + × (subtle, opacity 0.16)
  - NEW layer: ল্যাপটপ + chart, WiFi, mobile, → arrow (subtle, opacity 0.18)
  - Dark scrim overlay (rgba 0.52) — content পরিষ্কার রাখে
- CTA: "বিনামূল্যে শুরু করুন" + "একটি Demo দেখুন"

**Real data:**
```typescript
href="/register"  // ← actual registration page
href="/demo"      // ← demo booking page or video
```

---

### 26 — Footer (`Footer.tsx`)

- 5-column grid (Brand, Product, Solutions, Resources, Company + Contact)
- Dark Islamic star pattern bg
- Social links (Facebook, YouTube, LinkedIn)
- madaris.com.bd cross-link

**Real data:**
```typescript
href="mailto:hello@dikkhaloy.com"  // ← actual email
href="tel:+880XXXXXXXXX"            // ← actual phone
```

---

### FloatingChat (`FloatingChat.tsx`)

**Fixed position elements:**
1. **Scroll-to-top button** — `bottom: 9rem`, blue gradient, ArrowUp icon
   - `window.scrollY > 400` হলে দেখা যায়, smooth transition
2. **Live Chat FAB** — `bottom: 5rem`, green gradient, pulse ring animation
   - Chat window: typing indicator, quick replies, auto-reply (demo)
   - Unread badge

**⚠️ Production-এ:** auto-reply logic সরিয়ে actual chat service integrate করুন (Intercom, Crisp, WhatsApp Business API)।

---

## Context ও State Management

### LanguageContext (`src/context/LanguageContext.tsx`)

```typescript
type Lang = "bn" | "en" | "ar";

// ব্যবহার:
const { lang, setLang, dir } = useLang();

// Arabic select করলে:
document.documentElement.dir = "rtl";  // RTL layout
document.documentElement.lang = "ar";
```

**⚠️ গুরুত্বপূর্ণ:** বর্তমানে ভাষা সুইচার **শুধু UI-level** — কোনো actual translation নেই। সব content hardcoded Bengali/English। Production-এ `next-intl` বা `react-i18next` দিয়ে proper i18n implement করতে হবে।

**Recommended implementation:**
```bash
npm install next-intl
# messages/bn.json, messages/en.json, messages/ar.json তৈরি করুন
```

---

## Design System

### Color Palette (`globals.css`)

```css
/* Primary — Blue */
--primary-500: #3470f5;
--primary-600: #1e52ea;

/* Accent — Islamic Green */
--accent: #16a34a;

/* Madaris theme variant (data-theme="madaris" দিলে green primary) */
```

### Pattern Classes

| Class | বর্ণনা | ব্যবহার |
|---|---|---|
| `.pat-grid` | Blue cross/plus grid | Features, Dashboard |
| `.pat-stripes` | Green diagonal stripes | Finance, Solution |
| `.pat-dots` | Indigo dot grid | Trust, Testimonials, Communication |
| `.pat-islamic` | Islamic star polygon | Madrasa, Security |
| `.pat-hex` | Blue hexagon mesh | MultiTenant, HowItWorks |
| `.pat-arcs` | Arabesque circle arcs | FAQ, Pricing, Admission, Testimonials |
| `.pat-checker` | Indigo checker | Result, Theme |
| `.pat-moroccan` | Dark Moroccan tile | Footer (dark bg) |

### Rotating Border Glow Classes

```css
/* Clockwise — Problem, Solution, HowItWorks, FinanceSection */
.rotate-border-cw { ... }
.rotate-border-cw .rb-inner { ... }

/* Counter-clockwise — CoreFeatures */
.rotate-border-ccw { ... }
.rotate-border-ccw .rb-inner { ... }

/* Animation speed: 9s normal, 3s on hover */
/* Usage in JSX: */
<div className="rotate-border-cw" style={{ "--glow-col": "#ef4444" } as React.CSSProperties}>
  <div className="rb-inner p-6 rounded-[14px] bg-white">
    {/* content */}
  </div>
</div>
```

### Custom CSS Variable for Glow Color

```tsx
style={{ "--glow-col": "#2563eb" } as React.CSSProperties}
```

---

## Animation ও Effects

### Keyframes (`globals.css`)

| Animation | কোথায় ব্যবহার | Duration |
|---|---|---|
| `borderSpin` | rotate-border-cw | 9s |
| `borderSpinCCW` | rotate-border-ccw | 9s |
| `logoScroll` | TrustSection (removed, now RAF) | N/A |
| `oldLayerDrift` | FinalCTA OLD layer | 24s alternate |
| `newLayerPulse` | FinalCTA NEW layer | 20s alternate |
| `chatPulse` | FloatingChat FAB | 2.5s |
| `ringPulse` | FloatingChat FAB ring | 2s |
| `securityScan` | SecuritySection | 5s |
| `fadeSlideIn` | General fade-in | 0.4s |
| `educationPatternDrift` | FinalCTA (legacy) | - |
| `testLTR` / `testRTL` | Testimonials (legacy CSS) | - |

### Pure JS RAF Scroll (TrustSection ও Testimonials)

দুটো scroll section CSS animation ব্যবহার করে না। বরং:

```typescript
// RAF loop
const tick = () => {
  posRef.current += speedRef.current;  // normal: 0.55, hover: 0.18
  if (posRef.current >= HALF) posRef.current -= HALF;  // seamless wrap
  trackRef.current.style.transform = `translateX(-${posRef.current}px)`;
  rafRef.current = requestAnimationFrame(tick);
};

// Drag: dragRef.current.on = true হলে pos আর advance হয় না
// Mouse delta দিয়ে manually pos update হয়
```

**Blinking prevention:** `animation-duration` বা `animation-play-state` পরিবর্তন করলে browser animation restart করে → blinking। তাই CSS animation বাদ দিয়ে pure RAF।

---

## Dummy Data

নিচে সব **DUMMY/PLACEHOLDER** data-এর তালিকা এবং production-এ কীভাবে real data দিতে হবে:

### 1. TrustSection — Stats

```typescript
// ফাইল: src/components/sections/TrustSection.tsx
// const STATS = [ ... ]  ← n: 120, n: 18500 etc. সব DUMMY

// Production fix:
const [stats, setStats] = useState(STATS);
useEffect(() => {
  fetch('/api/platform/stats')
    .then(r => r.json())
    .then(data => {
      setStats(prev => prev.map((s, i) => ({ ...s, n: data[Object.keys(data)[i]] })));
    });
}, []);
```

### 2. TrustSection — Partner Logos

```typescript
// ফাইল: src/components/sections/TrustSection.tsx
// const BASE = [ ... ]  ← ১০টি dummy মাদরাসা

// Production fix:
// GET /api/institutions/public?fields=name,abbreviation,logoUrl,websiteUrl,brandColor
// Response:
[{
  name: "মারকাযুল কুরআন মাদরাসা",
  abbreviation: "MQM",
  logoUrl: "https://cdn.dikkhaloy.com/logos/mqm.png",
  websiteUrl: "https://mqmadrasa.com",
  brandColorFrom: "#15803d",
  brandColorTo: "#166534"
}]

// TrustSection-এ logo div-এ:
// abbr text → <img src={p.logoUrl} alt={p.name} className="rounded-full object-cover" />
```

### 3. Testimonials

```typescript
// ফাইল: src/components/sections/Testimonials.tsx
// const ALL = [ ... ]  ← ৮টি dummy testimonial

// Production fix:
// GET /api/testimonials?status=approved&limit=20
// সব testimonial একটি state-এ রাখুন এবং shuffle করুন
```

### 4. DashboardAnalytics

```typescript
// ফাইল: src/components/sections/DashboardAnalytics.tsx
// const kpis, chartBars, classData, recentActivity  ← সব DUMMY

// এটি UI demo — এখানে real data দেওয়ার দরকার নেই
// "Demo" badge প্রতিটি card-এ আছে — visitor বুঝতে পারবে
```

### 5. PricingSection

```typescript
// ফাইল: src/components/sections/PricingSection.tsx
// calculatePrice() function — hardcoded slab pricing

// Backend API যেন same slab logic follow করে:
// POST /api/calculate-price { students: 350 }
// Response: { monthly: 2450, annual: 20416 }
```

### 6. Phone/WhatsApp Numbers

```
ফাইল: UtilityBar.tsx, Footer.tsx, FAQSection.tsx
Replace: +8801XXXXXXXXX → actual contact number
```

---

## Environment Setup

### Prerequisites

- Node.js >= 18.x
- npm >= 9.x

### Installation

```bash
# 1. প্রজেক্ট ফোল্ডারে যান
cd Main_Landing_page/dikkhaloy-landing

# 2. Dependencies install করুন
npm install

# 3. .env.local ফাইল তৈরি করুন
cp .env.local.example .env.local  # বা নিজে তৈরি করুন
```

### Environment Variables (`.env.local`)

```env
# Site URL
NEXT_PUBLIC_SITE_URL=https://dikkhaloy.com

# API Base URL (backend)
NEXT_PUBLIC_API_URL=https://api.dikkhaloy.com

# WhatsApp (FloatingChat ও UtilityBar-এ ব্যবহার)
NEXT_PUBLIC_WHATSAPP_NUMBER=8801XXXXXXXXX

# Google Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Development Server

```bash
npm run dev
# http://localhost:3000 এ খুলবে
```

---

## Build ও Deploy

```bash
# Production build
npm run build

# Production server (local test)
npm run start

# Lint check
npm run lint
```

### Vercel Deploy (recommended)

```bash
# Vercel CLI দিয়ে:
vercel --prod

# অথবা GitHub repo connect করে Vercel dashboard থেকে auto-deploy
```

**Vercel configuration (`vercel.json`):**
```json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "outputDirectory": ".next"
}
```

### Build Output

```
Route (app)              Size     First Load JS
○ /                      52.9 kB  152 kB
○ /_not-found            991 B    101 kB
+ Shared chunks          99.7 kB
```

---

## Developer Guidelines

### নতুন Section যোগ করা

```typescript
// 1. src/components/sections/NewSection.tsx তৈরি করুন
"use client";
export default function NewSection() {
  return (
    <section className="section-pad relative overflow-hidden bg-white">
      <div className="absolute inset-0 pat-dots" />  {/* pattern */}
      <div className="container-xl relative z-10">
        {/* content */}
      </div>
    </section>
  );
}

// 2. src/app/page.tsx-এ import করুন এবং যুক্ত করুন
import NewSection from "@/components/sections/NewSection";
// JSX-এ যোগ করুন সঠিক position-এ
```

### Pattern ব্যবহার

```tsx
// Light background sections-এ:
<div className="absolute inset-0 pat-grid" />

// Dark background sections-এ:
<div className="absolute inset-0 pat-moroccan" />

// Pattern-এর উপর content সবসময় z-10 বা higher রাখুন:
<div className="container-xl relative z-10">
```

### Rotating Border Glow

```tsx
// Color variable set করুন:
<div className="rotate-border-cw" style={{ "--glow-col": "#2563eb" } as React.CSSProperties}>
  <div className="rb-inner p-5 rounded-[14px] bg-white">
    {/* inner content — সবসময় rb-inner class দিন */}
  </div>
</div>

// CCW (opposite direction):
<div className="rotate-border-ccw" style={{ "--glow-col": "#8b5cf6" } as React.CSSProperties}>
```

### Hover Glow (JavaScript style)

```tsx
// Direct DOM manipulation দিয়ে (CSS animation-এর সাথে conflict এড়াতে):
onMouseEnter={e => {
  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px 4px ${color}55`;
  (e.currentTarget as HTMLElement).style.borderColor = `${color}88`;
}}
onMouseLeave={e => {
  (e.currentTarget as HTMLElement).style.boxShadow = "none";
  (e.currentTarget as HTMLElement).style.borderColor = `${color}22`;
}}
```

### Language Context ব্যবহার

```typescript
import { useLang } from "@/context/LanguageContext";

export default function MyComponent() {
  const { lang, dir } = useLang();
  
  return (
    <div dir={dir}>
      {lang === "bn" && <span>বাংলা content</span>}
      {lang === "en" && <span>English content</span>}
      {lang === "ar" && <span>محتوى عربي</span>}
    </div>
  );
}
```

---

## Future Integrations

### 1. Internationalization (i18n)

```bash
npm install next-intl
# messages/bn.json, messages/en.json, messages/ar.json
# LanguageContext-কে next-intl-এর useTranslations দিয়ে replace করুন
```

### 2. Analytics

```typescript
// src/app/layout.tsx-এ:
import { GoogleAnalytics } from "@next/third-parties/google";
// <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
```

### 3. Live Chat (Production)

```typescript
// FloatingChat.tsx-এ autoReply() replace করুন:
// Option 1: Crisp Chat
// Option 2: Intercom
// Option 3: WhatsApp Business API
// Option 4: Tawk.to (free)
```

### 4. Real-time Stats (TrustSection)

```typescript
// WebSocket অথবা SWR polling:
import useSWR from 'swr';
const { data: stats } = useSWR('/api/platform/stats', fetcher, { refreshInterval: 60000 });
```

### 5. CMS Integration

Section content (FAQ, Features, Pricing slabs) পরে **CMS** (Sanity, Contentful, Strapi) থেকে লোড করা যাবে — hardcoded array গুলো API call দিয়ে replace করুন।

---

## Important Notes for Developers

> **⚠️ এই section-গুলো production-এর আগে অবশ্যই update করতে হবে:**

1. **Phone numbers** — `+8801XXXXXXXXX` → আসল নম্বর (UtilityBar, Footer, FAQ)
2. **Partner logos** — Text abbreviation → আসল logo images (TrustSection)
3. **Stats data** — Hardcoded numbers → API endpoint (TrustSection STATS)
4. **Testimonials** — Dummy reviews → Real customer feedback (Testimonials ALL array)
5. **Live Chat** — Demo auto-reply → Actual chat service (FloatingChat)
6. **Registration link** — `/register` → Actual signup/onboarding flow
7. **Demo link** — `#demo` → Actual demo booking (Calendly/Cal.com)
8. **i18n** — UI-only language switcher → Actual translation system

---

## File Size Reference

```
src/components/sections/   ← 26টি section component
src/components/FloatingChat.tsx
src/context/LanguageContext.tsx
src/lib/utils.ts
src/types/index.ts
src/app/globals.css        ← ~400 lines — design system
src/app/layout.tsx
src/app/page.tsx
tailwind.config.ts
```

---

*এই README ফাইলটি Dikkhaloy Development Team-এর জন্য তৈরি। যেকোনো প্রশ্নে [hello@dikkhaloy.com](mailto:hello@dikkhaloy.com) বা WhatsApp-এ যোগাযোগ করুন।*

---

**আলহামদুলিল্লাহ — Landing Page Ready ✅**

> Prepared by: Kiro AI Development Assistant
> Date: September 2026
> Status: Demo/Prototype — Production-ready হতে উপরের "Important Notes" সম্পন্ন করুন
