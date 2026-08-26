"use client";

import { asset } from "@/lib/basePath";
import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { MapPin, Star, ArrowRight, Heart } from "lucide-react";

export type DestinationCard = {
  name: string;
  country: string;
  slug: string;
  description: string;
  image: string;
  rating: number;
  reviews: number;
  packages: number;
  tag: string;
  tagColor: string;
};

const defaultDestinations: DestinationCard[] = [
  {
    name: "Tokyo",
    country: "Japan",
    slug: "tokyo",
    description: "Neon-lit streets, Michelin-star dining, ancient shrines, and a seamless blend of old Japan and ultramodern city life.",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80",
    rating: 4.9,
    reviews: 8420,
    packages: 48,
    tag: "City",
    tagColor: "bg-emerald-100 text-emerald-700",
  },
  {
    name: "Bali",
    country: "Indonesia",
    slug: "bali",
    description: "Hindu temples, sacred monkey forests, terraced rice paddies, and spiritual healing retreats on the Island of the Gods.",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80",
    rating: 4.9,
    reviews: 11280,
    packages: 72,
    tag: "Spiritual",
    tagColor: "bg-violet-100 text-violet-700",
  },
  {
    name: "Paris",
    country: "France",
    slug: "paris",
    description: "The Louvre, Versailles, Notre-Dame, and centuries of art, haute cuisine, and romance along the Seine.",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80",
    rating: 4.8,
    reviews: 14600,
    packages: 55,
    tag: "Heritage",
    tagColor: "bg-amber-100 text-amber-700",
  },
  {
    name: "Dubai",
    country: "UAE",
    slug: "dubai",
    description: "Futuristic skylines, desert dune safaris, world-record landmarks, and unmatched luxury experiences.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80",
    rating: 4.8,
    reviews: 9870,
    packages: 61,
    tag: "Luxury",
    tagColor: "bg-yellow-100 text-yellow-700",
  },
  {
    name: "Machu Picchu",
    country: "Peru",
    slug: "machu-picchu",
    description: "The Lost City of the Incas, perched above the clouds in the Andes — one of humanity's most awe-inspiring creations.",
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=600&q=80",
    rating: 4.9,
    reviews: 7340,
    packages: 38,
    tag: "Historical",
    tagColor: "bg-amber-100 text-amber-700",
  },
  {
    name: "Serengeti",
    country: "Tanzania",
    slug: "serengeti",
    description: "Endless golden plains, the Great Wildebeest Migration, Big Five game drives, and unforgettable African sunsets.",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&q=80",
    rating: 4.9,
    reviews: 5190,
    packages: 29,
    tag: "Safari",
    tagColor: "bg-green-100 text-green-700",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

type DestinationsProps = {
  headingBadge?: string;
  headingTitle?: string;
  headingHighlight?: string;
  headingDescription?: string;
  destinations?: DestinationCard[];
};

export default function Destinations({
  headingBadge = "Featured Destinations",
  headingTitle = "Where Will You",
  headingHighlight = "Go Next?",
  headingDescription = "From ancient Incan citadels to neon-lit Asian megacities — explore our most-loved destinations across every continent.",
  destinations = defaultDestinations,
}: DestinationsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="destinations" className="py-20 lg:py-28 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-0.5 bg-[#FFC107]" />
              <span className="text-[#1565C0] text-sm font-semibold font-heading uppercase tracking-wider">
                {headingBadge}
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold font-heading text-[#1F2937] leading-tight">
              {headingTitle} <span className="text-[#1565C0]">{headingHighlight}</span>
            </h2>
            <p className="text-gray-600 font-body text-lg mt-3 max-w-xl">
              {headingDescription}
            </p>
          </div>
          <Link href="/tours-packages" className="flex items-center gap-2 text-[#1565C0] font-semibold font-heading text-sm hover:gap-3 transition-all duration-200 whitespace-nowrap">
            View All Destinations <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {destinations.map((dest, i) => (
            <Link key={i} href={`/tours-packages/${dest.slug}`} className="block">
              <motion.div
                variants={cardVariants}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100 h-full"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={asset(dest.image)}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  {/* Tag */}
                  <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold font-heading ${dest.tagColor}`}>
                    {dest.tag}
                  </div>

                  {/* Wishlist */}
                  <button
                    onClick={(e) => e.preventDefault()}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm hover:bg-white transition-colors group/heart"
                  >
                    <Heart className="w-4 h-4 text-gray-400 group-hover/heart:text-red-500 group-hover/heart:fill-red-500 transition-colors" />
                  </button>

                  {/* Location */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1 text-white text-xs font-medium">
                    <MapPin className="w-3 h-3" />
                    <span>{dest.country}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold font-heading text-[#1F2937]">{dest.name}</h3>
                    <div className="flex items-center gap-1 shrink-0">
                      <Star className="w-4 h-4 text-[#FFC107] fill-[#FFC107]" />
                      <span className="text-sm font-semibold text-gray-700">{dest.rating}</span>
                      <span className="text-xs text-gray-400">({dest.reviews.toLocaleString()})</span>
                    </div>
                  </div>

                  <p className="text-gray-500 font-body text-sm leading-relaxed mb-4">
                    {dest.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-gray-400 font-body">
                      {dest.packages}+ tour packages
                    </span>
                    <span className="inline-flex items-center gap-1 px-4 py-2 bg-[#1565C0] group-hover:bg-[#0D47A1] text-white text-xs font-semibold font-heading rounded-lg shadow-sm group-hover:shadow-md transition-all duration-200">
                      Explore <ArrowRight className="w-3 h-3" />
                    </span>
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
