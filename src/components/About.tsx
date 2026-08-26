"use client";

import { asset } from "@/lib/basePath";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  Globe,
  Sparkles,
  Users,
  MapPin,
  Calendar,
  TrendingUp,
  ShieldCheck,
  Headset,
} from "lucide-react";

const iconMap = {
  Globe,
  Users,
  Sparkles,
  CheckCircle2,
  MapPin,
  Calendar,
  TrendingUp,
  ShieldCheck,
  Headset,
};

export type AboutHighlight = {
  iconName: keyof typeof iconMap;
  text: string;
};

export type AboutImage = {
  src: string;
  alt: string;
  className: string;
};

type AboutProps = {
  sectionLabel?: string;
  headingTop?: string;
  headingHighlight?: string;
  headingBottom?: string;
  paragraph1?: string;
  paragraph2?: string;
  highlights?: AboutHighlight[];
  images?: AboutImage[];
  primaryCtaLabel?: string;
  primaryCtaTargetId?: string;
  secondaryCtaLabel?: string;
  secondaryCtaTargetId?: string;
};

const defaultHighlights: AboutHighlight[] = [
  { iconName: "Globe", text: "50+ destinations across India and beyond" },
  { iconName: "Users", text: "100,000+ happy travelers and counting" },
  { iconName: "Sparkles", text: "500+ curated experience operators" },
  { iconName: "CheckCircle2", text: "Seamless booking and trusted payments" },
];

const defaultImages: AboutImage[] = [
  {
    src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80",
    alt: "Mountain trekking adventure",
    className: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400&q=80",
    alt: "Beach travel experience",
    className: "",
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80",
    alt: "Fine dining experience",
    className: "",
  },
  {
    src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&q=80",
    alt: "Resort wellness",
    className: "",
  },
  {
    src: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&q=80",
    alt: "Cultural experience",
    className: "",
  },
  {
    src: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&q=80",
    alt: "Hiking outdoor",
    className: "",
  },
];

export default function About({
  sectionLabel = "About Jobiho",
  headingTop = "One Platform for",
  headingHighlight = "All Your",
  headingBottom = "Experiences",
  paragraph1 = "Jobiho is a next-generation experience marketplace integrating travel, adventure, leisure, dining, and lifestyle experiences into one unified discovery platform.",
  paragraph2 = "Our philosophy “Whatever There Is” reflects Jobiho’s mission to provide the widest spectrum of experiences worldwide — enabling users to discover, plan, and book seamlessly. From mountain treks to gourmet dining, from wellness retreats to cultural immersions, we curate experiences that create lasting memories.",
  highlights = defaultHighlights,
  images = defaultImages,
  primaryCtaLabel = "Explore Experiences",
  primaryCtaTargetId = "categories",
  secondaryCtaLabel = "Become a Partner",
  secondaryCtaTargetId = "partners",
}: AboutProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F8F9FA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Collage */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="grid grid-cols-3 grid-rows-3 gap-3 h-[460px]">
              <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={asset(images[0]?.src ?? defaultImages[0].src)}
                  alt={images[0]?.alt ?? defaultImages[0].alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={asset(images[1]?.src ?? defaultImages[1].src)}
                  alt={images[1]?.alt ?? defaultImages[1].alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={asset(images[2]?.src ?? defaultImages[2].src)}
                  alt={images[2]?.alt ?? defaultImages[2].alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={asset(images[3]?.src ?? defaultImages[3].src)}
                  alt={images[3]?.alt ?? defaultImages[3].alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={asset(images[4]?.src ?? defaultImages[4].src)}
                  alt={images[4]?.alt ?? defaultImages[4].alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={asset(images[5]?.src ?? defaultImages[5].src)}
                  alt={images[5]?.alt ?? defaultImages[5].alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 border border-gray-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#FFC107]/20 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-[#FFC107]" />
                </div>
                <div>
                  <div className="text-xl font-bold font-heading text-[#1F2937]">4.9 / 5</div>
                  <div className="text-xs text-gray-500 font-body">Average Rating</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            {/* Section label */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-0.5 bg-[#FFC107]" />
              <span className="text-[#1565C0] text-sm font-semibold font-heading uppercase tracking-wider">
                {sectionLabel}
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold font-heading text-[#1F2937] leading-tight mb-6">
              {headingTop}{" "}
              <span className="text-[#1565C0]">{headingHighlight}</span>{" "}
              {headingBottom}
            </h2>

            <p className="text-gray-600 font-body text-lg leading-relaxed mb-6">
              {paragraph1}
            </p>

            <p className="text-gray-600 font-body leading-relaxed mb-8">
              {paragraph2}
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm border border-gray-100"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#1565C0]/10 flex items-center justify-center shrink-0">
                    {(() => {
                      const Icon = iconMap[item.iconName];
                      return <Icon className="w-4 h-4 text-[#1565C0]" />;
                    })()}
                  </div>
                  <span className="text-sm font-medium text-gray-700 font-body">{item.text}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/tours-packages"
                  className="inline-block px-6 py-3 bg-[#1565C0] hover:bg-[#0D47A1] text-white font-semibold font-heading rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  {primaryCtaLabel}
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/partners"
                  className="inline-block px-6 py-3 border-2 border-[#1565C0] text-[#1565C0] hover:bg-[#1565C0]/5 font-semibold font-heading rounded-xl transition-all duration-200"
                >
                  {secondaryCtaLabel}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
