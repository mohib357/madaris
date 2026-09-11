import UtilityBar from "@/components/sections/UtilityBar";
import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import TrustSection from "@/components/sections/TrustSection";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import CoreFeatures from "@/components/sections/CoreFeatures";
import ModuleShowcase from "@/components/sections/ModuleShowcase";
import MadrasaFeatures from "@/components/sections/MadrasaFeatures";
import InstitutionWebsite from "@/components/sections/InstitutionWebsite";
import MultiTenant from "@/components/sections/MultiTenant";
import ThemeShowcase from "@/components/sections/ThemeShowcase";
import RolePortals from "@/components/sections/RolePortals";
import AdmissionJourney from "@/components/sections/AdmissionJourney";
import FinanceSection from "@/components/sections/FinanceSection";
import ResultSection from "@/components/sections/ResultSection";
import CommunicationSection from "@/components/sections/CommunicationSection";
import DashboardAnalytics from "@/components/sections/DashboardAnalytics";
import HowItWorks from "@/components/sections/HowItWorks";
import SecuritySection from "@/components/sections/SecuritySection";
import Testimonials from "@/components/sections/Testimonials";
import PricingSection from "@/components/sections/PricingSection";
import EnterpriseCTA from "@/components/sections/EnterpriseCTA";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* 01 — Top Utility Bar */}
      <UtilityBar />

      {/* 02 — Sticky Navbar */}
      <Navbar />

      {/* 03 — Hero */}
      <HeroSection />

      {/* 04 — Trust / Social Proof */}
      <TrustSection />

      {/* 05 — Problem */}
      <ProblemSection />

      {/* 06 — Solution */}
      <SolutionSection />

      {/* 07 — Core Features */}
      <CoreFeatures />

      {/* 08 — Interactive Module Showcase */}
      <ModuleShowcase />

      {/* 09 — Madrasa Exclusive Features */}
      <MadrasaFeatures />

      {/* 10 — Own Institution Website */}
      <InstitutionWebsite />

      {/* 11 — Multi-Tenant Platform */}
      <MultiTenant />

      {/* 12 — Website Themes */}
      <ThemeShowcase />

      {/* 13 — Role-Based Portals */}
      <RolePortals />

      {/* 14 — Online Admission Journey */}
      <AdmissionJourney />

      {/* 15 — Finance & Payment */}
      <FinanceSection />

      {/* 16 — Result & Academic */}
      <ResultSection />

      {/* 17 — Communication */}
      <CommunicationSection />

      {/* 18 — Dashboard & Analytics */}
      <DashboardAnalytics />

      {/* 19 — How It Works */}
      <HowItWorks />

      {/* 20 — Security */}
      <SecuritySection />

      {/* 21 — Testimonials */}
      <Testimonials />

      {/* 22 — Pricing Calculator */}
      <PricingSection />

      {/* 23 — Enterprise CTA */}
      <EnterpriseCTA />

      {/* 24 — FAQ */}
      <FAQSection />

      {/* 25 — Final CTA */}
      <FinalCTA />

      {/* 26 — Footer */}
      <Footer />

      {/* Mobile sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white border-t border-gray-200 p-3 flex gap-3 shadow-2xl">
        <a
          href="https://wa.me/8801XXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-green-600 text-white font-semibold py-3 rounded-xl text-sm"
        >
          WhatsApp
        </a>
        <a
          href="#trial"
          className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white font-bold py-3 rounded-xl text-sm"
        >
          বিনামূল্যে শুরু
        </a>
      </div>
    </main>
  );
}
