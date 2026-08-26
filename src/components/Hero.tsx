"use client";

import { asset } from "@/lib/basePath";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, Calendar, Tag, ChevronDown, ArrowRight, Play } from "lucide-react";

const defaultCategories = [
  "All Experiences",
  "Adventure",
  "Leisure",
  "Dining",
  "Outdoor",
  "Lifestyle",
];

const defaultStats = [
  { value: "10K+", label: "Experiences" },
  { value: "50+", label: "Destinations" },
  { value: "100K+", label: "Happy Travelers" },
  { value: "500+", label: "Operators" },
];

type HeroProps = {
  backgroundImageUrl?: string;
  badgeText?: string;
  showBadge?: boolean;
  headlineTop?: string;
  headlineHighlight?: string;
  headlineBottom?: string;
  subheadline?: string;
  showSubheadline?: boolean;
  categories?: string[];
  stats?: { value: string; label: string }[];
  showStats?: boolean;
  showPopularTags?: boolean;
  showScrollIndicator?: boolean;
  showSearchForm?: boolean;
};

export default function Hero({
  backgroundImageUrl = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80",
  badgeText = "Global Experience Marketplace & Social Discovery Platform",
  showBadge = true,
  headlineTop = "Discover",
  headlineHighlight = "Whatever",
  headlineBottom = "There Is",
  subheadline = "Book travel, adventure, dining & lifestyle experiences — all in one place.\n          Your world of extraordinary moments awaits.",
  showSubheadline = true,
  categories = defaultCategories,
  stats = defaultStats,
  showStats = true,
  showPopularTags = true,
  showScrollIndicator = true,
  showSearchForm = true,
}: HeroProps) {
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState(() => {
    const now = new Date();
    // Local-date ISO (avoids UTC off-by-one issues)
    const yyyy = now.getFullYear();
    const mm = String(now.getMonth() + 1).padStart(2, "0");
    const dd = String(now.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  });
  const [category, setCategory] = useState("All Experiences");

  // Important: bubble positions must not re-randomize on every keystroke.
  // Typing in the form updates React state => re-render => Math.random would regenerate unless we memoize.
  const particles = useMemo(() => {
    return [...Array(6)].map((_, i) => {
      const width = Math.random() * 300 + 100;
      const height = Math.random() * 300 + 100;
      const left = `${Math.random() * 100}%`;
      const top = `${Math.random() * 100}%`;
      return {
        width,
        height,
        left,
        top,
        duration: 8 + i * 2,
        delay: i * 1.5,
      };
    });
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `${asset("/tours-packages")}`;
  };

  const handleDestinationChange = (value: string) => {
    // Letters, spaces and common place-name characters only.
    const sanitized = value.replace(/[^A-Za-z\s'-]/g, "");
    setDestination(sanitized);
  };

  return (
    <section
      id="home"
      className="relative min-h-[110vh] lg:min-h-[115vh] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${asset(backgroundImageUrl)}')`,
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/60 to-black/50" />

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: p.width,
              height: p.height,
              left: p.left,
              top: p.top,
            }}
            animate={{
              x: [0, 30, 0],
              y: [0, -30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.delay,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 md:pt-36 lg:pt-40 pb-20 flex flex-col items-center text-center">
        {/* Badge */}
        {showBadge ? (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full text-white text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#FFC107] animate-pulse" />
            {badgeText}
          </motion.div>
        ) : null}

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold font-heading text-white leading-tight tracking-tight mb-6"
        >
          {headlineTop}
          {headlineHighlight ? (
            <>
              {" "}
              <span className="relative">
                <span className="text-[#FFC107]">{headlineHighlight}</span>
              </span>
            </>
          ) : null}
          {headlineBottom ? (
            <>
              <br />
              <span className="text-white/90">{headlineBottom}</span>
            </>
          ) : null}
        </motion.h1>

        {/* Subheadline */}
        {showSubheadline ? (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg sm:text-xl text-white/80 max-w-2xl mb-12 leading-relaxed font-body"
          >
            {subheadline}
          </motion.p>
        ) : null}

        {/* Search Bar */}
        {showSearchForm ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="w-full max-w-4xl"
          >
            <form
              onSubmit={handleSearch}
              className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-3 md:p-2"
            >
              <div className="flex flex-col md:flex-row gap-2">
                {/* Destination */}
                <div className="flex-1 flex items-center gap-3 px-4 py-3 md:py-0 rounded-xl md:rounded-none border md:border-0 border-gray-200 md:border-r md:border-gray-200 hover:bg-gray-50 transition-colors group">
                  <MapPin className="w-5 h-5 text-[#1565C0] shrink-0" />
                  <div className="flex flex-col min-w-0 w-full">
                    <label className="text-xs text-left font-semibold text-gray-500 uppercase tracking-wide">
                      Destination
                    </label>
                    <input
                      type="text"
                      placeholder="Where to?"
                      value={destination}
                      onChange={(e) => handleDestinationChange(e.target.value)}
                      inputMode="text"
                      autoComplete="off"
                      className="text-sm font-medium text-gray-800 bg-transparent outline-none placeholder:text-gray-400 w-full"
                    />
                  </div>
                </div>

                {/* Date */}
                <div className="flex-1 flex items-center gap-3 px-4 py-3 md:py-0 rounded-xl md:rounded-none border md:border-0 border-gray-200 md:border-r md:border-gray-200 hover:bg-gray-50 transition-colors">
                  <Calendar className="w-5 h-5 text-[#1565C0] shrink-0" />
                  <div className="flex flex-col min-w-0 w-full">
                    <label className="text-xs text-left font-semibold text-gray-500 uppercase tracking-wide">
                      Date
                    </label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="text-sm md:text-[15px] font-semibold font-body text-gray-800 bg-transparent outline-none w-full"
                    />
                  </div>
                </div>

                {/* Category */}
                <div className="flex-1 flex items-center gap-3 px-4 py-3 md:py-0 rounded-xl md:rounded-none border md:border-0 border-gray-200 hover:bg-gray-50 transition-colors">
                  <Tag className="w-5 h-5 text-[#1565C0] shrink-0" />
                  <div className="flex flex-col min-w-0 w-full">
                    <label className="text-xs text-left font-semibold text-gray-500 uppercase tracking-wide">
                      Category
                    </label>
                    <div className="relative">
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="text-sm font-medium text-gray-800 bg-transparent outline-none appearance-none w-full cursor-pointer pr-6"
                      >
                        {categories.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Search Button */}
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 px-6 py-3 md:py-4 bg-[#1565C0] hover:bg-[#0D47A1] text-white font-semibold font-heading text-sm rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl whitespace-nowrap group"
                >
                  <Search className="w-4 h-4" />
                  <span>Explore Experiences</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </motion.div>
        ) : null}

        {/* Popular searches */}
        {showPopularTags ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-wrap justify-center gap-2 mt-6"
          >
            <span className="text-white/60 text-sm font-body">Popular:</span>
            {[
              { label: "Tokyo", slug: "tokyo" },
              { label: "Bali", slug: "bali" },
              { label: "Paris", slug: "paris" },
              { label: "Machu Picchu", slug: "machu-picchu" },
            ].map((tag) => (
              <a
                key={tag.slug}
                href={asset(`/tours-packages/${tag.slug}`)}
                className="px-3 py-1 text-xs font-medium text-white/80 bg-white/15 hover:bg-white/25 border border-white/20 rounded-full transition-all duration-200 backdrop-blur-sm"
              >
                {tag.label}
              </a>
            ))}
          </motion.div>
        ) : null}

        {/* Stats */}
        {showStats ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 mt-16 pt-8 border-t border-white/20 w-full max-w-2xl"
          >
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#FFC107] font-heading">
                  {stat.value}
                </div>
                <div className="text-xs text-white/60 font-body mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        ) : null}
      </div>

      {/* Scroll indicator */}
      {showScrollIndicator ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
        >
          <span className="text-xs tracking-widest uppercase font-body">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 rounded-full border-2 border-white/30 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-1.5 rounded-full bg-white/60" />
          </motion.div>
        </motion.div>
      ) : null}
    </section>
  );
}
