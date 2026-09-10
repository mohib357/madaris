# Dikkhaloy Institution Landing Page

## UI/UX, Feature & Functional Specification

### Document Purpose

Dikkhaloy প্ল্যাটফর্মে নিবন্ধিত প্রতিটি স্কুল/মাদরাসার জন্য একটি স্বতন্ত্র, আধুনিক, responsive এবং dynamic public-facing website/landing page তৈরি করতে হবে।

উদাহরণ হিসেবে একটি প্রতিষ্ঠানকে **X Institution** হিসেবে ধরা হলো।

প্রতিষ্ঠানটি নিচের যেকোনো URL থেকে access করা যেতে পারে:

- `x.dikkhaloy.com` (আমাদের মূল ডোমেইন ও নাম dikkhaloy ও madaris.com.bd)
- `dikkhaloy.com/x`
- `x.com` — Custom Domain

URL যেটিই হোক, system স্বয়ংক্রিয়ভাবে সংশ্লিষ্ট Institution/Tenant শনাক্ত করবে এবং সেই প্রতিষ্ঠানের নিজস্ব logo, name, color, content, notice, admission, result, gallery ইত্যাদি render করবে।

---

# 1. Overall Design Philosophy

Landing page-এর design হবে:

- Modern
- Premium
- Clean
- Professional
- Trustworthy
- Education-focused
- Islamic-friendly, যেখানে প্রতিষ্ঠানটি মাদরাসা
- Mobile-first
- Fully responsive
- Fast loading
- SEO-friendly
- Accessibility-friendly

### মূল উদ্দেশ্য

নতুন visitor যেন website-এ প্রবেশ করে সহজেই বুঝতে পারেন:

1. এটি কোন প্রতিষ্ঠান?
2. প্রতিষ্ঠানটি কী ধরনের শিক্ষা দেয়?
3. ভর্তি চলছে কি না?
4. সর্বশেষ নোটিশ কী?
5. ফলাফল কোথায় পাওয়া যাবে?
6. প্রতিষ্ঠানের সুযোগ-সুবিধা কী?
7. কীভাবে যোগাযোগ করতে হবে?
8. কীভাবে অনলাইনে ভর্তি/ফি/অনুদান দেওয়া যাবে?

---

# 2. Dynamic Institution Branding

প্রতিটি Institution-এর website একই core codebase ব্যবহার করবে, কিন্তু institution অনুযায়ী branding পরিবর্তিত হবে।

### Dynamic Theme Color

প্রতিষ্ঠান তাদের logo/branding-এর সাথে মিলিয়ে Primary Color নির্বাচন করতে পারবে।

উদাহরণ:

- Green
- Navy Blue
- Maroon
- Teal
- Custom HEX Color

Theme color পুরো website-এর:

- Navbar
- Buttons
- Links
- Icons
- Section headings
- Cards
- CTA
- Active menu
- Highlights

ইত্যাদিতে automatically প্রয়োগ হবে।

### গুরুত্বপূর্ণ

color hard-code করবেন না।

Theme system variables/design tokens ভিত্তিক হতে হবে।

---

# 3. Top Utility Bar

Website-এর একদম উপরে একটি slim utility bar থাকবে।

### Left / Center

প্রয়োজন অনুযায়ী:

- ফোন নম্বর
- Email
- জরুরি তথ্য

### Right

#### Language Switcher

```text
বাংলা | English | العربية
```

Language পরিবর্তন করলে public content সংশ্লিষ্ট ভাষায় প্রদর্শিত হবে।

---

# 4. Sticky Header & Main Navbar

Navbar scroll করার সময় sticky থাকবে।

### Left

- Institution Logo
- Institution Name

Logo অথবা institution name-এ click করলে homepage-এ ফিরে যাবে।

### Center

Main navigation:

```text
হোম
পরিচিতি
বিভাগসমূহ
নোটিশ
ফলাফল
গ্যালারি
যোগাযোগ
```

