"use client";

import { asset } from "@/lib/basePath";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Sparkles, MapPin, Mountain, Plane } from "lucide-react";

type NewsletterProps = {
  backgroundImageUrl?: string;
  badgeText?: string;
  headlineTop?: string;
  headlineHighlight?: string;
  headlineBottom?: string;
  description?: string;
  buttonLabel?: string;
  socialProofText?: string;
};

export default function Newsletter({
  backgroundImageUrl = "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80",
  badgeText = "Get exclusive travel deals & experience drops",
  headlineTop = "Start Your Next",
  headlineHighlight = "Adventure",
  headlineBottom = "Today",
  description = "Subscribe to get early access to new experiences, exclusive deals, and personalized travel inspiration delivered straight to your inbox.",
  buttonLabel = "Get Inspired",
  socialProofText = "Join 10,000+ travel enthusiasts already inspired by Jobiho",
}: NewsletterProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  const handleEmailChange = (value: string) => {
    // Email fields should not accept spaces.
    setEmail(value.replace(/\s+/g, ""));
  };

  return (
    <section
      id="newsletter"
      className="py-20 lg:py-28 relative overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${asset(backgroundImageUrl)}')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#1565C0]/90 via-[#0D47A1]/80 to-black/70" />

      {/* Animated shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[Mountain, Plane, MapPin].map((Icon, i) => (
          <motion.div
            key={i}
            className="absolute opacity-10"
            style={{
              left: `${20 + i * 30}%`,
              top: `${20 + i * 20}%`,
            }}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1,
            }}
          >
            <Icon className="w-16 h-16 text-white" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 border border-white/25 rounded-full text-white text-sm mb-8 backdrop-blur-sm"
        >
          <Sparkles className="w-4 h-4 text-[#FFC107]" />
          {badgeText}
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl lg:text-6xl font-bold font-heading text-white mb-4 leading-tight"
        >
          {headlineTop}{" "}
          <span className="text-[#FFC107]">{headlineHighlight}</span>{" "}
          {headlineBottom}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-blue-100 font-body text-lg mb-10 max-w-xl mx-auto"
        >
          {description}
        </motion.p>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {submitted ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex flex-col items-center gap-4 py-8"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-500 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-white">You&apos;re all set!</h3>
              <p className="text-blue-200 font-body">
                Welcome to the Jobiho community. Expect amazing experiences in your inbox soon!
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
            >
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => handleEmailChange(e.target.value)}
                inputMode="email"
                required
                className="flex-1 px-5 py-4 bg-white/15 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder:text-white/50 font-body focus:outline-none focus:border-[#FFC107] focus:bg-white/20 transition-all duration-200 text-sm"
              />
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 px-7 py-4 bg-[#FFC107] hover:bg-[#FF8F00] disabled:opacity-70 text-[#1F2937] font-bold font-heading rounded-xl shadow-lg transition-all duration-200 whitespace-nowrap"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-[#1F2937]/30 border-t-[#1F2937] rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    {buttonLabel}
                  </>
                )}
              </motion.button>
            </form>
          )}

          <p className="text-white/40 text-xs mt-4 font-body">
            No spam ever. Unsubscribe anytime. Read our{" "}
            <span className="underline cursor-pointer hover:text-white/60">Privacy Policy</span>.
          </p>
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center items-center gap-6 mt-12 pt-8 border-t border-white/20"
        >
          <div className="flex -space-x-2">
            {[
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&q=80",
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&q=80",
              "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&q=80",
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&q=80",
            ].map((src, i) => (
              <img
                key={i}
                src={asset(src)}
                alt="Subscriber"
                className="w-8 h-8 rounded-full border-2 border-white object-cover"
              />
            ))}
          </div>
          <p className="text-white/70 font-body text-sm">
            {socialProofText}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
