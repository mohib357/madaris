export type Language = "bn" | "en" | "ar";

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
  href?: string;
}

export interface Testimonial {
  name: string;
  designation: string;
  institution: string;
  content: string;
  rating: number;
  avatar?: string;
}

export interface PricingTier {
  name: string;
  price: number;
  period: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ModuleItem {
  id: string;
  label: string;
  description: string;
  features: string[];
  icon: string;
  mockupBg: string;
}

export interface Theme {
  id: string;
  name: string;
  description: string;
  primaryColor: string;
  preview: string;
  tag?: string;
}
