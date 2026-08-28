-- Vietnam Tour Packages Schema and Data
-- This script creates tables if they do not exist and inserts/updates the 11 Vietnam packages.

CREATE TABLE IF NOT EXISTS `tour_packages` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `slug` VARCHAR(255) UNIQUE NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `country` VARCHAR(255) NOT NULL,
  `region` VARCHAR(255) NOT NULL,
  `tagline` VARCHAR(255),
  `hero_image` VARCHAR(255),
  `overview` TEXT,
  `coords_lon` DOUBLE,
  `coords_lat` DOUBLE,
  `tag` VARCHAR(100),
  `tag_color` VARCHAR(100),
  `short_description` TEXT,
  `thumbnail_image` VARCHAR(255),
  `status` VARCHAR(20) DEFAULT 'published',
  `price` VARCHAR(255),
  `duration` VARCHAR(100),
  `quick_fact_capital` VARCHAR(255),
  `quick_fact_currency` VARCHAR(255),
  `quick_fact_climate` VARCHAR(255),
  `quick_fact_best_season` VARCHAR(255),
  `quick_fact_languages` VARCHAR(255),
  `quick_fact_time_zone` VARCHAR(255),
  `quick_fact_driving_side` VARCHAR(255),
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS `tour_package_itinerary` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `tour_package_id` INT NOT NULL,
  `day_number` INT NOT NULL,
  `title` VARCHAR(255) NOT NULL,
  `location` VARCHAR(255) NOT NULL,
  `description` TEXT,
  `highlights` JSON,
  `image_url` VARCHAR(255),
  `sort_order` INT DEFAULT 0,
  FOREIGN KEY (`tour_package_id`) REFERENCES `tour_packages` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS `tour_package_things_to_do` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `tour_package_id` INT NOT NULL,
  `title` VARCHAR(255) NOT NULL,
  `description` TEXT,
  `icon_name` VARCHAR(255),
  `sort_order` INT DEFAULT 0,
  FOREIGN KEY (`tour_package_id`) REFERENCES `tour_packages` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS `tour_package_travel_tips` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `tour_package_id` INT NOT NULL,
  `tip` TEXT NOT NULL,
  `sort_order` INT DEFAULT 0,
  FOREIGN KEY (`tour_package_id`) REFERENCES `tour_packages` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS `tour_package_images` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `tour_package_id` INT NOT NULL,
  `image_url` VARCHAR(255) NOT NULL,
  `sort_order` INT DEFAULT 0,
  FOREIGN KEY (`tour_package_id`) REFERENCES `tour_packages` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- Package: Ha Long Bay
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  'ha-long-bay', 'Ha Long Bay', 'Vietnam', 'Southeast Asia', 
  'Where dragon legends carved a seascape of 1,600 limestone dreams', 'https://images.pexels.com/photos/5334877/pexels-photo-5334877.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 'Ha Long Bay — ''Descending Dragon Bay'' — is one of Earth''s most surreal seascapes: nearly 1,600 limestone karsts and islands rising from emerald waters in Vietnam''s northeastern Gulf of Tonkin. UNESCO inscribed it in 1994, and its mythology is equally grand — local legend says a family of dragons descended from heaven and spat out jewels that turned into the islands, forming a barrier against invaders. Today, the ''invaders'' are travelers on luxury junk boats, and the jewels are real: hidden lagoons, floating fishing villages, and caves dripping with stalactites.

The bay''s most iconic experience is an overnight cruise — gliding between karst towers as the sun sets, kayaking into hidden grottoes at dawn, and dining on squid and morning glory on the upper deck under a canopy of stars. Sung Sot (Surprise) Cave is the largest grotto, its chambers lit to reveal formations resembling elephants, turtles, and a mandarin''s study. Ti Top Island offers a steep climb to a viewpoint where the entire bay spreads below like a watercolor painting.

Less-visited Lan Ha Bay, just south, offers the same karst drama with a fraction of the boat traffic — its Cat Ba Island base adds jungle trekking, rock climbing, and visits to the endangered Cat Ba langur''s habitat. Whether you come for the geology, the gastronomy, or the sheer dreamlike atmosphere of waking up surrounded by mist-shrouded stone pillars, Ha Long Bay imprints itself permanently on the memory.', 
  107, 20.9, 'Nature', 'bg-teal-500', 
  'Emerald waters, towering limestone karsts, and luxury cruises.', '/images/dest-4.jpg', 
  'published', '', '4 Days', 
  'Hanoi (national capital)', 'Vietnamese Dong (₫)', 'Subtropical with cool, misty winters and warm, humid summers', 'October–December (cool, clear) & March–May (warm, calm seas)', 
  'Vietnamese, English (tourist boats)', 'ICT (UTC+7)', 'Right'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = 'ha-long-bay');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 1, 'Hanoi to Ha Long & Overnight Cruise', 'Ha Long Bay, Quang Ninh Province', 
  'Depart Hanoi and board your junk boat at Tuan Chau Marina. Cruise past the iconic Fighting Cock Rocks and through karst-studded channels as lunch is served on deck. Afternoon kayaking into hidden lagoons, then evening squid fishing from the boat under a star-flooded sky.', '["Board a traditional wooden junk boat at Tuan Chau Marina","Kayak into a hidden lagoon enclosed by sheer karst walls","Try squid fishing under the stars from the boat deck","Fall asleep anchored among mist-wreathed limestone towers"]', 'https://images.pexels.com/photos/5334877/pexels-photo-5334877.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 0
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 2, 'Sung Sot Cave & Ti Top Island', 'Central Ha Long Bay', 
  'Wake for sunrise tai chi on the sundeck, then explore Sung Sot Cave — a cathedral-sized grotto where stalactites form shapes the guides will eagerly narrate. Afterward, climb the 427 steps of Ti Top Island for the bay''s most famous panoramic view: an infinity of karsts vanishing into haze.', '["Practice sunrise tai chi on the junk boat''s upper deck","Walk through the immense Sung Sot (Surprise) Cave chambers","Climb Ti Top Island for the bay''s most iconic panoramic view","Swim from Ti Top''s crescent beach surrounded by karsts"]', 'https://images.pexels.com/photos/13061833/pexels-photo-13061833.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 1
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 3, 'Lan Ha Bay & Cat Ba Island', 'Lan Ha Bay & Cat Ba Island', 
  'Cruise south into quieter Lan Ha Bay, where karst islets are densely jungled and floating fish farms bob in turquoise channels. Disembark at Cat Ba Island for a hike through the national park''s primary rainforest, home to the critically endangered Cat Ba langur — fewer than 70 remain in the wild.', '["Cruise the uncrowded karst channels of Lan Ha Bay","Hike through Cat Ba National Park''s primary rainforest","Learn about the critically endangered Cat Ba langur","Kayak through Lan Ha''s floating fishing villages"]', 'https://images.pexels.com/photos/6876860/pexels-photo-6876860.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 2
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 4, 'Floating Village & Farewell Cruise', 'Cua Van Floating Village, Ha Long Bay', 
  'Row a bamboo sampan through Cua Van Floating Village — one of the bay''s last inhabited fishing communities — where children paddle to school and homes float on oil-drum pontoons. Enjoy a farewell brunch on deck as the boat returns past the towering karsts to Tuan Chau Marina.', '["Row a bamboo sampan through Cua Van Floating Village","Meet fishermen and learn traditional net-casting techniques","Brunch on deck with panoramic karst views","Photograph the bay''s morning mist from the top deck"]', 'https://images.pexels.com/photos/5481202/pexels-photo-5481202.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 3
);
INSERT INTO `tour_package_things_to_do` (
  `tour_package_id`, `title`, `description`, `icon_name`, `sort_order`
) VALUES (
  @pkg_id, 'Overnight Junk Boat Cruises', 'Sleep aboard a traditional wooden junk, waking to sunrise over limestone towers — the quintessential Ha Long Bay experience.', 'Waves', 0
);
INSERT INTO `tour_package_things_to_do` (
  `tour_package_id`, `title`, `description`, `icon_name`, `sort_order`
) VALUES (
  @pkg_id, 'Cave Exploration', 'Enter vast grottos like Sung Sot, Dau Go, and Thien Cung, where stalactites and stalagmites form otherworldly galleries.', 'Mountain', 1
);
INSERT INTO `tour_package_things_to_do` (
  `tour_package_id`, `title`, `description`, `icon_name`, `sort_order`
) VALUES (
  @pkg_id, 'Kayaking Hidden Lagoons', 'Paddle through sea-level arches into enclosed lagoons surrounded by vertical karst walls — silent, emerald, and magical.', 'Globe', 2
);
INSERT INTO `tour_package_things_to_do` (
  `tour_package_id`, `title`, `description`, `icon_name`, `sort_order`
) VALUES (
  @pkg_id, 'Rock Climbing at Cat Ba', 'Cat Ba''s limestone cliffs offer world-class deep-water soloing — climbing overhanging routes above the sea and splashing down on failed attempts.', 'Dumbbell', 3
);
INSERT INTO `tour_package_things_to_do` (
  `tour_package_id`, `title`, `description`, `icon_name`, `sort_order`
) VALUES (
  @pkg_id, 'Floating Village Visits', 'Row a sampan through Cua Van and Vung Vieng, where entire communities live, fish, and raise families on the water.', 'Camera', 4
);
INSERT INTO `tour_package_things_to_do` (
  `tour_package_id`, `title`, `description`, `icon_name`, `sort_order`
) VALUES (
  @pkg_id, 'Sunset Cooking Classes', 'Learn to roll Vietnamese spring rolls and cook caramelized clay-pot fish on the junk boat''s kitchen deck as the sun sets.', 'Utensils', 5
);
INSERT INTO `tour_package_travel_tips` (
  `tour_package_id`, `tip`, `sort_order`
) VALUES (
  @pkg_id, 'Book at least a 2-night cruise to reach Lan Ha Bay and the less-touristed areas; single-night cruises cover only the most crowded section.', 0
);
INSERT INTO `tour_package_travel_tips` (
  `tour_package_id`, `tip`, `sort_order`
) VALUES (
  @pkg_id, 'Avoid July–August typhoon season when cruises may be cancelled and visibility drops to near zero in heavy rain.', 1
);
INSERT INTO `tour_package_travel_tips` (
  `tour_package_id`, `tip`, `sort_order`
) VALUES (
  @pkg_id, 'Choose a boat operated by a reputable company (Heritage Line, Bhaya, Indochina Junk) — safety standards vary wildly.', 2
);
INSERT INTO `tour_package_travel_tips` (
  `tour_package_id`, `tip`, `sort_order`
) VALUES (
  @pkg_id, 'Bring layers — winter mornings (November–February) on the bay can drop to 10°C with chilling wind.', 3
);
INSERT INTO `tour_package_travel_tips` (
  `tour_package_id`, `tip`, `sort_order`
) VALUES (
  @pkg_id, 'Bargain firmly for kayak and cave excursion add-ons — some operators inflate ''optional activity'' prices.', 4
);
INSERT INTO `tour_package_travel_tips` (
  `tour_package_id`, `tip`, `sort_order`
) VALUES (
  @pkg_id, 'Carry anti-nausea medication if you''re prone to seasickness; the bay is usually calm, but winter swells can rock smaller boats.', 5
);
INSERT INTO `tour_package_images` (
  `tour_package_id`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 'https://images.pexels.com/photos/5334877/pexels-photo-5334877.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 0
);
INSERT INTO `tour_package_images` (
  `tour_package_id`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 'https://images.pexels.com/photos/13061833/pexels-photo-13061833.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 1
);
INSERT INTO `tour_package_images` (
  `tour_package_id`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 'https://images.pexels.com/photos/6876860/pexels-photo-6876860.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 2
);
INSERT INTO `tour_package_images` (
  `tour_package_id`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 'https://images.pexels.com/photos/5481202/pexels-photo-5481202.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 3
);

