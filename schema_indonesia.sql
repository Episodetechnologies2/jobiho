-- Indonesia Tour Packages Schema and Data
-- This script creates tables if they do not exist and inserts/updates the Indonesia packages.

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

-- Package 1: Komodo
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  'komodo', 'Komodo', 'Indonesia', 'Southeast Asia', 
  'Lair of the prehistoric dragons and dramatic volcanic islands', '/images/tour-1.jpg''s-Padar-Island-1024x683.jpg', 'Komodo National Park is a dramatic volcanic sanctuary located in the Lesser Sunda Islands of Indonesia. Spanning across three main islands—Komodo, Rinca, and Padar—it was established to protect the endemic Komodo dragon, the largest living species of lizard. The park features pink sand beaches, crystal-clear turquoise waters, and some of the world''s most rich marine biodiversity, making it a legendary haven for scuba divers, snorkelers, and adventure seekers alike.', 
  119.88, -8.45, 'Adventure', 'bg-orange-500', 
  'Volcanic islands, prehistoric dragons, and world-class marine gardens.', '/images/indonesia/8-600x400.jpg', 
  'published', '', '3 Days', 
  'Jakarta', 'Indonesian Rupiah (Rp)', 'Tropical with dry season (April–October) and wet season (November–March)', 'April–October (dry season)', 
  'Indonesian (Bahasa), English', 'WITA (UTC+8)', 'Left'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = 'komodo');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 1, 'Arrive Labuan Bajo, Transfer to Hotel', 'Labuan Bajo', 'Arrive at Komodo Airport in Labuan Bajo, meet and greet, and transfer to your hotel. Rest of the day is at leisure.', '["Airport meet and greet","Transfer to Labuan Bajo hotel","Free time at leisure"]', '/images/indonesia/1-1-600x400.jpg', 0);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 2, 'Speedboat Tour of Komodo National Park', 'Komodo Island', 'Board a speedboat to explore Padar Island for sunrise views, relax on Pink Beach, trek on Komodo Island to spot the legendary dragons, and snorkel at Manta Point.', '["Sunrise trekking at Padar Island","Relax and swim at Pink Beach","Spot Komodo dragons on Komodo Island","Snorkel with Mantas at Manta Point"]', '/images/indonesia/8-600x400.jpg', 1);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 3, 'Kelor Island & Departure', 'Labuan Bajo', 'Visit Kelor Island for scenic views and snorkeling, then return to Labuan Bajo for transfer to airport.', '["Snorkel at Kelor Island","Transfer to Komodo Airport for departure"]', '/images/indonesia/3-indo-600x400.jpg', 2);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Dragon Trekking', 'Hike through Komodo or Rinca islands with park rangers to spot Komodo dragons in their natural habitat.', 'Compass', 0);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Pink Beach Snorkeling', 'Swim in clear waters over coral reefs directly off the unique pastel-pink sand shore.', 'Droplets', 1);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Tap water is not drinkable; always use bottled or filtered water.', 0);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Bring reef-safe sunscreen to protect Komodo''s pristine marine life.', 1);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Trekking shoes are essential for climbing Padar Island''s steep hills.', 2);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, '/images/indonesia/8-600x400.jpg', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, '/images/tour-1.jpg''s-Padar-Island-1024x683.jpg', 1);

-- Package 2: Jogyakarta
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  'jogyakarta', 'Jogyakarta', 'Indonesia', 'Southeast Asia', 
  'Cultural soul of Java — home of Borobudur and royal palaces', '/images/indonesia/9-600x400.webp', 'Jogyakarta (often called Jogja) is the cultural heart of Java, Indonesia. It is a city of historic palaces, vibrant street art, traditional batik, and shadow puppet theatre. Most importantly, it serves as the gateway to two of Southeast Asia''s greatest archaeological treasures: Borobudur, the world''s largest Buddhist temple, and Prambanan, a towering Hindu temple complex. Jogja remains a royal sultanate, blending royal heritage, ancient spirituality, and a bustling university atmosphere.', 
  110.37, -7.79, 'Historical', 'bg-amber-600', 
  'Ancient Borobudur temples, sultan palaces, and vibrant Javanese culture.', '/images/indonesia/9-600x400.webp', 
  'published', '', '3 Days', 
  'Jogyakarta', 'Indonesian Rupiah (Rp)', 'Tropical with dry season (April–October) and wet season (November–March)', 'April–October (dry season)', 
  'Javanese, Indonesian (Bahasa), English', 'WIB (UTC+7)', 'Left'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = 'jogyakarta');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 1, 'Jogyakarta Arrival & Sultan Palace', 'Jogyakarta', 'Arrive in Jogyakarta, transfer to hotel. In the afternoon, explore the Kraton Sultan Palace and Tamansari Water Castle.', '["Airport transfer to hotel","Explore Kraton Sultan Palace heritage","Visit Tamansari Water Castle ruins"]', '/images/indonesia/9-600x400.webp', 0);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 2, 'Borobudur Sunrise & Prambanan Temple', 'Jogyakarta', 'Wake up early for a spectacular sunrise over the ancient Borobudur Buddhist temple. In the afternoon, visit the towering Prambanan Hindu temple complex.', '["Spectacular sunrise at Borobudur","Explore the volcanic stone stupas","Visit Prambanan Hindu temples"]', '/images/indonesia/10-600x400.jpg', 1);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 3, 'Malioboro Shopping & Departure', 'Jogyakarta', 'Stroll along Jalan Malioboro for local batik shopping, then transfer to Jogyakarta International Airport for departure.', '["Batik shopping along Malioboro street","Transfer to Jogyakarta International Airport"]', '/images/indonesia/11-600x400.jpg', 2);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Temple Exploring', 'Walk through Borobudur and Prambanan temple compounds to admire ancient Javanese stone carvings.', 'Compass', 0);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Batik Making', 'Join a traditional workshop in Kota Gede to paint your own Javanese batik fabric.', 'Pen', 1);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Wear respectful clothing covering shoulders and knees when visiting temples.', 0);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Try local delicacies like Gudeg (sweet Javanese jackfruit stew) and Bakpia cakes.', 1);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, '/images/indonesia/9-600x400.webp', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, '/images/indonesia/10-600x400.jpg', 1);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, '/images/indonesia/11-600x400.jpg', 2);

-- Package 3: Wae Rebo Village
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  'wae-rebo-village', 'Wae Rebo Village', 'Indonesia', 'Southeast Asia', 
  'The cloud village of Flores — traditional Mbaru Niang houses', '/images/indonesia/3-indo-600x400.jpg', 'Wae Rebo is an isolated, traditional village in the highlands of Manggarai on the island of Flores, Indonesia. Surrounded by dense rainforests and mountains, the village is famous for its unique conical houses called Mbaru Niang, built of wood and thatch. Reached only via a scenic 3-hour trek, Wae Rebo offers visitors a rare opportunity to experience traditional Manggarai lifestyle, warm hospitality, and pure starlight nights.', 
  120.28, -8.63, 'Adventure', 'bg-orange-500', 
  'Traditional mountain village with conical thatch houses in Flores.', '/images/indonesia/3-indo-600x400.jpg', 
  'published', '', '2 Days', 
  'Jakarta', 'Indonesian Rupiah (Rp)', 'Cool mountain climate, humid and wet during monsoons', 'April–October (dry season)', 
  'Manggarai, Indonesian (Bahasa), English', 'WITA (UTC+8)', 'Left'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = 'wae-rebo-village');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 1, 'Trek to Wae Rebo Village', 'Wae Rebo Village', 'Drive from Labuan Bajo or Denge, then embark on a scenic 3-hour jungle trek up to Wae Rebo Village. Welcome ceremony and overnight in Mbaru Niang.', '["Drive through Flores hills","Trek through lush mountain jungle","Stay in a traditional conical Mbaru Niang house"]', '/images/indonesia/3-indo-600x400.jpg', 0);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 2, 'Explore Wae Rebo & Return', 'Wae Rebo Village', 'Interact with the local community, learn about their daily coffee harvesting, and trek back down to Denge before transferring back.', '["Meet local Manggarai families","Learn about traditional mountain coffee making","Scenic trek down the mountain"]', '/images/indonesia/4-indo-600x400.jpg', 1);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Mbaru Niang Stay', 'Experience sleeping on traditional woven mats inside the towering conical thatch houses.', 'Home', 0);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Coffee Tasting', 'Enjoy freshly brewed organic Arabica coffee harvested directly from the surrounding mountain slopes.', 'Coffee', 1);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Dress warmly as temperature drops significantly at night in the mountains.', 0);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Bring cash to purchase local mountain coffee and handwoven textiles.', 1);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, '/images/indonesia/3-indo-600x400.jpg', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, '/images/indonesia/4-indo-600x400.jpg', 1);

-- Package 4: 3N/4D - Bali Package
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  '3n-4d-bali-package', '3N/4D - Bali Package', 'Indonesia', 'Southeast Asia', 
  'Explore 3N/4D - Bali Package with daily itineraries, local guides, and highlights', '/images/indonesia/1-600x400.jpg', 'Experience the beauty of Indonesia with our special package: 3N/4D - Bali Package. Discover rich culture, stunning scenery, and unforgettable experiences on this day-by-day guided tour.', 
  115.2, -8.3, 'Beach', 'bg-blue-500', 
  'Custom package for 3N/4D - Bali Package including accommodation, tours, and transfers.', '/images/indonesia/1-600x400.jpg', 
  'published', '', '4 Days', 
  'Denpasar', 'Indonesian Rupiah (Rp)', 'Tropical with dry season (April–October) and wet season (November–March)', 'April–October (dry season)', 
  'Indonesian (Bahasa), English', 'WITA (UTC+8)', 'Left'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = '3n-4d-bali-package');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 1, 'ARRIVAL', 'Bali', 'Welcome to Bali! Upon arrival at the airport you will be greeted by Flower Garland and transferred to the hotel. Enjoy your leisure by own. Overnight stay at the hotel', '["Welcome to Bali! Upon arrival at the airport you will be greeted by Flower Garland and transferred to the hotel","Enjoy your leisure by own","Overnight stay at the hotel"]', '/images/explor-1.jpg', 0);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 2, 'WATER SPORTS – BARAK BEACH A HIDDEN GEM BALI (B)', 'Bali', 'After breakfast at hotel, visit to Tanjung Benoa beach to see some water sport activities, where you have the opportunity of participating in a variety of Optional marine sports including Banana Boat. Then visit to Barak Beach a Hidden Gem in Bali, here you''ll be mesmerized by the stunning beach with its super blue waters that blend with colorful coral rocks along the shore. The adorable marine life swimming around adds to the charm of this beach. Overnight stay at the hotel.', '["After breakfast at hotel, visit to Tanjung Benoa beach to see some water sport activities, where you have the opportunity of participating in a variety of Optional marine sports including Banana Boat","Then visit to Barak Beach a Hidden Gem in Bali, here you''ll be mesmerized by the stunning beach with its super blue waters that blend with colorful coral rocks along the shore","The adorable marine life swimming around adds to the charm of this beach"]', '/images/explor-1.jpg', 1);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 3, 'BALI SWING – TAMAN DEDARI – SARI TIMBUL GLASS FACTORY (B)', 'Bali', 'After breakfast at hotel, visit to Bali Swing (include 3 swing adult, 1x couple swing, 1x bed swing, 1x swing for kids, 1 circle swing + Photo Spot 1 Cute Chicken Nest, 1 Cute Bird Nest, 1 Big Stone, 1 lovely nest). Then, visit to Taman Dedari is popular destination in Bali. Afterthat, visit to Sari Timbul The Glass Factory, you can explore the charm of the Sari Timbul glass factory and discover mystical forests and wooden crafts. Overnight stay at the hotel.', '["After breakfast at hotel, visit to Bali Swing (include 3 swing adult, 1x couple swing, 1x bed swing, 1x swing for kids, 1 circle swing + Photo Spot 1 Cute Chicken Nest, 1 Cute Bird Nest, 1 Big Stone, 1 lovely nest)","Then, visit to Taman Dedari is popular destination in Bali","Afterthat, visit to Sari Timbul The Glass Factory, you can explore the charm of the Sari Timbul glass factory and discover mystical forests and wooden crafts"]', '/images/explor-1.jpg', 2);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 4, 'DEPARTURE/TRANSFER TO AIRPORT (B)', 'Bali', 'Breakfast in hotel , Free at own leisure, Transfer to airport for next destination', '["Breakfast in hotel , Free at own leisure, Transfer to airport for next destination"]', '/images/explor-1.jpg', 3);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Private tour just for you', 'Private tour just for you and your group', 'Check', 0);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, '3 Nights Acommodation at ', '3 Nights Acommodation at hotel or similar', 'Check', 1);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Daily Breakfast', 'Daily Breakfast', 'Check', 2);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Watersport (1x Banana Boa', 'Watersport (1x Banana Boat)', 'Check', 3);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'International Air Ticket', 0);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Visa', 1);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Insurance', 2);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Extra hour transport at USD 20 / Hour', 3);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Meals (lunch, dinner): $ 10 – 15 / pax (without transfer)', 4);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Tipping $2/day/pax', 5);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Personal Expenses', 6);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, '/images/indonesia/1-600x400.jpg', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 'https://images.pexels.com/photos/2412711/pexels-photo-2412711.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 1);

