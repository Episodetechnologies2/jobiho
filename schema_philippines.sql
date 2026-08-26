-- Philippines Tour Packages Schema and Data
-- This script creates tables if they do not exist and inserts/updates the Philippines packages.

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

-- Package 1: Manila
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  'manila', 'Manila', 'Philippines', 'Southeast Asia', 
  'Bustling capital known for historical Intramuros walled city, Rizal Park, and Okada fountain', '/images/philippines/MANILA.jpg', 'Manila, the capital of the Philippines, is a densely populated bayside city on the island of Luzon, which mixes Spanish colonial architecture with modern skyscrapers. Intramuros, a walled city in the heart of Old Manila, contains the baroque 17th-century San Agustin Church as well as Fort Santiago, a storied citadel and military prison. Rizal Park is Manila''s ceremonial central park, honoring the national hero Jose Rizal.', 
  120.98, 14.59, 'Historical', 'bg-amber-600', 
  'Rich heritage, Spanish colonial architecture, and bustling bayside city life.', '/images/philippines/MANILA.jpg', 
  'published', '', '2 Days', 
  'Manila', 'Philippine Peso (PHP)', 'Tropical monsoon — warm year-round, dry Nov-May, wet Jun-Oct', 'November to April (dry season)', 
  'Filipino, English', 'PHT (UTC+8)', 'Right'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = 'manila');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 1, 'Arrive Manila, Welcome Dinner', 'Manila', 'Arrive at Ninoy Aquino International Airport, meet your driver and transfer to your hotel. Evening welcome dinner in the bayfront M.H. Del Pilar area.', '["Airport meet & greet","Hotel check-in","Sunset dinner along Manila Bay"]', '/images/philippines/MANILA.jpg', 0);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 2, 'Manila Historical Walled City Tour', 'Manila', 'Immerse in Spanish colonial history with a guided walking tour of Intramuros. Visit Fort Santiago, San Agustin Church, Casa Manila, and the massive Manila Cathedral. End the day shopping at SM Mall of Asia.', '["Explore Fort Santiago colonial dungeons","Visit UNESCO San Agustin Church","Shop at SM Mall of Asia"]', '/images/philippines/pack-9.jpg', 1);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Intramuros Walking Tour', 'Walk through the cobblestone streets of the Spanish walled city built in 1571.', 'Compass', 0);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Okada Fountain Show', 'Watch the spectacular multicolored water show at Okada Manila resort.', 'Droplets', 1);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Traffic in Manila can be heavy; plan your travel times accordingly and use ride-hailing apps like Grab.', 0);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Dress code is casual, but modest clothing is required when entering churches.', 1);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, '/images/philippines/MANILA.jpg', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, '/images/philippines/pack-9.jpg', 1);

-- Package 2: Cebu
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  'cebu', 'Cebu', 'Philippines', 'Southeast Asia', 
  'Gateway to pristine dive sites, whale shark swimming, and colonial history', '/images/philippines/pack-2.jpg', 'Cebu is a province in the Philippines consisting of a main island and 167 surrounding islands. Cebu City, its capital, is the oldest city in the Philippines and retains landmarks from its 16th-century Spanish colonial past, including the Basilica Minore del Santo Niño and Magellan''s Cross. It is globally famous for white sand beaches, diving at Malapascua and Moalboal, and swimming with whale sharks in Oslob.', 
  123.89, 10.31, 'Adventure', 'bg-orange-500', 
  'Marine wildlife, white sand islands, whale sharks, and old Spanish chapels.', '/images/philippines/pack-2.jpg', 
  'published', '', '2 Days', 
  'Manila', 'Philippine Peso (PHP)', 'Tropical savanna climate, warm year-round', 'December to May', 
  'Cebuano, Tagalog, English', 'PHT (UTC+8)', 'Right'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = 'cebu');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 1, 'Arrive Cebu, Historical City Highlights', 'Cebu', 'Arrive at Mactan-Cebu International Airport, transfer to hotel. Tour Fort San Pedro, Magellan''s Cross, and Basilica del Santo Niño.', '["Airport transfer","Visit Basilica del Santo Niño","See historic Magellan''s Cross"]', '/images/philippines/pack-2.jpg', 0);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 2, 'Oslob Whale Shark Swimming & Tumalog Falls', 'Cebu', 'Wake up early for a scenic drive south to Oslob. Snorkel alongside massive, gentle whale sharks. Hike to the mist-veiled Tumalog Falls.', '["Snorkel with Oslob whale sharks","Trek to majestic Tumalog Falls","Cebuano buffet lunch"]', '/images/philippines/pack-3.jpg', 1);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Whale Shark Snorkel', 'Float in clear waters as massive whale sharks swim alongside local outriggers.', 'Droplets', 0);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Heritage Walk', 'Explore the oldest street in the Philippines (Colon Street) and ancient forts.', 'Compass', 1);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Apply mineral-safe sunscreen to protect marine life during snorkeling tours.', 0);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Bring waterproof dry bags (dry bags are widely sold locally) for boat excursions.', 1);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, '/images/philippines/pack-2.jpg', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, '/images/philippines/pack-3.jpg', 1);

-- Package 3: Boracay
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  'boracay', 'Boracay', 'Philippines', 'Southeast Asia', 
  'World-famous white sand beaches, active water sports, and sunset sailing', '/images/philippines/pack-7.jpg', 'Boracay is a small island in the central Philippines. It is famous for its beaches, which have won awards from numerous travel publications. The crown jewel is White Beach, a 4km stretch of powder-soft sand lined with palm trees, hotels, and restaurants. On the east coast, Bulabog Beach is a global hub for windsurfing and kitesurfing, while offshore reefs offer excellent scuba diving.', 
  121.92, 11.97, 'Beach', 'bg-blue-500', 
  'Powder-soft White Beach, coconut groves, vibrant beach clubs, and water sports.', '/images/philippines/pack-7.jpg', 
  'published', '', '2 Days', 
  'Manila', 'Philippine Peso (PHP)', 'Tropical wet and dry climate', 'November to May', 
  'Aklanon, Tagalog, English', 'PHT (UTC+8)', 'Right'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = 'boracay');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 1, 'Transfer to Boracay Island', 'Boracay', 'Fly to Caticlan Airport, take a short outrigger boat ride to Boracay Island, and check into your beachfront resort. Relax on White Beach.', '["Boat transfer to Boracay","Check-in to beach resort","Sunset stroll on White Beach"]', '/images/philippines/pack-7.jpg', 0);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 2, 'Boracay Island Hopping & Snorkeling', 'Boracay', 'Board a shared outrigger boat to explore Puka Beach, Crystal Cove Island, and snorkel among vibrant coral reefs at Crocodile Island. Enjoy a beachfront BBQ lunch.', '["Lounge on quiet Puka Beach","Snorkel coral reefs near Crocodile Island","BBQ lunch on the boat"]', '/images/philippines/pack-8.jpg', 1);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Sunset Paraw Sailing', 'Sail along White Beach on a traditional double-outrigger sailboat during sunset.', 'Sunset', 0);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Helmet Diving', 'Walk on the ocean floor wearing an air-supplied glass helmet to feed colorful fish.', 'Droplets', 1);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Boracay has strict eco-tourism guidelines; do not bring plastics, food, or drinks onto White Beach.', 0);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Bring cash as some smaller restaurants and boat operators do not accept cards.', 1);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, '/images/philippines/pack-7.jpg', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, '/images/philippines/pack-8.jpg', 1);

-- Package 4: Palawan
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  'palawan', 'Palawan', 'Philippines', 'Southeast Asia', 
  'Island paradise containing Puerto Princesa underground river, El Nido limestone cliffs, and Coron wrecks', '/images/philippines/PUERTO-PRINCESA.jpg', 'Palawan is an archipelagic province of the Philippines, known as the ''Last Frontier'' due to its untouched ecological beauty. It features Puerto Princesa, home to the UNESCO Subterranean River; El Nido, famous for towering limestone karsts rising out of turquoise lagoons; and Coron, celebrated for world-class scuba diving among sunken Japanese WWII shipwrecks.', 
  118.73, 9.74, 'Nature', 'bg-teal-500', 
  'UNESCO underground river, limestone karsts, secret lagoons, and WWII scuba diving sites.', '/images/philippines/PUERTO-PRINCESA.jpg', 
  'published', '', '2 Days', 
  'Manila', 'Philippine Peso (PHP)', 'Tropical wet and dry climate', 'December to May', 
  'Cuyonon, Tagalog, English', 'PHT (UTC+8)', 'Right'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = 'palawan');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 1, 'Arrive Puerto Princesa, Underground River Tour', 'Palawan', 'Arrive in Puerto Princesa. Drive to Sabang and board a boat to the Underground River, a UNESCO World Heritage site and one of the New 7 Wonders of Nature.', '["Arrive in Palawan","Explore Puerto Princesa Underground River cave system","Buffet lunch in Sabang"]', '/images/philippines/PUERTO-PRINCESA.jpg', 0);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 2, 'Transfer to El Nido, Lagoon Kayaking', 'Palawan', 'Take a scenic drive north to El Nido. Check in to resort. Board an outrigger boat for a kayak tour of Big Lagoon and Secret Lagoon, enclosed by limestone karsts.', '["Scenic drive to El Nido","Kayak Big Lagoon''s emerald waters","Swim through Secret Lagoon tunnels"]', '/images/philippines/EL-NIDO.jpg', 1);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Underground Cave Tour', 'Paddle inside a 8.2km navigable cave river decorated with spectacular stalactites.', 'Compass', 0);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'WWII Shipwreck Diving', 'Dive down to explore well-preserved Japanese warships from 1944 in Coron bay.', 'Droplets', 1);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Bring reef shoes/aquashoes as walking inside El Nido''s lagoons requires stepping on sharp corals/rocks.', 0);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Electricity in El Nido can sometimes experience brief blackouts; carry a power bank.', 1);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, '/images/philippines/PUERTO-PRINCESA.jpg', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, '/images/philippines/EL-NIDO.jpg', 1);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, '/images/philippines/CORON.jpg', 2);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, '/images/philippines/REEFS-AND-WRECKS.jpg', 3);

-- Package 5: 4N/5D - Wonderful Philippines
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  'philippines-1', '4N/5D - Wonderful Philippines', 'Philippines', 'Southeast Asia', 
  'Explore 4N/5D - Wonderful Philippines with daily itineraries, local guides, and highlights', '/images/philippines/pack-1.jpg', 'Experience the beauty of the Philippines with our special package: 4N/5D - Wonderful Philippines. Discover rich culture, stunning white sand beaches, and historic landmarks on this guided tour.', 
  120.98, 14.59, 'Luxury', 'bg-indigo-500', 
  'Custom package for 4N/5D - Wonderful Philippines including hotel stays, transfers, and daily activities.', '/images/philippines/pack-1.jpg', 
  'published', '', '5 Days', 
  'Manila', 'Philippine Peso (PHP)', 'Tropical monsoon — warm year-round, dry Nov-May, wet Jun-Oct', 'November to April (dry season)', 
  'Filipino, English', 'PHT (UTC+8)', 'Right'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = 'philippines-1');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 1, 'ARRIVE MANILA', 'Manila', 'Welcome to your Wonderful Philippines tour. On arrival you will be met by your Tour Manager who will welcome you and take you to your hotel. known as the "Pearl of the Orient" which is the nation''s capital city. This bustling historic city is full of things to see and do – including museums, parks, theaters, shopping malls and a plethora of restaurants to choose from.', '["Welcome to your Wonderful Philippines tour","On arrival you will be met by your Tour Manager who will welcome you and take you to your hotel","known as the \\"Pearl of the Orient\\" which is the nation''s capital city"]', '/images/philippines/pack-1.jpg', 0);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 2, 'MANILA CITY TOUR + DESTILERIA MUSEUM', 'Manila', 'Breakfast at the hotel. Proceed Half Day Manila City Tour An introduction to Manila and its suburbs by driving through the financial district of Makati and Forbes Park, then a War Memorial stop over at the Global City. Next, proceed to the reclaimed area (Mall of Asia) and the Cultural Center along Roxas Boulevard. Lastly, a running tour of Rizal Park and the Walled City of Intramuros; Driving by San Agustin Church and Casa Manila then take a walk inside Fort Santiago. DESTILERIA LIMTUACO MUSEUM-Showcases the history of the oldest distillery in the Philippines, dating back to the Spanish colonial period. (Wine Tasting) Indian/Local Lunch at Restaurant After Lunch proceed for Shopping Tour.', '["Breakfast at the hotel","Proceed Half Day Manila City Tour An introduction to Manila and its suburbs by driving through the financial district of Makati and Forbes Park, then a War Memorial stop over at the Global City","Next, proceed to the reclaimed area (Mall of Asia) and the Cultural Center along Roxas Boulevard"]', '/images/philippines/pack-1.jpg', 1);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 3, 'MANILA TO CATICLAN BORACAY (DOMESTIC FLIGHT NOT INCLUDED)', 'Manila', 'After breakfast, you will check out from hotel and transfered to the airport to board your next flight for Boracay. On arrival in Boracay, you will be welcomed by your representative and transferred to your hotel. The rest of the day is at leisure to discover this charming island. Over Night stay at Boracay.', '["After breakfast, you will check out from hotel and transfered to the airport to board your next flight for Boracay","On arrival in Boracay, you will be welcomed by your representative and transferred to your hotel","The rest of the day is at leisure to discover this charming island"]', '/images/philippines/pack-1.jpg', 2);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 4, 'BORACAY ISLAND HOPPING OR BORACAY LAND TOUR OR PARTY BOAT CRUISE (*Strictly one island tour per day*)', 'Manila', 'Breakfast at the hotel. Proceed for Boracay Island Hopping or Boracay Land Tour or Party Boat Cruise – is a good opportunity to explore the islands surrounding this famous tropical escape, many of which have secluded beaches and a fascinating underwater paradise.', '["Breakfast at the hotel","Proceed for Boracay Island Hopping or Boracay Land Tour or Party Boat Cruise – is a good opportunity to explore the islands surrounding this famous tropical escape, many of which have secluded beaches and a fascinating underwater paradise"]', '/images/philippines/pack-1.jpg', 3);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 5, 'DEPARTURE TO HOMETOWN', 'Manila', 'Today you will be transferred to Airport for your flight back home. We trust that you enjoyed your Vacation.', '["Today you will be transferred to Airport for your flight back home","We trust that you enjoyed your Vacation"]', '/images/philippines/pack-1.jpg', 4);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'English-speaking tour gui', 'English-speaking tour guides Land transportation by air-con vehicles Accommodation based on Twin-shared room with breakfast Meals as mentioned in the program (no drinks) Boat trips and admissions as mentioned in the program Drinking water during the touring day (2 bottles/person/day)', 'Check', 0);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Airfare (international and domestic) and airport tax ( on request ) Visa services (Visa approval letter/Visa stamp fee/ Visa fast track on request) Early check-in/late check-out/ room upgrade surcharge Other meals, Drinks, and personal expenses (phone call, laundry, tipping etc.) Any services not mentioned in the program Optional Tours', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, '/images/philippines/pack-1.jpg', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 'https://images.pexels.com/photos/2412711/pexels-photo-2412711.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 1);

