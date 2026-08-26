import { southSoutheastAsiaDestinations } from "./destinations-south-southeast-asia";
import { destinationsThailand } from "./destinations_thailand";
import { destinationsVietnam } from "./destinations_vietnam";
import { destinationsCambodia } from "./destinations_cambodia";
import { destinationsIndonesia } from "./destinations_indonesia";
import { destinationsLaos } from "./destinations_laos";
import { destinationsPhilippines } from "./destinations_philippines";
import { eastAsiaDestinations } from "./destinations-east-asia";
import { americasDestinations } from "./destinations-americas";
import { meeaDestinations } from "./destinations-meea";
import { destinationsAustralia } from "./destinations_australia";
import { destinationsNewZealand } from "./destinations_newzealand";
import { getDestinationPhotos } from "./photo_pack/resolver";

export type ItineraryDay = {
  day: number;
  title: string;
  location: string;
  description: string;
  highlights: string[];
  image: string;
};

export type ThingToDo = {
  title: string;
  description: string;
  iconName: string;
};

export type DestinationPageData = {
  slug: string;
  name: string;
  country: string;
  region: string;
  tagline: string;
  heroImage: string;
  overview: string;
  quickFacts: {
    capital?: string;
    currency: string;
    climate: string;
    bestSeason: string;
    languages: string;
    timeZone: string;
    drivingSide?: string;
  };
  itinerary: ItineraryDay[];
  thingsToDo: ThingToDo[];
  travelTips: string[];
  gallery: string[];
};