-- Package 5: 4N/5D - Bali & Nusa Penida
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  '4n-5d-bali-and-nusa-penida', '4N/5D - Bali & Nusa Penida', 'Indonesia', 'Southeast Asia', 
  'Explore 4N/5D - Bali & Nusa Penida with daily itineraries, local guides, and highlights', '/images/indonesia/2-suluban-beach-uluwatu--600x400.jpg', 'Experience the beauty of Indonesia with our special package: 4N/5D - Bali & Nusa Penida. Discover rich culture, stunning scenery, and unforgettable experiences on this day-by-day guided tour.', 
  115.2, -8.3, 'Beach', 'bg-blue-500', 
  'Custom package for 4N/5D - Bali & Nusa Penida including accommodation, tours, and transfers.', '/images/indonesia/2-suluban-beach-uluwatu--600x400.jpg', 
  'published', '', '5 Days', 
  'Denpasar', 'Indonesian Rupiah (Rp)', 'Tropical with dry season (April–October) and wet season (November–March)', 'April–October (dry season)', 
  'Indonesian (Bahasa), English', 'WITA (UTC+8)', 'Left'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = '4n-5d-bali-and-nusa-penida');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 1, 'ARRIVAL', 'Bali', 'Welcome to Bali! Upon arrival at the airport you will be greeted by Flower Garland and transferred to the hotel. Enjoy your leisure by own. Overnight stay at the hotel', '["Welcome to Bali! Upon arrival at the airport you will be greeted by Flower Garland and transferred to the hotel","Enjoy your leisure by own","Overnight stay at the hotel"]', '/images/explor-1.jpg', 0);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 2, 'WATER SPORTS – SULUBAN BEACH A HIDDEN CAVES (B)', 'Bali', 'After breakfast at hotel, visit to Tanjung Benoa beach to see some water sport activities, where you have the opportunity of participating in a variety of Optional marine sports including Banana Boat. Then visit to Suluban Beach a Hidden Caves is one of Bali’s most unique shores, concealed by natural limestone formations and accessed via steps and log ramps through narrow gaps in the rock, you’ll find the main beach entrance down a narrow crag at the end. The water at Suluban beach has the perfect shade of turquoise blue and no wonder people refer to it as the Blue Point Beach. Overnight stay at the hotel.', '["After breakfast at hotel, visit to Tanjung Benoa beach to see some water sport activities, where you have the opportunity of participating in a variety of Optional marine sports including Banana Boat","Then visit to Suluban Beach a Hidden Caves is one of Bali’s most unique shores, concealed by natural limestone formations and accessed via steps and log ramps through narrow gaps in the rock, you’ll find the main beach entrance down a narrow crag at the end","The water at Suluban beach has the perfect shade of turquoise blue and no wonder people refer to it as the Blue Point Beach"]', '/images/explor-1.jpg', 1);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 3, 'WEST NUSA PENIDA ISLAND TOUR ON SIC BASIS (B)', 'Bali', 'At 06.00 am pick you at hotel to  Nusa Penida tour at Nusa Penida Island, processed to harbour then we go by speedboat (ON SIC) our first stop exploring this side of the island is Broken Beach, known in Local language as Pasih Huug. This is not a beach as such, but rather a sinkhole into the ocean which can be seen from above, we reach Paradise Beach which is now better known as Crystal Bay. Truly the archetypal paradise, this beach has white sands, coconut trees and green grassy areas. The beauty of Angel’s Billabong is visible from the cliffs are beautiful and have a meeting estuarine water clear beaches that appear greenish, then visit Kelingking secret point, and we back to harbour. Overnight stay at the hotel.', '["At 06.00 am pick you at hotel to  Nusa Penida tour at Nusa Penida Island, processed to harbour then we go by speedboat (ON SIC) our first stop exploring this side of the island is Broken Beach, known in Local language as Pasih Huug","This is not a beach as such, but rather a sinkhole into the ocean which can be seen from above, we reach Paradise Beach which is now better known as Crystal Bay","Truly the archetypal paradise, this beach has white sands, coconut trees and green grassy areas"]', '/images/explor-1.jpg', 2);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 4, 'FREE PROGRAM/ NO TOUR NO TRANSPORT (B)', 'Bali', 'After breakfast, enjoy your leisure by ownself. Stay overnight at hotel', '["After breakfast, enjoy your leisure by ownself","Stay overnight at hotel"]', '/images/explor-1.jpg', 3);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 5, 'DEPARTURE/TRANSFER TO AIRPORT (B)', 'Bali', 'Breakfast in hotel , Free at own leisure, Transfer to airport for next destination', '["Breakfast in hotel , Free at own leisure, Transfer to airport for next destination"]', '/images/explor-1.jpg', 4);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Private tour just for you', 'Private tour just for you and your group', 'Check', 0);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, '4 Nights Acommodation at ', '4 Nights Acommodation at hotel or similar', 'Check', 1);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Daily Breakfast', 'Daily Breakfast', 'Check', 2);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Watersport (1x Banana Boa', 'Watersport (1x Banana Boat)', 'Check', 3);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'International Air Ticket', 0);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Visa', 1);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Insurance', 2);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Extra hour transport at USD 20 / Hour', 3);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Meals (lunch, dinner): $ 10 – 15 / pax (without transfer)', 4);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Tipping $2/day/pax', 5);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Personal Expenses', 6);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'PCR in Indonesia (if required)', 7);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, '/images/indonesia/2-suluban-beach-uluwatu--600x400.jpg', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 'https://images.pexels.com/photos/2412711/pexels-photo-2412711.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 1);

-- Package 6: 5N/6D - Bali Package
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  '5n-6d-bali-package', '5N/6D - Bali Package', 'Indonesia', 'Southeast Asia', 
  'Explore 5N/6D - Bali Package with daily itineraries, local guides, and highlights', '/images/indonesia/7-600x400.webp', 'Experience the beauty of Indonesia with our special package: 5N/6D - Bali Package. Discover rich culture, stunning scenery, and unforgettable experiences on this day-by-day guided tour.', 
  115.2, -8.3, 'Beach', 'bg-blue-500', 
  'Custom package for 5N/6D - Bali Package including accommodation, tours, and transfers.', '/images/indonesia/7-600x400.webp', 
  'published', '', '6 Days', 
  'Denpasar', 'Indonesian Rupiah (Rp)', 'Tropical with dry season (April–October) and wet season (November–March)', 'April–October (dry season)', 
  'Indonesian (Bahasa), English', 'WITA (UTC+8)', 'Left'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = '5n-6d-bali-package');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 1, 'ARRIVAL (L/D)', 'Bali', 'Welcome to Bali! Upon arrival at the airport you will be greeted by Flower Garland and transferred to the hotel.  Overnight stay at the hotel.', '["Welcome to Bali! Upon arrival at the airport you will be greeted by Flower Garland and transferred to the hotel","Overnight stay at the hotel"]', '/images/explor-1.jpg', 0);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 2, 'WATER SPORTS – ULUWATU TEMPLE (B/L/D)', 'Bali', 'After breakfast, Your holiday will not complete without tying Bali WATER SPORTS (1x Banana Boat, Jetski, Parasailing). Then visit to ULUWATU TEMPLE is a Balinese Hindu Temple located right on the top ot a steep hill with the right at the side. Overnight stay at the hotel.', '["After breakfast, Your holiday will not complete without tying Bali WATER SPORTS (1x Banana Boat, Jetski, Parasailing)","Then visit to ULUWATU TEMPLE is a Balinese Hindu Temple located right on the top ot a steep hill with the right at the side","Overnight stay at the hotel"]', '/images/explor-1.jpg', 1);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 3, 'UBUD – VOLCANO TOUR (B/L/D)', 'Bali', 'After breakfast, A full day excursion to the KINTAMANI Volcano and Ubud Village. This is a favorite tour of any first time visitors to Bali. Visit the Batuan Village (famous for traditional paintings), Mas Village (famous for Wood carving) & then past the Celuk Village (famous for silver and gold works). Thereafter, stop midway at the KINTAMANI penelokan along the foot of Mount Batur with a splendid Batur lake view. On the way stop at Coffe plantation your tour ends in the famous Ubud Village. Here you can look in & around the various shopping options including the Ubud Art Market. Overnight stay at the hotel.', '["After breakfast, A full day excursion to the KINTAMANI Volcano and Ubud Village","This is a favorite tour of any first time visitors to Bali","Visit the Batuan Village (famous for traditional paintings), Mas Village (famous for Wood carving) & then past the Celuk Village (famous for silver and gold works). Thereafter, stop midway at the KINTAMANI penelokan along the foot of Mount Batur with a splendid Batur lake view"]', '/images/explor-1.jpg', 2);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 4, 'GATE OF HEAVEN AT LEMPUYANG TEMPLE – TIRTA GANGGA (B/L/D)', 'Bali', 'Pick up time 08.30 AM, Breakfast at hotel, then get morning pick up from your hotel and take you to visit Lempuyang Temple is one of Bali’s oldest and most highly regarded temples. It is also believed to predate the majority of Hindu temples on the island, and the six holiest places of worship on Bali. The entire landscape looks very picturesque from this temple gate, and that gate also known to the western world as "The Gates of Heaven". The gates and its temple located in eastern part of the of Bali within the highlands of Mount Lempuyang, which sitting at a cool 1,775m above sea level. The whole complex complex that is made up of seven different sanctuaries, this temple offers visitors one of the most breathtaking views from any of the temples in Bali. Next stop at Tirta Gangga Water Palace locally known as Taman Tirta Gangga, is a former water palace of Karangasem empire which one of east Bali’s most famous sights. Situated about 6 kilometres north of the town of Amlapura, which feature 1.2ha of pools, ponds and fountains surrounded by tropical gardens. Breathtaking scenery with lush rice paddies back three levels of ornamental gardens with swimming pools, fountains, stone carvings, stepping stones, fish ponds, and airy pavilions. Overnight stay at hotel.', '["Pick up time 08.30 AM, Breakfast at hotel, then get morning pick up from your hotel and take you to visit Lempuyang Temple is one of Bali’s oldest and most highly regarded temples","It is also believed to predate the majority of Hindu temples on the island, and the six holiest places of worship on Bali","The entire landscape looks very picturesque from this temple gate, and that gate also known to the western world as \\"The Gates of Heaven\\""]', '/images/explor-1.jpg', 3);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 5, 'ULUNDANU TEMPLE – TANAH LOT (B/L/D)', 'Bali', 'After breakfast, Visit to the BEDUGUL, a cool mountain Resort area. You many encounter the beautiful lake Beratan with ULUNDANU TEMPLE, a lovely Hindu-Buddhist water shrine. The gorgeous panorama and fresh atmosphere will refresh your sight. The last stop is TANAH LOT, an off sea shore temple built in the small promontory. The wave Crash sound is believed could bring us a certain inspiration. You may take a picture of the beautiful sunset when the weather is clear. Overnight stay at the hotel.', '["After breakfast, Visit to the BEDUGUL, a cool mountain Resort area","You many encounter the beautiful lake Beratan with ULUNDANU TEMPLE, a lovely Hindu-Buddhist water shrine","The gorgeous panorama and fresh atmosphere will refresh your sight"]', '/images/explor-1.jpg', 4);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 6, 'DEPARTURE/TRANSFER TO AIRPORT (B)', 'Bali', 'Breakfast in hotel , Free at own leisure, Transfer to airport for next destination.', '["Breakfast in hotel , Free at own leisure, Transfer to airport for next destination"]', '/images/explor-1.jpg', 5);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Private tour just for you', 'Private tour just for you and your group', 'Check', 0);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, '5 Nights Acommodation at ', '5 Nights Acommodation at hotel or similar', 'Check', 1);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Daily Breakfast', 'Daily Breakfast', 'Check', 2);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, '5x Lunch at Indian Restau', '5x Lunch at Indian Restaurant', 'Check', 3);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'International Air Ticket', 0);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Visa', 1);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Insurance', 2);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Meals (lunch, dinner) = 10 – 15 USD/ meal', 3);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Extra hour transport at USD 20 / Hour', 4);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Tipping $2/day/pax', 5);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Personal Expenses', 6);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'PCR in Indonesia (if required)', 7);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, '/images/indonesia/7-600x400.webp', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 'https://images.pexels.com/photos/2412711/pexels-photo-2412711.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 1);