-- Package 6: 6N/7D - Romantic Philippines
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  'philippines-2', '6N/7D - Romantic Philippines', 'Philippines', 'Southeast Asia', 
  'Explore 6N/7D - Romantic Philippines with daily itineraries, local guides, and highlights', '/images/philippines/pack-2.jpg', 'Experience the beauty of the Philippines with our special package: 6N/7D - Romantic Philippines. Discover rich culture, stunning white sand beaches, and historic landmarks on this guided tour.', 
  118.73, 9.74, 'Nature', 'bg-teal-500', 
  'Custom package for 6N/7D - Romantic Philippines including hotel stays, transfers, and daily activities.', '/images/philippines/pack-2.jpg', 
  'published', '', '7 Days', 
  'Manila', 'Philippine Peso (PHP)', 'Tropical monsoon — warm year-round, dry Nov-May, wet Jun-Oct', 'November to April (dry season)', 
  'Filipino, English', 'PHT (UTC+8)', 'Right'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = 'philippines-2');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 1, 'ARRIVE MANILA', 'Palawan', 'Welcome to your Romantic Philippines tour. On arrival you will be met by your Tour Manager who will welcome you and take you to your hotel. known as the "Pearl of the Orient" which is the nation''s capital city. This bustling historic city is full of things to see and do – including museums, parks, theatres, shopping malls and a plethora of restaurants to choose from. Overnight stay at Manila', '["Welcome to your Romantic Philippines tour","On arrival you will be met by your Tour Manager who will welcome you and take you to your hotel","known as the \\"Pearl of the Orient\\" which is the nation''s capital city"]', '/images/philippines/pack-2.jpg', 0);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 2, 'MANILA CITY TOUR + DESTILERIA MUSEUM', 'Palawan', 'Breakfast at the hotel. Proceed Half Day Manila City Tour An introduction to Manila and its suburbs by driving through the financial district of Makati and Forbes Park, then a War Memorial stop over at the Global City. Next, proceed to the reclaimed area (Mall of Asia) and the Cultural Center along Roxas Boulevard. Lastly, a running tour of Rizal Park and the Walled City of Intramuros; Driving by San Agustin Church and Casa Manila then take a walk inside Fort Santiago. DESTILERIA LIMTUACO MUSEUM-Showcases the history of the oldest distillery in the Philippines, dating back to the Spanish colonial period. (Wine Tasting) Indian/Local Lunch at Restaurant After Lunch proceed for Shopping Tour.', '["Breakfast at the hotel","Proceed Half Day Manila City Tour An introduction to Manila and its suburbs by driving through the financial district of Makati and Forbes Park, then a War Memorial stop over at the Global City","Next, proceed to the reclaimed area (Mall of Asia) and the Cultural Center along Roxas Boulevard"]', '/images/philippines/pack-2.jpg', 1);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 3, 'MANILA TO CATICLAN BORACAY (DOMESTIC FLIGHT NOT INCLUDED)', 'Palawan', 'After breakfast, you will check out from the hotel and transfer to the airport to board your next flight for Boracay. On arrival in Boracay, you will be welcomed by your representative and transferred to your hotel. The rest of the day is at leisure to discover this charming island. Over Night stay at Boracay.', '["After breakfast, you will check out from the hotel and transfer to the airport to board your next flight for Boracay","On arrival in Boracay, you will be welcomed by your representative and transferred to your hotel","The rest of the day is at leisure to discover this charming island"]', '/images/philippines/pack-2.jpg', 2);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 4, 'BORACAY ISLAND HOPPING TOUR WITH LUNCH', 'Palawan', 'Breakfast at the hotel. Proceed for Boracay island hopping is a good opportunity to explore the islands surrounding this famous tropical escape, many of which have secluded beaches and a fascinating underwater paradise. Local Lunch @ The Picnic Area Over Night stay at Boracay', '["Breakfast at the hotel","Proceed for Boracay island hopping is a good opportunity to explore the islands surrounding this famous tropical escape, many of which have secluded beaches and a fascinating underwater paradise","Local Lunch @ The Picnic Area Over Night stay at Boracay"]', '/images/philippines/pack-2.jpg', 3);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 5, 'BORACAY TO CEBU (DOMESTIC FLIGHT NOT INCLUDED)', 'Palawan', 'After breakfast, your will be checkout from hotel and transfers to the airport to board your next flight for Cebu. On arrival in Cebu, you will be welcomed by your representative and transferred to your hotel. The rest of the day is at leisure to discover this charming island. Over Night stay at Cebu.', '["After breakfast, your will be checkout from hotel and transfers to the airport to board your next flight for Cebu","On arrival in Cebu, you will be welcomed by your representative and transferred to your hotel","The rest of the day is at leisure to discover this charming island"]', '/images/philippines/pack-2.jpg', 4);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 6, 'CEBU TWIN CITY TOUR', 'Palawan', 'Breakfast at the hotel. Go for a City tour of Cebu famous for its historical and tourist attractions. Visit Lapu-Lapu Monument Magellan’s Shrine, Alegre Guitar Factory, Magellan’s Cross, Basilica Minore Del Sto. Nino, The Heritage of Cebu Monument Yap San Diego House, Taoist Temple, Running Tour: Colon Street, Fuente Osmena, Circle, Capitol Site Local Lunch. Over Night stay at Cebu.', '["Breakfast at the hotel","Go for a City tour of Cebu famous for its historical and tourist attractions","Visit Lapu-Lapu Monument Magellan’s Shrine, Alegre Guitar Factory, Magellan’s Cross, Basilica Minore Del Sto"]', '/images/philippines/pack-2.jpg', 5);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 7, 'DEPARTURE TO HOMETOWN', 'Palawan', 'Today you will be transferred to Airport for your flight back home. We trust that you enjoyed your Vacation.', '["Today you will be transferred to Airport for your flight back home","We trust that you enjoyed your Vacation"]', '/images/philippines/pack-2.jpg', 6);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'English-speaking tour gui', 'English-speaking tour guides Land transportation by air-con vehicles Accommodation based on Twin-shared room with breakfast Meals as mentioned in the program (no drinks) Boat trips and admissions as mentioned in the program Drinking water during the touring day (2 bottles/person/day)', 'Check', 0);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Airfare (international and domestic) and airport tax ( on request ) Visa services (Visa approval letter/Visa stamp fee/ Visa fast track on request) Early check-in/late check-out/ room upgrade surcharge Other meals, Drinks, and personal expenses (phone call, laundry, tipping etc.) Any services not mentioned in the program Optional Tours', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, '/images/philippines/pack-2.jpg', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 'https://images.pexels.com/photos/2412711/pexels-photo-2412711.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 1);

-- Package 7: 9N/10D - Mesmerizing Philippines
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  'philippines-3', '9N/10D - Mesmerizing Philippines', 'Philippines', 'Southeast Asia', 
  'Explore 9N/10D - Mesmerizing Philippines with daily itineraries, local guides, and highlights', '/images/philippines/pack-3.jpg', 'Experience the beauty of the Philippines with our special package: 9N/10D - Mesmerizing Philippines. Discover rich culture, stunning white sand beaches, and historic landmarks on this guided tour.', 
  123.89, 10.31, 'Adventure', 'bg-orange-500', 
  'Custom package for 9N/10D - Mesmerizing Philippines including hotel stays, transfers, and daily activities.', '/images/philippines/pack-3.jpg', 
  'published', '', '10 Days', 
  'Manila', 'Philippine Peso (PHP)', 'Tropical monsoon — warm year-round, dry Nov-May, wet Jun-Oct', 'November to April (dry season)', 
  'Filipino, English', 'PHT (UTC+8)', 'Right'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = 'philippines-3');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 1, 'ARRIVE MANILA + FLIGHT TO PUERTO PRINCESA (DOMESTIC FLIGHT NOT INCLUDED)', 'Cebu', 'Welcome to your Mesmerizing Philippines tour. On arrival you will be met by your Tour Manager who will welcome you and take you to your hotel. Over Night stay at Puerto Princesa', '["Welcome to your Mesmerizing Philippines tour","On arrival you will be met by your Tour Manager who will welcome you and take you to your hotel","Over Night stay at Puerto Princesa"]', '/images/philippines/pack-3.jpg', 0);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 2, 'UNDERGROUND RIVER TOUR', 'Cebu', 'After breakfast, Process for Underground River Tour Declared as a Natural World Heritage Site by the United Nations Educational and Scientific Organizations (UNESCO) on December 4, 1999, because of its unique geological features and globally significant biodiversity is also known as the Underground River Park. These forest ecosystems are home to 800 species of plants, 165 species of birds, 30 species of mammals, 19 species of reptiles and 10 species of amphitheaters. On board a paddle boat with outriggers and equipped with search light one enters a mystical environment exploring the pitch-dark inner recesses of the cavern. Every turn and bend in its navigable stalactite and stalagmites-pillared interiors appears different rock formations and doomed amphitheaters. Over Night stay at Puerto Princesa.', '["After breakfast, Process for Underground River Tour Declared as a Natural World Heritage Site by the United Nations Educational and Scientific Organizations (UNESCO) on December 4, 1999, because of its unique geological features and globally significant biodiversity is also known as the Underground River Park","These forest ecosystems are home to 800 species of plants, 165 species of birds, 30 species of mammals, 19 species of reptiles and 10 species of amphitheaters","On board a paddle boat with outriggers and equipped with search light one enters a mystical environment exploring the pitch-dark inner recesses of the cavern"]', '/images/philippines/pack-3.jpg', 1);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 3, 'HALF DAY PUERTO PRINCESA CITY TOUR', 'Cebu', 'Breakfast at the hotel. Proceed for Half Day Puerto Princesa City Tour. Over Night stay at Puerto Princesa.', '["Breakfast at the hotel","Proceed for Half Day Puerto Princesa City Tour","Over Night stay at Puerto Princesa"]', '/images/philippines/pack-3.jpg', 2);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 4, 'PUERTO PRINCESA TO EL NIDO (DOMESTIC FLIGHT NOT INCLUDED)', 'Cebu', 'After breakfast, your will be checkout from hotel and transfers to the airport to board your next flight for El Nido. On arrival in El Nido, you will be welcomed by your representative and transferred to your hotel. The rest of the day is at leisure to discover this charming island. Over Night stay at El Nido.', '["After breakfast, your will be checkout from hotel and transfers to the airport to board your next flight for El Nido","On arrival in El Nido, you will be welcomed by your representative and transferred to your hotel","The rest of the day is at leisure to discover this charming island"]', '/images/philippines/pack-3.jpg', 3);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 5, 'EL NIDO TOUR WITH LUNCH', 'Cebu', 'Breakfast at the hotel. Proceed for El Nido Tour. Visit Secret Beach, Hidden Beach, Matinloc Shrine, Helicopter Island, Tapiutan Island. Local Lunch Over Night stay at El Nido.', '["Breakfast at the hotel","Proceed for El Nido Tour","Visit Secret Beach, Hidden Beach, Matinloc Shrine, Helicopter Island, Tapiutan Island"]', '/images/philippines/pack-3.jpg', 4);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 6, 'EL NIDO TOUR WITH LUNCH', 'Cebu', 'Breakfast at the hotel. Proceed for El Nido Tour. Visit Big Lagoon, Shimizu Island, Secret Lagoon, Seven Commando, Payong Payong Beach. Local Lunch Over Night stay at El Nido.', '["Breakfast at the hotel","Proceed for El Nido Tour","Visit Big Lagoon, Shimizu Island, Secret Lagoon, Seven Commando, Payong Payong Beach"]', '/images/philippines/pack-3.jpg', 5);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 7, 'EL NIDO TO CORON BY FERRY', 'Cebu', 'After breakfast, your will be checkout from hotel and transfers to the Port to board your Ferry to Coron (Approximate 4 hours by ferry) Over Night stay at Coron.', '["After breakfast, your will be checkout from hotel and transfers to the Port to board your Ferry to Coron (Approximate 4 hours by ferry) Over Night stay at Coron"]', '/images/philippines/pack-3.jpg', 6);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 8, 'REEFS AND WRECKS TOUR', 'Cebu', 'Breakfast at the hotel. Proceed for Reefs And Wrecks Tour. ? PASS ISLAND Activities: kayaking, siesta, swimming, and snorkeling at the islands best coral reefs and see the colorful fishes thriving on the reefs ? LUSONG CORAL GARDEN Activities: snorkeling at one of the excellent coral reefs of Coron ? LUSONG GUNBOAT Activities: snorkeling around East Tangat gunboat, a World War 2 Japanese shipwreck and photo shooting Over Night stay at Coron.', '["Breakfast at the hotel","Proceed for Reefs And Wrecks Tour","? PASS ISLAND Activities: kayaking, siesta, swimming, and snorkeling at the islands best coral reefs and see the colorful fishes thriving on the reefs ? LUSONG CORAL GARDEN Activities: snorkeling at one of the excellent coral reefs of Coron ? LUSONG GUNBOAT Activities: snorkeling around East Tangat gunboat, a World War 2 Japanese shipwreck and photo shooting Over Night stay at Coron"]', '/images/philippines/pack-3.jpg', 7);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 9, 'CORON ISLAND SUPER ULTIMATE TOUR', 'Cebu', 'Breakfast at the hotel. Proceed for Coron Island Super Ultimate Tour. ? SIETE PECADOS Activities: kayaking, swimming & snorkeling to the marine park to view colorful and diverse corals and fishes underwater ? KAYANGAN LAKE Activities: easy trekking, photo-shooting, swimming, and snorkeling at the lake ? BEACH 91 Activities: swimming, kayaking, photo-shooting, relaxing, siesta ? SKELETON WRECK Activities: swimming and snorkeling and fish- feeding of fishes thriving at skeleton wreck ? MALWAWEY CORAL GARDEN Activities: snorkeling at one of the excellent coral reefs of Coron ? CYC BEACH Activities: swimming, photo-shooting, and snorkeling ? TWIN LAGOON Activities: snorkeling and swimming through a hole from one to another majestic and enchanting lagoon Over Night stay at Coron.', '["Breakfast at the hotel","Proceed for Coron Island Super Ultimate Tour","? SIETE PECADOS Activities: kayaking, swimming & snorkeling to the marine park to view colorful and diverse corals and fishes underwater ? KAYANGAN LAKE Activities: easy trekking, photo-shooting, swimming, and snorkeling at the lake ? BEACH 91 Activities: swimming, kayaking, photo-shooting, relaxing, siesta ? SKELETON WRECK Activities: swimming and snorkeling and fish- feeding of fishes thriving at skeleton wreck ? MALWAWEY CORAL GARDEN Activities: snorkeling at one of the excellent coral reefs of Coron ? CYC BEACH Activities: swimming, photo-shooting, and snorkeling ? TWIN LAGOON Activities: snorkeling and swimming through a hole from one to another majestic and enchanting lagoon Over Night stay at Coron"]', '/images/philippines/pack-3.jpg', 8);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 10, 'DEPARTURE TO HOMETOWN', 'Cebu', 'Today you will be transferred to Airport for your flight back home. We trust that you enjoyed your Vacation.', '["Today you will be transferred to Airport for your flight back home","We trust that you enjoyed your Vacation"]', '/images/philippines/pack-3.jpg', 9);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'English-speaking tour gui', 'English-speaking tour guides Land transportation by air-con vehicles Accommodation based on Twin-shared room with breakfast Meals as mentioned in the program (no drinks) Boat trips and admissions as mentioned in the program Drinking water during the touring day (2 bottles/person/day)', 'Check', 0);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Airfare (international and domestic) and airport tax ( on request ) Visa services (Visa approval letter/Visa stamp fee/ Visa fast track on request) Early check-in/late check-out/ room upgrade surcharge Other meals, Drinks, and personal expenses (phone call, laundry, tipping etc.) Any services not mentioned in the program Optional Tours', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, '/images/philippines/pack-3.jpg', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 'https://images.pexels.com/photos/2412711/pexels-photo-2412711.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 1);