const baseDestinations: Record<string, DestinationPageData> = {
  tokyo: {
    slug: "tokyo",
    name: "Tokyo",
    country: "Japan",
    region: "East Asia",
    tagline: "Where ancient traditions pulse beneath neon-lit skyscrapers",
    heroImage: "/images/dest-1.jpg",
    overview:
      "Tokyo is a city of mesmerizing contrasts — a place where centuries-old Shinto shrines stand in the shadow of glass towers, where Michelin-starred sushi bars sit beside smoky yakitori alleys, and where rush-hour silence on packed trains gives way to the electric roar of Shibuya Crossing. It is at once the world's most orderly metropolis and its most eclectic, a living proof that tradition and hyper-modernity can not only coexist, but thrive together.\n\nFrom the serene gravel gardens of Meiji Jingu to the sensory overload of Akihabara's electronics district, every neighborhood tells a different story. Wake early for the tuna auctions at Toyosu Market, spend an afternoon lost in the vintage boutiques of Shimokitazawa, then watch the sun set from the observation deck of Tokyo Skytree before descending into the golden-lit izakaya of Yurakucho.\n\nBeyond the city limits, snow-capped Mount Fuji beckons for a day of awe-inspiring natural beauty. Whether you are chasing cherry blossoms in spring, hunting street fashion in Harajuku, or simply savoring a perfect bowl of ramen at 2 a.m., Tokyo rewards curiosity at every turn.",
    quickFacts: {
      capital: "Tokyo (national capital)",
      currency: "Japanese Yen (¥)",
      climate: "Humid subtropical with warm summers and mild winters",
      bestSeason: "March–May (cherry blossom) & October–November (autumn foliage)",
      languages: "Japanese",
      timeZone: "JST (UTC+9)",
      drivingSide: "Left",
    },
    itinerary: [
      {
        day: 1,
        title: "Shibuya, Harajuku & Shinjuku",
        location: "Shibuya & Shinjuku, Tokyo",
        description:
          "Dive straight into Tokyo's beating heart. Start with the iconic Shibuya Crossing — the world's busiest pedestrian scramble — then wander through Harajuku's Takeshita Street for avant-garde street fashion and crepe stalls. Walk the forested path to Meiji Jingu Shrine for a moment of stillness, before ending the evening amid the electric glow of Shinjuku's Golden Gai, where over 200 tiny bars line six narrow alleys.",
        highlights: [
          "Cross Shibuya Scramble and photograph it from the Magnet rooftop",
          "Explore Harajuku's Takeshita Street and Cat Street boutiques",
          "Write a wish on an ema board at Meiji Jingu Shrine",
          "Bar-hop through Golden Gai's themed micro-bars",
        ],
        image: "/images/city-1.jpg",
      },
      {
        day: 2,
        title: "Temples, Gardens & Traditional Tokyo",
        location: "Asakusa & Ueno, Tokyo",
        description:
          "Step back in time in Asakusa, where the thunderous Kaminarimon gate leads you through Nakamise-dori's souvenir stalls to the incense-filled Sensō-ji, Tokyo's oldest Buddhist temple. Continue to Ueno Park to visit the Tokyo National Museum's samurai armor collection, then stroll through the immaculate Rikugien Garden as afternoon light filters through centuries-old maple trees.",
        highlights: [
          "Pass through Kaminarimon and draw fortune slips at Sensō-ji",
          "View Edo-period woodblock prints at Tokyo National Museum",
          "Tea ceremony experience in Rikugien Garden's lakeside teahouse",
          "Evening rickshaw ride through Asakusa's lantern-lit backstreets",
        ],
        image: "/images/tour-1.jpg",
      },
      {
        day: 3,
        title: "Toyosu Market & Tsukiji Outer Market",
        location: "Toyosu & Tsukiji, Tokyo",
        description:
          "Rise before dawn for the tuna auction at Toyosu Market, where bluefin worth tens of thousands of dollars change hands in minutes. Afterward, head to the Tsukiji Outer Market for a walking breakfast of tamagoyaki, fresh uni, and mochi. Spend the afternoon in the upscale Ginza district, exploring department store food halls — a culinary art form in themselves.",
        highlights: [
          "Witness the 5:30 a.m. bluefin tuna auction at Toyosu",
          "Taste ultra-fresh sashimi at a Tsukiji Outer Market stall",
          "Sample wagyu beef skewers and matcha soft-serve in Ginza",
          "Browse the spectacular basement food hall at Mitsukoshi department store",
        ],
        image: "/images/tour-2.jpg",
      },
      {
        day: 4,
        title: "Mount Fuji & Hakone Day Trip",
        location: "Hakone & Mount Fuji, Kanagawa",
        description:
          "Board the Romance Car express to Hakone for a day framed by Japan's most iconic peak. Cruise across Lake Ashi with Fuji's snow-dusted cone reflected in the water, ride the Hakone Ropeway over the volcanic vents of Ōwakudani, and soak in a traditional onsen with mountain views. The black eggs boiled in Ōwakudani's sulfuric springs are said to add seven years to your life.",
        highlights: [
          "Panoramic Lake Ashi pirate-ship cruise with Fuji views",
          "Ride the Hakone Ropeway over Ōwakudani's volcanic valley",
          "Eat a life-extending black egg at Ōwakudani",
          "Soak in a natural hot-spring onsen overlooking the mountains",
        ],
        image: "/images/dest-2.jpg",
      },
      {
        day: 5,
        title: "Akihabara, Odaiba & Farewell Tokyo",
        location: "Akihabara & Odaiba, Tokyo",
        description:
          "Explore the neon wonderland of Akihabara — Tokyo's otaku (geek-culture) epicenter — where multi-story arcades, manga shops, and maid cafés compete for attention. Cross Rainbow Bridge to Odaiba's futuristic waterfront, home to teamLab Borderless, an immersive digital-art museum where rooms of light and color dissolve the boundaries between art and viewer. End the trip with a sunset view of the Tokyo skyline from Odaiba's seaside deck.",
        highlights: [
          "Play retro games in Akihabara's multi-floor arcades",
          "Walk through the infinite mirror rooms at teamLab Borderless",
          "Photograph the 1:1 scale Unicorn Gundam statue at DiverCity",
          "Sunset cocktails overlooking Rainbow Bridge and Tokyo Tower",
        ],
        image: "/images/city-2.jpg",
      },
    ],
    thingsToDo: [
      {
        title: "Sushi Omakase Experience",
        description:
          "Sit at a hinoki-wood counter as a master itamae selects and prepares 15–20 courses of the day's finest catch, each piece placed directly before you with precise choreography.",
        iconName: "Utensils",
      },
      {
        title: "Cherry Blossom Hanami",
        description:
          "Join locals beneath canopies of pale-pink sakura in Ueno Park or along the Meguro River for a traditional hanami picnic of bento boxes, sake, and springtime joy.",
        iconName: "Flower2",
      },
      {
        title: "Sumo Tournament",
        description:
          "Witness the thunderous clash of sumo wrestlers at Ryōgoku Kokugikan during one of three annual Tokyo basho tournaments — a ritual sport stretching back centuries.",
        iconName: "Trophy",
      },
      {
        title: "Robot Restaurant Show",
        description:
          "Experience Shinjuku's wildest spectacle: neon-lit robots, laser beams, taiko drums, and dancers in a sensory extravaganza that defies all description.",
        iconName: "Bot",
      },
      {
        title: "Shibuya Night Photography",
        description:
          "Capture the city's kinetic energy after dark — from the scramble crossing's human river to the moody backstreets of Nonbei Yokocho, Tokyo is a photographer's playground.",
        iconName: "Camera",
      },
      {
        title: "Traditional Tea Ceremony",
        description:
          "Learn the meditative art of chanoyu in a tatami-mat room, where every gesture — from folding the fukusa cloth to whisking the matcha — carries centuries of meaning.",
        iconName: "Coffee",
      },
    ],
    travelTips: [
      "Get a 7-day Japan Rail Pass before arrival — it pays for itself with the Hakone day trip alone.",
      "IC cards (Suica or Pasmo) work on all trains, buses, and even vending machines — load one at any station.",
      "Tipping is not practiced in Japan and can cause confusion; excellent service is the cultural standard.",
      "Convenience stores (konbini) like 7-Eleven and Lawson sell surprisingly high-quality meals around the clock.",
      "Download the Navitime or Japan Transit app for real-time train routing — Google Maps also works well.",
      "Carry cash for smaller shops and street stalls; many traditional establishments don't accept cards.",
      "Bow slightly when greeting and thanking — it's deeply appreciated even from foreign visitors.",
      "Shoes off before entering temples, traditional restaurants, and ryokan inns.",
    ],
    gallery: [
      "/images/dest-1.jpg",
      "/images/city-1.jpg",
      "/images/tour-1.jpg",
      "/images/dest-2.jpg",
      "/images/city-2.jpg",
      "/images/tour-2.jpg",
    ],
  },

  rajasthan: {
    slug: "rajasthan",
    name: "Rajasthan",
    country: "India",
    region: "South Asia",
    tagline: "A land of maharajas, desert fortresses, and living color",
    heroImage: "/images/dest-3.jpg",
    overview:
      "Rajasthan is India distilled to its most vivid essence — a desert state where every surface seems to blaze with color, from the pink sandstone of Jaipur to the blue-washed houses of Jodhpur, the white marble palaces of Udaipur, and the golden bastions of Jaisalmer rising like a mirage from the Thar Desert. This is the land of Rajput warrior kings, whose legacy lives on in some of the most magnificent forts and palaces on earth.\n\nBeyond the architecture, Rajasthan pulses with life. Camel caravans trace ancient trade routes through rolling dunes, turbaned elders play folk music on haunting sarangi strings, and women in embroidered ghagras carry brass pots past crumbling havelis painted with elaborate frescoes. Markets overflow with block-printed textiles, silver jewelry, and the intoxicating scent of cardamom chai.\n\nA journey through Rajasthan is as much an encounter with living traditions as with historical grandeur. From the fierce elegance of Mehrangarh Fort to the serene sunset over Lake Pichola, every moment confirms why this remains one of the world's most unforgettable travel destinations.",
    quickFacts: {
      capital: "Jaipur",
      currency: "Indian Rupee (₹)",
      climate: "Hot semi-arid; scorching summers, cool and pleasant winters",
      bestSeason: "October–March (cool, dry winter season)",
      languages: "Hindi, Rajasthani, English widely understood in tourist areas",
      timeZone: "IST (UTC+5:30)",
      drivingSide: "Left",
    },
    itinerary: [
      {
        day: 1,
        title: "The Pink City — Jaipur",
        location: "Jaipur, Rajasthan",
        description:
          "Arrive in Jaipur, Rajasthan's flamboyant capital, where the entire old city was painted terracotta-pink in 1876 to welcome Prince Albert. Begin at the Hawa Mahal, its 953 latticed windows designed so royal women could observe street life unseen. Continue to the City Palace, still home to the Jaipur royal family, then lose yourself in the Johari Bazaar's lanes of gem traders and lac bangle makers.",
        highlights: [
          "Photograph the iconic honeycomb façade of Hawa Mahal at sunrise",
          "Explore the City Palace's Peacock Courtyard and textile gallery",
          "Haggle for uncut emeralds and block-printed fabrics in Johari Bazaar",
          "Dine on laal maas (fiery red mutton curry) at a heritage haveli restaurant",
        ],
        image: "/images/dest-4.jpg",
      },
      {
        day: 2,
        title: "Amber Fort & Jaipur Craft Traditions",
        location: "Amber & Jaipur, Rajasthan",
        description:
          "Ascend to Amber Fort by jeep along its fortified ramp, entering a palace complex where mirrored Sheesh Mahal chambers glitter like constellations. Spend the afternoon at a traditional block-printing workshop in Sanganer, where artisans hand-carve teak stamps and press intricate patterns onto cotton using natural dyes. As dusk falls, witness the Aarti ceremony at Birla Mandir, its white marble glowing against the twilight sky.",
        highlights: [
          "Walk through Amber Fort's Sheesh Mahal (Hall of Mirrors)",
          "Try your hand at Sanganeri block-printing with master artisans",
          "Watch the sunset from Nahargarh Fort overlooking the entire city",
          "Evening aarti ceremony at the luminous Birla Mandir temple",
        ],
        image: "/images/dest-5.jpg",
      },
      {
        day: 3,
        title: "The Blue City — Jodhpur",
        location: "Jodhpur, Rajasthan",
        description:
          "Drive west to Jodhpur, where the colossal Mehrangarh Fort crowns a sheer cliff 400 feet above a sea of indigo-blue houses. Inside, galleries showcase palanquins, armories, and the finest collection of Rajput miniature paintings in India. Descend into the old city's labyrinthine lanes to discover stepwells, spice markets, and tiny lassi shops serving creamy saffron-and-cardamom yogurt drinks.",
        highlights: [
          "Explore Mehrangarh Fort's ramparts and cannon-studded battlements",
          "Photograph the blue-painted Brahmin houses from the fort's walls",
          "Taste makhaniya lassi — Jodhpur's legendary saffron yogurt drink",
          "Browse the Sardar Market's clock-tower spice stalls at sunset",
        ],
        image: "/images/tour-3.jpg",
      },
      {
        day: 4,
        title: "The White City — Udaipur",
        location: "Udaipur, Rajasthan",
        description:
          "Continue south to Udaipur, the 'Venice of the East,' where white marble palaces float on Lake Pichola like a dream. Take a boat to the Lake Palace — now a luxury hotel seeming to hover on the water — and visit the sprawling City Palace complex, a fusion of Rajput and Mughal architecture spanning 400 years of construction. As evening falls, dine on a rooftop overlooking the lake as the palaces glow amber in the fading light.",
        highlights: [
          "Sunset boat cruise on Lake Pichola past Jag Mandir island",
          "Tour the City Palace's balconies, courtyards, and peacock mosaics",
          "Watch a traditional Rajasthani puppet show at Bagore Ki Haveli",
          "Rooftop dinner overlooking the illuminated Lake Palace",
        ],
        image: "/images/dest-6.jpg",
      },
      {
        day: 5,
        title: "The Ranakpur Jain Temples",
        location: "Ranakpur, Rajasthan",
        description:
          "En route to Jaisalmer, detour to the Ranakpur Jain Temples, hidden in a wooded valley of the Aravalli Hills. The main Chaumukha Temple contains 1,444 individually carved marble pillars — no two alike — supporting a labyrinth of domes, corridors, and intricately filigreed ceilings that rank among India's supreme architectural achievements. The silence here is profound, broken only by birdsong and the murmur of prayers.",
        highlights: [
          "Marvel at 1,444 uniquely carved marble pillars in Chaumukha Temple",
          "Photograph the impossibly detailed marble lattice ceilings",
          "Spot langur monkeys and peacocks in the surrounding forest",
          "Continue westward through the Aravalli hills toward the Thar Desert",
        ],
        image: "/images/about-1.jpg",
      },
      {
        day: 6,
        title: "The Golden City & Desert Camp — Jaisalmer",
        location: "Jaisalmer & Sam Sand Dunes, Rajasthan",
        description:
          "Arrive at Jaisalmer, a living citadel of golden sandstone rising from the Thar Desert. Walk the fort's narrow lanes where families still reside, visit the ornate Patwon Ki Haveli with its carved balconies, then head into the Sam Sand Dunes for a camel safari as the desert turns from gold to crimson at sunset. Spend the night at a luxury desert camp under a canopy of stars, serenaded by Manganiar folk musicians playing the kamaycha.",
        highlights: [
          "Wander the living fort of Jaisalmer — one of the last inhabited forts in the world",
          "Camel safari through Sam Sand Dunes at sunset",
          "Overnight stay in a luxury desert camp with traditional Rajasthani feast",
          "Stargazing in the Thar Desert and Manganiar folk music performance",
        ],
        image: "/images/dest-7.jpg",
      },
    ],
    thingsToDo: [
      {
        title: "Heritage Palace Stay",
        description:
          "Sleep in a converted royal palace or fort — Rajasthan has more heritage hotels than anywhere on earth, from intimate havelis to former maharaja residences with gilded suites.",
        iconName: "Castle",
      },
      {
        title: "Camel Safari at Sunset",
        description:
          "Ride through the undulating dunes of the Thar as the sun melts into the horizon, then dine under the stars at a desert camp while folk musicians play haunting melodies.",
        iconName: "Sun",
      },
      {
        title: "Block Printing Workshop",
        description:
          "Learn the centuries-old craft of Sanganeri and Bagru block printing — carving teak stamps and pressing natural-dye patterns onto cotton with master artisans.",
        iconName: "Paintbrush",
      },
      {
        title: "Rajasthani Cooking Class",
        description:
          "Master the art of dal baati churma, laal maas, and ker sangri in a home kitchen, grinding spices on a stone sil-batta and cooking over a traditional chulha fire.",
        iconName: "ChefHat",
      },
      {
        title: "Hot Air Balloon Over Jaipur",
        description:
          "Float above the Pink City at dawn, drifting over Amber Fort, the Aravalli Hills, and the patchwork farmlands of rural Rajasthan as the first light turns everything gold.",
        iconName: "Wind",
      },
      {
        title: "Village Safari & Folk Music",
        description:
          "Visit Bishnoi tribal villages near Jodhpur to witness a community that has practiced environmental conservation for five centuries, accompanied by live folk performances.",
        iconName: "Music",
      },
    ],
    travelTips: [
      "Visit between October and March to avoid the extreme summer heat that can exceed 45°C (113°F).",
      "Dress modestly when visiting temples and religious sites — shoulders and knees should be covered.",
      "Bargain respectfully in bazaars; starting at 40–50% of the quoted price is standard practice.",
      "Carry a scarf or shawl — useful for sun protection, temple visits, and chilly desert nights.",
      "Drink only bottled or filtered water and avoid ice from street vendors.",
      "Hire a local guide for forts and palaces — the stories bring the architecture to life.",
      "Pre-book heritage hotel stays well in advance during peak season (December–February).",
      "Learn a few Hindi phrases: 'Namaste' (hello), 'Dhanyavaad' (thank you), and 'Kitna?' (how much?).",
    ],
    gallery: [
      "/images/dest-3.jpg",
      "/images/dest-4.jpg",
      "/images/dest-5.jpg",
      "/images/dest-6.jpg",
      "/images/dest-7.jpg",
      "/images/about-1.jpg",
    ],
  },

  varanasi: {
    slug: "varanasi",
    name: "Varanasi",
    country: "India",
    region: "South Asia",
    tagline: "The eternal city where life, death, and the divine flow as one",
    heroImage: "/images/dest-8.jpg",
    overview:
      "Varanasi is the oldest continuously inhabited city in the world — a place where the sacred and the everyday are woven so tightly together that it's impossible to separate them. Along the western bank of the Ganges, 88 stone ghats descend into the river like a grand amphitheater, hosting an unbroken cycle of bathing, prayer, cremation, and celebration that has continued for over 3,000 years.\n\nAt dawn, the ghats come alive with pilgrims performing ritual ablutions in the honey-gold light, sadhus meditating beneath tattered umbrellas, and boatmen gliding silently past. By evening, the river's edge transforms into a stage for the Ganga Aarti — a breathtaking fire ceremony where priests wave towering brass lamps in synchronized arcs, filling the air with the scent of camphor and marigold while thousands of clay diyas float downstream like earthbound stars.\n\nBeyond the ghats, Varanasi's labyrinthine alleys conceal silk-weaving workshops producing some of India's finest Banarasi brocade, ancient Shiva temples echoing with the ring of brass bells, and tiny sweet shops where families have made the same milk-based delicacies for generations. A journey here is not a sightseeing trip — it is an encounter with the raw essence of existence.",
    quickFacts: {
      currency: "Indian Rupee (₹)",
      climate: "Humid subtropical with hot summers and cool, foggy winters",
      bestSeason: "October–March (cooler temperatures, festival season)",
      languages: "Hindi, Bhojpuri, English in tourist areas",
      timeZone: "IST (UTC+5:30)",
      drivingSide: "Left",
    },
    itinerary: [
      {
        day: 1,
        title: "Dawn on the Ganges & the Ghats",
        location: "Dashashwamedh Ghat, Varanasi",
        description:
          "Rise before the sun and board a wooden rowboat for a dawn cruise along the ghats. Watch as the city awakens — priests chanting mantras, yogis holding impossible postures on stone platforms, children flying kites from rooftops, and funeral pyres smoldering at Manikarnika Ghat in a ritual unchanged for millennia. Disembark at Assi Ghat for a chai with the boatman, then walk the entire ghat stretch as the morning light paints the sandstone amber.",
        highlights: [
          "Sunrise boat ride past all 88 ghats with a knowledgeable boatman",
          "Witness morning rituals and ablutions at Dashashwamedh Ghat",
          "Observe the eternal cremation fires at Manikarnika Ghat from the river",
          "Morning chai and paratha breakfast at a riverside stall near Assi Ghat",
        ],
        image: "/images/tour-4.jpg",
      },
      {
        day: 2,
        title: "Temples, Alleys & Ganga Aarti",
        location: "Old City & Dashashwamedh Ghat, Varanasi",
        description:
          "Plunge into Varanasi's legendary old city — a maze of lanes barely wide enough for two people, where every turn reveals a shrine, a sweet shop, or a family of langur monkeys. Visit the Kashi Vishwanath Temple, one of Hinduism's holiest sites, then seek out the Nepali Temple with its erotic wood carvings. As dusk falls, secure a prime spot on the steps of Dashashwamedh Ghat for the Ganga Aarti — a 45-minute fire ceremony of hypnotic devotion.",
        highlights: [
          "Navigate the ancient labyrinthine lanes of the old city on foot",
          "Pay respects at the Kashi Vishwanath Temple (Golden Temple)",
          "Taste the legendary Varanasi sweets — malaiyo, rabri, and thandai",
          "Front-row experience of the Ganga Aarti fire ceremony at sunset",
        ],
        image: "/images/dest-9.jpg",
      },
      {
        day: 3,
        title: "Sarnath — Where Buddhism Began",
        location: "Sarnath, near Varanasi",
        description:
          "Drive 10 kilometers northeast to Sarnath, where Siddhartha Gautama delivered his first sermon after achieving enlightenment, setting the Wheel of Dharma in motion. Explore the Dhamek Stupa — a massive 5th-century brick monument — the Archaeological Museum housing the iconic four-lion Ashoka capital (now India's national emblem), and the serene Mulagandha Kuti Vihar with its stunning Japanese murals depicting the Buddha's life.",
        highlights: [
          "Circumambulate the 1,500-year-old Dhamek Stupa at Sarnath",
          "View the original Ashoka Lion Capital in the Archaeological Museum",
          "Meditate in the Mulagandha Kuti Vihar's painted interior",
          "Visit the Tibetan and Thai monasteries in Sarnath's pilgrimage quarter",
        ],
        image: "/images/about-2.jpg",
      },
      {
        day: 4,
        title: "Silk Weaving & Farewell to the Ganges",
        location: "Weaver's Quarter & Ramnagar, Varanasi",
        description:
          "Spend the morning in the Muslim weaver's quarter, where families have produced Banarasi silk brocade for over 500 years. Watch as weavers work handlooms with extraordinary precision, creating saris that take three to six months to complete and are passed down as heirlooms. Cross the Ganges by boat to explore the crumbling Ramnagar Fort and its eclectic museum, then return for a final sunset on the river — floating diyas in your wake as a blessing.",
        highlights: [
          "Watch master weavers create Banarasi silk brocade on handlooms",
          "Learn about the zari (gold thread) techniques that date back to Mughal courts",
          "Explore Ramnagar Fort's collection of vintage cars, ivory, and astronomical clocks",
          "Float clay diyas on the Ganges as a farewell offering at sunset",
        ],
        image: "/images/tour-5.jpg",
      },
    ],
    thingsToDo: [
      {
        title: "Ganga Aarti Ceremony",
        description:
          "Witness the evening fire ceremony at Dashashwamedh Ghat — priests wave massive brass lamps in synchronized patterns while chanting ancient Vedic hymns to the river goddess.",
        iconName: "Flame",
      },
      {
        title: "Silk Weaving Workshop",
        description:
          "Visit family workshops in the weaver's quarter to see Banarasi silk being created on handlooms — an art form recognized by UNESCO and practiced for over five centuries.",
        iconName: "Scissors",
      },
      {
        title: "Dawn Boat Ride",
        description:
          "Glide along the Ganges at first light as the city stirs to life — arguably the single most profound travel experience in all of India.",
        iconName: "Sailboat",
      },
      {
        title: "Classical Music Concert",
        description:
          "Varanasi is the cradle of Hindustani classical music. Attend an intimate sitar or tabla recital in a riverside haveli — the city that produced Ravi Shankar still nurtures prodigies.",
        iconName: "Music",
      },
      {
        title: "Street Food Trail",
        description:
          "Follow a local guide through the old city's food lanes for kachori sabzi, tamatar chaat, creamy lassi, and the winter-only specialty malaiyo — a saffron milk foam.",
        iconName: "Utensils",
      },
    ],
    travelTips: [
      "Hire a local guide for the old city lanes — GPS is unreliable in the narrow alleys.",
      "Remove shoes before entering any temple or stepping onto the lower ghat steps.",
      "Photography is prohibited at Manikarnika Ghat cremation area — respect the mourners.",
      "Visit Sarnath early in the morning to avoid crowds and heat.",
      "The Ganga Aarti starts at sunset (around 6:45 PM in winter, 7:15 PM in summer) — arrive 30 minutes early.",
      "Carry small denominations for donations at temples and for boat rides.",
      "Beware of self-appointed 'guides' at the ghats — arrange a reputable one through your hotel.",
    ],
    gallery: [
      "/images/dest-8.jpg",
      "/images/dest-9.jpg",
      "/images/tour-4.jpg",
      "/images/tour-5.jpg",
      "/images/about-2.jpg",
    ],
  },

  bali: {
    slug: "bali",
    name: "Bali",
    country: "Indonesia",
    region: "Southeast Asia",
    tagline: "Island of the gods — where emerald rice terraces meet sacred temples",
    heroImage: "/images/dest-10.jpg",
    overview:
      "Bali casts a spell that has drawn travelers for centuries. This small island — barely 150 kilometers across — contains an almost impossible diversity of landscapes and experiences: mist-shrouded volcanic peaks, sculpted rice terraces that cascade down hillsides like giant green staircases, ancient Hindu temples perched on sea cliffs, and beaches ranging from powdery white to dramatic volcanic black.\n\nAt Bali's spiritual heart lies Ubud, a town of artists, healers, and ceremony. Every morning, Balinese women place tiny palm-leaf offerings (canang sari) on doorsteps, dashboards, and temple altars — a reminder that the sacred infuses every aspect of daily life here. The island's unique form of Hinduism, blended with animist and Buddhist elements, produces a calendar overflowing with processions, dance performances, and temple festivals.\n\nBeyond the spiritual, Bali rewards the senses: world-class surf breaks crash against coral reefs, spas set in jungle ravines offer flower-petal baths, and farm-to-table restaurants serve dishes made with ingredients harvested that morning from volcanic soil. Whether you seek transformation or relaxation, Bali delivers both in abundance.",
    quickFacts: {
      capital: "Denpasar",
      currency: "Indonesian Rupiah (Rp)",
      climate: "Tropical with dry season (April–October) and wet season (November–March)",
      bestSeason: "April–October (dry season, ideal for beaches and trekking)",
      languages: "Balinese, Indonesian (Bahasa), English widely spoken in tourist areas",
      timeZone: "WITA (UTC+8)",
      drivingSide: "Left",
    },
    itinerary: [
      {
        day: 1,
        title: "Ubud — Art, Jungle & Ceremony",
        location: "Ubud, Bali",
        description:
          "Begin in Ubud, Bali's cultural capital. Walk through the Sacred Monkey Forest Sanctuary, where long-tailed macaques leap between moss-covered stone temples. Explore the Ubud Royal Palace, then wander the town's galleries showcasing everything from traditional Balinese painting to contemporary installation art. End the day with a Kecak fire dance performance at sunset — 100 bare-chested men chanting in concentric circles as the Ramayana epic unfolds.",
        highlights: [
          "Walk among 700 macaques in the Sacred Monkey Forest Sanctuary",
          "Browse world-class Balinese art galleries along Jalan Raya Ubud",
          "Witness the hypnotic Kecak fire dance at Ubud Palace at dusk",
          "Dinner at a cliffside restaurant overlooking the Ayung River gorge",
        ],
        image: "/images/explor-1.jpg",
      },
      {
        day: 2,
        title: "Tegallalang Rice Terraces & Water Temples",
        location: "Tegallalang & Tirta Empul, Bali",
        description:
          "Drive north to the Tegallalang Rice Terraces — a cascade of luminous green paddies sculpted into a steep valley using the ancient subak irrigation system, a UNESCO-recognized cooperative water-management tradition. Continue to Tirta Empul, a 1,000-year-old water temple where Balinese Hindus purify themselves under 30 sacred spring fountains. With permission, join the purification ritual as crystal-clear water pours over your shoulders.",
        highlights: [
          "Walk along the sculpted ridges of Tegallalang Rice Terraces",
          "Participate in a purification ritual at Tirta Empul's sacred springs",
          "Lunch at a restaurant with infinity-pool views over the rice paddies",
          "Visit a traditional Balinese coffee plantation and taste luwak coffee",
        ],
        image: "/images/explor-2.jpg",
      },
      {
        day: 3,
        title: "Tanah Lot & Jatiluwih",
        location: "Tanah Lot & Jatiluwih, Bali",
        description:
          "Journey west to the Jatiluwih Rice Terraces, a vast UNESCO World Heritage landscape far less visited than Tegallalang, where paddies stretch to the horizon beneath the volcanic cone of Mount Batukaru. Trek through the terraces with a local farmer, learning how the subak system distributes water equally across hundreds of fields. In the late afternoon, reach Tanah Lot — a sea temple perched on a rocky islet, silhouetted against one of Bali's most photographed sunsets.",
        highlights: [
          "Trek through the expansive UNESCO-listed Jatiluwih Rice Terraces",
          "Learn the subak irrigation system from a local rice farmer",
          "Watch the sunset behind Tanah Lot's silhouetted sea temple",
          "Explore the holy caves and freshwater spring beneath the temple rock",
        ],
        image: "/images/explor-3.jpg",
      },
      {
        day: 4,
        title: "Uluwatu Cliff Temple & Southern Beaches",
        location: "Uluwatu & Bukit Peninsula, Bali",
        description:
          "Head south to the dramatic Bukit Peninsula, where limestone cliffs plunge into turquoise surf. Visit Uluwatu Temple, a 10th-century clifftop shrine 70 meters above the Indian Ocean, where cheeky monkeys guard the entrance. Descend to Padang Padang Beach — a hidden cove accessed through a narrow rock crevice — for a swim in gin-clear water. Return to Uluwatu for the cliff-edge Kecak dance as the sun drops into the sea behind the performers.",
        highlights: [
          "Explore Uluwatu Temple perched 70 meters above crashing waves",
          "Swim at the secret Padang Padang Beach through a rock crevice",
          "Watch surfers tackle Uluwatu's legendary left-hand break",
          "Sunset Kecak fire dance on the Uluwatu clifftop amphitheater",
        ],
        image: "/images/dest-11.jpg",
      },
      {
        day: 5,
        title: "Seminyak Beach & Farewell Bali",
        location: "Seminyak, Bali",
        description:
          "End the journey in Seminyak, Bali's most stylish coastal district. Spend the morning at a luxurious Balinese spa — a two-hour Boreh body scrub using volcanic spices, followed by a flower-petal bath in a stone tub overlooking tropical gardens. Stroll Seminyak's boutique-lined streets for handmade jewelry and resort wear, then settle into a beanbag on the beach with a fresh coconut as the final Bali sunset streaks the sky in shades of tangerine and violet.",
        highlights: [
          "Indulge in a traditional Boreh spice scrub and flower-petal bath",
          "Shop for artisan jewelry and textiles along Jalan Laksmana",
          "Beachfront farewell dinner at a top Seminyak seafood restaurant",
          "Sunset cocktails on the sand with live acoustic music",
        ],
        image: "/images/offer-1.jpg",
      },
    ],
    thingsToDo: [
      {
        title: "Mount Batur Sunrise Trek",
        description:
          "Hike an active volcano in the pre-dawn darkness, reaching the crater rim as the sun erupts over the horizon, illuminating Lake Batur and Mount Agung in spectral light.",
        iconName: "Mountain",
      },
      {
        title: "Balinese Cooking Class",
        description:
          "Start with a market tour to source fresh galangal, lemongrass, and palm sugar, then cook a full Balinese feast — sate lilit, lawar, and bebek betutu — in an open-air kitchen surrounded by rice fields.",
        iconName: "ChefHat",
      },
      {
        title: "Snorkeling at Nusa Penida",
        description:
          "Speed-boat to the neighboring island of Nusa Penida and snorkel alongside manta rays at Manta Point and over pristine coral gardens at Crystal Bay.",
        iconName: "Waves",
      },
      {
        title: "Traditional Balinese Massage",
        description:
          "Experience a two-hour treatment blending long acupressure strokes with aromatic frangipani oil in a spa pavilion overlooking a river gorge or tropical garden.",
        iconName: "Heart",
      },
      {
        title: "Waterfall Chasing",
        description:
          "Discover hidden cascades in Bali's lush interior — Tegenungan, Sekumpul, and Tukad Cepung, where sunlight pierces a cave to illuminate a curtain of falling water.",
        iconName: "Droplets",
      },
    ],
    travelTips: [
      "Rent a scooter only if you're an experienced rider — Bali's traffic is chaotic and travel insurance often excludes motorbike injuries.",
      "Always carry a sarong and sash for temple visits — they're required at every Balinese Hindu temple.",
      "Tap water is not drinkable; most hotels and restaurants provide refillable filtered water.",
      "The dry season (April–October) is ideal; the wet season brings afternoon downpours but also lush green landscapes and fewer crowds.",
      "Negotiate taxi fares in advance or use ride-hailing apps like Grab and Gojek for transparent pricing.",
      "Respect the canang sari offerings placed on the ground — step around them, never on them.",
      "Learn basic Indonesian: 'Terima kasih' (thank you) and 'Permisi' (excuse me) go a long way.",
    ],
    gallery: [
      "/images/dest-10.jpg",
      "/images/dest-11.jpg",
      "/images/explor-1.jpg",
      "/images/explor-2.jpg",
      "/images/explor-3.jpg",
      "/images/offer-1.jpg",
    ],
  },

  dubai: {
    slug: "dubai",
    name: "Dubai",
    country: "UAE",
    region: "Middle East",
    tagline: "A desert mirage made real — superlatives in glass and gold",
    heroImage: "/images/dest-12.jpg",
    overview:
      "Dubai is a city that refuses to accept limits. In barely half a century, it has risen from a modest pearling and trading port to a vertical metropolis of staggering ambition — home to the world's tallest building, the largest shopping mall, and man-made islands visible from space. Yet beneath the chrome-and-glass veneer lies an older Dubai of coral-stone wind-tower houses, fragrant spice souks, and abra boats crossing the Creek as they have for generations.\n\nThe contrasts are what make Dubai compelling. You can ski on real snow inside a mall in the morning, ride a camel through red desert dunes by afternoon, and dine 122 floors above sea level by night. The city's culinary scene now rivals London and New York, fueled by a population drawn from nearly every nation on earth.\n\nDubai's real genius, however, is its relentless reinvention. Every visit reveals something new — a museum shaped like a torus, a neighborhood of galleries in an old industrial district, a mangrove kayak trail minutes from the skyscrapers. It is the future made tangible, set against the timeless backdrop of Arabian desert and Gulf waters.",
    quickFacts: {
      capital: "Abu Dhabi (national capital); Dubai is its own emirate",
      currency: "UAE Dirham (AED)",
      climate: "Hot desert; scorching summers (40°C+), warm and pleasant winters",
      bestSeason: "November–March (comfortable temperatures, outdoor events)",
      languages: "Arabic (official), English widely spoken",
      timeZone: "GST (UTC+4)",
      drivingSide: "Right",
    },
    itinerary: [
      {
        day: 1,
        title: "Downtown Dubai & Burj Khalifa",
        location: "Downtown Dubai",
        description:
          "Begin at the epicenter of Dubai's ambition — the Burj Khalifa, an 828-meter needle of steel and glass that seems to pierce the sky itself. Ascend to the 'At the Top' observation deck on the 148th floor for a view stretching to the curvature of the earth, then descend to watch the Dubai Fountain perform its evening ballet — jets of water soaring 150 meters to the strains of Andrea Bocelli. Explore the adjacent Dubai Mall, not just for shopping but for its aquarium, ice rink, and dinosaur skeleton.",
        highlights: [
          "Sunset visit to Burj Khalifa's 148th-floor Sky observation deck",
          "Watch the Dubai Fountain's choreographed water-and-light show",
          "Walk through the 10-million-liter aquarium tunnel in Dubai Mall",
          "Late dinner at a rooftop lounge overlooking the illuminated skyline",
        ],
        image: "/images/city-3.jpg",
      },
      {
        day: 2,
        title: "Old Dubai — Creek, Souks & Heritage",
        location: "Deira & Bur Dubai",
        description:
          "Cross the Dubai Creek by traditional abra water taxi to explore the city's trading roots. Wander through the Gold Souk, where shop windows overflow with 18- and 24-karat necklaces, bracelets, and tiaras. Cross to the Spice Souk for sacks of saffron, frankincense, and dried rose petals, then visit the Al Fahidi Historical Neighbourhood — a labyrinth of wind-tower courtyard houses now home to galleries, cafés, and the Dubai Museum inside the 18th-century Al Fahidi Fort.",
        highlights: [
          "Cross Dubai Creek by wooden abra boat for 1 Dirham",
          "Browse the dazzling Gold Souk — the world's largest gold market",
          "Inhale the aromas of saffron and oud in the Spice Souk",
          "Explore the Al Fahidi Heritage Neighbourhood and Dubai Museum",
        ],
        image: "/images/tour-6.jpg",
      },
      {
        day: 3,
        title: "Desert Safari & Bedouin Camp",
        location: "Dubai Desert Conservation Reserve",
        description:
          "Escape the city for the rolling red dunes of the Dubai Desert Conservation Reserve. Experience dune bashing in a Land Cruiser, try sandboarding down steep faces, then arrive at a Bedouin-style desert camp as the sun sets. Enjoy henna painting, falconry displays, and shisha under the stars before a lavish BBQ dinner of lamb ouzi and grilled hammour, followed by a mesmerizing tanoura spinning dance performance.",
        highlights: [
          "Adrenaline-pumping dune bashing across red desert sands",
          "Try sandboarding on the dunes at golden hour",
          "Falconry demonstration and traditional henna art at the Bedouin camp",
          "Feast on lamb ouzi and watch tanoura dancers spin under the stars",
        ],
        image: "/images/dest-13.jpg",
      },
      {
        day: 4,
        title: "Marina, Palm & Farewell Dubai",
        location: "Dubai Marina & Palm Jumeirah",
        description:
          "Spend the final day along Dubai's glittering waterfront. Stroll the Marina Walk lined with superyachts and skyscrapers, then take a monorail across the trunk of Palm Jumeirah to the iconic Atlantis hotel. Enjoy a final swim at a pristine beach club, visit the Museum of the Future — a torus-shaped marvel of AI exhibits and immersive installations — then toast the trip with cocktails at a sky bar as the sun sets behind the Arabian Gulf.",
        highlights: [
          "Walk Dubai Marina's promenade past superyachts and towers",
          "Monorail ride across Palm Jumeirah to Atlantis",
          "Explore the award-winning Museum of the Future's immersive galleries",
          "Farewell sunset cocktails at a Gulf-facing sky bar",
        ],
        image: "/images/city-4.jpg",
      },
    ],
    thingsToDo: [
      {
        title: "Skydiving Over the Palm",
        description:
          "Freefall at 200 km/h above Palm Jumeirah, with the crescent-shaped island, the World Islands, and the Dubai skyline as your backdrop — the ultimate adrenaline experience.",
        iconName: "Plane",
      },
      {
        title: "Dhow Dinner Cruise",
        description:
          "Glide along Dubai Creek or the Marina aboard a traditional wooden dhow, savoring a multi-course Arabic dinner as the illuminated cityscape slides past your table.",
        iconName: "Ship",
      },
      {
        title: "Indoor Skiing",
        description:
          "Hit the slopes at Ski Dubai — a full-size indoor ski resort inside Mall of the Emirates, complete with chairlifts, a black run, and resident penguins.",
        iconName: "Snowflake",
      },
      {
        title: "Hot Air Balloon Over the Desert",
        description:
          "Float silently above the dunes at dawn, watching camels and Arabian oryx roam below as the desert shifts from indigo to gold in the rising light.",
        iconName: "Wind",
      },
      {
        title: "Luxury Brunch Experience",
        description:
          "Dubai's legendary Friday brunch is a social institution — choose from champagne-fueled spreads at five-star hotels with endless courses and live entertainment.",
        iconName: "GlassWater",
      },
    ],
    travelTips: [
      "The Dubai Metro is clean, efficient, and connects most major attractions — buy a Nol card for easy travel.",
      "Dress modestly in public areas outside beach clubs and pools; shoulders and knees should be covered in malls and souks.",
      "Alcohol is only served in licensed hotel restaurants and bars; public intoxication carries severe penalties.",
      "Friday is the holy day — some shops open late, but malls and attractions are open.",
      "The summer months (June–September) bring extreme heat above 45°C; plan outdoor activities for early morning or evening.",
      "Tipping 10–15% is appreciated at restaurants but not mandatory; a service charge is often included.",
      "Download the RTA Dubai app for public transport routes, timings, and Nol card top-ups.",
    ],
    gallery: [
      "/images/dest-12.jpg",
      "/images/dest-13.jpg",
      "/images/city-3.jpg",
      "/images/city-4.jpg",
      "/images/tour-6.jpg",
    ],
  },

  paris: {
    slug: "paris",
    name: "Paris",
    country: "France",
    region: "Europe",
    tagline: "The luminous city of art, haute cuisine, and timeless romance",
    heroImage: "/images/dest-14.jpg",
    overview:
      "Paris needs no introduction, yet it forever surprises. The City of Light is a living museum where every boulevard, bridge, and boulangerie tells a story — from the Gothic majesty of Notre-Dame to the iron lattice of the Eiffel Tower, from the Impressionist canvases of Musée d'Orsay to the cutting-edge installations of the Palais de Tokyo. It is a city designed for lingering: over a café crème at a zinc-topped bar, along the Seine's bouquiniste bookstalls, through the manicured allées of the Tuileries.\n\nBut Paris is far more than its monuments. It is the crunch of a perfect baguette at 7 a.m., the hush of a candlelit wine bar in the Marais, the exhilaration of stumbling upon a jazz trio playing in a Metro tunnel. Each arrondissement has its own personality — the bohemian energy of Belleville, the aristocratic calm of Saint-Germain, the multicultural bustle of the Goutte d'Or.\n\nWhether you are returning for the tenth time or seeing the Eiffel Tower sparkle for the first, Paris delivers a singular magic: the conviction that beauty, pleasure, and intellectual life are not luxuries but necessities.",
    quickFacts: {
      capital: "Paris (national capital)",
      currency: "Euro (€)",
      climate: "Oceanic; mild summers, cool winters, rain throughout the year",
      bestSeason: "April–June & September–October (mild weather, fewer crowds than July–August)",
      languages: "French; English widely understood in tourist areas",
      timeZone: "CET (UTC+1) / CEST (UTC+2) in summer",
      drivingSide: "Right",
    },
    itinerary: [
      {
        day: 1,
        title: "Eiffel Tower, Seine & Left Bank",
        location: "7th Arrondissement, Paris",
        description:
          "Begin with the icon. Ascend the Eiffel Tower to the summit for a bird's-eye panorama of the city's zinc rooftops and grand avenues, then descend for a picnic of cheese, charcuterie, and rosé on the Champ de Mars. In the afternoon, stroll along the Left Bank of the Seine, browsing the bouquinistes' vintage book stalls, before settling into a café terrace in Saint-Germain-des-Prés — the literary quarter once haunted by Hemingway and Sartre.",
        highlights: [
          "Sunrise ascent to the Eiffel Tower summit for city-wide views",
          "Gourmet picnic on the Champ de Mars with local cheeses and wine",
          "Browse vintage books and prints at Seine-side bouquiniste stalls",
          "Evening café crème at Café de Flore in Saint-Germain-des-Prés",
        ],
        image: "/images/dest-15.jpg",
      },
      {
        day: 2,
        title: "The Louvre, Tuileries & Marais",
        location: "1st & 4th Arrondissements, Paris",
        description:
          "Devote the morning to the Louvre — not trying to see everything, but savoring key works: the Winged Victory of Samothrace, Vermeer's The Lacemaker, and of course the Mona Lisa. Emerge into the Tuileries Garden for a moment of green calm, then walk to the Marais — Paris's most charismatic quarter, a tapestry of medieval hôtels particuliers, Jewish bakeries, LGBTQ+ nightlife, and concept stores in 17th-century courtyards.",
        highlights: [
          "Guided highlights tour of the Louvre's masterpieces in 3 hours",
          "Stroll through the Tuileries Garden to Place de la Concorde",
          "Explore the Marais — vintage shops, falafel on Rue des Rosiers",
          "Evening at Place des Vosges, Paris's oldest and most beautiful square",
        ],
        image: "/images/tour-7.jpg",
      },
      {
        day: 3,
        title: "Montmartre, Sacré-Cœur & Hidden Paris",
        location: "18th Arrondissement, Paris",
        description:
          "Climb the cobbled lanes of Montmartre to the gleaming white basilica of Sacré-Cœur, whose steps offer a sweeping view across the entire city. Wander through the Place du Tertre, still alive with portrait artists, then descend to explore the lesser-known passages couverts — glass-roofed shopping arcades from the 19th century, filled with antique dealers, rare-book sellers, and old-world tea rooms.",
        highlights: [
          "Sunrise at Sacré-Cœur for panoramic views before the crowds arrive",
          "Explore Montmartre's artists' quarter and Place du Tertre",
          "Discover the covered passages — Galerie Vivienne and Passage des Panoramas",
          "Wine tasting at a cave à vin in the 9th arrondissement",
        ],
        image: "/images/about-3.jpg",
      },
      {
        day: 4,
        title: "Versailles — Palace of the Sun King",
        location: "Versailles, Île-de-France",
        description:
          "Take the RER train to Versailles, the palace Louis XIV built to awe the world — and it still does. Wander the Hall of Mirrors, where 357 mirrors reflect the light of 20,000 candles, then escape to the formal gardens with their geometric parterres, fountains, and the intimate Petit Trianon where Marie Antoinette played at country life. Return to Paris for a final dinner at a bistro serving classic onion soup, duck confit, and crème brûlée.",
        highlights: [
          "Walk the Hall of Mirrors in the Palace of Versailles",
          "Explore the formal gardens during the Grande Eaux fountain show",
          "Visit Marie Antoinette's Petit Trianon and hamlet",
          "Farewell dinner at a classic Parisian bistro with onion soup and duck confit",
        ],
        image: "/images/dest-16.jpg",
      },
    ],
    thingsToDo: [
      {
        title: "Pastry & Chocolate Tour",
        description:
          "Follow a food historian through Saint-Germain tasting croissants, éclairs, macarons, and artisan chocolates at the ateliers that define French pâtisserie.",
        iconName: "Cake",
      },
      {
        title: "Seine River Cruise",
        description:
          "Glide past Notre-Dame, the Louvre, and the Musée d'Orsay on an evening dinner cruise, watching the Eiffel Tower sparkle on the hour as champagne flows.",
        iconName: "Ship",
      },
      {
        title: "Musée d'Orsay & Impressionism",
        description:
          "Spend an afternoon with Monet's water lilies, Renoir's dancers, and Van Gogh's Starry Night Over the Rhône in the former Beaux-Arts railway station.",
        iconName: "Palette",
      },
      {
        title: "Cooking Class in Le Marais",
        description:
          "Learn to prepare a three-course French meal — mastering sauces, soufflés, and the art of the perfect tarte tatin — in a professional kitchen with a Cordon Bleu chef.",
        iconName: "ChefHat",
      },
      {
        title: "Jazz in a Cave Club",
        description:
          "Descend into a stone-vaulted cellar in the Latin Quarter for live jazz — Paris's underground clubs have nurtured the genre since the days of Django Reinhardt.",
        iconName: "Music",
      },
    ],
    travelTips: [
      "Buy a Paris Museum Pass (2 or 4 days) for skip-the-line access to the Louvre, Orsay, Versailles, and 50+ museums.",
      "The Métro is fast and cheap — buy a carnet of 10 tickets or use the Navigo Découverte weekly pass.",
      "Restaurants serve lunch from 12–2 PM and dinner from 7:30–10 PM; arriving outside these hours may mean closed kitchens.",
      "A simple 'Bonjour' when entering any shop or café is considered essential politeness.",
      "Pickpockets operate around tourist hotspots — use a cross-body bag and stay aware on the Métro.",
      "Tap water is free and excellent; ask for 'une carafe d'eau' at restaurants instead of bottled.",
      "Most shops close on Sundays except in the Marais and along the Champs-Élysées.",
    ],
    gallery: [
      "/images/dest-14.jpg",
      "/images/dest-15.jpg",
      "/images/dest-16.jpg",
      "/images/tour-7.jpg",
      "/images/about-3.jpg",
    ],
  },

  "machu-picchu": {
    slug: "machu-picchu",
    name: "Machu Picchu",
    country: "Peru",
    region: "Americas",
    tagline: "The lost citadel of the Incas, veiled in cloud and mystery",
    heroImage: "/images/dest-17.jpg",
    overview:
      "Perched at 2,430 meters on a razor-thin ridge between two Andean peaks, Machu Picchu is one of the most extraordinary achievements of any civilization. Built in the 15th century as a royal estate for the Inca emperor Pachacuti, then abandoned during the Spanish conquest and swallowed by cloud forest for nearly 400 years, the citadel was only revealed to the outside world in 1911 — and it has not stopped astonishing visitors since.\n\nThe ruins are a masterclass in Inca engineering: massive granite blocks fitted without mortar so precisely that a knife blade cannot slip between them, terraces that prevented erosion on near-vertical slopes, and an astronomical observatory — the Intihuatana stone — aligned to mark the solstices with shadow. The setting amplifies the wonder: swirling mists part to reveal Huayna Picchu's green spire, condors ride thermals above the Urubamba gorge, and the silence is broken only by wind and birdsong.\n\nThe journey to Machu Picchu is as remarkable as the destination. Whether you hike the classic Inca Trail through mountain passes and subtropical forest, take the scenic train along the Urubamba River, or explore the Sacred Valley's markets and ruins en route, the experience builds to a crescendo that no photograph can fully convey.",
    quickFacts: {
      capital: "Lima (national capital)",
      currency: "Peruvian Sol (S/.)",
      climate: "Cool and humid subtropical at altitude; dry season May–September",
      bestSeason: "May–September (dry season with clearer skies; June–August busiest)",
      languages: "Spanish, Quechua",
      timeZone: "PET (UTC-5)",
      drivingSide: "Right",
    },
    itinerary: [
      {
        day: 1,
        title: "Arrival in Cusco — Imperial City of the Incas",
        location: "Cusco, Peru",
        description:
          "Arrive in Cusco, the ancient Inca capital at 3,400 meters, and spend the day acclimatizing to the altitude. Walk the cobblestone streets where Inca stonework forms the foundations of Spanish colonial buildings. Visit the Qorikancha — once the richest temple in the Inca world, its walls sheathed in gold — now topped by the Santo Domingo convent. End the evening in the lively San Pedro Market, sipping coca tea to ward off altitude sickness.",
        highlights: [
          "Explore Cusco's Plaza de Armas surrounded by Inca and colonial architecture",
          "Visit Qorikancha, the Inca Temple of the Sun, with its precision stonework",
          "Taste Peruvian street food at San Pedro Market — empanadas, juices, ceviche",
          "Sip coca tea and acclimatize in a courtyard café",
        ],
        image: "/images/tour-8.jpg",
      },
      {
        day: 2,
        title: "The Sacred Valley — Pisac & Ollantaytambo",
        location: "Sacred Valley, Peru",
        description:
          "Descend into the Sacred Valley of the Urubamba River, the agricultural heartland of the Inca Empire. At Pisac, explore the ruins of a hilltop fortress and browse the vibrant artisan market for hand-woven textiles and painted ceramics. Continue to Ollantaytambo, a living Inca town where water still flows through original stone channels and the massive temple-fortress looms above narrow streets unchanged in 600 years.",
        highlights: [
          "Hike the Pisac archaeological site overlooking the Sacred Valley",
          "Shop for hand-woven alpaca textiles at Pisac's artisan market",
          "Climb the monumental stone terraces of Ollantaytambo's temple-fortress",
          "Walk the living Inca streets of Ollantaytambo — still inhabited after 600 years",
        ],
        image: "/images/dest-18.jpg",
      },
      {
        day: 3,
        title: "Inca Trail Trek — Cloud Forest & Mountain Passes",
        location: "Inca Trail, Cusco Region",
        description:
          "Begin the final stretch of the classic Inca Trail, hiking through ecosystems that shift from high-altitude grassland to dripping cloud forest. Pass through Wiñay Wayna — an exquisitely preserved set of agricultural terraces and fountains cascading down a steep slope — as orchids, hummingbirds, and bromeliads line the stone-paved path. Camp within earshot of the ruins, anticipating tomorrow's dawn arrival at the Sun Gate.",
        highlights: [
          "Hike ancient Inca stone pathways through cloud forest and alpine meadows",
          "Discover the cascading terraces and fountains of Wiñay Wayna",
          "Spot Andean orchids, hummingbirds, and spectacled bear habitat",
          "Camp in the mountains with views of the Urubamba gorge below",
        ],
        image: "/images/explor-4.jpg",
      },
      {
        day: 4,
        title: "Machu Picchu — The Citadel Revealed",
        location: "Machu Picchu, Peru",
        description:
          "Rise in the dark and hike the final steps to Inti Punku, the Sun Gate. As the first rays of light pierce the mist, Machu Picchu materializes below — a breathtaking panorama of temples, plazas, and terraces framed by the green spire of Huayna Picchu. Descend into the citadel with a specialist guide, exploring the Temple of the Sun, the Room of Three Windows, and the Intihuatana stone, Inca astronomy carved in granite.",
        highlights: [
          "Sunrise arrival through Inti Punku (the Sun Gate) with mist parting over the ruins",
          "Guided tour of the Temple of the Sun and astronomical Intihuatana stone",
          "Photograph the classic postcard view from the Caretaker's Hut",
          "Optional climb of Huayna Picchu for a vertigo-inducing aerial perspective",
        ],
        image: "/images/hero-destinations.jpg",
      },
      {
        day: 5,
        title: "Aguas Calientes & Return to Cusco",
        location: "Aguas Calientes & Cusco, Peru",
        description:
          "Spend the morning revisiting Machu Picchu's quieter corners as the early crowds thin, or soak sore muscles in the thermal hot springs that give Aguas Calientes its name. Board the Vistadome train back through the Urubamba gorge — panoramic glass ceilings framing the snow-capped Andes — and return to Cusco for a celebratory dinner of Peruvian-fusion cuisine: ceviche, alpaca steak, and a pisco sour crafted tableside.",
        highlights: [
          "Second morning entry to Machu Picchu for crowd-free exploration",
          "Soak in the natural thermal springs of Aguas Calientes",
          "Scenic Vistadome train ride through the Urubamba gorge",
          "Celebratory pisco sour and Peruvian-fusion dinner in Cusco",
        ],
        image: "/images/tour-9.jpg",
      },
    ],
    thingsToDo: [
      {
        title: "Classic Inca Trail Hike",
        description:
          "Trek 43 kilometers over four days through mountain passes, cloud forests, and ancient Inca ruins, culminating in the dramatic sunrise arrival at the Sun Gate above Machu Picchu.",
        iconName: "Footprints",
      },
      {
        title: "Peruvian Cooking Class",
        description:
          "Learn to prepare ceviche, lomo saltado, and causa in a Cusco kitchen, using Andean superfoods like quinoa, maca, and purple corn that the Incas cultivated centuries ago.",
        iconName: "ChefHat",
      },
      {
        title: "Textile Weaving Demonstration",
        description:
          "Visit a women's weaving cooperative in the Sacred Valley to learn how Quechua artisans spin alpaca wool and create intricate patterns encoding Andean cosmology.",
        iconName: "Scissors",
      },
      {
        title: "Mountain Biking Maras to Moray",
        description:
          "Ride downhill through the Sacred Valley from the Maras salt terraces to the concentric Moray amphitheater — an Inca agricultural laboratory testing crop varieties at different altitudes.",
        iconName: "Bike",
      },
      {
        title: "Pisco Sour Masterclass",
        description:
          "Join a mixologist in Cusco's San Blas neighborhood to learn the art of Peru's national cocktail — pisco, lime, egg white, and Angostura bitters shaken to frothy perfection.",
        iconName: "GlassWater",
      },
    ],
    travelTips: [
      "Spend at least two days in Cusco before hiking to acclimatize to the 3,400 m altitude — rushing causes altitude sickness.",
      "Inca Trail permits are limited to 500 per day (including porters) and sell out months in advance — book 6+ months ahead.",
      "Coca tea (mate de coca) is a traditional and effective remedy for altitude headaches; it's legal and sold everywhere.",
      "Bring layers — temperatures can swing from 25°C in the sun to near freezing at night in the mountains.",
      "Book Machu Picchu entry tickets in advance; timed-entry slots and daily visitor caps are strictly enforced.",
      "Rain gear is essential even in the dry season — Machu Picchu's cloud-forest location means mist and showers can arrive at any time.",
      "Hire a licensed guide at Machu Picchu — the ruins are far more meaningful with expert interpretation.",
    ],
    gallery: [
      "/images/dest-17.jpg",
      "/images/dest-18.jpg",
      "/images/tour-8.jpg",
      "/images/tour-9.jpg",
      "/images/explor-4.jpg",
      "/images/hero-destinations.jpg",
    ],
  },

  istanbul: {
    slug: "istanbul",
    name: "Istanbul",
    country: "Turkey",
    region: "Middle East",
    tagline: "Where continents collide and empires echo through every stone",
    heroImage: "/images/dest-19.jpg",
    overview:
      "Istanbul is the only city in the world that straddles two continents, and this geographic drama shapes everything about it. For over 1,600 years, it served as the capital of two of history's greatest empires — the Byzantine and the Ottoman — and their layered legacy is visible everywhere: in the soaring dome of Hagia Sophia, the cascading courtyards of Topkapi Palace, the 4,000 shops of the Grand Bazaar, and the six slender minarets of the Blue Mosque.\n\nBut Istanbul is no museum city. It pulses with a ferocious modern energy. Rooftop bars overlook the Bosphorus where container ships glide between Europe and Asia, hole-in-the-wall meyhanes serve raki and meze until 3 a.m., and contemporary art fills repurposed Ottoman warehouses. The food alone justifies the journey — from simit vendors on every corner to the smoky perfection of a kebab at a century-old lokanta.\n\nAdd a day trip to the surreal landscapes of Cappadocia — fairy chimneys, cave churches, and dawn balloon flights — and you have a journey that spans millennia of human ambition, artistry, and faith.",
    quickFacts: {
      capital: "Ankara (national capital); Istanbul is the cultural capital",
      currency: "Turkish Lira (₺)",
      climate: "Oceanic transitioning to Mediterranean; warm summers, cool winters",
      bestSeason: "April–May & September–November (mild weather, thinner crowds)",
      languages: "Turkish; English spoken in tourist areas",
      timeZone: "TRT (UTC+3)",
      drivingSide: "Right",
    },
    itinerary: [
      {
        day: 1,
        title: "Sultanahmet — Hagia Sophia & Blue Mosque",
        location: "Sultanahmet, Istanbul",
        description:
          "Begin in Sultanahmet, Istanbul's historic heart. Enter Hagia Sophia — for a thousand years the largest enclosed space on earth — and gaze up at the colossal dome that seems to float on a ring of light, its walls bearing both Byzantine mosaics and Ottoman calligraphy. Cross the garden to the Blue Mosque, named for the 20,000 Iznik tiles that create a shimmering azure interior, then explore the Hippodrome, the ancient chariot-racing arena now an elegant public square.",
        highlights: [
          "Stand beneath Hagia Sophia's 56-meter dome and Byzantine gold mosaics",
          "Admire the 20,000 hand-painted Iznik tiles inside the Blue Mosque",
          "Walk the ancient Hippodrome past the Egyptian Obelisk and Serpentine Column",
          "Turkish coffee and baklava at a café overlooking the minarets",
        ],
        image: "/images/tour-10.jpg",
      },
      {
        day: 2,
        title: "Topkapi Palace & Grand Bazaar",
        location: "Sultanahmet & Beyazit, Istanbul",
        description:
          "Spend the morning at Topkapi Palace, the opulent nerve-center of the Ottoman Empire for 400 years. Wander through the Harem's tiled chambers, the Treasury's emerald-encrusted daggers and 86-carat Spoonmaker's Diamond, and the terrace overlooking the confluence of the Bosphorus and Golden Horn. In the afternoon, lose yourself in the Grand Bazaar — 61 covered streets, 4,000 shops, and five centuries of commerce under vaulted ceilings.",
        highlights: [
          "Tour Topkapi Palace's Harem, Treasury, and Bosphorus terrace",
          "See the 86-carat Spoonmaker's Diamond and Topkapi Dagger",
          "Haggle for hand-painted ceramics and kilim rugs in the Grand Bazaar",
          "Evening fish sandwich from the boats at Eminönü dock by the Galata Bridge",
        ],
        image: "/images/dest-20.jpg",
      },
      {
        day: 3,
        title: "Bosphorus Cruise & Asian Istanbul",
        location: "Bosphorus & Kadıköy, Istanbul",
        description:
          "Board a ferry for a Bosphorus cruise, gliding between Europe and Asia past ornate Ottoman waterfront mansions (yalıs), the medieval Rumeli Fortress, and the gleaming new suspension bridges. Disembark on the Asian side at Kadıköy, a lively neighborhood of markets, vintage shops, and meyhane taverns. Wander through the fish market, taste the famous midye dolma (stuffed mussels), and return by ferry at sunset as the skyline of mosques and minarets is silhouetted in gold.",
        highlights: [
          "Bosphorus ferry cruise past Ottoman yalıs and Rumeli Fortress",
          "Explore Kadıköy's vibrant street art, markets, and food scene on the Asian side",
          "Taste midye dolma (stuffed mussels) and fresh pomegranate juice",
          "Sunset ferry return with the Sultanahmet skyline glowing amber",
        ],
        image: "/images/about-4.jpg",
      },
      {
        day: 4,
        title: "Cappadocia — Fairy Chimneys & Balloon Flight",
        location: "Cappadocia, Central Turkey",
        description:
          "Fly to Cappadocia for the trip's unforgettable finale. Rise before dawn to float in a hot-air balloon over a landscape that defies belief — thousands of fairy-chimney rock formations, cave churches carved by early Christians, and valleys striped in shades of rose, cream, and ochre. After landing, explore the underground city of Derinkuyu, a multi-level subterranean settlement that once sheltered 20,000 people, then watch the sunset paint the Göreme valley in impossible colors.",
        highlights: [
          "Hot-air balloon flight over Cappadocia's fairy chimneys at sunrise",
          "Explore the eight-level underground city of Derinkuyu",
          "Visit the rock-hewn churches and Byzantine frescoes of the Göreme Open-Air Museum",
          "Sunset over the Rose Valley from a panoramic viewpoint",
        ],
        image: "/images/explor-5.jpg",
      },
    ],
    thingsToDo: [
      {
        title: "Turkish Hammam Experience",
        description:
          "Surrender to centuries of bathing tradition in a marble-domed hammam — hot steam, exfoliating kese scrub, and a foam massage beneath Ottoman-era architecture.",
        iconName: "Droplets",
      },
      {
        title: "Bosphorus Sunset Cruise",
        description:
          "Charter a private gulet or join a public ferry for an evening cruise between continents, sipping Turkish tea as palaces and fortresses drift past on both shores.",
        iconName: "Ship",
      },
      {
        title: "Spice Bazaar & Food Tour",
        description:
          "Navigate the aromatic Spice Bazaar and back-street eateries with a local guide, sampling Turkish delight, sujuk, kaymak with honey, and freshly ground Turkish coffee.",
        iconName: "Utensils",
      },
      {
        title: "Cappadocia Hot Air Balloon",
        description:
          "Float silently above a landscape of fairy chimneys and cave dwellings at dawn — one of the world's most iconic balloon flights, with hundreds of balloons filling the sky.",
        iconName: "Wind",
      },
      {
        title: "Whirling Dervish Ceremony",
        description:
          "Witness the Mevlevi Sema ceremony — white-robed dervishes spinning in meditative trance, a 750-year-old Sufi ritual of spiritual union with the divine.",
        iconName: "RotateCw",
      },
    ],
    travelTips: [
      "The Istanbulkart transit card works on ferries, trams, metro, and buses — essential for getting around cheaply.",
      "Remove shoes before entering mosques; women should cover their heads (scarves are available at mosque entrances).",
      "Bargaining is expected in the Grand Bazaar and Spice Bazaar — start at about 50% of the asking price.",
      "Book Cappadocia balloon flights well in advance, especially for April–November season; flights cancel for weather.",
      "Istanbul's traffic is legendary — use ferries and trams instead of taxis during rush hour.",
      "Try the street food: simit (sesame bread rings), balık ekmek (fish sandwiches), and kestane (roasted chestnuts).",
      "Tipping 5–10% is customary at restaurants; round up for taxis.",
    ],
    gallery: [
      "/images/dest-19.jpg",
      "/images/dest-20.jpg",
      "/images/tour-10.jpg",
      "/images/about-4.jpg",
      "/images/explor-5.jpg",
    ],
  },

  "pyramids-of-giza": {
    slug: "pyramids-of-giza",
    name: "Pyramids of Giza",
    country: "Egypt",
    region: "Africa",
    tagline: "The last surviving wonder of the ancient world, eternal under the desert sun",
    heroImage: "/images/dest-21.jpg",
    overview:
      "Nothing truly prepares you for the Pyramids of Giza. You have seen them a thousand times in photographs, yet standing at their base — craning your neck to trace 2.3 million limestone blocks rising 146 meters into the desert sky — the sheer impossibility of what the ancient Egyptians achieved 4,500 years ago strikes like a physical force. These are not ruins; they are perfection preserved, the oldest and only surviving Wonder of the Ancient World.\n\nThe Giza Plateau is just the beginning of an Egyptian odyssey. Nearby, the Sphinx gazes eastward with an expression that has puzzled humanity for millennia, while the Grand Egyptian Museum — one of the most anticipated cultural openings of the century — now houses Tutankhamun's treasures in a building worthy of their grandeur. Cairo itself is a magnificent, chaotic, endlessly fascinating city of minarets, Mamluk architecture, and Nile-side promenades.\n\nBeyond Cairo, a felucca cruise on the Nile at sunset, drifting past date palms and ancient temples, connects you to a landscape and a way of life that has persisted since the pharaohs. Egypt is not a destination you visit — it is one that imprints itself on your soul.",
    quickFacts: {
      capital: "Cairo",
      currency: "Egyptian Pound (E£)",
      climate: "Hot desert; almost no rainfall, scorching summers, mild winters",
      bestSeason: "October–April (cooler temperatures ideal for sightseeing)",
      languages: "Arabic; English and French widely understood in tourist areas",
      timeZone: "EET (UTC+2)",
      drivingSide: "Right",
    },
    itinerary: [
      {
        day: 1,
        title: "The Pyramids & the Sphinx",
        location: "Giza Plateau, Cairo",
        description:
          "Arrive early at the Giza Plateau before the crowds and the midday heat. Stand before the Great Pyramid of Khufu — the largest and oldest, its 2.3 million blocks a testament to staggering ambition. Enter the narrow ascending passage to the King's Chamber deep within, then walk to the Sphinx, its leonine body and human face eroded but undiminished. Finish with a camel ride along the desert ridge for the classic panoramic photograph of all three pyramids aligned.",
        highlights: [
          "Enter the Great Pyramid of Khufu through the ascending corridor to the King's Chamber",
          "Stand face-to-face with the 4,500-year-old Great Sphinx",
          "Camel ride along the desert ridge for the iconic three-pyramid panorama",
          "Sound and Light Show at the Pyramids after dark",
        ],
        image: "/images/banner-1.jpg",
      },
      {
        day: 2,
        title: "Grand Egyptian Museum & Islamic Cairo",
        location: "Giza & Islamic Cairo",
        description:
          "Spend the morning at the Grand Egyptian Museum, whose vast galleries house over 100,000 artifacts, including the complete Tutankhamun collection — his golden death mask, ceremonial chariots, and the innermost coffin of solid gold. In the afternoon, plunge into Islamic Cairo's medieval streets: the Al-Muizz corridor lined with Mamluk mosques, the incense-filled Khan el-Khalili bazaar, and the serene courtyard of Al-Azhar Mosque, a center of Islamic learning since 970 AD.",
        highlights: [
          "See Tutankhamun's golden death mask and treasures at the Grand Egyptian Museum",
          "Walk the Al-Muizz heritage street lined with medieval Mamluk architecture",
          "Haggle for lanterns, spices, and perfume oils in Khan el-Khalili bazaar",
          "Drink mint tea in a century-old coffeehouse in Islamic Cairo",
        ],
        image: "/images/tour-11.jpg",
      },
      {
        day: 3,
        title: "Saqqara, Memphis & the Step Pyramid",
        location: "Saqqara & Memphis, near Cairo",
        description:
          "Drive south to Saqqara, where the Step Pyramid of Djoser — the world's oldest monumental stone structure — rises in six tiered levels above a vast necropolis of painted tombs. Descend into the Tomb of Mereruka, its walls covered in vivid 4,000-year-old reliefs of daily Egyptian life. Continue to the open-air museum at Memphis, the first capital of unified Egypt, to see the colossal fallen statue of Ramesses II and the alabaster Sphinx.",
        highlights: [
          "Explore the Step Pyramid complex — the world's first monumental stone structure",
          "Descend into the Tomb of Mereruka for 4,000-year-old painted reliefs",
          "See the colossal fallen statue of Ramesses II at Memphis",
          "Visit the newly opened pyramid interiors at Saqqara's south necropolis",
        ],
        image: "/images/about-5.jpg",
      },
      {
        day: 4,
        title: "Nile Felucca Cruise & Farewell Cairo",
        location: "Cairo & the Nile",
        description:
          "Spend the morning at the Coptic Quarter — Hanging Church, Ben Ezra Synagogue, and the ancient fortress of Babylon — where Egypt's Christian heritage spans nearly 2,000 years. In the late afternoon, board a traditional felucca sailboat for a sunset cruise on the Nile. Drift past Gezira Island and the Cairo Tower as the call to prayer echoes from a thousand minarets and the sky turns from gold to violet — a farewell that ancient travelers would recognize.",
        highlights: [
          "Explore the Hanging Church and Coptic Museum in Old Cairo",
          "Traditional felucca sunset cruise on the Nile",
          "Watch Cairo's skyline glow as the sun sets from the river",
          "Farewell dinner of koshari, grilled pigeon, and umm ali at a Nile-view restaurant",
        ],
        image: "/images/dest-22.jpg",
      },
    ],
    thingsToDo: [
      {
        title: "Pyramid Interior Exploration",
        description:
          "Crouch through the narrow ascending passage of the Great Pyramid to reach the King's Chamber — a granite room at the heart of 6 million tonnes of stone, silent for 4,500 years.",
        iconName: "Landmark",
      },
      {
        title: "Nile Dinner Cruise",
        description:
          "Dine on a decorated riverboat gliding past Cairo's illuminated corniche, with live oud music, a belly-dance performance, and a multi-course Egyptian feast.",
        iconName: "Ship",
      },
      {
        title: "Khan el-Khalili Bazaar Tour",
        description:
          "Navigate the labyrinthine lanes of Cairo's 14th-century bazaar with a local guide, sampling street food, watching copper artisans at work, and sipping hibiscus tea.",
        iconName: "ShoppingBag",
      },
      {
        title: "Sound & Light Show at the Pyramids",
        description:
          "After dark, the Pyramids and Sphinx are illuminated by colored lights while a narrated show recounts the story of ancient Egypt — dramatic and unforgettable.",
        iconName: "Sparkles",
      },
      {
        title: "Camel Trek at Sunrise",
        description:
          "Ride a camel across the Giza Plateau as the first light of dawn turns the limestone blocks to gold and the Sahara stretches endlessly to the west.",
        iconName: "Sun",
      },
    ],
    travelTips: [
      "Visit the Pyramids at opening time (8 AM) or late afternoon to avoid the worst heat and crowds.",
      "Pyramid interior tickets are limited and sell out quickly — buy them at the ticket office as soon as it opens.",
      "Agree on camel/horse ride prices before mounting — and get it in writing if possible.",
      "Carry small bills (Egyptian pounds) for tips and purchases; many vendors don't carry change.",
      "Dress conservatively when visiting mosques — long sleeves, trousers or long skirts, and remove shoes.",
      "Stay hydrated — Egypt's dry heat can dehydrate you faster than you realize.",
      "Use reputable taxi apps (Uber and Careem work in Cairo) rather than hailing random cabs.",
    ],
    gallery: [
      "/images/dest-21.jpg",
      "/images/dest-22.jpg",
      "/images/banner-1.jpg",
      "/images/tour-11.jpg",
      "/images/about-5.jpg",
    ],
  },

  "masai-mara": {
    slug: "masai-mara",
    name: "Masai Mara",
    country: "Kenya",
    region: "Africa",
    tagline: "The great theatre of the wild, where the savannah teems with life",
    heroImage: "/images/dest-23.jpg",
    overview:
      "The Masai Mara is the undisputed crown jewel of African safari. This 1,510-square-kilometer expanse of golden grassland, punctuated by acacia woodland and the winding Mara River, supports one of the densest concentrations of wildlife on the planet. Lions lounge in the shade of flat-topped trees, leopards drape themselves over branches, elephants move in silent herds, and — for a few breathtaking weeks each year — over two million wildebeest pour across the Mara River in the Great Migration, one of nature's most awe-inspiring spectacles.\n\nBut the Mara is more than a wildlife reserve. It is the ancestral homeland of the Maasai people, semi-nomadic pastoralists whose red-robed warriors and beaded jewelry have become iconic images of East Africa. A visit to a Maasai village offers a window into a culture that has coexisted with lions and elephants for centuries — a relationship of mutual respect born of necessity.\n\nWhether you're witnessing a cheetah's explosive sprint across the plains, sipping sundowners as hippos grunt in a nearby pool, or falling asleep in a luxury tented camp to the distant rumble of a lion's roar, the Masai Mara delivers an experience that recalibrates your sense of wonder.",
    quickFacts: {
      capital: "Nairobi",
      currency: "Kenyan Shilling (KSh)",
      climate: "Tropical highland; warm days, cool nights, two rainy seasons",
      bestSeason: "July–October (Great Migration river crossings; dry season)",
      languages: "Swahili, English",
      timeZone: "EAT (UTC+3)",
      drivingSide: "Left",
    },
    itinerary: [
      {
        day: 1,
        title: "Arrival & First Game Drive",
        location: "Masai Mara National Reserve",
        description:
          "Fly from Nairobi to the Mara in a light aircraft, landing on a red-earth airstrip surrounded by savannah. Transfer to your luxury tented camp, settle in, then head out for an afternoon game drive. Within the first hour, you are likely to spot several of the Big Five — lion, elephant, buffalo — along with giraffe, zebra, and a kaleidoscope of birdlife. Watch the sunset paint the Mara in shades of amber and rose while sipping a cold Tusker beer on the open-top vehicle.",
        highlights: [
          "Scenic bush-plane flight from Nairobi over the Great Rift Valley",
          "Afternoon game drive with Big Five sightings",
          "Sundowner cocktails on the savannah as the sun sets behind acacia trees",
          "Return to camp for a bush dinner under the Southern Cross stars",
        ],
        image: "/images/trand-1.jpg",
      },
      {
        day: 2,
        title: "Great Migration & Mara River Crossing",
        location: "Mara River, Masai Mara",
        description:
          "Rise before dawn for the day's main event — a drive to the Mara River crossing points. If timing and nature cooperate, you will witness one of Earth's greatest wildlife spectacles: vast columns of wildebeest gathering on the riverbank, then plunging into the crocodile-infested waters in a desperate surge to reach fresh grazing on the other side. Even outside migration season, the Mara River teems with hippo pods and monster Nile crocodiles.",
        highlights: [
          "Position at a Mara River crossing point at dawn for wildebeest migration",
          "Witness the dramatic river crossing — predator-prey drama in real time",
          "Spot Nile crocodiles and hippo pods along the riverbanks",
          "Picnic lunch under an acacia tree on the open savannah",
        ],
        image: "/images/trand-2.jpg",
      },
      {
        day: 3,
        title: "Maasai Village & Predator Tracking",
        location: "Maasai Community & Masai Mara",
        description:
          "Visit a traditional Maasai village (manyatta) to meet the community, watch warriors perform the adumu jumping dance, learn how enkang homes are built from cow dung and clay, and hear elders share stories of coexisting with wildlife. In the afternoon, join a specialist guide to track predators — lion prides, solitary leopards in riverine forest, and cheetah mothers teaching cubs to hunt on the open plains.",
        highlights: [
          "Cultural immersion in a Maasai manyatta village with warrior dance",
          "Track a lion pride on an afternoon predator-focused game drive",
          "Search for elusive leopards in the riverine forest along the Mara",
          "Photograph cheetahs hunting on the open Mara plains at golden hour",
        ],
        image: "/images/trand-3.jpg",
      },
      {
        day: 4,
        title: "Hot Air Balloon Safari & Farewell",
        location: "Masai Mara National Reserve",
        description:
          "Cap the safari with its most magical experience: a dawn hot-air balloon flight over the Mara. Float silently above herds of zebra and wildebeest, spot elephants and giraffe from above, and watch the shadow of your balloon ripple across the golden grass. Land for a champagne bush breakfast laid out on white linen in the middle of the savannah, with hippos grunting nearby in the river. Transfer to the airstrip for the flight back to Nairobi.",
        highlights: [
          "Sunrise hot-air balloon flight over the Masai Mara savannah",
          "Aerial views of herds, river crossings, and predator tracks below",
          "Champagne bush breakfast on white linen in the open savannah",
          "Final game drive en route to the airstrip for departure",
        ],
        image: "/images/banner-2.jpg",
      },
    ],
    thingsToDo: [
      {
        title: "Big Five Game Drive",
        description:
          "Track lion, leopard, elephant, buffalo, and rhino across the Mara's grasslands and riverine forests with an expert Maasai guide reading the landscape like a book.",
        iconName: "Binoculars",
      },
      {
        title: "Hot Air Balloon Safari",
        description:
          "Float above the savannah at sunrise, watching wildlife from a silent aerial perspective, followed by a champagne breakfast served in the bush.",
        iconName: "Wind",
      },
      {
        title: "Maasai Cultural Visit",
        description:
          "Enter a traditional manyatta, learn warrior dances and fire-making, and purchase beaded jewelry directly from the artisans — all proceeds support the community.",
        iconName: "Users",
      },
      {
        title: "Night Game Drive",
        description:
          "After dark, the Mara reveals its nocturnal residents — aardvarks, bush babies, serval cats, and hunting hyenas — spotted by the red-filtered beam of a tracker's spotlight.",
        iconName: "Moon",
      },
      {
        title: "Bush Walking Safari",
        description:
          "Step out of the vehicle for a guided walking safari with a Maasai warrior, learning to read animal tracks, identify medicinal plants, and experience the bush at ground level.",
        iconName: "Footprints",
      },
    ],
    travelTips: [
      "The Great Migration river crossings typically occur July–October, but wildlife is abundant year-round.",
      "Pack neutral-colored clothing (khaki, olive, tan) — bright colors can disturb wildlife.",
      "Binoculars are essential; a 10x42 pair is ideal for game viewing.",
      "Antimalarial medication is strongly recommended; the Mara is in a malaria zone.",
      "Bring a quality zoom lens (200–400 mm) for wildlife photography; dust-proof camera bags are wise.",
      "Respect the wildlife — never stand up in the vehicle, make sudden movements, or use flash photography.",
      "Bush camp accommodations book out 6–12 months ahead during migration season — plan early.",
    ],
    gallery: [
      "/images/dest-23.jpg",
      "/images/trand-1.jpg",
      "/images/trand-2.jpg",
      "/images/trand-3.jpg",
      "/images/banner-2.jpg",
    ],
  },

  "new-york-city": {
    slug: "new-york-city",
    name: "New York City",
    country: "USA",
    region: "Americas",
    tagline: "The city that never sleeps — eight million stories in the naked city",
    heroImage: "/images/banner-3.jpg",
    overview:
      "New York City is the ultimate urban experience — a place where ambition, creativity, and sheer human density have produced something unlike anywhere else on earth. From the Art Deco spire of the Chrysler Building catching the morning sun to the neon canyon of Times Square at midnight, from the hushed galleries of the Met to the raucous energy of a Harlem gospel brunch, NYC operates on a frequency that simultaneously exhausts and exhilarates.\n\nEach borough is a world unto itself. Manhattan packs iconic landmarks into a narrow island: Central Park's 843 acres of green calm, the Statue of Liberty rising from the harbor, the High Line's elevated garden threading through Chelsea. Brooklyn offers artisan everything — coffee, chocolate, pickles — along with jaw-dropping Manhattan views from DUMBO's waterfront. Queens serves the world's cuisines along a single subway line, and the Bronx gave birth to hip-hop.\n\nNew York rewards spontaneity. The best moments are often unplanned: a jazz trio in a Washington Square Park, a perfect bagel discovered on a random corner, or the sudden revelation of the Manhattan skyline as you cross the Brooklyn Bridge at golden hour. It is a city that asks only one thing of its visitors — keep up.",
    quickFacts: {
      capital: "Washington D.C. (national capital)",
      currency: "US Dollar ($)",
      climate: "Humid subtropical; hot summers, cold winters, all four seasons",
      bestSeason: "September–November (crisp fall, foliage) & April–June (spring bloom)",
      languages: "English; over 800 languages spoken citywide",
      timeZone: "EST (UTC-5) / EDT (UTC-4) in summer",
      drivingSide: "Right",
    },
    itinerary: [
      {
        day: 1,
        title: "Times Square, Broadway & Midtown Icons",
        location: "Midtown Manhattan",
        description:
          "Plunge into the sensory overload of Times Square — a canyon of LED billboards and human energy that somehow never gets old. Walk south to the Empire State Building for its 86th-floor observation deck, then stroll through Bryant Park and Grand Central Terminal's celestial ceiling. As evening falls, take your seat for a Broadway show — the pinnacle of live theater, with productions ranging from sweeping musicals to intimate dramas.",
        highlights: [
          "Experience the neon spectacle of Times Square on foot",
          "Sunset from the Empire State Building's 86th-floor open-air deck",
          "Admire the astronomical ceiling mural of Grand Central Terminal",
          "Evening Broadway show in the Theater District",
        ],
        image: "/images/city-5.jpg",
      },
      {
        day: 2,
        title: "Central Park, the Met & Upper West Side",
        location: "Upper Manhattan",
        description:
          "Spend the morning in Central Park — row a boat on the Lake, wander through the Ramble's forested paths, and find Strawberry Fields' mosaic tribute to John Lennon. Cross to the Metropolitan Museum of Art, where you could spend a lifetime among Egyptian temples, Impressionist masterpieces, and medieval armor. End the day at a rooftop bar overlooking the park's green rectangle set against the skyline.",
        highlights: [
          "Row a boat on Central Park's Lake with the skyline as backdrop",
          "Explore the Met's Temple of Dendur and Impressionist galleries",
          "Visit Strawberry Fields and the Bethesda Fountain",
          "Rooftop cocktails with Central Park and skyline views at sunset",
        ],
        image: "/images/offer-2.jpg",
      },
      {
        day: 3,
        title: "Statue of Liberty & Lower Manhattan",
        location: "Lower Manhattan & Liberty Island",
        description:
          "Ferry to Liberty Island for a pedestal-access visit to the Statue of Liberty, climbing inside the monument for harbor views and a close-up of Lady Liberty's copper robes. Return to explore the 9/11 Memorial — the twin reflecting pools set in the original tower footprints — and the adjacent museum. Walk through the Financial District's narrow colonial streets to the new Oculus transit hub, a soaring white-ribbed cathedral of glass designed by Santiago Calatrava.",
        highlights: [
          "Pedestal-access visit to the Statue of Liberty on Liberty Island",
          "Pay respects at the 9/11 Memorial's twin reflecting pools",
          "Walk through the Oculus — Calatrava's stunning transit cathedral",
          "Dinner at a historic tavern in the cobblestoned Stone Street district",
        ],
        image: "/images/offer-3.jpg",
      },
      {
        day: 4,
        title: "Brooklyn Bridge, DUMBO & Williamsburg",
        location: "Brooklyn",
        description:
          "Walk across the Brooklyn Bridge at sunrise — the Gothic stone towers and web of steel cables framing a postcard view of the Manhattan skyline. Descend into DUMBO (Down Under the Manhattan Bridge Overpass), where cobblestone streets, converted warehouses, and the iconic bridge-framed view of the Empire State Building have made this one of NYC's most photographed neighborhoods. Continue to Williamsburg for vintage shopping, street art, and some of the city's best food.",
        highlights: [
          "Sunrise walk across the Brooklyn Bridge with Manhattan panorama",
          "Photograph the iconic Manhattan Bridge view from Washington Street, DUMBO",
          "Explore Brooklyn Bridge Park's waterfront with skyline backdrop",
          "Street food and vintage shopping in Williamsburg",
        ],
        image: "/images/offer-4.jpg",
      },
      {
        day: 5,
        title: "Chelsea, High Line & Greenwich Village",
        location: "Downtown Manhattan",
        description:
          "Walk the High Line — an elevated rail line transformed into a 2.3-kilometer aerial garden threading through Chelsea's gallery district, with views of the Hudson River and the city's evolving architecture. Descend to Chelsea Market for artisan food vendors, then wander to Greenwich Village, where tree-lined streets, jazz clubs, and Washington Square Park's marble arch evoke the bohemian spirit of Dylan, Ginsberg, and Hendrix.",
        highlights: [
          "Stroll the High Line's elevated gardens with Hudson River views",
          "Taste artisan lobster rolls and tacos at Chelsea Market",
          "Explore Greenwich Village's jazz clubs and tree-lined streets",
          "Farewell sunset from the Edge observation deck at Hudson Yards",
        ],
        image: "/images/city-6.jpg",
      },
    ],
    thingsToDo: [
      {
        title: "Broadway Show",
        description:
          "Experience the magic of a Tony Award–winning musical or play in one of Broadway's 41 historic theaters — the gold standard of live performance anywhere in the world.",
        iconName: "Theater",
      },
      {
        title: "Food Tour of Queens",
        description:
          "Ride the 7 train through the world's most diverse borough, tasting Tibetan momos, Colombian arepas, Sichuan hand-pulled noodles, and Greek pastries — all within a few stops.",
        iconName: "Utensils",
      },
      {
        title: "Harlem Gospel Brunch",
        description:
          "Join a Sunday service at a Harlem Baptist church for soaring gospel harmonies that will move you regardless of faith — a profound and uplifting NYC experience.",
        iconName: "Music",
      },
      {
        title: "Helicopter Tour",
        description:
          "Lift off from the Downtown Manhattan Heliport for a 15-minute flight over the Statue of Liberty, Central Park, and the full skyline — the ultimate bird's-eye view.",
        iconName: "Plane",
      },
      {
        title: "Late-Night Jazz Club",
        description:
          "Catch a midnight set at the Blue Note, Village Vanguard, or Smalls — New York's jazz heritage is alive and burning in intimate basement clubs across the Village.",
        iconName: "Music",
      },
    ],
    travelTips: [
      "Buy an unlimited MetroCard for 7 days — it pays for itself quickly and works on subways and buses.",
      "Walk whenever possible — many of NYC's best moments happen between destinations.",
      "Reserve Statue of Liberty pedestal/crown tickets well in advance; they sell out weeks ahead.",
      "Broadway TKTS booths in Times Square sell same-day discounted tickets — arrive early for best selection.",
      "Tipping 18–20% is standard at sit-down restaurants; $1–2 per drink at bars.",
      "Avoid eating in Times Square — walk a few blocks in any direction for better and cheaper food.",
      "The subway runs 24/7, but late-night waits can be long — ride-hailing apps are a good backup.",
    ],
    gallery: [
      "/images/banner-3.jpg",
      "/images/city-5.jpg",
      "/images/city-6.jpg",
      "/images/offer-2.jpg",
      "/images/offer-3.jpg",
      "/images/offer-4.jpg",
    ],
  },

  santorini: {
    slug: "santorini",
    name: "Santorini",
    country: "Greece",
    region: "Europe",
    tagline: "A volcanic jewel of white and blue, suspended between sea and sky",
    heroImage: "/images/breadcrumb-1.jpg",
    overview:
      "Santorini is the kind of place that feels too beautiful to be real. Born from one of the most cataclysmic volcanic eruptions in recorded history — an explosion so powerful it may have destroyed the Minoan civilization and inspired the legend of Atlantis — the island is essentially the rim of a submerged caldera, its sheer inner cliffs dropping 300 meters into a deep-blue lagoon still warmed by volcanic activity below.\n\nAlong this crescent-shaped cliff edge, the villages of Oia, Fira, and Imerovigli cascade in a tumble of whitewashed cubes and blue-domed churches that have become one of the world's most recognizable landscapes. The light here is extraordinary — intense Aegean sun reflecting off white walls, refracting through wine glasses, and finally surrendering in sunsets so vivid they draw nightly applause from crowds gathered at Oia's castle.\n\nBeneath the postcard beauty, Santorini rewards deeper exploration: volcanic wine tastings of the rare Assyrtiko grape, black and red beaches formed from lava and pumice, ancient Minoan ruins at Akrotiri often called the 'Pompeii of the Aegean,' and seafood tavernas where the day's catch is grilled over charcoal with nothing more than lemon, olive oil, and a view.",
    quickFacts: {
      capital: "Athens (national capital); Fira is Santorini's capital",
      currency: "Euro (€)",
      climate: "Mediterranean; hot dry summers, mild winters",
      bestSeason: "May–June & September–October (warm but less crowded; lower prices)",
      languages: "Greek; English widely spoken",
      timeZone: "EET (UTC+2) / EEST (UTC+3) in summer",
      drivingSide: "Right",
    },
    itinerary: [
      {
        day: 1,
        title: "Oia — Blue Domes & the World's Best Sunset",
        location: "Oia, Santorini",
        description:
          "Begin in Oia, the crown jewel of Santorini, where narrow marble lanes wind between whitewashed cave houses, art galleries, and boutique hotels clinging to the caldera's edge. Descend the 300 steps to Ammoudi Bay for a seafood lunch of grilled octopus and saganaki at a waterside taverna, then climb back up in time for the sunset. As the sun touches the Aegean, it detonates in shades of crimson and gold while the blue domes glow — a spectacle that draws spontaneous applause every single evening.",
        highlights: [
          "Wander Oia's cliffside lanes and photograph the iconic blue-domed churches",
          "Descent to Ammoudi Bay for grilled octopus at a waterside taverna",
          "Watch the legendary Oia sunset from the castle ruins",
          "Post-sunset stroll through Oia's galleries and candlelit restaurants",
        ],
        image: "/images/blog-1.jpg",
      },
      {
        day: 2,
        title: "Caldera Cruise, Volcano & Wine Tasting",
        location: "Nea Kameni Volcano & Santorini Wineries",
        description:
          "Board a catamaran for a caldera cruise to Nea Kameni, the volcanic island still steaming at the center of the lagoon. Hike to the active crater, feel the heat rising through your shoes, then swim in the warm sulfur springs of Palea Kameni. Return to the main island for an afternoon of volcanic wine tasting — Santorini's Assyrtiko grape, grown in basket-shaped vines on volcanic soil, produces one of the Mediterranean's most distinctive white wines.",
        highlights: [
          "Catamaran cruise across the flooded caldera to Nea Kameni volcano",
          "Hike to the active volcanic crater and feel the geothermal heat",
          "Swim in the warm thermal springs of Palea Kameni",
          "Sunset wine tasting of volcanic Assyrtiko at a caldera-view winery",
        ],
        image: "/images/blog-2.jpg",
      },
      {
        day: 3,
        title: "Akrotiri Ruins, Red Beach & Farewell",
        location: "Akrotiri & Southern Santorini",
        description:
          "Explore the Minoan ruins of Akrotiri — a Bronze Age city preserved under volcanic ash for 3,600 years, with multi-story buildings, frescoes, and drainage systems that reveal an astonishingly advanced civilization. Walk to the nearby Red Beach, a dramatic cove of crimson volcanic cliffs tumbling into turquoise water. End the trip with a farewell lunch at a cliffside restaurant in Imerovigli — the 'balcony of the Aegean' — where the caldera view stretches from Oia to the volcano and beyond.",
        highlights: [
          "Tour the 3,600-year-old Minoan ruins of Akrotiri — the 'Greek Pompeii'",
          "Swim at the dramatic Red Beach beneath crimson volcanic cliffs",
          "Farewell lunch at a cliffside restaurant in Imerovigli",
          "Final panoramic view of the caldera from the Skaros Rock trail",
        ],
        image: "/images/blog-3.jpg",
      },
    ],
    thingsToDo: [
      {
        title: "Oia Sunset Watch",
        description:
          "Claim a spot at the ruined castle of Oia as the sun performs its nightly vanishing act — a ritual that has become one of the most celebrated sunset experiences on Earth.",
        iconName: "Sun",
      },
      {
        title: "Volcanic Wine Tasting",
        description:
          "Sample the unique Assyrtiko, Nykteri, and Vinsanto wines produced from grapes grown in volcanic soil — a terroir found nowhere else, yielding crisp minerality and honeyed depth.",
        iconName: "Wine",
      },
      {
        title: "Caldera Catamaran Cruise",
        description:
          "Sail the flooded caldera on a luxury catamaran, swimming in hot springs, snorkeling over volcanic formations, and dining on fresh seafood as the cliffs glow at sunset.",
        iconName: "Sailboat",
      },
      {
        title: "Akrotiri Archaeological Site",
        description:
          "Walk through a Minoan city frozen in time by volcanic ash — multi-story buildings, painted pottery, and the earliest known flush toilets, dating to 1,600 BCE.",
        iconName: "Landmark",
      },
      {
        title: "Black Beach Horseback Ride",
        description:
          "Ride along the volcanic black-sand beach of Perissa at sunset, the dark sand contrasting dramatically with the white surf and the orange sky above.",
        iconName: "Heart",
      },
    ],
    travelTips: [
      "Visit in May–June or September–October to avoid the peak-season crowds and cruise-ship surges of July–August.",
      "Book caldera-view accommodations in Oia, Fira, or Imerovigli well in advance — the best spots sell out months ahead.",
      "Rent an ATV or car rather than relying on buses — Santorini's roads are manageable and freedom to explore is invaluable.",
      "Wear sturdy shoes for the volcanic hikes — sandals won't cut it on Nea Kameni's jagged lava rocks.",
      "Carry sunscreen and water everywhere — there's very little shade on the island and the sun is intense.",
      "Santorini's tap water is desalinated and safe but not great-tasting; bottled water is inexpensive.",
      "For the best sunset photos, arrive at Oia Castle at least 45 minutes before sunset to secure a spot.",
    ],
    gallery: [
      "/images/breadcrumb-1.jpg",
      "/images/blog-1.jpg",
      "/images/blog-2.jpg",
      "/images/blog-3.jpg",
      "/images/offer-5.jpg",
    ],
  },
  ...southSoutheastAsiaDestinations,
  ...destinationsThailand,
  ...destinationsVietnam,
  ...destinationsCambodia,
  ...destinationsIndonesia,
  ...destinationsLaos,
  ...destinationsPhilippines,
  ...eastAsiaDestinations,
  ...americasDestinations,
  ...meeaDestinations,
  ...destinationsAustralia,
  ...destinationsNewZealand,
};

function applyUpdatedPhotoPack(data: Record<string, DestinationPageData>): Record<string, DestinationPageData> {
  return Object.fromEntries(
    Object.entries(data).map(([slug, destination]) => {
      const photos = getDestinationPhotos(destination.region, destination.country, destination.name);
      if (!photos.length) return [slug, destination];

      const itinerary = destination.itinerary.map((dayItem, index) => ({
        ...dayItem,
        image: photos[index]?.image ?? dayItem.image,
      }));

      const galleryFromPhotoPack = photos.map((item) => item.image).filter(Boolean);

      return [
        slug,
        {
          ...destination,
          heroImage: photos[0]?.image ?? destination.heroImage,
          itinerary,
          gallery: galleryFromPhotoPack.length ? galleryFromPhotoPack : destination.gallery,
        },
      ];
    }),
  );
}

export const destinations: Record<string, DestinationPageData> = applyUpdatedPhotoPack(baseDestinations);

export function getDestination(slug: string): DestinationPageData | null {
  return destinations[slug] ?? null;
}