-- Package 7: 6N/7D - Bali Honeymoon Package
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  '6n-7d-bali-honeymoon-package', '6N/7D - Bali Honeymoon Package', 'Indonesia', 'Southeast Asia', 
  'Explore 6N/7D - Bali Honeymoon Package with daily itineraries, local guides, and highlights', '/images/indonesia/3-600x400.jpg', 'Experience the beauty of Indonesia with our special package: 6N/7D - Bali Honeymoon Package. Discover rich culture, stunning scenery, and unforgettable experiences on this day-by-day guided tour.', 
  115.2, -8.3, 'Luxury', 'bg-amber-500', 
  'Custom package for 6N/7D - Bali Honeymoon Package including accommodation, tours, and transfers.', '/images/indonesia/3-600x400.jpg', 
  'published', '', '7 Days', 
  'Denpasar', 'Indonesian Rupiah (Rp)', 'Tropical with dry season (April–October) and wet season (November–March)', 'April–October (dry season)', 
  'Indonesian (Bahasa), English', 'WITA (UTC+8)', 'Left'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = '6n-7d-bali-honeymoon-package');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 1, 'ARRIVAL', 'Bali', 'Welcome to Bali! Upon arrival at the airport you will be greeted by Flower Garland and transferred to the hotel. Enjoy your leisure by own. Overnight stay at the hotel', '["Welcome to Bali! Upon arrival at the airport you will be greeted by Flower Garland and transferred to the hotel","Enjoy your leisure by own","Overnight stay at the hotel"]', '/images/explor-1.jpg', 0);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 2, 'WATER SPORTS – ULUWATU TEMPLE (B)', 'Bali', 'After breakfast at hotel, visit to Tanjung Benoa beach to see some water sport activities, where you have the opportunity of participating in a variety of Optional marine sports including Banana Boat. Then visit to ULUWATU TEMPLE is a Balinese Hindu Temple located right on the top of a steep hill with the right at the side. Overnight stay at the hotel.', '["After breakfast at hotel, visit to Tanjung Benoa beach to see some water sport activities, where you have the opportunity of participating in a variety of Optional marine sports including Banana Boat","Then visit to ULUWATU TEMPLE is a Balinese Hindu Temple located right on the top of a steep hill with the right at the side","Overnight stay at the hotel"]', '/images/explor-1.jpg', 1);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 3, 'BALI SWING – TAMAN DEDARI – SARI TIMBUL GLASS FACTORY (B)', 'Bali', 'After breakfast at hotel, visit to Bali Swing (include 3 swing adult, 1x couple swing, 1x bed swing, 1x swing for kids, 1 circle swing + Photo Spot 1 Cute Chicken Nest, 1 Cute Bird Nest, 1 Big Stone, 1 lovely nest). Then, visit to Taman Dedari is popular destination in Bali, you can find some spectacular statue. Of the around 50 statues, there are four large statues with a height of about 10 m. Afterthat, visit to Sari Timbul The Glass Factory, you can explore the charm of the Sari Timbul glass factory and discover mystical forests and wooden crafts. Overnight stay at the hotel.', '["After breakfast at hotel, visit to Bali Swing (include 3 swing adult, 1x couple swing, 1x bed swing, 1x swing for kids, 1 circle swing + Photo Spot 1 Cute Chicken Nest, 1 Cute Bird Nest, 1 Big Stone, 1 lovely nest)","Then, visit to Taman Dedari is popular destination in Bali, you can find some spectacular statue","Of the around 50 statues, there are four large statues with a height of about 10 m"]', '/images/explor-1.jpg', 2);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 4, 'WEST NUSA PENIDA ISLAND TOUR (B)', 'Bali', 'At 06.00 am pick you at hotel to  Nusa Penida tour at Nusa Penida Island, processed to harbour then we go by speedboat (ON SIC) our first stop exploring this side of the island is Broken Beach, known in Local language as Pasih Huug. This is not a beach as such, but rather a sinkhole into the ocean which can be seen from above, we reach Paradise Beach which is now better known as Crystal Bay. Truly the archetypal paradise, this beach has white sands, coconut trees and green grassy areas, The beauty of Angel’s Billabong is visible from the cliffs are beautiful and have a meeting estuarine water clear beaches that appear greenish, then visit Kelingking secret point, and we back to harbour. Overnight stay at the hotel.', '["At 06.00 am pick you at hotel to  Nusa Penida tour at Nusa Penida Island, processed to harbour then we go by speedboat (ON SIC) our first stop exploring this side of the island is Broken Beach, known in Local language as Pasih Huug","This is not a beach as such, but rather a sinkhole into the ocean which can be seen from above, we reach Paradise Beach which is now better known as Crystal Bay","Truly the archetypal paradise, this beach has white sands, coconut trees and green grassy areas, The beauty of Angel’s Billabong is visible from the cliffs are beautiful and have a meeting estuarine water clear beaches that appear greenish, then visit Kelingking secret point, and we back to harbour. Overnight stay at the hotel"]', '/images/explor-1.jpg', 3);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 5, 'HALFDAY BALINESSE SPA – CANDLE LIGHT DINNER AT JIMBARAN BEACH (B)', 'Bali', 'After Breakfast, spend your time at hotel, at Afternoon will pick up you to Balinesse Spa for 2 hours. Then, we will  processed you to Candle Light Dinner at Jimbaran Beach. Overnight stay at the hotel.', '["After Breakfast, spend your time at hotel, at Afternoon will pick up you to Balinesse Spa for 2 hours","Then, we will  processed you to Candle Light Dinner at Jimbaran Beach","Overnight stay at the hotel"]', '/images/explor-1.jpg', 4);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 6, 'FREE PROGRAM/ NO TOUR NO TRANSPORT (B)', 'Bali', 'After breakfast, enjoy your leisure by ownself. Stay overnight at hotel', '["After breakfast, enjoy your leisure by ownself","Stay overnight at hotel"]', '/images/explor-1.jpg', 5);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 7, 'DEPARTURE/TRANSFER TO AIRPORT (B)', 'Bali', 'Breakfast in hotel , Free at own leisure, Transfer to airport for next destination', '["Breakfast in hotel , Free at own leisure, Transfer to airport for next destination"]', '/images/explor-1.jpg', 6);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Private tour just for you', 'Private tour just for you and your group', 'Check', 0);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, '6 Nights Acommodation at ', '6 Nights Acommodation at hotel or similar', 'Check', 1);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Daily Breakfast', 'Daily Breakfast', 'Check', 2);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Standart honeymoon decora', 'Standart honeymoon decoration in the bed', 'Check', 3);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'International Air Ticket', 0);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Visa', 1);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Insurance', 2);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Extra hour transport at USD 20 / Hour', 3);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Meals (lunch, dinner): $ 10 – 15 / pax (without transfer)', 4);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Tipping $2/day/pax', 5);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Personal Expenses', 6);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'PCR in Indonesia (if required)', 7);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, '/images/indonesia/3-600x400.jpg', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 'https://images.pexels.com/photos/2412711/pexels-photo-2412711.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 1);

-- Package 8: 8N/9D - Bali & Gili Trawangan Tour
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  '8n-9d-bali-gili-trawangan-tour', '8N/9D - Bali & Gili Trawangan Tour', 'Indonesia', 'Southeast Asia', 
  'Explore 8N/9D - Bali & Gili Trawangan Tour with daily itineraries, local guides, and highlights', '/images/indonesia/4-600x371.jpg', 'Experience the beauty of Indonesia with our special package: 8N/9D - Bali & Gili Trawangan Tour. Discover rich culture, stunning scenery, and unforgettable experiences on this day-by-day guided tour.', 
  115.2, -8.3, 'Island', 'bg-cyan-500', 
  'Custom package for 8N/9D - Bali & Gili Trawangan Tour including accommodation, tours, and transfers.', '/images/indonesia/4-600x371.jpg', 
  'published', '', '9 Days', 
  'Denpasar', 'Indonesian Rupiah (Rp)', 'Tropical with dry season (April–October) and wet season (November–March)', 'April–October (dry season)', 
  'Indonesian (Bahasa), English', 'WITA (UTC+8)', 'Left'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = '8n-9d-bali-gili-trawangan-tour');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 1, 'ARRIVAL', 'Bali', 'Welcome to Bali! Upon arrival at the airport you will be greeted by Flower Garland and transferred to the hotel.  Overnight stay at the hotel.', '["Welcome to Bali! Upon arrival at the airport you will be greeted by Flower Garland and transferred to the hotel","Overnight stay at the hotel"]', '/images/explor-1.jpg', 0);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 2, 'WATER SPORTS – ULUWATU TEMPLE (B)', 'Bali', 'After breakfast, Your holiday will not complete without tying Bali WATER SPORTS (1x Banana Boat). Then visit to ULUWATU TEMPLE is a Balinese Hindu Temple located right on the top ot a steep hill with the right at the side. Overnight stay at the hotel.', '["After breakfast, Your holiday will not complete without tying Bali WATER SPORTS (1x Banana Boat)","Then visit to ULUWATU TEMPLE is a Balinese Hindu Temple located right on the top ot a steep hill with the right at the side","Overnight stay at the hotel"]', '/images/explor-1.jpg', 1);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 3, 'ULUNDANU TEMPLE – TANAH LOT (B)', 'Bali', 'After breakfast, Visit to the BEDUGUL, a cool mountain Resort area. You many encounter the beautiful lake Beratan with ULUNDANU TEMPLE, a lovely Hindu-Buddhist water shrine. The gorgeous panorama and fresh atmosphere will refresh your sight. The last stop is TANAH LOT, an off sea shore temple built in the small promontory. The wave Crash sound is believed could bring us a certain inspiration. You may take a picture of the beautiful sunset when the weather is clear. Overnight stay at the hotel.', '["After breakfast, Visit to the BEDUGUL, a cool mountain Resort area","You many encounter the beautiful lake Beratan with ULUNDANU TEMPLE, a lovely Hindu-Buddhist water shrine","The gorgeous panorama and fresh atmosphere will refresh your sight"]', '/images/explor-1.jpg', 2);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 4, 'BALI – GILI TRAWANGAN BY SIC TRANSFER (B)', 'Bali', 'After breakfast at Hotel, Start you day with lovely breakfast and get ready to explore the Gili Island. You will be picked up from the hotel for your speed boat transfer to continue your journey to the Gili Island. Upon arrival at the port in Gili Trawangan, make your way on your own to get to the hotel as motor transport is not supported in the Island. Hire local transport (usually horse cart) at cheap rates and enjoy the traditional ride on your way to hotel. Your entire day is at your disposal. Stay overnight at the hotel in Gili Trawangan.', '["After breakfast at Hotel, Start you day with lovely breakfast and get ready to explore the Gili Island","You will be picked up from the hotel for your speed boat transfer to continue your journey to the Gili Island","Upon arrival at the port in Gili Trawangan, make your way on your own to get to the hotel as motor transport is not supported in the Island"]', '/images/explor-1.jpg', 3);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 5, 'GILI TRAWANGAN  - WEST NUSA PENIDA TOUR (B/L)', 'Bali', 'After breakfast at Gili Trawangan Hotel, Prepare to Nusa Penida Island by speed boat. After  arrive in Nusa Penida, continue to visit  Crystal Bay, our first stop exploring this side of the island is Broken Beach, known in Local language as Pasih Huug. This is not a beach as such, but rather a sinkhole into the ocean which can be seen from above, we reach Paradise Beach which is now better known as Crystal Bay. Truly the archetypal paradise, this beach has white sands, coconut trees and green grassy areas, The beauty of Angel’s Billabong is visible from the cliffs are beautiful and have a meeting estuarine water clear beaches that appear greenish, then visit Kelingking secret point. Overnight stay at  Nusa Penida hotel.', '["After breakfast at Gili Trawangan Hotel, Prepare to Nusa Penida Island by speed boat. After  arrive in Nusa Penida, continue to visit  Crystal Bay, our first stop exploring this side of the island is Broken Beach, known in Local language as Pasih Huug. This is not a beach as such, but rather a sinkhole into the ocean which can be seen from above, we reach Paradise Beach which is now better known as Crystal Bay","Truly the archetypal paradise, this beach has white sands, coconut trees and green grassy areas, The beauty of Angel’s Billabong is visible from the cliffs are beautiful and have a meeting estuarine water clear beaches that appear greenish, then visit Kelingking secret point. Overnight stay at  Nusa Penida hotel"]', '/images/explor-1.jpg', 4);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 6, 'NUSA PENIDA – BALI (B/L)', 'Bali', 'Breakfast at your hotel. Today enjoy your leisure, leisure by own. Check out hotel. back to sanur harbour by speed boat and drop to your hotel. Overnight stay at the hotel.', '["Breakfast at your hotel","Today enjoy your leisure, leisure by own","Check out hotel"]', '/images/explor-1.jpg', 5);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 7, 'FREE PROGRAM (B)', 'Bali', 'Breakfast at your hotel. Today enjoy your leisure, leisure by own.', '["Breakfast at your hotel","Today enjoy your leisure, leisure by own"]', '/images/explor-1.jpg', 6);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 8, 'SUNSET DINNER CRUISE (B/D)', 'Bali', 'After Breakfast, spend your time at hotel, at Afternoon will pick up you to processed Sunset Dinner Cruise. Overnight stay at the hotel.', '["After Breakfast, spend your time at hotel, at Afternoon will pick up you to processed Sunset Dinner Cruise","Overnight stay at the hotel"]', '/images/explor-1.jpg', 7);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 9, 'DEPARTURE/TRANSFER TO AIRPORT (B)', 'Bali', 'Breakfast in hotel , Free at own leisure, Transfer to airport for next destination.', '["Breakfast in hotel , Free at own leisure, Transfer to airport for next destination"]', '/images/explor-1.jpg', 8);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Private tour just for you', 'Private tour just for you and your group', 'Check', 0);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, '8 Nights Acommodation at ', '8 Nights Acommodation at hotel or similar', 'Check', 1);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Daily Breakfast', 'Daily Breakfast', 'Check', 2);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, '1x Lunch at Nusa Penida', '1x Lunch at Nusa Penida', 'Check', 3);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'International Air Ticket', 0);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Visa', 1);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Insurance', 2);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Cidomo at Gili trawangan', 3);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Meals (lunch, dinner) = 10 – 15 USD/ meal', 4);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Extra hour transport at USD 20 / Hour', 5);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Tipping $2/day/pax', 6);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Personal Expenses', 7);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'PCR in Indonesia (if required)', 8);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, '/images/indonesia/4-600x371.jpg', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 'https://images.pexels.com/photos/2412711/pexels-photo-2412711.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 1);