-- Package: Hanoi
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  'hanoi', 'Hanoi', 'Vietnam', 'Southeast Asia', 
  'A thousand years of history stirred into a bowl of pho', 'https://images.pexels.com/photos/32014789/pexels-photo-32014789.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 'Hanoi is a city of layered time — a thousand-year-old capital where the 11th-century Temple of Literature sits blocks from French colonial boulevards, where grandmothers in conical hats squat beside bubbling pho pots at 5 AM on the same pavement where evening cocktail bars pour craft gin. The Old Quarter''s 36 streets, each historically named for the trade it housed — Silk Street, Silver Street, Paper Street — remain a chaotic, intoxicating labyrinth of motorbikes, hanging lanterns, and vendors balancing shoulder poles laden with mangoes.

Hoan Kiem Lake is the city''s spiritual center, anchored by the red-lacquered Huc Bridge leading to Ngoc Son Temple on its tiny island. Each morning, hundreds of Hanoians perform tai chi on its shores before the city''s five million motorbikes roar to life. The Ho Chi Minh Mausoleum complex — where Uncle Ho lies in a crystal sarcophagus — is the political pilgrimage, while the Vietnam Museum of Ethnology provides the cultural one, with 54 ethnic groups'' traditions meticulously preserved.

Hanoi''s food scene is arguably Vietnam''s finest: bun cha (grilled pork noodles) at the stall Obama and Bourdain visited, egg coffee (cà phê trứng) invented at Café Giang in 1946, and banh mi from a cart on Ly Quoc Su Street. The city rewards those who slow down, who sit on a tiny plastic stool, who accept that crossing the street is an act of faith, and who understand that in Hanoi, every meal is a masterpiece.', 
  105.85, 21.03, 'Historical', 'bg-amber-600', 
  'Ancient quarter charm, war history museums, and French colonial elegance.', '/images/dest-5.jpg', 
  'published', '', '4 Days', 
  'Hanoi (national capital)', 'Vietnamese Dong (₫)', 'Humid subtropical with cool, drizzly winters', 'October–December (cool, crisp) & March–April (warm, clear)', 
  'Vietnamese, English (tourist areas)', 'ICT (UTC+7)', 'Right'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = 'hanoi');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 1, 'Old Quarter & Hoan Kiem Lake', 'Old Quarter & Hoan Kiem, Hanoi', 
  'Plunge into the Old Quarter''s 36 streets on foot — dodge motorbikes on Hang Ma (Paper Street), buy silk on Hang Gai, and sip the world''s first egg coffee at Café Giang, invented here in 1946 when fresh milk was scarce. Stroll around Hoan Kiem Lake at dusk, crossing the red Huc Bridge to Ngoc Son Temple as the city lights begin to twinkle.', '["Explore the 36 ancient guild streets of the Old Quarter","Drink egg coffee (cà phê trứng) at the original Café Giang","Cross the red Huc Bridge to Ngoc Son Temple on Hoan Kiem Lake","Watch the weekend pedestrian night market on Hang Dao Street"]', 'https://images.pexels.com/photos/32014789/pexels-photo-32014789.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 0
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 2, 'Ho Chi Minh Complex & Temple of Literature', 'Ba Dinh & Dong Da, Hanoi', 
  'Pay respects at the Ho Chi Minh Mausoleum, where Uncle Ho lies preserved in a dimly lit granite chamber. Walk through his simple stilt house and the Presidential Palace gardens, then visit the Temple of Literature — Vietnam''s first university, founded in 1070, where stone stelae atop tortoise sculptures honor centuries of scholars.', '["Visit Ho Chi Minh''s preserved body in the mausoleum","Walk through Ho Chi Minh''s humble stilt house and garden","Explore the Temple of Literature''s five courtyards","Photograph the stone tortoise stelae honoring imperial scholars"]', 'https://images.pexels.com/photos/4999686/pexels-photo-4999686.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 1
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 3, 'Bun Cha Trail & Water Puppet Theatre', 'Various, Hanoi', 
  'Start with bun cha at Huong Lien — the very stall where Anthony Bourdain and Barack Obama shared a meal (the ''Obama table'' is preserved behind glass). Explore the Vietnam Museum of Ethnology in the afternoon, then watch a water puppet show at Thang Long Theatre — a uniquely Vietnamese art form dating to the 11th century.', '["Eat bun cha at the famous Obama-Bourdain stall on Le Van Huu","Tour the Vietnam Museum of Ethnology and its outdoor houses","Watch a water puppet show at Thang Long Theatre","Try banh cuon (steamed rice rolls) from a street vendor"]', 'https://images.pexels.com/photos/2977435/pexels-photo-2977435.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 2
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 4, 'French Quarter & Train Street', 'Hoan Kiem & French Quarter, Hanoi', 
  'Walk Hanoi''s French Quarter — tree-lined boulevards, the Beaux-Arts Opera House, and the Metropole Hotel where Graham Greene wrote ''The Quiet American.'' Visit the infamous Train Street, where café tables sit centimeters from active railway tracks and residents fold laundry between passing trains.', '["Admire the Hanoi Opera House''s French Beaux-Arts façade","Have a cocktail at the Metropole''s Bamboo Bar","Sit at a Train Street café as the locomotive passes inches away","Browse contemporary Vietnamese art at Manzi Art Space"]', 'https://images.pexels.com/photos/36608645/pexels-photo-36608645.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 3
);
INSERT INTO `tour_package_things_to_do` (
  `tour_package_id`, `title`, `description`, `icon_name`, `sort_order`
) VALUES (
  @pkg_id, 'Street Food Safari', 'Eat bun cha, pho bo, banh mi, egg coffee, and bun rieu from tiny stalls — Hanoi''s pavements are the world''s greatest restaurant.', 'Utensils', 0
);
INSERT INTO `tour_package_things_to_do` (
  `tour_package_id`, `title`, `description`, `icon_name`, `sort_order`
) VALUES (
  @pkg_id, 'Old Quarter Walking Tour', 'Navigate the 36 guild streets where silk, silver, paper, and traditional medicine vendors have traded for centuries.', 'MapPin', 1
);
INSERT INTO `tour_package_things_to_do` (
  `tour_package_id`, `title`, `description`, `icon_name`, `sort_order`
) VALUES (
  @pkg_id, 'Water Puppet Theatre', 'Watch an 11th-century art form at Thang Long Theatre — carved wooden puppets dance on water to live traditional music.', 'Landmark', 2
);
INSERT INTO `tour_package_things_to_do` (
  `tour_package_id`, `title`, `description`, `icon_name`, `sort_order`
) VALUES (
  @pkg_id, 'Hoan Kiem Lake Morning Ritual', 'Join locals for dawn tai chi and badminton around the lake, then watch calligraphers practice Vietnamese script on the promenade.', 'Heart', 3
);
INSERT INTO `tour_package_things_to_do` (
  `tour_package_id`, `title`, `description`, `icon_name`, `sort_order`
) VALUES (
  @pkg_id, 'French Colonial Architecture', 'Photograph the Opera House, Metropole Hotel, St. Joseph''s Cathedral, and tree-lined boulevards that earned Hanoi its ''Paris of the East'' nickname.', 'Camera', 4
);
INSERT INTO `tour_package_travel_tips` (
  `tour_package_id`, `tip`, `sort_order`
) VALUES (
  @pkg_id, 'Cross the street by walking slowly and steadily — motorbikes will flow around you. Stopping or running causes accidents.', 0
);
INSERT INTO `tour_package_travel_tips` (
  `tour_package_id`, `tip`, `sort_order`
) VALUES (
  @pkg_id, 'Winter (December–February) is cold and drizzly; pack a warm jacket and umbrella. Hanoi is not tropical-warm year-round.', 1
);
INSERT INTO `tour_package_travel_tips` (
  `tour_package_id`, `tip`, `sort_order`
) VALUES (
  @pkg_id, 'Avoid taxis without meters; use Grab or the Hanoi-specific taxi companies Mailinh (green) and Vinasun (white).', 2
);
INSERT INTO `tour_package_travel_tips` (
  `tour_package_id`, `tip`, `sort_order`
) VALUES (
  @pkg_id, 'Bring cash in small denominations — many street food stalls don''t accept card, and VND 500,000 notes are hard to break.', 3
);
INSERT INTO `tour_package_travel_tips` (
  `tour_package_id`, `tip`, `sort_order`
) VALUES (
  @pkg_id, 'Train Street access is periodically restricted; check with locals or your hotel before visiting, as police may close it.', 4
);
INSERT INTO `tour_package_travel_tips` (
  `tour_package_id`, `tip`, `sort_order`
) VALUES (
  @pkg_id, 'Bargain at markets but not at street food stalls — prices are fixed and already incredibly cheap (₫30,000–50,000 per dish).', 5
);
INSERT INTO `tour_package_images` (
  `tour_package_id`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 'https://images.pexels.com/photos/32014789/pexels-photo-32014789.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 0
);
INSERT INTO `tour_package_images` (
  `tour_package_id`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 'https://images.pexels.com/photos/4999686/pexels-photo-4999686.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 1
);
INSERT INTO `tour_package_images` (
  `tour_package_id`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 'https://images.pexels.com/photos/2977435/pexels-photo-2977435.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 2
);
INSERT INTO `tour_package_images` (
  `tour_package_id`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 'https://images.pexels.com/photos/36608645/pexels-photo-36608645.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 3
);

