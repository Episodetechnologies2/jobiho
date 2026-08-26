"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  TrendingUp,
  Globe2,
  PiggyBank,
  BarChart3,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const iconMap = {
  Globe2,
  TrendingUp,
  PiggyBank,
  BarChart3,
};

export type PartnerBenefit = {
  iconName: keyof typeof iconMap;
  title: string;
  description: string;
  color: string;
  bg: string;
};

const defaultBenefits: PartnerBenefit[] = [
  {
    iconName: "Globe2",
    title: "Global Digital Visibility",
    description:
      "Showcase your experiences to a worldwide audience of engaged travelers actively seeking unique activities.",
    color: "text-[#1565C0]",
    bg: "bg-blue-50",
  },
  {
    iconName: "TrendingUp",
    title: "Expanded Customer Reach",
    description:
      "Access Jobiho's growing network of 100,000+ travelers and tap into segments you couldn't reach alone.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    iconName: "PiggyBank",
    title: "Reduced Marketing Costs",
    description:
      "Let Jobiho handle discovery and promotion. Focus on delivering great experiences while we bring customers to you.",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    iconName: "BarChart3",
    title: "Discovery Marketplace Access",
    description:
      "Join a curated marketplace where travelers come specifically to find and book experiences like yours.",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
];

const defaultPartnerTypes = [
  "Tour Operators",
  "Adventure Camps",
  "Resorts & Hotels",
  "Restaurants",
  "Wellness Centers",
  "Cultural Organizations",
  "Activity Providers",
  "Travel Agencies",
];

type PartnersProps = {
  label?: string;
  titleTop?: string;
  titleHighlight?: string;
  titleBottom?: string;
  description?: string;
  benefits?: PartnerBenefit[];
  primaryCtaLabel?: string;
  primaryCtaTargetId?: string;
  secondaryCtaLabel?: string;
  rightCardTitle?: string;
  rightCardSubtitle?: string;
  partnerTypes?: string[];
  checklistHeading?: string;
  checklistItems?: string[];
  floatingStatTitle?: string;
  floatingStatSubtitle?: string;
};

export default function Partners({
  label = "Partner With Us",
  titleTop = "Grow Your Business",
  titleHighlight = "with Jobiho",
  titleBottom = "",
  description = "Join Jobiho’s trusted operator network and connect with thousands of travelers actively seeking experiences like yours. From adventure camps to fine dining, we help you reach the right audience at the right moment.",
  benefits = defaultBenefits,
  primaryCtaLabel = "Become a Partner",
  primaryCtaTargetId = "newsletter",
  secondaryCtaLabel = "Learn More",
  rightCardTitle = "Partner Program",
  rightCardSubtitle = "Join 500+ trusted operators",
  partnerTypes = defaultPartnerTypes,
  checklistHeading = "Who can partner?",
  checklistItems = [
    "Free listing setup and onboarding",
    "Dedicated partner dashboard",
    "Real-time booking notifications",
    "Performance analytics & insights",
    "Marketing support & promotions",
  ],
  floatingStatTitle = "3x Growth",
  floatingStatSubtitle = "Average partner revenue",
}: PartnersProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="partners" className="py-20 lg:py-28 bg-[#F8F9FA] relative overflow-hidden">
      {/* Decorative background shape */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#1565C0]/5 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-0.5 bg-[#FFC107]" />
              <span className="text-[#1565C0] text-sm font-semibold font-heading uppercase tracking-wider">
                {label}
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold font-heading text-[#1F2937] leading-tight mb-6">
              {titleTop}{" "}
              <span className="text-[#1565C0]">{titleHighlight}</span>
              {titleBottom ? ` ${titleBottom}` : ""}
            </h2>

            <p className="text-gray-600 font-body text-lg leading-relaxed mb-8">
              {description}
            </p>

            {/* Benefits */}
            <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
                >
                  <div className={`w-10 h-10 rounded-xl ${benefit.bg} flex items-center justify-center shrink-0`}>
                    {(() => {
                      const Icon = iconMap[benefit.iconName];
                      return <Icon className={`w-5 h-5 ${benefit.color}`} />;
                    })()}
                  </div>
                  <div>
                    <h4 className="font-semibold font-heading text-[#1F2937] text-sm mb-1">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-500 font-body text-xs leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/partners"
                  className="flex items-center gap-2 px-7 py-3.5 bg-[#1565C0] hover:bg-[#0D47A1] text-white font-bold font-heading rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  {primaryCtaLabel}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
              <Link href="/partners" className="px-7 py-3.5 border-2 border-gray-200 text-gray-700 hover:border-[#1565C0] hover:text-[#1565C0] font-semibold font-heading rounded-xl transition-all duration-200">
                {secondaryCtaLabel}
              </Link>
            </div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main card */}
            <div className="bg-gradient-to-br from-[#1565C0] to-[#0D47A1] rounded-3xl p-8 shadow-2xl text-white">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 mb-4">
                  <Globe2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold font-heading mb-2">{rightCardTitle}</h3>
                <p className="text-blue-200 font-body text-sm">{rightCardSubtitle}</p>
              </div>

              {/* Partner types */}
              <div className="mb-8">
                <p className="text-blue-200 text-xs font-heading uppercase tracking-wide mb-3">
                  {checklistHeading}
                </p>
                <div className="flex flex-wrap gap-2">
                  {partnerTypes.map((type) => (
                    <span
                      key={type}
                      className="px-3 py-1.5 bg-white/15 border border-white/20 rounded-full text-xs font-medium text-white"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>

              {/* Checklist */}
              <div className="space-y-3 border-t border-white/20 pt-6">
                {checklistItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#FFC107] shrink-0" fill="none" />
                    <span className="text-blue-100 font-body text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating stats */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 border border-gray-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FFC107]/20 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-[#FFC107]" />
                </div>
                <div>
                  <div className="text-lg font-bold font-heading text-[#1F2937]">{floatingStatTitle}</div>
                  <div className="text-xs text-gray-500 font-body">{floatingStatSubtitle}</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