-- Package 9: 10N/11D - Bali & Gili Trawangan Tour
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  '10n-11d-bali-gili-trawangan-tour', '10N/11D - Bali & Gili Trawangan Tour', 'Indonesia', 'Southeast Asia', 
  'Explore 10N/11D - Bali & Gili Trawangan Tour with daily itineraries, local guides, and highlights', '/images/indonesia/5-600x400.jpg', 'Experience the beauty of Indonesia with our special package: 10N/11D - Bali & Gili Trawangan Tour. Discover rich culture, stunning scenery, and unforgettable experiences on this day-by-day guided tour.', 
  115.2, -8.3, 'Island', 'bg-cyan-500', 
  'Custom package for 10N/11D - Bali & Gili Trawangan Tour including accommodation, tours, and transfers.', '/images/indonesia/5-600x400.jpg', 
  'published', '', '11 Days', 
  'Denpasar', 'Indonesian Rupiah (Rp)', 'Tropical with dry season (April–October) and wet season (November–March)', 'April–October (dry season)', 
  'Indonesian (Bahasa), English', 'WITA (UTC+8)', 'Left'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = '10n-11d-bali-gili-trawangan-tour');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 1, 'ARRIVAL', 'Bali', 'Welcome to Bali! Upon arrival at the airport you will be greeted by Flower Garland and transferred to the hotel.  Overnight stay at the hotel.', '["Welcome to Bali! Upon arrival at the airport you will be greeted by Flower Garland and transferred to the hotel","Overnight stay at the hotel"]', '/images/explor-1.jpg', 0);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 2, 'WATER SPORTS – ULUWATU TEMPLE (B)', 'Bali', 'After breakfast, Your holiday will not complete without trying Bali WATER SPORTS (Include 1x Banana Boat). Pandawa Beach, Then visit to ULUWATU TEMPLE is a Balinese Hindu Temple located right on the top of a steep hill with the cliff face right at the side. Overnight stay at the hotel.', '["After breakfast, Your holiday will not complete without trying Bali WATER SPORTS (Include 1x Banana Boat)","Pandawa Beach, Then visit to ULUWATU TEMPLE is a Balinese Hindu Temple located right on the top of a steep hill with the cliff face right at the side","Overnight stay at the hotel"]', '/images/explor-1.jpg', 1);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 3, 'ULUNDANU TEMPLE - TANAH LOT TOUR (B)', 'Bali', 'After breakfast, Visit to the BEDUGUL, a cool mountain Resort area. You many encounter the beautiful lake Beratan with ULUNDANU TEMPLE, a lovely Hindu-Buddhist water shrine. The gorgeous panorama and fresh atmosphere will refresh your sight. The last stop is TANAH LOT, an off sea shore temple built in the small promontory. The wave Crash sound is believed could bring us a certain inspiration. You may take a picture of the beautiful sunset when the weather is clear. Overnight stay at the hotel.', '["After breakfast, Visit to the BEDUGUL, a cool mountain Resort area","You many encounter the beautiful lake Beratan with ULUNDANU TEMPLE, a lovely Hindu-Buddhist water shrine","The gorgeous panorama and fresh atmosphere will refresh your sight"]', '/images/explor-1.jpg', 2);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 4, 'DENPASAR CITY TOUR (B)', 'Bali', 'After breakfast, we will take you to exploring around DENPASAR CITY TOUR. We will going to one of monument in Bali called BAJRA SANDHI MONUMENT (PHOTO STOP ONLY), we will stop for a while to take a picture in front of it. Then, proceed to PUPUTAN SQUARE (PHOTO STOP). After that, you can visit KUTA ART MARKET. Overnight stay at the hotel.', '["After breakfast, we will take you to exploring around DENPASAR CITY TOUR","We will going to one of monument in Bali called BAJRA SANDHI MONUMENT (PHOTO STOP ONLY), we will stop for a while to take a picture in front of it","Then, proceed to PUPUTAN SQUARE (PHOTO STOP)"]', '/images/explor-1.jpg', 3);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 5, 'WEST NUSA PENIDA ISLAND TOUR (B/L)', 'Bali', 'At 06.00 am pick you at hotel to  Nusa Penida tour at Nusa Penida Island, processed to sanur harbor then we go by boat our first stop exploring this side of the island is Broken Beach, known in Local language as Pasih Huug. This is not a beach as such, but rather a sinkhole into the ocean which can be seen from above, we reach Paradise Beach which is now better known as Crystal Bay. Truly the archetypal paradise, this beach has white sands, coconut trees and green grassy areas, The beauty of Angel’s Billabong is visible from the cliffs are beautiful and have a meeting estuarine water clear beaches that appear greenish, then visit Kelingking secret point, and the last is love of tree and we back to sanur harbor. Overnight stay at the hotel.. Overnight stay at the hotel.', '["At 06.00 am pick you at hotel to  Nusa Penida tour at Nusa Penida Island, processed to sanur harbor then we go by boat our first stop exploring this side of the island is Broken Beach, known in Local language as Pasih Huug","This is not a beach as such, but rather a sinkhole into the ocean which can be seen from above, we reach Paradise Beach which is now better known as Crystal Bay","Truly the archetypal paradise, this beach has white sands, coconut trees and green grassy areas, The beauty of Angel’s Billabong is visible from the cliffs are beautiful and have a meeting estuarine water clear beaches that appear greenish, then visit Kelingking secret point, and the last is love of tree and we back to sanur harbor"]', '/images/explor-1.jpg', 4);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 6, 'FREE PROGRAM (B)', 'Bali', 'Breakfast at your hotel. Today enjoy your leisure, leisure by own. Overnight stay at the hotel.', '["Breakfast at your hotel","Today enjoy your leisure, leisure by own","Overnight stay at the hotel"]', '/images/explor-1.jpg', 5);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 7, 'UBUD – VOLCANO TOUR – TEGENUNGAN WATERFALL (B)', 'Bali', 'After breakfast, A full day excursion to the KINTAMANI Volcano and Ubud Village. This is a favorite tour of any first time visitors to Bali. Visit the Batuan Village (famous for traditional paintings), Mas Village (famous for Wood carving) & then past the Celuk Village (famous for silver and gold works). Thereafter, stop midway at the KINTAMANI penelokan along the foot of Mount Batur with a splendid Batur lake view. than the visit Tegenungan Waterfall is a great stopover for nature lovers who happen to be staying in Ubud with cafes nearby. On the way stop at Coffe plantation your tour ends in the famous Ubud Village. Here you can look in & around the various shopping options including the Ubud Art Market. Overnight stay at the hotel. .', '["After breakfast, A full day excursion to the KINTAMANI Volcano and Ubud Village","This is a favorite tour of any first time visitors to Bali","Visit the Batuan Village (famous for traditional paintings), Mas Village (famous for Wood carving) & then past the Celuk Village (famous for silver and gold works). Thereafter, stop midway at the KINTAMANI penelokan along the foot of Mount Batur with a splendid Batur lake view. than the visit Tegenungan Waterfall is a great stopover for nature lovers who happen to be staying in Ubud with cafes nearby"]', '/images/explor-1.jpg', 6);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 8, 'LEMPUYANG TEMPLE – TIRTA GAANGGA WATER PALACE (B)', 'Bali', 'After breakfast, visit to Lempuyang Temple is famous for its magnificent majestic mountain scenery, many tourists take pictures at the gate of the Lempuyang Temple with a backdrop of the great mountain scenery. It is truly a spectacular sight offered at Lempuyang Temple. Next stop at Tirta Gangga Water Palace locally known as Taman Tirta Gangga, is a former water palace of Karangasem empire which one of east Bali’s most famous sights. Situated about 6 kilometres north of the town of Amlapura, which feature 1.2ha of pools, ponds and fountains surrounded by tropical gardens. Breathtaking scenery with lush rice paddies back three levels of ornamental gardens with swimming pools, fountains, stone carvings, stepping stones, fish ponds, and airy pavilions. Overnight stay at the hotel.', '["After breakfast, visit to Lempuyang Temple is famous for its magnificent majestic mountain scenery, many tourists take pictures at the gate of the Lempuyang Temple with a backdrop of the great mountain scenery","It is truly a spectacular sight offered at Lempuyang Temple","Next stop at Tirta Gangga Water Palace locally known as Taman Tirta Gangga, is a former water palace of Karangasem empire which one of east Bali’s most famous sights"]', '/images/explor-1.jpg', 7);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 9, 'RAFTING + BALI SWING (B/L)', 'Bali', 'Breakfast at the hotel, pick up at the hotel for white water Rafting with local lunch. Then, enjoy ATV Quad Bike Ride for single/tandem ride at Ubud area .. Overnight stay at the Hotel', '["Breakfast at the hotel, pick up at the hotel for white water Rafting with local lunch","Then, enjoy ATV Quad Bike Ride for single/tandem ride at Ubud area ","Overnight stay at the Hotel"]', '/images/explor-1.jpg', 8);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 10, 'BALI SWING – TUKAD CEPUNG WATERFALL (B)', 'Bali', 'After breakfast, enjoy a Bali Swing Include ( 3 swing adult, 1x couple swing, 1x bed swing, 1x swing for kids, 1 circle swing + Photo Spot 1 Cute Chicken Nest, 1 Cute Bird Nest, 1 Big Stone, 1 lovely nest) experience which hangs between two palm trees overlooks a picturesque rice terraces.  Next stop at Tukad Cepung Waterfall as one of the most photogenic of all the waterfalls in Bali with sun rays that beam through the falls. The walk to get down to Tukad Cepung Waterfall is straight forward and easy enough. It took all of 15 minutes to get down to the enchanted location. Swim in the pristine water, admire the sun rays shining straight through the top of the falls, and snap a few priceless of amazing photos.  Overnight stay at hotel', '["After breakfast, enjoy a Bali Swing Include ( 3 swing adult, 1x couple swing, 1x bed swing, 1x swing for kids, 1 circle swing + Photo Spot 1 Cute Chicken Nest, 1 Cute Bird Nest, 1 Big Stone, 1 lovely nest) experience which hangs between two palm trees overlooks a picturesque rice terraces","Next stop at Tukad Cepung Waterfall as one of the most photogenic of all the waterfalls in Bali with sun rays that beam through the falls","The walk to get down to Tukad Cepung Waterfall is straight forward and easy enough"]', '/images/explor-1.jpg', 9);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 11, 'DEPARTURE/TRANSFER TO AIRPORT (B)', 'Bali', 'Breakfast in hotel , Free at own leisure, Transfer to airport for next destination', '["Breakfast in hotel , Free at own leisure, Transfer to airport for next destination"]', '/images/explor-1.jpg', 10);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'International Air Ticket', 'International Air Ticket', 'Check', 0);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Visa', 'Visa', 'Check', 1);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Insurance', 'Insurance', 'Check', 2);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Meals (lunch, dinner) = 1', 'Meals (lunch, dinner) = 10 – 15 USD/ meal', 'Check', 3);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'After you accept the invoice, if you cancel the booking we will charge $50 (USD) as a handling/admin charges', 0);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Price are subject to change with/without prior notice', 1);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Rooms are subject to availability at the time of reservation', 2);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'We haven''t made any bookings without payment from your side', 3);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Minimum 50% Down Payment as advance, Balance/Full Payment must be done H-7 before arrival on Bali', 4);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'No Refunds or Replacements for lost or damaged or unused tickets & meal voucher (coupons)', 5);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'If you cancel the booking, hotel will be charged as per their policy cancellation of the hotel', 6);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, '/images/indonesia/5-600x400.jpg', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 'https://images.pexels.com/photos/2412711/pexels-photo-2412711.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 1);

-- Package 10: 2N/3D - Komodo Island Package
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  '2n-3d-komodo-island-package', '2N/3D - Komodo Island Package', 'Indonesia', 'Southeast Asia', 
  'Explore 2N/3D - Komodo Island Package with daily itineraries, local guides, and highlights', '/images/indonesia/6-600x400.jpg', 'Experience the beauty of Indonesia with our special package: 2N/3D - Komodo Island Package. Discover rich culture, stunning scenery, and unforgettable experiences on this day-by-day guided tour.', 
  119.88, -8.45, 'Adventure', 'bg-orange-500', 
  'Custom package for 2N/3D - Komodo Island Package including accommodation, tours, and transfers.', '/images/indonesia/6-600x400.jpg', 
  'published', '', '3 Days', 
  'Denpasar', 'Indonesian Rupiah (Rp)', 'Tropical with dry season (April–October) and wet season (November–March)', 'April–October (dry season)', 
  'Indonesian (Bahasa), English', 'WITA (UTC+8)', 'Left'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = '2n-3d-komodo-island-package');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 1, 'Labuan Bajo Harbour – Kelor Island – Menjerite-Kalong', 'Komodo', 'It’s your first day of Komodo Adventure Tour with Komodo Boat Trip . Pick up at your hotel or at the airport in Labuan Bajo (Please take a first morning flight to Komodo airport Labuan Bajo if you want to start this tour soon after your arrival in Labuan Bajo).
Transfer to the harbor to catch a local wooden boat/Luxury boat trip, boat to Kelor island/Menjerite to snorkel/swim/relax – after doing snorkling at Kelor island  get back to the boat and boating back to Kalong Island to see thousands of Fruit bats which are flying out of mangrove forest while enjoying the spectacular sun set and then start boating to Padar island.', '["It’s your first day of Komodo Adventure Tour with Komodo Boat Trip . Pick up at your hotel or at the airport in Labuan Bajo (Please take a first morning flight to Komodo airport Labuan Bajo if you want to start this tour soon after your arrival in Labuan Bajo).\\nTransfer to the harbor to catch a local wooden boat/Luxury boat trip, boat to Kelor island/Menjerite to snorkel/swim/relax – after doing snorkling at Kelor island  get back to the boat and boating back to Kalong Island to see thousands of Fruit bats which are flying out of mangrove forest while enjoying the spectacular sun set and then start boating to Padar island"]', '/images/explor-1.jpg', 0);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 2, 'Padar island- Pink Beach – Komodo Island – Taka Makassar –  Manta Point', 'Komodo', 'Very early departure to Padar Island for Sun rise Trekking. Breakfast will be served on the boat before t. After having breakfast on boat, then do trekking to the Padar Island’s hilltop to witness the most spectacular landscape around Komodo National park, Boating to amazing Pink Beach to snorkel/swim/relax, afterward heading to Komodo Island for  trekking to find Komodo dragon and other wild life and then relax on the boat while waiting for Lunch Time. After having Lunch we get ready to Taka Makassar for relaxing on “The Crescent-Shaped pinkish sandbar” which is surrounded by Shallow  turquoise water. after that we continue to Manta Point try finding a huge Manta Ray  Fish  by Snorkeling closer to the area (No Guarantee to see them).', '["Very early departure to Padar Island for Sun rise Trekking","Breakfast will be served on the boat before t","After having breakfast on boat, then do trekking to the Padar Island’s hilltop to witness the most spectacular landscape around Komodo National park, Boating to amazing Pink Beach to snorkel/swim/relax, afterward heading to Komodo Island for  trekking to find Komodo dragon and other wild life and then relax on the boat while waiting for Lunch Time"]', '/images/explor-1.jpg', 1);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 3, 'Kanawa Island – Labuan Bajo', 'Komodo', 'Today is the last day of your “Komodo Tour 3 days + 2 Nights”, We Continue boating to the last stunning island of Kanawa to snorkel/swim/relax – boat back to Labuan Bajo’s harbor – transfer to your chosen hotel or transfer to the airport for your flying to the next destination (Please take a latest afternoon flight around 4/5PM , if you want to fly soon after this trip). Breakfast and Lunch will be served on boat. End of your Adventure around Komodo National Park.', '["Today is the last day of your “Komodo Tour 3 days + 2 Nights”, We Continue boating to the last stunning island of Kanawa to snorkel/swim/relax – boat back to Labuan Bajo’s harbor – transfer to your chosen hotel or transfer to the airport for your flying to the next destination (Please take a latest afternoon flight around 4/5PM , if you want to fly soon after this trip)","Breakfast and Lunch will be served on boat","End of your Adventure around Komodo National Park"]', '/images/explor-1.jpg', 2);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, '3 days with the boat', '3 days with the boat', 'Check', 0);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, '2 Nights accommodation on', '2 Nights accommodation on boat', 'Check', 1);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, '2X Transfers by AC Car ( ', '2X Transfers by AC Car ( To and from Harbor)', 'Check', 2);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Experienced tour guide', 'Experienced tour guide', 'Check', 3);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Hotel in Labuan Bajo', 0);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'All Entrance fee IDR. 500,000/person', 1);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Soft & Alcohol drinks,', 2);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Travel Insurance,', 3);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Personal Expenses,', 4);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, '/images/indonesia/6-600x400.jpg', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 'https://images.pexels.com/photos/2412711/pexels-photo-2412711.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 1);

