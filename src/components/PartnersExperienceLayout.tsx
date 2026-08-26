"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle2,
  Compass,
  Globe2,
  Headset,
  LayoutList,
  MapPin,
  PiggyBank,
  Search,
  ShieldCheck,
  Star,
  TrendingUp,
  Users2,
  Zap,
} from "lucide-react";
import type { CategoryCard } from "./Categories";
import type { DestinationCard } from "./Destinations";
import type { WhyChooseUsFeature } from "./WhyChooseUs";
import type { HowItWorksStep } from "./HowItWorks";
import type { PartnerBenefit } from "./Partners";
import type { TestimonialItem, TrustStat } from "./Testimonials";

type Props = {
  partnerTypes: CategoryCard[];
  whyPartner: DestinationCard[];
  features: WhyChooseUsFeature[];
  steps: HowItWorksStep[];
  benefits: PartnerBenefit[];
  testimonials: TestimonialItem[];
  trustStats: TrustStat[];
};

const iconMap = {
  Globe2,
  Building2,
  MapPin,
  Users2,
  BarChart3,
  Zap,
  Search,
  ShieldCheck,
  Headset,
  Compass,
  LayoutList,
  CheckCircle2,
  PiggyBank,
  TrendingUp,
};

export default function PartnersExperienceLayout({
  partnerTypes,
  whyPartner,
  features,
  steps,
  benefits,
  testimonials,
  trustStats,
}: Props) {
  return (
    <>
      <section id="categories" className="py-20 lg:py-28 bg-[#0B1220] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <p className="text-[#FFC107] text-sm font-heading uppercase tracking-wider mb-3">Partner Types</p>
            <h2 className="text-4xl lg:text-5xl font-bold font-heading">Who can partner</h2>
            <p className="text-blue-100/90 font-body text-lg mt-3 max-w-2xl">
              Operators, hotels, guides, and hosts-if you create great travel moments, you belong here.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5"
          >
            {partnerTypes.map((item, i) => {
              const Icon = iconMap[item.iconName] ?? Globe2;
              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 24, rotate: i % 2 === 0 ? -1.5 : 1.5 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 shadow-xl"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-11 h-11 rounded-xl ${item.iconBg} flex items-center justify-center`}>
                      <Icon className={`w-5 h-5 ${item.iconColor}`} />
                    </div>
                    <span className="text-xs text-blue-100 font-heading">{item.count}</span>
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-blue-100/90 text-sm font-body leading-relaxed">{item.description}</p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section id="destinations" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <p className="text-[#1565C0] text-sm font-heading uppercase tracking-wider mb-3">Why Partner</p>
            <h2 className="text-4xl lg:text-5xl font-bold font-heading text-[#1F2937] mb-4">Benefits that grow</h2>
            <p className="text-gray-600 text-lg font-body max-w-2xl mx-auto">
              Increase bookings, reach discovery traffic, and manage everything with less effort.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {whyPartner.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className={`rounded-2xl border border-gray-100 bg-[#F8F9FA] p-6 shadow-sm hover:shadow-xl transition-all ${
                  i === 0 ? "lg:col-span-7" : "lg:col-span-5"
                }`}
              >
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-heading font-semibold ${item.tagColor}`}>{item.tag}</span>
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <Star className="w-4 h-4 text-[#FFC107] fill-[#FFC107]" />
                    <span className="font-semibold">{item.rating}</span>
                    <span>({item.reviews.toLocaleString()})</span>
                  </div>
                </div>
                <h3 className="text-2xl font-heading font-bold text-[#1F2937]">{item.name}</h3>
                <p className="text-[#1565C0] text-sm font-heading mt-1 mb-3">{item.state}</p>
                <p className="text-gray-600 font-body leading-relaxed">{item.description}</p>
                <div className="mt-5 text-xs text-gray-500 font-body">{item.experiences}+ experiences</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="why-us" className="py-20 lg:py-28 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {features.map((feature, i) => {
              const Icon = iconMap[feature.iconName] ?? BarChart3;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.08 }}
                  whileHover={{ scale: 1.01 }}
                  className="rounded-2xl bg-white border border-gray-100 p-6 shadow-sm hover:shadow-xl transition-all"
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: i * 0.12 }}
                      className={`w-12 h-12 rounded-xl ${feature.bgLight} flex items-center justify-center shrink-0`}
                    >
                      <Icon className={`w-6 h-6 ${feature.iconColor}`} />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-heading font-bold text-[#1F2937] mb-2">{feature.title}</h3>
                      <p className="text-gray-600 font-body text-sm leading-relaxed">{feature.description}</p>
                      <div className={`h-0.5 mt-4 rounded-full bg-gradient-to-r ${feature.color}`} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <p className="text-[#1565C0] text-sm font-heading uppercase tracking-wider mb-3">How Partnering Works</p>
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-[#1F2937]">Launch in 3 steps</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, i) => {
              const Icon = iconMap[step.iconName] ?? Compass;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative rounded-2xl border border-gray-100 p-6 bg-white shadow-sm hover:shadow-xl transition-all"
                >
                  <motion.span
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                    className="absolute -top-3 right-5 w-8 h-8 rounded-full bg-[#FFC107] text-[#1F2937] text-xs font-heading font-bold flex items-center justify-center"
                  >
                    {step.step}
                  </motion.span>
                  <div className={`w-12 h-12 rounded-xl ${step.bgLight} flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 ${step.iconColor}`} />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-[#1F2937] mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm font-body mb-4">{step.description}</p>
                  <ul className="space-y-2">
                    {step.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-sm text-gray-600 font-body">
                        <CheckCircle2 className="w-4 h-4 text-[#1565C0]" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="partners" className="py-20 lg:py-28 bg-[#0D47A1] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              {benefits.map((benefit, i) => {
                const Icon = iconMap[benefit.iconName] ?? TrendingUp;
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.08 }}
                    whileHover={{ x: 6 }}
                    className="rounded-2xl bg-white/10 border border-white/20 p-5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#FFC107]" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-lg">{benefit.title}</h3>
                        <p className="text-blue-100 text-sm font-body mt-1">{benefit.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-3xl bg-white text-[#1F2937] p-7 shadow-2xl"
            >
              <p className="text-xs uppercase tracking-wider text-[#1565C0] font-heading mb-3">Partner Highlights</p>
              <h3 className="text-2xl font-bold font-heading mb-4">Success Metrics</h3>
              <div className="grid grid-cols-2 gap-4">
                {trustStats.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.08 }}
                    className="rounded-xl bg-[#F8F9FA] p-4 border border-gray-100"
                  >
                    <div className="text-2xl font-heading font-bold text-[#1565C0]">{s.value}</div>
                    <div className="text-xs text-gray-600 font-body mt-1">{s.label}</div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 space-y-3">
                {testimonials.slice(0, 2).map((t) => (
                  <motion.div
                    key={t.name}
                    whileHover={{ scale: 1.01 }}
                    className="rounded-xl border border-gray-100 p-3"
                  >
                    <div className="font-heading text-sm font-semibold">{t.name}</div>
                    <p className="text-xs text-gray-500 font-body line-clamp-2">{t.text}</p>
                  </motion.div>
                ))}
              </div>
              <button className="mt-6 inline-flex items-center gap-2 text-[#1565C0] font-heading font-semibold text-sm">
                Become a Partner <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
