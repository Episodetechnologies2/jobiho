import Navbar from "@/components/Navbar";
import AboutPageHero from "@/components/AboutPageHero";
import About from "@/components/About";
import { type CategoryCard } from "@/components/Categories";
import { type DestinationCard } from "@/components/Destinations";
import { type WhyChooseUsFeature } from "@/components/WhyChooseUs";
import { type HowItWorksStep } from "@/components/HowItWorks";
import { type TestimonialItem, type TrustStat } from "@/components/Testimonials";
import { type PartnerBenefit } from "@/components/Partners";
import PartnersExperienceLayout from "@/components/PartnersExperienceLayout";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const partnerTypes: CategoryCard[] = [
  {
    iconName: "Globe2",
    title: "Tour Operators",
    description: "Curated multi-day itineraries, transfers, and guided highlight routes.",
    color: "from-blue-500 to-[#1565C0]",
    bgLight: "bg-blue-50",
    iconBg: "bg-blue-100",
    iconColor: "text-[#1565C0]",
    count: "Itinerary builders",
    image:
      "/images/offer-1.jpg",
  },
  {
    iconName: "Building2",
    title: "Hotels & Resorts",
    description: "Premium stays, villas, and properties designed for comfort-first travel.",
    color: "from-amber-500 to-orange-500",
    bgLight: "bg-amber-50",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    count: "Stays & villas",
    image:
      "/images/offer-2.jpg",
  },
  {
    iconName: "MapPin",
    title: "Local Guides",
    description: "City walks, heritage trails, hidden spots, and culture-first storytelling.",
    color: "from-emerald-500 to-green-600",
    bgLight: "bg-emerald-50",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    count: "Local experts",
    image:
      "/images/offer-3.jpg",
  },
  {
    iconName: "Users2",
    title: "Experience Hosts",
    description: "Activities, workshops, food trails, and experiences travelers remember.",
    color: "from-purple-500 to-violet-500",
    bgLight: "bg-purple-50",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    count: "Experience makers",
    image:
      "/images/offer-4.jpg",
  },
];

const whyPartner: DestinationCard[] = [
  {
    name: "Increase bookings",
    state: "More qualified demand",
    description: "Reach travelers already planning and ready to book premium experiences.",
    image:
      "/images/about-1.jpg",
    rating: 4.9,
    reviews: 2840,
    experiences: 45,
    tag: "Bookings",
    tagColor: "bg-blue-100 text-blue-700",
  },
  {
    name: "Reach global audience",
    state: "Discovery-first traffic",
    description: "Get visibility where travelers explore by vibe, destination, and season.",
    image:
      "/images/about-2.jpg",
    rating: 4.8,
    reviews: 1920,
    experiences: 60,
    tag: "Visibility",
    tagColor: "bg-amber-100 text-amber-700",
  },
  {
    name: "Easy management",
    state: "Less admin",
    description: "Manage listings, bookings, and availability with a clean partner workflow.",
    image:
      "/images/about-3.jpg",
    rating: 4.9,
    reviews: 4180,
    experiences: 98,
    tag: "Efficiency",
    tagColor: "bg-purple-100 text-purple-700",
  },
];

const platformFeatures: WhyChooseUsFeature[] = [
  {
    iconName: "BarChart3",
    title: "Analytics dashboard",
    description: "Track views, bookings, and conversion signals to improve performance.",
    color: "from-blue-500 to-[#1565C0]",
    bgLight: "bg-blue-50",
    iconColor: "text-[#1565C0]",
  },
  {
    iconName: "Zap",
    title: "Booking system",
    description: "Live availability, confirmations, and a simple workflow for your team.",
    color: "from-emerald-500 to-green-600",
    bgLight: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    iconName: "Search",
    title: "Marketing tools",
    description: "Discovery placement, curated positioning, and seasonal spotlight opportunities.",
    color: "from-amber-500 to-orange-500",
    bgLight: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    iconName: "ShieldCheck",
    title: "Trust signals",
    description: "Verified presence, clarity on inclusions, and reviews that help travelers choose.",
    color: "from-purple-500 to-violet-500",
    bgLight: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    iconName: "Headset",
    title: "Partner support",
    description: "Onboarding, listing guidance, and help resolving booking questions.",
    color: "from-pink-500 to-rose-500",
    bgLight: "bg-pink-50",
    iconColor: "text-pink-600",
  },
];

const partnerSteps: HowItWorksStep[] = [
  {
    iconName: "Compass",
    step: "01",
    title: "Onboard",
    description:
      "Share your brand and offerings. We help you position listings for discovery and trust.",
    color: "from-blue-500 to-[#1565C0]",
    bgLight: "bg-blue-50",
    iconColor: "text-[#1565C0]",
    highlights: ["Profile setup", "Quality checks", "Listing guidance"],
  },
  {
    iconName: "LayoutList",
    step: "02",
    title: "Publish",
    description:
      "Add availability, inclusions, and pricing. Your listings appear in discovery flows.",
    color: "from-amber-500 to-orange-500",
    bgLight: "bg-amber-50",
    iconColor: "text-amber-600",
    highlights: ["Availability", "Inclusions", "Pricing clarity"],
  },
  {
    iconName: "CheckCircle2",
    step: "03",
    title: "Grow",
    description:
      "Track performance and optimize. We bring discovery traffic-your service brings loyalty.",
    color: "from-emerald-500 to-green-600",
    bgLight: "bg-emerald-50",
    iconColor: "text-emerald-600",
    highlights: ["Analytics", "Marketing tools", "Support"],
  },
];