-- Package 11: 6D/5N - Flores Komodo Tour
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  '6d-5n-flores-komodo-tour', '6D/5N - Flores Komodo Tour', 'Indonesia', 'Southeast Asia', 
  'Explore 6D/5N - Flores Komodo Tour with daily itineraries, local guides, and highlights', '/images/indonesia/8-600x400.jpg', 'Experience the beauty of Indonesia with our special package: 6D/5N - Flores Komodo Tour. Discover rich culture, stunning scenery, and unforgettable experiences on this day-by-day guided tour.', 
  119.88, -8.45, 'Adventure', 'bg-orange-500', 
  'Custom package for 6D/5N - Flores Komodo Tour including accommodation, tours, and transfers.', '/images/indonesia/8-600x400.jpg', 
  'published', '', '6 Days', 
  'Denpasar', 'Indonesian Rupiah (Rp)', 'Tropical with dry season (April–October) and wet season (November–March)', 'April–October (dry season)', 
  'Indonesian (Bahasa), English', 'WITA (UTC+8)', 'Left'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = '6d-5n-flores-komodo-tour');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 1, 'Day 1. Ende – Moni village.', 'Komodo', 'Pick up at hotel/airport in Ende middle Flores – drive to Wologai unique traditional village of Lio tribe – drive to Moni village for your accommodation.', '["Pick up at hotel/airport in Ende middle Flores – drive to Wologai unique traditional village of Lio tribe – drive to Moni village for your accommodation"]', '/images/explor-1.jpg', 0);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 2, 'Day 2. Moni village – Kelimutu Lake – Ende – Bajawa', 'Komodo', 'Today is your second day Flores Komodo tour. Begin with an early morning drive to Kelimutu volcano at 04.30. Kelimutu theree lake is the the most mysterious and dramatic sight in the world. it is located in the central of Flores – After enjoying and witness this natural miracle will drive back to hotel for breakfast –  drive to Ndua Ria traditional fresh fruits and vegetable  market – drive to Blue stone beach via Ende – drive to Wogo traditional village to see Ngadhu and Bhaga as symbol of Male and Female ancestor of Ngadha tribe. Continue trip to Bajawa town to check in hotel.', '["Today is your second day Flores Komodo tour. Begin with an early morning drive to Kelimutu volcano at 04.30","Kelimutu theree lake is the the most mysterious and dramatic sight in the world","it is located in the central of Flores – After enjoying and witness this natural miracle will drive back to hotel for breakfast –  drive to Ndua Ria traditional fresh fruits and vegetable  market – drive to Blue stone beach via Ende – drive to Wogo traditional village to see Ngadhu and Bhaga as symbol of Male and Female ancestor of Ngadha tribe"]', '/images/explor-1.jpg', 1);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 3, 'Day 3. Bajawa – Bena village – Aimere village – Ruteng', 'Komodo', 'Breakfast at hotel – drive to an impressive traditional village of Bena – continue driving to Aimere village to see the traditional process of local alcohol drink from palm juice – stop at Rana Mese lake to take a picture – drive to Ruteng to check in at hotel.', '["Breakfast at hotel – drive to an impressive traditional village of Bena – continue driving to Aimere village to see the traditional process of local alcohol drink from palm juice – stop at Rana Mese lake to take a picture – drive to Ruteng to check in at hotel"]', '/images/explor-1.jpg', 2);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 4, 'Day 4. Ruteng – Cancar – Labuan Bajo – Rinca island (L,D)', 'Komodo', 'This the last of driving on Flores. Breakfast at hotel – drive to Cancar to see the Lodok spectacular view of round rice fields that looks like giant spider’s web – drive to Labuan Bajo harbor to catch a wooden boat leaving for Rinca island – trekking at Rinca island to see Komodo dragon and other wild life. Lunch, Dinner and Overnight are on the boat trip.', '["This the last of driving on Flores","Breakfast at hotel – drive to Cancar to see the Lodok spectacular view of round rice fields that looks like giant spider’s web – drive to Labuan Bajo harbor to catch a wooden boat leaving for Rinca island – trekking at Rinca island to see Komodo dragon and other wild life","Lunch, Dinner and Overnight are on the boat trip"]', '/images/explor-1.jpg', 3);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 5, 'Day 5. Rinca island – Komodo island  – Pink Beach – Labuan Bajo (B,L)', 'Komodo', 'Early morning will boat to Komodo island – After breakfast on the boat trip, trekking at Komodo island to see the Komodo dragon and other wild life – boat to Pink Beach to snorkel and relax at spectacular pink color beach – Lunch on the boat while boating back to Labuan Bajo harbor – transfer to the hotel for dinner and overnight.', '["Early morning will boat to Komodo island – After breakfast on the boat trip, trekking at Komodo island to see the Komodo dragon and other wild life – boat to Pink Beach to snorkel and relax at spectacular pink color beach – Lunch on the boat while boating back to Labuan Bajo harbor – transfer to the hotel for dinner and overnight"]', '/images/explor-1.jpg', 4);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 6, 'Day 6. Hotel – chcek out for your next destination (B).', 'Komodo', 'Today is the last day of Flores Komodo tour. Breakfast at hotel – free at leisure until time to check out for your next destination.', '["Today is the last day of Flores Komodo tour","Breakfast at hotel – free at leisure until time to check out for your next destination"]', '/images/explor-1.jpg', 5);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'All Accommodation and bre', 'All Accommodation and breakfast during tour', 'Check', 0);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Private AC Car and driver', 'Private AC Car and driver', 'Check', 1);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Petroleum', 'Petroleum', 'Check', 2);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Car parking tax', 'Car parking tax', 'Check', 3);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Donation and Entrance fee in every objects', 0);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Meals during on the land tour on Flores', 1);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Soft & Alcohol drinks.', 2);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, '/images/indonesia/8-600x400.jpg', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 'https://images.pexels.com/photos/2412711/pexels-photo-2412711.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 1);

-- Package 12: 11D/10N - Flores Island & Komodo Tour
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  '11d-10n-flores-island-komodo-tour', '11D/10N - Flores Island & Komodo Tour', 'Indonesia', 'Southeast Asia', 
  'Explore 11D/10N - Flores Island & Komodo Tour with daily itineraries, local guides, and highlights', '/images/indonesia/1-1-600x400.jpg', 'Experience the beauty of Indonesia with our special package: 11D/10N - Flores Island & Komodo Tour. Discover rich culture, stunning scenery, and unforgettable experiences on this day-by-day guided tour.', 
  119.88, -8.45, 'Adventure', 'bg-orange-500', 
  'Custom package for 11D/10N - Flores Island & Komodo Tour including accommodation, tours, and transfers.', '/images/indonesia/1-1-600x400.jpg', 
  'published', '', '11 Days', 
  'Denpasar', 'Indonesian Rupiah (Rp)', 'Tropical with dry season (April–October) and wet season (November–March)', 'April–October (dry season)', 
  'Indonesian (Bahasa), English', 'WITA (UTC+8)', 'Left'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = '11d-10n-flores-island-komodo-tour');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 1, 'Day 01. Ende or Maumere – Moni village', 'Komodo', 'Flores island and Komodo tour start by picking up service at hotel or at airport in Ende or Maumere (Ende is recommended starting point) – drive to Moni village for your accommodation.  on the way will stop at several view points for taking pictures and visit traditional village. Check in at your chosen hotel in Moni village.', '["Flores island and Komodo tour start by picking up service at hotel or at airport in Ende or Maumere (Ende is recommended starting point) – drive to Moni village for your accommodation.  on the way will stop at several view points for taking pictures and visit traditional village","Check in at your chosen hotel in Moni village"]', '/images/explor-1.jpg', 0);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 2, 'Day 02. Moni Village – Kelimutu Lake – Wologai village – Ende – Riung (Breakfast)', 'Komodo', 'Early morning wake up, and then driving up to Mt. Kelimutu – soft trekking up to Kelimutu summit to witness the most amazing Kelimutu three colored lake and its amazing landscape surroundings – walking down back to car parking area – drive back to hotel for breakfast – Heading to traditional market Ndua Ria – visit Wologai traditional village – drive to Blue stone beach via Ende – continue to Riung northern coast of Flores. Sevaral stops on the way to Riung. Check in at your chosen hotel in Riung.', '["Early morning wake up, and then driving up to Mt","Kelimutu – soft trekking up to Kelimutu summit to witness the most amazing Kelimutu three colored lake and its amazing landscape surroundings – walking down back to car parking area – drive back to hotel for breakfast – Heading to traditional market Ndua Ria – visit Wologai traditional village – drive to Blue stone beach via Ende – continue to Riung northern coast of Flores","Sevaral stops on the way to Riung"]', '/images/explor-1.jpg', 1);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 3, 'Day 03. Full day snorkeling trip to Riung Marine Garden – Riung (Breakfast)', 'Komodo', 'Breakfast at hotel – transfer to harbor to catch a local wooden boat trip – boat to Kalong island to witness thousand of fruit bats flying out of mangrove tree – boat to Bako/Tembang snorkeling spot – boat to Tiga island for snorkeling and BBQ lunch on the beach – boat back to harbor – transfer back to the hotel in Riung.', '["Breakfast at hotel – transfer to harbor to catch a local wooden boat trip – boat to Kalong island to witness thousand of fruit bats flying out of mangrove tree – boat to Bako/Tembang snorkeling spot – boat to Tiga island for snorkeling and BBQ lunch on the beach – boat back to harbor – transfer back to the hotel in Riung"]', '/images/explor-1.jpg', 2);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 4, 'Day 04. Riung – So’a hot spring – Bajawa (Breakfast)', 'Komodo', 'Breakfast at hotel – drive up Bajawa – stop at to So’a hot spring for taking a bath if you want – Check in at hotel in Bajawa. In the afternoon visit local market in Bajawa', '["Breakfast at hotel – drive up Bajawa – stop at to So’a hot spring for taking a bath if you want – Check in at hotel in Bajawa","In the afternoon visit local market in Bajawa"]', '/images/explor-1.jpg', 3);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 5, 'Day 5. Bajawa Countryside Tour (Breakfast)', 'Komodo', 'Breakfast at hotel – easy trek to Wawo Muda volcano – drive back to Bajawa town – continue driving to visit unique traditional village of Luba and Bena village as a part of Ngada tribe – heading to natural hot spring of Mala Nage to take a bath. Driving back to the hotel for overnight.', '["Breakfast at hotel – easy trek to Wawo Muda volcano – drive back to Bajawa town – continue driving to visit unique traditional village of Luba and Bena village as a part of Ngada tribe – heading to natural hot spring of Mala Nage to take a bath","Driving back to the hotel for overnight"]', '/images/explor-1.jpg', 4);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 6, 'Day 06. Bajawa – Aimere village – Borong – Ruteng (Breakfast)', 'Komodo', 'Breakfast at hotel – drive to Aimere village to see the traditional process of local alcohol drink from palm juice – En route will stop at several view points for taking pictures. Heading to Rana Mese lake via Borong – stop to take picture at Rana Mese lake – drive to Ruteng to check in at hotel. In the afternoon visit Liang Bua Flores hobbit cave.  route will stop to take a picture of stunning view of rice fields. Driving back to the hotel for your accommodation.', '["Breakfast at hotel – drive to Aimere village to see the traditional process of local alcohol drink from palm juice – En route will stop at several view points for taking pictures","Heading to Rana Mese lake via Borong – stop to take picture at Rana Mese lake – drive to Ruteng to check in at hotel","In the afternoon visit Liang Bua Flores hobbit cave.  route will stop to take a picture of stunning view of rice fields"]', '/images/explor-1.jpg', 5);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 7, 'Day 7. Ruteng – Lodok Cancar (spider’s web Rice Fields)- Narang – Denge – Wae Rebo village (B/L)', 'Komodo', 'Early breakfast at hotel – drive to Cancar to see “Lodok” the huge round rice fields that looks like giant spider’s web – drive south coast via Narang village – heading to Denge village – start trekking up for 3 hours to impressive and unique traditional village of Wae Rebo. Lunch box will be provided. Dinner and overnight at Wae Rebo village.', '["Early breakfast at hotel – drive to Cancar to see “Lodok” the huge round rice fields that looks like giant spider’s web – drive south coast via Narang village – heading to Denge village – start trekking up for 3 hours to impressive and unique traditional village of Wae Rebo","Lunch box will be provided","Dinner and overnight at Wae Rebo village"]', '/images/explor-1.jpg', 6);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 8, 'Day 8. Wae Rebo – Denge village – Narang village – Lembor village – Labuan Bajo (B/L)', 'Komodo', 'Simple breakfast at Wae Rebo village – see and enjoy the Wae Rebo village, by interacting with the local community to learn about their way of life and their unique culture before leaving the village – trek down back to Denge village – drive to Labuan Bajo via Narang and Lembor village. Lunch will be served in Denge or Dintor village. Check in at your hotel in Labuan Bajo for overnight.', '["Simple breakfast at Wae Rebo village – see and enjoy the Wae Rebo village, by interacting with the local community to learn about their way of life and their unique culture before leaving the village – trek down back to Denge village – drive to Labuan Bajo via Narang and Lembor village","Lunch will be served in Denge or Dintor village","Check in at your hotel in Labuan Bajo for overnight"]', '/images/explor-1.jpg', 7);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 9, 'Day 9. Labuan Bajo – Kelor Island – Rinca Island –Kalong Rinca Island (B/L/D)', 'Komodo', 'Breakfast at hotel – transfer to harbor to catch a local boat to start your Komodo tour – boat to Kelor island or Majerite to snorkel/swim/relax – heading to Rinca Island for trekking to see Komodo dragon and other wild life – get back to the boat to continue boating to Kalong Island to see thousand of Fruit bats flying out of mangrove tree. Lunch/Dinner will be served on the boat. Accommodation is on boat.', '["Breakfast at hotel – transfer to harbor to catch a local boat to start your Komodo tour – boat to Kelor island or Majerite to snorkel/swim/relax – heading to Rinca Island for trekking to see Komodo dragon and other wild life – get back to the boat to continue boating to Kalong Island to see thousand of Fruit bats flying out of mangrove tree","Lunch/Dinner will be served on the boat","Accommodation is on boat"]', '/images/explor-1.jpg', 8);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 10, 'Day 10. Rinca Island – Padar Island – Pink Beach – Komodo Island (B/L/D)', 'Komodo', 'Early boating to Padar island – After taking breakfast on the boat, then take a morning trekking to the top of Padar island to take a picture and enjoy the stunning scenery around Komodo National Park – get back to the boat, then heading to Pink Beach to snorkel/relax/swim – boat Komodo Island – trekking at Komodo island to see Komodo dragon and other wild-life. Lunch, Dinner and overnight on boat at around Komodo island near Taka Makasar.', '["Early boating to Padar island – After taking breakfast on the boat, then take a morning trekking to the top of Padar island to take a picture and enjoy the stunning scenery around Komodo National Park – get back to the boat, then heading to Pink Beach to snorkel/relax/swim – boat Komodo Island – trekking at Komodo island to see Komodo dragon and other wild-life","Lunch, Dinner and overnight on boat at around Komodo island near Taka Makasar"]', '/images/explor-1.jpg', 9);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 11, 'Day 11. Taka Makasar – Manta Point – Siaba island – Kanawa Island – Labuan Bajo (B/L)', 'Komodo', 'Breakfast on boat – boat to Manta point to see the huge Manta ray fish by snorkeling (No guarantee, only lucky time to see them) – boat to Siaba island for snorkeling (if you are lucky, you can see turtles here) – heading to Kanawa island to snorkel/swim/relax. Breakfast/Lunch will be served on the boat – boat back to Labuan Bajo’ harbor to transfer to your chosen hotel for overnight or transfer to the airport to take latest afternoon flight for the next destination (If you want to take a flight directly in the afternoon after the trip, we advise you to take a latest flight around 4/5PM. End of Flores Komodo Tour for ten days. Service Includes: Remark :', '["Breakfast on boat – boat to Manta point to see the huge Manta ray fish by snorkeling (No guarantee, only lucky time to see them) – boat to Siaba island for snorkeling (if you are lucky, you can see turtles here) – heading to Kanawa island to snorkel/swim/relax","Breakfast/Lunch will be served on the boat – boat back to Labuan Bajo’ harbor to transfer to your chosen hotel for overnight or transfer to the airport to take latest afternoon flight for the next destination (If you want to take a flight directly in the afternoon after the trip, we advise you to take a latest flight around 4/5PM","End of Flores Komodo Tour for ten days"]', '/images/explor-1.jpg', 10);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'All Accommodation and bre', 'All Accommodation and breakfast during tour', 'Check', 0);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Private AC Car and driver', 'Private AC Car and driver', 'Check', 1);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Petroleum', 'Petroleum', 'Check', 2);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Car parking tax', 'Car parking tax', 'Check', 3);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Donation and Entrance fee in every objects', 0);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Meals during on the land tour on Flores', 1);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Soft & Alcohol drinks.', 2);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Ranger fee at Komodo National Park', 3);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, '/images/indonesia/1-1-600x400.jpg', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 'https://images.pexels.com/photos/2412711/pexels-photo-2412711.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 1);

