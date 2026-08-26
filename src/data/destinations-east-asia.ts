import type { DestinationPageData } from "./destinations";

export const eastAsiaDestinations: Record<string, DestinationPageData> = {
  "great-wall": {
    slug: "great-wall",
    name: "Great Wall",
    country: "China",
    region: "East Asia",
    tagline: "Walk along humanity's greatest structure, millennia of defense and engineering",
    heroImage: "/images/dest-3.jpg",
    overview:
      "Stretching over 13,000 miles across northern China's mountains, deserts, and grasslands, the Great Wall is not a single wall but a constellation of fortifications built and rebuilt over two millennia. From the polished granite steps of Badaling — where world leaders have posed for photographs — to the crumbling watchtowers of Jiankou lost in wild forest, each section tells a different chapter of imperial ambition, Mongol invasions, and the relentless labor of millions.\n\nThe most rewarding experience is a multi-day trek along the unrestored sections between Jinshanling and Simatai, where the wall undulates across knife-edge ridges and you can camp on a watchtower under a canopy of stars. Spring brings wild apricot blossoms to the hillsides; autumn sets the surrounding forests ablaze in crimson and gold. Even in winter, when snow blankets the parapets and tourist crowds vanish, the wall reveals a haunting, solitary beauty that photographs barely capture.\n\nBeyond the wall itself, the surrounding countryside offers encounters with rural village life, hearty Hebei cuisine — try the donkey-meat burgers of Luanping — and a pace of life that stands in sharp contrast to Beijing's metropolitan rush just two hours south.",
    quickFacts: {
      capital: "Beijing (nearest major city)",
      currency: "Chinese Yuan (¥ / CNY)",
      climate: "Continental with hot summers and cold, dry winters",
      bestSeason: "April–May & September–October for mild weather and clear skies",
      languages: "Mandarin Chinese",
      timeZone: "CST (UTC+8)",
      drivingSide: "Right",
    },
    itinerary: [
      {
        day: 1,
        title: "Arrival in Beijing & Hutong Evening",
        location: "Beijing, China",
        description:
          "Touch down in Beijing and transfer to a courtyard hotel nestled in the historic hutong alleys near the Drum Tower. Spend the evening exploring Nanluoguxiang's lantern-lit lanes, sampling jianbing crêpes from street vendors and browsing independent tea shops.",
        highlights: [
          "Settle into a restored siheyuan courtyard hotel",
          "Evening stroll through Nanluoguxiang hutong",
          "Taste authentic Beijing jianbing from a street cart",
          "Climb the Drum Tower for sunset views over the grey-tiled rooftops",
        ],
        image: "/images/tour-3.jpg",
      },
      {
        day: 2,
        title: "Mutianyu Wall Trek & Toboggan Descent",
        location: "Mutianyu, Huairou District",
        description:
          "Rise early and drive ninety minutes to Mutianyu, one of the best-preserved sections surrounded by dense chestnut forests. Hike from Tower 6 to Tower 20 along a quieter stretch with panoramic views, then take the exhilarating toboggan ride back down the mountain.",
        highlights: [
          "Cable car ascent through misty forest canopy",
          "Hike the restored battlements from Tower 6 to Tower 20",
          "Photograph the wall snaking into distant mountain ridges",
          "Toboggan descent through the wooded hillside",
        ],
        image: "/images/tour-4.jpg",
      },
      {
        day: 3,
        title: "Wild Wall: Jinshanling to Simatai",
        location: "Jinshanling–Simatai, Hebei Province",
        description:
          "Embark on the legendary 10-kilometer hike from Jinshanling to Simatai, traversing the wall's most photogenic unrestored stretch. Crumbling watchtowers frame vistas of green valleys, and you'll encounter few other hikers on this remote ridgeline path.",
        highlights: [
          "Trek the wild, unrestored wall between Jinshanling and Simatai",
          "Explore overgrown watchtowers reclaimed by nature",
          "Picnic lunch on a battlement overlooking terraced farmland",
          "Night visit to Simatai's illuminated water town",
        ],
        image: "/images/explor-1.jpg",
      },
      {
        day: 4,
        title: "Forbidden City & Temple of Heaven",
        location: "Beijing, China",
        description:
          "Return to Beijing for a deep dive into imperial history. Enter the Forbidden City through the Meridian Gate and wander through 980 buildings spanning 72 hectares. In the afternoon, watch tai chi practitioners glide beneath the Temple of Heaven's triple-gabled Hall of Prayer.",
        highlights: [
          "Walk the central axis of the Forbidden City from gate to garden",
          "Admire the Nine Dragon Screen's glazed ceramic artistry",
          "Observe morning tai chi under the Temple of Heaven's eaves",
          "Evening Peking duck feast at a century-old restaurant",
        ],
        image: "/images/city-2.jpg",
      },
      {
        day: 5,
        title: "Summer Palace & Departure",
        location: "Beijing, China",
        description:
          "Spend a tranquil morning at the Summer Palace, drifting across Kunming Lake in a dragon boat and strolling the Long Corridor's 14,000 painted scenes. Pick up last-minute souvenirs at Panjiayuan Antique Market before departing.",
        highlights: [
          "Dragon boat cruise on Kunming Lake with pagoda reflections",
          "Walk the 728-meter Long Corridor of painted mythology",
          "Browse Panjiayuan's sprawling weekend antique market",
          "Final taste of zhajiangmian noodles at a local eatery",
        ],
        image: "/images/about-1.jpg",
      },
    ],
    thingsToDo: [
      {
        title: "Watchtower Camping",
        description:
          "Spend a night camping on an unrestored watchtower between Jinshanling and Gubeikou, falling asleep to the sound of wind sweeping across ancient stone.",
        iconName: "Mountain",
      },
      {
        title: "Peking Duck Tasting",
        description:
          "Compare the lacquered, air-dried duck at century-old Quanjude with the fruit-wood-roasted version at Da Dong, two rival schools of Beijing's signature dish.",
        iconName: "Utensils",
      },
      {
        title: "Great Wall Photography",
        description:
          "Capture the wall disappearing into fog at dawn from Jiankou's Ox Horn, one of the most dramatic compositions in landscape photography.",
        iconName: "Camera",
      },
      {
        title: "Hutong Cycling Tour",
        description:
          "Pedal through Beijing's labyrinth of grey-brick hutong alleys, stopping at hidden temples, courtyard homes, and neighborhood dumpling shops.",
        iconName: "MapPin",
      },
      {
        title: "Calligraphy Workshop",
        description:
          "Learn the art of Chinese brush calligraphy from a master in a traditional studio near the Confucius Temple, grinding your own ink from a stone slab.",
        iconName: "BookOpen",
      },
      {
        title: "Temple of Heaven Tai Chi",
        description:
          "Join local practitioners for an early-morning tai chi session beneath the Temple of Heaven's vermillion columns, a centuries-old Beijing ritual.",
        iconName: "Heart",
      },
    ],
    travelTips: [
      "Visit Mutianyu or Jinshanling instead of Badaling to avoid the heaviest crowds, especially on weekends and national holidays.",
      "Wear sturdy hiking boots with ankle support — the wild wall sections have steep, uneven steps and loose stones.",
      "Carry at least two liters of water per person; there are no vendors on the unrestored sections.",
      "Download offline maps and translation apps; cell service can be spotty along remote wall stretches.",
      "Bring layers even in summer — temperatures on the wall's exposed ridges can drop sharply with wind.",
      "Purchase a Beijing Yikatong transit card for convenient subway and bus travel between wall sections and the city.",
      "A VPN is essential for accessing Western social media and Google services while in China.",
    ],
    gallery: [
      "/images/banner-1.jpg",
      "/images/dest-4.jpg",
      "/images/explor-2.jpg",
      "/images/tour-5.jpg",
    ],
  },

  shanghai: {
    slug: "shanghai",
    name: "Shanghai",
    country: "China",
    region: "East Asia",
    tagline: "The Bund, futuristic skyline, gateway to modern China",
    heroImage: "/images/city-3.jpg",
    overview:
      "Shanghai is China's great paradox — a city where art deco mansions from the 1930s concession era line the same streets as the gravity-defying towers of Lujiazui, where grandmothers practice sword dancing in parks overlooked by the world's second-tallest building. The Bund's neoclassical façades gaze across the Huangpu River at a skyline that didn't exist thirty years ago, a visual dialogue between colonial past and rocket-fueled future.\n\nBeyond the postcard views, Shanghai rewards those who dig deeper. In the Former French Concession, plane-tree-canopied lanes hide speakeasy cocktail bars, vinyl record shops, and century-old shikumen lane houses where laundry still hangs between wrought-iron balconies. Tianzifang's narrow alleys buzz with independent designers and ceramic studios, while M50 art district converts abandoned cotton mills into galleries showcasing China's most provocative contemporary artists.\n\nThe city's food scene is equally layered — from the scalding soup dumplings of Jia Jia Tang Bao to the molecular gastronomy of Ultraviolet, Shanghai's dining landscape spans every price point and every province. Night falls, and the rooftop bars along the Bund come alive, their cocktail menus rivaling London and New York while their views surpass them both.",
    quickFacts: {
      currency: "Chinese Yuan (¥ / CNY)",
      climate: "Humid subtropical with hot, muggy summers and chilly winters",
      bestSeason: "March–May & September–November for pleasant temperatures",
      languages: "Mandarin Chinese, Shanghainese",
      timeZone: "CST (UTC+8)",
      drivingSide: "Right",
    },
    itinerary: [
      {
        day: 1,
        title: "The Bund & Pudong Skyline",
        location: "The Bund & Lujiazui, Shanghai",
        description:
          "Begin on the Bund's granite promenade at sunrise, when the Pudong skyline glows amber across the river. Cross through the Bund Sightseeing Tunnel to Lujiazui, ascending the Shanghai Tower's 118th-floor observation deck for 360-degree views of the Yangtze Delta.",
        highlights: [
          "Sunrise walk along the Bund's mile-long waterfront promenade",
          "Ascend the 632-meter Shanghai Tower observation deck",
          "Photograph the Oriental Pearl Tower's retro-futurist spheres",
          "Evening cocktails at Bar Rouge overlooking the illuminated skyline",
        ],
        image: "/images/city-4.jpg",
      },
      {
        day: 2,
        title: "French Concession & Tianzifang",
        location: "Former French Concession, Shanghai",
        description:
          "Lose yourself in the plane-tree-lined avenues of the Former French Concession, where art deco villas house boutique cafés and independent bookshops. Duck into Tianzifang's maze of shikumen lane houses turned artisan workshops, then end the evening at a hidden speakeasy behind a Coca-Cola vending machine door.",
        highlights: [
          "Stroll Wukang Road's canopy of London plane trees and art deco villas",
          "Browse independent designer studios in Tianzifang's alleys",
          "Visit Sun Yat-sen's former residence museum",
          "Discover a secret speakeasy in the former concession quarter",
        ],
        image: "/images/about-2.jpg",
      },
      {
        day: 3,
        title: "Yu Garden, Old City & Xiaolongbao Trail",
        location: "Old City & Huangpu, Shanghai",
        description:
          "Enter the ornate zigzag bridge to Yu Garden, a 16th-century classical garden of rockeries, dragon walls, and koi ponds hemmed in by the old city's bustling bazaar. Spend the afternoon on a xiaolongbao pilgrimage — comparing the thin-skinned perfection of Din Tai Fung with the crab-roe laden parcels at Jia Jia Tang Bao.",
        highlights: [
          "Explore Yu Garden's Ming-dynasty pavilions and rockeries",
          "Cross the Nine-Turn Zigzag Bridge over the lotus pond",
          "Taste-test xiaolongbao at three legendary dumpling houses",
          "Shop for tea and silk in the Old City bazaar",
        ],
        image: "/images/dest-5.jpg",
      },
      {
        day: 4,
        title: "Art, Markets & River Cruise",
        location: "M50, West Bund & Huangpu River",
        description:
          "Start at M50 Art District, where converted cotton mills house galleries of Chinese contemporary painting and sculpture. Continue to the West Bund Museum, designed by David Chipperfield, for its rotating exhibitions. As evening falls, board a Huangpu River cruise to see both banks ablaze with light.",
        highlights: [
          "Wander gallery spaces in M50's repurposed industrial buildings",
          "Visit the West Bund Museum's world-class contemporary exhibitions",
          "Huangpu River night cruise between the Bund and Lujiazui",
          "Late-night street food at Shouning Road's crayfish stalls",
        ],
        image: "/images/tour-6.jpg",
      },
    ],
    thingsToDo: [
      {
        title: "Xiaolongbao Pilgrimage",
        description:
          "Follow a soup-dumpling trail from the legendary Nanxiang Steamed Bun Restaurant to modern Din Tai Fung, comparing wrapper thickness, broth richness, and crab-roe fillings.",
        iconName: "Utensils",
      },
      {
        title: "Bund Architecture Walk",
        description:
          "Trace the evolution of Shanghai's colonial architecture from the Hongkong and Shanghai Bank's domed ceiling to the art deco Sassoon House at Fairmont Peace Hotel.",
        iconName: "Landmark",
      },
      {
        title: "Rooftop Bar Hopping",
        description:
          "Ascend the Bund's rooftop bars — Flair, Vue, and Bar Rouge — for cocktails framed by the most electrifying urban skyline on Earth.",
        iconName: "Globe",
      },
      {
        title: "Shikumen Lane House Tour",
        description:
          "Step inside restored shikumen — Shanghai's iconic stone-gate lane houses — to understand the communal living that shaped generations of Shanghainese identity.",
        iconName: "BookOpen",
      },
      {
        title: "Zhujiajiao Water Town",
        description:
          "Escape to this 1,700-year-old canal town just an hour from downtown, gliding under Ming-dynasty bridges in a wooden gondola and tasting sticky rice wrapped in lotus leaves.",
        iconName: "Waves",
      },
      {
        title: "Night Photography",
        description:
          "Capture Pudong's illuminated towers reflected in the Huangpu River from the Bund, one of the world's great urban nightscapes.",
        iconName: "Camera",
      },
    ],
    travelTips: [
      "Download WeChat and link a payment method — it's essential for everything from buying subway tickets to ordering at restaurants.",
      "The metro is fast and cheap; Line 2 connects Pudong Airport to the city center in about an hour.",
      "Carry a portable fan in summer — July and August humidity regularly exceeds 85%.",
      "Avoid visiting Yu Garden on weekends or Chinese holidays when crowds are at their worst.",
      "Tipping is not customary and can sometimes cause confusion; prices are all-inclusive.",
      "A VPN is necessary for accessing Google, Instagram, and most Western social media platforms.",
      "Learn the phrase 'bù yào là' (no spice) if you're sensitive to chili — Sichuan restaurants are everywhere.",
    ],
    gallery: [
      "/images/banner-2.jpg",
      "/images/dest-6.jpg",
      "/images/city-5.jpg",
      "/images/trand-1.jpg",
    ],
  },

  tibet: {
    slug: "tibet",
    name: "Tibet",
    country: "China",
    region: "East Asia",
    tagline: "Potala Palace, Buddhist monasteries, traditions atop the world",
    heroImage: "/images/dest-7.jpg",
    overview:
      "Tibet exists at the edge of imagination — a land where prayer flags snap in thin air at 4,500 meters, where monks debate philosophy with thunderclap hand-slaps in sunlit courtyards, and where the Potala Palace rises thirteen stories above Lhasa like a white-and-crimson fortress against an impossibly blue sky. This is the Roof of the World, a vast plateau of grasslands, turquoise lakes, and snow-capped peaks that has drawn pilgrims and seekers for over a thousand years.\n\nBeyond Lhasa's spiritual landmarks — Jokhang Temple, where a continuous stream of prostrating devotees circles the sacred kora path, and Sera Monastery, alive with the rapid-fire dialectics of debating monks — the Tibetan plateau unfolds into a wilderness of staggering scale. Yamdrok Lake shimmers in shades of sapphire and emerald depending on the light, nomadic yak herders traverse passes above 5,000 meters, and the north face of Everest looms at the end of a bone-rattling jeep track from Shigatse.\n\nTravel here demands patience, flexibility, and respect. Altitude sickness is a real concern, permits are mandatory, and infrastructure outside Lhasa is basic. But for those willing to adapt, Tibet offers experiences found nowhere else on Earth: butter tea shared in a nomad's tent, the deep horn blast of morning puja echoing across a silent valley, the overwhelming sight of Everest Base Camp at dawn.",
    quickFacts: {
      capital: "Lhasa",
      currency: "Chinese Yuan (¥ / CNY)",
      climate: "High-altitude arid with intense sun, cold nights, and brief summer rains",
      bestSeason: "May–June & September–October for clear skies and manageable temperatures",
      languages: "Tibetan, Mandarin Chinese",
      timeZone: "CST (UTC+8)",
      drivingSide: "Right",
    },
    itinerary: [
      {
        day: 1,
        title: "Arrival in Lhasa & Acclimatization",
        location: "Lhasa, Tibet",
        description:
          "Arrive at Lhasa Gonggar Airport and transfer to a hotel near the Barkhor. Spend the day acclimatizing at 3,650 meters — hydrate constantly, walk slowly, and take a gentle stroll around the Barkhor kora circuit as afternoon light gilds the Jokhang Temple's golden roof.",
        highlights: [
          "First glimpse of the Potala Palace from the airport road",
          "Gentle acclimatization walk around the Barkhor kora",
          "Spin prayer wheels alongside Tibetan pilgrims",
          "Evening yak-butter tea at a traditional Tibetan teahouse",
        ],
        image: "/images/about-3.jpg",
      },
      {
        day: 2,
        title: "Potala Palace & Jokhang Temple",
        location: "Lhasa, Tibet",
        description:
          "Climb the 300-odd steps to the Potala Palace, winter residence of the Dalai Lamas since the 17th century, marveling at jewel-encrusted stupas and murals depicting Buddhist cosmology. Descend to the Jokhang Temple, Tibet's holiest shrine, where the scent of juniper incense and melted yak butter permeates every room.",
        highlights: [
          "Explore the Potala's 1,000 rooms of murals and golden stupas",
          "Prostrate with pilgrims at the Jokhang's ancient entrance",
          "Browse thangka paintings and turquoise jewelry in Barkhor market",
          "Watch sunset paint the Potala from the rooftop of a Barkhor café",
        ],
        image: "/images/dest-8.jpg",
      },
      {
        day: 3,
        title: "Sera Monastery & Drepung",
        location: "Lhasa outskirts, Tibet",
        description:
          "Witness the famed debating monks at Sera Monastery, where novices challenge each other with dramatic hand-claps in the afternoon sun. Continue to Drepung Monastery, once home to 10,000 monks and the seat of Tibet's government before the Potala was built.",
        highlights: [
          "Watch monks' spirited philosophical debates at Sera courtyard",
          "Explore Drepung's vast whitewashed monastic complex",
          "Visit the giant thangka-unveiling wall on Drepung's hillside",
          "Sample momos and thukpa noodle soup at a monastery canteen",
        ],
        image: "/images/tour-7.jpg",
      },
      {
        day: 4,
        title: "Yamdrok Lake & Gyantse",
        location: "Yamdrok Lake & Gyantse, Tibet",
        description:
          "Drive over Kamba La Pass at 4,700 meters for your first staggering view of Yamdrok Lake, its turquoise surface ringed by snow-capped peaks and grazing yaks. Continue to Gyantse to explore the Kumbum stupa's nine tiers of Buddhist murals at Pelkor Chöde Monastery.",
        highlights: [
          "Photograph Yamdrok Lake's impossible turquoise from Kamba La Pass",
          "Encounter yak herders on the high-altitude grasslands",
          "Climb the tiered Kumbum stupa in Gyantse's monastery complex",
          "Overnight in Gyantse with views of the Dzong fortress",
        ],
        image: "/images/explor-3.jpg",
      },
      {
        day: 5,
        title: "Everest Base Camp & Return",
        location: "Everest Base Camp, Tibet",
        description:
          "Embark on the dramatic jeep journey to Everest Base Camp North, crossing the Friendship Highway past Shigatse and through barren, wind-scoured valleys. Arrive at the tent camp at 5,200 meters for an unforgettable sunset and sunrise over the world's highest peak.",
        highlights: [
          "Drive the Friendship Highway through Tibet's stark plateau",
          "Stand at 5,200 meters facing Everest's north face",
          "Sunrise over Chomolungma from Everest Base Camp",
          "Return via Rongbuk Monastery, the world's highest monastery",
        ],
        image: "/images/banner-3.jpg",
      },
    ],
    thingsToDo: [
      {
        title: "Potala Palace Pilgrimage",
        description:
          "Ascend the palace's seemingly endless steps to rooms filled with golden Buddhas, jeweled stupas, and centuries of Tibetan religious art.",
        iconName: "Landmark",
      },
      {
        title: "Barkhor Kora Walking",
        description:
          "Join the clockwise stream of pilgrims circling the Jokhang Temple, spinning brass prayer wheels and inhaling the smoke of juniper offerings.",
        iconName: "Heart",
      },
      {
        title: "Monk Debate Observation",
        description:
          "Watch Sera Monastery's monks engage in high-energy philosophical debates, a tradition of rapid questioning punctuated by dramatic hand-claps.",
        iconName: "GraduationCap",
      },
      {
        title: "High-Altitude Lake Trek",
        description:
          "Hike along the shores of Yamdrok or Namtso Lake, where turquoise waters meet snowfields at altitudes above 4,500 meters.",
        iconName: "Mountain",
      },
      {
        title: "Tibetan Cuisine Tasting",
        description:
          "Savor yak-butter tea, hand-pulled thukpa noodle soup, and steamed momos filled with yak meat at Lhasa's traditional eateries.",
        iconName: "Utensils",
      },
      {
        title: "Everest Base Camp Visit",
        description:
          "Stand at the foot of the world's tallest mountain on the Tibetan north side, an experience of raw altitude and unparalleled grandeur.",
        iconName: "Mountain",
      },
    ],
    travelTips: [
      "A Tibet Travel Permit is mandatory and must be arranged through a licensed tour agency at least 20 days before arrival.",
      "Spend at least two full days in Lhasa acclimatizing before heading to higher altitudes — altitude sickness is dangerous above 4,000 meters.",
      "Carry Diamox (acetazolamide) as a precaution and drink at least 3-4 liters of water daily.",
      "Pack extreme sun protection — UV radiation is intense at high altitude, even on overcast days.",
      "Respect local customs: always walk clockwise around monasteries and stupas, and ask before photographing monks or pilgrims.",
      "Bring cash in Chinese yuan; ATMs outside Lhasa are rare and unreliable.",
      "Pack thermal layers, a down jacket, and a good sleeping bag — nights are cold year-round, even in summer.",
    ],
    gallery: [
      "/images/about-4.jpg",
      "/images/breadcrumb-1.jpg",
      "/images/trand-2.jpg",
      "/images/dest-10.jpg",
    ],
  },

  xian: {
    slug: "xian",
    name: "Xi'an",
    country: "China",
    region: "East Asia",
    tagline: "Terracotta Warriors, ancient city walls, Silk Road origins",
    heroImage: "/images/dest-9.jpg",
    overview:
      "Xi'an is where China's story begins. For over a millennium it served as the imperial capital under thirteen dynasties, and its DNA is woven from the threads of the Silk Road that once terminated at its western gates. The discovery of the Terracotta Army in 1974 — over 8,000 life-sized warriors buried for 2,200 years to guard Emperor Qin Shi Huang in the afterlife — transformed Xi'an from a provincial city into one of the world's most compelling archaeological destinations.\n\nBut there is far more to Xi'an than its famous warriors. The intact Ming-dynasty city wall, a 14-kilometer circuit of rammed earth and grey brick, offers one of China's great urban experiences when cycled at sunset. Inside the walls, the Muslim Quarter's narrow alleys teem with sizzling lamb skewers, hand-pulled biangbiang noodles, and pomegranate juice vendors, a living legacy of the Hui Muslim community that has called this neighborhood home since the Tang dynasty.\n\nVenture beyond the city to the Wild Goose Pagoda, built to house Buddhist scriptures brought from India, or to Huashan — one of China's five sacred mountains — where chain-assisted trails cling to sheer granite cliffs above misty valleys. Xi'an is not just a museum piece; it is a vibrant, deeply layered city where the ancient Silk Road still flavors every meal and every street corner.",
    quickFacts: {
      capital: "Xi'an (capital of Shaanxi Province)",
      currency: "Chinese Yuan (¥ / CNY)",
      climate: "Semi-arid continental with hot summers and cold, dry winters",
      bestSeason: "April–May & September–October for comfortable sightseeing weather",
      languages: "Mandarin Chinese",
      timeZone: "CST (UTC+8)",
      drivingSide: "Right",
    },
    itinerary: [
      {
        day: 1,
        title: "City Wall & Muslim Quarter",
        location: "Xi'an City Center",
        description:
          "Rent a bicycle atop Xi'an's 600-year-old city wall and ride the full 14-kilometer circuit as the setting sun silhouettes the guard towers. Descend into the Muslim Quarter's Beiyuanmen Street for a feast of roujiamo meat sandwiches, lamb paomo soup, and persimmon cakes sizzling on iron griddles.",
        highlights: [
          "Cycle the full circuit of the ancient Ming-dynasty city wall",
          "Sunset over the guard towers from the wall's southern gate",
          "Feast on roujiamo and biangbiang noodles in the Muslim Quarter",
          "Visit the Great Mosque's tranquil garden courtyards",
        ],
        image: "/images/tour-8.jpg",
      },
      {
        day: 2,
        title: "Terracotta Warriors & Huaqing Palace",
        location: "Lintong District, Xi'an",
        description:
          "Stand before Pit 1's 6,000 warriors — each face unique, each hairstyle a clue to rank and regiment — and feel the scale of Qin Shi Huang's ambition. Afterward, visit Huaqing Palace's hot spring pools where Tang emperor Xuanzong famously bathed with his concubine Yang Guifei.",
        highlights: [
          "Walk the edge of Pit 1 and study the warriors' individual expressions",
          "See the bronze chariots in the museum's climate-controlled hall",
          "Soak in history at Huaqing Palace's imperial hot springs",
          "Evening Tang Dynasty music and dance performance",
        ],
        image: "/images/dest-12.jpg",
      },
      {
        day: 3,
        title: "Wild Goose Pagoda & Shaanxi Museum",
        location: "Xi'an South, Shaanxi",
        description:
          "Begin at the Big Wild Goose Pagoda, a seventh-century brick tower built to house Buddhist sutras carried overland from India. Cross to the Shaanxi History Museum, whose collection of Tang gold and silver, jade burial suits, and Silk Road artifacts ranks among China's finest.",
        highlights: [
          "Climb the Big Wild Goose Pagoda for rooftop views of Xi'an",
          "Marvel at Tang dynasty gold and jade in Shaanxi History Museum",
          "Watch the musical fountain show at Big Wild Goose Pagoda Square",
          "Taste yangrou paomo lamb soup at a local specialty restaurant",
        ],
        image: "/images/about-5.jpg",
      },
      {
        day: 4,
        title: "Mount Huashan Sacred Climb",
        location: "Huashan, Shaanxi Province",
        description:
          "Take the early train to Huashan and ascend via the west peak gondola, then hike across plank walks bolted to sheer cliff faces and knife-edge ridges connecting the mountain's five peaks. The Plank Walk in the Sky — narrow boards suspended over a 2,000-meter drop — is one of the world's most thrilling trails.",
        highlights: [
          "Ride the gondola to Huashan's west peak above the clouds",
          "Traverse the legendary Plank Walk in the Sky",
          "Summit the south peak, Huashan's highest point at 2,155 meters",
          "Photograph the chain-lined trail along the knife-edge ridge",
        ],
        image: "/images/explor-4.jpg",
      },
    ],
    thingsToDo: [
      {
        title: "Terracotta Army Discovery",
        description:
          "Stand inches from 2,200-year-old soldiers with individually sculpted faces, one of archaeology's most astonishing encounters.",
        iconName: "Landmark",
      },
      {
        title: "Muslim Quarter Food Tour",
        description:
          "Devour roujiamo, biangbiang noodles, lamb skewers, and persimmon cakes along the Hui community's centuries-old food streets.",
        iconName: "Utensils",
      },
      {
        title: "City Wall Cycling",
        description:
          "Pedal the full 14-kilometer loop atop the Ming-dynasty ramparts at golden hour, passing watchtowers and overlooking rooftop courtyards.",
        iconName: "MapPin",
      },
      {
        title: "Mount Huashan Trek",
        description:
          "Challenge one of China's five sacred mountains, from chain-assisted cliff paths to the vertigo-inducing Plank Walk in the Sky.",
        iconName: "Mountain",
      },
      {
        title: "Tang Dynasty Show",
        description:
          "Watch a lavish evening performance of Tang-era music and dance in a theater modeled on an imperial palace banquet hall.",
        iconName: "Heart",
      },
    ],
    travelTips: [
      "Book Terracotta Warriors tickets online in advance — entry is timed and slots fill quickly during peak season.",
      "Visit the warriors early in the morning or late afternoon to avoid the worst tour-group congestion.",
      "The Muslim Quarter is busiest (and best) in the evening; go after 6 p.m. for the full sensory experience.",
      "Wear hiking boots and gloves for Mount Huashan — the chain-assisted sections require a good grip.",
      "Xi'an's metro is efficient; Line 2 connects the train station to the city center and the Wild Goose Pagoda area.",
      "Carry small cash for street food stalls — not all vendors in the Muslim Quarter accept mobile payment.",
    ],
    gallery: [
      "/images/banner-4.jpg",
      "/images/trand-3.jpg",
      "/images/about-6.jpg",
      "/images/city-6.jpg",
    ],
  },

  guilin: {
    slug: "guilin",
    name: "Guilin",
    country: "China",
    region: "East Asia",
    tagline: "Karst mountains, Li River cruises, otherworldly landscapes",
    heroImage: "/images/dest-11.jpg",
    overview:
      "Guilin's landscape looks like a Chinese ink painting come to life. Hundreds of karst limestone peaks — some draped in mist, others reflected in mirror-still rice paddies — rise abruptly from a patchwork of emerald fields along the Li River, creating a scenery so iconic it graces the back of the 20-yuan banknote. Poets and painters have rhapsodized about Guilin for over a thousand years, and standing on the banks of the Li River at dawn, it is easy to understand why.\n\nThe classic experience is the four-hour bamboo-raft cruise from Guilin to Yangshuo, drifting past water-buffalo farmers, fishermen casting nets from narrow boats, and karst formations with evocative names like Nine Horses Fresco Hill and Yellow Cloth Shoal. Yangshuo itself is a traveler's haven — a compact town where you can rent a bicycle and pedal through rice terraces to the ancient village of Xingping, or rock-climb limestone cliffs that attract climbers from around the globe.\n\nBeyond the river corridor, Guilin offers the staggering Longji Rice Terraces, where Zhuang and Yao minority villages perch on mountainsides sculpted into curved stairways of water and grain stretching from valley floor to summit. These terraces, built over 700 years ago, are at their most magical in May when flooded paddies reflect the sky, and in October when ripened rice turns the hillsides to gold.",
    quickFacts: {
      currency: "Chinese Yuan (¥ / CNY)",
      climate: "Subtropical monsoon with warm, humid summers and mild winters",
      bestSeason: "April–October; May for flooded rice terraces, October for golden harvest",
      languages: "Mandarin Chinese, Zhuang, Yao",
      timeZone: "CST (UTC+8)",
      drivingSide: "Right",
    },
    itinerary: [
      {
        day: 1,
        title: "Guilin Arrival & Elephant Trunk Hill",
        location: "Guilin City Center",
        description:
          "Arrive in Guilin and head to Elephant Trunk Hill, the city's most recognizable landmark, where a karst formation resembles an elephant drinking from the Li River. Spend the evening strolling the Two Rivers and Four Lakes waterway, where illuminated pagodas and bridges reflect in the still water.",
        highlights: [
          "Photograph Elephant Trunk Hill's iconic arch at sunset",
          "Evening boat cruise through the Two Rivers and Four Lakes",
          "Sample Guilin rice noodles at a local breakfast stall",
          "Walk Zhengyang Pedestrian Street's night market",
        ],
        image: "/images/tour-9.jpg",
      },
      {
        day: 2,
        title: "Li River Cruise to Yangshuo",
        location: "Li River, Guilin to Yangshuo",
        description:
          "Board a bamboo raft at dawn and drift downstream on the Li River as karst peaks emerge from morning mist like the teeth of sleeping dragons. Pass water-buffalo wading through shallows, cormorant fishermen, and the famous 20-yuan banknote view at Xingping, arriving in Yangshuo by midday.",
        highlights: [
          "Bamboo raft through the Li River's most dramatic karst corridor",
          "Photograph the 20-yuan banknote view at Xingping",
          "Spot cormorant fishermen and water buffalo along the banks",
          "Arrive in Yangshuo for an afternoon of exploration",
        ],
        image: "/images/explor-5.jpg",
      },
      {
        day: 3,
        title: "Yangshuo Cycling & Impression Liu Sanjie",
        location: "Yangshuo, Guangxi",
        description:
          "Rent a bicycle and pedal the countryside loop past Moon Hill's natural limestone arch, through rice paddies dotted with karst towers, and along the Yulong River where locals punt bamboo rafts through knee-deep water. At nightfall, watch Impression Liu Sanjie — Zhang Yimou's open-air spectacular performed on the river with 600 cast members and twelve karst peaks as the backdrop.",
        highlights: [
          "Cycle through rice paddies to Moon Hill's limestone arch",
          "Float the Yulong River on a hand-punted bamboo raft",
          "Rock climb limestone cliffs at one of Yangshuo's outdoor crags",
          "Impression Liu Sanjie nighttime river performance",
        ],
        image: "/images/about-7.jpg",
      },
      {
        day: 4,
        title: "Longji Rice Terraces",
        location: "Longsheng County, Guangxi",
        description:
          "Drive two hours north to the Longji (Dragon's Backbone) Rice Terraces, where stepped paddies climb from valley floor to misty summit in sinuous curves. Hike between Zhuang and Yao minority villages, share a farmhouse lunch of bamboo-tube rice, and watch Yao women with waist-length hair perform traditional weaving.",
        highlights: [
          "Hike the terraces from Ping'an to Dazhai village",
          "Lunch with a Zhuang family in a wooden stilted house",
          "Watch Yao women demonstrate indigo-dyeing and weaving",
          "Panoramic sunrise or sunset from Viewpoint No. 2",
        ],
        image: "/images/tour-10.jpg",
      },
      {
        day: 5,
        title: "Reed Flute Cave & Departure",
        location: "Guilin, Guangxi",
        description:
          "Return to Guilin for a morning visit to Reed Flute Cave, a 240-meter-deep limestone cavern illuminated by multicolored lights that reveal stalactites, stalagmites, and underground pools. Enjoy a final bowl of Guilin rice noodles before departing.",
        highlights: [
          "Explore Reed Flute Cave's illuminated underground galleries",
          "See the Crystal Palace chamber's vast stalactite formations",
          "Final Guilin rice noodle breakfast with pickled beans and chili",
          "Browse local ink paintings and calligraphy at Guilin art shops",
        ],
        image: "/images/dest-14.jpg",
      },
    ],
    thingsToDo: [
      {
        title: "Li River Bamboo Rafting",
        description:
          "Drift on a bamboo raft through the heart of China's most iconic karst landscape, a four-hour journey through living poetry.",
        iconName: "Waves",
      },
      {
        title: "Yangshuo Rock Climbing",
        description:
          "Scale limestone cliffs above emerald rice paddies at world-class crags like Swiss Cheese and Moon Hill, suitable for beginners and experts alike.",
        iconName: "Mountain",
      },
      {
        title: "Rice Terrace Photography",
        description:
          "Capture the Longji Terraces at dawn when flooded paddies mirror the sky, creating an endless stairway of reflected clouds.",
        iconName: "Camera",
      },
      {
        title: "Guilin Rice Noodle Tasting",
        description:
          "Slurp your way through variations of Guilin's iconic mifen rice noodles — in broth, dry-tossed, or with horse-meat topping — at stalls where the recipe hasn't changed in decades.",
        iconName: "Utensils",
      },
      {
        title: "Cormorant Fishing Demonstration",
        description:
          "Watch traditional fishermen work with trained cormorants at dusk on the Li River, a practice dating back 1,300 years.",
        iconName: "Globe",
      },
      {
        title: "Minority Village Homestay",
        description:
          "Stay overnight with a Zhuang or Yao family in the Longji Terraces, learning traditional weaving, sharing home-cooked meals, and waking to rice-terrace panoramas.",
        iconName: "Heart",
      },
    ],
    travelTips: [
      "Book the Li River cruise or bamboo raft in advance during peak season (April–October); early morning departures offer the best light and thinnest crowds.",
      "Bring rain gear year-round — Guilin's subtropical climate means sudden showers, and misty conditions actually enhance the scenery.",
      "Rent an electric scooter in Yangshuo for maximum countryside freedom, but carry your international driving permit.",
      "Haggle gently at Yangshuo's West Street market — initial prices are typically double the fair rate.",
      "For Longji Rice Terraces, stay overnight in a village guesthouse to experience sunrise without the day-tripper crowds.",
      "The high-speed train connects Guilin to Guangzhou in under three hours — a convenient onward connection.",
    ],
    gallery: [
      "/images/banner-5.jpg",
      "/images/breadcrumb-2.jpg",
      "/images/trand-4.jpg",
      "/images/offer-1.jpg",
    ],
  },

  kyoto: {
    slug: "kyoto",
    name: "Kyoto",
    country: "Japan",
    region: "East Asia",
    tagline: "Zen temples, bamboo groves, geisha districts, tea ceremonies",
    heroImage: "/images/dest-13.jpg",
    overview:
      "Kyoto is the soul of Japan — a city of 2,000 temples and shrines, 17 UNESCO World Heritage Sites, and a cultural continuity stretching back 1,200 years to when Emperor Kanmu chose this mountain-ringed valley as his imperial capital. Walk through the vermillion tunnel of 10,000 torii gates at Fushimi Inari, sit in meditation before Ryoan-ji's enigmatic rock garden, or follow a geiko in full regalia through Gion's lantern-lit cobblestones, and you begin to understand why Kyoto was deliberately spared from bombing in World War II.\n\nThe city's rhythm follows the seasons with almost ceremonial precision. Spring arrives in an explosion of cherry blossoms along the Philosopher's Path and the Kamo River; summer brings firefly-lit evenings and the spectacular Gion Matsuri float procession; autumn transforms the gardens of Tofuku-ji and Eikan-do into tunnels of crimson and gold; winter drapes Kinkaku-ji's golden pavilion in snow, creating perhaps Japan's most photographed scene.\n\nBeyond the famous sights, Kyoto rewards slow exploration. Duck into a machiya townhouse converted into a matcha café, watch a master potter throw Kiyomizu-yaki ceramics on a hand-spun wheel, or reserve a seat at a seven-course kaiseki dinner where each dish is a miniature landscape reflecting the current season. Kyoto doesn't just preserve tradition — it lives and breathes it.",
    quickFacts: {
      currency: "Japanese Yen (¥)",
      climate: "Humid subtropical with hot, humid summers and cold winters",
      bestSeason: "Late March–April (cherry blossom) & mid-November (peak autumn color)",
      languages: "Japanese",
      timeZone: "JST (UTC+9)",
      drivingSide: "Left",
    },
    itinerary: [
      {
        day: 1,
        title: "Fushimi Inari & Eastern Higashiyama",
        location: "Fushimi & Higashiyama, Kyoto",
        description:
          "Arrive early at Fushimi Inari Taisha and hike the winding trail through 10,000 vermillion torii gates up Mount Inari before the crowds descend. In the afternoon, wander the preserved streets of Higashiyama — the Ninenzaka and Sannenzaka stone-paved slopes — stopping at Kiyomizu-dera for panoramic views from its cantilevered wooden stage.",
        highlights: [
          "Walk through the endless vermillion torii tunnel at dawn",
          "Summit Mount Inari for views over southern Kyoto",
          "Stroll the stone-paved Ninenzaka and Sannenzaka lanes",
          "Sunset from Kiyomizu-dera's wooden stage overlooking the city",
        ],
        image: "/images/tour-11.jpg",
      },
      {
        day: 2,
        title: "Arashiyama Bamboo & Zen Gardens",
        location: "Arashiyama & Northwest Kyoto",
        description:
          "Enter the towering bamboo grove of Arashiyama as morning light filters through the swaying culms, then cross the Togetsukyo Bridge for views of Monkey Park's macaques against the mountains. Spend the afternoon contemplating Ryoan-ji's fifteen-stone rock garden and Kinkaku-ji, whose golden pavilion gleams above its mirror-like pond.",
        highlights: [
          "Walk through Arashiyama's soaring bamboo grove at sunrise",
          "Feed wild macaques at Iwatayama Monkey Park",
          "Meditate before Ryoan-ji's enigmatic dry rock garden",
          "Photograph Kinkaku-ji's gold reflection in the pond",
        ],
        image: "/images/about-8.jpg",
      },
      {
        day: 3,
        title: "Gion, Tea Ceremony & Kaiseki",
        location: "Gion & Central Kyoto",
        description:
          "Spend the morning at a traditional tea ceremony in a century-old machiya townhouse, learning the precise choreography of whisking matcha. Explore Nishiki Market's 400-meter arcade of 130 food stalls, then dress in a rental kimono for an evening walk through Gion's Hanami-koji, where geiko and maiko shuffle between teahouses in the twilight.",
        highlights: [
          "Participate in a matcha tea ceremony in a machiya townhouse",
          "Graze through Nishiki Market's pickles, mochi, and dashimaki tamago",
          "Stroll Gion's Hanami-koji in a rented kimono at dusk",
          "Seven-course kaiseki dinner showcasing seasonal Kyoto cuisine",
        ],
        image: "/images/dest-16.jpg",
      },
      {
        day: 4,
        title: "Philosopher's Path & Nara Day Trip",
        location: "Northern Higashiyama & Nara",
        description:
          "Walk the Philosopher's Path along a cherry-tree-lined canal from Ginkaku-ji's silver pavilion to Nanzen-ji's brick aqueduct. Board the train to Nara, where sacred deer bow for crackers in the park surrounding Todai-ji, home to the world's largest bronze Buddha.",
        highlights: [
          "Stroll the Philosopher's Path beneath cherry or maple canopy",
          "Explore Nanzen-ji's imposing Sanmon gate and brick aqueduct",
          "Feed bowing deer in Nara Park",
          "Stand before Todai-ji's 15-meter-tall Great Buddha",
        ],
        image: "/images/explor-6.jpg",
      },
      {
        day: 5,
        title: "Uji Tea Town & Byodo-in",
        location: "Uji, Kyoto Prefecture",
        description:
          "Take the short train to Uji, Japan's tea capital, for a stone-grinding matcha workshop and a walk along the Uji River to Byodo-in — the phoenix-hall temple immortalized on the 10-yen coin. Return to Kyoto for a final soak in a sento bathhouse.",
        highlights: [
          "Grind your own matcha at a Uji tea farm workshop",
          "Visit Byodo-in's Phoenix Hall, featured on the 10-yen coin",
          "Walk the Uji River path lined with tea merchant shops",
          "Evening soak at a traditional Kyoto sento bathhouse",
        ],
        image: "/images/offer-2.jpg",
      },
    ],
    thingsToDo: [
      {
        title: "Torii Gate Hike",
        description:
          "Ascend Mount Inari through 10,000 vermillion torii gates, a mystical two-hour hike that winds through forest shrines and fox statues.",
        iconName: "Mountain",
      },
      {
        title: "Kaiseki Dining Experience",
        description:
          "Savor a multi-course kaiseki meal where each dish is a seasonal work of art, served in a private tatami room overlooking a Zen garden.",
        iconName: "Utensils",
      },
      {
        title: "Geisha District Evening Walk",
        description:
          "Wander Gion's lantern-lit cobblestone streets at twilight, catching glimpses of geiko and maiko gliding between ochaya teahouses.",
        iconName: "Heart",
      },
      {
        title: "Matcha Tea Ceremony",
        description:
          "Learn the 400-year-old art of preparing matcha from a tea master in a hushed machiya, every movement a meditation.",
        iconName: "BookOpen",
      },
      {
        title: "Temple Garden Photography",
        description:
          "Capture Kyoto's iconic scenes — the golden pavilion's reflection, Ryoan-ji's raked gravel, Tofuku-ji's autumn fire — in changing seasonal light.",
        iconName: "Camera",
      },
      {
        title: "Nishiki Market Food Tour",
        description:
          "Taste your way through Kyoto's Kitchen — grilled mochi, matcha soft-serve, soy-milk donuts, and uni-topped rice crackers along 130 stalls.",
        iconName: "MapPin",
      },
    ],
    travelTips: [
      "Visit Fushimi Inari and the bamboo grove before 8 a.m. to experience them without crowds — they are open 24/7.",
      "Buy a one-day Kyoto bus pass for ¥700 — most major temples are reachable by the comprehensive city bus network.",
      "Reserve kaiseki restaurants at least two weeks ahead; top establishments like Kikunoi require a month's notice.",
      "Rent a bicycle for the Philosopher's Path area — Kyoto is flat and cycling is the fastest way to temple-hop.",
      "Carry cash; many traditional shops, temples, and smaller restaurants don't accept credit cards.",
      "Gion etiquette: do not stop, touch, or block geiko and maiko for photographs — observe respectfully from a distance.",
      "If visiting during cherry blossom or autumn foliage, book accommodation three to six months in advance.",
    ],
    gallery: [
      "/images/breadcrumb-3.jpg",
      "/images/trand-5.jpg",
      "/images/blog-1.jpg",
      "/images/dest-17.jpg",
    ],
  },

  osaka: {
    slug: "osaka",
    name: "Osaka",
    country: "Japan",
    region: "East Asia",
    tagline: "Japan's kitchen, street food capital, vibrant nightlife",
    heroImage: "/images/dest-15.jpg",
    overview:
      "If Tokyo is Japan's head, Osaka is its stomach. The people here greet each other with 'mokari makka?' — 'are you making money?' — a reflection of the city's merchant roots and its frank, no-nonsense warmth. Osaka invented or perfected many of Japan's most beloved street foods: the crispy-shelled takoyaki octopus ball, the layered okonomiyaki savory pancake, and the deep-fried kushikatsu skewer. In Dotonbori, where neon signs and mechanical crabs compete for attention over a glittering canal, eating is not just encouraged — it's the entire point.\n\nBut Osaka is far more than a food city. Its castle — a gleaming white-and-gold keep rising from massive stone foundations — anchors a sprawling park that erupts in pink each cherry blossom season. The Shinsekai district, modeled after early-20th-century New York and Paris, retains a retro charm with its Tsutenkaku Tower, old-school game parlors, and kushikatsu joints where the golden rule is 'no double-dipping.' Underground, the city hides a parallel world in its vast shopping arcades — Shinsaibashi-suji stretches for 600 meters of boutiques, vintage stores, and dessert counters.\n\nAs night falls, Osaka transforms. The bars of Ura-Namba pour expertly crafted highballs in rooms that seat six, the comedy clubs of Namba Grand Kagetsu showcase Japan's capital of stand-up humor, and the late-night ramen counters keep steaming until dawn. Osaka doesn't sleep — it just changes course.",
    quickFacts: {
      currency: "Japanese Yen (¥)",
      climate: "Humid subtropical with hot, sticky summers and cool winters",
      bestSeason: "March–May (cherry blossom) & October–November (autumn festivals)",
      languages: "Japanese (Kansai dialect)",
      timeZone: "JST (UTC+9)",
      drivingSide: "Left",
    },
    itinerary: [
      {
        day: 1,
        title: "Dotonbori & Shinsekai Food Crawl",
        location: "Dotonbori & Shinsekai, Osaka",
        description:
          "Plunge straight into Osaka's neon-lit food paradise. Start at Dotonbori's canal, where the giant Glico Running Man sign and mechanical Kani Doraku crab mark the entrance to Japan's densest concentration of street-food stalls. Cross to Shinsekai for kushikatsu — breaded, deep-fried skewers of everything from lotus root to quail egg — washed down with draft beer under the glow of Tsutenkaku Tower.",
        highlights: [
          "Taste takoyaki at the legendary Kukuru stall by the canal",
          "Eat fluffy okonomiyaki griddled before you at Mizuno",
          "Double-dip-forbidden kushikatsu feast in Shinsekai's Daruma",
          "Photograph the Glico Man and canal reflections at night",
        ],
        image: "/images/tour-12.jpg",
      },
      {
        day: 2,
        title: "Osaka Castle & Kuromon Market",
        location: "Chuo Ward, Osaka",
        description:
          "Explore Osaka Castle's eight-floor museum tracing the rise and fall of Toyotomi Hideyoshi, then stroll the surrounding park where 600 cherry trees bloom in early April. In the afternoon, graze through Kuromon Ichiba Market's 170 stalls — slurp sea-urchin from the shell, try A5 wagyu seared on a countertop grill, and sample fugu blowfish sashimi.",
        highlights: [
          "Climb Osaka Castle's keep for panoramic city views",
          "Walk beneath 600 cherry trees in Nishinomaru Garden",
          "Eat sea urchin straight from the shell at Kuromon Market",
          "Taste A5 wagyu beef seared on a tabletop charcoal grill",
        ],
        image: "/images/dest-19.jpg",
      },
      {
        day: 3,
        title: "Nara Day Trip & Sake Tasting",
        location: "Nara & Fushimi, Kansai Region",
        description:
          "Take the 45-minute train to Nara, where over 1,200 sacred deer roam freely in the park. Visit Todai-ji's Great Buddha Hall, then continue to the Fushimi sake district of southern Kyoto, touring Gekkeikan's Edo-period brewery and tasting daiginjo sake straight from the cedar vat.",
        highlights: [
          "Feed bowing deer at Nara's ancient park",
          "Stand beneath Todai-ji's colossal bronze Daibutsu",
          "Tour Gekkeikan Okura Sake Museum's Edo-period brewery",
          "Taste fresh daiginjo sake from traditional cedar cups",
        ],
        image: "/images/about-9.jpg",
      },
      {
        day: 4,
        title: "Ura-Namba Nightlife & Cooking Class",
        location: "Namba, Osaka",
        description:
          "Join a morning cooking class to master the art of Osaka-style okonomiyaki and takoyaki, learning the precise batter ratios and wrist-flick techniques. Spend the evening bar-hopping through Ura-Namba's intimate standing bars — try a lemon sour at a six-seat counter bar, then end the night with tonkotsu ramen at Ichiran's solo-booth experience.",
        highlights: [
          "Learn to flip takoyaki in an Osaka cooking class",
          "Bar-hop Ura-Namba's intimate standing-bar scene",
          "Catch live comedy at Namba Grand Kagetsu theater",
          "Late-night tonkotsu ramen at Ichiran's solo booths",
        ],
        image: "/images/offer-3.jpg",
      },
    ],
    thingsToDo: [
      {
        title: "Dotonbori Street Food Crawl",
        description:
          "Eat your way along Japan's most famous food street — takoyaki, okonomiyaki, gyoza, and taiyaki — under a canyon of neon signs and animatronic mascots.",
        iconName: "Utensils",
      },
      {
        title: "Osaka Castle & Cherry Blossoms",
        description:
          "Explore the gold-crested castle keep and its surrounding moat, especially magical during hanami season when 600 cherry trees bloom simultaneously.",
        iconName: "Landmark",
      },
      {
        title: "Kuromon Market Grazing",
        description:
          "Wander Osaka's 'kitchen' market, sampling fresh sashimi, grilled scallops, wagyu skewers, and seasonal fruit from 170 specialist stalls.",
        iconName: "MapPin",
      },
      {
        title: "Comedy & Nightlife",
        description:
          "Experience Osaka's title as Japan's comedy capital at Namba Grand Kagetsu, then dive into Ura-Namba's intimate bar scene.",
        iconName: "Heart",
      },
      {
        title: "Retro Shinsekai District",
        description:
          "Step back in time in this early-20th-century entertainment district, with its Tsutenkaku Tower, old-school game parlors, and legendary kushikatsu restaurants.",
        iconName: "Globe",
      },
    ],
    travelTips: [
      "Get the Osaka Amazing Pass (1 or 2 day) for free entry to 50+ attractions including Osaka Castle and river cruises, plus unlimited subway rides.",
      "Dotonbori is best experienced after dark when the neon fully illuminates — arrive around 6 p.m. for dinner crowds and energy.",
      "The golden rule at kushikatsu restaurants: never double-dip your skewer in the communal sauce. Use the cabbage leaf to scoop extra sauce instead.",
      "Osaka's subway closes around midnight; plan late-night returns by taxi or stay near Namba for walkable nightlife.",
      "Kuromon Market stalls close by 5 p.m. and some close on Wednesdays — go before noon for the freshest selection.",
      "Osaka is an excellent base for day trips to Nara (45 min), Kyoto (15 min by shinkansen), and Kobe (20 min).",
    ],
    gallery: [
      "/images/blog-2.jpg",
      "/images/breadcrumb-4.jpg",
      "/images/dest-20.jpg",
      "/images/tour-13.jpg",
    ],
  },

  "mount-fuji": {
    slug: "mount-fuji",
    name: "Mount Fuji",
    country: "Japan",
    region: "East Asia",
    tagline: "Summit climbs, lakeside trails, hot spring recovery",
    heroImage: "/images/dest-18.jpg",
    overview:
      "Mount Fuji is more than a mountain — it is the spiritual symbol of Japan, a near-perfect volcanic cone that has inspired artists from Hokusai to every smartphone-wielding traveler who catches its snow-capped silhouette from a shinkansen window. At 3,776 meters, Fuji-san is Japan's highest peak and a UNESCO World Heritage Site, sacred to Shinto practitioners who have climbed its slopes in pilgrimage for centuries. Each summer, over 200,000 people attempt the summit, timing their ascent to witness goraiko — the sunrise from above the clouds.\n\nThe Fuji Five Lakes region at the mountain's northern base offers year-round beauty without the physical demands of the climb. Lake Kawaguchiko mirrors Fuji's inverted cone on still mornings, its shores lined with lavender in June and blazing maple in November. Lake Shoji, the smallest and least developed, provides the most serene reflection views. The highland town of Hakone, on Fuji's southeastern flank, adds a different dimension with its volcanic hot springs, the Hakone Open-Air Museum's Picasso collection, and pirate-ship cruises across Lake Ashi.\n\nWhether you come to conquer the summit, soak in a rotenburo (open-air hot spring) with Fuji filling the horizon, or simply photograph the mountain from every conceivable angle, Fuji delivers an experience that transcends the physical and touches the sacred.",
    quickFacts: {
      currency: "Japanese Yen (¥)",
      climate: "Alpine at summit; temperate around the lakes with cold, snowy winters",
      bestSeason: "July–September for summit climbs; April–May & October–November for lake views",
      languages: "Japanese",
      timeZone: "JST (UTC+9)",
      drivingSide: "Left",
    },
    itinerary: [
      {
        day: 1,
        title: "Kawaguchiko Arrival & Lakeside Views",
        location: "Lake Kawaguchiko, Yamanashi",
        description:
          "Arrive at Kawaguchiko Station and check into a ryokan with tatami rooms and private onsen. Take the Kachi Kachi Ropeway to Mount Tenjo's observation deck for a sweeping panorama of Fuji reflected in the lake, then cycle the lakeside path as afternoon light turns the mountain pink.",
        highlights: [
          "Kachi Kachi Ropeway panorama of Fuji and Lake Kawaguchiko",
          "Cycle the lake's northern shore with uninterrupted Fuji views",
          "Visit the Kubota Itchiku Art Museum's kimono textile gallery",
          "Evening kaiseki dinner and private onsen at a lakeside ryokan",
        ],
        image: "/images/tour-14.jpg",
      },
      {
        day: 2,
        title: "Fuji Summit Climb (Day Start)",
        location: "Yoshida Trail, Mount Fuji",
        description:
          "Drive to the Yoshida 5th Station at 2,300 meters and begin the ascent in the early afternoon, climbing through volcanic scree and alpine scrub. Arrive at a mountain hut near the 8th Station by evening, refuel with a hot curry dinner, and rest before the midnight summit push.",
        highlights: [
          "Begin the ascent from Yoshida 5th Station at 2,300 meters",
          "Climb through distinct vegetation zones toward the tree line",
          "Check into a mountain hut for dinner and a few hours of sleep",
          "Prepare for the midnight summit push under a canopy of stars",
        ],
        image: "/images/dest-21.jpg",
      },
      {
        day: 3,
        title: "Summit Sunrise & Descent",
        location: "Mount Fuji Summit, Shizuoka/Yamanashi",
        description:
          "Rise at midnight and join the headlamp procession to the summit, arriving at the crater rim just as the first light of goraiko breaks over the Pacific horizon. Circle the crater on the Ohachi-meguri trail, peer into the volcanic caldera, then descend via the sandy Yoshida switchbacks to the 5th Station by midday.",
        highlights: [
          "Witness goraiko — sunrise from above the clouds at 3,776 meters",
          "Walk the Ohachi-meguri crater rim trail around the summit",
          "Peer into Fuji's dormant volcanic caldera",
          "Descend via the rapid sand-sliding switchbacks",
        ],
        image: "/images/banner-1.jpg",
      },
      {
        day: 4,
        title: "Hakone Hot Springs & Recovery",
        location: "Hakone, Kanagawa",
        description:
          "Transfer to Hakone for a well-earned recovery day. Cruise Lake Ashi on a pirate ship with Fuji in the distance, ride the Hakone Ropeway over the sulfurous Owakudani valley, and finish with a long soak in a rotenburo (outdoor hot spring) overlooking forested mountains.",
        highlights: [
          "Lake Ashi pirate-ship cruise with Fuji on the horizon",
          "Ride the Hakone Ropeway over Owakudani's volcanic vents",
          "Eat a legendary black egg said to extend life by seven years",
          "Soak in a rotenburo hot spring with mountain forest views",
        ],
        image: "/images/about-10.jpg",
      },
    ],
    thingsToDo: [
      {
        title: "Summit Sunrise Climb",
        description:
          "Join the midnight headlamp procession up the Yoshida Trail to witness goraiko — the sacred sunrise over the Pacific from Japan's highest point.",
        iconName: "Mountain",
      },
      {
        title: "Lakeside Photography",
        description:
          "Capture Fuji's inverted reflection in the still waters of Kawaguchiko, Shoji, or Motosuko — the same view immortalized on the 1,000-yen banknote.",
        iconName: "Camera",
      },
      {
        title: "Onsen Hot Spring Soaking",
        description:
          "Recover from the climb in Hakone's volcanic hot springs, soaking in mineral-rich waters while Fuji's cone fills the horizon.",
        iconName: "Waves",
      },
      {
        title: "Hoto Noodle Feast",
        description:
          "Warm up with Yamanashi's hearty hoto — thick flat noodles simmered in miso broth with pumpkin, mushrooms, and mountain vegetables.",
        iconName: "Utensils",
      },
      {
        title: "Aokigahara Forest Walk",
        description:
          "Hike through the Sea of Trees at Fuji's base, a primeval lava-flow forest where moss carpets volcanic rock and silence is near-total.",
        iconName: "Landmark",
      },
      {
        title: "Open-Air Art Museum",
        description:
          "Wander the Hakone Open-Air Museum's hillside sculpture garden featuring works by Picasso, Henry Moore, and Nikki de Saint Phalle against mountain backdrops.",
        iconName: "Lightbulb",
      },
    ],
    travelTips: [
      "The official climbing season is July 1 to September 10; outside this window, trails are closed and conditions are dangerous.",
      "Book mountain huts months in advance — they fill up fast, especially on weekends and during Obon (mid-August).",
      "Dress in layers and bring a headlamp, rain gear, and gloves — summit temperatures can drop below 0°C even in summer.",
      "Altitude sickness affects many climbers; ascend slowly, hydrate constantly, and consider an overnight hut stay for acclimatization.",
      "The Fuji Hakone Free Pass covers buses, boats, ropeways, and trains in the region for two or three days — excellent value.",
      "For the best reflection photos at Kawaguchiko, arrive before 7 a.m. when winds are calm and the lake is mirror-still.",
    ],
    gallery: [
      "/images/blog-3.jpg",
      "/images/breadcrumb-5.jpg",
      "/images/explor-2.jpg",
      "/images/offer-4.jpg",
    ],
  },

  seoul: {
    slug: "seoul",
    name: "Seoul",
    country: "South Korea",
    region: "East Asia",
    tagline: "K-culture, historic palaces, tech innovation, universities",
    heroImage: "/images/city-1.jpg",
    overview:
      "Seoul is a city running at two speeds simultaneously — a dynamo of K-pop studios, tech campuses, and 24-hour neon districts layered atop 600 years of Joseon dynasty palaces, Confucian shrines, and fortress walls that still trace the mountain ridges above the city. Gyeongbokgung Palace's throne hall commands the same north-south axis it has since 1395, while just blocks away, Gangnam's glass towers and underground malls pulse with the energy that birthed Samsung, BTS, and the global hallyu wave.\n\nFood is Seoul's universal language. From the sizzling barbecue tables of Mapo-gu — where thick slabs of samgyeopsal pork belly char over charcoal — to the elegant banchan spreads of a Jongno hanok restaurant, the city delivers intensity in every bite. Night markets in Myeongdong overflow with hotteok pancakes, tteokbokki spicy rice cakes, and tornado potatoes on sticks, while Michelin-starred temples like Jungsik reimagine Korean cuisine with foams, gels, and precision plating.\n\nBeyond eating and sightseeing, Seoul's creative districts reward wandering. Ikseon-dong's hanok alleys hide craft-cocktail bars in century-old tiled-roof houses, Hongdae's streets vibrate with indie musicians and mural art, and the Dongdaemun Design Plaza — Zaha Hadid's silvery mothership — hosts cutting-edge fashion shows inside a building that looks beamed in from the future.",
    quickFacts: {
      capital: "Seoul (national capital)",
      currency: "South Korean Won (₩)",
      climate: "Humid continental with hot, humid summers and cold, dry winters",
      bestSeason: "April–May (cherry blossom) & September–November (golden autumn)",
      languages: "Korean",
      timeZone: "KST (UTC+9)",
      drivingSide: "Right",
    },
    itinerary: [
      {
        day: 1,
        title: "Gyeongbokgung Palace & Bukchon Hanok Village",
        location: "Jongno-gu, Seoul",
        description:
          "Watch the royal guard-changing ceremony at Gyeongbokgung, then explore the palace's grand throne hall and lotus-pond pavilion. Walk to Bukchon Hanok Village, where 600 traditional tiled-roof houses line steep lanes with views of both palaces and the Seoul Tower skyline.",
        highlights: [
          "Witness the Gwanghwamun royal guard-changing ceremony",
          "Explore Gyeongbokgung's throne hall and Hyangwonjeong Pavilion",
          "Photograph the hanok rooftops of Bukchon's hilltop lanes",
          "Rent a hanbok and receive free palace admission",
        ],
        image: "/images/city-4.jpg",
      },
      {
        day: 2,
        title: "DMZ & War Memorial",
        location: "DMZ & Yongsan, Seoul",
        description:
          "Join a guided tour to the Demilitarized Zone, peering into North Korea from the Joint Security Area's blue negotiation huts and descending into a North Korean infiltration tunnel. Return to Seoul for the sobering War Memorial of Korea, where fighter jets, tanks, and personal testimonies trace the peninsula's divided history.",
        highlights: [
          "Stand at the JSA conference table straddling the border",
          "Descend the Third Tunnel of Aggression beneath the DMZ",
          "Look into North Korea from the Dora Observatory",
          "Reflect at the War Memorial of Korea's Hall of Remembrance",
        ],
        image: "/images/dest-22.jpg",
      },
      {
        day: 3,
        title: "Hongdae, Ikseon-dong & K-Culture",
        location: "Mapo-gu & Jongno-gu, Seoul",
        description:
          "Explore Hongdae's indie music scene — buskers on every corner, vintage shops, and mural-covered alleys. Cross to Ikseon-dong, Seoul's oldest hanok neighborhood reinvented as a hipster hub of craft-cocktail bars and artisan coffee roasters in tiled-roof houses. End with a K-pop dance class or a visit to a noraebang singing room.",
        highlights: [
          "Watch street performers and buskers in Hongdae's plaza",
          "Browse vintage and K-fashion boutiques in Hongdae alleys",
          "Sip craft cocktails in Ikseon-dong's hanok courtyard bars",
          "Sing your heart out in a private noraebang room",
        ],
        image: "/images/offer-5.jpg",
      },
      {
        day: 4,
        title: "Gangnam, Starfield Library & Night Markets",
        location: "Gangnam & Myeongdong, Seoul",
        description:
          "Cross the Han River to Gangnam, visiting the soaring Starfield Library's two-story bookshelves in COEX Mall and the sleek Bongeunsa Temple tucked behind glass towers. At night, dive into Myeongdong's buzzing street-food market for hotteok, egg bread, and tornado potatoes, then browse ten floors of K-beauty at Olive Young.",
        highlights: [
          "Photograph Starfield Library's towering book columns in COEX",
          "Visit Bongeunsa Temple's serene grounds amid Gangnam's towers",
          "Feast on Myeongdong street food — hotteok, tteokbokki, egg bread",
          "Shop K-beauty products at Myeongdong's flagship stores",
        ],
        image: "/images/blog-4.jpg",
      },
      {
        day: 5,
        title: "Namsan Tower & Korean BBQ Farewell",
        location: "Jung-gu & Mapo-gu, Seoul",
        description:
          "Hike or cable-car up Namsan Mountain to N Seoul Tower, where love-lock fences and panoramic city views await. Descend through Myeong-dong for last-minute shopping, then close your Seoul chapter with a legendary Korean BBQ feast — thick-cut samgyeopsal and marinated galbi sizzling over charcoal in Mapo-gu.",
        highlights: [
          "Panoramic views from N Seoul Tower's observation deck",
          "Lock a love padlock on Namsan's famous fence",
          "Last-minute K-beauty and fashion shopping in Myeongdong",
          "Farewell samgyeopsal and galbi BBQ feast in Mapo-gu",
        ],
        image: "/images/tour-1.jpg",
      },
    ],
    thingsToDo: [
      {
        title: "Palace & Hanbok Experience",
        description:
          "Rent a traditional hanbok and receive free entry to Seoul's five grand palaces, posing for photos amid Joseon-era architecture.",
        iconName: "Landmark",
      },
      {
        title: "Korean BBQ Feast",
        description:
          "Grill thick-cut samgyeopsal pork belly and marinated galbi ribs over charcoal at a Mapo-gu barbecue institution, wrapped in lettuce with ssamjang and garlic.",
        iconName: "Utensils",
      },
      {
        title: "K-Pop & Hallyu Immersion",
        description:
          "Take a K-pop dance class in Gangnam, visit HYBE Insight for BTS artifacts, and catch a live music show in Hongdae's indie venues.",
        iconName: "Heart",
      },
      {
        title: "DMZ Border Tour",
        description:
          "Stand at the world's most heavily fortified border, peering into North Korea from the Joint Security Area's blue negotiation huts.",
        iconName: "Globe",
      },
      {
        title: "Jjimjilbang Spa Night",
        description:
          "Spend an evening at a Korean jjimjilbang spa — rotating between hot pools, cold plunges, salt saunas, and sleeping on heated ondol floors.",
        iconName: "Dumbbell",
      },
      {
        title: "Street Food Night Tour",
        description:
          "Graze through Gwangjang Market's legendary stalls — bindaetteok mung-bean pancakes, mayak gimbap, and yukhoe raw beef tartare.",
        iconName: "MapPin",
      },
    ],
    travelTips: [
      "Get a T-money card at any convenience store — it works on all subways, buses, and even taxis across the city.",
      "Seoul's subway is world-class; free Wi-Fi is available on all trains and in most stations.",
      "Wearing a hanbok grants free entry to all five royal palaces — rental shops cluster near Gyeongbokgung.",
      "Book DMZ tours at least a week in advance; bring your passport, as military checkpoints require identification.",
      "Many restaurants and shops accept credit cards, but carry some cash for traditional markets and street food stalls.",
      "Download Naver Map or KakaoMap — Google Maps has limited functionality in South Korea due to national mapping regulations.",
      "Tipping is not customary in South Korea and can sometimes cause confusion.",
    ],
    gallery: [
      "/images/dest-23.jpg",
      "/images/city-5.jpg",
      "/images/trand-1.jpg",
      "/images/about-1.jpg",
    ],
  },

  busan: {
    slug: "busan",
    name: "Busan",
    country: "South Korea",
    region: "East Asia",
    tagline: "Coastal temples, colorful villages, seafood markets",
    heroImage: "/images/dest-22.jpg",
    overview:
      "Busan is South Korea's sun-and-salt counterweight to Seoul's landlocked intensity — a sprawling port city where forested mountains tumble into the sea, Buddhist temples perch on ocean cliffs, and the country's best seafood arrives on ice each dawn at Jagalchi Market. Korea's second city has a swagger all its own: rougher-edged, more laid-back, and fiercely proud of its distinct dialect, its beaches, and its fiery dwaeji gukbap pork soup.\n\nThe city's landscapes shift dramatically block by block. Haeundae Beach draws summer crowds to its crescent of golden sand flanked by glass-tower hotels, while just around the headland, the Haedong Yonggungsa Temple clings to seaside rocks where crashing waves spray mist onto prayer-bell visitors. Inland, the Gamcheon Culture Village — once a hillside war-refugee settlement — has reinvented itself as a pastel labyrinth of street art, tiny galleries, and rooftop cafés cascading down the slope like a Korean Santorini.\n\nBusan's culinary identity centers on the ocean. Jagalchi Fish Market's second floor is a vast seafood restaurant where you choose your fish alive from the tanks below and it arrives at your table minutes later as sashimi. Milmyeon — cold wheat noodles in icy broth — is the city's summer obsession, while ssiat hotteok (seed-filled sweet pancakes) from BIFF Square's street carts have achieved near-religious status among locals.",
    quickFacts: {
      currency: "South Korean Won (₩)",
      climate: "Humid subtropical with warm summers, mild winters, and monsoon rains in July",
      bestSeason: "April–June & September–November for beach weather and clear skies",
      languages: "Korean (Gyeongsang dialect)",
      timeZone: "KST (UTC+9)",
      drivingSide: "Right",
    },
    itinerary: [
      {
        day: 1,
        title: "Jagalchi Market & BIFF Square",
        location: "Nampo-dong, Busan",
        description:
          "Start at Jagalchi Fish Market, Korea's largest, where ajumma fishmongers slice live octopus at tableside and tanks hold everything from king crab to sea squirt. Cross to BIFF Square for ssiat hotteok — crispy pancakes stuffed with sunflower seeds, sugar, and cinnamon — then browse the vintage alleys of Gukje International Market.",
        highlights: [
          "Choose your fish alive at Jagalchi and eat it as sashimi upstairs",
          "Try live sannakji octopus with sesame oil",
          "Bite into a piping-hot ssiat hotteok at BIFF Square",
          "Browse Gukje Market's maze of vintage goods and street food",
        ],
        image: "/images/tour-2.jpg",
      },
      {
        day: 2,
        title: "Gamcheon Village & Taejongdae Cliffs",
        location: "Saha-gu & Yeongdo-gu, Busan",
        description:
          "Climb the pastel stairways of Gamcheon Culture Village, a hillside labyrinth of murals, miniature galleries, and rooftop cafés that earned its nickname as Busan's Santorini. In the afternoon, hike the coastal trail at Taejongdae, a clifftop park where you can spot Japan's Tsushima Island on clear days.",
        highlights: [
          "Photograph the pastel houses and street art of Gamcheon Village",
          "Find the Little Prince statue hidden among the rooftops",
          "Hike Taejongdae's coastal cliff trail through pine forest",
          "Spot Tsushima Island from the Taejongdae lighthouse viewpoint",
        ],
        image: "/images/dest-4.jpg",
      },
      {
        day: 3,
        title: "Haedong Yonggungsa & Haeundae Beach",
        location: "Haeundae & Gijang, Busan",
        description:
          "Descend the stone stairway to Haedong Yonggungsa Temple, spectacularly sited on ocean-battered rocks where spray from the East Sea mingles with incense smoke. Spend the afternoon at Haeundae Beach, walking the Moontan Road coastal trail or watching surfers ride the late-afternoon swell.",
        highlights: [
          "Visit Haedong Yonggungsa Temple perched on ocean cliffs",
          "Walk the Moontan Road coastal boardwalk at Haeundae",
          "Swim or surf at Haeundae's crescent-shaped golden beach",
          "Sunset seafood dinner at Haeundae's beachfront raw-fish row",
        ],
        image: "/images/explor-1.jpg",
      },
      {
        day: 4,
        title: "Beomeosa Temple & Spa Land",
        location: "Geumjeong-gu & Haeundae, Busan",
        description:
          "Hike through the forested foothills of Geumjeongsan to Beomeosa, a 1,300-year-old mountain temple where monks chant at dawn beneath ancient wisteria. Descend and reward yourself at Spa Land in Centum City — Korea's largest department-store spa complex — with Finnish saunas, bade pools, and heated jade rooms.",
        highlights: [
          "Hike through Geumjeongsan forest to the Beomeosa temple gates",
          "Witness morning Buddhist chanting at the 1,300-year-old temple",
          "Relax in Spa Land's 22 themed hot-spring baths and saunas",
          "Farewell milmyeon cold noodles at a legendary Busan noodle shop",
        ],
        image: "/images/about-3.jpg",
      },
    ],
    thingsToDo: [
      {
        title: "Jagalchi Seafood Experience",
        description:
          "Select your seafood from the ground-floor tanks and have it prepared as sashimi, grilled, or in spicy stew on the floor above — the freshest meal of your life.",
        iconName: "Utensils",
      },
      {
        title: "Gamcheon Village Art Walk",
        description:
          "Wander Busan's pastel-painted hillside village, discovering murals, sculptures, and tiny galleries tucked into a maze of stairways and alleys.",
        iconName: "Camera",
      },
      {
        title: "Haedong Yonggungsa Temple",
        description:
          "Visit this oceanside temple where crashing waves, stone lanterns, and a golden Buddha create one of Korea's most dramatic sacred settings.",
        iconName: "Landmark",
      },
      {
        title: "Haeundae Beach Day",
        description:
          "Swim, surf, or stroll the Moontan Road boardwalk at Korea's most famous beach, backed by a strip of raw-fish restaurants and ocean-view cafés.",
        iconName: "Waves",
      },
      {
        title: "Korean Spa Immersion",
        description:
          "Spend hours rotating through Spa Land's Finnish saunas, charcoal rooms, jade beds, and bade pools — a quintessential Korean wellness ritual.",
        iconName: "Dumbbell",
      },
      {
        title: "Gwangalli Night Views",
        description:
          "Sip craft beer on Gwangalli Beach as the Diamond Bridge lights up in a rainbow of LED colors, framing the nighttime ocean.",
        iconName: "Heart",
      },
    ],
    travelTips: [
      "The KTX high-speed train connects Seoul to Busan in under 2.5 hours — book in advance for window seats with the best views.",
      "Jagalchi Market is best visited early morning (before 9 a.m.) when the catch is freshest and the energy is highest.",
      "Busan's beaches have strong currents; swim only within the designated buoy zones and heed lifeguard warnings.",
      "The Busan City Tour Bus (red or blue line) is an efficient way to hit spread-out attractions like Taejongdae and Haedong Yonggungsa.",
      "Gamcheon Village is a residential neighborhood — keep noise levels respectful and avoid photographing into private homes.",
      "Pack a light rain jacket from June through August; Busan's monsoon season brings sudden, heavy downpours.",
    ],
    gallery: [
      "/images/offer-1.jpg",
      "/images/city-2.jpg",
      "/images/trand-5.jpg",
      "/images/dest-6.jpg",
    ],
  },

  ulaanbaatar: {
    slug: "ulaanbaatar",
    name: "Ulaanbaatar",
    country: "Mongolia",
    region: "East Asia",
    tagline: "Nomadic culture meets modern capital — Genghis Khan Square, Buddhist temples, and vibrant markets",
    heroImage: "/images/tour-1.jpg",
    overview:
      "Ulaanbaatar is the world's coldest capital city and one of its most unexpected. Perched at 1,350 metres on the Tuul River floodplain, surrounded by the Bogd Khan mountain sacred forest, it is home to nearly half of Mongolia's entire population — a sprawling mix of Soviet apartment blocks, traditional ger districts, gleaming glass towers, and ancient Buddhist monasteries that somehow coexist in a city still finding its modern identity.\n\nAt its centre lies Sükhbaatar Square — renamed Genghis Khan Square in 2013 — dominated by a monumental bronze statue of the Great Khan flanked by his generals, seated before the neoclassical Government Palace. From here the city fans out in every direction: west to the Gandantegchinlen Monastery, Mongolia's spiritual heart and home to an 26-metre gilded standing Buddha; north to the Zaisan Memorial hill with its panoramic city views; and east to the lively Naran Tuul Black Market, where everything from camel-hair blankets to Soviet military medals changes hands.\n\nBut Ulaanbaatar is also a gateway — to the vast steppe beyond the city limits where nomadic herders still live in circular felt gers, tend their horses, and read the landscape for signs of weather. A single day's drive south brings you to the edge of the Gobi Desert; north lie the pine-forested Khangai Mountains. The city serves as both a vibrant cultural destination and the launch point for some of the most extraordinary wilderness adventures on Earth.",
    quickFacts: {
      capital: "Ulaanbaatar",
      currency: "Mongolian Tögrög (₮ / MNT)",
      climate: "Extreme continental — harsh winters (–25 °C), warm dry summers (25 °C); dusty springs",
      bestSeason: "June–August (Naadam Festival in July; warmest, greenest steppe)",
      languages: "Mongolian",
      timeZone: "ULAT (UTC+8)",
      drivingSide: "Right",
    },
    itinerary: [
      {
        day: 1,
        title: "Genghis Khan Square & National Museum",
        location: "Central Ulaanbaatar",
        description:
          "Start at Sükhbaatar (Genghis Khan) Square to take in the monumental bronze statues of the Great Khan and his generals. Enter the Government Palace colonnade, then cross to the National Museum of Mongolia, where three floors of exhibits trace Mongolian history from Neolithic stone tools through the conquests of the Mongol Empire to Soviet-era art and contemporary life.",
        highlights: [
          "Photograph the monumental Genghis Khan statue at the Government Palace",
          "Trace 5,000 years of Mongolian history in the National Museum",
          "See original Mongol Empire armour, saddles, and royal seals",
          "Try buuz (steamed dumplings) at a downtown guanz (canteen) for lunch",
        ],
        image: "/images/tour-1.jpg",
      },
      {
        day: 2,
        title: "Gandantegchinlen Monastery & Zaisan Hill",
        location: "Ulaanbaatar",
        description:
          "Visit Gandantegchinlen Monastery at dawn when monks chant morning prayers in crimson robes — one of Central Asia's most atmospheric religious experiences. Enter the main Migjid Janraisig Temple to stand before the 26-metre gilded standing Avalokitesvara statue. Afternoon, climb Zaisan Memorial hill for panoramic views over the city and its mountain backdrop.",
        highlights: [
          "Attend dawn prayers at Gandantegchinlen with chanting monks in crimson robes",
          "Look up at the 26-metre gilded standing Buddha inside Migjid Janraisig Temple",
          "Climb Zaisan Memorial for sweeping views over Ulaanbaatar and Bogd Khan Mountain",
          "Photograph the circular Soviet-era mosaic panorama at Zaisan's summit",
        ],
        image: "/images/tour-2.jpg",
      },
      {
        day: 3,
        title: "Naadam Festival (July) or Nomadic Ger Stay",
        location: "Ulaanbaatar & Steppe",
        description:
          "If visiting in July, experience Mongolia's Naadam Festival — the Three Manly Games of horse racing, archery, and wrestling, accompanied by throat singing and traditional costumes. Otherwise, drive 50 km from the city to spend the night in a nomadic family's ger, joining them for horse-milking, cooking, and an evening under the unpolluted steppe sky.",
        highlights: [
          "Watch child jockeys as young as five race across the steppe in Naadam (July)",
          "Cheer at traditional Mongolian wrestling in the Naadam Stadium",
          "Drink airag (fermented mare's milk) poured by a nomadic host in their ger",
          "Sleep in a traditional felt ger to the sound of the wind across the open steppe",
        ],
        image: "/images/about-3.jpg",
      },
      {
        day: 4,
        title: "Genghis Khan Equestrian Statue & Terelj",
        location: "Tsonjin Boldog & Terelj National Park",
        description:
          "Drive 54 km east to the colossal 40-metre stainless steel Genghis Khan equestrian statue — the world's largest equestrian monument — rising from the open steppe. Climb inside to the horse's head observation deck. Continue into Terelj National Park for an afternoon of horse riding through granite boulder fields and pine-forested valleys.",
        highlights: [
          "Stand at the base of the world's largest equestrian statue, 40 metres of stainless steel",
          "Take the elevator to the horse's head for a panorama of the open steppe",
          "Ride Mongolian horses through the extraordinary rock formations of Terelj",
          "Visit Aryabal Meditation Temple perched on a hilltop in Terelj National Park",
        ],
        image: "/images/tour-3.jpg",
      },
      {
        day: 5,
        title: "Black Market & Farewell Dinner",
        location: "Ulaanbaatar",
        description:
          "Spend the morning at Naran Tuul Black Market — Central Asia's most eclectic bazaar, selling cashmere, camel wool, traditional deel robes, saddles, Soviet memorabilia, and every utensil of nomadic life. Farewell dinner at a traditional restaurant serving tsuivan (stir-fried noodles with mutton), khorkhog (stone-pot lamb), and Mongolian vodka.",
        highlights: [
          "Shop for pure cashmere and camel-wool blankets at Naran Tuul Market",
          "Examine handmade saddles, carved wooden ger furniture, and traditional musical instruments",
          "Feast on khorkhog — lamb cooked inside a metal pot with hot stones, a nomadic classic",
          "Toast your final evening in Ulaanbaatar with Mongolian arkhi (vodka) and folk music",
        ],
        image: "/images/about-4.jpg",
      },
    ],
    thingsToDo: [
      {
        title: "Naadam Festival",
        description:
          "Experience Mongolia's greatest annual celebration in July — horse racing, archery, wrestling, throat singing, and nomadic festivities across the capital.",
        iconName: "Globe",
      },
      {
        title: "Gandantegchinlen Monastery",
        description:
          "Attend dawn prayers with crimson-robed monks and stand before a 26-metre gilded standing Buddha in Central Asia's most important Buddhist complex.",
        iconName: "Landmark",
      },
      {
        title: "Nomadic Ger Homestay",
        description:
          "Spend the night in a nomadic family's circular felt home, learning to milk mares, cook over a dung fire, and navigate by stars on the open steppe.",
        iconName: "Heart",
      },
      {
        title: "Genghis Khan Monument",
        description:
          "Visit the 40-metre stainless steel equestrian statue of Genghis Khan, the world's largest, rising from the plain where he allegedly found a golden whip.",
        iconName: "MapPin",
      },
      {
        title: "Horse Riding in Terelj",
        description:
          "Ride Mongolian horses through the granite boulder formations and pine forests of Gorkhi-Terelj National Park, one hour from the capital.",
        iconName: "Mountain",
      },
      {
        title: "Naran Tuul Black Market",
        description:
          "Browse Central Asia's most eclectic bazaar for cashmere, camel wool, traditional deel robes, saddles, and every artefact of nomadic life.",
        iconName: "Utensils",
      },
    ],
    travelTips: [
      "Book flights and accommodation well in advance for Naadam (July 11–13) — this is Mongolia's biggest holiday and the city fills completely.",
      "Carry USD in cash — many guesthouses and tour operators prefer dollars; ATMs are available in central Ulaanbaatar but scarce outside the city.",
      "Ulaanbaatar has one of the world's worst air pollution problems in winter (November–March) due to coal heating in ger districts — consider a mask or avoid winter travel.",
      "Hire a registered guide and driver for any trips beyond the city — roads are unpaved, GPS is unreliable, and nomadic navigation requires local knowledge.",
      "Mongolian airag (fermented mare's milk) is mildly alcoholic and an important cultural offering — accepting a bowl is considered respectful.",
      "Dress modestly when visiting monasteries — cover shoulders and knees, and remove shoes before entering temple buildings.",
      "The cold season (October–April) is very harsh — minimum temperature can reach –40 °C in January; plan warm-weather visits from May to September.",
    ],
    gallery: [
      "/images/tour-1.jpg",
      "/images/tour-2.jpg",
      "/images/about-3.jpg",
      "/images/tour-3.jpg",
      "/images/about-4.jpg",
    ],
  },

  "gobi-desert": {
    slug: "gobi-desert",
    name: "Gobi Desert",
    country: "Mongolia",
    region: "East Asia",
    tagline: "Vast dunes, dinosaur fossils, camel treks, and stargazing in Earth's least-populated landscape",
    heroImage: "/images/tour-2.jpg",
    overview:
      "The Gobi Desert is one of the planet's most misunderstood landscapes. It is not a sea of sand — only around 5% of the Gobi is covered by sand dunes. Most of it is a vast stone plateau: wind-polished gravel, salt flats, saxaul forests, and rugged mountain ranges folded across an area larger than Western Europe. Temperatures swing from 45 °C in summer to –40 °C in winter. Yet this apparent emptiness conceals extraordinary riches — both above the surface and beneath it.\n\nThe Flaming Cliffs of Bayanzag, glowing orange in the late afternoon sun, are one of the world's great palaeontological sites. American explorer Roy Chapman Andrews found the first-ever dinosaur eggs here in 1923, unlocking a Cretaceous-era treasure trove that has since yielded Velociraptor fossils, ankylosaur skulls, and dozens of previously unknown species. Walking the crumbling red cliffs, you can still find small bone fragments and fossilised shells on the surface — remnants of a time when the Gobi was a humid, forested land teeming with life.\n\nKhongoryn Els — the Singing Dunes — are the Gobi's most dramatic landscape: a 180-kilometre arc of sand mountains rising to 300 metres, so named because the shifting sand emits a deep, resonant hum under the right wind conditions. Climbing to the dune crest at sunset, with nothing but ochre ridges and blue sky in every direction, is one of the defining experiences of travel in Central Asia. Between the dunes and the cliffs, Bactrian camels graze in sheltered saxaul valleys, tended by nomadic herders whose families have worked the Gobi routes for generations.",
    quickFacts: {
      capital: "Dalanzadgad (Ömnögovi Province capital, gateway to South Gobi)",
      currency: "Mongolian Tögrög (₮ / MNT)",
      climate: "Extreme desert continental — scorching summers (40 °C+), brutal winters (–40 °C)",
      bestSeason: "May–June & September–October (mild temperatures; spring wildflowers; autumn colours)",
      languages: "Mongolian",
      timeZone: "ULAT (UTC+8)",
      drivingSide: "Right",
    },
    itinerary: [
      {
        day: 1,
        title: "Flaming Cliffs of Bayanzag",
        location: "Bayanzag, South Gobi",
        description:
          "Fly or drive from Ulaanbaatar to the Gobi. Arrive at the Flaming Cliffs of Bayanzag in the late afternoon, when the eroded red sandstone glows most brilliantly in the angled sun. Walk the cliff edge with a palaeontologist guide who explains the fossil-bearing layers and the story of Andrews' 1923 expedition. Search for small fossil fragments on the surface.",
        highlights: [
          "Watch the Flaming Cliffs turn deep crimson in the late afternoon light",
          "Learn about the first dinosaur egg discovery with a palaeontology guide",
          "Search the surface for fossilised bone fragments and ancient shells",
          "Photograph the vast red-and-orange landscape from the cliff edge at sunset",
        ],
        image: "/images/tour-2.jpg",
      },
      {
        day: 2,
        title: "Camel Trek & Nomadic Ger",
        location: "Gobi Steppe",
        description:
          "Mount a two-humped Bactrian camel for a half-day trek across the stone desert, guided by a nomadic herder whose family has worked these routes for generations. Visit their ger for airag, fresh cheese curds, and buuz dumplings. As darkness falls, step outside for a Gobi stargazing experience — zero light pollution, the Milky Way reflected in the silence of the desert.",
        highlights: [
          "Ride a Bactrian camel across the Gobi stone plains for half a day",
          "Visit a nomadic herder's ger and taste airag, dried curd, and fresh mutton soup",
          "Watch the desert sunset from camelback in the vast stone plateau",
          "Stargaze from the Gobi under one of the world's darkest skies",
        ],
        image: "/images/about-5.jpg",
      },
      {
        day: 3,
        title: "Khongoryn Els — The Singing Dunes",
        location: "Khongoryn Els, South Gobi",
        description:
          "Drive to Khongoryn Els, Mongolia's largest sand dune system — a 180-kilometre arc of orange sand mountains up to 300 metres high. Climb the highest crest on foot or by camel, listening for the low resonant hum the dunes emit when wind moves the sand at the right angle. Slide back down and cool off in the cold springs at the dune base.",
        highlights: [
          "Climb to the crest of a 300-metre sand mountain rising from flat desert",
          "Hear the 'singing' hum of the dunes as the wind shifts the sand",
          "Photograph the infinite dune ridges in blue-gold early morning light",
          "Cool off in the cold freshwater spring that runs at the base of the dunes",
        ],
        image: "/images/tour-3.jpg",
      },
      {
        day: 4,
        title: "Yol Valley Ice Canyon",
        location: "Yol Valley, Gurvan Saikhan Mountains",
        description:
          "Drive to the Gurvan Saikhan Mountains — an unexpected oasis of green in the heart of the Gobi. Hike into Yol Valley, a deep gorge whose sheer walls block sunlight, allowing a wall of ice to persist well into summer. Spot Mongolian lammergeier vultures riding thermals above the cliff walls, and look for ibex on the rocky slopes above.",
        highlights: [
          "Hike into Yol Valley's deep gorge to find a wall of ice in the middle of the desert",
          "Spot lammergeier bearded vultures soaring on thermals above the canyon walls",
          "Search the rocky slopes for Mongolian ibex and Argali wild sheep",
          "Picnic in the unexpected greenery of the Gurvan Saikhan Mountain oasis",
        ],
        image: "/images/dest-11.jpg",
      },
      {
        day: 5,
        title: "Ongi Monastery Ruins & Return",
        location: "Ongi River, Central Gobi",
        description:
          "Stop at the ruins of Ongi Monastery on the journey back north — once the largest monastery complex in Mongolia with 27 temples and 1,000 monks, destroyed in the Soviet purges of 1937. The remaining stone foundations and reconstructed temples overlook the Ongi River, and the silence of the site carries a profound weight of history.",
        highlights: [
          "Walk the ruined foundations of what was once Mongolia's greatest monastic complex",
          "Visit the small reconstructed temple where monks have begun to return",
          "Photograph the Ongi River valley where saxaul trees and wild horses gather",
          "Reflect on the 1937 Soviet purges that destroyed Mongolia's Buddhist heritage",
        ],
        image: "/images/about-6.jpg",
      },
    ],
    thingsToDo: [
      {
        title: "Bactrian Camel Trek",
        description:
          "Ride two-humped Bactrian camels across the Gobi stone desert, guided by nomadic herders who have worked these ancient routes for generations.",
        iconName: "MapPin",
      },
      {
        title: "Flaming Cliffs Fossil Hunt",
        description:
          "Walk the Bayanzag cliffs where the world's first dinosaur eggs were discovered in 1923, searching the surface for fossilised bone and shell.",
        iconName: "Landmark",
      },
      {
        title: "Climbing Khongoryn Els Dunes",
        description:
          "Scale the Singing Dunes — 300-metre sand mountains that emit a haunting hum when the wind shifts — for panoramic views of the endless Gobi.",
        iconName: "Mountain",
      },
      {
        title: "Nomadic Ger Homestay",
        description:
          "Sleep in a Gobi herder's ger, sharing meals, stories, and the extraordinary silence of one of the world's least populated landscapes.",
        iconName: "Heart",
      },
      {
        title: "Desert Stargazing",
        description:
          "Lie back on the gravel plain under the Gobi's zero-light-pollution sky — the Milky Way is so dense it casts a faint shadow on clear nights.",
        iconName: "Lightbulb",
      },
      {
        title: "Yol Valley Ice Hike",
        description:
          "Hike into the deep ice canyon of Yol Valley in the Gurvan Saikhan Mountains, where ice persists in the gorge even through the height of summer.",
        iconName: "Waves",
      },
    ],
    travelTips: [
      "A 4WD vehicle with a driver-guide is essential — there are no paved roads in the Gobi and distances between sites are huge; plan a full multi-day circuit.",
      "May–June and September–October are best — summer (July–August) can exceed 40 °C and driving across stone plains becomes physically gruelling.",
      "Carry significantly more water than you think you need — desert dehydration happens faster than expected and water sources are scarce.",
      "Book ger camp accommodation in advance for the peak season; basic shared facilities are the norm, and that is part of the authentic experience.",
      "Bring layers for the night — even in summer, Gobi nights drop dramatically in temperature (down to single digits) after the intense daytime heat.",
      "Respect fossil sites — removing any fossil material from Bayanzag or the Gobi is illegal and culturally disrespectful to Mongolian heritage.",
      "Bring offline maps and a satellite communicator — mobile network coverage is essentially zero across most of the Gobi.",
    ],
    gallery: [
      "/images/tour-2.jpg",
      "/images/about-5.jpg",
      "/images/tour-3.jpg",
      "/images/dest-11.jpg",
      "/images/about-6.jpg",
    ],
  },

  "khovsgol-lake": {
    slug: "khovsgol-lake",
    name: "Khövsgöl Lake",
    country: "Mongolia",
    region: "East Asia",
    tagline: "Mongolia's Blue Pearl — horseback riding, kayaking, and reindeer herder encounters",
    heroImage: "/images/dest-11.jpg",
    overview:
      "Lake Khövsgöl is Mongolia's most beloved natural wonder — a deep, impossibly blue alpine lake in the country's far north, cradled by pine-forested mountains and fed by more than 90 rivers. Nicknamed the 'Blue Pearl of Mongolia,' it holds over 70% of the country's freshwater and about 1% of the world's fresh surface water. Its water is so pure that it is drunk directly from the shore, and on still days the reflected sky makes it difficult to tell where the lake ends and the heavens begin.\n\nThe lake sits within the Khövsgöl Nuur National Park, a wilderness of Siberian taiga forest, sub-alpine meadows carpeted with wildflowers in summer, and the high Sayan Mountain border with Russia. Brown bears roam the forest; elk and argali wild sheep graze the treeline; and the endangered Mongolian saiga antelope migrates through the northern steppe in autumn. The national park is one of the last places in the world where you can experience true untamed wilderness without crowds, permanent infrastructure, or a mobile signal.\n\nThe lake's western shores are home to the Tsaatan — the reindeer people — a small community of perhaps 400 individuals who are among the last nomadic reindeer herders on Earth. Living in tepees (urts) in the high taiga forests, they migrate seasonally with their herds, practicing a way of life that has survived from the deep prehistory of Central Asia. Visiting a Tsaatan camp, riding their reindeer, and sitting with a family around their fire is a travel experience of extraordinary rarity and profound human connection.",
    quickFacts: {
      capital: "Mörön (Khövsgöl Province capital, 100 km south of the lake)",
      currency: "Mongolian Tögrög (₮ / MNT)",
      climate: "Subarctic — very cold winters (–30 °C), cool green summers (15–25 °C); snow possible any month",
      bestSeason: "June–August (warm, wildflowers, accessible trails) & February (ice festival, reindeer herders)",
      languages: "Mongolian, Tsaatan (Dukha)",
      timeZone: "HOVT (UTC+7)",
      drivingSide: "Right",
    },
    itinerary: [
      {
        day: 1,
        title: "Arrival at Mörön & Lakeside Ger Camp",
        location: "Mörön & Lake Khövsgöl Shore",
        description:
          "Fly from Ulaanbaatar to Mörön, then drive 100 km through pine forests and river valleys to the lake's southern shore. Arrive at Khatgal village and settle into a ger camp on the lakeside. Walk the shore at sunset, drinking in the extraordinary blue of the lake against the dark forested mountains, then dine on fresh Khövsgöl fish in the camp dining ger.",
        highlights: [
          "Fly into Mörön and drive through Mongolian pine forests to the lake",
          "Arrive at the lakeshore as the evening light turns the water gold and indigo",
          "Stay in a lakeside ger camp with views over the water and forested mountains",
          "Taste fresh taimen, lenok, and Siberian grayling caught in the lake that day",
        ],
        image: "/images/dest-11.jpg",
      },
      {
        day: 2,
        title: "Horseback Ride Along the Western Shore",
        location: "Western Lake Shore",
        description:
          "Mount a Mongolian horse for a full-day ride along Khövsgöl's western shoreline, passing through pine and larch forest, across meadow clearings, and along cliff edges above the brilliant blue water. Stop to swim — the lake is remarkably clear, though cold — and camp for lunch beside a river mouth where grayling leap in the shallows.",
        highlights: [
          "Ride a Mongolian horse along the cliff-top western shoreline above the lake",
          "Swim in the extraordinarily clear, pure waters of the Blue Pearl",
          "Picnic beside a river mouth watching grayling rise to insects",
          "Gallop across open meadows filled with summer wildflowers in the afternoon",
        ],
        image: "/images/tour-7.jpg",
      },
      {
        day: 3,
        title: "Tsaatan Reindeer Herders Visit",
        location: "Northern Taiga, Khövsgöl",
        description:
          "Journey by horse or jeep deep into the taiga forest to visit a Tsaatan family in their camp. These reindeer people — fewer than 400 remain — live in tepees year-round, migrating seasonally with their herds. Feed reindeer from your hand, hear shamanic stories told around the fire, and if the shaman is present, witness a brief spirit-calling ceremony.",
        highlights: [
          "Enter a Tsaatan tepee camp hidden in the ancient taiga forest",
          "Hand-feed reindeer and hear stories of their seasonal migrations",
          "Sit with a Tsaatan family around their fire for tea, dried meat, and conversation",
          "Witness a shamanic drum ceremony if a shaman is present in the camp",
        ],
        image: "/images/about-7.jpg",
      },
      {
        day: 4,
        title: "Kayaking & Lake Wildlife",
        location: "Lake Khövsgöl",
        description:
          "Paddle a kayak across the glass-like morning surface of Khövsgöl, drifting between forested headlands and tiny uninhabited islands. Spot brown bear tracks on the muddy shore, watch Eurasian otters dive from boulders, and look up for Mongolian eagle owls and osprey over the treetops. Afternoon, hike into the national park forest above the lake.",
        highlights: [
          "Kayak across the mirror-still lake surface at dawn when it perfectly reflects the sky",
          "Look for brown bear tracks, Eurasian otters, and osprey along the shoreline",
          "Hike into the Siberian taiga forest above the lake for panoramic views",
          "Photograph the lake's extraordinary blue from a hilltop at sunset",
        ],
        image: "/images/tour-8.jpg",
      },
      {
        day: 5,
        title: "Winter Ice Festival (February) or Forest Trek & Departure",
        location: "Lake Khövsgöl",
        description:
          "In February, experience the Khövsgöl Ice Festival — reindeer racing on the frozen lake, ice sculptures, shamanic ceremonies, and the wild spectacle of the Tsaatan riding their reindeer across the ice. In summer, take a final forest trek to a viewpoint above the lake before returning to Mörön for your onward flight.",
        highlights: [
          "Watch reindeer racing and ice sculpture at the Khövsgöl Ice Festival (February)",
          "See the Tsaatan ride their reindeer across the frozen lake in traditional dress",
          "Hike to a high viewpoint for a final panorama of the entire lake and its mountains",
          "Collect lake water in a bottle — one of the world's cleanest fresh water sources",
        ],
        image: "/images/tour-1.jpg",
      },
    ],
    thingsToDo: [
      {
        title: "Tsaatan Reindeer Herder Visit",
        description:
          "Journey into the deep taiga to meet one of the world's last nomadic reindeer-herding peoples — a community of fewer than 400 living as their ancestors did for millennia.",
        iconName: "Heart",
      },
      {
        title: "Horseback Riding",
        description:
          "Ride Mongolian horses along cliff-top shoreline paths above the Blue Pearl, galloping across wildflower meadows and through ancient pine forests.",
        iconName: "Mountain",
      },
      {
        title: "Kayaking on Khövsgöl",
        description:
          "Paddle across the glassy surface of Mongolia's most pristine lake, exploring forested headlands, hidden bays, and wildlife-rich river mouths.",
        iconName: "Waves",
      },
      {
        title: "Khövsgöl Ice Festival",
        description:
          "Experience reindeer racing, ice sculpture, and shamanic ceremonies on the frozen lake each February in one of Central Asia's most atmospheric winter festivals.",
        iconName: "Globe",
      },
      {
        title: "Wildlife Watching",
        description:
          "Spot brown bears, Eurasian otters, osprey, and elk in one of Mongolia's last great wilderness ecosystems — the Siberian taiga of Khövsgöl National Park.",
        iconName: "Camera",
      },
      {
        title: "Shamanic Ceremony",
        description:
          "Witness a traditional Tsaatan or Mongolian shamanic drum ceremony — an ancient spiritual practice still alive in the forests around Lake Khövsgöl.",
        iconName: "Lightbulb",
      },
    ],
    travelTips: [
      "Fly Mörön–Ulaanbaatar (1 hour) rather than driving the 750 km road, which takes 12+ hours on rough terrain.",
      "The lake road is unpaved and sometimes impassable after rain — travel in a properly equipped 4WD with an experienced driver.",
      "To visit the Tsaatan, book through a registered Mongolian tour operator who works ethically with the community — independent visits can be exploitative.",
      "Bring all your own food and supplies — shops in Khatgal village are very basic; stock up in Mörön before heading to the lake.",
      "The water is clean enough to drink directly from the lake — bring a reusable bottle and fill it, an extraordinary experience.",
      "Pack warm clothes at all times of year — summer nights drop well below 10 °C and storms can arrive without warning from the Sayan Mountains.",
      "Respect the national park rules: no campfires outside designated areas, pack out all waste, and never disturb wildlife or their habitats.",
    ],
    gallery: [
      "/images/dest-11.jpg",
      "/images/tour-7.jpg",
      "/images/about-7.jpg",
      "/images/tour-8.jpg",
      "/images/tour-1.jpg",
    ],
  },

  "jeju-island": {
    slug: "jeju-island",
    name: "Jeju Island",
    country: "South Korea",
    region: "East Asia",
    tagline: "Volcanic landscapes, tangerine farms, coastal trails",
    heroImage: "/images/dest-2.jpg",
    overview:
      "Jeju Island rises from the Korea Strait like a geological theme park — a volcanic wonderland of lava tubes, crater lakes, columnar basalt cliffs, and a dormant shield volcano capped by South Korea's highest peak. Known as the 'Hawaii of Korea,' Jeju draws honeymooners, hikers, and divers to its subtropical shores, but it is the island's raw natural drama and deeply rooted folk culture that truly set it apart from any tropical beach destination.\n\nThe island revolves around Hallasan, the 1,950-meter volcano whose crater lake, Baengnokdam, fills with snow in winter and wildflowers in spring. The Jeju Olle Trail — 425 kilometers of coastal and mountain paths divided into 26 routes — is one of Asia's great long-distance walks, winding past black-lava shorelines, wind-battered rape-flower fields, and villages where haenyeo — Jeju's legendary female free-divers — still plunge to the seabed for abalone and sea urchin without oxygen tanks, a UNESCO-recognized tradition.\n\nJeju's food culture draws on its volcanic soil and surrounding ocean. Tangerines grow in groves so abundant they perfume entire roadsides in autumn. Black pork — raised on the island's mineral-rich pastures — is grilled thick-cut over charcoal at Jeju City's Dongmun Market, while raw abalone porridge and sea-urchin bibimbap connect every meal to the island's maritime soul.",
    quickFacts: {
      capital: "Jeju City",
      currency: "South Korean Won (₩)",
      climate: "Humid subtropical with mild winters and warm, rainy summers",
      bestSeason: "April–June (wildflowers and canola bloom) & September–November (clear skies)",
      languages: "Korean (Jeju dialect)",
      timeZone: "KST (UTC+9)",
      drivingSide: "Right",
    },
    itinerary: [
      {
        day: 1,
        title: "Jeju City & Dongmun Market",
        location: "Jeju City, Jeju Island",
        description:
          "Arrive at Jeju International Airport and head straight to Dongmun Market, the island's largest traditional market, where stalls pile high with fresh tangerines, black-pork skewers, and bowls of raw-abalone porridge. Explore the old town's stone-wall streets before watching the sunset from Yongduam Dragon Head Rock.",
        highlights: [
          "Feast on grilled black pork and abalone porridge at Dongmun Market",
          "Walk Jeju City's old-town stone-wall alleys",
          "Watch sunset at Yongduam Dragon Head Rock formation",
          "Sample hallabong tangerine juice and tangerine chocolate",
        ],
        image: "/images/city-3.jpg",
      },
      {
        day: 2,
        title: "Hallasan Volcano Summit",
        location: "Hallasan National Park, Jeju",
        description:
          "Set out early on the Seongpanak Trail for the 9-kilometer ascent of Hallasan, South Korea's highest peak. The trail climbs through temperate forest, subalpine scrub, and finally bare volcanic rock to the crater rim, where Baengnokdam — the White Deer Lake — shimmers in an ancient caldera.",
        highlights: [
          "Summit South Korea's highest peak at 1,950 meters",
          "Gaze into the Baengnokdam crater lake",
          "Pass through four distinct vegetation zones on the ascent",
          "Celebrate with a hearty bowl of Jeju pheasant noodle soup",
        ],
        image: "/images/explor-4.jpg",
      },
      {
        day: 3,
        title: "Manjanggul Lava Tube & Seongsan Ilchulbong",
        location: "Eastern Jeju",
        description:
          "Descend into the Manjanggul Lava Tube, a 7.4-kilometer UNESCO-listed cavern formed 300,000 years ago, where a 7-meter lava column stands frozen mid-flow. Drive to Seongsan Ilchulbong — the Sunrise Peak — a volcanic tuff cone rising from the ocean, and hike its short, steep trail for views of the crater and the coastline.",
        highlights: [
          "Walk 1 kilometer into Manjanggul's illuminated lava tube",
          "See the world's tallest known lava column",
          "Hike Seongsan Ilchulbong for ocean-and-crater panoramas",
          "Watch haenyeo free-divers surface with their catch nearby",
        ],
        image: "/images/dest-5.jpg",
      },
      {
        day: 4,
        title: "Jeju Olle Trail & Jungmun Coast",
        location: "Southern Jeju",
        description:
          "Walk a section of the Jeju Olle Trail along the southern coast, passing columnar basalt cliffs at Jungmun Daepo, the Cheonjeyeon triple waterfall, and fields of bright-yellow canola flowers in spring. End at Jungmun Beach, where the black volcanic sand meets turquoise surf.",
        highlights: [
          "Hike the Olle Trail along Jungmun's columnar basalt coastline",
          "Visit the three-tiered Cheonjeyeon Waterfall",
          "Swim at Jungmun's striking black-sand beach",
          "Evening seafood barbecue at a beachside restaurant",
        ],
        image: "/images/tour-5.jpg",
      },
      {
        day: 5,
        title: "Tangerine Farm & Departure",
        location: "Western Jeju",
        description:
          "Visit a tangerine orchard for a hands-on picking experience — Jeju produces 99% of South Korea's tangerines — and taste varieties you won't find on the mainland. Stop at the Osulloc Tea Museum, set amid lush green-tea fields, for a matcha latte overlooking the plantation before heading to the airport.",
        highlights: [
          "Pick tangerines at a family-run orchard in the western hills",
          "Taste rare hallabong and cheonhyehyang citrus varieties",
          "Visit Osulloc Tea Museum amid emerald-green tea fields",
          "Final purchase of tangerine cosmetics and black-pork jerky",
        ],
        image: "/images/about-5.jpg",
      },
    ],
    thingsToDo: [
      {
        title: "Hallasan Volcano Hike",
        description:
          "Conquer South Korea's highest peak and peer into the crater lake atop a dormant shield volcano — a full-day trek through four climate zones.",
        iconName: "Mountain",
      },
      {
        title: "Haenyeo Diving Culture",
        description:
          "Watch Jeju's legendary female free-divers surface with abalone and sea urchin, then taste their catch at a shoreside haenyeo restaurant.",
        iconName: "Waves",
      },
      {
        title: "Olle Trail Coastal Walk",
        description:
          "Follow a section of the 425-kilometer trail along black-lava coastlines, through tangerine groves, and past wind-sculpted canola fields.",
        iconName: "MapPin",
      },
      {
        title: "Black Pork BBQ",
        description:
          "Grill thick-cut Jeju black pork over charcoal at Dongmun Market, wrapping each slice in perilla leaf with raw garlic and doenjangjjigae.",
        iconName: "Utensils",
      },
      {
        title: "Lava Tube Exploration",
        description:
          "Walk deep into the Manjanggul UNESCO lava tube, a 300,000-year-old underground cavern with towering lava columns and alien rock formations.",
        iconName: "Landmark",
      },
      {
        title: "Tangerine Orchard Visit",
        description:
          "Pick fresh tangerines from the tree at a family orchard and taste rare island varieties like the bumpy hallabong and fragrant cheonhyehyang.",
        iconName: "Globe",
      },
    ],
    travelTips: [
      "Rent a car — Jeju's attractions are spread across the island and public transport, while available, is infrequent outside Jeju City.",
      "An International Driving Permit is required for foreigners renting vehicles on Jeju.",
      "Start the Hallasan hike before 6 a.m. in summer; park rangers enforce cut-off times and turn back late starters.",
      "Jeju's weather changes rapidly — pack layers and rain gear even on sunny mornings.",
      "Many Jeju restaurants specialize in a single dish; ask locals for their favorite haenyeo restaurant or black-pork spot rather than relying on tourist guides.",
      "Buy tangerine products (chocolate, cosmetics, tea) at the airport duty-free — prices are competitive and packaging is gift-ready.",
      "Jeju is visa-free for many nationalities even when mainland Korea requires a visa — check the latest entry requirements before booking.",
    ],
    gallery: [
      "/images/offer-5.jpg",
      "/images/banner-3.jpg",
      "/images/dest-16.jpg",
      "/images/explor-6.jpg",
      "/images/about-7.jpg",
    ],
  },

"4-day-off-season-hokkaido": {
    slug: "4-day-off-season-hokkaido",
    name: "4-Day Off-Season Hokkaido",
    country: "Japan",
    region: "East Asia",
    tagline: "Discover Japan's natural wonders, volcanic hot springs, and scenic trails over 4 days",
    heroImage: "https://images.unsplash.com/photo-1578271887552-5ac3a72752bc?auto=format&fit=crop&w=600&q=80",
    overview: `Embark on a magnificent 4-day tour of Japan, starting in Hokkaido. This package covers a curated route highlighting key cultural sights, bullet train experiences, local culinary delicacies, and historical landmarks. Perfect for families, first-time visitors, and seasoned travelers seeking a seamless, well-organized itinerary.`,
    quickFacts: {
      currency: "Japanese Yen (¥)",
      climate: "Subtropical to temperate with distinct seasonal changes",
      bestSeason: "March–May (Cherry Blossom) & October–November (Autumn Foliage)",
      languages: "Japanese",
      timeZone: "JST (UTC+9)",
      drivingSide: "Left"
    },
    itinerary: [
      {
        day: 1,
        title: "Sapporo Highlights",
        location: "Sapporo, Hokkaido",
        description: `9:00 AM – 10:00 AM: Odori Park and Sapporo TV TowerBegin at Odori Park, Sapporo’s central green space stretching across the city with seasonal flowerbeds and fountains. Ascend the Sapporo TV Tower for panoramic views over the city, offering a glimpse of the city's unique skyline against the backdrop of Hokkaido’s mountains.
10:30 AM – 12:30 PM: Mount MoiwaTravel to Mount Moiwa, taking the ropeway to the summit for stunning vistas of Sapporo and Ishikari Bay. A popular viewpoint, Mount Moiwa is known for its spectacular outlooks, especially beautiful during fall and winter. The observatory offers a unique panoramic experience in Hokkaido.
1:00 PM – 2:30 PM: Lunch Break
3:00 PM – 5:00 PM: Sapporo Beer MuseumDiscover Hokkaido’s beer history at the Sapporo Beer Museum, housed in a historic red-brick building. Learn about the brewing process and Sapporo’s significance in Japanese beer culture. End with a tasting at the on-site beer hall, featuring popular and unique Sapporo brews.`,
        highlights: ["Odori Park and Sapporo TV TowerBegin at Odori Park, Sapporo\u2019s central green space stretching across the city with seasonal flowerbeds and fountains", "Ascend the Sapporo TV Tower for panoramic views over the city, offering a glimpse of the city's unique skyline against the backdrop of Hokkaido\u2019s mountains", "Mount MoiwaTravel to Mount Moiwa, taking the ropeway to the summit for stunning vistas of Sapporo and Ishikari Bay", "A popular viewpoint, Mount Moiwa is known for its spectacular outlooks, especially beautiful during fall and winter"],
        image: "https://images.unsplash.com/photo-1578271887552-5ac3a72752bc?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 2,
        title: "Day Trip to Otaru",
        location: "Otaru, Hokkaido",
        description: `9:00 AM – 10:00 AM: Sankaku Fish MarketStart with the lively Sankaku Fish Market, known for its fresh seafood offerings, including Hokkaido specialties such as crab and sea urchin. Enjoy the bustling market atmosphere and sample some sashimi or grilled fish from the vendor stalls.
10:30 AM – 12:00 PM: Hiyoriyama LighthouseVisit the Hiyoriyama Lighthouse overlooking the Sea of Japan, offering scenic coastal views. This spot is ideal for photographs, capturing Otaru’s seaside charm. The lighthouse area provides a tranquil atmosphere, perfect for a peaceful stroll.
12:30 PM – 2:00 PM: Sakaimachi Dori Shopping StreetExplore Sakaimachi Dori, a historic shopping street lined with preserved buildings, boutiques, and cafes. Famous for glassware and music boxes, this street is perfect for souvenir shopping and experiencing Otaru’s nostalgic atmosphere.
2:00 PM – 4:00 PM: Unique Accommodation Experience (Optional)Consider a stay in a traditional ryokan or unique Otaru accommodation for an authentic Japanese lodging experience. Many offer on-site hot springs and a taste of Hokkaido’s hospitality, making this a memorable part of your trip.`,
        highlights: ["Sankaku Fish MarketStart with the lively Sankaku Fish Market, known for its fresh seafood offerings, including Hokkaido specialties such as crab and sea urchin", "Enjoy the bustling market atmosphere and sample some sashimi or grilled fish from the vendor stalls", "Hiyoriyama LighthouseVisit the Hiyoriyama Lighthouse overlooking the Sea of Japan, offering scenic coastal views", "This spot is ideal for photographs, capturing Otaru\u2019s seaside charm"],
        image: "https://images.unsplash.com/photo-1578271887552-5ac3a72752bc?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 3,
        title: "Asahikawa and Optional Furano & Biei",
        location: "Asahikawa, Hokkaido",
        description: `9:00 AM – 10:30 AM: Asahikawa Ramen VillageDiscover the local favorite at Asahikawa Ramen Village, dedicated to Hokkaido’s iconic miso-based ramen. With eight ramen shops to choose from, savor the rich, flavorful broth and noodles that have put Asahikawa on the culinary map.
11:00 AM – 12:00 PM: Hokkaido Gokoku ShrineVisit Hokkaido Gokoku Shrine, a tranquil Shinto shrine dedicated to Hokkaido’s ancestors. The grounds are peaceful, with traditional architecture and seasonal foliage, making it an ideal spot for a calm respite.
12:30 PM – 2:00 PM: Heiwa Shopping StreetStroll along Heiwa Shopping Street, Asahikawa’s main shopping avenue. This pedestrian-friendly street features shops, cafes, and galleries offering a taste of local culture and Hokkaido’s artistic scene, perfect for souvenirs and exploring the area.
2:30 PM – 5:30 PM: Furano & Biei Day Trip (Optional)If time allows, take a day trip to Furano and Biei, famed for rolling flower fields in summer and scenic snow-covered landscapes in winter. The Blue Pond and rolling hills offer a refreshing change of pace and breathtaking photo opportunities.`,
        highlights: ["Asahikawa Ramen VillageDiscover the local favorite at Asahikawa Ramen Village, dedicated to Hokkaido\u2019s iconic miso-based ramen", "With eight ramen shops to choose from, savor the rich, flavorful broth and noodles that have put Asahikawa on the culinary map", "Hokkaido Gokoku ShrineVisit Hokkaido Gokoku Shrine, a tranquil Shinto shrine dedicated to Hokkaido\u2019s ancestors", "The grounds are peaceful, with traditional architecture and seasonal foliage, making it an ideal spot for a calm respite"],
        image: "https://images.unsplash.com/photo-1578271887552-5ac3a72752bc?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 4,
        title: "Final Day in Sapporo and Departure",
        location: "Sapporo, Hokkaido",
        description: `9:00 AM – 11:00 AM: Moerenuma ParkDesigned by artist Isamu Noguchi, Moerenuma Park features artistic landscapes and sculptures, combining nature and modern art. Walk through its expansive grounds and appreciate the park’s minimalist beauty, with highlights like the glass pyramid and mountain observatory.
11:30 AM – 1:30 PM: Kuma Chen Onsen HotpotConclude your Hokkaido experience with a visit to Kuma Chen Onsen for a relaxing hotpot meal. This venue offers private hot spring baths paired with Hokkaido’s freshest ingredients in a delightful hotpot, providing a cozy finale to your journey.Afternoon: Departure from AirportComplete your 4-day itinerary by heading back to the airport in time for your departure, wrapping up an unforgettable off-season Hokkaido adventure.`,
        highlights: ["Moerenuma ParkDesigned by artist Isamu Noguchi, Moerenuma Park features artistic landscapes and sculptures, combining nature and modern art", "Walk through its expansive grounds and appreciate the park\u2019s minimalist beauty, with highlights like the glass pyramid and mountain observatory", "Kuma Chen Onsen HotpotConclude your Hokkaido experience with a visit to Kuma Chen Onsen for a relaxing hotpot meal", "This venue offers private hot spring baths paired with Hokkaido\u2019s freshest ingredients in a delightful hotpot, providing a cozy finale to your journey"],
        image: "https://images.unsplash.com/photo-1578271887552-5ac3a72752bc?auto=format&fit=crop&w=600&q=80"
      },
    ],
    thingsToDo: [
      {
        title: "Mount Fuji View",
        description: "Photograph the snow-capped peak of Fuji-san from scenic viewpoints and lake cruises.",
        iconName: "Mountain"
      },
      {
        title: "Alpine Route Crossing",
        description: "Traverse the Tateyama Kurobe Alpine Route through majestic mountains and massive snow walls.",
        iconName: "Footprints"
      },
      {
        title: "Hokkaido Scenic Parks",
        description: "Stroll through artistic layouts at Moerenuma Park or seasonal flower fields in Furano.",
        iconName: "Flower"
      },
      {
        title: "Pirate Ship Cruise",
        description: "Sail across the volcanic Lake Ashi on a replica pirate ship with scenic mountain reflections.",
        iconName: "Ship"
      },
      {
        title: "Hakone Ropeway",
        description: "Ride a scenic cable car over volcanic vents and steaming sulfuric valleys in Owakudani.",
        iconName: "RotateCw"
      },
    ],
    travelTips: ["Regional JR Rail Pass: Consider a regional pass to save significantly on Shinkansen bullet train routes.", "IC Card Setup: Download a mobile IC card (Suica/Pasmo) for seamless local bus and subway tap-ins.", "Carry Cash: Many small shrines, temple entrance counters, and local street stalls do not accept credit cards.", "Etiquette & Tipping: Good service is standard; tipping is not practiced and may cause confusion.", "Footwear Manners: Wear slip-on shoes since you'll take them off frequently at temples and traditional ryokans.", "Pocket Wi-Fi / eSIM: Pre-order a pocket Wi-Fi or eSIM to stay connected with navigation maps during your trip."],
    gallery: ["https://images.unsplash.com/photo-1578271887552-5ac3a72752bc?auto=format&fit=crop&w=600&q=80", "https://images.unsplash.com/photo-1578271887552-5ac3a72752bc?auto=format&fit=crop&w=600&q=80", "https://images.unsplash.com/photo-1578271887552-5ac3a72752bc?auto=format&fit=crop&w=600&q=80", "https://images.unsplash.com/photo-1578271887552-5ac3a72752bc?auto=format&fit=crop&w=600&q=80", "https://images.unsplash.com/photo-1578271887552-5ac3a72752bc?auto=format&fit=crop&w=600&q=80"],
  },
  "best-of-japan-science-culture-nature-technology": {
    slug: "best-of-japan-science-culture-nature-technology",
    name: "Best Of Japan Science, Culture, Nature & Technology",
    country: "Japan",
    region: "East Asia",
    tagline: "A futuristic 6-day exploration of Japan's science, culture, and robotics",
    heroImage: "/images/japan/japan-1.jpg",
    overview: `Embark on a magnificent 6-day tour of Japan, starting in Tokyo. This package covers a curated route highlighting key cultural sights, bullet train experiences, local culinary delicacies, and historical landmarks. Perfect for families, first-time visitors, and seasoned travelers seeking a seamless, well-organized itinerary.`,
    quickFacts: {
      currency: "Japanese Yen (¥)",
      climate: "Subtropical to temperate with distinct seasonal changes",
      bestSeason: "March–May (Cherry Blossom) & October–November (Autumn Foliage)",
      languages: "Japanese",
      timeZone: "JST (UTC+9)",
      drivingSide: "Left"
    },
    itinerary: [
      {
        day: 1,
        title: "Tokyo - HND/ NRT Airport Arrival Transfer/ Tokyo Sightseeing ~Odaiba Statue of Liberty, Rainbow Bridge",
        location: "Tokyo, Kanto",
        description: `Flight: TBA Date: TBA ETA: TBA After disembarking, please follow the signs to the Immigration Collect your bags and Meet our representative Transfer for Lunch at local Restaurant (** if time permits) Proceed for Tokyo sightseeing tour Packed bento Box/ Snacks box (sandwich, juice, water, cookies etc.) Odaiba seaside park - Coastal green space with views of the Rainbow Bridge & city Statue of Liberty (photo stop) Rainbow Bridge (photo stop) Transfer to City hotel - Tokyo Standard Check in time 14:00~15:00 hrs. (Early check in on request) Dinner at Indian Restaurant - Restaurant TBA Packed Dinner for pax arriving late Overnight stay in Tokyo`,
        highlights: ["Flight: TBA Date: TBA ETA: TBA After disembarking, please follow the signs to the Immigration Collect your bags and Meet our representative Transfer for Lunch at local Restaurant (** if time permits) Proceed for Tokyo sightseeing tour Packed bento Box/ Snacks box (sandwich, juice, water, cookies etc", ") Odaiba seaside park - Coastal green space with views of the Rainbow Bridge & city Statue of Liberty (photo stop) Rainbow Bridge (photo stop) Transfer to City hotel - Tokyo Standard Check in time 14:00~15:00 hrs", "(Early check in on request) Dinner at Indian Restaurant - Restaurant TBA Packed Dinner for pax arriving late Overnight stay in Tokyo"],
        image: "/images/japan/japan-1.jpg"
      },
      {
        day: 2,
        title: "Tokyo - Visit To Jaxa And Hd Tokyo City Highlights Tour ~ Jaxa, Tksc, Sensoji, Nakamise, Shibuya Crossing, Shibuya Sky, Hachiko Statue",
        location: "Tokyo, Kanto",
        description: `Breakfast at Hotel Hotel Pick up Today, we wil be visiting JAXA (Japan Aerospace Exploration Agency) Tsukuba Space Center (TKSC) - Be an astronaut for a day at the Tsukuba Space Center At JAXA, we will explore the Exhibition Room, Outside Exhibits, Museum Shop The Space Dome, the actual H-II rocket, museum shop for JAXA goods, Main facilities: 13mΦSpace Chamber, Large Scale Vibration Test Facility, Radio Wave Test Facility, Aerospace Information Reference Center Later, we Stop for Lunch Post lunch, we will be covering Tokyo sightseeing as below Asakusa Kannon Temple - Tokyo's oldest and iconic temple (Sensō-ji Temple) Nakamise Dori Packed bento Box/ Snacks box (sandwich, juice, water, cookies etc.) Evening, visit the Shibuya Sky - A 360° open-air observation deck located on the roof of the Shibuya Scramble Square skyscraper Later, visit the Hachikō Memorial Statue - Popular meeting spot with a bronze statue honouring Hachiko, the famously loyal Akita dog Shibuya Scramble Crossing - the world's busiest pedestrian crossing Dinner at Indian Restaurant - Restaurant TBA Return to Hotel and free time for own activities`,
        highlights: ["Breakfast at Hotel Hotel Pick up Today, we wil be visiting JAXA (Japan Aerospace Exploration Agency) Tsukuba Space Center (TKSC) - Be an astronaut for a day at the Tsukuba Space Center At JAXA, we will explore the Exhibition Room, Outside Exhibits, Museum Shop The Space Dome, the actual H-II rocket, museum shop for JAXA goods, Main facilities: 13m\u03a6Space Chamber, Large Scale Vibration Test Facility, Radio Wave Test Facility, Aerospace Information Reference Center Later, we Stop for Lunch Post lunch, we will be covering Tokyo sightseeing as below Asakusa Kannon Temple - Tokyo's oldest and iconic temple (Sens\u014d-ji Temple) Nakamise Dori Packed bento Box/ Snacks box (sandwich, juice, water, cookies etc", ") Evening, visit the Shibuya Sky - A 360\u00b0 open-air observation deck located on the roof of the Shibuya Scramble Square skyscraper Later, visit the Hachik\u014d Memorial Statue - Popular meeting spot with a bronze statue honouring Hachiko, the famously loyal Akita dog Shibuya Scramble Crossing - the world's busiest pedestrian crossing Dinner at Indian Restaurant - Restaurant TBA Return to Hotel and free time for own activities"],
        image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 3,
        title: "Tokyo - Tokyo Disney Land 1-Day Passport + Private Round Trip Transfers (**No Guide in theme park)",
        location: "Tokyo, Kanto",
        description: `Breakfast at Hotel Hotel Pick up and transfer to Disneyland @0900 Hrs The first Disney theme park outside of the United States Disneyland is made up of seven themed lands and features seasonal decorations & parades Pick up from Disneyland Resort @1900 Hrs Proceed for Dinner at Indian Restaurant - Restaurant TBA Return to Hotel and free time for own activities`,
        highlights: ["Explore local attractions and historical landmarks", "Enjoy local dining and sightseeing options"],
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 4,
        title: "Tokyo - Visit To Miraiken Science Museum And Teamlab Planets ~Miraiken, Asimo, Teamlab, Tokyo Tower",
        location: "Tokyo, Kanto",
        description: `Breakfast at Hotel Hotel Pick up Proceed to the Miraiken Museum (National Museum of Emerging Science) - highly interactive and bilingual science museum includes a robotics section with several robots and androids on display Later, we Stop for Lunch Later, visit the Honda Welcome Plaza to meet ASIMO Robot Honda’s ASIMO robot show (the world's most advanced humanoid robot) Further, visit teamLab Planets, a museum where you walk through water, and a garden where you become one with the flowers It comprises 4 large-scale artwork spaces and 2 gardens created by art collective teamLab Packed bento Box/ Snacks box (sandwich, juice, water, cookies etc.) Tokyo Tower (150m-Observation Deck) (Main Deck Inc; Top Deck supplement charges JPY 2000 per person extra to be paid cash) Dinner at Indian Restaurant - Restaurant TBA Return to Hotel and free time for own activities`,
        highlights: ["Breakfast at Hotel Hotel Pick up Proceed to the Miraiken Museum (National Museum of Emerging Science) - highly interactive and bilingual science museum includes a robotics section with several robots and androids on display Later, we Stop for Lunch Later, visit the Honda Welcome Plaza to meet ASIMO Robot Honda\u2019s ASIMO robot show (the world's most advanced humanoid robot) Further, visit teamLab Planets, a museum where you walk through water, and a garden where you become one with the flowers It comprises 4 large-scale artwork spaces and 2 gardens created by art collective teamLab Packed bento Box/ Snacks box (sandwich, juice, water, cookies etc", ") Tokyo Tower (150m-Observation Deck) (Main Deck Inc; Top Deck supplement charges JPY 2000 per person extra to be paid cash) Dinner at Indian Restaurant - Restaurant TBA Return to Hotel and free time for own activities"],
        image: "/images/japan/japan-1.jpg"
      },
      {
        day: 5,
        title: "Tokyo - Mt Fuji and Hakone Tour by coach/ Odawara to Tokyo Shinkansen ~ 5th Station, Gotemba, Pirate Ship, Ōwakudani, Ropeway",
        location: "Tokyo, Kanto",
        description: `Breakfast at Hotel Pick up from hotel and proceed to Mt Fuji 5th Station Mt. Fuji Fifth Station - Sky Palace (closed from Dec-Mar. In this case, you'll visit the snow resort for snow playing at Mt. Fuji Second Station) Stop for Lunch Gotemba Premium Outlets - shopping and photo spots Hakone Pirate Ship - go cruising from Togendai Port to Moto Hakone Port along Ashinoko Lake Hakone Ropeway cable car and go sightseeing around the Ōwakudani Valley Ōwakudani - an active volcanic valley, Famous for its black eggs Packed bento Box/ Snacks box (sandwich, juice, water, cookies etc.) Tour disbands/ ends at Odawara station. Proceed further to Odawara/ Mishima Station Odawara/ Mishima station to Tokyo Station Shinkansen Bullet Train (approx. 83.9 kms) Pick up from Tokyo station and transfer to Indian restaurant Dinner at Indian Restaurant - Restaurant TBA Collect your bags and complete check in formalities Check in and Overnight stay at hotel in Osaka Return to Hotel and free time for own activities`,
        highlights: ["Breakfast at Hotel Pick up from hotel and proceed to Mt Fuji 5th Station Mt", "Fuji Fifth Station - Sky Palace (closed from Dec-Mar", "In this case, you'll visit the snow resort for snow playing at Mt", "Fuji Second Station) Stop for Lunch Gotemba Premium Outlets - shopping and photo spots Hakone Pirate Ship - go cruising from Togendai Port to Moto Hakone Port along Ashinoko Lake Hakone Ropeway cable car and go sightseeing around the \u014cwakudani Valley \u014cwakudani - an active volcanic valley, Famous for its black eggs Packed bento Box/ Snacks box (sandwich, juice, water, cookies etc"],
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 6,
        title: "Tokyo - Departure Transfer from NRT/HND Airport, Tokyo- TBA Hrs",
        location: "Tokyo, Kanto",
        description: `**Hotel room is available until regular check out time Breakfast at hotel Free time till departure Check out and meet our representative at the lobby Packed bento Box/ Snacks box (sandwich, juice, water, cookies etc.)** If time permits Departure from Tokyo hotel to NRT/ HND airport Flight : TBA Date: TBA ETA: TBA`,
        highlights: ["Hotel room is available until regular check out time Breakfast at hotel Free time till departure Check out and meet our representative at the lobby Packed bento Box/ Snacks box (sandwich, juice, water, cookies etc", ")** If time permits Departure from Tokyo hotel to NRT/ HND airport Flight : TBA Date: TBA ETA: TBA"],
        image: "/images/japan/japan-1.jpg"
      },
    ],
    thingsToDo: [
      {
        title: "Miraiken Science Museum",
        description: "Explore interactive robotics, AI, and futuristic technologies at Japan's national science center.",
        iconName: "Bot"
      },
      {
        title: "teamLab Planets",
        description: "Walk through water and become one with digital flower gardens in this immersive art museum.",
        iconName: "Sparkles"
      },
      {
        title: "JAXA Space Center",
        description: "Go behind the scenes of Japan's aerospace research and see real rocket engines and space modules.",
        iconName: "Plane"
      },
      {
        title: "Shibuya Sky Views",
        description: "Get a 360-degree open-air view of the world's busiest pedestrian crossing from 229 meters high.",
        iconName: "Eye"
      },
      {
        title: "Disneyland Tokyo",
        description: "Spend a magical day at the first Disney theme park built outside the United States.",
        iconName: "Smile"
      },
    ],
    travelTips: ["Regional JR Rail Pass: Consider a regional pass to save significantly on Shinkansen bullet train routes.", "IC Card Setup: Download a mobile IC card (Suica/Pasmo) for seamless local bus and subway tap-ins.", "Carry Cash: Many small shrines, temple entrance counters, and local street stalls do not accept credit cards.", "Etiquette & Tipping: Good service is standard; tipping is not practiced and may cause confusion.", "Footwear Manners: Wear slip-on shoes since you'll take them off frequently at temples and traditional ryokans.", "Pocket Wi-Fi / eSIM: Pre-order a pocket Wi-Fi or eSIM to stay connected with navigation maps during your trip."],
    gallery: ["/images/japan/japan-1.jpg", "/images/japan/japan-1.jpg", "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80", "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80", "/images/japan/japan-1.jpg"],
  },
  "winter-northern-japan-discovery-route": {
    slug: "winter-northern-japan-discovery-route",
    name: "Winter Northern Japan Discovery Route",
    country: "Japan",
    region: "East Asia",
    tagline: "Explore the best of Japan's highlights on this immersive 6-day journey",
    heroImage: "/images/japan/japan-2.jpg",
    overview: `Embark on a magnificent 6-day tour of Japan, starting in Tokyo. This package covers a curated route highlighting key cultural sights, bullet train experiences, local culinary delicacies, and historical landmarks. Perfect for families, first-time visitors, and seasoned travelers seeking a seamless, well-organized itinerary.`,
    quickFacts: {
      currency: "Japanese Yen (¥)",
      climate: "Subtropical to temperate with distinct seasonal changes",
      bestSeason: "March–May (Cherry Blossom) & October–November (Autumn Foliage)",
      languages: "Japanese",
      timeZone: "JST (UTC+9)",
      drivingSide: "Left"
    },
    itinerary: [
      {
        day: 1,
        title: "Tokyo to Sendai",
        location: "Tokyo, Kanto",
        description: `08:00 AM: Depart from Tokyo via Shinkansen to Sendai, the largest city in the Tohoku region.10:30 AM: Arrive in Sendai, transfer to Miyagikyo Distillery for a tour of the famous Nikka Whisky distillery.12:00 PM: Lunch at a local restaurant. 01:30 PM: Visit Sendai Tansu Kumanodo to experience lacquering techniques. Participate in a chopstick lacquering workshop. 04:00 PM: Free time to explore downtown Sendai or rest. 06:00 PM: Dinner at a local restaurant`,
        highlights: ["Depart from Tokyo via Shinkansen to Sendai, the largest city in the Tohoku region", "Arrive in Sendai, transfer to Miyagikyo Distillery for a tour of the famous Nikka Whisky distillery", "Visit Sendai Tansu Kumanodo to experience lacquering techniques", "Participate in a chopstick lacquering workshop"],
        image: "https://images.unsplash.com/photo-1578271887552-5ac3a72752bc?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 2,
        title: "Iwate – Historical and Cultural Immersion",
        location: "Morioka, Iwate",
        description: `09:00 AM: Depart for Iwate's Sekino-ichi, a century-old brewery famous for sake and local beer. 11:00 AM: Visit Chūson-ji Temple, home to the Konjiki-do (Golden Hall), a UNESCO World Heritage site. 01:00 PM: Lunch at a traditional restaurant.02:30 PM: Tour the Nambu ironware foundry and observe craftsmen creating the region’s iconic metalwork. 05:00 PM: Return to the hotel and leisure time. 07:00 PM: Dinner at a local restaurant`,
        highlights: ["Depart for Iwate's Sekino-ichi, a century-old brewery famous for sake and local beer", "Visit Ch\u016bson-ji Temple, home to the Konjiki-do (Golden Hall), a UNESCO World Heritage site", "Tour the Nambu ironware foundry and observe craftsmen creating the region\u2019s iconic metalwork", "Return to the hotel and leisure time"],
        image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 3,
        title: "Kakunodate - \"Little Kyoto of Michinoku\"",
        location: "Kyoto, Kansai",
        description: `09:00 AM: Depart for Kakunodate, a historic samurai town.11:00 AM: Explore the samurai residences of Kakunodate, known for their preserved architecture from the Edo period.12:30 PM: Lunch at a local restaurant featuring regional cuisine.02:00 PM: Continue to Cherry Blossom Road or enjoy the winter atmosphere with snow-covered streets and houses.04:00 PM: Free time to stroll around and shop for local handicrafts.06:00 PM: Return to the hotel for dinner.`,
        highlights: ["Depart for Kakunodate, a historic samurai town", "Explore the samurai residences of Kakunodate, known for their preserved architecture from the Edo period", "Continue to Cherry Blossom Road or enjoy the winter atmosphere with snow-covered streets and houses", "Free time to stroll around and shop for local handicrafts"],
        image: "/images/japan/japan-2.jpg"
      },
      {
        day: 4,
        title: "Aomori – Nebuta Festival Experience",
        location: "Aomori, Tohoku",
        description: `09:00 AM: Visit Nebuta Museum WaRasse in Aomori to learn about the Nebuta Festival's cultural significance. 11:30 AM: Participate in a hands-on workshop creating lanterns from neputa paintings. 01:00 PM: Lunch at a local seafood restaurant. 02:30 PM: Free time to explore Aomori City and its scenic waterfront. 05:00 PM: Return to the hotel for a relaxing evening and dinner.`,
        highlights: ["Visit Nebuta Museum WaRasse in Aomori to learn about the Nebuta Festival's cultural significance", "Participate in a hands-on workshop creating lanterns from neputa paintings", "Free time to explore Aomori City and its scenic waterfront", "Return to the hotel for a relaxing evening and dinner"],
        image: "https://images.unsplash.com/photo-1578271887552-5ac3a72752bc?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 5,
        title: "Aomori – Tsurunomai Bridge and Shirakami Sanchi",
        location: "Aomori, Tohoku",
        description: `09:00 AM: Head to Tsurunomai Bridge, Japan’s longest triple-arch wooden bridge. Enjoy the serene winter landscape (roads may be closed based on the season). 11:00 AM: Travel to Shirakami-Sanchi Visitor Center to learn about Japan’s natural heritage and its preserved beech forest ecosystem. 01:00 PM: Lunch break at a local restaurant. 02:30 PM: Explore Shirakami Sanchi with a short hike (if open to visitors based on season). 05:00 PM: Return to the hotel for dinner and rest.`,
        highlights: ["Head to Tsurunomai Bridge, Japan\u2019s longest triple-arch wooden bridge", "Enjoy the serene winter landscape (roads may be closed based on the season)", "Travel to Shirakami-Sanchi Visitor Center to learn about Japan\u2019s natural heritage and its preserved beech forest ecosystem", "Explore Shirakami Sanchi with a short hike (if open to visitors based on season)"],
        image: "/images/japan/japan-2.jpg"
      },
      {
        day: 6,
        title: "Hirosaki Castle and Takayama Inari Shrine",
        location: "Japan",
        description: `09:00 AM: Visit Hirosaki Castle, a rare example of an Edo-period castle with the stunning winter landscape. 11:30 AM: Explore the Tachineputa Museum to see the massive floats used in summer festivals. 01:00 PM: Lunch at a local restaurant. 02:30 PM: Conclude the tour with a visit to Takayama Inari Shrine, known for its hundreds of red torii gates creating a mystical atmosphere. 04:00 PM: Depart for Shin-Aomori Station to take the Shinkansen back to Tokyo. 07:00 PM: Arrive at Tokyo Station and conclude the tour.`,
        highlights: ["Visit Hirosaki Castle, a rare example of an Edo-period castle with the stunning winter landscape", "Explore the Tachineputa Museum to see the massive floats used in summer festivals", "Conclude the tour with a visit to Takayama Inari Shrine, known for its hundreds of red torii gates creating a mystical atmosphere", "Depart for Shin-Aomori Station to take the Shinkansen back to Tokyo"],
        image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80"
      },
    ],
    thingsToDo: [
      {
        title: "Shinkansen Bullet Train",
        description: "Experience Japan's high-speed train, linking key cities with incredible punctuality and comfort.",
        iconName: "Train"
      },
      {
        title: "Traditional Tea Ceremony",
        description: "Immerse yourself in the Zen practice of preparing and sipping ceremonial matcha in a tatami room.",
        iconName: "BookOpen"
      },
      {
        title: "Sushi & Kaiseki Cuisine",
        description: "Indulge in seasonal culinary masterpieces, from street food stalls to multi-course kaiseki banquets.",
        iconName: "Utensils"
      },
      {
        title: "Temple & Shrine Visits",
        description: "Discover centuries of spiritual heritage at magnificent Shinto shrines and Buddhist temples.",
        iconName: "Landmark"
      },
      {
        title: "Onsen Hot Springs",
        description: "Relax and unwind in volcanic, mineral-rich hot springs with beautiful scenic views.",
        iconName: "Waves"
      },
    ],
    travelTips: ["Regional JR Rail Pass: Consider a regional pass to save significantly on Shinkansen bullet train routes.", "IC Card Setup: Download a mobile IC card (Suica/Pasmo) for seamless local bus and subway tap-ins.", "Carry Cash: Many small shrines, temple entrance counters, and local street stalls do not accept credit cards.", "Etiquette & Tipping: Good service is standard; tipping is not practiced and may cause confusion.", "Footwear Manners: Wear slip-on shoes since you'll take them off frequently at temples and traditional ryokans.", "Pocket Wi-Fi / eSIM: Pre-order a pocket Wi-Fi or eSIM to stay connected with navigation maps during your trip."],
    gallery: ["/images/japan/japan-2.jpg", "https://images.unsplash.com/photo-1578271887552-5ac3a72752bc?auto=format&fit=crop&w=600&q=80", "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80", "/images/japan/japan-2.jpg", "https://images.unsplash.com/photo-1578271887552-5ac3a72752bc?auto=format&fit=crop&w=600&q=80"],
  },
  "golden-route-japan": {
    slug: "golden-route-japan",
    name: "Golden Route, Japan",
    country: "Japan",
    region: "East Asia",
    tagline: "Explore the best of Japan's highlights on this immersive 7-day journey",
    heroImage: "/images/japan/japan-3.jpg",
    overview: `Embark on a magnificent 7-day tour of Japan, starting in Osaka. This package covers a curated route highlighting key cultural sights, bullet train experiences, local culinary delicacies, and historical landmarks. Perfect for families, first-time visitors, and seasoned travelers seeking a seamless, well-organized itinerary.`,
    quickFacts: {
      currency: "Japanese Yen (¥)",
      climate: "Subtropical to temperate with distinct seasonal changes",
      bestSeason: "March–May (Cherry Blossom) & October–November (Autumn Foliage)",
      languages: "Japanese",
      timeZone: "JST (UTC+9)",
      drivingSide: "Left"
    },
    itinerary: [
      {
        day: 1,
        title: "Osaka",
        location: "Osaka, Kansai",
        description: `Arrival Flight Details: TBAWelcome to JapanProceed for immigrations and Baggage Claim. Collect your bags, Meet local Representative at the AirportPrivate Transfer from KIX airport to City hotel – OsakaOn arrival Check-in at the Pre-Booked Hotel. Complete check in formalitiesEvening at leisure – before dinner some free timeDinner at Indian RestaurantOvernight stay in Osaka`,
        highlights: ["Arrival Flight Details: TBAWelcome to JapanProceed for immigrations and Baggage Claim", "Collect your bags, Meet local Representative at the AirportPrivate Transfer from KIX airport to City hotel \u2013 OsakaOn arrival Check-in at the Pre-Booked Hotel", "Complete check in formalitiesEvening at leisure \u2013 before dinner some free timeDinner at Indian RestaurantOvernight stay in Osaka"],
        image: "https://images.unsplash.com/photo-1590250591827-024505f019f6?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 2,
        title: "Osaka - Kyoto & Nara Tour ~ Arashiyama, Golden Pavillion, Imperial Palace, Tōdaiji Temple, Deer park",
        location: "Kyoto, Kansai",
        description: `01 bag per person not exceeding 23 kgs. will be couriered to Tokyo hotel. Prepare a bag for overnight stay and keep all necessary medicines, prescription etc. in itPick up from Hotel @0900 HrsArashiyama Bamboo Forest, Walk through this serene bamboo grove, a hallmark of Kyoto's natural beautyKinkaku-ji (Golden Pavilion), admire this stunning Zen temple covered in gold leaf, surrounded by a beautiful gardenStop for LunchAfter lunch, we proceed towards NaraVisit Tōdai-ji Temple - the world's largest wooden structure; home to the Great Buddha (*No Entrance)Nara Deer Park - Interact with friendly deer roaming freely in this historic parkAfter completing Nara tour, we shall return to OsakaDinner at Indian restaurantOvernight stay at Hotel in Osaka`,
        highlights: ["01 bag per person not exceeding 23 kgs", "will be couriered to Tokyo hotel", "Prepare a bag for overnight stay and keep all necessary medicines, prescription etc", "in itPick up from Hotel @0900 HrsArashiyama Bamboo Forest, Walk through this serene bamboo grove, a hallmark of Kyoto's natural beautyKinkaku-ji (Golden Pavilion), admire this stunning Zen temple covered in gold leaf, surrounded by a beautiful gardenStop for LunchAfter lunch, we proceed towards NaraVisit T\u014ddai-ji Temple - the world's largest wooden structure; home to the Great Buddha (*No Entrance)Nara Deer Park - Interact with friendly deer roaming freely in this historic parkAfter completing Nara tour, we shall return to OsakaDinner at Indian restaurantOvernight stay at Hotel in Osaka"],
        image: "https://images.unsplash.com/photo-1590250591827-024505f019f6?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 3,
        title: "Osaka/ Hiroshima - Osaka tour ~Osaka Castle, Dotonbori & Shinsaibashi-Suji / Shinkansen Bullet train to Hiroshima",
        location: "Osaka, Kansai",
        description: `Pick up from Hotel @0900 HrsOsaka Castle - the most famous landmarks in JapanStop for LunchDotonbori District (Shinsaibashi-Suji Shopping Street) - hotspot for touristsClick a picture with the iconic Glico Man, shot from under Ebisubashi bridge, a famous Osaka picture spotAfter shopping, drop off to Shin Osaka stationShin Osaka station to Hiroshima station in Bullet Train - ShinkansenUpon reaching Hiroshima, pick up from station & transfer to Indian restaurantDinner at local Indian restaurantReach hotel & complete check in formalitiesOvernight stay at Hotel in Osaka`,
        highlights: ["Explore local attractions and historical landmarks", "Enjoy local dining and sightseeing options"],
        image: "https://images.unsplash.com/photo-1590250591827-024505f019f6?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 4,
        title: "Hiroshima/ Tokyo - Hiroshima and Miyajima Day Tour ~Miyajima, Peace memorial, Bomb Dome / Shinkansen BT to Tokyo",
        location: "Tokyo, Kanto",
        description: `After breakfast, check out from HotelPick up from Hotel and transfer to Hiroshima ferry terminalFerry transfer to Itsukushima ShrineItsukushima Shrine - best known for its "floating" torii gateSee wild deer in MiyajimaReturn to Hiroshima main Island, ferry transferProceed to Hiroshima Peace Memorial MuseumAtomic Bomb Dome (Hiroshima Memorial Park), Children's Peace Monument, Flame of PeaceAfter tour ends, Proceed to Hiroshima StationHiroshima station to Tokyo station Bullet trainPick up from Tokyo Station and transfer to restaurantDinner at local Indian restaurantDrop off to hotel, collect bags and complete check in formalitiesOvernight stay at hotel in Tokyo`,
        highlights: ["Explore local attractions and historical landmarks", "Enjoy local dining and sightseeing options"],
        image: "https://images.unsplash.com/photo-1542640244-7e672d6cef21?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 5,
        title: "Tokyo - Mt Fuji and Hakone Tour by coach ~ Oshino Hakkai, Ōwakudani, Hakone Ropeway, Hakone Ship",
        location: "Tokyo, Kanto",
        description: `Pick up from hotel and Visit Oshino Hakkai Village @0730 HrsOshino Hakkai (Springs of Mt. Fuji), a must-visit tourist spotŌwakudani - an active volcanic valley, Famous for its black eggs (**weather permitting)Stop for Lunch at Indian RestaurantHakone Ropeway cable car and go sightseeing around the Ōwakudani Valley (*weather permitting)Hakone Pirate Ship on Ashinoko Lake (*weather permitting)Dinner at Indian restaurantReturn to Tokyo, Reach hotel, free time for own activitiesOvernight stay in Tokyo`,
        highlights: ["Pick up from hotel and Visit Oshino Hakkai Village @0730 HrsOshino Hakkai (Springs of Mt", "Fuji), a must-visit tourist spot\u014cwakudani - an active volcanic valley, Famous for its black eggs (**weather permitting)Stop for Lunch at Indian RestaurantHakone Ropeway cable car and go sightseeing around the \u014cwakudani Valley (*weather permitting)Hakone Pirate Ship on Ashinoko Lake (*weather permitting)Dinner at Indian restaurantReturn to Tokyo, Reach hotel, free time for own activitiesOvernight stay in Tokyo"],
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 6,
        title: "Tokyo - Tokyo City Tour ~Asakusa (Sensoji), Nakamise, Sumida River, Tokyo Skytree",
        location: "Tokyo, Kanto",
        description: `Pick up from Hotel @0900 HrsAsakusa Kannon Temple (Sensoji ) - Tokyo's oldest and iconic templeStop at Kaminarimon "Thunder Gate". Capture photos of this iconic entrance to Sensō-ji TempleExplore Nakamise Shopping Street. Shop for traditional souvenirs and snacks along this bustling streetStop for LunchSumida River Cruise from AsakusaTokyo Skytree - Tembo deck 350 mReturn to Hotel and free time for own activitiesDinner at Indian restaurantOvernight stay at Hotel in Tokyo`,
        highlights: ["Pick up from Hotel @0900 HrsAsakusa Kannon Temple (Sensoji ) - Tokyo's oldest and iconic templeStop at Kaminarimon \"Thunder Gate\"", "Capture photos of this iconic entrance to Sens\u014d-ji TempleExplore Nakamise Shopping Street", "Shop for traditional souvenirs and snacks along this bustling streetStop for LunchSumida River Cruise from AsakusaTokyo Skytree - Tembo deck 350 mReturn to Hotel and free time for own activitiesDinner at Indian restaurantOvernight stay at Hotel in Tokyo"],
        image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 7,
        title: "Tokyo - Free time till Check out or flight time",
        location: "Tokyo, Kanto",
        description: `Tokyo city hotel to NRT/HND Airport private transferDeparture Flight : TBA`,
        highlights: ["Explore local attractions and historical landmarks", "Enjoy local dining and sightseeing options"],
        image: "/images/japan/japan-3.jpg"
      },
    ],
    thingsToDo: [
      {
        title: "Shinkansen Bullet Train",
        description: "Experience Japan's high-speed train, linking key cities with incredible punctuality and comfort.",
        iconName: "Train"
      },
      {
        title: "Traditional Tea Ceremony",
        description: "Immerse yourself in the Zen practice of preparing and sipping ceremonial matcha in a tatami room.",
        iconName: "BookOpen"
      },
      {
        title: "Sushi & Kaiseki Cuisine",
        description: "Indulge in seasonal culinary masterpieces, from street food stalls to multi-course kaiseki banquets.",
        iconName: "Utensils"
      },
      {
        title: "Temple & Shrine Visits",
        description: "Discover centuries of spiritual heritage at magnificent Shinto shrines and Buddhist temples.",
        iconName: "Landmark"
      },
      {
        title: "Onsen Hot Springs",
        description: "Relax and unwind in volcanic, mineral-rich hot springs with beautiful scenic views.",
        iconName: "Waves"
      },
    ],
    travelTips: ["Regional JR Rail Pass: Consider a regional pass to save significantly on Shinkansen bullet train routes.", "IC Card Setup: Download a mobile IC card (Suica/Pasmo) for seamless local bus and subway tap-ins.", "Carry Cash: Many small shrines, temple entrance counters, and local street stalls do not accept credit cards.", "Etiquette & Tipping: Good service is standard; tipping is not practiced and may cause confusion.", "Footwear Manners: Wear slip-on shoes since you'll take them off frequently at temples and traditional ryokans.", "Pocket Wi-Fi / eSIM: Pre-order a pocket Wi-Fi or eSIM to stay connected with navigation maps during your trip."],
    gallery: ["/images/japan/japan-3.jpg", "https://images.unsplash.com/photo-1590250591827-024505f019f6?auto=format&fit=crop&w=600&q=80", "https://images.unsplash.com/photo-1590250591827-024505f019f6?auto=format&fit=crop&w=600&q=80", "https://images.unsplash.com/photo-1590250591827-024505f019f6?auto=format&fit=crop&w=600&q=80", "https://images.unsplash.com/photo-1542640244-7e672d6cef21?auto=format&fit=crop&w=600&q=80"],
  },
  "best-of-japan-package": {
    slug: "best-of-japan-package",
    name: "Best Of Japan Package",
    country: "Japan",
    region: "East Asia",
    tagline: "Explore the best of Japan's highlights on this immersive 7-day journey",
    heroImage: "/images/japan/japan-4.jpg",
    overview: `Embark on a magnificent 7-day tour of Japan, starting in Tokyo. This package covers a curated route highlighting key cultural sights, bullet train experiences, local culinary delicacies, and historical landmarks. Perfect for families, first-time visitors, and seasoned travelers seeking a seamless, well-organized itinerary.`,
    quickFacts: {
      currency: "Japanese Yen (¥)",
      climate: "Subtropical to temperate with distinct seasonal changes",
      bestSeason: "March–May (Cherry Blossom) & October–November (Autumn Foliage)",
      languages: "Japanese",
      timeZone: "JST (UTC+9)",
      drivingSide: "Left"
    },
    itinerary: [
      {
        day: 1,
        title: "Tokyo",
        location: "Tokyo, Kanto",
        description: `Arrival Flight Details: TBA After disembarking, please follow the signs to the Immigration Collect your bags and Meet our representative Private Transfer to City hotel - Tokyo Complete check in formalities Standard Check in time 14:00~15:00 hrs. (Early check in on request) Dinner - own arrangement (No Transfer/ Pay locally) Overnight stay in Tokyo`,
        highlights: ["Arrival Flight Details: TBA After disembarking, please follow the signs to the Immigration Collect your bags and Meet our representative Private Transfer to City hotel - Tokyo Complete check in formalities Standard Check in time 14:00~15:00 hrs", "(Early check in on request) Dinner - own arrangement (No Transfer/ Pay locally) Overnight stay in Tokyo"],
        image: "/images/japan/japan-4.jpg"
      },
      {
        day: 2,
        title: "Tokyo - Tokyo City Tour ~Asakusa (Sensoji), Nakamise, Sumida River, Imperial Palace, Tokyo Skytree",
        location: "Tokyo, Kanto",
        description: `01 bag per person not exceeding 23 kgs. will be couriered to Osaka hotel. Prepare a bag for overnight stay and keep all necessary medicines, prescription etc. in it Pick up from Hotel @0900 Hrs Asakusa Kannon Temple (Sensoji ) - Tokyo's oldest and iconic temple Nakamise Dori Shopping street Sumida River Cruise Stop for Lunch (Pay locally) Imperial Palace East Garden(Nijubashi Bridge) (** No Stop/ Pass by) Tokyo Skytree - Climb up to the Tembo deck 350 m Dinner - own arrangement (No Transfer/ Pay locally) Overnight stay at Hotel in Tokyo`,
        highlights: ["01 bag per person not exceeding 23 kgs", "will be couriered to Osaka hotel", "Prepare a bag for overnight stay and keep all necessary medicines, prescription etc", "in it Pick up from Hotel @0900 Hrs Asakusa Kannon Temple (Sensoji ) - Tokyo's oldest and iconic temple Nakamise Dori Shopping street Sumida River Cruise Stop for Lunch (Pay locally) Imperial Palace East Garden(Nijubashi Bridge) (** No Stop/ Pass by) Tokyo Skytree - Climb up to the Tembo deck 350 m Dinner - own arrangement (No Transfer/ Pay locally) Overnight stay at Hotel in Tokyo"],
        image: "https://images.unsplash.com/photo-1590250591827-024505f019f6?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 3,
        title: "Tokyo/ Mt. Fuji/ Hiroshima - Mt Fuji & Hakone Tour ~ 5th Stn/Oshino Hakkai, Ōwakudani, Jigokudani, Ropeway, Hakone Ship/ BT to Hiroshima",
        location: "Tokyo, Kanto",
        description: `After breakfast, check out and assemble at the lobby Pick up from hotel and proceed to Mt Fuji 5th Station @0730 Hrs Mt. Fuji Fifth Station - Sky Palace (* Weather permitting) If 5th station is closed, we will be visiting Oshino Hakkai Oshino Hakkai (Springs of Mt. Fuji), a must-visit tourist spot (*weather permitting) Ōwakudani - an active volcanic valley (**weather permitting) Jigokudani - Famous for its black eggs, boiled in the sulphurous waters to give the egg shells a distinctive colour Stop for Lunch Hakone Ropeway cable car and go sightseeing around the Ōwakudani Valley (weather permitting) Hakone Pirate Ship - go cruising from Togendai Port to Moto Hakone Port along Ashinoko Lake (*weather permitting) After tour ends, proceed further to Odawara/ Mishima Station Odawara/ Mishima station to Hiroshima Station Shinkansen Bullet Train Upon arrival at Hiroshima station, pick up from station and transfer to restaurant Dinner at Indian restaurant (Pay locally) After dinner, Reach Hotel, Collect Your bags and complete check in formalities Check in and Overnight stay at hotel in Hiroshima`,
        highlights: ["After breakfast, check out and assemble at the lobby Pick up from hotel and proceed to Mt Fuji 5th Station @0730 Hrs Mt", "Fuji Fifth Station - Sky Palace (* Weather permitting) If 5th station is closed, we will be visiting Oshino Hakkai Oshino Hakkai (Springs of Mt", "Fuji), a must-visit tourist spot (*weather permitting) \u014cwakudani - an active volcanic valley (**weather permitting) Jigokudani - Famous for its black eggs, boiled in the sulphurous waters to give the egg shells a distinctive colour Stop for Lunch Hakone Ropeway cable car and go sightseeing around the \u014cwakudani Valley (weather permitting) Hakone Pirate Ship - go cruising from Togendai Port to Moto Hakone Port along Ashinoko Lake (*weather permitting) After tour ends, proceed further to Odawara/ Mishima Station Odawara/ Mishima station to Hiroshima Station Shinkansen Bullet Train Upon arrival at Hiroshima station, pick up from station and transfer to restaurant Dinner at Indian restaurant (Pay locally) After dinner, Reach Hotel, Collect Your bags and complete check in formalities Check in and Overnight stay at hotel in Hiroshima"],
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 4,
        title: "Hiroshima/ Osaka - Hiroshima & Miyajima Tour ~Torii gate, Bomb Dome, Peace Memorial park/ Shinkansen Train to Osaka",
        location: "Osaka, Kansai",
        description: `After breakfast, check out from Hotel, proceed to Hiroshima & Miyajima Day tour Ferry transfer to Itsukushima Shrine Itsukushima Shrine - best known for its "floating" torii gate See wild deer in Miyajima Return to Hiroshima main Island, ferry transfer Stop for Lunch (Pay locally) Proceed to Hiroshima Peace Memorial Museum Atomic Bomb Dome (Hiroshima Memorial Park) Proceed to Hiroshima Station Hiroshima station to Shin Osaka station Bullet train This super fast bullet train journey takes less than 2 hours each way Pick up from Shin Osaka Station and transfer to Indian Restaurant Dinner - own arrangement (No Transfer/ Pay locally) Reach hotel, complete check in and free time for relaxation Overnight stay at hotel in Osaka`,
        highlights: ["Explore local attractions and historical landmarks", "Enjoy local dining and sightseeing options"],
        image: "https://images.unsplash.com/photo-1590250591827-024505f019f6?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 5,
        title: "Osaka - Kyoto & Nara Tour ~ Arashiyama, Golden Pavillion, Imperial Palace, Tōdaiji, Deer park",
        location: "Kyoto, Kansai",
        description: `Pick up from Hotel @0900 Hrs Arashiyama Bamboo Forest -Japan's most famous bamboo forest. Walk through the Bamboo grooves Kinkaku-ji - Rokuon-ji is a Zen Buddhist temple, the “the Golden Pavilion”, Mirror Pond Kyoto Imperial Palace - the former palace of the Emperor of Japan (Drive pass/ No stop**) Stop for Lunch (Pay locally) After lunch, we proceed towards Nara Visit Tōdai-ji Temple - the world's largest wooden structure; home to the Great Buddha, the largest bronze statue in the world Nara Deer Park - renowned for its free-roaming deer and world famous temples Dinner - own arrangement (No Transfer/ Pay locally) Overnight stay at Hotel in Osaka`,
        highlights: ["Pick up from Hotel @0900 Hrs Arashiyama Bamboo Forest -Japan's most famous bamboo forest", "Walk through the Bamboo grooves Kinkaku-ji - Rokuon-ji is a Zen Buddhist temple, the \u201cthe Golden Pavilion\u201d, Mirror Pond Kyoto Imperial Palace - the former palace of the Emperor of Japan (Drive pass/ No stop**) Stop for Lunch (Pay locally) After lunch, we proceed towards Nara Visit T\u014ddai-ji Temple - the world's largest wooden structure; home to the Great Buddha, the largest bronze statue in the world Nara Deer Park - renowned for its free-roaming deer and world famous temples Dinner - own arrangement (No Transfer/ Pay locally) Overnight stay at Hotel in Osaka"],
        image: "https://images.unsplash.com/photo-1590250591827-024505f019f6?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 6,
        title: "Osaka - Osaka tour ~Osaka Castle, Umeda Sky Building, Dotonbori/ Shinsaibashi",
        location: "Osaka, Kansai",
        description: `Pick up from Hotel @0930 Hrs Osaka Castle - the most famous landmarks in Japan Umeda Sky Building Floating Garden Observatory Stop for Lunch (Pay locally) Dotonbori District (Shinsaibashi-Suji Shopping Street) - hotspot for tourists. Filled with towering neon signs, clubs, bars & restaurants Click a picture with the iconic Glico Man, shot from under Ebisubashi bridge, a famous Osaka picture spot Dinner - own arrangement (No Transfer/ Pay locally) Overnight stay at Hotel in Osaka`,
        highlights: ["Pick up from Hotel @0930 Hrs Osaka Castle - the most famous landmarks in Japan Umeda Sky Building Floating Garden Observatory Stop for Lunch (Pay locally) Dotonbori District (Shinsaibashi-Suji Shopping Street) - hotspot for tourists", "Filled with towering neon signs, clubs, bars & restaurants Click a picture with the iconic Glico Man, shot from under Ebisubashi bridge, a famous Osaka picture spot Dinner - own arrangement (No Transfer/ Pay locally) Overnight stay at Hotel in Osaka"],
        image: "https://images.unsplash.com/photo-1590250591827-024505f019f6?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 7,
        title: "Osaka - Free time till Check out or flight time",
        location: "Osaka, Kansai",
        description: `Osaka city hotel to KIX/ ITM Airport private transfer Departure Flight : TBA`,
        highlights: ["Explore local attractions and historical landmarks", "Enjoy local dining and sightseeing options"],
        image: "https://images.unsplash.com/photo-1590250591827-024505f019f6?auto=format&fit=crop&w=600&q=80"
      },
    ],
    thingsToDo: [
      {
        title: "Shinkansen Bullet Train",
        description: "Experience Japan's high-speed train, linking key cities with incredible punctuality and comfort.",
        iconName: "Train"
      },
      {
        title: "Traditional Tea Ceremony",
        description: "Immerse yourself in the Zen practice of preparing and sipping ceremonial matcha in a tatami room.",
        iconName: "BookOpen"
      },
      {
        title: "Sushi & Kaiseki Cuisine",
        description: "Indulge in seasonal culinary masterpieces, from street food stalls to multi-course kaiseki banquets.",
        iconName: "Utensils"
      },
      {
        title: "Temple & Shrine Visits",
        description: "Discover centuries of spiritual heritage at magnificent Shinto shrines and Buddhist temples.",
        iconName: "Landmark"
      },
      {
        title: "Onsen Hot Springs",
        description: "Relax and unwind in volcanic, mineral-rich hot springs with beautiful scenic views.",
        iconName: "Waves"
      },
    ],
    travelTips: ["Regional JR Rail Pass: Consider a regional pass to save significantly on Shinkansen bullet train routes.", "IC Card Setup: Download a mobile IC card (Suica/Pasmo) for seamless local bus and subway tap-ins.", "Carry Cash: Many small shrines, temple entrance counters, and local street stalls do not accept credit cards.", "Etiquette & Tipping: Good service is standard; tipping is not practiced and may cause confusion.", "Footwear Manners: Wear slip-on shoes since you'll take them off frequently at temples and traditional ryokans.", "Pocket Wi-Fi / eSIM: Pre-order a pocket Wi-Fi or eSIM to stay connected with navigation maps during your trip."],
    gallery: ["/images/japan/japan-4.jpg", "/images/japan/japan-4.jpg", "https://images.unsplash.com/photo-1590250591827-024505f019f6?auto=format&fit=crop&w=600&q=80", "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80", "https://images.unsplash.com/photo-1590250591827-024505f019f6?auto=format&fit=crop&w=600&q=80"],
  },
  "cherry-blossom-golden-route-japan": {
    slug: "cherry-blossom-golden-route-japan",
    name: "Cherry Blossom, Golden Route",
    country: "Japan",
    region: "East Asia",
    tagline: "A breathtaking 8-day seasonal package chasing Japan's cherry blossoms and scenery",
    heroImage: "/images/japan/japan-4.jpg",
    overview: `Embark on a magnificent 8-day tour of Japan, starting in Tokyo. This package covers a curated route highlighting key cultural sights, bullet train experiences, local culinary delicacies, and historical landmarks. Perfect for families, first-time visitors, and seasoned travelers seeking a seamless, well-organized itinerary.`,
    quickFacts: {
      currency: "Japanese Yen (¥)",
      climate: "Subtropical to temperate with distinct seasonal changes",
      bestSeason: "March–May (Cherry Blossom) & October–November (Autumn Foliage)",
      languages: "Japanese",
      timeZone: "JST (UTC+9)",
      drivingSide: "Left"
    },
    itinerary: [
      {
        day: 1,
        title: "Tokyo",
        location: "Tokyo, Kanto",
        description: `Arrival Flight Details: TBAAfter disembarking, please follow the signs to the ImmigrationCollect your bags and Meet our representativeMeet our representative. Pick up from Airport & proceed to Tokyo orientation tourTokyo orientation tour ~Odaiba, Statue of liberty, Rainbow bridgeOdaiba seaside park - Coastal green space with views of the Rainbow Bridge & cityStatue of Liberty (** Drive over/ No Stop)Rainbow Bridge (** View from window/ Photo Stop)Transfer to City hotel - Tokyo/ Complete check in formalitiesDinner at Indian restaurantOvernight Stay in Tokyo`,
        highlights: ["Arrival Flight Details: TBAAfter disembarking, please follow the signs to the ImmigrationCollect your bags and Meet our representativeMeet our representative", "Pick up from Airport & proceed to Tokyo orientation tourTokyo orientation tour ~Odaiba, Statue of liberty, Rainbow bridgeOdaiba seaside park - Coastal green space with views of the Rainbow Bridge & cityStatue of Liberty (** Drive over/ No Stop)Rainbow Bridge (** View from window/ Photo Stop)Transfer to City hotel - Tokyo/ Complete check in formalitiesDinner at Indian restaurantOvernight Stay in Tokyo"],
        image: "/images/japan/japan-4.jpg"
      },
      {
        day: 2,
        title: "Tokyo - Tokyo City Tour ~Asakusa (Sensoji), Nakamise, Sumida River, Imperial Palace, Tokyo Skytree",
        location: "Tokyo, Kanto",
        description: `Pick up from Hotel @0900 HrsAsakusa Kannon Temple (Sensoji ) - Tokyo's oldest and iconic templeNakamise DoriSumida River CruiseStop for LunchImperial Palace East Garden(Nijubashi Bridge) (** No Stop/ Pass by)Tokyo Skytree - Climb up to the Tembo deck 350 m above ground and enjoy the spiralling skywalk 450 m high at the Tembo GalleriaDinner at Indian restaurantOvernight stay at Hotel in Tokyo`,
        highlights: ["Explore local attractions and historical landmarks", "Enjoy local dining and sightseeing options"],
        image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 3,
        title: "Tokyo - Mt Fuji and Hakone Tour by coach ~ 5th Stn/Oshino Hakkai, Ōwakudani, Jigokudani, Hakone Ropeway, Hakone Ship",
        location: "Tokyo, Kanto",
        description: `01 bag per person not exceeding 23 kgs. will be couriered to Osaka hotel. Prepare a bag for overnight stay and keep all necessary medicines, prescription etc. in itPick up from hotel and proceed to Mt Fuji 5th Station @0730 HrsMt. Fuji Fifth Station - Sky Palace (* Weather permitting)If 5th station is closed, we will be visiting Oshino HakkaiOshino Hakkai (Springs of Mt. Fuji), a must-visit tourist spot (*weather permitting)Ōwakudani - an active volcanic valley (**weather permitting)Jigokudani - Famous for its black eggs, boiled in the sulphurous waters to give the egg shells a distinctive colourStop for LunchHakone Ropeway cable car and go sightseeing around the Ōwakudani Valley (weather permitting)Hakone Pirate Ship - go cruising from Togendai Port to Moto Hakone Port along Ashinoko Lake (*weather permitting)Return to TokyoDinner at Indian restaurantOvernight stay in Tokyo`,
        highlights: ["01 bag per person not exceeding 23 kgs", "will be couriered to Osaka hotel", "Prepare a bag for overnight stay and keep all necessary medicines, prescription etc", "in itPick up from hotel and proceed to Mt Fuji 5th Station @0730 HrsMt"],
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 4,
        title: "Tokyo /Hiroshima - Tokyo to Hiroshima Train/ Hiroshima & Miyajima Tour ~Itsukushima, Dome, Peace Memorial, Museum",
        location: "Tokyo, Kanto",
        description: `After breakfast, check out from HotelPick up from Hotel and transfer to Tokyo StationTokyo station to Hiroshima station in Bullet Train - Shinkansen Nozomi/ Hikari/ SakuraThis super fast bullet train journey takes between 230 to 297 min/ covers 894 kmsUpon reaching Hiroshima, pick up and transfer for lunchAfter having lunch, ferry transfer to Itsukushima ShrineItsukushima Shrine - best known for its "floating" torii gateSee wild deer in MiyajimaReturn to Hiroshima main Island, ferry transferProceed to Hiroshima Peace Memorial ParkExplore the Peace memorial park landscapes, Children's Peace MonumentAtomic Bomb Dome (Hiroshima Memorial Park)Dinner at Indian restaurantReach Hotel and complete check in formalitiesOvernight stay at hotel in Hiroshima`,
        highlights: ["Explore local attractions and historical landmarks", "Enjoy local dining and sightseeing options"],
        image: "https://images.unsplash.com/photo-1542640244-7e672d6cef21?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 5,
        title: "Hiroshima/ Osaka - Hiroshima to Osaka Shinkansen Train/ Osaka Tour ~TeamLab Botanical",
        location: "Osaka, Kansai",
        description: `Check out and proceed to Hiroshima stationHiroshima station to Osaka station in Bullet Train - Shinkansen Nozomi/ Hikari/ SakuraThe travel between Hiroshima to Osaka takes about 2 hours and covers 381 kmsReach Osaka and proceed to Komagawa Shopping StreetStop for LunchTeamLab Botanical Garden Osaka, a permanent outdoor exhibition that transforms nature into art through digital technologyDinner at Indian restaurantReach Hotel, Collect Your bags and complete check in formalitiesOvernight stay at hotel in Osaka`,
        highlights: ["Explore local attractions and historical landmarks", "Enjoy local dining and sightseeing options"],
        image: "https://images.unsplash.com/photo-1590250591827-024505f019f6?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 6,
        title: "Osaka - Kyoto & Nara Tour ~ Arashiyama, Golden Pavillion, Tōdaiji, Deer park",
        location: "Kyoto, Kansai",
        description: `Pick up from Hotel @0930 HrsArashiyama Bamboo Forest -Japan's most famous bamboo forest.Walk through the Bamboo groovesKinkaku-ji - Rokuon-ji is a Zen Buddhist temple, the “the Golden Pavilion”, Mirror PondStop for LunchAfter lunch, we proceed towards NaraVisit Tōdai-ji Temple - the world's largest wooden structure; home to the Great Buddha, the largest bronze statue in the worldNara Deer Park - renowned for its free-roaming deer and world famous templesDinner at Indian restaurantReturn to OsakaOvernight stay at Hotel in Osaka`,
        highlights: ["Pick up from Hotel @0930 HrsArashiyama Bamboo Forest -Japan's most famous bamboo forest", "Walk through the Bamboo groovesKinkaku-ji - Rokuon-ji is a Zen Buddhist temple, the \u201cthe Golden Pavilion\u201d, Mirror PondStop for LunchAfter lunch, we proceed towards NaraVisit T\u014ddai-ji Temple - the world's largest wooden structure; home to the Great Buddha, the largest bronze statue in the worldNara Deer Park - renowned for its free-roaming deer and world famous templesDinner at Indian restaurantReturn to OsakaOvernight stay at Hotel in Osaka"],
        image: "https://images.unsplash.com/photo-1590250591827-024505f019f6?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 7,
        title: "Osaka - Osaka Tour ~ Osaka castle, Umeda sky building, Dotonbori, Shinsaibashi",
        location: "Osaka, Kansai",
        description: `Pick up from Hotel @0900 HrsOsaka Castle - the most famous landmarks in JapanUmeda Sky Building - Floating Garden ObservatoryStop for LunchDotonbori District (Shinsaibashi-Suji Shopping Street) - hotspot for tourists. Filled with towering neon signs, clubs, bars & restaurantsClick a picture with the iconic Glico Man, shot from under Ebisubashi bridge, a famous Osaka picture spotDinner at Indian restaurantReturn to hotel, complete check in and free time for relaxationOvernight stay at Hotel in Osaka`,
        highlights: ["Pick up from Hotel @0900 HrsOsaka Castle - the most famous landmarks in JapanUmeda Sky Building - Floating Garden ObservatoryStop for LunchDotonbori District (Shinsaibashi-Suji Shopping Street) - hotspot for tourists", "Filled with towering neon signs, clubs, bars & restaurantsClick a picture with the iconic Glico Man, shot from under Ebisubashi bridge, a famous Osaka picture spotDinner at Indian restaurantReturn to hotel, complete check in and free time for relaxationOvernight stay at Hotel in Osaka"],
        image: "https://images.unsplash.com/photo-1590250591827-024505f019f6?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 8,
        title: "Osaka - Free time till Check out or flight time",
        location: "Osaka, Kansai",
        description: `Osaka city hotel to KIX/ ITM Airport private transferDeparture Flight : TBA`,
        highlights: ["Explore local attractions and historical landmarks", "Enjoy local dining and sightseeing options"],
        image: "https://images.unsplash.com/photo-1590250591827-024505f019f6?auto=format&fit=crop&w=600&q=80"
      },
    ],
    thingsToDo: [
      {
        title: "Shinkansen Bullet Train",
        description: "Experience Japan's high-speed train, linking key cities with incredible punctuality and comfort.",
        iconName: "Train"
      },
      {
        title: "Traditional Tea Ceremony",
        description: "Immerse yourself in the Zen practice of preparing and sipping ceremonial matcha in a tatami room.",
        iconName: "BookOpen"
      },
      {
        title: "Sushi & Kaiseki Cuisine",
        description: "Indulge in seasonal culinary masterpieces, from street food stalls to multi-course kaiseki banquets.",
        iconName: "Utensils"
      },
      {
        title: "Temple & Shrine Visits",
        description: "Discover centuries of spiritual heritage at magnificent Shinto shrines and Buddhist temples.",
        iconName: "Landmark"
      },
      {
        title: "Onsen Hot Springs",
        description: "Relax and unwind in volcanic, mineral-rich hot springs with beautiful scenic views.",
        iconName: "Waves"
      },
    ],
    travelTips: ["Regional JR Rail Pass: Consider a regional pass to save significantly on Shinkansen bullet train routes.", "IC Card Setup: Download a mobile IC card (Suica/Pasmo) for seamless local bus and subway tap-ins.", "Carry Cash: Many small shrines, temple entrance counters, and local street stalls do not accept credit cards.", "Etiquette & Tipping: Good service is standard; tipping is not practiced and may cause confusion.", "Footwear Manners: Wear slip-on shoes since you'll take them off frequently at temples and traditional ryokans.", "Pocket Wi-Fi / eSIM: Pre-order a pocket Wi-Fi or eSIM to stay connected with navigation maps during your trip."],
    gallery: ["/images/japan/japan-4.jpg", "/images/japan/japan-4.jpg", "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80", "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80", "https://images.unsplash.com/photo-1542640244-7e672d6cef21?auto=format&fit=crop&w=600&q=80"],
  },
  "coexistence-of-technology-and-rich-traditions": {
    slug: "coexistence-of-technology-and-rich-traditions",
    name: "Coexistence Of Technology And Rich Traditions",
    country: "Japan",
    region: "East Asia",
    tagline: "A futuristic 8-day exploration of Japan's science, culture, and robotics",
    heroImage: "/images/city-1.jpg",
    overview: `Embark on a magnificent 8-day tour of Japan, starting in Tokyo. This package covers a curated route highlighting key cultural sights, bullet train experiences, local culinary delicacies, and historical landmarks. Perfect for families, first-time visitors, and seasoned travelers seeking a seamless, well-organized itinerary.`,
    quickFacts: {
      currency: "Japanese Yen (¥)",
      climate: "Subtropical to temperate with distinct seasonal changes",
      bestSeason: "March–May (Cherry Blossom) & October–November (Autumn Foliage)",
      languages: "Japanese",
      timeZone: "JST (UTC+9)",
      drivingSide: "Left"
    },
    itinerary: [
      {
        day: 1,
        title: "Tokyo - Arrival Narita NRT / Haneda HND Airport →Tour Orientation Tour ~Odaiba Seaside Park, Shibuya",
        location: "Tokyo, Kanto",
        description: `Flight: TBA Date: TBA ETA: TBAAfter disembarking, please follow the signs to the ImmigrationCollect your bags and Meet our representativeTransfer for Lunch at local Restaurant (** if time permits)Proceed for Tokyo sightseeing tourOdaiba seaside park - Coastal green space with views of the Rainbow Bridge & cityVisit the AQUA City, known for its beautiful views, a large entertainment complex with shopping, restaurants, amusement facilitiesStatue of Liberty (photo stop)Rainbow Bridge (Pass By**)Move to Shibuya, experience a never-before-seen panoramic view of ShibuyaEvening, visit the Shibuya Sky - A 360° open-air observation deck located on the roof of the Shibuya Scramble Square skyscraperShibuya Scramble Crossing - the world's busiest pedestrian crossing (* Picture stop/ 05 min)Click a picture with The Hachiko Statue, honouring the most loyal dog in Japan (* Picture stop/ 05 min)Watch the 3D billboard of Panda, just around the corner from Shibuya Crossing (* Picture stop/05 min)Transfer to City hotel – TokyoStandard Check in time 14:00~15:00 hrs. (Early check in on request)Dinner at preferred Restaurant - Restaurant TBAOvernight stay in Tokyo`,
        highlights: ["Flight: TBA Date: TBA ETA: TBAAfter disembarking, please follow the signs to the ImmigrationCollect your bags and Meet our representativeTransfer for Lunch at local Restaurant (** if time permits)Proceed for Tokyo sightseeing tourOdaiba seaside park - Coastal green space with views of the Rainbow Bridge & cityVisit the AQUA City, known for its beautiful views, a large entertainment complex with shopping, restaurants, amusement facilitiesStatue of Liberty (photo stop)Rainbow Bridge (Pass By**)Move to Shibuya, experience a never-before-seen panoramic view of ShibuyaEvening, visit the Shibuya Sky - A 360\u00b0 open-air observation deck located on the roof of the Shibuya Scramble Square skyscraperShibuya Scramble Crossing - the world's busiest pedestrian crossing (* Picture stop/ 05 min)Click a picture with The Hachiko Statue, honouring the most loyal dog in Japan (* Picture stop/ 05 min)Watch the 3D billboard of Panda, just around the corner from Shibuya Crossing (* Picture stop/05 min)Transfer to City hotel \u2013 TokyoStandard Check in time 14:00~15:00 hrs", "(Early check in on request)Dinner at preferred Restaurant - Restaurant TBAOvernight stay in Tokyo"],
        image: "/images/city-1.jpg"
      },
      {
        day: 2,
        title: "Tokyo - Industrial Visits (Nissan Motors or Kao Tochigi Plant)/ Miraiken Museum, ASIMO robot show",
        location: "Tokyo, Kanto",
        description: `Breakfast at hotelProceed to the Nissan Motor Tochigi Plant - Located in Kawachi in Tochigi Prefecture, Nissan's Tochigi Plant boasts a long history of producing the company's most prestigious vehiclesOrKao Tochigi Plant, a wide variety of businesses including commercial and home-use detergents, toiletry products, cosmetics and beveragesThis industrial visit will include Business basic, Environment, Production, Quality controlThis tour will be interviewed with a tour guide; interactive sessionLater, we Stop for LunchProceed to the Miraiken Museum (National Museum of Emerging Science) - highly interactive and bilingual science museum includes a robotics section with several robots and androids on displayLater, visit the Honda Welcome Plaza to meet ASIMO - Honda's human-scale robot ASIMODinner at preferred Restaurant - Restaurant TBAAfter Dinner, transfer to hotel @2000 HrsCheck in and Overnight stay at hotel in Tokyo`,
        highlights: ["Explore local attractions and historical landmarks", "Enjoy local dining and sightseeing options"],
        image: "/images/city-1.jpg"
      },
      {
        day: 3,
        title: "Tokyo/Mt Fuji/ Nagoya - Mt Fuji and Hakone Tour by coach/ Hakone tour ~5th Stn., Ropeway, Ōwakudani, Lake ship/ Move to Nagoya",
        location: "Tokyo, Kanto",
        description: `After checking out, Pick up from hotel and proceed to Mt Fuji 5th Station @0900 HrsMt. Fuji Fifth Station - Sky Palace (closed from Dec-Mar. In this case, you'll visit the snow resort for snow playing at Mt. Fuji Second Station)Stop for Lunch at local restaurantHakone Ropeway cable car and go sightseeing around the Ōwakudani ValleyŌwakudani - an active volcanic valleyJigokudani - Famous for its black eggs, which are boiled in the sulphurous waters to give the egg shells a distinctive colour“Kuro-tamago (black egg)”, which is said to increase your life by seven years if you eat one, is a specialty item that can only be purchased here.Hakone Pirate Ship - go cruising from Togendai Port to Moto Hakone Port along Ashinoko LakeProceed to NagoyaDinner at preferred Restaurant - Restaurant TBAAfter Dinner, transfer to hotel @2000 HrsCheck in and Overnight stay at hotel in Nagoya`,
        highlights: ["After checking out, Pick up from hotel and proceed to Mt Fuji 5th Station @0900 HrsMt", "Fuji Fifth Station - Sky Palace (closed from Dec-Mar", "In this case, you'll visit the snow resort for snow playing at Mt", "Fuji Second Station)Stop for Lunch at local restaurantHakone Ropeway cable car and go sightseeing around the \u014cwakudani Valley\u014cwakudani - an active volcanic valleyJigokudani - Famous for its black eggs, which are boiled in the sulphurous waters to give the egg shells a distinctive colour\u201cKuro-tamago (black egg)\u201d, which is said to increase your life by seven years if you eat one, is a specialty item that can only be purchased here"],
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 4,
        title: "Nagoya - Nagoya ~ Toyota Museum or Railway Park, Nagoya Castle",
        location: "Nagoya, Chubu",
        description: `After breakfast, proceed to Nagoya industrial sightseeing tourReach Nagoya, Toyota Automobile Museum [** Advance reservation required/ subject to availability]SCMaglev and Railway Park [** Admission fee included/ simulators cost excluded]Stop for Lunch at local restaurantNagoya Castle - one of the largest castles in the world!Dinner at preferred Restaurant - Restaurant TBAAfter Dinner, transfer to hotel @2000 HrsReach hotel and complete check in formalitiesOvernight stay in Nagoya`,
        highlights: ["Explore local attractions and historical landmarks", "Enjoy local dining and sightseeing options"],
        image: "https://images.unsplash.com/photo-1571479539343-4cc06579a099?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 5,
        title: "Nagoya/ Osaka - Nagoya to Osaka/ Enroute, Kyoto City Tour ~Nijo Castle, Tea ceremony, Ninja Experience",
        location: "Kyoto, Kansai",
        description: `After Breakfast, check out and proceed to KyotoPick up from Nagoya Hotel @1000 HrsThis journey takes about 2 hours to cover 132 kmsReach Kyoto and visit Nijo CastleNijō Castle, best-known castle due to its historical importance and UNESCO World Heritage statusStop for Lunch at local restaurantExperience Traditional Tea CeremonyNinja Experience in Osaka for Kids and Families - Experience Dressing up like a ninja Taking the ninja challenge similar to an escape room activityBecome a ninja for a day on this 1 hour ninja workshop and costume rental experience in Osaka. Receive a lesson on ninja fighting techniques, weaponry, and meditation from a professional instructorDinner at preferred Restaurant - Restaurant TBAReach hotel and complete check in formalitiesOvernight stay at Hotel in Osaka`,
        highlights: ["After Breakfast, check out and proceed to KyotoPick up from Nagoya Hotel @1000 HrsThis journey takes about 2 hours to cover 132 kmsReach Kyoto and visit Nijo CastleNij\u014d Castle, best-known castle due to its historical importance and UNESCO World Heritage statusStop for Lunch at local restaurantExperience Traditional Tea CeremonyNinja Experience in Osaka for Kids and Families - Experience Dressing up like a ninja Taking the ninja challenge similar to an escape room activityBecome a ninja for a day on this 1 hour ninja workshop and costume rental experience in Osaka", "Receive a lesson on ninja fighting techniques, weaponry, and meditation from a professional instructorDinner at preferred Restaurant - Restaurant TBAReach hotel and complete check in formalitiesOvernight stay at Hotel in Osaka"],
        image: "https://images.unsplash.com/photo-1590250591827-024505f019f6?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 6,
        title: "Osaka - Osaka/ Awaji Island ~ Shikoku University & Kamikasu Zero Waste Center",
        location: "Osaka, Kansai",
        description: `After breakfast, we shall proceed to the Awaji IslandWe will be visiting the Faculty of Business Management (Business & Communication)Shikoku (Tokushima) University, founded in 1925, is an institution of higher education offering undergraduate and graduate coursesInteractive/ Discussion session, Discuss about work culture differences, Economic development, Environment Sustainable development, Future Business & Economic relations between India and JapanOther Sessions/ Activities (** Requires preapproval/ permission): orientation & Career counselling session, University Tour, Attend live classes, Exchange meeting with Japanese studentsLunch at local restaurant inside the UniversityFurther, we will be visiting Kamikasu Zero Waste CenterJapan's first "zero waste" declaration in 2003Zero waste in Kamikatsu = a society that focuses on not generating waste, instead of how to treat wasteReturn to OsakaDinner at preferred Restaurant - Restaurant TBAOvernight stay at hotel in Osaka`,
        highlights: ["Explore local attractions and historical landmarks", "Enjoy local dining and sightseeing options"],
        image: "https://images.unsplash.com/photo-1590250591827-024505f019f6?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 7,
        title: "Osaka - Osaka City Tour ~Osaka Castle, Nishinomaru, Cup noodles, Dotonbori (Glico man)",
        location: "Osaka, Kansai",
        description: `After breakfast, proceed for Osaka city tour @1030 HrsOsaka Castle - the most famous landmarks in Japan (**Photo stop/ No Entrance)Nishinomaru Garden, an open-space garden with spectacular views of Cherry BlossomStop for Lunch at local restaurantCup Noodles Museum Osaka IkedaDotonbori District - hotspot for tourists. Filled with towering neon signs, clubs, bars & restaurantsClick a picture with the iconic Glico Man, shot from under Ebisubashi bridge, a famous Osaka picture spotDinner at local Indian restaurant @1900 HrsReach hotel @2030 HrsOvernight stay at Hotel in Osaka`,
        highlights: ["After breakfast, proceed for Osaka city tour @1030 HrsOsaka Castle - the most famous landmarks in Japan (**Photo stop/ No Entrance)Nishinomaru Garden, an open-space garden with spectacular views of Cherry BlossomStop for Lunch at local restaurantCup Noodles Museum Osaka IkedaDotonbori District - hotspot for tourists", "Filled with towering neon signs, clubs, bars & restaurantsClick a picture with the iconic Glico Man, shot from under Ebisubashi bridge, a famous Osaka picture spotDinner at local Indian restaurant @1900 HrsReach hotel @2030 HrsOvernight stay at Hotel in Osaka"],
        image: "https://images.unsplash.com/photo-1590250591827-024505f019f6?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 8,
        title: "Osaka - Free time till Check out or flight time",
        location: "Osaka, Kansai",
        description: `KIX airport, a modern engineering marvel, built entirely as an artificial islandOsaka city hotel to KIX/ ITM Airport private transferFlight: TBA`,
        highlights: ["Explore local attractions and historical landmarks", "Enjoy local dining and sightseeing options"],
        image: "https://images.unsplash.com/photo-1590250591827-024505f019f6?auto=format&fit=crop&w=600&q=80"
      },
    ],
    thingsToDo: [
      {
        title: "Miraiken Science Museum",
        description: "Explore interactive robotics, AI, and futuristic technologies at Japan's national science center.",
        iconName: "Bot"
      },
      {
        title: "teamLab Planets",
        description: "Walk through water and become one with digital flower gardens in this immersive art museum.",
        iconName: "Sparkles"
      },
      {
        title: "JAXA Space Center",
        description: "Go behind the scenes of Japan's aerospace research and see real rocket engines and space modules.",
        iconName: "Plane"
      },
      {
        title: "Shibuya Sky Views",
        description: "Get a 360-degree open-air view of the world's busiest pedestrian crossing from 229 meters high.",
        iconName: "Eye"
      },
      {
        title: "Disneyland Tokyo",
        description: "Spend a magical day at the first Disney theme park built outside the United States.",
        iconName: "Smile"
      },
    ],
    travelTips: ["Regional JR Rail Pass: Consider a regional pass to save significantly on Shinkansen bullet train routes.", "IC Card Setup: Download a mobile IC card (Suica/Pasmo) for seamless local bus and subway tap-ins.", "Carry Cash: Many small shrines, temple entrance counters, and local street stalls do not accept credit cards.", "Etiquette & Tipping: Good service is standard; tipping is not practiced and may cause confusion.", "Footwear Manners: Wear slip-on shoes since you'll take them off frequently at temples and traditional ryokans.", "Pocket Wi-Fi / eSIM: Pre-order a pocket Wi-Fi or eSIM to stay connected with navigation maps during your trip."],
    gallery: ["/images/city-1.jpg", "/images/city-1.jpg", "/images/city-1.jpg", "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80", "https://images.unsplash.com/photo-1571479539343-4cc06579a099?auto=format&fit=crop&w=600&q=80"],
  },
  "enthralling-japan-package": {
    slug: "enthralling-japan-package",
    name: "Enthralling Japan Package",
    country: "Japan",
    region: "East Asia",
    tagline: "Explore the best of Japan's highlights on this immersive 8-day journey",
    heroImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    overview: `Embark on a magnificent 8-day tour of Japan, starting in Tokyo. This package covers a curated route highlighting key cultural sights, bullet train experiences, local culinary delicacies, and historical landmarks. Perfect for families, first-time visitors, and seasoned travelers seeking a seamless, well-organized itinerary.`,
    quickFacts: {
      currency: "Japanese Yen (¥)",
      climate: "Subtropical to temperate with distinct seasonal changes",
      bestSeason: "March–May (Cherry Blossom) & October–November (Autumn Foliage)",
      languages: "Japanese",
      timeZone: "JST (UTC+9)",
      drivingSide: "Left"
    },
    itinerary: [
      {
        day: 1,
        title: "Osaka",
        location: "Osaka, Kansai",
        description: `Arrival Flight Details: TBAAfter disembarking, please follow the signs to the ImmigrationCollect your bags and Meet our representativePrivate Transfer from KIX/ITM airport to City hotel - OsakaComplete check in formalitiesStandard Check in time 14:00~15:00 hrs. (Early check in on request)Free time for leisure/ relaxationWelcome Dinner at local Indian restaurantOvernight Stay in Osaka`,
        highlights: ["Arrival Flight Details: TBAAfter disembarking, please follow the signs to the ImmigrationCollect your bags and Meet our representativePrivate Transfer from KIX/ITM airport to City hotel - OsakaComplete check in formalitiesStandard Check in time 14:00~15:00 hrs", "(Early check in on request)Free time for leisure/ relaxationWelcome Dinner at local Indian restaurantOvernight Stay in Osaka"],
        image: "https://images.unsplash.com/photo-1590250591827-024505f019f6?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 2,
        title: "Osaka - Osaka City tour ~Osaka Castle, Nishinomaru, Dotonbori/ Shinsaibashi shopping street",
        location: "Osaka, Kansai",
        description: `Breakfast at HotelPick up from Hotel @0900 HrsOsaka Castle - the most famous landmarks in Japan (**Photo stop/ No Entrance)Nishinomaru Garden, an open-space garden with spectacular views of Cherry BlossomStop for LunchDotonbori District - hotspot for tourists. Filled with towering neon signs, clubs, bars & restaurantsClick a picture with the iconic Glico Man, shot from under Ebisubashi bridge, a famous picture pointEnjoy the rest of the time shopping or relaxingDinner at Indian restaurantOvernight Stay in Osaka`,
        highlights: ["Breakfast at HotelPick up from Hotel @0900 HrsOsaka Castle - the most famous landmarks in Japan (**Photo stop/ No Entrance)Nishinomaru Garden, an open-space garden with spectacular views of Cherry BlossomStop for LunchDotonbori District - hotspot for tourists", "Filled with towering neon signs, clubs, bars & restaurantsClick a picture with the iconic Glico Man, shot from under Ebisubashi bridge, a famous picture pointEnjoy the rest of the time shopping or relaxingDinner at Indian restaurantOvernight Stay in Osaka"],
        image: "https://images.unsplash.com/photo-1590250591827-024505f019f6?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 3,
        title: "Osaka - Kyoto & Nara Tour ~ Arashiyama, Golden Pavillion, Tōdaiji, Deer park",
        location: "Kyoto, Kansai",
        description: `Pick up from Hotel @0900 HrsArashiyama Bamboo Forest -Japan's most famous bamboo forestWalk through the Bamboo groovesKinkaku-ji - Rokuon-ji is a Zen Buddhist temple, the “the Golden Pavilion”, Mirror PondStop for LunchAfter lunch, we proceed towards NaraVisit Tōdai-ji Temple - the world's largest wooden structure; home to the Great Buddha, the largest bronze statue in the worldNara Deer Park - renowned for its free-roaming deer and world famous templesDinner at Indian restaurantOvernight stay at Hotel in Osaka`,
        highlights: ["Explore local attractions and historical landmarks", "Enjoy local dining and sightseeing options"],
        image: "https://images.unsplash.com/photo-1590250591827-024505f019f6?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 4,
        title: "Osaka/ Hiroshima - Osaka to Hiroshima by Bullet Train ~Itsukushima, Miyajima, Peace Memorial, Memorial park",
        location: "Osaka, Kansai",
        description: `01 bag per person not exceeding 23 kgs. will be couriered to Tokyo hotel. Prepare a bag for overnight stay and keep all necessary medicines, prescription etc. in it**Please prepare overnight bag for 1 night stay in HiroshimaAfter breakfast, check out from HotelPick up from Hotel and transfer to Shin Osaka StationShin Osaka station to Hiroshima station in Bullet Train - ShinkansenThis super fast bullet train journey takes less than 2 hours each wayUpon reaching Hiroshima, Stop for LunchAfter lunch, ferry transfer to Itsukushima ShrineItsukushima Shrine - best known for its "floating" torii gateSee wild deer in MiyajimaReturn to Hiroshima main Island, ferry transferProceed to Hiroshima Peace Memorial MuseumAtomic Bomb Dome (Hiroshima Memorial Park)Dinner at Indian restaurantCheck in and free time for relaxationOvernight stay at hotel in Hiroshima`,
        highlights: ["01 bag per person not exceeding 23 kgs", "will be couriered to Tokyo hotel", "Prepare a bag for overnight stay and keep all necessary medicines, prescription etc", "in it**Please prepare overnight bag for 1 night stay in HiroshimaAfter breakfast, check out from HotelPick up from Hotel and transfer to Shin Osaka StationShin Osaka station to Hiroshima station in Bullet Train - ShinkansenThis super fast bullet train journey takes less than 2 hours each wayUpon reaching Hiroshima, Stop for LunchAfter lunch, ferry transfer to Itsukushima ShrineItsukushima Shrine - best known for its \"floating\" torii gateSee wild deer in MiyajimaReturn to Hiroshima main Island, ferry transferProceed to Hiroshima Peace Memorial MuseumAtomic Bomb Dome (Hiroshima Memorial Park)Dinner at Indian restaurantCheck in and free time for relaxationOvernight stay at hotel in Hiroshima"],
        image: "https://images.unsplash.com/photo-1590250591827-024505f019f6?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 5,
        title: "Hiroshima/ Tokyo - Hiroshima to Tokyo Bullet Train followed by Tokyo Orientation Tour ~Odaiba, Shibuya",
        location: "Tokyo, Kanto",
        description: `After breakfast, check out from HotelPick up from Hotel and transfer to Hiroshima StationHiroshima station Tokyo station in Bullet Train - Shinkansen Nozomi/ Hikari/ SakuraThis super fast bullet train Journet takes between 230 to 297 min/ covers 894 kmsUpon reaching Tokyo station, pick up and transfer for lunch at local restaurantAfter having lunch, proceed for Tokyo orientation tourTokyo orientation/ sightseeing tour ~Odaiba, Statue of liberty, Rainbow bridge, Shibuya scramble crossingOdaiba seaside park - Coastal green space with views of the Rainbow Bridge & cityStatue of Liberty (** Drive over/ No Stop)Rainbow Bridge (** View from window/ No Stop)Shibuya Scramble Crossing - the world's busiest pedestrian crossing (View point)Click a picture with The Hachiko Statue, honouring the most loyal dog in JapanWatch the 3D billboard of Panda, just around the corner from Shibuya CrossingDinner at Indian restaurantTransfer to City hotel - Tokyo/ Complete check in formalitiesFree time for leisure/ own activitiesOvernight stay in Tokyo`,
        highlights: ["Explore local attractions and historical landmarks", "Enjoy local dining and sightseeing options"],
        image: "https://images.unsplash.com/photo-1542640244-7e672d6cef21?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 6,
        title: "Tokyo - Tokyo City Tour ~ Sensoji, Nakamise, Sumida, Imperial palace, Tokyo Tower",
        location: "Tokyo, Kanto",
        description: `Pick up from Hotel @0900 HrsAsakusa Kannon Temple (Sensoji ) - Tokyo's oldest and iconic templeNakamise Dori Shopping streetSumida River CruiseStop for LunchTokyo Skytree - Climb up to the Tembo deck 350 mLater, proceed to Ginza Six Mall. Ginza Japan’s premier shopping districtDinner at Indian restaurantOvernight stay in Tokyo`,
        highlights: ["Pick up from Hotel @0900 HrsAsakusa Kannon Temple (Sensoji ) - Tokyo's oldest and iconic templeNakamise Dori Shopping streetSumida River CruiseStop for LunchTokyo Skytree - Climb up to the Tembo deck 350 mLater, proceed to Ginza Six Mall", "Ginza Japan\u2019s premier shopping districtDinner at Indian restaurantOvernight stay in Tokyo"],
        image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 7,
        title: "Tokyo - Mt Fuji & Hakone Tour by coach ~ 5th Stn/Oshino Hakkai, Ōwakudani, Jigokudani, Hakone Ropeway, Hakone Ship",
        location: "Tokyo, Kanto",
        description: `Pick up from hotel and proceed to Mt Fuji 5th Station @0730 HrsMt. Fuji Fifth Station - Sky Palace (* Weather permitting)If 5th station is closed, we will be visiting Oshino HakkaiOshino Hakkai (Springs of Mt. Fuji), a must-visit tourist spot (*weather permitting)Ōwakudani - an active volcanic valley (**weather permitting)Jigokudani - Famous for its black eggs, boiled in the sulphurous waters to give the egg shells a distinctive colourStop for LunchHakone Ropeway cable car and go sightseeing around the Ōwakudani Valley (weather permitting)Hakone Pirate Ship - go cruising from Togendai Port to Moto Hakone Port along Ashinoko Lake (*weather permitting)Return to TokyoDinner at local restaurantOvernight stay in Tokyo`,
        highlights: ["Pick up from hotel and proceed to Mt Fuji 5th Station @0730 HrsMt", "Fuji Fifth Station - Sky Palace (* Weather permitting)If 5th station is closed, we will be visiting Oshino HakkaiOshino Hakkai (Springs of Mt", "Fuji), a must-visit tourist spot (*weather permitting)\u014cwakudani - an active volcanic valley (**weather permitting)Jigokudani - Famous for its black eggs, boiled in the sulphurous waters to give the egg shells a distinctive colourStop for LunchHakone Ropeway cable car and go sightseeing around the \u014cwakudani Valley (weather permitting)Hakone Pirate Ship - go cruising from Togendai Port to Moto Hakone Port along Ashinoko Lake (*weather permitting)Return to TokyoDinner at local restaurantOvernight stay in Tokyo"],
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 8,
        title: "Tokyo - Free time till Check out or flight time",
        location: "Tokyo, Kanto",
        description: `** Room available till regular check out time (11 AM)Tokyo city hotel to NRT/HND Airport private transferDeparture Flight Details: TBA`,
        highlights: ["Explore local attractions and historical landmarks", "Enjoy local dining and sightseeing options"],
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
      },
    ],
    thingsToDo: [
      {
        title: "Shinkansen Bullet Train",
        description: "Experience Japan's high-speed train, linking key cities with incredible punctuality and comfort.",
        iconName: "Train"
      },
      {
        title: "Traditional Tea Ceremony",
        description: "Immerse yourself in the Zen practice of preparing and sipping ceremonial matcha in a tatami room.",
        iconName: "BookOpen"
      },
      {
        title: "Sushi & Kaiseki Cuisine",
        description: "Indulge in seasonal culinary masterpieces, from street food stalls to multi-course kaiseki banquets.",
        iconName: "Utensils"
      },
      {
        title: "Temple & Shrine Visits",
        description: "Discover centuries of spiritual heritage at magnificent Shinto shrines and Buddhist temples.",
        iconName: "Landmark"
      },
      {
        title: "Onsen Hot Springs",
        description: "Relax and unwind in volcanic, mineral-rich hot springs with beautiful scenic views.",
        iconName: "Waves"
      },
    ],
    travelTips: ["Regional JR Rail Pass: Consider a regional pass to save significantly on Shinkansen bullet train routes.", "IC Card Setup: Download a mobile IC card (Suica/Pasmo) for seamless local bus and subway tap-ins.", "Carry Cash: Many small shrines, temple entrance counters, and local street stalls do not accept credit cards.", "Etiquette & Tipping: Good service is standard; tipping is not practiced and may cause confusion.", "Footwear Manners: Wear slip-on shoes since you'll take them off frequently at temples and traditional ryokans.", "Pocket Wi-Fi / eSIM: Pre-order a pocket Wi-Fi or eSIM to stay connected with navigation maps during your trip."],
    gallery: ["https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80", "https://images.unsplash.com/photo-1590250591827-024505f019f6?auto=format&fit=crop&w=600&q=80", "https://images.unsplash.com/photo-1590250591827-024505f019f6?auto=format&fit=crop&w=600&q=80", "https://images.unsplash.com/photo-1590250591827-024505f019f6?auto=format&fit=crop&w=600&q=80", "https://images.unsplash.com/photo-1590250591827-024505f019f6?auto=format&fit=crop&w=600&q=80"],
  },
  "experiential-japan-package": {
    slug: "experiential-japan-package",
    name: "Experiential Japan Package",
    country: "Japan",
    region: "East Asia",
    tagline: "Explore the best of Japan's highlights on this immersive 10-day journey",
    heroImage: "/images/tour-2.jpg",
    overview: `Embark on a magnificent 10-day tour of Japan, starting in Tokyo. This package covers a curated route highlighting key cultural sights, bullet train experiences, local culinary delicacies, and historical landmarks. Perfect for families, first-time visitors, and seasoned travelers seeking a seamless, well-organized itinerary.`,
    quickFacts: {
      currency: "Japanese Yen (¥)",
      climate: "Subtropical to temperate with distinct seasonal changes",
      bestSeason: "March–May (Cherry Blossom) & October–November (Autumn Foliage)",
      languages: "Japanese",
      timeZone: "JST (UTC+9)",
      drivingSide: "Left"
    },
    itinerary: [
      {
        day: 1,
        title: "Tokyo",
        location: "Tokyo, Kanto",
        description: `Arrival Flight Details: TBAAfter disembarking, please follow the signs to the ImmigrationAfter clearing immigration, collect your baggageMeet our representative. Pick up from Airport & transfer to city hotelTransfer to City hotel - Tokyo/ Complete check in formalitiesDinner at local restaurantOvernight stay in Tokyo`,
        highlights: ["Arrival Flight Details: TBAAfter disembarking, please follow the signs to the ImmigrationAfter clearing immigration, collect your baggageMeet our representative", "Pick up from Airport & transfer to city hotelTransfer to City hotel - Tokyo/ Complete check in formalitiesDinner at local restaurantOvernight stay in Tokyo"],
        image: "/images/tour-2.jpg"
      },
      {
        day: 2,
        title: "Tokyo - Tokyo City Tour ~Tokyo Skytree, UENO Park , teamlab Planets, Meguro River Cruise",
        location: "Tokyo, Kanto",
        description: `Pick up from Hotel @0900 HrsTokyo Skytree - Climb up to the Tembo deck 350 mVisit Ueno Park for best Cheery Blossom experienceStop for LunchAfter lunch, teamlab planets, a museum where you walk through water, and a garden where you become one with the flowersMeguro River Park - Home to a one kilometre promenade of cherry blossomsMeguro River cherry blossom cruise - Get a view of the Meguro River's cherry blossoms from the water with this special cruise (** Cruise subject to availability; incase of cruise unavailability, we shall take the guests to visit Shinjuku Gyon Park for Cherry Blossom viewing)Dinner at local restaurantOvernight stay at Hotel in Tokyo`,
        highlights: ["Explore local attractions and historical landmarks", "Enjoy local dining and sightseeing options"],
        image: "/images/tour-2.jpg"
      },
      {
        day: 3,
        title: "Tokyo - Mt Fuji and Hakone Tour by coach ~ 5th Stn/Oshino Hakkai, Ōwakudani, Jigokudani, Hakone Ropeway, Hakone Ship",
        location: "Tokyo, Kanto",
        description: `After breakfast, check out and assemble at the lobbyPick up from hotel and proceed to Mt Fuji 5th Station @0730 HrsMt. Fuji Fifth Station - Sky Palace (* Weather permitting)If 5th station is closed, we will be visiting Oshino HakkaiOshino Hakkai (Springs of Mt. Fuji), a must-visit tourist spot (*weather permitting)Ōwakudani - an active volcanic valley (**weather permitting)Jigokudani - Famous for its black eggs, boiled in the sulphurous waters to give the egg shells a distinctive colourStop for LunchHakone Ropeway cable car and go sightseeing around the Ōwakudani Valley (weather permitting)Hakone Pirate Ship - go cruising from Togendai Port to Moto Hakone Port along Ashinoko Lake (*weather permitting)Dinner at local restaurantOvernight stay in Tokyo`,
        highlights: ["After breakfast, check out and assemble at the lobbyPick up from hotel and proceed to Mt Fuji 5th Station @0730 HrsMt", "Fuji Fifth Station - Sky Palace (* Weather permitting)If 5th station is closed, we will be visiting Oshino HakkaiOshino Hakkai (Springs of Mt", "Fuji), a must-visit tourist spot (*weather permitting)\u014cwakudani - an active volcanic valley (**weather permitting)Jigokudani - Famous for its black eggs, boiled in the sulphurous waters to give the egg shells a distinctive colourStop for LunchHakone Ropeway cable car and go sightseeing around the \u014cwakudani Valley (weather permitting)Hakone Pirate Ship - go cruising from Togendai Port to Moto Hakone Port along Ashinoko Lake (*weather permitting)Dinner at local restaurantOvernight stay in Tokyo"],
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 4,
        title: "Tokyo - Tokyo Disney Land 1-Day Passport + Private Round Trip Transfers",
        location: "Tokyo, Kanto",
        description: `01 bag per person not exceeding 23 kgs. will be couriered to Kyoto hotel. Prepare a bag for overnight/ two nights stay and keep all necessary medicines, prescription etc. in itBreakfast at hotelPick up from Hotel @0900 HrsHotel Pick up and transfer to Disneyland @0900 HrsThe first Disney theme park outside of the United StatesDisneyland is made up of seven themed lands and features seasonal decorations & paradesLunch inside theme park (pay locally)Pick up from Disneyland Resort @1900 HrsProceed for Dinner at Indian RestaurantReturn to Hotel and free time for own activitiesOvernight stay in Tokyo`,
        highlights: ["01 bag per person not exceeding 23 kgs", "will be couriered to Kyoto hotel", "Prepare a bag for overnight/ two nights stay and keep all necessary medicines, prescription etc", "in itBreakfast at hotelPick up from Hotel @0900 HrsHotel Pick up and transfer to Disneyland @0900 HrsThe first Disney theme park outside of the United StatesDisneyland is made up of seven themed lands and features seasonal decorations & paradesLunch inside theme park (pay locally)Pick up from Disneyland Resort @1900 HrsProceed for Dinner at Indian RestaurantReturn to Hotel and free time for own activitiesOvernight stay in Tokyo"],
        image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 5,
        title: "Tokyo/ Kyoto - Tokyo to Kyoto Shinkansen Train/ Kyoto Tour ~Kyoto Station, Kyoto Railway Museum, Fushimi Inari Shrine",
        location: "Tokyo, Kanto",
        description: `Check out and proceed to Tokyo stationTokyo station to Kyoto station in Bullet Train - Shinkansen Nozomi/ Hikari/ SakuraReach Kyoto and Explore Kyoto StationKyoto Station, one of Japan's largest buildingsStop for LunchKyoto Railway Museum, one of the best railway museums anywhere in the worldFushimi Inari Shrine - famous for its thousands of vermilion torii gates (Short stop**)Dinner at Indian restaurantReach Hotel, Collect Your bags and complete check in formalitiesOvernight stay at Hotel in Kyoto`,
        highlights: ["Explore local attractions and historical landmarks", "Enjoy local dining and sightseeing options"],
        image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 6,
        title: "Kyoto - Kyoto Day Tour ~ Arashiyama, Sagano Rail, Sake Brewery, Kiyomizu Dera",
        location: "Kyoto, Kansai",
        description: `Pick up from Hotel @0900 HrsArashiyama Bamboo Forest -Japan's most famous bamboo forest.Walk through the Bamboo groovesEnjoy The Sagano Romantic train/ Saga torokko station to Kameoka torokko Station (25 min)Enjoy the scenic beauty of the Hozukyo Ravine on its routePick up from Kameoka station, proceed to restaurantStop for lunchPost lunch, we shall visit the Sake breweryKiyomizu temple, Ninenzaka & SannenzakaDinner at local Indian restaurantOvernight stay at Hotel in Kyoto`,
        highlights: ["Pick up from Hotel @0900 HrsArashiyama Bamboo Forest -Japan's most famous bamboo forest", "Walk through the Bamboo groovesEnjoy The Sagano Romantic train/ Saga torokko station to Kameoka torokko Station (25 min)Enjoy the scenic beauty of the Hozukyo Ravine on its routePick up from Kameoka station, proceed to restaurantStop for lunchPost lunch, we shall visit the Sake breweryKiyomizu temple, Ninenzaka & SannenzakaDinner at local Indian restaurantOvernight stay at Hotel in Kyoto"],
        image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 7,
        title: "Kyoto - Kyoto to Osaka Private transfer/ Evening tour the Dotonbori & shainsaibashi shopping areas",
        location: "Kyoto, Kansai",
        description: `After breakfast, check out and meet our representativeProceed to Osaka by landStop for LunchReach Osaka hotel, complete check in formalitiesDotonbori District (Shinsaibashi-Suji Shopping Street) - hotspot for tourists. Filled with towering neon signs, clubs, bars & restaurantsClick a picture with the iconic Glico Man, shot from under Ebisubashi bridge, a famous Osaka picture spotDinner at local restaurantOvernight stay at Hotel in Osaka`,
        highlights: ["After breakfast, check out and meet our representativeProceed to Osaka by landStop for LunchReach Osaka hotel, complete check in formalitiesDotonbori District (Shinsaibashi-Suji Shopping Street) - hotspot for tourists", "Filled with towering neon signs, clubs, bars & restaurantsClick a picture with the iconic Glico Man, shot from under Ebisubashi bridge, a famous Osaka picture spotDinner at local restaurantOvernight stay at Hotel in Osaka"],
        image: "https://images.unsplash.com/photo-1590250591827-024505f019f6?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 8,
        title: "Osaka - Nara & Osaka tour ~Tōdai-ji Temple , Nara Deer Park, Osaka Castle, Umeda Sky Building",
        location: "Osaka, Kansai",
        description: `Pick up from Hotel @0900 HrsProceed to Nara Tour (takes approx. 80 minutes to cover about 35 kms)Visit Tōdai-ji Temple - the world's largest wooden structure; home to the Great Buddha, the largest bronze statue in the worldNara Deer Park - renowned for its free-roaming deer and world famous templesStop for LunchAfter lunch, return to OsakaOsaka Castle - the most famous landmarks in JapanUmeda Sky Building - Floating Garden ObservatoryDinner at local restaurantOvernight stay at Hotel in Osaka`,
        highlights: ["Pick up from Hotel @0900 HrsProceed to Nara Tour (takes approx", "80 minutes to cover about 35 kms)Visit T\u014ddai-ji Temple - the world's largest wooden structure; home to the Great Buddha, the largest bronze statue in the worldNara Deer Park - renowned for its free-roaming deer and world famous templesStop for LunchAfter lunch, return to OsakaOsaka Castle - the most famous landmarks in JapanUmeda Sky Building - Floating Garden ObservatoryDinner at local restaurantOvernight stay at Hotel in Osaka"],
        image: "https://images.unsplash.com/photo-1590250591827-024505f019f6?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 9,
        title: "Osaka - Universal Studios Japan (Full Day Pass) + Private Round Trip Transfers",
        location: "Osaka, Kansai",
        description: `Hotel pick up and transfer to USJEnjoy the day with 01 Day Universal Studio PassUSJ, a theme park with a collection of world-class entertainment for all ages to enjoyLunch inside theme park (pay locally)Pick up from USJ and transfer to Indian restaurantDinner at local restaurantReach hotelOvernight stay at Hotel in Osaka`,
        highlights: ["Explore local attractions and historical landmarks", "Enjoy local dining and sightseeing options"],
        image: "https://images.unsplash.com/photo-1590250591827-024505f019f6?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 10,
        title: "Osaka - Free time till check out or flight time",
        location: "Osaka, Kansai",
        description: `Osaka city hotel to KIX/ITM Airport private transferDeparture Flight Details: TBA`,
        highlights: ["Explore local attractions and historical landmarks", "Enjoy local dining and sightseeing options"],
        image: "https://images.unsplash.com/photo-1590250591827-024505f019f6?auto=format&fit=crop&w=600&q=80"
      },
    ],
    thingsToDo: [
      {
        title: "Shinkansen Bullet Train",
        description: "Experience Japan's high-speed train, linking key cities with incredible punctuality and comfort.",
        iconName: "Train"
      },
      {
        title: "Traditional Tea Ceremony",
        description: "Immerse yourself in the Zen practice of preparing and sipping ceremonial matcha in a tatami room.",
        iconName: "BookOpen"
      },
      {
        title: "Sushi & Kaiseki Cuisine",
        description: "Indulge in seasonal culinary masterpieces, from street food stalls to multi-course kaiseki banquets.",
        iconName: "Utensils"
      },
      {
        title: "Temple & Shrine Visits",
        description: "Discover centuries of spiritual heritage at magnificent Shinto shrines and Buddhist temples.",
        iconName: "Landmark"
      },
      {
        title: "Onsen Hot Springs",
        description: "Relax and unwind in volcanic, mineral-rich hot springs with beautiful scenic views.",
        iconName: "Waves"
      },
    ],
    travelTips: ["Regional JR Rail Pass: Consider a regional pass to save significantly on Shinkansen bullet train routes.", "IC Card Setup: Download a mobile IC card (Suica/Pasmo) for seamless local bus and subway tap-ins.", "Carry Cash: Many small shrines, temple entrance counters, and local street stalls do not accept credit cards.", "Etiquette & Tipping: Good service is standard; tipping is not practiced and may cause confusion.", "Footwear Manners: Wear slip-on shoes since you'll take them off frequently at temples and traditional ryokans.", "Pocket Wi-Fi / eSIM: Pre-order a pocket Wi-Fi or eSIM to stay connected with navigation maps during your trip."],
    gallery: ["/images/tour-2.jpg", "/images/tour-2.jpg", "/images/tour-2.jpg", "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80", "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80"],
  },
  "japan-golden-route": {
    slug: "japan-golden-route",
    name: "Japan Golden Route",
    country: "Japan",
    region: "East Asia",
    tagline: "Explore the best of Japan's highlights on this immersive 10-day journey",
    heroImage: "/images/tour-1.jpg",
    overview: `Embark on a magnificent 10-day tour of Japan, starting in Tokyo. This package covers a curated route highlighting key cultural sights, bullet train experiences, local culinary delicacies, and historical landmarks. Perfect for families, first-time visitors, and seasoned travelers seeking a seamless, well-organized itinerary.`,
    quickFacts: {
      currency: "Japanese Yen (¥)",
      climate: "Subtropical to temperate with distinct seasonal changes",
      bestSeason: "March–May (Cherry Blossom) & October–November (Autumn Foliage)",
      languages: "Japanese",
      timeZone: "JST (UTC+9)",
      drivingSide: "Left"
    },
    itinerary: [
      {
        day: 1,
        title: "Tokyo",
        location: "Tokyo, Kanto",
        description: `Arrival Flight Details: TBAAfter disembarking, please follow the signs to the ImmigrationCollect your bags and Meet our representativePrivate Transfer Tokyo Airport to City hotel - TokyoStandard Check in time 14:00~15:00 hrs. (Early check in on request)Complete check in formalitiesOvernight stay in Tokyo`,
        highlights: ["Arrival Flight Details: TBAAfter disembarking, please follow the signs to the ImmigrationCollect your bags and Meet our representativePrivate Transfer Tokyo Airport to City hotel - TokyoStandard Check in time 14:00~15:00 hrs", "(Early check in on request)Complete check in formalitiesOvernight stay in Tokyo"],
        image: "/images/tour-1.jpg"
      },
      {
        day: 2,
        title: "Tokyo - Tokyo City Tour ~ Imperial Palace, Asakusa (Sensoji), Nakamise, Tokyo Skytree, Sumida River, Odaiba",
        location: "Tokyo, Kanto",
        description: `Pick up from Hotel @0900 HrsImperial Palace East Garden (Nijubashi Bridge) (** No Stop/ Pass by)Asakusa Kannon Temple (Sensoji ) - Tokyo's oldest and iconic templeStop at Kaminarimon "Thunder Gate". Capture photos of this iconic entrance to Sensō-ji TempleExplore Nakamise Shopping Street. Shop for traditional souvenirs and snacks along this bustling streetStop for Lunch (Pay locally)Tokyo Skytree - Tembo deck 350 m (Entrance ticket included)Sumida River Cruise from Asakusa to Odaiba Seaside ParkRainbow Bridge (** View from the pier)Proceed to Statue of LibertyOvernight stay at Hotel in Tokyo`,
        highlights: ["Pick up from Hotel @0900 HrsImperial Palace East Garden (Nijubashi Bridge) (** No Stop/ Pass by)Asakusa Kannon Temple (Sensoji ) - Tokyo's oldest and iconic templeStop at Kaminarimon \"Thunder Gate\"", "Capture photos of this iconic entrance to Sens\u014d-ji TempleExplore Nakamise Shopping Street", "Shop for traditional souvenirs and snacks along this bustling streetStop for Lunch (Pay locally)Tokyo Skytree - Tembo deck 350 m (Entrance ticket included)Sumida River Cruise from Asakusa to Odaiba Seaside ParkRainbow Bridge (** View from the pier)Proceed to Statue of LibertyOvernight stay at Hotel in Tokyo"],
        image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 3,
        title: "Tokyo - Tokyo shopping & Entertainment tour ~ Teamlab, Hie Shrine, Akihabara, Ginza Six",
        location: "Tokyo, Kanto",
        description: `Pick up from Hotel @0900 Hrsteamlab Planets, a museum where you walk through water, and a garden where you become one with the flowersVisit Hie Shrine, a traditional Japanese Shinto shrine famous for its striking row of red torii gatesStop for Lunch (Pay locally)Akihabara Electric Town (Electronic Shopping Market)Later, proceed to Ginza Six Mall. Ginza Japan’s premier shopping districtOvernight stay in Tokyo`,
        highlights: ["Pick up from Hotel @0900 Hrsteamlab Planets, a museum where you walk through water, and a garden where you become one with the flowersVisit Hie Shrine, a traditional Japanese Shinto shrine famous for its striking row of red torii gatesStop for Lunch (Pay locally)Akihabara Electric Town (Electronic Shopping Market)Later, proceed to Ginza Six Mall", "Ginza Japan\u2019s premier shopping districtOvernight stay in Tokyo"],
        image: "/images/tour-1.jpg"
      },
      {
        day: 4,
        title: "Tokyo - Nikko World Heritage Tour ~Nikko Toshogu Shrine, Lake Chuzenji, Kegon Falls",
        location: "Tokyo, Kanto",
        description: `01 bag per person not exceeding 23 kgs. will be couriered to Nagoya hotel. Prepare a bag for overnight stay and keep all necessary medicines, prescription etc. in itPick up from Hotel @0900 Hrs and proceed to Nikko world heritage sightNikko Toshogu Shrine - A registered UNESCO World Heritage SiteToshogu Shrine in Nikko, you’ll find the original Three Wise Monkeys statue that has gained international fameLake Chuzenji - a symbol of NikkoStop for Lunch (Pay locally)Kegon Falls (elevator to lower observation deck)Return to Hotel and free time for own activitiesOvernight stay at Hotel in Tokyo`,
        highlights: ["01 bag per person not exceeding 23 kgs", "will be couriered to Nagoya hotel", "Prepare a bag for overnight stay and keep all necessary medicines, prescription etc", "in itPick up from Hotel @0900 Hrs and proceed to Nikko world heritage sightNikko Toshogu Shrine - A registered UNESCO World Heritage SiteToshogu Shrine in Nikko, you\u2019ll find the original Three Wise Monkeys statue that has gained international fameLake Chuzenji - a symbol of NikkoStop for Lunch (Pay locally)Kegon Falls (elevator to lower observation deck)Return to Hotel and free time for own activitiesOvernight stay at Hotel in Tokyo"],
        image: "https://images.unsplash.com/photo-1571479539343-4cc06579a099?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 5,
        title: "Tokyo/ Mt. Fuji/ Shizuoka - Mt Fuji and Hakone Tour ~ 5th Stn/Oshino Hakkai, Ōwakudani, Hakone Ropeway, Hakone Ship",
        location: "Tokyo, Kanto",
        description: `Pick up from hotel and proceed to Mt Fuji 5th Station @0730 HrsMt. Fuji Fifth Station - Sky Palace (* Weather permitting)If 5th station is closed, we will be visiting Oshino HakkaiOshino Hakkai (Springs of Mt. Fuji), a must-visit tourist spot (*weather permitting)Ōwakudani - an active volcanic valley, Famous for its black eggs (**weather permitting)Stop for Lunch (Pay locally)Hakone Ropeway cable car and go sightseeing around the Ōwakudani Valley (weather permitting)Hakone Pirate Ship, sail across Lake Ashi for picturesque views of the surrounding mountains.(*weather permitting)Reach hotel, Complete check in formalities, free time for own activitiesOvernight stay in Shizuoka`,
        highlights: ["Pick up from hotel and proceed to Mt Fuji 5th Station @0730 HrsMt", "Fuji Fifth Station - Sky Palace (* Weather permitting)If 5th station is closed, we will be visiting Oshino HakkaiOshino Hakkai (Springs of Mt", "Fuji), a must-visit tourist spot (*weather permitting)\u014cwakudani - an active volcanic valley, Famous for its black eggs (**weather permitting)Stop for Lunch (Pay locally)Hakone Ropeway cable car and go sightseeing around the \u014cwakudani Valley (weather permitting)Hakone Pirate Ship, sail across Lake Ashi for picturesque views of the surrounding mountains", "(*weather permitting)Reach hotel, Complete check in formalities, free time for own activitiesOvernight stay in Shizuoka"],
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 6,
        title: "Shizuoka/ Nagoya - Shizuoka/ Nagoya Tokaido shinkansen/ Nagoya Tour ~ Toyota Museum or Railway Park, Nagoya Castle",
        location: "Nagoya, Chubu",
        description: `After breakfast, check out and proceed to Shizuoka stationWalk to Shizuoka station North (550 meters)Tokaido High Speed Bullet Train from Shizuoka to Nagoya stationThis journey takes about 01 hour 15 min to cover 177 kmsReach Nagoya, Toyota Automobile Museum [** Advance reservation required/ subject to availability]SC Maglev and Railway Park [** Admission fee included/ simulators cost excluded]Stop for Lunch (Pay locally)Nagoya Castle - one of the largest castles in the world!Reach hotel, collect your bags and complete check in formalitiesOvernight stay in Nagoya`,
        highlights: ["After breakfast, check out and proceed to Shizuoka stationWalk to Shizuoka station North (550 meters)Tokaido High Speed Bullet Train from Shizuoka to Nagoya stationThis journey takes about 01 hour 15 min to cover 177 kmsReach Nagoya, Toyota Automobile Museum [** Advance reservation required/ subject to availability]SC Maglev and Railway Park [** Admission fee included/ simulators cost excluded]Stop for Lunch (Pay locally)Nagoya Castle - one of the largest castles in the world", "Reach hotel, collect your bags and complete check in formalitiesOvernight stay in Nagoya"],
        image: "https://images.unsplash.com/photo-1571479539343-4cc06579a099?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 7,
        title: "Nagoya - Shirakawa go and Hida Takayama Day Trip from Nagoya (**weather permitting)",
        location: "Nagoya, Chubu",
        description: `Breakfast at hotelCheck out and proceed to Shirakawa goShirakawa go, a Walk Into Cultural Japan VillageStop for Lunch (Pay locally)Visit Ogimachi is the largest and most well-known village in Shirakawa-goHead to the observatory at the site of Ogimachi CastleScenic View at Deai-Bashi BridgeReturn To NagoyaOvernight stay at Hotel in Nagoya`,
        highlights: ["Explore local attractions and historical landmarks", "Enjoy local dining and sightseeing options"],
        image: "https://images.unsplash.com/photo-1571479539343-4cc06579a099?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 8,
        title: "Nagoya/ Osaka - Nagoya to Osaka/ Enroute, Kyoto City Tour ~Arashiyama Bamboo, Kinkakuji Temple, Imperial Palace, Fushimi",
        location: "Kyoto, Kansai",
        description: `After breakfast, check out from Hotel, proceed to Kyoto Day tourWe proceed to Osaka, enroute touring the beautiful city of KyotoArashiyama Bamboo Forest -Japan's most famous bamboo forest.Walk through the Bamboo groovesKinkaku-ji - Rokuon-ji is a Zen Buddhist temple, the “the Golden Pavilion”, Mirror PondKyoto Imperial Palace - the former palace of the Emperor of Japan (Drive pass/ No stop**)Stop for Lunch (Pay locally)Fushimi Inari Shrine - famous for its thousands of vermilions torii gates (Short stop**)Reach hotel and complete check in formalitiesOvernight stay at hotel in Osaka`,
        highlights: ["After breakfast, check out from Hotel, proceed to Kyoto Day tourWe proceed to Osaka, enroute touring the beautiful city of KyotoArashiyama Bamboo Forest -Japan's most famous bamboo forest", "Walk through the Bamboo groovesKinkaku-ji - Rokuon-ji is a Zen Buddhist temple, the \u201cthe Golden Pavilion\u201d, Mirror PondKyoto Imperial Palace - the former palace of the Emperor of Japan (Drive pass/ No stop**)Stop for Lunch (Pay locally)Fushimi Inari Shrine - famous for its thousands of vermilions torii gates (Short stop**)Reach hotel and complete check in formalitiesOvernight stay at hotel in Osaka"],
        image: "https://images.unsplash.com/photo-1590250591827-024505f019f6?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 9,
        title: "Osaka - Nara & Osaka Day tour ~Tōdaiji temple, Deer Park, Osaka Castle, Dotonbori, Shinsaibashi",
        location: "Osaka, Kansai",
        description: `Pick up from HotelVisit Tōdai-ji Temple - the world's largest wooden structure, the largest bronze statue in the worldNara Deer Park - renowned for its free-roaming deer and world famous templesStop for Lunch (Pay locally)Proceed to Osaka CastleOsaka Castle - the most famous landmarks in JapanDotonbori District - hotspot for tourists. Filled with towering neon signs, clubs, bars & restaurantsClick a picture with the iconic Glico Man, shot from under Ebisubashi bridge, a famous picture pointOvernight stay at Hotel in Osaka`,
        highlights: ["Pick up from HotelVisit T\u014ddai-ji Temple - the world's largest wooden structure, the largest bronze statue in the worldNara Deer Park - renowned for its free-roaming deer and world famous templesStop for Lunch (Pay locally)Proceed to Osaka CastleOsaka Castle - the most famous landmarks in JapanDotonbori District - hotspot for tourists", "Filled with towering neon signs, clubs, bars & restaurantsClick a picture with the iconic Glico Man, shot from under Ebisubashi bridge, a famous picture pointOvernight stay at Hotel in Osaka"],
        image: "https://images.unsplash.com/photo-1590250591827-024505f019f6?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 10,
        title: "Osaka - Free time till Check out or flight time",
        location: "Osaka, Kansai",
        description: `Osaka city hotel to KIX/ ITM Airport private transferDeparture Flight : TBA`,
        highlights: ["Explore local attractions and historical landmarks", "Enjoy local dining and sightseeing options"],
        image: "https://images.unsplash.com/photo-1590250591827-024505f019f6?auto=format&fit=crop&w=600&q=80"
      },
    ],
    thingsToDo: [
      {
        title: "Shinkansen Bullet Train",
        description: "Experience Japan's high-speed train, linking key cities with incredible punctuality and comfort.",
        iconName: "Train"
      },
      {
        title: "Traditional Tea Ceremony",
        description: "Immerse yourself in the Zen practice of preparing and sipping ceremonial matcha in a tatami room.",
        iconName: "BookOpen"
      },
      {
        title: "Sushi & Kaiseki Cuisine",
        description: "Indulge in seasonal culinary masterpieces, from street food stalls to multi-course kaiseki banquets.",
        iconName: "Utensils"
      },
      {
        title: "Temple & Shrine Visits",
        description: "Discover centuries of spiritual heritage at magnificent Shinto shrines and Buddhist temples.",
        iconName: "Landmark"
      },
      {
        title: "Onsen Hot Springs",
        description: "Relax and unwind in volcanic, mineral-rich hot springs with beautiful scenic views.",
        iconName: "Waves"
      },
    ],
    travelTips: ["Regional JR Rail Pass: Consider a regional pass to save significantly on Shinkansen bullet train routes.", "IC Card Setup: Download a mobile IC card (Suica/Pasmo) for seamless local bus and subway tap-ins.", "Carry Cash: Many small shrines, temple entrance counters, and local street stalls do not accept credit cards.", "Etiquette & Tipping: Good service is standard; tipping is not practiced and may cause confusion.", "Footwear Manners: Wear slip-on shoes since you'll take them off frequently at temples and traditional ryokans.", "Pocket Wi-Fi / eSIM: Pre-order a pocket Wi-Fi or eSIM to stay connected with navigation maps during your trip."],
    gallery: ["/images/tour-1.jpg", "/images/tour-1.jpg", "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80", "/images/tour-1.jpg", "https://images.unsplash.com/photo-1571479539343-4cc06579a099?auto=format&fit=crop&w=600&q=80"],
  },
  "exotic-japan-package-japan-with-alpine-route": {
    slug: "exotic-japan-package-japan-with-alpine-route",
    name: "Exotic Japan Package (Japan With Alpine Route)",
    country: "Japan",
    region: "East Asia",
    tagline: "Discover Japan's natural wonders, volcanic hot springs, and scenic trails over 11 days",
    heroImage: "/images/dest-2.jpg",
    overview: `Embark on a magnificent 11-day tour of Japan, starting in Tokyo. This package covers a curated route highlighting key cultural sights, bullet train experiences, local culinary delicacies, and historical landmarks. Perfect for families, first-time visitors, and seasoned travelers seeking a seamless, well-organized itinerary.`,
    quickFacts: {
      currency: "Japanese Yen (¥)",
      climate: "Subtropical to temperate with distinct seasonal changes",
      bestSeason: "March–May (Cherry Blossom) & October–November (Autumn Foliage)",
      languages: "Japanese",
      timeZone: "JST (UTC+9)",
      drivingSide: "Left"
    },
    itinerary: [
      {
        day: 1,
        title: "Tokyo",
        location: "Tokyo, Kanto",
        description: `Arrival Flight Details: TBAAfter disembarking, please follow the signs to the ImmigrationCollect your bags and Meet our representativePrivate Transfer to City hotel - TokyoComplete check in formalitiesStandard Check in time 14:00~15:00 hrs. (Early check in on request)Free time for leisure/ relaxation; later proceed for the Tokyo evening sightseeing TourTokyo orientation/ sightseeing tour ~Odaiba, Statue of liberty, Rainbow bridgeOdaiba seaside park - Coastal green space with views of the Rainbow Bridge & cityStatue of Liberty (** Drive over/ No Stop)Rainbow Bridge (** View from window/ No Stop)Transfer to City hotel - Tokyo/ Complete check in formalitiesDinner at local Indian restaurantOvernight stay in Tokyo`,
        highlights: ["Arrival Flight Details: TBAAfter disembarking, please follow the signs to the ImmigrationCollect your bags and Meet our representativePrivate Transfer to City hotel - TokyoComplete check in formalitiesStandard Check in time 14:00~15:00 hrs", "(Early check in on request)Free time for leisure/ relaxation; later proceed for the Tokyo evening sightseeing TourTokyo orientation/ sightseeing tour ~Odaiba, Statue of liberty, Rainbow bridgeOdaiba seaside park - Coastal green space with views of the Rainbow Bridge & cityStatue of Liberty (** Drive over/ No Stop)Rainbow Bridge (** View from window/ No Stop)Transfer to City hotel - Tokyo/ Complete check in formalitiesDinner at local Indian restaurantOvernight stay in Tokyo"],
        image: "/images/dest-2.jpg"
      },
      {
        day: 2,
        title: "Tokyo - Tokyo City Tour ~Imperial Palace, Asakusa (Sensoji), Nakamise, Sumida River, Tokyo Skytree",
        location: "Tokyo, Kanto",
        description: `Pick up from Hotel @0900 HrsImperial Palace East Garden (Nijubashi Bridge) (** No Stop/ Pass by)Asakusa Kannon Temple (Sensoji ) - Tokyo's oldest and iconic templeNakamise Dori - Shopping Arcade where you can walk around the local stores or try famous street food of JapanSumida River Cruise, give best view of Tokyo Skytree and Sakura from the river banksStop for Lunch at Indian RestaurantTokyo Skytree - Climb up to the Tembo deck 350 metersDinner at local Indian restaurantReturn to Hotel and free time for own activitiesOvernight stay at Hotel in Tokyo`,
        highlights: ["Explore local attractions and historical landmarks", "Enjoy local dining and sightseeing options"],
        image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 3,
        title: "Tokyo - Tokyo shopping & Sakura (Cherry blossom) tour ~Ueno park, Akihabara, Shinjuku Garden, Ginza Six",
        location: "Tokyo, Kanto",
        description: `Pick up from Hotel @1000 HrsVisit Ueno Park for best Cheery Blossom experienceAkihabara Harajuku Street Electronic Shopping Market (1 ½ Hours)Stop for Lunch at Indian RestaurantShinjuku Gyoen National garden for best Cherry Blossom viewing & Japanese Garden ExperienceLater, proceed to Ginza Six Mall. Ginza Japan’s premier shopping districtDinner at local Indian restaurantReach hotelOvernight stay in Tokyo`,
        highlights: ["Pick up from Hotel @1000 HrsVisit Ueno Park for best Cheery Blossom experienceAkihabara Harajuku Street Electronic Shopping Market (1 \u00bd Hours)Stop for Lunch at Indian RestaurantShinjuku Gyoen National garden for best Cherry Blossom viewing & Japanese Garden ExperienceLater, proceed to Ginza Six Mall", "Ginza Japan\u2019s premier shopping districtDinner at local Indian restaurantReach hotelOvernight stay in Tokyo"],
        image: "/images/dest-2.jpg"
      },
      {
        day: 4,
        title: "Tokyo/ Mt. Fuji/ Matsumoto - Mt Fuji and Hakone Tour by coach ~ Oshino Hakkai, Ōwakudani, Jigokudani, Hakone Ropeway, Hakone Ship",
        location: "Tokyo, Kanto",
        description: `After breakfast, check out and assemble at the lobbyMt Fuji and Hakone Tour by coach ~ Oshino Hakkai, Ōwakudani, Jigokudani, Hakone Ropeway, Hakone ShipPick up from hotel and Visit Oshino Hakkai Village @0900 HrsOshino Hakkai (Springs of Mt. Fuji), a must-visit tourist spot (*weather permitting)Ōwakudani - an active volcanic valley (**weather permitting)Jigokudani - Famous for its black eggs, boiled in the sulphurous waters to give the egg shells a distinctive colourStop for Lunch at Indian RestaurantHakone Ropeway cable car and go sightseeing around the Ōwakudani Valley (weather permitting)Hakone Pirate Ship, go cruising from Togendai Port to Moto Hakone Port along Ashinoko Lake (*weather permitting)Dinner At Local Indian RestaurantTransfer to hotel, complete check in formalitiesOvernight stay in Matsumoto`,
        highlights: ["After breakfast, check out and assemble at the lobbyMt Fuji and Hakone Tour by coach ~ Oshino Hakkai, \u014cwakudani, Jigokudani, Hakone Ropeway, Hakone ShipPick up from hotel and Visit Oshino Hakkai Village @0900 HrsOshino Hakkai (Springs of Mt", "Fuji), a must-visit tourist spot (*weather permitting)\u014cwakudani - an active volcanic valley (**weather permitting)Jigokudani - Famous for its black eggs, boiled in the sulphurous waters to give the egg shells a distinctive colourStop for Lunch at Indian RestaurantHakone Ropeway cable car and go sightseeing around the \u014cwakudani Valley (weather permitting)Hakone Pirate Ship, go cruising from Togendai Port to Moto Hakone Port along Ashinoko Lake (*weather permitting)Dinner At Local Indian RestaurantTransfer to hotel, complete check in formalitiesOvernight stay in Matsumoto"],
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 5,
        title: "Matsumoto/Toyama - Matsumoto - Ogizawa Tateyama - Toyama (Alpine Route)",
        location: "Matsumoto, Nagano",
        description: `01 bag per person not exceeding 23 kgs. will be couriered to Osaka hotel. Prepare a bag for overnight/ 02 nights stay and keep all necessary medicines, prescription etc. in itAfter breakfast, Check Out And Proceed to Matsumoto StationHead to the Tateyama Kurobe Alpine Route via busTateyama Station to Bijodaira Station Cable car -> Bijodaira Station to Murodo Station Highland bus -> Sightseeing in MurodoLunch At Local Indian RestaurantMurodo Station to Daikanbo Station Trolley bus -> Daikanbo Station to Kurobedaira Station RopewayKurobedaira Station to Kurobeko Station Cable car -> Kurobe Dam SightseeingKurobe Dam Station to Ogizawa Station Trolley busPick up from Ogizawa StationDinner At Local Indian RestaurantReach hotel, complete check in and free time for relaxationOvernight stay at hotel in Toyama`,
        highlights: ["01 bag per person not exceeding 23 kgs", "will be couriered to Osaka hotel", "Prepare a bag for overnight/ 02 nights stay and keep all necessary medicines, prescription etc", "in itAfter breakfast, Check Out And Proceed to Matsumoto StationHead to the Tateyama Kurobe Alpine Route via busTateyama Station to Bijodaira Station Cable car -> Bijodaira Station to Murodo Station Highland bus -> Sightseeing in MurodoLunch At Local Indian RestaurantMurodo Station to Daikanbo Station Trolley bus -> Daikanbo Station to Kurobedaira Station RopewayKurobedaira Station to Kurobeko Station Cable car -> Kurobe Dam SightseeingKurobe Dam Station to Ogizawa Station Trolley busPick up from Ogizawa StationDinner At Local Indian RestaurantReach hotel, complete check in and free time for relaxationOvernight stay at hotel in Toyama"],
        image: "https://images.unsplash.com/photo-1590250591827-024505f019f6?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 6,
        title: "Toyama/ Kanazawa/ Hiroshima - Toyama to Kanazawa Enroute visiting Shirakawa go/ Shinkansen Bullet Train to Hiroshima",
        location: "Hiroshima, Chugoku",
        description: `Breakfast at hotelCheck out and proceed to Shirakawa goVisit Ogimachi is the largest and most well-known village in Shirakawa-goLunch At Local Indian RestaurantProceed To Kanazawa StationKanazawa Station To Hiroshima Station By Bullet TrainPick up from Hiroshima station and Proceed To Local Indian RestaurantDinner at Indian restaurantReach hotel and complete check in formalitiesOvernight stay at Hotel in Osaka`,
        highlights: ["Explore local attractions and historical landmarks", "Enjoy local dining and sightseeing options"],
        image: "https://images.unsplash.com/photo-1590250591827-024505f019f6?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 7,
        title: "Hiroshima/ Osaka - Hiroshima & Miyajima Tour ~Torii gate, Bomb Dome, Peace Memorial park/ Shinkansen Train to Osaka",
        location: "Osaka, Kansai",
        description: `After breakfast, check out from Hotel, proceed to Hiroshima & Miyajima Day tourFerry transfer to Itsukushima ShrineItsukushima Shrine - best known for its "floating" torii gateSee wild deer in MiyajimaReturn to Hiroshima main Island, ferry transferLunch At Local Indian RestaurantProceed to Hiroshima Peace Memorial MuseumAtomic Bomb Dome (Hiroshima Memorial Park)Proceed to Hiroshima StationHiroshima station to Shin Osaka station Bullet trainThis super fast bullet train journey takes less than 2 hours each wayPick up from Shin Osaka Station and transfer to Indian RestaurantDinner at Indian restaurantReach hotel, collect your bags and complete check in formalitiesOvernight stay at hotel in Osaka`,
        highlights: ["Explore local attractions and historical landmarks", "Enjoy local dining and sightseeing options"],
        image: "https://images.unsplash.com/photo-1590250591827-024505f019f6?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 8,
        title: "Osaka - Kyoto Day Tour ~ Arashiyama, Kinkaku ji, Imperial Palace, Traditional Tea Ceremony, Fushimi Inari",
        location: "Kyoto, Kansai",
        description: `Pick up from HotelArashiyama Bamboo Forest -Japan's most famous bamboo forest.Walk through the Bamboo groovesKinkaku-ji - Rokuon-ji is a Zen Buddhist temple, the “the Golden Pavilion”, Mirror PondKyoto Imperial Palace - the former palace of the Emperor of Japan (Drive pass/ No stop**)Lunch At Local Indian RestaurantTraditional Tea CeremonyFushimi Inari Shrine - famous for its thousands of vermilion torii gates (Short stop**)Return to OsakaDinner at local Indian restaurantOvernight stay at Hotel in Osaka`,
        highlights: ["Pick up from HotelArashiyama Bamboo Forest -Japan's most famous bamboo forest", "Walk through the Bamboo groovesKinkaku-ji - Rokuon-ji is a Zen Buddhist temple, the \u201cthe Golden Pavilion\u201d, Mirror PondKyoto Imperial Palace - the former palace of the Emperor of Japan (Drive pass/ No stop**)Lunch At Local Indian RestaurantTraditional Tea CeremonyFushimi Inari Shrine - famous for its thousands of vermilion torii gates (Short stop**)Return to OsakaDinner at local Indian restaurantOvernight stay at Hotel in Osaka"],
        image: "https://images.unsplash.com/photo-1590250591827-024505f019f6?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 9,
        title: "Osaka - Nara Day Tour ~Tōdaiji Temple, Nara Deer Park, Kasuga Taisha shrine",
        location: "Osaka, Kansai",
        description: `Breakfast at HotelPick up from Hotel @0930 HrsVisit Tōdai-ji Temple - the world's largest wooden structure; home to the Great Buddha, the largest bronze statue in the worldNara Deer Park - renowned for its free-roaming deer and world famous templesStop for Lunch at Indian RestaurantKasuga Taisha shrine, famous for Japan's largest number of lanterns, with 2,000 stone lanterns and 1,000 hanging lanterns within the shrine premisesReturn to OsakaDinner at local Indian restaurantOvernight stay at Hotel in Osaka`,
        highlights: ["Explore local attractions and historical landmarks", "Enjoy local dining and sightseeing options"],
        image: "https://images.unsplash.com/photo-1590250591827-024505f019f6?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 10,
        title: "Osaka - Osaka tour ~Osaka Castle, Umeda sky Observatory, Dotonbori/ Shinsaibashi",
        location: "Osaka, Kansai",
        description: `Breakfast at HotelPick up from Hotel @0930 HrsOsaka Castle - the most famous landmarks in JapanUmeda Sky Building Floating Garden Observatory (main observation deck)Lunch At Local Indian RestaurantDotonbori District - hotspot for tourists. Filled with towering neon signs, clubs, bars & restaurantsClick a picture with the iconic Glico Man, shot from under Ebisubashi bridge, a famous picture pointDinner at local Indian restaurantOvernight Stay in Osaka`,
        highlights: ["Breakfast at HotelPick up from Hotel @0930 HrsOsaka Castle - the most famous landmarks in JapanUmeda Sky Building Floating Garden Observatory (main observation deck)Lunch At Local Indian RestaurantDotonbori District - hotspot for tourists", "Filled with towering neon signs, clubs, bars & restaurantsClick a picture with the iconic Glico Man, shot from under Ebisubashi bridge, a famous picture pointDinner at local Indian restaurantOvernight Stay in Osaka"],
        image: "https://images.unsplash.com/photo-1590250591827-024505f019f6?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 11,
        title: "Osaka - Free time till Check out or flight time",
        location: "Osaka, Kansai",
        description: `Osaka city hotel to KIX/ ITM Airport private transferDeparture Flight : TBA`,
        highlights: ["Explore local attractions and historical landmarks", "Enjoy local dining and sightseeing options"],
        image: "https://images.unsplash.com/photo-1590250591827-024505f019f6?auto=format&fit=crop&w=600&q=80"
      },
    ],
    thingsToDo: [
      {
        title: "Mount Fuji View",
        description: "Photograph the snow-capped peak of Fuji-san from scenic viewpoints and lake cruises.",
        iconName: "Mountain"
      },
      {
        title: "Alpine Route Crossing",
        description: "Traverse the Tateyama Kurobe Alpine Route through majestic mountains and massive snow walls.",
        iconName: "Footprints"
      },
      {
        title: "Hokkaido Scenic Parks",
        description: "Stroll through artistic layouts at Moerenuma Park or seasonal flower fields in Furano.",
        iconName: "Flower"
      },
      {
        title: "Pirate Ship Cruise",
        description: "Sail across the volcanic Lake Ashi on a replica pirate ship with scenic mountain reflections.",
        iconName: "Ship"
      },
      {
        title: "Hakone Ropeway",
        description: "Ride a scenic cable car over volcanic vents and steaming sulfuric valleys in Owakudani.",
        iconName: "RotateCw"
      },
    ],
    travelTips: ["Regional JR Rail Pass: Consider a regional pass to save significantly on Shinkansen bullet train routes.", "IC Card Setup: Download a mobile IC card (Suica/Pasmo) for seamless local bus and subway tap-ins.", "Carry Cash: Many small shrines, temple entrance counters, and local street stalls do not accept credit cards.", "Etiquette & Tipping: Good service is standard; tipping is not practiced and may cause confusion.", "Footwear Manners: Wear slip-on shoes since you'll take them off frequently at temples and traditional ryokans.", "Pocket Wi-Fi / eSIM: Pre-order a pocket Wi-Fi or eSIM to stay connected with navigation maps during your trip."],
    gallery: ["/images/dest-2.jpg", "/images/dest-2.jpg", "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80", "/images/dest-2.jpg", "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80"],
  },
  "japan-with-alpine-route": {
    slug: "japan-with-alpine-route",
    name: "Japan With Alpine Route",
    country: "Japan",
    region: "East Asia",
    tagline: "Discover Japan's natural wonders, volcanic hot springs, and scenic trails over 12 days",
    heroImage: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80",
    overview: `Embark on a magnificent 12-day tour of Japan, starting in Tokyo. This package covers a curated route highlighting key cultural sights, bullet train experiences, local culinary delicacies, and historical landmarks. Perfect for families, first-time visitors, and seasoned travelers seeking a seamless, well-organized itinerary.`,
    quickFacts: {
      currency: "Japanese Yen (¥)",
      climate: "Subtropical to temperate with distinct seasonal changes",
      bestSeason: "March–May (Cherry Blossom) & October–November (Autumn Foliage)",
      languages: "Japanese",
      timeZone: "JST (UTC+9)",
      drivingSide: "Left"
    },
    itinerary: [
      {
        day: 1,
        title: "Tokyo",
        location: "Tokyo, Kanto",
        description: `Arrival Flight Details: TBAAfter disembarking, please follow the signs to the ImmigrationAfter clearing immigration, collect your baggageMeet our representative. Pick up from Airport & transfer to city hotelTransfer to City hotel - Tokyo/ Complete check in formalitiesOvernight stay in Tokyo`,
        highlights: ["Arrival Flight Details: TBAAfter disembarking, please follow the signs to the ImmigrationAfter clearing immigration, collect your baggageMeet our representative", "Pick up from Airport & transfer to city hotelTransfer to City hotel - Tokyo/ Complete check in formalitiesOvernight stay in Tokyo"],
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 2,
        title: "Tokyo - Tokyo City Tour ~ Imperial Palace, Asakusa (Sensoji), Nakamise, Tokyo Skytree, Sumida River, Odaiba",
        location: "Tokyo, Kanto",
        description: `Pick up from Hotel @0900 HrsImperial Palace East Garden (Nijubashi Bridge) (** No Stop/ Pass by)Asakusa Kannon Temple (Sensoji ) - Tokyo's oldest and iconic templeStop at Kaminarimon "Thunder Gate". Capture photos of this iconic entrance to Sensō-ji TempleExplore Nakamise Shopping Street. Shop for traditional souvenirs and snacks along this bustling streetStop for Lunch (Pay locally)Tokyo Skytree - Tembo deck 350 m (Entrance ticket included)Sumida River Cruise from Asakusa to Odaiba Seaside ParkRainbow Bridge (** View from the pier)Proceed to Statue of LibertyOvernight stay at Hotel in Tokyo`,
        highlights: ["Pick up from Hotel @0900 HrsImperial Palace East Garden (Nijubashi Bridge) (** No Stop/ Pass by)Asakusa Kannon Temple (Sensoji ) - Tokyo's oldest and iconic templeStop at Kaminarimon \"Thunder Gate\"", "Capture photos of this iconic entrance to Sens\u014d-ji TempleExplore Nakamise Shopping Street", "Shop for traditional souvenirs and snacks along this bustling streetStop for Lunch (Pay locally)Tokyo Skytree - Tembo deck 350 m (Entrance ticket included)Sumida River Cruise from Asakusa to Odaiba Seaside ParkRainbow Bridge (** View from the pier)Proceed to Statue of LibertyOvernight stay at Hotel in Tokyo"],
        image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 3,
        title: "Tokyo - Tokyo Tour ~ Teamlab Planets, Shibuya Square, Ginza shopping",
        location: "Tokyo, Kanto",
        description: `Pick up from Hotel @0900 Hrsteamlab Planets, a museum where you walk through water, and a garden where you become one with the flowersShibuya Scramble Crossing - the world's busiest pedestrian crossingClick a picture with The Hachiko Statue, honouring the most loyal dog in JapanStop for Lunch (Pay locally)GINZA SIX, a popular upscale shopping area of TokyoReturn to Hotel and free time for own activitiesOvernight stay at Hotel in Tokyo`,
        highlights: ["Explore local attractions and historical landmarks", "Enjoy local dining and sightseeing options"],
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 4,
        title: "Tokyo/ Mt. Fuji/ Matsumoto - Mt Fuji and Hakone Tour by coach ~ Oshino Hakkai, Ōwakudani, Hakone Ropeway, Hakone Ship",
        location: "Tokyo, Kanto",
        description: `After breakfast, check out and assemble at the lobbyMt Fuji and Hakone Tour by coach ~ Oshino Hakkai, Ōwakudani, Jigokudani, Hakone Ropeway, Hakone ShipPick up from hotel @ 0700 Hrs and Visit Oshino Hakkai VillageOshino Hakkai (Springs of Mt. Fuji), a must-visit tourist spot (*weather permitting)crystal clear spring waterŌwakudani - an active volcanic valley, Famous for its black eggs (**weather permitting)Stop for Lunch (Pay locally)Hakone Ropeway cable car and go sightseeing around the Ōwakudani Valley (weather permitting)Hakone Pirate Ship, sail across Lake Ashi for picturesque views of the surrounding mountains.(*weather permitting)Transfer to hotel, complete check in formalitiesOvernight stay in Matsumoto`,
        highlights: ["After breakfast, check out and assemble at the lobbyMt Fuji and Hakone Tour by coach ~ Oshino Hakkai, \u014cwakudani, Jigokudani, Hakone Ropeway, Hakone ShipPick up from hotel @ 0700 Hrs and Visit Oshino Hakkai VillageOshino Hakkai (Springs of Mt", "Fuji), a must-visit tourist spot (*weather permitting)crystal clear spring water\u014cwakudani - an active volcanic valley, Famous for its black eggs (**weather permitting)Stop for Lunch (Pay locally)Hakone Ropeway cable car and go sightseeing around the \u014cwakudani Valley (weather permitting)Hakone Pirate Ship, sail across Lake Ashi for picturesque views of the surrounding mountains", "(*weather permitting)Transfer to hotel, complete check in formalitiesOvernight stay in Matsumoto"],
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 5,
        title: "Matsumoto/Toyama - Matsumoto - Ogizawa Tateyama - Toyama (Alpine Route)",
        location: "Matsumoto, Nagano",
        description: `01 bag per person not exceeding 23 kgs. will be couriered to Osaka hotel. Prepare a bag for overnight/ 02 nights stay and keep all necessary medicines, prescription etc. in itAfter breakfast, Check Out And Proceed to Matsumoto StationHead to the Tateyama Kurobe Alpine Route via busTateyama Station to Bijodaira Station Cable car -> Bijodaira Station to Murodo Station Highland busSightseeing in MurodoStop for Lunch (Pay locally)Murodo Station to Daikanbo Station Trolley bus -> Daikanbo Station to Kurobedaira Station RopewayKurobedaira Station to Kurobeko Station Cable car -> Kurobe Dam SightseeingKurobe Dam Station to Ogizawa Station Trolley busPick up from Ogizawa Station and transfer to hotelReach hotel, complete check in and free time for relaxationOvernight stay at hotel in Toyama`,
        highlights: ["01 bag per person not exceeding 23 kgs", "will be couriered to Osaka hotel", "Prepare a bag for overnight/ 02 nights stay and keep all necessary medicines, prescription etc", "in itAfter breakfast, Check Out And Proceed to Matsumoto StationHead to the Tateyama Kurobe Alpine Route via busTateyama Station to Bijodaira Station Cable car -> Bijodaira Station to Murodo Station Highland busSightseeing in MurodoStop for Lunch (Pay locally)Murodo Station to Daikanbo Station Trolley bus -> Daikanbo Station to Kurobedaira Station RopewayKurobedaira Station to Kurobeko Station Cable car -> Kurobe Dam SightseeingKurobe Dam Station to Ogizawa Station Trolley busPick up from Ogizawa Station and transfer to hotelReach hotel, complete check in and free time for relaxationOvernight stay at hotel in Toyama"],
        image: "https://images.unsplash.com/photo-1590250591827-024505f019f6?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 6,
        title: "Toyama/ Nagoya - Toyama to Nagoya Enroute visiting Shirakawa go",
        location: "Nagoya, Chubu",
        description: `Breakfast at hotelCheck out and proceed to Shirakawa goVisit Ogimachi is the largest and most well-known village in Shirakawa-goStop for Lunch (Pay locally)Hakusan Shirakawa go White Road Fukube no Otaki WaterfallVisit Tsuga no Mokudai (Toganokidai)Senbei (Rice Cracker) Baking ExperienceReach hotel and complete check in formalitiesOvernight stay at Hotel in Nagoya`,
        highlights: ["Explore local attractions and historical landmarks", "Enjoy local dining and sightseeing options"],
        image: "https://images.unsplash.com/photo-1571479539343-4cc06579a099?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 7,
        title: "Nagoya/ Hiroshima - Nagoya ~ Toyota Museum or Railway Park/ Shinkansen Bullet train to Hiroshima",
        location: "Hiroshima, Chugoku",
        description: `01 bag per person not exceeding 23 kgs. will be couriered to Osaka hotel. Prepare a bag for overnight stay and keep all necessary medicines, prescription etc. in itAfter breakfast, pick up from hotel and proceed to Nagoya tourVisit Toyota Automobile Museum [** Advance reservation required/ subject to availability]SC Maglev and Railway Park [** Admission fee included/ simulators cost excluded]Stop for Lunch (Pay locally)After lunch, proceed to Nagoya StationNagoya Station To Hiroshima Station By Bullet TrainPick up from Hiroshima station and transfer to hotelReach hotel and complete check in formalitiesOvernight stay in Hiroshima`,
        highlights: ["01 bag per person not exceeding 23 kgs", "will be couriered to Osaka hotel", "Prepare a bag for overnight stay and keep all necessary medicines, prescription etc", "in itAfter breakfast, pick up from hotel and proceed to Nagoya tourVisit Toyota Automobile Museum [** Advance reservation required/ subject to availability]SC Maglev and Railway Park [** Admission fee included/ simulators cost excluded]Stop for Lunch (Pay locally)After lunch, proceed to Nagoya StationNagoya Station To Hiroshima Station By Bullet TrainPick up from Hiroshima station and transfer to hotelReach hotel and complete check in formalitiesOvernight stay in Hiroshima"],
        image: "https://images.unsplash.com/photo-1590250591827-024505f019f6?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 8,
        title: "Hiroshima/ Osaka - Hiroshima & Miyajima Tour ~Torii gate, Bomb Dome, Peace Memorial park/ Shinkansen Train to Osaka",
        location: "Osaka, Kansai",
        description: `After breakfast, check out from Hotel, proceed to Hiroshima & Miyajima Day tourFerry transfer to Itsukushima ShrineItsukushima Shrine - best known for its "floating" torii gateSee wild deer in MiyajimaReturn to Hiroshima main Island, ferry transferStop for Lunch (Pay locally)Proceed to Hiroshima Peace Memorial MuseumAtomic Bomb Dome (Hiroshima Memorial Park)Proceed to Hiroshima StationHiroshima station to Shin Osaka station Bullet trainPick up from Shin Osaka Station and transfer to Indian RestaurantReach hotel, collect your bags and complete check in formalitiesOvernight stay at hotel in Osaka`,
        highlights: ["Explore local attractions and historical landmarks", "Enjoy local dining and sightseeing options"],
        image: "https://images.unsplash.com/photo-1590250591827-024505f019f6?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 9,
        title: "Osaka - Kyoto Day Tour ~ Arashiyama, Kinkaku -ji, Imperial Palace, Fushimi Inari Shrine",
        location: "Kyoto, Kansai",
        description: `Pick up from Hotel @0900 HrsArashiyama Bamboo Forest -Japan's most famous bamboo forest.Walk through the Bamboo groovesKinkaku-ji - Rokuon-ji is a Zen Buddhist temple, the “the Golden Pavilion”, Mirror PondKyoto Imperial Palace - the former palace of the Emperor of Japan (Drive pass/ No stop**)Stop for Lunch (Pay locally)Fushimi Inari Shrine - famous for its thousands of vermilions torii gates (Short stop**)Return to OsakaOvernight stay at Hotel in Osaka`,
        highlights: ["Pick up from Hotel @0900 HrsArashiyama Bamboo Forest -Japan's most famous bamboo forest", "Walk through the Bamboo groovesKinkaku-ji - Rokuon-ji is a Zen Buddhist temple, the \u201cthe Golden Pavilion\u201d, Mirror PondKyoto Imperial Palace - the former palace of the Emperor of Japan (Drive pass/ No stop**)Stop for Lunch (Pay locally)Fushimi Inari Shrine - famous for its thousands of vermilions torii gates (Short stop**)Return to OsakaOvernight stay at Hotel in Osaka"],
        image: "https://images.unsplash.com/photo-1590250591827-024505f019f6?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 10,
        title: "Osaka - Nara & Kobe Day tour ~Tōdaiji temple, Deer Park, Kobe Meriken Park, Kobe Harbo land",
        location: "Osaka, Kansai",
        description: `Breakfast at HotelPick up from Hotel @0930 HrsVisit Tōdai-ji Temple - the world's largest wooden structure; home to the Great Buddha (*No Entrance)Nara Deer Park - Interact with friendly deer roaming freely in this historic parkStop for Lunch (Pay locally)Proceed to Kobe Meriken Park - Kobe's most popular & picturesque waterfront parkWalk to The Kobe Harborland - shopping and entertainment district, BE KOBE signOvernight Stay in Osaka`,
        highlights: ["Explore local attractions and historical landmarks", "Enjoy local dining and sightseeing options"],
        image: "https://images.unsplash.com/photo-1590250591827-024505f019f6?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 11,
        title: "Osaka - Osaka tour ~Osaka Castle, Umeda Sky Building, Dotonbori/ Shinsaibashi shopping",
        location: "Osaka, Kansai",
        description: `Pick up from Hotel @0900 HrsOsaka Castle - the most famous landmarks in JapanUmeda Sky Building - Floating Garden ObservatoryStop for Lunch (Pay locally)Dotonbori District (Shinsaibashi-Suji Shopping Street) - hotspot for touristsClick a picture with the iconic Glico Man, shot from under Ebisubashi bridge, a famous Osaka picture spotOvernight stay at Hotel in Osaka`,
        highlights: ["Explore local attractions and historical landmarks", "Enjoy local dining and sightseeing options"],
        image: "https://images.unsplash.com/photo-1590250591827-024505f019f6?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 12,
        title: "Osaka - Free time till Check out or flight time",
        location: "Osaka, Kansai",
        description: `Osaka city hotel to KIX/ ITM Airport private transferDeparture Flight : TBA`,
        highlights: ["Explore local attractions and historical landmarks", "Enjoy local dining and sightseeing options"],
        image: "https://images.unsplash.com/photo-1590250591827-024505f019f6?auto=format&fit=crop&w=600&q=80"
      },
    ],
    thingsToDo: [
      {
        title: "Mount Fuji View",
        description: "Photograph the snow-capped peak of Fuji-san from scenic viewpoints and lake cruises.",
        iconName: "Mountain"
      },
      {
        title: "Alpine Route Crossing",
        description: "Traverse the Tateyama Kurobe Alpine Route through majestic mountains and massive snow walls.",
        iconName: "Footprints"
      },
      {
        title: "Hokkaido Scenic Parks",
        description: "Stroll through artistic layouts at Moerenuma Park or seasonal flower fields in Furano.",
        iconName: "Flower"
      },
      {
        title: "Pirate Ship Cruise",
        description: "Sail across the volcanic Lake Ashi on a replica pirate ship with scenic mountain reflections.",
        iconName: "Ship"
      },
      {
        title: "Hakone Ropeway",
        description: "Ride a scenic cable car over volcanic vents and steaming sulfuric valleys in Owakudani.",
        iconName: "RotateCw"
      },
    ],
    travelTips: ["Regional JR Rail Pass: Consider a regional pass to save significantly on Shinkansen bullet train routes.", "IC Card Setup: Download a mobile IC card (Suica/Pasmo) for seamless local bus and subway tap-ins.", "Carry Cash: Many small shrines, temple entrance counters, and local street stalls do not accept credit cards.", "Etiquette & Tipping: Good service is standard; tipping is not practiced and may cause confusion.", "Footwear Manners: Wear slip-on shoes since you'll take them off frequently at temples and traditional ryokans.", "Pocket Wi-Fi / eSIM: Pre-order a pocket Wi-Fi or eSIM to stay connected with navigation maps during your trip."],
    gallery: ["https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80", "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80", "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80", "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80", "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80"],
  },
  "best-of-japan": {
    slug: "best-of-japan",
    name: "Best Of Japan",
    country: "Japan",
    region: "East Asia",
    tagline: "Explore the best of Japan's highlights on this immersive 12-day journey",
    heroImage: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80",
    overview: `Embark on a magnificent 12-day tour of Japan, starting in Tokyo. This package covers a curated route highlighting key cultural sights, bullet train experiences, local culinary delicacies, and historical landmarks. Perfect for families, first-time visitors, and seasoned travelers seeking a seamless, well-organized itinerary.`,
    quickFacts: {
      currency: "Japanese Yen (¥)",
      climate: "Subtropical to temperate with distinct seasonal changes",
      bestSeason: "March–May (Cherry Blossom) & October–November (Autumn Foliage)",
      languages: "Japanese",
      timeZone: "JST (UTC+9)",
      drivingSide: "Left"
    },
    itinerary: [
      {
        day: 1,
        title: "Tokyo",
        location: "Tokyo, Kanto",
        description: `Arrival Flight Details: TBAAfter disembarking, please follow the signs to the ImmigrationCollect your bags and Meet our representativePrivate Transfer to City hotel - TokyoComplete check in formalitiesStandard Check in time 14:00~15:00 hrs. (Early check in on request)Dinner at Indian restaurantOvernight stay in Tokyo`,
        highlights: ["Arrival Flight Details: TBAAfter disembarking, please follow the signs to the ImmigrationCollect your bags and Meet our representativePrivate Transfer to City hotel - TokyoComplete check in formalitiesStandard Check in time 14:00~15:00 hrs", "(Early check in on request)Dinner at Indian restaurantOvernight stay in Tokyo"],
        image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 2,
        title: "Tokyo - Tokyo City Tour ~Imperial Palace, Asakusa (Sensoji), Nakamise, Sumida River, Tokyo Skytree",
        location: "Tokyo, Kanto",
        description: `Pick up from Hotel @0900 HrsImperial Palace East Garden (Nijubashi Bridge) (** No Stop/ Pass by)Asakusa Kannon Temple (Sensoji ) - Tokyo's oldest and iconic templeNakamise Dori - Shopping Arcade where you can walk around the local stores or try famous street food of JapanSumida River walking Tour( Photo stop), for best view of Tokyo Skytree, Golden-Gai and Sakura from the river banksStop for Lunch (Pay locally)Tokyo Skytree - Climb up to the Tembo deck 350 mDinner at local Indian restaurantReturn to Hotel and free time for own activitiesOvernight stay at Hotel in Tokyo`,
        highlights: ["Explore local attractions and historical landmarks", "Enjoy local dining and sightseeing options"],
        image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 3,
        title: "Tokyo - Mt Fuji and Hakone Tour by coach ~ Oshino Hakkai, Ōwakudani, Hakone Ropeway, Hakone Ship",
        location: "Tokyo, Kanto",
        description: `Pick up from hotel and Visit Oshino Hakkai Village @0900 HrsOshino Hakkai (Springs of Mt. Fuji), a must-visit tourist spot (*weather permitting)Ōwakudani - an active volcanic valley, famous for its black eggs (**weather permitting)Stop for Lunch (Pay locally)Hakone Ropeway cable car and go sightseeing around the Ōwakudani Valley (weather permitting)Hakone Pirate Ship - go cruising from Togendai Port to Moto Hakone Port along Ashinoko Lake (*weather permitting)Dinner at Indian restaurantReturn to Tokyo, Reach hotel, free time for own activitiesOvernight stay in Tokyo`,
        highlights: ["Pick up from hotel and Visit Oshino Hakkai Village @0900 HrsOshino Hakkai (Springs of Mt", "Fuji), a must-visit tourist spot (*weather permitting)\u014cwakudani - an active volcanic valley, famous for its black eggs (**weather permitting)Stop for Lunch (Pay locally)Hakone Ropeway cable car and go sightseeing around the \u014cwakudani Valley (weather permitting)Hakone Pirate Ship - go cruising from Togendai Port to Moto Hakone Port along Ashinoko Lake (*weather permitting)Dinner at Indian restaurantReturn to Tokyo, Reach hotel, free time for own activitiesOvernight stay in Tokyo"],
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 4,
        title: "Tokyo - Tokyo Tour ~ Sakura (cherry blossom) & shopping tour ~ Meguro River, Shibuya, Shinjuku, Ginza",
        location: "Tokyo, Kanto",
        description: `Pick up from Hotel @0900 HrsMeguro River Cherry Blossoms Promenade, Tokyo's premier cherry blossom viewing spotsShibuya Scramble Crossing - the world's busiest pedestrian crossingClick a picture with The Hachiko Statue, honouring the most loyal dog in JapanStop for Lunch (Pay locally)Shinjuku Gyoen National GardenGINZA SIX, a popular upscale shopping area of TokyoDinner at local Indian restaurantReturn to Hotel and free time for own activitiesOvernight stay at Hotel in Tokyo`,
        highlights: ["Explore local attractions and historical landmarks", "Enjoy local dining and sightseeing options"],
        image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 5,
        title: "Tokyo - Tokyo Disney Land 1-Day Passpot + Private Round Trip Transfers",
        location: "Tokyo, Kanto",
        description: `Pick up from Hotel @0900 HrsFind original rides, souvenirs, and even characters that you won't see in other DisneylandsTokyo Disneyland with its seven themed lands offers fun attractions and fantastic entertainmentLunch inside theme park (pay locally)Pick up and return transfer to hotelDinner at local Indian restaurantOvernight stay at Hotel in Tokyo`,
        highlights: ["Explore local attractions and historical landmarks", "Enjoy local dining and sightseeing options"],
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 6,
        title: "Tokyo - Nikko World Heritage Tour ~Nikko Toshogu Shrine, Lake Chuzenji, Kegon Falls",
        location: "Tokyo, Kanto",
        description: `01 bag per person not exceeding 23 kgs. will be couriered to Osaka hotel. Prepare a bag for overnight stay and keep all necessary medicines, prescription etc. in itPick up from Hotel @0900 Hrs and proceed to Nikko world heritage sightNikko Toshogu Shrine - A registered UNESCO World Heritage SiteToshogu Shrine in Nikko, you’ll find the original Three Wise Monkeys statue that has gained international fameLake Chuzenji - a symbol of NikkoStop for Lunch (Pay locally)Kegon Falls (elevator to lower observation deck)Return to Hotel and free time for own activitiesDinner at local Indian restaurantOvernight stay at Hotel in Tokyo`,
        highlights: ["01 bag per person not exceeding 23 kgs", "will be couriered to Osaka hotel", "Prepare a bag for overnight stay and keep all necessary medicines, prescription etc", "in itPick up from Hotel @0900 Hrs and proceed to Nikko world heritage sightNikko Toshogu Shrine - A registered UNESCO World Heritage SiteToshogu Shrine in Nikko, you\u2019ll find the original Three Wise Monkeys statue that has gained international fameLake Chuzenji - a symbol of NikkoStop for Lunch (Pay locally)Kegon Falls (elevator to lower observation deck)Return to Hotel and free time for own activitiesDinner at local Indian restaurantOvernight stay at Hotel in Tokyo"],
        image: "https://images.unsplash.com/photo-1590250591827-024505f019f6?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 7,
        title: "Tokyo /Osaka - Tokyo to Osaka - Bullet Train/ Osaka orientation tour ~Tempozan Harbor Village",
        location: "Tokyo, Kanto",
        description: `After breakfast, check out from HotelPick up from Hotel and transfer to Tokyo StationTokyo station to Osaka station in Bullet Train - Shinkansen Nozomi/ Hikari/ SakuraUpon reaching Osaka, pick up and transfer for lunch to nearby restaurant (Pay locally)After having lunch, visit the Tempozan Harbor VillageVisit the Osaka Aquarium Kaiyukan - the world's largest aquarium (*ticket included)Tempozan Ferris Wheel (*ticket excluded)Dinner at Indian restaurantReach hotel and complete check in and free time for relaxationOvernight stay at hotel in Osaka`,
        highlights: ["Explore local attractions and historical landmarks", "Enjoy local dining and sightseeing options"],
        image: "https://images.unsplash.com/photo-1590250591827-024505f019f6?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 8,
        title: "Osaka - Kyoto Day Tour ~ Arashiyama, Kinkakuji, Imperial Palace, Fushimi Inari Shrine",
        location: "Kyoto, Kansai",
        description: `Pick up from Hotel @0900 HrsArashiyama Bamboo Forest -Japan's most famous bamboo forest.Walk through the Bamboo groovesKinkaku-ji - Rokuon-ji is a Zen Buddhist temple, the “the Golden Pavilion”, Mirror PondKyoto Imperial Palace - the former palace of the Emperor of Japan (Drive pass/ No stop**)Stop for Lunch (Pay locally)Fushimi Inari Shrine - famous for its thousands of vermilions torii gates (Short stop**)Dinner at Indian restaurantOvernight stay at Hotel in Osaka`,
        highlights: ["Pick up from Hotel @0900 HrsArashiyama Bamboo Forest -Japan's most famous bamboo forest", "Walk through the Bamboo groovesKinkaku-ji - Rokuon-ji is a Zen Buddhist temple, the \u201cthe Golden Pavilion\u201d, Mirror PondKyoto Imperial Palace - the former palace of the Emperor of Japan (Drive pass/ No stop**)Stop for Lunch (Pay locally)Fushimi Inari Shrine - famous for its thousands of vermilions torii gates (Short stop**)Dinner at Indian restaurantOvernight stay at Hotel in Osaka"],
        image: "https://images.unsplash.com/photo-1590250591827-024505f019f6?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 9,
        title: "Osaka - Nara & Kobe Day tour ~Tōdaiji temple, Deer Park, Kobe Meriken Park, Kobe Harborland",
        location: "Osaka, Kansai",
        description: `Pick up from Hotel @0900 HrsVisit Tōdai-ji Temple - the world's largest wooden structure; home to the Great Buddha (*No Entrance)Nara Deer Park - Interact with friendly deer roaming freely in this historic parkStop for Lunch (Pay locally)Proceed to Kobe Meriken Park - Kobe's most popular & picturesque waterfront parkWalk to The Kobe Harborland - shopping and entertainment district, BE KOBE signReturn to OsakaDinner at Indian restaurantOvernight stay at Hotel in Osaka`,
        highlights: ["Explore local attractions and historical landmarks", "Enjoy local dining and sightseeing options"],
        image: "https://images.unsplash.com/photo-1590250591827-024505f019f6?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 10,
        title: "Osaka - Osaka tour ~Osaka Castle, Umeda Sky Building, Dotonbori/ Shinsaibashi shopping",
        location: "Osaka, Kansai",
        description: `Pick up from Hotel @0900 HrsOsaka Castle - the most famous landmarks in JapanUmeda Sky Building - Floating Garden ObservatoryStop for Lunch (Pay locally)Dotonbori District (Shinsaibashi-Suji Shopping Street) - hotspot for touristsClick a picture with the iconic Glico Man, shot from under Ebisubashi bridge, a famous Osaka picture spotDinner at Indian restaurantOvernight stay at Hotel in Osaka`,
        highlights: ["Explore local attractions and historical landmarks", "Enjoy local dining and sightseeing options"],
        image: "https://images.unsplash.com/photo-1590250591827-024505f019f6?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 11,
        title: "Osaka - Osaka Free & easy ~ spend the day at ease (NO SERVICE EXCEPT HOTEL) {enjoy Shopping/ Onsen spa/ relaxation}",
        location: "Osaka, Kansai",
        description: `Breakfast at hotelSpend the rest of the day at your leisure** No Vehicle & Guide availableOvernight stay at Hotel in OsakaSightseeing suggestions: Universal Studios/ Hiroshima day tour/ shopping / Onsen (hot water bath)`,
        highlights: ["Explore local attractions and historical landmarks", "Enjoy local dining and sightseeing options"],
        image: "https://images.unsplash.com/photo-1590250591827-024505f019f6?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 12,
        title: "Osaka - Free time till Check out or flight time",
        location: "Osaka, Kansai",
        description: `Osaka city hotel to KIX/ ITM Airport private transferDeparture Flight : TBA`,
        highlights: ["Explore local attractions and historical landmarks", "Enjoy local dining and sightseeing options"],
        image: "https://images.unsplash.com/photo-1590250591827-024505f019f6?auto=format&fit=crop&w=600&q=80"
      },
    ],
    thingsToDo: [
      {
        title: "Shinkansen Bullet Train",
        description: "Experience Japan's high-speed train, linking key cities with incredible punctuality and comfort.",
        iconName: "Train"
      },
      {
        title: "Traditional Tea Ceremony",
        description: "Immerse yourself in the Zen practice of preparing and sipping ceremonial matcha in a tatami room.",
        iconName: "BookOpen"
      },
      {
        title: "Sushi & Kaiseki Cuisine",
        description: "Indulge in seasonal culinary masterpieces, from street food stalls to multi-course kaiseki banquets.",
        iconName: "Utensils"
      },
      {
        title: "Temple & Shrine Visits",
        description: "Discover centuries of spiritual heritage at magnificent Shinto shrines and Buddhist temples.",
        iconName: "Landmark"
      },
      {
        title: "Onsen Hot Springs",
        description: "Relax and unwind in volcanic, mineral-rich hot springs with beautiful scenic views.",
        iconName: "Waves"
      },
    ],
    travelTips: ["Regional JR Rail Pass: Consider a regional pass to save significantly on Shinkansen bullet train routes.", "IC Card Setup: Download a mobile IC card (Suica/Pasmo) for seamless local bus and subway tap-ins.", "Carry Cash: Many small shrines, temple entrance counters, and local street stalls do not accept credit cards.", "Etiquette & Tipping: Good service is standard; tipping is not practiced and may cause confusion.", "Footwear Manners: Wear slip-on shoes since you'll take them off frequently at temples and traditional ryokans.", "Pocket Wi-Fi / eSIM: Pre-order a pocket Wi-Fi or eSIM to stay connected with navigation maps during your trip."],
    gallery: ["https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80", "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80", "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80", "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80", "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80"],
  },
  "best-of-japan-the-golden-route": {
    slug: "best-of-japan-the-golden-route",
    name: "Best Of Japan, The Golden Route",
    country: "Japan",
    region: "East Asia",
    tagline: "Explore the best of Japan's highlights on this immersive 12-day journey",
    heroImage: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&w=600&q=80",
    overview: `Embark on a magnificent 12-day tour of Japan, starting in Osaka. This package covers a curated route highlighting key cultural sights, bullet train experiences, local culinary delicacies, and historical landmarks. Perfect for families, first-time visitors, and seasoned travelers seeking a seamless, well-organized itinerary.`,
    quickFacts: {
      currency: "Japanese Yen (¥)",
      climate: "Subtropical to temperate with distinct seasonal changes",
      bestSeason: "March–May (Cherry Blossom) & October–November (Autumn Foliage)",
      languages: "Japanese",
      timeZone: "JST (UTC+9)",
      drivingSide: "Left"
    },
    itinerary: [
      {
        day: 1,
        title: "Osaka",
        location: "Osaka, Kansai",
        description: `Arrival Flight Details: TBAAfter disembarking, please follow the signs to the ImmigrationCollect your bags and Meet our representativePrivate Transfer from KIX/ITM airport to City hotel - OsakaComplete check in formalitiesStandard Check in time 14:00~15:00 hrs. (Early check in on request)Overnight stay in Osaka`,
        highlights: ["Arrival Flight Details: TBAAfter disembarking, please follow the signs to the ImmigrationCollect your bags and Meet our representativePrivate Transfer from KIX/ITM airport to City hotel - OsakaComplete check in formalitiesStandard Check in time 14:00~15:00 hrs", "(Early check in on request)Overnight stay in Osaka"],
        image: "https://images.unsplash.com/photo-1590250591827-024505f019f6?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 2,
        title: "Osaka - Osaka tour ~Osaka Castle, Nishinomaru Garden, Umeda Sky Building, Dotonbori District",
        location: "Osaka, Kansai",
        description: `Breakfast at hotelOsaka tour ~Osaka Castle, Umeda sky Observatory, Dotonbori/ ShinsaibashiPick up from Hotel @0900 HrsOsaka Castle - the most famous landmarks in JapanUmeda Sky Building Floating Garden Observatory (main observation deck)Stop for Lunch (Pay locally)Dotonbori District (Shinsaibashi-Suji Shopping Street) - hotspot for touristsClick a picture with the iconic Glico Man, shot from under Ebisubashi bridge, a famous Osaka picture spotOvernight stay at Hotel in Osaka`,
        highlights: ["Explore local attractions and historical landmarks", "Enjoy local dining and sightseeing options"],
        image: "https://images.unsplash.com/photo-1590250591827-024505f019f6?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 3,
        title: "Osaka - Osaka Free & easy ~ spend the day at ease (NO SERVICE EXCEPT HOTEL)",
        location: "Osaka, Kansai",
        description: `Breakfast at hotelSpend the rest of the day at your leisure** No Vehicle & Guide availableOvernight stay at Hotel in Osaka`,
        highlights: ["Explore local attractions and historical landmarks", "Enjoy local dining and sightseeing options"],
        image: "https://images.unsplash.com/photo-1590250591827-024505f019f6?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 4,
        title: "Osaka/Kyoto - Osaka to Kyoto Transfer/ Kyoto Day Tour ~ Arashiyama, Kinkakuji, Fushimi Inari Shrine",
        location: "Kyoto, Kansai",
        description: `After breakfast, check out from Hotel & proceed to KyotoPick up from Hotel @0900 HrsArashiyama Bamboo Forest -Japan's most famous bamboo forest.Walk through the Bamboo groovesKinkaku-ji - Rokuon-ji is a Zen Buddhist temple, the “the Golden Pavilion”, Mirror PondStop for LunchFushimi Inari Shrine - famous for its thousands of vermilions torii gates (Short stop**)Reach hotel, complete check in formalitiesOvernight stay at Hotel in Kyoto`,
        highlights: ["After breakfast, check out from Hotel & proceed to KyotoPick up from Hotel @0900 HrsArashiyama Bamboo Forest -Japan's most famous bamboo forest", "Walk through the Bamboo groovesKinkaku-ji - Rokuon-ji is a Zen Buddhist temple, the \u201cthe Golden Pavilion\u201d, Mirror PondStop for LunchFushimi Inari Shrine - famous for its thousands of vermilions torii gates (Short stop**)Reach hotel, complete check in formalitiesOvernight stay at Hotel in Kyoto"],
        image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 5,
        title: "Kyoto - Nara Day Tour ~Nijō Castle, Maruyama Garden, Tōdaiji Temple, Nara Deer Park",
        location: "Kyoto, Kansai",
        description: `01 bag per person not exceeding 23 kgs. will be couriered to Tokyo hotel. Prepare a bag for overnight stay and keep all necessary medicines, prescription etc. in itPick up from Hotel @0900 HrsNijō Castle (UNESCO World Heritage) The grounds house a renowned Japanese landscape gardenMaruyama Park Japanese Gardens for best Japanese garden viewsStop for LunchVisit Tōdai-ji Temple - the world's largest wooden structure, the largest bronze statue in the worldNara Deer Park - renowned for its free-roaming deer and world famous templesOvernight stay at Hotel in Kyoto`,
        highlights: ["01 bag per person not exceeding 23 kgs", "will be couriered to Tokyo hotel", "Prepare a bag for overnight stay and keep all necessary medicines, prescription etc", "in itPick up from Hotel @0900 HrsNij\u014d Castle (UNESCO World Heritage) The grounds house a renowned Japanese landscape gardenMaruyama Park Japanese Gardens for best Japanese garden viewsStop for LunchVisit T\u014ddai-ji Temple - the world's largest wooden structure, the largest bronze statue in the worldNara Deer Park - renowned for its free-roaming deer and world famous templesOvernight stay at Hotel in Kyoto"],
        image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 6,
        title: "Kyoto /Hiroshima - Kyoto to Hiroshima - Bullet Train/ Free time for own activities",
        location: "Kyoto, Kansai",
        description: `After breakfast, check out from HotelPick up from Hotel and transfer to Kyoto StationKyoto station to Hiroshima station in Bullet Train - Shinkansen Nozomi/ Hikari/ SakuraUpon reaching Hiroshima, Pick up from the station and transfer to hotelReach hotel, complete check in formalities; rest of the day free for relaxationOvernight stay at hotel in Hiroshima`,
        highlights: ["Explore local attractions and historical landmarks", "Enjoy local dining and sightseeing options"],
        image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 7,
        title: "Hiroshima - Hiroshima & Miyajima tour ~ Itsukushima shrine (Miyajima), Peace Museum & Memorial Park, Atomic Bomb Dome",
        location: "Hiroshima, Chugoku",
        description: `Breakfast at hotelPick up from Hotel @0900 HrsTransfer to ferry terminal, ferry transfer to Itsukushima ShrineItsukushima Shrine - best known for its "floating" torii gateSee wild deer in MiyajimaReturn to Hiroshima main Island, ferry transferStop for lunchProceed to Hiroshima Peace Memorial MuseumAtomic Bomb Dome (Hiroshima Memorial Park)Hiroshima Castle (Drive by)Reach hotel and free time for own activitiesOvernight stay at hotel in Hiroshima`,
        highlights: ["Explore local attractions and historical landmarks", "Enjoy local dining and sightseeing options"],
        image: "https://images.unsplash.com/photo-1542640244-7e672d6cef21?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 8,
        title: "Hiroshima/ Tokyo - Hiroshima to Tokyo Shinkansen Train/ Tokyo Tour ~Odaiba, Statue of liberty, Rainbow bridge",
        location: "Tokyo, Kanto",
        description: `Check out and proceed to Hiroshima stationHiroshima station to Tokyo station in Bullet Train - Shinkansen Nozomi/ Hikari/ SakuraReach Tokyo and proceed to restaurant for lunch (pay locally)Stop for LunchTokyo orientation/ sightseeing tour ~Odaiba, Statue of liberty, Rainbow bridgeOdaiba seaside park - Coastal green space with views of the Rainbow Bridge & cityStatue of LibertyRainbow BridgeTransfer to City hotel - Tokyo/ Collect your bags and Complete check in formalitiesOvernight stay in Tokyo`,
        highlights: ["Explore local attractions and historical landmarks", "Enjoy local dining and sightseeing options"],
        image: "https://images.unsplash.com/photo-1542640244-7e672d6cef21?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 9,
        title: "Tokyo - Tokyo City Tour ~Asakusa (Sensoji), Nakamise, Tokyo Skytree, Sumida River Cruise",
        location: "Tokyo, Kanto",
        description: `Imperial Palace East Garden (Nijubashi Bridge) (** No Stop/ Pass by)Asakusa Kannon Temple (Sensoji ) - Tokyo's oldest and iconic templeStop at Kaminarimon "Thunder Gate". Capture photos of this iconic entrance to Sensō-ji TempleExplore Nakamise Shopping Street. Shop for traditional souvenirs and snacks along this bustling streetStop for Lunch (Pay locally)Tokyo Skytree - Tembo deck 350 m (Entrance ticket included)Sumida River CruiseOvernight stay at Hotel in Tokyo`,
        highlights: ["Imperial Palace East Garden (Nijubashi Bridge) (** No Stop/ Pass by)Asakusa Kannon Temple (Sensoji ) - Tokyo's oldest and iconic templeStop at Kaminarimon \"Thunder Gate\"", "Capture photos of this iconic entrance to Sens\u014d-ji TempleExplore Nakamise Shopping Street", "Shop for traditional souvenirs and snacks along this bustling streetStop for Lunch (Pay locally)Tokyo Skytree - Tembo deck 350 m (Entrance ticket included)Sumida River CruiseOvernight stay at Hotel in Tokyo"],
        image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 10,
        title: "Tokyo - Mt Fuji and Hakone Tour ~ 5th Stn/Oshino Hakkai, Ōwakudani, Hakone Ropeway, Hakone Ship",
        location: "Tokyo, Kanto",
        description: `Pick up from hotel and proceed to Mt Fuji 5th Station @0730 HrsMt. Fuji Fifth Station - Sky Palace (* Weather permitting)If 5th station is closed, we will be visiting Oshino HakkaiOshino Hakkai (Springs of Mt. Fuji), a must-visit tourist spot (*weather permitting). Explore the picturesque eight ponds at the base of Mt. Fuji, filled with crystal clear spring waterŌwakudani - an active volcanic valley, Famous for its black eggs (**weather permitting)Stop for Lunch (Pay locally)Hakone Ropeway cable car and go sightseeing around the Ōwakudani Valley (weather permitting)Hakone Pirate Ship, sail across Lake Ashi for picturesque views of the surrounding mountains.(*weather permitting)Overnight stay in Tokyo`,
        highlights: ["Pick up from hotel and proceed to Mt Fuji 5th Station @0730 HrsMt", "Fuji Fifth Station - Sky Palace (* Weather permitting)If 5th station is closed, we will be visiting Oshino HakkaiOshino Hakkai (Springs of Mt", "Fuji), a must-visit tourist spot (*weather permitting)", "Explore the picturesque eight ponds at the base of Mt"],
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 11,
        title: "Osaka - Tokyo Free & easy ~ spend the day at ease (NO SERVICE EXCEPT HOTEL)",
        location: "Tokyo, Kanto",
        description: `Breakfast at hotelSpend the rest of the day at your leisure** No Vehicle & Guide availableOvernight stay at Hotel in Tokyo`,
        highlights: ["Explore local attractions and historical landmarks", "Enjoy local dining and sightseeing options"],
        image: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 12,
        title: "Tokyo - Free time till Check out or flight time",
        location: "Tokyo, Kanto",
        description: `Tokyo city hotel to NRT/HND Airport private transferDeparture Flight : TBA`,
        highlights: ["Explore local attractions and historical landmarks", "Enjoy local dining and sightseeing options"],
        image: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&w=600&q=80"
      },
    ],
    thingsToDo: [
      {
        title: "Shinkansen Bullet Train",
        description: "Experience Japan's high-speed train, linking key cities with incredible punctuality and comfort.",
        iconName: "Train"
      },
      {
        title: "Traditional Tea Ceremony",
        description: "Immerse yourself in the Zen practice of preparing and sipping ceremonial matcha in a tatami room.",
        iconName: "BookOpen"
      },
      {
        title: "Sushi & Kaiseki Cuisine",
        description: "Indulge in seasonal culinary masterpieces, from street food stalls to multi-course kaiseki banquets.",
        iconName: "Utensils"
      },
      {
        title: "Temple & Shrine Visits",
        description: "Discover centuries of spiritual heritage at magnificent Shinto shrines and Buddhist temples.",
        iconName: "Landmark"
      },
      {
        title: "Onsen Hot Springs",
        description: "Relax and unwind in volcanic, mineral-rich hot springs with beautiful scenic views.",
        iconName: "Waves"
      },
    ],
    travelTips: ["Regional JR Rail Pass: Consider a regional pass to save significantly on Shinkansen bullet train routes.", "IC Card Setup: Download a mobile IC card (Suica/Pasmo) for seamless local bus and subway tap-ins.", "Carry Cash: Many small shrines, temple entrance counters, and local street stalls do not accept credit cards.", "Etiquette & Tipping: Good service is standard; tipping is not practiced and may cause confusion.", "Footwear Manners: Wear slip-on shoes since you'll take them off frequently at temples and traditional ryokans.", "Pocket Wi-Fi / eSIM: Pre-order a pocket Wi-Fi or eSIM to stay connected with navigation maps during your trip."],
    gallery: ["https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&w=600&q=80", "https://images.unsplash.com/photo-1590250591827-024505f019f6?auto=format&fit=crop&w=600&q=80", "https://images.unsplash.com/photo-1590250591827-024505f019f6?auto=format&fit=crop&w=600&q=80", "https://images.unsplash.com/photo-1590250591827-024505f019f6?auto=format&fit=crop&w=600&q=80", "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80"],
  },
  "cherry-blossom-sakura-special": {
    slug: "cherry-blossom-sakura-special",
    name: "Cherry Blossom, Sakura Special",
    country: "Japan",
    region: "East Asia",
    tagline: "A breathtaking 12-day seasonal package chasing Japan's cherry blossoms and scenery",
    heroImage: "https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=600&q=80",
    overview: `Embark on a magnificent 12-day tour of Japan, starting in Kyoto. This package covers a curated route highlighting key cultural sights, bullet train experiences, local culinary delicacies, and historical landmarks. Perfect for families, first-time visitors, and seasoned travelers seeking a seamless, well-organized itinerary.`,
    quickFacts: {
      currency: "Japanese Yen (¥)",
      climate: "Subtropical to temperate with distinct seasonal changes",
      bestSeason: "March–May (Cherry Blossom) & October–November (Autumn Foliage)",
      languages: "Japanese",
      timeZone: "JST (UTC+9)",
      drivingSide: "Left"
    },
    itinerary: [
      {
        day: 1,
        title: "Kyoto - KIX /ITM Airport Arrival - Private transfer to City Hotel Kyoto",
        location: "Kyoto, Kansai",
        description: `Flight Detail: TBAAfter disembarking, please follow the signs to the ImmigrationAfter clearing immigration formalities and claiming your baggage, you will be met the representative who will be waiting for you, holding a Rising Destinations Japan ampersand signYou will then be transferred to the hotel in Kyoto for check inPrivate transfer to Hotel in Kyoto. Standard Check in time 14:00~15:00 hrs. (Early check in on request)Check in and Day free for leisure/ relaxationDinner at Indian restaurantFree time for leisure/ own activitiesOvernight Stay in Kyoto`,
        highlights: ["Flight Detail: TBAAfter disembarking, please follow the signs to the ImmigrationAfter clearing immigration formalities and claiming your baggage, you will be met the representative who will be waiting for you, holding a Rising Destinations Japan ampersand signYou will then be transferred to the hotel in Kyoto for check inPrivate transfer to Hotel in Kyoto", "Standard Check in time 14:00~15:00 hrs", "(Early check in on request)Check in and Day free for leisure/ relaxationDinner at Indian restaurantFree time for leisure/ own activitiesOvernight Stay in Kyoto"],
        image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 2,
        title: "Kyoto - Nara & Osaka City tour ~Tōdaiji Temple, Nara Deer Park, Osaka Castle, Dotonbori Shopping",
        location: "Kyoto, Kansai",
        description: `Breakfast at HotelPick up from Hotel @0900 Hrs and proceed to NaraProceed to Nara Tour (takes approx. 60 minutes to cover about 35 kms)Visit Tōdai-ji Temple - the world's largest wooden structure; the largest bronze statue in the worldNara Deer Park - renowned for its free-roaming deer and world famous templesStop for Lunch at local Indian restaurantAfter lunch, we shall proceed to OsakaOsaka Castle - the most famous landmarks in Japan!Tour ends at Dotonbori District - hotspot for tourists. Filled with towering neon signs, clubs, bars & restaurantsClick a picture with the iconic Glico Man, shot from under Ebisubashi bridge, a famous picture pointReturn to KyotoDinner at Indian restaurantReach hotel. Overnight Stay in Kyoto`,
        highlights: ["Breakfast at HotelPick up from Hotel @0900 Hrs and proceed to NaraProceed to Nara Tour (takes approx", "60 minutes to cover about 35 kms)Visit T\u014ddai-ji Temple - the world's largest wooden structure; the largest bronze statue in the worldNara Deer Park - renowned for its free-roaming deer and world famous templesStop for Lunch at local Indian restaurantAfter lunch, we shall proceed to OsakaOsaka Castle - the most famous landmarks in Japan", "Tour ends at Dotonbori District - hotspot for tourists", "Filled with towering neon signs, clubs, bars & restaurantsClick a picture with the iconic Glico Man, shot from under Ebisubashi bridge, a famous picture pointReturn to KyotoDinner at Indian restaurantReach hotel"],
        image: "https://images.unsplash.com/photo-1590250591827-024505f019f6?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 3,
        title: "Kyoto - Kyoto Day Tour ~ Arashiyama, Kinkaku-ji, Imperial Palace, Fushimi Inari",
        location: "Kyoto, Kansai",
        description: `Pick up from Hotel @0900 HrsArashiyama Bamboo Forest -Japan's most famous bamboo forest.Walk through the Bamboo groovesKinkaku-ji - Rokuon-ji is a Zen Buddhist temple, the “the Golden Pavilion”, Mirror PondKyoto Imperial Palace - the former palace of the Emperor of Japan (Drive pass/ No stop**)Stop for Lunch at local Indian restaurantFushimi Inari Shrine - famous for its thousands of vermilions torii gates (Short stop**)Dinner at Indian restaurantOvernight stay at Hotel in Kyoto`,
        highlights: ["Pick up from Hotel @0900 HrsArashiyama Bamboo Forest -Japan's most famous bamboo forest", "Walk through the Bamboo groovesKinkaku-ji - Rokuon-ji is a Zen Buddhist temple, the \u201cthe Golden Pavilion\u201d, Mirror PondKyoto Imperial Palace - the former palace of the Emperor of Japan (Drive pass/ No stop**)Stop for Lunch at local Indian restaurantFushimi Inari Shrine - famous for its thousands of vermilions torii gates (Short stop**)Dinner at Indian restaurantOvernight stay at Hotel in Kyoto"],
        image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 4,
        title: "Kyoto/ Hiroshima - Kyoto to Hiroshima by Bullet Train ~Itsukushima, Miyajima, Peace Memorial, Memorial park",
        location: "Kyoto, Kansai",
        description: `01 bag per person not exceeding 23 kgs. will be couriered to Nagoya hotel. Prepare a bag for overnight stay and keep all necessary medicines, prescription etc. in itKyoto station to Hiroshima station in Bullet Train - ShinkansenThis super fast bullet train journey takes less than 2 hours each wayUpon reaching Hiroshima, Stop for lunchStop for Lunch at local Indian restaurantAfter lunch, ferry transfer to Itsukushima ShrineItsukushima Shrine - best known for its "floating" torii gateSee wild deer in MiyajimaReturn to Hiroshima main Island, ferry transferProceed to Hiroshima Peace Memorial MuseumAtomic Bomb Dome (Hiroshima Memorial Park)Dinner at Indian restaurantReach hotel and complete check in formalitiesFree time for own activities. Overnight stay at hotel in Hiroshima`,
        highlights: ["01 bag per person not exceeding 23 kgs", "will be couriered to Nagoya hotel", "Prepare a bag for overnight stay and keep all necessary medicines, prescription etc", "in itKyoto station to Hiroshima station in Bullet Train - ShinkansenThis super fast bullet train journey takes less than 2 hours each wayUpon reaching Hiroshima, Stop for lunchStop for Lunch at local Indian restaurantAfter lunch, ferry transfer to Itsukushima ShrineItsukushima Shrine - best known for its \"floating\" torii gateSee wild deer in MiyajimaReturn to Hiroshima main Island, ferry transferProceed to Hiroshima Peace Memorial MuseumAtomic Bomb Dome (Hiroshima Memorial Park)Dinner at Indian restaurantReach hotel and complete check in formalitiesFree time for own activities"],
        image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 5,
        title: "Hiroshima/ Nagoya - Hiroshima - Nagoya Bullet Train followed by Nagoya Tour ~ Toyota Automobile, Nagoya Castle",
        location: "Hiroshima, Chugoku",
        description: `After breakfast, check out from HotelPick up from Hotel and transfer to Hiroshima StationHiroshima station to Nagoya station in Train - Shinkansen Nozomi/ Hikari/ SakuraUpon reaching Nagoya station, pick up and transfer for lunch at local Indian restaurantAfter having lunch, proceed for Nagoya orientation tourReach Nagoya, Toyota Automobile Museum [** Advance reservation required/ subject to availability]ORSC Maglev and Railway Park [** Admission fee included/ simulators cost excluded]Nagoya Castle - one of the largest castles in the world!Dinner at Indian restaurantAfter Dinner, transfer to hotelReach hotel, collect your bags and complete check in formalitiesOvernight stay in Nagoya`,
        highlights: ["Explore local attractions and historical landmarks", "Enjoy local dining and sightseeing options"],
        image: "https://images.unsplash.com/photo-1542640244-7e672d6cef21?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 6,
        title: "Nagoya/ Shizuoka - Nagoya to Hakone/ Enroute, Hakone City Tour ~Hamamatsu Flower Park, Gotemba Premium Outlets",
        location: "Nagoya, Chubu",
        description: `After Breakfast, check out and proceed to KyotoPick up from Nagoya Hotel @0900 HrsThis journey takes about 3½ hours to cover 270 kmsEnroute, visit the Hamamatsu Flower ParkHamamatsu Flower Park - This wide park, located beside the spectacular natural scenery of Lake HamamatsuAfter the picturesque visit of the flower park, we proceed to ShizuokaReach Hakone and proceed to Indian restaurantStop for Lunch at local Indian RestaurantAfter lunch, proceed to Gotemba Premium OutletsGotemba Premium Outlets - shopping and photo spotsorSpend time relaxing at the Miho Beach, beautiful Beach with pine trees and views of Mount FujiDinner at Indian restaurantAfter Dinner, transfer to hotelReach hotel and complete check in formalitiesOvernight stay at Hotel in Shizuoka`,
        highlights: ["Explore local attractions and historical landmarks", "Enjoy local dining and sightseeing options"],
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 7,
        title: "Shizuoka - Mt Fuji and Hakone Tour by coach ~ 5th Stn/Oshino Hakkai, Ōwakudani, Hakone Ropeway, Hakone Ship",
        location: "Hakone, Kanagawa",
        description: `After breakfast, pick up from hotel and proceed to Mt Fuji 5th Station @0900 HrsMt. Fuji Fifth Station - Sky Palace (* Weather permitting)If 5th station is closed, we will be visiting Oshino HakkaiOshino Hakkai (Springs of Mt. Fuji), a must-visit tourist spot crystal clear spring waterStop for Lunch at local Indian RestaurantŌwakudani - an active volcanic valley (**weather permitting)Famous for its black eggs, boiled in the sulphurous waters to give the egg shells a distinctive colourHakone Ropeway cable car and go sightseeing around the Ōwakudani Valley (weather permitting)Hakone Pirate Ship, sail across Lake Ashi for picturesque views of the surrounding mountains (*weather permitting)Dinner at Indian restaurantAfter Dinner, transfer to hotelOvernight stay at hotel in Shizuoka`,
        highlights: ["After breakfast, pick up from hotel and proceed to Mt Fuji 5th Station @0900 HrsMt", "Fuji Fifth Station - Sky Palace (* Weather permitting)If 5th station is closed, we will be visiting Oshino HakkaiOshino Hakkai (Springs of Mt", "Fuji), a must-visit tourist spot crystal clear spring waterStop for Lunch at local Indian Restaurant\u014cwakudani - an active volcanic valley (**weather permitting)Famous for its black eggs, boiled in the sulphurous waters to give the egg shells a distinctive colourHakone Ropeway cable car and go sightseeing around the \u014cwakudani Valley (weather permitting)Hakone Pirate Ship, sail across Lake Ashi for picturesque views of the surrounding mountains (*weather permitting)Dinner at Indian restaurantAfter Dinner, transfer to hotelOvernight stay at hotel in Shizuoka"],
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 8,
        title: "Shizuoka/ Kamakura/ Tokyo - Hakone/Kamakura ~ Hasedera Temple (Great Buddha) / Tokyo ~ Odaiba Seaside Park",
        location: "Tokyo, Kanto",
        description: `After breakfast, check out and proceed to TokyoThis journey takes about 1½ hours to cover 90 kmsEnruote, we will be visiting KamakuraHasedera Temple - Attractive temple with views over KamakuraGreat Buddha of Kamakura - Landmark of KamakuraStop for Lunch at local Indian RestaurantAfter Lunch, proceed to TokyoVisit, Odaiba seaside park - Coastal green space with views of the Rainbow Bridge & cityStatue of Liberty (photo stop)Rainbow Bridge (photo stop)Dinner at Indian restaurantReach hotel and complete check in formalitiesOvernight stay in Tokyo`,
        highlights: ["Explore local attractions and historical landmarks", "Enjoy local dining and sightseeing options"],
        image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 9,
        title: "Tokyo - Tokyo City Tour ~Asakusa (Sensoji), Nakamise, Sumida River, Tokyo Skytree",
        location: "Tokyo, Kanto",
        description: `Pick up from Hotel @0900 HrsAsakusa Kannon Temple (Sensoji ) - Tokyo's oldest and iconic templeStop at Kaminarimon "Thunder Gate". Capture photos of this iconic entrance to Sensō-ji TempleExplore Nakamise Shopping Street. Shop for traditional souvenirs and snacks along this bustling streetStop for Lunch at local Indian RestaurantSumida River Cruise from AsakusaTokyo Skytree - Tembo deck 350 m (Entrance ticket included)Dinner at Indian restaurantReturn to Hotel and free time for own activitiesOvernight stay at Hotel in Tokyo`,
        highlights: ["Pick up from Hotel @0900 HrsAsakusa Kannon Temple (Sensoji ) - Tokyo's oldest and iconic templeStop at Kaminarimon \"Thunder Gate\"", "Capture photos of this iconic entrance to Sens\u014d-ji TempleExplore Nakamise Shopping Street", "Shop for traditional souvenirs and snacks along this bustling streetStop for Lunch at local Indian RestaurantSumida River Cruise from AsakusaTokyo Skytree - Tembo deck 350 m (Entrance ticket included)Dinner at Indian restaurantReturn to Hotel and free time for own activitiesOvernight stay at Hotel in Tokyo"],
        image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 10,
        title: "Tokyo - Tokyo shopping & Sakura tour ~ Meguro River Park, Hie Shrine, Akihabara, Ginza Six",
        location: "Tokyo, Kanto",
        description: `Pick up from Hotel @0900 HrsMeguro River Park - Home to a one kilometre promenade of cherry blossomsMeguro River cherry blossom (** incase Meguro park is closed, we shall take the guests to visit Shinjuku Gyon Park for Cherry Blossom viewing)Visit Hie Shrine, a traditional Japanese Shinto shrine famous for its striking row of red torii gatesStop for Lunch at local Indian RestaurantAkihabara Electric Town (Electronic Shopping Market)Later, proceed to Ginza Six Mall. Ginza Japan’s premier shopping districtDinner at Indian restaurantOvernight stay in Tokyo`,
        highlights: ["Pick up from Hotel @0900 HrsMeguro River Park - Home to a one kilometre promenade of cherry blossomsMeguro River cherry blossom (** incase Meguro park is closed, we shall take the guests to visit Shinjuku Gyon Park for Cherry Blossom viewing)Visit Hie Shrine, a traditional Japanese Shinto shrine famous for its striking row of red torii gatesStop for Lunch at local Indian RestaurantAkihabara Electric Town (Electronic Shopping Market)Later, proceed to Ginza Six Mall", "Ginza Japan\u2019s premier shopping districtDinner at Indian restaurantOvernight stay in Tokyo"],
        image: "https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 11,
        title: "Tokyo - Tokyo Free & easy ~ spend the day at ease (NO SERVICE EXCEPT HOTEL)",
        location: "Tokyo, Kanto",
        description: `Breakfast at hotelSpend the rest of the day at your leisure** No Vehicle & Guide availableOvernight stay at Hotel in TokyoSightseeing suggestions: Disney Land/ Disney Sea/ Nikko World Heritage tour`,
        highlights: ["Explore local attractions and historical landmarks", "Enjoy local dining and sightseeing options"],
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 12,
        title: "Tokyo - Free time till check out or flight time",
        location: "Tokyo, Kanto",
        description: `Tokyo city hotel to NRT/ HND Airport private transferDeparture Flight Details : TBA`,
        highlights: ["Explore local attractions and historical landmarks", "Enjoy local dining and sightseeing options"],
        image: "https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=600&q=80"
      },
    ],
    thingsToDo: [
      {
        title: "Shinkansen Bullet Train",
        description: "Experience Japan's high-speed train, linking key cities with incredible punctuality and comfort.",
        iconName: "Train"
      },
      {
        title: "Traditional Tea Ceremony",
        description: "Immerse yourself in the Zen practice of preparing and sipping ceremonial matcha in a tatami room.",
        iconName: "BookOpen"
      },
      {
        title: "Sushi & Kaiseki Cuisine",
        description: "Indulge in seasonal culinary masterpieces, from street food stalls to multi-course kaiseki banquets.",
        iconName: "Utensils"
      },
      {
        title: "Temple & Shrine Visits",
        description: "Discover centuries of spiritual heritage at magnificent Shinto shrines and Buddhist temples.",
        iconName: "Landmark"
      },
      {
        title: "Onsen Hot Springs",
        description: "Relax and unwind in volcanic, mineral-rich hot springs with beautiful scenic views.",
        iconName: "Waves"
      },
    ],
    travelTips: ["Regional JR Rail Pass: Consider a regional pass to save significantly on Shinkansen bullet train routes.", "IC Card Setup: Download a mobile IC card (Suica/Pasmo) for seamless local bus and subway tap-ins.", "Carry Cash: Many small shrines, temple entrance counters, and local street stalls do not accept credit cards.", "Etiquette & Tipping: Good service is standard; tipping is not practiced and may cause confusion.", "Footwear Manners: Wear slip-on shoes since you'll take them off frequently at temples and traditional ryokans.", "Pocket Wi-Fi / eSIM: Pre-order a pocket Wi-Fi or eSIM to stay connected with navigation maps during your trip."],
    gallery: ["https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=600&q=80", "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80", "https://images.unsplash.com/photo-1590250591827-024505f019f6?auto=format&fit=crop&w=600&q=80", "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80", "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80"],
  },
  "fun-filled-family-highlights-of-japan": {
    slug: "fun-filled-family-highlights-of-japan",
    name: "Fun-Filled Family Highlights Of Japan",
    country: "Japan",
    region: "East Asia",
    tagline: "Explore the best of Japan's highlights on this immersive 14-day journey",
    heroImage: "https://images.unsplash.com/photo-1590250591827-024505f019f6?auto=format&fit=crop&w=600&q=80",
    overview: `Embark on a magnificent 14-day tour of Japan, starting in Tokyo. This package covers a curated route highlighting key cultural sights, bullet train experiences, local culinary delicacies, and historical landmarks. Perfect for families, first-time visitors, and seasoned travelers seeking a seamless, well-organized itinerary.`,
    quickFacts: {
      currency: "Japanese Yen (¥)",
      climate: "Subtropical to temperate with distinct seasonal changes",
      bestSeason: "March–May (Cherry Blossom) & October–November (Autumn Foliage)",
      languages: "Japanese",
      timeZone: "JST (UTC+9)",
      drivingSide: "Left"
    },
    itinerary: [
      {
        day: 1,
        title: "Tokyo NRT/HND Airport Private Arrival Transfer",
        location: "Tokyo, Kanto",
        description: `Arrival Flight Details: TBAAfter disembarking, please follow the signs to the ImmigrationAfter clearing immigration, collect your baggageMeet our representative. Pick up from AirportTransfer to City hotel - Tokyo/ Complete check in formalitiesStandard Check in time 14:00~15:00 hrs. (Early check in on request)Free time for leisure/ relaxation; later proceed for the Tokyo evening sightseeing TourEvening, Discover the illuminated beauty of Tokyo after darkOdaiba seaside park - Coastal green space with views of the Rainbow Bridge & cityVisit the Joypolis for SEGA video game or Diver City mall for shoppingStatue of Liberty (photo stop)Rainbow Bridge (photo stop)Overnight Stay in Tokyo`,
        highlights: ["Arrival Flight Details: TBAAfter disembarking, please follow the signs to the ImmigrationAfter clearing immigration, collect your baggageMeet our representative", "Pick up from AirportTransfer to City hotel - Tokyo/ Complete check in formalitiesStandard Check in time 14:00~15:00 hrs", "(Early check in on request)Free time for leisure/ relaxation; later proceed for the Tokyo evening sightseeing TourEvening, Discover the illuminated beauty of Tokyo after darkOdaiba seaside park - Coastal green space with views of the Rainbow Bridge & cityVisit the Joypolis for SEGA video game or Diver City mall for shoppingStatue of Liberty (photo stop)Rainbow Bridge (photo stop)Overnight Stay in Tokyo"],
        image: "https://images.unsplash.com/photo-1590250591827-024505f019f6?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 2,
        title: "Tokyo - Tokyo City Tour ~Asakusa (Sensoji), Nakamise, Sumida River, Imperial Palace, Chidorigafuchi garden",
        location: "Tokyo, Kanto",
        description: `Pick up from Hotel @1030 HrsAsakusa Kannon Temple (Sensoji) - Tokyo's oldest and iconic templeNakamise DoriSumida River CruiseStop for Lunch (own cost)Imperial Palace East Garden (Nijubashi Bridge) (** No Stop/ Pass by)Chidorigafuchi Moat, Palace moat with a path & boat rental, popular for viewing spring cherry blossoms along the banks (** Boat rental excluded)Return to Hotel and free time for own activitiesOvernight stay at Hotel in Tokyo`,
        highlights: ["Explore local attractions and historical landmarks", "Enjoy local dining and sightseeing options"],
        image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 3,
        title: "Tokyo - Tokyo Full Day City Tour ~ Small World, Ghibli Museum, Doraemon land",
        location: "Tokyo, Kanto",
        description: `Pick up from Hotel @1030 HrsVisit the Small World Tokyo, "miniature theme park" which offers 1:80 miniature worlds in six areas, including a space center, global village, a Kansai Airport and Sailor Moon and Evangelion-themed areas (**subject to Availability of tickets)Visit the Ghibli Museum, a museum showcasing the work of the Japanese animation Studio Ghibli (**subject to Availability of tickets)Stop for Lunch (own cost)Move to Fujiko F. Fujio Museum Doraemon land (Travel time: about 1hours 36 Km)Fujio Museum Doraemon landEnjoy Exhibition Rooms, Animal’s Room , Rooftop Playground Interact with Doraemon Catch a special movie screening at the museum theatre Take a selfie with Doraemon at the rooftop playground etc (**subject to Availability of tickets)Return to HotelOvernight stay in Tokyo`,
        highlights: ["Pick up from Hotel @1030 HrsVisit the Small World Tokyo, \"miniature theme park\" which offers 1:80 miniature worlds in six areas, including a space center, global village, a Kansai Airport and Sailor Moon and Evangelion-themed areas (**subject to Availability of tickets)Visit the Ghibli Museum, a museum showcasing the work of the Japanese animation Studio Ghibli (**subject to Availability of tickets)Stop for Lunch (own cost)Move to Fujiko F", "Fujio Museum Doraemon land (Travel time: about 1hours 36 Km)Fujio Museum Doraemon landEnjoy Exhibition Rooms, Animal\u2019s Room , Rooftop Playground Interact with Doraemon Catch a special movie screening at the museum theatre Take a selfie with Doraemon at the rooftop playground etc (**subject to Availability of tickets)Return to HotelOvernight stay in Tokyo"],
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 4,
        title: "Tokyo - Miraiken Museum → Yokohama Hakkeijima Sea Paradise",
        location: "Tokyo, Kanto",
        description: `Pick up from Hotel @1000 HrsProceed to the Miraiken Museum (National Museum of Emerging Science) - highly interactive and bilingual science museum includes a robotics section with several robots and androids on displayThe National Museum of Emerging Science and Innovation, is a museum created by Japan's Science and Technology AgencyMiraiken is a place where we can understand the things happening in our world today from a scientific point of view; Visitors can experience the technological progress of today, to the latest technologies, the global environment, space exploration and life science.Stop for Lunch (own cost)Move to Hakkeijima Sea Paradise, YokohamaHakkeijima Sea Paradise - Amusement Park with aquarium and ridesAqua Resorts and unlimited rides at Pleasure LandAqua Resorts consists of the Aqua Museum, Dolphin Fantasy and Fureai LagoonPleasure Land is the section of the park with amusement rides for all agesMarine Mammals Show-SMILE, a popular show featuring sea animals such as dolphins and Penguins! Enjoy dynamic jumps and elegant performances.Return to TokyoOvernight stay in Tokyo`,
        highlights: ["Pick up from Hotel @1000 HrsProceed to the Miraiken Museum (National Museum of Emerging Science) - highly interactive and bilingual science museum includes a robotics section with several robots and androids on displayThe National Museum of Emerging Science and Innovation, is a museum created by Japan's Science and Technology AgencyMiraiken is a place where we can understand the things happening in our world today from a scientific point of view; Visitors can experience the technological progress of today, to the latest technologies, the global environment, space exploration and life science", "Stop for Lunch (own cost)Move to Hakkeijima Sea Paradise, YokohamaHakkeijima Sea Paradise - Amusement Park with aquarium and ridesAqua Resorts and unlimited rides at Pleasure LandAqua Resorts consists of the Aqua Museum, Dolphin Fantasy and Fureai LagoonPleasure Land is the section of the park with amusement rides for all agesMarine Mammals Show-SMILE, a popular show featuring sea animals such as dolphins and Penguins", "Enjoy dynamic jumps and elegant performances", "Return to TokyoOvernight stay in Tokyo"],
        image: "https://images.unsplash.com/photo-1590250591827-024505f019f6?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 5,
        title: "Tokyo - Tokyo City Tour - teamlab, Shibuya, Tokyo Metropolitan Building",
        location: "Tokyo, Kanto",
        description: `Teamlab planets, a museum where you walk through water, and a garden where you become one with the flowersTokyo Metropolitan Government Building (TOCHO); Twin tower with two free observation decksStop for Lunch (own cost)Evening, visit the Shibuya Sky - A 360° open-air observation deck located on the roof of the Shibuya Scramble Square skyscraperShibuya Scramble Crossing - the world's busiest pedestrian crossingClick a picture with The Hachiko Statue, honouring the most loyal dog in JapanWatch the 3D billboard of Panda yawning, just around the corner from Shibuya Scramble CrossingOvernight stay at Hotel in Tokyo`,
        highlights: ["Explore local attractions and historical landmarks", "Enjoy local dining and sightseeing options"],
        image: "https://images.unsplash.com/photo-1590250591827-024505f019f6?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 6,
        title: "Tokyo - Tokyo Disney Sea 1-Day Passport + Private Round Trip Transfers",
        location: "Tokyo, Kanto",
        description: `The only Disney Sea Park in the worldMany parkgoers claim it to be the best among Disney-themed parks!Return Transfer from Disneysea Theme ParkReturn to Hotel and free time for own activities`,
        highlights: ["The only Disney Sea Park in the worldMany parkgoers claim it to be the best among Disney-themed parks", "Return Transfer from Disneysea Theme ParkReturn to Hotel and free time for own activities"],
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 7,
        title: "Tokyo - Tokyo Disney Land 1-Day Passport + Private Round Trip Transfers",
        location: "Tokyo, Kanto",
        description: `01 bag per person not exceeding 23 kgs. will be couriered to Osaka hotel. Prepare a bag for overnight stay and keep all necessary medicines, prescription etc. in itFind original rides, souvenirs, and even characters that you won't see in other DisneylandsTokyo Disneyland with its seven themed lands offers fun attractions and fantastic entertainmentReturn Transfer from Disneyland Theme ParkReturn to Hotel and free time for own activities`,
        highlights: ["01 bag per person not exceeding 23 kgs", "will be couriered to Osaka hotel", "Prepare a bag for overnight stay and keep all necessary medicines, prescription etc", "in itFind original rides, souvenirs, and even characters that you won't see in other DisneylandsTokyo Disneyland with its seven themed lands offers fun attractions and fantastic entertainmentReturn Transfer from Disneyland Theme ParkReturn to Hotel and free time for own activities"],
        image: "https://images.unsplash.com/photo-1590250591827-024505f019f6?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 8,
        title: "Tokyo/ Fuji Tour/ Osaka - Mt Fuji and Hakone Tour by coach ~5th Stn., Hakone Ropeway, Lake cruise, Ōwakudani/ Train to Osaka",
        location: "Tokyo, Kanto",
        description: `Check out and proceed to Mt Fuji & Hakone tourPick up from hotel and proceed to Mt Fuji 5th Station @1000 HrsMt. Fuji Fifth Station - Sky Palace (closed from Dec-Mar. In this case, you'll visit the snow resort for snow playing at Mt. Fuji Second Station)Stop for Lunch (own expense)Hakone Ropeway cable car and go sightseeing around the Ōwakudani ValleyŌwakudani - an active volcanic valleyJigokudani - Famous for its black eggs, which are boiled in the sulphurous waters to give the egg shells a distinctive colourHakone Pirate Ship - go cruising from Togendai Port to Moto Hakone Port along Ashinoko LakeTour disbands/ ends at Odawara station. Proceed further to Odawara/ Mishima StationOdawara/ Mishima station to Shin Osaka Station Shinkansen Bullet Train (approx. 469 kms) Economy class Reserved SeatsShin Osaka Station to City Hotel TransferCollect your bags and complete check in formalitiesCheck in and Overnight stay at hotel in Osaka`,
        highlights: ["Check out and proceed to Mt Fuji & Hakone tourPick up from hotel and proceed to Mt Fuji 5th Station @1000 HrsMt", "Fuji Fifth Station - Sky Palace (closed from Dec-Mar", "In this case, you'll visit the snow resort for snow playing at Mt", "Fuji Second Station)Stop for Lunch (own expense)Hakone Ropeway cable car and go sightseeing around the \u014cwakudani Valley\u014cwakudani - an active volcanic valleyJigokudani - Famous for its black eggs, which are boiled in the sulphurous waters to give the egg shells a distinctive colourHakone Pirate Ship - go cruising from Togendai Port to Moto Hakone Port along Ashinoko LakeTour disbands/ ends at Odawara station"],
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 9,
        title: "Osaka - Universal Studios Japan + Private Round Trip Transfers",
        location: "Osaka, Kansai",
        description: `Hotel pick up and transfer to USJEnjoy the day with 01 Day Universal Studio PassUSJ, a theme park with a collection of world-class entertainment for all ages to enjoyPick up from USJ and transfer to Indian restaurantReturn to hotelFree time for own activitiesOvernight stay at Hotel in Osaka`,
        highlights: ["Explore local attractions and historical landmarks", "Enjoy local dining and sightseeing options"],
        image: "https://images.unsplash.com/photo-1590250591827-024505f019f6?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 10,
        title: "Osaka - Osaka Tour ~ Osaka castle, Nishinomaru, Umeda sky building, Dotonbori, Shinsaibashi",
        location: "Osaka, Kansai",
        description: `Pick up from Hotel @1030 HrsOsaka Castle - the most famous landmarks in Japan (*Picture stop/ no entrance)Nishinomaru Garden, an open-space garden with spectacular views of Osaka Castle and hundreds of cherry and plum treesUmeda Sky Building Floating Garden ObservatoryStop for Lunch (Own Cost)Tombori River Cruise - a 20-minute cruise of the Dotonbori canal (**own cost)Enjoy viewing the flashy store signs of Dotonbori as well as Minatomachi River Place from the comfort of a boatDotonbori District (Shinsaibashi-Suji Shopping Street) - hotspot for tourists. Filled with towering neon signs, clubs, bars & restaurantsClick a picture with the iconic Glico Man, shot from under Ebisubashi bridge, a famous Osaka picture spotReturn to Hotel in OsakaOvernight stay at Hotel in Osaka`,
        highlights: ["Pick up from Hotel @1030 HrsOsaka Castle - the most famous landmarks in Japan (*Picture stop/ no entrance)Nishinomaru Garden, an open-space garden with spectacular views of Osaka Castle and hundreds of cherry and plum treesUmeda Sky Building Floating Garden ObservatoryStop for Lunch (Own Cost)Tombori River Cruise - a 20-minute cruise of the Dotonbori canal (**own cost)Enjoy viewing the flashy store signs of Dotonbori as well as Minatomachi River Place from the comfort of a boatDotonbori District (Shinsaibashi-Suji Shopping Street) - hotspot for tourists", "Filled with towering neon signs, clubs, bars & restaurantsClick a picture with the iconic Glico Man, shot from under Ebisubashi bridge, a famous Osaka picture spotReturn to Hotel in OsakaOvernight stay at Hotel in Osaka"],
        image: "https://images.unsplash.com/photo-1590250591827-024505f019f6?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 11,
        title: "Osaka - Naruto Land - Shinchan Crayon Land, Akashi Kaikyo Bridge",
        location: "Osaka, Kansai",
        description: `Breakfast at hotel, Pick up from hotel @0900 HrsMove to Nijigen no mori, an outdoor theme park for two-dimensional anime and manga art in wild natureProceed to Naruto Land, currently the World's largest Naruto amusement park and Boruto amusement parkStop for Lunch (Own Cost)Crayon Shin-chan Adventure Park *This pass is intended for guests over 120cm in height and over 25kg in weight. *We encourage wearing long pants and sneakers for this attractionCrayon Shin-chan Adventure Park ticket includes:1. You've Got It! Sengoku Great Adventure! (Athletic course) 1. Mononoke Ninja Course, 2. Foot Soldier Course, 3. Samurai Course *Guests must be 120cm or taller and 25kg and above to participate in this attraction.2. Challenge! Action Mask Squadron! (Zip-line) *Guests must have a body weight of 25-110kg to participate in this attraction.3. Shin-chan's Horror House of Surprises!4. Hide-and-Seek Labyrinth at Futaba Kindergarten!5. Action Mask’s Secret BaseAfter spending the day at Awajishima Park, we shall proceed for our return to OsakaEnroute, we will be visiting the famous Akashi Kaikyo BridgeLast, drive pass the Akashi Kaikyo Bridge - with a length of almost four kilometres, the world's longest suspension bridge. Akashi-Kaikyo Bridge suspension bridge with Beautiful View Kobe, Mt Rokko & Mt MayaReach hotel and free time for own activitiesOvernight stay at hotel in Osaka`,
        highlights: ["Breakfast at hotel, Pick up from hotel @0900 HrsMove to Nijigen no mori, an outdoor theme park for two-dimensional anime and manga art in wild natureProceed to Naruto Land, currently the World's largest Naruto amusement park and Boruto amusement parkStop for Lunch (Own Cost)Crayon Shin-chan Adventure Park *This pass is intended for guests over 120cm in height and over 25kg in weight", "We encourage wearing long pants and sneakers for this attractionCrayon Shin-chan Adventure Park ticket includes:1", "Sengoku Great Adventure", "(Athletic course) 1"],
        image: "https://images.unsplash.com/photo-1590250591827-024505f019f6?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 12,
        title: "Osaka - Kyoto & Nara Tour ~ Arashiyama, Golden Pavilion, Imperial Palace, Tōdaiji, Deer Park",
        location: "Kyoto, Kansai",
        description: `Pick up from Hotel @1030 HrsArashiyama Bamboo Forest -Japan's most famous bamboo forest.Walk through the Bamboo groovesKinkaku-ji - Rokuon-ji is a Zen Buddhist temple, the “the Golden Pavilion”, Mirror PondKyoto Imperial Palace - the former palace of the Emperor of Japan (Drive pass/ No stop**)Fushimi Inari Shrine - famous for its thousands of vermilions torii gates (Short stop**)Stop for Lunch (Own Cost)After lunch, we proceed towards NaraVisit Nara Tōdaiji Temple and Deer ParkReturn to Hotel in OsakaOvernight stay at Hotel in Osaka`,
        highlights: ["Pick up from Hotel @1030 HrsArashiyama Bamboo Forest -Japan's most famous bamboo forest", "Walk through the Bamboo groovesKinkaku-ji - Rokuon-ji is a Zen Buddhist temple, the \u201cthe Golden Pavilion\u201d, Mirror PondKyoto Imperial Palace - the former palace of the Emperor of Japan (Drive pass/ No stop**)Fushimi Inari Shrine - famous for its thousands of vermilions torii gates (Short stop**)Stop for Lunch (Own Cost)After lunch, we proceed towards NaraVisit Nara T\u014ddaiji Temple and Deer ParkReturn to Hotel in OsakaOvernight stay at Hotel in Osaka"],
        image: "https://images.unsplash.com/photo-1590250591827-024505f019f6?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 13,
        title: "Osaka /Tokyo - Osaka to Tokyo Bullet Train/ Tokyo sightseeing ~Akihabara Shopping, ART Aquarium, Pokémon Café",
        location: "Tokyo, Kanto",
        description: `Check out and transfer to Kyoto stationPrivate Transfer to Osaka stationOsaka to Tokyo Station in Shinkansen Bullet Train - Shinkansen Nozomi/ Hikari/ SakuraPick up from Station and transfer to Indian restaurant for lunchStop for Lunch (pay locally)After lunch, we shall begin with the Tokyo sightseeing tourVisit, Akihabara Electronic Shopping MarketPost lunch, visit the ART AQUARIUM MuseumPokémon CaféFree time for leisure/ own activitiesOvernight stay in Tokyo`,
        highlights: ["Explore local attractions and historical landmarks", "Enjoy local dining and sightseeing options"],
        image: "https://images.unsplash.com/photo-1590250591827-024505f019f6?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 14,
        title: "Tokyo - Free time till check out or flight time",
        location: "Tokyo, Kanto",
        description: `Tokyo city hotel to NRT/HND Airport private transferDeparture Flight : TBA`,
        highlights: ["Explore local attractions and historical landmarks", "Enjoy local dining and sightseeing options"],
        image: "https://images.unsplash.com/photo-1590250591827-024505f019f6?auto=format&fit=crop&w=600&q=80"
      },
    ],
    thingsToDo: [
      {
        title: "Shinkansen Bullet Train",
        description: "Experience Japan's high-speed train, linking key cities with incredible punctuality and comfort.",
        iconName: "Train"
      },
      {
        title: "Traditional Tea Ceremony",
        description: "Immerse yourself in the Zen practice of preparing and sipping ceremonial matcha in a tatami room.",
        iconName: "BookOpen"
      },
      {
        title: "Sushi & Kaiseki Cuisine",
        description: "Indulge in seasonal culinary masterpieces, from street food stalls to multi-course kaiseki banquets.",
        iconName: "Utensils"
      },
      {
        title: "Temple & Shrine Visits",
        description: "Discover centuries of spiritual heritage at magnificent Shinto shrines and Buddhist temples.",
        iconName: "Landmark"
      },
      {
        title: "Onsen Hot Springs",
        description: "Relax and unwind in volcanic, mineral-rich hot springs with beautiful scenic views.",
        iconName: "Waves"
      },
    ],
    travelTips: ["Regional JR Rail Pass: Consider a regional pass to save significantly on Shinkansen bullet train routes.", "IC Card Setup: Download a mobile IC card (Suica/Pasmo) for seamless local bus and subway tap-ins.", "Carry Cash: Many small shrines, temple entrance counters, and local street stalls do not accept credit cards.", "Etiquette & Tipping: Good service is standard; tipping is not practiced and may cause confusion.", "Footwear Manners: Wear slip-on shoes since you'll take them off frequently at temples and traditional ryokans.", "Pocket Wi-Fi / eSIM: Pre-order a pocket Wi-Fi or eSIM to stay connected with navigation maps during your trip."],
    gallery: ["https://images.unsplash.com/photo-1590250591827-024505f019f6?auto=format&fit=crop&w=600&q=80", "https://images.unsplash.com/photo-1590250591827-024505f019f6?auto=format&fit=crop&w=600&q=80", "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80", "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80", "https://images.unsplash.com/photo-1590250591827-024505f019f6?auto=format&fit=crop&w=600&q=80"],
  },
};