-- Package 8: 4N/5D - Marvellous Philippines
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  'philippines-4', '4N/5D - Marvellous Philippines', 'Philippines', 'Southeast Asia', 
  'Explore 4N/5D - Marvellous Philippines with daily itineraries, local guides, and highlights', '/images/philippines/pack-4.jpg', 'Experience the beauty of the Philippines with our special package: 4N/5D - Marvellous Philippines. Discover rich culture, stunning white sand beaches, and historic landmarks on this guided tour.', 
  118.73, 9.74, 'Nature', 'bg-teal-500', 
  'Custom package for 4N/5D - Marvellous Philippines including hotel stays, transfers, and daily activities.', '/images/philippines/pack-4.jpg', 
  'published', '', '5 Days', 
  'Manila', 'Philippine Peso (PHP)', 'Tropical monsoon — warm year-round, dry Nov-May, wet Jun-Oct', 'November to April (dry season)', 
  'Filipino, English', 'PHT (UTC+8)', 'Right'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = 'philippines-4');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 1, 'ARRIVE MANILA', 'Palawan', 'Welcome to your MARVELLOUS PHILIPPINES tour. On arrival you will be met by our Tour Manager who will welcome you and take you to your hotel. known as the "Pearl of the Orient" which is the nation''s capital city. This bustling historic city is full of things to see and do – including museums, parks, theatres, shopping malls and a plethora of restaurants to choose from. Overnight stay at Manila', '["Welcome to your MARVELLOUS PHILIPPINES tour","On arrival you will be met by our Tour Manager who will welcome you and take you to your hotel","known as the \\"Pearl of the Orient\\" which is the nation''s capital city"]', '/images/philippines/pack-4.jpg', 0);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 2, 'MANILA CITY TOUR + DESTILERIA MUSEUM', 'Palawan', 'Breakfast at the hotel. Proceed Half Day Manila City Tour An introduction to Manila and its suburbs by driving through the financial district of Makati and Forbes Park, then a War Memorial stop over at the Global City. Next, proceed to the reclaimed area (Mall of Asia) and the Cultural Center along Roxas Boulevard. Lastly, a running tour of Rizal Park and the Walled City of Intramuros; Driving by San Agustin Church and Casa Manila then take a walk inside Fort Santiago. DESTILERIA LIMTUACO MUSEUM-Showcases the history of the oldest distillery in the Philippines, dating back to the Spanish colonial period. (Wine Tasting) Indian/Local Lunch at Restaurant After Lunch proceed for Shopping Tour. Over Night stay at Manila.', '["Breakfast at the hotel","Proceed Half Day Manila City Tour An introduction to Manila and its suburbs by driving through the financial district of Makati and Forbes Park, then a War Memorial stop over at the Global City","Next, proceed to the reclaimed area (Mall of Asia) and the Cultural Center along Roxas Boulevard"]', '/images/philippines/pack-4.jpg', 1);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 3, 'MANILA TO CEBU (DOMESTIC FLIGHT NOT INCLUDED)', 'Palawan', 'After breakfast, check out from the hotel and transfer to the airport to board your next flight for Cebu. On arrival in Cebu, you will be welcomed by your representative and transferred to your hotel. The rest of the day is at leisure to discover this charming island. Over Night stay at Cebu.', '["After breakfast, check out from the hotel and transfer to the airport to board your next flight for Cebu","On arrival in Cebu, you will be welcomed by your representative and transferred to your hotel","The rest of the day is at leisure to discover this charming island"]', '/images/philippines/pack-4.jpg', 2);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 4, 'CEBU TWIN CITY TOUR', 'Palawan', 'Breakfast at the hotel. Go for a City tour of Cebu famous for its historical and tourist attractions. Visit Lapu-Lapu Monument Magellan’s Shrine, Alegre Guitar Factory, Magellan’s Cross, Basilica Minore Del Sto. Nino, The Heritage of Cebu Monument Yap San Diego House, Taoist Temple, Running Tour: Colon Street, Fuente Osmena, Circle, Capitol Site Over Night stay at Cebu.', '["Breakfast at the hotel","Go for a City tour of Cebu famous for its historical and tourist attractions","Visit Lapu-Lapu Monument Magellan’s Shrine, Alegre Guitar Factory, Magellan’s Cross, Basilica Minore Del Sto"]', '/images/philippines/pack-4.jpg', 3);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 5, 'DEPARTURE TO HOMETOWN', 'Palawan', 'Today you will be transferred to Airport for your flight back home. We trust that you enjoyed your Vacation.', '["Today you will be transferred to Airport for your flight back home","We trust that you enjoyed your Vacation"]', '/images/philippines/pack-4.jpg', 4);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'English-speaking tour gui', 'English-speaking tour guides Land transportation by air-con vehicles Accommodation based on Twin-shared room with breakfast Meals as mentioned in the program (no drinks) Boat trips and admissions as mentioned in the program Drinking water during the touring day (2 bottles/person/day)', 'Check', 0);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Airfare (international and domestic) and airport tax ( on request ) Visa services (Visa approval letter/Visa stamp fee/ Visa fast track on request) Early check-in/late check-out/ room upgrade surcharge Other meals, Drinks, and personal expenses (phone call, laundry, tipping etc.) Any services not mentioned in the program Optional Tours', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, '/images/philippines/pack-4.jpg', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 'https://images.pexels.com/photos/2412711/pexels-photo-2412711.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 1);

-- Package 9: 8N/9D - Joyful Philippines
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  'philippines-5', '8N/9D - Joyful Philippines', 'Philippines', 'Southeast Asia', 
  'Explore 8N/9D - Joyful Philippines with daily itineraries, local guides, and highlights', '/images/philippines/pack-5.jpg', 'Experience the beauty of the Philippines with our special package: 8N/9D - Joyful Philippines. Discover rich culture, stunning white sand beaches, and historic landmarks on this guided tour.', 
  121.92, 11.97, 'Beach', 'bg-blue-500', 
  'Custom package for 8N/9D - Joyful Philippines including hotel stays, transfers, and daily activities.', '/images/philippines/pack-5.jpg', 
  'published', '', '9 Days', 
  'Manila', 'Philippine Peso (PHP)', 'Tropical monsoon — warm year-round, dry Nov-May, wet Jun-Oct', 'November to April (dry season)', 
  'Filipino, English', 'PHT (UTC+8)', 'Right'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = 'philippines-5');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 1, 'ARRIVE MANILA', 'Boracay', 'Welcome to your Joyful Philippines tour. On arrival you will be met by your Tour Manager who will welcome you and take you to your hotel. known as the "Pearl of the Orient" which is the nation''s capital city. This bustling historic city is full of things to see and do – including museums, parks, theaters, shopping malls and a plethora of restaurants to choose from. Overnight stay at Manila', '["Welcome to your Joyful Philippines tour","On arrival you will be met by your Tour Manager who will welcome you and take you to your hotel","known as the \\"Pearl of the Orient\\" which is the nation''s capital city"]', '/images/philippines/pack-5.jpg', 0);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 2, 'MANILA CITY TOUR + DESTILERIA MUSEUM', 'Boracay', 'Breakfast at the hotel. Proceed Half Day Manila City Tour An introduction to Manila and its suburbs by driving through the financial district of Makati and Forbes Park, then a War Memorial stop over at the Global City. Next, proceed to the reclaimed area (Mall of Asia) and the Cultural Center along Roxas Boulevard. Lastly, a running tour of Rizal Park and the Walled City of Intramuros; Driving by San Agustin Church and Casa Manila then take a walk inside Fort Santiago. DESTILERIA LIMTUACO MUSEUM-Showcases the history of the oldest distillery in the Philippines, dating back to the Spanish colonial period. (Wine Tasting) Indian/Local Lunch at Restaurant After Lunch proceed for Shopping Tour. Over Night stay at Manila.', '["Breakfast at the hotel","Proceed Half Day Manila City Tour An introduction to Manila and its suburbs by driving through the financial district of Makati and Forbes Park, then a War Memorial stop over at the Global City","Next, proceed to the reclaimed area (Mall of Asia) and the Cultural Center along Roxas Boulevard"]', '/images/philippines/pack-5.jpg', 1);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 3, 'MANILA TO BORACAY (DOMESTIC FLIGHT NOT INCLUDED)', 'Boracay', 'After breakfast, your will be checkout from hotel and transfers to the airport to board your next flight for Boracay. On arrival in Boracay, you will be welcomed by your representative and transferred to your hotel. The rest of the day is at leisure to discover this charming island. Over Night stay at Boracay.', '["After breakfast, your will be checkout from hotel and transfers to the airport to board your next flight for Boracay","On arrival in Boracay, you will be welcomed by your representative and transferred to your hotel","The rest of the day is at leisure to discover this charming island"]', '/images/philippines/pack-5.jpg', 2);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 4, 'BORACAY ISLAND HOPPING TOUR WITH LUNCH', 'Boracay', 'Breakfast at the hotel. Proceed for Boracay island hopping is a good opportunity to explore the islands surrounding this famous tropical escape, many of which have secluded beaches and a fascinating underwater paradise. Local Lunch @ The Picnic Area Over Night stay at Boracay.', '["Breakfast at the hotel","Proceed for Boracay island hopping is a good opportunity to explore the islands surrounding this famous tropical escape, many of which have secluded beaches and a fascinating underwater paradise","Local Lunch @ The Picnic Area Over Night stay at Boracay"]', '/images/philippines/pack-5.jpg', 3);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 5, 'BORACAY TO EL NIDO (DOMESTIC FLIGHT NOT INCLUDED)', 'Boracay', 'After breakfast, your will be checkout from hotel and transfers to the airport to board your next flight for El Nido. On arrival in El Nido, you will be welcomed by your representative and transferred to your hotel. The rest of the day is at leisure to discover this charming island. Over Night stay at El Nido.', '["After breakfast, your will be checkout from hotel and transfers to the airport to board your next flight for El Nido","On arrival in El Nido, you will be welcomed by your representative and transferred to your hotel","The rest of the day is at leisure to discover this charming island"]', '/images/philippines/pack-5.jpg', 4);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 6, 'EL NIDO TOUR WITH LUNCH', 'Boracay', 'Breakfast at the hotel. Proceed for El Nido Tour. Visit Secret Beach, Hidden Beach, Matinloc Shrine, Helicopter Island, Tapiutan Island. Local Lunch Over Night stay at El Nido.', '["Breakfast at the hotel","Proceed for El Nido Tour","Visit Secret Beach, Hidden Beach, Matinloc Shrine, Helicopter Island, Tapiutan Island"]', '/images/philippines/pack-5.jpg', 5);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 7, 'EL NIDO TO CEBU (DOMESTIC FLIGHT NOT INCLUDED)', 'Boracay', 'After breakfast, your will be checkout from hotel and transfers to the airport to board your next flight for Cebu. On arrival in Cebu, you will be welcomed by your representative and transferred to your hotel. The rest of the day is at leisure to discover this charming island. Over Night stay at Cebu.', '["After breakfast, your will be checkout from hotel and transfers to the airport to board your next flight for Cebu","On arrival in Cebu, you will be welcomed by your representative and transferred to your hotel","The rest of the day is at leisure to discover this charming island"]', '/images/philippines/pack-5.jpg', 6);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 8, 'CEBU TWIN CITY TOUR', 'Boracay', 'Breakfast at the hotel. Go for a City tour of Cebu famous for its historical and tourist attractions. Visit Lapu-Lapu Monument Magellan’s Shrine, Alegre Guitar Factory, Magellan’s Cross, Basilica Minore Del Sto. Nino, The Heritage of Cebu Monument Yap San Diego House, Taoist Temple, Running Tour: Colon Street, Fuente Osmena, Circle, Capitol Site Local Lunch. Over Night stay at Cebu', '["Breakfast at the hotel","Go for a City tour of Cebu famous for its historical and tourist attractions","Visit Lapu-Lapu Monument Magellan’s Shrine, Alegre Guitar Factory, Magellan’s Cross, Basilica Minore Del Sto"]', '/images/philippines/pack-5.jpg', 7);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 9, 'DEPARTURE TO HOMETOWN', 'Boracay', 'Today you will be transferred to Airport for your flight back home. We trust that you enjoyed your Vacation.', '["Today you will be transferred to Airport for your flight back home","We trust that you enjoyed your Vacation"]', '/images/philippines/pack-5.jpg', 8);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'English-speaking tour gui', 'English-speaking tour guides Land transportation by air-con vehicles Accommodation based on Twin-shared room with breakfast Meals as mentioned in the program (no drinks) Boat trips and admissions as mentioned in the program Drinking water during the touring day (2 bottles/person/day)', 'Check', 0);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Airfare (international and domestic) and airport tax ( on request ) Visa services (Visa approval letter/Visa stamp fee/ Visa fast track on request) Early check-in/late check-out/ room upgrade surcharge Other meals, Drinks, and personal expenses (phone call, laundry, tipping etc.) Any services not mentioned in the program Optional Tours', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, '/images/philippines/pack-5.jpg', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 'https://images.pexels.com/photos/2412711/pexels-photo-2412711.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 1);