-- Package: Ho Chi Minh City
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  'ho-chi-minh-city', 'Ho Chi Minh City', 'Vietnam', 'Southeast Asia', 
  'Living history where resilience meets relentless energy', 'https://images.pexels.com/photos/7132576/pexels-photo-7132576.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 'Ho Chi Minh City — still affectionately called Saigon by most residents — is Vietnam''s engine of commerce, creativity, and confrontation with the past. The War Remnants Museum, housed in the former US Information Agency building, presents the American War (as Vietnamese call it) through gut-wrenching photographs, decommissioned aircraft, and a recreated tiger cage prison cell. The Cu Chi Tunnels, 70 kilometers northwest, allow visitors to crawl through the same underground network that sheltered Viet Cong fighters beneath American bases.

But Saigon is far more than war memorials. District 1 buzzes with French colonial grandeur — the Notre-Dame Cathedral (under restoration), Central Post Office designed by Gustave Eiffel''s firm, and the Reunification Palace where a North Vietnamese tank crashed through the gates on April 30, 1975, ending the war. The Ben Thanh Market is a whirlwind of lacquerware, ao dai fabrics, and bánh mì vendors, while the surrounding streets transform into a night market after dark.

The city''s modern pulse beats in District 2''s Thao Dien — a leafy expatriate enclave of craft coffee shops and farm-to-table restaurants — and in Bui Vien Street''s backpacker strip, where neon signs, cheap beer, and live music collide nightly. The Mekong Delta, reachable in 90 minutes, unfurls a world of floating markets, coconut candy workshops, and sampan rides through nipa palm tunnels. Saigon doesn''t just tell Vietnam''s story — it is the story, told at full volume.', 
  106.63, 10.82, 'Education', 'bg-indigo-500', 
  'Field trips to Cu Chi Tunnels, War Remnants Museum, textile factories, and living history lessons.', '/images/dest-12.jpg', 
  'published', '', '5 Days', 
  'Hanoi (national capital)', 'Vietnamese Dong (₫)', 'Tropical with distinct wet (May–Nov) and dry (Dec–Apr) seasons', 'December–April (dry, warm, comfortable humidity)', 
  'Vietnamese, English (tourist areas)', 'ICT (UTC+7)', 'Right'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = 'ho-chi-minh-city');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 1, 'War Remnants & Reunification Palace', 'District 1, Ho Chi Minh City', 
  'Begin at the War Remnants Museum, where three floors of photographs, weaponry, and personal accounts document the human cost of the American War. Walk to the Reunification Palace — preserved exactly as it was on April 30, 1975 — and descend into its underground war room with original telecommunications equipment.', '["Witness the War Remnants Museum''s powerful photo exhibitions","Explore the Reunification Palace''s preserved war rooms","See the actual tank that crashed through the palace gates in 1975","Visit the rooftop helipad where the last helicopter evacuated"]', 'https://images.pexels.com/photos/7132576/pexels-photo-7132576.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 0
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 2, 'Cu Chi Tunnels', 'Cu Chi District, 70km northwest of HCMC', 
  'Drive to the Cu Chi Tunnels — a 250-kilometer underground network of living quarters, hospitals, kitchens, and command centers used by Viet Cong guerrillas. Crawl through widened tunnel sections, inspect booby trap displays, and — if you choose — fire AK-47s and M16s at the onsite shooting range.', '["Crawl through sections of the original Cu Chi Tunnel network","See ingenious booby traps and camouflaged tunnel entrances","Learn how fighters lived underground for months at a time","Optional: fire historical weapons at the tunnel shooting range"]', 'https://images.pexels.com/photos/2973305/pexels-photo-2973305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 1
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 3, 'Colonial Saigon & Ben Thanh Market', 'District 1, Ho Chi Minh City', 
  'Photograph the Notre-Dame Cathedral''s twin bell towers, admire Gustave Eiffel''s Central Post Office with its vaulted ceiling and hand-painted maps, then dive into Ben Thanh Market for silk ao dai, lacquerware, and bánh mì with pâté. As evening falls, the surrounding streets become a vibrant night market.', '["Photograph Notre-Dame Cathedral and Central Post Office","Bargain for silk and lacquerware at Ben Thanh Market","Eat the city''s best bánh mì at Bánh Mì Huỳnh Hoa","Explore the Ben Thanh Night Market for street food and souvenirs"]', 'https://images.pexels.com/photos/3683671/pexels-photo-3683671.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 2
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 4, 'Mekong Delta Day Trip', 'Cai Be & Vinh Long, Mekong Delta', 
  'Drive south to the Mekong Delta and board a sampan through nipa palm canals to floating markets piled high with pineapples, dragon fruit, and watermelons. Visit a coconut candy workshop, taste local rice wine, and cycle through fruit orchards and bonsai villages on the river islands.', '["Cruise a sampan through nipa palm-lined Mekong canals","Visit Cai Be floating market at dawn","Watch coconut candy being hand-pulled at a family workshop","Cycle through tropical fruit orchards on a Mekong island"]', 'https://images.pexels.com/photos/1660996/pexels-photo-1660996.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 3
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 5, 'Cholon Chinatown & Rooftop Farewell', 'District 5 & District 1, HCMC', 
  'Explore Cholon, Saigon''s sprawling Chinatown, where the incense-filled Thien Hau Temple honors the sea goddess Mazu and Binh Tay Market overflows with dried seafood, herbal medicine, and ceramics. Return to District 1 for a farewell cocktail at the Saigon Saigon rooftop bar, watching the city''s neon skyline ignite.', '["Visit the incense-coil-draped Thien Hau Temple in Cholon","Browse Binh Tay Market''s wholesale stalls of herbs and spices","Eat dim sum at a traditional Cholon restaurant","Toast the trip at the Saigon Saigon rooftop bar at sunset"]', 'https://images.pexels.com/photos/36418057/pexels-photo-36418057.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 4
);
INSERT INTO `tour_package_things_to_do` (
  `tour_package_id`, `title`, `description`, `icon_name`, `sort_order`
) VALUES (
  @pkg_id, 'War History Immersion', 'Visit the War Remnants Museum, Cu Chi Tunnels, and Reunification Palace to understand Vietnam''s painful and resilient 20th-century history.', 'BookOpen', 0
);
INSERT INTO `tour_package_things_to_do` (
  `tour_package_id`, `title`, `description`, `icon_name`, `sort_order`
) VALUES (
  @pkg_id, 'Street Food Marathon', 'From bánh mì at Huỳnh Hoa to phở at Phở Hòa Pasteur and broken rice at Cơm Tấm Bụi Sài Gòn — Saigon feeds you nonstop.', 'Utensils', 1
);
INSERT INTO `tour_package_things_to_do` (
  `tour_package_id`, `title`, `description`, `icon_name`, `sort_order`
) VALUES (
  @pkg_id, 'Mekong Delta Excursion', 'Ride sampans through floating markets, taste coconut candy fresh from the vat, and cycle through dragon fruit orchards south of the city.', 'Waves', 2
);
INSERT INTO `tour_package_things_to_do` (
  `tour_package_id`, `title`, `description`, `icon_name`, `sort_order`
) VALUES (
  @pkg_id, 'Cholon Chinatown Exploration', 'Wander Saigon''s vibrant Chinese district for dim sum, herbal medicine markets, and the incense-wreathed Thien Hau Temple.', 'MapPin', 3
);
INSERT INTO `tour_package_things_to_do` (
  `tour_package_id`, `title`, `description`, `icon_name`, `sort_order`
) VALUES (
  @pkg_id, 'Rooftop Bar Scene', 'Sip cocktails above the skyline at Chill Skybar, Air 360, or the historic Saigon Saigon bar atop the Caravelle Hotel.', 'Lightbulb', 4
);
INSERT INTO `tour_package_things_to_do` (
  `tour_package_id`, `title`, `description`, `icon_name`, `sort_order`
) VALUES (
  @pkg_id, 'Motorbike City Tours', 'Hop on the back of a vintage Vespa for a nighttime food tour or a dawn ride through District 4''s hidden alleys with local guides.', 'Car', 5
);
INSERT INTO `tour_package_travel_tips` (
  `tour_package_id`, `tip`, `sort_order`
) VALUES (
  @pkg_id, 'Book Cu Chi Tunnels through a reputable operator — the Ben Dinh site is more touristic but better maintained; Ben Duoc is more authentic.', 0
);
INSERT INTO `tour_package_travel_tips` (
  `tour_package_id`, `tip`, `sort_order`
) VALUES (
  @pkg_id, 'Cross streets like a local: walk slowly and steadily, and motorbikes will weave around you — never stop or run.', 1
);
INSERT INTO `tour_package_travel_tips` (
  `tour_package_id`, `tip`, `sort_order`
) VALUES (
  @pkg_id, 'Use Grab for motorbike taxis (Grab Bike) — it''s the cheapest, fastest way to beat Saigon''s legendary traffic.', 2
);
INSERT INTO `tour_package_travel_tips` (
  `tour_package_id`, `tip`, `sort_order`
) VALUES (
  @pkg_id, 'Carry a photocopy of your passport — police occasionally check ID, and carrying the original risks loss in the crowds.', 3
);
INSERT INTO `tour_package_travel_tips` (
  `tour_package_id`, `tip`, `sort_order`
) VALUES (
  @pkg_id, 'District 1 accommodation is most convenient, but District 2 (Thao Dien) and District 7 (Phu My Hung) offer quieter, greener alternatives.', 4
);
INSERT INTO `tour_package_travel_tips` (
  `tour_package_id`, `tip`, `sort_order`
) VALUES (
  @pkg_id, 'Rainy season (May–November) brings brief, intense afternoon downpours — carry a light raincoat and they''ll pass within an hour.', 5
);
INSERT INTO `tour_package_travel_tips` (
  `tour_package_id`, `tip`, `sort_order`
) VALUES (
  @pkg_id, 'Bargain at Ben Thanh Market — opening prices are typically 3–4x the final agreed price.', 6
);
INSERT INTO `tour_package_images` (
  `tour_package_id`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 'https://images.pexels.com/photos/7132576/pexels-photo-7132576.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 0
);
INSERT INTO `tour_package_images` (
  `tour_package_id`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 'https://images.pexels.com/photos/2973305/pexels-photo-2973305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 1
);
INSERT INTO `tour_package_images` (
  `tour_package_id`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 'https://images.pexels.com/photos/3683671/pexels-photo-3683671.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 2
);
INSERT INTO `tour_package_images` (
  `tour_package_id`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 'https://images.pexels.com/photos/1660996/pexels-photo-1660996.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 3
);
INSERT INTO `tour_package_images` (
  `tour_package_id`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 'https://images.pexels.com/photos/36418057/pexels-photo-36418057.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 4
);

