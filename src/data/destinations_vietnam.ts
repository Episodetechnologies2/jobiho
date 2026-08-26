import type { DestinationPageData } from "./destinations";

export const destinationsVietnam: Record<string, DestinationPageData> = {
  hanoi: {
    slug: "hanoi",
    name: "Hanoi",
    country: "Vietnam",
    region: "Southeast Asia",
    tagline: "A thousand years of history stirred into a bowl of pho",
    heroImage: "https://images.pexels.com/photos/1684188/pexels-photo-1684188.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    overview:
      "Hanoi is a city of layered time — a thousand-year-old capital where the 11th-century Temple of Literature sits blocks from French colonial boulevards, where grandmothers in conical hats squat beside bubbling pho pots at 5 AM on the same pavement where evening cocktail bars pour craft gin. The Old Quarter's 36 streets, each historically named for the trade it housed — Silk Street, Silver Street, Paper Street — remain a chaotic, intoxicating labyrinth of motorbikes, hanging lanterns, and vendors balancing shoulder poles laden with mangoes.\n\nHoan Kiem Lake is the city's spiritual center, anchored by the red-lacquered Huc Bridge leading to Ngoc Son Temple on its tiny island. Each morning, hundreds of Hanoians perform tai chi on its shores before the city's five million motorbikes roar to life. The Ho Chi Minh Mausoleum complex — where Uncle Ho lies in a crystal sarcophagus — is the political pilgrimage, while the Vietnam Museum of Ethnology provides the cultural one, with 54 ethnic groups' traditions meticulously preserved.\n\nHanoi's food scene is arguably Vietnam's finest: bun cha (grilled pork noodles) at the stall Obama and Bourdain visited, egg coffee (cà phê trứng) invented at Café Giang in 1946, and banh mi from a cart on Ly Quoc Su Street. The city rewards those who slow down, who sit on a tiny plastic stool, who accept that crossing the street is an act of faith, and who understand that in Hanoi, every meal is a masterpiece.",
    quickFacts: {
      capital: "Hanoi (national capital)",
      currency: "Vietnamese Dong (₫)",
      climate: "Humid subtropical with cool, drizzly winters",
      bestSeason: "October–December (cool, crisp) & March–April (warm, clear)",
      languages: "Vietnamese, English (tourist areas)",
      timeZone: "ICT (UTC+7)",
      drivingSide: "Right",
    },
    itinerary: [
      {
        day: 1,
        title: "Old Quarter & Hoan Kiem Lake",
        location: "Old Quarter & Hoan Kiem, Hanoi",
        description:
          "Plunge into the Old Quarter's 36 streets on foot — dodge motorbikes on Hang Ma (Paper Street), buy silk on Hang Gai, and sip the world's first egg coffee at Café Giang, invented here in 1946 when fresh milk was scarce. Stroll around Hoan Kiem Lake at dusk, crossing the red Huc Bridge to Ngoc Son Temple as the city lights begin to twinkle.",
        highlights: [
          "Explore the 36 ancient guild streets of the Old Quarter",
          "Drink egg coffee (cà phê trứng) at the original Café Giang",
          "Cross the red Huc Bridge to Ngoc Son Temple on Hoan Kiem Lake",
          "Watch the weekend pedestrian night market on Hang Dao Street",
        ],
        image: "https://images.pexels.com/photos/1684188/pexels-photo-1684188.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      },
      {
        day: 2,
        title: "Ho Chi Minh Complex & Temple of Literature",
        location: "Ba Dinh & Dong Da, Hanoi",
        description:
          "Pay respects at the Ho Chi Minh Mausoleum, where Uncle Ho lies preserved in a dimly lit granite chamber. Walk through his simple stilt house and the Presidential Palace gardens, then visit the Temple of Literature — Vietnam's first university, founded in 1070, where stone stelae atop tortoise sculptures honor centuries of scholars.",
        highlights: [
          "Visit Ho Chi Minh's preserved body in the mausoleum",
          "Walk through Ho Chi Minh's humble stilt house and garden",
          "Explore the Temple of Literature's five courtyards",
          "Photograph the stone tortoise stelae honoring imperial scholars",
        ],
        image: "https://images.pexels.com/photos/2088205/pexels-photo-2088205.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      },
      {
        day: 3,
        title: "Bun Cha Trail & Water Puppet Theatre",
        location: "Various, Hanoi",
        description:
          "Start with bun cha at Huong Lien — the very stall where Anthony Bourdain and Barack Obama shared a meal (the 'Obama table' is preserved behind glass). Explore the Vietnam Museum of Ethnology in the afternoon, then watch a water puppet show at Thang Long Theatre — a uniquely Vietnamese art form dating to the 11th century.",
        highlights: [
          "Eat bun cha at the famous Obama-Bourdain stall on Le Van Huu",
          "Tour the Vietnam Museum of Ethnology and its outdoor houses",
          "Watch a water puppet show at Thang Long Theatre",
          "Try banh cuon (steamed rice rolls) from a street vendor",
        ],
        image: "https://images.pexels.com/photos/6333174/pexels-photo-6333174.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      },
      {
        day: 4,
        title: "French Quarter & Train Street",
        location: "Hoan Kiem & French Quarter, Hanoi",
        description:
          "Walk Hanoi's French Quarter — tree-lined boulevards, the Beaux-Arts Opera House, and the Metropole Hotel where Graham Greene wrote 'The Quiet American.' Visit the infamous Train Street, where café tables sit centimeters from active railway tracks and residents fold laundry between passing trains.",
        highlights: [
          "Admire the Hanoi Opera House's French Beaux-Arts façade",
          "Have a cocktail at the Metropole's Bamboo Bar",
          "Sit at a Train Street café as the locomotive passes inches away",
          "Browse contemporary Vietnamese art at Manzi Art Space",
        ],
        image: "https://images.pexels.com/photos/1691341/pexels-photo-1691341.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      },
    ],
    thingsToDo: [
      {
        title: "Street Food Safari",
        description:
          "Eat bun cha, pho bo, banh mi, egg coffee, and bun rieu from tiny stalls — Hanoi's pavements are the world's greatest restaurant.",
        iconName: "Utensils",
      },
      {
        title: "Old Quarter Walking Tour",
        description:
          "Navigate the 36 guild streets where silk, silver, paper, and traditional medicine vendors have traded for centuries.",
        iconName: "MapPin",
      },
      {
        title: "Water Puppet Theatre",
        description:
          "Watch an 11th-century art form at Thang Long Theatre — carved wooden puppets dance on water to live traditional music.",
        iconName: "Landmark",
      },
      {
        title: "Hoan Kiem Lake Morning Ritual",
        description:
          "Join locals for dawn tai chi and badminton around the lake, then watch calligraphers practice Vietnamese script on the promenade.",
        iconName: "Heart",
      },
      {
        title: "French Colonial Architecture",
        description:
          "Photograph the Opera House, Metropole Hotel, St. Joseph's Cathedral, and tree-lined boulevards that earned Hanoi its 'Paris of the East' nickname.",
        iconName: "Camera",
      },
    ],
    travelTips: [
      "Cross the street by walking slowly and steadily — motorbikes will flow around you. Stopping or running causes accidents.",
      "Winter (December–February) is cold and drizzly; pack a warm jacket and umbrella. Hanoi is not tropical-warm year-round.",
      "Avoid taxis without meters; use Grab or the Hanoi-specific taxi companies Mailinh (green) and Vinasun (white).",
      "Bring cash in small denominations — many street food stalls don't accept card, and VND 500,000 notes are hard to break.",
      "Train Street access is periodically restricted; check with locals or your hotel before visiting, as police may close it.",
      "Bargain at markets but not at street food stalls — prices are fixed and already incredibly cheap (₫30,000–50,000 per dish).",
    ],
    gallery: [
      "https://images.pexels.com/photos/1684188/pexels-photo-1684188.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "https://images.pexels.com/photos/2088205/pexels-photo-2088205.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "https://images.pexels.com/photos/6333174/pexels-photo-6333174.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "https://images.pexels.com/photos/1691341/pexels-photo-1691341.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    ],
  },

  "ho-chi-minh-city": {
    slug: "ho-chi-minh-city",
    name: "Ho Chi Minh City",
    country: "Vietnam",
    region: "Southeast Asia",
    tagline: "Living history where resilience meets relentless energy",
    heroImage: "https://images.pexels.com/photos/2088205/pexels-photo-2088205.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    overview:
      "Ho Chi Minh City — still affectionately called Saigon by most residents — is Vietnam's engine of commerce, creativity, and confrontation with the past. The War Remnants Museum, housed in the former US Information Agency building, presents the American War (as Vietnamese call it) through gut-wrenching photographs, decommissioned aircraft, and a recreated tiger cage prison cell. The Cu Chi Tunnels, 70 kilometers northwest, allow visitors to crawl through the same underground network that sheltered Viet Cong fighters beneath American bases.\n\nBut Saigon is far more than war memorials. District 1 buzzes with French colonial grandeur — the Notre-Dame Cathedral (under restoration), Central Post Office designed by Gustave Eiffel's firm, and the Reunification Palace where a North Vietnamese tank crashed through the gates on April 30, 1975, ending the war. The Ben Thanh Market is a whirlwind of lacquerware, ao dai fabrics, and bánh mì vendors, while the surrounding streets transform into a night market after dark.\n\nThe city's modern pulse beats in District 2's Thao Dien — a leafy expatriate enclave of craft coffee shops and farm-to-table restaurants — and in Bui Vien Street's backpacker strip, where neon signs, cheap beer, and live music collide nightly. The Mekong Delta, reachable in 90 minutes, unfurls a world of floating markets, coconut candy workshops, and sampan rides through nipa palm tunnels. Saigon doesn't just tell Vietnam's story — it is the story, told at full volume.",
    quickFacts: {
      currency: "Vietnamese Dong (₫)",
      climate: "Tropical with distinct wet (May–Nov) and dry (Dec–Apr) seasons",
      bestSeason: "December–April (dry, warm, comfortable humidity)",
      languages: "Vietnamese, English (tourist areas)",
      timeZone: "ICT (UTC+7)",
      drivingSide: "Right",
    },
    itinerary: [
      {
        day: 1,
        title: "War Remnants & Reunification Palace",
        location: "District 1, Ho Chi Minh City",
        description:
          "Begin at the War Remnants Museum, where three floors of photographs, weaponry, and personal accounts document the human cost of the American War. Walk to the Reunification Palace — preserved exactly as it was on April 30, 1975 — and descend into its underground war room with original telecommunications equipment.",
        highlights: [
          "Witness the War Remnants Museum's powerful photo exhibitions",
          "Explore the Reunification Palace's preserved war rooms",
          "See the actual tank that crashed through the palace gates in 1975",
          "Visit the rooftop helipad where the last helicopter evacuated",
        ],
        image: "https://images.pexels.com/photos/2088205/pexels-photo-2088205.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      },
      {
        day: 2,
        title: "Cu Chi Tunnels",
        location: "Cu Chi District, 70km northwest of HCMC",
        description:
          "Drive to the Cu Chi Tunnels — a 250-kilometer underground network of living quarters, hospitals, kitchens, and command centers used by Viet Cong guerrillas. Crawl through widened tunnel sections, inspect booby trap displays, and — if you choose — fire AK-47s and M16s at the onsite shooting range.",
        highlights: [
          "Crawl through sections of the original Cu Chi Tunnel network",
          "See ingenious booby traps and camouflaged tunnel entrances",
          "Learn how fighters lived underground for months at a time",
          "Optional: fire historical weapons at the tunnel shooting range",
        ],
        image: "https://images.pexels.com/photos/1009837/pexels-photo-1009837.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      },
      {
        day: 3,
        title: "Colonial Saigon & Ben Thanh Market",
        location: "District 1, Ho Chi Minh City",
        description:
          "Photograph the Notre-Dame Cathedral's twin bell towers, admire Gustave Eiffel's Central Post Office with its vaulted ceiling and hand-painted maps, then dive into Ben Thanh Market for silk ao dai, lacquerware, and bánh mì with pâté. As evening falls, the surrounding streets become a vibrant night market.",
        highlights: [
          "Photograph Notre-Dame Cathedral and Central Post Office",
          "Bargain for silk and lacquerware at Ben Thanh Market",
          "Eat the city's best bánh mì at Bánh Mì Huỳnh Hoa",
          "Explore the Ben Thanh Night Market for street food and souvenirs",
        ],
        image: "https://images.pexels.com/photos/7286748/pexels-photo-7286748.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      },
      {
        day: 4,
        title: "Mekong Delta Day Trip",
        location: "Cai Be & Vinh Long, Mekong Delta",
        description:
          "Drive south to the Mekong Delta and board a sampan through nipa palm canals to floating markets piled high with pineapples, dragon fruit, and watermelons. Visit a coconut candy workshop, taste local rice wine, and cycle through fruit orchards and bonsai villages on the river islands.",
        highlights: [
          "Cruise a sampan through nipa palm-lined Mekong canals",
          "Visit Cai Be floating market at dawn",
          "Watch coconut candy being hand-pulled at a family workshop",
          "Cycle through tropical fruit orchards on a Mekong island",
        ],
        image: "https://images.pexels.com/photos/3601422/pexels-photo-3601422.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      },
      {
        day: 5,
        title: "Cholon Chinatown & Rooftop Farewell",
        location: "District 5 & District 1, HCMC",
        description:
          "Explore Cholon, Saigon's sprawling Chinatown, where the incense-filled Thien Hau Temple honors the sea goddess Mazu and Binh Tay Market overflows with dried seafood, herbal medicine, and ceramics. Return to District 1 for a farewell cocktail at the Saigon Saigon rooftop bar, watching the city's neon skyline ignite.",
        highlights: [
          "Visit the incense-coil-draped Thien Hau Temple in Cholon",
          "Browse Binh Tay Market's wholesale stalls of herbs and spices",
          "Eat dim sum at a traditional Cholon restaurant",
          "Toast the trip at the Saigon Saigon rooftop bar at sunset",
        ],
        image: "https://images.pexels.com/photos/6020286/pexels-photo-6020286.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      },
    ],
    thingsToDo: [
      {
        title: "War History Immersion",
        description:
          "Visit the War Remnants Museum, Cu Chi Tunnels, and Reunification Palace to understand Vietnam's painful and resilient 20th-century history.",
        iconName: "BookOpen",
      },
      {
        title: "Street Food Marathon",
        description:
          "From bánh mì at Huỳnh Hoa to phở at Phở Hòa Pasteur and broken rice at Cơm Tấm Bụi Sài Gòn — Saigon feeds you nonstop.",
        iconName: "Utensils",
      },
      {
        title: "Mekong Delta Excursion",
        description:
          "Ride sampans through floating markets, taste coconut candy fresh from the vat, and cycle through dragon fruit orchards south of the city.",
        iconName: "Waves",
      },
      {
        title: "Cholon Chinatown Exploration",
        description:
          "Wander Saigon's vibrant Chinese district for dim sum, herbal medicine markets, and the incense-wreathed Thien Hau Temple.",
        iconName: "MapPin",
      },
      {
        title: "Rooftop Bar Scene",
        description:
          "Sip cocktails above the skyline at Chill Skybar, Air 360, or the historic Saigon Saigon bar atop the Caravelle Hotel.",
        iconName: "Lightbulb",
      },
      {
        title: "Motorbike City Tours",
        description:
          "Hop on the back of a vintage Vespa for a nighttime food tour or a dawn ride through District 4's hidden alleys with local guides.",
        iconName: "Car",
      },
    ],
    travelTips: [
      "Book Cu Chi Tunnels through a reputable operator — the Ben Dinh site is more touristic but better maintained; Ben Duoc is more authentic.",
      "Cross streets like a local: walk slowly and steadily, and motorbikes will weave around you — never stop or run.",
      "Use Grab for motorbike taxis (Grab Bike) — it's the cheapest, fastest way to beat Saigon's legendary traffic.",
      "Carry a photocopy of your passport — police occasionally check ID, and carrying the original risks loss in the crowds.",
      "District 1 accommodation is most convenient, but District 2 (Thao Dien) and District 7 (Phu My Hung) offer quieter, greener alternatives.",
      "Rainy season (May–November) brings brief, intense afternoon downpours — carry a light raincoat and they'll pass within an hour.",
      "Bargain at Ben Thanh Market — opening prices are typically 3–4x the final agreed price.",
    ],
    gallery: [
      "https://images.pexels.com/photos/2088205/pexels-photo-2088205.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "https://images.pexels.com/photos/1009837/pexels-photo-1009837.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "https://images.pexels.com/photos/7286748/pexels-photo-7286748.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "https://images.pexels.com/photos/3601422/pexels-photo-3601422.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "https://images.pexels.com/photos/6020286/pexels-photo-6020286.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    ],
  },

  "ha-long-bay": {
    slug: "ha-long-bay",
    name: "Ha Long Bay",
    country: "Vietnam",
    region: "Southeast Asia",
    tagline: "Where dragon legends carved a seascape of 1,600 limestone dreams",
    heroImage: "https://images.pexels.com/photos/3601422/pexels-photo-3601422.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    overview:
      "Ha Long Bay — 'Descending Dragon Bay' — is one of Earth's most surreal seascapes: nearly 1,600 limestone karsts and islands rising from emerald waters in Vietnam's northeastern Gulf of Tonkin. UNESCO inscribed it in 1994, and its mythology is equally grand — local legend says a family of dragons descended from heaven and spat out jewels that turned into the islands, forming a barrier against invaders. Today, the 'invaders' are travelers on luxury junk boats, and the jewels are real: hidden lagoons, floating fishing villages, and caves dripping with stalactites.\n\nThe bay's most iconic experience is an overnight cruise — gliding between karst towers as the sun sets, kayaking into hidden grottoes at dawn, and dining on squid and morning glory on the upper deck under a canopy of stars. Sung Sot (Surprise) Cave is the largest grotto, its chambers lit to reveal formations resembling elephants, turtles, and a mandarin's study. Ti Top Island offers a steep climb to a viewpoint where the entire bay spreads below like a watercolor painting.\n\nLess-visited Lan Ha Bay, just south, offers the same karst drama with a fraction of the boat traffic — its Cat Ba Island base adds jungle trekking, rock climbing, and visits to the endangered Cat Ba langur's habitat. Whether you come for the geology, the gastronomy, or the sheer dreamlike atmosphere of waking up surrounded by mist-shrouded stone pillars, Ha Long Bay imprints itself permanently on the memory.",
    quickFacts: {
      currency: "Vietnamese Dong (₫)",
      climate: "Subtropical with cool, misty winters and warm, humid summers",
      bestSeason: "October–December (cool, clear) & March–May (warm, calm seas)",
      languages: "Vietnamese, English (tourist boats)",
      timeZone: "ICT (UTC+7)",
      drivingSide: "Right",
    },
    itinerary: [
      {
        day: 1,
        title: "Hanoi to Ha Long & Overnight Cruise",
        location: "Ha Long Bay, Quang Ninh Province",
        description:
          "Depart Hanoi and board your junk boat at Tuan Chau Marina. Cruise past the iconic Fighting Cock Rocks and through karst-studded channels as lunch is served on deck. Afternoon kayaking into hidden lagoons, then evening squid fishing from the boat under a star-flooded sky.",
        highlights: [
          "Board a traditional wooden junk boat at Tuan Chau Marina",
          "Kayak into a hidden lagoon enclosed by sheer karst walls",
          "Try squid fishing under the stars from the boat deck",
          "Fall asleep anchored among mist-wreathed limestone towers",
        ],
        image: "https://images.pexels.com/photos/3601422/pexels-photo-3601422.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      },
      {
        day: 2,
        title: "Sung Sot Cave & Ti Top Island",
        location: "Central Ha Long Bay",
        description:
          "Wake for sunrise tai chi on the sundeck, then explore Sung Sot Cave — a cathedral-sized grotto where stalactites form shapes the guides will eagerly narrate. Afterward, climb the 427 steps of Ti Top Island for the bay's most famous panoramic view: an infinity of karsts vanishing into haze.",
        highlights: [
          "Practice sunrise tai chi on the junk boat's upper deck",
          "Walk through the immense Sung Sot (Surprise) Cave chambers",
          "Climb Ti Top Island for the bay's most iconic panoramic view",
          "Swim from Ti Top's crescent beach surrounded by karsts",
        ],
        image: "https://images.pexels.com/photos/6020286/pexels-photo-6020286.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      },
      {
        day: 3,
        title: "Lan Ha Bay & Cat Ba Island",
        location: "Lan Ha Bay & Cat Ba Island",
        description:
          "Cruise south into quieter Lan Ha Bay, where karst islets are densely jungled and floating fish farms bob in turquoise channels. Disembark at Cat Ba Island for a hike through the national park's primary rainforest, home to the critically endangered Cat Ba langur — fewer than 70 remain in the wild.",
        highlights: [
          "Cruise the uncrowded karst channels of Lan Ha Bay",
          "Hike through Cat Ba National Park's primary rainforest",
          "Learn about the critically endangered Cat Ba langur",
          "Kayak through Lan Ha's floating fishing villages",
        ],
        image: "https://images.pexels.com/photos/2407636/pexels-photo-2407636.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      },
      {
        day: 4,
        title: "Floating Village & Farewell Cruise",
        location: "Cua Van Floating Village, Ha Long Bay",
        description:
          "Row a bamboo sampan through Cua Van Floating Village — one of the bay's last inhabited fishing communities — where children paddle to school and homes float on oil-drum pontoons. Enjoy a farewell brunch on deck as the boat returns past the towering karsts to Tuan Chau Marina.",
        highlights: [
          "Row a bamboo sampan through Cua Van Floating Village",
          "Meet fishermen and learn traditional net-casting techniques",
          "Brunch on deck with panoramic karst views",
          "Photograph the bay's morning mist from the top deck",
        ],
        image: "https://images.pexels.com/photos/1009837/pexels-photo-1009837.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      },
    ],
    thingsToDo: [
      {
        title: "Overnight Junk Boat Cruises",
        description:
          "Sleep aboard a traditional wooden junk, waking to sunrise over limestone towers — the quintessential Ha Long Bay experience.",
        iconName: "Waves",
      },
      {
        title: "Cave Exploration",
        description:
          "Enter vast grottos like Sung Sot, Dau Go, and Thien Cung, where stalactites and stalagmites form otherworldly galleries.",
        iconName: "Mountain",
      },
      {
        title: "Kayaking Hidden Lagoons",
        description:
          "Paddle through sea-level arches into enclosed lagoons surrounded by vertical karst walls — silent, emerald, and magical.",
        iconName: "Globe",
      },
      {
        title: "Rock Climbing at Cat Ba",
        description:
          "Cat Ba's limestone cliffs offer world-class deep-water soloing — climbing overhanging routes above the sea and splashing down on failed attempts.",
        iconName: "Dumbbell",
      },
      {
        title: "Floating Village Visits",
        description:
          "Row a sampan through Cua Van and Vung Vieng, where entire communities live, fish, and raise families on the water.",
        iconName: "Camera",
      },
      {
        title: "Sunset Cooking Classes",
        description:
          "Learn to roll Vietnamese spring rolls and cook caramelized clay-pot fish on the junk boat's kitchen deck as the sun sets.",
        iconName: "Utensils",
      },
    ],
    travelTips: [
      "Book at least a 2-night cruise to reach Lan Ha Bay and the less-touristed areas; single-night cruises cover only the most crowded section.",
      "Avoid July–August typhoon season when cruises may be cancelled and visibility drops to near zero in heavy rain.",
      "Choose a boat operated by a reputable company (Heritage Line, Bhaya, Indochina Junk) — safety standards vary wildly.",
      "Bring layers — winter mornings (November–February) on the bay can drop to 10°C with chilling wind.",
      "Bargain firmly for kayak and cave excursion add-ons — some operators inflate 'optional activity' prices.",
      "Carry anti-nausea medication if you're prone to seasickness; the bay is usually calm, but winter swells can rock smaller boats.",
    ],
    gallery: [
      "https://images.pexels.com/photos/3601422/pexels-photo-3601422.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "https://images.pexels.com/photos/6020286/pexels-photo-6020286.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "https://images.pexels.com/photos/2407636/pexels-photo-2407636.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "https://images.pexels.com/photos/1009837/pexels-photo-1009837.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    ],
  },

  "da-nang": {
    slug: "da-nang",
    name: "Da Nang",
    country: "Vietnam",
    region: "Southeast Asia",
    tagline: "A modern coastal marvel framed by mountains, marble, and sandy shores",
    heroImage: "https://images.pexels.com/photos/2407636/pexels-photo-2407636.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    overview:
      "Da Nang is central Vietnam’s modern engine — a coastal metropolis that has transformed from a sleepy port into a bustling hub of bridges, skyscrapers, and pristine beaches. Fringed by the rugged Son Tra Peninsula and the sacred Marble Mountains, the city is sliced in half by the Han River, crossed by architectural showpieces like the fire-spitting Dragon Bridge. It serves as the gateway to three UNESCO World Heritage sites, but holds plenty of its own secrets: from the golden sands of My Khe Beach to the mist-shrouded peaks of Ba Na Hills where the Golden Bridge stands held by giant stone hands.",
    quickFacts: {
      capital: "Hanoi (national capital)",
      currency: "Vietnamese Dong (₫)",
      climate: "Tropical monsoon — warm and sunny, wet season September–December",
      bestSeason: "January–April (dry, moderate temperatures)",
      languages: "Vietnamese, English (widely spoken in tourist areas)",
      timeZone: "ICT (UTC+7)",
      drivingSide: "Right",
    },
    itinerary: [
      {
        day: 1,
        title: "Marble Mountains & My Khe Beach",
        location: "Da Nang, Vietnam",
        description:
          "Explore the limestone caves and Buddhist sanctuaries carved into the Marble Mountains. Climb to the summits for panoramic coastal views, then spend the afternoon relaxing on the golden sands of My Khe Beach. In the evening, walk along the Han River to see the illuminated bridges.",
        highlights: [
          "Climb the steps to Huyen Khong Cave in the Marble Mountains",
          "Enjoy panoramic coastal views from the mountain summits",
          "Relax or swim on the pristine My Khe Beach",
          "Watch the Dragon Bridge spit fire and water (weekends at 9 PM)",
        ],
        image: "https://images.pexels.com/photos/2407636/pexels-photo-2407636.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      },
      {
        day: 2,
        title: "Ba Na Hills & Golden Bridge",
        location: "Truong Son Mountains, Da Nang",
        description:
          "Ride the world-record cable car up to Ba Na Hills resort. Walk the iconic Golden Bridge, suspended 1,400 meters above sea level and held by colossal stone hands, and explore the replica French Village. Enjoy rides at the underground Fantasy Park and stroll the flower gardens.",
        highlights: [
          "Ride the scenic Ba Na Hills cable car system",
          "Walk the iconic Golden Bridge and capture stunning photos",
          "Explore the French Village and its European architecture",
          "Ride the alpine coaster down the mountain slopes",
        ],
        image: "https://images.pexels.com/photos/7286748/pexels-photo-7286748.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      },
      {
        day: 3,
        title: "Son Tra Peninsula & Cham Museum",
        location: "Son Tra Peninsula, Da Nang",
        description:
          "Drive along the coast of Son Tra (Monkey) Peninsula to visit Linh Ung Pagoda and its 67-meter Lady Buddha statue. Return to the city center to browse the world's largest collection of Cham sandstone sculptures, documenting the historical Hindu empire of central Vietnam.",
        highlights: [
          "Visit the 67-meter tall Lady Buddha at Linh Ung Pagoda",
          "Spot endangered red-shanked douc langurs on Son Tra slopes",
          "Browse Cham sandstone sculptures at the Cham Museum",
          "Dine on fresh seafood along the beachfront promenade",
        ],
        image: "https://images.pexels.com/photos/1009837/pexels-photo-1009837.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      },
    ],
    thingsToDo: [
      {
        title: "Golden Bridge Walk",
        description:
          "Walk the world-famous Golden Bridge, a pedestrian bridge held by giant hands that offers spectacular views of the Truong Son mountains.",
        iconName: "Landmark",
      },
      {
        title: "Beach Relaxation",
        description:
          "Lounge on the white sands of My Khe Beach or Non Nuoc Beach, famous for their warm waters and excellent surf conditions.",
        iconName: "Waves",
      },
      {
        title: "Marble Mountains Spelunking",
        description:
          "Explore the maze of caves, grottoes, and ancient shrines hidden inside five limestone peaks named after the five elements.",
        iconName: "Mountain",
      },
      {
        title: "Dragon Bridge Fire Show",
        description:
          "Gather on the banks of the Han River on weekend nights to watch the dragon-shaped bridge breathe fire and water.",
        iconName: "Lightbulb",
      },
    ],
    travelTips: [
      "Check the Dragon Bridge schedule before visiting — the fire and water show starts at 9:00 PM on Saturdays and Sundays.",
      "Book Ba Na Hills tickets online in advance to bypass long queues at the lower ticket offices.",
      "Hire a motorbike to drive the Son Tra Peninsula loop for the best views, but be cautious of steep curves.",
      "Eat local dishes like Mi Quang (turmeric noodle soup) and Banh Xeo (crispy savory crepes) in local shops rather than resort restaurants.",
    ],
    gallery: [
      "https://images.pexels.com/photos/2407636/pexels-photo-2407636.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "https://images.pexels.com/photos/1009837/pexels-photo-1009837.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "https://images.pexels.com/photos/7286748/pexels-photo-7286748.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    ],
  },

  sapa: {
    slug: "sapa",
    name: "Sapa",
    country: "Vietnam",
    region: "Southeast Asia",
    tagline: "Emerald rice terraces rising into the roof of Indochina",
    heroImage: "https://images.pexels.com/photos/6020286/pexels-photo-6020286.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    overview:
      "Sapa town stands at the head of a deep valley of magnificent rice terraces that are still worked today as they have been for centuries. Enticing ribbons of road lead the eye down to the valley floor, white-water rivers rush among rice fields, and lush green mountains stretch into the distance as far as the eye can see. The highest peak in the region, Mount Fansipan also called 'Roof of Indochina', crowns the ragged ridge line high above town, accessible by a scenic cable car. Sapa is also a rich cultural tapestry home to diverse ethnic minority groups like the Hmong, Red Dao, and Tay.",
    quickFacts: {
      capital: "Hanoi (national capital)",
      currency: "Vietnamese Dong (₫)",
      climate: "Temperate/alpine — cool summers and occasionally cold, snowy winters",
      bestSeason: "March–May (clear, green terraces) & September–November (harvest season)",
      languages: "Vietnamese, Ethnic Minority languages, basic English",
      timeZone: "ICT (UTC+7)",
      drivingSide: "Right",
    },
    itinerary: [
      {
        day: 1,
        title: "Sapa Town & Cat Cat Village",
        location: "Sapa Town & Cat Cat Village",
        description:
          "Arrive in Sapa and take in the cool mountain air. Walk down the valley to Cat Cat Village, a traditional Black Hmong settlement nestled next to a waterfall. Learn about Hmong weaving traditions, visit historical wooden homes, and watch cultural dance performances.",
        highlights: [
          "Explore Sapa town center and its stone church built by the French",
          "Walk the scenic path down to Cat Cat Hmong Village",
          "Photograph the waterfall and traditional waterwheels",
          "Watch Hmong craft demonstrations including indigo fabric dyeing",
        ],
        image: "https://images.pexels.com/photos/6020286/pexels-photo-6020286.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      },
      {
        day: 2,
        title: "Mount Fansipan & Cable Car",
        location: "Mount Fansipan, Sapa",
        description:
          "Ascend Mount Fansipan, the highest peak in Indochina at 3,143 meters. Ride the state-of-the-art cable car through the clouds, then climb the stone stairs past grand Buddhist pagodas and a giant bronze Buddha statue to stand at the summit monument.",
        highlights: [
          "Ride the world-record Fansipan cable car through misty valleys",
          "Visit the beautiful pagodas and shrines on the mountain peak",
          "Photograph the giant bronze Buddha statue sitting above the clouds",
          "Stand at the summit marker of the 'Roof of Indochina'",
        ],
        image: "https://images.pexels.com/photos/2088205/pexels-photo-2088205.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      },
      {
        day: 3,
        title: "Muong Hoa Valley Trekking",
        location: "Muong Hoa Valley, Sapa",
        description:
          "Embark on a scenic trek through the Muong Hoa Valley, passing through the villages of Y Linh Ho, Lao Chai, and Ta Van. Walk alongside stunning terraced rice paddies, meet local ethnic guides, and enjoy a traditional lunch overlooking the river.",
        highlights: [
          "Trek through the jaw-dropping rice terraces of Muong Hoa Valley",
          "Visit Hmong and Giay villages to learn about their daily life",
          "Cross rustic suspension bridges over mountain streams",
          "Dine on local dishes prepared at a village homestay",
        ],
        image: "https://images.pexels.com/photos/3601422/pexels-photo-3601422.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      },
    ],
    thingsToDo: [
      {
        title: "Fansipan Cable Car",
        description:
          "Ride the cable car to the peak of Mount Fansipan for 360-degree views of the Hoang Lien Son mountain range.",
        iconName: "Mountain",
      },
      {
        title: "Rice Terrace Trekking",
        description:
          "Hire a local guide to trek through the world's most spectacular rice terraces, carved into the hillsides over generations.",
        iconName: "MapPin",
      },
      {
        title: "Homestay Experience",
        description:
          "Stay overnight in a traditional stilt home in Ta Van or Ta Phin village, eating home-cooked meals with ethnic minority hosts.",
        iconName: "Globe",
      },
      {
        title: "Sapa Love Market",
        description:
          "Explore the Saturday night market where ethnic minority youth gather for traditional singing, dating rituals, and flute playing.",
        iconName: "Heart",
      },
    ],
    travelTips: [
      "Bring sturdy, waterproof hiking boots — Sapa's trekking trails can become very muddy and slippery in the rain.",
      "Weather changes rapidly; always pack a light raincoat and warm layers, even in summer.",
      "Support the local communities by hiring local ethnic minority guides directly or buying authentic handmade crafts.",
      "Pack insect repellent, sunscreen, and cash, as credit cards are not widely accepted in the rural villages.",
    ],
    gallery: [
      "https://images.pexels.com/photos/6020286/pexels-photo-6020286.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "https://images.pexels.com/photos/2088205/pexels-photo-2088205.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "https://images.pexels.com/photos/3601422/pexels-photo-3601422.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    ],
  },

  "mui-ne": {
    slug: "mui-ne",
    name: "Mui Ne",
    country: "Vietnam",
    region: "Southeast Asia",
    tagline: "Vibrant coastal dunes, fishing harbors, and wind-blown sands",
    heroImage: "https://images.pexels.com/photos/6152257/pexels-photo-6152257.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    overview:
      "Mui Ne has its roots in fishing, and it shows in the slow, relaxed pace of life. It's easy to lose track of time here, riding bicycles along the coast, spending afternoons by the pool, and dining on fresh seafood with the sound of the waves in the background. With ideal wind conditions for kitesurfing and windsurfing, brightly colored kites are a fixture on Mui Ne's beaches year-round. What makes Mui Ne truly unique is its desert landscape — a surreal enclave of towering red and white sand dunes right beside the tropical sea, bisected by a cooling stream flowing through a red clay canyon.",
    quickFacts: {
      capital: "Hanoi (national capital)",
      currency: "Vietnamese Dong (₫)",
      climate: "Hot and dry year-round with minimal rainfall",
      bestSeason: "November–April (ideal wind for water sports, dry weather)",
      languages: "Vietnamese, English (in resorts)",
      timeZone: "ICT (UTC+7)",
      drivingSide: "Right",
    },
    itinerary: [
      {
        day: 1,
        title: "Fairy Stream & Red Sand Dunes",
        location: "Fairy Stream & Red Dunes, Mui Ne",
        description:
          "Walk barefoot through the cool waters of the Fairy Stream (Suoi Tien), navigating between orange clay walls and strange sand formations. In the late afternoon, head to the Red Sand Dunes to watch a spectacular sunset over the rolling orange sand, trying sand-sliding on plastic boards.",
        highlights: [
          "Wander barefoot down the shallow Fairy Stream",
          "Photograph the striking red and white clay formations",
          "Climb the Red Sand Dunes for sunset views",
          "Try sand-boarding down the dunes with local children",
        ],
        image: "https://images.pexels.com/photos/6152257/pexels-photo-6152257.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      },
      {
        day: 2,
        title: "White Sand Dunes & Fishing Village",
        location: "Bau Trang (White Dunes) & Harbor, Mui Ne",
        description:
          "Rise early to watch the sunrise over the massive White Sand Dunes (Bau Trang), located next to a lotus-filled freshwater lake. Ride an ATV or jeep over the sand peaks, then drive back along the coast to visit the Mui Ne Fishing Harbor, watching hundreds of round bamboo basket boats landing their morning catch.",
        highlights: [
          "Watch the sunrise over the vast White Sand Dunes",
          "Ride an ATV or jeep over the sweeping sand peaks",
          "Photograph the lotus flower lake (Bau Sen) inside the desert",
          "Visit the Mui Ne Fishing Harbor filled with colorful round basket boats",
        ],
        image: "https://images.pexels.com/photos/3601422/pexels-photo-3601422.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      },
    ],
    thingsToDo: [
      {
        title: "Kitesurfing & Windsurfing",
        description:
          "Take lessons at Mui Ne's world-class surf schools, benefiting from Southeast Asia's strongest and most consistent coastal winds.",
        iconName: "Waves",
      },
      {
        title: "Desert ATV Riding",
        description:
          "Rent an ATV at the White Sand Dunes to zoom up and down the giant wind-sculpted sand dunes.",
        iconName: "Car",
      },
      {
        title: "Fairy Stream Walk",
        description:
          "Walk barefoot in the ankle-deep water of this scenic stream, framed by bamboo forests and red-and-white clay cliffs.",
        iconName: "MapPin",
      },
      {
        title: "Seafood Feast at Bo Ke",
        description:
          "Select live crabs, prawns, and clams from tanks along the beachfront Bo Ke embankment and have them grilled fresh over charcoal.",
        iconName: "Utensils",
      },
    ],
    travelTips: [
      "Avoid visiting the dunes in the middle of the day, as the sand becomes extremely hot and the sun is punishing.",
      "Always negotiate jeep or ATV hire prices before climbing aboard at the White Dunes.",
      "Bring sunglasses and a scarf to protect your eyes and face from wind-blown sand at the dunes.",
      "Mui Ne is a 4-hour drive from Ho Chi Minh City; booking a private car or luxury limousine bus is the most comfortable transit.",
    ],
    gallery: [
      "https://images.pexels.com/photos/6152257/pexels-photo-6152257.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "https://images.pexels.com/photos/3601422/pexels-photo-3601422.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    ],
  },

  "nha-trang": {
    slug: "nha-trang",
    name: "Nha Trang",
    country: "Vietnam",
    region: "Southeast Asia",
    tagline: "Azure bays, therapeutic mud baths, and island-hopping escapes",
    heroImage: "https://images.pexels.com/photos/931018/pexels-photo-931018.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    overview:
      "Perched on a pristine stretch of the southern coast, Nha Trang is a playground for sunseekers. Days here are spent dining on delicious seafood, snorkeling around stunning islands, and partying on the sand after dark. Nha Trang lays claim to some of the country's finest luxury resorts, thrilling watersports, and therapeutic mineral mud baths. The city is also rich in culture, home to the 8th-century Po Nagar Cham Towers, a legacy of the ancient Cham civilization that once ruled central Vietnam.",
    quickFacts: {
      capital: "Hanoi (national capital)",
      currency: "Vietnamese Dong (₫)",
      climate: "Tropical savanna with a dry season from January to August",
      bestSeason: "February–May (clear skies, warm water, best for diving)",
      languages: "Vietnamese, English (widely spoken in resorts)",
      timeZone: "ICT (UTC+7)",
      drivingSide: "Right",
    },
    itinerary: [
      {
        day: 1,
        title: "Cham Towers & Mud Bath Wellness",
        location: "Po Nagar Towers & Thap Ba Mud Baths, Nha Trang",
        description:
          "Visit Po Nagar Cham Towers, a beautifully preserved temple complex built between the 8th and 11th centuries on a hill overlooking the river. In the afternoon, head to Thap Ba Hot Springs for a relaxing experience in a warm mineral mud bath, followed by a swim in natural hot water pools.",
        highlights: [
          "Explore the historic brick shrines of Po Nagar Cham Towers",
          "Observe local Buddhists praying to the goddess Yan Po Nagar",
          "Soak in a therapeutic warm mineral mud bath at Thap Ba",
          "Relax in natural hot spring pools and waterfalls",
        ],
        image: "https://images.pexels.com/photos/931018/pexels-photo-931018.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      },
      {
        day: 2,
        title: "VinWonders Amusement Island & Cable Car",
        location: "Hon Tre Island, Nha Trang",
        description:
          "Board the VinWonders cable car (one of the longest over-water cable cars in the world) to Hon Tre Island. Spend the day exploring the massive VinWonders theme park, featuring a water park, alpine coaster, botanical gardens, and an aquarium.",
        highlights: [
          "Ride the scenic over-water cable car to Hon Tre Island",
          "Splash down waterslides at the beachfront water park",
          "Ride the alpine coaster with panoramic bay views",
          "Watch the spectacular music and light show in the evening",
        ],
        image: "https://images.pexels.com/photos/7286748/pexels-photo-7286748.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      },
      {
        day: 3,
        title: "Island Hopping & Coral Reef Snorkeling",
        location: "Hon Mun & Hon Mot Islands, Nha Trang Bay",
        description:
          "Board a speed boat to explore the islands of Nha Trang Bay. Stop at Hon Mun Island, a protected marine reserve, to snorkel or scuba dive among vibrant coral reefs and tropical fish. Enjoy a floating bar experience and a seafood lunch on a floating platform.",
        highlights: [
          "Speedboat cruise across the turquoise Nha Trang Bay",
          "Snorkel or dive among protected coral reefs at Hon Mun Island",
          "Enjoy a floating bar cocktail party in the sea",
          "Feast on grilled fish and sea urchins at a floating restaurant",
        ],
        image: "https://images.pexels.com/photos/2407636/pexels-photo-2407636.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      },
    ],
    thingsToDo: [
      {
        title: "Mineral Mud Baths",
        description:
          "Soak in warm, mineral-rich mud at Thap Ba, I-Resort, or 100 Egg Mud Bath to rejuvenate your skin and relax after travel.",
        iconName: "Heart",
      },
      {
        title: "Scuba Diving in Hon Mun",
        description:
          "Explore the rich marine biodiversity of Hon Mun Marine Protected Area, offering Vietnam's best coral diving conditions.",
        iconName: "Waves",
      },
      {
        title: "VinWonders Theme Park",
        description:
          "Visit the 'Disneyland of Vietnam' on Hon Tre Island, featuring water slides, rollercoasters, and a massive castle-themed square.",
        iconName: "Landmark",
      },
      {
        title: "Seafood Dining on Tran Phu",
        description:
          "Walk the Tran Phu beachfront road to dine on fresh lobsters, scallops, and squid in open-air seafood restaurants.",
        iconName: "Utensils",
      },
    ],
    travelTips: [
      "Avoid visiting during the rainy and typhoon season (September to December) as seas become rough and diving visibility drops.",
      "Wear sunscreen and a rash guard when snorkeling to protect yourself from the intense tropical sun and occasional jellyfish.",
      "Taxis are cheap, but always ensure the driver uses the meter or use Grab to book your rides.",
      "Visit Po Nagar Towers early in the morning (around 8 AM) to beat the tourist crowds and tour buses.",
    ],
    gallery: [
      "https://images.pexels.com/photos/931018/pexels-photo-931018.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "https://images.pexels.com/photos/7286748/pexels-photo-7286748.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "https://images.pexels.com/photos/2407636/pexels-photo-2407636.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    ],
  },

  "phu-quoc": {
    slug: "phu-quoc",
    name: "Phu Quoc",
    country: "Vietnam",
    region: "Southeast Asia",
    tagline: "Pristine white beaches, tropical reefs, and island cable cars",
    heroImage: "https://images.pexels.com/photos/7286748/pexels-photo-7286748.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    overview:
      "Phu Quoc is a Vietnamese island off the coast of Cambodia in the Gulf of Thailand. It's known for its white-sand beaches and luxurious resorts, most of which are along the palm-lined southwest coast. More than half of the island is part of Phu Quoc National Park, which features mountains, dense tropical jungle, hiking trails, and wildlife. The island is also famous for producing some of the world's best fish sauce (nuoc mam) and high-quality black pepper, and has been developed with spectacular attractions like the Hon Thom Cable Car — the longest non-stop three-way cable car system in the world.",
    quickFacts: {
      capital: "Hanoi (national capital)",
      currency: "Vietnamese Dong (₫)",
      climate: "Tropical monsoon with a wet season from May to November",
      bestSeason: "November–April (dry, calm seas, sunny skies)",
      languages: "Vietnamese, English (widely spoken in resorts)",
      timeZone: "ICT (UTC+7)",
      drivingSide: "Right",
    },
    itinerary: [
      {
        day: 1,
        title: "Sao Beach & Historical Prison",
        location: "Southern Phu Quoc Island",
        description:
          "Spend your morning relaxing on the powdery white sand and swimming in the calm turquoise waters of Sao Beach. In the afternoon, visit the Phu Quoc Prison (Coconut Tree Prison), a historic site showcasing the island's history during the Indochina and Vietnam Wars.",
        highlights: [
          "Relax or swim on the postcard-perfect Sao Beach",
          "Walk under the swaying palm trees along the shore",
          "Visit the historic exhibits at Coconut Tree Prison",
          "Stop by a local pearl farm to see pearl cultivation",
        ],
        image: "https://images.pexels.com/photos/7286748/pexels-photo-7286748.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      },
      {
        day: 2,
        title: "Hon Thom Island Cable Car",
        location: "An Thoi Archipelago, Southern Phu Quoc",
        description:
          "Ride the record-breaking Hon Thom Cable Car across the sea, offering breathtaking 360-degree aerial views of the islands and coral reefs. Spend the day on Hon Thom Island enjoying the Aquatopia Water Park and relaxing on the beautiful beach.",
        highlights: [
          "Ride the 7.8km over-water Hon Thom Cable Car",
          "Enjoy 360-degree views of fishing boats and islands",
          "Ride water slides at Aquatopia Water Park on Hon Thom",
          "Relax on the shaded sands of Hon Thom beach",
        ],
        image: "https://images.pexels.com/photos/3601422/pexels-photo-3601422.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      },
      {
        day: 3,
        title: "VinWonders Safari & Night Market",
        location: "Northern Phu Quoc & Duong Dong",
        description:
          "Head north to visit the Vinpearl Safari, Vietnam's largest open-air wild animal conservation park. Spot tigers, rhinos, and giraffes from a safari bus. In the evening, explore the bustling Duong Dong Night Market to shop for handicrafts and dine on grilled street seafood.",
        highlights: [
          "Take a safari bus through the open-air wildlife conservation park",
          "Feed giraffes and elephants at the safari station",
          "Explore the Duong Dong Night Market in the evening",
          "Try local street food like grilled sea urchins and rolled ice cream",
        ],
        image: "https://images.pexels.com/photos/1009837/pexels-photo-1009837.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      },
    ],
    thingsToDo: [
      {
        title: "Hon Thom Cable Car",
        description:
          "Ride the longest over-water cable car in the world, spanning three islands in the southern archipelago.",
        iconName: "Waves",
      },
      {
        title: "Sao Beach Lounge",
        description:
          "Lounge on the swings suspended over the clear waters of Sao Beach, famous for its powder-white sand.",
        iconName: "Heart",
      },
      {
        title: "Fish Sauce Factory Tour",
        description:
          "Visit a traditional distillery to see how giant wooden vats ferment anchovies into Phu Quoc's famous high-grade fish sauce.",
        iconName: "Utensils",
      },
      {
        title: "Sunset Town Exploring",
        description:
          "Explore the European-inspired 'Sunset Town' near the southern cable car station, complete with a replica Roman colosseum and Kiss Bridge.",
        iconName: "Landmark",
      },
    ],
    travelTips: [
      "Bring cash to the night market, as small vendors do not accept international credit cards.",
      "Phu Quoc is a visa-free destination for all tourists for stays up to 30 days (if flying in directly from abroad).",
      "Rent a scooter to explore the quiet red-dirt roads of the northern national park forest.",
      "Buy local black pepper and pearl jewelry from reputable farms to ensure high quality.",
    ],
    gallery: [
      "https://images.pexels.com/photos/7286748/pexels-photo-7286748.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "https://images.pexels.com/photos/3601422/pexels-photo-3601422.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "https://images.pexels.com/photos/1009837/pexels-photo-1009837.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    ],
  },

  "da-lat": {
    slug: "da-lat",
    name: "Da Lat",
    country: "Vietnam",
    region: "Southeast Asia",
    tagline: "Cool mountain air, French villas, and pine-clad hills",
    heroImage: "https://images.pexels.com/photos/236519/pexels-photo-236519.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    overview:
      "Known as the 'City of Eternal Spring' for its distinctive temperate climate, Da Lat is tucked away in the central highlands, playing the cooler cousin to Vietnam's seaside destinations. Famous for its countryside charm, Da Lat draws outdoor enthusiasts, couples, and golf enthusiasts alike. This mountain resort town was established as a hill station by the French in the early 20th century, and they left a lasting mark in European-inspired villas, manicured gardens, and pine-forested scenery. Xuan Huong Lake is the center of the action, but countless treasures like waterfalls, pagodas, and peaks await in the surrounding hills.",
    quickFacts: {
      capital: "Hanoi (national capital)",
      currency: "Vietnamese Dong (₫)",
      climate: "Temperate highland climate — cool year-round, never hot",
      bestSeason: "November–March (dry season, flowers in full bloom)",
      languages: "Vietnamese, basic English",
      timeZone: "ICT (UTC+7)",
      drivingSide: "Right",
    },
    itinerary: [
      {
        day: 1,
        title: "Xuan Huong Lake & Crazy House",
        location: "Da Lat Town Center",
        description:
          "Start your morning with a walk around the beautiful Xuan Huong Lake at the center of the city. Later, visit the surreal Hang Nga Guesthouse, known as the 'Crazy House', a fairy-tale labyrinth of concrete tree trunks, spiderwebs, and cave-like guestrooms.",
        highlights: [
          "Walk or rent a swan pedal boat on Xuan Huong Lake",
          "Explore the bizarre architectural paths of the 'Crazy House'",
          "Visit the flower-adorned Da Lat Cathedral (Chicken Church)",
          "Dine at a local café overlooking the misty valley",
        ],
        image: "https://images.pexels.com/photos/236519/pexels-photo-236519.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      },
      {
        day: 2,
        title: "Datanla Waterfall & Truc Lam Zen Pagoda",
        location: "Southern Da Lat Hills",
        description:
          "Ride a scenic cable car over pine forests to Truc Lam Zen Monastery, a peaceful active pagoda overlooking Tuyen Lam Lake. In the afternoon, visit Datanla Waterfall and ride the exciting alpine coaster through the forest canopy to reach the foot of the falls.",
        highlights: [
          "Ride the Da Lat cable car over lush pine valleys",
          "Walk the peaceful gardens of Truc Lam Zen Monastery",
          "Ride the alpine coaster down to Datanla Waterfall",
          "Walk along the lake shores of Tuyen Lam Lake",
        ],
        image: "https://images.pexels.com/photos/6152257/pexels-photo-6152257.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      },
      {
        day: 3,
        title: "Lang Biang Peak & Valley of Love",
        location: "Lang Biang Mountain & Valley of Love",
        description:
          "Board a Russian jeep to ascend to the top of Lang Biang Peak, the highest mountain in Da Lat, for panoramic views of the golden stream and valleys. Spend the afternoon exploring the scenic lawns, lakes, and flower gardens of the Valley of Love.",
        highlights: [
          "Ride a jeep to the summit of Lang Biang Peak",
          "Enjoy panoramic views of Da Lat's rivers and pine forests",
          "Stroll through the gardens of the Valley of Love",
          "Browse local embroidered art at XQ Historical Village",
        ],
        image: "https://images.pexels.com/photos/6020286/pexels-photo-6020286.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      },
    ],
    thingsToDo: [
      {
        title: "Crazy House Exploration",
        description:
          "Explore the organic, tree-shaped house designed by Vietnamese architect Dang Viet Nga, featuring maze-like walkways.",
        iconName: "Landmark",
      },
      {
        title: "Canyoning at Datanla",
        description:
          "Repel down vertical waterfalls, slide down natural rock slides, and jump off cliffs into cold mountain pools with expert guides.",
        iconName: "Mountain",
      },
      {
        title: "Misty Cable Car Ride",
        description:
          "Ride the cable car between Robin Hill and Truc Lam Monastery, floating above the morning pine mist.",
        iconName: "Waves",
      },
      {
        title: "Local Coffee Tasting",
        description:
          "Sip local Robusta and Arabica coffee at chic countryside cafes, enjoying panoramic valley views.",
        iconName: "Utensils",
      },
    ],
    travelTips: [
      "Bring a jacket or sweater — evenings in Da Lat can drop to 15°C, which feels quite chilly compared to the rest of Vietnam.",
      "Da Lat is famous for flowers and strawberries; try picking fresh strawberries at a local farm.",
      "Rent a vintage motorbike to drive through the winding mountain roads lined with pine forests.",
      "Rainy season (May to October) has afternoon showers; plan your outdoor activities for the morning.",
    ],
    gallery: [
      "https://images.pexels.com/photos/236519/pexels-photo-236519.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "https://images.pexels.com/photos/6152257/pexels-photo-6152257.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "https://images.pexels.com/photos/6020286/pexels-photo-6020286.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    ],
  },

  "hoi-an": {
    slug: "hoi-an",
    name: "Hoi An",
    country: "Vietnam",
    region: "Southeast Asia",
    tagline: "Golden shophouses, paper lanterns, and historic river canals",
    heroImage: "https://images.pexels.com/photos/6333174/pexels-photo-6333174.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    overview:
      "Hoi An is a city on Vietnam’s central coast known for its incredibly well-preserved Ancient Town, cut through with narrow river canals. The former major trading port's melting-pot history is reflected in its wooden architecture, showing Chinese, Japanese, French, and Vietnamese styles. The iconic Japanese Covered Bridge is the symbol of the city, and when night falls, the entire town glows with thousands of colorful silk lanterns reflecting in the Hoai River, where visitors float candlelit paper wishes on the water.",
    quickFacts: {
      capital: "Hanoi (national capital)",
      currency: "Vietnamese Dong (₫)",
      climate: "Tropical — hot summers, wet winter monsoon season (Sep–Jan)",
      bestSeason: "February–May (dry, warm weather, pleasant sea breeze)",
      languages: "Vietnamese, English (widely spoken)",
      timeZone: "ICT (UTC+7)",
      drivingSide: "Right",
    },
    itinerary: [
      {
        day: 1,
        title: "Ancient Town & Lantern Night Market",
        location: "Hoi An Ancient Town",
        description:
          "Explore the pedestrian lanes of Hoi An's Ancient Town. Visit the 17th-century Japanese Covered Bridge, the ornate Assembly Hall of the Cantonese Chinese Congregation, and historic wooden houses like Tan Ky. At night, watch the streets light up with lanterns and release a paper lantern on the river.",
        highlights: [
          "Cross the historic Japanese Covered Bridge",
          "Walk past yellow-painted ancient shophouses",
          "Float a candlelit paper lantern on the Hoai River",
          "Browse local crafts at the Hoi An Night Market",
        ],
        image: "https://images.pexels.com/photos/6333174/pexels-photo-6333174.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      },
      {
        day: 2,
        title: "Basket Boat Ride & Farming Village",
        location: "Cam Thanh & Tra Que Village, Hoi An",
        description:
          "Ride a unique round bamboo basket boat through the nipa palm canals of Cam Thanh water coconut forest, watching locals spin the boats. In the afternoon, cycle to Tra Que Herb Village to see organic vegetable gardens and participate in traditional farming.",
        highlights: [
          "Ride a round bamboo basket boat through palm canals",
          "Watch the local basket boat spinning and fishing performances",
          "Cycle through countryside paths past rice paddies",
          "Learn traditional farming methods at Tra Que Herb Village",
        ],
        image: "https://images.pexels.com/photos/3601422/pexels-photo-3601422.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      },
      {
        day: 3,
        title: "An Bang Beach & Tailor Shop Crafting",
        location: "An Bang Beach & Tailor Street, Hoi An",
        description:
          "Spend your morning relaxing on the sandy shores of An Bang Beach, a peaceful alternative to the busy city. Return to the town center to visit a local tailor shop — Hoi An is world-famous for its overnight custom tailoring, where you can get a suit or dress handmade in 24 hours.",
        highlights: [
          "Lounge or swim at the quiet An Bang Beach",
          "Enjoy fresh coconut juice at a beachfront restaurant",
          "Get custom-tailored clothes handmade by local tailors",
          "Dine on local specialties like Cao Lau noodles",
        ],
        image: "https://images.pexels.com/photos/2407636/pexels-photo-2407636.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      },
    ],
    thingsToDo: [
      {
        title: "Custom Tailoring",
        description:
          "Get high-quality suits, shirts, or dresses custom-tailored within 24 hours at famous shops like Yaly or A Dong Silk.",
        iconName: "Landmark",
      },
      {
        title: "Bamboo Basket Boat Ride",
        description:
          "Paddle through nipa palm forests in a traditional round basket boat, watching local fishermen perform spins and cast nets.",
        iconName: "Waves",
      },
      {
        title: "Cooking Masterclass",
        description:
          "Visit a local market to buy ingredients, then learn to prepare traditional dishes like rice paper rolls, banh mi, and Cao Lau.",
        iconName: "Utensils",
      },
      {
        title: "Lantern Floating on the Canal",
        description:
          "Board a wooden boat on the Hoai River at sunset to release paper lanterns and float wishes down the canal.",
        iconName: "Heart",
      },
    ],
    travelTips: [
      "Purchase the Ancient Town entrance ticket — it funds the conservation of the historic buildings and grants access to historical assembly halls.",
      "If you plan to get clothes custom-tailored, visit the tailor on your first day so there is enough time for fittings and adjustments.",
      "Time your visit to match the monthly Lantern Festival (held on the 14th day of each lunar month) when the town shuts off electricity.",
      "Explore the countryside by bicycle — the paths are flat, peaceful, and lead past beautiful rice paddies and water buffaloes.",
    ],
    gallery: [
      "https://images.pexels.com/photos/6333174/pexels-photo-6333174.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "https://images.pexels.com/photos/3601422/pexels-photo-3601422.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "https://images.pexels.com/photos/2407636/pexels-photo-2407636.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    ],
  },

  hue: {
    slug: "hue",
    name: "Hue",
    country: "Vietnam",
    region: "Southeast Asia",
    tagline: "Imperial citadels, royal tombs, and the winding Perfume River",
    heroImage: "https://images.pexels.com/photos/1691341/pexels-photo-1691341.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    overview:
      "Hue is a city chock-full of stories. The Kings of the Nguyen Dynasty built their feudal capital along Hue’s fertile riverbanks and atop its forested hills, leaving a majestic imperial legacy behind. Hue’s refined royal cuisine is the stuff of legend, featuring dozens of small, beautifully presented dishes. Through the whole scene flows the Perfume River, setting a slow, relaxing pace that the rest of the city is happy to follow, lined with mossy pagodas and grand brick tombs of former emperors.",
    quickFacts: {
      capital: "Hanoi (national capital)",
      currency: "Vietnamese Dong (₫)",
      climate: "Tropical monsoon — wet and occasionally cold during winter (September–January)",
      bestSeason: "February–April (dry, pleasant spring weather)",
      languages: "Vietnamese, basic English",
      timeZone: "ICT (UTC+7)",
      drivingSide: "Right",
    },
    itinerary: [
      {
        day: 1,
        title: "Imperial Citadel & Royal Antiquities",
        location: "Imperial City (The Citadel), Hue",
        description:
          "Step through the Noon Gate into Hue's Imperial Citadel, the home of the Nguyen emperors from 1802 to 1945. Walk past grand gates and temple courtyards, explore the Forbidden Purple City, and browse royal artifacts at the Museum of Royal Antiquities.",
        highlights: [
          "Cross the moat and enter the Noon Gate of the Imperial City",
          "Walk through the remains of the Forbidden Purple City",
          "Photograph the ornate dynastic bronze urns in the temples",
          "Browse imperial robes and treasures at the Royal Antiquities Museum",
        ],
        image: "https://images.pexels.com/photos/1691341/pexels-photo-1691341.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      },
      {
        day: 2,
        title: "Thien Mu Pagoda & Perfume River Cruise",
        location: "Perfume River, Hue",
        description:
          "Board a traditional dragon boat to cruise up the Perfume River. Stop to visit Thien Mu Pagoda, an active monastery with a iconic seven-story octagonal tower overlooking the water. In the afternoon, explore Dong Ba Market to try local Hue street foods.",
        highlights: [
          "Cruise the Perfume River on a traditional dragon boat",
          "Visit the historic seven-story tower of Thien Mu Pagoda",
          "See the car used by the monk Thich Quang Duc before his self-immolation",
          "Try local dishes like Bun Bo Hue (spicy beef noodle soup) at Dong Ba Market",
        ],
        image: "https://images.pexels.com/photos/1684188/pexels-photo-1684188.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      },
      {
        day: 3,
        title: "Royal Tombs of Khai Dinh & Tu Duc",
        location: "Southern Tombs Valley, Hue",
        description:
          "Drive south of the city to explore the grand tombs of the Nguyen emperors. Visit the Tomb of Emperor Tu Duc, featuring a scenic lake and pine forest gardens, and the Tomb of Emperor Khai Dinh, a blend of traditional Vietnamese and European gothic concrete architecture.",
        highlights: [
          "Explore the tranquil lake and pavilions of Tu Duc's Tomb",
          "Visit the monumental stone steps and dragon carvings of Khai Dinh's Tomb",
          "Admire the detailed mosaic glass murals inside the Khai Dinh tomb chamber",
          "Photograph the ancient calligraphic stone stelae detailing the emperors' lives",
        ],
        image: "https://images.pexels.com/photos/2088205/pexels-photo-2088205.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      },
    ],
    thingsToDo: [
      {
        title: "Imperial Citadel Tour",
        description:
          "Explore the massive walled fortress built on the pattern of Beijing's Forbidden City, which served as Vietnam's royal capital.",
        iconName: "Landmark",
      },
      {
        title: "Perfume River Cruise",
        description:
          "Take a slow dragon boat ride down the Perfume River, listening to traditional folk musicians play under the moon.",
        iconName: "Waves",
      },
      {
        title: "Royal Tomb Hopping",
        description:
          "Visit the architectural marvels of the Nguyen Dynasty tombs, each designed by the emperors themselves as gardens for their afterlives.",
        iconName: "Mountain",
      },
      {
        title: "Royal Banquet Dining",
        description:
          "Dine on Hue's refined royal cuisine, featuring dishes like Banh Beo (rice cakes), Banh Bot Loc, and fruit carved into birds.",
        iconName: "Utensils",
      },
    ],
    travelTips: [
      "Wear respectful clothing covering shoulders and knees when visiting the temples and the Imperial Citadel.",
      "The Citadel is massive and offers very little shade; bring an umbrella and plenty of water to survive the heat.",
      "Rent a bicycle to ride along the Perfume River pathways under the shady flamboyant trees.",
      "Buy a combo ticket if you plan to visit the Citadel and multiple tombs, as it offers a significant discount.",
    ],
    gallery: [
      "https://images.pexels.com/photos/1691341/pexels-photo-1691341.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "https://images.pexels.com/photos/1684188/pexels-photo-1684188.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "https://images.pexels.com/photos/2088205/pexels-photo-2088205.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    ],
  },
};