-- Package 13: 7D/6N - Flores Adventure Tour
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  '7d-6n-flores-adventure-tour', '7D/6N - Flores Adventure Tour', 'Indonesia', 'Southeast Asia', 
  'Explore 7D/6N - Flores Adventure Tour with daily itineraries, local guides, and highlights', '/images/indonesia/2-scaled-600x400.jpg', 'Experience the beauty of Indonesia with our special package: 7D/6N - Flores Adventure Tour. Discover rich culture, stunning scenery, and unforgettable experiences on this day-by-day guided tour.', 
  119.88, -8.45, 'Adventure', 'bg-orange-500', 
  'Custom package for 7D/6N - Flores Adventure Tour including accommodation, tours, and transfers.', '/images/indonesia/2-scaled-600x400.jpg', 
  'published', '', '7 Days', 
  'Denpasar', 'Indonesian Rupiah (Rp)', 'Tropical with dry season (April–October) and wet season (November–March)', 'April–October (dry season)', 
  'Indonesian (Bahasa), English', 'WITA (UTC+8)', 'Left'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = '7d-6n-flores-adventure-tour');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 1, 'Day 01. Ende, Flores Island – Moni village', 'Komodo', 'Pick up at hotel or at the airport in Ende – begin your Flores adventure by driving to Saga/Wologai unique traditional village belongs to Lio tribe – continue trip to Moni village to check in at hotel for your accommodation.', '["Pick up at hotel or at the airport in Ende – begin your Flores adventure by driving to Saga/Wologai unique traditional village belongs to Lio tribe – continue trip to Moni village to check in at hotel for your accommodation"]', '/images/explor-1.jpg', 0);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 2, 'Day 02. Moni village – Kelimutu Lake – Ende – Blue Stone Beach – Riung (B).', 'Komodo', 'Early wake up, then drive to Kelimutu three lake – soft trekking from parking area to Kelimutu’s summit  to witness the most amazing Kelimutu three colored lake and its magnificent landscape surroundings – walking back to parking area and then drive to hotel for breakfast – Continue Ende town. Ende route will stop at traditional market Ndua Ria – drive to Blue Stone Beach – continue to Riung northern coast of Flores. Check in at hotel in Riung for your accommodation.', '["Early wake up, then drive to Kelimutu three lake – soft trekking from parking area to Kelimutu’s summit  to witness the most amazing Kelimutu three colored lake and its magnificent landscape surroundings – walking back to parking area and then drive to hotel for breakfast – Continue Ende town","Ende route will stop at traditional market Ndua Ria – drive to Blue Stone Beach – continue to Riung northern coast of Flores","Check in at hotel in Riung for your accommodation"]', '/images/explor-1.jpg', 1);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 3, 'Day 3. Half-day snorkeling trip at Riung Marine Garden – Bajawa (B)', 'Komodo', 'Today is visiting Riung Sea Garden as one one of most spectacular snorkel site in the northern Flores island. Start with the breakfast at hotel – transfer to harbor to catch a local wooden boat – boat to Kalong island to witness thousand of fruit bats flying out of mangrove tree – boat to Bako/Tembang snorkeling spot – boat to Tiga island for snorkeling and BBQ lunch on the white sandy beach – boat back to harbor – continue driving to Bajawa and stop at So’a hot spring for taking a bath if you want. Check in at hotel in Bajawa for accommodation.', '["Today is visiting Riung Sea Garden as one one of most spectacular snorkel site in the northern Flores island","Start with the breakfast at hotel – transfer to harbor to catch a local wooden boat – boat to Kalong island to witness thousand of fruit bats flying out of mangrove tree – boat to Bako/Tembang snorkeling spot – boat to Tiga island for snorkeling and BBQ lunch on the white sandy beach – boat back to harbor – continue driving to Bajawa and stop at So’a hot spring for taking a bath if you want","Check in at hotel in Bajawa for accommodation"]', '/images/explor-1.jpg', 2);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 4, 'Day 04. Bajawa – Bena village – Aimere village – Borong Ruteng (B)', 'Komodo', 'Breakfast at hotel – drive to an impressive traditional village of Bena located in the hearth of Flores – continue driving to Aimere village to see the traditional process of local alcohol drink from palm juice – drive to Borong – stop at Rana Mese lake to take a picture – drive to Ruteng to check in at hotel.', '["Breakfast at hotel – drive to an impressive traditional village of Bena located in the hearth of Flores – continue driving to Aimere village to see the traditional process of local alcohol drink from palm juice – drive to Borong – stop at Rana Mese lake to take a picture – drive to Ruteng to check in at hotel"]', '/images/explor-1.jpg', 3);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 5, 'Day 05. Ruteng – Cancar “spider’s web rice field” – Lembor – Labuan Bajo – Rinca island (B/L/D).', 'Komodo', 'Today is the ending of Flores island driving. Breakfast at hotel – drive to Labuan Bajo as a western most town on Flores. Visit Cancar  village to see the Lodok spectacular view of round rice fields that looks like giant spider’s web – drive to Labuan Bajo’s harbor for 4 hours to catch a wooden boat leaving for Rinca island – trekking at Rinca island to see Komodo dragon and other wild life. Lunch, Dinner and Overnight are on the boat trip.', '["Today is the ending of Flores island driving","Breakfast at hotel – drive to Labuan Bajo as a western most town on Flores","Visit Cancar  village to see the Lodok spectacular view of round rice fields that looks like giant spider’s web – drive to Labuan Bajo’s harbor for 4 hours to catch a wooden boat leaving for Rinca island – trekking at Rinca island to see Komodo dragon and other wild life"]', '/images/explor-1.jpg', 4);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 6, 'Day 6. Rinca island – Komodo island  – Pink Beach – Labuan Bajo (B,L)', 'Komodo', 'Early morning will boat to Komodo island – After breakfast on the boat trip, trekking at Komodo island to see the Komodo dragon and other wild life – boat to Pink Beach to snorkel and relax at spectacular pink color beach – Lunch on the boat while boating back to Labuan Bajo’s harbor, west Flores – transfer to the hotel for your accommodation.', '["Early morning will boat to Komodo island – After breakfast on the boat trip, trekking at Komodo island to see the Komodo dragon and other wild life – boat to Pink Beach to snorkel and relax at spectacular pink color beach – Lunch on the boat while boating back to Labuan Bajo’s harbor, west Flores – transfer to the hotel for your accommodation"]', '/images/explor-1.jpg', 5);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 7, 'Day 7. Hotel – chcek out for your next destination (B).', 'Komodo', 'Today is the last day of Flores Adventure Tour. Breakfast at hotel – free at leisure until time to check out for your next destination.', '["Today is the last day of Flores Adventure Tour","Breakfast at hotel – free at leisure until time to check out for your next destination"]', '/images/explor-1.jpg', 6);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'All Accommodation and bre', 'All Accommodation and breakfast during tour', 'Check', 0);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Private AC Car and driver', 'Private AC Car and driver', 'Check', 1);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Petroleum', 'Petroleum', 'Check', 2);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Car parking tax', 'Car parking tax', 'Check', 3);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Donation and Entrance fee in every objects', 0);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Meals during on the land tour on Flores', 1);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Soft & Alcohol drinks.', 2);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, '/images/indonesia/2-scaled-600x400.jpg', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 'https://images.pexels.com/photos/2412711/pexels-photo-2412711.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 1);

-- Package 14: 2D/1N - Wae Rebo Village Tour
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  '2d-1n-wae-rebo-village-tour', '2D/1N - Wae Rebo Village Tour', 'Indonesia', 'Southeast Asia', 
  'Explore 2D/1N - Wae Rebo Village Tour with daily itineraries, local guides, and highlights', '/images/indonesia/3-indo-600x400.jpg', 'Experience the beauty of Indonesia with our special package: 2D/1N - Wae Rebo Village Tour. Discover rich culture, stunning scenery, and unforgettable experiences on this day-by-day guided tour.', 
  120.28, -8.63, 'Adventure', 'bg-orange-500', 
  'Custom package for 2D/1N - Wae Rebo Village Tour including accommodation, tours, and transfers.', '/images/indonesia/3-indo-600x400.jpg', 
  'published', '', '2 Days', 
  'Denpasar', 'Indonesian Rupiah (Rp)', 'Tropical with dry season (April–October) and wet season (November–March)', 'April–October (dry season)', 
  'Indonesian (Bahasa), English', 'WITA (UTC+8)', 'Left'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = '2d-1n-wae-rebo-village-tour');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 1, 'Labuan Bajo – Lembor village – Narang village – Denge village – Wae Rebo village (L,D).', 'Wae Rebo Village', 'Early morning picking up service at your hotel in Labuan Bajo, west Flores – drive to Lembor village to see the largest wet paddy-field in west Flores – drive to Narang village southern coast of west Flores – drive to Denge village – start trekking up for 2,5 hours to impressive and unique traditional village of Wae Rebo. Lunch on the way, Dinner and overnight at Wae Rebo village.', '["Early morning picking up service at your hotel in Labuan Bajo, west Flores – drive to Lembor village to see the largest wet paddy-field in west Flores – drive to Narang village southern coast of west Flores – drive to Denge village – start trekking up for 2,5 hours to impressive and unique traditional village of Wae Rebo","Lunch on the way, Dinner and overnight at Wae Rebo village"]', '/images/explor-1.jpg', 0);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 2, 'Wae Rebo Village – Denge village – Narang village – Lembor village – Labuan Bajo (B,L).', 'Wae Rebo Village', 'on the second we are having a Simple breakfast at Wae Rebo village – see and enjoy the Wae Rebo village, by interacting with the local community to learn about their way of life and their unique culture before leaving the village – trek down back to Denge village – drive back to to Labuan Bajo via Narang and Lembor village. Lunch will be served on the way. Drop you off at your hotel in Labuan Bajo. End of your Wae Rebo Village Tour with us.', '["on the second we are having a Simple breakfast at Wae Rebo village – see and enjoy the Wae Rebo village, by interacting with the local community to learn about their way of life and their unique culture before leaving the village – trek down back to Denge village – drive back to to Labuan Bajo via Narang and Lembor village","Lunch will be served on the way","Drop you off at your hotel in Labuan Bajo"]', '/images/explor-1.jpg', 1);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'All Accommodation and bre', 'All Accommodation and breakfast during tour', 'Check', 0);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Private AC Car and driver', 'Private AC Car and driver', 'Check', 1);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Petroleum', 'Petroleum', 'Check', 2);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Car parking tax', 'Car parking tax', 'Check', 3);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Donation and Entrance fee in every objects', 0);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Meals during the tour', 1);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Soft & Alcohol drinks.', 2);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Ranger fee at Komodo National Park', 3);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, '/images/indonesia/3-indo-600x400.jpg', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 'https://images.pexels.com/photos/2412711/pexels-photo-2412711.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 1);