-- Package 10: 6N/7D - Explore Philippines
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  'philippines-6', '6N/7D - Explore Philippines', 'Philippines', 'Southeast Asia', 
  'Explore 6N/7D - Explore Philippines with daily itineraries, local guides, and highlights', '/images/philippines/pack-6.jpg', 'Experience the beauty of the Philippines with our special package: 6N/7D - Explore Philippines. Discover rich culture, stunning white sand beaches, and historic landmarks on this guided tour.', 
  121.92, 11.97, 'Beach', 'bg-blue-500', 
  'Custom package for 6N/7D - Explore Philippines including hotel stays, transfers, and daily activities.', '/images/philippines/pack-6.jpg', 
  'published', '', '7 Days', 
  'Manila', 'Philippine Peso (PHP)', 'Tropical monsoon — warm year-round, dry Nov-May, wet Jun-Oct', 'November to April (dry season)', 
  'Filipino, English', 'PHT (UTC+8)', 'Right'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = 'philippines-6');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 1, 'ARRIVE MANILA', 'Boracay', 'Welcome to your Explore Philippines tour. On arrival you will be met by your Tour Manager who will welcome you and take you to your hotel. known as the "Pearl of the Orient" which is the nation''s capital city. This bustling historic city is full of things to see and do – including museums, parks, theatres, shopping malls and a plethora of restaurants to choose from. Overnight stay at Manila', '["Welcome to your Explore Philippines tour","On arrival you will be met by your Tour Manager who will welcome you and take you to your hotel","known as the \\"Pearl of the Orient\\" which is the nation''s capital city"]', '/images/philippines/pack-6.jpg', 0);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 2, 'MANILA CITY TOUR + DESTILERIA MUSEUM', 'Boracay', 'Breakfast at the hotel. Proceed Half Day Manila City Tour An introduction to Manila and its suburbs by driving through the financial district of Makati and Forbes Park, then a War Memorial stop over at the Global City. Next, proceed to the reclaimed area (Mall of Asia) and the Cultural Center along Roxas Boulevard. Lastly, a running tour of Rizal Park and the Walled City of Intramuros; Driving by San Agustin Church and Casa Manila then take a walk inside Fort Santiago. DESTILERIA LIMTUACO MUSEUM – Showcases the history of the oldest distillery in the Philippines, dating back to the Spanish colonial period. (Wine Tasting) Indian/Local Lunch at Restaurant After Lunch proceed for Shopping Tour. Over Night stay at Manila.', '["Breakfast at the hotel","Proceed Half Day Manila City Tour An introduction to Manila and its suburbs by driving through the financial district of Makati and Forbes Park, then a War Memorial stop over at the Global City","Next, proceed to the reclaimed area (Mall of Asia) and the Cultural Center along Roxas Boulevard"]', '/images/philippines/pack-6.jpg', 1);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 3, 'MANILA TO EL NIDO (DOMESTIC FLIGHT NOT INCLUDED)', 'Boracay', 'After breakfast, your will be checkout from hotel and transfers to the airport to board your next flight for El Nido. On arrival in El Nido, you will be welcomed by your representative and transferred to your hotel. The rest of the day is at leisure to discover this charming island. Over Night stay at El Nido.', '["After breakfast, your will be checkout from hotel and transfers to the airport to board your next flight for El Nido","On arrival in El Nido, you will be welcomed by your representative and transferred to your hotel","The rest of the day is at leisure to discover this charming island"]', '/images/philippines/pack-6.jpg', 2);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 4, 'EL NIDO TOUR WITH LUNCH', 'Boracay', 'Breakfast at the hotel. Proceed for El Nido Tour. Visit Secret Beach, Hidden Beach, Matinloc Shrine, Helicopter Island, Tapiutan Island. Local Lunch Over Night stay at El Nido.', '["Breakfast at the hotel","Proceed for El Nido Tour","Visit Secret Beach, Hidden Beach, Matinloc Shrine, Helicopter Island, Tapiutan Island"]', '/images/philippines/pack-6.jpg', 3);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 5, 'EL NIDO TO CEBU (DOMESTIC FLIGHT NOT INCLUDED)', 'Boracay', 'After breakfast, your will be checkout from hotel and transfers to the airport to board your next flight for Cebu. On arrival in Cebu, you will be welcomed by your representative and transferred to your hotel. The rest of the day is at leisure to discover this charming island. Over Night stay at Cebu.', '["After breakfast, your will be checkout from hotel and transfers to the airport to board your next flight for Cebu","On arrival in Cebu, you will be welcomed by your representative and transferred to your hotel","The rest of the day is at leisure to discover this charming island"]', '/images/philippines/pack-6.jpg', 4);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 6, 'CEBU TWIN CITY TOUR', 'Boracay', 'Breakfast at the hotel. Go for a City tour of Cebu famous for its historical and tourist attractions. Visit Lapu-Lapu Monument Magellan’s Shrine, Alegre Guitar Factory, Magellan’s Cross, Basilica Minore Del Sto. Nino, The Heritage of Cebu Monument Yap San Diego House, Taoist Temple, Running Tour: Colon Street, Fuente Osmena, Circle, Capitol Site Local Lunch. Over Night stay at Cebu.', '["Breakfast at the hotel","Go for a City tour of Cebu famous for its historical and tourist attractions","Visit Lapu-Lapu Monument Magellan’s Shrine, Alegre Guitar Factory, Magellan’s Cross, Basilica Minore Del Sto"]', '/images/philippines/pack-6.jpg', 5);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 7, 'DEPARTURE TO HOMETOWN', 'Boracay', 'Today you will be transferred to Airport for your flight back home. We trust that you enjoyed your Vacation.', '["Today you will be transferred to Airport for your flight back home","We trust that you enjoyed your Vacation"]', '/images/philippines/pack-6.jpg', 6);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'English-speaking tour gui', 'English-speaking tour guides Land transportation by air-con vehicles Accommodation based on Twin-shared room with breakfast Meals as mentioned in the program (no drinks) Boat trips and admissions as mentioned in the program Drinking water during the touring day (2 bottles/person/day)', 'Check', 0);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Airfare (international and domestic) and airport tax ( on request ) Visa services (Visa approval letter/Visa stamp fee/ Visa fast track on request) Early check-in/late check-out/ room upgrade surcharge Other meals, Drinks, and personal expenses (phone call, laundry, tipping etc.) Any services not mentioned in the program Optional Tours', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, '/images/philippines/pack-6.jpg', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 'https://images.pexels.com/photos/2412711/pexels-photo-2412711.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 1);

-- Package 11: 7N/8D - Experience Philippines
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  'philippines-7', '7N/8D - Experience Philippines', 'Philippines', 'Southeast Asia', 
  'Explore 7N/8D - Experience Philippines with daily itineraries, local guides, and highlights', '/images/philippines/pack-7.jpg', 'Experience the beauty of the Philippines with our special package: 7N/8D - Experience Philippines. Discover rich culture, stunning white sand beaches, and historic landmarks on this guided tour.', 
  123.89, 10.31, 'Adventure', 'bg-orange-500', 
  'Custom package for 7N/8D - Experience Philippines including hotel stays, transfers, and daily activities.', '/images/philippines/pack-7.jpg', 
  'published', '', '8 Days', 
  'Manila', 'Philippine Peso (PHP)', 'Tropical monsoon — warm year-round, dry Nov-May, wet Jun-Oct', 'November to April (dry season)', 
  'Filipino, English', 'PHT (UTC+8)', 'Right'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = 'philippines-7');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 1, 'ARRIVE MANILA & MANILA CITY TOUR + DESTILERIA MUSEUM', 'Cebu', 'Welcome to your Experience Philippines tour. On arrival you will be met by your Tour Manager who will welcome you and take you to your hotel. known as the "Pearl of the Orient" which is the nation''s capital city. This bustling historic city is full of things to see and do – including museums, parks, theaters, shopping malls and a plethora of restaurants to choose from. Proceed Half Day Manila City Tour An introduction to Manila and its suburbs by driving through the financial district of Makati and Forbes Park, then a War Memorial stop over at the Global City. Next, proceed to the reclaimed area (Mall of Asia) and the Cultural Center along Roxas Boulevard. Lastly, a running tour of Rizal Park and the Walled City of Intramuros; Driving by San Agustin Church and Casa Manila then take a walk inside Fort Santiago. DESTILERIA LIMTUACO MUSEUM-Showcases the history of the oldest distillery in the Philippines, dating back to the Spanish colonial period. (Wine Tasting) Indian/Local Lunch at Restaurant After Lunch proceed for Shopping Tour. Over Night stay at Manila.', '["Welcome to your Experience Philippines tour","On arrival you will be met by your Tour Manager who will welcome you and take you to your hotel","known as the \\"Pearl of the Orient\\" which is the nation''s capital city"]', '/images/philippines/pack-7.jpg', 0);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 2, 'MANILA TO BORACAY (DOMESTIC FLIGHT NOT INCLUDED)', 'Cebu', 'After breakfast, your will be checkout from hotel and transfers to the airport to board your next flight for Boracay. On arrival in Boracay, you will be welcomed by your representative and transferred to your hotel. The rest of the day is at leisure to discover this charming island. Over Night stay at Boracay.', '["After breakfast, your will be checkout from hotel and transfers to the airport to board your next flight for Boracay","On arrival in Boracay, you will be welcomed by your representative and transferred to your hotel","The rest of the day is at leisure to discover this charming island"]', '/images/philippines/pack-7.jpg', 1);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 3, 'BORACAY ISLAND HOPPING TOUR WITH LUNCH', 'Cebu', 'Breakfast at the hotel. Proceed for Boracay island hopping is a good opportunity to explore the islands surrounding this famous tropical escape, many of which have secluded beaches and a fascinating underwater paradise. Local Lunch @ The Picnic Area Over Night stay at Boracay.', '["Breakfast at the hotel","Proceed for Boracay island hopping is a good opportunity to explore the islands surrounding this famous tropical escape, many of which have secluded beaches and a fascinating underwater paradise","Local Lunch @ The Picnic Area Over Night stay at Boracay"]', '/images/philippines/pack-7.jpg', 2);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 4, 'BORACAY TO EL NIDO (DOMESTIC FLIGHT NOT INCLUDED)', 'Cebu', 'After breakfast, your will be checkout from hotel and transfers to the airport to board your next flight for El Nido. On arrival in El Nido, you will be welcomed by your representative and transferred to your hotel. The rest of the day is at leisure to discover this charming island. Over Night stay at El Nido.', '["After breakfast, your will be checkout from hotel and transfers to the airport to board your next flight for El Nido","On arrival in El Nido, you will be welcomed by your representative and transferred to your hotel","The rest of the day is at leisure to discover this charming island"]', '/images/philippines/pack-7.jpg', 3);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 5, 'EL NIDO TOUR WITH LUNCH', 'Cebu', 'Breakfast at the hotel. Proceed for El Nido Tour. Visit Secret Beach, Hidden Beach, Matinloc Shrine, Helicopter Island, Tapiutan Island. Local Lunch Over Night stay at El Nido.', '["Breakfast at the hotel","Proceed for El Nido Tour","Visit Secret Beach, Hidden Beach, Matinloc Shrine, Helicopter Island, Tapiutan Island"]', '/images/philippines/pack-7.jpg', 4);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 6, 'EL NIDO TO CEBU (DOMESTIC FLIGHT NOT INCLUDED)', 'Cebu', 'After breakfast, your will be checkout from hotel and transfers to the airport to board your next flight for Cebu. On arrival in Cebu, you will be welcomed by your representative and transferred to your hotel. The rest of the day is at leisure to discover this charming island. Over Night stay at Cebu.', '["After breakfast, your will be checkout from hotel and transfers to the airport to board your next flight for Cebu","On arrival in Cebu, you will be welcomed by your representative and transferred to your hotel","The rest of the day is at leisure to discover this charming island"]', '/images/philippines/pack-7.jpg', 5);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 7, 'CEBU TWIN CITY TOUR', 'Cebu', 'Breakfast at the hotel. Go for a City tour of Cebu famous for its historical and tourist attractions. Visit Lapu-Lapu Monument Magellan’s Shrine, Alegre Guitar Factory, Magellan’s Cross, Basilica Minore Del Sto. Nino, The Heritage of Cebu Monument Yap San Diego House, Taoist Temple, Running Tour: Colon Street, Fuente Osmena, Circle, Capitol Site Local Lunch. Over Night stay at Cebu.', '["Breakfast at the hotel","Go for a City tour of Cebu famous for its historical and tourist attractions","Visit Lapu-Lapu Monument Magellan’s Shrine, Alegre Guitar Factory, Magellan’s Cross, Basilica Minore Del Sto"]', '/images/philippines/pack-7.jpg', 6);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 8, 'DEPARTURE TO HOMETOWN', 'Cebu', 'Today you will be transferred to Airport for your flight back home. We trust that you enjoyed your Vacation.', '["Today you will be transferred to Airport for your flight back home","We trust that you enjoyed your Vacation"]', '/images/philippines/pack-7.jpg', 7);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'English-speaking tour gui', 'English-speaking tour guides Land transportation by air-con vehicles Accommodation based on Twin-shared room with breakfast Meals as mentioned in the program (no drinks) Boat trips and admissions as mentioned in the program Drinking water during the touring day (2 bottles/person/day)', 'Check', 0);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Airfare (international and domestic) and airport tax ( on request ) Visa services (Visa approval letter/Visa stamp fee/ Visa fast track on request) Early check-in/late check-out/ room upgrade surcharge Other meals, Drinks, and personal expenses (phone call, laundry, tipping etc.) Any services not mentioned in the program Optional Tours', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, '/images/philippines/pack-7.jpg', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 'https://images.pexels.com/photos/2412711/pexels-photo-2412711.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 1);