-- Package: Da Nang
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  'da-nang', 'Da Nang', 'Vietnam', 'Southeast Asia', 
  'A modern coastal marvel framed by mountains, marble, and sandy shores', 'https://images.pexels.com/photos/2407636/pexels-photo-2407636.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 'Da Nang is central Vietnam’s modern engine — a coastal metropolis that has transformed from a sleepy port into a bustling hub of bridges, skyscrapers, and pristine beaches. Fringed by the rugged Son Tra Peninsula and the sacred Marble Mountains, the city is sliced in half by the Han River, crossed by architectural showpieces like the fire-spitting Dragon Bridge. It serves as the gateway to three UNESCO World Heritage sites, but holds plenty of its own secrets: from the golden sands of My Khe Beach to the mist-shrouded peaks of Ba Na Hills where the Golden Bridge stands held by giant stone hands.', 
  108.2, 16.05, 'Adventure', 'bg-emerald-500', 
  'Breathtaking bridges, golden My Khe beach, Marble Mountains, and the stunning Golden Bridge.', 'https://images.pexels.com/photos/2407636/pexels-photo-2407636.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 
  'published', '', '3 Days', 
  'Hanoi (national capital)', 'Vietnamese Dong (₫)', 'Tropical monsoon — warm and sunny, wet season September–December', 'January–April (dry, moderate temperatures)', 
  'Vietnamese, English (widely spoken in tourist areas)', 'ICT (UTC+7)', 'Right'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = 'da-nang');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 1, 'Marble Mountains & My Khe Beach', 'Da Nang, Vietnam', 
  'Explore the limestone caves and Buddhist sanctuaries carved into the Marble Mountains. Climb to the summits for panoramic coastal views, then spend the afternoon relaxing on the golden sands of My Khe Beach. In the evening, walk along the Han River to see the illuminated bridges.', '["Climb the steps to Huyen Khong Cave in the Marble Mountains","Enjoy panoramic coastal views from the mountain summits","Relax or swim on the pristine My Khe Beach","Watch the Dragon Bridge spit fire and water (weekends at 9 PM)"]', 'https://images.pexels.com/photos/2407636/pexels-photo-2407636.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 0
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 2, 'Ba Na Hills & Golden Bridge', 'Truong Son Mountains, Da Nang', 
  'Ride the world-record cable car up to Ba Na Hills resort. Walk the iconic Golden Bridge, suspended 1,400 meters above sea level and held by colossal stone hands, and explore the replica French Village. Enjoy rides at the underground Fantasy Park and stroll the flower gardens.', '["Ride the scenic Ba Na Hills cable car system","Walk the iconic Golden Bridge and capture stunning photos","Explore the French Village and its European architecture","Ride the alpine coaster down the mountain slopes"]', 'https://images.pexels.com/photos/7286748/pexels-photo-7286748.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 1
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 3, 'Son Tra Peninsula & Cham Museum', 'Son Tra Peninsula, Da Nang', 
  'Drive along the coast of Son Tra (Monkey) Peninsula to visit Linh Ung Pagoda and its 67-meter Lady Buddha statue. Return to the city center to browse the world''s largest collection of Cham sandstone sculptures, documenting the historical Hindu empire of central Vietnam.', '["Visit the 67-meter tall Lady Buddha at Linh Ung Pagoda","Spot endangered red-shanked douc langurs on Son Tra slopes","Browse Cham sandstone sculptures at the Cham Museum","Dine on fresh seafood along the beachfront promenade"]', 'https://images.pexels.com/photos/1009837/pexels-photo-1009837.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 2
);
INSERT INTO `tour_package_things_to_do` (
  `tour_package_id`, `title`, `description`, `icon_name`, `sort_order`
) VALUES (
  @pkg_id, 'Golden Bridge Walk', 'Walk the world-famous Golden Bridge, a pedestrian bridge held by giant hands that offers spectacular views of the Truong Son mountains.', 'Landmark', 0
);
INSERT INTO `tour_package_things_to_do` (
  `tour_package_id`, `title`, `description`, `icon_name`, `sort_order`
) VALUES (
  @pkg_id, 'Beach Relaxation', 'Lounge on the white sands of My Khe Beach or Non Nuoc Beach, famous for their warm waters and excellent surf conditions.', 'Waves', 1
);
INSERT INTO `tour_package_things_to_do` (
  `tour_package_id`, `title`, `description`, `icon_name`, `sort_order`
) VALUES (
  @pkg_id, 'Marble Mountains Spelunking', 'Explore the maze of caves, grottoes, and ancient shrines hidden inside five limestone peaks named after the five elements.', 'Mountain', 2
);
INSERT INTO `tour_package_things_to_do` (
  `tour_package_id`, `title`, `description`, `icon_name`, `sort_order`
) VALUES (
  @pkg_id, 'Dragon Bridge Fire Show', 'Gather on the banks of the Han River on weekend nights to watch the dragon-shaped bridge breathe fire and water.', 'Lightbulb', 3
);
INSERT INTO `tour_package_travel_tips` (
  `tour_package_id`, `tip`, `sort_order`
) VALUES (
  @pkg_id, 'Check the Dragon Bridge schedule before visiting — the fire and water show starts at 9:00 PM on Saturdays and Sundays.', 0
);
INSERT INTO `tour_package_travel_tips` (
  `tour_package_id`, `tip`, `sort_order`
) VALUES (
  @pkg_id, 'Book Ba Na Hills tickets online in advance to bypass long queues at the lower ticket offices.', 1
);
INSERT INTO `tour_package_travel_tips` (
  `tour_package_id`, `tip`, `sort_order`
) VALUES (
  @pkg_id, 'Hire a motorbike to drive the Son Tra Peninsula loop for the best views, but be cautious of steep curves.', 2
);
INSERT INTO `tour_package_travel_tips` (
  `tour_package_id`, `tip`, `sort_order`
) VALUES (
  @pkg_id, 'Eat local dishes like Mi Quang (turmeric noodle soup) and Banh Xeo (crispy savory crepes) in local shops rather than resort restaurants.', 3
);
INSERT INTO `tour_package_images` (
  `tour_package_id`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 'https://images.pexels.com/photos/2407636/pexels-photo-2407636.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 0
);
INSERT INTO `tour_package_images` (
  `tour_package_id`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 'https://images.pexels.com/photos/1009837/pexels-photo-1009837.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 1
);
INSERT INTO `tour_package_images` (
  `tour_package_id`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 'https://images.pexels.com/photos/7286748/pexels-photo-7286748.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 2
);

