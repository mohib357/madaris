import type { Metadata } from "next";
import { mockInstitution } from "@/data/mockInstitution";
import { applyTheme } from "@/lib/theme";

// ── Layout components ──
import UtilityBar from "@/components/UtilityBar";
import Navbar from "@/components/Navbar";
import NoticeTicker from "@/components/NoticeTicker";
import Footer from "@/components/Footer";

// ── Section components ──
import HeroBanner from "@/components/HeroBanner";
import QuickActions from "@/components/QuickActions";
import Statistics from "@/components/Statistics";
import AboutInstitution from "@/components/AboutInstitution";
import Leadership from "@/components/Leadership";
import Departments from "@/components/Departments";
import AdmissionSection from "@/components/AdmissionSection";
import Facilities from "@/components/Facilities";
import WhyChooseUs from "@/components/WhyChooseUs";
import NoticeResult from "@/components/NoticeResult";
import Teachers from "@/components/Teachers";
import Testimonials from "@/components/Testimonials";
import Donation from "@/components/Donation";
import Gallery from "@/components/Gallery";
import Events from "@/components/Events";
import Achievements from "@/components/Achievements";
import Downloads from "@/components/Downloads";
import ContactSection from "@/components/ContactSection";

// ── Dynamic SEO metadata ──
export async function generateMetadata(): Promise<Metadata> {
  const inst = mockInstitution;
  return {
    metadataBase: new URL("https://dikkhaloy.com"),
    title: `${inst.name} | Dikkhaloy`,
    description: inst.seoDescription,
    keywords: inst.seoKeywords,
    openGraph: {
      title: inst.name,
      description: inst.seoDescription,
      images: [{ url: inst.ogImage, width: 1200, height: 630 }],
      type: "website",
      locale: "bn_BD",
    },
    twitter: {
      card: "summary_large_image",
      title: inst.name,
      description: inst.seoDescription,
      images: [inst.ogImage],
    },
    icons: inst.favicon ? { icon: inst.favicon } : undefined,
  };
}

// ── Page ──
export default function InstitutionLandingPage() {
  const inst = mockInstitution;
  const s = inst.sections;

  // CSS custom properties injected on the root element
  const themeVars = applyTheme(inst.theme) as React.CSSProperties;

  return (
    <div style={themeVars}>
      {/* ── Top Utility Bar ── */}
      <UtilityBar contact={inst.contact} />

      {/* ── Sticky Navbar ── */}
      <Navbar institutionName={inst.name} logo={inst.logo} />

      {/* ── Emergency Notice Ticker ── */}
      {s.ticker && inst.emergencyNotice && (
        <NoticeTicker message={inst.emergencyNotice} />
      )}

      <main id="main-content">
        {/* ── Hero Banner ── */}
        {s.hero && (
          <HeroBanner hero={inst.heroBanner} institutionName={inst.name} />
        )}

        {/* ── Quick Actions ── */}
        {s.quickActions && <QuickActions />}

        {/* ── Statistics ── */}
        {s.statistics && <Statistics statistics={inst.statistics} />}

        {/* ── About Institution ── */}
        {s.about && (
          <AboutInstitution
            aboutText={inst.aboutText}
            aboutImage={inst.aboutImage}
            establishedYear={inst.establishedYear}
            institutionName={inst.name}
          />
        )}

        {/* ── Leadership Messages ── */}
        {s.leadership && <Leadership leaders={inst.leaders} />}

        {/* ── Academic Departments ── */}
        {s.departments && <Departments departments={inst.departments} />}

        {/* ── Admission Section ── */}
        {s.admission && <AdmissionSection />}

        {/* ── Facilities ── */}
        {s.facilities && <Facilities facilities={inst.facilities} />}

        {/* ── Why Choose Us ── */}
        {s.whyUs && (
          <WhyChooseUs points={inst.whyUs} institutionName={inst.name} />
        )}

        {/* ── Notice Board + Result Search ── */}
        {(s.notice || s.result) && <NoticeResult notices={inst.notices} />}

        {/* ── Teachers ── */}
        {s.teachers && <Teachers teachers={inst.teachers} />}

        {/* ── Testimonials ── */}
        {s.testimonials && (
          <Testimonials testimonials={inst.testimonials} />
        )}

        {/* ── Donation / Lillah Fund ── */}
        {s.donation && <Donation purposes={inst.donationPurposes} />}

        {/* ── Gallery ── */}
        {s.gallery && <Gallery gallery={inst.gallery} />}

        {/* ── Events ── */}
        {s.events && <Events events={inst.events} />}

        {/* ── Achievements ── */}
        {s.achievements && <Achievements achievements={inst.achievements} />}

        {/* ── Download Center ── */}
        {s.downloads && <Downloads downloads={inst.downloads} />}

        {/* ── Contact + Map ── */}
        {s.contact && (
          <ContactSection contact={inst.contact} social={inst.social} />
        )}
      </main>

      {/* ── Footer ── */}
      <Footer institution={inst} />

      {/* ── Skip to content link (accessibility) ── */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:rounded-lg focus:text-white focus:text-sm focus:font-medium"
        style={{ backgroundColor: "var(--color-primary)" }}
      >
        মূল বিষয়বস্তুতে যান
      </a>
    </div>
  );
}
