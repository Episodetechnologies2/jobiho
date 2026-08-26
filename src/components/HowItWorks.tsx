"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  Compass,
  LayoutList,
  CheckCircle2,
  ArrowRight,
  Calendar,
  PiggyBank,
  Backpack,
} from "lucide-react";

const iconMap = {
  Compass,
  LayoutList,
  CheckCircle2,
  Calendar,
  PiggyBank,
  Backpack,
};

export type HowItWorksStep = {
  iconName: keyof typeof iconMap;
  step: string;
  title: string;
  description: string;
  color: string;
  bgLight: string;
  iconColor: string;
  highlights: string[];
};

const defaultSteps: HowItWorksStep[] = [
  {
    iconName: "Compass",
    step: "01",
    title: "Explore",
    description:
      "Browse our world map or search by destination, region, or travel style. Every destination page contains a full itinerary, quick facts, and curated things to do — so you can picture the trip before committing.",
    color: "from-blue-500 to-[#1565C0]",
    bgLight: "bg-blue-50",
    iconColor: "text-[#1565C0]",
    highlights: ["Interactive world map", "75+ global destinations", "Full day-by-day itineraries"],
  },
  {
    iconName: "Calendar",
    step: "02",
    title: "Customise",
    description:
      "Choose your travel dates, group size, and preferred accommodation level. Our specialists will tailor the package around your schedule, budget, and must-have experiences.",
    color: "from-amber-500 to-orange-500",
    bgLight: "bg-amber-50",
    iconColor: "text-amber-600",
    highlights: ["Flexible departure dates", "Group & solo options", "Add-on activities"],
  },
  {
    iconName: "CheckCircle2",
    step: "03",
    title: "Travel",
    description:
      "Land at your destination and your local guide is already waiting. We handle logistics, transfers, and ground support — you focus entirely on the experience.",
    color: "from-emerald-500 to-green-600",
    bgLight: "bg-emerald-50",
    iconColor: "text-emerald-600",
    highlights: ["Local guide on arrival", "Airport transfers included", "24/7 in-trip support"],
  },
];

type HowItWorksProps = {
  label?: string;
  titleTop?: string;
  titleHighlight?: string;
  titleBottom?: string;
  description?: string;
  steps?: HowItWorksStep[];
  bottomCtaLabel?: string;
  bottomCtaTargetId?: string;
  bottomNote?: string;
};

export default function HowItWorks({
  label = "How It Works",
  titleTop = "Your World Tour in",
  titleHighlight = "3 Simple Steps",
  titleBottom = "",
  description = "From picking a destination on the world map to stepping off the plane — Jobiho handles every detail of your journey.",
  steps = defaultSteps,
  bottomCtaLabel = "Start Planning Your Trip",
  bottomCtaTargetId = "categories",
  bottomNote = "No registration required to explore destinations",
}: HowItWorksProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-[#F8F9FA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <span className="text-[#1565C0]">{titleHighlight}</span>
            {titleBottom ? ` ${titleBottom}` : ""}
          </h2>
          <p className="text-gray-600 font-body text-lg max-w-xl mx-auto">
            {description}
          </p>
        </motion.div>

        {/* Steps */}
        <div ref={ref} className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-24 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-gradient-to-r from-[#1565C0] via-[#FFC107] to-emerald-500 opacity-30" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Step Number Circle */}
                <div className="relative mb-6">
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-shadow duration-300`}
                  >
                    {(() => {
                      const Icon = iconMap[step.iconName];
                      return <Icon className="w-9 h-9 text-white" />;
                    })()}
                  </motion.div>
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white border-2 border-[#FFC107] flex items-center justify-center shadow-sm">
                    <span className="text-xs font-bold text-[#1565C0] font-heading">
                      {step.step}
                    </span>
                  </div>
                </div>

                {/* Content Card */}
                <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 w-full">
                  <h3 className="text-2xl font-bold font-heading text-[#1F2937] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 font-body text-sm leading-relaxed mb-5">
                    {step.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-col gap-2">
                    {step.highlights.map((h, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${step.color}`} />
                        <span className="text-gray-600 font-body">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Arrow between steps (desktop) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-10 -right-4 z-10 items-center justify-center w-8 h-8">
                    <ArrowRight className="w-5 h-5 text-gray-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-14"
        >
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
            <Link
              href="/tours-packages"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#1565C0] hover:bg-[#0D47A1] text-white font-bold font-heading rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 text-base"
            >
              {bottomCtaLabel}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
          <p className="mt-3 text-gray-400 text-sm font-body">
            {bottomNote}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