-- Package: Sapa
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  'sapa', 'Sapa', 'Vietnam', 'Southeast Asia', 
  'Emerald rice terraces rising into the roof of Indochina', '/images/vietnam/sapa.png', 'Sapa town stands at the head of a deep valley of magnificent rice terraces that are still worked today as they have been for centuries. Enticing ribbons of road lead the eye down to the valley floor, white-water rivers rush among rice fields, and lush green mountains stretch into the distance as far as the eye can see. The highest peak in the region, Mount Fansipan also called ''Roof of Indochina'', crowns the rugged ridge line high above town, accessible by a scenic cable car. Sapa is also a rich cultural tapestry home to diverse ethnic minority groups like the Hmong, Red Dao, and Tay.', 
  103.84, 22.33, 'Nature', 'bg-teal-500', 
  'Mist-covered peaks, emerald terraced rice fields, and ethnic tribal villages at Fansipan''s base.', '/images/vietnam/sapa.png', 
  'published', '', '3 Days', 
  'Hanoi (national capital)', 'Vietnamese Dong (₫)', 'Temperate/alpine — cool summers and occasionally cold, snowy winters', 'March–May (clear, green terraces) & September–November (harvest season)', 
  'Vietnamese, Ethnic Minority languages, basic English', 'ICT (UTC+7)', 'Right'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = 'sapa');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 1, 'Sapa Town & Cat Cat Village', 'Sapa Town & Cat Cat Village', 
  'Arrive in Sapa and take in the cool mountain air. Walk down the valley to Cat Cat Village, a traditional Black Hmong settlement nestled next to a waterfall. Learn about Hmong weaving traditions, visit historical wooden homes, and watch cultural dance performances.', '["Explore Sapa town center and its stone church built by the French","Walk the scenic path down to Cat Cat Hmong Village","Photograph the waterfall and traditional waterwheels","Watch Hmong craft demonstrations including indigo fabric dyeing"]', '/images/vietnam/sapa.png', 0
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 2, 'Mount Fansipan & Cable Car', 'Mount Fansipan, Sapa', 
  'Ascend Mount Fansipan, the highest peak in Indochina at 3,143 meters. Ride the state-of-the-art cable car through the clouds, then climb the stone stairs past grand Buddhist pagodas and a giant bronze Buddha statue to stand at the summit monument.', '["Ride the world-record Fansipan cable car through misty valleys","Visit the beautiful pagodas and shrines on the mountain peak","Photograph the giant bronze Buddha statue sitting above the clouds","Stand at the summit marker of the ''Roof of Indochina''"]', 'https://images.pexels.com/photos/2088205/pexels-photo-2088205.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 1
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 3, 'Muong Hoa Valley Trekking', 'Muong Hoa Valley, Sapa', 
  'Embark on a scenic trek through the Muong Hoa Valley, passing through the villages of Y Linh Ho, Lao Chai, and Ta Van. Walk alongside stunning terraced rice paddies, meet local ethnic guides, and enjoy a traditional lunch overlooking the river.', '["Trek through the jaw-dropping rice terraces of Muong Hoa Valley","Visit Hmong and Giay villages to learn about their daily life","Cross rustic suspension bridges over mountain streams","Dine on local dishes prepared at a village homestay"]', 'https://images.pexels.com/photos/3601422/pexels-photo-3601422.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 2
);
INSERT INTO `tour_package_things_to_do` (
  `tour_package_id`, `title`, `description`, `icon_name`, `sort_order`
) VALUES (
  @pkg_id, 'Fansipan Cable Car', 'Ride the cable car to the peak of Mount Fansipan for 360-degree views of the Hoang Lien Son mountain range.', 'Mountain', 0
);
INSERT INTO `tour_package_things_to_do` (
  `tour_package_id`, `title`, `description`, `icon_name`, `sort_order`
) VALUES (
  @pkg_id, 'Rice Terrace Trekking', 'Hire a local guide to trek through the world''s most spectacular rice terraces, carved into the hillsides over generations.', 'MapPin', 1
);
INSERT INTO `tour_package_things_to_do` (
  `tour_package_id`, `title`, `description`, `icon_name`, `sort_order`
) VALUES (
  @pkg_id, 'Homestay Experience', 'Stay overnight in a traditional stilt home in Ta Van or Ta Phin village, eating home-cooked meals with ethnic minority hosts.', 'Globe', 2
);
INSERT INTO `tour_package_things_to_do` (
  `tour_package_id`, `title`, `description`, `icon_name`, `sort_order`
) VALUES (
  @pkg_id, 'Sapa Love Market', 'Explore the Saturday night market where ethnic minority youth gather for traditional singing, dating rituals, and flute playing.', 'Heart', 3
);
INSERT INTO `tour_package_travel_tips` (
  `tour_package_id`, `tip`, `sort_order`
) VALUES (
  @pkg_id, 'Bring sturdy, waterproof hiking boots — Sapa''s trekking trails can become very muddy and slippery in the rain.', 0
);
INSERT INTO `tour_package_travel_tips` (
  `tour_package_id`, `tip`, `sort_order`
) VALUES (
  @pkg_id, 'Weather changes rapidly; always pack a light raincoat and warm layers, even in summer.', 1
);
INSERT INTO `tour_package_travel_tips` (
  `tour_package_id`, `tip`, `sort_order`
) VALUES (
  @pkg_id, 'Support the local communities by hiring local ethnic minority guides directly or buying authentic handmade crafts.', 2
);
INSERT INTO `tour_package_travel_tips` (
  `tour_package_id`, `tip`, `sort_order`
) VALUES (
  @pkg_id, 'Pack insect repellent, sunscreen, and cash, as credit cards are not widely accepted in the rural villages.', 3
);
INSERT INTO `tour_package_images` (
  `tour_package_id`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, '/images/vietnam/sapa.png', 0
);
INSERT INTO `tour_package_images` (
  `tour_package_id`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 'https://images.pexels.com/photos/2088205/pexels-photo-2088205.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 1
);
INSERT INTO `tour_package_images` (
  `tour_package_id`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 'https://images.pexels.com/photos/3601422/pexels-photo-3601422.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 2
);

-- Package: Mui Ne
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  'mui-ne', 'Mui Ne', 'Vietnam', 'Southeast Asia', 
  'Vibrant coastal dunes, fishing harbors, and wind-blown sands', 'https://images.pexels.com/photos/6152257/pexels-photo-6152257.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 'Mui Ne has its roots in fishing, and it shows in the slow, relaxed pace of life. It''s easy to lose track of time here, riding bicycles along the coast, spending afternoons by the pool, and dining on fresh seafood with the sound of the waves in the background. With ideal wind conditions for kitesurfing and windsurfing, brightly colored kites are a fixture on Mui Ne''s beaches year-round. What makes Mui Ne truly unique is its desert landscape — a surreal enclave of towering red and white sand dunes right beside the tropical sea, bisected by a cooling stream flowing through a red clay canyon.', 
  108.29, 10.93, 'Beach', 'bg-blue-500', 
  'Sweeping red and white sand dunes, fishing harbors, and world-class windsurfing.', 'https://images.pexels.com/photos/6152257/pexels-photo-6152257.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 
  'published', '', '2 Days', 
  'Hanoi (national capital)', 'Vietnamese Dong (₫)', 'Hot and dry year-round with minimal rainfall', 'November–April (ideal wind for water sports, dry weather)', 
  'Vietnamese, English (in resorts)', 'ICT (UTC+7)', 'Right'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = 'mui-ne');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 1, 'Fairy Stream & Red Sand Dunes', 'Fairy Stream & Red Dunes, Mui Ne', 
  'Walk barefoot through the cool waters of the Fairy Stream (Suoi Tien), navigating between orange clay walls and strange sand formations. In the late afternoon, head to the Red Sand Dunes to watch a spectacular sunset over the rolling orange sand, trying sand-sliding on plastic boards.', '["Wander barefoot down the shallow Fairy Stream","Photograph the striking red and white clay formations","Climb the Red Sand Dunes for sunset views","Try sand-boarding down the dunes with local children"]', 'https://images.pexels.com/photos/6152257/pexels-photo-6152257.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 0
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 2, 'White Sand Dunes & Fishing Village', 'Bau Trang (White Dunes) & Harbor, Mui Ne', 
  'Rise early to watch the sunrise over the massive White Sand Dunes (Bau Trang), located next to a lotus-filled freshwater lake. Ride an ATV or jeep over the sand peaks, then drive back along the coast to visit the Mui Ne Fishing Harbor, watching hundreds of round bamboo basket boats landing their morning catch.', '["Watch the sunrise over the vast White Sand Dunes","Ride an ATV or jeep over the sweeping sand peaks","Photograph the lotus flower lake (Bau Sen) inside the desert","Visit the Mui Ne Fishing Harbor filled with colorful round basket boats"]', 'https://images.pexels.com/photos/3601422/pexels-photo-3601422.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 1
);
INSERT INTO `tour_package_things_to_do` (
  `tour_package_id`, `title`, `description`, `icon_name`, `sort_order`
) VALUES (
  @pkg_id, 'Kitesurfing & Windsurfing', 'Take lessons at Mui Ne''s world-class surf schools, benefiting from Southeast Asia''s strongest and most consistent coastal winds.', 'Waves', 0
);
INSERT INTO `tour_package_things_to_do` (
  `tour_package_id`, `title`, `description`, `icon_name`, `sort_order`
) VALUES (
  @pkg_id, 'Desert ATV Riding', 'Rent an ATV at the White Sand Dunes to zoom up and down the giant wind-sculpted sand dunes.', 'Car', 1
);
INSERT INTO `tour_package_things_to_do` (
  `tour_package_id`, `title`, `description`, `icon_name`, `sort_order`
) VALUES (
  @pkg_id, 'Fairy Stream Walk', 'Walk barefoot in the ankle-deep water of this scenic stream, framed by bamboo forests and red-and-white clay cliffs.', 'MapPin', 2
);
INSERT INTO `tour_package_things_to_do` (
  `tour_package_id`, `title`, `description`, `icon_name`, `sort_order`
) VALUES (
  @pkg_id, 'Seafood Feast at Bo Ke', 'Select live crabs, prawns, and clams from tanks along the beachfront Bo Ke embankment and have them grilled fresh over charcoal.', 'Utensils', 3
);
INSERT INTO `tour_package_travel_tips` (
  `tour_package_id`, `tip`, `sort_order`
) VALUES (
  @pkg_id, 'Avoid visiting the dunes in the middle of the day, as the sand becomes extremely hot and the sun is punishing.', 0
);
INSERT INTO `tour_package_travel_tips` (
  `tour_package_id`, `tip`, `sort_order`
) VALUES (
  @pkg_id, 'Always negotiate jeep or ATV hire prices before climbing aboard at the White Dunes.', 1
);
INSERT INTO `tour_package_travel_tips` (
  `tour_package_id`, `tip`, `sort_order`
) VALUES (
  @pkg_id, 'Bring sunglasses and a scarf to protect your eyes and face from wind-blown sand at the dunes.', 2
);
INSERT INTO `tour_package_travel_tips` (
  `tour_package_id`, `tip`, `sort_order`
) VALUES (
  @pkg_id, 'Mui Ne is a 4-hour drive from Ho Chi Minh City; booking a private car or luxury limousine bus is the most comfortable transit.', 3
);
INSERT INTO `tour_package_images` (
  `tour_package_id`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 'https://images.pexels.com/photos/6152257/pexels-photo-6152257.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 0
);
INSERT INTO `tour_package_images` (
  `tour_package_id`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 'https://images.pexels.com/photos/3601422/pexels-photo-3601422.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 1
);

