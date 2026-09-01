"use client";

import { asset } from "@/lib/basePath";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Globe2,
  Mail,
  MessageCircle,
  Phone,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  Trophy,
} from "lucide-react";

/* ────────────────────────────────────────────────────────────────── */
/*  DATA                                                              */
/* ────────────────────────────────────────────────────────────────── */

const scrollPhotosLeft = [
  "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=280&h=200&fit=crop&q=75",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=280&h=200&fit=crop&q=75",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=280&h=200&fit=crop&q=75",
  "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=280&h=200&fit=crop&q=75",
  "https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=280&h=200&fit=crop&q=75",
  "https://images.unsplash.com/photo-1504150558240-0b4fd8946624?w=280&h=200&fit=crop&q=75",
];

const scrollPhotosRight = [
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=280&h=200&fit=crop&q=75",
  "https://images.unsplash.com/photo-1528181304800-259b08848526?w=280&h=200&fit=crop&q=75",
  "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=280&h=200&fit=crop&q=75",
  "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=280&h=200&fit=crop&q=75",
  "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=280&h=200&fit=crop&q=75",
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=280&h=200&fit=crop&q=75",
];

const whyBest = [
  { iconSrc: "/images/chose-icon-1.svg", title: "24-hour Support", text: "Round-the-clock assistance wherever you are — because travel doesn't follow office hours." },
  { iconSrc: "/images/chose-icon-2.svg", title: "No Hidden Fees", text: "Transparent pricing from day one — what you see is what you pay, no surprises at checkout." },
  { iconSrc: "/images/chose-icon-3.svg", title: "Booking Flexibility", text: "Change of plans? No stress. Flexible booking and hassle-free rescheduling options." },
  { iconSrc: "/images/chose-icon-4.svg", title: "Included Transfers", text: "Airport pickups, hotel shuttles, and local transport — all arranged and included in your package." },
];

const storyImages = [
  "https://images.unsplash.com/photo-1522199710521-72d69614c702?w=600&h=750&fit=crop&q=80",
  "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=600&h=750&fit=crop&q=80",
];

const teamMembers = [
  { name: "Wade Shealy", role: "Founder & CEO", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop&q=80" },
  { name: "Amy Jo Robertson", role: "Co-Founder", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop&q=80" },
  { name: "Jennie Mai", role: "Director of Marketing", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop&q=80" },
];

const infoCards = [
  { icon: MessageCircle, title: "Chat online", text: "Chat instantly with us during our normal hours, or leave a message and we'll get back to you ASAP.", cta: "Chat now", href: "/contact" },
  { icon: Mail, title: "Email us", text: "Send us a detailed email about your travel plans and our experts will craft a personalised response.", cta: "Send email", href: "/contact" },
  { icon: Phone, title: "Call us", text: "Prefer to talk? Our travel advisors are available to help you plan and book over the phone.", cta: "Call now", href: "/contact" },
];

const testimonials = [
  {
    quote: "I had the most amazing trip thanks to Jobiho. They took care of everything from flights to accommodations and even helped me plan my itinerary. Highly recommend.",
    name: "Heidi Summers",
    location: "New York",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&q=80",
  },
  {
    quote: "I was hesitant to book through a travel platform at first, but Jobiho made it seamless. The customer service was outstanding and the experiences were perfectly curated.",
    name: "Ben & Judy",
    location: "Miami",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&q=80",
  },
  {
    quote: "I've traveled all over the world, but I've never had a better experience. They truly went above and beyond to make sure every detail of our trip was perfect.",
    name: "Jasper Collins",
    location: "San Francisco",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop&q=80",
  },
];

const stats = [
  { target: 10000, suffix: "+", label: "Happy customers" },
  { target: 5000, suffix: "+", label: "Tours and activities" },
  { target: 30, suffix: "+", label: "Countries around the globe" },
  { target: 200, suffix: "+", label: "Local Partners" },
];

const awards = [
  { icon: Trophy, title: "Best Curated Travel Platform 2025", text: "Recognized for immersive, quality-first travel discovery and planning experiences." },
  { icon: Award, title: "Top Partner Growth Network", text: "Awarded for helping operators, hosts, and travel businesses scale with trust." },
  { icon: Star, title: "Customer Experience Excellence", text: "Praised for seamless booking journeys and consistent traveler support quality." },
  { icon: BadgeCheck, title: "Trusted Operator Network Award", text: "Honored for building a quality-first ecosystem of verified operators and hosts." },
  { icon: Sparkles, title: "Premium Discovery UX Recognition", text: "Celebrated for intuitive trip discovery and polished traveler journeys." },
  { icon: ShieldCheck, title: "Reliability & Service Benchmark", text: "Acknowledged for consistent support and dependable booking operations." },
  { icon: Globe2, title: "Global Expansion Milestone", text: "Recognized for scaling destination and partner reach across markets." },
];

const brands = [
  "Airbnb", "Expedia Partner Solutions", "Tripadvisor", "Skyscanner",
  "Booking.com", "MakeMyTrip", "Goibibo", "Rail Europe",
  "Marriott", "Hyatt", "Accor", "IHG",
];

/* ────────────────────────────────────────────────────────────────── */
/*  CountUp                                                           */
/* ────────────────────────────────────────────────────────────────── */

function CountUp({ target, suffix, start }: { target: number; suffix: string; start: boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const duration = 1600;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      setCount(Math.floor((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target]);
  return <>{count.toLocaleString()}{suffix}</>;
}

/* ────────────────────────────────────────────────────────────────── */
/*  Animation helpers                                                 */
/* ────────────────────────────────────────────────────────────────── */

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
  transition: { duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] },
});

const fadeLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-80px" as const },
  transition: { duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] },
});