-- Package 12: 9N/10D - Exciting Philippines
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  'philippines-8', '9N/10D - Exciting Philippines', 'Philippines', 'Southeast Asia', 
  'Explore 9N/10D - Exciting Philippines with daily itineraries, local guides, and highlights', '/images/philippines/pack-8.jpg', 'Experience the beauty of the Philippines with our special package: 9N/10D - Exciting Philippines. Discover rich culture, stunning white sand beaches, and historic landmarks on this guided tour.', 
  118.73, 9.74, 'Nature', 'bg-teal-500', 
  'Custom package for 9N/10D - Exciting Philippines including hotel stays, transfers, and daily activities.', '/images/philippines/pack-8.jpg', 
  'published', '', '10 Days', 
  'Manila', 'Philippine Peso (PHP)', 'Tropical monsoon — warm year-round, dry Nov-May, wet Jun-Oct', 'November to April (dry season)', 
  'Filipino, English', 'PHT (UTC+8)', 'Right'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = 'philippines-8');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 1, 'ARRIVE MANILA', 'Palawan', 'Welcome to your Exciting Philippines tour. On arrival you will be met by your Tour Manager who will welcome you and take you to your hotel. known as the "Pearl of the Orient" which is the nation''s capital city. This bustling historic city is full of things to see and do – including museums, parks, theaters, shopping malls and a plethora of restaurants to choose from. Overnight stay at Manila', '["Welcome to your Exciting Philippines tour","On arrival you will be met by your Tour Manager who will welcome you and take you to your hotel","known as the \\"Pearl of the Orient\\" which is the nation''s capital city"]', '/images/philippines/pack-8.jpg', 0);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 2, 'MANILA CITY TOUR + DESTILERIA MUSEUM', 'Palawan', 'Breakfast at the hotel. Proceed Half Day Manila City Tour An introduction to Manila and its suburbs by driving through the financial district of Makati and Forbes Park, then a War Memorial stop over at the Global City. Next, proceed to the reclaimed area (Mall of Asia) and the Cultural Center along Roxas Boulevard. Lastly, a running tour of Rizal Park and the Walled City of Intramuros; Driving by San Agustin Church and Casa Manila then take a walk inside Fort Santiago. DESTILERIA LIMTUACO MUSEUM-Showcases the history of the oldest distillery in the Philippines, dating back to the Spanish colonial period. (Wine Tasting) Indian/Local Lunch at Restaurant After Lunch proceed for Shopping Tour. Over Night stay at Manila.', '["Breakfast at the hotel","Proceed Half Day Manila City Tour An introduction to Manila and its suburbs by driving through the financial district of Makati and Forbes Park, then a War Memorial stop over at the Global City","Next, proceed to the reclaimed area (Mall of Asia) and the Cultural Center along Roxas Boulevard"]', '/images/philippines/pack-8.jpg', 1);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 3, 'PAGSANJAN FALLS TOUR', 'Palawan', 'Breakfast at the hotel. A two-hour drive or 110 kilometers south of Manila is the rustic town of Pagsanjan; stunningly beautiful with thrilling adventure. "Shoot the rapids" on dugout canoes and experience nature''s wonders. Be prepared to board a native banca (canoe) skilfully driven by two boatmen and maneuvered upstream through rocks and boulders amidst steep gorges and lush tropical vegetation. Your destination – the magnificent Pagsanjan Falls. Take a swim or board a bamboo raft through the falls into a cave right behind its veil of water. Highlight of the program is the upriver ride on board canoe boats to the main falls followed by downriver ride that passes through 14 rapids: the most breathtaking part of the tour. Over Night stay at Manila.', '["Breakfast at the hotel","A two-hour drive or 110 kilometers south of Manila is the rustic town of Pagsanjan; stunningly beautiful with thrilling adventure","\\"Shoot the rapids\\" on dugout canoes and experience nature''s wonders"]', '/images/philippines/pack-8.jpg', 2);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 4, 'MANILA TO BORACAY (DOMESTIC FLIGHT NOT INCLUDED)', 'Palawan', 'After breakfast, your will be checkout from hotel and transfers to the airport to board your next flight for Boracay. On arrival in Boracay, you will be welcomed by your representative and transferred to your hotel. The rest of the day is at leisure to discover this charming island. Over Night stay at Boracay.', '["After breakfast, your will be checkout from hotel and transfers to the airport to board your next flight for Boracay","On arrival in Boracay, you will be welcomed by your representative and transferred to your hotel","The rest of the day is at leisure to discover this charming island"]', '/images/philippines/pack-8.jpg', 3);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 5, 'BORACAY ISLAND HOPPING TOUR WITH LUNCH', 'Palawan', 'Breakfast at the hotel. Proceed for Boracay island hopping is a good opportunity to explore the islands surrounding this famous tropical escape, many of which have secluded beaches and a fascinating underwater paradise. Local Lunch @ The Picnic Area Over Night stay at Boracay.', '["Breakfast at the hotel","Proceed for Boracay island hopping is a good opportunity to explore the islands surrounding this famous tropical escape, many of which have secluded beaches and a fascinating underwater paradise","Local Lunch @ The Picnic Area Over Night stay at Boracay"]', '/images/philippines/pack-8.jpg', 4);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 6, 'BORACAY', 'Palawan', 'Breakfast at the hotel. Day Free at leisure. Over Night stay at Boracay', '["Breakfast at the hotel","Day Free at leisure","Over Night stay at Boracay"]', '/images/philippines/pack-8.jpg', 5);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 7, 'BORACAY TO EL NIDO (DOMESTIC FLIGHT NOT INCLUDED)', 'Palawan', 'After breakfast, your will be checkout from hotel and transfers to the airport to board your next flight for El Nido. On arrival in El Nido, you will be welcomed by your representative and transferred to your hotel. The rest of the day is at leisure to discover this charming island. Over Night stay at El Nido.', '["After breakfast, your will be checkout from hotel and transfers to the airport to board your next flight for El Nido","On arrival in El Nido, you will be welcomed by your representative and transferred to your hotel","The rest of the day is at leisure to discover this charming island"]', '/images/philippines/pack-8.jpg', 6);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 8, 'EL NIDO TOUR WITH LUNCH', 'Palawan', 'Breakfast at the hotel. Proceed for El Nido Tour. Visit Secret Beach, Hidden Beach, Matinloc Shrine, Helicopter Island, Tapiutan Island. Local Lunch Over Night stay at El Nido.', '["Breakfast at the hotel","Proceed for El Nido Tour","Visit Secret Beach, Hidden Beach, Matinloc Shrine, Helicopter Island, Tapiutan Island"]', '/images/philippines/pack-8.jpg', 7);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 9, 'EL NIDO TOUR WITH LUNCH', 'Palawan', 'Breakfast at the hotel. Proceed for El Nido Tour. Visit Big Lagoon, Shimizu Island, Secret Lagoon, Seven Commando, Payong Payong Beach. Local Lunch Over Night stay at El Nido.', '["Breakfast at the hotel","Proceed for El Nido Tour","Visit Big Lagoon, Shimizu Island, Secret Lagoon, Seven Commando, Payong Payong Beach"]', '/images/philippines/pack-8.jpg', 8);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 10, 'DEPARTURE TO HOMETOWN', 'Palawan', 'Today you will be transferred to Airport for your flight back home. We trust that you enjoyed your Vacation.', '["Today you will be transferred to Airport for your flight back home","We trust that you enjoyed your Vacation"]', '/images/philippines/pack-8.jpg', 9);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'English-speaking tour gui', 'English-speaking tour guides Land transportation by air-con vehicles Accommodation based on Twin-shared room with breakfast Meals as mentioned in the program (no drinks) Boat trips and admissions as mentioned in the program Drinking water during the touring day (2 bottles/person/day)', 'Check', 0);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Airfare (international and domestic) and airport tax ( on request ) Visa services (Visa approval letter/Visa stamp fee/ Visa fast track on request) Early check-in/late check-out/ room upgrade surcharge Other meals, Drinks, and personal expenses (phone call, laundry, tipping etc.) Any services not mentioned in the program Optional Tours', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, '/images/philippines/pack-8.jpg', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 'https://images.pexels.com/photos/2412711/pexels-photo-2412711.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 1);

-- Package 13: 9N/10D - Discover Philippines
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  'philippines-9', '9N/10D - Discover Philippines', 'Philippines', 'Southeast Asia', 
  'Explore 9N/10D - Discover Philippines with daily itineraries, local guides, and highlights', '/images/philippines/pack-9.jpg', 'Experience the beauty of the Philippines with our special package: 9N/10D - Discover Philippines. Discover rich culture, stunning white sand beaches, and historic landmarks on this guided tour.', 
  121.92, 11.97, 'Beach', 'bg-blue-500', 
  'Custom package for 9N/10D - Discover Philippines including hotel stays, transfers, and daily activities.', '/images/philippines/pack-9.jpg', 
  'published', '', '10 Days', 
  'Manila', 'Philippine Peso (PHP)', 'Tropical monsoon — warm year-round, dry Nov-May, wet Jun-Oct', 'November to April (dry season)', 
  'Filipino, English', 'PHT (UTC+8)', 'Right'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = 'philippines-9');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 1, 'ARRIVE MANILA', 'Boracay', 'Welcome to your Discover Philippines tour. On arrival you will be met by your Tour Manager who will welcome you and take you to your hotel. known as the "Pearl of the Orient" which is the nation''s capital city. This bustling historic city is full of things to see and do – including museums, parks, theaters, shopping malls and a plethora of restaurants to choose from. Overnight stay at Manila', '["Welcome to your Discover Philippines tour","On arrival you will be met by your Tour Manager who will welcome you and take you to your hotel","known as the \\"Pearl of the Orient\\" which is the nation''s capital city"]', '/images/philippines/pack-9.jpg', 0);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 2, 'MANILA CITY TOUR + DESTILERIA MUSEUM', 'Boracay', 'Breakfast at the hotel. Proceed Half Day Manila City Tour An introduction to Manila and its suburbs by driving through the financial district of Makati and Forbes Park, then a War Memorial stop over at the Global City. Next, proceed to the reclaimed area (Mall of Asia) and the Cultural Center along Roxas Boulevard. Lastly, a running tour of Rizal Park and the Walled City of Intramuros; Driving by San Agustin Church and Casa Manila then take a walk inside Fort Santiago. DESTILERIA LIMTUACO MUSEUM-Showcases the history of the oldest distillery in the Philippines, dating back to the Spanish colonial period. (Wine Tasting). Indian/Local Lunch at Restaurant After Lunch proceed for Shopping Tour. Over Night stay at Manila.', '["Breakfast at the hotel","Proceed Half Day Manila City Tour An introduction to Manila and its suburbs by driving through the financial district of Makati and Forbes Park, then a War Memorial stop over at the Global City","Next, proceed to the reclaimed area (Mall of Asia) and the Cultural Center along Roxas Boulevard"]', '/images/philippines/pack-9.jpg', 1);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 3, 'PAGSANJAN FALLS TOUR', 'Boracay', 'Breakfast at the hotel. A two-hour drive or 110 kilometers south of Manila is the rustic town of Pagsanjan; stunningly beautiful with thrilling adventure. "Shoot the rapids" on dugout canoes and experience nature''s wonders. Be prepared to board a native banca (canoe) skilfully driven by two boatmen and maneuvered upstream through rocks and boulders amidst steep gorges and lush tropical vegetation. Your destination – the magnificent Pagsanjan Falls. Take a swim or board a bamboo raft through the falls into a cave right behind its veil of water. Highlight of the program is the upriver ride on board canoe boats to the main falls followed by downriver ride that passes through 14 rapids: the most breathtaking part of the tour.', '["Breakfast at the hotel","A two-hour drive or 110 kilometers south of Manila is the rustic town of Pagsanjan; stunningly beautiful with thrilling adventure","\\"Shoot the rapids\\" on dugout canoes and experience nature''s wonders"]', '/images/philippines/pack-9.jpg', 2);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 4, 'MANILA TO BORACAY (DOMESTIC FLIGHT NOT INCLUDED)', 'Boracay', 'After breakfast, your will be checkout from hotel and transfers to the airport to board your next flight for Boracay. On arrival in Boracay, you will be welcomed by your representative and transferred to your hotel. The rest of the day is at leisure to discover this charming island. Over Night stay at Boracay.', '["After breakfast, your will be checkout from hotel and transfers to the airport to board your next flight for Boracay","On arrival in Boracay, you will be welcomed by your representative and transferred to your hotel","The rest of the day is at leisure to discover this charming island"]', '/images/philippines/pack-9.jpg', 3);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 5, 'BORACAY ISLAND HOPPING TOUR WITH LUNCH', 'Boracay', 'Breakfast at the hotel. Proceed for Boracay island hopping is a good opportunity to explore the islands surrounding this famous tropical escape, many of which have secluded beaches and a fascinating underwater paradise. Local Lunch @ The Picnic Area Over Night stay at Boracay.', '["Breakfast at the hotel","Proceed for Boracay island hopping is a good opportunity to explore the islands surrounding this famous tropical escape, many of which have secluded beaches and a fascinating underwater paradise","Local Lunch @ The Picnic Area Over Night stay at Boracay"]', '/images/philippines/pack-9.jpg', 4);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 6, 'BORACAY', 'Boracay', 'Breakfast at the hotel. Day Free at leisure. Over Night stay at Boracay.', '["Breakfast at the hotel","Day Free at leisure","Over Night stay at Boracay"]', '/images/philippines/pack-9.jpg', 5);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 7, 'BORACAY TO CEBU (DOMESTIC FLIGHT NOT INCLUDED)', 'Boracay', 'After breakfast, your will be checkout from hotel and transfers to the airport to board your next flight for Cebu. On arrival in Cebu, you will be welcomed by your representative and transferred to your hotel. The rest of the day is at leisure to discover this charming island. Over Night stay at Cebu.', '["After breakfast, your will be checkout from hotel and transfers to the airport to board your next flight for Cebu","On arrival in Cebu, you will be welcomed by your representative and transferred to your hotel","The rest of the day is at leisure to discover this charming island"]', '/images/philippines/pack-9.jpg', 6);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 8, 'CEBU TWIN CITY TOUR', 'Boracay', 'Breakfast at the hotel. Go for a City tour of Cebu famous for its historical and tourist attractions. Visit Lapu-Lapu Monument Magellan’s Shrine, Alegre Guitar Factory, Magellan’s Cross, Basilica Minore Del Sto. Nino, The Heritage of Cebu Monument Yap San Diego House, Taoist Temple, Running Tour: Colon Street, Fuente Osmena, Circle, Capitol Site Local Lunch. Over Night stay at Cebu.', '["Breakfast at the hotel","Go for a City tour of Cebu famous for its historical and tourist attractions","Visit Lapu-Lapu Monument Magellan’s Shrine, Alegre Guitar Factory, Magellan’s Cross, Basilica Minore Del Sto"]', '/images/philippines/pack-9.jpg', 7);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 9, 'BOHOL COUNTRYSIDE TOUR', 'Boracay', 'Breakfast at the hotel. A whole day trip that showcases the province''s history, culture and its unspoiled nature, this tour starts in the city towards the east starting with the historic Blood Compact Commemorative Shrine. A few kilometers away is the centuries old Baclayon church with its impressive carved wooden altars built during the Spanish regime. En route to Chocolate Hills which are very uniform in shape and mostly between 30 and 50 meters high. They are covered with grass, which, at the end of the dry season, turns chocolate brown, one drives through the lush man-made forest of the towns of Loboc and Bilar planted with Mahogany and endemic trees. The highlight of the entire trip is a 50-minute Loboc river cruise on board a motorized catamaran boat. A sumptuous lunch of local cuisine is served while the guests are enjoying the beautiful scenery along the riverbanks verdant rolling hills, cliffs, trees, and coconuts that recline in the river. Over Night stay at Cebu.', '["Breakfast at the hotel","A whole day trip that showcases the province''s history, culture and its unspoiled nature, this tour starts in the city towards the east starting with the historic Blood Compact Commemorative Shrine","A few kilometers away is the centuries old Baclayon church with its impressive carved wooden altars built during the Spanish regime"]', '/images/philippines/pack-9.jpg', 8);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 10, 'DEPARTURE TO HOMETOWN', 'Boracay', 'Today you will be transferred to Airport for your flight back home. We trust that you enjoyed your Vacation.', '["Today you will be transferred to Airport for your flight back home","We trust that you enjoyed your Vacation"]', '/images/philippines/pack-9.jpg', 9);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'English-speaking tour gui', 'English-speaking tour guides Land transportation by air-con vehicles Accommodation based on Twin-shared room with breakfast Meals as mentioned in the program (no drinks) Boat trips and admissions as mentioned in the program Drinking water during the touring day (2 bottles/person/day)', 'Check', 0);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Airfare (international and domestic) and airport tax ( on request ) Visa services (Visa approval letter/Visa stamp fee/ Visa fast track on request) Early check-in/late check-out/ room upgrade surcharge Other meals, Drinks, and personal expenses (phone call, laundry, tipping etc.) Any services not mentioned in the program Optional Tours', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, '/images/philippines/pack-9.jpg', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 'https://images.pexels.com/photos/2412711/pexels-photo-2412711.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 1);

