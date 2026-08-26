"use client";

import { asset } from "@/lib/basePath";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Compass,
  Globe2,
  Headset,
  LayoutList,
  Mail,
  MapPin,
  Phone,
  PiggyBank,
  Search,
  ShieldCheck,
  Clock3,
  TrendingUp,
  Users2,
  Zap,
} from "lucide-react";

const contactCards = [
  {
    icon: Mail,
    title: "Email",
    description: "For partnerships, collaborations, and general enquiries.",
    value: "contact@jobiho.com",
    tone: "from-blue-500 to-[#1565C0]",
  },
  {
    icon: Headset,
    title: "Support",
    description: "Need help with a booking or experience details? We are here.",
    value: "24-hour response",
    tone: "from-emerald-500 to-green-600",
  },
  {
    icon: MapPin,
    title: "Office",
    description: "Prefer a conversation? Reach out and we will schedule a call.",
    value: "Mumbai, India",
    tone: "from-amber-500 to-orange-500",
  },
];

const helpTopics = [
  {
    title: "Booking help",
    label: "Before you pay",
    text: "Questions about availability, inclusions, or changes? We will guide you clearly.",
  },
  {
    title: "Trip customization",
    label: "Tailor your plan",
    text: "Tell us your pace, budget, and dates, then we will tailor the itinerary.",
  },
  {
    title: "Partner inquiries",
    label: "List with Jobiho",
    text: "Operators, hotels, and hosts can reach discovery traffic and grow bookings.",
  },
];

const supportFeatures = [
  { icon: ShieldCheck, title: "Clear inclusions", text: "Know what is covered before you book." },
  { icon: Search, title: "Fast recommendations", text: "Get curated options without endless scrolling." },
  { icon: Users2, title: "Trip customization", text: "Adjust pace, comfort, and highlights." },
  { icon: Headset, title: "Real-time support", text: "Get help when plans change." },
  { icon: Zap, title: "Quick confirmations", text: "Faster replies and next steps." },
];

const flow = [
  {
    icon: Compass,
    step: "01",
    title: "Share your goal",
    text: "Tell us destination ideas, dates, and your vibe. We ask only a few smart questions.",
    bullets: ["Dates + budget", "Travel style", "Must-have highlights"],
  },
  {
    icon: LayoutList,
    step: "02",
    title: "Get options",
    text: "We send curated options with clear inclusions so your comparison is easy and fast.",
    bullets: ["Inclusions", "Timing", "Alternatives"],
  },
  {
    icon: CheckCircle2,
    step: "03",
    title: "Confirm confidently",
    text: "Lock the plan with seamless booking and keep support active throughout your trip.",
    bullets: ["Confirmation", "Itinerary share", "Support"],
  },
];

const contactChannels = [
  {
    icon: Mail,
    title: "Email",
    detail: "contact@jobiho.com",
    note: "General inquiries and partnerships",
  },
  {
    icon: Phone,
    title: "Phone",
    detail: "+91 22 4000 1020",
    note: "For urgent trip planning support",
  },
  {
    icon: Clock3,
    title: "Support Hours",
    detail: "Mon - Sat, 9:00 AM - 8:00 PM",
    note: "24-hour response for online requests",
  },
];

