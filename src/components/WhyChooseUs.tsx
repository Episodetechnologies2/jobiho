"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  Search,
  ShieldCheck,
  Users2,
  BadgePercent,
  Zap,
  Compass,
  Headset,
  Sparkles,
  BarChart3,
} from "lucide-react";

const iconMap = {
  Search,
  ShieldCheck,
  Users2,
  BadgePercent,
  Zap,
  Compass,
  Headset,
  Sparkles,
  BarChart3,
};

export type WhyChooseUsFeature = {
  iconName: keyof typeof iconMap;
  title: string;
  description: string;
  color: string;
  bgLight: string;
  iconColor: string;
};

const defaultFeatures: WhyChooseUsFeature[] = [
  {
    iconName: "Compass",
    title: "Expert-Crafted Itineraries",
    description:
      "Every tour package is designed by destination specialists who've walked the routes. Expect day-by-day itineraries that balance must-sees with genuine local discovery.",
    color: "from-blue-500 to-[#1565C0]",
    bgLight: "bg-blue-50",
    iconColor: "text-[#1565C0]",
  },
  {
    iconName: "ShieldCheck",
    title: "Verified Local Partners",
    description:
      "Our ground operators, guides, and accommodation providers are personally vetted. When you travel with Jobiho, every handshake in the chain has been quality-checked.",
    color: "from-emerald-500 to-green-600",
    bgLight: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    iconName: "Sparkles",
    title: "Flexible & Customisable",
    description:
      "No two travellers are the same. Adjust travel dates, group sizes, accommodation grades, and add-on activities to shape a tour that fits your schedule and budget.",
    color: "from-violet-500 to-purple-600",
    bgLight: "bg-violet-50",
    iconColor: "text-violet-600",
  },
  {
    iconName: "BadgePercent",
    title: "Best Price Guarantee",
    description:
      "Direct partnerships with operators worldwide let us offer competitive pricing without hidden markups — so you get more journey for every dollar spent.",
    color: "from-amber-500 to-orange-500",
    bgLight: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    iconName: "Headset",
    title: "24/7 Travel Support",
    description:
      "From your first enquiry to the moment you return home, our travel team is available around the clock to assist with changes, emergencies, or local recommendations.",
    color: "from-pink-500 to-rose-500",
    bgLight: "bg-pink-50",
    iconColor: "text-pink-600",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

type WhyChooseUsProps = {
  label?: string;
  titleTop?: string;
  titleHighlight?: string;
  titleBottom?: string;
  description?: string;
  features?: WhyChooseUsFeature[];
  ctaTitle?: string;
  ctaDescription?: string;
  primaryCtaLabel?: string;
  primaryCtaTargetId?: string;
  secondaryCtaLabel?: string;
  secondaryCtaTargetId?: string;
};

export default function WhyChooseUs({
  label = "Why Travel With Jobiho",
  titleTop = "The Smarter Way to",
  titleHighlight = "See",
  titleBottom = "the World",
  description = "We handle the complexity so you can focus on the adventure. From the first search to the last stamp in your passport, Jobiho is built around you.",
  features = defaultFeatures,
  ctaTitle = "Ready to Start Your Journey?",
  ctaDescription = "Join 100,000+ travellers who've explored the world through Jobiho's curated tour packages.",
  primaryCtaLabel = "Browse Tour Packages",
  primaryCtaTargetId = "categories",
  secondaryCtaLabel = "Become a Partner",
  secondaryCtaTargetId = "partners",
}: WhyChooseUsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1565C0]/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FFC107]/10 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-0.5 bg-[#FFC107]" />
            <span className="text-[#1565C0] text-sm font-semibold font-heading uppercase tracking-wider">
              {label}
            </span>
            <div className="w-8 h-0.5 bg-[#FFC107]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold font-heading text-[#1F2937] mb-4">
            {titleTop}{" "}
            <span className="text-[#1565C0]">{titleHighlight}</span>{" "}
            {titleBottom}
          </h2>
          <p className="text-gray-600 font-body text-lg max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`group p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 bg-white ${
                i === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl ${feature.bgLight} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-200`}>
                {(() => {
                  const Icon = iconMap[feature.iconName];
                  return <Icon className={`w-7 h-7 ${feature.iconColor}`} />;
                })()}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold font-heading text-[#1F2937] mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-500 font-body text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Bottom accent line */}
              <div className={`mt-5 h-0.5 w-0 group-hover:w-full rounded-full bg-gradient-to-r ${feature.color} transition-all duration-500`} />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 rounded-3xl bg-gradient-to-r from-[#1565C0] to-[#0D47A1] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl"
        >
          <div>
            <h3 className="text-2xl md:text-3xl font-bold font-heading text-white mb-2">
              {ctaTitle}
            </h3>
            <p className="text-blue-200 font-body">
              {ctaDescription}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/tours-packages"
                className="inline-block px-7 py-3.5 bg-[#FFC107] hover:bg-[#FF8F00] text-[#1F2937] font-bold font-heading rounded-xl shadow-lg transition-all duration-200 whitespace-nowrap"
              >
                {primaryCtaLabel}
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/partners"
                className="inline-block px-7 py-3.5 bg-white/15 hover:bg-white/25 border border-white/30 text-white font-semibold font-heading rounded-xl transition-all duration-200 whitespace-nowrap"
              >
                {secondaryCtaLabel}
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