const partnerTestimonials: TestimonialItem[] = [
  {
    name: "10K+ experiences listed",
    role: "Inventory breadth",
    avatar: "/images/user-7.jpg",
    rating: 5,
    text: "From quick city experiences to multi-day tours-partners list across categories and destinations.",
    experience: "Marketplace depth",
    date: "Updated monthly",
  },
  {
    name: "100K+ users reached",
    role: "Discovery-first audience",
    avatar: "/images/user-5.jpg",
    rating: 5,
    text: "Travelers discover partners by vibe, season, and location-helping quality listings stand out.",
    experience: "Reach",
    date: "Last 12 months",
  },
  {
    name: "98% satisfaction",
    role: "Quality outcomes",
    avatar: "/images/user-6.jpg",
    rating: 5,
    text: "Clear inclusions and trusted operators lead to better expectations-and better reviews.",
    experience: "Trust",
    date: "Rolling average",
  },
];

const partnerTrustStats: TrustStat[] = [
  { value: "10K+", label: "Experiences listed" },
  { value: "100K+", label: "Users reached" },
  { value: "98%", label: "Satisfaction" },
  { value: "Fast", label: "Onboarding support" },
];

const partnerBenefits: PartnerBenefit[] = [
  {
    iconName: "Globe2",
    title: "Visibility",
    description: "Reach travelers actively looking for experiences like yours.",
    color: "text-[#1565C0]",
    bg: "bg-blue-50",
  },
  {
    iconName: "TrendingUp",
    title: "Growth",
    description: "Scale bookings with a marketplace built for modern exploration.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    iconName: "PiggyBank",
    title: "Efficiency",
    description: "Manage listings, bookings, and customers seamlessly.",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    iconName: "BarChart3",
    title: "Trust",
    description: "Build credibility with verified presence and curated positioning.",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
];

export default function PartnersPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <AboutPageHero
        titleStart="Our"
        titleHighlight="Partners"
        titleEnd=""
        description="Collaborating with world-class operators, hotels, guides, and experience hosts to deliver extraordinary travel."
        backgroundImage="/images/hero-partners.jpg"
      />
      <About
        sectionLabel="Partners"
        headingTop="Build travel"
        headingHighlight="together"
        headingBottom="with Jobiho"
        paragraph1="Jobiho collaborates with experience operators, travel companies, hospitality providers, and lifestyle businesses worldwide."
        paragraph2="Our goal is simple: help partners grow with discovery-first traffic, quality-focused positioning, and tools that make listings and bookings easy."
        images={[
          {
            src: "/images/city-1.jpg",
            alt: "City partner growth",
            className: "col-span-2 row-span-2",
          },
          {
            src: "/images/city-2.jpg",
            alt: "Luxury stays partners",
            className: "",
          },
          {
            src: "/images/city-3.jpg",
            alt: "Food experiences partners",
            className: "",
          },
          {
            src: "/images/city-4.jpg",
            alt: "Adventure operators",
            className: "",
          },
          {
            src: "/images/city-5.jpg",
            alt: "Beach destinations partners",
            className: "",
          },
          {
            src: "/images/city-6.jpg",
            alt: "Mountains guides partners",
            className: "",
          },
        ]}
        highlights={[
          { iconName: "Globe", text: "Discovery-first visibility for premium offerings" },
          { iconName: "TrendingUp", text: "Tools designed to increase bookings" },
          { iconName: "ShieldCheck", text: "Trust-building positioning for quality partners" },
          { iconName: "Headset", text: "Support and onboarding from day one" },
        ]}
        primaryCtaLabel="See Partner Types"
        primaryCtaTargetId="categories"
        secondaryCtaLabel="Platform Features"
        secondaryCtaTargetId="why-us"
      />
      <PartnersExperienceLayout
        partnerTypes={partnerTypes}
        whyPartner={whyPartner}
        features={platformFeatures}
        steps={partnerSteps}
        benefits={partnerBenefits}
        testimonials={partnerTestimonials}
        trustStats={partnerTrustStats}
      />
      <Newsletter
        backgroundImageUrl="/images/banner-3.jpg"
        badgeText="Partner updates & feature launches"
        headlineTop="Get partner"
        headlineHighlight="growth"
        headlineBottom="tips"
        description="Subscribe for platform features, marketplace insights, and seasonal demand trends."
        buttonLabel="Send Me Updates"
        socialProofText="Join 10,000+ operators and hosts growing with Jobiho"
      />
      <Footer />
    </main>
  );
}