-- Package: Nha Trang
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  'nha-trang', 'Nha Trang', 'Vietnam', 'Southeast Asia', 
  'Azure bays, therapeutic mud baths, and island-hopping escapes', 'https://images.pexels.com/photos/931018/pexels-photo-931018.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 'Perched on a pristine stretch of the southern coast, Nha Trang is a playground for sunseekers. Days here are spent dining on delicious seafood, snorkeling around stunning islands, and partying on the sand after dark. Nha Trang lays claim to some of the country''s finest luxury resorts, thrilling watersports, and therapeutic mineral mud baths. The city is also rich in culture, home to the 8th-century Po Nagar Cham Towers, a legacy of the ancient Cham civilization that once ruled central Vietnam.', 
  109.19, 12.24, 'Beach', 'bg-blue-500', 
  'Azure bays, white-sand beaches, exciting marine reserves, and therapeutic mud baths.', 'https://images.pexels.com/photos/931018/pexels-photo-931018.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 
  'published', '', '3 Days', 
  'Hanoi (national capital)', 'Vietnamese Dong (₫)', 'Tropical savanna with a dry season from January to August', 'February–May (clear skies, warm water, best for diving)', 
  'Vietnamese, English (widely spoken in resorts)', 'ICT (UTC+7)', 'Right'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = 'nha-trang');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 1, 'Cham Towers & Mud Bath Wellness', 'Po Nagar Towers & Thap Ba Mud Baths, Nha Trang', 
  'Visit Po Nagar Cham Towers, a beautifully preserved temple complex built between the 8th and 11th centuries on a hill overlooking the river. In the afternoon, head to Thap Ba Hot Springs for a relaxing experience in a warm mineral mud bath, followed by a swim in natural hot water pools.', '["Explore the historic brick shrines of Po Nagar Cham Towers","Observe local Buddhists praying to the goddess Yan Po Nagar","Soak in a therapeutic warm mineral mud bath at Thap Ba","Relax in natural hot spring pools and waterfalls"]', 'https://images.pexels.com/photos/931018/pexels-photo-931018.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 0
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 2, 'VinWonders Amusement Island & Cable Car', 'Hon Tre Island, Nha Trang', 
  'Board the VinWonders cable car (one of the longest over-water cable cars in the world) to Hon Tre Island. Spend the day exploring the massive VinWonders theme park, featuring a water park, alpine coaster, botanical gardens, and an aquarium.', '["Ride the scenic over-water cable car to Hon Tre Island","Splash down waterslides at the beachfront water park","Ride the alpine coaster with panoramic bay views","Watch the spectacular music and light show in the evening"]', 'https://images.pexels.com/photos/7286748/pexels-photo-7286748.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 1
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 3, 'Island Hopping & Coral Reef Snorkeling', 'Hon Mun & Hon Mot Islands, Nha Trang Bay', 
  'Board a speed boat to explore the islands of Nha Trang Bay. Stop at Hon Mun Island, a protected marine reserve, to snorkel or scuba dive among vibrant coral reefs and tropical fish. Enjoy a floating bar experience and a seafood lunch on a floating platform.', '["Speedboat cruise across the turquoise Nha Trang Bay","Snorkel or dive among protected coral reefs at Hon Mun Island","Enjoy a floating bar cocktail party in the sea","Feast on grilled fish and sea urchins at a floating restaurant"]', 'https://images.pexels.com/photos/2407636/pexels-photo-2407636.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 2
);
INSERT INTO `tour_package_things_to_do` (
  `tour_package_id`, `title`, `description`, `icon_name`, `sort_order`
) VALUES (
  @pkg_id, 'Mineral Mud Baths', 'Soak in warm, mineral-rich mud at Thap Ba, I-Resort, or 100 Egg Mud Bath to rejuvenate your skin and relax after travel.', 'Heart', 0
);
INSERT INTO `tour_package_things_to_do` (
  `tour_package_id`, `title`, `description`, `icon_name`, `sort_order`
) VALUES (
  @pkg_id, 'Scuba Diving in Hon Mun', 'Explore the rich marine biodiversity of Hon Mun Marine Protected Area, offering Vietnam''s best coral diving conditions.', 'Waves', 1
);
INSERT INTO `tour_package_things_to_do` (
  `tour_package_id`, `title`, `description`, `icon_name`, `sort_order`
) VALUES (
  @pkg_id, 'VinWonders Theme Park', 'Visit the ''Disneyland of Vietnam'' on Hon Tre Island, featuring water slides, rollercoasters, and a massive castle-themed square.', 'Landmark', 2
);
INSERT INTO `tour_package_things_to_do` (
  `tour_package_id`, `title`, `description`, `icon_name`, `sort_order`
) VALUES (
  @pkg_id, 'Seafood Dining on Tran Phu', 'Walk the Tran Phu beachfront road to dine on fresh lobsters, scallops, and squid in open-air seafood restaurants.', 'Utensils', 3
);
INSERT INTO `tour_package_travel_tips` (
  `tour_package_id`, `tip`, `sort_order`
) VALUES (
  @pkg_id, 'Avoid visiting during the rainy and typhoon season (September to December) as seas become rough and diving visibility drops.', 0
);
INSERT INTO `tour_package_travel_tips` (
  `tour_package_id`, `tip`, `sort_order`
) VALUES (
  @pkg_id, 'Wear sunscreen and a rash guard when snorkeling to protect yourself from the intense tropical sun and occasional jellyfish.', 1
);
INSERT INTO `tour_package_travel_tips` (
  `tour_package_id`, `tip`, `sort_order`
) VALUES (
  @pkg_id, 'Taxis are cheap, but always ensure the driver uses the meter or use Grab to book your rides.', 2
);
INSERT INTO `tour_package_travel_tips` (
  `tour_package_id`, `tip`, `sort_order`
) VALUES (
  @pkg_id, 'Visit Po Nagar Towers early in the morning (around 8 AM) to beat the tourist crowds and tour buses.', 3
);
INSERT INTO `tour_package_images` (
  `tour_package_id`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 'https://images.pexels.com/photos/931018/pexels-photo-931018.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 0
);
INSERT INTO `tour_package_images` (
  `tour_package_id`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 'https://images.pexels.com/photos/7286748/pexels-photo-7286748.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 1
);
INSERT INTO `tour_package_images` (
  `tour_package_id`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 'https://images.pexels.com/photos/2407636/pexels-photo-2407636.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 2
);

-- Package: Phu Quoc
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  'phu-quoc', 'Phu Quoc', 'Vietnam', 'Southeast Asia', 
  'Pristine white beaches, tropical reefs, and island cable cars', 'https://images.pexels.com/photos/7286748/pexels-photo-7286748.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 'Phu Quoc is a Vietnamese island off the coast of Cambodia in the Gulf of Thailand. It''s known for its white-sand beaches and luxurious resorts, most of which are along the palm-lined southwest coast. More than half of the island is part of Phu Quoc National Park, which features mountains, dense tropical jungle, hiking trails, and wildlife. The island is also famous for producing some of the world''s best fish sauce (nuoc mam) and high-quality black pepper, and has been developed with spectacular attractions like the Hon Thom Cable Car — the longest non-stop three-way cable car system in the world.', 
  104.01, 10.22, 'Luxury', 'bg-indigo-500', 
  'Tropical island paradise, pristine beaches, safari parks, and the world''s longest over-water cable car.', 'https://images.pexels.com/photos/7286748/pexels-photo-7286748.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 
  'published', '', '3 Days', 
  'Hanoi (national capital)', 'Vietnamese Dong (₫)', 'Tropical monsoon with a wet season from May to November', 'November–April (dry, calm seas, sunny skies)', 
  'Vietnamese, English (widely spoken in resorts)', 'ICT (UTC+7)', 'Right'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = 'phu-quoc');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 1, 'Sao Beach & Historical Prison', 'Southern Phu Quoc Island', 
  'Spend your morning relaxing on the powdery white sand and swimming in the calm turquoise waters of Sao Beach. In the afternoon, visit the Phu Quoc Prison (Coconut Tree Prison), a historic site showcasing the island''s history during the Indochina and Vietnam Wars.', '["Relax or swim on the postcard-perfect Sao Beach","Walk under the swaying palm trees along the shore","Visit the historic exhibits at Coconut Tree Prison","Stop by a local pearl farm to see pearl cultivation"]', 'https://images.pexels.com/photos/7286748/pexels-photo-7286748.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 0
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 2, 'Hon Thom Island Cable Car', 'An Thoi Archipelago, Southern Phu Quoc', 
  'Ride the record-breaking Hon Thom Cable Car across the sea, offering breathtaking 360-degree aerial views of the islands and coral reefs. Spend the day on Hon Thom Island enjoying the Aquatopia Water Park and relaxing on the beautiful beach.', '["Ride the 7.8km over-water Hon Thom Cable Car","Enjoy 360-degree views of fishing boats and islands","Ride water slides at Aquatopia Water Park on Hon Thom","Relax on the shaded sands of Hon Thom beach"]', 'https://images.pexels.com/photos/3601422/pexels-photo-3601422.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 1
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 3, 'VinWonders Safari & Night Market', 'Northern Phu Quoc & Duong Dong', 
  'Head north to visit the Vinpearl Safari, Vietnam''s largest open-air wild animal conservation park. Spot tigers, rhinos, and giraffes from a safari bus. In the evening, explore the bustling Duong Dong Night Market to shop for handicrafts and dine on grilled street seafood.', '["Take a safari bus through the open-air wildlife conservation park","Feed giraffes and elephants at the safari station","Explore the Duong Dong Night Market in the evening","Try local street food like grilled sea urchins and rolled ice cream"]', 'https://images.pexels.com/photos/1009837/pexels-photo-1009837.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 2
);
INSERT INTO `tour_package_things_to_do` (
  `tour_package_id`, `title`, `description`, `icon_name`, `sort_order`
) VALUES (
  @pkg_id, 'Hon Thom Cable Car', 'Ride the longest over-water cable car in the world, spanning three islands in the southern archipelago.', 'Waves', 0
);
INSERT INTO `tour_package_things_to_do` (
  `tour_package_id`, `title`, `description`, `icon_name`, `sort_order`
) VALUES (
  @pkg_id, 'Sao Beach Lounge', 'Lounge on the swings suspended over the clear waters of Sao Beach, famous for its powder-white sand.', 'Heart', 1
);
INSERT INTO `tour_package_things_to_do` (
  `tour_package_id`, `title`, `description`, `icon_name`, `sort_order`
) VALUES (
  @pkg_id, 'Fish Sauce Factory Tour', 'Visit a traditional distillery to see how giant wooden vats ferment anchovies into Phu Quoc''s famous high-grade fish sauce.', 'Utensils', 2
);
INSERT INTO `tour_package_things_to_do` (
  `tour_package_id`, `title`, `description`, `icon_name`, `sort_order`
) VALUES (
  @pkg_id, 'Sunset Town Exploring', 'Explore the European-inspired ''Sunset Town'' near the southern cable car station, complete with a replica Roman colosseum and Kiss Bridge.', 'Landmark', 3
);
INSERT INTO `tour_package_travel_tips` (
  `tour_package_id`, `tip`, `sort_order`
) VALUES (
  @pkg_id, 'Bring cash to the night market, as small vendors do not accept international credit cards.', 0
);
INSERT INTO `tour_package_travel_tips` (
  `tour_package_id`, `tip`, `sort_order`
) VALUES (
  @pkg_id, 'Phu Quoc is a visa-free destination for all tourists for stays up to 30 days (if flying in directly from abroad).', 1
);
INSERT INTO `tour_package_travel_tips` (
  `tour_package_id`, `tip`, `sort_order`
) VALUES (
  @pkg_id, 'Rent a scooter to explore the quiet red-dirt roads of the northern national park forest.', 2
);
INSERT INTO `tour_package_travel_tips` (
  `tour_package_id`, `tip`, `sort_order`
) VALUES (
  @pkg_id, 'Buy local black pepper and pearl jewelry from reputable farms to ensure high quality.', 3
);
INSERT INTO `tour_package_images` (
  `tour_package_id`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 'https://images.pexels.com/photos/7286748/pexels-photo-7286748.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 0
);
INSERT INTO `tour_package_images` (
  `tour_package_id`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 'https://images.pexels.com/photos/3601422/pexels-photo-3601422.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 1
);
INSERT INTO `tour_package_images` (
  `tour_package_id`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 'https://images.pexels.com/photos/1009837/pexels-photo-1009837.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 2
);

