import type { DestinationPageData } from "./destinations";

export const meeaDestinations: Record<string, DestinationPageData> = {
  "abu-dhabi": {
    slug: "abu-dhabi",
    name: "Abu Dhabi",
    country: "United Arab Emirates",
    region: "Middle East",
    tagline: "Where desert grandeur meets visionary ambition on the Arabian Gulf",
    heroImage: "/images/dest-1.jpg",
    overview:
      "Abu Dhabi is a city that defies expectation — a shimmering mirage made real on the edge of the Rub' al Khali, the world's largest uninterrupted sand desert. The gleaming white domes of the Sheikh Zayed Grand Mosque, one of the planet's most magnificent places of worship, set the tone for a capital that treats beauty as policy and hospitality as creed. From the contemporary galleries of Saadiyat Island's Louvre Abu Dhabi to the aromatic spice stalls of the Mina Fish Market, the city moves fluidly between ultramodern ambition and deep-rooted Bedouin tradition.\n\nBeyond the skyline, the mangrove forests of Jubail Island teem with herons and flamingos, while the dunes of the Liwa Oasis rise to heights that dwarf ten-storey buildings. Kayak through mangrove channels at dawn, dine on slow-roasted lamb ouzi in a desert camp at dusk, or wander the Abrahamic Family House — a mosque, church, and synagogue sharing a single campus — to witness interfaith dialogue made architecture.\n\nAbu Dhabi rewards those who look beyond the glittering surface: the heritage village of Al Ain, a UNESCO site of ancient falaj irrigation channels, the falcon hospitals where Emirati hunting culture is preserved, and the date farms of Al Dhafra, where sticky khalas dates are picked by hand. This is a destination where tomorrow is being built without forgetting yesterday.",
    quickFacts: {
      capital: "Abu Dhabi (national capital)",
      currency: "UAE Dirham (AED)",
      climate: "Arid desert with scorching summers and mild, pleasant winters",
      bestSeason: "November–March (cooler temperatures, outdoor festivals)",
      languages: "Arabic, English widely spoken",
      timeZone: "GST (UTC+4)",
      drivingSide: "Right",
    },
    itinerary: [
      {
        day: 1,
        title: "Sheikh Zayed Mosque & Saadiyat Cultural Quarter",
        location: "Abu Dhabi Island & Saadiyat Island",
        description:
          "Begin at the Sheikh Zayed Grand Mosque, where 82 marble domes and the world's largest hand-knotted carpet leave visitors breathless. Spend the afternoon at the Louvre Abu Dhabi, a Jean Nouvel masterpiece where a lattice dome casts a 'rain of light' over galleries spanning 12,000 years of human creativity.",
        highlights: [
          "Walk the reflective pools surrounding the Sheikh Zayed Grand Mosque at sunset",
          "Admire Da Vinci's Salvator Mundi and ancient Mesopotamian artifacts at the Louvre",
          "Photograph the geometric 'rain of light' beneath the Louvre's lattice dome",
          "Dine on Emirati machboos at a waterfront restaurant on Saadiyat",
        ],
        image: "/images/city-1.jpg",
      },
      {
        day: 2,
        title: "Mangroves, Markets & Maritime Heritage",
        location: "Jubail Island & Mina District",
        description:
          "Paddle a kayak through the tangled mangrove channels of Jubail Island at sunrise, spotting herons and crabs in the tidal flats. Return to the city for the Mina Fish Market and the spice-scented alleys of the old souk, where frankincense and saffron are weighed on brass scales.",
        highlights: [
          "Kayak through Jubail Mangrove Park's eco-boardwalks and channels",
          "Haggle for Persian saffron and Omani frankincense in Mina Souk",
          "Sample fresh hammour grilled dockside at the fish market",
          "Visit the Dhow Harbour where traditional wooden boats are still built by hand",
        ],
        image: "/images/tour-1.jpg",
      },
      {
        day: 3,
        title: "Desert Dunes & Bedouin Traditions",
        location: "Liwa Oasis & Al Dhafra",
        description:
          "Drive south into the Empty Quarter for a morning of dune bashing over amber-gold crescents that tower 300 metres high. Lunch on slow-roasted lamb ouzi and Arabic coffee in a Bedouin-style camp before trying your hand at falconry, the region's ancient hunting art.",
        highlights: [
          "Ride a 4x4 over the towering dunes of Moreeb Hill in Liwa",
          "Taste fresh khalas dates straight from an Al Dhafra palm farm",
          "Learn the art of falconry from a licensed Emirati falconer",
          "Stargaze in the unpolluted desert sky after a campfire dinner",
        ],
        image: "/images/explor-1.jpg",
      },
      {
        day: 4,
        title: "Al Ain Oasis & Heritage Sites",
        location: "Al Ain",
        description:
          "Explore the UNESCO-listed Al Ain Oasis, where 147,000 date palms are irrigated by ancient falaj water channels. Ascend Jebel Hafeet for panoramic views, then visit the Al Ain National Museum to trace the region's Bronze Age origins.",
        highlights: [
          "Walk through the shaded palm groves of Al Ain Oasis on elevated walkways",
          "Drive the winding road to the summit of Jebel Hafeet at sunset",
          "Explore Hili Archaeological Park's 5,000-year-old tomb structures",
          "Soak in the natural hot springs at the base of Jebel Hafeet",
        ],
        image: "/images/dest-2.jpg",
      },
      {
        day: 5,
        title: "Abrahamic Family House & Yas Island",
        location: "Saadiyat Island & Yas Island",
        description:
          "Begin at the Abrahamic Family House, a landmark campus uniting a mosque, church, and synagogue in a single architectural dialogue. Spend the afternoon on Yas Island — ride the Formula Rossa coaster at Ferrari World, the fastest in the world, or cool off at Yas Waterworld.",
        highlights: [
          "Tour the mosque, church, and synagogue of the Abrahamic Family House",
          "Experience the 240 km/h launch of Formula Rossa at Ferrari World",
          "Stroll the marina promenade of Yas Bay at golden hour",
          "End the trip with a farewell dinner at a rooftop lounge overlooking the Gulf",
        ],
        image: "/images/city-2.jpg",
      },
    ],
    thingsToDo: [
      {
        title: "Desert Safari & Dune Bashing",
        description:
          "Charge over towering golden dunes in a 4x4 before settling into a Bedouin camp for henna, falconry, and a feast under desert stars.",
        iconName: "Car",
      },
      {
        title: "Sheikh Zayed Grand Mosque Visit",
        description:
          "Explore one of the world's largest mosques, adorned with 24-carat gold chandeliers and the largest hand-knotted carpet ever made.",
        iconName: "Landmark",
      },
      {
        title: "Emirati Culinary Trail",
        description:
          "Taste machboos, luqaimat drizzled in date syrup, and camel milk chocolate across the capital's heritage restaurants and modern bistros.",
        iconName: "Utensils",
      },
      {
        title: "Mangrove Kayaking",
        description:
          "Paddle silently through Jubail's mangrove channels at sunrise, spotting herons, crabs, and juvenile sharks in the shallow tidal flats.",
        iconName: "Waves",
      },
      {
        title: "Louvre Abu Dhabi & Art Scene",
        description:
          "Wander 23 permanent galleries spanning ancient Egyptian sarcophagi to Mondrian canvases beneath Jean Nouvel's iconic lattice dome.",
        iconName: "GraduationCap",
      },
      {
        title: "Falcon Hospital Tour",
        description:
          "Visit the world's largest falcon hospital, where Emirati veterinarians care for prized hunting birds and guests can hold a falcon on a gloved hand.",
        iconName: "Heart",
      },
    ],
    travelTips: [
      "Dress modestly when visiting mosques — women must wear an abaya and headscarf (provided free at Sheikh Zayed Mosque).",
      "Tap water is desalinated and safe to drink, but most locals prefer bottled water.",
      "Alcohol is only served in licensed hotels and restaurants; public intoxication carries strict penalties.",
      "The Hafilat bus network and taxis are affordable, but renting a car is ideal for day trips to Liwa or Al Ain.",
      "Friday is the main prayer day — malls and restaurants may open later; plan museum visits for Saturday–Thursday.",
      "Summer temperatures exceed 45 °C; if visiting June–September, schedule outdoor activities for early morning or after sunset.",
      "Always ask before photographing people, especially Emirati women, and never photograph military or government buildings.",
    ],
    gallery: [
      "/images/dest-1.jpg",
      "/images/city-1.jpg",
      "/images/tour-1.jpg",
      "/images/explor-1.jpg",
      "/images/dest-2.jpg",
    ],
  },

  cappadocia: {
    slug: "cappadocia",
    name: "Cappadocia",
    country: "Turkey",
    region: "Middle East",
    tagline: "A surreal landscape where fairy chimneys pierce the dawn and balloons paint the sky",
    heroImage: "/images/dest-3.jpg",
    overview:
      "Cappadocia is a geological fever dream etched into the Anatolian plateau — a land of honeycombed rock towers, subterranean cities carved eight storeys deep, and valleys so colourful they bear names like Rose, Red, and Love. Millennia of volcanic eruption, wind, and rain sculpted the tuff into the iconic fairy chimneys that now house boutique cave hotels, Byzantine frescoed churches, and artisan pottery studios.\n\nAt dawn, hundreds of hot air balloons rise in silent procession above the town of Göreme, casting kaleidoscopic shadows across a terrain that seems borrowed from another planet. Below, the Open-Air Museum reveals 10th-century rock-cut chapels adorned with vivid depictions of saints and apostles, while the underground city of Derinkuyu stretches deep enough to have sheltered 20,000 people during Byzantine-era sieges.\n\nBeyond the iconic vistas, Cappadocia rewards the curious: hike through the lush Ihlara Valley alongside a murmuring river, watch a potter shape Avanos red clay on a hand-cranked wheel, or share a slow-cooked testi kebab cracked open at your table in a candlelit cave restaurant. Here, the earth itself tells the story.",
    quickFacts: {
      currency: "Turkish Lira (₺)",
      climate: "Semi-arid continental with cold winters and warm, dry summers",
      bestSeason: "April–June & September–October (mild weather, clear balloon flights)",
      languages: "Turkish",
      timeZone: "TRT (UTC+3)",
      drivingSide: "Right",
    },
    itinerary: [
      {
        day: 1,
        title: "Göreme Open-Air Museum & Fairy Chimneys",
        location: "Göreme, Cappadocia",
        description:
          "Arrive in Göreme and check into a cave hotel hollowed from volcanic tuff. Walk to the UNESCO-listed Open-Air Museum to explore rock-cut churches adorned with 10th-century Byzantine frescoes, then hike to Sunset Point for a panoramic view as the fairy chimneys blush amber.",
        highlights: [
          "Admire the Dark Church frescoes, among the best-preserved in Cappadocia",
          "Walk among the towering fairy chimneys of Monks Valley (Paşabağ)",
          "Photograph the panoramic Göreme Valley from Sunset Point",
          "Settle into a candlelit cave restaurant for your first testi kebab",
        ],
        image: "/images/dest-3.jpg",
      },
      {
        day: 2,
        title: "Hot Air Balloon Flight & Rose Valley Hike",
        location: "Göreme & Rose Valley",
        description:
          "Rise before dawn for the once-in-a-lifetime experience of floating silently over Cappadocia's surreal landscape in a hot air balloon. After landing with a champagne toast, hike through Rose Valley's pink-and-apricot rock tunnels, pausing at hidden cave churches.",
        highlights: [
          "Float above fairy chimneys and pigeon houses at sunrise in a hot air balloon",
          "Toast your landing with Turkish sparkling wine in a meadow",
          "Hike the Rose-to-Red Valley trail through pink-hued rock tunnels",
          "Discover the Column Church hidden inside a Rose Valley cliff",
        ],
        image: "/images/explor-2.jpg",
      },
      {
        day: 3,
        title: "Underground City & Ihlara Valley",
        location: "Derinkuyu & Ihlara Valley",
        description:
          "Descend into Derinkuyu Underground City, an eight-storey labyrinth of tunnels, churches, and stables that once sheltered 20,000 people. In the afternoon, hike the lush Ihlara Valley, a 14-kilometre canyon carved by the Melendiz River, dotted with cave churches and wildflowers.",
        highlights: [
          "Explore Derinkuyu's ventilation shafts, wine cellars, and rolling stone doors",
          "Lunch at a riverside restaurant beside the Melendiz in Ihlara Valley",
          "Visit Ağaçaltı Church with its vivid Ascension fresco inside the canyon",
          "Spot kingfishers and poplars along the valley's riverside trail",
        ],
        image: "/images/tour-2.jpg",
      },
      {
        day: 4,
        title: "Avanos Pottery & Uçhisar Castle",
        location: "Avanos & Uçhisar",
        description:
          "Cross the Kızılırmak River to Avanos, Cappadocia's pottery capital, and shape your own vessel on a traditional wheel using the region's distinctive red clay. Afternoon, climb to the pinnacle of Uçhisar Castle — the highest point in Cappadocia — for a 360-degree panorama.",
        highlights: [
          "Throw a pot on a hand-cranked wheel in a centuries-old Avanos workshop",
          "Browse the Avanos Hair Museum, one of the world's quirkiest collections",
          "Climb through tunnels to the summit of Uçhisar Castle rock fortress",
          "Sip Turkish tea as the sun sets over Pigeon Valley from Uçhisar",
        ],
        image: "/images/city-3.jpg",
      },
      {
        day: 5,
        title: "Love Valley, Horseback Ride & Farewell",
        location: "Love Valley & Çavuşin",
        description:
          "Explore the phallic rock pillars of Love Valley on horseback — the region's name, Cappadocia, derives from the ancient Persian for 'land of beautiful horses.' Visit the ancient basilica at Çavuşin, then savour a farewell dinner of Anatolian manti dumplings in a vine-draped courtyard.",
        highlights: [
          "Ride through Love Valley's towering pillar formations on horseback",
          "Explore the 5th-century Çavuşin Church, one of the region's oldest",
          "Shop for hand-woven Turkish carpets in a Göreme cooperative",
          "End with a Turkish night show featuring whirling dervish ceremony",
        ],
        image: "/images/explor-3.jpg",
      },
    ],
    thingsToDo: [
      {
        title: "Hot Air Balloon Flight",
        description:
          "Drift silently over fairy chimneys, pigeon valleys, and rock-cut churches as the Cappadocian dawn paints the landscape in gold and rose.",
        iconName: "Globe",
      },
      {
        title: "Cave Trekking & Valley Hikes",
        description:
          "Explore Rose, Red, Love, and Ihlara valleys on foot, discovering hidden cave churches, rock tunnels, and wildflower meadows.",
        iconName: "Mountain",
      },
      {
        title: "Underground City Exploration",
        description:
          "Descend into Derinkuyu or Kaymaklı to navigate eight-storey labyrinths of tunnels, churches, and rolling-stone blast doors.",
        iconName: "MapPin",
      },
      {
        title: "Anatolian Cuisine",
        description:
          "Crack open a clay-sealed testi kebab, fold gözleme over wood fires, and sip local Cappadocian wine in candlelit cave restaurants.",
        iconName: "Utensils",
      },
      {
        title: "Pottery Workshop in Avanos",
        description:
          "Shape the region's famous red clay on a hand-cranked wheel guided by a master potter whose family has worked the craft for generations.",
        iconName: "Lightbulb",
      },
      {
        title: "Horseback Riding",
        description:
          "Ride through Love Valley and Sword Valley on Anatolian horses, experiencing the landscape the way ancient Persians named it.",
        iconName: "Heart",
      },
    ],
    travelTips: [
      "Book your balloon flight at least 2 weeks in advance during peak season (April–October); flights depend on weather and are cancelled for high winds.",
      "Wear sturdy shoes with grip — the tuff rock is slippery when wet and trails are uneven.",
      "Cappadocia can drop below freezing in winter; bring layers from November to March.",
      "Rent an ATV or scooter to explore remote valleys independently — the terrain is gentle and well-marked.",
      "The Göreme Open-Air Museum's Dark Church requires a separate ticket — it's worth the extra fee for the frescoes.",
      "Carry cash for small pottery workshops and village markets; card acceptance outside hotels is limited.",
    ],
    gallery: [
      "/images/dest-3.jpg",
      "/images/explor-2.jpg",
      "/images/tour-2.jpg",
      "/images/city-3.jpg",
      "/images/explor-3.jpg",
    ],
  },

  petra: {
    slug: "petra",
    name: "Petra",
    country: "Jordan",
    region: "Middle East",
    tagline: "The Rose City carved from living rock, where history breathes through stone",
    heroImage: "/images/dest-4.jpg",
    overview:
      "Petra is not merely a ruin — it is a revelation. Approaching through the Siq, a narrow gorge flanked by 80-metre sandstone walls streaked in crimson and ochre, the first glimpse of Al-Khazneh (the Treasury) hits like a physical force. This Nabatean masterpiece, carved directly into the cliff face over 2,000 years ago, once served as a royal tomb and now stands as one of the New Seven Wonders of the World, its Hellenistic columns glowing pink in the morning light.\n\nBut the Treasury is only the prologue. Petra's archaeological park sprawls across 264 square kilometres of wadis and ridges, sheltering over 800 carved structures: the colonnaded Roman-era Street of Façades, the massive Monastery (Ad-Deir) perched atop 800 hand-carved steps, royal tombs with swirling polychrome interiors, and a Byzantine church with exquisite floor mosaics. The Nabateans were master hydraulic engineers, and their system of dams, channels, and cisterns turned this arid canyon into a flourishing trade capital on the incense route.\n\nModern Petra is equally compelling: the Bedouin community of Umm Sayhoun offers homestay dinners of mansaf and zarb cooked underground, while Petra by Night illuminates the Treasury with 1,500 candles and Bedouin flute music echoing through the Siq. To stand here is to feel the weight and wonder of human ambition carved into eternity.",
    quickFacts: {
      capital: "Amman",
      currency: "Jordanian Dinar (JOD)",
      climate: "Arid with hot summers, cool winters, and occasional flash floods in the Siq",
      bestSeason: "March–May & September–November (mild temperatures for hiking)",
      languages: "Arabic, English widely understood in tourist areas",
      timeZone: "EET (UTC+2) / EEST (UTC+3 in summer)",
      drivingSide: "Right",
    },
    itinerary: [
      {
        day: 1,
        title: "The Siq & The Treasury at Dawn",
        location: "Petra Archaeological Park",
        description:
          "Enter the park at sunrise before the crowds and walk the 1.2-kilometre Siq as light pierces the narrow gorge, painting the sandstone walls in shades of rose and tangerine. Emerge to the full glory of Al-Khazneh, then explore the Street of Façades and the Roman Theatre carved for 8,500 spectators.",
        highlights: [
          "Walk the Siq at dawn as light filters through the 80-metre canyon walls",
          "Stand before Al-Khazneh (the Treasury) in the golden morning light",
          "Explore the Street of Façades with its rows of Nabatean tomb fronts",
          "Sit in the Roman Theatre carved entirely from the cliff face",
        ],
        image: "/images/dest-4.jpg",
      },
      {
        day: 2,
        title: "The Monastery & High Place of Sacrifice",
        location: "Petra Highlands",
        description:
          "Climb 800 rock-cut steps to Ad-Deir, the Monastery — even grander than the Treasury at 47 metres wide. Reward yourself with sage tea at the clifftop café. Descend via the High Place of Sacrifice trail for sweeping views over the Wadi Araba rift valley.",
        highlights: [
          "Ascend the 800-step trail to the colossal Monastery (Ad-Deir)",
          "Sip Bedouin sage tea at the cliff-edge café overlooking the valley",
          "Hike the High Place of Sacrifice trail with panoramic Wadi Araba views",
          "Discover the Lion Triclinium and Garden Temple along the descent",
        ],
        image: "/images/explor-4.jpg",
      },
      {
        day: 3,
        title: "Royal Tombs & Byzantine Mosaics",
        location: "Petra Central Valley",
        description:
          "Spend the morning exploring the Royal Tombs — the Urn Tomb, Silk Tomb, and Palace Tomb — whose interiors reveal swirling bands of natural sandstone colour. Visit the Byzantine Church with its stunning 6th-century floor mosaics, then walk the Colonnaded Street to the Qasr al-Bint temple.",
        highlights: [
          "Enter the Urn Tomb's vast interior, later converted into a Byzantine church",
          "Marvel at the polychrome swirls inside the Silk Tomb's carved chamber",
          "Examine 6th-century floor mosaics in the Petra Byzantine Church",
          "Walk the Colonnaded Street to the Qasr al-Bint, Petra's only freestanding temple",
        ],
        image: "/images/tour-3.jpg",
      },
      {
        day: 4,
        title: "Petra by Night & Bedouin Cultural Evening",
        location: "Petra & Umm Sayhoun",
        description:
          "Spend the day on lesser-known trails — Wadi Farasa, the Snake Monument, and the Turkmaniyya Tomb. As night falls, join Petra by Night: 1,500 candles line the Siq and illuminate the Treasury while Bedouin musicians play haunting flute melodies. End with a mansaf dinner in a Bedouin tent.",
        highlights: [
          "Hike the quiet Wadi Farasa trail past the Renaissance Tomb and Soldier's Tomb",
          "Walk the candlelit Siq during the magical Petra by Night experience",
          "Listen to Bedouin oud and flute music before the glowing Treasury",
          "Feast on mansaf (lamb in fermented yoghurt) at a Bedouin homestay in Umm Sayhoun",
        ],
        image: "/images/banner-1.jpg",
      },
      {
        day: 5,
        title: "Little Petra & Dana Nature Reserve",
        location: "Siq al-Barid & Dana",
        description:
          "Visit Siq al-Barid (Little Petra), a miniature canyon with Nabatean dining halls and the only surviving Nabatean painted ceiling fresco. Drive to the Dana Biosphere Reserve for a hike through sandstone canyons where ibex and eagles roam among juniper forests.",
        highlights: [
          "Explore the Painted House in Little Petra with its rare Nabatean frescoes",
          "Spot Nubian ibex and Bonelli's eagles on Dana's Wadi Dana trail",
          "Hike from Dana village through red sandstone canyons to Feynan",
          "Pick up handmade silver jewellery and leather goods from the Dana co-op",
        ],
        image: "/images/dest-5.jpg",
      },
    ],
    thingsToDo: [
      {
        title: "Petra by Night",
        description:
          "Walk the candlelit Siq to the Treasury, where 1,500 candles and Bedouin flute music create an atmosphere of haunting beauty.",
        iconName: "Landmark",
      },
      {
        title: "Hiking the Monastery Trail",
        description:
          "Climb 800 hand-carved steps to Ad-Deir, a colossal facade even wider than the Treasury, perched high above the valley.",
        iconName: "Mountain",
      },
      {
        title: "Bedouin Cuisine & Homestays",
        description:
          "Share mansaf, zarb underground-cooked lamb, and cardamom coffee with Bedouin families in Umm Sayhoun village.",
        iconName: "Utensils",
      },
      {
        title: "Photography in the Siq",
        description:
          "Capture the interplay of light and shadow as sunbeams pierce the narrow canyon, illuminating the sandstone in ever-changing hues.",
        iconName: "Camera",
      },
      {
        title: "Dana Biosphere Trekking",
        description:
          "Hike through Jordan's largest nature reserve, a mosaic of sandstone canyons, juniper forests, and rare wildlife.",
        iconName: "Globe",
      },
      {
        title: "Wadi Rum Excursion",
        description:
          "Combine Petra with a jeep safari through Wadi Rum's red desert, where Lawrence of Arabia once rode among towering rock arches.",
        iconName: "Car",
      },
    ],
    travelTips: [
      "Buy the Jordan Pass online before arrival — it includes your visa fee and Petra entry for 1, 2, or 3 days.",
      "Enter the park at 6 AM opening to have the Treasury nearly to yourself for 30–45 minutes.",
      "Bring at least 3 litres of water per person per day — the site is vast, exposed, and brutally hot in summer.",
      "Petra by Night runs Monday, Wednesday, and Thursday only — check schedules and book ahead.",
      "Wear sturdy hiking boots; the 800 steps to the Monastery are rough-cut and uneven.",
      "Carry Jordanian Dinar in small bills for Bedouin tea stalls and handicraft vendors inside the park.",
      "Flash floods can occur in the Siq during rainy months (December–February) — always check weather advisories.",
    ],
    gallery: [
      "/images/dest-4.jpg",
      "/images/explor-4.jpg",
      "/images/tour-3.jpg",
      "/images/banner-1.jpg",
      "/images/dest-5.jpg",
    ],
  },

  "dead-sea": {
    slug: "dead-sea",
    name: "Dead Sea",
    country: "Jordan",
    region: "Middle East",
    tagline: "Float weightlessly at the lowest point on Earth, where minerals heal and time slows",
    heroImage: "/images/dest-6.jpg",
    overview:
      "The Dead Sea lies 430 metres below sea level — the lowest point on any continent — a shimmering, mineral-laden body of water so dense that swimmers float effortlessly on its surface like corks on a pond. Fed by the Jordan River and ringed by the tawny cliffs of the Judean and Moabite mountains, this ancient lake has drawn pilgrims, monarchs, and wellness seekers for millennia. Cleopatra herself dispatched envoys to secure exclusive rights to its therapeutic mud and salt.\n\nThe water's salinity, roughly ten times that of the ocean, creates a buoyancy unlike anything else on Earth. Coating yourself in the mineral-rich black mud that lines the shore — packed with magnesium, calcium, potassium, and bromine — is believed to ease psoriasis, improve skin elasticity, and soothe aching joints. Luxury resorts along the Jordanian shore have built entire wellness philosophies around this natural pharmacy, offering Dead Sea salt scrubs, sulfur spring soaks, and mineral wrap treatments.\n\nBeyond floating, the Dead Sea corridor is rich with history: the hillside fortress of Masada rises dramatically to the west, the Baptism Site of Bethany-beyond-the-Jordan lies at the northern tip, and the mosaics of Madaba — the 'City of Mosaics' — are a short drive inland. The landscape itself is haunting: salt pillars emerge from the receding shoreline, sinkholes open in patterns of blue and white, and the air, rich in oxygen and low in allergens, feels softer than anywhere else you've breathed.",
    quickFacts: {
      capital: "Amman",
      currency: "Jordanian Dinar (JOD)",
      climate: "Hot desert with year-round sunshine and exceptionally dry air",
      bestSeason: "October–April (comfortable temperatures for floating and hiking)",
      languages: "Arabic, English at resorts",
      timeZone: "EET (UTC+2) / EEST (UTC+3 in summer)",
      drivingSide: "Right",
    },
    itinerary: [
      {
        day: 1,
        title: "Arrival & First Float",
        location: "Dead Sea Eastern Shore, Jordan",
        description:
          "Check into a Dead Sea resort and take your first iconic float — the water's density makes sinking physically impossible. Coat yourself in mineral-rich black mud from the shoreline, let it dry in the sun, then rinse to reveal impossibly soft skin. Watch the sunset paint the Judean hills gold from an infinity pool that seems to merge with the sea itself.",
        highlights: [
          "Experience effortless flotation in the world's saltiest body of water",
          "Apply mineral-rich black mud from the shoreline for a natural skin treatment",
          "Watch the sun set over the Judean Mountains from a cliffside infinity pool",
          "Dine on mezze and grilled meats at a resort overlooking the Dead Sea",
        ],
        image: "/images/dest-6.jpg",
      },
      {
        day: 2,
        title: "Bethany Baptism Site & Hot Springs",
        location: "Bethany-beyond-the-Jordan & Ma'in Hot Springs",
        description:
          "Visit the UNESCO-listed Baptism Site of Jesus at Bethany-beyond-the-Jordan, where ancient steps descend to the river. Afternoon, drive to the Ma'in Hot Springs, where steaming waterfalls cascade down basalt cliffs into warm therapeutic pools surrounded by lush canyon vegetation.",
        highlights: [
          "Walk to the exact spot on the Jordan River where Jesus was baptised",
          "Soak under the steaming waterfalls of Ma'in Hot Springs",
          "Float in warm sulfur pools set into a dramatic basalt canyon",
          "Enjoy a traditional Jordanian lunch of maqluba at a local restaurant",
        ],
        image: "/images/tour-4.jpg",
      },
      {
        day: 3,
        title: "Madaba Mosaics & Mount Nebo",
        location: "Madaba & Mount Nebo",
        description:
          "Drive to Madaba, the City of Mosaics, to see the famous 6th-century mosaic map of the Holy Land on the floor of St. George's Church. Continue to Mount Nebo, where Moses is said to have glimpsed the Promised Land — on clear days the view stretches to Jerusalem and the Jordan Valley.",
        highlights: [
          "Study the 6th-century Madaba Mosaic Map in St. George's Church",
          "Stand at Moses' viewpoint on Mount Nebo overlooking the Promised Land",
          "Visit the Madaba Archaeological Museum for Roman-era mosaic floors",
          "Shop for hand-crafted mosaic art in Madaba's artisan workshops",
        ],
        image: "/images/city-4.jpg",
      },
      {
        day: 4,
        title: "Wadi Mujib Canyon Adventure",
        location: "Wadi Mujib Biosphere Reserve",
        description:
          "Embark on the Siq Trail of Wadi Mujib, Jordan's Grand Canyon — wade through waist-deep turquoise water between towering sandstone walls, scramble over boulders, and swim through natural pools to reach a hidden waterfall deep inside the gorge.",
        highlights: [
          "Wade and swim through the narrow Siq Trail of Wadi Mujib canyon",
          "Scramble over boulders to a hidden waterfall inside the gorge",
          "Spot ibex and eagles in Jordan's lowest nature reserve",
          "Cool off in the crystalline blue pools at the canyon's heart",
        ],
        image: "/images/explor-5.jpg",
      },
    ],
    thingsToDo: [
      {
        title: "Dead Sea Floating",
        description:
          "Experience the surreal sensation of floating effortlessly on water ten times saltier than the ocean, at the lowest point on Earth.",
        iconName: "Waves",
      },
      {
        title: "Mineral Mud Therapy",
        description:
          "Coat yourself in the Dead Sea's famous black mineral mud, rich in magnesium and potassium, for natural skin healing and rejuvenation.",
        iconName: "Heart",
      },
      {
        title: "Ma'in Hot Springs Soak",
        description:
          "Bathe beneath steaming waterfalls that cascade down basalt cliffs into warm sulfur pools in a lush canyon setting.",
        iconName: "Dumbbell",
      },
      {
        title: "Wadi Mujib Canyoneering",
        description:
          "Wade, swim, and scramble through the dramatic Siq Trail of Jordan's Grand Canyon to a hidden waterfall.",
        iconName: "Mountain",
      },
      {
        title: "Bethany Baptism Site",
        description:
          "Visit the UNESCO World Heritage site where Jesus was baptised, walking ancient pilgrimage paths along the Jordan River.",
        iconName: "Landmark",
      },
      {
        title: "Mosaic Art in Madaba",
        description:
          "Explore the City of Mosaics, home to the oldest surviving cartographic depiction of the Holy Land on a 6th-century church floor.",
        iconName: "BookOpen",
      },
    ],
    travelTips: [
      "Do not shave or wax within 24 hours of entering the Dead Sea — the salt will sting any micro-cuts intensely.",
      "Keep the water away from your eyes; if splashed, rinse immediately with fresh water (available at shoreline stations).",
      "Limit floating sessions to 20 minutes to avoid dehydration and mineral overload on your skin.",
      "Wear old swimwear — the high mineral content can discolour fabric permanently.",
      "The Dead Sea is receding rapidly; sinkholes form along the shore, so only swim at designated resort beaches.",
      "Carry cash for roadside stalls selling Dead Sea salt products and handmade soaps at much lower prices than resort shops.",
      "Wadi Mujib's Siq Trail is only open April–October and closes after heavy rain — confirm conditions the morning of your visit.",
    ],
    gallery: [
      "/images/dest-6.jpg",
      "/images/tour-4.jpg",
      "/images/city-4.jpg",
      "/images/explor-5.jpg",
    ],
  },

  muscat: {
    slug: "muscat",
    name: "Muscat",
    country: "Oman",
    region: "Middle East",
    tagline: "Where rugged mountains plunge into turquoise waters and frankincense perfumes the air",
    heroImage: "/images/dest-7.jpg",
    overview:
      "Muscat is the antithesis of its flashier Gulf neighbours — a capital that has chosen restraint over spectacle, weaving its whitewashed, low-rise buildings into the folds of the craggy Al Hajar mountains that tumble directly into the Gulf of Oman. No structure is permitted to be taller than the Sultan Qaboos Grand Mosque's minaret, and the result is a city that feels both majestic and intimate, where the scent of burning frankincense drifts from open doorways and the call to prayer echoes off ancient watchtowers.\n\nThe Muttrah Corniche, a crescent-shaped waterfront backed by the Muttrah Souq — one of the oldest marketplaces in the Arab world — offers a sensory immersion of silver khanjars (daggers), fragrant oils, embroidered kumma caps, and Omani halwa sweets. Behind the souq's labyrinthine alleys, the Al Alam Royal Palace gleams in gold and blue between the twin Portuguese forts of Mirani and Jalali, reminders of Oman's centuries-long role as a maritime superpower.\n\nBeyond the city, Muscat's governorate is a natural playground: the fjord-like inlets of Bandar Khayran harbour dolphins and hawksbill turtles, the limestone sinkholes of Bimmah host crystalline turquoise pools, and the Wadi Shab gorge requires swimming through emerald pools to reach a hidden cave waterfall. Oman's culture of generous hospitality — expressed in endless cups of kahwa coffee and dates offered to every guest — makes Muscat not just a destination, but a welcome.",
    quickFacts: {
      capital: "Muscat (national capital)",
      currency: "Omani Rial (OMR)",
      climate: "Hot arid desert along the coast with humid summers and mild winters",
      bestSeason: "October–March (pleasant temperatures, whale shark season)",
      languages: "Arabic, English widely spoken",
      timeZone: "GST (UTC+4)",
      drivingSide: "Right",
    },
    itinerary: [
      {
        day: 1,
        title: "Sultan Qaboos Mosque & Muttrah Souq",
        location: "Muscat City Centre",
        description:
          "Begin at the Sultan Qaboos Grand Mosque, where the world's second-largest hand-woven carpet covers the prayer hall and a Swarovski crystal chandelier weighing eight tonnes glitters overhead. Walk the Muttrah Corniche to the souq, bargaining for frankincense, silver, and Omani halwa in its centuries-old alleys.",
        highlights: [
          "Stand beneath the eight-tonne Swarovski chandelier of the Grand Mosque",
          "Walk the ancient alleys of Muttrah Souq for frankincense and silver",
          "Photograph Al Alam Royal Palace flanked by Mirani and Jalali forts",
          "Sample Omani halwa and kahwa coffee at a traditional sweet shop",
        ],
        image: "/images/dest-7.jpg",
      },
      {
        day: 2,
        title: "Bandar Khayran & Coastal Snorkelling",
        location: "Bandar Khayran & Daymaniyat Islands",
        description:
          "Board a traditional dhow for the fjord-like inlets of Bandar Khayran, where dolphins race alongside the bow and hawksbill turtles glide through the clear water. Snorkel over coral gardens teeming with parrotfish and clownfish, then anchor in a secluded cove for a grilled seafood lunch on deck.",
        highlights: [
          "Cruise the fjord-like inlets of Bandar Khayran on a traditional dhow",
          "Snorkel with hawksbill turtles and parrotfish over pristine coral reefs",
          "Spot spinner dolphins leaping alongside your boat",
          "Feast on freshly grilled hammour and lobster on the dhow deck",
        ],
        image: "/images/tour-5.jpg",
      },
      {
        day: 3,
        title: "Wadi Shab & Bimmah Sinkhole",
        location: "Sur Road, Muscat Governorate",
        description:
          "Hike into Wadi Shab, swimming through emerald pools flanked by palm-fringed cliffs to reach a hidden waterfall cascading inside a cave. Stop at the Bimmah Sinkhole, a limestone crater filled with turquoise water where locals and travellers swim together in a natural infinity pool.",
        highlights: [
          "Swim through three emerald pools to reach Wadi Shab's hidden cave waterfall",
          "Leap into the turquoise waters of Bimmah Sinkhole",
          "Hike through palm groves and over boulders in the dramatic wadi gorge",
          "Buy honey and dates from roadside stalls in the villages along the coast",
        ],
        image: "/images/explor-6.jpg",
      },
      {
        day: 4,
        title: "Nizwa Fort & Jebel Akhdar",
        location: "Nizwa & Jebel Akhdar",
        description:
          "Drive inland to Nizwa, Oman's ancient capital, where a 17th-century fort towers above a bustling Friday goat market. Ascend to Jebel Akhdar, the 'Green Mountain,' where terraced rose gardens produce the precious Omani rosewater distilled in copper stills each spring.",
        highlights: [
          "Explore the circular tower of Nizwa Fort with its trap-door defences",
          "Experience the raucous Nizwa Livestock Market (Fridays)",
          "Walk the terraced rose gardens of Jebel Akhdar at 2,000 metres",
          "Watch rosewater being distilled in traditional copper stills",
        ],
        image: "/images/city-5.jpg",
      },
      {
        day: 5,
        title: "Royal Opera & Farewell Seafood Feast",
        location: "Qurum & Shatti Al Qurum",
        description:
          "Explore the Royal Opera House Muscat, a marble masterpiece that hosts world-class performances from Arabic opera to Omani folk dance. Stroll the galleries of Bait Al Zubair Museum, then end your journey with a lavish seafood feast at a beachside restaurant in Shatti Al Qurum as the sun sets over the Gulf.",
        highlights: [
          "Tour the Royal Opera House Muscat's Italian marble interiors",
          "Browse traditional Omani dress and maritime artefacts at Bait Al Zubair",
          "Walk the sunset beach of Shatti Al Qurum with the mountains behind",
          "Savour shuwa-spiced lobster and kingfish at a beachside restaurant",
        ],
        image: "/images/tour-6.jpg",
      },
    ],
    thingsToDo: [
      {
        title: "Wadi Swimming & Canyoneering",
        description:
          "Swim through emerald pools and palm-shaded gorges in Wadi Shab and Wadi Bani Khalid to discover hidden cave waterfalls.",
        iconName: "Waves",
      },
      {
        title: "Frankincense & Souq Exploration",
        description:
          "Wander the ancient Muttrah Souq for Omani frankincense, silver khanjars, and hand-stitched kumma caps in a labyrinth of spice-scented alleys.",
        iconName: "MapPin",
      },
      {
        title: "Dhow Cruises & Marine Life",
        description:
          "Sail the coastline on a traditional wooden dhow, spotting dolphins, turtles, and whale sharks (October–February) in the Gulf of Oman.",
        iconName: "Globe",
      },
      {
        title: "Omani Culinary Traditions",
        description:
          "Taste shuwa (slow-roasted lamb), Omani halwa, and kahwa coffee spiced with cardamom and saffron — hospitality poured into every cup.",
        iconName: "Utensils",
      },
      {
        title: "Mountain Trekking on Jebel Akhdar",
        description:
          "Hike terraced villages and rose gardens at 2,000 metres, where the air is cool and rosewater is distilled in copper stills each April.",
        iconName: "Mountain",
      },
      {
        title: "Sultan Qaboos Grand Mosque",
        description:
          "Visit one of the world's most beautiful mosques, home to a hand-woven carpet measuring 4,343 square metres and an eight-tonne crystal chandelier.",
        iconName: "Landmark",
      },
    ],
    travelTips: [
      "Dress modestly outside resorts — shoulders and knees should be covered, especially in mosques and souqs.",
      "The Sultan Qaboos Grand Mosque is open to non-Muslims Saturday–Thursday 8:00–11:00 AM only; arrive early.",
      "Rent a 4x4 if planning wadi and mountain trips — many roads require high clearance.",
      "Oman is one of the safest countries in the Middle East; petty crime is extremely rare.",
      "Carry cash in smaller denominations — many smaller shops and wadi entry points don't accept cards.",
      "Fridays are best for the Nizwa Livestock Market, but many shops close until after Friday prayers.",
      "Whale sharks gather off the Daymaniyat Islands October–February — book snorkelling trips in advance.",
    ],
    gallery: [
      "/images/dest-7.jpg",
      "/images/tour-5.jpg",
      "/images/explor-6.jpg",
      "/images/city-5.jpg",
      "/images/tour-6.jpg",
    ],
  },

  barcelona: {
    slug: "barcelona",
    name: "Barcelona",
    country: "Spain",
    region: "Europe",
    tagline: "Gaudí's dreamscape by the Mediterranean, where art and life are indistinguishable",
    heroImage: "/images/dest-8.jpg",
    overview:
      "Barcelona is a city that refuses to colour inside the lines. From the dripping, organic towers of Antoni Gaudí's unfinished Sagrada Família — under construction since 1882 and not expected to be complete until 2026 — to the psychedelic mosaics of Park Güell crowning the hillside, the Catalan capital treats every surface as a canvas and every corner as an opportunity for beauty. This is a city where Gothic stone alleys open suddenly onto sun-drenched plazas, where modernist apartments undulate like ocean waves, and where the Mediterranean glitters at the end of nearly every boulevard.\n\nThe Barri Gòtic, Barcelona's medieval heart, hides a Roman temple, a 14th-century cathedral, and bars that have poured vermouth since before the Spanish Civil War. Steps away, La Boqueria market on La Rambla erupts with jamón ibérico, fresh sea urchin, and towers of tropical fruit. The Born neighbourhood channels contemporary cool — concept stores, natural-wine bars, and the Picasso Museum, housing the artist's formative Barcelona works.\n\nBarcelona's identity is inseparable from Catalan culture: the human towers of castellers rising in Plaça de Sant Jaume, the sardana folk dance circling in front of the cathedral on Sunday mornings, and FC Barcelona's Camp Nou, where 99,000 fans roar 'Més que un club.' Add the urban beaches of Barceloneta, the avant-garde kitchens of El Born, and the sunset views from Bunkers del Carmel, and you have a city that nourishes every sense.",
    quickFacts: {
      currency: "Euro (€)",
      climate: "Mediterranean with hot summers, mild winters, and year-round sunshine",
      bestSeason: "May–June & September–October (warm, fewer crowds than peak summer)",
      languages: "Catalan, Spanish (Castellano), English in tourist areas",
      timeZone: "CET (UTC+1) / CEST (UTC+2 in summer)",
      drivingSide: "Right",
    },
    itinerary: [
      {
        day: 1,
        title: "Gaudí's Masterworks",
        location: "Eixample & Gràcia, Barcelona",
        description:
          "Spend the day immersed in the genius of Antoni Gaudí. Enter the Sagrada Família to see light stream through stained glass in every colour of the spectrum, then stroll Passeig de Gràcia to admire Casa Batlló's skeletal balconies and Casa Milà's undulating stone rooftop. End at Park Güell for sunset over the city and the sea.",
        highlights: [
          "Stand beneath the Sagrada Família's forest-like columns as light floods through the stained glass",
          "Explore Casa Batlló's dragon-spine rooftop and bone-like façade",
          "Walk the wavy stone rooftop of Casa Milà (La Pedrera) at golden hour",
          "Watch the sunset from the mosaic serpentine bench at Park Güell",
        ],
        image: "/images/dest-8.jpg",
      },
      {
        day: 2,
        title: "Gothic Quarter & La Boqueria",
        location: "Barri Gòtic & La Rambla, Barcelona",
        description:
          "Plunge into the medieval labyrinth of the Gothic Quarter: pass the Temple of Augustus hidden in a courtyard, visit the Barcelona Cathedral and its cloister of 13 white geese, and wander Plaça Reial's palm-studded arcade. Walk La Rambla to La Boqueria for jamón, fresh juice, and grilled razor clams at a market counter.",
        highlights: [
          "Discover the Roman Temple of Augustus tucked inside a Gothic courtyard",
          "Count the 13 geese in Barcelona Cathedral's Gothic cloister",
          "Eat fresh sea urchin and razor clams at La Boqueria market counters",
          "Sip vermouth at a century-old bar on Carrer del Parlament",
        ],
        image: "/images/city-6.jpg",
      },
      {
        day: 3,
        title: "Picasso Museum & Born Neighbourhood",
        location: "El Born & Barceloneta, Barcelona",
        description:
          "Begin at the Picasso Museum, set across five medieval palaces, to trace the artist's formative years in Barcelona. Wander El Born's concept shops and natural-wine bars, then cross to the Barceloneta beachfront for a seafood paella lunch with your feet in the sand.",
        highlights: [
          "Trace Picasso's evolution from child prodigy to cubist pioneer across five medieval palaces",
          "Browse independent boutiques and natural-wine bars in El Born",
          "Eat seafood paella on the sand at a Barceloneta chiringuito",
          "Walk the beachfront promenade from Port Olímpic to W Hotel at sunset",
        ],
        image: "/images/blog-1.jpg",
      },
      {
        day: 4,
        title: "Montjuïc, MNAC & Bunkers del Carmel",
        location: "Montjuïc & El Carmel, Barcelona",
        description:
          "Take the cable car to Montjuïc for the Fundació Joan Miró and the MNAC, whose Romanesque art collection is unrivalled. Explore the 1992 Olympic complex, then cross the city to the Bunkers del Carmel — a Civil War anti-aircraft battery turned Barcelona's best-kept secret viewpoint.",
        highlights: [
          "Ride the Montjuïc cable car for aerial views over the port and city",
          "Admire Joan Miró's vibrant works at his hillside foundation",
          "Explore the world's finest Romanesque art collection at the MNAC",
          "Watch the city light up from the Bunkers del Carmel at sunset",
        ],
        image: "/images/tour-7.jpg",
      },
    ],
    thingsToDo: [
      {
        title: "Gaudí Architecture Trail",
        description:
          "From Sagrada Família to Park Güell, Casa Batlló to Palau Güell — trace the full arc of modernisme's most visionary architect.",
        iconName: "Landmark",
      },
      {
        title: "Catalan Gastronomy",
        description:
          "Feast on pa amb tomàquet, seafood suquet, and crema catalana at traditional taverns and avant-garde tasting menus alike.",
        iconName: "Utensils",
      },
      {
        title: "Beach & Mediterranean Life",
        description:
          "Swim, paddleboard, and eat paella on Barceloneta's urban beach, where the city meets the sea in golden-sand perfection.",
        iconName: "Waves",
      },
      {
        title: "La Boqueria & Market Culture",
        description:
          "Graze through Barcelona's most famous market for jamón ibérico, fresh juice, sea urchin, and grilled razor clams.",
        iconName: "Camera",
      },
      {
        title: "Gothic Quarter Exploration",
        description:
          "Get lost in medieval stone alleys hiding Roman ruins, candle-lit bars, and plaças where castellers build human towers.",
        iconName: "MapPin",
      },
      {
        title: "FC Barcelona & Camp Nou",
        description:
          "Tour Camp Nou — Europe's largest stadium — and feel the passion of 'Més que un club' in the club museum.",
        iconName: "Globe",
      },
    ],
    travelTips: [
      "Book Sagrada Família tickets online at least 2 weeks ahead — walk-up entry is almost never available.",
      "Watch for pickpockets on La Rambla and in the metro; keep valuables in a front pocket or cross-body bag.",
      "Lunch is 1:30–3:30 PM, dinner starts at 9 PM — arriving at a restaurant at 7 PM will find you eating alone.",
      "The T-Casual card gives 10 metro/bus rides and is far cheaper than single tickets.",
      "Most museums are free on the first Sunday of the month — plan accordingly for MNAC and Picasso Museum.",
      "Barcelona's tap water is safe but tastes heavily of chlorine; most locals buy filtered or bottled water.",
    ],
    gallery: [
      "/images/dest-8.jpg",
      "/images/city-6.jpg",
      "/images/blog-1.jpg",
      "/images/tour-7.jpg",
    ],
  },

  madrid: {
    slug: "madrid",
    name: "Madrid",
    country: "Spain",
    region: "Europe",
    tagline: "The soul of Spain — royal grandeur, old-world taverns, and nights that never end",
    heroImage: "/images/dest-9.jpg",
    overview:
      "Madrid is a city that lives with fierce intensity and refuses to sleep. The Spanish capital sprawls elegantly around grand boulevards and intimate plazas, its skyline punctuated by the ornate towers of the Palacio de Cibeles, the Baroque dome of the Royal Palace, and the Beaux-Arts splendour of the Prado Museum — home to Velázquez's Las Meninas, Goya's Black Paintings, and Bosch's Garden of Earthly Delights, one of the most extraordinary collections of European art assembled under a single roof.\n\nBut Madrid's magic lives equally in the tiled taverns of La Latina, where patatas bravas sizzle alongside glasses of vermú on Sunday afternoons, and in the covered stalls of Mercado de San Miguel, where you can eat oysters, croquetas, and Manchego in one glorious graze. The city's golden triangle of art — the Prado, Reina Sofía (home to Picasso's Guernica), and Thyssen-Bornemisza — forms the densest concentration of masterpieces in Europe, while the Retiro Park offers rowboats, peacocks, and a crystal palace shimmering in the green heart of the city.\n\nAs the sun sets, Madrid transforms: rooftop cocktail bars overlooking Gran Vía fill with the after-work crowd, flamenco tablaos in Lavapiés pulse with raw duende, and the tapas crawl through Calle de la Cava Baja becomes a communal feast that might not end until 3 AM. In Madrid, late nights are not an indulgence — they are a way of life.",
    quickFacts: {
      capital: "Madrid (national capital)",
      currency: "Euro (€)",
      climate: "Continental Mediterranean with hot, dry summers and cold winters",
      bestSeason: "April–June & September–October (mild weather, cultural festivals)",
      languages: "Spanish (Castellano), English in tourist areas",
      timeZone: "CET (UTC+1) / CEST (UTC+2 in summer)",
      drivingSide: "Right",
    },
    itinerary: [
      {
        day: 1,
        title: "Royal Palace & the Golden Triangle of Art",
        location: "Centro & Paseo del Arte, Madrid",
        description:
          "Start at the Royal Palace of Madrid — with over 3,400 rooms, it is the largest functioning royal palace in Europe. Walk through the Hall of Mirrors and the Royal Armoury, then descend to the Prado Museum for an afternoon with Velázquez, Goya, and El Greco. End at the Retiro Park Crystal Palace as light fades.",
        highlights: [
          "Tour the Royal Palace's Hall of Mirrors and Throne Room",
          "Stand before Las Meninas and Goya's Black Paintings at the Prado",
          "Stroll through the Retiro Park to the Crystal Palace and rose garden",
          "Watch street musicians perform in the Puerta del Sol at dusk",
        ],
        image: "/images/dest-9.jpg",
      },
      {
        day: 2,
        title: "Reina Sofía, Guernica & Lavapiés",
        location: "Atocha & Lavapiés, Madrid",
        description:
          "Dedicate the morning to Reina Sofía, where Picasso's monumental Guernica — the most powerful anti-war painting ever created — dominates an entire gallery. Explore the Thyssen-Bornemisza next door, then wander into the multicultural neighbourhood of Lavapiés for street art, global cuisine, and an evening flamenco tablao.",
        highlights: [
          "Stand before Picasso's Guernica in the Reina Sofía's Gallery 206",
          "Trace art history from Van Eyck to Lichtenstein at the Thyssen-Bornemisza",
          "Explore Lavapiés' street art murals and independent bookshops",
          "Feel the raw duende of live flamenco at a Lavapiés tablao",
        ],
        image: "/images/tour-8.jpg",
      },
      {
        day: 3,
        title: "La Latina Tapas Trail & Mercado de San Miguel",
        location: "La Latina & Plaza Mayor, Madrid",
        description:
          "Spend a leisurely Sunday on Calle de la Cava Baja, Madrid's legendary tapas street, hopping between century-old taverns for patatas bravas, jamón ibérico croquetas, and chilled vermouth. Visit the Mercado de San Miguel for gourmet bites, then cross Plaza Mayor and the San Fernando flea market in El Rastro.",
        highlights: [
          "Bar-hop Calle de la Cava Baja for Madrid's best patatas bravas and croquetas",
          "Graze through Mercado de San Miguel for oysters, Manchego, and churros",
          "Hunt for treasures at El Rastro flea market (Sundays only)",
          "Toast with vermú in a tiled La Latina tavern dating to 1870",
        ],
        image: "/images/offer-1.jpg",
      },
      {
        day: 4,
        title: "Gran Vía, Rooftops & Nightlife",
        location: "Gran Vía & Malasaña, Madrid",
        description:
          "Walk the grand sweep of Gran Vía — Madrid's answer to Broadway — past Art Deco cinemas and flagship stores. Ride to a rooftop bar for sunset cocktails overlooking the Schweppes sign and the Metropolis building. After dinner in Malasaña's neo-taverns, close the night at a live jazz club or the city's legendary nightclub scene.",
        highlights: [
          "Photograph the iconic Metrópolis building and Schweppes sign on Gran Vía",
          "Sip cocktails on a rooftop bar with views across Madrid's skyline at sunset",
          "Dine at a creative neo-tavern in the bohemian Malasaña quarter",
          "Experience Madrid's legendary nightlife that rarely starts before midnight",
        ],
        image: "/images/banner-2.jpg",
      },
    ],
    thingsToDo: [
      {
        title: "Prado Museum & Spanish Masters",
        description:
          "Wander the Prado's galleries housing Velázquez's Las Meninas, Goya's Third of May, and Bosch's Garden of Earthly Delights.",
        iconName: "BookOpen",
      },
      {
        title: "Tapas Crawl in La Latina",
        description:
          "Bar-hop Calle de la Cava Baja for patatas bravas, croquetas de jamón, and glasses of chilled vermú in century-old tiled taverns.",
        iconName: "Utensils",
      },
      {
        title: "Flamenco in Lavapiés",
        description:
          "Feel the visceral energy of duende in an intimate tablao, where raw guitar, voice, and dance collide in the night.",
        iconName: "Heart",
      },
      {
        title: "Retiro Park & Crystal Palace",
        description:
          "Row a boat on the lake, stroll the rose garden, and visit the Crystal Palace — a glass-and-iron greenhouse hosting rotating art installations.",
        iconName: "Globe",
      },
      {
        title: "Rooftop Bar Circuit",
        description:
          "Climb to Madrid's rooftop terraces for sunset cocktails with views spanning from the Royal Palace to the Sierra de Guadarrama.",
        iconName: "Camera",
      },
      {
        title: "El Rastro Sunday Market",
        description:
          "Hunt for vintage finds, antique maps, and leather goods in Spain's largest open-air flea market, spilling down the streets of La Latina.",
        iconName: "MapPin",
      },
    ],
    travelTips: [
      "Adjust to Madrid time: lunch at 2 PM, dinner at 9:30 PM, nightlife from midnight — eating 'early' marks you as a tourist.",
      "The Prado is free 6:00–8:00 PM Monday–Saturday and 3:00–5:00 PM Sundays — arrive early to beat the queue.",
      "Madrid's metro is fast and cheap; buy a 10-ride Metrobús card for the best value.",
      "El Rastro flea market (Sundays, 9 AM–3 PM) is pickpocket territory — keep bags zipped and in front.",
      "Tap water in Madrid is excellent (from the Sierra de Guadarrama) — no need to buy bottled.",
      "Summer heat regularly exceeds 40 °C; siesta between 2–5 PM is not laziness, it's survival strategy.",
    ],
    gallery: [
      "/images/dest-9.jpg",
      "/images/tour-8.jpg",
      "/images/offer-1.jpg",
      "/images/banner-2.jpg",
    ],
  },

  rome: {
    slug: "rome",
    name: "Rome",
    country: "Italy",
    region: "Europe",
    tagline: "The Eternal City — where every cobblestone whispers two thousand years of story",
    heroImage: "/images/dest-10.jpg",
    overview:
      "Rome is not a city you visit; it is a city that claims you. Walking its streets is an act of time travel: turn a corner from a buzzing espresso bar and find yourself face-to-face with a 2,000-year-old temple; toss a coin into the Trevi Fountain where Baroque marble cascades in an almost absurd display of sculptural excess; stand inside the Pantheon and watch a single beam of sunlight rotate through the oculus, illuminating the exact same marble floor that Roman emperors once trod.\n\nThe Colosseum anchors the ancient heart of the city — a colossal amphitheatre where 50,000 spectators once roared, now standing open to the sky like a giant's broken crown. Nearby, the Roman Forum and Palatine Hill unfold layers of republic and empire, while the Vatican, technically a sovereign city-state, houses Michelangelo's Sistine Chapel ceiling, Raphael's School of Athens, and St. Peter's Basilica — the largest church in Christendom, crowned by a dome that defines the Roman skyline.\n\nBut Rome is also carbonara eaten at midnight in Trastevere, a gelato from a back-street gelateria that changes your understanding of frozen dessert, a Sunday morning passeggiata through the Villa Borghese gardens, and a Negroni on the Spanish Steps as the city turns golden. Romans have perfected the art of la dolce vita, and they invite you — generously, loudly, with abundant hand gestures — to join them.",
    quickFacts: {
      capital: "Rome (national capital)",
      currency: "Euro (€)",
      climate: "Mediterranean with hot, dry summers and mild, wet winters",
      bestSeason: "April–June & September–October (mild temperatures, fewer crowds)",
      languages: "Italian, English in tourist areas",
      timeZone: "CET (UTC+1) / CEST (UTC+2 in summer)",
      drivingSide: "Right",
    },
    itinerary: [
      {
        day: 1,
        title: "Colosseum, Forum & Palatine Hill",
        location: "Ancient Rome",
        description:
          "Begin where Rome began. Enter the Colosseum's arena floor, imagining 50,000 spectators above. Walk through the Roman Forum past the Temple of Saturn and the Arch of Titus, then ascend Palatine Hill for the ruins of imperial palaces and a view that stretches from the Forum to the Circus Maximus.",
        highlights: [
          "Stand on the Colosseum's reconstructed arena floor at the centre of the amphitheatre",
          "Walk the Via Sacra through the Roman Forum past the Temple of Saturn",
          "Climb Palatine Hill for panoramic views over the ancient city",
          "Photograph the Arch of Constantine at golden hour",
        ],
        image: "/images/dest-10.jpg",
      },
      {
        day: 2,
        title: "Vatican City — Sistine Chapel & St. Peter's",
        location: "Vatican City",
        description:
          "Arrive early at the Vatican Museums to witness the Gallery of Maps, Raphael Rooms, and the overwhelming majesty of the Sistine Chapel before the crowds thicken. Cross into St. Peter's Basilica to stand beneath Bernini's baldachin and, for the brave, climb the 551 steps to the dome for the finest view in Rome.",
        highlights: [
          "Gaze up at Michelangelo's Sistine Chapel ceiling in quiet awe",
          "Admire Raphael's School of Athens in the Stanza della Segnatura",
          "Stand beneath Bernini's bronze baldachin inside St. Peter's Basilica",
          "Climb 551 steps to the dome of St. Peter's for a skyline panorama",
        ],
        image: "/images/breadcrumb-1.jpg",
      },
      {
        day: 3,
        title: "Pantheon, Piazzas & Trastevere",
        location: "Centro Storico & Trastevere, Rome",
        description:
          "Begin at the Pantheon, the best-preserved Roman building, and watch sunlight beam through the open oculus. Wander to Piazza Navona's Bernini fountains, toss a coin at the Trevi Fountain, and cross the Tiber to Trastevere for cobblestoned alleys, ivy-draped trattorias, and the finest carbonara in the city.",
        highlights: [
          "Watch the beam of light move through the Pantheon's ancient oculus",
          "Admire Bernini's Fountain of the Four Rivers in Piazza Navona",
          "Toss a coin over your shoulder into the Trevi Fountain",
          "Eat authentic cacio e pepe in a candlelit Trastevere trattoria",
        ],
        image: "/images/tour-9.jpg",
      },
      {
        day: 4,
        title: "Borghese, Spanish Steps & Dolce Vita",
        location: "Villa Borghese & Tridente, Rome",
        description:
          "Reserve a timed slot at the Galleria Borghese for Bernini's Apollo and Daphne and Canova's Pauline Bonaparte. Stroll through Villa Borghese's landscaped gardens to the Pincian Hill viewpoint, descend the Spanish Steps, and conclude with a Negroni on Via Condotti as Rome glows in the evening light.",
        highlights: [
          "Marvel at Bernini's Apollo and Daphne in the Galleria Borghese",
          "Stroll through Villa Borghese gardens to the Pincian Hill viewpoint",
          "Descend the Spanish Steps into the designer boutiques of Via Condotti",
          "Sip a Negroni at a sidewalk café as the Eternal City lights up",
        ],
        image: "/images/banner-3.jpg",
      },
    ],
    thingsToDo: [
      {
        title: "Ancient Rome Walking Tour",
        description:
          "Explore the Colosseum, Roman Forum, and Palatine Hill — the monumental core of an empire that shaped Western civilisation.",
        iconName: "Landmark",
      },
      {
        title: "Vatican Museums & Sistine Chapel",
        description:
          "Witness Michelangelo's ceiling, Raphael's frescoes, and the vast papal collections culminating in St. Peter's Basilica.",
        iconName: "BookOpen",
      },
      {
        title: "Roman Cuisine",
        description:
          "Master the four pastas of Rome — carbonara, cacio e pepe, amatriciana, and gricia — in Trastevere's best trattorias.",
        iconName: "Utensils",
      },
      {
        title: "Piazza & Fountain Hopping",
        description:
          "Wander from the Trevi Fountain to Piazza Navona, Piazza di Spagna, and the Pantheon in an afternoon of Baroque splendour.",
        iconName: "Camera",
      },
      {
        title: "Gelato Tasting Trail",
        description:
          "Sample artisanal gelato at Fatamorgana, Giolitti, and Come il Latte — Roman gelaterias that redefine frozen dessert.",
        iconName: "Heart",
      },
      {
        title: "Sunset at Pincian Hill",
        description:
          "Watch the sun set over St. Peter's dome from the Pincian Hill terrace, the most romantic viewpoint in Rome.",
        iconName: "Globe",
      },
    ],
    travelTips: [
      "Book Colosseum and Vatican tickets online weeks in advance — walk-up queues can exceed 3 hours.",
      "Dress code is enforced at Vatican City and major churches: knees and shoulders must be covered for both men and women.",
      "Avoid 'tourist menu' restaurants near major sights; walk 2–3 blocks into residential streets for authentic, affordable trattorias.",
      "Tap water in Rome is safe and delicious — fill your bottle at the city's 2,500+ nasoni (public drinking fountains).",
      "Beware of fake gladiators near the Colosseum who demand money for photos.",
      "The Roma Pass gives free metro rides and skip-the-line access to your first 2 museums — excellent value for a 3-day stay.",
    ],
    gallery: [
      "/images/dest-10.jpg",
      "/images/breadcrumb-1.jpg",
      "/images/tour-9.jpg",
      "/images/banner-3.jpg",
    ],
  },

  "amalfi-coast": {
    slug: "amalfi-coast",
    name: "Amalfi Coast",
    country: "Italy",
    region: "Europe",
    tagline: "Cliffside villages tumbling into turquoise waters along Italy's most dramatic shoreline",
    heroImage: "/images/dest-11.jpg",
    overview:
      "The Amalfi Coast is a 50-kilometre ribbon of drama carved into the vertical face of the Lattari Mountains, where pastel-coloured villages cling to cliffs hundreds of metres above the Tyrrhenian Sea and lemon groves cascade down terraced hillsides scented with bougainvillea and wild rosemary. Designated a UNESCO World Heritage Site, this stretch of the Sorrentine Peninsula has seduced writers, artists, and travellers since the days of the Grand Tour — and not a single element of its charm has faded.\n\nPositano, the coast's poster child, tumbles from the coastal road to a crescent beach in a cascade of terracotta, pink, and amber. Amalfi town, once the capital of a powerful maritime republic, centres on its Arab-Norman cathedral and a warren of alleys where paper mills once thrummed. Ravello, perched high above, offers the gardens of Villa Rufolo and Villa Cimbrone — terraces where Wagner composed, where Gore Vidal wrote, and where infinity seems to begin at the balustrade.\n\nBeyond the famous villages, the Sentiero degli Dei (Path of the Gods) traces a ridgeline trail that offers views so spectacular they feel earned by every step. Below, hidden coves accessible only by boat shelter emerald grottoes and swimming holes. This is a coast where every plate of fresh linguine alle vongole, every limoncello made from fat Amalfi lemons, and every sunset viewed from a tiled terrace becomes a memory that refuses to fade.",
    quickFacts: {
      currency: "Euro (€)",
      climate: "Mediterranean with hot, sunny summers and mild, rainy winters",
      bestSeason: "May–June & September–October (warm, fewer crowds, boat services running)",
      languages: "Italian, English in hotels and restaurants",
      timeZone: "CET (UTC+1) / CEST (UTC+2 in summer)",
      drivingSide: "Right",
    },
    itinerary: [
      {
        day: 1,
        title: "Positano — Cascade Village & Beach Life",
        location: "Positano",
        description:
          "Arrive in Positano and descend through its steep, flowered stairways to the Spiaggia Grande. Swim in the turquoise water, browse hand-made sandal shops along the terraced lanes, and watch the sun set behind Li Galli islands from a clifftop restaurant with a glass of local Falanghina wine.",
        highlights: [
          "Descend Positano's flowered stairways to Spiaggia Grande beach",
          "Commission custom leather sandals from an artisan on Via Pasitea",
          "Photograph the iconic pastel cascade from the coastal path above",
          "Watch the sunset behind Li Galli islands with a glass of Falanghina",
        ],
        image: "/images/dest-11.jpg",
      },
      {
        day: 2,
        title: "Path of the Gods Hike",
        location: "Agerola to Nocelle",
        description:
          "Set out from Agerola on the Sentiero degli Dei, a ridgeline trail that traverses cliffs 500 metres above the sea with views stretching to Capri. The 7-kilometre walk passes through terraced lemon groves and wild herb meadows before descending stone steps into the hamlet of Nocelle, where a cold limoncello awaits.",
        highlights: [
          "Hike the legendary Path of the Gods ridgeline trail at 500 metres above the sea",
          "Spot Capri, the Faraglioni, and the entire coastline from the trail",
          "Walk through fragrant lemon groves and wild rosemary along the path",
          "Reward yourself with fresh limoncello in the hilltop village of Nocelle",
        ],
        image: "/images/explor-1.jpg",
      },
      {
        day: 3,
        title: "Amalfi Town & Ravello's Gardens",
        location: "Amalfi & Ravello",
        description:
          "Explore Amalfi's Duomo with its striped Arab-Norman façade and the Chiostro del Paradiso cloister. Visit the Museum of Paper in a medieval mill, then wind uphill to Ravello for the gardens of Villa Rufolo, where a terrace seems to float above the coast, and Villa Cimbrone's Terrace of Infinity.",
        highlights: [
          "Climb the grand staircase to Amalfi's 9th-century Arab-Norman Cathedral",
          "Discover traditional papermaking at Amalfi's Museum of Paper",
          "Stroll the Moorish gardens of Villa Rufolo where Wagner found inspiration",
          "Stand at Villa Cimbrone's Terrace of Infinity — arguably Italy's finest viewpoint",
        ],
        image: "/images/tour-10.jpg",
      },
      {
        day: 4,
        title: "Boat Trip to Emerald Grotto & Hidden Coves",
        location: "Amalfi Coast by Sea",
        description:
          "Charter a traditional gozzo boat from Amalfi harbour and hug the coastline, dipping into the Grotta dello Smeraldo (Emerald Grotto), where sunlight refracts through an underwater cavity to paint the water an unearthly green. Anchor in secluded coves for swimming, then finish at a seaside restaurant in Praiano for the coast's best seafood.",
        highlights: [
          "Cruise by traditional gozzo boat along the dramatic Amalfi cliffs",
          "Enter the Emerald Grotto where sunlight turns the water supernatural green",
          "Swim in secluded coves only accessible by boat",
          "Dine on linguine alle vongole at a cliffside restaurant in Praiano",
        ],
        image: "/images/offer-2.jpg",
      },
    ],
    thingsToDo: [
      {
        title: "Path of the Gods Hike",
        description:
          "Trek the legendary ridgeline trail from Agerola to Nocelle, 500 metres above the sea, with views to Capri and beyond.",
        iconName: "Mountain",
      },
      {
        title: "Boat Tours & Hidden Grottoes",
        description:
          "Cruise the coast by gozzo boat, swim in hidden coves, and enter the luminous Emerald Grotto where light paints the water green.",
        iconName: "Waves",
      },
      {
        title: "Lemon-Infused Cuisine",
        description:
          "Taste fresh lemon pasta, delizia al limone pastry, and artisanal limoncello made from the fat, fragrant lemons that define the coast.",
        iconName: "Utensils",
      },
      {
        title: "Ravello Concert Season",
        description:
          "Attend an open-air classical concert at Villa Rufolo during the Ravello Festival, performed on a stage suspended above the sea.",
        iconName: "Heart",
      },
      {
        title: "Positano Shopping",
        description:
          "Browse hand-made leather sandals, flowing linen dresses, and locally crafted ceramics in Positano's terraced boutiques.",
        iconName: "MapPin",
      },
      {
        title: "Amalfi Cathedral & History",
        description:
          "Explore the Arab-Norman cathedral, the Chiostro del Paradiso, and the medieval paper mills of a former maritime republic.",
        iconName: "Landmark",
      },
    ],
    travelTips: [
      "The coastal road (SS163) is narrow and hair-raising — take SITA buses or ferries between towns instead of driving.",
      "Wear sturdy shoes with grip; the villages are vertical and most 'streets' are steep staircases.",
      "Ferries between Positano, Amalfi, and Salerno run April–October only — check timetables the night before.",
      "Book restaurants for dinner, especially in Positano and Ravello, at least a day in advance in summer.",
      "Visit in May–June or September–October to avoid peak-season prices and crowds while enjoying warm swimming weather.",
      "Carry cash for smaller restaurants and beach clubs — card acceptance is improving but not universal.",
    ],
    gallery: [
      "/images/dest-11.jpg",
      "/images/explor-1.jpg",
      "/images/tour-10.jpg",
      "/images/offer-2.jpg",
    ],
  },

  "swiss-alps": {
    slug: "swiss-alps",
    name: "Swiss Alps",
    country: "Switzerland",
    region: "Europe",
    tagline: "Pristine peaks, legendary railways, and alpine villages frozen in storybook perfection",
    heroImage: "/images/dest-12.jpg",
    overview:
      "The Swiss Alps are the roof of Europe — a staggering expanse of snow-capped summits, crystalline lakes, and meadows so green they seem digitally enhanced. From the north face of the Eiger, one of mountaineering's most feared walls, to the gentle cowbell-dotted pastures of the Bernese Oberland, this landscape has defined the word 'alpine' for every language that borrowed it. Whether you come to carve powder on the slopes of Zermatt, ride the Glacier Express through 91 tunnels and across 291 bridges, or simply sit on a chalet terrace with a fondue pot and a view that makes you forget to eat, the Swiss Alps deliver an intensity of beauty that borders on the overwhelming.\n\nInterlaken, wedged between the turquoise mirrors of Lake Thun and Lake Brienz, is the gateway to the Jungfrau Region — home to the Jungfraujoch, Europe's highest railway station at 3,454 metres, where you stand on the Aletsch Glacier and see three countries. Grindelwald offers the First Cliff Walk, a vertiginous steel walkway bolted to a cliff face, while Lauterbrunnen's 72 waterfalls cascade into a valley Tolkien reportedly used as inspiration for Rivendell.\n\nIn winter, the Alps transform into a white wonderland of world-class skiing, snowshoeing, and Christmas markets glowing in timber villages. In summer, wildflower hiking trails, paragliding over emerald valleys, and cheese-making demonstrations in alpine huts reveal a gentler, equally magical side. The Swiss Alps do not merely meet expectations — they render them irrelevant.",
    quickFacts: {
      capital: "Bern (federal capital)",
      currency: "Swiss Franc (CHF)",
      climate: "Alpine with cold, snowy winters and mild, sunny summers; varies greatly with altitude",
      bestSeason: "December–March (skiing) & June–September (hiking, wildflowers)",
      languages: "German, French, Italian, Romansh",
      timeZone: "CET (UTC+1) / CEST (UTC+2 in summer)",
      drivingSide: "Right",
    },
    itinerary: [
      {
        day: 1,
        title: "Interlaken & Lake Cruise",
        location: "Interlaken & Lake Thun",
        description:
          "Arrive in Interlaken, cradled between Lake Thun and Lake Brienz, and board a paddle steamer across the turquoise waters of Lake Thun. Disembark at Spiez Castle for a wine tasting of Oberländer Blauburgunder, then return for a stroll along the Höheweg promenade with the Jungfrau massif glowing pink at sunset.",
        highlights: [
          "Cruise Lake Thun on a historic paddle steamer with mountain views",
          "Visit the medieval Spiez Castle perched above the lake's southern shore",
          "Walk the Höheweg promenade as the Jungfrau turns pink at sunset",
          "Sample local Blauburgunder wine at a lakeside vineyard",
        ],
        image: "/images/dest-12.jpg",
      },
      {
        day: 2,
        title: "Jungfraujoch — Top of Europe",
        location: "Jungfrau Region",
        description:
          "Ride the Jungfrau Railway through the Eiger's interior to the Jungfraujoch at 3,454 metres — Europe's highest railway station. Step onto the Aletsch Glacier, visit the Ice Palace carved inside the glacier, and gaze across the Alps to the Black Forest. Descend to Kleine Scheidegg for hot chocolate with the Eiger's north face looming overhead.",
        highlights: [
          "Ride the cog railway through the inside of the Eiger to the Jungfraujoch",
          "Stand on the Aletsch Glacier, the longest in the Alps",
          "Explore the Ice Palace carved deep inside the glacier",
          "Sip hot chocolate at Kleine Scheidegg with the Eiger north face above you",
        ],
        image: "/images/breadcrumb-2.jpg",
      },
      {
        day: 3,
        title: "Lauterbrunnen Valley & Schilthorn",
        location: "Lauterbrunnen & Mürren",
        description:
          "Descend into Lauterbrunnen Valley, where 72 waterfalls plummet from vertical cliffs — Staubbach Falls drops 297 metres in a single veil. Take the cable car to the car-free village of Mürren, then ride the revolving gondola to the Schilthorn summit for a 360-degree panorama of 200 peaks, including Eiger, Mönch, and Jungfrau.",
        highlights: [
          "Stand beneath the 297-metre veil of Staubbach Falls in Lauterbrunnen",
          "Wander the car-free alpine village of Mürren perched on a cliff edge",
          "Ride to the Schilthorn summit for a revolving restaurant panorama",
          "Spot the Eiger, Mönch, and Jungfrau in a single 360-degree view",
        ],
        image: "/images/tour-11.jpg",
      },
      {
        day: 4,
        title: "Grindelwald First & Adventure Activities",
        location: "Grindelwald",
        description:
          "Ride the Grindelwald-First gondola to the First Cliff Walk, a steel-and-glass walkway jutting out over a 2,000-metre drop. Try the First Flyer zipline or the mountain cart descent, then hike to Bachalpsee, a mirror-still alpine lake reflecting the Schreckhorn and Wetterhorn in its glassy surface.",
        highlights: [
          "Walk the glass-floored First Cliff Walk suspended above a 2,000-metre void",
          "Ride the First Flyer zipline at 84 km/h over the Grindelwald valley",
          "Hike to Bachalpsee for mirror reflections of the Schreckhorn",
          "Feast on cheese fondue in a traditional Grindelwald chalet",
        ],
        image: "/images/explor-2.jpg",
      },
      {
        day: 5,
        title: "Glacier Express or Scenic Railway",
        location: "Bernese Oberland to Zermatt (or return)",
        description:
          "Board the Glacier Express or GoldenPass Line for one of the world's most spectacular rail journeys. The panoramic train crosses 291 bridges, passes through 91 tunnels, and climbs to the Oberalp Pass at 2,033 metres. Arrive in Zermatt for a final glimpse of the Matterhorn or return through the rolling green of the Emmental.",
        highlights: [
          "Travel by panoramic train across 291 bridges and through 91 tunnels",
          "Cross the Oberalp Pass at 2,033 metres with views over the Rhine Gorge",
          "Dine on a multi-course meal in the Glacier Express dining car",
          "Glimpse the iconic pyramid of the Matterhorn as you approach Zermatt",
        ],
        image: "/images/trand-1.jpg",
      },
    ],
    thingsToDo: [
      {
        title: "Scenic Railway Journeys",
        description:
          "Ride the Glacier Express, GoldenPass, or Bernina Express through tunnels, over viaducts, and past peaks in panoramic carriages.",
        iconName: "Car",
      },
      {
        title: "Skiing & Winter Sports",
        description:
          "Carve powder in Zermatt, St. Moritz, or Verbier — world-class resorts with runs stretching above 4,000 metres.",
        iconName: "Mountain",
      },
      {
        title: "Alpine Hiking",
        description:
          "Trek through wildflower meadows, past glacial lakes, and along ridgelines with views of Eiger, Mönch, and Jungfrau.",
        iconName: "Globe",
      },
      {
        title: "Swiss Cheese & Fondue",
        description:
          "Dip crusty bread into bubbling Gruyère fondue in a timber chalet, or visit an alpine dairy to watch cheese being made by hand.",
        iconName: "Utensils",
      },
      {
        title: "Paragliding over Interlaken",
        description:
          "Tandem paraglide from Beatenberg or Niederhorn, soaring above the twin lakes and landing in the meadows of Interlaken.",
        iconName: "Waves",
      },
      {
        title: "Jungfraujoch — Top of Europe",
        description:
          "Ride to Europe's highest railway station at 3,454 metres and stand on the Aletsch Glacier with views across three countries.",
        iconName: "Landmark",
      },
    ],
    travelTips: [
      "Buy the Swiss Travel Pass for unlimited train, bus, and boat travel plus free museum entry — it pays for itself in 2 days.",
      "Mountain weather changes rapidly; always carry a rain jacket and warm layer, even in July.",
      "The Jungfraujoch is popular — book the first train (6:35 AM from Interlaken Ost) for the clearest views and thinnest crowds.",
      "Switzerland is expensive: budget CHF 50–80 per meal and consider self-catering from Coop or Migros supermarkets.",
      "Altitude sickness can affect some visitors above 3,000 metres — ascend slowly and stay hydrated.",
      "Tipping is not expected in Switzerland (service is included), but rounding up is appreciated.",
      "Check the SBB app for real-time train schedules — Swiss trains run with legendary punctuality.",
    ],
    gallery: [
      "/images/dest-12.jpg",
      "/images/breadcrumb-2.jpg",
      "/images/tour-11.jpg",
      "/images/explor-2.jpg",
      "/images/trand-1.jpg",
    ],
  },

  luxor: {
    slug: "luxor",
    name: "Luxor",
    country: "Egypt",
    region: "Africa",
    tagline: "The world's greatest open-air museum, where pharaohs built for eternity",
    heroImage: "/images/dest-13.jpg",
    overview:
      "Luxor is ancient Thebes reborn — a city bisected by the Nile into the East Bank of the living and the West Bank of the dead, where the sheer density of monumental ruins surpasses any archaeological site on Earth. On the East Bank, the Karnak Temple Complex sprawls across 200 acres of hypostyle halls, obelisks, and sacred lakes — its Great Hypostyle Hall alone contains 134 columns, each 23 metres tall, carved with hieroglyphs that have survived 3,300 years of sun and sand.\n\nCross the Nile at dawn and the West Bank reveals the Valley of the Kings, where 63 pharaonic tombs burrow deep into the limestone cliffs. Tutankhamun's tomb, though small, still resonates with gold-painted walls and the young king's stone sarcophagus. Nearby, the mortuary temple of Hatshepsut rises in three terraced colonnades against a sheer cliff — Egypt's most elegant architectural statement — while the Colossi of Memnon, two 18-metre seated pharaohs, stand sentinel over the floodplain.\n\nLuxor rewards slowness: a felucca sail at sunset, when the river turns molten gold and the call to prayer drifts from East Bank minarets; a hot air balloon ride at dawn over the West Bank temples; a horse-drawn caleche clip-clopping down the Corniche. This is not a city that preserves the past — it is a city where the past has never left.",
    quickFacts: {
      capital: "Cairo",
      currency: "Egyptian Pound (EGP)",
      climate: "Hot desert with scorching summers and warm, dry winters; rain is extremely rare",
      bestSeason: "October–April (cooler temperatures for temple exploration)",
      languages: "Arabic, English in tourist areas",
      timeZone: "EET (UTC+2)",
      drivingSide: "Right",
    },
    itinerary: [
      {
        day: 1,
        title: "Karnak Temple & Luxor Temple by Night",
        location: "Luxor East Bank",
        description:
          "Arrive on the East Bank and enter Karnak Temple in the late afternoon, when the low sun ignites the sandstone columns in amber. Walk the Avenue of Sphinxes — recently restored — the 2.7-kilometre processional road linking Karnak to Luxor Temple. Return after dark for the Sound and Light Show that illuminates the Great Hypostyle Hall.",
        highlights: [
          "Walk among the 134 towering columns of Karnak's Great Hypostyle Hall",
          "Stroll the restored 2.7 km Avenue of Sphinxes between Karnak and Luxor Temple",
          "Photograph the obelisk of Hatshepsut, the tallest surviving in Egypt",
          "Watch the Sound and Light Show illuminate the temple ruins after dark",
        ],
        image: "/images/dest-13.jpg",
      },
      {
        day: 2,
        title: "Valley of the Kings & Hatshepsut's Temple",
        location: "Luxor West Bank",
        description:
          "Cross the Nile at dawn to the West Bank. Descend into the painted tombs of the Valley of the Kings — Ramesses VI's astronomical ceiling and Seti I's vivid reliefs are among the most spectacular. Visit the terraced mortuary temple of Hatshepsut at Deir el-Bahari, then pause at the Colossi of Memnon.",
        highlights: [
          "Enter the tomb of Ramesses VI with its breathtaking astronomical ceiling",
          "Stand inside Tutankhamun's burial chamber in the Valley of the Kings",
          "Admire Hatshepsut's temple rising in three elegant terraces against the cliff",
          "Photograph the twin 18-metre Colossi of Memnon at the floodplain edge",
        ],
        image: "/images/tour-12.jpg",
      },
      {
        day: 3,
        title: "Hot Air Balloon & Medinet Habu",
        location: "Luxor West Bank (aerial & ground)",
        description:
          "Rise before dawn for a hot air balloon flight over the West Bank, watching temples, tombs, and the Nile unfold in the golden first light. After landing, explore Medinet Habu — the mortuary temple of Ramesses III — whose vivid colour relief is the best-preserved of any Luxor temple.",
        highlights: [
          "Float over the Valley of the Kings and Hatshepsut's Temple at sunrise by balloon",
          "Explore the vividly coloured reliefs of Medinet Habu, often overlooked by crowds",
          "Visit the Valley of the Queens and the tomb of Nefertari (if open)",
          "Lunch at a rooftop restaurant overlooking the Nile and the Theban hills",
        ],
        image: "/images/breadcrumb-3.jpg",
      },
      {
        day: 4,
        title: "Felucca Sail & Banana Island",
        location: "Nile River, Luxor",
        description:
          "Spend a leisurely morning sailing the Nile on a traditional felucca, passing palm-fringed banks and buffalo wading in the shallows. Stop at Banana Island, a lush plantation where you can taste fresh bananas, sugarcane juice, and hibiscus tea. Return at sunset as the East Bank skyline turns to silhouette.",
        highlights: [
          "Sail a traditional felucca as the Nile turns molten gold at sunset",
          "Visit Banana Island for fresh sugarcane juice and tropical fruit",
          "Watch buffalo and egrets along the palm-fringed riverbanks",
          "Sip hibiscus tea (karkade) on deck as the call to prayer echoes from shore",
        ],
        image: "/images/offer-3.jpg",
      },
    ],
    thingsToDo: [
      {
        title: "Valley of the Kings",
        description:
          "Descend into pharaonic tombs adorned with astronomical ceilings, vivid murals, and hieroglyphic spells from the Book of the Dead.",
        iconName: "Landmark",
      },
      {
        title: "Hot Air Balloon at Sunrise",
        description:
          "Float over the West Bank temples and the Nile at dawn, watching 3,000 years of history unfold from above.",
        iconName: "Globe",
      },
      {
        title: "Karnak Temple Exploration",
        description:
          "Walk the Great Hypostyle Hall's 134 colossal columns and trace 2,000 years of pharaonic construction across the vast complex.",
        iconName: "BookOpen",
      },
      {
        title: "Felucca Sailing",
        description:
          "Glide down the Nile on a lateen-rigged felucca, watching the sun set behind the Theban hills as egrets take flight.",
        iconName: "Waves",
      },
      {
        title: "Egyptian Street Food",
        description:
          "Feast on koshari (lentils, rice, and crispy onions), foul medames, and freshly baked aish baladi from Luxor's street stalls.",
        iconName: "Utensils",
      },
      {
        title: "Sound & Light Show",
        description:
          "Watch Karnak Temple come alive after dark as coloured lights and narration recount the story of Thebes across the ancient stones.",
        iconName: "Lightbulb",
      },
    ],
    travelTips: [
      "Visit the Valley of the Kings first thing in the morning — by 10 AM the tombs become stifling and crowded.",
      "Your standard ticket covers 3 tombs; Tutankhamun, Seti I, and Nefertari require separate, pricier tickets — they're worth it.",
      "Hire a licensed guide for the West Bank — the stories behind the reliefs transform the experience.",
      "Bargain hard with caleche (horse carriage) drivers and agree a round-trip price before boarding.",
      "Carry small bills (EGP 10–20) for baksheesh (tips) to tomb guards and boat crew.",
      "Drink at least 3 litres of water per day and wear a hat — Luxor regularly exceeds 40 °C in summer.",
      "The restored Avenue of Sphinxes is best walked at sunset, when it's cooler and dramatically lit.",
    ],
    gallery: [
      "/images/dest-13.jpg",
      "/images/tour-12.jpg",
      "/images/breadcrumb-3.jpg",
      "/images/offer-3.jpg",
    ],
  },

  "mount-sinai": {
    slug: "mount-sinai",
    name: "Mount Sinai",
    country: "Egypt",
    region: "Africa",
    tagline: "The sacred mountain of Moses, where pilgrims climb through starlight to greet the dawn",
    heroImage: "/images/dest-14.jpg",
    overview:
      "Mount Sinai — Jebel Musa to the Bedouin — rises 2,285 metres from the rust-red granite of the southern Sinai Peninsula, a peak revered equally by Judaism, Christianity, and Islam as the place where God delivered the Ten Commandments to Moses. The pre-dawn pilgrimage to its summit is one of the world's most profound travel experiences: climbing by torchlight through a silence broken only by the crunch of gravel and the murmur of prayer, then watching the first light of day spill across a vast wilderness of jagged peaks and desert valleys stretching to the Gulf of Aqaba.\n\nAt the mountain's base sits St. Catherine's Monastery, founded in the 6th century by order of Emperor Justinian and now the oldest continuously inhabited Christian monastery on Earth. Its library holds the second-largest collection of ancient manuscripts after the Vatican, and within its walls grows the Burning Bush — or so tradition holds — a living thorny shrub venerated for millennia. The monastery's mosaic of the Transfiguration, glittering in gold above the altar, is a masterpiece of early Byzantine art.\n\nThe Sinai itself is a landscape of austere, raw beauty: wadis cut deep into red granite, Bedouin gardens appear in hidden oases, and the silence of the high desert envelops you like a physical presence. Whether you come for faith, adventure, or simply the desire to stand where history and legend converge, Mount Sinai delivers an experience that transcends the ordinary.",
    quickFacts: {
      capital: "Cairo",
      currency: "Egyptian Pound (EGP)",
      climate: "Desert highland; freezing at the summit before dawn, hot by midday in the valleys",
      bestSeason: "March–May & September–November (moderate temperatures for the climb)",
      languages: "Arabic, Bedouin Sinai Arabic, some English",
      timeZone: "EET (UTC+2)",
    },
    itinerary: [
      {
        day: 1,
        title: "Arrival at St. Catherine's Village",
        location: "St. Catherine's, Sinai",
        description:
          "Arrive at the small settlement of St. Catherine's, nestled in a valley ringed by granite peaks. Meet your Bedouin guide, settle into a guesthouse, and share a communal dinner of bedouin bread baked in sand embers, grilled chicken, and sweet Sinai tea. Rest early — the summit climb begins at 2 AM.",
        highlights: [
          "Meet your Bedouin guide and learn about Jabaliya tribal traditions",
          "Taste Bedouin flat bread baked in sand-covered embers",
          "Stargaze in the unpolluted Sinai sky — one of the darkest in the Middle East",
          "Rest in a stone guesthouse with the monastery visible below",
        ],
        image: "/images/dest-14.jpg",
      },
      {
        day: 2,
        title: "Summit Climb & Sunrise Pilgrimage",
        location: "Mount Sinai Summit",
        description:
          "Begin the ascent at 2 AM by torchlight along the Camel Path, a gradual switchback trail used by pilgrims for centuries. The final 750 Steps of Repentance are steeper — carved into the granite by monks. Arrive at the summit chapel as the horizon begins to glow, then watch one of the most spectacular sunrises on Earth unfold across the desert ranges.",
        highlights: [
          "Climb the Camel Path by torchlight with fellow pilgrims from around the world",
          "Ascend the 750 Steps of Repentance carved into the granite face",
          "Watch the sunrise from 2,285 metres as the desert turns gold and copper",
          "Visit the small chapel of the Holy Trinity at the summit",
        ],
        image: "/images/breadcrumb-4.jpg",
      },
      {
        day: 3,
        title: "St. Catherine's Monastery & Burning Bush",
        location: "St. Catherine's Monastery",
        description:
          "Descend from the mountain and enter St. Catherine's Monastery, a 6th-century fortress-church housing priceless icons, illuminated manuscripts, and the Burning Bush. Admire the Transfiguration mosaic above the altar, explore the charnel house of the monks' ossuary, and browse the monastery's small museum of religious art.",
        highlights: [
          "Enter the basilica to see the 6th-century Transfiguration mosaic in gold",
          "View the Burning Bush, the living plant venerated for over 1,500 years",
          "Browse the monastery museum's collection of early Christian icons",
          "Walk among the fortified walls that have protected the monastery since 565 AD",
        ],
        image: "/images/tour-13.jpg",
      },
      {
        day: 4,
        title: "Wadi Trails & Bedouin Gardens",
        location: "Sinai High Desert",
        description:
          "Hike with Bedouin guides into the surrounding wadis, where hidden gardens irrigated by ancient stone channels grow almonds, olives, and herbs amid the barren granite. Visit the Blue Desert, where a Belgian artist painted boulders blue as a peace memorial, and lunch in a shaded wadi on grilled goat and fresh herb tea.",
        highlights: [
          "Discover hidden Bedouin wadi gardens growing almonds and herbs amid granite",
          "Visit the Blue Desert and its painted boulder peace memorial",
          "Lunch on grilled goat and fresh sage tea in a shaded wadi",
          "Learn about Bedouin medicinal plant knowledge from your guide",
        ],
        image: "/images/explor-3.jpg",
      },
    ],
    thingsToDo: [
      {
        title: "Sunrise Summit Pilgrimage",
        description:
          "Climb through starlight to the peak of Mount Sinai and witness a sunrise that has drawn pilgrims of three faiths for millennia.",
        iconName: "Mountain",
      },
      {
        title: "St. Catherine's Monastery",
        description:
          "Explore the world's oldest continuously inhabited monastery, with its Byzantine mosaics, ancient manuscripts, and the Burning Bush.",
        iconName: "Landmark",
      },
      {
        title: "Bedouin Cultural Immersion",
        description:
          "Share meals, stories, and tea with Jabaliya Bedouin guides whose ancestors have lived in the shadow of the mountain for centuries.",
        iconName: "Heart",
      },
      {
        title: "Desert Stargazing",
        description:
          "Lie back on granite slabs in one of the darkest skies in the northern hemisphere, where the Milky Way arcs overhead in vivid detail.",
        iconName: "Globe",
      },
      {
        title: "Wadi Trekking",
        description:
          "Hike through red granite wadis to hidden oases, ancient rock inscriptions, and the surreal Blue Desert art installation.",
        iconName: "MapPin",
      },
    ],
    travelTips: [
      "Start the summit climb by 2 AM to arrive for sunrise — the ascent takes 2.5–3 hours at a moderate pace.",
      "Temperatures at the summit can drop below freezing even in summer; bring warm layers, gloves, and a hat.",
      "Hire a Bedouin guide — it's respectful, supports the local economy, and they know the mountain intimately.",
      "Bring a headlamp with spare batteries; the trail is unlit and torchlight is essential.",
      "St. Catherine's Monastery is open to visitors only from 9 AM–12 PM; modest dress is required.",
      "Carry all your water (at least 2 litres for the climb) — there are no reliable water sources on the mountain.",
      "The camel option covers only part of the trail; the 750 Steps of Repentance must be done on foot.",
    ],
    gallery: [
      "/images/dest-14.jpg",
      "/images/breadcrumb-4.jpg",
      "/images/tour-13.jpg",
      "/images/explor-3.jpg",
    ],
  },

  serengeti: {
    slug: "serengeti",
    name: "Serengeti",
    country: "Tanzania",
    region: "Africa",
    tagline: "Endless plains where the greatest wildlife spectacle on Earth unfolds",
    heroImage: "/images/dest-15.jpg",
    overview:
      "The Serengeti is a name that echoes with the cadence of migration — derived from the Maasai word 'siringet,' meaning 'endless plains,' it describes a landscape so vast that the horizon dissolves into heat shimmer and sky. This 14,750-square-kilometre national park, together with Kenya's adjacent Masai Mara, hosts the Great Migration: an annual procession of over two million wildebeest, zebra, and gazelle circling the ecosystem in search of rain-greened grass, pursued by the full roster of African predators.\n\nA single game drive can yield sightings that defy belief: a leopard draped languidly over a sausage tree branch, a pride of lions stalking through golden grass, a cheetah accelerating to 110 km/h in pursuit of a Thomson's gazelle, and — in the far north — thousands of wildebeest leaping into the crocodile-infested Mara River in a chaos of spray and survival. The Serengeti's southern plains, around Ndutu, are the calving grounds where 8,000 wildebeest are born daily in January and February, attracting hyenas, jackals, and raptors to a feast of new life.\n\nBeyond the migration, the Serengeti holds resident prides, elephant herds, giraffe, hippo pods in the Grumeti River, and over 500 bird species. Luxury tented camps and mobile safari camps put you within earshot of lions roaring at night. A Serengeti sunset — silhouetting an acacia tree against a sky striped in coral and violet — is among the most iconic images in all of nature.",
    quickFacts: {
      capital: "Dodoma",
      currency: "Tanzanian Shilling (TZS), USD widely accepted",
      climate: "Tropical savanna with a dry season (June–October) and two wet seasons",
      bestSeason: "June–October (dry season, river crossings) & January–February (calving season)",
      languages: "Swahili, English",
      timeZone: "EAT (UTC+3)",
      drivingSide: "Left",
    },
    itinerary: [
      {
        day: 1,
        title: "Arrival & First Game Drive",
        location: "Seronera, Central Serengeti",
        description:
          "Fly into Seronera airstrip in the heart of the Serengeti and transfer to your tented camp. An afternoon game drive along the Seronera River reveals hippo pods, crocodiles, and resident lion prides that use the riverine woodland as hunting cover. End the day watching the sunset from your camp's elevated deck.",
        highlights: [
          "Land at Seronera airstrip in the heart of the Serengeti",
          "Spot hippos, crocodiles, and monitor lizards along the Seronera River",
          "Encounter a resident lion pride resting in the shade of a kopje",
          "Watch a Serengeti sunset from your elevated tented camp deck",
        ],
        image: "/images/dest-15.jpg",
      },
      {
        day: 2,
        title: "Big Cat Country & Kopje Exploration",
        location: "Central Serengeti & Simba Kopjes",
        description:
          "Set out before dawn to find cheetahs hunting on the short-grass plains. Drive to the Simba Kopjes — granite outcrops where lions and leopards rest — and scan for rock hyrax and agama lizards. Afternoon, visit a Maasai community for a cultural exchange and learn about their coexistence with wildlife.",
        highlights: [
          "Witness a cheetah stalk or chase on the open plains at dawn",
          "Search for leopards and lions lounging on the Simba Kopjes",
          "Visit a Maasai boma to learn about pastoralist life alongside wildlife",
          "Photograph giraffe, topi, and eland silhouetted against the setting sun",
        ],
        image: "/images/trand-2.jpg",
      },
      {
        day: 3,
        title: "Northern Serengeti & Mara River Crossing",
        location: "Kogatende, Northern Serengeti",
        description:
          "Fly or drive north to Kogatende, the epicentre of the Great Migration river crossings (July–October). Position yourself on the banks of the Mara River and wait for the dramatic moment when thousands of wildebeest plunge into crocodile-patrolled waters. The chaos, sound, and scale are unforgettable.",
        highlights: [
          "Witness wildebeest leaping into the Mara River during the Great Migration",
          "Watch Nile crocodiles and hippos patrol the crossing points",
          "See the vast herds stretching to the horizon on the northern plains",
          "Enjoy a bush breakfast beside the river as the migration swirls around you",
        ],
        image: "/images/trand-3.jpg",
      },
      {
        day: 4,
        title: "Balloon Safari & Grumeti River",
        location: "Western Corridor, Serengeti",
        description:
          "Rise before dawn for a hot air balloon safari over the Western Corridor, drifting silently above herds, rivers, and acacia woodlands. After a champagne bush breakfast, drive along the Grumeti River to find massive Nile crocodiles, olive baboon troops, and colobus monkeys in the riverine forest.",
        highlights: [
          "Float silently over the Serengeti at sunrise in a hot air balloon",
          "Toast your landing with champagne at a bush breakfast in the savanna",
          "Spot giant Nile crocodiles basking along the Grumeti River",
          "Photograph black-and-white colobus monkeys in the Grumeti riverine forest",
        ],
        image: "/images/offer-4.jpg",
      },
      {
        day: 5,
        title: "Southern Plains & Departure",
        location: "Ndutu & Southern Serengeti",
        description:
          "If visiting January–March, drive to the Ndutu calving grounds to witness thousands of wildebeest giving birth on the short-grass plains — an astonishing daily spectacle of new life and predators. Take a final morning game drive, then fly out from Seronera with the endless plains etched into memory.",
        highlights: [
          "Witness the calving season with thousands of newborn wildebeest (Jan–Mar)",
          "Watch hyenas, jackals, and eagles converge on the calving plains",
          "Spot flamingos at Lake Ndutu on the migration route",
          "Take a final game drive as the Serengeti bids farewell in golden light",
        ],
        image: "/images/dest-16.jpg",
      },
    ],
    thingsToDo: [
      {
        title: "Great Migration River Crossings",
        description:
          "Watch over two million wildebeest and zebra plunge into the crocodile-patrolled Mara River in one of nature's most dramatic spectacles.",
        iconName: "Globe",
      },
      {
        title: "Big Five Game Drives",
        description:
          "Track lion, leopard, elephant, buffalo, and rhinoceros across the Serengeti's grasslands, kopjes, and riverine forests.",
        iconName: "Camera",
      },
      {
        title: "Hot Air Balloon Safari",
        description:
          "Float silently over the savanna at sunrise, watching herds, predators, and the Serengeti's endless landscape from above.",
        iconName: "Mountain",
      },
      {
        title: "Maasai Cultural Visit",
        description:
          "Enter a Maasai boma to learn about warrior traditions, cattle herding, and the community's coexistence with Serengeti wildlife.",
        iconName: "Heart",
      },
      {
        title: "Bush Dining & Sundowners",
        description:
          "Enjoy candlelit bush dinners, champagne sundowners, and campfire storytelling beneath a sky blazing with stars.",
        iconName: "Utensils",
      },
      {
        title: "Birdwatching",
        description:
          "Spot over 500 species including lilac-breasted rollers, secretary birds, martial eagles, and crowned cranes on the plains.",
        iconName: "BookOpen",
      },
    ],
    travelTips: [
      "The Great Migration river crossings happen July–October in the north; calving season is January–February in the south — plan your visit accordingly.",
      "Book safari lodges and camps 6–12 months in advance for peak season (July–October).",
      "Bring binoculars, a telephoto lens (at least 200mm), and a bean bag for stabilising shots from the vehicle roof.",
      "Wear neutral-coloured clothing (khaki, green, beige) — bright colours can disturb wildlife.",
      "Malaria is present; take prophylaxis and use insect repellent, especially at dusk and dawn.",
      "Tip your guide and camp staff — USD 15–20 per person per day for guides is standard.",
      "Keep all limbs inside the vehicle during game drives — wild animals are unpredictable and distances are deceiving.",
    ],
    gallery: [
      "/images/dest-15.jpg",
      "/images/trand-2.jpg",
      "/images/trand-3.jpg",
      "/images/offer-4.jpg",
      "/images/dest-16.jpg",
    ],
  },

  zanzibar: {
    slug: "zanzibar",
    name: "Zanzibar",
    country: "Tanzania",
    region: "Africa",
    tagline: "The Spice Island — where turquoise tides meet ancient stone and fragrant clove breezes",
    heroImage: "/images/dest-17.jpg",
    overview:
      "Zanzibar is a name that tastes of cloves, nutmeg, and sea salt — an archipelago off the Tanzanian coast that has served as a crossroads of African, Arab, Indian, and European cultures for over a thousand years. Stone Town, the island's UNESCO-listed historic heart, is a labyrinth of coral-stone buildings, intricately carved wooden doors, rooftop terraces, and narrow alleys where the scent of spice and grilled seafood mingles with the sound of Taarab music drifting from open windows.\n\nBeyond Stone Town, Zanzibar's coastline unspools in a sequence of powdery white-sand beaches fringed by coconut palms and lapped by water so clear it seems like swimming in glass. Nungwi and Kendwa on the north coast offer sunset dhow cruises and fire-dance beach parties, while the east coast's Paje and Jambiani are kite-surfing havens where low tide reveals a vast sandbar stretching to the reef. Off the western shore, Prison Island harbours giant Aldabra tortoises, some over 100 years old.\n\nThe Spice Tour is quintessential Zanzibar: walk through plantations where cloves, vanilla, cinnamon, black pepper, and lemongrass grow in fragrant profusion, tasting each one fresh from the plant. At night, Forodhani Gardens in Stone Town transforms into an open-air food market where Zanzibari pizza, octopus skewers, sugarcane juice, and urojo soup sizzle under lamplight. Zanzibar is not just a beach destination — it is a sensory immersion.",
    quickFacts: {
      capital: "Zanzibar City (Stone Town)",
      currency: "Tanzanian Shilling (TZS), USD widely accepted",
      climate: "Tropical maritime with warm temperatures year-round; two rainy seasons",
      bestSeason: "June–October (dry season, best diving) & December–February (warm, sunny)",
      languages: "Swahili, English, Arabic",
      timeZone: "EAT (UTC+3)",
      drivingSide: "Left",
    },
    itinerary: [
      {
        day: 1,
        title: "Stone Town Heritage Walk",
        location: "Stone Town, Zanzibar City",
        description:
          "Plunge into the labyrinth of Stone Town: pass the House of Wonders, the Old Fort, and the former slave market — now the site of the Anglican Cathedral — to understand the island's complex history. Photograph the ornately carved wooden doors that distinguish each merchant house, and end at Forodhani Gardens as the night food market fires up its grills.",
        highlights: [
          "Explore the UNESCO-listed coral-stone alleys of Stone Town",
          "Visit the former slave market and Anglican Cathedral memorial",
          "Photograph Zanzibar's famous intricately carved wooden doors",
          "Feast on Zanzibari pizza and octopus skewers at Forodhani night market",
        ],
        image: "/images/dest-17.jpg",
      },
      {
        day: 2,
        title: "Spice Tour & Jozani Forest",
        location: "Central Zanzibar",
        description:
          "Join a spice plantation tour to taste cloves, vanilla, cinnamon, black pepper, and lemongrass straight from the plant as a guide weaves leaves into jewellery and crowns. Afternoon, visit Jozani Chwaka Bay National Park, home to the rare red colobus monkey found nowhere else on Earth.",
        highlights: [
          "Taste cloves, nutmeg, cinnamon, and vanilla fresh from the plant",
          "Wear a crown woven from palm and spice leaves by your guide",
          "Spot endangered Zanzibar red colobus monkeys in Jozani Forest",
          "Walk the mangrove boardwalk through Jozani's tidal ecosystem",
        ],
        image: "/images/blog-2.jpg",
      },
      {
        day: 3,
        title: "Nungwi Beach & Dhow Sunset Cruise",
        location: "Nungwi, Northern Zanzibar",
        description:
          "Travel to Nungwi, where white sand meets water that shifts from turquoise to sapphire. Swim, snorkel over the reef, and visit the Mnarani Marine Turtle Conservation Pond to see hawksbill and green turtles. At dusk, board a traditional dhow for a sunset cruise as the sky burns orange over the Indian Ocean.",
        highlights: [
          "Swim in the turquoise shallows of Nungwi's powdery white-sand beach",
          "Meet rescued hawksbill turtles at Mnarani Marine Conservation",
          "Cruise on a traditional dhow as the Indian Ocean sunset blazes",
          "Join a beach bonfire and drum circle under the stars at Nungwi",
        ],
        image: "/images/offer-5.jpg",
      },
      {
        day: 4,
        title: "Prison Island & Snorkelling",
        location: "Changuu (Prison Island) & Bawe Reef",
        description:
          "Boat to Prison Island to meet giant Aldabra tortoises, some over a century old, in the shade of baobab trees. Continue to Bawe Island or Mnemba Atoll for world-class snorkelling over coral gardens teeming with lionfish, moray eels, and green turtles gliding through the warm current.",
        highlights: [
          "Hand-feed 100-year-old Aldabra giant tortoises on Prison Island",
          "Snorkel Mnemba Atoll or Bawe Reef among lionfish and sea turtles",
          "Swim in the gin-clear water of a deserted sandbar",
          "Spot bottlenose dolphins on the boat ride between islands",
        ],
        image: "/images/blog-3.jpg",
      },
      {
        day: 5,
        title: "Paje Kitesurfing & Farewell",
        location: "Paje, East Coast",
        description:
          "Head to Paje on the east coast, Zanzibar's kite-surfing capital, where steady trade winds and a vast low-tide sandbar create perfect conditions. Take a lesson or watch from a beachfront café with a fresh coconut. End with a farewell seafood dinner at The Rock, a restaurant perched on a tiny rock in the ocean.",
        highlights: [
          "Try kite-surfing on Paje's flat, shallow sandbar at low tide",
          "Walk the endless low-tide sand flats with seaweed farmers at work",
          "Dine at The Rock restaurant, perched on a tiny ocean boulder",
          "Watch the moon rise over the Indian Ocean on your final Zanzibar evening",
        ],
        image: "/images/dest-18.jpg",
      },
    ],
    thingsToDo: [
      {
        title: "Stone Town Heritage Walk",
        description:
          "Wander the UNESCO-listed labyrinth of coral-stone alleys, carved doors, rooftop cafés, and the former slave market that shaped Zanzibar's history.",
        iconName: "Landmark",
      },
      {
        title: "Spice Plantation Tour",
        description:
          "Taste cloves, vanilla, cinnamon, and lemongrass fresh from the plant on a guided walk through Zanzibar's legendary spice farms.",
        iconName: "Lightbulb",
      },
      {
        title: "Beach & Water Sports",
        description:
          "Swim, snorkel, kitesurf, and sail on beaches ranked among the world's finest, from Nungwi's turquoise north to Paje's kite-surfing east.",
        iconName: "Waves",
      },
      {
        title: "Forodhani Night Market",
        description:
          "Graze through Stone Town's legendary outdoor food market for Zanzibari pizza, urojo soup, grilled octopus, and fresh sugarcane juice.",
        iconName: "Utensils",
      },
      {
        title: "Dolphin & Turtle Encounters",
        description:
          "Meet giant Aldabra tortoises on Prison Island and snorkel with dolphins and green turtles off Mnemba Atoll.",
        iconName: "Heart",
      },
      {
        title: "Jozani Forest Red Colobus Monkeys",
        description:
          "Trek through Zanzibar's only national park to see the endemic red colobus monkey, found nowhere else on the planet.",
        iconName: "Globe",
      },
    ],
    travelTips: [
      "Zanzibar is predominantly Muslim — dress modestly in Stone Town (cover shoulders and knees) and save swimwear for the beach.",
      "Bargain at markets and with taxi drivers — agree on a price before getting in the car.",
      "The best diving and snorkelling visibility is during the dry season (June–October).",
      "Avoid the heavy rains of April–May (masika season) when many beach hotels close and roads flood.",
      "Use reef-safe sunscreen to protect the coral — Zanzibar's reefs are fragile and under pressure.",
      "Malaria is present; take prophylaxis and use mosquito repellent, especially at dusk.",
      "Carry USD in small bills for tips, transport, and small purchases — many vendors don't carry change for large notes.",
    ],
    gallery: [
      "/images/dest-17.jpg",
      "/images/blog-2.jpg",
      "/images/offer-5.jpg",
      "/images/blog-3.jpg",
      "/images/dest-18.jpg",
    ],
  },

  moscow: {
    slug: "moscow",
    name: "Moscow",
    country: "Russia",
    region: "North Asia",
    tagline: "Red Square, the Kremlin, Bolshoi Theatre, and centuries of imperial grandeur",
    heroImage: "/images/city-5.jpg",
    overview:
      "Moscow is a city of extraordinary contrasts — Soviet-era monuments rise beside gilded Orthodox domes, underground metro stations rival palace ballrooms in their marble splendour, and the ancient Kremlin watches over a skyline of glass towers and neon-lit boulevards. As Russia's sprawling capital, Moscow has reinvented itself across centuries of tsars, revolution, and renewal, yet its core remains unchanged: a city of immense ambition, profound culture, and a deep-rooted pride in its endurance.\n\nAt its heart lies Red Square, arguably the most recognisable plaza on Earth. On one side rises the brick parapets of the Kremlin — a fortified complex housing cathedrals with gilded onion domes, Tsar Cannon, Tsar Bell, and the seat of Russian power. Opposite stands the candy-striped spires of St. Basil's Cathedral, commissioned by Ivan the Terrible in 1555 to commemorate a military victory and still one of the most photographed buildings in the world. Between them, Lenin's Mausoleum marks the resting place of the Soviet Union's founding leader.\n\nBeyond the square, Moscow rewards exploration: the Bolshoi Theatre offers world-class ballet and opera in a gilded auditorium; the Tretyakov Gallery houses the world's greatest collection of Russian art; and the Gorky Park riverside promenade buzzes year-round with food stalls, art installations, and ice skating in winter. The city's metro system alone is worth descending into — palatial stations with mosaics, sculptures, and chandeliers built as 'people's palaces' in the Stalin era.",
    quickFacts: {
      capital: "Moscow (national capital)",
      currency: "Russian Ruble (₽ / RUB)",
      climate: "Humid continental — cold winters (avg. -10 °C), warm summers (avg. 24 °C)",
      bestSeason: "May–June (White Nights approach) & September–October (golden autumn foliage)",
      languages: "Russian",
      timeZone: "MSK (UTC+3)",
      drivingSide: "Right",
    },
    itinerary: [
      {
        day: 1,
        title: "Red Square, Kremlin & St. Basil's",
        location: "Central Moscow",
        description:
          "Begin at Red Square at dawn when it is nearly empty and at its most atmospheric. Enter the Kremlin to see the Ivan the Great Bell Tower, the Assumption Cathedral with its golden iconostasis, and the staggeringly large Tsar Bell and Tsar Cannon. End the afternoon inside St. Basil's Cathedral, marvelling at its maze of spiralling staircases and painted vaulted chapels.",
        highlights: [
          "Experience Red Square at dawn — almost no crowds, extraordinary atmosphere",
          "Tour the Kremlin's cathedrals and armory housing imperial regalia",
          "See the 200-tonne Tsar Bell that was never rung and the Tsar Cannon never fired",
          "Explore the candy-striped interior of St. Basil's Cathedral",
        ],
        image: "/images/city-5.jpg",
      },
      {
        day: 2,
        title: "Bolshoi Theatre & Metro Palace Tour",
        location: "Central Moscow",
        description:
          "Attend a daytime tour of the Bolshoi Theatre, the gilded symbol of Russian classical arts, and book an evening performance of ballet or opera if available. Between visits, descend into Moscow's legendary metro system to visit Komsomolskaya, Mayakovskaya, and Novoslobodskaya stations — each a palatial hall of marble, stained glass, and Soviet-era mosaics.",
        highlights: [
          "Tour the Bolshoi Theatre's imperial-gold main hall and backstage areas",
          "Attend an evening ballet or opera — book ahead as tickets sell out fast",
          "Visit Komsomolskaya metro station, often called the most beautiful in the world",
          "Photograph the Art Deco mosaics of Mayakovskaya station",
        ],
        image: "/images/city-6.jpg",
      },
      {
        day: 3,
        title: "Tretyakov Gallery & Gorky Park",
        location: "Moscow",
        description:
          "Spend the morning at the State Tretyakov Gallery, home to over 130,000 works of Russian art from medieval icons to avant-garde masterpieces by Kandinsky and Malevich. Afternoon, walk along the Moscow River to Gorky Park for open-air art installations, riverside cafés, and people-watching. In winter, strap on skates at the park's famous outdoor rink.",
        highlights: [
          "See Rublev's Holy Trinity icon and Surikov's massive historical canvases at the Tretyakov",
          "Walk the Krymskaya Embankment open-air gallery between Gorky Park and the city",
          "Rent a bike or skates at Gorky Park depending on the season",
          "Try Borodinsky black bread with smoked salmon at a riverside café",
        ],
        image: "/images/tour-5.jpg",
      },
      {
        day: 4,
        title: "Arbat Street, Novodevichy & Night City",
        location: "Moscow",
        description:
          "Stroll the pedestrian Arbat Street, Moscow's historic bohemian quarter lined with street musicians, portraitists, souvenir stalls, and 19th-century mansions. Visit the UNESCO-listed Novodevichy Convent and its cemetery — resting place of Chekhov, Gogol, Stalin's wife, and Khrushchev. Evening, take a river cruise for illuminated views of the Kremlin.",
        highlights: [
          "Walk the full length of Arbat Street, picking up matryoshka dolls and Soviet pins",
          "Tour Novodevichy Convent's white-and-gold Smolensk Cathedral",
          "Find the graves of Chekhov and Gogol in Novodevichy Cemetery",
          "Take a night river cruise to see the Kremlin towers lit against the night sky",
        ],
        image: "/images/tour-6.jpg",
      },
      {
        day: 5,
        title: "Kolomenskoye & Izmailovo Market",
        location: "Moscow Outskirts",
        description:
          "Escape central Moscow for Kolomenskoye, a UNESCO-listed former royal estate where the 16th-century Ascension Church rises above the Moscow River on a dramatic escarpment. In the afternoon, explore Izmailovo Market — Moscow's largest open-air flea market for Soviet memorabilia, antique samovars, vintage propaganda posters, and handmade crafts.",
        highlights: [
          "Stand before the soaring Ascension Church of Kolomenskoye, a UNESCO World Heritage Site",
          "Walk the apple and cherry orchards of the former tsars' summer estate",
          "Bargain for Soviet badges, matryoshkas, and antique maps at Izmailovo Market",
          "Taste medovukha (honey mead) poured from wooden barrels at the market entrance",
        ],
        image: "/images/about-1.jpg",
      },
    ],
    thingsToDo: [
      {
        title: "Red Square & Kremlin",
        description:
          "Walk the cobblestones of the world's most iconic plaza and enter the medieval fortress housing Russia's greatest cathedrals and imperial treasures.",
        iconName: "Landmark",
      },
      {
        title: "Bolshoi Theatre Ballet",
        description:
          "Attend a performance in one of the world's great opera houses — gilded, acoustically perfect, and still the benchmark for classical Russian ballet.",
        iconName: "BookOpen",
      },
      {
        title: "Palace Metro Stations",
        description:
          "Descend into Moscow's underground palaces — marble halls, crystal chandeliers, and Socialist Realist mosaics that rival any museum above ground.",
        iconName: "Globe",
      },
      {
        title: "Tretyakov Gallery",
        description:
          "Trace Russian art from Byzantine icons to 20th-century avant-garde in the world's most comprehensive collection of Russian painting and sculpture.",
        iconName: "Camera",
      },
      {
        title: "Izmailovo Flea Market",
        description:
          "Hunt for Soviet-era medals, vintage samovars, propaganda posters, and hand-painted lacquer boxes at Moscow's sprawling open-air antiques bazaar.",
        iconName: "MapPin",
      },
      {
        title: "Gorky Park Riverside",
        description:
          "Stroll, cycle, or skate along the Moscow River embankment through Gorky Park's open-air galleries, food stalls, and cultural pavilions.",
        iconName: "Heart",
      },
    ],
    travelTips: [
      "A Russian tourist e-Visa is available for many nationalities — apply at least two weeks before travel.",
      "Moscow's metro is the fastest way to get around — buy a Troika card and top it up; trains run every 90 seconds at peak hours.",
      "Pre-book the Kremlin and Bolshoi Theatre well in advance — both sell out, especially during holidays.",
      "Winter (November–February) is bitterly cold but magical — Red Square under snow is unforgettable; pack thermal layers.",
      "Many restaurants expect cash — carry rubles as not all places accept foreign cards.",
      "English signage is limited outside tourist zones; download a Russian offline map and translation app.",
      "The Kremlin requires airport-style security; no large bags, and modest dress is required for cathedral entry.",
    ],
    gallery: [
      "/images/city-5.jpg",
      "/images/city-6.jpg",
      "/images/tour-5.jpg",
      "/images/tour-6.jpg",
      "/images/about-1.jpg",
    ],
  },

  "st-petersburg": {
    slug: "st-petersburg",
    name: "St. Petersburg",
    country: "Russia",
    region: "North Asia",
    tagline: "Hermitage Museum, Winter Palace, White Nights, and baroque waterfront splendour",
    heroImage: "/images/city-6.jpg",
    overview:
      "St. Petersburg was built to astonish. Peter the Great founded it in 1703 on a marshy delta of the Neva River, then assembled the greatest architects of Europe — Italian, French, German — and set them to work creating a Russian Venice of palaces, canals, and boulevards on a scale to rival any capital on the continent. The result is a city of staggering visual magnificence: pastel-painted baroque facades reflected in dark waterways, golden spires rising from islands connected by hundreds of ornate bridges, and an unbroken riverfront of imperial grandeur stretching along the Neva.\n\nAt the city's heart stands the Winter Palace — home to the tsars for nearly two centuries and now the centrepiece of the Hermitage Museum, one of the largest and most visited art museums on Earth. Its five interconnected buildings hold over three million items: Rembrandts, Leonardos, Picassos, and an entire room of Matisse canvases, displayed in gilded halls where Nicholas II once held court. A single day is barely enough to graze the surface; many visitors return repeatedly and still feel they've missed half of it.\n\nThe city's signature phenomenon is the White Nights — from late May to mid-July, when the sun barely sets and the sky stays luminous around midnight. Drawbridges along the Neva rise in the small hours to let cargo ships pass, and Petersburgers fill the embankments in a spontaneous street festival that lasts for weeks. The White Nights Classical Music Festival, staged at the Mariinsky Theatre, draws the world's greatest conductors and soloists to perform under a sky that never fully darkens.",
    quickFacts: {
      capital: "Moscow (national capital; St. Petersburg is Russia's cultural capital)",
      currency: "Russian Ruble (₽ / RUB)",
      climate: "Humid continental — cold winters, mild summers; White Nights from late May to mid-July",
      bestSeason: "Late May–July (White Nights) & September (golden autumn, fewer crowds)",
      languages: "Russian",
      timeZone: "MSK (UTC+3)",
      drivingSide: "Right",
    },
    itinerary: [
      {
        day: 1,
        title: "Hermitage Museum & Palace Square",
        location: "Palace Embankment, St. Petersburg",
        description:
          "Arrive at the Winter Palace and spend the full day inside the Hermitage — plan a route in advance to cover the highlights: the Jordan Staircase, the Malachite Room, da Vinci's two Madonnas, Rembrandt's Return of the Prodigal Son, and the Impressionist halls. Step out to photograph the Alexander Column and baroque sweep of Palace Square at sunset.",
        highlights: [
          "Navigate the Hermitage's gilded State Rooms and Knights Hall",
          "Stand before Rembrandt's monumental Return of the Prodigal Son",
          "Photograph the baroque Winter Palace facade from Palace Square",
          "Watch the sun set behind the Alexander Column over the vast square",
        ],
        image: "/images/city-6.jpg",
      },
      {
        day: 2,
        title: "Peter & Paul Fortress & Canal Boat Tour",
        location: "Zayachy Island & City Canals",
        description:
          "Cross to Zayachy Island for the Peter and Paul Fortress — the city's birthplace, housing the cathedral where all Russian emperors from Peter the Great to Nicholas II are buried. Afternoon, board a boat for a canal tour weaving beneath the city's famous ornamental bridges, past the Church of the Savior on Spilled Blood and the Mikhailovsky Gardens.",
        highlights: [
          "Visit the Peter and Paul Cathedral, burial place of Russia's tsars",
          "Walk the Neva-facing ramparts for views of the Winter Palace across the river",
          "Float under gilded bridges and past hidden courtyards on a canal boat tour",
          "See the Church of the Savior on Spilled Blood glittering from the water",
        ],
        image: "/images/tour-7.jpg",
      },
      {
        day: 3,
        title: "Peterhof Palace & Fountain Gardens",
        location: "Gulf of Finland, 30 km west",
        description:
          "Take a hydrofoil across the Gulf of Finland to Peterhof, the 'Russian Versailles' — a palace complex where 64 fountains powered entirely by natural gravity cascade down terraced gardens to the sea. The Grand Cascade, flanked by gilded statues of Samson, is one of the great baroque spectacles of Europe. Walk the Lower Park to the intimate Monplaisir Palace on the water's edge.",
        highlights: [
          "Arrive by hydrofoil across the Gulf of Finland for a dramatic first view",
          "Watch the Grand Cascade's 64 gravity-powered fountains in full flow",
          "Stroll the Lower Park past golden statues to the sea-facing Monplaisir Palace",
          "Explore the golden-domed Grand Palace's state rooms and Throne Hall",
        ],
        image: "/images/explor-2.jpg",
      },
      {
        day: 4,
        title: "Mariinsky Theatre & White Nights",
        location: "Teatralnaya Square & City Embankments",
        description:
          "Attend an evening performance at the Mariinsky Theatre, Russia's most prestigious opera and ballet stage and home to the Kirov Ballet. If visiting during White Nights (late May–July), stay out late and join the crowds on the embankments to watch the Neva's drawbridges rise at 1 AM as cargo ships pass beneath a sky that never fully darkens.",
        highlights: [
          "Attend a ballet or opera in the Mariinsky's historic hall — buy tickets in advance",
          "Walk the Palace Embankment at midnight under the luminous White Nights sky",
          "Watch the Neva drawbridges rise at 1 AM surrounded by celebrating Petersburgers",
          "Photograph the Church of the Savior on Spilled Blood lit gold against the pale summer night",
        ],
        image: "/images/city-5.jpg",
      },
      {
        day: 5,
        title: "Pushkin Town & Catherine Palace",
        location: "Pushkin (Tsarskoye Selo), 25 km south",
        description:
          "Day-trip to Tsarskoye Selo — 'the tsar's village' — to see the electric-blue Catherine Palace with its jaw-dropping Great Hall and the reconstructed Amber Room, one of the world's greatest lost and found wonders. Stroll Catherine Park's formal gardens, past the Hermitage Pavilion and the Great Pond, before returning to St. Petersburg for a farewell dinner of blinis with caviar.",
        highlights: [
          "Marvel at the Great Hall's mirrors and gilded stucco in Catherine Palace",
          "Stand in the reconstructed Amber Room — 6 tonnes of amber, gold, and mirrors",
          "Walk Catherine Park past formal terraces, ponds, and folly pavilions",
          "Farewell dinner of blinis with red and black caviar in a city-centre restaurant",
        ],
        image: "/images/tour-8.jpg",
      },
    ],
    thingsToDo: [
      {
        title: "Hermitage Museum",
        description:
          "Lose yourself in three million artworks across five interconnected winter palaces — da Vinci, Rembrandt, Picasso, and the gilded halls where tsars held court.",
        iconName: "Landmark",
      },
      {
        title: "White Nights Nights Out",
        description:
          "Experience the surreal midnight twilight of late May–July when the sky stays luminous and Petersburgers flood the embankments in spontaneous celebration.",
        iconName: "Globe",
      },
      {
        title: "Mariinsky Ballet & Opera",
        description:
          "Attend a world-class performance at Russia's most prestigious stage, home to the legendary Kirov Ballet and decades of celebrated conductors.",
        iconName: "BookOpen",
      },
      {
        title: "Peterhof Fountains",
        description:
          "See 64 gravity-powered baroque fountains cascade down gilded terraces to the Gulf of Finland in the Russian answer to Versailles.",
        iconName: "Waves",
      },
      {
        title: "Canal Boat Tour",
        description:
          "Float through the city's 300-plus bridges and canal network, passing colorful facades, hidden courtyards, and onion-domed churches from the water.",
        iconName: "MapPin",
      },
      {
        title: "Catherine Palace & Amber Room",
        description:
          "Visit the electric-blue rococo palace at Tsarskoye Selo and stand inside the legendary Amber Room, reconstructed after it was looted in World War II.",
        iconName: "Camera",
      },
    ],
    travelTips: [
      "The Hermitage requires an entire day minimum — buy timed-entry tickets online in advance to avoid the queue.",
      "White Nights run roughly from June 11 to July 2; the Scarlet Sails festival (late June) is spectacular but the city is fully booked — reserve accommodation 6 months ahead.",
      "Use the metro and canal boat taxis for transport — traffic in the centre is severe and taxis can be slow.",
      "The Catherine Palace at Tsarskoye Selo has long queues in summer; book a guided tour that includes skip-the-line entry.",
      "Dress for cold even in summer — evenings near the Neva can be windy and cool; a jacket is always useful.",
      "Many museums are closed on Mondays; plan your itinerary accordingly.",
      "Bring a physical copy of your hotel's address in Russian — not all taxi drivers read Latin script.",
    ],
    gallery: [
      "/images/city-6.jpg",
      "/images/tour-7.jpg",
      "/images/explor-2.jpg",
      "/images/city-5.jpg",
      "/images/tour-8.jpg",
    ],
  },

  "lake-baikal": {
    slug: "lake-baikal",
    name: "Lake Baikal",
    country: "Russia",
    region: "North Asia",
    tagline: "The deepest lake on Earth — crystal-clear Siberian waters and untouched wilderness",
    heroImage: "/images/dest-11.jpg",
    overview:
      "Lake Baikal is a superlative in every dimension. The world's deepest lake — plunging 1,642 metres into the Earth's crust — it is also the oldest, estimated at 25–30 million years old, and holds approximately 20% of the world's unfrozen freshwater. Its water is so clear and pure that you can see objects 40 metres below the surface; indigenous Buryat people have drunk directly from its shores for centuries. In winter, the lake freezes into one of the planet's most dramatic natural spectacles — a vast plain of cracked, bubbling blue ice stretching to the horizon, so thick that trucks drive across it.\n\nThe lake is a UNESCO World Heritage Site and a living laboratory of evolution. Over 80% of its animal species exist nowhere else on Earth, including the Baikal seal — the world's only exclusively freshwater seal — and the golomyanka, a transparent fish that dissolves in sunlight. The surrounding forests of the Eastern Sayan mountains and the Barguzin Range shelter bears, wolves, and Siberian roe deer, while the lake's shores host some of Russia's most pristine taiga wilderness.\n\nOlkhon Island, reached by hovercraft in winter and ferry in summer, is the spiritual heart of Baikal for the Buryat people, who have worshipped its Shamanist spirits for millennia. Its rugged cliffs, turquoise bays, and the sacred Shamanka Rock at Khuzhir Village make it the most rewarding destination on the lake. The Great Baikal Trail, one of Russia's finest hiking routes, traces the western shoreline through birch and cedar forests, connecting fishing villages and hidden hot springs.",
    quickFacts: {
      capital: "Irkutsk (gateway city, 65 km west of Baikal)",
      currency: "Russian Ruble (₽ / RUB)",
      climate: "Continental Siberian — very cold winters (–20 °C), warm dry summers (up to 25 °C)",
      bestSeason: "January–March (ice season) & July–August (warmest, greenest, best hiking)",
      languages: "Russian, Buryat",
      timeZone: "IRKT (UTC+8)",
      drivingSide: "Right",
    },
    itinerary: [
      {
        day: 1,
        title: "Irkutsk Arrival & Old Town Walk",
        location: "Irkutsk, Siberia",
        description:
          "Fly into Irkutsk, gateway to Baikal, and explore the city's surprising collection of wooden merchant mansions — intricately carved facades in a Siberian vernacular style unlike anywhere else in Russia. Visit the 18th-century Epiphany Cathedral by the Angara River and dine on smoked omul fish from Baikal at one of the old town's riverside restaurants.",
        highlights: [
          "Walk Irkutsk's 130 Quarter, a preserved block of restored wooden merchant houses",
          "See the carved wooden facades of the Trubetskoy Decembrist House museum",
          "Dine on smoked Baikal omul fish — unique to the lake and unlike any other salmon",
          "Stroll the Angara River embankment in the golden Siberian afternoon light",
        ],
        image: "/images/city-5.jpg",
      },
      {
        day: 2,
        title: "Olkhon Island & Shamanka Rock",
        location: "Olkhon Island, Lake Baikal",
        description:
          "Transfer to Olkhon Island by minibus and ferry (summer) or hovercraft (winter). Arrive at Khuzhir Village and walk to Shamanka Rock — a two-headed promontory jutting into the lake, sacred to Buryat shamans for thousands of years. The view from its summit — looking back over the vast lake and the forested cliffs of the island — is one of the most iconic in Siberia.",
        highlights: [
          "Cross to Olkhon Island on a hovercraft over frozen Baikal (winter) or by ferry (summer)",
          "Climb Shamanka Rock to look out over the world's largest freshwater lake",
          "Watch the Milky Way from the island's zero-light-pollution shores at night",
          "Meet the island's Buryat residents and learn about their shamanist spiritual traditions",
        ],
        image: "/images/dest-11.jpg",
      },
      {
        day: 3,
        title: "Great Baikal Trail & Cape Khoboy",
        location: "Northern Olkhon Island",
        description:
          "Hike the northern section of the Great Baikal Trail to Cape Khoboy, the northernmost tip of Olkhon Island, where cliffs plunge into the deepest part of the lake. In summer, the trail passes through meadows of Siberian wildflowers; in winter, walk across the frozen lake surface itself, listening to the deep resonant booms of shifting ice beneath your feet.",
        highlights: [
          "Hike to Cape Khoboy across Siberian taiga above cliffs dropping into Baikal",
          "Walk on the frozen lake surface in winter, hearing the ice shift and sing below",
          "Spot Baikal seals sunning on ice floes (winter) or swimming from shore (summer)",
          "Photograph the white-and-turquoise ice bubbles trapped beneath the frozen surface",
        ],
        image: "/images/tour-1.jpg",
      },
      {
        day: 4,
        title: "Hot Springs & Buryat Culture",
        location: "Baikal Eastern Shore",
        description:
          "Cross to Baikal's eastern shore to visit Khakusy Bay's natural hot springs emerging directly from the lakeshore — a surreal experience of soaking in hot mineral water while watching the frozen or sunlit lake metres away. Visit a Buryat village for a cultural lunch of bozi (steamed meat dumplings) and fermented mare's milk.",
        highlights: [
          "Soak in natural geothermal hot springs on the shore of the world's deepest lake",
          "Eat bozi Buryat dumplings stuffed with beef and onion, prepared over an open fire",
          "Learn to identify taiga tree species with a local guide — pine, Siberian cedar, larch",
          "Visit a shaman's sacred ritual site and hear about Buryat animist traditions",
        ],
        image: "/images/tour-2.jpg",
      },
      {
        day: 5,
        title: "Listvianka Village & Departure",
        location: "Listvianka, Baikal Shoreline",
        description:
          "Spend the final morning at Listvianka — the closest Baikal village to Irkutsk — where a vibrant fish market sells smoked omul, dried Baikal grayling, and pickled garlic. Visit the Baikal Museum to meet live Baikal seals in their aquarium and view underwater footage of the lake's depths. Return to Irkutsk for your onward flight.",
        highlights: [
          "Shop the Listvianka fish market for smoked omul, grayling, and Siberian honey",
          "Meet live Baikal nerpa seals at the Baikal Limnological Museum aquarium",
          "Watch underwater footage of Baikal's deep-lake ecosystem at the museum",
          "Take a final photograph of the lake from the Listvianka waterfront as the sun sets",
        ],
        image: "/images/about-2.jpg",
      },
    ],
    thingsToDo: [
      {
        title: "Ice Walking in Winter",
        description:
          "Walk across the frozen surface of the world's deepest lake, stepping over cracked turquoise ice and listening to the lake boom beneath your feet.",
        iconName: "Mountain",
      },
      {
        title: "Olkhon Island Trekking",
        description:
          "Hike the Great Baikal Trail along Olkhon's dramatic cliff-top coastline to Cape Khoboy, with panoramic views over the lake's endless blue expanse.",
        iconName: "MapPin",
      },
      {
        title: "Baikal Seal Spotting",
        description:
          "Spot the world's only exclusively freshwater seal — the nerpa — sunning on ice floes in winter or swimming near rocky shores in summer.",
        iconName: "Heart",
      },
      {
        title: "Hot Spring Soaking",
        description:
          "Soak in natural geothermal springs on the lakeshore, watching steam rise over ice-blue water in one of Siberia's most surreal natural experiences.",
        iconName: "Waves",
      },
      {
        title: "Buryat Cultural Immersion",
        description:
          "Eat bozi dumplings in a Buryat village, learn shamanist traditions, and hear ancient stories of the lake spirits from local elders.",
        iconName: "Globe",
      },
      {
        title: "Stargazing",
        description:
          "Olkhon Island has some of Russia's darkest skies — on clear nights the Milky Way is visible as a solid band of light reflected in Baikal's still water.",
        iconName: "Lightbulb",
      },
    ],
    travelTips: [
      "Irkutsk is the gateway — fly from Moscow (5 hours) or take the Trans-Siberian Railway for a legendary 4-day train journey.",
      "Winter (January–March) is the most dramatic season — frozen blue ice, ice sculptures, and seals on floes — but temperatures drop to –20 °C or below; dress in layers.",
      "Book Olkhon Island accommodation well in advance for July–August; the island has limited guesthouses.",
      "The Baikal omul fish is unique to the lake — smoked omul from Listvianka market is a must-try experience and an excellent gift.",
      "Hire a local guide on Olkhon Island — many trails are unmarked and local knowledge of weather, ice conditions, and sacred Buryat sites is invaluable.",
      "Water straight from Lake Baikal is safe to drink (one of the purest water sources on Earth) — a remarkable experience.",
      "Be aware that some areas near Baikal have restricted access or require permits; check with your guide before exploring off-trail areas.",
    ],
    gallery: [
      "/images/dest-11.jpg",
      "/images/tour-1.jpg",
      "/images/tour-2.jpg",
      "/images/city-5.jpg",
      "/images/about-2.jpg",
    ],
  },

  marrakech: {
    slug: "marrakech",
    name: "Marrakech",
    country: "Morocco",
    region: "Africa",
    tagline: "The Red City — where Sufi mysticism, vibrant souqs, and Saharan winds converge",
    heroImage: "/images/dest-19.jpg",
    overview:
      "Marrakech assaults the senses and then seduces them. The ancient medina, encircled by 19 kilometres of rose-red ramparts, is one of the world's most intoxicating urban labyrinths: a tangle of alleys where donkeys brush past tourists, the air is thick with cumin, cedar, and tanned leather, and artisans hammer copper, weave silk, and chisel zellige mosaics exactly as their ancestors did centuries ago. At the centre of it all pulses Jemaa el-Fnaa, the medina's vast central square, a UNESCO-recognised 'Masterpiece of Oral and Intangible Heritage' where storytellers, musicians, snake charmers, and food vendors create a nightly carnival that has run uninterrupted for a thousand years.\n\nBeyond the mayhem, Marrakech reveals moments of profound calm: the Jardin Majorelle, a cobalt-blue botanical garden lovingly restored by Yves Saint Laurent; the Saadian Tombs, sealed for centuries and rediscovered in 1917 with their cedar ceilings and Italian marble intact; the Ben Youssef Madrasa, whose courtyard of carved stucco and zellige tilework is among the finest in the Islamic world. The Bahia Palace, with 150 rooms arranged around orange-tree courtyards and painted cedar ceilings, captures the opulence of 19th-century Moroccan power.\n\nMarrakech is also a gateway: the snow-capped Atlas Mountains rise just an hour's drive south, offering trekking to Berber villages and the summit of Jebel Toubkal, North Africa's highest peak. The Agafay Desert, 30 minutes from the medina, provides a Saharan landscape of stone and sand without the 10-hour drive. In Marrakech, the medieval and the modern exist not in tension but in conversation, making it one of the most creatively alive cities on the planet.",
    quickFacts: {
      capital: "Rabat",
      currency: "Moroccan Dirham (MAD)",
      climate: "Semi-arid with hot, dry summers and mild, occasionally rainy winters",
      bestSeason: "March–May & September–November (comfortable temperatures for exploration)",
      languages: "Darija (Moroccan Arabic), French, Tamazight, some English",
      timeZone: "WET (UTC+0) / WEST (UTC+1 in summer)",
      drivingSide: "Right",
    },
    itinerary: [
      {
        day: 1,
        title: "Medina, Ben Youssef & Jemaa el-Fnaa",
        location: "Marrakech Medina",
        description:
          "Plunge into the medina to explore the Ben Youssef Madrasa, whose courtyard of carved stucco, cedar, and zellige tilework is a masterpiece of Islamic art. Wander the dyers' souk, the copper-workers' alley, and the tanners' quarter before ending at Jemaa el-Fnaa as the sun sets and the night market ignites with smoke, music, and story.",
        highlights: [
          "Admire the carved stucco and zellige courtyard of Ben Youssef Madrasa",
          "Watch leather being dyed in the ancient Chouara Tannery vats",
          "Navigate the copper, spice, and textile souqs of the medina",
          "Experience Jemaa el-Fnaa at night with its musicians, storytellers, and food stalls",
        ],
        image: "/images/dest-19.jpg",
      },
      {
        day: 2,
        title: "Bahia Palace, Saadian Tombs & Jardin Majorelle",
        location: "Marrakech",
        description:
          "Tour the Bahia Palace's 150 painted-cedar rooms and orange-tree courtyards, then visit the Saadian Tombs, hidden for centuries behind a sealed wall. In the afternoon, find peace in the cobalt-blue Jardin Majorelle, Yves Saint Laurent's botanical sanctuary now housing a Berber Museum and a fashion archive.",
        highlights: [
          "Walk through the Bahia Palace's painted cedar ceilings and tiled courtyards",
          "Discover the Saadian Tombs, sealed in 1603 and rediscovered in 1917",
          "Stroll the cobalt-blue pathways of Jardin Majorelle amid cacti and palms",
          "Visit the Musée Yves Saint Laurent next door for haute couture retrospectives",
        ],
        image: "/images/tour-14.jpg",
      },
      {
        day: 3,
        title: "Atlas Mountains & Berber Villages",
        location: "Ourika Valley & Imlil",
        description:
          "Drive into the High Atlas through the Ourika Valley, stopping at Berber villages clinging to the mountainside and at a Saffron farm. Continue to Imlil, the base camp for Jebel Toubkal, for a guided hike through walnut groves and terraced fields, followed by a traditional Berber tagine lunch in a village home.",
        highlights: [
          "Drive through the Ourika Valley with the snow-capped Atlas above",
          "Visit a Berber village and learn how saffron is harvested by hand",
          "Hike from Imlil through walnut groves and terraced fields",
          "Feast on slow-cooked lamb tagine in a Berber mountain home",
        ],
        image: "/images/breadcrumb-5.jpg",
      },
      {
        day: 4,
        title: "Agafay Desert & Hammam Ritual",
        location: "Agafay Desert & Marrakech",
        description:
          "Head to the stone desert of Agafay for camel riding, quad biking, and a Saharan-style lunch in a luxury camp with views of the Atlas. Return to the city for a traditional hammam — a Moroccan steam bath with black soap scrub, ghassoul clay mask, and argan oil massage — the perfect end to a dusty desert day.",
        highlights: [
          "Ride camels across the stone desert of Agafay with Atlas Mountain views",
          "Lunch in a luxury desert camp with Berber music and mint tea",
          "Experience a traditional hammam with black soap and ghassoul clay",
          "Relax with an argan oil massage in a lantern-lit spa",
        ],
        image: "/images/dest-20.jpg",
      },
      {
        day: 5,
        title: "Souq Shopping & Rooftop Farewell",
        location: "Marrakech Medina & Guéliz",
        description:
          "Spend the morning shopping the souqs with a local guide who reveals the artisans behind the goods: zellige tile workshops, brass-lamp makers, and leather-goods cooperatives. Cross to the modern Guéliz district for contemporary galleries and a farewell dinner on a rooftop terrace overlooking the Koutoubia Mosque minaret.",
        highlights: [
          "Visit artisan workshops hidden behind the souq stalls",
          "Commission a custom leather bag or pair of babouche slippers",
          "Explore Guéliz's contemporary art galleries and concept stores",
          "Toast farewell with a rooftop dinner overlooking the Koutoubia Mosque at night",
        ],
        image: "/images/city-2.jpg",
      },
    ],
    thingsToDo: [
      {
        title: "Jemaa el-Fnaa by Night",
        description:
          "Immerse yourself in the nightly carnival of storytellers, musicians, henna artists, and sizzling food stalls in Africa's most vibrant square.",
        iconName: "Globe",
      },
      {
        title: "Souq Shopping & Artisan Workshops",
        description:
          "Bargain for lanterns, leather, textiles, and spices in the medina's labyrinthine souqs, and watch craftsmen at work in hidden ateliers.",
        iconName: "MapPin",
      },
      {
        title: "Moroccan Cuisine & Cooking Class",
        description:
          "Learn to prepare tagine, couscous, and pastilla in a riad cooking class, then eat your creations on a lantern-lit terrace.",
        iconName: "Utensils",
      },
      {
        title: "Atlas Mountain Trekking",
        description:
          "Hike through Berber villages, walnut groves, and terraced fields in the High Atlas, with the option to summit Jebel Toubkal.",
        iconName: "Mountain",
      },
      {
        title: "Traditional Hammam Experience",
        description:
          "Surrender to a Moroccan steam bath ritual of black soap, eucalyptus steam, and ghassoul clay, finishing with argan oil.",
        iconName: "Heart",
      },
      {
        title: "Jardin Majorelle & Yves Saint Laurent",
        description:
          "Wander the cobalt-blue garden paths of Majorelle and the adjacent Musée YSL, where Moroccan colour inspired haute couture.",
        iconName: "Camera",
      },
    ],
    travelTips: [
      "Agree on a price before any purchase, ride, or service — haggling is expected and part of the culture.",
      "Navigate the medina using landmarks (mosques, fondouks) rather than GPS — alleys are narrow and often unnamed.",
      "Stay in a riad (traditional courtyard house) for the most authentic experience — many are beautifully restored.",
      "Carry small denominations of Moroccan Dirham — many vendors and taxi drivers don't carry change for large bills.",
      "Tap water is not safe to drink; bottled water is cheap and available everywhere.",
      "Dress modestly in the medina — women should cover shoulders and knees to avoid unwanted attention.",
      "Friday is the main prayer day; many shops in the medina close for several hours around midday.",
    ],
    gallery: [
      "/images/dest-19.jpg",
      "/images/tour-14.jpg",
      "/images/breadcrumb-5.jpg",
      "/images/dest-20.jpg",
      "/images/city-2.jpg",
    ],
  },

  fes: {
    slug: "fes",
    name: "Fes",
    country: "Morocco",
    region: "Africa",
    tagline: "The world's oldest university city — medieval medina, master artisans, and timeless craft traditions",
    heroImage: "/images/tour-12.jpg",
    overview:
      "Fes el-Bali is the world's largest car-free urban zone and, arguably, the planet's most intact medieval city — a 1,200-year-old living labyrinth of 9,400 alleys where donkeys are still the primary freight transport and the call to prayer from 360 mosques ripples across rooftops in overlapping waves. Founded in 808 CE by Idris II, Fes grew around the Quaraouiyine Mosque and its affiliated university — recognized by UNESCO as the world's oldest continuously operating university, established in 859 CE by a woman, Fatima al-Fihri.\n\nThe tanneries of Fes el-Bali are the city's most iconic sight: ancient stone vats filled with pigeon dung, pomegranate, saffron, henna, and poppy, where craftsmen dye leather using techniques unchanged since the 11th century. Viewed from the terraces of the surrounding leather shops, the geometric pattern of vats in primary colors is one of the most arresting images in travel photography. In the brass-worker souk, hammers beat out intricate geometric patterns on copper platters by ear; in the carpet souk, Berber weavers produce kilims with a tribal vocabulary encoded in each diamond and chevron.\n\nBeyond the medina walls, the ruins of Merenid tombs on the hill above the city provide the finest overview of Fes at sunset, when the minarets catch the last light and the city's 10,000 artisans are winding down for the evening. Fes is not a destination that surrenders its secrets quickly — but for travelers willing to get lost, it rewards with the rare sensation of stepping through time.",
    quickFacts: {
      currency: "Moroccan Dirham (MAD)",
      climate: "Mediterranean semi-arid; hot summers (up to 40°C), mild winters",
      bestSeason: "March–May and September–November for pleasant temperatures",
      languages: "Darija (Moroccan Arabic), Tamazight, French, some Spanish",
      timeZone: "WET (UTC+1, with WEST UTC+2 in summer)",
      drivingSide: "Right",
    },
    itinerary: [
      {
        day: 1,
        title: "Fes el-Bali — the Ancient Medina",
        location: "Fes el-Bali (Old Fes)",
        description:
          "Enter through Bab Bou Jeloud, the ornate blue-tiled gate to the old medina, and plunge into the warren of alleys. Navigate to the Bou Inania Madrasa, a masterpiece of Marinid architecture covered in zellij tile, carved stucco, and cedarwood — then wind through the brass-workers, spice sellers, and herb markets to the tanneries.",
        highlights: [
          "Enter Fes el-Bali through the stunning blue-tiled Bab Bou Jeloud gate",
          "Explore Bou Inania Madrasa's intricate zellij tilework and carved stucco",
          "Watch leather dyers working the medieval tanneries from a rooftop terrace",
          "Navigate the brass and copper souk where artisans work by candlelight",
        ],
        image: "/images/tour-12.jpg",
      },
      {
        day: 2,
        title: "Al-Quaraouiyine Mosque & University",
        location: "Fes el-Bali",
        description:
          "Visit the exterior of the Al-Quaraouiyine complex — the world's oldest continuously operating university, founded 859 CE. Explore the Nejjarine Museum of Wooden Arts and Crafts in a restored 18th-century caravanserai, and spend the afternoon in the carpet souk learning to read Berber tribal symbols in kilim patterns.",
        highlights: [
          "Stand at the entrance of Al-Quaraouiyine Mosque and University (founded 859 CE)",
          "Visit the Nejjarine Museum in a beautifully restored fondouk caravanserai",
          "Join a carpet merchant for mint tea and a lesson in Berber weaving symbols",
          "Photograph the 14th-century Attarine Madrasa's honeycomb muqarnas ceiling",
        ],
        image: "/images/breadcrumb-5.jpg",
      },
      {
        day: 3,
        title: "Fes el-Jdid & Jewish Quarter",
        location: "Fes el-Jdid",
        description:
          "Explore Fes el-Jdid (New Fes), built in the 13th century as the royal quarter, including the vast Dar al-Makhzen Royal Palace with its ornate brass-studded gates. Walk through the Mellah (Jewish Quarter), one of Morocco's oldest, with its distinctive overhanging balconied houses and the Ibn Danan Synagogue.",
        highlights: [
          "Photograph the seven ornate gates of the Dar al-Makhzen Royal Palace",
          "Explore the historic Mellah Jewish Quarter and its ornate balconied streets",
          "Visit the Ibn Danan Synagogue — one of Morocco's finest 17th-century synagogues",
          "Try bastilla (pigeon and almond pastilla) at a Fes el-Jdid traditional restaurant",
        ],
        image: "/images/dest-20.jpg",
      },
      {
        day: 4,
        title: "Merenid Tombs Sunset & Cooking Class",
        location: "Above Fes el-Bali",
        description:
          "Hike up to the 14th-century Merenid Tombs for the finest panoramic view over the medina's sea of minarets and green-tiled rooftops. Return to the medina for an afternoon Moroccan cooking class — learning to prepare harira, tagine, and msemen flatbread in a riad's kitchen.",
        highlights: [
          "Watch sunset over Fes's 10,000 rooftops from the Merenid Tombs hilltop",
          "Photograph the medina's green-tiled mosque rooftops and minarets at golden hour",
          "Join a traditional Moroccan cooking class in an old medina riad",
          "Learn to grind spices and fold msemen flatbread with a local chef",
        ],
        image: "/images/city-2.jpg",
      },
      {
        day: 5,
        title: "Volubilis Roman Ruins Day Trip",
        location: "Volubilis & Moulay Idriss",
        description:
          "Drive 60 km to Volubilis — one of the best-preserved Roman outposts in North Africa — where 3rd-century mosaic floors still gleam in the Moroccan sun. Continue to the white hillside town of Moulay Idriss, the most sacred city in Morocco, built around the tomb of the country's founder.",
        highlights: [
          "Walk through Volubilis's Triumphal Arch and mosaic floors (UNESCO World Heritage Site)",
          "See intricate 3rd-century Roman hunting and mythology mosaics in situ",
          "Visit the white hilltop sanctuary town of Moulay Idriss Zerhoun",
          "Return to Fes for a final dinner of mechoui (roasted lamb) in the medina",
        ],
        image: "/images/tour-14.jpg",
      },
    ],
    thingsToDo: [
      {
        title: "Tannery Rooftop Viewing",
        description:
          "Watch the ancient leather dyeing process from a rooftop terrace above the Chouara Tanneries — one of travel photography's most iconic scenes.",
        iconName: "Camera",
      },
      {
        title: "Al-Quaraouiyine Visit",
        description:
          "Stand before the world's oldest continuously operating university, founded in 859 CE by a Moroccan woman — a living monument to Islamic scholarship.",
        iconName: "Landmark",
      },
      {
        title: "Berber Carpet Weaving",
        description:
          "Sit with a Berber weaver in the carpet souk and learn the tribal language encoded in kilim diamond patterns over mint tea.",
        iconName: "GraduationCap",
      },
      {
        title: "Moroccan Cooking Class",
        description:
          "Master harira soup, chicken tagine with preserved lemon, and msemen flatbread in a medina riad's traditional kitchen.",
        iconName: "Utensils",
      },
      {
        title: "Merenid Tombs Sunset",
        description:
          "Climb to the 14th-century Merenid Tombs at sunset for a panoramic view over the medina's minarets and green-tiled rooftops.",
        iconName: "Mountain",
      },
      {
        title: "Volubilis Roman Ruins",
        description:
          "Visit UNESCO-listed Volubilis — North Africa's finest Roman ruins — where 3rd-century mosaic floors survive beneath the Moroccan sky.",
        iconName: "MapPin",
      },
    ],
    travelTips: [
      "Hire a licensed guide for your first day in Fes el-Bali — the 9,400 alleys are designed to disorient, and unofficial 'guides' will lead you to commission shops.",
      "Carry a small bundle of fresh mint leaves — hold them to your nose near the tanneries, where the smell of natural dyeing agents is pungent.",
      "Bargaining is expected in every souk; the starting price is typically 3–5 times the fair value, so negotiate calmly and walk away if needed.",
      "Download offline maps (Maps.me or Google Maps offline) before entering the medina — GPS signals are unreliable inside the dense alleys.",
      "Dress modestly — long trousers and covered shoulders for both men and women — as Fes is more conservative than Marrakech.",
      "Book a riad inside the medina for the full immersive experience; they are often dramatically underpriced compared to modern hotels.",
      "The best light for photography is early morning (7–9 a.m.) when alleys are quiet and golden light filters through the rooftop gaps.",
    ],
    gallery: [
      "/images/tour-12.jpg",
      "/images/breadcrumb-5.jpg",
      "/images/dest-20.jpg",
      "/images/city-2.jpg",
      "/images/tour-14.jpg",
    ],
  },

  "cape-town": {
    slug: "cape-town",
    name: "Cape Town",
    country: "South Africa",
    region: "Africa",
    tagline: "Table Mountain, Cape Winelands, and stunning coastal drives at Africa's southern tip",
    heroImage: "/images/dest-21.jpg",
    overview:
      "Cape Town is where Africa achieves its most dramatic and seductive expression — a city of 4 million pinned between the flat-topped improbability of Table Mountain and the collision of two oceans, where penguin colonies share beach real estate with sunbathers and great white sharks patrol waters within sight of luxury beach hotels. Nicknamed the 'Mother City,' Cape Town is South Africa's oldest European settlement, founded in 1652 as a refreshment station for Dutch East India Company ships rounding the Cape of Good Hope, and its layered history of colonial settlement, apartheid, and remarkable democratic transition is readable in every neighborhood.\n\nTable Mountain — a UNESCO World Heritage Site and one of the New Seven Wonders of Nature finalists — dominates the skyline from every direction, its famous 'tablecloth' cloud pouring over the edges on summer afternoons. The cable car whisks visitors to the flat summit in seven minutes, where fynbos-covered rock platforms offer 360-degree views extending to Robben Island where Nelson Mandela was imprisoned for 18 years. The island is now a museum, and former political prisoners serve as guides.\n\nBeyond the mountain, the Cape Peninsula drive to the Cape of Good Hope is one of the world's great road trips: penguins at Boulders Beach, baboons on the clifftop road, enormous surf at Noordhoek, and the convergence of the Indian and Atlantic Oceans at Cape Point. The Winelands town of Stellenbosch — an hour's drive east — produces Pinotage, Chenin Blanc, and Sauvignon Blanc among oak-lined streets of Dutch colonial architecture. Cape Town is a city that defies single definition and rewards every angle of exploration.",
    quickFacts: {
      currency: "South African Rand (ZAR)",
      climate: "Mediterranean; warm dry summers (Dec–Feb, 25°C), cool wet winters (Jun–Aug)",
      bestSeason: "November–March for beaches and outdoor activities; May–September for whale watching",
      languages: "Afrikaans, Xhosa, English (all widely spoken)",
      timeZone: "SAST (UTC+2)",
      drivingSide: "Left",
    },
    itinerary: [
      {
        day: 1,
        title: "Table Mountain & Waterfront",
        location: "Table Mountain & V&A Waterfront",
        description:
          "Take the rotating aerial cableway to Table Mountain's flat summit for views of the city, peninsula, and both oceans. Explore the fynbos-covered plateau on marked trails before descending for an afternoon at the V&A Waterfront — Cape Town's restored Victorian harbor with restaurants, craft markets, and the Two Oceans Aquarium.",
        highlights: [
          "Ride the rotating cable car to Table Mountain's 1,086-metre flat summit",
          "Walk the Dassie Trail on the summit for panoramic views over Cape Town and Robben Island",
          "Browse the V&A Waterfront craft market for African artisan goods",
          "Dine at a waterfront restaurant with views of the working harbor and Signal Hill",
        ],
        image: "/images/dest-21.jpg",
      },
      {
        day: 2,
        title: "Cape Peninsula & Penguins",
        location: "Cape Peninsula Drive",
        description:
          "Drive the Cape Peninsula's Atlantic coast from Sea Point through Camps Bay and Hout Bay, stopping at the Boulders Beach African Penguin Colony where 3,000 jackass penguins nest between granite boulders. Continue to Cape Point's lighthouse for views over both oceans, and return via the False Bay coast past whale-watching spots.",
        highlights: [
          "Walk among African penguins on the boardwalk at Boulders Beach",
          "Stand at Cape Point Lighthouse where the Atlantic and Indian oceans visually merge",
          "Photograph the surfers at Noordhoek's endless white-sand beach",
          "Spot southern right whales from the cliffs above False Bay (July–November)",
        ],
        image: "/images/about-1.jpg",
      },
      {
        day: 3,
        title: "Robben Island & Bo-Kaap",
        location: "Robben Island & Bo-Kaap",
        description:
          "Take the ferry to Robben Island where Nelson Mandela spent 18 years — a former political prisoner will guide you through the Maximum Security Prison and Mandela's lime-quarry cell. Return to the city for the Bo-Kaap neighborhood, where brightly painted Cape Malay houses line cobblestone streets and the Noon Gun has fired daily since 1806.",
        highlights: [
          "Tour Robben Island Maximum Security Prison with a former political prisoner guide",
          "See Nelson Mandela's cell and lime quarry in the cold Atlantic island air",
          "Walk the vibrant painted streets of Bo-Kaap and eat Cape Malay curry",
          "Visit the Bo-Kaap Museum for the story of Cape Town's Islamic community",
        ],
        image: "/images/about-2.jpg",
      },
      {
        day: 4,
        title: "Stellenbosch Winelands",
        location: "Stellenbosch & Franschhoek",
        description:
          "Drive east through the Winelands to Stellenbosch — South Africa's second-oldest European settlement — where Dutch colonial homesteads shelter among rolling vineyards producing Pinotage and Chenin Blanc. Tasting sessions at two or three estates, lunch on a wine farm terrace, and a walk through Stellenbosch's oak-lined streets complete the day.",
        highlights: [
          "Wine taste at two Cape Winelands estates for Pinotage and Sauvignon Blanc",
          "Walk the oak-canopied streets of Stellenbosch's historic town center",
          "Lunch on a wine estate terrace with vineyard and mountain views",
          "Drive through Franschhoek Pass for dramatic Cape mountain valley scenery",
        ],
        image: "/images/about-3.jpg",
      },
      {
        day: 5,
        title: "Kalk Bay, Constantia & Final Sunset",
        location: "Southern Suburbs & Kalk Bay",
        description:
          "Browse the antique shops and galleries of Kalk Bay fishing village along the False Bay shore, then visit the Groot Constantia wine estate — South Africa's oldest wine farm, established in 1685. End the trip on Signal Hill or Lion's Head at sunset for a 360-degree farewell panorama of the city, mountain, and Atlantic Ocean.",
        highlights: [
          "Browse Kalk Bay's eclectic antique shops and fish-and-chip stands by the harbor",
          "Visit Groot Constantia — South Africa's oldest wine farm and historic Cape Dutch manor",
          "Hike Lion's Head at sunset for a 360-degree panorama above the city",
          "Watch the sun sink into the Atlantic Ocean from Signal Hill",
        ],
        image: "/images/about-4.jpg",
      },
    ],
    thingsToDo: [
      {
        title: "Table Mountain Cable Car",
        description:
          "Ride the rotating aerial cableway to Table Mountain's UNESCO-listed flat summit for 360-degree views over Cape Town and both oceans.",
        iconName: "Mountain",
      },
      {
        title: "Boulders Beach Penguins",
        description:
          "Walk among 3,000 African penguins at Boulders Beach — one of very few places in the world where you can get this close to wild penguins.",
        iconName: "Camera",
      },
      {
        title: "Robben Island Tour",
        description:
          "Cross the Atlantic to Robben Island and tour Nelson Mandela's prison cell with a guide who lived the same history.",
        iconName: "Landmark",
      },
      {
        title: "Cape Winelands Tasting",
        description:
          "Explore the estates of Stellenbosch and Franschhoek for Pinotage, Chenin Blanc, and Cape Malay cuisine among mountain vineyards.",
        iconName: "Heart",
      },
      {
        title: "Cape Peninsula Drive",
        description:
          "Drive from Cape Town to Cape Point — where two oceans meet — passing dramatic coastline, baboons, and surf beaches.",
        iconName: "MapPin",
      },
      {
        title: "Whale Watching",
        description:
          "Between July and November, southern right whales bring their calves to False Bay's sheltered waters, visible from shore cliffs.",
        iconName: "Waves",
      },
    ],
    travelTips: [
      "Cape Town is safer in tourist areas than its reputation suggests, but avoid walking alone after dark in the CBD and take Uber or Bolt for transport.",
      "Book the Table Mountain cable car for early morning — clouds ('the tablecloth') roll in by early afternoon and can close the cable car for hours.",
      "Book Robben Island ferry tickets at least a week ahead online — daily capacity is limited and tours frequently sell out.",
      "The Boulders Beach penguin boardwalk requires an entrance fee; the free beach area gives a partial view but is worth the paid access.",
      "Rent a car for the Cape Peninsula drive — public transport doesn't reach most key stops on the route efficiently.",
      "Cape Town's best restaurant scene is in the City Bowl, De Waterkant, and Woodstock — book ahead for popular spots.",
      "Tipping is expected and important in South Africa — 10–15% at restaurants, R10–20 per bag for car guards and hotel porters.",
    ],
    gallery: [
      "/images/dest-21.jpg",
      "/images/about-1.jpg",
      "/images/about-2.jpg",
      "/images/about-3.jpg",
      "/images/about-4.jpg",
    ],
  },
};
