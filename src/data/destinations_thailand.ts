import type { DestinationPageData } from "./destinations";

export const destinationsThailand: Record<string, DestinationPageData> = {
  bangkok: {
    slug: "bangkok",
    name: "Bangkok",
    country: "Thailand",
    region: "Southeast Asia",
    tagline: "A neon-lit temple of chaos, flavor, and boundless energy",
    heroImage: "/images/dest-17.jpg",
    overview:
      "Bangkok is a city that defies simplification — a sprawling, steaming, glittering metropolis where golden temple spires pierce the smog beside glass skyscrapers, where a Michelin-starred street food stall operates from a sidewalk wok, and where monks in saffron robes ride the SkyTrain alongside commuters glued to their phones. The Grand Palace and Wat Phra Kaew — housing the sacred Emerald Buddha — remain the spiritual nucleus, but Bangkok's soul lives equally in the food: pad thai flipped over charcoal flames at Thip Samai, tom yum goong ladled from vats at Jay Fai, and mango sticky rice served from a cart on Khao San Road.\n\nThe Chao Phraya River is the city's liquid highway — longtail boats weave between temple piers and the ICONSIAM mega-mall, while dinner cruises float past Wat Arun's porcelain-studded prang glowing in floodlight. Chinatown's Yaowarat Road erupts at dusk into a smoky corridor of grilled squid, oyster omelets, and roasted chestnuts. The Chatuchak Weekend Market — 15,000 stalls — could swallow an entire day and still leave corners unexplored.\n\nBy night, Bangkok transforms: rooftop cocktails at Sky Bar (the 'Hangover II' location) yield views of a light-scattered horizon, while Sukhumvit's hidden speakeasies and Thonglor's craft beer bars prove the city's nightlife extends far beyond the go-go stereotypes of Patpong. Bangkok is not a city you visit — it's a city that happens to you.",
    quickFacts: {
      capital: "Bangkok (Krung Thep Maha Nakhon)",
      currency: "Thai Baht (฿)",
      climate: "Tropical savanna — hot year-round with a monsoon season",
      bestSeason: "November–February (cool, dry season)",
      languages: "Thai, English (tourist areas)",
      timeZone: "ICT (UTC+7)",
      drivingSide: "Left",
    },
    itinerary: [
      {
        day: 1,
        title: "Grand Palace, Wat Pho & River Life",
        location: "Rattanakosin Island, Bangkok",
        description:
          "Begin at the dazzling Grand Palace complex, where intricate murals depict the Ramakien epic across cloister walls, and the Emerald Buddha sits atop a towering golden altar. Walk to Wat Pho to meet the 46-meter reclining Buddha, then take a longtail boat down the Chao Phraya to Wat Arun for sunset over its Khmer-style prang.",
        highlights: [
          "Marvel at the Emerald Buddha inside Wat Phra Kaew",
          "Photograph the 46-meter reclining Buddha at Wat Pho",
          "Longtail boat ride through canals to Wat Arun at sunset",
          "Get a traditional Thai massage at Wat Pho's famous school",
        ],
        image: "/images/dest-18.jpg",
      },
      {
        day: 2,
        title: "Chatuchak, Jim Thompson & Thonglor",
        location: "Various, Bangkok",
        description:
          "Spend the morning navigating Chatuchak Weekend Market's 15,000 stalls — from vintage Thai silk to hand-carved teak furniture. After lunch, tour the Jim Thompson House, a teak mansion assembled from six traditional Thai houses and filled with Southeast Asian art. Evening: explore Thonglor's craft cocktail bars and Japanese-Thai fusion restaurants.",
        highlights: [
          "Haggle for vintage finds at Chatuchak Weekend Market",
          "Tour the Jim Thompson House and its silk museum",
          "Taste craft cocktails at a Thonglor speakeasy",
          "Dine on Isaan sausage and som tum at a street-side table",
        ],
        image: "/images/trand-3.jpg",
      },
      {
        day: 3,
        title: "Chinatown & Street Food Odyssey",
        location: "Yaowarat (Chinatown), Bangkok",
        description:
          "Yaowarat Road transforms each evening into Bangkok's most spectacular food corridor. Start with oyster omelets at Nai Mong Hoi Tod, graduate to grilled river prawns and pad thai, and finish with mango sticky rice and Thai tea. Duck into Wat Traimit to see the world's largest solid gold Buddha — 5.5 tonnes of pure gold.",
        highlights: [
          "Eat your way down Yaowarat Road's legendary food stalls",
          "See the 5.5-tonne solid gold Buddha at Wat Traimit",
          "Try Jay Fai's Michelin-starred crab omelet (if you can get in)",
          "Navigate the hidden alleys of Talat Noi street art district",
        ],
        image: "/images/offer-5.jpg",
      },
      {
        day: 4,
        title: "Floating Markets & Rooftop Sunset",
        location: "Damnoen Saduak & Silom, Bangkok",
        description:
          "Rise early for the Damnoen Saduak floating market, where vendors in wooden boats sell pad thai, coconut pancakes, and tropical fruit from vessel to vessel. Return to Bangkok for a late afternoon visit to Lumpini Park — the city's green lung — then ascend to Sky Bar at Lebua for a Hangovertini as the skyline blazes with light.",
        highlights: [
          "Buy pad thai from a boat at Damnoen Saduak floating market",
          "Spot monitor lizards in Lumpini Park's urban jungle",
          "Watch sunset from Sky Bar, 63 floors above the Chao Phraya",
          "Explore the ICONSIAM riverside mall and its indoor floating market",
        ],
        image: "/images/banner-5.jpg",
      },
      {
        day: 5,
        title: "Ayutthaya Day Trip",
        location: "Ayutthaya, north of Bangkok",
        description:
          "Train north to the UNESCO World Heritage ruins of Ayutthaya — the former Siamese capital destroyed by Burmese invaders in 1767. Explore the haunting Wat Mahathat, where a Buddha head is entwined in banyan roots, cycle between brick prangs and reclining Buddhas, and return to Bangkok by river cruise.",
        highlights: [
          "Photograph the iconic Buddha head in tree roots at Wat Mahathat",
          "Cycle through Ayutthaya Historical Park's sprawling ruins",
          "Visit Wat Phra Si Sanphet's three iconic chedis",
          "Return by river cruise with dinner on the Chao Phraya",
        ],
        image: "/images/about-2.jpg",
      },
    ],
    thingsToDo: [
      {
        title: "Temple Circuit",
        description:
          "Visit Bangkok's holy trinity — the Grand Palace, Wat Pho's reclining Buddha, and Wat Arun's riverside spire — all within walking and boat distance.",
        iconName: "Landmark",
      },
      {
        title: "Street Food Pilgrimage",
        description:
          "From Thip Samai's legendary pad thai to Jay Fai's Michelin-starred crab omelet, Bangkok's streets are the world's greatest open-air restaurant.",
        iconName: "Utensils",
      },
      {
        title: "Rooftop Bar Hopping",
        description:
          "Sip cocktails above the skyline at Sky Bar, Octave, and Vertigo — Bangkok's rooftop scene is among the world's most spectacular.",
        iconName: "Lightbulb",
      },
      {
        title: "Chatuchak Weekend Market",
        description:
          "Navigate 15,000 stalls selling everything from antique Buddha statues to handmade ceramics, Thai silk, and street art.",
        iconName: "MapPin",
      },
      {
        title: "Canal & River Cruises",
        description:
          "Ride longtail boats through Bangkok's khlongs past stilted houses, orchid farms, and hidden riverside temples.",
        iconName: "Waves",
      },
      {
        title: "Thai Cooking Classes",
        description:
          "Learn to balance sweet, sour, salty, and spicy in hands-on classes that start with a market tour and end with a feast.",
        iconName: "GraduationCap",
      },
    ],
    travelTips: [
      "Use the BTS SkyTrain and MRT subway — they're air-conditioned, cheap, and bypass Bangkok's legendary traffic jams.",
      "Always carry a laminated photo of the King — lèse-majesté laws are strictly enforced; never disrespect the monarchy.",
      "Dress respectfully at temples: cover knees and shoulders. The Grand Palace enforces this strictly and rents sarongs if needed.",
      "Download the Grab app — it's Southeast Asia's Uber and works for tuk-tuks, taxis, motorbike taxis, and food delivery.",
      "Beware of 'the temple is closed' scams — touts near the Grand Palace will redirect you to overpriced shops. Verify at the gate.",
      "Eat where locals eat — long queues and plastic chairs almost always mean better food than tourist-oriented air-conditioned restaurants.",
      "The Grand Palace is open 8:30 AM–3:30 PM — arrive at opening to beat the tour bus crowds.",
    ],
    gallery: [
      "/images/dest-17.jpg",
      "/images/dest-18.jpg",
      "/images/trand-3.jpg",
      "/images/offer-5.jpg",
      "/images/about-2.jpg",
    ],
  },

  phuket: {
    slug: "phuket",
    name: "Phuket",
    country: "Thailand",
    region: "Southeast Asia",
    tagline: "Crystal Andaman waters, jungle-clad hills, and island adventures",
    heroImage: "/images/dest-19.jpg",
    overview:
      "Phuket is Thailand's largest island and the Andaman Sea's crown jewel — a mountainous, jungle-draped landmass fringed by beaches that range from the pumping Bangla Road party strip of Patong to the secluded, mangrove-backed shores of Nai Thon. The west coast catches the Andaman's full sunset glory, with Promthep Cape offering the most photographed viewpoint in all of Thailand as the sky turns from gold to violet over the Coral Islands.\n\nBeyond the beach clubs and infinity pools, Phuket has a rich Sino-Portuguese heritage centered on Phuket Old Town — a pastel grid of restored shophouses now housing cafés, galleries, and boutique hotels. The Thalang Road Sunday Walking Street fills with local food vendors selling mee hokkien (yellow noodles) and oh-aew (a shaved ice dessert with tapioca). The Big Buddha, a 45-meter marble statue atop Nakkerd Hill, commands 360-degree views of both coastlines.\n\nThe island is also the launchpad for some of Southeast Asia's most iconic day trips: the James Bond Island karst towers of Phang Nga Bay, the turquoise Similan Islands (open November to May), and the Phi Phi Islands made famous by 'The Beach.' Whether you're freediving with leopard sharks, teeing off at a clifftop golf course, or simply sipping a Singha as the tide pulls back from Kata Beach, Phuket delivers tropical Thailand at its most polished.",
    quickFacts: {
      capital: "Bangkok (national capital)",
      currency: "Thai Baht (฿)",
      climate: "Tropical monsoon — wet season May–October",
      bestSeason: "November–April (dry, calm seas, best for island hopping)",
      languages: "Thai, English (widely spoken)",
      timeZone: "ICT (UTC+7)",
      drivingSide: "Left",
    },
    itinerary: [
      {
        day: 1,
        title: "Phuket Old Town & Big Buddha",
        location: "Phuket Town & Nakkerd Hill",
        description:
          "Wander the Sino-Portuguese shophouse streets of Phuket Old Town, ducking into art cafés and sampling local mee hokkien noodles. Ascend to the 45-meter Big Buddha on Nakkerd Hill for panoramic views of both coastlines, timing your visit for late afternoon when the marble glows pink.",
        highlights: [
          "Explore Phuket Old Town's Sino-Portuguese architecture",
          "Taste oh-aew shaved ice and mee hokkien on Thalang Road",
          "Visit the 45-meter white marble Big Buddha",
          "Catch sunset from Nakkerd Hill with 360-degree island views",
        ],
        image: "/images/city-3.jpg",
      },
      {
        day: 2,
        title: "Phang Nga Bay & James Bond Island",
        location: "Phang Nga Bay, off Phuket",
        description:
          "Board a longtail boat into Phang Nga Bay's karst seascape — limestone towers rising 300 meters from emerald water. Visit the iconic Khao Phing Kan (James Bond Island), explore Koh Panyee floating fishing village built entirely on stilts, and kayak through sea caves at low tide.",
        highlights: [
          "Photograph the iconic James Bond Island karst needle",
          "Sea-kayak through Phang Nga's cave and lagoon systems",
          "Lunch at Koh Panyee floating village",
          "Spot white-bellied sea eagles soaring above the karsts",
        ],
        image: "/images/tour-11.jpg",
      },
      {
        day: 3,
        title: "Phi Phi Islands Day Trip",
        location: "Phi Phi Islands, Krabi Province",
        description:
          "Speed to the Phi Phi Islands for snorkeling in Pileh Lagoon — an enclosed emerald pool surrounded by sheer cliffs. Visit Maya Bay (of 'The Beach' fame, now operating on a limited-entry permit), and snorkel Shark Point for blacktip reef shark encounters in crystal shallows.",
        highlights: [
          "Snorkel in Pileh Lagoon's cathedral-like emerald waters",
          "Visit the restored Maya Bay on its limited-entry permit",
          "Swim with blacktip reef sharks at Shark Point",
          "Photograph Viking Cave's swiftlet nests from the boat",
        ],
        image: "/images/dest-20.jpg",
      },
      {
        day: 4,
        title: "Beach Day & Promthep Sunset",
        location: "Kata, Karon & Promthep Cape",
        description:
          "Spend a lazy day between Kata and Karon beaches — surfing the gentle break at Kata in the shoulder season, snorkeling the southern reef, or simply lounging under a parasol. Drive to Promthep Cape for Phuket's most famous sunset, where the lighthouse and elephant shrine frame the Andaman's golden hour.",
        highlights: [
          "Surf or bodyboard the gentle waves at Kata Beach",
          "Snorkel the reef at Kata's southern end",
          "Watch Phuket's most iconic sunset from Promthep Cape",
          "Dine on fresh seafood at a Rawai beachfront restaurant",
        ],
        image: "/images/trand-4.jpg",
      },
    ],
    thingsToDo: [
      {
        title: "Island Hopping",
        description:
          "Day-trip to the Phi Phi Islands, Similan Islands (November–May), Coral Island, and the karst towers of Phang Nga Bay.",
        iconName: "Waves",
      },
      {
        title: "Scuba Diving & Freediving",
        description:
          "Dive the Similans' manta ray sites, Shark Point's leopard sharks, and the King Cruiser wreck — Phuket is Thailand's diving hub.",
        iconName: "Globe",
      },
      {
        title: "Old Town Heritage Walk",
        description:
          "Stroll past pastel Sino-Portuguese shophouses, sample Phuket's unique Peranakan-Thai cuisine, and visit the Thai Hua Museum.",
        iconName: "Camera",
      },
      {
        title: "Muay Thai Training",
        description:
          "Train at world-class Muay Thai gyms like Tiger Muay Thai or Sinbi — Phuket is a global center for martial arts tourism.",
        iconName: "Dumbbell",
      },
      {
        title: "Elephant Ethical Sanctuaries",
        description:
          "Visit rescue sanctuaries like Phuket Elephant Sanctuary where retired elephants roam freely — no riding, no chains, no performances.",
        iconName: "Heart",
      },
      {
        title: "Thai Cooking & Market Tours",
        description:
          "Tour a local market with a chef, then cook green curry, tom kha gai, and mango sticky rice in a hands-on tropical kitchen.",
        iconName: "Utensils",
      },
    ],
    travelTips: [
      "Rent a scooter only if you're experienced — Phuket's hilly roads and chaotic traffic cause frequent tourist accidents; always wear a helmet.",
      "Similan Islands are open only November–May; book liveaboard dive trips months ahead for the best berths.",
      "Maya Bay operates on a daily visitor cap — book permits through the national parks app to guarantee entry.",
      "Avoid touts offering 'free' tuk-tuk rides from the airport — they detour through commission-paying shops.",
      "Kata and Karon beaches have rip currents in monsoon season (May–October); swim only where lifeguard flags are green.",
      "Download the Grab app for fair-priced rides — Phuket taxis and tuk-tuks are notoriously overpriced for tourists.",
    ],
    gallery: [
      "/images/dest-19.jpg",
      "/images/dest-20.jpg",
      "/images/tour-11.jpg",
      "/images/trand-4.jpg",
      "/images/city-3.jpg",
    ],
  },

  "chiang-mai": {
    slug: "chiang-mai",
    name: "Chiang Mai",
    country: "Thailand",
    region: "Southeast Asia",
    tagline: "Mountain temples, meditation bells, and the soul of Northern Thailand",
    heroImage: "/images/dest-21.jpg",
    overview:
      "Chiang Mai is the cultural capital of Northern Thailand — a city encircled by a moat-and-wall square built in 1296 as the seat of the Lanna Kingdom, now containing over 30 Buddhist temples within its old city gates. Doi Suthep, the mountain that watches over the city, is crowned by Wat Phra That Doi Suthep, a gilded chedi reached by a 309-step naga staircase whose bells ring with every gust of wind.\n\nThe city is a living classroom: join a monk chat program at Wat Chedi Luang to discuss Buddhism over iced tea, learn the art of Thai paper umbrella painting in the village of Bo Sang, or sit a ten-day silent Vipassana retreat at Wat Ram Poeng. The Night Bazaar and Sunday Walking Street transform entire roads into open-air markets where hill-tribe silver, handwoven textiles, and carved teak elephants compete for attention with sizzling khao soi — the city's signature coconut curry noodle soup.\n\nBeyond the city, Chiang Mai province unfolds into misty mountains harboring Karen, Hmong, Akha, and Lisu communities whose traditions — from indigo dyeing to bamboo weaving — persist alongside the modern world. The Elephant Nature Park, founded by the legendary Lek Chailert, rescues exploited elephants and has become a model for ethical wildlife tourism. Doi Inthanon, Thailand's highest peak at 2,565 meters, hides twin pagodas, cloud forest orchids, and the haunting Wachirathan waterfall.",
    quickFacts: {
      capital: "Bangkok (national capital)",
      currency: "Thai Baht (฿)",
      climate: "Tropical savanna — cool season is distinctly pleasant",
      bestSeason: "November–February (cool, dry, clear mountain air)",
      languages: "Thai, Northern Thai (Kam Muang), English",
      timeZone: "ICT (UTC+7)",
      drivingSide: "Left",
    },
    itinerary: [
      {
        day: 1,
        title: "Old City Temples & Monk Chat",
        location: "Old City, Chiang Mai",
        description:
          "Walk the moated Old City square, visiting Wat Chedi Luang's massive ruined chedi — once the tallest structure in Lanna — and joining its monk chat program where young monks practice English by discussing Buddhism, daily life, and Thai culture. Continue to Wat Phra Singh for its exquisite Lanna-style murals.",
        highlights: [
          "Join a monk chat at Wat Chedi Luang",
          "Admire the Lanna murals inside Wat Phra Singh's Lai Kham chapel",
          "Walk through Tha Phae Gate into the moated Old City",
          "Taste khao soi at Khao Soi Khun Yai — a Michelin Bib Gourmand winner",
        ],
        image: "/images/dest-22.jpg",
      },
      {
        day: 2,
        title: "Doi Suthep & Hill-Tribe Villages",
        location: "Doi Suthep & surrounding hills",
        description:
          "Ascend the 309-step naga staircase to Wat Phra That Doi Suthep, whose golden chedi houses a relic of the Buddha and commands sweeping views over the Chiang Mai valley. Descend the mountain's far side to visit a Hmong hill-tribe village, where women in traditional indigo dress weave intricate batik textiles.",
        highlights: [
          "Climb the 309-step naga staircase to Doi Suthep temple",
          "Ring the temple bells for good fortune at the golden chedi",
          "Visit a Hmong village and watch traditional batik weaving",
          "Photograph the city panorama from the temple terrace",
        ],
        image: "/images/about-10.jpg",
      },
      {
        day: 3,
        title: "Elephant Nature Park",
        location: "Mae Taeng Valley, Chiang Mai Province",
        description:
          "Spend a full day at Elephant Nature Park, where rescued elephants roam 250 acres of riverside meadow. Feed them baskets of watermelon and bananas, wade into the river for bath time, and hear the stories of elephants rescued from logging camps, tourist shows, and street begging.",
        highlights: [
          "Feed and walk alongside rescued elephants in open meadows",
          "Help bathe elephants in the Mae Taeng River",
          "Learn about ethical wildlife tourism from resident naturalists",
          "Meet rescue dogs, cats, and water buffalo at the sanctuary",
        ],
        image: "/images/tour-12.jpg",
      },
      {
        day: 4,
        title: "Doi Inthanon National Park",
        location: "Doi Inthanon, Chiang Mai Province",
        description:
          "Drive to Thailand's highest peak at 2,565 meters, passing through layers of vegetation from tropical forest to cloud-draped sphagnum moss. Visit the twin King and Queen pagodas set in manicured gardens, hike to the Wachirathan Waterfall, and spot rare green-tailed sunbirds in the summit cloud forest.",
        highlights: [
          "Stand at the summit of Thailand's highest peak",
          "Visit the twin Royal Pagodas and their cloud-garden terraces",
          "Hike to the thundering Wachirathan Waterfall",
          "Spot rare montane birds in the cloud forest",
        ],
        image: "/images/explor-2.jpg",
      },
      {
        day: 5,
        title: "Sunday Walking Street & Cooking Class",
        location: "Old City & Cooking School, Chiang Mai",
        description:
          "Start with a morning cooking class — shop for ingredients at Warorot Market, then learn to balance the four flavors in tom yam, green curry, and mango sticky rice. Spend the evening at the famous Sunday Walking Street market stretching from Tha Phae Gate to Wat Phra Singh, picking through handcraft stalls and live music.",
        highlights: [
          "Cook Thai classics in a hands-on market-to-table class",
          "Shop for fresh herbs and spices at Warorot Market",
          "Browse the Sunday Walking Street for hill-tribe crafts and art",
          "Watch traditional Lanna dance performances at Tha Phae Gate",
        ],
        image: "/images/trand-5.jpg",
      },
    ],
    thingsToDo: [
      {
        title: "Temple Hopping",
        description:
          "Explore over 30 temples in the Old City alone — from Wat Chedi Luang's ruins to the silver walls of Wat Sri Suphan, crafted entirely by silversmiths.",
        iconName: "Landmark",
      },
      {
        title: "Meditation Retreats",
        description:
          "Sit silent Vipassana courses at Wat Ram Poeng or Wat Umong, where meditation caves date back 700 years.",
        iconName: "BookOpen",
      },
      {
        title: "Ethical Elephant Encounters",
        description:
          "Visit Elephant Nature Park for a chain-free, ride-free experience with rescued Asian elephants in Mae Taeng Valley.",
        iconName: "Heart",
      },
      {
        title: "Khao Soi & Night Markets",
        description:
          "Chiang Mai's coconut curry noodle soup is legendary — sample it at Khao Soi Khun Yai, then graze the Night Bazaar for sai oua sausage and mango sticky rice.",
        iconName: "Utensils",
      },
      {
        title: "Jungle Trekking & Rafting",
        description:
          "Multi-day treks through Doi Inthanon and Mae Chaem valleys combine bamboo rafting, waterfall swims, and overnight stays in hill-tribe villages.",
        iconName: "Mountain",
      },
      {
        title: "Traditional Craft Workshops",
        description:
          "Paint paper umbrellas in Bo Sang, forge silver at Wat Sri Suphan, or take a woodcarving class in Ban Tawai village.",
        iconName: "GraduationCap",
      },
    ],
    travelTips: [
      "Burning season (February–April) fills the air with agricultural smoke — visibility drops and those with respiratory issues should avoid this period.",
      "Rent a scooter for hill trips but drive carefully — Doi Suthep's road has tight switchbacks and unpredictable traffic.",
      "The Sunday Walking Street (Tha Phae Gate to Wat Phra Singh) is Chiang Mai's best market — arrive by 5 PM to beat the crowds.",
      "Monk chat programs at Wat Chedi Luang run Monday, Wednesday, and Friday afternoons — check times at the temple office.",
      "Negotiate songthaew (red truck taxi) prices before boarding — ฿30 per person within the Old City is standard.",
      "Book Elephant Nature Park at least 2 weeks ahead — the single-day visit regularly sells out, and full-day is far more rewarding than half-day.",
    ],
    gallery: [
      "/images/dest-21.jpg",
      "/images/dest-22.jpg",
      "/images/tour-12.jpg",
      "/images/about-10.jpg",
      "/images/trand-5.jpg",
    ],
  },

  pattaya: {
    slug: "pattaya",
    name: "Pattaya",
    country: "Thailand",
    region: "Southeast Asia",
    tagline: "Sun-drenched beaches, high-energy nightlife, and interactive museums",
    heroImage: "/images/dest-7.jpg",
    overview:
      "Pattaya has evolved from a quiet fishing village into one of Asia's most popular resort cities. Nestled along the Gulf of Thailand, it offers a vibrant blend of water sports, family-friendly attractions, interactive museums, and legendary entertainment. Whether you are cruising to the crystal waters of Coral Island, exploring the jaw-dropping hand-carved Sanctuary of Truth, or taking in the glitter and grandeur of the famous Alcazar Cabaret Show, Pattaya is a city of boundless energy and coastal adventure.",
    quickFacts: {
      capital: "Bangkok (national capital)",
      currency: "Thai Baht (฿)",
      climate: "Tropical wet and dry, warm and humid year-round",
      bestSeason: "November–February (cool, dry season)",
      languages: "Thai, English widely spoken in tourist areas",
      timeZone: "ICT (UTC+7)",
      drivingSide: "Left",
    },
    itinerary: [
      {
        day: 1,
        title: "Arrival at Bangkok & Transfer to Pattaya",
        location: "Pattaya, Thailand",
        description:
          "Upon arrival in Bangkok, you will be met and transferred to your hotel in Pattaya, which is a scenic 2-hour drive along the gulf coast. After checking in, take the day to relax and unwind. In the evening, attend the world-famous Alcazar Cabaret Show — a spectacular performance featuring a state-of-the-art light and sound system and a grand theater with 1,200 seats.",
        highlights: [
          "Transfer from Bangkok to the beachside city of Pattaya",
          "Check in and relax at your tropical resort",
          "Watch the glittering song-and-dance acts at the Alcazar Cabaret Show",
          "Stroll down the lively Pattaya Beach Road in the evening",
        ],
        image: "/images/dest-7.jpg",
      },
      {
        day: 2,
        title: "Coral Island Speedboat Tour with Lunch",
        location: "Koh Lan (Coral Island), Pattaya",
        description:
          "After breakfast, board a shared speedboat to Koh Lan (Coral Island), located just off the Pattaya coast. Spend your day swimming, snorkeling in the crystal clear waters, or sunbathing on the island's pristine golden sands. Enjoy optional water activities such as parasailing or viewing the coral reef via glass-bottom boats, followed by a hot Indian lunch in Pattaya.",
        highlights: [
          "Speedboat ride to Koh Lan's gorgeous white beaches",
          "Snorkel over the shallow coral gardens surrounding the island",
          "Optional parasailing, banana boat riding, or underwater seawalking",
          "Savor a delicious lunch back on the mainland",
        ],
        image: "/images/city-1.jpg",
      },
      {
        day: 3,
        title: "Art in Paradise 3D Museum",
        location: "Pattaya Central, Thailand",
        description:
          "Explore Art in Paradise, the first 3D art museum in Thailand and the largest of its kind. Grab your smartphone and interact with hand-painted 3D murals. Use the museum's AR app to add special animations and interactive effects to your photos and videos, bringing the artwork to life. Spend the afternoon shopping at central malls or exploring local sights at your leisure.",
        highlights: [
          "Interact with hundreds of hand-painted 3D optical illusion murals",
          "Use the AR app to add digital effects to your photos",
          "Have fun posing inside the creative multi-zone galleries",
          "Free afternoon for shopping or local sightseeing",
        ],
        image: "/images/tour-2.jpg",
      },
      {
        day: 4,
        title: "Free Day for Leisure & Exploration",
        location: "Pattaya Beach & Surrounds",
        description:
          "Take a full day to enjoy Pattaya at your own pace. You can relax at the hotel pool, lounge on Pattaya or Jomtien beach, or visit amazing optional sites like the Sanctuary of Truth — a massive, awe-inspiring wooden temple hand-carved entirely without metal nails, perched right on the seashore.",
        highlights: [
          "Lounge on Jomtien Beach or explore the quiet beaches of Naklua",
          "Optional visit to the wooden architectural marvel of the Sanctuary of Truth",
          "Optional visit to Nong Nooch Tropical Botanical Gardens",
          "Dine on fresh seafood at a local market in the evening",
        ],
        image: "/images/about-1.jpg",
      },
      {
        day: 5,
        title: "Checkout & Transfer to Airport",
        location: "Bangkok / Pattaya, Thailand",
        description:
          "Enjoy a final breakfast at your hotel before checking out. Your driver will meet you at the lobby to transfer you back to Bangkok's Suvarnabhumi Airport for your departure flight, bringing home wonderful memories of your beach vacation in Pattaya.",
        highlights: [
          "Final morning at leisure for last-minute shopping or beach walks",
          "Check out from your Pattaya hotel",
          "Transfer back to Bangkok Suvarnabhumi Airport for your return flight",
        ],
        image: "/images/city-2.jpg",
      },
    ],
    thingsToDo: [
      {
        title: "Coral Island Speedboat Excursion",
        description:
          "Ride speedboats to Koh Lan for swimming, snorkeling, parasailing, and sea-walking along gorgeous sandbars.",
        iconName: "Waves",
      },
      {
        title: "Alcazar Cabaret Show",
        description:
          "Witness the famous transvestite cabaret featuring grand costumes, dazzling stage designs, and high-energy music.",
        iconName: "Music",
      },
      {
        title: "Sanctuary of Truth",
        description:
          "Visit the massive wooden temple structure constructed entirely of hand-carved teak, honoring ancient religions.",
        iconName: "Landmark",
      },
      {
        title: "Art in Paradise",
        description:
          "Have fun taking creative photos at the world's largest interactive 3D art museum using their AR app.",
        iconName: "Camera",
      },
      {
        title: "Nong Nooch Botanical Gardens",
        description:
          "Stroll through beautifully landscaped French gardens, orchid nurseries, and watch traditional Thai cultural shows.",
        iconName: "Compass",
      },
    ],
    travelTips: [
      "Pattaya is a straightforward 2-hour drive from Bangkok, making it a very convenient beach extension.",
      "The local songthaews (blue pick-up trucks) run constant routes along Beach Road for just 10 Baht per ride.",
      "Avoid renting jet skis from unauthorized beach operators due to common damage scam issues; book via reputable agencies.",
      "Dress modestly with covered shoulders and knees if visiting the Sanctuary of Truth or other temples.",
    ],
    gallery: [
      "/images/dest-7.jpg",
      "/images/city-1.jpg",
      "/images/tour-2.jpg",
      "/images/about-1.jpg",
    ],
  },

  krabi: {
    slug: "krabi",
    name: "Krabi",
    country: "Thailand",
    region: "Southeast Asia",
    tagline: "Limestone karsts, emerald lagoons, and remote beach sanctuaries",
    heroImage: "/images/offer-1.jpg",
    overview:
      "Krabi is a slice of absolute tropical paradise on the shore of the Andaman Sea. Famed for its sheer limestone cliffs that rise dramatically out of the turquoise waters, it attracts beach lovers, rock climbers, and island hoppers from all over the world. With Railay Beach's world-class rock climbing, Ao Nang's lively dining strip, and the spectacular offshore islands, Krabi offers a perfect blend of high adventure and laid-back relaxation.",
    quickFacts: {
      capital: "Bangkok (national capital)",
      currency: "Thai Baht (฿)",
      climate: "Tropical monsoon — warm and wet, monsoon season May–October",
      bestSeason: "November–April (ideal weather, calm seas for boat trips)",
      languages: "Thai, English widely spoken in tourist areas",
      timeZone: "ICT (UTC+7)",
      drivingSide: "Left",
    },
    itinerary: [
      {
        day: 1,
        title: "Arrival in Krabi",
        location: "Ao Nang, Krabi",
        description:
          "Upon arrival at Krabi International Airport, meet your driver and enjoy a scenic 30-minute transfer to your hotel or resort in Ao Nang. Krabi is a dream destination for beach lovers. After checking in, take the afternoon to relax. In the evening, head down to the lively Ao Nang beachfront to shop and dine at the seafood restaurants overlooking the Andaman Sea.",
        highlights: [
          "Arrive in Krabi and transfer to your beachfront resort",
          "Relax and enjoy the views of Krabi's famous limestone hills",
          "Enjoy a sunset stroll along Ao Nang Beach",
          "Dine on fresh grilled prawns and tom yum at a beachfront restaurant",
        ],
        image: "/images/offer-1.jpg",
      },
      {
        day: 2,
        title: "Four Islands Speedboat Tour with Lunch",
        location: "Four Islands, Krabi",
        description:
          "Embark on a classic day trip to Krabi's famous 'Four Islands': Koh Poda, Koh Gai (Chicken Island), Koh Tub, and Koh Mor. Walk along the sandbar that connects the islands at low tide. The tour also stops at the stunning Phra Nang Cave Beach on the Railay peninsula, which is only accessible by water and is renowned as one of the most beautiful beaches in the world.",
        highlights: [
          "Tour the four close-shore islands on a fast speedboat",
          "Walk the narrow sandbar bridge connecting Koh Tub and Koh Mor",
          "Photograph the chicken-shaped karst formation at Chicken Island",
          "Relax and swim at the iconic Phra Nang Cave Beach",
        ],
        image: "/images/dest-11.jpg",
      },
      {
        day: 3,
        title: "Free Day for Leisure & Exploration",
        location: "Railay Beach & Tiger Cave Temple, Krabi",
        description:
          "Enjoy a full day of leisure to explore Krabi. You can take a longtail boat to Railay Beach to watch rock climbers scale the limestone cliffs, or take a day trip to the Emerald Pool and Hot Springs. For the active traveler, climb the 1,260 steps of Tiger Cave Temple (Wat Tham Suea) for a breathtaking 360-degree view of Krabi province.",
        highlights: [
          "Take a longtail boat ride to the car-free peninsula of Railay Beach",
          "Optional climb of 1,260 steps to the summit of Tiger Cave Temple",
          "Optional swim in the natural warm waters of the jungle Emerald Pool",
          "Lounge under palm trees at Noppharat Thara beach",
        ],
        image: "/images/dest-22.jpg",
      },
      {
        day: 4,
        title: "Checkout & Departure",
        location: "Krabi, Thailand",
        description:
          "Enjoy your breakfast at the resort before checking out. Your driver will pick you up from the lobby and transfer you back to Krabi International Airport for your departure flight, ending your tropical island escape.",
        highlights: [
          "Final morning for beachside relaxation or souvenir shopping",
          "Check out from your resort",
          "Transfer back to Krabi Airport for your return flight",
        ],
        image: "/images/city-5.jpg",
      },
    ],
    thingsToDo: [
      {
        title: "Four Islands Snorkeling",
        description:
          "Explore the group of tropical islands closest to Ao Nang, swimming amongst coral reefs and walking on white sand bridges.",
        iconName: "Waves",
      },
      {
        title: "Railay Rock Climbing",
        description:
          "Scale the famous sheer limestone cliffs of Railay Beach with experienced instructors, offering routes for all skill levels.",
        iconName: "Compass",
      },
      {
        title: "Tiger Cave Temple Climb",
        description:
          "Hike up 1,260 steep steps to the mountaintop shrine of Wat Tham Suea, rewarded with a golden Buddha statue and panoramas.",
        iconName: "Landmark",
      },
      {
        title: "Emerald Pool & Hot Springs",
        description:
          "Trek through a lush rainforest trail to swim in the mineral-rich, neon-teal waters of Krabi's natural hot springs.",
        iconName: "Sun",
      },
      {
        title: "Ao Nang Beach Dining",
        description:
          "Sample southern Thai specialty dishes at open-air beachfront tables while watching fire dance shows at sunset.",
        iconName: "Utensils",
      },
    ],
    travelTips: [
      "Krabi is generally quieter and more relaxed than neighboring Phuket, making it great for families and couples.",
      "Access to Railay Beach is only possible by longtail boat from Ao Nang or Nam Mao pier due to high cliffs.",
      "Always use reef-safe sunscreen to protect the Andaman Sea's fragile coral reef ecosystems.",
      "Bring cash when visiting smaller islands, as card machines are unavailable on the beaches.",
    ],
    gallery: [
      "/images/offer-1.jpg",
      "/images/dest-11.jpg",
      "/images/dest-22.jpg",
      "/images/city-5.jpg",
    ],
  },

  "koh-samui": {
    slug: "koh-samui",
    name: "Koh Samui",
    country: "Thailand",
    region: "Southeast Asia",
    tagline: "Coconut groves, luxury beach resorts, and pristine marine sanctuaries",
    heroImage: "/images/banner-3.jpg",
    overview:
      "Koh Samui is a gorgeous, palm-fringed jewel in the Gulf of Thailand. Once a quiet coconut farming community, it has transformed into a world-class luxury resort destination. Famed for its Chaweng beach, its coconut plantations, and the massive golden Big Buddha, Koh Samui also serves as the ideal base to explore the untouched 42-island archipelago of Ang Thong National Marine Park and the premier snorkeling reef sites of Koh Tao and Koh NangYuan.",
    quickFacts: {
      capital: "Bangkok (national capital)",
      currency: "Thai Baht (฿)",
      climate: "Tropical savanna — warm year-round, short rainy season Oct–Nov",
      bestSeason: "December–August (sunny, clear skies, excellent sea visibility)",
      languages: "Thai, English widely spoken in tourist areas",
      timeZone: "ICT (UTC+7)",
      drivingSide: "Left",
    },
    itinerary: [
      {
        day: 1,
        title: "Arrival in Bangkok & Flight to Samui",
        location: "Koh Samui, Thailand",
        description:
          "Upon arrival at Bangkok, transfer to a direct domestic flight to Koh Samui. Our representative will meet you at the airport and transfer you to your beach resort/hotel. The rest of the day is free to enjoy the resort or take a walk along Chaweng beach at your own pace. Stay overnight at your resort.",
        highlights: [
          "Direct domestic flight to the island of Koh Samui",
          "Transfer to your luxury beachfront resort",
          "Walk on the soft white sand of Chaweng or Lamai Beach",
          "Overnight stay by the calm waters of the Gulf of Thailand",
        ],
        image: "/images/banner-3.jpg",
      },
      {
        day: 2,
        title: "Koh Tao & Koh NangYuan Snorkeling Tour",
        location: "Koh Tao & Koh NangYuan",
        description:
          "After breakfast, board a speedboat to explore the stunning sister islands of Koh Tao (Turtle Island) and Koh NangYuan. Known for having some of the most vibrant coral reefs in the world, NangYuan is made of three small islands connected by a white sandbar that shifts with the tides. Snorkel in the clear waters, and hike to the famous viewpoint overlooking the sandbar, then explore Koh Tao's scenic bays.",
        highlights: [
          "Speedboat cruise to Koh NangYuan's iconic sandbar bridge",
          "Snorkel over the shallow coral reefs teeming with colorful fish",
          "Climb to the Koh NangYuan hilltop viewpoint for a postcard photo",
          "Enjoy a buffet lunch on the island",
        ],
        image: "/images/city-5.jpg",
      },
      {
        day: 3,
        title: "Ang Thong National Marine Park Speedboat Tour",
        location: "Ang Thong Marine Park, Gulf of Thailand",
        description:
          "Embark on a full-day speedboat tour of the Ang Thong National Marine Park, a pristine archipelago of 42 islands with towering limestone cliffs and hidden lagoons. Snorkel at Koh Wao, cruise past unusual rock formations, and climb up Koh Mae Ko to see the stunning Emerald Lake (Thale Nai). Enjoy a buffet lunch on Koh Paluay, with time for optional kayaking or relaxing on the beach.",
        highlights: [
          "Speedboat cruise through the 42-island Ang Thong archipelago",
          "Snorkel the reef at Koh Wao and spot marine life",
          "Climb to the viewpoint of the hidden salt-water Emerald Lake",
          "Optional sea kayaking along limestone caves and cliffs",
        ],
        image: "/images/city-6.jpg",
      },
      {
        day: 4,
        title: "Samui City Tour & Flight to Bangkok",
        location: "Koh Samui & Bangkok, Thailand",
        description:
          "Enjoy breakfast and check out of your hotel. Depart on a Koh Samui City Tour. Visit the Hin Ta & Hin Yai (Grandfather & Grandmother) rock formations, see a local coconut plantation where trained monkeys harvest coconuts, visit the mummified monk at Wat Khunaram, and end at the Big Buddha Temple. Transfer to Samui Airport for your evening flight to Bangkok, checking in at your Bangkok hotel.",
        highlights: [
          "Visit the unique natural rock formations of Hin Ta & Hin Yai",
          "See the mummified monk at Wat Khunaram",
          "Visit the 12-meter golden Big Buddha Temple on a small island",
          "Flight to Bangkok and check in to your capital city hotel",
        ],
        image: "/images/offer-2.jpg",
      },
      {
        day: 5,
        title: "Bangkok Temples City Tour",
        location: "Bangkok, Thailand",
        description:
          "After breakfast, go on a city tour of Bangkok's historic temples. Visit Wat Traimit (The Temple of the Golden Buddha) in Chinatown, which houses the world's largest solid gold seated Buddha weighing 5.5 tons. Next, visit Wat Benchamabophit (The Marble Temple), built in 1900 with Italian marble walls and featuring a beautiful courtyard of Buddha statues.",
        highlights: [
          "See the 5.5-ton solid gold seated Buddha at Wat Traimit",
          "Visit Chinatown's busy streets and historic temples",
          "Tour the beautiful Italian-marble architecture of Wat Benchamabophit",
          "Enjoy shopping in Bangkok's massive shopping plazas in the evening",
        ],
        image: "/images/offer-3.jpg",
      },
      {
        day: 6,
        title: "Checkout & Departure",
        location: "Bangkok, Thailand",
        description:
          "Enjoy your last breakfast in Bangkok. Spend your morning shopping for souvenirs or handicrafts at local markets. Check out of your hotel and transfer to Suvarnabhumi Airport for your return flight, bringing home unforgettable memories of Thailand.",
        highlights: [
          "Morning free for shopping at Bangkok's malls or local markets",
          "Check out from your Bangkok hotel",
          "Transfer to the airport for your flight home",
        ],
        image: "/images/offer-4.jpg",
      },
    ],
    thingsToDo: [
      {
        title: "Ang Thong Marine Park Tour",
        description:
          "Kayaking and snorkeling around the pristine archipelago of 42 islands, climbing to see the Emerald Lake.",
        iconName: "Waves",
      },
      {
        title: "Koh Tao Snorkeling",
        description:
          "Take a speedboat to the world-renowned snorkeling and dive sites of Turtle Island and Koh NangYuan.",
        iconName: "Compass",
      },
      {
        title: "Big Buddha Temple Visit",
        description:
          "Marvel at the 12-meter-tall golden Buddha statue sitting on a small island off Samui's north coast.",
        iconName: "Landmark",
      },
      {
        title: "Hin Ta & Hin Yai Rocks",
        description:
          "Visit the humorous natural rock formations on the Lamai coast resembling male and female anatomy.",
        iconName: "Camera",
      },
      {
        title: "Bangkok Golden Buddha",
        description:
          "Visit Wat Traimit to witness the spectacular 5.5-ton solid gold Buddha, a treasure from the Sukhothai period.",
        iconName: "Sun",
      },
    ],
    travelTips: [
      "Koh Samui has a direct airport with daily flights to Bangkok, providing smooth island-to-city transfers.",
      "Ang Thong Marine Park is closed during November and December due to rough weather; plan trips accordingly.",
      "Always cover your shoulders and knees when visiting temples in Samui and Bangkok.",
      "Taxis do not always use meters on Samui; agree on fares beforehand or use Grab.",
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
};
