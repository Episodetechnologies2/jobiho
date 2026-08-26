import type { DestinationPageData } from "./destinations";

export const americasDestinations: Record<string, DestinationPageData> = {
  "grand-canyon": {
    slug: "grand-canyon",
    name: "Grand Canyon",
    country: "United States",
    region: "Americas",
    tagline: "A mile-deep cathedral carved by time and the Colorado River",
    heroImage: "/images/dest-7.jpg",
    overview:
      "The Grand Canyon is not simply a geological formation — it is a 277-mile-long, mile-deep open book of Earth's history, exposing nearly two billion years of rock layers in ribbons of crimson, ochre, and violet. Standing at the South Rim at dawn, watching the first light ignite the Vishnu Basement Rocks far below, you realize that no photograph has ever done this place justice. The scale is incomprehensible; the silence, profound.\n\nThe Colorado River, barely visible as a jade thread from the rim, is the patient sculptor that carved this masterpiece over six million years. Hikers descending the Bright Angel Trail pass through climate zones equivalent to traveling from Mexico to Canada, encountering prickly pear cactus near the top and cottonwood groves at Phantom Ranch on the canyon floor. Rafters on multi-day river trips navigate legendary rapids like Lava Falls while camping on sandy beaches beneath billion-year-old walls.\n\nBeyond the well-trodden South Rim, the remote North Rim offers cooler temperatures and a fraction of the crowds, while the Havasupai Reservation guards the turquoise waterfalls of Havasu Creek — among the most breathtaking swimming holes on the planet. Whether you arrive by mule, helicopter, or on foot, the Grand Canyon humbles every visitor who peers over its edge.",
    quickFacts: {
      currency: "US Dollar ($)",
      climate: "Arid; rim temperatures 30–80°F, inner canyon up to 120°F in summer",
      bestSeason: "March–May & September–November for moderate rim temperatures",
      languages: "English",
      timeZone: "MST (UTC−7, no daylight saving)",
      drivingSide: "Right",
    },
    itinerary: [
      {
        day: 1,
        title: "South Rim Arrival & Sunset at Mather Point",
        location: "Grand Canyon Village, South Rim",
        description:
          "Arrive at Grand Canyon Village and check into the historic El Tovar Hotel, perched just twenty feet from the rim. Spend the afternoon walking the paved Rim Trail between Mather Point and Yavapai Geology Museum, where interpretive panels decode the rock layers visible across the chasm. As the sun sets, watch the canyon walls transform through every shade of red and gold.",
        highlights: [
          "First breathtaking view from Mather Point overlook",
          "Learn billion-year geology at Yavapai Geology Museum",
          "Walk the Rim Trail with unobstructed canyon views",
          "Sunset color show from Hopi Point",
        ],
        image: "/images/dest-8.jpg",
      },
      {
        day: 2,
        title: "Bright Angel Trail to Indian Garden",
        location: "Bright Angel Trail, Grand Canyon",
        description:
          "Lace up your boots for the iconic Bright Angel Trail, descending 3,000 feet through the Coconino Sandstone and Redwall Limestone to the shady oasis of Indian Garden. Rest beside the cottonwood trees and Garden Creek before the challenging ascent back to the rim. The trail switchbacks offer constantly shifting perspectives of the canyon's architecture.",
        highlights: [
          "Descend through layered geological epochs on the Bright Angel Trail",
          "Rest at the 1.5-Mile and 3-Mile Resthouses",
          "Reach the cottonwood oasis at Indian Garden",
          "Spot California condors soaring on thermal updrafts",
        ],
        image: "/images/tour-3.jpg",
      },
      {
        day: 3,
        title: "Desert View Drive & Watchtower",
        location: "Desert View, East Rim",
        description:
          "Drive the 25-mile Desert View Drive, stopping at overlooks like Grandview Point and Lipan Point where the Colorado River reveals its serpentine path. The drive culminates at the Desert View Watchtower, Mary Colter's 1932 masterpiece inspired by Ancestral Puebloan architecture, offering 360-degree panoramas that stretch into the Painted Desert and Navajo Nation.",
        highlights: [
          "Photograph the river from Lipan Point at sunrise",
          "Explore Mary Colter's Desert View Watchtower murals",
          "Visit Tusayan Museum's 800-year-old Puebloan ruins",
          "Panoramic views into the Painted Desert",
        ],
        image: "/images/dest-9.jpg",
      },
      {
        day: 4,
        title: "Havasu Falls & Havasupai Village",
        location: "Havasupai Reservation",
        description:
          "Embark on the unforgettable 10-mile hike into the Havasupai Reservation, descending through red-walled Hualapai Canyon to the village of Supai, then continuing to the otherworldly turquoise cascade of Havasu Falls. The calcium-carbonate-rich water creates vivid blue-green pools against rust-colored travertine, a scene that seems plucked from a tropical fantasy.",
        highlights: [
          "Hike through Hualapai Canyon's towering red walls",
          "Swim beneath the 100-foot Havasu Falls",
          "Explore the cascading terraces of Mooney Falls",
          "Camp beside the turquoise waters of Havasu Creek",
        ],
        image: "/images/explor-1.jpg",
      },
      {
        day: 5,
        title: "Colorado River Rafting",
        location: "Colorado River, Inner Gorge",
        description:
          "Experience the canyon from its deepest point on a guided raft trip through the Inner Gorge. Navigate exhilarating rapids while floating past polished Vishnu Schist walls that are 1.7 billion years old. Stop at hidden side canyons with crystal-clear streams and ancient granaries left by the Ancestral Puebloans.",
        highlights: [
          "Raft through Granite Rapids in the Inner Gorge",
          "Touch 1.7-billion-year-old Vishnu Schist walls",
          "Discover hidden side canyons and springs",
          "Beach lunch beneath towering canyon walls",
        ],
        image: "/images/tour-4.jpg",
      },
    ],
    thingsToDo: [
      {
        title: "Rim-to-Rim Hiking",
        description:
          "Tackle the legendary 21-mile rim-to-rim traverse from South Kaibab Trail to North Rim, descending through two billion years of geological history.",
        iconName: "Mountain",
      },
      {
        title: "Stargazing at the Dark Sky Park",
        description:
          "The Grand Canyon's International Dark Sky Park designation means the Milky Way blazes overhead with zero light pollution on clear nights.",
        iconName: "Globe",
      },
      {
        title: "Mule Rides to Phantom Ranch",
        description:
          "Follow the tradition of early canyon explorers aboard sure-footed mules descending to Phantom Ranch, the only lodge below the rim.",
        iconName: "MapPin",
      },
      {
        title: "Helicopter Tours",
        description:
          "Soar over the Dragon Corridor, the canyon's widest and deepest section, for an aerial perspective that reveals the full enormity of the gorge.",
        iconName: "Camera",
      },
      {
        title: "Native American Heritage",
        description:
          "Visit the Hopi House and attend ranger-led talks about the eleven tribes who have called the canyon home for millennia.",
        iconName: "BookOpen",
      },
      {
        title: "Skywalk at Grand Canyon West",
        description:
          "Step onto the glass-bottomed horseshoe bridge extending 70 feet over the canyon's edge on Hualapai tribal land for vertigo-inducing views.",
        iconName: "Landmark",
      },
    ],
    travelTips: [
      "Book Havasupai permits months in advance — they sell out within minutes of release each February.",
      "Carry at least one gallon of water per person per day when hiking below the rim; heat exhaustion is the leading cause of rescue calls.",
      "The North Rim is closed from mid-October to mid-May due to snow; plan South Rim visits year-round.",
      "Wear layered clothing — temperatures can differ by 25°F between the rim and the canyon floor.",
      "Free shuttle buses run along the South Rim; private vehicles are restricted on Hermit Road March through November.",
      "Thunderstorms are common July through September; avoid exposed overlooks during lightning.",
    ],
    gallery: [
      "/images/dest-7.jpg",
      "/images/dest-8.jpg",
      "/images/dest-9.jpg",
      "/images/explor-1.jpg",
      "/images/tour-3.jpg",
    ],
  },

  hawaii: {
    slug: "hawaii",
    name: "Hawaii",
    country: "United States",
    region: "Americas",
    tagline: "Where molten earth meets turquoise sea under the spirit of aloha",
    heroImage: "/images/dest-10.jpg",
    overview:
      "Hawaii is the most isolated archipelago on Earth, a chain of volcanic islands rising from the mid-Pacific where molten lava still pours into the ocean, creating new land in real time. From the snow-capped summit of Mauna Kea to the bioluminescent bays of the Big Island, from Maui's winding Road to Hana to Kauai's impossibly green Nā Pali Coast, each island offers a radically different landscape united by the warmth of aloha.\n\nBeneath the surface, Hawaii's coral reefs teem with spinner dolphins, green sea turtles, and humpback whales that migrate from Alaska each winter to calve in the warm Maui Channel. Snorkelers at Molokini Crater peer into 150-foot visibility while surfers at Pipeline on Oahu's North Shore ride some of the most powerful waves on the planet. The cultural heartbeat is equally vibrant — traditional hula isn't mere entertainment but a sacred storytelling art, and a plate of laulau pork steamed in taro leaves connects you to centuries of Polynesian culinary tradition.\n\nWhether you're watching sunrise above the clouds at Haleakalā, hiking to the hidden Hanakāpīʻai Falls on the Kalalau Trail, or simply swaying in a hammock as trade winds rustle through coconut palms, Hawaii offers a rare combination of raw natural power and profound tranquility.",
    quickFacts: {
      currency: "US Dollar ($)",
      climate: "Tropical, with dry and wet seasons; trade winds keep temperatures pleasant year-round",
      bestSeason: "April–June & September–November for fewer crowds and ideal weather",
      languages: "English, Hawaiian",
      timeZone: "HST (UTC−10)",
      drivingSide: "Right",
    },
    itinerary: [
      {
        day: 1,
        title: "Waikiki Beach & Diamond Head",
        location: "Honolulu, Oahu",
        description:
          "Begin on Oahu with a dawn hike up Diamond Head crater, where the 360-degree summit panorama sweeps from downtown Honolulu to the sapphire open Pacific. Descend to Waikiki Beach for an outrigger canoe surf lesson, then explore the moving exhibits at the Pearl Harbor National Memorial and the USS Arizona.",
        highlights: [
          "Summit Diamond Head for panoramic Honolulu views",
          "Take an outrigger canoe surfing lesson at Waikiki",
          "Pay respects at the USS Arizona Memorial",
          "Feast on garlic shrimp at a North Shore food truck",
        ],
        image: "/images/dest-11.jpg",
      },
      {
        day: 2,
        title: "North Shore Surf Culture",
        location: "North Shore, Oahu",
        description:
          "Drive to the legendary North Shore where winter swells produce 30-foot waves at Pipeline and Sunset Beach. Visit the Polynesian Cultural Center to experience authentic village demonstrations from across the Pacific Islands. End the day with shave ice at Matsumoto's in Haleiwa, a colorful surf town with galleries and boutiques.",
        highlights: [
          "Watch pro surfers at Banzai Pipeline",
          "Explore Polynesian Cultural Center's living villages",
          "Snorkel with sea turtles at Laniakea Beach",
          "Try rainbow shave ice at Matsumoto's in Haleiwa",
        ],
        image: "/images/tour-5.jpg",
      },
      {
        day: 3,
        title: "Haleakalā Sunrise & Road to Hana",
        location: "Maui",
        description:
          "Rise at 3 AM and drive to the 10,023-foot summit of Haleakalā to witness a sunrise that Mark Twain called 'the sublimest spectacle I ever witnessed.' After descending through the otherworldly crater landscape, begin the legendary Road to Hana with its 620 curves, 59 bridges, and countless waterfall stops including the twin cascades at Upper Waikani Falls.",
        highlights: [
          "Watch sunrise above the clouds at Haleakalā summit",
          "Drive the 620 curves of the Road to Hana",
          "Swim beneath Upper Waikani Falls",
          "Sample fresh banana bread at the Halfway to Hana stand",
        ],
        image: "/images/dest-12.jpg",
      },
      {
        day: 4,
        title: "Volcanoes National Park",
        location: "Big Island, Hawaii",
        description:
          "Fly to the Big Island and enter Hawaiʻi Volcanoes National Park, where Kīlauea — one of the world's most active volcanoes — continues to reshape the island. Walk through the Thurston Lava Tube, peer into the steaming Halemaʻumaʻu Crater at sunset when the glow of molten lava illuminates the sulfurous plume, and hike across the surreal Devastation Trail.",
        highlights: [
          "Peer into the glowing Halemaʻumaʻu Crater at dusk",
          "Walk through the ancient Thurston Lava Tube",
          "Hike the Devastation Trail across volcanic cinder fields",
          "Attend a ranger talk on Pele and Hawaiian volcanic mythology",
        ],
        image: "/images/explor-2.jpg",
      },
      {
        day: 5,
        title: "Nā Pali Coast by Catamaran",
        location: "Kauai",
        description:
          "Reach the Garden Isle of Kauai for a catamaran cruise along the Nā Pali Coast, where emerald cathedral cliffs plunge 4,000 feet into the cobalt Pacific. Dolphins bow-ride alongside the boat, spinner dolphins leap in synchronized arcs, and sea caves punctuate the fluted pali walls. Snorkel a pristine reef before returning to Hanalei Bay.",
        highlights: [
          "Cruise beneath the 4,000-foot Nā Pali sea cliffs",
          "Snorkel pristine reefs teeming with tropical fish",
          "Spot spinner dolphins and humpback whales (seasonal)",
          "Sunset on the golden crescent of Hanalei Bay",
        ],
        image: "/images/dest-13.jpg",
      },
    ],
    thingsToDo: [
      {
        title: "Snorkeling at Molokini Crater",
        description:
          "Float above vibrant coral gardens inside a half-submerged volcanic crater with visibility exceeding 150 feet.",
        iconName: "Waves",
      },
      {
        title: "Traditional Luau",
        description:
          "Experience an authentic Hawaiian feast with kālua pig unearthed from an underground imu oven, poi, and sacred hula performances.",
        iconName: "Utensils",
      },
      {
        title: "Kalalau Trail Hiking",
        description:
          "Trek the 11-mile cliffside trail along Kauai's Nā Pali Coast to the remote Kalalau Beach, accessible only by foot or boat.",
        iconName: "Mountain",
      },
      {
        title: "Stargazing on Mauna Kea",
        description:
          "Ascend to the 13,796-foot summit of Mauna Kea, home to the world's premier astronomical observatories, for unmatched stargazing.",
        iconName: "Globe",
      },
      {
        title: "Whale Watching",
        description:
          "From December to April, the Maui Channel fills with 10,000 humpback whales breaching, tail-slapping, and nursing calves.",
        iconName: "Camera",
      },
      {
        title: "Learn to Surf",
        description:
          "Catch your first wave at Waikiki, the birthplace of modern surfing where Duke Kahanamoku introduced the sport to the world.",
        iconName: "Dumbbell",
      },
    ],
    travelTips: [
      "Haleakalā sunrise reservations sell out 60 days in advance — book through recreation.gov immediately.",
      "Reef-safe sunscreen is required by law in Hawaii; products containing oxybenzone and octinoxate are banned.",
      "Respect kapu (forbidden) signs at sacred sites and heiau (temples); some areas are still used for ceremony.",
      "Rental cars on Maui and Kauai book out months ahead during peak season; reserve early.",
      "The Road to Hana is best driven starting before 7 AM to avoid congestion on the single-lane bridges.",
      "Altitude sickness can strike at Mauna Kea and Haleakalā; acclimatize and avoid if you have respiratory conditions.",
      "Jellyfish arrive on south-facing beaches 8–10 days after each full moon; check local advisories.",
    ],
    gallery: [
      "/images/dest-10.jpg",
      "/images/dest-11.jpg",
      "/images/dest-12.jpg",
      "/images/dest-13.jpg",
      "/images/explor-2.jpg",
    ],
  },

  yellowstone: {
    slug: "yellowstone",
    name: "Yellowstone",
    country: "United States",
    region: "Americas",
    tagline: "America's first national park — where the earth still breathes fire",
    heroImage: "/images/dest-14.jpg",
    overview:
      "Yellowstone is a land of primordial forces, a place where the thin crust of the Earth buckles and hisses over one of the planet's largest volcanic hotspots. The park contains more than half the world's active geysers — from the clockwork eruptions of Old Faithful to the rainbow-ringed Grand Prismatic Spring, whose thermophilic bacteria paint concentric bands of orange, yellow, and green around a scalding azure center. It is a landscape that feels less like a national park and more like another planet.\n\nBeyond the geothermal spectacle, Yellowstone shelters the greatest concentration of large mammals in the lower 48 states. Herds of bison lumber across the Lamar Valley at dawn, grizzly bears forage on cutthroat trout at LeHardy Rapids, and the reintroduced wolf packs of the Druid Peak area have become one of wildlife biology's greatest success stories. Elk bugle through misty September mornings, and bald eagles circle above the Yellowstone River's Grand Canyon.\n\nThe park's 2.2 million acres offer over 900 miles of hiking trails — from the boardwalks of Norris Geyser Basin to the backcountry solitude of the Thorofare region, the most remote spot in the contiguous United States, 30 miles from the nearest road. Whether you camp under the stars at Slough Creek or watch Old Faithful erupt against a sky full of stars, Yellowstone reminds you that wild America still exists.",
    quickFacts: {
      currency: "US Dollar ($)",
      climate: "Continental with harsh winters; summer highs 70–80°F, winter lows well below 0°F",
      bestSeason: "June–September for road access; January–March for snowcoach and wolf-watching",
      languages: "English",
      timeZone: "MST (UTC−7)",
      drivingSide: "Right",
    },
    itinerary: [
      {
        day: 1,
        title: "Old Faithful & Upper Geyser Basin",
        location: "Upper Geyser Basin, Yellowstone",
        description:
          "Arrive at the world's most famous geyser and time your visit for an eruption — Old Faithful shoots 3,700 to 8,400 gallons of boiling water up to 185 feet every 44 to 125 minutes. Walk the boardwalk loop past Morning Glory Pool, Doublet Pool, and the explosive Grand Geyser. The historic Old Faithful Inn, a log-and-stone masterpiece, is worth exploring even if you don't stay the night.",
        highlights: [
          "Watch Old Faithful erupt from the observation deck",
          "Peer into the deep blue Morning Glory Pool",
          "Explore the 1904 Old Faithful Inn lobby and fireplace",
          "Hike the Observation Point Trail for aerial geyser views",
        ],
        image: "/images/dest-14.jpg",
      },
      {
        day: 2,
        title: "Grand Prismatic Spring & Midway Geyser Basin",
        location: "Midway Geyser Basin, Yellowstone",
        description:
          "Hike the Fairy Falls Trail to the Grand Prismatic Overlook for a bird's-eye view of the park's largest hot spring — 370 feet across and ringed with psychedelic bands of thermophilic color. Descend to the boardwalk where steam billows off Excelsior Geyser Crater and the turquoise Turquoise Pool shimmers in the midday sun.",
        highlights: [
          "Overlook the Grand Prismatic Spring from the Fairy Falls Trail",
          "Walk the steaming Midway Geyser Basin boardwalk",
          "Photograph the vivid bacterial mats at close range",
          "Visit Firehole River swimming area for a warm-water dip",
        ],
        image: "/images/explor-3.jpg",
      },
      {
        day: 3,
        title: "Lamar Valley Wildlife Safari",
        location: "Lamar Valley, Yellowstone",
        description:
          "Rise before dawn and drive into the Lamar Valley, known as America's Serengeti. Set up spotting scopes alongside veteran wolf-watchers to observe the Junction Butte pack hunting elk across the frosted sagebrush. Bison herds stretch to the horizon, pronghorn sprint across the flats, and grizzly bears occasionally appear on distant hillsides.",
        highlights: [
          "Spot wolf packs through spotting scopes at dawn",
          "Watch bison herds cross the Lamar River",
          "Photograph pronghorn on the open sagebrush flats",
          "Visit the Lamar Buffalo Ranch for naturalist programs",
        ],
        image: "/images/tour-6.jpg",
      },
      {
        day: 4,
        title: "Grand Canyon of the Yellowstone",
        location: "Canyon Village, Yellowstone",
        description:
          "Stand at the brink of the Lower Falls as 63,500 gallons of water plunge 308 feet into the gold-and-rust-colored Grand Canyon of the Yellowstone. Hike Uncle Tom's Trail — 328 steel steps bolted into the canyon wall — for a spray-soaked vantage point. The canyon's yellow rhyolite walls inspired the park's name and glow like burnished copper at sunset.",
        highlights: [
          "View the 308-foot Lower Falls from Artist Point",
          "Descend Uncle Tom's Trail for a spray-level perspective",
          "Spot osprey nesting on canyon pinnacles",
          "Drive both North and South Rim roads for varied viewpoints",
        ],
        image: "/images/dest-15.jpg",
      },
      {
        day: 5,
        title: "Mammoth Hot Springs & Norris Geyser Basin",
        location: "Mammoth & Norris, Yellowstone",
        description:
          "Explore the surreal travertine terraces of Mammoth Hot Springs, where mineral-laden water sculpts white limestone formations that change shape daily. Continue south to Norris Geyser Basin, the hottest and most dynamic thermal area in the park, where Steamboat Geyser — the world's tallest active geyser — occasionally erupts over 300 feet.",
        highlights: [
          "Walk the boardwalk through Mammoth's travertine terraces",
          "Watch elk graze on the Mammoth parade ground",
          "Visit Norris Geyser Basin's Porcelain and Back Basins",
          "Hope for a rare Steamboat Geyser eruption",
        ],
        image: "/images/tour-7.jpg",
      },
    ],
    thingsToDo: [
      {
        title: "Wolf Watching",
        description:
          "Join rangers and biologists in the Lamar Valley for dawn wolf-watching sessions with professional-grade spotting scopes.",
        iconName: "Camera",
      },
      {
        title: "Fly Fishing",
        description:
          "Cast a line into the legendary Madison, Firehole, or Yellowstone rivers for native cutthroat trout amid steaming thermal features.",
        iconName: "Waves",
      },
      {
        title: "Backcountry Camping",
        description:
          "Secure a permit and hike into the Thorofare or Bechler regions for total solitude among hot springs and alpine meadows.",
        iconName: "Mountain",
      },
      {
        title: "Snowcoach Tours",
        description:
          "In winter, ride heated snowcoaches through a frost-encrusted wonderland where bison are frosted with rime ice and geysers steam dramatically.",
        iconName: "Car",
      },
      {
        title: "Ranger-Led Programs",
        description:
          "Attend free evening campfire talks and guided walks with Yellowstone's knowledgeable rangers on geology, ecology, and history.",
        iconName: "GraduationCap",
      },
      {
        title: "Photography Workshops",
        description:
          "Join Yellowstone Forever's multi-day photography courses to capture geysers, wildlife, and night skies with expert guidance.",
        iconName: "Lightbulb",
      },
    ],
    travelTips: [
      "Most park roads close from early November to mid-April; only the North Entrance via Gardiner, Montana stays open year-round.",
      "Always stay 100 yards from bears and wolves and 25 yards from bison and elk — more people are injured by bison than any other animal.",
      "Carry bear spray and know how to use it; grizzly encounters are a real possibility on backcountry trails.",
      "Book lodging inside the park 12–13 months in advance through Yellowstone National Park Lodges.",
      "Boardwalks near thermal features exist for your safety — the ground can be thin crust over boiling water.",
      "Gas stations inside the park are limited and expensive; fill up in gateway towns like West Yellowstone or Gardiner.",
      "Cell service is extremely limited; download offline maps and let someone know your itinerary.",
    ],
    gallery: [
      "/images/dest-14.jpg",
      "/images/dest-15.jpg",
      "/images/explor-3.jpg",
      "/images/tour-6.jpg",
      "/images/tour-7.jpg",
    ],
  },

  sedona: {
    slug: "sedona",
    name: "Sedona",
    country: "United States",
    region: "Americas",
    tagline: "Red rock cathedrals where desert silence meets spiritual renewal",
    heroImage: "/images/dest-16.jpg",
    overview:
      "Sedona rises from the high desert of central Arizona like a gallery of monumental sandstone sculpture — Cathedral Rock, Bell Rock, and the towering spires of Courthouse Butte glow in shades of vermillion that intensify at sunset until the entire landscape seems to pulse with inner fire. The Yavapai-Apache and Sinagua people have revered these formations for centuries, and today seekers from around the world come to experience the four famous energy vortexes said to radiate from the red earth.\n\nBeyond the mystique, Sedona is a genuine outdoor paradise. Over 200 miles of trails wind through red rock canyons, juniper forests, and creek-carved swimming holes. The West Fork of Oak Creek Trail leads hikers through a narrow canyon where autumn maples blaze against crimson cliffs, while the challenging Cathedral Rock scramble rewards with one of the most photographed vistas in the American Southwest. Mountain bikers find world-class singletrack, and Slide Rock State Park offers natural sandstone water slides.\n\nThe town itself blends luxury resorts, artist studios, and independent restaurants serving Southwestern fusion cuisine with the region's famed prickly pear and mesquite flavors. Stargazing here is spectacular — Sedona is an International Dark Sky Community — and the combination of natural beauty, spiritual tradition, and creative energy makes it unlike any other destination in the Americas.",
    quickFacts: {
      currency: "US Dollar ($)",
      climate: "Semi-arid with mild winters and warm summers; 300+ days of sunshine",
      bestSeason: "March–May & September–November for ideal hiking temperatures",
      languages: "English",
      timeZone: "MST (UTC−7, no daylight saving)",
      drivingSide: "Right",
    },
    itinerary: [
      {
        day: 1,
        title: "Cathedral Rock & Red Rock Crossing",
        location: "Cathedral Rock, Sedona",
        description:
          "Begin with the iconic Cathedral Rock Trail, a hands-and-feet scramble up smooth sandstone to a saddle between twin spires offering 360-degree red rock panoramas. Descend and wade across Oak Creek to Red Rock Crossing for the classic reflection photograph of Cathedral Rock mirrored in still water at golden hour.",
        highlights: [
          "Scramble to the saddle of Cathedral Rock",
          "Photograph Cathedral Rock reflected in Oak Creek",
          "Explore the creek-side picnic area at Red Rock Crossing",
          "Watch sunset paint the buttes in deepening reds",
        ],
        image: "/images/dest-16.jpg",
      },
      {
        day: 2,
        title: "Vortex Tour & Spiritual Exploration",
        location: "Bell Rock & Airport Mesa, Sedona",
        description:
          "Join a guided vortex tour visiting the four primary energy sites: Airport Mesa, Bell Rock, Cathedral Rock, and Boynton Canyon. Feel the subtle electromagnetic shifts that practitioners describe as spiraling energy. Many visitors meditate, practice yoga, or simply sit in silence. The afternoon is free for a crystal shop visit and an aura photography session in the Tlaquepaque Arts Village.",
        highlights: [
          "Meditate at the Airport Mesa vortex at sunrise",
          "Hike the Bell Rock Pathway feeling the upflow vortex energy",
          "Browse Tlaquepaque Arts & Shopping Village's galleries",
          "Experience an aura photography or sound healing session",
        ],
        image: "/images/about-5.jpg",
      },
      {
        day: 3,
        title: "West Fork Trail & Slide Rock",
        location: "Oak Creek Canyon, Sedona",
        description:
          "Drive the scenic Oak Creek Canyon highway to the West Fork Trail, a gentle 6.9-mile round-trip through a narrow slot canyon where the creek meanders between 200-foot sandstone walls draped in ferns and wild columbine. Afterward, cool off at Slide Rock State Park, where natural algae-slicked sandstone chutes create a wild waterslide into emerald pools.",
        highlights: [
          "Hike the serene West Fork of Oak Creek Trail",
          "Cross the creek 13 times through the narrows",
          "Slide down natural sandstone chutes at Slide Rock",
          "Picnic beneath towering red canyon walls",
        ],
        image: "/images/explor-4.jpg",
      },
      {
        day: 4,
        title: "Jeep Tour & Stargazing",
        location: "Broken Arrow Trail & Sedona",
        description:
          "Buckle in for a Pink Jeep Tour along the Broken Arrow Trail, bouncing over slickrock ledges and through washes as your guide explains the geology of the Schnebly Hill Formation. In the evening, join a professional astronomer for a stargazing session with high-powered telescopes — Sedona's dark skies reveal the Milky Way, planets, and distant galaxies with crystalline clarity.",
        highlights: [
          "Ride the iconic Pink Jeep over Broken Arrow slickrock",
          "See the Submarine Rock and Chicken Point formations",
          "Stargaze with telescopes under certified dark skies",
          "Spot the Milky Way and Andromeda Galaxy",
        ],
        image: "/images/about-6.jpg",
      },
    ],
    thingsToDo: [
      {
        title: "Vortex Meditation",
        description:
          "Sit in contemplation at one of Sedona's four famous energy vortexes, where many visitors report heightened awareness and emotional release.",
        iconName: "Heart",
      },
      {
        title: "Mountain Biking",
        description:
          "Ride world-class singletrack through red rock terrain on trails like Hiline, Hangover, and the flowy Slim Shady.",
        iconName: "Dumbbell",
      },
      {
        title: "Southwestern Cuisine",
        description:
          "Savor prickly pear margaritas, mesquite-grilled elk, and Navajo tacos at Sedona's acclaimed Southwestern fusion restaurants.",
        iconName: "Utensils",
      },
      {
        title: "Art Gallery Hopping",
        description:
          "Browse over 80 galleries in the Tlaquepaque and Gallery Row districts showcasing Southwestern painting, sculpture, and Native American jewelry.",
        iconName: "Camera",
      },
      {
        title: "Hot Air Balloon Rides",
        description:
          "Float silently above the red rock formations at sunrise with champagne toast upon landing in the desert.",
        iconName: "Globe",
      },
      {
        title: "Native Ruins at Palatki",
        description:
          "Visit the 800-year-old Sinagua cliff dwellings and rock art at Palatki Heritage Site hidden among red rock alcoves.",
        iconName: "Landmark",
      },
    ],
    travelTips: [
      "A Red Rock Pass ($5/day or $15/week) is required for parking at most trailheads; purchase at visitor centers or self-service kiosks.",
      "Summer temperatures regularly exceed 100°F — start hikes before 7 AM and carry extra water.",
      "The Cathedral Rock Trail involves steep scrambling on slickrock; wear grippy-soled shoes and avoid when wet.",
      "Book Pink Jeep Tours and helicopter rides at least two weeks in advance during peak season.",
      "Sedona's altitude (4,350 ft) can cause mild shortness of breath for visitors from sea level; hydrate well.",
      "Visit during the Sedona International Film Festival (February) or the Red Rocks Music Festival for bonus cultural experiences.",
    ],
    gallery: [
      "/images/dest-16.jpg",
      "/images/about-5.jpg",
      "/images/about-6.jpg",
      "/images/explor-4.jpg",
    ],
  },

  "chichen-itza": {
    slug: "chichen-itza",
    name: "Chichén Itzá",
    country: "Mexico",
    region: "Americas",
    tagline: "Where the feathered serpent descends at equinox — a New Wonder of the World",
    heroImage: "/images/dest-17.jpg",
    overview:
      "Chichén Itzá is the crown jewel of the ancient Maya world, a vast ceremonial city that flourished from the 7th to the 13th century in the limestone lowlands of Mexico's Yucatán Peninsula. At its center, El Castillo — the Pyramid of Kukulkán — rises 79 feet in nine terraced platforms, its 365 steps a stone calendar of breathtaking precision. Twice a year, at the spring and autumn equinoxes, the late afternoon sun casts a serpentine shadow down the northern staircase that appears to slither toward the carved stone serpent head at the base — a feat of astronomical architecture that still draws tens of thousands of awestruck visitors.\n\nBeyond El Castillo, the site unfolds across nearly five square miles of restored and unrestored structures. The Great Ball Court — the largest in Mesoamerica at 545 feet long — features acoustic properties so precise that a whisper at one end can be heard clearly at the other. The Sacred Cenote, a 200-foot-wide natural sinkhole, served as a place of offering where jade, gold, and ceramics were deposited to appease the rain god Chaak. The Observatory, known as El Caracol, contains window alignments that track Venus with extraordinary accuracy.\n\nA visit here is best paired with the nearby colonial city of Valladolid, the crystalline waters of Cenote Ik Kil, and the lesser-visited ruins of Ek' Balam, where you can still climb the Acropolis pyramid for sweeping jungle views.",
    quickFacts: {
      capital: "Mérida (Yucatán state capital)",
      currency: "Mexican Peso (MXN)",
      climate: "Hot and humid tropical; rainy season June–October",
      bestSeason: "November–March for cooler, drier weather; equinoxes (March 20 & September 22) for the serpent shadow",
      languages: "Spanish, Yucatec Maya",
      timeZone: "CST (UTC−6)",
      drivingSide: "Right",
    },
    itinerary: [
      {
        day: 1,
        title: "Chichén Itzá at Dawn",
        location: "Chichén Itzá Archaeological Zone",
        description:
          "Arrive at the gates before the 8 AM opening to experience the ruins in morning solitude before tour buses arrive from Cancún. Stand before El Castillo as the rising sun gilds its limestone surfaces, then explore the Platform of the Eagles, the Temple of the Warriors with its thousand columns, and the hypnotic acoustics of the Great Ball Court where hand-claps produce seven echoes.",
        highlights: [
          "Photograph El Castillo in golden morning light",
          "Test the seven-echo acoustics of the Great Ball Court",
          "Study the carved warrior columns at the Temple of Warriors",
          "Learn about the Sacred Cenote's ritual offerings",
        ],
        image: "/images/dest-17.jpg",
      },
      {
        day: 2,
        title: "Cenote Ik Kil & Valladolid",
        location: "Cenote Ik Kil & Valladolid, Yucatán",
        description:
          "Descend a carved staircase into Cenote Ik Kil, a stunning open-air cenote where vines cascade 85 feet from the jungle rim to jade-green waters. Swim in the sacred sinkhole once used by the Maya. Then continue to the pastel-colored colonial town of Valladolid to stroll the zócalo, visit the Convent of San Bernardino, and taste papadzules — egg-stuffed tortillas in pumpkin-seed sauce.",
        highlights: [
          "Swim in the vine-draped Cenote Ik Kil",
          "Stroll Valladolid's pastel colonial streets",
          "Visit the 16th-century Convent of San Bernardino",
          "Taste authentic papadzules and salbutes at the market",
        ],
        image: "/images/tour-8.jpg",
      },
      {
        day: 3,
        title: "Ek' Balam & Underground Cenotes",
        location: "Ek' Balam, Yucatán",
        description:
          "Drive to the lesser-known ruins of Ek' Balam, where the 100-foot Acropolis pyramid is still open for climbing. From the summit, the jungle canopy extends unbroken to the horizon. The site's elaborate stucco frieze of a monster mouth doorway is one of the finest surviving examples of Maya architectural sculpture. Cool off in the nearby Cenote X'canché, accessed by a forest path or bicycle.",
        highlights: [
          "Climb the Acropolis for panoramic jungle views",
          "Marvel at the intricate stucco monster-mouth frieze",
          "Swim in the secluded Cenote X'canché",
          "Cycle through the forest to reach hidden cenotes",
        ],
        image: "/images/explor-5.jpg",
      },
      {
        day: 4,
        title: "Mérida's Cultural Riches",
        location: "Mérida, Yucatán",
        description:
          "Explore the White City of Mérida, Yucatán's vibrant capital. Visit the Gran Museo del Mundo Maya to contextualize everything you've seen, wander the bustling Mercado Lucas de Gálvez for handwoven hammocks and chili-rubbed cochinita pibil, and catch a Jarana dance performance on the Plaza Grande. The Paseo de Montejo boulevard showcases grand Porfirian-era mansions.",
        highlights: [
          "Tour the Gran Museo del Mundo Maya's immersive exhibits",
          "Feast on cochinita pibil at Mercado Lucas de Gálvez",
          "Watch folk dancers perform Jarana on Plaza Grande",
          "Stroll the grand Paseo de Montejo boulevard",
        ],
        image: "/images/city-2.jpg",
      },
    ],
    thingsToDo: [
      {
        title: "Equinox Light Show",
        description:
          "Witness the feathered serpent shadow descend El Castillo's staircase during the spring or autumn equinox — an event 1,100 years in the making.",
        iconName: "Landmark",
      },
      {
        title: "Cenote Swimming",
        description:
          "Plunge into the Yucatán's network of thousands of cenotes — natural sinkholes filled with crystal-clear groundwater and stalactite formations.",
        iconName: "Waves",
      },
      {
        title: "Yucatecan Cooking Class",
        description:
          "Learn to prepare cochinita pibil, papadzules, and sopa de lima with local chefs using achiote, sour orange, and habanero.",
        iconName: "Utensils",
      },
      {
        title: "Light & Sound Show",
        description:
          "Return to Chichén Itzá after dark for the evening light and sound show that projects Maya cosmology onto El Castillo in vivid color.",
        iconName: "Lightbulb",
      },
      {
        title: "Birdwatching at Celestún",
        description:
          "Boat through the Ría Celestún biosphere reserve to see flocks of flamingos turning the estuary pink against mangrove-lined channels.",
        iconName: "Camera",
      },
      {
        title: "Maya Astronomical Heritage",
        description:
          "Tour El Caracol observatory with an archaeoastronomer guide to understand how the Maya tracked Venus, eclipses, and solstices.",
        iconName: "GraduationCap",
      },
    ],
    travelTips: [
      "Arrive at 8 AM sharp when the gates open to beat the midday tour-bus crowds from Cancún and Riviera Maya.",
      "Bring a hat, sunscreen, and at least 2 liters of water — the open site has almost no shade and temperatures easily reach 95°F.",
      "Equinox events (March 20 & September 22) attract 30,000+ visitors; book Valladolid or Pisté hotels months ahead.",
      "Climbing El Castillo has been prohibited since 2006 — enjoy it from the ground and climb Ek' Balam instead.",
      "Hire a local guide at the entrance for $50–80 USD; their knowledge of Maya history and astronomy transforms the visit.",
      "Combine with Cenote Ik Kil (5 minutes away) and Valladolid (40 minutes) for a full day.",
    ],
    gallery: [
      "/images/dest-17.jpg",
      "/images/tour-8.jpg",
      "/images/explor-5.jpg",
      "/images/city-2.jpg",
    ],
  },

  "mexico-city": {
    slug: "mexico-city",
    name: "Mexico City",
    country: "Mexico",
    region: "Americas",
    tagline: "An ancient Aztec capital reborn as a modern cultural powerhouse",
    heroImage: "/images/city-3.jpg",
    overview:
      "Mexico City is a metropolis of staggering depth — literally built atop the ruins of Tenochtitlán, the Aztec island capital that Hernán Cortés described as more magnificent than anything in Europe. Today, the Templo Mayor excavation in the Zócalo reveals the foundations of the great pyramid that once anchored the Aztec universe, while the Palacio Nacional's walls blaze with Diego Rivera's epic murals narrating Mexico's history from pre-Columbian creation myths to the Revolution.\n\nThe city's culinary scene has earned global recognition, from the avant-garde tasting menus of Pujol and Quintonil — both perennial fixtures on the World's 50 Best Restaurants list — to the street-corner taquerías where al pastor pork shaved from a vertical spit onto warm tortillas costs 15 pesos and rivals anything served on white tablecloths. Between meals, wander through the turquoise-walled Casa Azul where Frida Kahlo was born and died, float on a flower-decorated trajinera through the ancient Aztec canals of Xochimilco, or lose yourself in the Museo Nacional de Antropología, perhaps the finest archaeological museum in the Western Hemisphere.\n\nNeighborhoods tell individual stories: Roma Norte's tree-lined boulevards host hip cafés and bookshops; Coyoacán's cobblestone plazas feel like a colonial village; and Condesa's art deco architecture frames buzzing mezcalerías. Mexico City is not one city but dozens layered atop each other, each era leaving its mark on the next.",
    quickFacts: {
      capital: "Mexico City (national capital)",
      currency: "Mexican Peso (MXN)",
      climate: "Subtropical highland; mild year-round with rainy season June–October",
      bestSeason: "October–May for dry, clear skies and comfortable temperatures",
      languages: "Spanish, Nahuatl (indigenous communities)",
      timeZone: "CST (UTC−6)",
      drivingSide: "Right",
    },
    itinerary: [
      {
        day: 1,
        title: "Zócalo, Templo Mayor & Palacio Nacional",
        location: "Centro Histórico, Mexico City",
        description:
          "Begin at the vast Zócalo, one of the largest public squares in the world, flanked by the Metropolitan Cathedral and the Palacio Nacional. Step inside the palace to see Diego Rivera's breathtaking mural cycle, then walk next door to the Templo Mayor Museum where Aztec artifacts — including the massive Coyolxauhqui stone — are displayed exactly where they were unearthed.",
        highlights: [
          "Stand in the Zócalo, the heart of the Aztec and modern capital",
          "View Diego Rivera's epic murals in the Palacio Nacional",
          "Explore the Templo Mayor archaeological excavation",
          "Visit the Metropolitan Cathedral's tilting colonial grandeur",
        ],
        image: "/images/city-3.jpg",
      },
      {
        day: 2,
        title: "Museo Nacional de Antropología & Chapultepec",
        location: "Chapultepec, Mexico City",
        description:
          "Spend a full morning in the Museo Nacional de Antropología, where the Sun Stone, Aztec feathered headdress replica, and Maya jade death mask of Pakal are among thousands of treasures. Afterward, stroll through the centuries-old Bosque de Chapultepec, visit the hilltop Chapultepec Castle — the only royal castle in the Americas — and rent a paddleboat on the park's lake.",
        highlights: [
          "Marvel at the Aztec Sun Stone and Olmec colossal heads",
          "Tour Chapultepec Castle's imperial rooms and murals",
          "Stroll the ancient ahuehuete trees of Chapultepec Park",
          "Visit the Museo de Arte Moderno for Kahlo and Rivera works",
        ],
        image: "/images/tour-9.jpg",
      },
      {
        day: 3,
        title: "Coyoacán, Frida Kahlo & Xochimilco",
        location: "Coyoacán & Xochimilco, Mexico City",
        description:
          "Wander the cobblestone streets of Coyoacán to the Casa Azul, Frida Kahlo's vivid blue childhood home filled with her paintings, personal artifacts, and lush gardens. After lunch of tostadas at the Coyoacán market, head to Xochimilco to board a colorful trajinera gondola, drifting along pre-Hispanic canals while mariachi bands serenade from passing boats and vendors sell elotes and micheladas.",
        highlights: [
          "Tour the Casa Azul — Frida Kahlo's life and art",
          "Eat fresh tostadas at Coyoacán's market stalls",
          "Float the ancient canals of Xochimilco on a trajinera",
          "Be serenaded by passing mariachi boats",
        ],
        image: "/images/city-4.jpg",
      },
      {
        day: 4,
        title: "Roma Norte, Condesa & Mezcal Culture",
        location: "Roma Norte & Condesa, Mexico City",
        description:
          "Explore the hip, tree-canopied neighborhoods of Roma Norte and Condesa. Browse Roma's independent bookshops and street art, visit the Mercado Roma food hall for gourmet tacos and artisan mezcal, then walk the circular Parque México past art deco facades. End the evening at a mezcalería like Bósforo, sampling single-village mezcals from Oaxaca alongside sal de gusano and orange slices.",
        highlights: [
          "Walk Roma Norte's Álvaro Obregón boulevard",
          "Taste artisan mezcals at Mercado Roma and Bósforo",
          "Admire art deco architecture along Condesa's avenues",
          "Dine at one of the city's world-ranked restaurants",
        ],
        image: "/images/about-7.jpg",
      },
      {
        day: 5,
        title: "Teotihuacán — City of the Gods",
        location: "Teotihuacán, State of Mexico",
        description:
          "Drive 30 miles northeast to the awe-inspiring ruins of Teotihuacán, a city that once held 125,000 residents and rivaled Rome in size. Climb the Pyramid of the Sun — the third-largest pyramid in the world — for a commanding view down the two-mile Avenue of the Dead to the Pyramid of the Moon. Explore the Temple of the Feathered Serpent's carved facades and the vivid murals of the Tepantitla compound.",
        highlights: [
          "Climb the Pyramid of the Sun for panoramic views",
          "Walk the two-mile Avenue of the Dead",
          "Study carved serpent heads at the Feathered Serpent Temple",
          "View the Paradise of Tláloc murals at Tepantitla",
        ],
        image: "/images/dest-18.jpg",
      },
    ],
    thingsToDo: [
      {
        title: "Street Taco Crawl",
        description:
          "Follow the smoke to legendary taquerías — al pastor at El Huequito, suadero at Los Cocuyos, and barbacoa at the Saturday market in San Juan.",
        iconName: "Utensils",
      },
      {
        title: "Lucha Libre Wrestling",
        description:
          "Cheer the masked luchadores at Arena México on a Friday night for a quintessential CDMX experience of theatrics, acrobatics, and rowdy crowds.",
        iconName: "Dumbbell",
      },
      {
        title: "Muralism & Street Art",
        description:
          "Trace the legacy of Rivera, Orozco, and Siqueiros in public buildings, then explore the vibrant street art scene in Roma and Juárez neighborhoods.",
        iconName: "Camera",
      },
      {
        title: "Teotihuacán Hot Air Balloon",
        description:
          "Float above the Pyramids of the Sun and Moon at dawn in a hot air balloon, followed by a traditional breakfast with pulque.",
        iconName: "Globe",
      },
      {
        title: "Mezcal Tasting",
        description:
          "Attend guided mezcal tastings to learn about agave varieties, ancestral distillation, and the difference between espadín and tobalá.",
        iconName: "BookOpen",
      },
      {
        title: "Day of the Dead Celebrations",
        description:
          "Visit during late October and early November for the spectacular Día de los Muertos parades, altar installations, and cemetery vigils.",
        iconName: "Heart",
      },
    ],
    travelTips: [
      "The metro is extensive, safe during daytime, and costs 5 pesos — but avoid rush hours (7–9 AM, 6–8 PM) with luggage.",
      "Tap water is not potable; drink bottled or purified water, and be cautious with street-vendor ice.",
      "Mexico City sits at 7,350 feet — take it easy the first day to acclimate and avoid alcohol until adjusted.",
      "Use Uber or DiDi rather than hailing street taxis, especially at night, for safety and transparent pricing.",
      "Tipping 10–15% at restaurants is standard; at taquerías, a few pesos per taco is appreciated.",
      "Visit Teotihuacán on weekday mornings; weekends and holidays can attract 10,000+ visitors.",
      "Earthquake protocols are well-practiced — note your hotel's exit routes and the nearest assembly point.",
    ],
    gallery: [
      "/images/city-3.jpg",
      "/images/city-4.jpg",
      "/images/dest-18.jpg",
      "/images/tour-9.jpg",
      "/images/about-7.jpg",
    ],
  },

  cancun: {
    slug: "cancun",
    name: "Cancún",
    country: "Mexico",
    region: "Americas",
    tagline: "Caribbean turquoise meets ancient Maya along the Riviera Maya",
    heroImage: "/images/dest-19.jpg",
    overview:
      "Cancún sits at the northeastern tip of the Yucatán Peninsula where the Caribbean Sea glows in impossible shades of turquoise against powder-white sand. What began as a government-planned resort development in the 1970s has become Mexico's most-visited destination, but beneath the all-inclusive hotel strip lies a world of natural and archaeological wonders that most visitors barely scratch.\n\nThe Mesoamerican Barrier Reef — the second-largest coral reef system on Earth — begins just offshore, offering world-class diving at sites like the MUSA underwater sculpture museum, where over 500 life-sized statues rest on the seabed colonized by coral and sponges. Beyond the hotel zone, the cenote-riddled jungle conceals thousands of crystal-clear sinkholes connected by the world's longest underground river system, perfect for snorkeling and cave diving. The ruins of Tulum perch on a cliff above the sea, and the eco-archaeological park of Xcaret combines underground rivers with a Maya village and a spectacular evening show.\n\nThe real magic lies in the contrast: you can spend the morning diving a cenote 60 feet underground, the afternoon exploring a thousand-year-old pyramid, and the evening dining on ceviche as the Caribbean sun melts into the horizon. Cancún is the gateway, but the Riviera Maya is the destination.",
    quickFacts: {
      currency: "Mexican Peso (MXN)",
      climate: "Tropical with warm, humid weather year-round; hurricane season June–November",
      bestSeason: "December–April for dry weather and calm seas",
      languages: "Spanish, English widely spoken in tourist areas",
      timeZone: "EST (UTC−5)",
      drivingSide: "Right",
    },
    itinerary: [
      {
        day: 1,
        title: "Isla Mujeres & Caribbean Snorkeling",
        location: "Isla Mujeres, Quintana Roo",
        description:
          "Take the 20-minute ferry to Isla Mujeres, a laid-back island where golf carts replace cars and the northern beach, Playa Norte, consistently ranks among the world's best. Snorkel the MUSA underwater museum with its haunting submerged sculptures, then rent a golf cart to explore the island's southern cliffs, the tiny Mayan temple to Ixchel, and a fresh ceviche lunch at a beachfront palapa.",
        highlights: [
          "Snorkel the MUSA underwater sculpture museum",
          "Relax on the world-famous Playa Norte",
          "Golf-cart around the island's colorful streets",
          "Fresh ceviche lunch at a beachfront palapa restaurant",
        ],
        image: "/images/dest-19.jpg",
      },
      {
        day: 2,
        title: "Cenote Hopping & Underground Rivers",
        location: "Ruta de los Cenotes, Puerto Morelos",
        description:
          "Drive the Ruta de los Cenotes near Puerto Morelos, visiting a curated selection of the Yucatán's 6,000+ cenotes. Swim in the open-air Cenote Verde Lucero, rappel into the cavern-style Cenote Zapote where an ancient underwater bell-shaped formation defies belief, and float through a partially enclosed cenote illuminated by shafts of sunlight piercing through jungle canopy above.",
        highlights: [
          "Swim in the crystal-clear Cenote Verde Lucero",
          "Rappel into the cavern cenote Zapote",
          "Float through sunlit underground rivers",
          "Zipline over cenotes between jungle platforms",
        ],
        image: "/images/explor-6.jpg",
      },
      {
        day: 3,
        title: "Tulum Ruins & Beach",
        location: "Tulum, Quintana Roo",
        description:
          "Arrive early at the clifftop ruins of Tulum, the only major Maya city built directly on the Caribbean coast. The Castillo pyramid stands on a 40-foot bluff overlooking a postcard-perfect cove of turquoise water and white sand. After touring the ruins, descend the wooden staircase to the beach below for a swim with the ancient walls looming above.",
        highlights: [
          "Tour the clifftop Maya ruins overlooking the Caribbean",
          "Swim in the cove below the Tulum Castillo",
          "Photograph the iconic cliffside temple framed by palms",
          "Browse Tulum town's bohemian shops and restaurants",
        ],
        image: "/images/dest-20.jpg",
      },
      {
        day: 4,
        title: "Xcaret Eco-Archaeological Park",
        location: "Xcaret, Riviera Maya",
        description:
          "Spend a full day at Xcaret, where underground rivers flow through illuminated caverns, a coral reef aquarium teems with tropical fish, and a reconstructed Maya village brings ancient life into focus. The evening culminates in the spectacular México Espectacular show — a 300-performer production tracing the country's history from pre-Hispanic ceremonies to modern-day fiesta.",
        highlights: [
          "Float through Xcaret's underground rivers",
          "Snorkel the coral reef inlet aquarium",
          "Watch the 300-performer México Espectacular show",
          "See butterfly pavilion and jaguar sanctuary",
        ],
        image: "/images/tour-10.jpg",
      },
    ],
    thingsToDo: [
      {
        title: "Scuba Diving the Reef",
        description:
          "Dive the Mesoamerican Barrier Reef at sites like Manchones Reef, encountering nurse sharks, eagle rays, and sea turtles in warm, clear water.",
        iconName: "Waves",
      },
      {
        title: "Cenote Cave Diving",
        description:
          "Explore the world's longest underwater cave system — Sac Actun — with certified cave-diving guides through crystal-clear freshwater passages.",
        iconName: "Mountain",
      },
      {
        title: "Cochinita Pibil Feast",
        description:
          "Seek out traditional Yucatecan cochinita pibil — slow-roasted pork in banana leaves with pickled red onion and habanero — at Parque de las Palapas vendors.",
        iconName: "Utensils",
      },
      {
        title: "Whale Shark Swimming",
        description:
          "From June to September, swim alongside the world's largest fish — gentle whale sharks — that gather by the hundreds near Isla Holbox.",
        iconName: "Heart",
      },
      {
        title: "Nightlife at Coco Bongo",
        description:
          "Experience the legendary Coco Bongo club, a Cirque du Soleil–meets–nightclub spectacle with acrobats, confetti cannons, and non-stop energy.",
        iconName: "Landmark",
      },
    ],
    travelTips: [
      "Hurricane season runs June–November with peak risk in September and October; purchase travel insurance for these months.",
      "Avoid timeshare presentations aggressively pitched at the airport and hotel zone — they consume half your vacation day.",
      "Take ADO buses from the Cancún bus station for cheap, comfortable rides to Tulum ($8), Playa del Carmen ($4), and Chichén Itzá ($20).",
      "Negotiate taxi prices before entering the cab; alternatively use Uber, which operates in Cancún despite some taxi-union friction.",
      "Apply reef-safe sunscreen before cenote swims — chemical sunscreens are prohibited at most cenotes to protect the ecosystem.",
      "Visit Tulum ruins at 8 AM opening to avoid the midday heat and cruise-ship crowds.",
    ],
    gallery: [
      "/images/dest-19.jpg",
      "/images/dest-20.jpg",
      "/images/explor-6.jpg",
      "/images/tour-10.jpg",
    ],
  },

  tulum: {
    slug: "tulum",
    name: "Tulum",
    country: "Mexico",
    region: "Americas",
    tagline: "Cliffside Maya ruins and jungle ceremonies where the ancient world breathes",
    heroImage: "/images/dest-20.jpg",
    overview:
      "Tulum exists at a rare intersection of ancient history, natural beauty, and modern wellness culture. The clifftop Maya ruins — the only major pre-Columbian city built overlooking the sea — gaze eternally across the Caribbean from their limestone perch, while below, turquoise waves break against a crescent of white sand framed by coconut palms. It is one of the most photographed archaeological sites in the Americas, and despite its fame, the sight of El Castillo against that impossible blue still takes your breath away.\n\nBeyond the ruins, Tulum's jungle interior hides a labyrinth of cenotes — sacred sinkholes that the Maya considered portals to the underworld. Gran Cenote's crystalline waters reveal stalactites and freshwater turtles, while Cenote Calavera's three skull-like openings invite cliff jumps into emerald depths. The Sian Ka'an Biosphere Reserve, a UNESCO World Heritage Site stretching south of Tulum, protects 1.3 million acres of mangroves, marshes, and reef that harbor jaguars, manatees, and over 300 bird species.\n\nTulum has also become a center for wellness and ancestral healing practices. Temazcal sweat lodge ceremonies led by Maya shamans, cacao ceremonies connecting participants to the heart through sacred drink, and sound healing sessions in jungle palapas draw travelers seeking transformation. Whether you come for the archaeology, the ecology, or the inner journey, Tulum delivers an experience that lingers long after you leave.",
    quickFacts: {
      currency: "Mexican Peso (MXN)",
      climate: "Tropical; warm and humid year-round with a rainy season from June to October",
      bestSeason: "November–April for dry weather and comfortable temperatures",
      languages: "Spanish, English, Yucatec Maya",
      timeZone: "EST (UTC−5)",
      drivingSide: "Right",
    },
    itinerary: [
      {
        day: 1,
        title: "Tulum Ruins & Beach Cove",
        location: "Tulum Archaeological Zone",
        description:
          "Enter the walled city at opening time and explore the Temple of the Frescoes with its surviving Maya murals, the Temple of the Descending God with its upside-down carved figure, and El Castillo commanding its cliff. Then descend the wooden staircase to the idyllic beach cove for a swim beneath the ancient watchtower, feeling the salt breeze that Maya traders once navigated by.",
        highlights: [
          "Study surviving Maya murals at the Temple of the Frescoes",
          "Photograph El Castillo from the beach cove below",
          "Learn about Tulum's role as a Maya trading port",
          "Swim in the turquoise cove beneath the ruins",
        ],
        image: "/images/dest-20.jpg",
      },
      {
        day: 2,
        title: "Cenote Circuit — Gran Cenote, Calavera & Caracol",
        location: "Tulum Cenote Zone",
        description:
          "Spend the day hopping between Tulum's best cenotes. Begin at Gran Cenote, snorkeling among stalactites and freshwater turtles in crystalline water. Continue to Cenote Calavera for adrenaline cliff jumps through three skull-shaped openings, then end at Cenote Caracol, a quieter spiral-shaped pool hidden in the jungle where you'll likely have the water to yourself.",
        highlights: [
          "Snorkel among stalactites at Gran Cenote",
          "Cliff jump through Cenote Calavera's skull openings",
          "Discover the hidden spiral pool of Cenote Caracol",
          "Photograph jungle light filtering into cenote chambers",
        ],
        image: "/images/banner-1.jpg",
      },
      {
        day: 3,
        title: "Sian Ka'an Biosphere Reserve",
        location: "Sian Ka'an, Quintana Roo",
        description:
          "Enter the UNESCO-listed Sian Ka'an Biosphere on a guided boat tour through mangrove channels teeming with frigatebirds, crocodiles, and dolphins. Float the ancient Maya canal — hand-dug centuries ago — down a lazy river of crystal-clear water. The reserve protects one of the most biodiverse coastal ecosystems in the Caribbean, with pristine reef, seagrass beds, and nesting sea turtles.",
        highlights: [
          "Float the ancient Maya canal through the biosphere",
          "Spot crocodiles and dolphins in mangrove channels",
          "Snorkel pristine reef inside the protected reserve",
          "Birdwatch for roseate spoonbills and jabiru storks",
        ],
        image: "/images/banner-2.jpg",
      },
      {
        day: 4,
        title: "Temazcal Ceremony & Cacao Ritual",
        location: "Tulum Jungle Zone",
        description:
          "Participate in a traditional temazcal ceremony — a Maya sweat lodge guided by a shaman using copal incense, medicinal herbs, and chanting to purify body and spirit in volcanic-heated steam. Follow it with a cacao ceremony where ceremonial-grade cacao is prepared with intention and consumed in a circle of meditation, connecting you to the Maya's sacred relationship with the cacao plant.",
        highlights: [
          "Experience a traditional Maya temazcal sweat lodge",
          "Drink ceremonial cacao in a guided heart-opening ritual",
          "Learn about copal incense and medicinal herbs",
          "Journal and reflect in a jungle palapa setting",
        ],
        image: "/images/about-8.jpg",
      },
    ],
    thingsToDo: [
      {
        title: "Cenote Diving",
        description:
          "Dive the Dos Ojos or Sac Actun cave systems — the world's longest underwater caves — through crystal passages lit by haloclines and light shafts.",
        iconName: "Waves",
      },
      {
        title: "Temazcal Ceremony",
        description:
          "Enter the womb-like temazcal sweat lodge for a traditional Maya purification ritual with volcanic stones, herbs, and chanting.",
        iconName: "Heart",
      },
      {
        title: "Jungle Cycling",
        description:
          "Rent a bicycle and pedal the jungle road from Tulum town to the beach zone, stopping at cenotes, art installations, and smoothie bars.",
        iconName: "Car",
      },
      {
        title: "Farm-to-Table Dining",
        description:
          "Dine at jungle restaurants like Arca and Hartwood, where wood-fired cooking and local ingredients create unforgettable open-air meals.",
        iconName: "Utensils",
      },
      {
        title: "Cobá Pyramid Climb",
        description:
          "Cycle or walk to the Nohoch Mul pyramid at Cobá — at 138 feet, the tallest climbable pyramid in the Yucatán — for panoramic jungle views.",
        iconName: "Landmark",
      },
    ],
    travelTips: [
      "Rent a bicycle — it's the best way to move between the beach zone, town, and cenotes without traffic headaches.",
      "Book restaurants like Hartwood and Arca well in advance; they fill up nightly even in low season.",
      "Apply biodegradable sunscreen and bug repellent before cenote visits; chemical products are prohibited.",
      "The beach road floods during heavy rains; waterproof sandals are more practical than sneakers.",
      "Carry cash in pesos — many beach clubs, cenotes, and small shops don't accept cards.",
      "Visit the ruins at 8 AM opening; by 10 AM the heat and crowds make the experience much less pleasant.",
      "Sian Ka'an tours leave early morning; book through community cooperatives for the most authentic experience.",
    ],
    gallery: [
      "/images/dest-20.jpg",
      "/images/banner-1.jpg",
      "/images/banner-2.jpg",
      "/images/about-8.jpg",
    ],
  },

  cusco: {
    slug: "cusco",
    name: "Cusco",
    country: "Peru",
    region: "Americas",
    tagline: "The navel of the Inca world — living archaeology at 11,000 feet",
    heroImage: "/images/dest-21.jpg",
    overview:
      "Cusco was Qosqo — the navel of the world — to the Inca Empire, a city of gold-plated temples and astronomical precision set high in the Peruvian Andes at 11,152 feet. When the Spanish arrived in 1533, they dismantled the Inca palaces and temples but could not remove the massive stone foundations, so they built their colonial churches and mansions directly on top. The result is one of the world's most extraordinary architectural palimpsests: baroque cathedrals rising from perfectly fitted Inca walls where not a blade of grass can slip between the stones.\n\nThe Plaza de Armas, once the Inca ceremonial center of Huacaypata, is now flanked by the ornate Cathedral of Santo Domingo and the Jesuit Iglesia de la Compañía. Below the plaza, the Qorikancha — once the holiest shrine in the Inca Empire, its walls sheathed in gold — now bears the Convent of Santo Domingo on its shoulders. The famous twelve-angled stone in the wall along Hatunrumiyoc Street demonstrates the Inca's unmatched masonry skill, while the massive fortress of Sacsayhuamán on the hillside above the city features boulders weighing up to 200 tons fitted together with laser precision.\n\nBeyond its archaeological treasures, Cusco is a vibrant Andean city where Quechua-speaking vendors sell choclo con queso (giant-kernel corn with cheese) in the San Pedro Market, where Pisco sours flow in colonial-courtyard bars, and where the annual Inti Raymi festival in June reenacts the Inca Festival of the Sun with thousands of costumed performers filling the Sacsayhuamán esplanade.",
    quickFacts: {
      capital: "Cusco (former Inca capital; regional capital of Cusco Region)",
      currency: "Peruvian Sol (PEN)",
      climate: "Dry and wet seasons; cool year-round at altitude (40–65°F)",
      bestSeason: "May–September (dry season) for clear skies and trekking",
      languages: "Spanish, Quechua",
      timeZone: "PET (UTC−5)",
      drivingSide: "Right",
    },
    itinerary: [
      {
        day: 1,
        title: "Acclimatize & Explore the Plaza de Armas",
        location: "Centro Histórico, Cusco",
        description:
          "Arrive in Cusco and spend the first day acclimatizing to the 11,152-foot altitude with gentle walking. Sip coca tea at a plaza-view café, then visit the Cathedral of Santo Domingo, whose interior glows with 400 colonial paintings including a famous Last Supper where Christ is served cuy (guinea pig). Walk Hatunrumiyoc Street to find the celebrated twelve-angled Inca stone.",
        highlights: [
          "Sip coca tea while overlooking the Plaza de Armas",
          "See the Last Supper with cuy at the Cathedral",
          "Find the twelve-angled stone on Hatunrumiyoc Street",
          "Wander the cobblestone streets of the San Blas artisan quarter",
        ],
        image: "/images/dest-21.jpg",
      },
      {
        day: 2,
        title: "Qorikancha & San Pedro Market",
        location: "Cusco Centro",
        description:
          "Visit the Qorikancha, the Inca Temple of the Sun, where the few remaining original walls reveal the technical mastery behind what was once a building lined with 700 sheets of solid gold. The Spanish convent above provides a fascinating study in cultural layering. Afterward, plunge into the sensory overload of San Pedro Market — juice stalls blending tropical fruits, vendors serving steaming bowls of caldo de gallina, and sacks of quinoa in every color.",
        highlights: [
          "Tour the Inca stonework beneath the Convent of Santo Domingo",
          "Learn how the Qorikancha's gold once reflected sunlight",
          "Taste fresh tropical juices at San Pedro Market",
          "Sample caldo de gallina and choclo con queso from market vendors",
        ],
        image: "/images/city-5.jpg",
      },
      {
        day: 3,
        title: "Sacsayhuamán & Tambomachay",
        location: "Archaeological Park above Cusco",
        description:
          "Hike or taxi to the monumental fortress of Sacsayhuamán, where three tiers of zigzagging walls built from boulders weighing up to 200 tons stretch across the hillside. The precision of the joints — no mortar, no gaps — defies easy explanation. Continue to the nearby sites of Q'enqo (a carved limestone shrine), Puca Pucara (a red-hued military outpost), and Tambomachay (the Inca water temple with its flowing fountains).",
        highlights: [
          "Marvel at Sacsayhuamán's 200-ton precision-cut boulders",
          "Explore the carved ritual cave at Q'enqo",
          "Walk the ridgeline between Puca Pucara and Tambomachay",
          "Photograph panoramic views of Cusco from the fortress walls",
        ],
        image: "/images/tour-11.jpg",
      },
      {
        day: 4,
        title: "Rainbow Mountain & Andean Highlands",
        location: "Vinicunca (Rainbow Mountain), Cusco Region",
        description:
          "Depart before dawn for the 3-hour drive to the trailhead of Vinicunca, the Rainbow Mountain. The 5-mile round-trip hike climbs to 17,100 feet, where the mountain's mineral-rich slopes reveal striations of red, yellow, green, and lavender. The thin air makes every step an effort, but the surreal landscape — with herds of alpacas grazing in the foreground — is a reward beyond words.",
        highlights: [
          "Hike to the 17,100-foot summit of Rainbow Mountain",
          "See the vivid mineral striations of Vinicunca",
          "Photograph alpaca herds against the rainbow slopes",
          "Experience the high Andean puna ecosystem",
        ],
        image: "/images/dest-22.jpg",
      },
      {
        day: 5,
        title: "Machu Picchu — The Lost City",
        location: "Machu Picchu, Urubamba Province",
        description:
          "Take the early morning train through the Urubamba River gorge to Aguas Calientes, then bus up the switchbacks to the Sun Gate entrance of Machu Picchu. The first glimpse of the citadel nestled between Huayna Picchu and Machu Picchu mountain, wreathed in cloud, is one of travel's most transcendent moments. Explore the Temple of the Sun, the Intihuatana stone, and the Room of the Three Windows with a licensed guide.",
        highlights: [
          "Witness the first reveal of Machu Picchu from the Sun Gate",
          "Touch the Intihuatana astronomical stone",
          "Explore the Temple of the Sun and Royal Tomb",
          "Optional: climb Huayna Picchu for aerial citadel views",
        ],
        image: "/images/dest-23.jpg",
      },
    ],
    thingsToDo: [
      {
        title: "Machu Picchu Trek",
        description:
          "Hike the classic 4-day Inca Trail through cloud forest and high passes, arriving at the Sun Gate at dawn for the ultimate Machu Picchu reveal.",
        iconName: "Mountain",
      },
      {
        title: "Pisco Sour Tasting",
        description:
          "Compare Peru's national cocktail at Cusco's best bars — Museo del Pisco serves over 100 varieties of pisco with expert-led tastings.",
        iconName: "Utensils",
      },
      {
        title: "Textile Weaving Workshop",
        description:
          "Visit Chinchero's weaving cooperatives where Quechua women demonstrate ancient techniques using natural dyes from cochineal, indigo, and local plants.",
        iconName: "BookOpen",
      },
      {
        title: "San Pedro Market Food Tour",
        description:
          "Join a guided food walk through San Pedro Market tasting ceviche, fresh juice, empanadas, and the Andean superfood dish quinua chaufa.",
        iconName: "MapPin",
      },
      {
        title: "Inti Raymi Festival",
        description:
          "If visiting in June, witness the Inti Raymi — the Festival of the Sun — a spectacular reenactment of Inca ceremony with thousands of performers at Sacsayhuamán.",
        iconName: "Landmark",
      },
      {
        title: "Planetarium & Andean Cosmology",
        description:
          "Visit the Cusco Planetarium to learn how the Inca mapped dark cloud constellations in the Milky Way to guide agriculture and ceremony.",
        iconName: "Globe",
      },
    ],
    travelTips: [
      "Spend at least 2 days acclimatizing in Cusco before any strenuous trekking — altitude sickness is real and potentially dangerous at 11,000+ feet.",
      "Drink coca tea (mate de coca) freely — it's legal, culturally traditional, and genuinely helps with altitude adjustment.",
      "Book Inca Trail permits at least 6 months in advance through a licensed operator; only 500 people per day are allowed on the trail.",
      "Machu Picchu now requires timed entry tickets and a licensed guide; book through the official government portal.",
      "Carry small bills (S/1–5) for tips at restaurants and markets; street vendors rarely have change for S/100 notes.",
      "The Boleto Turístico (S/130) grants entry to 16 archaeological sites and museums — it's essential for multi-day exploration.",
      "Dress in layers — Cusco mornings can be near freezing, afternoons sunny and warm, and evenings cold again.",
    ],
    gallery: [
      "/images/dest-21.jpg",
      "/images/dest-22.jpg",
      "/images/dest-23.jpg",
      "/images/city-5.jpg",
      "/images/tour-11.jpg",
    ],
  },

  "sacred-valley": {
    slug: "sacred-valley",
    name: "Sacred Valley",
    country: "Peru",
    region: "Americas",
    tagline: "Andean peaks and shamanic wisdom in the heartland of the Inca",
    heroImage: "/images/banner-3.jpg",
    overview:
      "The Sacred Valley of the Incas — the Urubamba Valley — stretches between Cusco and Machu Picchu in a fertile corridor carved by the Urubamba River and flanked by snow-dusted Andean peaks exceeding 18,000 feet. For the Inca, this was the empire's breadbasket, its terraced hillsides producing the maize and potatoes that sustained millions. Today, those same terraces at Moray — concentric stone circles that functioned as an agricultural laboratory — still descend into the earth like a natural amphitheater, each tier creating a distinct microclimate.\n\nThe valley's towns are living extensions of Inca heritage. Ollantaytambo's cobblestone streets follow the original Inca grid plan, and water still flows through stone channels carved five centuries ago. The massive fortress above the town features six monolithic rose-colored stones transported from a quarry across the valley — a feat of engineering that remains unexplained to modern scholars. In Pisac, Sunday's market fills the colonial plaza with textiles, pottery, and produce, while the terraced ruins above the town offer panoramic valley views in solitude.\n\nThe Sacred Valley is also the heartland of Andean spiritual tradition. Q'ero shamans — descendants of the Inca — still perform despacho offerings to Pachamama (Mother Earth) using coca leaves, seeds, and alpaca fat. Visitors can participate in plant-medicine ceremonies, sweat lodge rituals, and multi-day pilgrimages to sacred mountain apus. The valley invites not just sightseeing but a genuine encounter with one of the world's oldest living spiritual traditions.",
    quickFacts: {
      currency: "Peruvian Sol (PEN)",
      climate: "Mild and dry (May–Sep); warm days (65–75°F) and cool nights (35–45°F)",
      bestSeason: "May–September for dry season; June for Inti Raymi festivities",
      languages: "Spanish, Quechua",
      timeZone: "PET (UTC−5)",
      drivingSide: "Right",
    },
    itinerary: [
      {
        day: 1,
        title: "Pisac Market & Ruins",
        location: "Pisac, Sacred Valley",
        description:
          "Arrive in the valley town of Pisac, where the famous market overflows with hand-woven textiles, painted ceramics, and sacks of kiwicha and purple corn. After browsing, hike the switchback trail to the Pisac archaeological complex — a sprawling series of agricultural terraces, ceremonial baths, and a sun temple perched on a ridgeline with commanding views of the valley floor.",
        highlights: [
          "Browse the vibrant Pisac artisan market",
          "Hike to the Pisac ruins and Intihuatana temple",
          "View the Inca cemetery carved into the cliff face",
          "Sample fresh bread from Pisac's wood-fired ovens",
        ],
        image: "/images/banner-3.jpg",
      },
      {
        day: 2,
        title: "Moray Terraces & Maras Salt Mines",
        location: "Moray & Maras, Sacred Valley",
        description:
          "Visit the enigmatic circular terraces of Moray, believed to be an Inca agricultural research station where temperature differences between the top and bottom tiers allowed experimentation with crops at various altitudes. Continue to the salt mines of Maras, where over 5,000 shallow pools cascade down the mountainside, each evaporating salt-rich spring water into pink crystals just as they have since pre-Inca times.",
        highlights: [
          "Descend into the concentric terraces of Moray",
          "Photograph the 5,000 cascading salt pools at Maras",
          "Learn about Inca agricultural engineering",
          "Taste freshly harvested Maras pink salt",
        ],
        image: "/images/about-9.jpg",
      },
      {
        day: 3,
        title: "Ollantaytambo Fortress & Living Inca Town",
        location: "Ollantaytambo, Sacred Valley",
        description:
          "Explore Ollantaytambo, the last living Inca town where water still runs through original stone channels and families inhabit buildings with Inca foundations. Climb the steep terraces to the Temple Hill where six massive rose-colored monoliths stand in perfect alignment. The view from the top encompasses the valley, the quarry across the river, and the mysterious granaries (qolqas) carved into the opposite cliff.",
        highlights: [
          "Walk Ollantaytambo's original Inca street grid",
          "Climb to the six monolithic temple stones",
          "Spot the carved face of Wiracocha in the mountainside",
          "Visit the Pinkuylluna granaries on the opposite cliff",
        ],
        image: "/images/tour-12.jpg",
      },
      {
        day: 4,
        title: "Shamanic Ceremony & Despacho Offering",
        location: "Q'ero Community, Sacred Valley",
        description:
          "Participate in a despacho ceremony led by a Q'ero paqo (shaman), the highest-altitude indigenous community in Peru and direct keepers of Inca spiritual wisdom. The ceremony involves creating an elaborate offering bundle of coca leaves, seeds, sweets, and symbolic items arranged on paper, each element representing gratitude to Pachamama. The bundle is then burned as a prayer ascending to the apus (mountain spirits).",
        highlights: [
          "Create a despacho offering with a Q'ero shaman",
          "Learn the sacred significance of coca leaf readings",
          "Participate in prayers to Pachamama and the mountain apus",
          "Share a communal meal of Andean potatoes and herbs",
        ],
        image: "/images/about-10.jpg",
      },
    ],
    thingsToDo: [
      {
        title: "Inca Trail Trekking",
        description:
          "Begin the 4-day classic Inca Trail from Km 82 near Ollantaytambo, passing through cloud forest, dead woman's pass, and arriving at the Sun Gate of Machu Picchu.",
        iconName: "Mountain",
      },
      {
        title: "Plant Medicine Ceremony",
        description:
          "Participate in guided ayahuasca or San Pedro ceremonies with experienced curanderos in purpose-built retreat centers throughout the valley.",
        iconName: "Heart",
      },
      {
        title: "Textile Weaving in Chinchero",
        description:
          "Visit Chinchero's women's weaving cooperatives to see backstrap loom demonstrations and learn how natural dyes are extracted from insects and plants.",
        iconName: "BookOpen",
      },
      {
        title: "Mountain Biking Maras to Moray",
        description:
          "Ride downhill single track from the Maras salt mines to the Moray terraces with stunning Andean mountain backdrops.",
        iconName: "Dumbbell",
      },
      {
        title: "Via Ferrata & Skylodge",
        description:
          "Climb a 400-meter via ferrata and sleep in transparent hanging pods bolted to a cliff face 1,200 feet above the Sacred Valley floor.",
        iconName: "Landmark",
      },
    ],
    travelTips: [
      "The Sacred Valley sits lower than Cusco (around 9,500 ft vs 11,152 ft), making it a better first stop for altitude acclimatization.",
      "Hire a private driver or join a group tour — valley sites are spread across 60 miles and public transport between them is infrequent.",
      "Respect shamanic ceremonies deeply — they are living spiritual practices, not tourist entertainment; approach with genuine intention.",
      "Buy the Boleto Turístico in Cusco (S/130) which covers Pisac, Moray, Ollantaytambo, and other valley sites.",
      "Sunday is the best day to visit Pisac for the full market experience; weekday markets are much smaller.",
      "Carry small soles bills; rural vendors and colectivo drivers rarely accept cards or make change for large notes.",
      "The Skylodge via ferrata experience must be booked weeks in advance and requires moderate physical fitness.",
    ],
    gallery: [
      "/images/banner-3.jpg",
      "/images/about-9.jpg",
      "/images/about-10.jpg",
      "/images/tour-12.jpg",
    ],
  },

  "rio-de-janeiro": {
    slug: "rio-de-janeiro",
    name: "Rio de Janeiro",
    country: "Brazil",
    region: "Americas",
    tagline: "Where jungle-clad mountains plunge into golden beaches and samba fills the night",
    heroImage: "/images/city-6.jpg",
    overview:
      "Rio de Janeiro is a city of dramatic natural beauty and infectious energy — a place where granite monoliths erupt from tropical forest, golden beaches sweep between jungle headlands, and the sounds of samba and bossa nova drift through warm evening air. Christ the Redeemer stands atop Corcovado mountain with outstretched arms, a 98-foot art deco sentinel watching over a city that seems to celebrate life with every breath.\n\nThe geography alone is staggering. Sugarloaf Mountain — Pão de Açúcar — rises 1,299 feet from the mouth of Guanabara Bay, connected to the city by a cable car that offers sunset views rivaling any on Earth. Copacabana's four-kilometer promenade and Ipanema's fashionable sands are postcard icons, but the real magic lies in Tijuca National Park, the world's largest urban rainforest, where toucans screech through cecropia trees just minutes from downtown traffic.\n\nCarnival is Rio's crowning spectacle — four days in February or March when the entire city transforms into a pageant of feathered costumes, thundering drums, and samba schools competing in the purpose-built Sambódromo. But even outside Carnival, Rio pulses with street music: live samba circles (rodas de samba) in Lapa on Friday nights, bossa nova in Copacabana's jazz clubs, and forró dancing in Santa Teresa's bohemian bars. Rio doesn't just welcome you — it sweeps you up in its rhythm.",
    quickFacts: {
      currency: "Brazilian Real (BRL)",
      climate: "Tropical; hot and humid with a rainy season from December to March",
      bestSeason: "May–September for drier weather; February–March for Carnival",
      languages: "Portuguese",
      timeZone: "BRT (UTC−3)",
      drivingSide: "Right",
    },
    itinerary: [
      {
        day: 1,
        title: "Christ the Redeemer & Santa Teresa",
        location: "Corcovado & Santa Teresa, Rio",
        description:
          "Ride the cog railway through the Tijuca rainforest to the summit of Corcovado, where Christ the Redeemer opens his 92-foot arms above the city. The 360-degree panorama encompasses Sugarloaf, Copacabana, the lagoon, and the distant Serra do Mar mountains. Descend to the bohemian hilltop neighborhood of Santa Teresa, where crumbling colonial mansions house art studios, vintage bars, and the Museu Chácara do Céu.",
        highlights: [
          "Stand at the feet of Christ the Redeemer",
          "Panoramic views of Sugarloaf, Copacabana, and the bay",
          "Explore Santa Teresa's art galleries and colonial streets",
          "Ride the historic bonde (streetcar) through the hillside",
        ],
        image: "/images/city-6.jpg",
      },
      {
        day: 2,
        title: "Sugarloaf Mountain & Copacabana",
        location: "Urca & Copacabana, Rio",
        description:
          "Take the two-stage cable car to the summit of Sugarloaf Mountain for sunrise or sunset — the view of Rio spread between mountains and sea is one of the world's great urban panoramas. Descend and walk the Urca waterfront promenade before spending the afternoon on Copacabana Beach, sipping açaí bowls from kiosk vendors and watching cariocas play footvolley on the sand.",
        highlights: [
          "Cable car to Sugarloaf's summit for sunset panorama",
          "Spot marmosets on the Urca hill nature trail",
          "Stroll the iconic Copacabana promenade",
          "Sip fresh coconut water from beach vendors",
        ],
        image: "/images/banner-4.jpg",
      },
      {
        day: 3,
        title: "Ipanema, Lagoa & Jardim Botânico",
        location: "Ipanema & Jardim Botânico, Rio",
        description:
          "Begin at Ipanema Beach, the strip immortalized in the bossa nova classic 'The Girl from Ipanema,' where Posto 9 is the gathering point for artists and locals. Walk inland to the Jardim Botânico, a 340-acre garden founded in 1808 with imperial palm avenues, orchid greenhouses, and Amazon Victoria water lilies. End with a sunset jog or bike ride around the Rodrigo de Freitas Lagoon.",
        highlights: [
          "Sunbathe at Ipanema's iconic Posto 9",
          "Walk the imperial palm avenue at Jardim Botânico",
          "Cycle around the Rodrigo de Freitas Lagoon at sunset",
          "Dine at one of Leblon's acclaimed seafood restaurants",
        ],
        image: "/images/offer-1.jpg",
      },
      {
        day: 4,
        title: "Lapa Arches & Samba Night",
        location: "Lapa & Centro, Rio",
        description:
          "Explore the historic center's mix of baroque churches, imperial libraries, and vibrant street art. Visit the Real Gabinete Português — one of the world's most beautiful libraries — and the ornate Theatro Municipal. As night falls, head to Lapa, where the iconic white arches frame a neighborhood that transforms into an open-air samba party. Join a roda de samba circle, drink caipirinhas, and dance until the early hours.",
        highlights: [
          "Photograph the iconic Lapa Arches (Arcos da Lapa)",
          "Visit the stunning Real Gabinete Português de Leitura",
          "Dance at a live samba circle in Lapa's streets",
          "Sip caipirinhas made with cachaça from Minas Gerais",
        ],
        image: "/images/offer-2.jpg",
      },
      {
        day: 5,
        title: "Tijuca Forest & Hang Gliding",
        location: "Tijuca National Park, Rio",
        description:
          "Hike through Tijuca National Park, the world's largest urban forest, to cascading waterfalls and the Mirante Dona Marta viewpoint. For the ultimate thrill, take a tandem hang-gliding flight from the Pedra Bonita ramp in São Conrado, soaring above the forest canopy with Copacabana and Sugarloaf spread below — an experience that defines the exhilarating spirit of Rio.",
        highlights: [
          "Hike to waterfalls in Tijuca National Park",
          "Tandem hang glide from Pedra Bonita over São Conrado",
          "Spot toucans and capuchin monkeys in the canopy",
          "Watch paragliders circle above the jungle",
        ],
        image: "/images/offer-3.jpg",
      },
    ],
    thingsToDo: [
      {
        title: "Carnival Celebrations",
        description:
          "Join the world's largest party during Carnival — watch samba schools parade through the Sambódromo or dance in the enormous street blocos across the city.",
        iconName: "Heart",
      },
      {
        title: "Samba & Bossa Nova",
        description:
          "Attend a live roda de samba in Lapa, or catch intimate bossa nova performances in Copacabana jazz clubs where the genre was born.",
        iconName: "Landmark",
      },
      {
        title: "Brazilian Cuisine",
        description:
          "Feast on feijoada (black bean and pork stew) at Casa da Feijoada, fresh açaí bowls on the beach, and churrasco at a traditional rodízio.",
        iconName: "Utensils",
      },
      {
        title: "Hang Gliding",
        description:
          "Soar tandem from Pedra Bonita over Tijuca Forest, landing on the beach at São Conrado — Rio's most exhilarating activity.",
        iconName: "Globe",
      },
      {
        title: "Favela Community Tours",
        description:
          "Take a community-led tour of Rocinha or Vidigal to understand favela culture, art, and resilience — always through ethical operators who reinvest locally.",
        iconName: "MapPin",
      },
    ],
    travelTips: [
      "Avoid displaying expensive jewelry, phones, or cameras on the beach — petty theft is common in tourist areas.",
      "Use Uber or 99 (a local ride app) rather than hailing taxis; they're cheaper and safer with tracked routes.",
      "Book Carnival accommodation at least 6 months ahead; prices triple and availability vanishes.",
      "Learn basic Portuguese phrases — English is not widely spoken outside upscale hotels and tourist spots.",
      "Apply strong sunscreen — Rio sits in the tropics and UV index regularly exceeds 11, even on overcast days.",
      "Visit favelas only with reputable, community-endorsed guides; never enter independently.",
      "Keep copies of your passport at your hotel — carry a photocopy or phone photo instead of the original.",
    ],
    gallery: [
      "/images/city-6.jpg",
      "/images/banner-4.jpg",
      "/images/offer-1.jpg",
      "/images/offer-2.jpg",
      "/images/offer-3.jpg",
    ],
  },

  "amazon-rainforest": {
    slug: "amazon-rainforest",
    name: "Amazon Rainforest",
    country: "Brazil",
    region: "Americas",
    tagline: "The lungs of the Earth — where biodiversity reaches its zenith",
    heroImage: "/images/explor-5.jpg",
    overview:
      "The Amazon Rainforest is the largest tropical rainforest on Earth, spanning 2.1 million square miles across nine countries and containing one in ten of all known species. The Brazilian Amazon alone is larger than India, and the Amazon River — the world's greatest by volume — discharges one-fifth of all fresh water that enters the oceans. To enter the Amazon is to step into a world where the scale of life is almost incomprehensible: a single hectare can harbor 750 species of trees, and the canopy teems with macaws, howler monkeys, three-toed sloths, and poison dart frogs in a symphony of color and sound.\n\nMost visitors base themselves in Manaus, the unlikely metropolis of two million that sits at the confluence of the dark Rio Negro and the sandy-brown Rio Solimões — a phenomenon called the Meeting of the Waters where the two rivers flow side by side without mixing for six miles. From Manaus, riverboats and floatplane transfers reach remote jungle lodges where guides — often from indigenous Caboclo communities — lead dawn canoe paddles through flooded várzea forests, night caiman-spotting excursions by flashlight, and piranha fishing expeditions on blackwater tributaries.\n\nThe Amazon is also home to hundreds of indigenous communities who have inhabited the forest for millennia, maintaining traditions of plant medicine, sustainable harvesting, and ecological knowledge that modern science is only beginning to appreciate. A visit here is not just a wildlife adventure — it is a confrontation with the fragility and magnificence of the planet's most critical ecosystem.",
    quickFacts: {
      capital: "Manaus (gateway city; capital of Amazonas state)",
      currency: "Brazilian Real (BRL)",
      climate: "Equatorial; hot and humid year-round (80–95°F), with a wet season December–May",
      bestSeason: "June–November (dry season) for hiking and wildlife; December–May for flooded-forest canoeing",
      languages: "Portuguese, various indigenous languages (Ticuna, Tucano, Yanomami)",
      timeZone: "AMT (UTC−4)",
      drivingSide: "Right",
    },
    itinerary: [
      {
        day: 1,
        title: "Manaus & Meeting of the Waters",
        location: "Manaus, Amazonas",
        description:
          "Explore the opulent Teatro Amazonas, an Italian Renaissance opera house built with rubber-boom wealth in 1896 — its dome tiled in 36,000 ceramic pieces in the Brazilian flag's colors. Then board a speedboat to witness the Meeting of the Waters, where the black Rio Negro and tan Rio Solimões flow side by side without mixing, a visible boundary between two distinct river ecosystems.",
        highlights: [
          "Tour the opulent Teatro Amazonas opera house",
          "Witness the Meeting of the Waters from the boat",
          "Visit the bustling Mercado Adolpho Lisboa fish market",
          "Transfer to your jungle lodge by riverboat",
        ],
        image: "/images/tour-13.jpg",
      },
      {
        day: 2,
        title: "Canopy Walkway & Jungle Trek",
        location: "Amazon Jungle Lodge",
        description:
          "Rise at dawn for a canopy walkway experience 100 feet above the forest floor, where toucans, macaws, and howler monkeys inhabit the upper story. Descend for a guided jungle trek where your indigenous guide identifies medicinal plants — the bark of the cinchona tree (source of quinine), the sap of the copaíba used for wounds, and the towering Brazil nut trees that support entire ecosystems.",
        highlights: [
          "Walk a suspended canopy bridge 100 feet above the forest",
          "Identify medicinal plants with an indigenous guide",
          "Spot howler monkeys and toucans in the upper canopy",
          "Learn jungle survival techniques and water sourcing",
        ],
        image: "/images/banner-5.jpg",
      },
      {
        day: 3,
        title: "Flooded Forest Canoeing & Piranha Fishing",
        location: "Várzea Flooded Forest",
        description:
          "Paddle a dugout canoe through the flooded várzea forest, where trees stand in water up to their crowns and the reflections create a mirror world of green and sky. Your guide points out three-toed sloths draped over cecropia branches, pink river dolphins surfacing in the dark water, and the massive Victoria amazonica water lilies whose pads can span six feet. Afternoon brings piranha fishing on a blackwater tributary.",
        highlights: [
          "Canoe through the mirror-like flooded várzea forest",
          "Spot pink river dolphins and three-toed sloths",
          "See giant Victoria amazonica water lily pads",
          "Catch piranhas on a blackwater river tributary",
        ],
        image: "/images/offer-4.jpg",
      },
      {
        day: 4,
        title: "Night Safari & Caiman Spotting",
        location: "Amazon River tributaries",
        description:
          "After sunset, board a motorized canoe for a night safari along the river's edge. Your guide sweeps a powerful flashlight across the water, revealing the orange eye-shine of caimans lurking at the surface. Frogs chorus deafeningly, bats swoop for insects, and the occasional splash of a large fish — perhaps an arapaima, the world's largest freshwater fish — breaks the darkness. The star field above the unlit forest is breathtaking.",
        highlights: [
          "Spot caiman eyes glowing in the flashlight beam",
          "Listen to the overwhelming nocturnal frog chorus",
          "Stargaze from the river with zero light pollution",
          "Learn about the arapaima — the Amazon's giant fish",
        ],
        image: "/images/offer-5.jpg",
      },
    ],
    thingsToDo: [
      {
        title: "Pink Dolphin Encounters",
        description:
          "Observe the Amazon's endemic boto (pink river dolphin) in their natural habitat — these intelligent creatures are central to Amazonian folklore and mythology.",
        iconName: "Waves",
      },
      {
        title: "Indigenous Community Visits",
        description:
          "Spend time with indigenous communities learning about traditional fishing, plant medicine, body painting, and the oral histories that preserve forest knowledge.",
        iconName: "BookOpen",
      },
      {
        title: "Birdwatching",
        description:
          "The Amazon holds over 1,500 bird species; early-morning canoe trips yield sightings of scarlet macaws, hoatzins, harpy eagles, and dozens of hummingbird species.",
        iconName: "Camera",
      },
      {
        title: "Rubber Boom History",
        description:
          "Explore Manaus's grand rubber-era architecture — the Teatro Amazonas, the Customs House, and the Iron Market designed by Eiffel's workshop.",
        iconName: "Landmark",
      },
      {
        title: "Amazonian Cuisine",
        description:
          "Taste tacacá (tucupi and jambu soup), pirarucu grilled over charcoal, açaí with tapioca, and the dozens of exotic fruits found nowhere else on Earth.",
        iconName: "Utensils",
      },
    ],
    travelTips: [
      "Yellow fever vaccination is required for Amazon travel; carry your International Certificate of Vaccination.",
      "Pack long-sleeved shirts, long pants, and DEET-based repellent — mosquitoes carry malaria and dengue in remote areas.",
      "Choose a lodge affiliated with indigenous communities to ensure your visit supports local livelihoods and conservation.",
      "Bring a dry bag for electronics — humidity exceeds 90% and afternoon downpours are almost guaranteed.",
      "Anti-malaria prophylaxis (Malarone or doxycycline) is recommended; consult a travel medicine doctor 4–6 weeks before departure.",
      "Cash is essential outside Manaus — jungle lodges and river communities rarely accept credit cards.",
      "The dry season (June–November) is best for jungle hikes; the wet season (December–May) is best for flooded-forest canoeing and water access.",
    ],
    gallery: [
      "/images/explor-5.jpg",
      "/images/tour-13.jpg",
      "/images/banner-5.jpg",
      "/images/offer-4.jpg",
      "/images/offer-5.jpg",
    ],
  },

  salvador: {
    slug: "salvador",
    name: "Salvador",
    country: "Brazil",
    region: "Americas",
    tagline: "Afro-Brazilian soul in a colonial jewel on the Bay of All Saints",
    heroImage: "/images/dest-1.jpg",
    overview:
      "Salvador da Bahia was Brazil's first capital and the largest slave port in the Americas, a history that forged one of the most distinctive cultures in the Western Hemisphere. The Pelourinho — the cobblestoned historic center and UNESCO World Heritage Site — cascades down a hillside in a riot of pastel-painted colonial facades, baroque churches dripping with gold leaf, and open squares where the percussive thunder of Olodum drum circles fills the tropical air. It is here that African, Portuguese, and indigenous traditions fused into something entirely new.\n\nThat fusion defines everything in Salvador. Candomblé — an Afro-Brazilian religion blending Yoruba orixás with Catholic saints — is openly practiced in terreiros (temples) throughout the city, and public festivals honoring Yemanjá (goddess of the sea) and other orixás draw millions. Capoeira, the martial art disguised as dance that enslaved Africans developed to resist their captors, was born in Salvador's streets and is still practiced in rodas (circles) in the Pelourinho every evening. The food is equally distinctive — acarajé (black-eyed pea fritters stuffed with vatapá shrimp paste), moqueca baiana (coconut-milk fish stew), and bobó de camarão (shrimp in cassava cream) are dishes found nowhere else with this depth of flavor.\n\nSalvador's Carnival — though less internationally famous than Rio's — is widely considered the more authentic celebration, with six days of trio elétrico sound trucks rolling through streets packed with two million revelers dancing axé music in organized blocos. It is raw, joyous, and overwhelming — much like Salvador itself.",
    quickFacts: {
      capital: "Salvador (capital of Bahia state)",
      currency: "Brazilian Real (BRL)",
      climate: "Tropical; warm and humid year-round (75–90°F), wetter April–July",
      bestSeason: "September–March for sunny weather; February for Carnival",
      languages: "Portuguese",
      timeZone: "BRT (UTC−3)",
      drivingSide: "Right",
    },
    itinerary: [
      {
        day: 1,
        title: "Pelourinho — The Historic Heart",
        location: "Pelourinho, Salvador",
        description:
          "Wander the UNESCO-listed Pelourinho, a cascade of cobblestoned streets and plazas flanked by 17th- and 18th-century colonial buildings in candy shades of blue, pink, and yellow. Visit the gold-encrusted interior of the São Francisco Church — one of the most ornate baroque churches in the world — and the Jorge Amado Foundation dedicated to Bahia's beloved novelist. As evening falls, the Terreiro de Jesus fills with drum circles and capoeira rodas.",
        highlights: [
          "Admire the gold-leaf interior of São Francisco Church",
          "Visit the Jorge Amado Foundation and museum",
          "Watch capoeira rodas in the Terreiro de Jesus",
          "Listen to Olodum drummers echo through the squares",
        ],
        image: "/images/dest-1.jpg",
      },
      {
        day: 2,
        title: "Lacerda Elevator & Mercado Modelo",
        location: "Cidade Baixa, Salvador",
        description:
          "Ride the Art Deco Elevador Lacerda — Salvador's iconic 236-foot public elevator connecting the upper and lower cities — for sweeping views of the Bay of All Saints. At the base, explore the Mercado Modelo, a bustling market selling Bahian handicrafts, berimbaus (capoeira instruments), and colorful beaded necklaces representing Candomblé orixás. Lunch on acarajé from a traditional baiana vendor in her white lace dress.",
        highlights: [
          "Ride the Lacerda Elevator for bay panoramas",
          "Shop for berimbaus and Candomblé beads at Mercado Modelo",
          "Eat acarajé from a traditional baiana street vendor",
          "Explore the Bonfim Church with its colorful wish ribbons",
        ],
        image: "/images/about-1.jpg",
      },
      {
        day: 3,
        title: "Candomblé Terreiro & Afro-Brazilian Heritage",
        location: "Engenho Velho de Brotas, Salvador",
        description:
          "Visit a Candomblé terreiro (temple) with a knowledgeable guide to understand this living Afro-Brazilian religion that syncretized Yoruba orixás with Catholic saints during slavery. See the sacred space where initiates dance to the rhythms of atabaques drums, wearing white garments and beaded necklaces representing their patron orixá. Continue to the Museu Afro-Brasileiro for an immersive exploration of the transatlantic slave trade's cultural legacy.",
        highlights: [
          "Visit a Candomblé terreiro with a cultural guide",
          "Learn about the Yoruba orixás and their Catholic syncretism",
          "Explore the Museu Afro-Brasileiro's powerful exhibitions",
          "Attend a public Candomblé ceremony (when available)",
        ],
        image: "/images/about-2.jpg",
      },
      {
        day: 4,
        title: "Capoeira Workshop & Bahian Cooking",
        location: "Santo Antônio & Pelourinho, Salvador",
        description:
          "Spend the morning in a capoeira workshop with a master (mestre) from one of Salvador's historic academies, learning the basic ginga movement, kicks, and the musical instruments — berimbau, pandeiro, and atabaque — that drive the rhythm. Afternoon brings a Bahian cooking class where you prepare moqueca, vatapá, and cocada under the guidance of a local chef, learning the African roots of each recipe.",
        highlights: [
          "Learn the ginga and basic kicks in a capoeira roda",
          "Play the berimbau under a mestre's instruction",
          "Cook moqueca and vatapá in a hands-on Bahian class",
          "Taste your creations with ice-cold coconut water",
        ],
        image: "/images/about-3.jpg",
      },
    ],
    thingsToDo: [
      {
        title: "Carnival in Salvador",
        description:
          "Join two million revelers for six days of axé music, trio elétrico sound trucks, and organized blocos dancing through the streets of Campo Grande and Barra.",
        iconName: "Heart",
      },
      {
        title: "Capoeira Roda",
        description:
          "Watch or participate in a traditional capoeira circle in the Pelourinho, where mestres and students play this Afro-Brazilian martial art to live berimbau music.",
        iconName: "Dumbbell",
      },
      {
        title: "Bahian Street Food",
        description:
          "Follow the baianas in white lace frying acarajé at their street stalls — stuff yours with vatapá, caruru, and dried shrimp for the authentic experience.",
        iconName: "Utensils",
      },
      {
        title: "Island Hopping in the Bay",
        description:
          "Catch a ferry to Ilha de Itaparica or a schooner to the smaller islands in the Bay of All Saints for deserted beaches and fresh seafood.",
        iconName: "Waves",
      },
      {
        title: "Olodum Drum Performance",
        description:
          "Attend an Olodum rehearsal in the Pelourinho — the Afro-Brazilian drum corps whose rhythms inspired Paul Simon and Michael Jackson.",
        iconName: "Landmark",
      },
      {
        title: "Bonfim Wish Ribbons",
        description:
          "Tie a colorful fita ribbon to the fence of the Church of Nosso Senhor do Bonfim and make three wishes — a beloved Salvador tradition.",
        iconName: "CheckCircle2",
      },
    ],
    travelTips: [
      "Stay in the Pelourinho or Santo Antônio neighborhoods for walkability and cultural immersion; avoid isolated streets after dark.",
      "Salvador's Carnival is less commercialized than Rio's — buy an abadá (bloco T-shirt) to join an organized group for safety and fun.",
      "Ask permission before photographing Candomblé ceremonies and practitioners; some rituals are private and sacred.",
      "Learn a few Portuguese phrases — English is rarely spoken outside upscale hotels; Bahians warmly reward any effort.",
      "Carry minimal valuables when walking the historic center; use your hotel safe for passports and excess cash.",
      "Try the local beer Itaipava ice-cold from a corner bar, paired with petiscos (snacks) like bolinhos de bacalhau.",
      "The Lacerda Elevator is free and runs constantly — use it to commute between Cidade Alta and Cidade Baixa.",
    ],
    gallery: [
      "/images/dest-1.jpg",
      "/images/about-1.jpg",
      "/images/about-2.jpg",
      "/images/about-3.jpg",
    ],
  },

  "buenos-aires": {
    slug: "buenos-aires",
    name: "Buenos Aires",
    country: "Argentina",
    region: "South America",
    tagline: "Tango, steak, European grandeur, and the passionate soul of Latin America",
    heroImage: "/images/trand-5.jpg",
    overview:
      "Buenos Aires is a city that seduces slowly — through the smoky haze of a parrilla grilling prime cuts of grass-fed beef, through the embrace of a tango milonga where strangers move as one, through the peeling facades of San Telmo's colonial buildings and the painted murals of Palermo's leafy barrios. Founded twice — the second time for good in 1580 — this city of 15 million wears its European DNA proudly, with wide Haussmann-style boulevards, ornate French-inspired mansions, and a café culture that treats conversation as high art.\n\nAvenida 9 de Julio, one of the world's widest avenues, bisects the city with an eight-lane swagger, framed by the iconic pink Casa Rosada where Eva Perón addressed the masses. The working-class La Boca neighborhood bursts with corrugated iron houses painted in vivid yellows, greens, and reds — a tradition born from leftover ship paint — while the nearby Caminito street market is a living stage for street tango performances. Recoleta's necropolis rivals Paris's Père Lachaise in elaborate marble mausoleums, and Evita herself rests here beneath a thicket of flowers.\n\nBeyond the landmarks, Buenos Aires rewards the wanderer: a Sunday afternoon at the vast San Telmo antiques market, an asado at a private home where the host tends the grill for hours, a late-night empanada at 3 a.m. after a milonga — because in Buenos Aires, dinner rarely starts before 9 p.m. and the night is always just beginning.",
    quickFacts: {
      capital: "Buenos Aires (federal capital)",
      currency: "Argentine Peso (ARS); USD accepted informally",
      climate: "Humid subtropical; hot summers, mild winters; rain year-round",
      bestSeason: "March–May & September–November for pleasant temperatures and fewer crowds",
      languages: "Spanish (Argentine dialect)",
      timeZone: "ART (UTC−3)",
      drivingSide: "Right",
    },
    itinerary: [
      {
        day: 1,
        title: "La Boca, San Telmo & the Tango Heartbeat",
        location: "La Boca & San Telmo",
        description:
          "Start in La Boca's Caminito street, where dancers perform tango beneath painted houses and artists sell watercolors of the Río de la Plata docks. Walk north to San Telmo for the Sunday antiques market and your first taste of choripán — grilled chorizo in crusty bread — before a candlelit milonga lesson in the evening.",
        highlights: [
          "Watch street tango performers at the Caminito outdoor stage",
          "Browse 1,000 stalls at the San Telmo Sunday Antiques Market",
          "Take a beginner tango lesson at a traditional milonga",
          "Sample choripán and medialunas from a street stall",
        ],
        image: "/images/trand-5.jpg",
      },
      {
        day: 2,
        title: "Recoleta, the Casa Rosada & Centro",
        location: "Recoleta & Microcentro",
        description:
          "Visit the Recoleta Cemetery, a city within a city where marble angels watch over Argentina's elite — Evita's tomb draped in fresh flowers. Walk the wide Avenida 9 de Julio to the Casa Rosada, where the pink government palace's balcony once hosted Perón and Madonna alike.",
        highlights: [
          "Find Evita Perón's tomb in the labyrinthine Recoleta Cemetery",
          "Photograph the Obelisk on Avenida 9 de Julio at golden hour",
          "Tour the Casa Rosada museum and see the famous balcony",
          "Browse the Recoleta weekend fair for artisan leather goods",
        ],
        image: "/images/about-9.jpg",
      },
      {
        day: 3,
        title: "Palermo Barrios & Local Foodie Culture",
        location: "Palermo Soho & Hollywood",
        description:
          "Palermo's tree-lined streets hide boutique concept stores, craft beer bars, and the Buenos Aires Ecological Reserve. Spend the morning in the Japanese Garden, afternoons sipping cortado at a café, and evenings at a mercado trying chimichurri-drenched skewers and artisan dulce de leche ice cream.",
        highlights: [
          "Wander the Japanese Garden and rose garden of the Palermo Parks",
          "Browse boutique design shops in Palermo Soho for leather belts and bags",
          "Sample Mercado de Pulgas (flea market) for vintage finds",
          "Dine at a parrilla restaurant for a full Argentine asado experience",
        ],
        image: "/images/about-3.jpg",
      },
      {
        day: 4,
        title: "Puerto Madero & Tigre Delta Day Trip",
        location: "Puerto Madero & Tigre",
        description:
          "Walk the converted red-brick docks of Puerto Madero, now a sleek waterfront promenade of restaurants and offices. In the afternoon, take the suburban train to Tigre and board a lancha (water taxi) to explore the Paraná Delta's jungle-lined channels, wooden river houses, and floating artisan markets.",
        highlights: [
          "Walk the Puente de la Mujer (Woman's Bridge) at Puerto Madero",
          "Ride the suburban train along the Río de la Plata to Tigre",
          "Navigate the Paraná Delta by lancha and stop at a riverside café",
          "Browse the Tigre Artisan Market for handmade crafts and preserves",
        ],
        image: "/images/about-4.jpg",
      },
      {
        day: 5,
        title: "Tango Show & Farewell Asado",
        location: "Palermo & San Telmo",
        description:
          "Spend the morning browsing the MALBA (Museum of Latin American Art), home to Frida Kahlo and Diego Rivera originals. In the evening, attend a world-class dinner tango show at a historic milonga before a final late-night asado at a local parrilla, sharing a Malbec with new friends.",
        highlights: [
          "Explore Frida Kahlo and Xul Solar works at MALBA",
          "Attend a professional dinner-tango show with live orchestra",
          "Toast with a glass of Mendoza Malbec at a corner wine bar",
          "Finish the night dancing at an open-air milonga in San Telmo",
        ],
        image: "/images/about-5.jpg",
      },
    ],
    thingsToDo: [
      {
        title: "Tango at a Milonga",
        description:
          "Join a late-night milonga — a tango dance hall — where strangers connect through this passionate Argentine dance form.",
        iconName: "Heart",
      },
      {
        title: "Parrilla Asado Dinner",
        description:
          "Experience a traditional Argentine asado at a parrilla where slow-grilled beef, morcilla, and mollejas are served with chimichurri.",
        iconName: "Utensils",
      },
      {
        title: "Recoleta Cemetery Walk",
        description:
          "Wander through this ornate city of the dead where Argentina's most famous citizens rest in elaborate marble mausoleums.",
        iconName: "Landmark",
      },
      {
        title: "Tigre Delta Boat Tour",
        description:
          "Explore the lush Paraná Delta by wooden lancha, passing floating cafés, weekend mansions, and jungle waterways.",
        iconName: "Waves",
      },
      {
        title: "San Telmo Antiques Market",
        description:
          "Hunt for vintage silver, antique maps, and tango memorabilia at the legendary Sunday market in colonial San Telmo.",
        iconName: "Globe",
      },
      {
        title: "Malbec Wine Tasting",
        description:
          "Join a guided Argentine wine tasting session and discover how Mendoza's altitude produces some of the world's finest Malbec.",
        iconName: "Heart",
      },
    ],
    travelTips: [
      "Argentina's currency situation is complex — research the 'blue dollar' exchange rate and use ATMs wisely to maximize your budget.",
      "Dinner before 9 p.m. is unusual; embrace the local schedule and enjoy a late-night culture where restaurants fill after 10 p.m.",
      "Taxis from the street can be unsafe — use licensed remis taxis booked through your hotel or ride-hailing apps like Cabify.",
      "Carry small bills for markets and empanada shops; large notes are often refused in small establishments.",
      "The Metro (Subte) is cheap and reliable for central neighborhoods; buy a rechargeable SUBE card from a kiosk.",
      "Learn a few words of Rioplatense Spanish — 'vos' replaces 'tú' and porteños appreciate any attempt at the local dialect.",
      "Buenos Aires is one of the safest major cities in South America — but remain vigilant in crowded markets and on busy avenues.",
    ],
    gallery: [
      "/images/trand-5.jpg",
      "/images/about-9.jpg",
      "/images/about-3.jpg",
      "/images/about-4.jpg",
      "/images/about-5.jpg",
    ],
  },

  patagonia: {
    slug: "patagonia",
    name: "Patagonia",
    country: "Argentina",
    region: "South America",
    tagline: "Glaciers, granite towers, and the raw edge of the world at the tip of South America",
    heroImage: "/images/offer-1.jpg",
    overview:
      "Patagonia is the world's idea of wilderness made real — a sweep of wind-scoured steppes, turquoise glacial lakes, and granite towers so sharp they seem to pierce the clouds. Straddling the southern tip of Argentina and Chile, this vast region covers roughly 400,000 square miles and holds some of the most dramatic landscapes on Earth: the Torres del Paine massif rising like a fortress from the Patagonian steppe, the Perito Moreno Glacier advancing into Lago Argentino with a thunderous crack and calve, and the mythical Route 40 stitching together remote estancias and forgotten Tehuelche petroglyphs.\n\nEl Chaltén, a village born in 1985 to assert Argentine sovereignty, has grown into the trekking capital of South America, its trails leading directly from wooden guesthouses to the base of Cerro Torre and Monte Fitz Roy — two of the most technically demanding peaks on the planet. For those who prefer horizontal adventure, the Perito Moreno Glacier offers guided ice walks across its crevassed blue surface, while sea kayaking in the Beagle Channel near Ushuaia — the southernmost city in the world — places paddlers alongside Magellanic penguins and southern fur seals.\n\nPatagonia rewards patience and layering: the weather changes within minutes, wind gusts have been measured at 200 km/h, and the light — when it breaks through storm clouds — illuminates the peaks in shades of copper and gold that no filter can replicate. This is a place where nature holds final authority, and humans are grateful visitors.",
    quickFacts: {
      currency: "Argentine Peso (ARS) in Argentina; Chilean Peso (CLP) in Chile",
      climate: "Cold, windy, and unpredictable year-round; summers (Dec–Feb) are mildest",
      bestSeason: "November–March for trekking; June–August for winter silence and snowscapes",
      languages: "Spanish",
      timeZone: "ART (UTC−3) Argentina; CLT (UTC−3) Chile",
      drivingSide: "Right",
    },
    itinerary: [
      {
        day: 1,
        title: "Arrival in El Calafate & Perito Moreno Glacier",
        location: "El Calafate, Santa Cruz Province",
        description:
          "Arrive in El Calafate, gateway to Los Glaciares National Park, and head directly to the Perito Moreno Glacier — one of the few glaciers on Earth that is still advancing. Walk the elevated boardwalks as ice towers crash into Lago Argentino with explosive booms, and if conditions allow, join a minitrekking tour on the ice itself.",
        highlights: [
          "Watch massive ice towers calve into Lago Argentino from boardwalk viewpoints",
          "Walk on Perito Moreno's surface with crampons on a guided mini-trekking tour",
          "Photograph the glacier's electric-blue crevasses and ice caves",
          "Dine on Patagonian lamb stew at a lakeside restaurant in El Calafate",
        ],
        image: "/images/offer-1.jpg",
      },
      {
        day: 2,
        title: "Lago Argentino Boat Tour & Upsala Glacier",
        location: "Lago Argentino",
        description:
          "Board a catamaran on Lago Argentino to reach the remote Upsala Glacier, navigating through a floating iceberg field of cathedral-sized blue ice. Stop at Estancia Cristina for a guided walk through lenga beech forests before returning across the wind-whipped lake.",
        highlights: [
          "Navigate icebergs the size of office buildings on a Lago Argentino catamaran",
          "Walk the moraine fields above Upsala Glacier for panoramic views",
          "Visit Estancia Cristina and its pioneer-era museum",
          "Spot condors riding thermals above the glacial valley",
        ],
        image: "/images/about-2.jpg",
      },
      {
        day: 3,
        title: "Drive to El Chaltén & Fitz Roy Trek",
        location: "El Chaltén, Santa Cruz Province",
        description:
          "Drive north through the steppe to El Chaltén, where the granite spires of Monte Fitz Roy and Cerro Torre define the skyline. Hike the Laguna de los Tres trail for the iconic close-up view of Fitz Roy reflected in a glacial lake, and explore the town's artisan chocolate shops and micro-breweries in the evening.",
        highlights: [
          "Hike the Laguna de los Tres trail (8-hour round trip) to Fitz Roy's base",
          "Photograph the 'Smoking Mountain' (Cerro Torre) from Laguna Torre",
          "Sample locally brewed Patagonian craft beers at a wood-panelled hostel",
          "Watch the alpenglow turn Fitz Roy orange and pink at sunset",
        ],
        image: "/images/about-1.jpg",
      },
      {
        day: 4,
        title: "Ushuaia & the End of the World",
        location: "Ushuaia, Tierra del Fuego",
        description:
          "Fly south to Ushuaia — the world's southernmost city — wedged between the Martial Mountains and the Beagle Channel. Cruise past sea lions and cormorant colonies on the Beagle Channel, visit the Prison Museum in the old penitentiary, and hike in Tierra del Fuego National Park through forests of lenga beech to Lapataia Bay.",
        highlights: [
          "Cruise the Beagle Channel past sea lion rocks and Les Éclaireurs Lighthouse",
          "Visit Lapataia Bay, the end of the Panamericana Highway, at the national park",
          "Tour the restored 1896 Ushuaia Prison and its fascinating exhibit",
          "Eat centolla (king crab) chowder at a dockside restaurant",
        ],
        image: "/images/about-3.jpg",
      },
      {
        day: 5,
        title: "Torres del Paine Base Towers Hike",
        location: "Torres del Paine, Chile",
        description:
          "Cross into Chile for the legendary Base Las Torres hike in Torres del Paine National Park. The 8-hour round-trip rewards with the sight of three granite towers mirrored in a teal glacial lake — arguably the most photographed image in Patagonia. Return via bus to Puerto Natales for a final Patagonian lamb asado.",
        highlights: [
          "Hike the steep trail to Base Las Torres and the iconic mirrored lake",
          "Cross a swinging suspension bridge over a glacial river",
          "Spot guanacos, Andean foxes, and condors along the trail",
          "Celebrate the day's achievement with a lamb asado in Puerto Natales",
        ],
        image: "/images/about-4.jpg",
      },
    ],
    thingsToDo: [
      {
        title: "Perito Moreno Ice Trek",
        description:
          "Strap on crampons and walk the surface of one of the world's largest glaciers with a certified guide on a minitrekking tour.",
        iconName: "Mountain",
      },
      {
        title: "Torres del Paine Base Trek",
        description:
          "Complete the legendary hike to the base of Patagonia's three granite towers and their ice-blue mirror lake.",
        iconName: "MapPin",
      },
      {
        title: "Beagle Channel Kayaking",
        description:
          "Paddle the Beagle Channel near Ushuaia, sharing waters with Magellanic penguins, sea lions, and southern fur seals.",
        iconName: "Waves",
      },
      {
        title: "Estancia Life Experience",
        description:
          "Stay overnight at a working estancia and experience lamb herding, gaucho horsemanship, and traditional Patagonian asado.",
        iconName: "Landmark",
      },
      {
        title: "Lago Argentino Iceberg Cruise",
        description:
          "Navigate through cathedral-sized drifting icebergs on a catamaran tour of Lago Argentino's remote glacier arms.",
        iconName: "Globe",
      },
      {
        title: "Monte Fitz Roy Sunrise",
        description:
          "Wake at 4 a.m. and hike to Laguna de los Tres to witness Fitz Roy's granite towers turn copper-gold at first light.",
        iconName: "Mountain",
      },
    ],
    travelTips: [
      "Book accommodation in El Chaltén and Torres del Paine months in advance — peak season (Dec–Feb) fills up extremely quickly.",
      "Layer constantly — Patagonian weather can change from sun to blizzard in 20 minutes; always carry a waterproof shell.",
      "Wind gusts can be violent and dangerous on exposed ridges; crouch low and hold trekking poles horizontally in extreme gusts.",
      "Carry Argentine pesos and Chilean pesos separately — ATMs in small towns frequently run out of cash.",
      "Purchase National Park entry tickets online before arriving at Torres del Paine to avoid queues at the gate.",
      "Hire a local guide for Fitz Roy treks if you're not experienced — trail markings can be obscured by snow and fog.",
      "Drink directly from glacial streams on backcountry trails — Patagonia's river water is among the cleanest on Earth.",
    ],
    gallery: [
      "/images/offer-1.jpg",
      "/images/about-1.jpg",
      "/images/about-2.jpg",
      "/images/about-4.jpg",
      "/images/about-3.jpg",
    ],
  },

  banff: {
    slug: "banff",
    name: "Banff",
    country: "Canada",
    region: "North America",
    tagline: "Turquoise glacier lakes, Rocky Mountain peaks, and iconic wilderness trails",
    heroImage: "/images/about-2.jpg",
    overview:
      "Banff National Park — Canada's oldest and most celebrated park — is a place where the Rocky Mountains display their full theatrical authority: glaciers calving into lakes of impossible turquoise, elk wandering hotel parking lots with regal indifference, and the Trans-Canada Highway threading through valleys watched over by 3,000-metre peaks. Established in 1885 around a chance discovery of hot springs, Banff has evolved into one of the world's most visited natural destinations without losing its wild, vertiginous soul.\n\nLake Louise, often called the 'Gem of the Rockies,' turns photographers into pilgrims: its glacier-fed waters shift from green to teal to cobalt depending on the angle of the sun, backed by the Victoria Glacier and flanked by the Fairmont Château Lake Louise, whose walls of windows reflect the spectacle perfectly. Moraine Lake, with its ring of ten peaks and even more vivid blue-green water, graced the back of the Canadian twenty-dollar bill and rewards the 5 a.m. pilgrim with a parking space and solitude before the crowds arrive.\n\nBeyond the postcard scenes, Banff offers world-class skiing on three interconnected mountains, backcountry camping along the Rockwall Trail, grizzly bear sightings in the Bow Valley, and the Icefields Parkway — one of the world's great scenic drives — linking Banff to Jasper through 230 kilometres of unbroken mountain grandeur. Whether you arrive in winter dusted with snow or summer blazing with wildflowers, Banff rewards every visit with moments that make the rest of the world feel small.",
    quickFacts: {
      currency: "Canadian Dollar (CAD)",
      climate: "Continental mountain climate; cold winters (−20°C), warm summers (up to 30°C)",
      bestSeason: "June–September for hiking; December–March for skiing",
      languages: "English, French",
      timeZone: "MST (UTC−7) / MDT (UTC−6) in summer",
      drivingSide: "Right",
    },
    itinerary: [
      {
        day: 1,
        title: "Banff Townsite & Bow Valley Exploration",
        location: "Banff Townsite",
        description:
          "Arrive in Banff and begin with the Cave and Basin National Historic Site, where the hot spring discovery that created the park still bubbles. Walk the Bow River Loop trail through pine forest, soak in the Upper Hot Springs, and enjoy Banff Avenue's restaurants and outdoor gear shops before dinner overlooking the Bow Valley.",
        highlights: [
          "Visit Cave and Basin Historic Site — the park's founding thermal hot spring",
          "Walk the Bow River Loop trail through mixed forest for elk sightings",
          "Soak in the Upper Hot Springs against a mountain backdrop",
          "Watch for bighorn sheep grazing on Mount Norquay slopes at dusk",
        ],
        image: "/images/about-2.jpg",
      },
      {
        day: 2,
        title: "Lake Louise & Moraine Lake",
        location: "Lake Louise Area",
        description:
          "Rise at 5 a.m. to beat crowds at Moraine Lake — the ten-peak amphitheatre reflected in otherworldly teal water. Drive the short distance to Lake Louise for a mid-morning canoe rental, paddling toward the Victoria Glacier while hoarfrost clings to the surrounding peaks. Afternoon hike to Lake Agnes Tea House, perched on a cliff above the lake.",
        highlights: [
          "Photograph Moraine Lake's teal water surrounded by the Valley of the Ten Peaks",
          "Paddle a red canoe across Lake Louise toward the Victoria Glacier",
          "Hike to Lake Agnes Tea House for a scone and glacier views",
          "Walk the lakeshore trail through larches turning gold in September",
        ],
        image: "/images/about-3.jpg",
      },
      {
        day: 3,
        title: "Icefields Parkway & Athabasca Glacier",
        location: "Icefields Parkway, Jasper National Park",
        description:
          "Drive the 230-km Icefields Parkway — repeatedly named the world's most scenic road — stopping at Peyto Lake's wolf-shaped overlook and the Columbia Icefield. Walk on the Athabasca Glacier with crampons, then visit the Columbia Icefield Skywalk for glass-floored views over a 280-metre cliff.",
        highlights: [
          "Stop at Peyto Lake Lookout for the turquoise wolf-shaped lake panorama",
          "Walk on the Athabasca Glacier surface on a guided tour with crampons",
          "Stand on the Columbia Icefield Skywalk glass floor above a glacial valley",
          "Photograph Bow Lake and Bow Glacier reflected in wind-still water",
        ],
        image: "/images/about-4.jpg",
      },
      {
        day: 4,
        title: "Sulphur Mountain Gondola & Johnston Canyon",
        location: "Banff & Bow Valley Parkway",
        description:
          "Ride the Banff Gondola to Sulphur Mountain's summit for 360-degree views of six mountain ranges, then hike the ridgeline boardwalk to a restored 1903 cosmic ray station. Afternoon at Johnston Canyon, where two spectacular waterfalls crash through narrow limestone walls, and the canyon walls are draped in ice in winter.",
        highlights: [
          "Ride the gondola to Sulphur Mountain for panoramic six-range views",
          "Walk the summit ridgeline boardwalk to the historic cosmic ray station",
          "Hike through Johnston Canyon's slot canyon to Upper and Lower Falls",
          "Spot dippers (aquatic birds) nesting behind the canyon waterfall spray",
        ],
        image: "/images/about-5.jpg",
      },
      {
        day: 5,
        title: "Banff Wildlife Safari & Farewell Hike",
        location: "Bow Valley & Vermilion Lakes",
        description:
          "Join a dawn wildlife safari along the Bow Valley Parkway, where wolves, coyotes, and bears are most active. Canoe the Vermilion Lakes at sunrise for Mount Rundle reflections, then hike the Tunnel Mountain trail — a gentle 2-hour loop — for your final panoramic farewell to the Rockies.",
        highlights: [
          "Dawn wildlife safari along Bow Valley Parkway for wolves, elk, and bears",
          "Canoe the Vermilion Lakes at sunrise for Mount Rundle reflections",
          "Hike Tunnel Mountain trail for 360-degree views of the Banff valley",
          "Final dinner at a log-cabin steakhouse with a view of Cascade Mountain",
        ],
        image: "/images/about-1.jpg",
      },
    ],
    thingsToDo: [
      {
        title: "Moraine Lake Sunrise",
        description:
          "Wake before dawn and witness the ten peaks turn rose-gold above Moraine Lake's teal water — Canada's most photographed scene.",
        iconName: "Mountain",
      },
      {
        title: "Lake Louise Canoeing",
        description:
          "Paddle a red canoe across the glacier-fed emerald waters of Lake Louise with the Victoria Glacier as your backdrop.",
        iconName: "Waves",
      },
      {
        title: "Icefields Parkway Drive",
        description:
          "Drive 230 km of the world's most scenic road, stopping at turquoise lakes, glaciers, and mountain passes all the way to Jasper.",
        iconName: "MapPin",
      },
      {
        title: "Athabasca Glacier Walk",
        description:
          "Strap on crampons and walk the surface of the Athabasca Glacier, one of the most accessible ice fields in North America.",
        iconName: "Mountain",
      },
      {
        title: "Wildlife Safari",
        description:
          "Join a guided dawn wildlife tour along Bow Valley Parkway for sightings of wolves, elk, black bears, and grizzlies.",
        iconName: "Camera",
      },
      {
        title: "Banff Hot Springs Soak",
        description:
          "Relax in the mineralized waters of the Upper Hot Springs with mountain views — the thermal springs that founded the park.",
        iconName: "Heart",
      },
    ],
    travelTips: [
      "Purchase a Parks Canada Discovery Pass before arrival — it covers entry to Banff, Jasper, and dozens of other national parks for one year.",
      "Arrive at Moraine Lake before 6 a.m. or after 5 p.m. in summer — Parks Canada may restrict vehicle access during peak hours.",
      "Bears are very active in the park; carry bear spray on every hike and store all food in bear-resistant containers or lockers.",
      "Book accommodation in Banff and Lake Louise 6–12 months ahead — the Fairmont and other popular lodges sell out within hours of release.",
      "Download the Banff trail map offline via the AllTrails app — cell service is unreliable in remote areas of the park.",
      "The Icefields Parkway can be closed by snowfall even in June — check Alberta 511 road conditions before driving.",
      "Wildlife on roads is extremely common; drive slowly, never stop in the middle of the road, and never approach or feed animals.",
    ],
    gallery: [
      "/images/about-2.jpg",
      "/images/about-3.jpg",
      "/images/about-4.jpg",
      "/images/about-5.jpg",
      "/images/about-1.jpg",
    ],
  },

  vancouver: {
    slug: "vancouver",
    name: "Vancouver",
    country: "Canada",
    region: "North America",
    tagline: "Ocean-meets-mountain cityscape with world-class dining and outdoor adventures",
    heroImage: "/images/about-3.jpg",
    overview:
      "Vancouver is a city that cheats geography in the best possible way — where urban skyline, Pacific Ocean, and snow-capped mountains exist in the same frame, sometimes within the same smartphone photograph. Routinely ranked among the world's most livable cities, Vancouver is a place where a morning ski run at Whistler Blackcomb transitions seamlessly into an afternoon kayak around Indian Arm, and where the evening might unfold over omakase sushi in Richmond — North America's most celebrated Japanese dining city outside Japan.\n\nStanley Park, a 405-hectare old-growth temperate rainforest on a peninsula jutting into Burrard Inlet, is the city's green heart: its 8.8-kilometre seawall encircles ancient western red cedars, sandy beaches, and blue herons fishing in tidal pools, all within ten minutes of the downtown financial district. Granville Island, once an industrial peninsula, now buzzes as one of Canada's great public markets — where Vietnamese spring rolls, house-made cheese, artisan gin, and handmade kayaks share cramped aisles under corrugated-iron roofs.\n\nIn the winter months, Vancouver is a ski city: two local mountains (Cypress and Grouse) are accessible by car in under an hour, while Whistler — a 90-minute drive north — is a world-class resort with 200+ marked runs and a legendary après-ski culture. In summer, the same mountains become mountain-biking terrain, while the Capilano River and Squamish provide world-class rock climbing and wind-surfing. The food scene reflects a multicultural city built on Pacific Rim immigration, and what Vancouver lacks in European history it more than compensates for in natural grandeur.",
    quickFacts: {
      currency: "Canadian Dollar (CAD)",
      climate: "Mild oceanic; rainy winters (7°C), warm dry summers (22°C)",
      bestSeason: "June–September for outdoor activities; December–March for skiing",
      languages: "English; Mandarin, Cantonese, Punjabi widely spoken",
      timeZone: "PST (UTC−8) / PDT (UTC−7) in summer",
      drivingSide: "Right",
    },
    itinerary: [
      {
        day: 1,
        title: "Stanley Park & Gastown Exploration",
        location: "Downtown Vancouver",
        description:
          "Cycle or walk Stanley Park's 8.8-km seawall loop at dawn when the old-growth forest meets the ocean in silence. Stop at the Totem Poles, Third Beach, and Siwash Rock before heading to Gastown for brunch near the famous steam clock and artisan coffee roasters.",
        highlights: [
          "Cycle the Stanley Park seawall loop with mountain and ocean views",
          "Visit the totem poles and Brockton Point Lighthouse in Stanley Park",
          "Photograph the historic Gastown Steam Clock and cobblestone streets",
          "Brunch on eggs Benedict at a Gastown heritage building café",
        ],
        image: "/images/about-3.jpg",
      },
      {
        day: 2,
        title: "Granville Island & Kitsilano Beach",
        location: "Granville Island & Kitsilano",
        description:
          "Take the tiny Aquabus ferry to Granville Island Public Market for a morning of tasting artisan cheese, fresh Dungeness crab, and Okanagan fruit preserves. Walk or cycle to Kitsilano Beach for an afternoon swim in a heated outdoor pool overlooking English Bay, followed by dinner on 4th Avenue's global restaurant strip.",
        highlights: [
          "Taste artisan food at Granville Island Public Market — cheese, fish, and preserves",
          "Cross Burrard Inlet to Granville Island on the tiny Aquabus passenger ferry",
          "Swim in the heated saltwater Kitsilano Pool with mountain backdrop views",
          "Dine on fresh Pacific salmon at a Kitsilano seafood restaurant",
        ],
        image: "/images/about-4.jpg",
      },
      {
        day: 3,
        title: "North Shore Mountains & Capilano Suspension Bridge",
        location: "North Vancouver",
        description:
          "Cross the Lions Gate Bridge to North Vancouver for the Capilano Suspension Bridge — 137 metres long, 70 metres above the rainforest river — then walk the Cliffwalk cantilevered platforms along the granite cliff face. In the afternoon, hike the Grouse Grind ('Mother Nature's Stairmaster') for city views from 1,100 metres.",
        highlights: [
          "Cross the swaying Capilano Suspension Bridge above the old-growth canyon",
          "Walk the cantilevered Cliffwalk platforms through the rainforest granite cliff",
          "Hike the Grouse Grind trail (2.9 km vertical) for panoramic city views",
          "Take the Grouse Mountain gondola down and watch wild wolf ambassadors",
        ],
        image: "/images/about-5.jpg",
      },
      {
        day: 4,
        title: "Whistler Day Trip & Sea-to-Sky Highway",
        location: "Squamish & Whistler",
        description:
          "Drive the breathtaking Sea-to-Sky Highway north of Vancouver, stopping at Shannon Falls (335 metres) and the Stawamus Chief granite monolith, a premier rock climbing destination. Continue to Whistler Village for mountain biking, gondola rides to the peak, and a leisurely village stroll with craft beer and poutine.",
        highlights: [
          "Stop at Shannon Falls — BC's third-highest waterfall — on the Sea-to-Sky",
          "Photograph the granite face of Stawamus Chief rising above Howe Sound",
          "Ride the Whistler Village Gondola to the Roundhouse for peak views",
          "Mountain bike the World Cup trails of Whistler Bike Park (seasonal)",
        ],
        image: "/images/about-1.jpg",
      },
      {
        day: 5,
        title: "Richmond Night Market & Pacific Rim Cuisine",
        location: "Richmond & Vancouver Waterfront",
        description:
          "Drive south to Richmond's Steveston Village — a historic salmon cannery turned waterfront town — for fresh fish and chips on the dock. In the evening, explore the Richmond Night Market for pan-Asian street food, bubble tea experiments, and handmade goods before a farewell sunset from Canada Place's harbor promenade.",
        highlights: [
          "Eat fish and chips dockside at Steveston Fisherman's Wharf in Richmond",
          "Sample 100+ Asian street food vendors at the Richmond Night Market",
          "Walk Canada Place's harbor promenade for a final Vancouver skyline sunset",
          "Spot bald eagles fishing in the Fraser River delta at dusk",
        ],
        image: "/images/about-2.jpg",
      },
    ],
    thingsToDo: [
      {
        title: "Stanley Park Seawall Cycle",
        description:
          "Ride or walk the 8.8 km seawall loop around Stanley Park with views of mountains, ocean, and old-growth rainforest simultaneously.",
        iconName: "MapPin",
      },
      {
        title: "Capilano Suspension Bridge",
        description:
          "Cross a 137-metre suspension bridge over a rainforest canyon and walk the Cliffwalk platforms embedded in the granite cliff.",
        iconName: "Mountain",
      },
      {
        title: "Whistler Ski or Bike",
        description:
          "Hit the slopes of North America's top ski resort in winter, or descend legendary mountain bike trails in summer.",
        iconName: "Dumbbell",
      },
      {
        title: "Granville Island Market",
        description:
          "Browse one of Canada's best public markets for fresh Pacific seafood, artisan cheese, craft gin, and handmade goods.",
        iconName: "Globe",
      },
      {
        title: "Sea-to-Sky Gondola",
        description:
          "Ride the gondola above Squamish for aerial views of Howe Sound's fjord, glaciers, and the Stawamus Chief granite monolith.",
        iconName: "Camera",
      },
      {
        title: "Pacific Rim Dining",
        description:
          "Explore Vancouver's celebrated food scene — from Japanese omakase in Richmond to Dungeness crab and Okanagan wine pairings.",
        iconName: "Utensils",
      },
    ],
    travelTips: [
      "Vancouver is expensive — book accommodation early and consider staying in Kitsilano or East Vancouver for better value than downtown.",
      "Public transit (SkyTrain and buses) is excellent and affordable; a Compass Card is cheaper than buying single tickets.",
      "Weather is notoriously grey in winter — pack a packable waterproof jacket as an absolute essential year-round.",
      "Richmond's Lansdowne and Aberdeen areas offer exceptional and authentic Asian cuisine at surprisingly low prices.",
      "The Grouse Grind is a one-way strenuous hike — take the gondola back down and have the exact $15 CAD fare ready.",
      "Book the Sea-to-Sky Gondola tickets online for a small discount and to avoid peak-hour queues on summer weekends.",
      "Bears do visit North Shore neighborhoods at night — follow local guidelines and never leave food waste accessible.",
    ],
    gallery: [
      "/images/about-3.jpg",
      "/images/about-4.jpg",
      "/images/about-5.jpg",
      "/images/about-1.jpg",
      "/images/about-2.jpg",
    ],
  },
};