-- Package 15: 4D/3N - Overnight On Boat Komodo Trekking
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  '4d-3n-overnight-on-boat-komodo-trekking', '4D/3N - Overnight On Boat Komodo Trekking', 'Indonesia', 'Southeast Asia', 
  'Explore 4D/3N - Overnight On Boat Komodo Trekking with daily itineraries, local guides, and highlights', '/images/indonesia/4-indo-600x400.jpg', 'Experience the beauty of Indonesia with our special package: 4D/3N - Overnight On Boat Komodo Trekking. Discover rich culture, stunning scenery, and unforgettable experiences on this day-by-day guided tour.', 
  119.88, -8.45, 'Adventure', 'bg-orange-500', 
  'Custom package for 4D/3N - Overnight On Boat Komodo Trekking including accommodation, tours, and transfers.', '/images/indonesia/4-indo-600x400.jpg', 
  'published', '', '4 Days', 
  'Denpasar', 'Indonesian Rupiah (Rp)', 'Tropical with dry season (April–October) and wet season (November–March)', 'April–October (dry season)', 
  'Indonesian (Bahasa), English', 'WITA (UTC+8)', 'Left'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = '4d-3n-overnight-on-boat-komodo-trekking');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 1, 'Day 1. Labuan Bajo – Kelor Island Trekking/Snorkeling – Menjerite Snorkeling Spot -Kalong Island (L,D).', 'Komodo', 'Start your Komodo Trekking Tour by Picking you up at hotel or at the airport in Labuan Bajo – transfer to harbor to catch a local wooden boat trip – Boating to beautiful island of Kelor for snorkeling/swimming/relaxing and do short trekking to the hilltop of Pulau Kelor to enjoy the spectacular panorama surrounding the island. Heading to a magnificent snorkel spot called Menjerite. Here you will discover the abundant of marine life.  continue boating to Kalong island to witness the most amazing attraction where you will see thousands of Fruit bats are flying out of mangrove forest while enjoying the spectacular sun set.', '["Start your Komodo Trekking Tour by Picking you up at hotel or at the airport in Labuan Bajo – transfer to harbor to catch a local wooden boat trip – Boating to beautiful island of Kelor for snorkeling/swimming/relaxing and do short trekking to the hilltop of Pulau Kelor to enjoy the spectacular panorama surrounding the island","Heading to a magnificent snorkel spot called Menjerite","Here you will discover the abundant of marine life.  continue boating to Kalong island to witness the most amazing attraction where you will see thousands of Fruit bats are flying out of mangrove forest while enjoying the spectacular sun set"]', '/images/explor-1.jpg', 0);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 2, 'Day 2. Padar Island Trekking  – Pink Beach – Komodo Island (B,L,D).', 'Komodo', 'Early boating to Padar Island. Breakfast on the boat. Trekking to the top of Padar Island to enjoy the most spectacular panorama around Komodo National Park. After trekking at Padar island, continue boating to Long Beach for snorkeling/swimming/relaxing. Continue boating to a spectacular snorkel site called Pink Beach on Komodo Island to snorkel/swim/relax. Heading to Komodo Island to do an afternoon trek to search for the Komodo dragon and other wildlife on the island. (If time permits in the afternoon, you can walk around Komodo village to see a traditional fishing village. Breakfast, Lunch, Dinner, and Overnight on the boat', '["Early boating to Padar Island","Breakfast on the boat","Trekking to the top of Padar Island to enjoy the most spectacular panorama around Komodo National Park"]', '/images/explor-1.jpg', 1);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 3, 'Day 3. Komodo Island – Taka Makasar/Manta Point – Gili Laba Island (B,L,D).', 'Komodo', 'After breakfast on boat, then trekking on Komodo island to witness Komodo dragon and other Wild life. After trekking will get back to the boat, then boating to Taka Makasar/Manta Point  to try finding huge Manta Ray fish by snorkeling (No guarantee to see them, depending on lucky). After snorkeling at Taka Makasar/Manta Point continue boating to Gili Laba island for an afternoon trekking to enjoy the wonderful landscape around Komodo park while witnessing the amazing sun set. Breakfast, Lunch, Dinner serve on boat. Overnight is also on boat at Gili Laba island.', '["After breakfast on boat, then trekking on Komodo island to witness Komodo dragon and other Wild life","After trekking will get back to the boat, then boating to Taka Makasar/Manta Point  to try finding huge Manta Ray fish by snorkeling (No guarantee to see them, depending on lucky)","After snorkeling at Taka Makasar/Manta Point continue boating to Gili Laba island for an afternoon trekking to enjoy the wonderful landscape around Komodo park while witnessing the amazing sun set"]', '/images/explor-1.jpg', 2);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 4, 'Day 4. Gili Laba Island – Siaba Island – Kanwa Island – Labuan Bajo (B,L).', 'Komodo', 'Breakfast on boat, then boating to Siaba Island for an off-shore snorkeling (If you are lucky, you can find turtles here). Heading to the last epic island of Kanawa to snorkel/swim/relax. Here, you will snorkel at super crystal clear water, beautiful colorful fish and coral-reef, as well as the white stunning sand beach. Heading back to Labuan Bajo harbor – transfer to your chosen/preference hotel or drop you off at Labuan Bajo’s airport for flying to the next destination (Please take an afternoon flight if you want to fly soon after this trip). Breakfast and Lunch on boat. End of your Komodo Trekking Tour and we thank you for choosing us to arrange your trekking around Komodo Island.', '["Breakfast on boat, then boating to Siaba Island for an off-shore snorkeling (If you are lucky, you can find turtles here)","Heading to the last epic island of Kanawa to snorkel/swim/relax","Here, you will snorkel at super crystal clear water, beautiful colorful fish and coral-reef, as well as the white stunning sand beach"]', '/images/explor-1.jpg', 3);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, '4 days local wooden boat ', '4 days local wooden boat (AC/non-AC Cabin boat depends on requested)', 'Check', 0);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, '3 Nights accommodation on', '3 Nights accommodation on boat, 2X Transfers by AC Car', 'Check', 1);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Experienced tour guide', 'Experienced tour guide', 'Check', 2);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Snorkel gears', 'Snorkel gears', 'Check', 3);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Hotel in Labuan Bajo', 0);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'All Entrance Park FEE', 1);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Soft & Alcohol drinks', 2);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Travel Insurance', 3);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Personal Expenses', 4);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, '/images/indonesia/4-indo-600x400.jpg', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 'https://images.pexels.com/photos/2412711/pexels-photo-2412711.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 1);

-- Package 16: 3D/2N - Jogyakarta Classic Tour
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  '3d-2n-jogyakarta-classic-tour', '3D/2N - Jogyakarta Classic Tour', 'Indonesia', 'Southeast Asia', 
  'Explore 3D/2N - Jogyakarta Classic Tour with daily itineraries, local guides, and highlights', '/images/indonesia/9-600x400.webp', 'Experience the beauty of Indonesia with our special package: 3D/2N - Jogyakarta Classic Tour. Discover rich culture, stunning scenery, and unforgettable experiences on this day-by-day guided tour.', 
  110.37, -7.79, 'Historical', 'bg-amber-600', 
  'Custom package for 3D/2N - Jogyakarta Classic Tour including accommodation, tours, and transfers.', '/images/indonesia/9-600x400.webp', 
  'published', '', '3 Days', 
  'Jogyakarta', 'Indonesian Rupiah (Rp)', 'Tropical with dry season (April–October) and wet season (November–March)', 'April–October (dry season)', 
  'Indonesian (Bahasa), English', 'WIB (UTC+7)', 'Left'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = '3d-2n-jogyakarta-classic-tour');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 1, 'Day 1', 'Jogyakarta', 'The itinerary involves arriving at Yogyakarta International Airport via AirAsia and being picked up by a guide. From there, you will be taken to a local restaurant for dinner before checking in at the hotel.', '["The itinerary involves arriving at Yogyakarta International Airport via AirAsia and being picked up by a guide","From there, you will be taken to a local restaurant for dinner before checking in at the hotel"]', '/images/explor-1.jpg', 0);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 2, 'Day 2', 'Jogyakarta', 'will begin with a breakfast at the hotel, followed by a Lava tour where you will explore the slopes of Mount Merapi using a 4 WD jeep. The first stop on this tour will be the Alien Rock, after which you will head to the underground bunker and SisaHartaku Museum. You will then have lunch at a local restaurant before continuing your journey to Magelang, where you will visit the Borobudur Temple, the biggest Buddhist temple. Once you return to Yogyakarta, you should not miss seeing Malioboro Street, which has many stores selling handmade items and souvenirs. Your day will end with dinner at a local restaurant before being taken back to the hotel.', '["will begin with a breakfast at the hotel, followed by a Lava tour where you will explore the slopes of Mount Merapi using a 4 WD jeep","The first stop on this tour will be the Alien Rock, after which you will head to the underground bunker and SisaHartaku Museum","You will then have lunch at a local restaurant before continuing your journey to Magelang, where you will visit the Borobudur Temple, the biggest Buddhist temple"]', '/images/explor-1.jpg', 1);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 3, 'Day 3', 'Jogyakarta', 'involves visiting Gamplong and Studio Alam during your stay at the hotel. The filmmakers used these places for filming Sultan Agung: Throne, Struggle, Love, Earth of Mankind, and Ainun Habibie 3. Finally, you will have lunch at a local restaurant before being transferred to Yogyakarta International Airport to end the tour.', '["involves visiting Gamplong and Studio Alam during your stay at the hotel","The filmmakers used these places for filming Sultan Agung: Throne, Struggle, Love, Earth of Mankind, and Ainun Habibie 3","Finally, you will have lunch at a local restaurant before being transferred to Yogyakarta International Airport to end the tour"]', '/images/explor-1.jpg', 2);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Transfer as flight schedu', 'Transfer as flight schedule', 'Check', 0);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Accommodation based on tw', 'Accommodation based on twin/triple share', 'Check', 1);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Meals as program', 'Meals as program', 'Check', 2);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Private air-conditioned c', 'Private air-conditioned car/ Bus transport for a group', 'Check', 3);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'An additional charge of MYR 120 per pax for an optional tour of the Prambanan temple', 0);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Personal expenses such as drinks at meals, Insurance, Air tickets, Upgrade meals, visa fees', 1);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Compulsory Tipping – MYR 15/pax/day for FIT booking and MYR 10/pax/day for group booking', 2);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, '/images/indonesia/9-600x400.webp', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 'https://images.pexels.com/photos/2412711/pexels-photo-2412711.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 1);

