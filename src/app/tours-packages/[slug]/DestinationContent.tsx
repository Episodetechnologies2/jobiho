"use client";

import { asset } from "@/lib/basePath";
import { motion } from "framer-motion";
import Link from "next/link";
import type { CSSProperties } from "react";
import { useState } from "react";
import {
  ChevronRight,
  MapPin,
  Clock,
  Globe,
  Thermometer,
  CalendarDays,
  Languages,
  Car,
  Banknote,
  Lightbulb,
  CheckCircle2,
  ArrowRight,
  Phone,
  Camera,
  Utensils,
  Mountain,
  Waves,
  Landmark,
  BookOpen,
  Heart,
  Dumbbell,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";
import type { DestinationPageData } from "@/data/destinations";
import ScrollItinerary from "@/components/ScrollItinerary";

const iconMap: Record<string, LucideIcon> = {
  Camera,
  Utensils,
  Mountain,
  Waves,
  Landmark,
  BookOpen,
  Heart,
  Dumbbell,
  GraduationCap,
  Globe,
  MapPin,
  Lightbulb,
  Phone,
  Car,
  CheckCircle2,
};

function getIcon(name: string): LucideIcon {
  return iconMap[name] || Lightbulb;
}

function withResponsiveDimensions(url: string, width: number, height: number): string {
  try {
    const parsed = new URL(url);
    if (!parsed.hostname.includes("pexels.com")) return url;
    parsed.searchParams.set("auto", "compress");
    parsed.searchParams.set("cs", "tinysrgb");
    parsed.searchParams.set("fit", "crop");
    parsed.searchParams.set("w", String(width));
    parsed.searchParams.set("h", String(height));
    return parsed.toString();
  } catch {
    return url;
  }
}

function getHeroResponsiveSources(url: string): { src: string; srcSet: string } {
  if (!url.startsWith("http")) {
    return { src: asset(url), srcSet: "" };
  }

  const variants: Array<{ w: number; h: number }> = [
    { w: 640, h: 420 },
    { w: 960, h: 560 },
    { w: 1280, h: 720 },
    { w: 1600, h: 860 },
    { w: 1920, h: 980 },
    { w: 2560, h: 1200 },
  ];

  const src = withResponsiveDimensions(url, 1920, 980);
  const srcSet = variants
    .map((variant) => `${withResponsiveDimensions(url, variant.w, variant.h)} ${variant.w}w`)
    .join(", ");

  return { src, srcSet };
}

function toQueryValue(value: string): string {
  return encodeURIComponent(value.trim().toLowerCase());
}

import EnquireModal from "@/components/EnquireModal";

export default function DestinationContent({ data }: { data: DestinationPageData }) {
  const { quickFacts } = data;
  const [hoveredGalleryIndex, setHoveredGalleryIndex] = useState<number | null>(null);
  const [isEnquireModalOpen, setIsEnquireModalOpen] = useState(false);
  const galleryRows = (() => {
    // Vertical expand: keep a single column, expand one row based on hover.
    if (hoveredGalleryIndex === null) return "1fr 1fr 1fr 1fr";
    if (hoveredGalleryIndex === 0) return "3fr 1fr 1fr 1fr";
    if (hoveredGalleryIndex === 1) return "1fr 3fr 1fr 1fr";
    if (hoveredGalleryIndex === 2) return "1fr 1fr 3fr 1fr";
    if (hoveredGalleryIndex === 3) return "1fr 1fr 1fr 3fr";
    return "1fr 1fr 1fr 1fr";
  })();
  const heroImage = getHeroResponsiveSources(data.heroImage);
  const regionQuery = toQueryValue(data.region);
  const countryQuery = toQueryValue(data.country);

  const factItems = [
    quickFacts.capital && { icon: Landmark, label: "Capital", value: quickFacts.capital },
    { icon: Banknote, label: "Currency", value: quickFacts.currency },
    { icon: Thermometer, label: "Climate", value: quickFacts.climate },
    { icon: CalendarDays, label: "Best Season", value: quickFacts.bestSeason },
    { icon: Languages, label: "Languages", value: quickFacts.languages },
    { icon: Clock, label: "Time Zone", value: quickFacts.timeZone },
    quickFacts.drivingSide && { icon: Car, label: "Driving Side", value: quickFacts.drivingSide },
  ].filter(Boolean) as { icon: LucideIcon; label: string; value: string }[];

  return (
    <>
      {/* Hero */}
      <section className="relative h-[56vh] min-h-[420px] md:h-[64vh] lg:h-[72vh] xl:h-[78vh] 2xl:h-[84vh] max-h-[920px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage.src}
            srcSet={heroImage.srcSet || undefined}
            sizes="100vw"
            alt={data.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/20" />
        </div>
        <div className="relative z-10 h-full flex flex-col justify-end max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 }} className="mb-4">
            <Link
              href={`/tours-packages?region=${regionQuery}&country=${countryQuery}#tours-map`}
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 hover:border-[#FFC107]/50 hover:bg-[#FFC107]/10 text-white hover:text-white transition-all text-sm md:text-base px-4 py-2.5 rounded-xl backdrop-blur-sm shadow-[0_8px_24px_rgba(0,0,0,0.25)]"
            >
              <ArrowRight className="w-4 h-4 rotate-180 text-[#FFC107]" />
              Back to Tours Map
            </Link>
          </motion.div>
          <motion.nav initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex items-center gap-2 text-sm mb-4">
            <Link href="/tours-packages#tours-map" className="text-white/60 hover:text-[#FFC107] transition-colors">Tours & Packages</Link>
            <ChevronRight className="w-3 h-3 text-white/30" />
            <Link href={`/tours-packages?region=${regionQuery}#tours-map`} className="text-white/60 hover:text-[#FFC107] transition-colors underline-offset-2 hover:underline">
              {data.region}
            </Link>
            <ChevronRight className="w-3 h-3 text-white/30" />
            <Link href={`/tours-packages?region=${regionQuery}&country=${countryQuery}#tours-map`} className="text-white/60 hover:text-[#FFC107] transition-colors underline-offset-2 hover:underline">
              {data.country}
            </Link>
            <ChevronRight className="w-3 h-3 text-white/30" />
            <span className="text-[#FFC107] font-semibold">{data.name}</span>
          </motion.nav>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#1565C0]/80 backdrop-blur-sm rounded-full text-white text-xs font-semibold">
                <MapPin className="w-3 h-3" /> {data.country}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-xs font-semibold">
                <Clock className="w-3 h-3" /> {data.itinerary.length} Days Tour
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-3">
              {data.name}
            </h1>
            <p className="text-white/70 text-lg max-w-2xl">{data.tagline}</p>
          </motion.div>
        </div>
      </section>

      {/* Quick Facts Bar */}
      <section className="bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {factItems.map((fact) => (
              <motion.div
                key={fact.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group flex items-center gap-4 rounded-2xl border border-[#FFC107]/55 bg-white p-5 transition-all duration-300 hover:bg-[#FFF9E8] hover:shadow-sm"
              >
                <div className="w-11 h-11 flex items-center justify-center flex-shrink-0">
                  <fact.icon className="w-5 h-5 text-[#FFC107] transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div className="min-w-0">
                  <p className="text-[12px] text-[#1F2937] font-bold font-heading mb-1">{fact.label}</p>
                  <p className="text-sm text-gray-600 font-body leading-relaxed break-words">{fact.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-[#F8F9FA] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-3">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-0.5 bg-[#FFC107]" />
                <span className="text-[#1565C0] text-sm font-semibold font-heading uppercase tracking-wider">
                  About {data.name}
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold font-heading text-[#1F2937] mb-6">
                Everything You Need to Know
              </h2>
              {data.overview.split("\n\n").map((para, i) => (
                <p key={i} className="text-gray-600 font-body leading-relaxed mb-4 text-lg">{para}</p>
              ))}
            </div>
            <div className="lg:col-span-2">
              <div
                className="image-wrapper min-h-[520px] h-full overflow-hidden"
                style={
                  {
                    gridTemplateColumns: "1fr",
                    gridTemplateRows: galleryRows,
                    aspectRatio: "auto",
                  } as CSSProperties
                }
              >
                {data.gallery.slice(0, 4).map((img, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="image-card"
                    style={
                      {
                        "--bg-img": `url(${asset(img)})`,
                      } as CSSProperties
                    }
                    onMouseEnter={() => setHoveredGalleryIndex(i)}
                    onMouseLeave={() => setHoveredGalleryIndex(null)}
                    aria-label={`${data.name} gallery ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Scroll Itinerary */}
      <ScrollItinerary itinerary={data.itinerary} destinationName={data.name} />

      {/* Things To Do */}
      <section className="bg-[#F8F9FA] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-0.5 bg-[#FFC107]" />
              <span className="text-[#1565C0] text-sm font-semibold font-heading uppercase tracking-wider">
                Activities
              </span>
              <div className="w-8 h-0.5 bg-[#FFC107]" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold font-heading text-[#1F2937]">
              Top Things to Do in <span className="text-[#1565C0]">{data.name}</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.thingsToDo.map((thing, i) => {
              const Icon = getIcon(thing.iconName);
              return (
                <motion.div key={thing.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-xl hover:border-[#1565C0]/20 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-[#1565C0]/10 flex items-center justify-center mb-4 group-hover:bg-[#1565C0] transition-colors">
                    <Icon className="w-6 h-6 text-[#1565C0] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold font-heading text-[#1F2937] mb-2">{thing.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{thing.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-0.5 bg-[#FFC107]" />
                <span className="text-[#1565C0] text-sm font-semibold font-heading uppercase tracking-wider">
                  Travel Tips
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold font-heading text-[#1F2937] mb-3">
                Essential Tips for <span className="text-[#1565C0]">{data.name}</span>
              </h2>
              <p className="text-gray-600 font-body text-lg mb-8">Know before you go — practical advice to make your trip smooth and memorable.</p>
              <div className="space-y-4">
                {data.travelTips.map((tip, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-[#F8F9FA] border border-gray-100">
                    <div className="w-7 h-7 rounded-full bg-[#FFC107] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[11px] font-bold text-gray-900">{i + 1}</span>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{tip}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Card */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="sticky top-28 bg-gradient-to-br from-[#1565C0] to-[#0D47A1] rounded-2xl p-8 text-white overflow-hidden relative">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold font-heading mb-2">Ready to Explore {data.name}?</h3>
                <p className="text-white/70 text-sm mb-6">Share your ideal trip details and our team will customize the perfect itinerary for you.</p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-white/50 text-xs">Call us</p>
                      <p className="text-sm font-semibold">+91 98765 43210</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-white/50 text-xs">Tour Duration</p>
                      <p className="text-sm font-semibold">{data.itinerary.length - 1} Nights / {data.itinerary.length} Days</p>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => setIsEnquireModalOpen(true)}
                  className="w-full bg-[#FFC107] text-[#1F2937] font-bold font-heading py-3.5 rounded-xl hover:bg-[#FF8F00] transition-colors flex items-center justify-center gap-2 text-sm shadow-lg active:scale-[0.98]"
                >
                  Enquire Now <ArrowRight className="w-4 h-4" />
                </button>
                <Link href="/tours-packages" className="block text-center mt-3 text-white/50 text-xs hover:text-white/80 transition-colors">
                  ← Back to All Packages
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enquire Modal Dialog */}
      <EnquireModal
        isOpen={isEnquireModalOpen}
        onClose={() => setIsEnquireModalOpen(false)}
        packageDetails={{
          id: data.id,
          name: data.name,
          slug: data.slug,
          country: data.country,
          region: data.region,
          duration: `${data.itinerary.length - 1} Nights / ${data.itinerary.length} Days`,
          price: data.price,
          heroImage: data.heroImage
        }}
      />
    </>
  );
}