-- Package: Da Lat
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  'da-lat', 'Da Lat', 'Vietnam', 'Southeast Asia', 
  'Cool mountain air, French villas, and pine-clad hills', 'https://images.pexels.com/photos/236519/pexels-photo-236519.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 'Known as the ''City of Eternal Spring'' for its distinctive temperate climate, Da Lat is tucked away in the central highlands, playing the cooler cousin to Vietnam''s seaside destinations. Famous for its countryside charm, Da Lat draws outdoor enthusiasts, couples, and golf enthusiasts alike. This mountain resort town was established as a hill station by the French in the early 20th century, and they left a lasting mark in European-inspired villas, manicured gardens, and pine-forested scenery. Xuan Huong Lake is the center of the action, but countless treasures like waterfalls, pagodas, and peaks await in the surrounding hills.', 
  108.44, 11.94, 'Nature', 'bg-teal-500', 
  'City of eternal spring, pine forests, cooling waterfalls, and French-inspired villas.', 'https://images.pexels.com/photos/236519/pexels-photo-236519.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 
  'published', '', '3 Days', 
  'Hanoi (national capital)', 'Vietnamese Dong (₫)', 'Temperate highland climate — cool year-round, never hot', 'November–March (dry season, flowers in full bloom)', 
  'Vietnamese, basic English', 'ICT (UTC+7)', 'Right'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = 'da-lat');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 1, 'Xuan Huong Lake & Crazy House', 'Da Lat Town Center', 
  'Start your morning with a walk around the beautiful Xuan Huong Lake at the center of the city. Later, visit the surreal Hang Nga Guesthouse, known as the ''Crazy House'', a fairy-tale labyrinth of concrete tree trunks, spiderwebs, and cave-like guestrooms.', '["Walk or rent a swan pedal boat on Xuan Huong Lake","Explore the bizarre architectural paths of the ''Crazy House''","Visit the flower-adorned Da Lat Cathedral (Chicken Church)","Dine at a local café overlooking the misty valley"]', 'https://images.pexels.com/photos/236519/pexels-photo-236519.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 0
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 2, 'Datanla Waterfall & Truc Lam Zen Pagoda', 'Southern Da Lat Hills', 
  'Ride a scenic cable car over pine forests to Truc Lam Zen Monastery, a peaceful active pagoda overlooking Tuyen Lam Lake. In the afternoon, visit Datanla Waterfall and ride the exciting alpine coaster through the forest canopy to reach the foot of the falls.', '["Ride the Da Lat cable car over lush pine valleys","Walk the peaceful gardens of Truc Lam Zen Monastery","Ride the alpine coaster down to Datanla Waterfall","Walk along the lake shores of Tuyen Lam Lake"]', 'https://images.pexels.com/photos/6152257/pexels-photo-6152257.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 1
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 3, 'Lang Biang Peak & Valley of Love', 'Lang Biang Mountain & Valley of Love', 
  'Board a Russian jeep to ascend to the top of Lang Biang Peak, the highest mountain in Da Lat, for panoramic views of the golden stream and valleys. Spend the afternoon exploring the scenic lawns, lakes, and flower gardens of the Valley of Love.', '["Ride a jeep to the summit of Lang Biang Peak","Enjoy panoramic views of Da Lat''s rivers and pine forests","Stroll through the gardens of the Valley of Love","Browse local embroidered art at XQ Historical Village"]', 'https://images.pexels.com/photos/236519/pexels-photo-236519.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 2
);
INSERT INTO `tour_package_things_to_do` (
  `tour_package_id`, `title`, `description`, `icon_name`, `sort_order`
) VALUES (
  @pkg_id, 'Crazy House Exploration', 'Explore the organic, tree-shaped house designed by Vietnamese architect Dang Viet Nga, featuring maze-like walkways.', 'Landmark', 0
);
INSERT INTO `tour_package_things_to_do` (
  `tour_package_id`, `title`, `description`, `icon_name`, `sort_order`
) VALUES (
  @pkg_id, 'Canyoning at Datanla', 'Repel down vertical waterfalls, slide down natural rock slides, and jump off cliffs into cold mountain pools with expert guides.', 'Mountain', 1
);
INSERT INTO `tour_package_things_to_do` (
  `tour_package_id`, `title`, `description`, `icon_name`, `sort_order`
) VALUES (
  @pkg_id, 'Misty Cable Car Ride', 'Ride the cable car between Robin Hill and Truc Lam Monastery, floating above the morning pine mist.', 'Waves', 2
);
INSERT INTO `tour_package_things_to_do` (
  `tour_package_id`, `title`, `description`, `icon_name`, `sort_order`
) VALUES (
  @pkg_id, 'Local Coffee Tasting', 'Sip local Robusta and Arabica coffee at chic countryside cafes, enjoying panoramic valley views.', 'Utensils', 3
);
INSERT INTO `tour_package_travel_tips` (
  `tour_package_id`, `tip`, `sort_order`
) VALUES (
  @pkg_id, 'Bring a jacket or sweater — evenings in Da Lat can drop to 15°C, which feels quite chilly compared to the rest of Vietnam.', 0
);
INSERT INTO `tour_package_travel_tips` (
  `tour_package_id`, `tip`, `sort_order`
) VALUES (
  @pkg_id, 'Da Lat is famous for flowers and strawberries; try picking fresh strawberries at a local farm.', 1
);
INSERT INTO `tour_package_travel_tips` (
  `tour_package_id`, `tip`, `sort_order`
) VALUES (
  @pkg_id, 'Rent a vintage motorbike to drive through the winding mountain roads lined with pine forests.', 2
);
INSERT INTO `tour_package_travel_tips` (
  `tour_package_id`, `tip`, `sort_order`
) VALUES (
  @pkg_id, 'Rainy season (May to October) has afternoon showers; plan your outdoor activities for the morning.', 3
);
INSERT INTO `tour_package_images` (
  `tour_package_id`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 'https://images.pexels.com/photos/236519/pexels-photo-236519.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 0
);
INSERT INTO `tour_package_images` (
  `tour_package_id`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 'https://images.pexels.com/photos/6152257/pexels-photo-6152257.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 1
);
INSERT INTO `tour_package_images` (
  `tour_package_id`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 'https://images.pexels.com/photos/2088205/pexels-photo-2088205.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 2
);

