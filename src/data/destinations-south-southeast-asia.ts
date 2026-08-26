import type { DestinationPageData } from "./destinations";

export const southSoutheastAsiaDestinations: Record<string, DestinationPageData> = {
  kerala: {
    slug: "kerala",
    name: "Kerala",
    country: "India",
    region: "South Asia",
    tagline: "Where emerald backwaters cradle ancient healing wisdom",
    heroImage: "/images/dest-7.jpg",
    overview:
      "Kerala unfurls along India's southwestern Malabar Coast like a green silk sari draped over the Arabian Sea. This is the birthplace of Ayurveda — a 5,000-year-old science of life still practiced in thatched-roof clinics where physicians prescribe oil baths, herbal elixirs, and Shirodhara treatments beneath slow-turning ceiling fans. From the labyrinthine backwaters of Alleppey, where kettuvallam houseboats glide past rice paddies and coir-rope villages, to the mist-wrapped tea estates of Munnar at 1,600 meters, every turn reveals a landscape of almost absurd fertility.\n\nSpice gardens in Thekkady perfume the air with cardamom, black pepper, and vanilla. Kathakali dancers paint their faces into living mythology each evening in Kochi's Fort Quarter, where 500-year-old Chinese fishing nets still dip into the harbor at sunset. The cuisine is a revelation — appam with stew, meen pollichathu wrapped in banana leaf, and fiery Malabar prawn curry scooped with flaky parotta.\n\nBeyond wellness and gastronomy, Kerala offers wild encounters: Periyar Tiger Reserve's bamboo-raft safaris, Wayanad's prehistoric Edakkal Caves, and Varkala's dramatic red laterite cliffs plunging into turquoise surf. This is slow travel at its most nourishing — a place that heals you before you even realize you needed healing.",
    quickFacts: {
      capital: "Thiruvananthapuram",
      currency: "Indian Rupee (₹)",
      climate: "Tropical monsoon with two rainy seasons",
      bestSeason: "September–March (post-monsoon clarity and cool weather)",
      languages: "Malayalam, English",
      timeZone: "IST (UTC+5:30)",
      drivingSide: "Left",
    },
    itinerary: [
      {
        day: 1,
        title: "Fort Kochi & Chinese Fishing Nets",
        location: "Kochi, Kerala",
        description:
          "Arrive in Kochi and wander the cobbled lanes of Fort Kochi, where Portuguese churches, Dutch cemeteries, and Jewish synagogues coexist within a few blocks. Watch the cantilevered Chinese fishing nets — introduced by traders from the court of Kublai Khan — haul their evening catch as the sun sinks into the Arabian Sea.",
        highlights: [
          "Photograph the iconic Chinese fishing nets at sunset",
          "Visit the 16th-century Mattancherry Palace and its Kerala murals",
          "Explore the Paradesi Synagogue in Jew Town",
          "Attend an evening Kathakali performance at Kerala Kathakali Centre",
        ],
        image: "https://source.unsplash.com/1600x900/?fort,kochi",
      },
      {
        day: 2,
        title: "Alleppey Backwater Cruise",
        location: "Alleppey (Alappuzha), Kerala",
        description:
          "Board a traditional kettuvallam houseboat and drift through Alleppey's network of canals, lagoons, and palm-fringed waterways. Pass villages where women wash clothes on stone steps and toddy tappers scale coconut palms with astonishing speed. Fall asleep on the water to the symphony of crickets and lapping waves.",
        highlights: [
          "Cruise the Vembanad Lake on a thatched-roof houseboat",
          "Taste fresh karimeen (pearl spot fish) grilled onboard",
          "Watch coir-rope making in waterside villages",
          "Witness a spectacular backwater sunset from the upper deck",
        ],
        image: "/images/tour-1.jpg",
      },
      {
        day: 3,
        title: "Periyar Wildlife & Spice Plantations",
        location: "Thekkady, Kerala",
        description:
          "Drive into the Western Ghats to Periyar Tiger Reserve, where elephants wade in the lake's shallows and Nilgiri langurs swing through the canopy. After a bamboo-raft safari, visit a spice plantation where cardamom pods, pepper vines, cinnamon bark, and vanilla orchids grow in fragrant profusion.",
        highlights: [
          "Spot wild elephants on a Periyar Lake bamboo-raft safari",
          "Tour a working cardamom and pepper plantation",
          "Try freshly brewed spice tea with jaggery",
          "Hike the Periyar Tiger Trail with a tribal guide",
        ],
        image: "/images/explor-1.jpg",
      },
      {
        day: 4,
        title: "Munnar Tea Highlands",
        location: "Munnar, Kerala",
        description:
          "Ascend to Munnar, where emerald tea carpets roll across every hillside like a painter's hallucination. Visit the Kolukkumalai estate — the world's highest orthodox tea plantation at 2,400 meters — and learn the delicate art of hand-rolling leaves. The evening air at this altitude is cool enough for a sweater, a rarity in tropical India.",
        highlights: [
          "Jeep ride to Kolukkumalai, the world's highest tea estate",
          "Walk through the Eravikulam National Park to spot Nilgiri tahr",
          "Photograph the Mattupetty Dam and surrounding shola forests",
          "Sample fresh single-estate teas at the KDHP Tea Museum",
        ],
        image: "/images/about-3.jpg",
      },
      {
        day: 5,
        title: "Ayurveda & Varkala Cliffs",
        location: "Varkala, Kerala",
        description:
          "Descend to the coast and check into an Ayurvedic retreat perched above Varkala's red laterite cliffs. Spend the morning receiving an Abhyanga oil massage and Shirodhara therapy, then walk the cliff path to Papanasam Beach — a sacred strand where Hindus believe a dip absolves all sins.",
        highlights: [
          "Experience a traditional Abhyanga full-body oil massage",
          "Swim at Papanasam Beach beneath dramatic cliff faces",
          "Dine on fresh seafood at a cliff-edge restaurant at sunset",
          "Visit the 2,000-year-old Janardanaswamy Temple",
        ],
        image: "/images/offer-1.jpg",
      },
    ],
    thingsToDo: [
      {
        title: "Ayurvedic Wellness Retreats",
        description:
          "Undergo authentic Panchakarma detox programs at heritage retreats in Kovalam and Varkala, guided by hereditary Ayurvedic physicians.",
        iconName: "Heart",
      },
      {
        title: "Backwater Houseboat Cruises",
        description:
          "Glide through 900 kilometers of interconnected canals on a kettuvallam, sleeping under the stars as the boat drifts past paddy fields.",
        iconName: "Waves",
      },
      {
        title: "Kathakali & Kalaripayattu",
        description:
          "Watch Kathakali dancers transform into demons and gods with elaborate makeup, then see Kalaripayattu — India's oldest martial art — performed live.",
        iconName: "Landmark",
      },
      {
        title: "Spice Plantation Tours",
        description:
          "Walk through fragrant estates in Wayanad and Thekkady, tasting raw pepper, fresh vanilla, and hand-ground cardamom straight from the vine.",
        iconName: "Utensils",
      },
      {
        title: "Tea Estate Trekking",
        description:
          "Hike through Munnar's rolling tea hills and visit working factories where leaves are withered, rolled, and fired into world-class black tea.",
        iconName: "Mountain",
      },
      {
        title: "Wildlife Safaris",
        description:
          "Track Bengal tigers, Asian elephants, and great hornbills in Periyar and Wayanad's dense tropical forests on guided bamboo-raft expeditions.",
        iconName: "Globe",
      },
    ],
    travelTips: [
      "Monsoon season (June–August) brings heavy rains but also Ayurveda's most effective treatment period — many clinics offer monsoon-special Panchakarma packages.",
      "Carry mosquito repellent with DEET, especially during backwater cruises; dengue risk increases post-monsoon.",
      "Learn a few Malayalam phrases — 'nanni' (thank you) and 'sugamaano?' (are you well?) earn genuine warmth from locals.",
      "Book houseboat trips midweek to avoid weekend crowds and negotiate better rates with operators in Alleppey.",
      "Dress modestly when visiting temples — shoulders and knees must be covered, and shoes are removed at the entrance.",
      "Kerala's road network is narrow and winding in the Ghats — allocate extra travel time between hill stations and always hire a local driver.",
      "Try the local toddy (fermented coconut sap) at a toddy shop — pair it with spicy tapioca and fish curry for the authentic Kerala lunch experience.",
    ],
    gallery: [
      "/images/dest-7.jpg",
      "/images/tour-2.jpg",
      "/images/about-4.jpg",
      "/images/explor-2.jpg",
      "/images/city-3.jpg",
    ],
  },

  "himachal-pradesh": {
    slug: "himachal-pradesh",
    name: "Himachal Pradesh",
    country: "India",
    region: "South Asia",
    tagline: "Where the Himalayas dare you to soar",
    heroImage: "/images/dest-8.jpg",
    overview:
      "Himachal Pradesh is India's vertical playground — a state carved into the western Himalayas where every valley offers a different kind of thrill. In Bir-Billing, tandem paragliders launch from 2,400 meters and ride thermals above Tibetan monasteries. In Solang Valley near Manali, winter dumps enough powder for serious skiing, while summer opens up the Hampta Pass trek through alpine meadows ablaze with blue poppies and rhododendrons.\n\nBeyond adventure sports, Himachal guards some of the subcontinent's most pristine landscapes. The Spiti Valley — often called 'Little Tibet' — is a cold desert of thousand-year-old monasteries perched on impossible cliffs, yak caravans crossing 4,500-meter passes, and night skies so clear the Milky Way casts a faint shadow. Dharamshala's McLeodganj hosts the Dalai Lama's government-in-exile, and its Tibetan cafés serve steaming momos and butter tea against a backdrop of snow-dusted Dhauladhar peaks.\n\nThe state's apple orchards in Kullu blanket entire hillsides in spring blossoms, its hot springs at Manikaran bubble at 96°C beside the Parvati River, and its wooden temples — like the pagoda-style Hadimba Devi in Manali — whisper of architectural traditions stretching back to the 15th century. Himachal is where India goes to breathe.",
    quickFacts: {
      capital: "Shimla (summer) / Dharamshala (winter)",
      currency: "Indian Rupee (₹)",
      climate: "Alpine to subtropical depending on altitude",
      bestSeason: "March–June (summer adventure) & December–February (skiing)",
      languages: "Hindi, Pahari, Tibetan",
      timeZone: "IST (UTC+5:30)",
      drivingSide: "Left",
    },
    itinerary: [
      {
        day: 1,
        title: "Shimla's Colonial Ridge",
        location: "Shimla, Himachal Pradesh",
        description:
          "Arrive on the UNESCO-listed Kalka-Shimla toy train, chugging through 102 tunnels and over 800 bridges. Walk the Mall Road and Ridge, explore the neo-Gothic Christ Church, and ride the heritage lift to the bustling Lower Bazaar for Himachali caps and dried apricots.",
        highlights: [
          "Ride the Kalka-Shimla narrow-gauge heritage railway",
          "Walk the Ridge promenade with views of distant snow peaks",
          "Visit the Viceregal Lodge and its manicured gardens",
          "Shop for Kullu shawls and Himachali pickles on Mall Road",
        ],
        image: "/images/city-4.jpg",
      },
      {
        day: 2,
        title: "Manali & Solang Valley Adventures",
        location: "Manali, Himachal Pradesh",
        description:
          "Drive north to Manali through the Kullu Valley's apple orchards. Visit the ancient Hadimba Devi Temple set in a cedar forest, then head to Solang Valley for zorbing, zip-lining, and — if visiting between December and February — skiing on powdery Himalayan slopes.",
        highlights: [
          "Explore the 15th-century Hadimba Devi wooden temple",
          "Ski or snowboard on Solang Valley's winter slopes",
          "Soak in the Vashisht village hot springs",
          "Try trout fresh from the Beas River at a riverside café",
        ],
        image: "/images/tour-3.jpg",
      },
      {
        day: 3,
        title: "Bir-Billing Paragliding",
        location: "Bir-Billing, Himachal Pradesh",
        description:
          "Travel to Bir, the paragliding capital of India, and launch from Billing at 2,400 meters for a tandem flight over Tibetan settlements, tea gardens, and forested ridgelines. After landing, explore Bir's Chokling Monastery and sample Tibetan thukpa in the colony's cafés.",
        highlights: [
          "Tandem paraglide from Billing to Bir over Kangra Valley",
          "Visit Chokling Monastery and its towering prayer wheel",
          "Hike the Rajgundha meadow trail for panoramic Dhauladhar views",
          "Enjoy momos and butter tea in Bir's Tibetan settlement",
        ],
        image: "/images/banner-1.jpg",
      },
      {
        day: 4,
        title: "Dharamshala & McLeodganj",
        location: "Dharamshala, Himachal Pradesh",
        description:
          "Ascend to McLeodganj — Little Lhasa — where the Dalai Lama's Tsuglagkhang Complex houses a temple, museum, and bookshop. Join monks for a morning meditation session, then hike through rhododendron forest to Bhagsu Waterfall, cooling off in its natural pool.",
        highlights: [
          "Visit the Dalai Lama's Tsuglagkhang Temple Complex",
          "Attend a morning meditation with Tibetan monks",
          "Hike to Bhagsu Waterfall and Shiva Café",
          "Browse Tibetan thangka paintings and singing bowls at the market",
        ],
        image: "/images/about-5.jpg",
      },
      {
        day: 5,
        title: "Spiti Valley & Key Monastery",
        location: "Spiti Valley, Himachal Pradesh",
        description:
          "Cross the Kunzum Pass at 4,590 meters into Spiti's lunar landscape. Visit the 1,000-year-old Key Monastery — Spiti's largest — perched on a conical hill like a Tibetan fortress, and drive to Chandratal Lake, a turquoise crescent at 4,300 meters that mirrors the surrounding peaks.",
        highlights: [
          "Cross the dramatic Kunzum Pass at 4,590 meters",
          "Explore Key Monastery's ancient murals and prayer halls",
          "Camp beside the turquoise Chandratal (Moon) Lake",
          "Stargaze in one of India's least light-polluted zones",
        ],
        image: "/images/explor-3.jpg",
      },
    ],
    thingsToDo: [
      {
        title: "Paragliding at Bir-Billing",
        description:
          "Soar on tandem flights from India's highest commercial paragliding site, riding thermals above the Kangra Valley for 20–30 exhilarating minutes.",
        iconName: "Mountain",
      },
      {
        title: "Himalayan Trekking",
        description:
          "Trek the Hampta Pass, Pin Parvati, or Triund trail through alpine meadows, glacial moraines, and rhododendron forests at altitudes up to 5,300 meters.",
        iconName: "Dumbbell",
      },
      {
        title: "Skiing in Solang & Kufri",
        description:
          "Hit the slopes from December to February in Solang Valley or Kufri, where fresh Himalayan powder and affordable ski schools attract beginners and intermediates.",
        iconName: "Globe",
      },
      {
        title: "Tibetan Buddhist Immersion",
        description:
          "Meditate with monks in McLeodganj, spin prayer wheels at Key Monastery, and attend teachings by the Dalai Lama during public audiences.",
        iconName: "BookOpen",
      },
      {
        title: "River Rafting on the Beas",
        description:
          "Navigate Grade II–IV rapids on the Beas River near Kullu, paddling through gorges flanked by towering deodar forests.",
        iconName: "Waves",
      },
      {
        title: "Heritage Railway Journeys",
        description:
          "Ride the UNESCO-listed Kalka-Shimla toy train through 102 tunnels, savoring colonial-era engineering and panoramic mountain vistas.",
        iconName: "Car",
      },
    ],
    travelTips: [
      "Acute Mountain Sickness (AMS) is a real risk above 3,500 meters in Spiti — acclimatize for at least one day in Manali and carry Diamox as a precaution.",
      "Roads to Spiti via Kunzum Pass are only open June–October; the Shimla–Kinnaur route stays open year-round but is slower.",
      "Pack layers regardless of season — temperatures can swing 20°C between sunny afternoons and evening shade in the mountains.",
      "Inner Line Permits are required for Spiti Valley; obtain them free at the SDM office in Kaza or Reckong Peo.",
      "Carry cash — ATMs are scarce beyond Manali, and Spiti has almost no card or UPI acceptance.",
      "Hire local drivers for mountain roads; hairpin turns above sheer drops require experienced hands, especially during monsoon.",
      "Respect monastery etiquette — walk clockwise around stupas, remove shoes, and ask before photographing murals or monks.",
    ],
    gallery: [
      "/images/dest-8.jpg",
      "/images/banner-2.jpg",
      "/images/tour-4.jpg",
      "/images/explor-4.jpg",
      "/images/about-6.jpg",
    ],
  },

  goa: {
    slug: "goa",
    name: "Goa",
    country: "India",
    region: "South Asia",
    tagline: "Golden sands, barefoot nights, and the spirit of Susegad",
    heroImage: "/images/dest-9.jpg",
    overview:
      "Goa is India's smallest state but its largest mood — a 100-kilometer ribbon of golden coastline where Portuguese cathedrals stand beside Hindu temples, shack bars serve kingfish recheado with cold Kingfisher beers, and the philosophy of susegad (a Konkani term for contented laziness) permeates every sunset hour. The north beaches — Anjuna, Vagator, Calangute — throb with electronic music, flea markets, and backpacker energy, while the south — Palolem, Agonda, Cola — offers crescent coves lapped by gentle waves and framed by coconut palms.\n\nBeyond the beach, Old Goa is a UNESCO World Heritage site where the Basilica of Bom Jesus houses the 450-year-old remains of St. Francis Xavier in a silver casket. The Latin Quarter of Fontainhas in Panjim is a pastel maze of Indo-Portuguese mansions, azulejo-tiled walls, and family-run tavernas serving prawn balchão and bebinca — a layered coconut cake that takes hours to bake. Dudhsagar Falls, a four-tiered cascade plunging 310 meters through the Western Ghats, is Goa's best-kept inland secret.\n\nWhether you come for the legendary New Year's Eve parties at Curlies or the meditative quiet of a yoga shala in Assagao, Goa meets you exactly where you are — with a cold feni in hand and sand between your toes.",
    quickFacts: {
      capital: "Panaji (Panjim)",
      currency: "Indian Rupee (₹)",
      climate: "Tropical monsoon with a long dry season",
      bestSeason: "November–February (dry, warm, peak festival season)",
      languages: "Konkani, Marathi, English, Portuguese (heritage)",
      timeZone: "IST (UTC+5:30)",
      drivingSide: "Left",
    },
    itinerary: [
      {
        day: 1,
        title: "Old Goa & Fontainhas Heritage Walk",
        location: "Panjim & Old Goa",
        description:
          "Start at the Basilica of Bom Jesus, where St. Francis Xavier's relics have drawn pilgrims since 1605. Cross to the Se Cathedral — Asia's largest church — then drive to Panjim's Fontainhas quarter for a walking tour past azulejo-tiled mansions, ending with a cold feni cocktail at a rooftop bar overlooking the Mandovi River.",
        highlights: [
          "Visit the Basilica of Bom Jesus and its gilded baroque altar",
          "Explore Se Cathedral, the largest church in Asia",
          "Wander Fontainhas' pastel-painted Portuguese-era lanes",
          "Sip cashew feni at a Mandovi River sunset bar",
        ],
        image: "/images/city-5.jpg",
      },
      {
        day: 2,
        title: "North Goa Beach Crawl",
        location: "Anjuna, Vagator & Baga, Goa",
        description:
          "Rent a scooter and cruise through North Goa's iconic beach strip. Browse the Wednesday Anjuna Flea Market for silver jewelry and tie-dye, climb to the Chapora Fort for a panoramic view over Vagator's red cliffs, and end the day at Baga's Tito's Lane — Goa's most famous nightlife strip.",
        highlights: [
          "Haggle at the Anjuna Wednesday Flea Market",
          "Watch sunset from Chapora Fort (the 'Dil Chahta Hai' fort)",
          "Swim in Vagator's cove beneath dramatic red laterite cliffs",
          "Dance at Tito's or Club Cubana in Baga",
        ],
        image: "/images/trand-1.jpg",
      },
      {
        day: 3,
        title: "South Goa's Serene Crescents",
        location: "Palolem & Agonda, Goa",
        description:
          "Escape to Palolem's perfect crescent bay, where colorful wooden huts line the shore and silent kayakers paddle to Butterfly Island. Walk south to Cola Beach — accessible only by a steep jungle path — and float in its freshwater lagoon just meters from the sea.",
        highlights: [
          "Kayak from Palolem to Butterfly Island at dawn",
          "Discover the hidden Cola Beach freshwater lagoon",
          "Try Goan fish thali at a Palolem beach shack",
          "Join a silent noise headphone party on Palolem sands",
        ],
        image: "/images/offer-2.jpg",
      },
      {
        day: 4,
        title: "Dudhsagar Falls & Spice Farm",
        location: "Mollem, Goa",
        description:
          "Jeep through the Bhagwan Mahaveer Sanctuary to Dudhsagar Falls — the 'Sea of Milk' — a 310-meter cascade that thunders through jungle mist during and after monsoon. On the return, stop at Sahakari Spice Farm for a traditional Goan lunch served on banana leaves, surrounded by nutmeg, cinnamon, and vanilla vines.",
        highlights: [
          "Wade in the natural pool beneath Dudhsagar's four tiers",
          "Spot Malabar giant squirrels in the sanctuary forest",
          "Feast on a 12-dish Goan banana-leaf lunch at a spice farm",
          "Learn about cashew, betel nut, and vanilla cultivation",
        ],
        image: "/images/explor-5.jpg",
      },
      {
        day: 5,
        title: "Assagao Yoga & Farewell Feast",
        location: "Assagao & Candolim, Goa",
        description:
          "Begin with a sunrise yoga session in Assagao, Goa's wellness village, where century-old Portuguese villas have become boutique retreats. Brunch at Gunpowder — famous for its Kerala-Goan fusion — then spend the afternoon at Sinquerim Fort before a farewell seafood feast at Fisherman's Wharf as the Arabian Sea turns gold.",
        highlights: [
          "Practice sunrise yoga in a heritage Assagao villa",
          "Brunch on Malabar prawn curry at Gunpowder",
          "Explore the 17th-century Aguada Fort and lighthouse",
          "Feast on tiger prawns and Goan sausage at Fisherman's Wharf",
        ],
        image: "/images/about-7.jpg",
      },
    ],
    thingsToDo: [
      {
        title: "Beach Hopping by Scooter",
        description:
          "Rent a scooter for ₹300/day and cruise from Arambol's drum circles to Palolem's crescent — Goa's coastline rewards spontaneous detours.",
        iconName: "Car",
      },
      {
        title: "Portuguese Heritage Trail",
        description:
          "Walk through 450 years of colonial history at Old Goa's basilicas, Fontainhas' pastel mansions, and Chandor's Braganza House.",
        iconName: "Landmark",
      },
      {
        title: "Nightlife & Music Scene",
        description:
          "From Anjuna's psytrance to Panjim's jazz bars and Baga's club strip, Goa's after-dark scene is India's most diverse and legendary.",
        iconName: "Lightbulb",
      },
      {
        title: "Goan Culinary Trail",
        description:
          "Taste vindaloo at its birthplace, crack into crab xec xec, and sample bebinca — Goa's iconic 16-layer coconut dessert — at family tavernas.",
        iconName: "Utensils",
      },
      {
        title: "Water Sports & Diving",
        description:
          "Dive at Grande Island to see shipwrecks and coral, or try jet-skiing, parasailing, and wakeboarding off Calangute and Baga beaches.",
        iconName: "Waves",
      },
      {
        title: "Wellness & Yoga Retreats",
        description:
          "Join multi-day yoga teacher trainings in Assagao or drop into oceanfront meditation sessions at Arambol and Morjim.",
        iconName: "Heart",
      },
    ],
    travelTips: [
      "Rent a scooter (₹300–500/day) — it's the most practical way to navigate Goa's narrow laterite lanes and beach-hop freely.",
      "Carry an international driving permit if you're a foreign national; Goa police conduct checks on tourists during peak season.",
      "Monsoon (June–September) shuts most beach shacks but opens Dudhsagar Falls at full power — it's the best time for inland Goa.",
      "Negotiate taxi fares before getting in — Goa taxis don't use meters, and rates are roughly ₹20/km.",
      "Sundays are sacred — many local restaurants and shops close, so stock up on Saturday or eat at beach shacks.",
      "Beware of riptides at Morjim and Arambol; swim where local lifeguards are posted and heed red flag warnings.",
      "Try local cashew feni responsibly — it's stronger than it tastes, and authentic single-distilled feni is smoother than the commercial variety.",
    ],
    gallery: [
      "/images/dest-9.jpg",
      "/images/trand-2.jpg",
      "/images/blog-1.jpg",
      "/images/tour-5.jpg",
      "/images/offer-3.jpg",
    ],
  },

  rishikesh: {
    slug: "rishikesh",
    name: "Rishikesh",
    country: "India",
    region: "South Asia",
    tagline: "The yoga capital of the world, where the Ganges flows and the soul breathes",
    heroImage: "/images/dest-10.jpg",
    overview:
      "Rishikesh sits at the point where the Ganges tumbles out of the Himalayas and enters the plains — a geographic and spiritual threshold that has drawn seekers for millennia. The Beatles came here in 1968 to study Transcendental Meditation with Maharishi Mahesh Yogi, and the now-restored Beatles Ashram (Chaurasi Kutia) still echoes with psychedelic graffiti and creative energy. Today, the town is a global magnet for yoga practitioners, with hundreds of ashrams offering everything from dawn pranayama on the riverbank to month-long Ashtanga immersions.\n\nBut Rishikesh is far more than meditation cushions and mantra chanting. The Ganges here runs fast and cold — perfect for Grade III–IV white-water rafting through rapids named 'The Wall,' 'Golf Course,' and 'Roller Coaster.' Bungee jumps from a 83-meter cliff platform, the highest in India, draw adrenaline junkies between yoga sessions. The Ram Jhula and Lakshman Jhula suspension bridges connect temples, cafés, and ashrams on both banks, swaying gently as sadhus and backpackers cross in equal measure.\n\nEach evening, the Triveni Ghat Ganga Aarti transforms the riverfront into a spectacle of fire, chanting, and floating marigold diyas. The vegetarian food scene is exceptional — organic cafés serve wood-fired pizza alongside thali plates, and the German Bakery has been fueling travelers with banana pancakes since the 1970s.",
    quickFacts: {
      currency: "Indian Rupee (₹)",
      climate: "Subtropical with cool winters and warm, humid summers",
      bestSeason: "September–November & February–May (comfortable, clear skies)",
      languages: "Hindi, English",
      timeZone: "IST (UTC+5:30)",
      drivingSide: "Left",
    },
    itinerary: [
      {
        day: 1,
        title: "Ashrams & the Beatles Legacy",
        location: "Rishikesh, Uttarakhand",
        description:
          "Begin at the Beatles Ashram (Chaurasi Kutia), wandering through meditation cells adorned with psychedelic murals. Cross the Lakshman Jhula bridge to Swarg Ashram, browse spiritual bookshops, and attend your first yoga class at Parmarth Niketan — one of the largest ashrams on the Ganges.",
        highlights: [
          "Explore the restored Beatles Ashram and its graffiti-covered domes",
          "Walk across the iconic Lakshman Jhula suspension bridge",
          "Join an evening yoga session at Parmarth Niketan",
          "Shop for rudraksha malas and Ayurvedic oils in Swarg Ashram",
        ],
        image: "/images/dest-11.jpg",
      },
      {
        day: 2,
        title: "White-Water Rafting the Ganges",
        location: "Shivpuri to Rishikesh stretch",
        description:
          "Launch from Shivpuri for a 16-kilometer white-water rafting run through rapids with names like 'Three Blind Mice' and 'The Wall.' Between rapids, cliff-jump into deep emerald pools and float on your back watching eagles circle above the forested gorge.",
        highlights: [
          "Raft Grade III–IV rapids on the sacred Ganges",
          "Cliff-jump into deep river pools between rapids",
          "Spot kingfishers and white-capped river chats along the banks",
          "Enjoy a riverside maggi and chai at the take-out point",
        ],
        image: "/images/tour-6.jpg",
      },
      {
        day: 3,
        title: "Adrenaline Day — Bungee & Beyond",
        location: "Mohan Chatti, near Rishikesh",
        description:
          "Head to Jumpin Heights for India's highest bungee jump — an 83-meter freefall over a rocky gorge. Follow it with the giant swing and flying fox across the valley. Return to town for a restorative deep-tissue Ayurvedic massage at an ashram spa.",
        highlights: [
          "Bungee jump from 83 meters at Jumpin Heights",
          "Swing on India's highest giant swing (83m arc)",
          "Ride the 1-km flying fox zip-line across the gorge",
          "Recover with an Ayurvedic Abhyanga massage at dusk",
        ],
        image: "/images/banner-3.jpg",
      },
      {
        day: 4,
        title: "Ganga Aarti & Spiritual Immersion",
        location: "Triveni Ghat, Rishikesh",
        description:
          "Spend the morning in a silent Vipassana meditation session, then visit the Neelkanth Mahadev Temple — a 1,330-meter hilltop shrine dedicated to Shiva. Return for the magnificent Triveni Ghat Ganga Aarti at sunset, where priests circle flaming brass lamps as thousands of marigold diyas float downstream.",
        highlights: [
          "Meditate in a guided Vipassana session at a riverside ashram",
          "Trek to Neelkanth Mahadev Temple through forest trails",
          "Witness the Triveni Ghat Ganga Aarti fire ceremony at sunset",
          "Float a marigold diya on the Ganges and make a wish",
        ],
        image: "/images/about-8.jpg",
      },
    ],
    thingsToDo: [
      {
        title: "Yoga & Meditation Retreats",
        description:
          "Train at internationally certified ashrams offering 200-hour and 500-hour yoga teacher training, or drop into daily classes at Parmarth Niketan and Sivananda Ashram.",
        iconName: "Heart",
      },
      {
        title: "White-Water Rafting",
        description:
          "Navigate 16–36 kilometers of Ganges rapids between Shivpuri and Rishikesh, suitable for beginners through experienced paddlers.",
        iconName: "Waves",
      },
      {
        title: "Bungee Jumping",
        description:
          "Leap from India's highest fixed-platform bungee at Jumpin Heights — 83 meters of pure freefall over a Himalayan gorge.",
        iconName: "Dumbbell",
      },
      {
        title: "Ganga Aarti Ceremony",
        description:
          "Join thousands at Triveni Ghat each evening for the fire-and-chant ceremony, one of India's most moving spiritual rituals.",
        iconName: "Landmark",
      },
      {
        title: "Café Culture & Organic Dining",
        description:
          "Rishikesh is entirely vegetarian — explore cafés serving Israeli shakshuka, Italian wood-fired pizza, and traditional thali alongside the Ganges.",
        iconName: "Utensils",
      },
      {
        title: "Waterfall Treks",
        description:
          "Hike to Neer Garh and Patna waterfalls through subtropical forest, swimming in natural rock pools surrounded by butterflies.",
        iconName: "Mountain",
      },
    ],
    travelTips: [
      "Rishikesh is entirely vegetarian and alcohol-free by law — don't expect meat or liquor anywhere in the town proper.",
      "Book yoga teacher training courses months in advance; reputable schools like Parmarth Niketan and Rishikul Yogshala fill up fast.",
      "The Ganges current is deceptively strong — never swim alone, and always check with locals about safe bathing spots.",
      "Rafting season runs September–June; operators shut down during monsoon (July–August) when water levels become dangerously high.",
      "Dress modestly in and around ashrams — sleeveless tops and shorts are frowned upon during ceremonies.",
      "Carry a headlamp — power cuts are common, especially during storms, and many ashram paths are unlit at night.",
    ],
    gallery: [
      "/images/dest-10.jpg",
      "/images/tour-7.jpg",
      "/images/banner-4.jpg",
      "/images/about-9.jpg",
      "/images/explor-6.jpg",
    ],
  },

  "andaman-islands": {
    slug: "andaman-islands",
    name: "Andaman Islands",
    country: "India",
    region: "South Asia",
    tagline: "Untouched emerald islands at the edge of the Bay of Bengal",
    heroImage: "/images/dest-12.jpg",
    overview:
      "The Andaman Islands are India's best-kept secret — a remote archipelago of 572 islands (only 37 inhabited) floating in the Bay of Bengal, closer to Myanmar than mainland India. Havelock Island (Swaraj Dweep) is home to Radhanagar Beach, repeatedly named Asia's finest, where white sand curves beneath a canopy of Mahua trees and bioluminescence lights the shallows on moonless nights. Beneath the surface, coral gardens at sites like Nemo Reef and Dixon's Pinnacle teem with manta rays, Napoleon wrasse, and schools of trevally.\n\nPort Blair anchors the archipelago's human history — the Cellular Jail here, where British colonialists imprisoned Indian freedom fighters in solitary cells, is now a national memorial whose nightly sound-and-light show is as haunting as it is essential. Ross Island's atmospheric ruins, slowly consumed by strangler figs and feral deer, evoke a colonial past surrendered to nature. Baratang Island's limestone caves, reached by boat through mangrove creeks, hide stalactite chambers that feel positively Jurassic.\n\nFor the intrepid, Neil Island (Shaheed Dweep) offers natural rock formations like the Howrah Bridge arch, empty beaches, and village cycling past papaya groves. The Andamans are not about luxury resorts — they're about stripping back to essentials: warm water, clean sand, fish grilled on the beach, and a sky unpolluted by artificial light.",
    quickFacts: {
      capital: "Port Blair",
      currency: "Indian Rupee (₹)",
      climate: "Tropical maritime with year-round warmth",
      bestSeason: "October–May (calm seas, clear visibility for diving)",
      languages: "Hindi, Bengali, Tamil, English",
      timeZone: "IST (UTC+5:30)",
      drivingSide: "Left",
    },
    itinerary: [
      {
        day: 1,
        title: "Port Blair & Cellular Jail",
        location: "Port Blair, Andaman Islands",
        description:
          "Arrive in Port Blair and visit the Cellular Jail, where each solitary cell tells the story of India's independence struggle. Walk the seven wings radiating from the central tower, then stay for the evening sound-and-light show that illuminates the prison walls with projected history.",
        highlights: [
          "Tour the Cellular Jail's seven wings and solitary cells",
          "Watch the haunting evening sound-and-light show",
          "Visit the Anthropological Museum to learn about the Jarawa and Sentinelese tribes",
          "Stroll the Aberdeen Bazaar for fresh coconut water and local crafts",
        ],
        image: "/images/city-6.jpg",
      },
      {
        day: 2,
        title: "Havelock Island & Radhanagar Beach",
        location: "Havelock Island (Swaraj Dweep)",
        description:
          "Ferry to Havelock Island and head straight for Radhanagar Beach — a 2-kilometer crescent of powdery white sand backed by primeval forest. The sunset here is legendary: the sky turns every shade of tangerine as the sea flattens into mercury. Snorkel at Elephant Beach to find Nemo among staghorn corals.",
        highlights: [
          "Swim at Radhanagar, Asia's most beautiful beach",
          "Snorkel with clownfish and parrotfish at Elephant Beach",
          "Walk through littoral forest to a hidden mangrove creek",
          "Dine on grilled lobster at a beachfront bamboo shack",
        ],
        image: "/images/dest-13.jpg",
      },
      {
        day: 3,
        title: "Scuba Diving at Nemo Reef",
        location: "Havelock Island, Andaman Islands",
        description:
          "Take a PADI-certified dive at Nemo Reef or Dixon's Pinnacle, where visibility often exceeds 30 meters. Encounter manta rays, sea turtles, and clouds of fusiliers drifting along coral walls. Non-divers can try a Discover Scuba session in the shallows with an instructor.",
        highlights: [
          "Dive Dixon's Pinnacle to spot reef sharks and giant groupers",
          "Swim alongside green sea turtles at Turtle Point",
          "Photograph vibrant soft corals and sea fans up close",
          "Complete a PADI Open Water certification in tropical waters",
        ],
        image: "/images/tour-8.jpg",
      },
      {
        day: 4,
        title: "Neil Island & Natural Wonders",
        location: "Neil Island (Shaheed Dweep)",
        description:
          "Ferry to Neil Island for a slower pace — cycle past papaya and banana plantations to the Howrah Bridge, a natural rock arch sculpted by tidal erosion. Laze at Laxmanpur Beach through sunset, when the reef flats are exposed and tide pools reveal starfish, sea cucumbers, and tiny octopuses.",
        highlights: [
          "Cycle the island's quiet lanes past tropical fruit farms",
          "Photograph the Howrah Bridge natural rock formation",
          "Explore tide pools teeming with marine life at Laxmanpur Beach",
          "Watch the galaxy rise over unpolluted Neil Island skies",
        ],
        image: "/images/blog-2.jpg",
      },
      {
        day: 5,
        title: "Ross Island & North Bay Coral",
        location: "Port Blair vicinity",
        description:
          "Take a morning boat to Ross Island, where British-era ruins — a church, bakery, commissariat — are being swallowed by banyan roots and patrolled by spotted deer. Then snorkel at North Bay Island's coral reef, one of the most accessible in the Andamans, before catching your return flight.",
        highlights: [
          "Wander Ross Island's atmospheric, vine-covered colonial ruins",
          "Spot deer and peacocks roaming freely among the ruins",
          "Snorkel the vibrant coral garden at North Bay Island",
          "Glass-bottom boat ride over coral for non-swimmers",
        ],
        image: "/images/breadcrumb-1.jpg",
      },
    ],
    thingsToDo: [
      {
        title: "Scuba Diving & Snorkeling",
        description:
          "Dive world-class sites like Dixon's Pinnacle, The Wall, and Nemo Reef with 30-meter visibility and encounters with manta rays and turtles.",
        iconName: "Waves",
      },
      {
        title: "Beach Exploration",
        description:
          "Discover pristine, uncrowded beaches — from Radhanagar's white sand to Kalapathar's rocky shores and the hidden coves of Long Island.",
        iconName: "Camera",
      },
      {
        title: "Colonial History Trail",
        description:
          "Walk through India's freedom struggle at the Cellular Jail, Ross Island ruins, and Viper Island's gallows.",
        iconName: "Landmark",
      },
      {
        title: "Kayaking Through Mangroves",
        description:
          "Paddle through bioluminescent mangrove creeks at night, where every stroke lights up the water like liquid starlight.",
        iconName: "Mountain",
      },
      {
        title: "Island Cycling",
        description:
          "Rent a bicycle on Neil Island and pedal through papaya groves, fishing villages, and empty beaches at your own pace.",
        iconName: "Car",
      },
      {
        title: "Seafood Feasting",
        description:
          "Feast on fresh-caught lobster, crab, and red snapper grilled on the beach with lime, chili, and garlic — as fresh as seafood gets.",
        iconName: "Utensils",
      },
    ],
    travelTips: [
      "Foreigners need a Restricted Area Permit (RAP) — it's issued free on arrival at Port Blair airport, valid for 30 days.",
      "Book inter-island ferries (Makruzz or Nautika) online well in advance; they sell out during peak season (December–January).",
      "There's no ATM on Neil Island and limited ATMs on Havelock — carry enough cash from Port Blair.",
      "Carry reef-safe sunscreen — the coral here is pristine and highly sensitive to chemical sunscreens.",
      "Visiting Jarawa tribal reserves is illegal and exploitative; avoid 'human safari' tours marketed in Port Blair.",
      "Mobile network coverage is patchy — BSNL has the best reach, but expect no signal on remote beaches.",
      "Pack a dry bag for ferry crossings; spray and occasional waves can soak unprotected luggage on open-deck boats.",
    ],
    gallery: [
      "/images/dest-12.jpg",
      "/images/dest-13.jpg",
      "/images/tour-8.jpg",
      "/images/blog-2.jpg",
      "/images/breadcrumb-1.jpg",
    ],
  },

  "male-atoll": {
    slug: "male-atoll",
    name: "Malé Atoll",
    country: "Maldives",
    region: "South Asia",
    tagline: "Where turquoise infinity meets the sky",
    heroImage: "/images/dest-14.jpg",
    overview:
      "The Malé Atoll — split into North and South — is the pulsing heart of the Maldives, an archipelago of 1,192 islands so flat that the highest natural point is barely 2 meters above sea level. This is the land of overwater villas with glass floors, house reefs where blacktip sharks patrol at arm's length, and sunsets that turn the Indian Ocean into liquid gold. North Malé hosts some of the world's most iconic resorts — Huvafen Fushi, One&Only Reethi Rah, Gili Lankanfushi — each on its own private island, accessible only by speedboat or seaplane.\n\nBeneath the surface, the atoll is a diver's paradise. Banana Reef, one of the first dive sites discovered in the Maldives, features overhangs dripping with soft coral and patrolled by Napoleon wrasse. Manta Point delivers reliable encounters with reef manta rays from May to November. The bioluminescent 'sea of stars' phenomenon on some beaches — caused by dinoflagellate plankton — turns the shore into a mirror of the Milky Way.\n\nMalé city itself is a fascinating counterpoint — one of the world's most densely populated islands, where fish markets overflow at dawn, the 17th-century Hukuru Miskiy mosque gleams with coral-stone carvings, and locals play cricket in every available gap between buildings. It's the gateway, the cultural anchor, and a reminder that the Maldives is a living nation, not just a resort catalog.",
    quickFacts: {
      capital: "Malé",
      currency: "Maldivian Rufiyaa (MVR) — US dollars widely accepted",
      climate: "Tropical with two monsoon seasons",
      bestSeason: "November–April (dry northeast monsoon, best visibility)",
      languages: "Dhivehi, English",
      timeZone: "MVT (UTC+5)",
    },
    itinerary: [
      {
        day: 1,
        title: "Malé City & Transfer to Resort",
        location: "Malé City & North Malé Atoll",
        description:
          "Explore Malé's compact intensity — the bustling fish market where yellowfin tuna are auctioned whole, the ornate Hukuru Miskiy (Old Friday Mosque) built from coral stone in 1658, and the colorful produce stalls of the local market. Then board a speedboat across turquoise shallows to your resort island.",
        highlights: [
          "Witness the dawn tuna auction at Malé Fish Market",
          "Visit the 17th-century Hukuru Miskiy coral-stone mosque",
          "Spot manta rays from the seaplane transfer window",
          "Check into an overwater villa with a glass-floor panel",
        ],
        image: "/images/dest-15.jpg",
      },
      {
        day: 2,
        title: "House Reef Snorkeling & Spa",
        location: "Resort Island, North Malé Atoll",
        description:
          "Step off your overwater deck directly into the house reef — no boat required. Swim alongside blacktip reef sharks, hawksbill turtles, and kaleidoscopic parrotfish in water so clear the sandy bottom glows 15 meters below. Afternoon: indulge in an underwater spa treatment at a glass-walled pavilion beneath the lagoon.",
        highlights: [
          "Snorkel the house reef directly from your villa steps",
          "Swim alongside blacktip reef sharks and eagle rays",
          "Experience a couples massage in an underwater spa pavilion",
          "Watch the sunset from an infinity pool that merges with the ocean",
        ],
        image: "/images/offer-4.jpg",
      },
      {
        day: 3,
        title: "Banana Reef & Manta Point Diving",
        location: "North Malé Atoll dive sites",
        description:
          "Dive Banana Reef — the Maldives' most famous site — where a curved reef wall drops into a canyon of soft coral, barrel sponges, and shoals of oriental sweetlips. In the afternoon, head to Manta Point for a cleaning station dive, hovering motionless as 4-meter reef mantas glide overhead.",
        highlights: [
          "Dive the legendary Banana Reef canyon and overhangs",
          "Encounter reef manta rays at a cleaning station",
          "Photograph Napoleon wrasse and moray eels at close range",
          "Night snorkel to witness bioluminescent plankton",
        ],
        image: "/images/tour-9.jpg",
      },
      {
        day: 4,
        title: "Sandbank Picnic & Dolphin Cruise",
        location: "North Malé Atoll",
        description:
          "Sail to a deserted sandbank — a pristine white tongue of sand surrounded by nothing but turquoise ocean — for a champagne picnic served by your resort chef. In the late afternoon, cruise the atoll's outer channels for spinner dolphins, which leap in synchronized arcs as the sun dips below the horizon.",
        highlights: [
          "Picnic on a private sandbank visible only at low tide",
          "Swim in impossibly clear water with no land in sight",
          "Watch pods of spinner dolphins leap at sunset",
          "Stargaze from the dhoni's upper deck on the return sail",
        ],
        image: "/images/breadcrumb-2.jpg",
      },
    ],
    thingsToDo: [
      {
        title: "Overwater Villa Living",
        description:
          "Wake above turquoise lagoons in a thatched-roof villa with a glass floor panel, private infinity pool, and direct reef access from your sundeck.",
        iconName: "Heart",
      },
      {
        title: "World-Class Diving",
        description:
          "Dive 50+ sites including Banana Reef, HP Reef, and Manta Point — encountering whale sharks, mantas, and coral cathedrals.",
        iconName: "Waves",
      },
      {
        title: "Sandbank Excursions",
        description:
          "Sail to vanishing sandbanks for private picnics, 360-degree ocean views, and snorkeling in gin-clear water.",
        iconName: "MapPin",
      },
      {
        title: "Dolphin & Whale Watching",
        description:
          "Cruise at sunset to spot spinner dolphins, bottlenose dolphins, and — from January to April — migrating blue whales in deep channels.",
        iconName: "Globe",
      },
      {
        title: "Underwater Dining",
        description:
          "Dine at an underwater restaurant surrounded by reef fish, or enjoy a private beach dinner with your feet in the sand and stars overhead.",
        iconName: "Utensils",
      },
      {
        title: "Bioluminescent Beach Walks",
        description:
          "On moonless nights, walk beaches lit by glowing phytoplankton — each footstep sparking blue-white light in the wet sand.",
        iconName: "Lightbulb",
      },
    ],
    travelTips: [
      "Resorts are on private islands — budget for speedboat or seaplane transfers (USD $300–600 round trip) on top of accommodation.",
      "The Maldives is a Muslim nation; alcohol is only available at resorts, not on inhabited local islands or in Malé.",
      "Bring reef-safe sunscreen — the Maldives' coral reefs are critically threatened and chemical sunscreens accelerate bleaching.",
      "For budget travel, stay on local islands like Maafushi or Thulusdhoo where guesthouses cost USD $50–100/night with beach access.",
      "Tipping is not mandatory but appreciated — USD $5–10/day for housekeeping and dive guides is standard at resorts.",
      "Pack light, quick-dry clothing — you'll live in swimwear and cover-ups, and laundry services at resorts are expensive.",
      "Visit between August and November for the best manta ray encounters at cleaning stations across the atoll.",
    ],
    gallery: [
      "/images/dest-14.jpg",
      "/images/dest-15.jpg",
      "/images/offer-4.jpg",
      "/images/breadcrumb-2.jpg",
      "/images/tour-9.jpg",
    ],
  },

  colombo: {
    slug: "colombo",
    name: "Colombo",
    country: "Sri Lanka",
    region: "South Asia",
    tagline: "A vibrant capital where colonial echoes meet curry-scented modernity",
    heroImage: "/images/dest-16.jpg",
    overview:
      "Colombo is Sri Lanka's beating, buzzing, horn-honking heart — a port city where Dutch-era warehouses now house craft cocktail bars, where Buddhist temples share blocks with Hindu kovils and colonial churches, and where the aroma of lamprais (rice baked in banana leaf with Dutch-Burgher spices) drifts through streets lined with Art Deco facades. The Pettah district is pure sensory overload — a labyrinth of wholesale markets selling everything from sari fabric to dried fish to mobile phone cases, all accompanied by a soundtrack of Bollywood hits and vendor calls.\n\nThe Galle Face Green promenade stretches along the Indian Ocean waterfront, where families fly kites at dusk and isso vadai (crispy prawn fritters) vendors work overtime. The Gangaramaya Temple — an eclectic fusion of Sri Lankan, Thai, Indian, and Chinese Buddhist architecture — houses a museum-like collection of gifts from devotees worldwide, from ivory tusks to vintage Rolls-Royces. Colombo's dining scene has exploded in recent years, with Ministry of Crab (in a 400-year-old Dutch hospital) serving Sri Lanka's legendary mud crabs, and rooftop bars in Fort district pouring arrack cocktails over sunset views.\n\nBeyond the city center, the Beira Lake offers kayaking past colonial-era islands, the National Museum guards a throne carved from a single block of ivory, and the Kelaniya Raja Maha Viharaya — just outside town — contains murals dating to the 2nd century BCE. Colombo isn't a city you fall in love with at first sight; it's one that reveals its charm layer by layer, curry by curry.",
    quickFacts: {
      capital: "Colombo (commercial) / Sri Jayawardenepura Kotte (legislative)",
      currency: "Sri Lankan Rupee (LKR)",
      climate: "Tropical with year-round warmth and two monsoon seasons",
      bestSeason: "December–March (driest period on the west coast)",
      languages: "Sinhala, Tamil, English",
      timeZone: "SLST (UTC+5:30)",
      drivingSide: "Left",
    },
    itinerary: [
      {
        day: 1,
        title: "Fort District & Galle Face",
        location: "Colombo Fort & Galle Face, Colombo",
        description:
          "Start in the Fort district, where the Old Colombo Lighthouse, Dutch-period Wolvendaal Church, and the grand Cargills & Millers building coexist with gleaming office towers. Walk to Galle Face Green for isso vadai and kottu roti from street vendors as the sun sets over the Indian Ocean.",
        highlights: [
          "Explore the Fort district's mix of colonial and modern architecture",
          "Eat isso vadai and kottu roti at Galle Face Green vendors",
          "Visit the Old Colombo Lighthouse and its ocean views",
          "Sip an arrack sour at a rooftop bar overlooking the harbor",
        ],
        image: "/images/city-1.jpg",
      },
      {
        day: 2,
        title: "Pettah Markets & Gangaramaya Temple",
        location: "Pettah & Slave Island, Colombo",
        description:
          "Plunge into Pettah's chaotic energy — each street specializes in different goods, from electronics on Main Street to spices on 5th Cross Street. Emerge to the serenity of Gangaramaya Temple, whose Seema Malaka meditation platform floats on Beira Lake surrounded by lotus blooms and Buddha statues.",
        highlights: [
          "Navigate Pettah's specialized market streets",
          "Visit Gangaramaya Temple's extraordinary eclectic museum",
          "Meditate at the floating Seema Malaka on Beira Lake",
          "Sample string hoppers and pol sambol at a traditional rice-and-curry lunch",
        ],
        image: "/images/about-1.jpg",
      },
      {
        day: 3,
        title: "Colombo's Culinary Trail",
        location: "Various neighborhoods, Colombo",
        description:
          "Embark on a food pilgrimage: hoppers and egg hoppers for breakfast at a Bambalapitiya café, lamprais from a Burgher family kitchen in Cinnamon Gardens, afternoon tea at the Mount Lavinia Hotel, and mud crab at the legendary Ministry of Crab inside a Dutch Hospital complex.",
        highlights: [
          "Crack into Sri Lanka's famous mud crab at Ministry of Crab",
          "Taste authentic lamprais wrapped in banana leaf",
          "Learn to make hoppers at a Colombo cooking class",
          "Enjoy high tea at the colonial Mount Lavinia Hotel",
        ],
        image: "/images/blog-3.jpg",
      },
      {
        day: 4,
        title: "Museums, Murals & Mount Lavinia",
        location: "Colombo & Mount Lavinia",
        description:
          "Visit the National Museum's ivory throne and ancient crown jewels, then drive to Kelaniya Raja Maha Viharaya for its 2nd-century murals depicting the Buddha's legendary visit to Sri Lanka. End the day at Mount Lavinia Beach, where the old governor's mansion is now a hotel with a terrace bar overlooking the surf.",
        highlights: [
          "View the Colombo National Museum's royal regalia and ivory throne",
          "Admire Kelaniya Temple's ancient murals and moonstone carvings",
          "Relax at Mount Lavinia Beach as fishing boats return at sunset",
          "Kayak across Beira Lake past the floating temple island",
        ],
        image: "/images/tour-10.jpg",
      },
    ],
    thingsToDo: [
      {
        title: "Street Food Safari",
        description:
          "Devour kottu roti, isso vadai, hoppers, and short eats from Galle Face Green vendors to Pettah's hole-in-the-wall eateries.",
        iconName: "Utensils",
      },
      {
        title: "Temple & Religious Trails",
        description:
          "Visit Gangaramaya's floating meditation platform, the Red Mosque, Wolvendaal Church, and the Sri Kailawasanathan Hindu Kovil — all within walking distance.",
        iconName: "Landmark",
      },
      {
        title: "Colonial Architecture Tour",
        description:
          "Walk through layers of Portuguese, Dutch, and British architecture in Fort, Pettah, and Cinnamon Gardens neighborhoods.",
        iconName: "Camera",
      },
      {
        title: "Craft Cocktail & Arrack Bars",
        description:
          "Colombo's bar scene celebrates Ceylon arrack — try creative cocktails at Smoke & Mirrors, The Verandah, and rooftop spots in Fort.",
        iconName: "Lightbulb",
      },
      {
        title: "Pettah Market Immersion",
        description:
          "Lose yourself in Colombo's oldest bazaar — a grid of streets specializing in textiles, spices, electronics, and gold jewelry.",
        iconName: "MapPin",
      },
    ],
    travelTips: [
      "Use the Colombo tuk-tuk app 'PickMe' for metered rides — it prevents overcharging and works like Uber for three-wheelers.",
      "Full-moon Poya days are public holidays — alcohol sales are banned island-wide and many shops close, but temples are beautifully lit.",
      "Dress conservatively at temples — cover shoulders and knees, remove shoes, and don't pose with your back to Buddha statues for photos.",
      "The Colombo Fort Railway Station connects to Kandy, Galle, and Ella — buy first-class observation car tickets in advance for scenic routes.",
      "Carry small denominations — street vendors and tuk-tuk drivers rarely have change for LKR 5,000 notes.",
      "Tap water is not safe to drink — stick to bottled or boiled water, and avoid ice at street stalls.",
    ],
    gallery: [
      "/images/dest-16.jpg",
      "/images/city-1.jpg",
      "/images/about-1.jpg",
      "/images/blog-3.jpg",
      "/images/tour-10.jpg",
    ],
  },




  "siem-reap": {
    slug: "siem-reap",
    name: "Siem Reap",
    country: "Cambodia",
    region: "Southeast Asia",
    tagline: "Gateway to the temples that time reclaimed from the jungle",
    heroImage: "/images/dest-4.jpg",
    overview:
      "Siem Reap exists because of Angkor — the vast temple complex built by the Khmer Empire between the 9th and 15th centuries, sprawling across 400 square kilometers of jungle and farmland north of town. Angkor Wat, the world's largest religious monument, needs no introduction: its five lotus-bud towers, 800 meters of bas-relief galleries depicting Hindu mythology, and the way its silhouette catches the first light of dawn have made it Cambodia's national symbol and a UNESCO World Heritage treasure.\n\nBut Angkor is far more than a single temple. Ta Prohm, left deliberately unrestored, is where silk-cotton trees have fused with 12th-century sandstone in a haunting embrace — Tomb Raider filmed here for good reason. Bayon's 216 serene stone faces gaze in every direction from a mountain of carved towers. Banteay Srei, 'Citadel of Women,' features the most intricate carvings in all of Khmer art — rose-pink sandstone devatas so delicately carved they seem to breathe.\n\nSiem Reap town has grown into a destination in its own right: Pub Street's neon strip gives way to hidden cocktail bars, the Phare Cambodian Circus performs breathtaking acrobatics with social-enterprise heart, and cooking classes teach the secrets of fish amok and Khmer red curry. The Tonlé Sap floating villages — entire communities on stilts above the great lake — offer a glimpse of a way of life that predates the temples themselves.",
    quickFacts: {
      currency: "US Dollar (widely used) & Cambodian Riel (KHR)",
      climate: "Tropical monsoon — hot and humid year-round",
      bestSeason: "November–March (cool, dry, lower humidity)",
      languages: "Khmer, English (tourist areas), French (heritage)",
      timeZone: "ICT (UTC+7)",
      drivingSide: "Right",
    },
    itinerary: [
      {
        day: 1,
        title: "Angkor Wat Sunrise & the Grand Circuit",
        location: "Angkor Archaeological Park",
        description:
          "Rise at 4:30 AM to watch the sun emerge behind Angkor Wat's five towers — a moment of pure, silent grandeur. Explore the temple's three levels and 800 meters of bas-relief galleries depicting the Churning of the Ocean of Milk. Continue to the Bayon, where 216 enigmatic stone faces smile from every angle.",
        highlights: [
          "Witness sunrise silhouette the five towers of Angkor Wat",
          "Walk the 800-meter bas-relief gallery of Hindu mythology",
          "Climb to Angkor Wat's third level for panoramic views",
          "Meet the 216 smiling stone faces of the Bayon temple",
        ],
        image: "/images/dest-5.jpg",
      },
      {
        day: 2,
        title: "Ta Prohm & Banteay Srei",
        location: "Angkor Archaeological Park",
        description:
          "Explore Ta Prohm, where centuries-old silk-cotton and strangler fig trees have merged with the temple's sandstone walls in a surreal fusion of nature and architecture. Drive to Banteay Srei — 'Citadel of Women' — for the most exquisitely carved bas-reliefs in all of Khmer art, their rose-pink sandstone glowing in afternoon light.",
        highlights: [
          "Photograph tree roots engulfing Ta Prohm's ancient doorways",
          "Marvel at Banteay Srei's impossibly detailed sandstone carvings",
          "Visit the Cambodia Landmine Museum on the road between sites",
          "Watch golden light illuminate Banteay Srei's devata figures",
        ],
        image: "/images/dest-6.jpg",
      },
      {
        day: 3,
        title: "Tonlé Sap Floating Village",
        location: "Tonlé Sap Lake, Siem Reap Province",
        description:
          "Boat through the Kompong Khleang or Kompong Phluk floating villages on Tonlé Sap — Southeast Asia's largest freshwater lake. Houses, schools, and shops stand on 10-meter stilts that disappear into the water during the wet season. Paddle through a flooded mangrove forest in a traditional wooden canoe.",
        highlights: [
          "Cruise through a floating village on Southeast Asia's largest lake",
          "Visit a stilted school and community center",
          "Paddle a wooden canoe through flooded mangrove forest",
          "Watch fishermen cast nets from traditional long-tail boats",
        ],
        image: "/images/tour-4.jpg",
      },
      {
        day: 4,
        title: "Phare Circus, Cooking Class & Pub Street",
        location: "Siem Reap Town",
        description:
          "Take a morning Khmer cooking class — shop at the Phsar Leu market for galangal, kaffir lime, and prahok (fermented fish paste), then cook fish amok in banana leaf cups. Evening: attend the Phare Cambodian Circus, where former street children perform breathtaking acrobatics, then wind down on Pub Street.",
        highlights: [
          "Cook fish amok and Khmer curry in a hands-on class",
          "Shop for ingredients at the bustling Phsar Leu market",
          "Watch Phare Cambodian Circus's stunning acrobatic show",
          "Sip a cocktail at Miss Wong or Asana Old Wooden House bar",
        ],
        image: "/images/blog-1.jpg",
      },
      {
        day: 5,
        title: "Angkor Thom & Preah Khan",
        location: "Angkor Archaeological Park",
        description:
          "Enter Angkor Thom through the South Gate — a causeway lined with 54 gods and 54 demons pulling a giant naga serpent. Explore the Terrace of the Elephants, the enigmatic Terrace of the Leper King, and the atmospheric Preah Khan — a sprawling temple-monastery where tree roots are beginning their slow reclamation.",
        highlights: [
          "Walk the South Gate causeway past gods and demons",
          "Photograph the Terrace of the Elephants' carved procession",
          "Explore Preah Khan's atmospheric, semi-ruined corridors",
          "Watch sunset from the top of Phnom Bakheng hill temple",
        ],
        image: "/images/breadcrumb-5.jpg",
      },
    ],
    thingsToDo: [
      {
        title: "Angkor Temple Exploration",
        description:
          "Spend multiple days exploring Angkor Wat, Bayon, Ta Prohm, Banteay Srei, and dozens more temples across the 400km² archaeological park.",
        iconName: "Landmark",
      },
      {
        title: "Phare Cambodian Circus",
        description:
          "Watch a social-enterprise circus where former street children perform acrobatics, theater, and dance telling Cambodian stories.",
        iconName: "Heart",
      },
      {
        title: "Tonlé Sap Lake Tours",
        description:
          "Visit floating and stilted villages on Southeast Asia's largest lake, where entire communities live, fish, and farm on water.",
        iconName: "Waves",
      },
      {
        title: "Khmer Cooking Classes",
        description:
          "Learn to make fish amok, Khmer red curry, and num banh chok (rice noodle soup) starting with a guided market tour.",
        iconName: "Utensils",
      },
      {
        title: "Sunrise Photography",
        description:
          "Capture Angkor Wat's iconic sunrise reflection in the northern moat pool — one of the world's most photographed moments.",
        iconName: "Camera",
      },
      {
        title: "Pub Street & Night Markets",
        description:
          "Explore Siem Reap's buzzing night scene — from $0.50 draft beers on Pub Street to artisan cocktails at hidden speakeasies.",
        iconName: "Lightbulb",
      },
    ],
    travelTips: [
      "Buy the 3-day Angkor Pass ($62) — it gives you enough time to explore the major temples without exhausting yourself in a single day.",
      "Hire a tuk-tuk driver for the full temple circuit — a good driver doubles as a guide, knows the best sunrise spots, and costs $15–20/day.",
      "Dress modestly at temples: shoulders and knees must be covered, and enforcement is strict at Angkor Wat's upper levels.",
      "Carry US dollars in small bills — Cambodia uses USD for most transactions, with riel used only for change under $1.",
      "Visit Ta Prohm early morning or late afternoon to avoid the tour bus crowds; midday is sweltering and packed.",
      "Support ethical tourism — avoid orphanage visits (many are scams) and choose community-based tours like Kompong Khleang.",
      "Drink at least 3 liters of water daily — temple exploring in 35°C heat causes rapid dehydration.",
    ],
    gallery: [
      "/images/dest-4.jpg",
      "/images/dest-5.jpg",
      "/images/dest-6.jpg",
      "/images/breadcrumb-5.jpg",
      "/images/blog-1.jpg",
    ],
  },

  "phnom-penh": {
    slug: "phnom-penh",
    name: "Phnom Penh",
    country: "Cambodia",
    region: "Southeast Asia",
    tagline: "A capital reborn — where golden spires rise above a resilient past",
    heroImage: "/images/dest-11.jpg",
    overview:
      "Phnom Penh is a city that has stared into the abyss and chosen to dance. The Royal Palace and Silver Pagoda — with its floor of 5,329 solid silver tiles — gleam beside the confluence of the Mekong and Tonlé Sap rivers, a site so sacred that the city's mythical founding involves a woman named Penh who discovered four Buddha statues washed downstream. The National Museum, a terracotta masterpiece of Khmer architecture, houses the world's finest collection of Angkorian sculpture.\n\nThe city's darkest chapter is preserved with brutal honesty at Tuol Sleng Genocide Museum (Security Prison S-21), where the Khmer Rouge tortured and killed an estimated 20,000 people between 1975 and 1979. The Killing Fields of Choeung Ek, 15 kilometers south, contain mass graves and a memorial stupa filled with skulls — a visit that is devastating, essential, and ultimately a testament to the Cambodian spirit of survival.\n\nModern Phnom Penh pulses with new energy. The riverside promenade (Sisowath Quay) fills each evening with joggers, street food vendors, and families. The Bassac Lane bar strip hums with craft cocktails and live jazz. Street 240 and the Russian Market overflow with silk scarves, pepper from Kampot, and painted Khmer puppets. The food scene blends Khmer tradition — fish amok, nom banh chok, prahok ktiss — with French-inflected patisseries and a growing specialty coffee culture. Phnom Penh asks you to witness pain and beauty in the same breath, and it does not apologize for either.",
    quickFacts: {
      capital: "Phnom Penh (national capital)",
      currency: "US Dollar (primary) & Cambodian Riel (KHR)",
      climate: "Tropical monsoon — hot year-round, wet May–October",
      bestSeason: "November–February (cool, dry, pleasant evenings)",
      languages: "Khmer, English, French (heritage)",
      timeZone: "ICT (UTC+7)",
      drivingSide: "Right",
    },
    itinerary: [
      {
        day: 1,
        title: "Royal Palace & National Museum",
        location: "Riverside, Phnom Penh",
        description:
          "Begin at the Royal Palace, where the Throne Hall's soaring Khmer roof and the Silver Pagoda's 5,329 silver floor tiles embody Cambodia's regal heritage. Cross to the National Museum — a red-sandstone courtyard masterpiece — to see Angkorian-era bronzes, stone lintels, and the iconic reclining Vishnu recovered from the Western Mebon temple.",
        highlights: [
          "Walk the Silver Pagoda's floor of 5,329 solid silver tiles",
          "Admire the Throne Hall's golden Khmer spire",
          "View the reclining Vishnu bronze at the National Museum",
          "Stroll the museum's peaceful lotus courtyard at golden hour",
        ],
        image: "/images/about-4.jpg",
      },
      {
        day: 2,
        title: "Tuol Sleng & The Killing Fields",
        location: "Tuol Sleng & Choeung Ek, Phnom Penh",
        description:
          "Visit Tuol Sleng Genocide Museum (S-21), a former high school converted into the Khmer Rouge's most notorious interrogation center. The audio guide — narrated by survivors — is essential. Continue to the Killing Fields of Choeung Ek, where a glass memorial stupa holds thousands of skulls excavated from mass graves.",
        highlights: [
          "Listen to survivor testimonies on the Tuol Sleng audio guide",
          "Stand before the memorial stupa of skulls at Choeung Ek",
          "Read the personal histories of victims and survivors",
          "Reflect at the Killing Fields' mass grave pits and memorial tree",
        ],
        image: "/images/dest-22.jpg",
      },
      {
        day: 3,
        title: "Markets, Street Food & Sunset Cruise",
        location: "Various, Phnom Penh",
        description:
          "Spend the morning at the Russian Market (Psar Toul Tom Poung) — a labyrinth of silk, silverwork, and kampot pepper. Sample num pang (Cambodian baguettes) and iced coffee at stalls outside, then take a sunset boat cruise on the Mekong at the Tonlé Sap confluence, watching the Royal Palace glow gold as evening falls.",
        highlights: [
          "Bargain for silk scarves and Kampot pepper at the Russian Market",
          "Eat num pang (Cambodian baguette sandwiches) from a street cart",
          "Cruise the Mekong-Tonlé Sap confluence at sunset",
          "Watch the Royal Palace and riverside light up from the water",
        ],
        image: "/images/offer-1.jpg",
      },
      {
        day: 4,
        title: "Bassac Lane, Wat Phnom & Departure",
        location: "Central Phnom Penh",
        description:
          "Climb the small hill of Wat Phnom — the temple that gave the city its name — where legend says Lady Penh enshrined four Buddha statues found floating in the Mekong. Explore the city's French colonial architecture along Norodom Boulevard, then spend the final evening on Bassac Lane, sampling craft cocktails and live music at Phnom Penh's trendiest bar strip.",
        highlights: [
          "Climb Wat Phnom, the city's founding temple on a wooded hill",
          "Walk Norodom Boulevard's French colonial facades",
          "Sip craft cocktails at Bassac Lane's intimate bars",
          "Try lok lak (pepper beef) at a traditional Khmer restaurant",
        ],
        image: "/images/city-5.jpg",
      },
    ],
    thingsToDo: [
      {
        title: "Genocide History & Remembrance",
        description:
          "Visit Tuol Sleng (S-21) and the Killing Fields to understand Cambodia's Khmer Rouge era — devastating but essential for any visitor.",
        iconName: "BookOpen",
      },
      {
        title: "Royal Palace & Silver Pagoda",
        description:
          "Tour Cambodia's royal residence and its Silver Pagoda, whose floor of 5,329 silver tiles and Emerald Buddha are national treasures.",
        iconName: "Landmark",
      },
      {
        title: "Riverside Sunset Cruises",
        description:
          "Cruise the confluence of the Mekong and Tonlé Sap rivers at golden hour, watching the Royal Palace glow against the darkening sky.",
        iconName: "Waves",
      },
      {
        title: "Market Adventures",
        description:
          "Navigate the Russian Market for silk and spices, the Central Market's Art Deco dome for gold jewelry, and street food stalls for num pang.",
        iconName: "MapPin",
      },
      {
        title: "Khmer Cuisine Trail",
        description:
          "Taste fish amok, prahok ktiss, kuy teav noodle soup, and fried tarantulas — Phnom Penh's food scene is adventurous and deeply flavorful.",
        iconName: "Utensils",
      },
      {
        title: "Bassac Lane Nightlife",
        description:
          "Phnom Penh's coolest bar strip serves craft cocktails, natural wines, and live jazz in a laneway of converted shophouses.",
        iconName: "Lightbulb",
      },
    ],
    travelTips: [
      "Allocate a full morning for Tuol Sleng and the Killing Fields — rushing diminishes the experience. Bring tissues and water.",
      "Tuk-tuks are the standard transport; agree on a price before departure ($2–4 for most trips within central Phnom Penh).",
      "The Royal Palace requires covered shoulders and knees — sarongs are available to rent at the entrance for those who forget.",
      "US dollars are used everywhere, but carry riel for change under $1; ATMs dispense both currencies.",
      "Avoid tap water and ice from street stalls; reputable restaurants and cafés use purified ice (cylindrical with a hole).",
      "The Sisowath Quay riverside area is pleasant for evening walks but be aware of bag-snatching — keep valuables secure.",
      "Phnom Penh's traffic is intense — never assume vehicles will stop at crossings; look, walk slowly, and make eye contact with drivers.",
    ],
    gallery: [
      "/images/dest-11.jpg",
      "/images/about-4.jpg",
      "/images/dest-22.jpg",
      "/images/offer-1.jpg",
      "/images/city-5.jpg",
    ],
  },
};
