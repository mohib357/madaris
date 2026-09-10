import type { InstitutionConfig } from "@/types/institution";

// =====================================================
// Mock data — "আলহাজ্ব আবুল কাসেম ইসলামিক মাদরাসা"
// Replace with API/DB call in production
// =====================================================

export const mockInstitution: InstitutionConfig = {
  slug: "alhajj-abul-kasem",
  name: "আলহাজ্ব আবুল কাসেম ইসলামিক মাদরাসা",
  nameEn: "Alhajj Abul Kasem Islamic Madrasa",
  nameAr: "مدرسة الحاج أبو القاسم الإسلامية",
  tagline: "নৈতিকতা ও আধুনিক শিক্ষার সমন্বয়ে আলোকিত মানুষ গড়ার প্রত্যয়",
  logo: "/assets/logo-placeholder.png",
  favicon: "/assets/favicon.png",
  establishedYear: "১৯৯৮",

  theme: {
    primaryColor: "#1a6b3c",
    primaryDark: "#14532d",
    primaryLight: "#d1fae5",
    primaryForeground: "#ffffff",
  },

  seoDescription:
    "আলহাজ্ব আবুল কাসেম ইসলামিক মাদরাসা — নৈতিকতা ও আধুনিক শিক্ষার সমন্বয়ে আলোকিত মানুষ গড়ার প্রত্যয়।",
  seoKeywords: [
    "মাদরাসা",
    "ইসলামিক শিক্ষা",
    "হিফজ",
    "দাখিল",
    "ভর্তি ২০২৬",
    "dikkhaloy",
  ],
  ogImage: "/assets/og-image.jpg",

  contact: {
    phone: ["+880 1711-000000", "+880 1811-000000"],
    email: "info@alhajjmadrasa.edu.bd",
    address: "গ্রাম: উদাহরণপুর, উপজেলা: নমুনা, জেলা: ঢাকা — ১২০০",
    officeHours: "শনি–বৃহঃ: সকাল ৮টা – বিকেল ৪টা",
    googleMapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902!2d90.399!3d23.750!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ1JzAwLjAiTiA5MMKwMjMnNTYuNCJF!5e0!3m2!1sen!2sbd!4v1234567890",
    googleMapLink: "https://maps.google.com",
  },

  social: {
    facebook: "https://facebook.com/example",
    youtube: "https://youtube.com/@example",
    whatsapp: "https://wa.me/8801711000000",
  },

  heroBanner: {
    heading: "আলহাজ্ব আবুল কাসেম ইসলামিক মাদরাসায় স্বাগতম",
    subtitle: "২০২৬ শিক্ষাবর্ষে ভর্তি চলছে",
    description:
      "নৈতিকতা, দীনি জ্ঞান ও আধুনিক শিক্ষার সমন্বয়ে আপনার সন্তানের সুন্দর ভবিষ্যৎ গড়ার সুযোগ নিন।",
    backgroundImage:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1600&q=80",
    ctaButtons: [
      { label: "ভর্তি আবেদন করুন", href: "#admission", variant: "primary" },
      { label: "ফলাফল দেখুন", href: "#result", variant: "outline" },
      { label: "প্রস্পেক্টাস ডাউনলোড", href: "#downloads", variant: "outline" },
    ],
  },

  emergencyNotice:
    "🔔 ২০২৬ শিক্ষাবর্ষে ভর্তির শেষ তারিখ: ৩০ সেপ্টেম্বর ২০২৬ — আসন সীমিত!",

  statistics: [
    { value: "১,২৫০+", label: "মোট শিক্ষার্থী", icon: "👨‍🎓" },
    { value: "৮৫+", label: "শিক্ষক ও কর্মচারী", icon: "👨‍🏫" },
    { value: "৯৮%", label: "উত্তীর্ণের হার", icon: "📊" },
    { value: "১২+", label: "শিক্ষা বিভাগ", icon: "🏫" },
    { value: "২৫+", label: "বছরের ঐতিহ্য", icon: "🏆" },
    { value: "১০,০০০+", label: "লাইব্রেরি বই", icon: "📚" },
  ],

  aboutText:
    "১৯৯৮ সালে প্রতিষ্ঠিত আলহাজ্ব আবুল কাসেম ইসলামিক মাদরাসা গত ২৫ বছরেরও বেশি সময় ধরে এ অঞ্চলের শিক্ষার্থীদের দীনি ও আধুনিক শিক্ষায় আলোকিত করে আসছে। আমাদের লক্ষ্য হলো এমন প্রজন্ম তৈরি করা যারা ইসলামী মূল্যবোধ ধারণ করে আধুনিক বিশ্বে সফলভাবে নেতৃত্ব দিতে পারবে। দক্ষ শিক্ষকমণ্ডলী, সুশৃঙ্খল পরিবেশ এবং সর্বাধুনিক শিক্ষা উপকরণ নিয়ে আমরা সর্বদা শিক্ষার্থীদের সর্বোচ্চ সেবা নিশ্চিত করতে প্রতিশ্রুতিবদ্ধ।",
  aboutImage:
    "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&q=80",

  leaders: [
    {
      name: "মাওলানা মুহাম্মদ আবদুল্লাহ",
      designation: "মুহতামিম",
      photo: "https://randomuser.me/api/portraits/men/32.jpg",
      message:
        "আমাদের প্রতিষ্ঠানের মূল লক্ষ্য হলো কুরআন-সুন্নাহর আলোকে এবং আধুনিক জ্ঞান-বিজ্ঞানের সমন্বয়ে এমন প্রজন্ম তৈরি করা যারা দুনিয়া ও আখেরাত উভয় ক্ষেত্রে সফল হবে। অভিভাবকদের আস্থা ও শিক্ষার্থীদের পরিশ্রমই আমাদের সামনে এগিয়ে যাওয়ার অনুপ্রেরণা।",
    },
    {
      name: "জনাব মোঃ কামরুজ্জামান",
      designation: "সভাপতি, পরিচালনা পর্ষদ",
      photo: "https://randomuser.me/api/portraits/men/45.jpg",
      message:
        "পরিচালনা পর্ষদের পক্ষ থেকে আমি প্রতিশ্রুতি দিচ্ছি যে প্রতিষ্ঠানের সামগ্রিক উন্নয়নে আমরা সর্বদা নিবেদিত। শিক্ষার্থীদের মেধা বিকাশ ও নৈতিক উন্নয়নে সর্বোচ্চ বিনিয়োগ করাই আমাদের প্রতিজ্ঞা।",
    },
  ],

  departments: [
    {
      id: "noorani",
      icon: "📖",
      name: "নূরানী বিভাগ",
      description: "প্রাথমিক কুরআন ও ইসলামী শিক্ষা",
      details: "শিশুদের জন্য কুরআন তিলাওয়াত, মাখরাজ ও প্রাথমিক ইসলামী শিক্ষা।",
    },
    {
      id: "hifz",
      icon: "🕌",
      name: "হিফজ বিভাগ",
      description: "পবিত্র কুরআন হিফজ",
      details: "সম্পূর্ণ কুরআন মুখস্থ করার সুনির্দিষ্ট কারিকুলাম ও অভিজ্ঞ উস্তাদ।",
    },
    {
      id: "kitab",
      icon: "📚",
      name: "কিতাব বিভাগ",
      description: "দীনি ও আরবি শিক্ষা",
      details: "আরবি ভাষা, ফিকহ, হাদিস, তাফসির ও ইসলামী বিষয়সমূহের বিশদ পাঠ।",
    },
    {
      id: "dakhil",
      icon: "🎓",
      name: "দাখিল বিভাগ",
      description: "জাতীয় কারিকুলাম",
      details: "মাদরাসা বোর্ডের অধীনে দাখিল পরীক্ষার সম্পূর্ণ প্রস্তুতি।",
    },
    {
      id: "lillah",
      icon: "🏠",
      name: "লিল্লাহ বোর্ডিং",
      description: "আবাসিক ও মানবিক সহায়তা",
      details: "দরিদ্র ও মেধাবী শিক্ষার্থীদের জন্য বিনামূল্যে আবাসন, খাবার ও শিক্ষা।",
    },
    {
      id: "computer",
      icon: "💻",
      name: "কম্পিউটার শিক্ষা",
      description: "আধুনিক প্রযুক্তি শিক্ষা",
      details: "MS Office, ইন্টারনেট ও বেসিক প্রোগ্রামিং-এর প্র্যাক্টিক্যাল প্রশিক্ষণ।",
    },
  ],

  notices: [
    {
      id: "n1",
      date: "০৬ সেপ্টেম্বর ২০২৬",
      title: "আলিম ১ম বর্ষ ভর্তি বিজ্ঞপ্তি",
      category: "ভর্তি",
      pdfUrl: "#",
    },
    {
      id: "n2",
      date: "৩১ আগস্ট ২০২৬",
      title: "২০২৬ সালের পরীক্ষার রুটিন প্রকাশ",
      category: "পরীক্ষা",
      pdfUrl: "#",
    },
    {
      id: "n3",
      date: "২৫ আগস্ট ২০২৬",
      title: "ঈদুল আযহা উপলক্ষে ছুটির বিজ্ঞপ্তি",
      category: "ছুটি",
      pdfUrl: "#",
    },
    {
      id: "n4",
      date: "১৫ আগস্ট ২০২৬",
      title: "বার্ষিক ক্রীড়া প্রতিযোগিতার নোটিশ",
      category: "অনুষ্ঠান",
      pdfUrl: "#",
    },
    {
      id: "n5",
      date: "০১ আগস্ট ২০২৬",
      title: "নতুন শিক্ষার্থীদের ওরিয়েন্টেশন প্রোগ্রাম",
      category: "অনুষ্ঠান",
    },
  ],

  teachers: [
    {
      id: "t1",
      name: "মাওলানা মুহাম্মদ ইউসুফ",
      designation: "সিনিয়র শিক্ষক",
      subject: "তাফসিরুল কুরআন",
      qualification: "দাওরায়ে হাদিস, ঢাকা",
      photo: "https://randomuser.me/api/portraits/men/11.jpg",
      featured: true,
    },
    {
      id: "t2",
      name: "মাওলানা আব্দুর রহমান",
      designation: "বিভাগীয় প্রধান",
      subject: "হাদিস ও ফিকহ",
      qualification: "এম.এ (আরবি), ঢাকা বিশ্ববিদ্যালয়",
      photo: "https://randomuser.me/api/portraits/men/22.jpg",
      featured: true,
    },
    {
      id: "t3",
      name: "মাওলানা সাইফুল ইসলাম",
      designation: "শিক্ষক",
      subject: "আরবি ভাষা ও সাহিত্য",
      qualification: "কামিল (হাদিস)",
      photo: "https://randomuser.me/api/portraits/men/33.jpg",
      featured: true,
    },
    {
      id: "t4",
      name: "মোছাম্মৎ রাহেলা বেগম",
      designation: "শিক্ষিকা",
      subject: "বাংলা ও ইংরেজি",
      qualification: "বি.এড, এম.এ (বাংলা)",
      photo: "https://randomuser.me/api/portraits/women/44.jpg",
      featured: true,
    },
    {
      id: "t5",
      name: "জনাব মোঃ শফিকুল ইসলাম",
      designation: "শিক্ষক",
      subject: "গণিত ও বিজ্ঞান",
      qualification: "বি.এস.সি (অনার্স), বি.এড",
      photo: "https://randomuser.me/api/portraits/men/55.jpg",
      featured: true,
    },
    {
      id: "t6",
      name: "হাফেজ মুহাম্মদ সালেহ",
      designation: "হিফজ বিভাগ প্রধান",
      subject: "কুরআন হিফজ",
      qualification: "হাফেজ, দাওরায়ে হাদিস",
      photo: "https://randomuser.me/api/portraits/men/66.jpg",
      featured: false,
    },
  ],

  testimonials: [
    {
      id: "r1",
      name: "মোঃ আব্দুল করিম",
      reviewerType: "guardian",
      relation: "অভিভাবক",
      classDept: "হিফজ বিভাগ",
      comment:
        "আমার সন্তান এখানে পড়াশোনার পাশাপাশি নৈতিকতা ও ইসলামী মূল্যবোধের শিক্ষা পাচ্ছে। শিক্ষকদের আন্তরিকতা ও নিয়মিত যোগাযোগে আমরা খুবই সন্তুষ্ট।",
      rating: 5,
      date: "আগস্ট ২০২৬",
      photo: "https://randomuser.me/api/portraits/men/71.jpg",
      featured: true,
    },
    {
      id: "r2",
      name: "মুহাম্মদ আব্দুল্লাহ",
      reviewerType: "student",
      classDept: "দাখিল ৯ম শ্রেণি",
      comment:
        "শিক্ষকদের সুন্দর ব্যবহার, পড়াশোনার পরিবেশ এবং সহশিক্ষা কার্যক্রম আমার খুব ভালো লাগে। এখানে পড়াশোনা করতে পেরে আমি গর্বিত।",
      rating: 5,
      date: "জুলাই ২০২৬",
      photo: "https://randomuser.me/api/portraits/men/82.jpg",
      featured: true,
    },
    {
      id: "r3",
      name: "মোসাম্মৎ ফাতেমা বেগম",
      reviewerType: "guardian",
      relation: "অভিভাবক",
      classDept: "নূরানী বিভাগ",
      comment:
        "ছোট বাচ্চাদের প্রতি শিক্ষকদের যত্ন ও মমতা অতুলনীয়। মাদরাসার পরিবেশ অত্যন্ত নিরাপদ ও শিক্ষামুখী।",
      rating: 5,
      date: "জুন ২০২৬",
      featured: true,
    },
    {
      id: "r4",
      name: "মুহাম্মদ রাফি হাসান",
      reviewerType: "alumni",
      classDept: "দাখিল, ২০২৩",
      comment:
        "এই মাদরাসার শিক্ষা আমাকে জীবনের প্রতিটি পদক্ষেপে সাহায্য করছে। এখান থেকে পাস করে বিশ্ববিদ্যালয়ে ভর্তির সুযোগ পেয়েছি।",
      rating: 5,
      date: "মে ২০২৬",
      photo: "https://randomuser.me/api/portraits/men/93.jpg",
      featured: false,
    },
  ],

  gallery: [
    {
      id: "g1",
      type: "photo",
      category: "Campus",
      src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80",
      title: "প্রধান ভবন",
      date: "২০২৬",
    },
    {
      id: "g2",
      type: "photo",
      category: "Classroom",
      src: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600&q=80",
      title: "শ্রেণিকক্ষ",
      date: "২০২৬",
    },
    {
      id: "g3",
      type: "photo",
      category: "Sports",
      src: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&q=80",
      title: "ক্রীড়া প্রতিযোগিতা",
      date: "২০২৬",
    },
    {
      id: "g4",
      type: "photo",
      category: "Quran Competition",
      src: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=600&q=80",
      title: "কুরআন প্রতিযোগিতা",
      date: "২০২৬",
    },
    {
      id: "g5",
      type: "photo",
      category: "Annual Program",
      src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
      title: "বার্ষিক অনুষ্ঠান",
      date: "২০২৬",
    },
    {
      id: "g6",
      type: "photo",
      category: "Prize Giving",
      src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80",
      title: "পুরস্কার বিতরণী",
      date: "২০২৬",
    },
  ],

  events: [
    {
      id: "e1",
      date: "১২",
      month: "SEP",
      title: "বার্ষিক ক্রীড়া প্রতিযোগিতা",
      time: "সকাল ৯:০০",
      location: "মাদরাসা মাঠ",
      description: "শিক্ষার্থীদের মধ্যে ক্রীড়া প্রতিযোগিতা ও পুরস্কার বিতরণ।",
    },
    {
      id: "e2",
      date: "২০",
      month: "SEP",
      title: "অভিভাবক সমাবেশ",
      time: "সকাল ১০:০০",
      location: "মিলনায়তন",
      description: "শিক্ষার্থীদের অগ্রগতি নিয়ে অভিভাবকদের সাথে মতবিনিময়।",
    },
    {
      id: "e3",
      date: "০৫",
      month: "OCT",
      title: "বার্ষিক পরীক্ষা শুরু",
      time: "সকাল ৮:০০",
      location: "নিজ নিজ শ্রেণিকক্ষ",
      description: "২০২৬ শিক্ষাবর্ষের বার্ষিক পরীক্ষা শুরু।",
    },
    {
      id: "e4",
      date: "১৫",
      month: "OCT",
      title: "কুরআন তিলাওয়াত প্রতিযোগিতা",
      time: "বিকেল ৩:০০",
      location: "মসজিদ প্রাঙ্গণ",
      description: "জেলা পর্যায়ের কুরআন তিলাওয়াত প্রতিযোগিতা।",
    },
  ],

  achievements: [
    {
      id: "a1",
      year: "২০২৫",
      title: "জাতীয় কুরআন প্রতিযোগিতায় ১ম স্থান",
      description: "জাতীয় পর্যায়ের হিফজুল কুরআন প্রতিযোগিতায় আমাদের শিক্ষার্থী প্রথম স্থান অর্জন করেছে।",
      icon: "🏆",
    },
    {
      id: "a2",
      year: "২০২৫",
      title: "দাখিল বোর্ড পরীক্ষায় ১০০% পাস",
      description: "দাখিল পরীক্ষায় সকল শিক্ষার্থী কৃতকার্য এবং ৩০% A+ অর্জন।",
      icon: "🥇",
    },
    {
      id: "a3",
      year: "২০২৪",
      title: "শ্রেষ্ঠ মাদরাসা পুরস্কার",
      description: "জেলা প্রশাসন কর্তৃক শ্রেষ্ঠ মাদরাসা পুরস্কারে ভূষিত।",
      icon: "🏅",
    },
    {
      id: "a4",
      year: "২০২৪",
      title: "৫০ জন বৃত্তিপ্রাপ্ত শিক্ষার্থী",
      description: "সরকারি বৃত্তি পরীক্ষায় ৫০ জন শিক্ষার্থী সফলভাবে উত্তীর্ণ।",
      icon: "🎓",
    },
  ],

  downloads: [
    { id: "d1", title: "ভর্তি প্রস্পেক্টাস ২০২৬", fileSize: "2.4 MB", fileType: "PDF", url: "#" },
    { id: "d2", title: "অনলাইন ভর্তি ফরম", fileSize: "1.1 MB", fileType: "PDF", url: "#" },
    { id: "d3", title: "বার্ষিক একাডেমিক ক্যালেন্ডার", fileSize: "0.8 MB", fileType: "PDF", url: "#" },
    { id: "d4", title: "পরীক্ষার রুটিন ২০২৬", fileSize: "0.5 MB", fileType: "PDF", url: "#" },
    { id: "d5", title: "শ্রেণি রুটিন", fileSize: "0.4 MB", fileType: "PDF", url: "#" },
    { id: "d6", title: "ছুটির তালিকা ২০২৬", fileSize: "0.3 MB", fileType: "PDF", url: "#" },
  ],

  facilities: [
    { id: "f1", icon: "🏫", title: "আধুনিক শ্রেণিকক্ষ" },
    { id: "f2", icon: "🛏️", title: "আবাসিক হোস্টেল" },
    { id: "f3", icon: "🍱", title: "মানসম্মত খাবার" },
    { id: "f4", icon: "📚", title: "সমৃদ্ধ লাইব্রেরি" },
    { id: "f5", icon: "🔒", title: "CCTV নিরাপত্তা" },
    { id: "f6", icon: "⚡", title: "২৪ ঘণ্টা বিদ্যুৎ" },
    { id: "f7", icon: "💻", title: "কম্পিউটার ল্যাব" },
    { id: "f8", icon: "⚽", title: "খেলার মাঠ" },
    { id: "f9", icon: "🕌", title: "নামাজের ব্যবস্থা" },
    { id: "f10", icon: "🏥", title: "প্রাথমিক চিকিৎসা" },
  ],

  whyUs: [
    { id: "w1", icon: "🕌", title: "ইসলামী মূল্যবোধ", description: "দীনি ও নৈতিক শিক্ষার সমন্বিত পরিবেশ।" },
    { id: "w2", icon: "📚", title: "মানসম্মত শিক্ষা", description: "আধুনিক ও যুগোপযোগী শিক্ষা ব্যবস্থা।" },
    { id: "w3", icon: "👨‍🏫", title: "অভিজ্ঞ শিক্ষক", description: "দক্ষ ও অভিজ্ঞ শিক্ষকবৃন্দ।" },
    { id: "w4", icon: "🏫", title: "আধুনিক পরিবেশ", description: "নিরাপদ ও শিক্ষাবান্ধব ক্যাম্পাস।" },
    { id: "w5", icon: "⚽", title: "সহশিক্ষা কার্যক্রম", description: "খেলাধুলা, সাংস্কৃতিক ও বিভিন্ন প্রতিযোগিতা।" },
    { id: "w6", icon: "🔒", title: "নিরাপদ আবাসন", description: "শিক্ষার্থীদের জন্য নিরাপদ ও সুশৃঙ্খল পরিবেশ।" },
  ],

  donationPurposes: [
    { id: "dp1", title: "এতিম শিক্ষার্থী", description: "এতিম শিশুদের শিক্ষার ব্যয় বহন" },
    { id: "dp2", title: "দরিদ্র শিক্ষার্থী", description: "দরিদ্র মেধাবী শিক্ষার্থীদের বৃত্তি" },
    { id: "dp3", title: "লিল্লাহ বোর্ডিং", description: "আবাসিক শিক্ষার্থীদের ভরণপোষণ" },
    { id: "dp4", title: "অবকাঠামো", description: "ভবন ও শ্রেণিকক্ষ উন্নয়ন" },
  ],

  sections: {
    hero: true,
    ticker: true,
    quickActions: true,
    statistics: true,
    about: true,
    leadership: true,
    departments: true,
    admission: true,
    facilities: true,
    whyUs: true,
    notice: true,
    result: true,
    teachers: true,
    testimonials: true,
    donation: true,
    gallery: true,
    events: true,
    achievements: true,
    downloads: true,
    contact: true,
  },
};