-- Package: Hoi An
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  'hoi-an', 'Hoi An', 'Vietnam', 'Southeast Asia', 
  'Golden shophouses, paper lanterns, and historic river canals', 'https://images.pexels.com/photos/6333174/pexels-photo-6333174.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 'Hoi An is a city on Vietnam’s central coast known for its incredibly well-preserved Ancient Town, cut through with narrow river canals. The former major trading port''s melting-pot history is reflected in its wooden architecture, showing Chinese, Japanese, French, and Vietnamese styles. The iconic Japanese Covered Bridge is the symbol of the city, and when night falls, the entire town glows with thousands of colorful silk lanterns reflecting in the Hoai River, where visitors float candlelit paper wishes on the water.', 
  108.33, 15.88, 'Historical', 'bg-amber-600', 
  'UNESCO Ancient Town, canals, tailor shops, and glowing silk paper lanterns at night.', 'https://images.pexels.com/photos/6333174/pexels-photo-6333174.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 
  'published', '', '3 Days', 
  'Hanoi (national capital)', 'Vietnamese Dong (₫)', 'Tropical — hot summers, wet winter monsoon season (Sep–Jan)', 'February–May (dry, warm weather, pleasant sea breeze)', 
  'Vietnamese, English (widely spoken)', 'ICT (UTC+7)', 'Right'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = 'hoi-an');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 1, 'Ancient Town & Lantern Night Market', 'Hoi An Ancient Town', 
  'Explore the pedestrian lanes of Hoi An''s Ancient Town. Visit the 17th-century Japanese Covered Bridge, the ornate Assembly Hall of the Cantonese Chinese Congregation, and historic wooden houses like Tan Ky. At night, watch the streets light up with lanterns and release a paper lantern on the river.', '["Cross the historic Japanese Covered Bridge","Walk past yellow-painted ancient shophouses","Float a candlelit paper lantern on the Hoai River","Browse local crafts at the Hoi An Night Market"]', 'https://images.pexels.com/photos/6333174/pexels-photo-6333174.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 0
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 2, 'Basket Boat Ride & Farming Village', 'Cam Thanh & Tra Que Village, Hoi An', 
  'Ride a unique round bamboo basket boat through the nipa palm canals of Cam Thanh water coconut forest, watching locals spin the boats. In the afternoon, cycle to Tra Que Herb Village to see organic vegetable gardens and participate in traditional farming.', '["Ride a round bamboo basket boat through palm canals","Watch the local basket boat spinning and fishing performances","Cycle through countryside paths past rice paddies","Learn traditional farming methods at Tra Que Herb Village"]', 'https://images.pexels.com/photos/3601422/pexels-photo-3601422.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 1
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 3, 'An Bang Beach & Tailor Shop Crafting', 'An Bang Beach & Tailor Street, Hoi An', 
  'Spend your morning relaxing on the sandy shores of An Bang Beach, a peaceful alternative to the busy city. Return to the town center to visit a local tailor shop — Hoi An is world-famous for its overnight custom tailoring, where you can get a suit or dress handmade in 24 hours.', '["Lounge or swim at the quiet An Bang Beach","Enjoy fresh coconut juice at a beachfront restaurant","Get custom-tailored clothes handmade by local tailors","Dine on local specialties like Cao Lau noodles"]', 'https://images.pexels.com/photos/2407636/pexels-photo-2407636.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 2
);
INSERT INTO `tour_package_things_to_do` (
  `tour_package_id`, `title`, `description`, `icon_name`, `sort_order`
) VALUES (
  @pkg_id, 'Custom Tailoring', 'Get high-quality suits, shirts, or dresses custom-tailored within 24 hours at famous shops like Yaly or A Dong Silk.', 'Landmark', 0
);
INSERT INTO `tour_package_things_to_do` (
  `tour_package_id`, `title`, `description`, `icon_name`, `sort_order`
) VALUES (
  @pkg_id, 'Bamboo Basket Boat Ride', 'Paddle through nipa palm forests in a traditional round basket boat, watching local fishermen perform spins and cast nets.', 'Waves', 1
);
INSERT INTO `tour_package_things_to_do` (
  `tour_package_id`, `title`, `description`, `icon_name`, `sort_order`
) VALUES (
  @pkg_id, 'Cooking Masterclass', 'Visit a local market to buy ingredients, then learn to prepare traditional dishes like rice paper rolls, banh mi, and Cao Lau.', 'Utensils', 2
);
INSERT INTO `tour_package_things_to_do` (
  `tour_package_id`, `title`, `description`, `icon_name`, `sort_order`
) VALUES (
  @pkg_id, 'Lantern Floating on the Canal', 'Board a wooden boat on the Hoai River at sunset to release paper lanterns and float wishes down the canal.', 'Heart', 3
);
INSERT INTO `tour_package_travel_tips` (
  `tour_package_id`, `tip`, `sort_order`
) VALUES (
  @pkg_id, 'Purchase the Ancient Town entrance ticket — it funds the conservation of the historic buildings and grants access to historical assembly halls.', 0
);
INSERT INTO `tour_package_travel_tips` (
  `tour_package_id`, `tip`, `sort_order`
) VALUES (
  @pkg_id, 'If you plan to get clothes custom-tailored, visit the tailor on your first day so there is enough time for fittings and adjustments.', 1
);
INSERT INTO `tour_package_travel_tips` (
  `tour_package_id`, `tip`, `sort_order`
) VALUES (
  @pkg_id, 'Time your visit to match the monthly Lantern Festival (held on the 14th day of each lunar month) when the town shuts off electricity.', 2
);
INSERT INTO `tour_package_travel_tips` (
  `tour_package_id`, `tip`, `sort_order`
) VALUES (
  @pkg_id, 'Explore the countryside by bicycle — the paths are flat, peaceful, and lead past beautiful rice paddies and water buffaloes.', 3
);
INSERT INTO `tour_package_images` (
  `tour_package_id`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 'https://images.pexels.com/photos/6333174/pexels-photo-6333174.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 0
);
INSERT INTO `tour_package_images` (
  `tour_package_id`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 'https://images.pexels.com/photos/3601422/pexels-photo-3601422.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 1
);
INSERT INTO `tour_package_images` (
  `tour_package_id`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 'https://images.pexels.com/photos/2407636/pexels-photo-2407636.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 2
);

-- Package: Hue
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  'hue', 'Hue', 'Vietnam', 'Southeast Asia', 
  'Imperial citadels, royal tombs, and the winding Perfume River', 'https://images.pexels.com/photos/1691341/pexels-photo-1691341.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 'Hue is a city chock-full of stories. The Kings of the Nguyen Dynasty built their feudal capital along Hue’s fertile riverbanks and atop its forested hills, leaving a majestic imperial legacy behind. Hue’s refined royal cuisine is the stuff of legend, featuring dozens of small, beautifully presented dishes. Through the whole scene flows the Perfume River, setting a slow, relaxing pace that the rest of the city is happy to follow, lined with mossy pagodas and grand brick tombs of former emperors.', 
  107.59, 16.46, 'Historical', 'bg-amber-600', 
  'The imperial capital of the Nguyen Dynasty, royal tomb valleys, and the Perfume River.', 'https://images.pexels.com/photos/1691341/pexels-photo-1691341.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 
  'published', '', '3 Days', 
  'Hanoi (national capital)', 'Vietnamese Dong (₫)', 'Tropical monsoon — wet and occasionally cold during winter (September–January)', 'February–April (dry, pleasant spring weather)', 
  'Vietnamese, basic English', 'ICT (UTC+7)', 'Right'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = 'hue');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 1, 'Imperial Citadel & Royal Antiquities', 'Imperial City (The Citadel), Hue', 
  'Step through the Noon Gate into Hue''s Imperial Citadel, the home of the Nguyen emperors from 1802 to 1945. Walk past grand gates and temple courtyards, explore the Forbidden Purple City, and browse royal artifacts at the Museum of Royal Antiquities.', '["Cross the moat and enter the Noon Gate of the Imperial City","Walk through the remains of the Forbidden Purple City","Photograph the ornate dynastic bronze urns in the temples","Browse imperial robes and treasures at the Royal Antiquities Museum"]', 'https://images.pexels.com/photos/1691341/pexels-photo-1691341.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 0
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 2, 'Thien Mu Pagoda & Perfume River Cruise', 'Perfume River, Hue', 
  'Board a traditional dragon boat to cruise up the Perfume River. Stop to visit Thien Mu Pagoda, an active monastery with a iconic seven-story octagonal tower overlooking the water. In the afternoon, explore Dong Ba Market to try local Hue street foods.', '["Cruise the Perfume River on a traditional dragon boat","Visit the historic seven-story tower of Thien Mu Pagoda","See the car used by the monk Thich Quang Duc before his self-immolation","Try local dishes like Bun Bo Hue (spicy beef noodle soup) at Dong Ba Market"]', 'https://images.pexels.com/photos/1684188/pexels-photo-1684188.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 1
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 3, 'Royal Tombs of Khai Dinh & Tu Duc', 'Southern Tombs Valley, Hue', 
  'Drive south of the city to explore the grand tombs of the Nguyen emperors. Visit the Tomb of Emperor Tu Duc, featuring a scenic lake and pine forest gardens, and the Tomb of Emperor Khai Dinh, a blend of traditional Vietnamese and European gothic concrete architecture.', '["Explore the tranquil lake and pavilions of Tu Duc''s Tomb","Visit the monumental stone steps and dragon carvings of Khai Dinh''s Tomb","Admire the detailed mosaic glass murals inside the Khai Dinh tomb chamber","Photograph the ancient calligraphic stone stelae detailing the emperors'' lives"]', 'https://images.pexels.com/photos/2088205/pexels-photo-2088205.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 2
);
INSERT INTO `tour_package_things_to_do` (
  `tour_package_id`, `title`, `description`, `icon_name`, `sort_order`
) VALUES (
  @pkg_id, 'Imperial Citadel Tour', 'Explore the massive walled fortress built on the pattern of Beijing''s Forbidden City, which served as Vietnam''s royal capital.', 'Landmark', 0
);
INSERT INTO `tour_package_things_to_do` (
  `tour_package_id`, `title`, `description`, `icon_name`, `sort_order`
) VALUES (
  @pkg_id, 'Perfume River Cruise', 'Take a slow dragon boat ride down the Perfume River, listening to traditional folk musicians play under the moon.', 'Waves', 1
);
INSERT INTO `tour_package_things_to_do` (
  `tour_package_id`, `title`, `description`, `icon_name`, `sort_order`
) VALUES (
  @pkg_id, 'Royal Tomb Hopping', 'Visit the architectural marvels of the Nguyen Dynasty tombs, each designed by the emperors themselves as gardens for their afterlives.', 'Mountain', 2
);
INSERT INTO `tour_package_things_to_do` (
  `tour_package_id`, `title`, `description`, `icon_name`, `sort_order`
) VALUES (
  @pkg_id, 'Royal Banquet Dining', 'Dine on Hue''s refined royal cuisine, featuring dishes like Banh Beo (rice cakes), Banh Bot Loc, and fruit carved into birds.', 'Utensils', 3
);
INSERT INTO `tour_package_travel_tips` (
  `tour_package_id`, `tip`, `sort_order`
) VALUES (
  @pkg_id, 'Wear respectful clothing covering shoulders and knees when visiting the temples and the Imperial Citadel.', 0
);
INSERT INTO `tour_package_travel_tips` (
  `tour_package_id`, `tip`, `sort_order`
) VALUES (
  @pkg_id, 'The Citadel is massive and offers very little shade; bring an umbrella and plenty of water to survive the heat.', 1
);
INSERT INTO `tour_package_travel_tips` (
  `tour_package_id`, `tip`, `sort_order`
) VALUES (
  @pkg_id, 'Rent a bicycle to ride along the Perfume River pathways under the shady flamboyant trees.', 2
);
INSERT INTO `tour_package_travel_tips` (
  `tour_package_id`, `tip`, `sort_order`
) VALUES (
  @pkg_id, 'Buy a combo ticket if you plan to visit the Citadel and multiple tombs, as it offers a significant discount.', 3
);
INSERT INTO `tour_package_images` (
  `tour_package_id`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 'https://images.pexels.com/photos/1691341/pexels-photo-1691341.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 0
);
INSERT INTO `tour_package_images` (
  `tour_package_id`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 'https://images.pexels.com/photos/1684188/pexels-photo-1684188.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 1
);
INSERT INTO `tour_package_images` (
  `tour_package_id`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 'https://images.pexels.com/photos/2088205/pexels-photo-2088205.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 2
);
