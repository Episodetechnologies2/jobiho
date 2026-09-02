"use client";

import { asset } from "@/lib/basePath";
import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useMotionValue,
  useMotionValueEvent,
  useSpring,
} from "framer-motion";
import { MapPin, Star } from "lucide-react";

interface ItineraryDay {
  day: number;
  title: string;
  location: string;
  description: string;
  highlights: string[];
  image: string;
}

interface ScrollItineraryProps {
  itinerary: ItineraryDay[];
  destinationName: string;
}

function DayCard({ item, isActive, isPast, fromLeft }: { item: ItineraryDay; isActive: boolean; isPast: boolean; fromLeft: boolean }) {
  const fallbackImg = "/images/hero-destinations.jpg";
  const [imgSrc, setImgSrc] = useState<string>(item.image ? asset(item.image) : asset(fallbackImg));

  return (
    <motion.div
      initial={{ opacity: 0, x: fromLeft ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.05 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`relative rounded-2xl bg-white border shadow-sm transition-all duration-500 hover:shadow-xl ${
        isActive
          ? "border-[#1565C0] ring-2 ring-[#1565C0]/20 shadow-md"
          : isPast
          ? "border-gray-100"
          : "border-gray-100 opacity-50"
      }`}
    >
      <div className="relative h-[200px] w-full overflow-hidden rounded-t-2xl bg-gray-100">
        <img
          src={imgSrc}
          alt={item.title}
          onError={() => setImgSrc(asset(fallbackImg))}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <span className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-[#FFC107] px-3 py-1 text-xs font-bold text-gray-900 shadow">
          Day {item.day}
        </span>
      </div>

      <div className="p-5 space-y-3">
        <h3 className="text-lg font-bold font-heading text-[#1F2937] leading-snug">{item.title}</h3>
        <div className="flex items-center gap-1.5 text-sm text-[#1565C0] font-medium">
          <MapPin className="h-3.5 w-3.5" />
          {item.location}
        </div>
        <p className="text-sm text-gray-500 font-body leading-relaxed">{item.description}</p>
        {item.highlights.length > 0 && (
          <ul className="space-y-1.5 pt-1">
            {item.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <Star className="h-3.5 w-3.5 mt-0.5 flex-shrink-0 text-[#FFC107] fill-[#FFC107]" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
}

export default function ScrollItinerary({ itinerary, destinationName }: ScrollItineraryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lastScrollRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);
  const [activeDay, setActiveDay] = useState(0);
  const totalDays = itinerary.length;

  const { scrollY } = useScroll();
  const vehicleYRaw = useMotionValue(0);
  const vehicleY = useSpring(vehicleYRaw, { stiffness: 150, damping: 28, mass: 0.4 });
  const logoRotationRaw = useMotionValue(0);
  const logoRotation = useSpring(logoRotationRaw, { stiffness: 120, damping: 22, mass: 0.55 });

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (!containerRef.current) return;
    const now = Date.now();
    const previousY = lastScrollRef.current;
    const previousT = lastTimeRef.current;

    if (previousY !== null && previousT !== null) {
      const deltaY = latest - previousY;
      const deltaTime = Math.max(now - previousT, 1);
      const speed = Math.abs(deltaY) / deltaTime;
      const spinBoost = Math.min(speed * 1.6, 1.8);
      const rotationStep = deltaY * (0.22 + spinBoost);
      logoRotationRaw.set(logoRotationRaw.get() + rotationStep);
    }

    lastScrollRef.current = latest;
    lastTimeRef.current = now;

    const rect = containerRef.current.getBoundingClientRect();
    const containerHeight = containerRef.current.offsetHeight;
    const markerCenterOffset = 22; // Matches finish marker center (h-11 => 44px)
    const viewportCenter = window.innerHeight / 2;
    const relativeY = viewportCenter - rect.top;
    const maxTravelY = Math.max(containerHeight - markerCenterOffset, 0);
    const clampedY = Math.max(0, Math.min(maxTravelY, relativeY));

    vehicleYRaw.set(clampedY);

    const progress = Math.max(0, Math.min(1, maxTravelY === 0 ? 0 : clampedY / maxTravelY));
    const segmentSize = 1 / Math.max(totalDays - 1, 1);
    const idx = Math.round(progress / segmentSize);
    setActiveDay(Math.min(Math.max(0, idx), totalDays - 1));
  });

  return (
    <section className="relative bg-white py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-0.5 bg-[#FFC107]" />
            <span className="text-[#1565C0] text-sm font-semibold font-heading uppercase tracking-wider">
              Tour Itinerary
            </span>
            <div className="w-8 h-0.5 bg-[#FFC107]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold font-heading text-[#1F2937] mb-4">
            Your {destinationName} Journey
          </h2>
          <p className="text-gray-600 font-body text-lg max-w-xl mx-auto">
            A day-by-day breakdown of your adventure — follow the road to discover what awaits at every stop.
          </p>
        </div>

        <div ref={containerRef} className="relative">
          {/* Center dashed road (desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-px z-0">
            <div className="h-full border-l-2 border-dashed border-gray-300" />
          </div>

          {/* Blue progress line — height driven by same spring as airplane */}
          <motion.div
            className="hidden md:block absolute left-1/2 top-0 -translate-x-px z-[1] w-0.5 bg-gradient-to-b from-[#1565C0] to-[#0D47A1]"
            style={{ height: vehicleY }}
          />

          {/* Airplane — same spring value, perfectly in sync with line */}
          <motion.div
            className="hidden md:flex absolute left-1/2 z-20 pointer-events-none items-center justify-center"
            style={{ top: vehicleY, x: "-50%", y: "-50%" }}
          >
            <motion.div
              style={{ rotate: logoRotation }}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1565C0] border-2 border-[#60A5FA]"
            >
              <img
                src={asset("/jobiho%20only%20logo.png")}
                alt="Jobiho logo"
                className="h-7 w-7 object-contain"
              />
            </motion.div>
          </motion.div>

          {/* Day rows */}
          <div className="relative z-10">
            {itinerary.map((item, idx) => {
              const isLeft = idx % 2 === 0;
              const isPast = idx < activeDay;
              const isActive = idx === activeDay;

              return (
                <div key={item.day}>
                  {/* Desktop layout */}
                  <div className="hidden md:grid md:grid-cols-[1fr_80px_1fr] py-10">
                    {/* Left column */}
                    <div className="flex items-center justify-end">
                      {isLeft ? (
                        <div className="w-full max-w-md pr-6 relative">
                          <DayCard item={item} isActive={isActive} isPast={isPast} fromLeft={true} />
                          {/* Connector from card to checkpoint */}
                          <div className="absolute right-0 top-1/2 -translate-y-px w-6 h-0.5">
                            <div className={`h-full transition-colors duration-500 ${isActive || isPast ? "bg-[#1565C0]" : "bg-gray-300"}`} />
                          </div>
                        </div>
                      ) : <div />}
                    </div>

                    {/* Center checkpoint — vertically centered */}
                    <div className="flex justify-center items-center">
                      <motion.div
                        className={`flex h-11 w-11 items-center justify-center rounded-full border-2 text-sm font-bold transition-all duration-500 shadow-sm ${
                          isActive
                            ? "border-[#1565C0] bg-[#1565C0] text-white ring-4 ring-[#1565C0]/20 shadow-lg"
                            : isPast
                            ? "border-[#1565C0] bg-[#1565C0] text-white"
                            : "border-gray-300 bg-white text-gray-400"
                        }`}
                        animate={isActive ? { scale: [1, 1.15, 1] } : { scale: 1 }}
                        transition={{ duration: 0.4 }}
                      >
                        {item.day}
                      </motion.div>
                    </div>

                    {/* Right column */}
                    <div className="flex items-center justify-start">
                      {!isLeft ? (
                        <div className="w-full max-w-md pl-6 relative">
                          <DayCard item={item} isActive={isActive} isPast={isPast} fromLeft={false} />
                          {/* Connector from checkpoint to card */}
                          <div className="absolute left-0 top-1/2 -translate-y-px w-6 h-0.5">
                            <div className={`h-full transition-colors duration-500 ${isActive || isPast ? "bg-[#1565C0]" : "bg-gray-300"}`} />
                          </div>
                        </div>
                      ) : <div />}
                    </div>
                  </div>

                  {/* Mobile layout */}
                  <div className="md:hidden py-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`flex h-9 w-9 items-center justify-center rounded-full border-2 text-xs font-bold ${
                        isActive || isPast ? "border-[#1565C0] bg-[#1565C0] text-white" : "border-gray-300 bg-white text-gray-400"
                      }`}>
                        {item.day}
                      </div>
                      <div className={`h-px flex-1 ${isPast || isActive ? "bg-[#1565C0]" : "bg-gray-200"}`} />
                    </div>
                    <DayCard item={item} isActive={isActive} isPast={isPast} fromLeft={false} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Finish marker (desktop) */}
          <div className="hidden md:flex justify-center mt-8 relative z-10">
            <motion.div
              className={`flex h-11 w-11 items-center justify-center rounded-full border-2 transition-all duration-500 ${
                activeDay === totalDays - 1
                  ? "border-[#FFC107] bg-[#FFC107] text-gray-900 shadow-lg"
                  : "border-gray-300 bg-white text-gray-400"
              }`}
            >
              <Star className="h-4 w-4 fill-current" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