প্রয়োজনে submenu:

```text
পরিচিতি
 ├── আমাদের সম্পর্কে
 ├── প্রতিষ্ঠানের ইতিহাস
 ├── লক্ষ্য ও উদ্দেশ্য
 └── অধ্যক্ষ/মুহতামিমের বাণী

বিভাগসমূহ
 ├── নূরানী
 ├── হিফজ
 ├── কিতাব
 ├── দাখিল
 └── অন্যান্য
```

### Right

দুটি highlighted CTA:

**[ অনলাইন ভর্তি ]**

**[ দান/অনুদান ]**

### Mobile

Hamburger menu

---

# 5. Emergency Notice / Dynamic Ticker

Navbar-এর নিচে একটি dynamic notice ticker থাকবে।

---

# 6. Hero Banner

### Background

Admin dashboard থেকে:

- Image
- Multiple image slider
- Video
- YouTube/Vimeo video
- অথবা uploaded MP4

ব্যবহার করা যাবে।

### Overlay

Background image/video-এর উপর readable overlay থাকবে যাতে text পরিষ্কার দেখা যায়।

### Content

### CTA

```text
[ ভর্তি আবেদন করুন ]
[ ফলাফল দেখুন ]
[ প্রস্পেক্টাস ডাউনলোড ]
```

প্রতিষ্ঠান চাইলে CTA button-এর সংখ্যা/label পরিবর্তন করতে পারবে।

### Hero Content Dynamic হবে

Admin dashboard থেকে:

- Heading
- Subtitle
- Description
- CTA
- Background media

পরিবর্তনযোগ্য।

---

# 7. Quick Action Area

Hero section-এর নিচে অথবা overlay-এর নিচে দ্রুত access-এর জন্য একটি compact action area রাখা যেতে পারে।

প্রধান action:

```text
🎓 অনলাইন ভর্তি
📢 নোটিশ
📊 ফলাফল
💳 ফি
📥 ডাউনলোড
📞 যোগাযোগ
```

এটি mobile-এ horizontal scroll/card format-এ হতে পারে।

---

# 8. এক নজরে প্রতিষ্ঠান — Statistics Counter

একটি visually attractive statistics section থাকবে।

উদাহরণ:

```text
1,250+
মোট শিক্ষার্থী

85+
শিক্ষক ও কর্মচারী

98%
উত্তীর্ণের হার

12+
শিক্ষা বিভাগ

25+
বছরের ঐতিহ্য

10,000+
লাইব্রেরি বই
```

---

# 9. প্রতিষ্ঠান সম্পর্কে / About Institution

### Layout

Desktop:

```text
Left: Institution Image
Right: About Content
```

অথবা উল্টো layout।

### Content

- প্রতিষ্ঠার ইতিহাস
- প্রতিষ্ঠার সাল
- লক্ষ্য
- উদ্দেশ্য
- শিক্ষা দর্শন
- সংক্ষিপ্ত পরিচিতি

Button:

**[ মাদরাসা সম্পর্কে → ]**

অথবা:

**[ বিস্তারিত জানুন → ]**

---

# 10. অধ্যক্ষ / মুহতামিমের বাণী

Leadership Message section থাকবে।

### Content

- Principal/Muhtamim photo
- Name
- Designation
- Message

* Chairman Message
* Principal/Muhtamim Message

দুইটি আলাদা block

---

# 11. Academic Departments & Programs

### Heading

## বিভাগ ও শিক্ষাক্রম

Card-based layout ব্যবহার করতে হবে।

উদাহরণ:

### নূরানী বিভাগ

প্রাথমিক কুরআন ও ইসলামী শিক্ষা

### হিফজ বিভাগ

পবিত্র কুরআন হিফজ

### কিতাব বিভাগ

দীনি ও আরবি শিক্ষা

### দাখিল বিভাগ