-- Package 14: 3N/4D - 3 N Manila
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  'philippines-10', '3N/4D - 3 N Manila', 'Philippines', 'Southeast Asia', 
  'Explore 3N/4D - 3 N Manila with daily itineraries, local guides, and highlights', '/images/philippines/pack-9.jpg', 'Experience the beauty of the Philippines with our special package: 3N/4D - 3 N Manila. Discover rich culture, stunning white sand beaches, and historic landmarks on this guided tour.', 
  120.98, 14.59, 'Historical', 'bg-amber-600', 
  'Custom package for 3N/4D - 3 N Manila including hotel stays, transfers, and daily activities.', '/images/philippines/pack-9.jpg', 
  'published', '', '4 Days', 
  'Manila', 'Philippine Peso (PHP)', 'Tropical monsoon — warm year-round, dry Nov-May, wet Jun-Oct', 'November to April (dry season)', 
  'Filipino, English', 'PHT (UTC+8)', 'Right'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = 'philippines-10');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 1, 'Welcome to the Philippines!', 'Manila', 'Arrival Meet and greet at the Airport Transfer to Evening free Overnight stay in Hotel', '["Arrival Meet and greet at the Airport Transfer to Evening free Overnight stay in Hotel"]', '/images/philippines/pack-9.jpg', 0);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 2, 'Manila Full day sight-seeing', 'Manila', 'After breakfast morning 9am Proceed to Manila City Tour SIGHTS OF INTERESTS – RIZAL PARK – Immerse you into Philippines history at the Rizal Park named after Dr. Jose Rizal, Philippine national hero. INTRAMUROS – also known as the Walled City” that was considered as Manila itself during the Spanish colonial period FORT SANTIAGO – The fort is one of the most important historical sites in Manila. Several lives were lost in its prisons during the Spanish Colonial Period and World War II. José Rizal, the Philippine national hero, was imprisoned here before his execution in 1896 MANILA CATHEDRAL – a Roman Catholic Basilica and one of the oldest churches in the Philippines CASA MANILA – The museum is the imposing stone-and-wood structure circa. SM MALL of ASIA SHOPPING & SEASIDE AREA Back to Hotel Overnight in Manila', '["After breakfast morning 9am Proceed to Manila City Tour SIGHTS OF INTERESTS – RIZAL PARK – Immerse you into Philippines history at the Rizal Park named after Dr","Jose Rizal, Philippine national hero","INTRAMUROS – also known as the Walled City” that was considered as Manila itself during the Spanish colonial period FORT SANTIAGO – The fort is one of the most important historical sites in Manila"]', '/images/philippines/pack-9.jpg', 1);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 3, 'Taal Volcano Island Tour - Tagaytay Tour', 'Manila', 'Breakfast at the Hotel Morning 8am Proceed to Taal Volcano Island Tour + Boat Ride(inclusive of entry tickets) See the stunning Taal Lake and Taal Volcano up close with this boat tour that comes with a DOT (Department of Tourism) – accredited guide, the use of a life vest, and all entrance and boat station fees. This one-hour Taal Lake tour is perfect for those who want to get a closer look at the Taal Volcano, as the boat will get as close as 10 meters away from the natural wonder. Proceed to Tagaytay viewpoint Tour Back to Manila Evening Transfer For Okada Fountain show & Casino Visit Overnight at Manila', '["Breakfast at the Hotel Morning 8am Proceed to Taal Volcano Island Tour + Boat Ride(inclusive of entry tickets) See the stunning Taal Lake and Taal Volcano up close with this boat tour that comes with a DOT (Department of Tourism) – accredited guide, the use of a life vest, and all entrance and boat station fees","This one-hour Taal Lake tour is perfect for those who want to get a closer look at the Taal Volcano, as the boat will get as close as 10 meters away from the natural wonder","Proceed to Tagaytay viewpoint Tour Back to Manila Evening Transfer For Okada Fountain show & Casino Visit Overnight at Manila"]', '/images/philippines/pack-9.jpg', 2);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 4, 'DEPART MANILA', 'Manila', 'Breakfast at the hotel Check out Hotel / Transfer to Airport', '["Breakfast at the hotel Check out Hotel / Transfer to Airport"]', '/images/philippines/pack-9.jpg', 3);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, '3 Nights Hotel Accommodat', '3 Nights Hotel Accommodation in Manila Daily Hotel Breakfast All Tour & Transfer Pvt Basis Local Tours and Activities: As Per Itinerary Fort Santiago Tickets Applicable Entrance Fees As Per Itinerary', 'Check', 0);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Airfare from the country of origin Domestic Airfare (if any) All personal incidental expenses Other services not mentioned in the inclusions Tipping’s (Driver/Guide/Boatmen) Others Entry Fees Paid By Guest Terminal Travel Insurance with Covid-19 Coverage (if required)', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, '/images/philippines/pack-9.jpg', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 'https://images.pexels.com/photos/2412711/pexels-photo-2412711.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 1);

-- Package 15: 3N/4D - 2N Manila + 1N Angeles
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  'philippines-11', '3N/4D - 2N Manila + 1N Angeles', 'Philippines', 'Southeast Asia', 
  'Explore 3N/4D - 2N Manila + 1N Angeles with daily itineraries, local guides, and highlights', '/images/philippines/pack-1.jpg', 'Experience the beauty of the Philippines with our special package: 3N/4D - 2N Manila + 1N Angeles. Discover rich culture, stunning white sand beaches, and historic landmarks on this guided tour.', 
  120.98, 14.59, 'Historical', 'bg-amber-600', 
  'Custom package for 3N/4D - 2N Manila + 1N Angeles including hotel stays, transfers, and daily activities.', '/images/philippines/pack-1.jpg', 
  'published', '', '4 Days', 
  'Manila', 'Philippine Peso (PHP)', 'Tropical monsoon — warm year-round, dry Nov-May, wet Jun-Oct', 'November to April (dry season)', 
  'Filipino, English', 'PHT (UTC+8)', 'Right'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = 'philippines-11');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 1, 'ARRIVAL MANILA', 'Manila', 'Arrival Manila and meet and greet Transfer to Hotel, Check in Hotel in and relax Evening free Overnight stay in Manila', '["Arrival Manila and meet and greet Transfer to Hotel, Check in Hotel in and relax Evening free Overnight stay in Manila"]', '/images/philippines/pack-1.jpg', 0);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 2, 'TAAL VOLCANO ISLAND TOUR TAGAYTAY SIGHTSEEING TOUR', 'Manila', 'Breakfast at the Hotel Proceed to Taal Volcano Island Tour + Boat ride See the stunning Taal Lake and Taal Volcano up close with this boat tour that comes with a DOT (Department of Tourism) – accredited guide, the use of a life vest, and all entrance and boat station fees. This one-hour Taal Lake tour is perfect for those who want to get a closer look at the Taal Volcano, as the boat will get as close as 10 meters away from the natural wonder. Proceed to Tagaytay Sightseeing Tour Back to Manila Overnight in Manila', '["Breakfast at the Hotel Proceed to Taal Volcano Island Tour + Boat ride See the stunning Taal Lake and Taal Volcano up close with this boat tour that comes with a DOT (Department of Tourism) – accredited guide, the use of a life vest, and all entrance and boat station fees","This one-hour Taal Lake tour is perfect for those who want to get a closer look at the Taal Volcano, as the boat will get as close as 10 meters away from the natural wonder","Proceed to Tagaytay Sightseeing Tour Back to Manila Overnight in Manila"]', '/images/philippines/pack-1.jpg', 1);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 3, 'MANILA TO ANGELES CITY', 'Manila', 'Breakfast at the Hotel Drive to Angeles City – 02 hours journey by car proceed for Clark Tour Covering Clark Museum Air Force City Pamintuan Mansion Hansa Museum Nepo Market Back to Angeles City Hotel', '["Breakfast at the Hotel Drive to Angeles City – 02 hours journey by car proceed for Clark Tour Covering Clark Museum Air Force City Pamintuan Mansion Hansa Museum Nepo Market Back to Angeles City Hotel"]', '/images/philippines/pack-1.jpg', 2);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 4, 'ANGELES CITY – MANILA – RETURN', 'Manila', 'After breakfast, Check out of hotel Transfer to Manila by car Board the International flight for you is onwards journey from Manila.', '["After breakfast, Check out of hotel Transfer to Manila by car Board the International flight for you is onwards journey from Manila"]', '/images/philippines/pack-1.jpg', 3);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, '2 Nights Hotel Accommodat', '2 Nights Hotel Accommodation in Manila 1 Nights Hotel Accommodation in Angeles city Daily Hotel Breakfast All Tour & Transfer Pvt Basis Local Tours and Activities: As Per Itinerary Fort Santiago tickets Taal volcano boat ride Applicable Entrance Fees As Per Itinerary', 'Check', 0);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Airfare from the country of origin Domestic Airfare (if any) All personal incidental expenses Other services not mentioned in the inclusions Tipping’s (Driver/Guide/Boatmen) Others Entry Fees Paid By Guest Terminal Travel Insurance with Covid-19 Coverage (if required)', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, '/images/philippines/pack-1.jpg', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 'https://images.pexels.com/photos/2412711/pexels-photo-2412711.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 1);

-- Package 16: 4N/5D - 2N Manila + 2N Cebu
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  'philippines-12', '4N/5D - 2N Manila + 2N Cebu', 'Philippines', 'Southeast Asia', 
  'Explore 4N/5D - 2N Manila + 2N Cebu with daily itineraries, local guides, and highlights', '/images/philippines/pack-2.jpg', 'Experience the beauty of the Philippines with our special package: 4N/5D - 2N Manila + 2N Cebu. Discover rich culture, stunning white sand beaches, and historic landmarks on this guided tour.', 
  123.89, 10.31, 'Adventure', 'bg-orange-500', 
  'Custom package for 4N/5D - 2N Manila + 2N Cebu including hotel stays, transfers, and daily activities.', '/images/philippines/pack-2.jpg', 
  'published', '', '5 Days', 
  'Manila', 'Philippine Peso (PHP)', 'Tropical monsoon — warm year-round, dry Nov-May, wet Jun-Oct', 'November to April (dry season)', 
  'Filipino, English', 'PHT (UTC+8)', 'Right'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = 'philippines-12');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 1, 'Welcome to the Philippines!', 'Cebu', 'Arrival Meet and greet at the Airport Transfer & Check in to Hotel. Evening free Overnight stay in Hotel at Manila', '["Arrival Meet and greet at the Airport Transfer & Check in to Hotel","Evening free Overnight stay in Hotel at Manila"]', '/images/philippines/pack-2.jpg', 0);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 2, 'MANILA FULL DAY SIGHT-SEEING (09.00am – 07.00pm)', 'Cebu', 'Breakfast at the Hotel Proceed to Manila City Tour SIGHTS OF INTERESTS – RIZAL PARK – Immerse yourself into Philippines history at the Rizal Park named after Dr. Jose Rizal, Philippine national hero. INTRAMUROS – also known as the Walled City” that was considered as Manila itself during the Spanish colonial period. FORT SANTIAGO – The fort is one of the most important historical sites in Manila. Several lives were lost in its prisons during the Spanish Colonial Period and World War II. José Rizal, the Philippine national hero, was imprisoned here before his execution in 1896. MANILA CATHEDRAL – a Roman Catholic Basilica and one of the oldest churches in the Philippines CASA MANILA – The museum is the imposing stone-and-wood structure circa. SM MALL of ASIA SHOPPING & SEASIDE AREA Overnight stay at Manila', '["Breakfast at the Hotel Proceed to Manila City Tour SIGHTS OF INTERESTS – RIZAL PARK – Immerse yourself into Philippines history at the Rizal Park named after Dr","Jose Rizal, Philippine national hero","INTRAMUROS – also known as the Walled City” that was considered as Manila itself during the Spanish colonial period"]', '/images/philippines/pack-2.jpg', 1);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 3, 'FLIGHT TO CEBU – CEBU HALF DAY CITY TOUR', 'Cebu', 'Breakfast at the Hotel Check out hotel / Transfer to Domestic Airport Flight to Cebu Check-In Hotel at Cebu After that proceed to Cebu City Tours including Temple of Leah, Fort San Pedro , Tops Lookout (Night Viewing of the Metropolitan) (if time permits) CCLEX (Longest Bridge in the Philippines) (if time permits) Back to Hotel & Overnight at Cebu.', '["Breakfast at the Hotel Check out hotel / Transfer to Domestic Airport Flight to Cebu Check-In Hotel at Cebu After that proceed to Cebu City Tours including Temple of Leah, Fort San Pedro , Tops Lookout (Night Viewing of the Metropolitan) (if time permits) CCLEX (Longest Bridge in the Philippines) (if time permits) Back to Hotel & Overnight at Cebu"]', '/images/philippines/pack-2.jpg', 2);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 4, 'CEBU – OSLOB WHALE SHARK WATCHING & KAWASAN WATERFALLS', 'Cebu', 'Early morning (05:00 am ) proceed to Oslob Whale shark watching & Kawasan Waterfalls with Turquoise water . 09:00 am Oslob Whale Shark Watching ( hotel will provide packed breakfast) 02:00 pm Kawasan Falls view ( Bamboo ride watching falls) 06:30 PM back to hotel & relax .', '["Early morning (05:00 am ) proceed to Oslob Whale shark watching & Kawasan Waterfalls with Turquoise water","09:00 am Oslob Whale Shark Watching ( hotel will provide packed breakfast) 02:00 pm Kawasan Falls view ( Bamboo ride watching falls) 06:30 PM back to hotel & relax "]', '/images/philippines/pack-2.jpg', 3);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 5, 'DEPART CEBU', 'Cebu', 'Breakfast at the hotel Check out Hotel / Transfer to International Airport for onwards journey', '["Breakfast at the hotel Check out Hotel / Transfer to International Airport for onwards journey"]', '/images/philippines/pack-2.jpg', 4);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, '2 Nights Hotel Accommodat', '2 Nights Hotel Accommodation in Manila 2 Nights Hotel Accommodation in Cebu Daily Hotel Breakfast All Tour & Transfer Pvt Basis Local Tours and Activities: As Per Itinerary Applicable Entrance Fees As Per Itinerary', 'Check', 0);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Airfare from the country of origin Domestic Airfare (if any) All personal incidental expenses Other services not mentioned in the inclusions Tipping’s (Driver/Guide/Boatmen) Others Entry Fees Paid By Guest Terminal Travel Insurance with Covid-19 Coverage (if required)', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, '/images/philippines/pack-2.jpg', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 'https://images.pexels.com/photos/2412711/pexels-photo-2412711.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 1);

