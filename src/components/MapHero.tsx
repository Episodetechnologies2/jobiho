"use client";

import { asset } from "@/lib/basePath";
import { getCountryPhotos, getDestinationPhotos, getRegionPhotos } from "@/data/photo_pack/resolver";
import { useState, useCallback, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker,
} from "react-simple-maps";
import Link from "next/link";
import { ArrowLeft, ChevronRight, Globe, Star, Clock, MapPin, ArrowRight, SlidersHorizontal } from "lucide-react";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

interface Destination {
  name: string;
  coords: [number, number];
  tag: string;
  tagColor: string;
  description: string;
  image: string;
  slug?: string;
}

interface CountryData {
  center: [number, number];
  zoom: number;
  background: string;
  destinations: Destination[];
}

interface RegionData {
  label: string;
  center: [number, number];
  zoom: number;
  background: string;
  description: string;
  highlightCountries: string[];
  countryData: Record<string, CountryData>;
}

function getUpdatedDestinationImage(
  regionLabel: string | null,
  countryName: string | null,
  destinationName: string,
  fallback: string,
): string {
  if (!regionLabel || !countryName) return fallback;
  return getDestinationPhotos(regionLabel, countryName, destinationName)[0]?.image ?? fallback;
}

const baseRegionsData: Record<string, RegionData> = {
  "south-asia": {
    label: "South Asia",
    center: [78, 20],
    zoom: 3.8,
    background: "/images/hero-destinations.jpg",
    description: "From Himalayan peaks to Indian Ocean islands — explore South Asia's incredible diversity.",
    highlightCountries: ["India", "Sri Lanka", "Nepal", "Bangladesh", "Bhutan", "Pakistan", "Maldives"],
    countryData: {
      India: {
        center: [80, 22], zoom: 4.8, background: "/images/hero-experiences.jpg",
        destinations: [
          { name: "Varanasi", coords: [83.0, 25.32], tag: "Spiritual", tagColor: "bg-violet-500", description: "The holiest city — Ganga Aarti, ancient ghats, and sacred rituals dating back millennia.", image: "/images/dest-22.jpg" },
          { name: "Rajasthan", coords: [73.8, 26.9], tag: "Historical", tagColor: "bg-amber-600", description: "Royal forts, grand palaces, desert safaris, and living heritage of warrior kings.", image: "/images/dest-16.jpg" },
          { name: "Kerala", coords: [76.3, 10.0], tag: "Medical", tagColor: "bg-teal-500", description: "Authentic Ayurveda retreats, backwater wellness cruises, and holistic healing traditions.", image: "/images/dest-19.jpg" },
          { name: "Himachal Pradesh", coords: [77.2, 31.8], tag: "Sports", tagColor: "bg-orange-500", description: "Paragliding, trekking, skiing, river rafting, and high-altitude adventure sports.", image: "/images/dest-18.jpg" },
          { name: "Goa", coords: [74.0, 15.3], tag: "Beach", tagColor: "bg-blue-500", description: "Golden beaches, vibrant nightlife, and unforgettable coastal energy.", image: "/images/dest-15.jpg" },
          { name: "Rishikesh", coords: [78.27, 30.09], tag: "Wellness", tagColor: "bg-emerald-500", description: "Yoga capital of the world — ashrams, meditation, and spiritual immersion.", image: "/images/dest-23.jpg" },
          { name: "Andaman Islands", coords: [92.7, 11.7], tag: "Island", tagColor: "bg-cyan-500", description: "Untouched islands, scuba diving, and serene tropical escapes.", image: "/images/dest-17.jpg" },
        ],
      },
      Maldives: {
        center: [73.2, 3.2], zoom: 8, background: "/images/dest-14.jpg",
        destinations: [
          { name: "Malé Atoll", coords: [73.5, 4.17], tag: "Luxury", tagColor: "bg-amber-500", description: "Overwater villas, crystal lagoons, and world-class snorkeling.", image: "/images/dest-14.jpg" },
        ],
      },
      "Sri Lanka": {
        center: [80.8, 7.9], zoom: 7, background: "/images/dest-6.jpg",
        destinations: [
          { name: "Colombo", coords: [79.9, 6.9], tag: "Medical", tagColor: "bg-teal-500", description: "Affordable cardiac, orthopaedic, and dental treatments in JCI-accredited hospitals with post-op recovery on tropical shores.", image: "/images/dest-6.jpg" },
        ],
      },
    },
  },
  "east-asia": {
    label: "East Asia",
    center: [115, 33],
    zoom: 3,
    background: "/images/city-2.jpg",
    description: "Ancient traditions meet futuristic cities — discover the wonders of East Asia.",
    highlightCountries: ["Japan", "South Korea", "China", "Taiwan", "Mongolia"],
    countryData: {
      China: {
        center: [104, 35], zoom: 3.5, background: "/images/offer-2.jpg",
        destinations: [
          { name: "Great Wall", coords: [116.57, 40.43], tag: "Historical", tagColor: "bg-amber-600", description: "Walk along humanity's greatest structure — millennia of defense, engineering, and mountain vistas.", image: "/images/offer-2.jpg" },
          { name: "Shanghai", coords: [121.47, 31.23], tag: "Education", tagColor: "bg-indigo-500", description: "Factory-floor field trips, advanced manufacturing units, tech innovation parks, and urban planning study tours.", image: "/images/offer-3.jpg" },
          { name: "Tibet", coords: [91.17, 29.65], tag: "Spiritual", tagColor: "bg-violet-500", description: "Potala Palace, Buddhist monasteries, and profound traditions atop the world.", image: "/images/offer-4.jpg" },
          { name: "Xi'an", coords: [108.94, 34.34], tag: "Heritage", tagColor: "bg-purple-500", description: "Terracotta Warriors, ancient city walls, and Silk Road origins.", image: "/images/offer-5.jpg" },
          { name: "Guilin", coords: [110.29, 25.27], tag: "Nature", tagColor: "bg-teal-500", description: "Karst mountains, Li River cruises, and otherworldly landscapes.", image: "/images/trand-1.jpg" },
        ],
      },
      Japan: {
        center: [137, 36], zoom: 5.5, background: "/images/city-2.jpg",
        destinations: [
          { name: "Tokyo", coords: [139.69, 35.69], tag: "Corporate", tagColor: "bg-slate-600", description: "Executive retreats, tech-industry immersion tours, and conference facilities in Asia's premier business capital.", image: "/images/city-2.jpg" },
          { name: "Kyoto", coords: [135.77, 35.01], tag: "Spiritual", tagColor: "bg-violet-500", description: "Zen temples, bamboo groves, geisha districts, and ancient tea ceremonies.", image: "/images/tour-6.jpg" },
          { name: "Osaka", coords: [135.5, 34.69], tag: "Food", tagColor: "bg-orange-500", description: "Japan's kitchen — street food capital with a vibrant nightlife scene.", image: "/images/city-6.jpg" },
          { name: "Mount Fuji", coords: [138.73, 35.36], tag: "Sports", tagColor: "bg-blue-600", description: "Summit climbs, lakeside trails, and hot spring recovery after the ascent.", image: "/images/tour-7.jpg" },
        ],
      },
      "South Korea": {
        center: [127.5, 36], zoom: 6.5, background: "/images/dest-1.jpg",
        destinations: [
          { name: "Seoul", coords: [126.98, 37.57], tag: "Education", tagColor: "bg-indigo-500", description: "Field trips to Samsung & Hyundai factories, DMZ border tours, historic palace visits, and K-culture immersion.", image: "/images/dest-1.jpg" },
          { name: "Busan", coords: [129.07, 35.18], tag: "Beach", tagColor: "bg-blue-500", description: "Coastal temples, colorful villages, and fresh seafood markets.", image: "/images/dest-2.jpg" },
          { name: "Jeju Island", coords: [126.53, 33.49], tag: "Nature", tagColor: "bg-teal-500", description: "Volcanic landscapes, tangerine farms, and romantic coastal trails.", image: "/images/dest-3.jpg" },
        ],
      },
      Mongolia: {
        center: [104, 47], zoom: 4.5, background: "/images/tour-1.jpg",
        destinations: [
          { name: "Ulaanbaatar", coords: [106.92, 47.92], tag: "City", tagColor: "bg-emerald-500", description: "Nomadic culture meets modern capital — Genghis Khan Square, Buddhist temples, and vibrant markets.", image: "/images/tour-1.jpg" },
          { name: "Gobi Desert", coords: [104.0, 43.5], tag: "Nature", tagColor: "bg-teal-500", description: "Vast dunes, dinosaur fossils, camel treks, and stargazing in Earth's least-populated landscape.", image: "/images/tour-2.jpg" },
          { name: "Khövsgöl Lake", coords: [100.4, 51.1], tag: "Sports", tagColor: "bg-orange-500", description: "Mongolia's 'Blue Pearl' — horseback riding, kayaking, and reindeer herder encounters.", image: "/images/dest-11.jpg" },
        ],
      },
    },
  },
  "southeast-asia": {
    label: "Southeast Asia",
    center: [108, 10],
    zoom: 3.5,
    background: "/images/dest-7.jpg",
    description: "Affordable adventures, rich cultures, and island paradise across Southeast Asia.",
    highlightCountries: ["Thailand", "Indonesia", "Vietnam", "Malaysia", "Cambodia", "Myanmar", "Philippines", "Laos"],
    countryData: {
      Thailand: {
        center: [99.5, 14.2], zoom: 6.2, background: "/images/dest-7.jpg",
        destinations: [
          { name: "Bangkok", coords: [100.5, 13.8], tag: "Medical", tagColor: "bg-teal-500", description: "World-leading hospitals, dental tourism, cosmetic surgery, and traditional Thai medical wellness — all at a fraction of Western costs.", image: "/images/city-1.jpg" },
          { name: "Phuket", coords: [98.4, 7.9], tag: "Beach", tagColor: "bg-blue-500", description: "Crystal waters, vibrant beach clubs, and island adventures.", image: "/images/dest-8.jpg" },
          { name: "Chiang Mai", coords: [98.98, 18.79], tag: "Spiritual", tagColor: "bg-violet-500", description: "Buddhist temples, meditation retreats, and sacred hill-tribe traditions.", image: "/images/dest-9.jpg" },
          { name: "Pattaya", coords: [100.88, 12.93], tag: "Entertainment", tagColor: "bg-orange-500", description: "High-energy nightlife, beach water sports, theme parks, and the hand-carved Sanctuary of Truth.", image: "/images/dest-7.jpg" },
          { name: "Krabi", coords: [98.91, 8.06], tag: "Adventure", tagColor: "bg-emerald-500", description: "Towering limestone cliffs, world-class rock climbing at Railay Beach, and pristine islands.", image: "/images/offer-1.jpg" },
          { name: "Koh Samui", coords: [100.00, 9.50], tag: "Luxury", tagColor: "bg-indigo-500", description: "Palm-fringed beaches, luxury resorts, coconut groves, and access to Ang Thong Marine Park.", image: "/images/banner-3.jpg" },
        ],
      },
      Vietnam: {
        center: [107.5, 16.5], zoom: 5.8, background: "/images/dest-4.jpg",
        destinations: [
          { name: "Ha Long Bay", coords: [107.08, 20.94], tag: "Nature", tagColor: "bg-teal-500", description: "Emerald waters, towering limestone karsts, and luxury cruises.", image: "https://images.pexels.com/photos/3601422/pexels-photo-3601422.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
          { name: "Hanoi", coords: [105.85, 21.03], tag: "Historical", tagColor: "bg-amber-600", description: "Ancient quarter charm, war history museums, and French colonial elegance.", image: "https://images.pexels.com/photos/1684188/pexels-photo-1684188.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
          { name: "Ho Chi Minh City", coords: [106.63, 10.82], tag: "Historical", tagColor: "bg-amber-600", description: "Living history, bustling night markets, Cu Chi Tunnels, and French colonial sights.", image: "https://images.pexels.com/photos/2088205/pexels-photo-2088205.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
          { name: "Da Nang", coords: [108.20, 16.05], tag: "Adventure", tagColor: "bg-emerald-500", description: "Breathtaking bridges, golden My Khe beach, Marble Mountains, and the stunning Golden Bridge.", image: "https://images.pexels.com/photos/2407636/pexels-photo-2407636.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
          { name: "Sapa", coords: [103.84, 22.33], tag: "Nature", tagColor: "bg-teal-500", description: "Mist-covered peaks, emerald terraced rice fields, and ethnic tribal villages at Fansipan's base.", image: "https://images.pexels.com/photos/6020286/pexels-photo-6020286.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
          { name: "Mui Ne", coords: [108.29, 10.93], tag: "Beach", tagColor: "bg-blue-500", description: "Sweeping red and white sand dunes, fishing harbors, and world-class windsurfing.", image: "https://images.pexels.com/photos/6152257/pexels-photo-6152257.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
          { name: "Nha Trang", coords: [109.19, 12.24], tag: "Beach", tagColor: "bg-blue-500", description: "Azure bays, white-sand beaches, exciting marine reserves, and therapeutic mud baths.", image: "https://images.pexels.com/photos/931018/pexels-photo-931018.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
          { name: "Phu Quoc", coords: [104.01, 10.22], tag: "Luxury", tagColor: "bg-indigo-500", description: "Tropical island paradise, pristine beaches, safari parks, and the world's longest over-water cable car.", image: "https://images.pexels.com/photos/7286748/pexels-photo-7286748.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
          { name: "Da Lat", coords: [108.44, 11.94], tag: "Nature", tagColor: "bg-teal-500", description: "City of eternal spring, pine forests, cooling waterfalls, and French-inspired villas.", image: "https://images.pexels.com/photos/236519/pexels-photo-236519.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
          { name: "Hoi An", coords: [108.33, 15.88], tag: "Historical", tagColor: "bg-amber-600", description: "UNESCO Ancient Town, canals, tailor shops, and glowing silk paper lanterns at night.", image: "https://images.pexels.com/photos/6333174/pexels-photo-6333174.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
          { name: "Hue", coords: [107.59, 16.46], tag: "Historical", tagColor: "bg-amber-600", description: "The imperial capital of the Nguyen Dynasty, royal tomb valleys, and the Perfume River.", image: "https://images.pexels.com/photos/1691341/pexels-photo-1691341.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
        ],
      },
      Cambodia: {
        center: [104.5, 12.0], zoom: 7.2, background: "/images/dest-13.jpg",
        destinations: [
          { name: "Siem Reap", coords: [103.86, 13.36], tag: "Historical", tagColor: "bg-amber-600", description: "Angkor Wat — the largest religious monument on Earth and a UNESCO World Heritage Site.", image: "/images/dest-13.jpg" },
          { name: "Phnom Penh", coords: [104.92, 11.56], tag: "Education", tagColor: "bg-indigo-500", description: "Field trips to Tuol Sleng genocide museum, Royal Palaces, silk-weaving workshops, and Cambodian heritage sites.", image: "/images/dest-20.jpg" },
        ],
      },
      Indonesia: {
        center: [115.5, -8.2], zoom: 5.5, background: "/images/dest-10.jpg",
        destinations: [
          { name: "Bali", coords: [115.2, -8.3], tag: "Spiritual", tagColor: "bg-violet-500", description: "Hindu temples, rice terrace meditation, sacred monkey forests, and healing retreats.", image: "/images/dest-10.jpg" },
          { name: "Jogyakarta", coords: [110.37, -7.79], tag: "Historical", tagColor: "bg-amber-600", description: "Ancient Borobudur temples, sultan palaces, and vibrant Javanese culture.", image: "https://mekongvacations.com/wp-content/uploads/2024/03/9-600x400.webp" },
          { name: "Komodo", coords: [119.88, -8.45], tag: "Adventure", tagColor: "bg-orange-500", description: "Volcanic islands, prehistoric dragons, and world-class marine gardens.", image: "https://mekongvacations.com/wp-content/uploads/2024/03/8-600x400.jpg" },
          { name: "Wae Rebo Village", coords: [120.28, -8.63], tag: "Adventure", tagColor: "bg-orange-500", description: "Traditional mountain village with conical thatch houses in Flores.", image: "https://mekongvacations.com/wp-content/uploads/2024/03/3-indo-600x400.jpg" },
        ],
      },
      Laos: {
        center: [102.2, 19.8], zoom: 7.8, background: "/images/dest-13.jpg",
        destinations: [
          { name: "Vientiane", coords: [102.6, 17.97], tag: "Spiritual", tagColor: "bg-violet-500", description: "The quiet capital on the Mekong, known for golden stupas and French-Lao heritage.", image: "https://mekongvacations.com/wp-content/uploads/2020/09/Laos-6.jpg" },
          { name: "Luang Prabang", coords: [102.13, 19.89], tag: "Historical", tagColor: "bg-amber-600", description: "UNESCO ancient capital of royal temples, monk almsgiving, and Kuang Si waterfalls.", image: "https://mekongvacations.com/wp-content/uploads/2020/09/Laos-1.jpg" },
          { name: "Vang Vieng", coords: [102.45, 18.93], tag: "Adventure", tagColor: "bg-orange-500", description: "Stunning karst mountains, blue lagoons, and tubing down the Nam Song river.", image: "https://mekongvacations.com/wp-content/uploads/2020/09/Laos-3.jpg" },
          { name: "Xieng Khuang", coords: [103.22, 19.45], tag: "Historical", tagColor: "bg-amber-600", description: "Gate to the mysterious Plain of Jars, an archaeological wonder of giant stone vessels.", image: "https://mekongvacations.com/wp-content/uploads/2020/09/Laos-4.jpg" },
        ],
      },
      Philippines: {
        center: [122.0, 12.2], zoom: 6.0, background: "/images/about-3.jpg",
        destinations: [
          { name: "Manila", coords: [120.98, 14.59], tag: "Historical", tagColor: "bg-amber-600", description: "Bustling capital known for historical Intramuros walled city, Rizal Park, and Okada fountain.", image: "https://mekongvacations.com/wp-content/uploads/2025/11/MANILA.jpg" },
          { name: "Cebu", coords: [123.89, 10.31], tag: "Adventure", tagColor: "bg-orange-500", description: "Gateway to pristine dive sites, whale shark swimming, and colonial history.", image: "https://mekongvacations.com/wp-content/uploads/2025/11/pack-2.jpg" },
          { name: "Boracay", coords: [121.92, 11.97], tag: "Beach", tagColor: "bg-blue-500", description: "World-famous white sand beaches, active water sports, and sunset sailing.", image: "https://mekongvacations.com/wp-content/uploads/2025/11/pack-7.jpg" },
          { name: "Palawan", coords: [118.73, 9.74], tag: "Nature", tagColor: "bg-teal-500", description: "Island paradise containing Puerto Princesa underground river, El Nido limestone cliffs, and Coron wrecks.", image: "https://mekongvacations.com/wp-content/uploads/2025/11/PUERTO-PRINCESA.jpg" },
        ],
      },
    },
  },
  "north-america": {
    label: "North America",
    center: [-100, 40],
    zoom: 2.5,
    background: "/images/about-1.jpg",
    description: "From iconic skylines to ancient Mayan pyramids — explore North America's diverse landscapes.",
    highlightCountries: ["United States of America", "Mexico", "Canada", "Cuba", "Costa Rica"],
    countryData: {
      "United States of America": {
        center: [-98, 39], zoom: 3.5, background: "/images/about-1.jpg",
        destinations: [
          { name: "New York City", coords: [-74.0, 40.71], tag: "Corporate", tagColor: "bg-slate-600", description: "Wall Street immersion, Fortune-500 office tours, MICE conventions, and executive team-building experiences.", image: "/images/about-1.jpg" },
          { name: "Grand Canyon", coords: [-112.11, 36.1], tag: "Nature", tagColor: "bg-teal-500", description: "A geological wonder — layered red rock revealing millions of years of Earth's history.", image: "/images/about-2.jpg" },
          { name: "Hawaii", coords: [-155.5, 19.9], tag: "Beach", tagColor: "bg-blue-500", description: "Volcanic islands, pristine reefs, and the spirit of aloha.", image: "/images/about-3.jpg" },
          { name: "Yellowstone", coords: [-110.59, 44.43], tag: "Sports", tagColor: "bg-orange-500", description: "Geysers, bison herds, backcountry hiking, and America's first national park.", image: "/images/about-4.jpg" },
          { name: "Sedona", coords: [-111.76, 34.87], tag: "Spiritual", tagColor: "bg-violet-500", description: "Red rock vortexes, healing energy centers, and desert meditation retreats.", image: "/images/about-5.jpg" },
        ],
      },
      Mexico: {
        center: [-102, 23], zoom: 4.5, background: "/images/about-6.jpg",
        destinations: [
          { name: "Chichén Itzá", coords: [-88.57, 20.68], tag: "Historical", tagColor: "bg-amber-600", description: "Iconic Mayan pyramid, equinox light phenomena, and one of the New Seven Wonders.", image: "/images/about-6.jpg" },
          { name: "Mexico City", coords: [-99.13, 19.43], tag: "Education", tagColor: "bg-indigo-500", description: "Field trips to Aztec archaeological sites, Templo Mayor excavation, UNAM campus, and industrial brewery tours.", image: "/images/about-7.jpg" },
          { name: "Cancún", coords: [-86.85, 21.16], tag: "Beach", tagColor: "bg-blue-500", description: "Caribbean turquoise waters, cenote dives, and Mayan riviera adventures.", image: "/images/trand-2.jpg" },
          { name: "Tulum", coords: [-87.46, 20.21], tag: "Spiritual", tagColor: "bg-violet-500", description: "Cliffside Mayan ruins, cacao ceremonies, and temazcal sweat lodge rituals.", image: "/images/trand-3.jpg" },
        ],
      },
      Canada: {
        center: [-106, 56], zoom: 3, background: "/images/about-2.jpg",
        destinations: [
          { name: "Banff", coords: [-115.57, 51.18], tag: "Nature", tagColor: "bg-teal-500", description: "Turquoise glacier lakes, Rocky Mountain peaks, and iconic wilderness trails.", image: "/images/about-2.jpg" },
          { name: "Vancouver", coords: [-123.12, 49.28], tag: "Corporate", tagColor: "bg-slate-600", description: "Tech-industry offsites, mountain-lodge team retreats, and convention facilities with ocean-and-mountain backdrops.", image: "/images/about-3.jpg" },
        ],
      },
    },
  },
  "south-america": {
    label: "South America",
    center: [-58, -15],
    zoom: 2.3,
    background: "/images/about-8.jpg",
    description: "Ancient ruins, Amazon wilderness, and vibrant cultures across South America.",
    highlightCountries: ["Peru", "Brazil", "Colombia", "Argentina", "Chile"],
    countryData: {
      Peru: {
        center: [-75, -10], zoom: 4.5, background: "/images/about-8.jpg",
        destinations: [
          { name: "Machu Picchu", coords: [-72.55, -13.16], tag: "Historical", tagColor: "bg-amber-600", description: "Lost city of the Incas — stone citadel above the clouds and a global wonder.", image: "/images/about-8.jpg" },
          { name: "Cusco", coords: [-71.97, -13.52], tag: "Education", tagColor: "bg-indigo-500", description: "Field trips to Inca archaeological digs, Sacsayhuamán fortress, colonial-era churches, and textile-weaving demonstrations.", image: "/images/about-9.jpg" },
          { name: "Sacred Valley", coords: [-72.15, -13.33], tag: "Spiritual", tagColor: "bg-violet-500", description: "Andean shamanic ceremonies, plant medicine rituals, and mountain pilgrimages.", image: "/images/trand-4.jpg" },
        ],
      },
      Brazil: {
        center: [-51, -14], zoom: 3.5, background: "/images/about-10.jpg",
        destinations: [
          { name: "Rio de Janeiro", coords: [-43.17, -22.91], tag: "City", tagColor: "bg-emerald-500", description: "Christ the Redeemer, Copacabana, Carnival energy, and samba in the streets.", image: "/images/about-10.jpg" },
          { name: "Amazon Rainforest", coords: [-60.02, -3.12], tag: "Nature", tagColor: "bg-teal-500", description: "The lungs of the Earth — biodiversity, indigenous communities, and river expeditions.", image: "/images/offer-1.jpg" },
          { name: "Salvador", coords: [-38.51, -12.97], tag: "Historical", tagColor: "bg-amber-600", description: "Afro-Brazilian heritage, colonial Pelourinho district, and capoeira in the streets.", image: "/images/trand-5.jpg" },
        ],
      },
      Argentina: {
        center: [-64, -34], zoom: 3.5, background: "/images/trand-5.jpg",
        destinations: [
          { name: "Buenos Aires", coords: [-58.38, -34.6], tag: "City", tagColor: "bg-emerald-500", description: "Tango, steak, colorful La Boca neighborhoods, and European-style grandeur.", image: "/images/trand-5.jpg" },
          { name: "Patagonia", coords: [-69.0, -50.0], tag: "Nature", tagColor: "bg-teal-500", description: "Glaciers, dramatic peaks, and some of the most remote hiking on Earth.", image: "/images/offer-1.jpg" },
        ],
      },
    },
  },
  "middle-east": {
    label: "Middle East",
    center: [48, 28],
    zoom: 3.5,
    background: "/images/city-3.jpg",
    description: "Luxury shopping, desert safaris, ancient wonders, and iconic skylines.",
    highlightCountries: ["United Arab Emirates", "Oman", "Qatar", "Saudi Arabia", "Jordan", "Turkey"],
    countryData: {
      "United Arab Emirates": {
        center: [54, 24], zoom: 7, background: "/images/city-3.jpg",
        destinations: [
          { name: "Dubai", coords: [55.3, 25.2], tag: "Corporate", tagColor: "bg-slate-600", description: "World-class MICE facilities, luxury incentive travel, corporate retreats, and the Middle East's top conference destination.", image: "/images/city-3.jpg" },
          { name: "Abu Dhabi", coords: [54.4, 24.45], tag: "Spiritual", tagColor: "bg-violet-500", description: "Sheikh Zayed Grand Mosque, Louvre museum, and interfaith cultural districts.", image: "/images/city-4.jpg" },
        ],
      },
      Turkey: {
        center: [35, 39], zoom: 5.5, background: "/images/tour-3.jpg",
        destinations: [
          { name: "Istanbul", coords: [29.0, 41.0], tag: "Historical", tagColor: "bg-amber-600", description: "Hagia Sophia, Blue Mosque, Grand Bazaar — where empires left their mark.", image: "/images/city-5.jpg" },
          { name: "Cappadocia", coords: [34.83, 38.64], tag: "Sports", tagColor: "bg-orange-500", description: "Hot air balloon flights, cave trekking, and mountain biking through fairy chimneys.", image: "/images/tour-4.jpg" },
        ],
      },
      Jordan: {
        center: [36.5, 31.5], zoom: 7, background: "/images/tour-8.jpg",
        destinations: [
          { name: "Petra", coords: [35.44, 30.33], tag: "Historical", tagColor: "bg-amber-600", description: "The Rose City — carved rock facades and an ancient Nabatean wonder.", image: "/images/tour-8.jpg" },
          { name: "Dead Sea", coords: [35.55, 31.5], tag: "Medical", tagColor: "bg-teal-500", description: "Therapeutic mineral mud, ultra-saline flotation therapy, and skin-healing springs.", image: "/images/tour-9.jpg" },
        ],
      },
      Oman: {
        center: [57, 21], zoom: 6, background: "/images/tour-10.jpg",
        destinations: [
          { name: "Muscat", coords: [58.54, 23.59], tag: "Heritage", tagColor: "bg-purple-500", description: "Grand mosques, souqs, and dramatic mountain-meets-sea landscapes.", image: "/images/tour-10.jpg" },
        ],
      },
    },
  },
  europe: {
    label: "Europe",
    center: [15, 50],
    zoom: 3,
    background: "/images/tour-5.jpg",
    description: "Historic cities, stunning coastlines, and world-class cuisine across Europe.",
    highlightCountries: ["France", "Italy", "Spain", "Greece", "Switzerland", "United Kingdom", "Germany", "Portugal", "Netherlands", "Austria", "Croatia", "Russia"],
    countryData: {
      Russia: {
        center: [50, 58], zoom: 2.5, background: "/images/city-5.jpg",
        destinations: [
          { name: "Moscow", coords: [37.62, 55.75], tag: "Historical", tagColor: "bg-amber-600", description: "Red Square, the Kremlin, Bolshoi Theatre, and centuries of imperial grandeur.", image: "/images/city-5.jpg" },
          { name: "St. Petersburg", coords: [30.32, 59.93], tag: "Heritage", tagColor: "bg-purple-500", description: "Hermitage Museum, Winter Palace, white nights, and baroque waterfront architecture.", image: "/images/city-6.jpg" },
          { name: "Lake Baikal", coords: [108.0, 53.5], tag: "Nature", tagColor: "bg-teal-500", description: "The deepest lake on Earth — crystal-clear Siberian waters and untouched wilderness.", image: "/images/dest-11.jpg" },
        ],
      },
      France: {
        center: [2.5, 47], zoom: 6, background: "/images/tour-5.jpg",
        destinations: [
          { name: "Paris", coords: [2.35, 48.86], tag: "Historical", tagColor: "bg-amber-600", description: "Louvre, Versailles, Notre-Dame — centuries of art, revolution, and romance.", image: "/images/tour-5.jpg" },
        ],
      },
      Spain: {
        center: [-3.7, 40.4], zoom: 5.5, background: "/images/explor-5.jpg",
        destinations: [
          { name: "Barcelona", coords: [2.17, 41.39], tag: "Education", tagColor: "bg-indigo-500", description: "Field trips to Gaudí's architectural masterworks, Maritime Museum, Cava wine production facilities, and design studios.", image: "/images/explor-5.jpg" },
          { name: "Madrid", coords: [-3.7, 40.42], tag: "Historical", tagColor: "bg-amber-600", description: "Royal palaces, Prado masterpieces, and centuries of Spanish imperial legacy.", image: "/images/explor-6.jpg" },
        ],
      },
      Italy: {
        center: [12.5, 42.5], zoom: 5.5, background: "/images/explor-2.jpg",
        destinations: [
          { name: "Rome", coords: [12.5, 41.9], tag: "Historical", tagColor: "bg-amber-600", description: "Colosseum, Vatican, Pantheon — the Eternal City where every street is a museum.", image: "/images/tour-4.jpg" },
          { name: "Amalfi Coast", coords: [14.6, 40.63], tag: "Beach", tagColor: "bg-blue-500", description: "Cliffside villages, turquoise waters, and Italian charm.", image: "/images/explor-2.jpg" },
        ],
      },
      Greece: {
        center: [24, 38], zoom: 5.5, background: "/images/explor-3.jpg",
        destinations: [
          { name: "Santorini", coords: [25.43, 36.39], tag: "Island", tagColor: "bg-cyan-500", description: "White-washed villages, breathtaking sunsets, and Aegean charm.", image: "/images/explor-3.jpg" },
        ],
      },
      Switzerland: {
        center: [8.2, 46.8], zoom: 7, background: "/images/dest-11.jpg",
        destinations: [
          { name: "Swiss Alps", coords: [8.0, 46.6], tag: "Sports", tagColor: "bg-orange-500", description: "Skiing, snowboarding, alpine hiking, and scenic mountain railways.", image: "/images/dest-11.jpg" },
        ],
      },
    },
  },
  africa: {
    label: "Africa",
    center: [20, 5],
    zoom: 2.3,
    background: "/images/tour-1.jpg",
    description: "Wildlife safaris, ancient wonders, and untamed landscapes across Africa.",
    highlightCountries: ["Kenya", "Tanzania", "South Africa", "Morocco", "Egypt", "Namibia", "Botswana", "Uganda", "Rwanda", "Zimbabwe"],
    countryData: {
      Egypt: {
        center: [31, 27], zoom: 5.5, background: "/images/tour-13.jpg",
        destinations: [
          { name: "Pyramids of Giza", coords: [31.13, 29.98], tag: "Historical", tagColor: "bg-amber-600", description: "The last standing Ancient Wonder — 4,500 years of pharaonic engineering.", image: "/images/tour-13.jpg" },
          { name: "Luxor", coords: [32.64, 25.69], tag: "Education", tagColor: "bg-indigo-500", description: "Field trips to Valley of the Kings, Karnak Temple complex, active archaeology excavations, and hieroglyphic workshops.", image: "/images/tour-14.jpg" },
          { name: "Mount Sinai", coords: [33.97, 28.54], tag: "Spiritual", tagColor: "bg-violet-500", description: "Sacred mountain of Moses — sunrise pilgrimage and ancient St. Catherine's Monastery.", image: "/images/breadcrumb-1.jpg" },
        ],
      },
      Kenya: {
        center: [37.9, 0], zoom: 6, background: "/images/tour-1.jpg",
        destinations: [
          { name: "Masai Mara", coords: [35.3, -1.5], tag: "Safari", tagColor: "bg-green-600", description: "Witness the Great Migration and Big Five encounters.", image: "/images/tour-1.jpg" },
        ],
      },
      Tanzania: {
        center: [34, -6], zoom: 5.5, background: "/images/tour-2.jpg",
        destinations: [
          { name: "Serengeti", coords: [34.8, -2.3], tag: "Safari", tagColor: "bg-green-600", description: "Endless plains, dramatic wildlife, and unforgettable sunsets.", image: "/images/tour-2.jpg" },
          { name: "Zanzibar", coords: [39.2, -6.2], tag: "Beach", tagColor: "bg-blue-500", description: "Spice island paradise with pristine beaches and rich history.", image: "/images/explor-4.jpg" },
        ],
      },
      Morocco: {
        center: [-6, 32], zoom: 5.5, background: "/images/tour-11.jpg",
        destinations: [
          { name: "Marrakech", coords: [-8.0, 31.63], tag: "Spiritual", tagColor: "bg-violet-500", description: "Sufi shrines, medina prayers, vibrant souqs, and Jemaa el-Fnaa magic.", image: "/images/tour-11.jpg" },
          { name: "Fes", coords: [-5.0, 34.03], tag: "Education", tagColor: "bg-indigo-500", description: "Field trips to Al-Qarawiyyin (world's oldest university), leather tannery workshops, pottery factories, and Moorish architecture.", image: "/images/tour-12.jpg" },
        ],
      },
      "South Africa": {
        center: [24, -30], zoom: 5, background: "/images/dest-21.jpg",
        destinations: [
          { name: "Cape Town", coords: [18.42, -33.93], tag: "Nature", tagColor: "bg-teal-500", description: "Table Mountain, Cape Winelands, and stunning coastal drives.", image: "/images/dest-21.jpg" },
        ],
      },
    },
  },
  oceania: {
    label: "Oceania",
    center: [133, -25],
    zoom: 2.2,
    background: "/assets/images/aus/Great Barrier Reef, Queensland.png",
    description: "Discover Australia and New Zealand's vibrant culture, unique wildlife, and unforgettable adventures.",
    highlightCountries: ["Australia", "New Zealand"],
    countryData: {
      Australia: {
        center: [133, -25],
        zoom: 3.2,
        background: "/assets/images/aus/Great Barrier Reef, Queensland.png",
        destinations: [
          { name: "Sydney", coords: [151.2093, -33.8688], tag: "City", tagColor: "bg-emerald-500", description: "Sydney Opera House, Harbour Bridge, Bondi Beach, and vibrant waterfront dining.", image: "/assets/images/aus/Sydney,  New South Wales.png" },
          { name: "Melbourne", coords: [144.9631, -37.8136], tag: "City", tagColor: "bg-emerald-500", description: "Creative laneways, street art, coffee culture, and historic victorian gardens.", image: "/assets/images/aus/Melbourne,  Victoria.png" },
          { name: "Great Barrier Reef", coords: [147.6992, -18.2871], tag: "Nature", tagColor: "bg-teal-500", description: "World's largest coral reef system, scenic flight tours, and snorkel safaris.", image: "/assets/images/aus/Great Barrier Reef, Queensland.png" },
          { name: "Uluru (Ayers Rock)", coords: [131.0369, -25.3444], tag: "Spiritual", tagColor: "bg-violet-500", description: "The red outback heart of Australia, drone light shows, and stargazing under desert skies.", image: "/assets/images/aus/Uluru (Ayers Rock),  Northern Territory.png" },
          { name: "The Great Ocean Road", coords: [143.3900, -38.7180], tag: "Adventure", tagColor: "bg-orange-500", description: "Iconic coastal drive, Twelve Apostles rock stacks, and wildlife-filled forests.", image: "/assets/images/aus/The Great Ocean Road, Victoria.png" },
          { name: "Cairns", coords: [145.7781, -16.9186], tag: "Nature", tagColor: "bg-teal-500", description: "Tropical gateway to Green Island coral reefs and Kuranda rainforest village.", image: "/assets/images/aus/Cairns,  Queensland.png" },
          { name: "Gold Coast", coords: [153.4000, -28.0167], tag: "Entertainment", tagColor: "bg-amber-600", description: "Sun, surf, theme park thrills, and family wildlife encounters.", image: "/assets/images/aus/Gold Coast,  Queensland.png" },
          { name: "Perth", coords: [115.8605, -31.9505], tag: "Beach", tagColor: "bg-blue-500", description: "Quokka-filled Rottnest Island, pristine bays, Kings Park, and Swan River views.", image: "/assets/images/aus/Perth,  Western Australia.png" },
          { name: "Adelaide", coords: [138.6007, -34.9285], tag: "Food", tagColor: "bg-orange-500", description: "Culinary markets, Barossa Valley vineyards, and historic fire station stays.", image: "/assets/images/aus/Adelaide,  South Australia.png" },
          { name: "Tasmania", coords: [147.3272, -42.8821], tag: "Nature", tagColor: "bg-teal-500", description: "Salamanca markets, Bruny Island seafood cruises, and rugged national park trails.", image: "/assets/images/aus/Tasmania.png" },
          { name: "Darwin", coords: [130.8456, -12.4634], tag: "Adventure", tagColor: "bg-orange-500", description: "Top End sunsets, Finniss River safaris, and Litchfield waterholes.", image: "/assets/images/australia/3.jpg" },
        ],
      },
      "New Zealand": {
        center: [172, -41],
        zoom: 5.5,
        background: "/assets/images/nz/Queenstown,  The Adventure Capital.png",
        destinations: [
          { name: "Auckland", coords: [174.7633, -36.8485], tag: "City", tagColor: "bg-emerald-500", description: "The City of Sails, two stunning harbors, and the iconic Sky Tower.", image: "/assets/images/nz/Auckland, The City of Sails.png" },
          { name: "Bay of Islands", coords: [174.1170, -35.2500], tag: "Beach", tagColor: "bg-blue-500", description: "Coastal paradise with 144 subtropical islands and rich Maori history.", image: "/assets/images/nz/Bay of Islands  Coastal Paradise.png" },
          { name: "Queenstown", coords: [168.6626, -45.0312], tag: "Adventure", tagColor: "bg-orange-500", description: "The Adventure Capital of the world, offering bungee jumping, jet boating, and skiing.", image: "/assets/images/nz/Queenstown,  The Adventure Capital.png" },
          { name: "Milford Sound", coords: [167.8974, -44.6749], tag: "Nature", tagColor: "bg-teal-500", description: "The eighth wonder of the world, with dramatic cliffs and cascading waterfalls.", image: "/assets/images/nz/Milford Sound, The Eighth Wonder of the World.png" },
          { name: "Rotorua", coords: [176.2497, -38.1368], tag: "Spiritual", tagColor: "bg-violet-500", description: "Geothermal wonderland with bubbling mud pools, hot springs, and Maori culture.", image: "/assets/images/nz/Rotorua, The Geothermal Wonderland.png" },
          { name: "Mount Cook", coords: [170.0962, -43.7342], tag: "Nature", tagColor: "bg-teal-500", description: "New Zealand's tallest peak, offering alpine hikes and turquoise lakes.", image: "/assets/images/nz/Mount Cook  (Aoraki National Park).png" },
          { name: "Franz Josef & Fox Glaciers", coords: [170.1818, -43.3878], tag: "Adventure", tagColor: "bg-orange-500", description: "Unique glaciers descending into temperate rainforest, with guided hikes and heli-flights.", image: "/assets/images/nz/Franz Josef & Fox Glaciers  Ice Meets Rainforest.png" },
          { name: "Wellington", coords: [174.7762, -41.2865], tag: "City", tagColor: "bg-emerald-500", description: "The cool capital city, offering vibrant waterfront, cafes, and movie-making magic.", image: "/assets/images/nz/Wellington The Cool Capital.png" },
          { name: "Christchurch", coords: [172.6362, -43.5321], tag: "City", tagColor: "bg-emerald-500", description: "The Garden City, blending English heritage with post-earthquake modern design.", image: "/assets/images/nz/Christchurch The Garden City.png" },
          { name: "Taupō", coords: [176.0700, -38.6875], tag: "Adventure", tagColor: "bg-orange-500", description: "Gigantic caldera lake with waterfalls, geothermal streams, and trout fishing.", image: "/assets/images/nz/Taupō, Lake,  Volcanoes & Adventure.png" },
        ],
      },
    },
  },
};

const countryToRegion: Record<string, string> = {};
Object.entries(baseRegionsData).forEach(([regionKey, region]) => {
  region.highlightCountries.forEach((country) => {
    countryToRegion[country] = regionKey;
  });
});

const regionMarkers = Object.entries(baseRegionsData).map(([key, region]) => ({
  key,
  label: region.label,
  coords: region.center,
}));

function useWindowWidth() {
  const [width, setWidth] = useState<number>(typeof window !== "undefined" ? window.innerWidth : 1024);
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return width;
}
const getLabelOffset = (name: string) => {
  switch (name) {
    // Laos
    case "Vientiane": return { x: 0, y: 11, anchor: "middle" };
    case "Luang Prabang": return { x: 0, y: -10, anchor: "middle" };
    case "Vang Vieng": return { x: -8, y: 3, anchor: "end" };
    case "Xieng Khuang": return { x: 8, y: 3, anchor: "start" };

    // Indonesia
    case "Bali": return { x: 0, y: 11, anchor: "middle" };
    case "Jogyakarta": return { x: -8, y: 3, anchor: "end" };
    case "Komodo": return { x: 0, y: -10, anchor: "middle" };
    case "Wae Rebo Village": return { x: 8, y: 3, anchor: "start" };

    // Cambodia
    case "Siem Reap": return { x: 0, y: -10, anchor: "middle" };
    case "Phnom Penh": return { x: 0, y: 11, anchor: "middle" };

    // Philippines
    case "Manila": return { x: 0, y: -10, anchor: "middle" };
    case "Cebu": return { x: 8, y: 3, anchor: "start" };
    case "Boracay": return { x: -8, y: 3, anchor: "end" };
    case "Palawan": return { x: 0, y: 11, anchor: "middle" };

    // Australia
    case "Sydney": return { x: 8, y: 3, anchor: "start" };
    case "Melbourne": return { x: 0, y: 11, anchor: "middle" };
    case "Great Barrier Reef": return { x: 8, y: 3, anchor: "start" };
    case "Uluru (Ayers Rock)": return { x: 0, y: 11, anchor: "middle" };
    case "The Great Ocean Road": return { x: -8, y: 3, anchor: "end" };
    case "Cairns": return { x: 8, y: -5, anchor: "start" };
    case "Gold Coast": return { x: 8, y: 3, anchor: "start" };
    case "Perth": return { x: -8, y: 3, anchor: "end" };
    case "Adelaide": return { x: -8, y: -5, anchor: "end" };
    case "Tasmania": return { x: 0, y: 11, anchor: "middle" };
    case "Darwin": return { x: 0, y: -10, anchor: "middle" };

    // New Zealand
    case "Auckland": return { x: 8, y: 3, anchor: "start" };
    case "Bay of Islands": return { x: 0, y: -10, anchor: "middle" };
    case "Queenstown": return { x: -8, y: 3, anchor: "end" };
    case "Milford Sound": return { x: -8, y: -5, anchor: "end" };
    case "Rotorua": return { x: 8, y: 3, anchor: "start" };
    case "Mount Cook": return { x: -8, y: 3, anchor: "end" };
    case "Franz Josef & Fox Glaciers": return { x: 8, y: 3, anchor: "start" };
    case "Wellington": return { x: 8, y: 3, anchor: "start" };
    case "Christchurch": return { x: 8, y: 3, anchor: "start" };
    case "Taupō": return { x: 0, y: 11, anchor: "middle" };

    // Japan
    case "Tokyo": return { x: 0, y: -10, anchor: "middle" };
    case "Kyoto": return { x: -8, y: 3, anchor: "end" };
    case "Osaka": return { x: 8, y: 3, anchor: "start" };
    case "Mount Fuji": return { x: 0, y: 11, anchor: "middle" };
    case "4-Day Off-Season Hokkaido": return { x: 0, y: -10, anchor: "middle" };
    case "Hokkaido": return { x: 0, y: -10, anchor: "middle" };

    default: return { x: 0, y: -8, anchor: "middle" };
  }
};

const getCountryLabelOffset = (name: string) => {
  switch (name) {
    case "Laos": return { x: -8, y: -10, anchor: "end" };
    case "Vietnam": return { x: 8, y: 4, anchor: "start" };
    case "Thailand": return { x: -8, y: 4, anchor: "end" };
    case "Cambodia": return { x: 0, y: 15, anchor: "middle" };
    case "Indonesia": return { x: 0, y: 15, anchor: "middle" };
    case "Philippines": return { x: 10, y: -5, anchor: "start" };
    case "Australia": return { x: 0, y: 15, anchor: "middle" };
    case "New Zealand": return { x: 0, y: 15, anchor: "middle" };
    default: return { x: 0, y: -10, anchor: "middle" };
  }
};

export default function MapHero({ initialPackages = [] }: { initialPackages?: any[] }) {
  const searchParams = useSearchParams();
  const windowWidth = useWindowWidth();

  const regionsData = useMemo(() => {
    const cloned: Record<string, RegionData> = {};
    Object.entries(baseRegionsData).forEach(([regKey, regVal]) => {
      cloned[regKey] = {
        ...regVal,
        countryData: {}
      };
      Object.entries(regVal.countryData).forEach(([countryKey, countryVal]) => {
        cloned[regKey].countryData[countryKey] = {
          ...countryVal,
          destinations: []
        };
      });
    });

    initialPackages.forEach((pkg: any) => {
      if (!pkg.region || !pkg.country) return;
      let regionName = pkg.region;
      let countryName = pkg.country;

      // Normalize country names
      if (countryName.toLowerCase() === "united states") {
        countryName = "USA";
      }
      if (countryName.toLowerCase() === "united arab emirates") {
        countryName = "UAE";
      }

      // Normalize Americas region
      if (regionName.toLowerCase() === "americas") {
        const northAmericaCountries = ["usa", "canada", "mexico"];
        if (northAmericaCountries.includes(countryName.toLowerCase())) {
          regionName = "North America";
        } else {
          regionName = "South America";
        }
      }

      const regKey = Object.keys(cloned).find(
        key => cloned[key].label.toLowerCase() === regionName.toLowerCase()
      ) || regionName.toLowerCase().replace(/\s+/g, "-");

      if (!cloned[regKey]) {
        cloned[regKey] = {
          label: regionName,
          center: pkg.coords || [0, 0],
          zoom: 2.5,
          background: "/images/hero-experiences.jpg",
          description: `Explore ${regionName}`,
          highlightCountries: [],
          countryData: {}
        };
      }

      const countryKey = Object.keys(cloned[regKey].countryData).find(name => {
        const nLower = name.toLowerCase();
        const cLower = countryName.toLowerCase();
        return nLower === cLower || 
               (cLower === "usa" && nLower === "united states of america") ||
               (cLower === "united states" && nLower === "united states of america") ||
               (cLower === "united states of america" && nLower === "usa") ||
               (cLower === "uae" && nLower === "united arab emirates") ||
               (cLower === "united arab emirates" && nLower === "uae");
      }) || countryName;

      if (!cloned[regKey].countryData[countryKey]) {
        if (!cloned[regKey].highlightCountries.includes(countryName)) {
          cloned[regKey].highlightCountries.push(countryName);
        }
        cloned[regKey].countryData[countryKey] = {
          center: pkg.coords || [0, 0],
          zoom: 4.5,
          background: pkg.thumbnailImage || "/images/hero-experiences.jpg",
          destinations: []
        };
      }

      let coords = pkg.coords;
      if (countryKey === "Japan") {
        const japanAnchors = [
          { name: "Tokyo", coords: [139.69, 35.69] },
          { name: "Kyoto", coords: [135.77, 35.01] },
          { name: "Osaka", coords: [135.5, 34.69] },
          { name: "Mount Fuji", coords: [138.73, 35.36] },
          { name: "Hokkaido", coords: [141.3545, 43.0621] },
        ];
        let minD = Infinity;
        let closestCoords = coords;
        japanAnchors.forEach((anchor) => {
          const dx = pkg.coords[0] - anchor.coords[0];
          const dy = pkg.coords[1] - anchor.coords[1];
          const d = dx * dx + dy * dy;
          if (d < minD) {
            minD = d;
            closestCoords = anchor.coords as [number, number];
          }
        });
        coords = closestCoords;
      }

      cloned[regKey].countryData[countryKey].destinations.push({
        name: pkg.name,
        coords: coords,
        tag: pkg.tag,
        tagColor: pkg.tagColor,
        description: pkg.shortDescription,
        image: pkg.thumbnailImage,
        slug: pkg.slug
      });
    });

    return cloned;
  }, [initialPackages]);

  // World-level marker scale — bigger on smaller screens so pins are always readable
  const wm = useMemo(() => {
    if (windowWidth < 480) return { r: 18, pulse: 40, font: 22, offset: -30, sw: 2 };
    if (windowWidth < 640) return { r: 16, pulse: 36, font: 20, offset: -27, sw: 2 };
    if (windowWidth < 768) return { r: 14, pulse: 32, font: 18, offset: -24, sw: 1.8 };
    if (windowWidth < 1024) return { r: 13, pulse: 30, font: 17, offset: -23, sw: 1.6 };
    return { r: 12, pulse: 28, font: 16, offset: -22, sw: 1.5 };
  }, [windowWidth]);

  const [activeRegion, setActiveRegion] = useState<string | null>(null);
  const [activeCountry, setActiveCountry] = useState<string | null>(null);
  const [hoveredGeo, setHoveredGeo] = useState<string | null>(null);
  const [selectedDest, setSelectedDest] = useState<number | null>(null);
  const [hoveredDest, setHoveredDest] = useState<{ dest: Destination; x: number; y: number } | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  const viewLevel = activeCountry ? "country" : activeRegion ? "region" : "world";
  const currentRegion = activeRegion ? regionsData[activeRegion] : null;
  const currentCountry =
    activeRegion && activeCountry ? regionsData[activeRegion]?.countryData[activeCountry] : null;

  const mapConfig = useMemo(() => {
    if (currentCountry) return { center: currentCountry.center, zoom: currentCountry.zoom };
    if (currentRegion) return { center: currentRegion.center, zoom: currentRegion.zoom };
    return { center: [20, 15] as [number, number], zoom: 1.2 };
  }, [currentCountry, currentRegion]);

  const currentBackground = useMemo(() => {
    if (currentCountry && currentRegion && activeCountry) {
      return getCountryPhotos(currentRegion.label, activeCountry)[0]?.image ?? currentCountry.background;
    }

    if (currentRegion) {
      return getRegionPhotos(currentRegion.label)[0]?.image ?? currentRegion.background;
    }

    return "/images/hero-experiences.jpg";
  }, [currentCountry, currentRegion, activeCountry]);
  const currentDestinations = currentCountry?.destinations || [];
  const [filterTag, setFilterTag] = useState<string | null>(null);
  const [filterRegion, setFilterRegion] = useState<string | null>(null);

  const toSlug = (name: string) => name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and").replace(/[^a-z0-9-]/g, "");

  const packageCards = useMemo(() => {
    const cards: { dest: Destination; country: string; region: string; regionKey: string; duration: string }[] = [];
    const durations = ["3 Days", "5 Days", "7 Days", "4 Days", "6 Days", "10 Days", "8 Days"];
    let di = 0;
    if (activeCountry && activeRegion) {
      const cd = regionsData[activeRegion]?.countryData[activeCountry];
      if (cd) cd.destinations.forEach((d) => cards.push({ dest: d, country: activeCountry, region: regionsData[activeRegion].label, regionKey: activeRegion, duration: durations[di++ % durations.length] }));
    } else if (activeRegion) {
      Object.entries(regionsData[activeRegion].countryData).forEach(([cn, cd]) => {
        cd.destinations.forEach((d) => cards.push({ dest: d, country: cn, region: regionsData[activeRegion].label, regionKey: activeRegion, duration: durations[di++ % durations.length] }));
      });
    } else {
      Object.entries(regionsData).forEach(([rk, reg]) => {
        Object.entries(reg.countryData).forEach(([cn, cd]) => {
          cd.destinations.forEach((d) => cards.push({ dest: d, country: cn, region: reg.label, regionKey: rk, duration: durations[di++ % durations.length] }));
        });
      });
    }
    return cards;
  }, [activeRegion, activeCountry]);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    packageCards.forEach((c) => tags.add(c.dest.tag));
    return Array.from(tags);
  }, [packageCards]);

  const allRegionLabels = useMemo(() => {
    const labels = new Set<string>();
    packageCards.forEach((c) => labels.add(c.region));
    return Array.from(labels);
  }, [packageCards]);

  const filteredPackages = useMemo(() => {
    let result = packageCards;
    if (filterRegion) result = result.filter((c) => c.region === filterRegion);
    if (filterTag) result = result.filter((c) => c.dest.tag === filterTag);
    return result;
  }, [packageCards, filterTag, filterRegion]);

  const handleRegionSelect = useCallback((regionKey: string) => {
    setActiveRegion(regionKey); setActiveCountry(null); setSelectedDest(null); setHoveredDest(null); setFilterTag(null);
  }, []);

  const handleCountryClick = useCallback(
    (countryName: string) => {
      const regionKey = countryToRegion[countryName];
      if (!regionKey) return;
      if (activeRegion === regionKey) {
        if (regionsData[regionKey].countryData[countryName]) {
          setActiveCountry(countryName); setSelectedDest(null); setHoveredDest(null);
        }
      } else {
        setActiveRegion(regionKey); setActiveCountry(null); setSelectedDest(null); setHoveredDest(null);
      }
    },
    [activeRegion],
  );

  const handleBack = useCallback(() => {
    if (activeCountry) { setActiveCountry(null); setSelectedDest(null); setHoveredDest(null); setFilterTag(null); }
    else if (activeRegion) { setActiveRegion(null); setSelectedDest(null); setHoveredDest(null); setFilterTag(null); }
  }, [activeCountry, activeRegion]);

  const handleBackToWorld = useCallback(() => {
    setActiveRegion(null); setActiveCountry(null); setSelectedDest(null); setHoveredDest(null); setFilterTag(null);
  }, []);

  useEffect(() => {
    const regionParam = searchParams.get("region");
    const countryParam = searchParams.get("country");
    if (!regionParam && !countryParam) return;

    const normalize = (value: string) =>
      value
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, " ")
        .trim();

    const normalizedRegion = regionParam ? normalize(decodeURIComponent(regionParam)) : null;
    const normalizedCountry = countryParam ? normalize(decodeURIComponent(countryParam)) : null;

    const matchedRegionEntry = Object.entries(regionsData).find(([, region]) => normalize(region.label) === normalizedRegion);
    if (!matchedRegionEntry) return;

    const [matchedRegionKey, matchedRegion] = matchedRegionEntry;
    setActiveRegion(matchedRegionKey);
    setSelectedDest(null);
    setHoveredDest(null);
    setFilterTag(null);
    setFilterRegion(null);

    if (!normalizedCountry) {
      setActiveCountry(null);
      return;
    }

    const matchedCountryEntry = Object.keys(matchedRegion.countryData).find(
      (countryName) => normalize(countryName) === normalizedCountry,
    );
    setActiveCountry(matchedCountryEntry ?? null);
  }, [searchParams]);

  const isHighlighted = useCallback(
    (name: string) => {
      if (activeRegion) return regionsData[activeRegion].highlightCountries.includes(name);
      return !!countryToRegion[name];
    },
    [activeRegion],
  );

  const hasCountryData = useCallback(
    (name: string) => {
      if (activeRegion) return !!regionsData[activeRegion].countryData[name];
      return false;
    },
    [activeRegion],
  );

  const getCountryStyle = useCallback(
    (name: string) => {
      const hl = isHighlighted(name);
      const isActive = name === activeCountry;
      const isHov = name === hoveredGeo;
      let fill = "#111d33";
      let stroke = "#1a2a4a";
      let strokeWidth = 0.2;
      if (isActive) {
        fill = "#0D47A1";
        stroke = "#1565C0";
        strokeWidth = 1;
      } else if (hl) {
        fill = isHov ? "#1565C0" : activeRegion ? "#1e3a6a" : "#1a325a";
        stroke = "#2a5a9f";
        strokeWidth = 0.5;
      }
      const clickable = viewLevel === "world" ? hl : viewLevel === "region" && hasCountryData(name);
      return { fill, stroke, strokeWidth, clickable };
    },
    [activeCountry, activeRegion, hoveredGeo, isHighlighted, hasCountryData, viewLevel],
  );

  const handleMarkerHover = useCallback(
    (dest: Destination, e: React.MouseEvent) => {
      const rect = mapContainerRef.current?.getBoundingClientRect();
      if (rect) {
        setHoveredDest({ dest, x: e.clientX - rect.left, y: e.clientY - rect.top });
      }
    },
    [],
  );

  return (
    <>
      <section id="tours-map" className="relative min-h-screen bg-[#0a1628] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div key={`${activeRegion}-${activeCountry}`} initial={{ opacity: 0 }} animate={{ opacity: 0.2 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }} className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${asset(currentBackground)})` }} />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/80 via-[#0a1628]/60 to-[#0a1628]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm mb-4">
            <button onClick={handleBackToWorld} className={`flex items-center gap-1.5 transition-colors ${viewLevel === "world" ? "text-[#FFC107]" : "text-white/50 hover:text-[#FFC107]"}`}>
              <Globe className="w-4 h-4" /> World
            </button>
            {activeRegion && (
              <>
                <ChevronRight className="w-3 h-3 text-white/25" />
                <button onClick={() => { setActiveCountry(null); setSelectedDest(null); setHoveredDest(null); }} className={`transition-colors ${viewLevel === "region" ? "text-[#FFC107]" : "text-white/50 hover:text-[#FFC107]"}`}>
                  {currentRegion?.label}
                </button>
              </>
            )}
            {activeCountry && (
              <>
                <ChevronRight className="w-3 h-3 text-white/25" />
                <span className="text-[#FFC107]">{activeCountry}</span>
              </>
            )}
          </nav>

          {/* Title */}
          <AnimatePresence mode="wait">
            <motion.div key={`${activeRegion}-${activeCountry}`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="mb-6">
              {viewLevel !== "world" && (
                <motion.button
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  onClick={handleBack}
                  className="flex items-center gap-2 bg-white/5 border border-white/10 hover:border-[#FFC107]/40 hover:bg-[#FFC107]/10 text-white/70 hover:text-white transition-colors text-sm md:text-base px-4 py-2.5 rounded-xl mb-3"
                >
                  <ArrowLeft className="w-4 h-4 text-[#FFC107]" /> Back
                </motion.button>
              )}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white leading-tight">
                {viewLevel === "world" && <>Tours & <span className="text-[#FFC107]">Packages</span></>}
                {viewLevel === "region" && <>Explore <span className="text-[#FFC107]">{currentRegion?.label}</span></>}
                {viewLevel === "country" && <>{activeCountry} <span className="text-[#FFC107]">Destinations</span></>}
              </h1>
              <p className="text-white/45 mt-2 max-w-xl text-sm md:text-base">
                {viewLevel === "world" && "Click a region on the map to discover curated tours and travel packages."}
                {viewLevel === "region" && currentRegion?.description}
                {viewLevel === "country" && `Discover our curated tours and packages across ${activeCountry}.`}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Main layout */}
          <div className={`grid gap-6 ${viewLevel !== "world" ? "lg:grid-cols-5" : "grid-cols-1"}`}>
            {/* Map panel */}
            <div ref={mapContainerRef} className={`${viewLevel !== "world" ? "lg:col-span-3" : ""} relative rounded-2xl overflow-hidden border border-white/10 bg-[#0d1f3c]`}>
              <div className="w-full transition-all duration-500" style={{ height: viewLevel === "world" ? "clamp(400px, 55vh, 650px)" : "480px" }}>
                <ComposableMap projection="geoMercator" projectionConfig={{ scale: 150 }} style={{ width: "100%", height: "100%" }}>
                  <ZoomableGroup center={mapConfig.center} zoom={mapConfig.zoom} transitionDuration={700} filterZoomEvent={() => false}>
                    <Geographies geography={GEO_URL}>
                      {({ geographies }: { geographies: any[] }) =>
                        geographies.map((geo: any) => {
                          const name = geo.properties.name;
                          const cs = getCountryStyle(name);
                          return (
                            <Geography key={geo.rsmKey} geography={geo} fill={cs.fill} stroke={cs.stroke} strokeWidth={cs.strokeWidth}
                              style={{
                                default: { outline: "none", cursor: cs.clickable ? "pointer" : "default", transition: "fill 0.25s ease" },
                                hover: { outline: "none", fill: cs.clickable ? "#1565C0" : cs.fill, transition: "fill 0.15s ease" },
                                pressed: { outline: "none" },
                              }}
                              onMouseEnter={() => setHoveredGeo(name)}
                              onMouseLeave={() => setHoveredGeo(null)}
                              onClick={() => {
                                if (viewLevel === "world" && isHighlighted(name)) handleCountryClick(name);
                                else if (viewLevel === "region" && hasCountryData(name)) { setActiveCountry(name); setSelectedDest(null); setHoveredDest(null); }
                              }}
                            />
                          );
                        })
                      }
                    </Geographies>

                    {/* World: region labels — size scales up on smaller screens */}
                    {viewLevel === "world" && regionMarkers.map((r) => (
                      <Marker key={r.key} coordinates={r.coords as [number, number]}>
                        <g onClick={() => handleRegionSelect(r.key)} style={{ cursor: "pointer" }}>
                          <circle r={wm.r} fill="#FFC107" opacity={0.9} />
                          <circle r={wm.r} fill="none" stroke="#FFC107" strokeWidth={wm.sw} opacity={0.4}>
                            <animate attributeName="r" values={`${wm.r};${wm.pulse};${wm.r}`} dur="3s" repeatCount="indefinite" />
                            <animate attributeName="opacity" values="0.4;0;0.4" dur="3s" repeatCount="indefinite" />
                          </circle>
                          <text textAnchor="middle" y={wm.offset} style={{ fontFamily: "system-ui, sans-serif", fontSize: `${wm.font}px`, fill: "#FFC107", fontWeight: 800, letterSpacing: "0.03em", textShadow: "0 2px 8px rgba(0,0,0,0.95), 0 0 4px rgba(0,0,0,0.7)" }}>{r.label}</text>
                        </g>
                      </Marker>
                    ))}

                    {/* Region: country labels */}
                    {viewLevel === "region" && activeRegion && Object.entries(regionsData[activeRegion].countryData).map(([countryName, data]) => (
                      <Marker key={countryName} coordinates={data.center}>
                        <g onClick={() => { setActiveCountry(countryName); setSelectedDest(null); setHoveredDest(null); }} style={{ cursor: "pointer" }}>
                          <circle r={5} fill="#FFC107" />
                          <circle r={5} fill="none" stroke="#FFC107" strokeWidth={0.6} opacity={0.3}>
                            <animate attributeName="r" values="5;13;5" dur="2.5s" repeatCount="indefinite" />
                            <animate attributeName="opacity" values="0.3;0;0.3" dur="2.5s" repeatCount="indefinite" />
                          </circle>
                          <text textAnchor={getCountryLabelOffset(countryName).anchor} x={getCountryLabelOffset(countryName).x} y={getCountryLabelOffset(countryName).y} style={{ fontFamily: "system-ui, sans-serif", fontSize: "6px", fill: "#fff", fontWeight: 700, textShadow: "0 1px 3px rgba(0,0,0,0.9)" }}>{countryName}</text>
                        </g>
                      </Marker>
                    ))}

                    {/* Country: destination markers */}
                    {viewLevel === "country" && currentDestinations
                      .filter((dest) => {
                        // For Cambodia, only show the two main city pins on the map
                        if (activeCountry === "Cambodia") {
                          return dest.slug === "siem-reap" || dest.slug === "phnom-penh";
                        }
                        // For Indonesia, only show the main city pins on the map
                        if (activeCountry === "Indonesia") {
                          return dest.slug === "bali" || dest.slug === "komodo" || dest.slug === "jogyakarta" || dest.slug === "wae-rebo-village";
                        }
                        // For Laos, only show the main city pins on the map
                        if (activeCountry === "Laos") {
                          return dest.slug === "vientiane" || dest.slug === "luang-prabang" || dest.slug === "vang-vieng" || dest.slug === "xieng-khuang";
                        }
                        // For Philippines, only show the main city/island pins on the map
                        if (activeCountry === "Philippines") {
                          return dest.slug === "manila" || dest.slug === "cebu" || dest.slug === "boracay" || dest.slug === "palawan";
                        }
                        // For Japan, only show the main city/destination pins on the map
                        if (activeCountry === "Japan") {
                          return dest.slug === "tokyo" || dest.slug === "kyoto" || dest.slug === "osaka" || dest.slug === "mount-fuji" || dest.slug === "4-day-off-season-hokkaido";
                        }
                        return true;
                      })
                      .map((dest) => {
                        const originalIndex = currentDestinations.findIndex(d => d.name === dest.name);
                        const selectedDestCoords = selectedDest !== null ? currentDestinations[selectedDest]?.coords : null;
                        const markerSelected = selectedDest !== null && selectedDestCoords !== null && dest.coords[0] === selectedDestCoords[0] && dest.coords[1] === selectedDestCoords[1];
                        const isGreyed = selectedDest !== null && !markerSelected;
                        const pingFill = isGreyed ? "#555" : "#FFC107";
                        const pingStroke = isGreyed ? "#444" : "#fff";
                        const labelColor = isGreyed ? "#777" : "#fff";
                        const displayName = dest.name === "4-Day Off-Season Hokkaido" ? "Hokkaido" : dest.name;
                        return (
                          <Marker key={dest.name} coordinates={dest.coords}>
                            <g
                              style={{ cursor: "pointer" }}
                              onMouseEnter={(e: any) => handleMarkerHover(dest, e)}
                              onMouseMove={(e: any) => handleMarkerHover(dest, e)}
                              onMouseLeave={() => setHoveredDest(null)}
                              onClick={() => setSelectedDest(selectedDest === originalIndex ? null : originalIndex)}
                            >
                              <circle r={markerSelected ? 4.5 : 3.5} fill={pingFill} stroke={pingStroke} strokeWidth={0.8} />
                              {!isGreyed && (
                                <circle r={3.5} fill={pingFill} opacity={0.3}>
                                  <animate attributeName="r" values="3.5;11;3.5" dur="2s" repeatCount="indefinite" />
                                  <animate attributeName="opacity" values="0.4;0;0.4" dur="2s" repeatCount="indefinite" />
                                </circle>
                              )}
                              {(() => {
                                const offset = getLabelOffset(displayName);
                                return (
                                  <text textAnchor={offset.anchor} x={offset.x} y={offset.y} style={{ fontFamily: "system-ui, sans-serif", fontSize: "4.5px", fill: labelColor, fontWeight: isGreyed ? 400 : 600, opacity: isGreyed ? 0.6 : 1, textShadow: "0 1px 3px rgba(0,0,0,0.9)" }}>
                                    {displayName}
                                  </text>
                                );
                              })()}
                            </g>
                          </Marker>
                        );
                      })}
                  </ZoomableGroup>
                </ComposableMap>
              </div>

              {/* Hover card for destinations */}
              <AnimatePresence>
                {hoveredDest && (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.15 }}
                    className="absolute z-50 pointer-events-none"
                    style={{
                      left: Math.min(hoveredDest.x + 16, (mapContainerRef.current?.offsetWidth || 600) - 240),
                      top: Math.max(hoveredDest.y - 170, 8),
                    }}
                  >
                    <div className="bg-[#0d1f3c]/95 backdrop-blur-md border border-white/15 rounded-xl overflow-hidden w-56 shadow-2xl shadow-black/40">
                      <img
                        src={asset(getUpdatedDestinationImage(currentRegion?.label ?? null, activeCountry, hoveredDest.dest.name, hoveredDest.dest.image))}
                        alt={hoveredDest.dest.name}
                        className="w-full h-28 object-cover"
                      />
                      <div className="p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-bold font-heading text-white text-sm">{hoveredDest.dest.name}</h4>
                          <span className={`${hoveredDest.dest.tagColor} text-white text-[10px] font-bold px-2 py-0.5 rounded-full`}>{hoveredDest.dest.tag}</span>
                        </div>
                        <p className="text-white/45 text-xs leading-relaxed">{hoveredDest.dest.description}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Country hover tooltip */}
              {hoveredGeo && viewLevel !== "country" && (
                <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-lg pointer-events-none border border-white/10">
                  {hoveredGeo}
                  {viewLevel === "region" && hasCountryData(hoveredGeo) && (
                    <span className="text-[#FFC107] ml-1.5">• Click to explore</span>
                  )}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <AnimatePresence mode="wait">
              {viewLevel === "region" && currentRegion && (
                <motion.div key="region-sidebar" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 30 }} transition={{ duration: 0.4, delay: 0.2 }} className="lg:col-span-2 space-y-4">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
                    <h3 className="text-base font-bold font-heading text-white mb-1">Select a Country</h3>
                    <p className="text-white/35 text-xs mb-4">Click a country to see available tours and packages.</p>
                    <div className="space-y-2 max-h-[340px] overflow-y-auto pr-1">
                      {Object.entries(currentRegion.countryData).map(([countryName, data]) => (
                        <button key={countryName} onClick={() => { setActiveCountry(countryName); setSelectedDest(null); setHoveredDest(null); }} className="w-full flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#FFC107]/40 hover:bg-[#FFC107]/5 transition-all group">
                          <div className="flex items-center gap-3">
                            <div className="w-11 h-11 rounded-lg overflow-hidden flex-shrink-0">
                              <img
                                src={asset(getUpdatedDestinationImage(currentRegion.label, countryName, data.destinations[0]?.name ?? "", data.destinations[0]?.image ?? ""))}
                                alt={countryName}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                              />
                            </div>
                            <div className="text-left">
                              <span className="text-white font-semibold text-sm block">{countryName}</span>
                              <span className="text-white/35 text-xs">{data.destinations.length} destination{data.destinations.length > 1 ? "s" : ""}</span>
                            </div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-white/25 group-hover:text-[#FFC107] transition-colors" />
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
                    <p className="text-white/35 text-xs mb-3">Other regions</p>
                    <div className="flex flex-wrap gap-2">
                      {Object.entries(regionsData).filter(([key]) => key !== activeRegion).map(([key, region]) => (
                        <button key={key} onClick={() => handleRegionSelect(key)} className="px-3 py-1.5 rounded-full border border-white/15 text-white/45 text-xs hover:border-[#FFC107]/40 hover:text-[#FFC107] transition-all">
                          {region.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {viewLevel === "country" && currentCountry && (
                <motion.div key="country-sidebar" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 30 }} transition={{ duration: 0.4, delay: 0.2 }} className="lg:col-span-2 space-y-3 max-h-[500px] lg:overflow-y-auto">
                  <h3 className="text-xs font-bold font-heading text-white/50 uppercase tracking-wider">{activeCountry} Destinations</h3>
                  {currentDestinations.map((dest, i) => {
                    const selectedDestCoords = selectedDest !== null ? currentDestinations[selectedDest]?.coords : null;
                    const isSelected = (activeCountry === "Cambodia" || activeCountry === "Indonesia" || activeCountry === "Laos" || activeCountry === "Philippines" || activeCountry === "Japan")
                      ? (selectedDestCoords !== null && dest.coords[0] === selectedDestCoords[0] && dest.coords[1] === selectedDestCoords[1])
                      : (selectedDest === i);
                    const isGreyed = selectedDest !== null && !isSelected;
                    return (
                      <motion.div key={dest.name} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.08 }}
                        onClick={() => setSelectedDest(selectedDest === i ? null : i)}
                        className={`group flex gap-3 p-3 rounded-xl cursor-pointer transition-all border ${isSelected ? "bg-[#FFC107]/10 border-[#FFC107]/30 ring-1 ring-[#FFC107]/20" :
                          isGreyed ? "bg-white/[0.02] border-white/5 opacity-50" :
                            "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                          }`}
                      >
                        <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                          <img
                            src={asset(getUpdatedDestinationImage(currentRegion?.label ?? null, activeCountry, dest.name, dest.image))}
                            alt={dest.name}
                            className={`w-full h-full object-cover transition-all duration-300 ${isGreyed ? "grayscale" : "group-hover:scale-110"}`}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-0.5">
                            <h4 className="font-bold font-heading text-white text-sm">{dest.name}</h4>
                            <span className={`${isGreyed ? "bg-gray-600" : dest.tagColor} text-white text-[10px] font-bold px-2 py-0.5 rounded-full`}>{dest.tag}</span>
                          </div>
                          <p className="text-white/40 text-xs line-clamp-2 mb-1.5">{dest.description}</p>
                          <Link
                            href={`/tours-packages/${dest.slug || toSlug(dest.name)}`}
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold px-3 py-2 rounded-xl border border-[#FFC107]/40 bg-[#FFC107]/10 text-[#FFC107] hover:bg-[#FFC107]/20 hover:border-[#FFC107]/70 transition-all shadow-[0_0_18px_rgba(255,193,7,0.15)]"
                          >
                            View Packages <ChevronRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* World: region quick-select pills */}
          {viewLevel === "world" && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mt-8 flex flex-wrap gap-2.5">
              {Object.entries(regionsData).map(([key, region]) => (
                <button key={key} onClick={() => handleRegionSelect(key)} className="px-5 py-2.5 rounded-full border border-white/20 text-white/65 text-sm font-medium hover:border-[#FFC107] hover:text-[#FFC107] hover:bg-[#FFC107]/5 transition-all">
                  {region.label}
                </button>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Packages Section — Light Mode */}
      <section className="bg-[#F8F9FA] py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(21,101,192,0.04)_0%,_transparent_60%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-14">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-0.5 bg-[#FFC107]" />
                  <span className="text-[#1565C0] text-sm font-semibold font-heading uppercase tracking-wider">
                    {viewLevel === "world" ? "All Regions" : viewLevel === "region" ? currentRegion?.label : activeCountry}
                  </span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold font-heading text-[#1F2937] leading-tight">
                  {viewLevel === "world" && <>Explore Our <span className="text-[#1565C0]">Tour Packages</span></>}
                  {viewLevel === "region" && <>Packages in <span className="text-[#1565C0]">{currentRegion?.label}</span></>}
                  {viewLevel === "country" && <><span className="text-[#1565C0]">{activeCountry}</span> Packages</>}
                </h2>
                <p className="text-gray-600 font-body mt-3 max-w-xl text-lg">
                  {viewLevel === "world" ? "Curated tours across the globe — select a region on the map above to narrow down." : `Browse curated tours and travel packages${activeCountry ? ` across ${activeCountry}` : ` in ${currentRegion?.label}`}.`}
                </p>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm font-body">
                <SlidersHorizontal className="w-4 h-4" />
                <span>{filteredPackages.length} package{filteredPackages.length !== 1 ? "s" : ""}</span>
              </div>
            </div>

            {/* Region filters */}
            {viewLevel === "world" && allRegionLabels.length > 1 && (
              <div className="flex flex-wrap gap-2 mb-3">
                <button onClick={() => { setFilterRegion(null); setFilterTag(null); }} className={`px-4 py-2 rounded-full text-xs font-semibold transition-all border ${!filterRegion ? "bg-[#1565C0] text-white border-[#1565C0] shadow-sm" : "bg-white text-gray-500 border-gray-200 hover:border-[#1565C0]/40 hover:text-[#1565C0]"}`}>
                  All Regions
                </button>
                {allRegionLabels.map((label) => (
                  <button key={label} onClick={() => { setFilterRegion(filterRegion === label ? null : label); setFilterTag(null); }} className={`px-4 py-2 rounded-full text-xs font-semibold transition-all border ${filterRegion === label ? "bg-[#1565C0] text-white border-[#1565C0] shadow-sm" : "bg-white text-gray-500 border-gray-200 hover:border-[#1565C0]/40 hover:text-[#1565C0]"}`}>
                    {label}
                  </button>
                ))}
              </div>
            )}

            {/* Tag filters */}
            <div className="flex flex-wrap gap-2">
              <button onClick={() => setFilterTag(null)} className={`px-4 py-2 rounded-full text-xs font-semibold transition-all border ${!filterTag ? "bg-[#FFC107] text-gray-900 border-[#FFC107] shadow-sm" : "bg-white text-gray-500 border-gray-200 hover:border-[#FFC107]/60 hover:text-amber-600"}`}>
                All Types
              </button>
              {allTags.map((tag) => (
                <button key={tag} onClick={() => setFilterTag(filterTag === tag ? null : tag)} className={`px-4 py-2 rounded-full text-xs font-semibold transition-all border ${filterTag === tag ? "bg-[#FFC107] text-gray-900 border-[#FFC107] shadow-sm" : "bg-white text-gray-500 border-gray-200 hover:border-[#FFC107]/60 hover:text-amber-600"}`}>
                  {tag}
                </button>
              ))}
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeRegion}-${activeCountry}-${filterTag}-${filterRegion}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="max-h-[75vh] overflow-y-auto pr-1 scrollbar-thin"
              style={{ scrollbarWidth: "thin", scrollbarColor: "#1565C0 transparent" }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-4">
                {filteredPackages.map((pkg) => (
                  <motion.div
                    key={`${pkg.dest.name}-${pkg.country}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.05 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-[#1565C0]/30 hover:shadow-xl shadow-sm transition-all duration-300"
                  >
                    <Link href={`/tours-packages/${pkg.dest.slug || toSlug(pkg.dest.name)}`} className="block">
                      <div className="relative h-56 overflow-hidden">
                        <img
                          src={asset(getUpdatedDestinationImage(pkg.region, pkg.country, pkg.dest.name, pkg.dest.image))}
                          alt={pkg.dest.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                        <span className={`absolute top-4 left-4 ${pkg.dest.tagColor} text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-lg`}>
                          {pkg.dest.tag}
                        </span>
                        <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full">
                          <Clock className="w-3 h-3 text-[#FFC107]" />
                          <span className="text-white text-[11px] font-semibold">{pkg.duration}</span>
                        </div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex items-center gap-1.5">
                            <MapPin className="w-3 h-3 text-[#FFC107]" />
                            <span className="text-white/80 text-xs font-medium">{pkg.country} · {pkg.region}</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-5">
                        <h3 className="text-lg font-bold font-heading text-[#1F2937] mb-2 group-hover:text-[#1565C0] transition-colors">{pkg.dest.name}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">{pkg.dest.description}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, si) => (
                              <Star key={si} className="w-3.5 h-3.5 fill-[#FFC107] text-[#FFC107]" />
                            ))}
                            <span className="text-gray-400 text-xs ml-1.5">(4.8)</span>
                          </div>
                          <span className="flex items-center gap-1.5 text-[#1565C0] text-sm font-semibold font-heading group-hover:gap-2.5 transition-all">
                            Book Now <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {filteredPackages.length === 0 && (
            <div className="text-center py-20">
              <Globe className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-400 text-sm">No packages found for this filter. Try a different category.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
