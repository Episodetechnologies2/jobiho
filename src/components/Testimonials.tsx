"use client";

import { asset } from "@/lib/basePath";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

export type TestimonialItem = {
  name: string;
  role: string;
  avatar: string;
  rating: number;
  text: string;
  experience: string;
  date: string;
};

export type TrustStat = {
  value: string;
  label: string;
};

const defaultTestimonials: TestimonialItem[] = [
  {
    name: "Priya Sharma",
    role: "Travel Enthusiast, Mumbai",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    rating: 5,
    text: "Jobiho made it incredibly easy to discover unique travel experiences I never knew existed. Booked a houseboat trip in Kerala and it was life-changing. The whole process from discovery to booking was absolutely seamless!",
    experience: "Kerala Backwaters Houseboat",
    date: "March 2025",
  },
  {
    name: "Rahul Menon",
    role: "Adventure Photographer, Bangalore",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    rating: 5,
    text: "As someone who travels frequently for photography, Jobiho has become my go-to platform. The curated operator network means I always get quality experiences. Booked a sunrise trek in Munnar — absolutely stunning!",
    experience: "Munnar Sunrise Trek",
    date: "February 2025",
  },
  {
    name: "Anita Desai",
    role: "Food Blogger, Delhi",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    rating: 5,
    text: "The dining experiences section on Jobiho is exceptional. Found a private chef's table dinner in Jaipur that completely blew my mind. The community reviews are genuine and super helpful for making decisions.",
    experience: "Jaipur Royal Dining Experience",
    date: "January 2025",
  },
  {
    name: "Vikram Singh",
    role: "Corporate Professional, Hyderabad",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    rating: 5,
    text: "Planned a surprise anniversary trip using Jobiho — found the perfect beach resort in Goa with a private sunset cruise. My wife loved every moment. The booking process was smooth, and customer support was excellent!",
    experience: "Goa Sunset Cruise Package",
    date: "December 2024",
  },
];

const defaultTrustStats: TrustStat[] = [
  { value: "4.9/5", label: "Average Rating" },
  { value: "100K+", label: "Happy Travelers" },
  { value: "98%", label: "Would Recommend" },
  { value: "24/7", label: "Customer Support" },
];

type TestimonialsProps = {
  label?: string;
  titleTop?: string;
  titleHighlight?: string;
  titleBottom?: string;
  description?: string;
  testimonials?: TestimonialItem[];
  trustStats?: TrustStat[];
};

export default function Testimonials({
  label = "Traveler Stories",
  titleTop = "What Our",
  titleHighlight = "Travelers",
  titleBottom = "Say",
  description = "Real stories from real travelers who've discovered extraordinary experiences through Jobiho.",
  testimonials = defaultTestimonials,
  trustStats = defaultTrustStats,
}: TestimonialsProps) {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const prev = () => setCurrent((p) => (p === 0 ? testimonials.length - 1 : p - 1));
  const next = () => setCurrent((p) => (p === testimonials.length - 1 ? 0 : p + 1));

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8F9FA] via-white to-[#F8F9FA] pointer-events-none" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#FFC107]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-[#1565C0]/10 rounded-full blur-3xl pointer-events-none" />

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
          <p className="text-gray-600 font-body text-lg max-w-xl mx-auto">
            {description}
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <div ref={ref} className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12"
            >
              {/* Quote icon */}
              <Quote className="w-10 h-10 text-[#1565C0]/20 mb-6" fill="currentColor" />

              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#FFC107] fill-[#FFC107]" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 font-body text-lg leading-relaxed mb-8 italic">
                &ldquo;{testimonials[current].text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <img
                    src={asset(testimonials[current].avatar)}
                    alt={testimonials[current].name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#FFC107]"
                  />
                  <div>
                    <div className="font-bold font-heading text-[#1F2937] text-lg">
                      {testimonials[current].name}
                    </div>
                    <div className="text-gray-500 font-body text-sm">
                      {testimonials[current].role}
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="px-3 py-1.5 bg-[#1565C0]/10 rounded-full text-[#1565C0] text-xs font-semibold font-heading">
                    {testimonials[current].experience}
                  </div>
                  <div className="text-xs text-gray-400 font-body mt-1">
                    {testimonials[current].date}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-8 h-2.5 bg-[#1565C0]"
                      : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-gray-600 hover:border-[#1565C0] hover:text-[#1565C0] hover:bg-[#1565C0]/5 transition-all duration-200"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-gray-600 hover:border-[#1565C0] hover:text-[#1565C0] hover:bg-[#1565C0]/5 transition-all duration-200"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center items-center gap-8 mt-16 pt-10 border-t border-gray-100"
        >
          {trustStats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-bold font-heading text-[#1565C0]">{stat.value}</div>
              <div className="text-sm text-gray-500 font-body mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