-- Package 17: 4N/5D - 2N Manila + 2N Boracay
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  'philippines-13', '4N/5D - 2N Manila + 2N Boracay', 'Philippines', 'Southeast Asia', 
  'Explore 4N/5D - 2N Manila + 2N Boracay with daily itineraries, local guides, and highlights', '/images/philippines/pack-4.jpg', 'Experience the beauty of the Philippines with our special package: 4N/5D - 2N Manila + 2N Boracay. Discover rich culture, stunning white sand beaches, and historic landmarks on this guided tour.', 
  121.92, 11.97, 'Beach', 'bg-blue-500', 
  'Custom package for 4N/5D - 2N Manila + 2N Boracay including hotel stays, transfers, and daily activities.', '/images/philippines/pack-4.jpg', 
  'published', '', '5 Days', 
  'Manila', 'Philippine Peso (PHP)', 'Tropical monsoon — warm year-round, dry Nov-May, wet Jun-Oct', 'November to April (dry season)', 
  'Filipino, English', 'PHT (UTC+8)', 'Right'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = 'philippines-13');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 1, 'Welcome to the Philippines!', 'Boracay', 'Arrival Meet and greet at the Airport Transfer To Manila Hotel Evening Free Back to Hotel, Over Night Stay', '["Arrival Meet and greet at the Airport Transfer To Manila Hotel Evening Free Back to Hotel, Over Night Stay"]', '/images/philippines/pack-4.jpg', 0);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 2, 'MANILA CITY TOUR', 'Boracay', 'Breakfast at the Hotel Proceed to Manila City Tour SIGHTS OF INTERESTS – RIZAL PARK – Immerse yourself into Philippines history at the Rizal Park named after Dr. Jose Rizal, Philippine national hero. INTRAMUROS – also known as the Walled City” that was considered as Manila itself during the Spanish colonial period. FORT SANTIAGO – The fort is one of the most important historical sites in Manila. Several lives were lost in its prisons during the Spanish Colonial Period and World War II. José Rizal, the Philippine national hero, was imprisoned here before his execution in 1896. MANILA CATHEDRAL – a Roman Catholic Basilica and one of the oldest churches in the Philippines. Transfer for Shopping at SM Mall Back To Hotel Overnight stay at Manila', '["Breakfast at the Hotel Proceed to Manila City Tour SIGHTS OF INTERESTS – RIZAL PARK – Immerse yourself into Philippines history at the Rizal Park named after Dr","Jose Rizal, Philippine national hero","INTRAMUROS – also known as the Walled City” that was considered as Manila itself during the Spanish colonial period"]', '/images/philippines/pack-4.jpg', 1);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 3, 'FLIGHT TO BORACAY', 'Boracay', 'Breakfast at the Hotel Check out the Hotel/ Transfer to the Domestic Airport. Fly to Boracay. Check in the Hotel and enjoy the beach. Pick up from Hotel & proceed for Boracay Sunset Cruise – meet up time 03.30 PM Shared in Local Boat Live music (Acoustic Singer) Back massage on board Amazing sunset viewing Back to hotel at Boracay Overnight stay at Boracay', '["Breakfast at the Hotel Check out the Hotel/ Transfer to the Domestic Airport","Fly to Boracay","Check in the Hotel and enjoy the beach"]', '/images/philippines/pack-4.jpg', 2);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 4, 'BORACAY ISLAND HOPPING TOUR', 'Boracay', 'Pick from the Hotel (Proceed to Station 1) Start the tour Explore Ilig Iligan Beach. Proceed to Crocodile for Swimming Crocodile Island Tambisaan Beach Visit Crystal Cove Island Take picnic lunch during the Tour Back to Boat Station. Overnight stay at Boracay.', '["Pick from the Hotel (Proceed to Station 1) Start the tour Explore Ilig Iligan Beach","Proceed to Crocodile for Swimming Crocodile Island Tambisaan Beach Visit Crystal Cove Island Take picnic lunch during the Tour Back to Boat Station","Overnight stay at Boracay"]', '/images/philippines/pack-4.jpg', 3);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 5, 'DEPARTURE', 'Boracay', 'Breakfast at the Hotel Check out hotel / Transfer to International airport and onwards journey.', '["Breakfast at the Hotel Check out hotel / Transfer to International airport and onwards journey"]', '/images/philippines/pack-4.jpg', 4);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, '2 Nights Hotel Accommodat', '2 Nights Hotel Accommodation in Manila 2 Nights Hotel Accommodation in Boracay Daily Hotel Breakfast All Tour & Transfer Pvt Basis Island Hopping Tour SIC Basis All sightseen as per itinerary Applicable Entrance Fees As Per Itinerary', 'Check', 0);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Airfare from the country of origin Domestic Airfare (if any) All personal incidental expenses Other services not mentioned in the inclusions Tipping’s (Driver/Guide/Boatmen) Others Entry Fees Paid By Guest Terminal Travel Insurance with Covid-19 Coverage (if required)', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, '/images/philippines/pack-4.jpg', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 'https://images.pexels.com/photos/2412711/pexels-photo-2412711.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 1);

-- Package 18: 4N/5D - 2N Manila + 2N Angeles City
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  'philippines-14', '4N/5D - 2N Manila + 2N Angeles City', 'Philippines', 'Southeast Asia', 
  'Explore 4N/5D - 2N Manila + 2N Angeles City with daily itineraries, local guides, and highlights', '/images/philippines/pack-5.jpg', 'Experience the beauty of the Philippines with our special package: 4N/5D - 2N Manila + 2N Angeles City. Discover rich culture, stunning white sand beaches, and historic landmarks on this guided tour.', 
  120.98, 14.59, 'Historical', 'bg-amber-600', 
  'Custom package for 4N/5D - 2N Manila + 2N Angeles City including hotel stays, transfers, and daily activities.', '/images/philippines/pack-5.jpg', 
  'published', '', '5 Days', 
  'Manila', 'Philippine Peso (PHP)', 'Tropical monsoon — warm year-round, dry Nov-May, wet Jun-Oct', 'November to April (dry season)', 
  'Filipino, English', 'PHT (UTC+8)', 'Right'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = 'philippines-14');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 1, 'ARRIVAL MANILA', 'Manila', 'Arrival Manila and meet and greet Transfer to Hotel, Check in Hotel in and relax Evening Free Overnight stay in Manila', '["Arrival Manila and meet and greet Transfer to Hotel, Check in Hotel in and relax Evening Free Overnight stay in Manila"]', '/images/philippines/pack-5.jpg', 0);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 2, 'TAAL VOLCANO ISLAND TOUR TAGAYTAY SIGHTSEEING TOUR', 'Manila', 'Breakfast at the Hotel Proceed to Taal Volcano Island Tour + Boat ride See the stunning Taal Lake and Taal Volcano up close with this boat tour that comes with a DOT (Department of Tourism) – accredited guide, the use of a life vest, and all entrance and boat station fees. This one-hour Taal Lake tour is perfect for those who want to get a closer look at the Taal Volcano, as the boat will get as close as 10 meters away from the natural wonder. Proceed to Tagaytay Sightseeing Tour Transfer for Shopping at SM Mall Back to Manila Overnight in Manila', '["Breakfast at the Hotel Proceed to Taal Volcano Island Tour + Boat ride See the stunning Taal Lake and Taal Volcano up close with this boat tour that comes with a DOT (Department of Tourism) – accredited guide, the use of a life vest, and all entrance and boat station fees","This one-hour Taal Lake tour is perfect for those who want to get a closer look at the Taal Volcano, as the boat will get as close as 10 meters away from the natural wonder","Proceed to Tagaytay Sightseeing Tour Transfer for Shopping at SM Mall Back to Manila Overnight in Manila"]', '/images/philippines/pack-5.jpg', 1);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 3, 'MANILA TO ANGELES CITY', 'Manila', 'Breakfast at the Hotel Proceed to Manila City Tour SIGHTS OF INTERESTS – RIZAL PARK – Immerse yourself into Philippines history at the Rizal Park named after Dr. Jose Rizal, Philippine national hero. INTRAMUROS – also known as the Walled City” that was considered as Manila itself during the Spanish colonial period. FORT SANTIAGO – The fort is one of the most important historical sites in Manila. Several lives were lost in its prisons during the Spanish Colonial Period and World War II. José Rizal, the Philippine national hero, was imprisoned here before his execution in 1896. MANILA CATHEDRAL – a Roman Catholic Basilica and one of the oldest churches in the Philippines CASA MANILA – The museum is the imposing stone-andwood structure circa. Drive to Angeles City – 02 hours journey by car proceed Check in Hotel at Angeles in and relax Overnight in Angeles City', '["Breakfast at the Hotel Proceed to Manila City Tour SIGHTS OF INTERESTS – RIZAL PARK – Immerse yourself into Philippines history at the Rizal Park named after Dr","Jose Rizal, Philippine national hero","INTRAMUROS – also known as the Walled City” that was considered as Manila itself during the Spanish colonial period"]', '/images/philippines/pack-5.jpg', 2);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 4, 'ANGELES CITY TOUR', 'Manila', 'Breakfast at the Hotel Proceed for Clark Tour – Covering Clark Museum Air Force City Pamintuan Mansion Hansa Museum Nepo Market Back to Angeles City Hotel', '["Breakfast at the Hotel Proceed for Clark Tour – Covering Clark Museum Air Force City Pamintuan Mansion Hansa Museum Nepo Market Back to Angeles City Hotel"]', '/images/philippines/pack-5.jpg', 3);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 5, 'ANGELES CITY – MANILA – RETURN', 'Manila', 'After breakfast, Check out of hotel Transfer to Manila by car Board the International flight', '["After breakfast, Check out of hotel Transfer to Manila by car Board the International flight"]', '/images/philippines/pack-5.jpg', 4);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, '2 Nights Hotel Accommodat', '2 Nights Hotel Accommodation in Manila 2 Nights Hotel Accommodation in Angeles city Daily Hotel Breakfast All Tour & Transfer Pvt Basis Local Tours and Activities: As Per Itinerary Fort Santiago tickets Applicable Entrance Fees As Per Itinerary', 'Check', 0);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Airfare from the country of origin Domestic Airfare (if any) All personal incidental expenses Other services not mentioned in the inclusions Tipping’s (Driver/Guide/Boatmen) Others Entry Fees Paid By Guest Terminal Travel Insurance with Covid-19 Coverage (if required)', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, '/images/philippines/pack-5.jpg', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 'https://images.pexels.com/photos/2412711/pexels-photo-2412711.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 1);