জাতীয় কারিকুলাম

### লিল্লাহ বোর্ডিং

আবাসিক ও মানবিক সহায়তা

### কম্পিউটার শিক্ষা

আধুনিক প্রযুক্তি শিক্ষা

### Card Click

Card-এ click করলে department details page/modal খুলবে।

দেখানো যাবে:

- বিভাগ সম্পর্কে
- Curriculum
- Syllabus
- Class list
- Teachers
- Facilities
- Admission information

---

# 12. Admission Section

Admission section homepage-এর অন্যতম prominent section হবে।

### Heading

## 🎓 ২০২৬ শিক্ষাবর্ষে ভর্তি চলছে

### Description

> আপনার সন্তানের সুন্দর ভবিষ্যতের যাত্রা শুরু হোক আজ থেকেই।

### CTA

```text
[ ভর্তির বিস্তারিত ]
[ অনলাইনে আবেদন → ]
```

### Admission Process

Visual stepper:

```text
01
আবেদন করুন
   ↓
02
আবেদন যাচাই
   ↓
03
ভর্তি পরীক্ষা / সাক্ষাৎকার
   ↓
04
ভর্তি নিশ্চিত করুন
```

### Online Admission System

Functional requirement:

অভিভাবক সরাসরি online form পূরণ করতে পারবেন।

Form-এর মধ্যে থাকতে পারে:

- Student Information
- Guardian Information
- Address
- Academic Information
- Photo Upload
- প্রয়োজনীয় document upload
- Department/Class selection
- Admission fee
- Payment (কনফার্ম হলে)

### Payment

Payment সফল হলে:

- Application ID
- Payment status
- Confirmation
- Receipt

generate হবে।

---

# 13. Facilities Grid

### Heading

## আমাদের সুযোগ-সুবিধা

Icon-based card/grid layout।

উদাহরণ:

🏫 আধুনিক শ্রেণিকক্ষ\
🛏️ আবাসিক হোস্টেল\
🍱 মানসম্মত খাবার\
📚 সমৃদ্ধ লাইব্রেরি\
🔒 CCTV নিরাপত্তা\
⚡ ২৪ ঘণ্টা বিদ্যুৎ\
💻 কম্পিউটার ল্যাব\
⚽ খেলার মাঠ\
🕌 নামাজের ব্যবস্থা\
🏥 প্রাথমিক চিকিৎসা

### Dynamic

প্রতিটি institution নিজের facilities add/remove করতে পারবে।

---

# 14. কেন আমাদের প্রতিষ্ঠান?

এটি marketing/trust section হিসেবে থাকবে।

### Example

## কেন X মাদরাসা?

### 🕌 ইসলামী মূল্যবোধ

দীনি ও নৈতিক শিক্ষার সমন্বিত পরিবেশ।

### 📚 মানসম্মত শিক্ষা

আধুনিক ও যুগোপযোগী শিক্ষা ব্যবস্থা।

### 👨‍🏫 অভিজ্ঞ শিক্ষক

দক্ষ ও অভিজ্ঞ শিক্ষকবৃন্দ।

### 🏫 আধুনিক শিক্ষা পরিবেশ

নিরাপদ ও শিক্ষাবান্ধব campus।

### ⚽ সহশিক্ষা কার্যক্রম

খেলাধুলা, সাংস্কৃতিক ও বিভিন্ন প্রতিযোগিতা।

### 🔒 নিরাপদ আবাসিক ব্যবস্থা

শিক্ষার্থীদের জন্য নিরাপদ ও সুশৃঙ্খল পরিবেশ।

এই section-টি admin dashboard থেকে configurable হবে।

---

# 15. Notice Board & Instant Result

একটি combined section রাখা হবে।

দুটি tab:

```text
[ নোটিশ ] [ ফলাফল ]
```

---

## Tab 1 — Notice

সাম্প্রতিক নোটিশ list:

```text
আলিম ১ম বর্ষ ভর্তি বিজ্ঞপ্তি
০৬ সেপ্টেম্বর ২০২৬

২০২৬ সালের পরীক্ষার রুটিন
৩১ আগস্ট ২০২৬

ছুটির বিজ্ঞপ্তি
২৫ আগস্ট ২০২৬
```

প্রতিটি notice-এর:

- Date
- Title
- Category
- Details
- PDF
- Download button

থাকবে।

---

## Tab 2 — Result

### 📊 ফলাফল দেখুন

Input:

```text
পরীক্ষা
[ Half Yearly Examination ▼ ]

শ্রেণি
[ Class 8 ▼ ]

রোল
[____________]

রেজিস্ট্রেশন / Student ID
[____________]

শিক্ষাবর্ষ
[ 2026 ▼ ]

[ ফলাফল দেখুন → ]
```

### Result Output

ফলাফল পাওয়া গেলে:

- Student Name
- Photo
- Roll
- Registration
- Class
- Exam
- Academic Year
- Subject-wise marks
- Grade
- GPA
- Total marks
- Position
- Attendance
- Result status

### Download

```text
[ Marksheet PDF ]
[ Print ]
```

Result data central database থেকে dynamically generate হবে।

---

# 16. Teacher & Staff Section

### Heading

## আমাদের শিক্ষকবৃন্দ

Teacher card:

- Profile photo
- Name
- Designation
- Subject
- Qualification

### Features

- Featured teachers
- View all teachers
- Teacher profile page

প্রয়োজনে Staff-এর জন্য আলাদা tab রাখা।

---

# 17. অভিভাবক ও শিক্ষার্থীদের মতামত — Reviews & Testimonials

এটি Landing Page-এর একটি গুরুত্বপূর্ণ **Trust & Social Proof Section** হবে।

নতুন অভিভাবক বা visitor যেন বর্তমান শিক্ষার্থী এবং অভিভাবকদের বাস্তব অভিজ্ঞতা ও মতামত দেখতে পারেন।

### Suggested Heading

## আমাদের সম্পর্কে তারা কী বলেন?

অথবা:

## অভিভাবক ও শিক্ষার্থীদের মতামত

### দুটি Tab / Filter

```
[ অভিভাবকদের মতামত ] [ শিক্ষার্থীদের মতামত ]
```

প্রয়োজনে আরও filter:

```
সব | অভিভাবক | শিক্ষার্থী | প্রাক্তন শিক্ষার্থী
```

### Review Card

প্রতিটি Review Card-এ থাকবে:

- Reviewer Photo (Optional)
- Name
- Reviewer Type
- শিক্ষার্থীর নাম বা সম্পর্ক (প্রয়োজনে)
- Class/Department (Optional)
- Review/Comment
- Rating (Optional)
- Submission Date

উদাহরণ:

```
★★★★★

"আমার সন্তান এখানে পড়াশোনার পাশাপাশি
নৈতিকতা ও ইসলামী মূল্যবোধের শিক্ষা পাচ্ছে।
শিক্ষকদের আন্তরিকতা ও নিয়মিত যোগাযোগে
আমরা খুবই সন্তুষ্ট।"

— মোঃ আব্দুল করিম
অভিভাবক | হিফজ বিভাগ
```

আরেকটি:

```
★★★★★

"শিক্ষকদের সুন্দর ব্যবহার, পড়াশোনার পরিবেশ
এবং সহশিক্ষা কার্যক্রম আমার খুব ভালো লাগে।
এখানে পড়াশোনা করতে পেরে আমি গর্বিত।"

— মুহাম্মদ আব্দুল্লাহ
শিক্ষার্থী | দাখিল ৯ম শ্রেণি
```

### Display Design

Desktop-এ:

- 3-column review cards
- অথবা slider/carousel

Mobile-এ:

- 1-card view
- Swipeable carousel

### Review Submission

প্রতিষ্ঠান চাইলে website থেকে public review submission চালু/বন্ধ করতে পারবে।

Form:

```
আপনার পরিচয়
[ অভিভাবক ▼ / শিক্ষার্থী ▼ / প্রাক্তন শিক্ষার্থী ▼ ]

নাম
[________________]

শিক্ষার্থীর নাম / নিজের নাম
[________________]

শ্রেণি / বিভাগ
[________________]

আপনার মতামত
[________________________]

Rating
☆ ☆ ☆ ☆ ☆

[ মতামত জমা দিন ]
```

### Logged-in Verification — Recommended

যদি reviewer Dikkhaloy-এর registered Student/Guardian হন, তাহলে login করা অবস্থায়:

- Reviewer Type
- Name
- Student/Guardian সম্পর্ক
- Class/Department

system থেকে automatically identify করা হবে।

যাতে fake review না থাকে।

### Review Moderation

Public review সরাসরি website-এ publish হবে না।

Flow:

```
Review Submitted
       ↓
Pending
       ↓
Institution Admin Review
       ↓
Approve / Reject
       ↓
Published on Website
```

Admin Dashboard থেকে:

- Pending Reviews
- Approved Reviews
- Rejected Reviews
- Featured Reviews
- Hide/Unpublish
- Delete

manage করা যাবে।

### Featured Review

Admin নির্দিষ্ট কিছু review **Featured** হিসেবে নির্বাচন করতে পারবেন।

Homepage-এ প্রথমে featured reviews দেখানো হবে।

### Privacy

Publicভাবে অপ্রয়োজনীয় ব্যক্তিগত তথ্য দেখানো যাবে না।

প্রয়োজনে reviewer-এর:

- পুরো নামের পরিবর্তে আংশিক নাম
- Profile photo hide
- Class/Department hide

করার option থাকতে হবে।

### Dynamic Settings

```
Testimonials Section: ON / OFF
Allow Public Submission: ON / OFF
Require Login: ON / OFF
Show Rating: ON / OFF
Show Reviewer Photo: ON / OFF
Display Style: Grid / Slider
Maximum Homepage Reviews: 3 / 6 / 9

```

# 17. Donation / Lillah Fund

### Heading

## আপনার সহায়তায় গড়ে উঠুক একটি সুন্দর ভবিষ্যৎ

Donation purpose:

- এতিম শিক্ষার্থী
- দরিদ্র শিক্ষার্থী
- লিল্লাহ বোর্ডিং
- শিক্ষা উপকরণ
- খাবার
- চিকিৎসা
- অবকাঠামো উন্নয়ন

### Donation Options

```text
৳500
৳1,000
৳2,000
৳5,000
Custom Amount
```

### Payment

- bKash
- Nagad
- Card
- Internet Banking
- Supported Online Payment Gateway

### Important

Payment সরাসরি প্রতিষ্ঠানের নিজস্ব merchant/account-এ যাবে।

Donation সফল হলে donor-এর জন্য:

- Transaction ID
- Receipt
- Donation confirmation

---

# 18. Campus Life — Photo & Video Gallery

### Heading

## ক্যাম্পাসের কিছু মুহূর্ত

Category-based gallery:

```text
All
Campus
Classroom
Sports
Quran Competition
Annual Program
Prize Giving
Educational Tour
Events
```

### Photo

Masonry/Grid layout।

### Video

Video card:

- Thumbnail
- Title
- Date
- Play button

### CTA

**[ সকল ছবি দেখুন → ]**

**[ সকল ভিডিও দেখুন → ]**

---

# 19. Events / Upcoming Activities

### Heading

## 📅 আসন্ন কার্যক্রম

Card:

```text
12
SEP

বার্ষিক ক্রীড়া প্রতিযোগিতা

সময়: সকাল ৯:০০
স্থান: মাদরাসা মাঠ
```

