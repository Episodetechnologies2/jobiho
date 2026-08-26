"use client";

import { asset } from "@/lib/basePath";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  Mountain,
  Plane,
  Leaf,
  UtensilsCrossed,
  Sparkles,
  ArrowRight,
  Compass,
  MapPin,
  Calendar,
  CheckCircle2,
  Globe,
  Users2,
  Globe2,
  TrendingUp,
  PiggyBank,
  BarChart3,
  Mail,
  Headset,
  Building2,
  Palmtree,
} from "lucide-react";

export type CategoryCard = {
  iconName: keyof typeof iconMap;
  title: string;
  description: string;
  color: string;
  bgLight: string;
  iconBg: string;
  iconColor: string;
  count: string;
  image: string;
};

const iconMap = {
  Mountain,
  Plane,
  Leaf,
  UtensilsCrossed,
  Sparkles,
  Compass,
  MapPin,
  Calendar,
  CheckCircle2,
  Globe,
  Users2,
  Globe2,
  TrendingUp,
  PiggyBank,
  BarChart3,
  Mail,
  Headset,
  Building2,
  Palmtree,
};

const defaultCategories: CategoryCard[] = [
  {
    iconName: "Plane",
    title: "International Tours",
    description:
      "Handcrafted multi-city tour packages across Asia, Europe, the Americas, Africa, and beyond — tailored for every travel style.",
    color: "from-blue-500 to-[#1565C0]",
    bgLight: "bg-blue-50",
    iconBg: "bg-blue-100",
    iconColor: "text-[#1565C0]",
    count: "300+ packages",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80",
  },
  {
    iconName: "Compass",
    title: "Cultural Heritage",
    description:
      "Step inside UNESCO World Heritage Sites, ancient wonders, and living civilisations from the Pyramids to Angkor Wat.",
    color: "from-amber-500 to-orange-500",
    bgLight: "bg-amber-50",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    count: "180+ tours",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600&q=80",
  },
  {
    iconName: "Palmtree",
    title: "Beach & Islands",
    description:
      "Turquoise lagoons, overwater villas, coral reef diving, and tropical paradise escapes across the Maldives, Bali, and beyond.",
    color: "from-cyan-500 to-blue-400",
    bgLight: "bg-cyan-50",
    iconBg: "bg-cyan-100",
    iconColor: "text-cyan-600",
    count: "140+ escapes",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
  },
  {
    iconName: "Mountain",
    title: "Adventure Trekking",
    description:
      "Summit Himalayan passes, traverse Patagonian glaciers, hike Andean ridgelines, and conquer trails on every continent.",
    color: "from-orange-500 to-red-500",
    bgLight: "bg-orange-50",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    count: "200+ treks",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&q=80",
  },
  {
    iconName: "Leaf",
    title: "Wildlife & Safari",
    description:
      "Witness the Great Migration in the Serengeti, Big Five encounters in Masai Mara, and rare wildlife in the Amazon rainforest.",
    color: "from-green-500 to-emerald-500",
    bgLight: "bg-green-50",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    count: "90+ safaris",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80",
  },
  {
    iconName: "Headset",
    title: "Medical Tourism",
    description:
      "Pre-arranged hospital stays, specialist consultations, Ayurveda retreats, and therapeutic wellness — all coordinated with transfers, accommodation, and aftercare.",
    color: "from-teal-500 to-cyan-600",
    bgLight: "bg-teal-50",
    iconBg: "bg-teal-100",
    iconColor: "text-teal-600",
    count: "60+ programmes",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80",
  },
  {
    iconName: "Globe2",
    title: "Educational Tourism",
    description:
      "Field trips to historical landmarks, factory and manufacturing-unit visits, university campus tours, archaeology digs, and immersive learning experiences worldwide.",
    color: "from-indigo-500 to-violet-500",
    bgLight: "bg-indigo-50",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
    count: "80+ programmes",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80",
  },
  {
    iconName: "Building2",
    title: "Corporate Tourism",
    description:
      "Team offsites, incentive travel, conference-city packages, executive retreats, and MICE arrangements in global business hubs and luxury resorts.",
    color: "from-slate-600 to-gray-800",
    bgLight: "bg-slate-50",
    iconBg: "bg-slate-100",
    iconColor: "text-slate-600",
    count: "50+ packages",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

type CategoriesProps = {
  headingBadge?: string;
  headingTitle?: string;
  headingHighlight?: string;
  headingDescription?: string;
  categories?: CategoryCard[];
};

export default function Categories({
  headingBadge = "Tour Categories",
  headingTitle = "Explore the World,",
  headingHighlight = "Your Way",
  headingDescription = "From ancient civilisations and tropical islands to Himalayan treks and African safaris — find your perfect journey across our curated tour categories.",
  categories = defaultCategories,
}: CategoriesProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="categories" className="py-20 lg:py-28 bg-white">
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
              {headingBadge}
            </span>
            <div className="w-8 h-0.5 bg-[#FFC107]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold font-heading text-[#1F2937] mb-4">
            {headingTitle} <span className="text-[#1565C0]">{headingHighlight}</span>
          </h2>
          <p className="text-gray-600 font-body text-lg max-w-2xl mx-auto">
            {headingDescription}
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {categories.map((cat, i) => (
            <Link key={i} href="/tours-packages" className="block">
              <motion.div
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 cursor-pointer bg-white border border-gray-100 h-full ${
                  i === 0 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={asset(cat.image)}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${cat.color} opacity-60 group-hover:opacity-50 transition-opacity`} />
                  {/* Count badge */}
                  <div className="absolute top-3 right-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700 font-heading">
                    {cat.count}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-3">
                    <div className={`w-12 h-12 rounded-xl ${cat.iconBg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200`}>
                      {(() => {
                        const Icon = iconMap[cat.iconName];
                        return <Icon className={`w-6 h-6 ${cat.iconColor}`} />;
                      })()}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold font-heading text-[#1F2937] mb-1">
                        {cat.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-500 font-body text-sm leading-relaxed mb-4">
                    {cat.description}
                  </p>
                  <div className="flex items-center gap-1 text-[#1565C0] font-semibold text-sm font-heading group-hover:gap-2 transition-all duration-200">
                    <span>Explore Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