-- Package 19: 6N/7D - 2N Manila + 2N Boracay + 2N Cebu
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  'philippines-15', '6N/7D - 2N Manila + 2N Boracay + 2N Cebu', 'Philippines', 'Southeast Asia', 
  'Explore 6N/7D - 2N Manila + 2N Boracay + 2N Cebu with daily itineraries, local guides, and highlights', '/images/philippines/pack-6.jpg', 'Experience the beauty of the Philippines with our special package: 6N/7D - 2N Manila + 2N Boracay + 2N Cebu. Discover rich culture, stunning white sand beaches, and historic landmarks on this guided tour.', 
  123.89, 10.31, 'Adventure', 'bg-orange-500', 
  'Custom package for 6N/7D - 2N Manila + 2N Boracay + 2N Cebu including hotel stays, transfers, and daily activities.', '/images/philippines/pack-6.jpg', 
  'published', '', '7 Days', 
  'Manila', 'Philippine Peso (PHP)', 'Tropical monsoon — warm year-round, dry Nov-May, wet Jun-Oct', 'November to April (dry season)', 
  'Filipino, English', 'PHT (UTC+8)', 'Right'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = 'philippines-15');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 1, 'Welcome to the Philippines!', 'Cebu', 'Arrival Meet and greet at the Airport Transfer & Check in to Hotel Evening free Overnight stay in Hotel at Manila', '["Arrival Meet and greet at the Airport Transfer & Check in to Hotel Evening free Overnight stay in Hotel at Manila"]', '/images/philippines/pack-6.jpg', 0);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 2, 'MANILA FULL DAY SIGHT-SEEING (09.00am – 07.00pm)', 'Cebu', 'Breakfast at the Hotel Proceed to Manila City Tour SIGHTS OF INTERESTS – RIZAL PARK – Immerse yourself into Philippines history at the Rizal Park named after Dr. Jose Rizal, Philippine national hero. INTRAMUROS – also known as the Walled City” that was considered as Manila itself during the Spanish colonial period. FORT SANTIAGO – The fort is one of the most important historical sites in Manila. Several lives were lost in its prisons during the Spanish Colonial Period and World War II. Jos Rizal, the Philippine national hero, was imprisoned here before his execution in 1896. MANILA CATHEDRAL – a Roman Catholic Basilica and one of the oldest churches in the Philippines CASA MANILA – The museum is the imposing stone-and-wood structure circa. SM MALL of ASIA SHOPPING & SEASIDE AREA Overnight stay at Manila', '["Breakfast at the Hotel Proceed to Manila City Tour SIGHTS OF INTERESTS – RIZAL PARK – Immerse yourself into Philippines history at the Rizal Park named after Dr","Jose Rizal, Philippine national hero","INTRAMUROS – also known as the Walled City” that was considered as Manila itself during the Spanish colonial period"]', '/images/philippines/pack-6.jpg', 1);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 3, 'FLIGHT TO BORACAY', 'Cebu', 'Breakfast at the Hotel Transfer to airport Flight to Boracay Transfer to Hotel & enjoy the beach Transfer for Sunset Cruise Sharing Basis', '["Breakfast at the Hotel Transfer to airport Flight to Boracay Transfer to Hotel & enjoy the beach Transfer for Sunset Cruise Sharing Basis"]', '/images/philippines/pack-6.jpg', 2);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 4, 'BORACAY ISLAND HOPPING TOUR', 'Cebu', 'Breakfast at hotel Pick from the Hotel (Proceed to Station 1) Start the tour Explore Ilig Iligan Beach. Proceed to Crocodile for Swimming Crocodile Island Tambisaan Beach Visit Crystal Cove Island Take picnic lunch during the Tour Back to Boat Station. Overnight stay at Boracay.', '["Breakfast at hotel Pick from the Hotel (Proceed to Station 1) Start the tour Explore Ilig Iligan Beach","Proceed to Crocodile for Swimming Crocodile Island Tambisaan Beach Visit Crystal Cove Island Take picnic lunch during the Tour Back to Boat Station","Overnight stay at Boracay"]', '/images/philippines/pack-6.jpg', 3);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 5, 'FLIGHT TO CEBU – CEBU HALF DAY CITY TOUR', 'Cebu', 'After breakfast transfer to Boracay Airport Flight for Cebu Pick up from Airport proceed for Cebu City Tours including Temple of Leah , Fort San Pedro, Tops Lookout (Night Viewing of the Metropolitan), 10,000 Roses (if time permits), Longest Bridge in the Philippines ( if time permits ) Transfer to Hotel Overnight stay at Cebu.', '["After breakfast transfer to Boracay Airport Flight for Cebu Pick up from Airport proceed for Cebu City Tours including Temple of Leah , Fort San Pedro, Tops Lookout (Night Viewing of the Metropolitan), 10,000 Roses (if time permits), Longest Bridge in the Philippines ( if time permits ) Transfer to Hotel Overnight stay at Cebu"]', '/images/philippines/pack-6.jpg', 4);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 6, 'CEBU – OSLOB WHALE SHARK WATCHING & KAWASAN WATERFALLS', 'Cebu', 'Early morning (05:00 am) proceed to Oslob Whale shark watching & Kawasan Waterfalls with Turquoise water. 09:00 am Oslob Whale Shark Watching (hotel will provide packed breakfast) 02:00 pm Kawasan Falls view (Bamboo ride watching falls) 06:30 PM back to hotel & relax.', '["Early morning (05:00 am) proceed to Oslob Whale shark watching & Kawasan Waterfalls with Turquoise water","09:00 am Oslob Whale Shark Watching (hotel will provide packed breakfast) 02:00 pm Kawasan Falls view (Bamboo ride watching falls) 06:30 PM back to hotel & relax"]', '/images/philippines/pack-6.jpg', 5);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 7, 'DEPARTURE CEBU', 'Cebu', 'Breakfast at the hotel Check out Hotel / Transfer to International Airport for onwards journey', '["Breakfast at the hotel Check out Hotel / Transfer to International Airport for onwards journey"]', '/images/philippines/pack-6.jpg', 6);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, '2 Nights Hotel Accommodat', '2 Nights Hotel Accommodation in Manila 2 Nights Hotel Accommodation in Boracay 2 Nights Hotel Accommodation in Cebu Daily Hotel Breakfast All Tour & Transfer Pvt Basis Local Tours and Activities: As Per Itinerary Fort Santiago tickets Boracay island hopping tour SIC Basis Applicable Entrance Fees As Per Itinerary', 'Check', 0);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Airfare from the country of origin Domestic Airfare (if any) All personal incidental expenses Other services not mentioned in the inclusions Tipping’s (Driver/Guide/Boatmen) Others Entry Fees Paid By Guest Terminal Travel Insurance with Covid-19 Coverage (if required)', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, '/images/philippines/pack-6.jpg', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 'https://images.pexels.com/photos/2412711/pexels-photo-2412711.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 1);

-- Package 20: 5N/6D - 2N Manila + 3N Boracay
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  'philippines-16', '5N/6D - 2N Manila + 3N Boracay', 'Philippines', 'Southeast Asia', 
  'Explore 5N/6D - 2N Manila + 3N Boracay with daily itineraries, local guides, and highlights', '/images/philippines/pack-7.jpg', 'Experience the beauty of the Philippines with our special package: 5N/6D - 2N Manila + 3N Boracay. Discover rich culture, stunning white sand beaches, and historic landmarks on this guided tour.', 
  121.92, 11.97, 'Beach', 'bg-blue-500', 
  'Custom package for 5N/6D - 2N Manila + 3N Boracay including hotel stays, transfers, and daily activities.', '/images/philippines/pack-7.jpg', 
  'published', '', '6 Days', 
  'Manila', 'Philippine Peso (PHP)', 'Tropical monsoon — warm year-round, dry Nov-May, wet Jun-Oct', 'November to April (dry season)', 
  'Filipino, English', 'PHT (UTC+8)', 'Right'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = 'philippines-16');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 1, 'Welcome to the Philippines!', 'Boracay', 'Arrival Meet and greet at the Airport Transfer To Manila Hotel Evening Free Back to Hotel, Over Night Stay', '["Arrival Meet and greet at the Airport Transfer To Manila Hotel Evening Free Back to Hotel, Over Night Stay"]', '/images/philippines/pack-7.jpg', 0);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 2, 'MANILA CITY TOUR', 'Boracay', 'Breakfast at the Hotel Proceed to Manila City Tour SIGHTS OF INTERESTS – RIZAL PARK – Immerse yourself into Philippines history at the Rizal Park named after Dr. Jose Rizal, Philippine national hero. INTRAMUROS – also known as the Walled City” that was considered as Manila itself during the Spanish colonial period. FORT SANTIAGO – The fort is one of the most important historical sites in Manila. Several lives were lost in its prisons during the Spanish Colonial Period and World War II. José Rizal, the Philippine national hero, was imprisoned here before his execution in 1896. MANILA CATHEDRAL – a Roman Catholic Basilica and one of the oldest churches in the Philippines. Transfer for Shopping at SM Mall Back To Hotel Overnight stay at Manila', '["Breakfast at the Hotel Proceed to Manila City Tour SIGHTS OF INTERESTS – RIZAL PARK – Immerse yourself into Philippines history at the Rizal Park named after Dr","Jose Rizal, Philippine national hero","INTRAMUROS – also known as the Walled City” that was considered as Manila itself during the Spanish colonial period"]', '/images/philippines/pack-7.jpg', 1);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 3, 'FLIGHT TO BORACAY', 'Boracay', 'Breakfast at the Hotel Check out the Hotel/ Transfer to the Domestic Airport. Fly to Boracay. Check in to the hotel. Overnight stay at Boracay', '["Breakfast at the Hotel Check out the Hotel/ Transfer to the Domestic Airport","Fly to Boracay","Check in to the hotel"]', '/images/philippines/pack-7.jpg', 2);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 4, 'BORACAY SUNSET CRUISE', 'Boracay', 'Breakfast at hotel. Morning free. Later Pick up from Hotel & proceed for Boracay Sunset Cruise -meet up time 03.30 PM Shared in Local Boat Live music (Acoustic Singer) Back massage on board Amazing sunset viewing Back to hotel at Boracay', '["Breakfast at hotel","Morning free","Later Pick up from Hotel & proceed for Boracay Sunset Cruise -meet up time 03.30 PM Shared in Local Boat Live music (Acoustic Singer) Back massage on board Amazing sunset viewing Back to hotel at Boracay"]', '/images/philippines/pack-7.jpg', 3);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 5, 'BORACAY ISLAND HOPPING TOUR', 'Boracay', 'Pick from the Hotel (Proceed to Station 1) Start the tour Explore Ilig Iligan Beach. Proceed to Crocodile for Swimming Crocodile Island Tambisaan Beach Visit Crystal Cove Island Take picnic lunch during the Tour Back to Boat Station. Overnight stay at Boracay.', '["Pick from the Hotel (Proceed to Station 1) Start the tour Explore Ilig Iligan Beach","Proceed to Crocodile for Swimming Crocodile Island Tambisaan Beach Visit Crystal Cove Island Take picnic lunch during the Tour Back to Boat Station","Overnight stay at Boracay"]', '/images/philippines/pack-7.jpg', 4);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 6, 'DEPARTURE', 'Boracay', 'Breakfast at the Hotel Check out hotel / Transfer to International airport and onwards journey.', '["Breakfast at the Hotel Check out hotel / Transfer to International airport and onwards journey"]', '/images/philippines/pack-7.jpg', 5);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, '2 Nights Hotel Accommodat', '2 Nights Hotel Accommodation in Manila 3 Nights Hotel Accommodation in Boracay Daily Hotel Breakfast All Tour & Transfer Pvt Basis Island Hopping Tour SIC Basis All sightseen as per itinerary Applicable Entrance Fees As Per Itinerary', 'Check', 0);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Airfare from the country of origin Domestic Airfare (if any) All personal incidental expenses Other services not mentioned in the inclusions Tipping’s (Driver/Guide/Boatmen) Others Entry Fees Paid By Guest Terminal Travel Insurance with Covid-19 Coverage (if required)', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, '/images/philippines/pack-7.jpg', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 'https://images.pexels.com/photos/2412711/pexels-photo-2412711.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 1);

-- Package 21: 5N/6D - 2N Manila + 3N Cebu
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  'philippines-17', '5N/6D - 2N Manila + 3N Cebu', 'Philippines', 'Southeast Asia', 
  'Explore 5N/6D - 2N Manila + 3N Cebu with daily itineraries, local guides, and highlights', '/images/philippines/pack-8.jpg', 'Experience the beauty of the Philippines with our special package: 5N/6D - 2N Manila + 3N Cebu. Discover rich culture, stunning white sand beaches, and historic landmarks on this guided tour.', 
  123.89, 10.31, 'Adventure', 'bg-orange-500', 
  'Custom package for 5N/6D - 2N Manila + 3N Cebu including hotel stays, transfers, and daily activities.', '/images/philippines/pack-8.jpg', 
  'published', '', '6 Days', 
  'Manila', 'Philippine Peso (PHP)', 'Tropical monsoon — warm year-round, dry Nov-May, wet Jun-Oct', 'November to April (dry season)', 
  'Filipino, English', 'PHT (UTC+8)', 'Right'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = 'philippines-17');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 1, 'Welcome to the Philippines!', 'Cebu', 'Arrival Meet and greet at the Airport Transfer & Check in to Hotel. Evening free Overnight stay in Hotel at Manila', '["Arrival Meet and greet at the Airport Transfer & Check in to Hotel","Evening free Overnight stay in Hotel at Manila"]', '/images/philippines/pack-8.jpg', 0);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 2, 'MANILA FULL DAY SIGHT-SEEING (09.00am – 07.00pm)', 'Cebu', 'Breakfast at the Hotel Proceed to Manila City Tour SIGHTS OF INTERESTS – RIZAL PARK – Immerse yourself into Philippines history at the Rizal Park named after Dr. Jose Rizal, Philippine national hero. INTRAMUROS – also known as the Walled City” that was considered as Manila itself during the Spanish colonial period. FORT SANTIAGO – The fort is one of the most important historical sites in Manila. Several lives were lost in its prisons during the Spanish Colonial Period and World War II. José Rizal, the Philippine national hero, was imprisoned here before his execution in 1896. MANILA CATHEDRAL – a Roman Catholic Basilica and one of the oldest churches in the Philippines CASA MANILA – The museum is the imposing stone-and-wood structure circa. SM MALL of ASIA SHOPPING & SEASIDE AREA Overnight stay at Manila', '["Breakfast at the Hotel Proceed to Manila City Tour SIGHTS OF INTERESTS – RIZAL PARK – Immerse yourself into Philippines history at the Rizal Park named after Dr","Jose Rizal, Philippine national hero","INTRAMUROS – also known as the Walled City” that was considered as Manila itself during the Spanish colonial period"]', '/images/philippines/pack-8.jpg', 1);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 3, 'FLIGHT TO CEBU', 'Cebu', 'Breakfast at the Hotel Check out hotel / Transfer to Domestic Airport Flight to Cebu Check-In Hotel at Cebu', '["Breakfast at the Hotel Check out hotel / Transfer to Domestic Airport Flight to Cebu Check-In Hotel at Cebu"]', '/images/philippines/pack-8.jpg', 2);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 4, 'CEBU HALF DAY CITY TOUR', 'Cebu', 'Breakfast at hotel Proceed to Cebu City Tours including Temple of Leah, Fort San Pedro, Back to Hotel & Overnight at Cebu.', '["Breakfast at hotel Proceed to Cebu City Tours including Temple of Leah, Fort San Pedro, Back to Hotel & Overnight at Cebu"]', '/images/philippines/pack-8.jpg', 3);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 5, 'CEBU – OSLOB WHALE SHARK WATCHING & KAWASAN WATERFALLS', 'Cebu', 'Early morning (05:00 am ) proceed to Oslob Whale shark watching & Kawasan Waterfalls with Turquoise water . 09:00 am Oslob Whale Shark Watching ( hotel will provide packed breakfast) 02:00 pm Kawasan Falls view ( Bamboo ride watching falls) 06:30 PM back to hotel & relax .', '["Early morning (05:00 am ) proceed to Oslob Whale shark watching & Kawasan Waterfalls with Turquoise water","09:00 am Oslob Whale Shark Watching ( hotel will provide packed breakfast) 02:00 pm Kawasan Falls view ( Bamboo ride watching falls) 06:30 PM back to hotel & relax "]', '/images/philippines/pack-8.jpg', 4);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 6, 'DEPART CEBU', 'Cebu', 'Breakfast at the hotel Check out Hotel / Transfer to International Airport for onwards journey', '["Breakfast at the hotel Check out Hotel / Transfer to International Airport for onwards journey"]', '/images/philippines/pack-8.jpg', 5);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, '2 Nights Hotel Accommodat', '2 Nights Hotel Accommodation in Manila 3 Nights Hotel Accommodation in Cebu Daily Hotel Breakfast All Tour & Transfer Pvt Basis Local Tours and Activities: As Per Itinerary Applicable Entrance Fees As Per Itinerary', 'Check', 0);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Airfare from the country of origin Domestic Airfare (if any) All personal incidental expenses Other services not mentioned in the inclusions Tipping’s (Driver/Guide/Boatmen) Others Entry Fees Paid By Guest Terminal Travel Insurance with Covid-19 Coverage (if required)', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, '/images/philippines/pack-8.jpg', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 'https://images.pexels.com/photos/2412711/pexels-photo-2412711.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 1);