আরও:

```text
20 SEP
অভিভাবক সমাবেশ

05 OCT
বার্ষিক পরীক্ষা
```

Event-এর জন্য:

- Date
- Time
- Location
- Description
- Registration (optional)

থাকতে পারে।

---

# 20. Achievements

### Heading

## 🏆 আমাদের অর্জন

উদাহরণ:

🏆 জাতীয় পর্যায়ে পুরস্কার\
🥇 কুরআন প্রতিযোগিতায় ১ম স্থান\
🏅 বোর্ড পরীক্ষায় অসাধারণ ফলাফল\
🎓 বৃত্তিপ্রাপ্ত শিক্ষার্থী\
🏆 বিতর্ক প্রতিযোগিতায় সাফল্য

প্রতিটি achievement-এর সাথে:

- Year
- Title
- Description
- Photo

রাখা যাবে।

---

# 21. Download Center

### Heading

## 📥 গুরুত্বপূর্ণ ডকুমেন্ট

Grid/list:

- Prospectus
- Admission Form
- Syllabus
- Academic Calendar
- Exam Routine
- Class Routine
- Holiday List
- বিভিন্ন PDF Notice
- অন্যান্য গুরুত্বপূর্ণ document

প্রতিটি item:

```text
📄 Prospectus
PDF • 2.4 MB

[ Download ↓ ]
```

---

# 23. Contact & Google Map

### Heading

## যোগাযোগ করুন

Left side:

**প্রতিষ্ঠানের ঠিকানা**

**ফোন:**\
+880...

**Email:**\
...

**Office Hours:**\
...

Social links:

- Facebook
- YouTube
- WhatsApp

Right side:

### Google Map

Institution-এর saved location অনুযায়ী map automatically load হবে।

### Inquiry Form

```text
নাম
[________________]

মোবাইল
[________________]

Email
[________________]

বিষয়
[________________]

আপনার বার্তা
[________________]

[ বার্তা পাঠান → ]
```

Form submission admin dashboard-এ পৌঁছাবে।

---

# 24. Footer

Footer professional এবং information-rich হবে।

### Column 1 — Institution

Institution logo

Institution name

Short description

Address

Phone

Email

### Column 2 — Quick Links

- হোম
- পরিচিতি
- বিভাগসমূহ
- ভর্তি
- নোটিশ
- ফলাফল
- গ্যালারি
- যোগাযোগ

### Column 3 — Student

- Student Portal
- Result
- Routine
- Fees

### Column 4 — Important

- Downloads
- Academic Calendar
- FAQ
- Admission
- Donation

### Social Media

- Facebook
- YouTube
- WhatsApp
- অন্যান্য configured social media

### Dikkhaloy Branding

Footer-এর নিচে subtle branding:

**Powered by Dikkhaloy**

এটি clickable হবে এবং Dikkhaloy-এর মূল website-এ নিয়ে যাবে।

---

### Mobile Priority

Mobile-এ:

- Sticky compact header
- Hamburger menu
- Quick action buttons
- Click-to-call
- WhatsApp
- Admission CTA
- Result search

সহজে access করতে হবে।

প্রয়োজনে bottom mobile navigation:

```text
Home | Notice | Admission | Result | More
```

ব্যবহার করা।

---

# 26. SEO & Social Media Metadata

প্রতিটি Institution-এর জন্য dynamic SEO metadata তৈরি হবে।

### Dynamic Meta Title

```text
আলহাজ্ব আবুল কাসেম ইসলামিক মাদরাসা | Dikkhaloy
```

### Meta Description

Admin dashboard থেকে configurable।

### Dynamic

- Institution Name
- Logo
- Description
- Location
- Keywords
- OG Image
- Favicon

ব্যবহার করতে হবে।

### Social Share Preview

Facebook/WhatsApp/Messenger ইত্যাদিতে URL share করলে যেন:

```text
[Institution Logo/Image]

আলহাজ্ব আবুল কাসেম ইসলামিক মাদরাসা

নৈতিকতা ও আধুনিক শিক্ষার সমন্বয়ে...
```

এরকম proper preview card আসে।

Open Graph এবং Twitter/X metadata dynamicভাবে generate করতে হবে।

---

# 27. Domain Routing Architecture

একই application/codebase থেকে তিন ধরনের URL support করতে হবে।

### A. Subdomain

```text
x.dikkhaloy.com
```

### B. Path

```text
dikkhaloy.com/x
```

### C. Custom Domain

```text
x.com
```

Request আসার পর backend/system hostname/path বিশ্লেষণ করে tenant/institution শনাক্ত করবে।

Concept:

```text
Incoming Request
       ↓
Identify Domain / Path
       ↓
Find Institution / Tenant
       ↓
Load Institution Configuration
       ↓
Load Institution Data
       ↓
Apply Theme
       ↓
Render Public Website
```

---

# 28. Suggested Admin-Controlled Homepage Sections

প্রতিটি section-এর জন্য:

```text
Enabled: Yes / No
Display Order: 1, 2, 3...
```

উদাহরণ:

```text
Hero                  ON
Statistics            ON
About                 ON
Leadership            ON
Departments           ON
Admission             ON
Facilities             ON
Why Choose Us         ON
Notice                ON
Result                ON
Teachers              ON
Donation              ON
Gallery               ON
Events                ON
Achievements          ON
Downloads             ON
Contact               ON
```

Admin চাইলে drag & drop করে order পরিবর্তন করতে পারবে।

---

# 29. Performance Requirements

Website দ্রুত load করতে হবে।

বিশেষভাবে:

- Image optimization
- Lazy loading
- WebP/AVIF support
- Responsive image sizes
- Video lazy loading
- CDN support
- code optimization
- Minimal blocking scripts
- Server-side rendering/optimized rendering where appropriate

---

# 35. Overall Homepage Flow

Final homepage structure:

```text
TOP UTILITY BAR
        ↓
STICKY NAVBAR
        ↓
EMERGENCY NOTICE TICKER
        ↓
HERO BANNER
        ↓
QUICK ACTIONS
        ↓
INSTITUTION STATISTICS
        ↓
ABOUT INSTITUTION
        ↓
LEADERSHIP MESSAGE
        ↓
ACADEMIC DEPARTMENTS
        ↓
ADMISSION SECTION
        ↓
FACILITIES
        ↓
WHY CHOOSE US
        ↓
NOTICE + RESULT
        ↓
TEACHERS & STAFF
        ↓
DONATION / LILLAH FUND
        ↓
CAMPUS LIFE
        ↓
UPCOMING EVENTS
        ↓
ACHIEVEMENTS
        ↓
DOWNLOAD CENTER
        ↓
STUDENT/GUARDIAN PORTAL
        ↓
CONTACT + GOOGLE MAP
        ↓
FOOTER
        ↓
POWERED BY DIKKHALOY
```

---

# 36. Core Functional Requirements — Priority

Development priority হিসেবে:

### P0 — Must Have

1. Multi-tenant Institution Detection
2. Institution Branding
3. Dynamic Theme Color
4. Responsive Homepage
5. Navbar
6. Hero
7. Notice
8. Online Admission
9. Result Search
10. Contact
11. SEO Metadata
12. Subdomain/Path Routing

### P1 — High Priority

13. Teacher Profiles
14. Academic Departments
15. Gallery
16. Events
17. Download Center
18. Guardian/Student Portal
19. Online Fees
20. Donation
21. Payment Gateway

### P2 — Enhancement

22. Video Gallery
23. Achievements
24. Advanced Theme Customization
25. Homepage Section Drag & Drop
26. Multiple Language Content
27. Custom Domain
28. Advanced Analytics