export default function ContactCreative() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const allowLettersOnly = (value: string) => value.replace(/[^A-Za-z\s'-]/g, "");
  const allowEmailChars = (value: string) => value.replace(/\s+/g, "");
  const allowSubjectChars = (value: string) => value.replace(/[^A-Za-z0-9\s.,'&()\-]/g, "");
  const allowMessageChars = (value: string) => value.replace(/[^A-Za-z0-9\s.,!?'"&()\-:/]/g, "");

  return (
    <>
      <section className="relative overflow-hidden bg-[#0B1220] text-white">
        <div className="absolute inset-0">
          <img src={asset("/images/hero-contact.jpg")} alt="Contact hero" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D47A1]/80 via-[#0B1220]/80 to-[#0B1220]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="text-[#FFC107] font-heading uppercase tracking-wider text-sm mb-4">Travel Assistance</p>
            <h1 className="text-5xl lg:text-7xl font-heading font-bold leading-tight">
              Contact <span className="text-[#FFC107]">Us</span>
            </h1>
            <p className="mt-6 text-blue-100 text-lg font-body">
              Whether you are planning your next trip or looking to collaborate, our team is here to help you discover the best experiences tailored to you.
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
            {contactCards.map((card, i) => (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm p-5"
              >
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${card.tone} flex items-center justify-center mb-4`}>
                  <card.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-heading text-xl font-bold">{card.title}</h3>
                <p className="text-blue-100 text-sm mt-2 font-body">{card.description}</p>
                <p className="text-[#FFC107] font-heading font-semibold mt-4">{card.value}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 rounded-3xl border border-gray-100 bg-[#F8F9FA] p-8 shadow-sm"
            >
              <p className="text-[#1565C0] text-sm font-heading uppercase tracking-wider mb-3">Help Topics</p>
              <h2 className="text-4xl font-heading font-bold text-[#1F2937] mb-8">What can we help with?</h2>
              <div className="space-y-4">
                {helpTopics.map((topic, i) => (
                  <motion.div
                    key={topic.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="rounded-2xl border border-gray-100 bg-white p-5 hover:shadow-md transition-all"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-heading font-bold text-xl text-[#1F2937]">{topic.title}</h3>
                      <span className="text-xs font-heading text-[#1565C0] bg-blue-50 px-3 py-1 rounded-full">{topic.label}</span>
                    </div>
                    <p className="text-gray-600 font-body mt-2">{topic.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 rounded-3xl bg-gradient-to-br from-[#1565C0] to-[#0D47A1] p-8 text-white shadow-2xl"
            >
              <p className="text-blue-100 text-sm font-heading uppercase tracking-wider mb-3">Quick Actions</p>
              <h3 className="text-3xl font-heading font-bold mb-5">Choose a next step</h3>
              <div className="space-y-3">
                {[
                  "Plan a trip",
                  "Talk to an expert",
                  "Request callback",
                  "Partner inquiry",
                ].map((item) => (
                  <div key={item} className="flex items-center justify-between rounded-xl bg-white/10 border border-white/20 px-4 py-3">
                    <span className="font-body">{item}</span>
                    <ArrowRight className="w-4 h-4 text-[#FFC107]" />
                  </div>
                ))}
              </div>
              <p className="mt-6 text-blue-100 text-sm font-body">
                We help you plan from destination selection to final booking with clear inclusions and support.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12"
          >
            <div>
              <p className="text-[#1565C0] text-sm font-heading uppercase tracking-wider mb-3">Travel Assistance</p>
              <h2 className="text-4xl lg:text-5xl font-heading font-bold text-[#1F2937]">Support that actually helps</h2>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4">
            {supportFeatures.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -6 }}
                className={`rounded-2xl bg-white border border-gray-100 p-5 shadow-sm hover:shadow-lg transition-all ${
                  i === 0 ? "sm:col-span-2 xl:col-span-2" : ""
                }`}
              >
                <item.icon className="w-6 h-6 text-[#1565C0] mb-3" />
                <h3 className="font-heading font-bold text-[#1F2937]">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-2 font-body">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {flow.map((step, i) => (
              <motion.article
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-xl transition-all"
              >
                <span className="absolute -top-3 right-6 w-8 h-8 rounded-full bg-[#FFC107] text-[#1F2937] text-xs font-heading font-bold flex items-center justify-center">
                  {step.step}
                </span>
                <step.icon className="w-7 h-7 text-[#1565C0] mb-4" />
                <h3 className="text-2xl font-heading font-bold text-[#1F2937] mb-2">{step.title}</h3>
                <p className="text-gray-600 font-body text-sm mb-4">{step.text}</p>
                <div className="space-y-2">
                  {step.bullets.map((bullet) => (
                    <div key={bullet} className="flex items-center gap-2 text-sm text-gray-600 font-body">
                      <CheckCircle2 className="w-4 h-4 text-[#1565C0]" />
                      {bullet}
                    </div>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[#1565C0] text-sm font-heading uppercase tracking-wider mb-3">Reach Out</p>
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-[#1F2937] mb-3">Message us directly</h2>
            <p className="text-gray-600 font-body text-lg max-w-2xl mx-auto">
              Send your travel request, find our location, and contact us through the channel that works best for you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 rounded-3xl bg-white border border-gray-100 p-6 md:p-8 shadow-sm"
            >
              <h3 className="text-2xl font-heading font-bold text-[#1F2937] mb-6">Send a message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(allowLettersOnly(e.target.value))}
                    inputMode="text"
                    autoComplete="name"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm font-body outline-none focus:border-[#1565C0] focus:ring-2 focus:ring-[#1565C0]/15"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(allowEmailChars(e.target.value))}
                    inputMode="email"
                    autoComplete="email"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm font-body outline-none focus:border-[#1565C0] focus:ring-2 focus:ring-[#1565C0]/15"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  value={subject}
                  onChange={(e) => setSubject(allowSubjectChars(e.target.value))}
                  inputMode="text"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm font-body outline-none focus:border-[#1565C0] focus:ring-2 focus:ring-[#1565C0]/15"
                />
                <textarea
                  placeholder="Write your message..."
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(allowMessageChars(e.target.value))}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm font-body outline-none resize-none focus:border-[#1565C0] focus:ring-2 focus:ring-[#1565C0]/15"
                />
                <button
                  type="button"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1565C0] hover:bg-[#0D47A1] text-white font-heading font-semibold text-sm transition-colors"
                >
                  Send Message
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 rounded-3xl bg-white border border-gray-100 shadow-sm overflow-hidden"
            >
              <div className="h-72 md:h-80 border-b border-gray-100">
                <iframe
                  title="Jobiho office location"
                  src="https://www.google.com/maps?q=Mumbai%2C%20India&z=12&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-start gap-3 mb-6">
                  <MapPin className="w-5 h-5 text-[#1565C0] mt-0.5" />
                  <div>
                    <h4 className="font-heading font-bold text-[#1F2937] text-lg">Office Address</h4>
                    <p className="text-gray-600 font-body text-sm mt-1">
                      Jobiho Travel Services
                      <br />
                      Andheri East, Mumbai, Maharashtra 400069
                      <br />
                      India
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {contactChannels.map((item) => (
                    <div key={item.title} className="rounded-2xl border border-gray-100 bg-[#F8F9FA] p-4">
                      <item.icon className="w-5 h-5 text-[#1565C0] mb-2" />
                      <p className="font-heading font-semibold text-[#1F2937] text-sm">{item.title}</p>
                      <p className="text-sm font-body text-gray-700 mt-1">{item.detail}</p>
                      <p className="text-xs font-body text-gray-500 mt-1">{item.note}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="partners" className="py-20 lg:py-28 bg-[#0D47A1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white p-8 md:p-12 border border-gray-100 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
              <div className="lg:col-span-2">
                <p className="text-[#1565C0] text-sm font-heading uppercase tracking-wider mb-3">Common Questions</p>
                <h2 className="text-4xl font-heading font-bold text-[#1F2937] mb-3">Quick answers</h2>
                <p className="text-gray-600 font-body">
                  Most requests get a reply within 24 hours. Yes, packages can be customized. Yes, partner onboarding is open.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Mail, value: "Email", label: "contact@jobiho.com" },
                  { icon: Headset, value: "24h", label: "Typical reply window" },
                  { icon: TrendingUp, value: "Custom", label: "Trip planning support" },
                  { icon: BarChart3, value: "Partner", label: "Onboarding available" },
                ].map((stat) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ scale: 1.03 }}
                    className="rounded-xl bg-[#F8F9FA] border border-gray-100 p-4"
                  >
                    <stat.icon className="w-4 h-4 text-[#1565C0] mb-2" />
                    <div className="text-lg font-heading font-bold text-[#1F2937]">{stat.value}</div>
                    <div className="text-xs text-gray-500 font-body">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                { icon: Globe2, label: "Plan a trip" },
                { icon: Headset, label: "Talk to expert" },
                { icon: PiggyBank, label: "Request callback" },
                { icon: Users2, label: "Partner inquiry" },
              ].map((action) => (
                <button
                  key={action.label}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 hover:border-[#1565C0] hover:text-[#1565C0] transition-colors font-heading text-sm text-gray-700"
                >
                  <action.icon className="w-4 h-4" />
                  {action.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
