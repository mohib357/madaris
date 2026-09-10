// =====================================================
// Dikkhaloy — Institution Type Definitions
// =====================================================

export type Language = "bn" | "en" | "ar";

export interface ThemeConfig {
  primaryColor: string;       // HEX e.g. "#1a6b3c"
  primaryDark: string;
  primaryLight: string;
  primaryForeground: string;  // text on primary bg
}

export interface SocialLinks {
  facebook?: string;
  youtube?: string;
  whatsapp?: string;
  twitter?: string;
  instagram?: string;
}

export interface ContactInfo {
  phone: string[];
  email: string;
  address: string;
  officeHours: string;
  googleMapEmbedUrl?: string;
  googleMapLink?: string;
}

export interface HeroBanner {
  heading: string;
  subtitle: string;
  description: string;
  backgroundImage: string;
  ctaButtons: { label: string; href: string; variant: "primary" | "outline" }[];
}

export interface Statistic {
  value: string;
  label: string;
  icon: string;
}

export interface Department {
  id: string;
  icon: string;
  name: string;
  description: string;
  details?: string;
}

export interface Leader {
  name: string;
  designation: string;
  photo: string;
  message: string;
}

export interface Notice {
  id: string;
  date: string;
  title: string;
  category: string;
  pdfUrl?: string;
}

export interface Teacher {
  id: string;
  name: string;
  designation: string;
  subject: string;
  qualification: string;
  photo: string;
  featured: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  reviewerType: "guardian" | "student" | "alumni";
  relation?: string;
  classDept?: string;
  comment: string;
  rating: number;
  date: string;
  photo?: string;
  featured: boolean;
}

export interface GalleryItem {
  id: string;
  type: "photo" | "video";
  category: string;
  src: string;
  thumbnail?: string;
  title: string;
  date: string;
}

export interface Event {
  id: string;
  date: string;
  month: string;
  title: string;
  time: string;
  location: string;
  description: string;
}

export interface Achievement {
  id: string;
  year: string;
  title: string;
  description: string;
  icon: string;
}

export interface DownloadItem {
  id: string;
  title: string;
  fileSize: string;
  fileType: string;
  url: string;
}

export interface Facility {
  id: string;
  icon: string;
  title: string;
}

export interface WhyUsPoint {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface DonationPurpose {
  id: string;
  title: string;
  description: string;
}

export interface InstitutionConfig {
  // Identity
  slug: string;
  name: string;
  nameEn: string;
  nameAr?: string;
  tagline: string;
  logo: string;
  favicon?: string;
  establishedYear: string;

  // Theme
  theme: ThemeConfig;

  // SEO
  seoDescription: string;
  seoKeywords: string[];
  ogImage: string;

  // Contact
  contact: ContactInfo;
  social: SocialLinks;

  // Content
  heroBanner: HeroBanner;
  emergencyNotice?: string;
  statistics: Statistic[];
  aboutText: string;
  aboutImage: string;
  leaders: Leader[];
  departments: Department[];
  notices: Notice[];
  teachers: Teacher[];
  testimonials: Testimonial[];
  gallery: GalleryItem[];
  events: Event[];
  achievements: Achievement[];
  downloads: DownloadItem[];
  facilities: Facility[];
  whyUs: WhyUsPoint[];
  donationPurposes: DonationPurpose[];

  // Section visibility
  sections: {
    hero: boolean;
    ticker: boolean;
    quickActions: boolean;
    statistics: boolean;
    about: boolean;
    leadership: boolean;
    departments: boolean;
    admission: boolean;
    facilities: boolean;
    whyUs: boolean;
    notice: boolean;
    result: boolean;
    teachers: boolean;
    testimonials: boolean;
    donation: boolean;
    gallery: boolean;
    events: boolean;
    achievements: boolean;
    downloads: boolean;
    contact: boolean;
  };
}
