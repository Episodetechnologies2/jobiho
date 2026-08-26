"use client";

import { asset } from "@/lib/basePath";
import { motion } from "framer-motion";

interface PageHeroProps {
  titleStart?: string;
  titleHighlight?: string;
  titleEnd?: string;
  description?: string;
  backgroundImage?: string;
}

export default function AboutPageHero({
  titleStart = "About",
  titleHighlight = "Us",
  titleEnd = "",
  description = "Discover the world with passion, purpose and a team that puts your journey first.",
  backgroundImage = "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1800&h=700&fit=crop&crop=center&q=80",
}: PageHeroProps) {
  return (
    <section className="relative h-[340px] sm:h-[400px] md:h-[460px] overflow-hidden">
      <img
        src={asset(backgroundImage)}
        alt="Page hero"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D47A1]/70 via-[#1565C0]/50 to-black/40" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-white drop-shadow-lg">
            {titleStart && <>{titleStart} </>}
            <span className="text-[#FFC107]">{titleHighlight}</span>
            {titleEnd && <> {titleEnd}</>}
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="mt-4 text-base sm:text-lg md:text-xl text-white/90 font-body max-w-2xl mx-auto drop-shadow-md">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