-- Package 17: 4D/3N - Setumbu Sunrise & Cultural Delights
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  '4d-3n-setumbu-sunrise-cultural-delights', '4D/3N - Setumbu Sunrise & Cultural Delights', 'Indonesia', 'Southeast Asia', 
  'Explore 4D/3N - Setumbu Sunrise & Cultural Delights with daily itineraries, local guides, and highlights', '/images/indonesia/10-600x400.jpg', 'Experience the beauty of Indonesia with our special package: 4D/3N - Setumbu Sunrise & Cultural Delights. Discover rich culture, stunning scenery, and unforgettable experiences on this day-by-day guided tour.', 
  110.37, -7.79, 'Historical', 'bg-amber-600', 
  'Custom package for 4D/3N - Setumbu Sunrise & Cultural Delights including accommodation, tours, and transfers.', '/images/indonesia/10-600x400.jpg', 
  'published', '', '4 Days', 
  'Jogyakarta', 'Indonesian Rupiah (Rp)', 'Tropical with dry season (April–October) and wet season (November–March)', 'April–October (dry season)', 
  'Indonesian (Bahasa), English', 'WIB (UTC+7)', 'Left'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = '4d-3n-setumbu-sunrise-cultural-delights');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 1, 'Day 1. On the first day of your trip', 'Jogyakarta', 'AirAsia will bring you to Yogyakarta International Airport, and your guide will pick you up. From there, you''ll head straight to a local restaurant for dinner before checking into your hotel.', '["AirAsia will bring you to Yogyakarta International Airport, and your guide will pick you up","From there, you''ll head straight to a local restaurant for dinner before checking into your hotel"]', '/images/explor-1.jpg', 0);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 2, 'Day 2. The second day', 'Jogyakarta', 'The second day starts at 3:00 am as you travel to Magelang for a breathtaking sunrise view from Setumbu Hills. From a height of about 400 meters, you''ll get an incredible panoramic view of the Borobudur temple. Afterward, you''ll head to Svargabhumi, an aesthetic rice field with many Instagram-worthy photo spots. You''ll have lunch at a local restaurant and visit Borobudur Temple, the largest Buddhist temple. The day ends with dinner at a local restaurant and some rest at your hotel in Yogyakarta.', '["The second day starts at 3:00 am as you travel to Magelang for a breathtaking sunrise view from Setumbu Hills","From a height of about 400 meters, you''ll get an incredible panoramic view of the Borobudur temple","Afterward, you''ll head to Svargabhumi, an aesthetic rice field with many Instagram-worthy photo spots"]', '/images/explor-1.jpg', 1);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 3, 'Day 3. On the third day', 'Jogyakarta', 'On the third day, you''ll have breakfast at your hotel before visiting the "KRATON" – Sultan Palace and Pines Forest. The palace is the home of the Yogyakarta king, while the forest is a great place to relax and take selfies. It''s perfect for both amateur and professional photographers. You''ll have lunch at a local restaurant and then head to Sky View, a new tourist attraction on a hill that''s great for taking pictures to use on social media. After that, you''ll check out Malioboro Street, famous for its markets selling crafts and other things. Dinner will be at a local restaurant before heading back to your hotel.', '["On the third day, you''ll have breakfast at your hotel before visiting the \\"KRATON\\" – Sultan Palace and Pines Forest","The palace is the home of the Yogyakarta king, while the forest is a great place to relax and take selfies","It''s perfect for both amateur and professional photographers"]', '/images/explor-1.jpg', 2);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 4, 'Day 4. On the fourth and final day', 'Jogyakarta', 'On the fourth and final day, you''ll have breakfast at your hotel before checking out. Your first stop will be Gamplong, where you can visit the famous Indonesian filmmaker Hanung Bramantyo''s studio. He filmed Sultan Agung: Throne, Struggle, Love, Earth of Mankind, and Ainun Habibie 3 there. You''ll have lunch at a local restaurant before transferring to Yogyakarta International Airport to end your tour.', '["On the fourth and final day, you''ll have breakfast at your hotel before checking out","Your first stop will be Gamplong, where you can visit the famous Indonesian filmmaker Hanung Bramantyo''s studio","He filmed Sultan Agung: Throne, Struggle, Love, Earth of Mankind, and Ainun Habibie 3 there"]', '/images/explor-1.jpg', 3);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Transfer as flight schedu', 'Transfer as flight schedule', 'Check', 0);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Accommodation based on tw', 'Accommodation based on twin/triple share', 'Check', 1);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Meals as program', 'Meals as program', 'Check', 2);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Private air-conditioned c', 'Private air-conditioned car/ Bus transport for a group', 'Check', 3);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'An additional charge of MYR 120 per pax for an optional tour of the Prambanan temple', 0);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Personal expenses such as drinks at meals, Insurance, Air tickets, Upgrade meals, visa fees', 1);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Compulsory Tipping – MYR 15/pax/day for FIT booking and MYR 10/pax/day for group booking', 2);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, '/images/indonesia/10-600x400.jpg', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 'https://images.pexels.com/photos/2412711/pexels-photo-2412711.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 1);

-- Package 18: 5D/4N - Jogjakarta Parangkusumo Sand Dunes Tour
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  '5d-4n-jogjakarta-parangkusumo-sand-dunes-tour', '5D/4N - Jogjakarta Parangkusumo Sand Dunes Tour', 'Indonesia', 'Southeast Asia', 
  'Explore 5D/4N - Jogjakarta Parangkusumo Sand Dunes Tour with daily itineraries, local guides, and highlights', '/images/indonesia/11-600x400.jpg', 'Experience the beauty of Indonesia with our special package: 5D/4N - Jogjakarta Parangkusumo Sand Dunes Tour. Discover rich culture, stunning scenery, and unforgettable experiences on this day-by-day guided tour.', 
  110.37, -7.79, 'Historical', 'bg-amber-600', 
  'Custom package for 5D/4N - Jogjakarta Parangkusumo Sand Dunes Tour including accommodation, tours, and transfers.', '/images/indonesia/11-600x400.jpg', 
  'published', '', '5 Days', 
  'Jogyakarta', 'Indonesian Rupiah (Rp)', 'Tropical with dry season (April–October) and wet season (November–March)', 'April–October (dry season)', 
  'Indonesian (Bahasa), English', 'WIB (UTC+7)', 'Left'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = '5d-4n-jogjakarta-parangkusumo-sand-dunes-tour');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 1, 'ARRIVE AT YIA ( D )', 'Jogyakarta', 'Arrive at Yogyakarta International Airport by AirAsia, pickup by Guide. Direct to a local restaurant for dinner. Check-in at the hotel .', '["Arrive at Yogyakarta International Airport by AirAsia, pickup by Guide","Direct to a local restaurant for dinner","Check-in at the hotel "]', '/images/explor-1.jpg', 0);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 2, 'SULTAN PALACE – VW BOROBUDUR TOUR  ( B/L/D )', 'Jogyakarta', 'Breakfast in a hotel. In the morning, visit “KRATON " – Sultan palace, the home of the Yogyakarta king, ahead of Magelang and explore the villages surrounding Borobudur temple using a VW Safari car (4 seater capacity). During 2 hours, we’ll go around the villages starting from Balkondes Tuksongo, visiting the workshop of the Javanese sugar factory you can see or practice how to make Javanese Sugar; continue the trip by visiting Balkondes Ganjuran to see a honey bee farm. You may stop at a nice spot to take photos to capture the memories of beautiful Menoreh Hill during the route. The VW car will drop you at a local restaurant for lunch and, in the afternoon, visit Borobudur, the biggest Buddhist temple, before returning to the hotel.', '["Breakfast in a hotel","In the morning, visit “KRATON \\" – Sultan palace, the home of the Yogyakarta king, ahead of Magelang and explore the villages surrounding Borobudur temple using a VW Safari car (4 seater capacity)","During 2 hours, we’ll go around the villages starting from Balkondes Tuksongo, visiting the workshop of the Javanese sugar factory you can see or practice how to make Javanese Sugar; continue the trip by visiting Balkondes Ganjuran to see a honey bee farm. You may stop at a nice spot to take photos to capture the memories of beautiful Menoreh Hill during the route"]', '/images/explor-1.jpg', 1);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 3, 'GAMPLONG STUDIO – EXPLORING PARANGKUSUMO SAND DUNES (GUMUK PASIR) – PARANGTRITIS BEACH ( B/L/D )', 'Jogyakarta', 'Breakfast in the hotel and leaves for Gamplong Studio Alam, where the filming of Sultan Agung: Throne, Struggle, Love, and Earth of Mankind and Ainun Habibie 3 by HanungBramantyo Indonesian famous filmmaker continue to the new popular destination Parangkusumo Sand Dune, we will ride a jeep, and also you give a chance to sandboarding. Afternoon, we will have a fantastic sunset from Parangtritis Beach—lunch and dinner at a local restaurant.', '["Breakfast in the hotel and leaves for Gamplong Studio Alam, where the filming of Sultan Agung: Throne, Struggle, Love, and Earth of Mankind and Ainun Habibie 3 by HanungBramantyo Indonesian famous filmmaker continue to the new popular destination Parangkusumo Sand Dune, we will ride a jeep, and also you give a chance to sandboarding","Afternoon, we will have a fantastic sunset from Parangtritis Beach—lunch and dinner at a local restaurant"]', '/images/explor-1.jpg', 2);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 4, 'FULL DAY SHOPPING TOUR - MALIOBORO STREET ( B/L/D )', 'Jogyakarta', 'Breakfast in a hotel and a shopping tour, we will take you to Kota Gede, which means the big city or a great city. It is the oldest living neighborhood of Yogyakarta. It was once the capital of Mataram, famous for its many silver shops along the streets. Visit Batik Paradise Visiting Batik Paradise, a shop that sells ready-to-use batik products with the uniqueness that only provides one batik motif for one piece of clothing. So you don''t have to worry about having a batik with the same motif as other people. Afternoon, visit Malioboro Street, well-known for various goods and handicraft markets. Dinner at a local restaurant, back to the hotel, and accessible.', '["Breakfast in a hotel and a shopping tour, we will take you to Kota Gede, which means the big city or a great city","It is the oldest living neighborhood of Yogyakarta","It was once the capital of Mataram, famous for its many silver shops along the streets"]', '/images/explor-1.jpg', 3);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 5, 'FREE PROGRAM- TRANSFER AIRPORT ( B/L )', 'Jogyakarta', 'Breakfast in the hotel and free program until check out time, and leave for the airport for departure to KL. Lunch will be provided at a restaurant near the airport.', '["Breakfast in the hotel and free program until check out time, and leave for the airport for departure to KL","Lunch will be provided at a restaurant near the airport"]', '/images/explor-1.jpg', 4);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Respect local Balinese Hindu customs by wearing a sarong when entering temples.', 0);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Tap water is not drinkable; use bottled water for drinking and brushing teeth.', 1);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, '/images/indonesia/11-600x400.jpg', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 'https://images.pexels.com/photos/2412711/pexels-photo-2412711.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 1);

-- Package 19: 5D/4N - Fun & Adventure Jogyakarta City Tour
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  '5d-4n-fun-adventure-jogyakarta-city-tour', '5D/4N - Fun & Adventure Jogyakarta City Tour', 'Indonesia', 'Southeast Asia', 
  'Explore 5D/4N - Fun & Adventure Jogyakarta City Tour with daily itineraries, local guides, and highlights', '/images/indonesia/12-600x400.jpg', 'Experience the beauty of Indonesia with our special package: 5D/4N - Fun & Adventure Jogyakarta City Tour. Discover rich culture, stunning scenery, and unforgettable experiences on this day-by-day guided tour.', 
  110.37, -7.79, 'Historical', 'bg-amber-600', 
  'Custom package for 5D/4N - Fun & Adventure Jogyakarta City Tour including accommodation, tours, and transfers.', '/images/indonesia/12-600x400.jpg', 
  'published', '', '5 Days', 
  'Jogyakarta', 'Indonesian Rupiah (Rp)', 'Tropical with dry season (April–October) and wet season (November–March)', 'April–October (dry season)', 
  'Indonesian (Bahasa), English', 'WIB (UTC+7)', 'Left'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = '5d-4n-fun-adventure-jogyakarta-city-tour');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 1, 'Day 1.', 'Jogyakarta', 'You will arrive at Yogyakarta International Airport via AirAsia, where your guide will be waiting to pick you up. You will then head directly to a local restaurant for dinner before checking into your hotel.', '["You will arrive at Yogyakarta International Airport via AirAsia, where your guide will be waiting to pick you up","You will then head directly to a local restaurant for dinner before checking into your hotel"]', '/images/explor-1.jpg', 0);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 2, 'Day 2.', 'Jogyakarta', 'Starts with breakfast at the hotel, followed by a lava tour in a 4WD jeep to explore Mount Merapi''s slopes. You will also visit Alien Rock, an underground bunker, and the SisaHartaku Museum. We will provide lunch for you at a local restaurant. Afterward, you will continue to Magelang and visit Borobudur Temple, the biggest Buddhist temple, before returning to Yogyakarta.', '["Starts with breakfast at the hotel, followed by a lava tour in a 4WD jeep to explore Mount Merapi''s slopes","You will also visit Alien Rock, an underground bunker, and the SisaHartaku Museum","We will provide lunch for you at a local restaurant"]', '/images/explor-1.jpg', 1);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 3, 'Day 3.', 'Jogyakarta', 'You will visit Pindul Cave for water activities, followed by an adrenaline rush on the gondola at TIMANG Beach (personal account of gondola ride included). You will then return to Yogyakarta for dinner at a local restaurant.', '["You will visit Pindul Cave for water activities, followed by an adrenaline rush on the gondola at TIMANG Beach (personal account of gondola ride included)","You will then return to Yogyakarta for dinner at a local restaurant"]', '/images/explor-1.jpg', 2);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 4, 'Day 4.', 'Jogyakarta', 'You will start with breakfast at the hotel and visit the Sultan''s Palace, known as "KRATON," home to the Yogyakarta King. Then, you will head to the Pines Forest, ideal for amateur and professional photographers. We will provide lunch for you at a local restaurant. In the afternoon, you will visit Heha Sky View, a new tourist spot on a hill that''s great for taking photos for your social media profile. Later, you will visit Malioboro Street, well-known for various goods and handicraft markets, and enjoy dinner at a local restaurant.', '["You will start with breakfast at the hotel and visit the Sultan''s Palace, known as \\"KRATON,\\" home to the Yogyakarta King","Then, you will head to the Pines Forest, ideal for amateur and professional photographers","We will provide lunch for you at a local restaurant"]', '/images/explor-1.jpg', 3);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 5, 'Day 5.', 'Jogyakarta', 'You will have breakfast at the hotel and check out before visiting Gamplong Studio Alam, where famous Indonesian filmmaker Hanung Bramantyo filmed several movies. After lunch at a local restaurant, you will continue to Yogyakarta International Airport to end your tour.', '["You will have breakfast at the hotel and check out before visiting Gamplong Studio Alam, where famous Indonesian filmmaker Hanung Bramantyo filmed several movies","After lunch at a local restaurant, you will continue to Yogyakarta International Airport to end your tour"]', '/images/explor-1.jpg', 4);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Transfer as flight schedu', 'Transfer as flight schedule', 'Check', 0);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Accommodation based on tw', 'Accommodation based on twin/triple share', 'Check', 1);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Meals as program', 'Meals as program', 'Check', 2);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Private air-conditioned c', 'Private air-conditioned car/ Bus transport for a group', 'Check', 3);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'An additional charge of MYR 120 per pax for an optional tour of the Prambanan temple', 0);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Personal expenses such as drinks at meals, Insurance, Air tickets, Upgrade meals, visa fees', 1);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Compulsory Tipping – MYR 15/pax/day for FIT booking and MYR 10/pax/day for group booking', 2);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, '/images/indonesia/12-600x400.jpg', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 'https://images.pexels.com/photos/2412711/pexels-photo-2412711.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 1);