const fadeRight = (delay = 0) => ({
  initial: { opacity: 0, x: 50 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-80px" as const },
  transition: { duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] },
});

/* ================================================================== */
/*  Component                                                         */
/* ================================================================== */

export default function AboutExperience() {
  const awardsLane = [...awards, ...awards];
  const brandsLaneOne = [...brands, ...brands];
  const brandsLaneTwo = [...brands.slice().reverse(), ...brands.slice().reverse()];

  const photosLeftDuped = [...scrollPhotosLeft, ...scrollPhotosLeft];
  const photosRightDuped = [...scrollPhotosRight, ...scrollPhotosRight];

  const statsRef = useRef<HTMLDivElement | null>(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });

  const [activeTesti, setActiveTesti] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setActiveTesti((p) => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {/* ═══════ 1. Why We Are Best (from about.html) ═══════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-0.5 bg-[#FFC107]" />
              <span className="text-[#1565C0] text-sm font-semibold font-heading uppercase tracking-wider">
                Why Choose Us
              </span>
              <div className="w-8 h-0.5 bg-[#FFC107]" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold font-heading text-[#1F2937]">
              Why we are <span className="text-[#1565C0]">best</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyBest.map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp(0.1 * i)}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-[#FFC107]/15 flex items-center justify-center mb-5 transition-colors duration-300">
                  <img src={asset(item.iconSrc)} alt={item.title} className="w-10 h-10" />
                </div>
                <h3 className="text-lg font-bold font-heading text-[#1F2937] mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 font-body leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ 2. About Intro with infinite scrolling photos (KEEP) ═══════ */}
      <section className="py-20 lg:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div {...fadeLeft(0.1)}>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-0.5 bg-[#FFC107]" />
                <span className="text-[#1565C0] text-sm font-semibold font-heading uppercase tracking-wider">
                  About Jobiho
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold font-heading text-[#1F2937] leading-tight mb-6">
                The perfect vacation come true with{" "}
                <span className="text-[#1565C0]">Jobiho</span>
              </h2>
              <p className="text-gray-600 font-body leading-relaxed mb-8">
                We are a team of experienced travel experts who specialize in planning and organizing
                unforgettable travel experiences for our clients with a wide range of travel services,
                including flight bookings, hotel reservations and more.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/tours-packages"
                  className="inline-flex items-center gap-2 bg-[#1565C0] text-white px-7 py-3.5 rounded-xl font-semibold font-heading text-sm hover:bg-[#0D47A1] transition-colors shadow-lg"
                >
                  Local travel guides
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 border-2 border-[#1565C0] text-[#1565C0] px-7 py-3.5 rounded-xl font-semibold font-heading text-sm hover:bg-[#1565C0]/5 transition-colors"
                >
                  More Info
                </Link>
              </div>
            </motion.div>

            {/* Infinite-scroll photo columns: left goes DOWN, right goes UP */}
            <div className="relative h-[420px] lg:h-[520px] overflow-hidden rounded-3xl">
              <div className="absolute inset-0 flex gap-3">
                {/* Left column — infinite scroll DOWN */}
                <div className="flex-1 overflow-hidden relative">
                  <motion.div
                    className="flex flex-col gap-3"
                    animate={{ y: ["-50%", "0%"] }}
                    transition={{ duration: 25, ease: "linear", repeat: Infinity }}
                  >
                    {photosLeftDuped.map((src, i) => (
                      <div key={`pl-${i}`} className="rounded-2xl overflow-hidden shadow-md shrink-0">
                        <img src={asset(src)} alt="" className="w-full h-[160px] object-cover" />
                      </div>
                    ))}
                  </motion.div>
                </div>
                {/* Right column — infinite scroll UP */}
                <div className="flex-1 overflow-hidden relative">
                  <motion.div
                    className="flex flex-col gap-3"
                    animate={{ y: ["0%", "-50%"] }}
                    transition={{ duration: 25, ease: "linear", repeat: Infinity }}
                  >
                    {photosRightDuped.map((src, i) => (
                      <div key={`pr-${i}`} className="rounded-2xl overflow-hidden shadow-md shrink-0">
                        <img src={asset(src)} alt="" className="w-full h-[160px] object-cover" />
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
              {/* Top/bottom fade masks */}
              <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ 3. Our Story (from about.html) ═══════ */}
      <section className="py-20 lg:py-28 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-4">
              <motion.div {...fadeLeft(0.1)}>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-0.5 bg-[#FFC107]" />
                  <span className="text-[#1565C0] text-sm font-semibold font-heading uppercase tracking-wider">
                    Our Story
                  </span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold font-heading text-[#1F2937] leading-tight mb-5">
                  It feels like family <br className="hidden md:block" />(because it is)
                </h2>
                <p className="text-gray-600 font-body leading-relaxed mb-3">
                  What started as a small team with a shared love for travel has grown into a global
                  platform trusted by thousands. We believe every journey should feel personal — because
                  we treat every traveller like one of our own.
                </p>
                <p className="text-gray-600 font-body leading-relaxed mb-8">
                  From curated itineraries to 24/7 support, our mission is to make exploring the world
                  effortless and unforgettable.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border-2 border-[#1565C0] text-[#1565C0] px-6 py-3 rounded-xl font-semibold font-heading text-sm hover:bg-[#1565C0]/5 transition-colors"
                >
                  Read more
                </Link>
              </motion.div>
            </div>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 gap-4">
                {storyImages.map((src, i) => (
                  <motion.div
                    key={src}
                    {...(i === 0 ? fadeLeft(0.2) : fadeRight(0.3))}
                    className="rounded-2xl overflow-hidden shadow-lg"
                  >
                    <img
                      src={asset(src)}
                      alt={`Our story ${i + 1}`}
                      className="w-full h-[280px] sm:h-[340px] lg:h-[420px] object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ 4. CTA Banner (KEEP) ═══════ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={asset("/11822126-uhd_2560_1440_30fps.mp4")} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#1565C0]/50 to-[#0D47A1]/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <motion.div {...fadeUp(0.1)} className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#FFC107] font-heading">
              Exclusive travel deals
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white leading-tight">
              Book your dream vacation today!
            </h2>
            <Link
              href="/tours-packages"
              className="mt-8 inline-flex items-center gap-2 bg-[#FFC107] text-[#1F2937] px-7 py-3.5 rounded-xl font-bold font-heading text-sm hover:bg-[#FF8F00] transition-colors shadow-lg"
            >
              Read More
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════ 5. Stats / Counters (KEEP) ═══════ */}
      <section className="py-20 lg:py-28 bg-[#F8F9FA] relative overflow-hidden">
        {/* Animated floating orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute w-72 h-72 rounded-full bg-[#1565C0]/[0.04] blur-3xl"
            animate={{ x: [0, 80, -40, 0], y: [0, -60, 30, 0] }}
            transition={{ duration: 18, ease: "easeInOut", repeat: Infinity }}
            style={{ top: "10%", left: "5%" }}
          />
          <motion.div
            className="absolute w-96 h-96 rounded-full bg-[#FFC107]/[0.05] blur-3xl"
            animate={{ x: [0, -70, 50, 0], y: [0, 40, -50, 0] }}
            transition={{ duration: 22, ease: "easeInOut", repeat: Infinity }}
            style={{ top: "20%", right: "0%" }}
          />
          <motion.div
            className="absolute w-60 h-60 rounded-full bg-[#1565C0]/[0.03] blur-2xl"
            animate={{ x: [0, 50, -30, 0], y: [0, -40, 60, 0] }}
            transition={{ duration: 15, ease: "easeInOut", repeat: Infinity }}
            style={{ bottom: "5%", left: "40%" }}
          />
        </div>
        {/* World map background image */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <img
            src={asset("/images/maps-world.png")}
            alt=""
            className="w-full max-w-6xl opacity-[0.18]"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div {...fadeUp(0)} className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-0.5 bg-[#FFC107]" />
              <span className="text-[#1565C0] text-sm font-semibold font-heading uppercase tracking-wider">
                Our Impact
              </span>
              <div className="w-8 h-0.5 bg-[#FFC107]" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold font-heading text-[#1F2937] mb-4">
              We&apos;re here to introduce you to all<br />the places out there
            </h2>
            <p className="text-gray-600 font-body text-lg max-w-xl mx-auto">
              Connecting travelers with curated experiences across the globe, backed by verified operators and local partners.
            </p>
          </motion.div>
          <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((s, i) => (
              <motion.div key={s.label} {...fadeUp(i * 0.1)} className="bg-white rounded-2xl border border-gray-100 shadow-sm pl-6 pr-5 py-6 relative overflow-hidden">
                <div className="absolute left-0 top-4 bottom-4 w-1 rounded-r-full bg-[#FFC107]" />
                <div className="text-3xl md:text-4xl font-bold font-heading text-[#FFC107] mb-1">
                  <CountUp target={s.target} suffix={s.suffix} start={statsInView} />
                </div>
                <p className="text-sm text-gray-500 font-body">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ 6. Leadership Team (from about.html) ═══════ */}
      {/* <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-0.5 bg-[#FFC107]" />
              <span className="text-[#1565C0] text-sm font-semibold font-heading uppercase tracking-wider">
                Leadership Team
              </span>
              <div className="w-8 h-0.5 bg-[#FFC107]" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold font-heading text-[#1F2937] mb-4">
              Our people are your people, too
            </h2>
            <p className="text-gray-600 font-body text-lg max-w-lg mx-auto">
              The leadership team guiding Jobiho&apos;s success.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                {...fadeUp(0.12 * i)}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group text-center"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-lg mb-5">
                  <img
                    src={asset(member.image)}
                    alt={member.name}
                    className="w-full h-[360px] sm:h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-lg font-bold font-heading text-[#1F2937]">{member.name}</h3>
                <p className="text-sm text-gray-500 font-body">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ═══════ 7. Testimonials (KEEP) ═══════ */}
      <section className="py-20 lg:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-0.5 bg-[#FFC107]" />
              <span className="text-[#1565C0] text-sm font-semibold font-heading uppercase tracking-wider">
                Traveler Stories
              </span>
              <div className="w-8 h-0.5 bg-[#FFC107]" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold font-heading text-[#1F2937]">
              Stories from Satisfied{" "}
              <span className="text-[#1565C0]">Customers</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative min-h-[260px]">
              {testimonials.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={false}
                  animate={{ opacity: activeTesti === i ? 1 : 0, y: activeTesti === i ? 0 : 30 }}
                  transition={{ duration: 0.6 }}
                  className={activeTesti === i ? "relative" : "absolute inset-0 pointer-events-none"}
                >
                  <div className="bg-[#F8F9FA] rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 relative">
                    <Quote className="absolute top-6 right-8 w-10 h-10 text-[#1565C0]/10" />
                    <p className="text-lg md:text-xl text-[#1F2937] font-body leading-relaxed italic mb-8">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="flex items-center gap-4">
                      <img src={asset(t.image)} alt={t.name} className="w-14 h-14 rounded-full object-cover ring-2 ring-[#1565C0]/20" />
                      <div>
                        <h4 className="font-bold font-heading text-[#1F2937]">{t.name}</h4>
                        <span className="text-sm text-gray-500 font-body">{t.location}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center justify-center gap-3 mt-10">
              <button
                onClick={() => setActiveTesti((p) => (p - 1 + testimonials.length) % testimonials.length)}
                className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#1565C0] hover:text-white hover:border-[#1565C0] transition-colors"
              >
                <svg width="7" height="13" viewBox="0 0 7 13" fill="none"><path d="M6.25 0.75L0.75 6.25L6.25 11.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => setActiveTesti(i)} className={`w-3 h-3 rounded-full transition-colors ${activeTesti === i ? "bg-[#1565C0]" : "bg-gray-300"}`} />
                ))}
              </div>
              <button
                onClick={() => setActiveTesti((p) => (p + 1) % testimonials.length)}
                className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#1565C0] hover:text-white hover:border-[#1565C0] transition-colors"
              >
                <svg width="7" height="13" viewBox="0 0 7 13" fill="none"><path d="M0.75 11.75L6.25 6.25L0.75 0.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ 8. Info / Help (from about.html) ═══════ */}
      <section className="py-20 lg:py-28 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-0.5 bg-[#FFC107]" />
              <span className="text-[#1565C0] text-sm font-semibold font-heading uppercase tracking-wider">
                Need Help?
              </span>
              <div className="w-8 h-0.5 bg-[#FFC107]" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold font-heading text-[#1F2937]">
              Not sure which tour is right for you?{" "}
              <br className="hidden md:block" />
              We&apos;re here to <span className="text-[#1565C0]">help.</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {infoCards.map((card, i) => (
              <motion.div
                key={card.title}
                {...fadeUp(0.1 * i)}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-[#1565C0]/10 text-[#1565C0] group-hover:bg-[#1565C0] group-hover:text-white flex items-center justify-center mb-5 transition-colors duration-300">
                  <card.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold font-heading text-[#1F2937] mb-3">{card.title}</h3>
                <p className="text-sm text-gray-600 font-body leading-relaxed mb-6">{card.text}</p>
                <Link
                  href={card.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1565C0] font-heading border-b-2 border-[#1565C0]/30 hover:border-[#1565C0] transition-colors pb-0.5"
                >
                  {card.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ 9. Awards & Recognition (KEEP) ═══════ */}
      <section className="py-20 lg:py-28 bg-[#F8F9FA] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-0.5 bg-[#FFC107]" />
              <span className="text-[#1565C0] text-sm font-semibold font-heading uppercase tracking-wider">
                Recognition
              </span>
              <div className="w-8 h-0.5 bg-[#FFC107]" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold font-heading text-[#1F2937] mb-4">
              Awards & <span className="text-[#1565C0]">Recognition</span>
            </h2>
            <p className="text-gray-600 font-body text-lg max-w-2xl mx-auto">
              Milestones that reflect our commitment to trust, quality, and seamless travel experiences.
            </p>
          </motion.div>
          <div className="relative overflow-hidden">
            <motion.div className="flex gap-6 w-max" animate={{ x: ["0%", "-50%"] }} transition={{ duration: 40, ease: "linear", repeat: Infinity }}>
              {awardsLane.map((award, i) => (
                <motion.div
                  key={`${award.title}-${i}`}
                  whileHover={{ y: -6 }}
                  className="w-[320px] md:w-[360px] shrink-0 rounded-2xl bg-gradient-to-br from-[#FFC107]/20 via-[#FFC107]/10 to-[#1565C0]/10 border border-[#FFC107]/30 shadow-sm hover:shadow-xl p-6 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#FFC107] text-white flex items-center justify-center mb-4 shadow-md">
                    <award.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold font-heading text-xl text-[#1F2937]">{award.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 font-body">{award.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════ 10. Brands We Collaborate With (KEEP) ═══════ */}
      <section className="py-20 lg:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-0.5 bg-[#FFC107]" />
              <span className="text-[#1565C0] text-sm font-semibold font-heading uppercase tracking-wider">
                Our Partners
              </span>
              <div className="w-8 h-0.5 bg-[#FFC107]" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold font-heading text-[#1F2937] mb-4">
              Brands We <span className="text-[#1565C0]">Collaborate</span> With
            </h2>
            <p className="text-gray-600 font-body text-lg max-w-2xl mx-auto">
              A growing network of global travel, hospitality, and experience partners.
            </p>
          </motion.div>
          <div className="space-y-4">
            <div className="relative overflow-hidden">
              <motion.div className="flex gap-4 w-max" animate={{ x: ["0%", "-50%"] }} transition={{ duration: 30, ease: "linear", repeat: Infinity }}>
                {brandsLaneOne.map((brand, i) => (
                  <motion.div key={`${brand}-l1-${i}`} whileHover={{ y: -4 }} className="h-20 min-w-[220px] rounded-xl border border-[#FFC107]/30 bg-gradient-to-br from-[#FFC107]/15 to-[#FFC107]/5 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300">
                    <span className="text-sm md:text-base font-semibold font-heading text-[#1F2937] text-center px-3">{brand}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            <div className="relative overflow-hidden">
              <motion.div className="flex gap-4 w-max" animate={{ x: ["-50%", "0%"] }} transition={{ duration: 34, ease: "linear", repeat: Infinity }}>
                {brandsLaneTwo.map((brand, i) => (
                  <motion.div key={`${brand}-l2-${i}`} whileHover={{ y: -4 }} className="h-20 min-w-[220px] rounded-xl border border-[#FFC107]/30 bg-gradient-to-br from-[#FFC107]/15 to-[#FFC107]/5 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300">
                    <span className="text-sm md:text-base font-semibold font-heading text-[#1F2937] text-center px-3">{brand}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
