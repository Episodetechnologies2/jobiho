-- Laos Tour Packages Schema and Data
-- This script creates tables if they do not exist and inserts/updates the Laos packages.

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

-- Package 1: Vientiane
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  'vientiane', 'Vientiane', 'Laos', 'Southeast Asia', 
  'The quiet capital on the Mekong, known for golden stupas and French-Lao heritage', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-6.jpg', 'Vientiane, the capital of Laos, sits on a bend of the Mekong River bordering Thailand. It retains a peaceful, slow-paced charm unlike other regional capitals, featuring wide French-designed boulevards alongside gilded Buddhist temples. Key sights include the massive golden Pha That Luang stupa, the Patuxai victory monument resembling a Parisian Arc de Triomphe decorated with Lao motifs, and bustling night markets overlooking the Mekong.', 
  102.6, 17.97, 'Spiritual', 'bg-violet-500', 
  'Quiet riverside capital, golden stupas, and French colonial charm.', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-6.jpg', 
  'published', '', '3 Days', 
  'Vientiane', 'Laotian Kip (LAK)', 'Tropical monsoon — hot year-round, wet May–October', 'November–February (cool, dry season)', 
  'Lao, French, English', 'ICT (UTC+7)', 'Right'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = 'vientiane');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 1, 'Arrive Vientiane, Transfer to Hotel', 'Vientiane', 'Arrive at Wattay International Airport in Vientiane, meet and greet with your driver, and transfer to your hotel. Afternoon at leisure.', '["Airport pickup and hotel transfer","Check-in and rest at hotel","Explore Vientiane riverside walk at sunset"]', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-6.jpg', 0);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 2, 'Vientiane City Tour', 'Vientiane', 'Explore Vientiane''s landmarks, including the gold-covered Pha That Luang, Wat Si Saket with its thousands of Buddha statues, Haw Phra Kaew, and climb Patuxai Monument for panoramic views.', '["Marvel at golden Pha That Luang","Explore thousands of Buddha icons at Wat Si Saket","Visit the former royal temple Haw Phra Kaew","Climb Patuxai monument"]', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-4.jpg', 1);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 3, 'Morning Market & Departure', 'Vientiane', 'Visit the Talat Sao morning market for local handicrafts, textiles, and foods. Transfer to airport for departure.', '["Bargain for local textiles at Talat Sao market","Transfer to Vientiane Airport for departure"]', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-5.jpg', 2);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Golden Stupa Tour', 'Walk around the sacred gold-leafed Pha That Luang, the national symbol of Laos.', 'Compass', 0);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Mekong Sunset Walk', 'Join locals for an evening stroll, aerobics, and street food along the Mekong River park.', 'Sunset', 1);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Tap water is not drinkable; always consume bottled or filtered water.', 0);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Remove your shoes before entering Lao temples and dress modestly.', 1);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Lao Kip is the main currency, but Thai Baht and USD are widely accepted.', 2);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-6.jpg', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-4.jpg', 1);

-- Package 2: Luang Prabang
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  'luang-prabang', 'Luang Prabang', 'Laos', 'Southeast Asia', 
  'UNESCO ancient capital of royal temples, monk almsgiving, and Kuang Si waterfalls', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-1.jpg', 'Luang Prabang, the former royal capital of Laos, is a UNESCO World Heritage site nestled in a valley where the Mekong and Nam Khan rivers meet. Renowned for its outstandingly preserved architectural fusion of traditional Lao wooden houses and French provincial brick structures, the town is the spiritual heart of Laos. Witness the daily sunrise saffron-robed monk almsgiving (Tak Bat), climb Mount Phousi, visit the historic Wat Xieng Thong, and swim in the multi-tiered turquoise pools of Kuang Si Waterfall.', 
  102.13, 19.89, 'Historical', 'bg-amber-600', 
  'UNESCO town of old French villas, active temples, and turquoise jungle waterfalls.', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-1.jpg', 
  'published', '', '3 Days', 
  'Vientiane', 'Laotian Kip (LAK)', 'Tropical monsoon — hot year-round, wet May–October', 'November–February (cool, dry season)', 
  'Lao, English', 'ICT (UTC+7)', 'Right'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = 'luang-prabang');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 1, 'Luang Prabang Arrival & Sunset Mount Phousi', 'Luang Prabang', 'Arrive in Luang Prabang, meet your driver, and transfer to hotel. In the late afternoon, climb 328 steps up Mount Phousi for a panoramic sunset view over the town and Mekong River. Explore the Night Market.', '["Airport pickup and check-in","Climb Mount Phousi for golden sunset views","Browse traditional crafts at the Night Market"]', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-1.jpg', 0);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 2, 'Almsgiving & Wat Xieng Thong & Kuang Si Waterfall', 'Luang Prabang', 'Wake up early to witness Tak Bat (monk almsgiving). Visit the exquisite Wat Xieng Thong temple with its sweeping roofs. In the afternoon, drive to the breathtaking Kuang Si Waterfall to swim in the natural turquoise pools.', '["Observe early morning Buddhist almsgiving","Visit Wat Xieng Thong temple heritage","Swim in turquoise pools of Kuang Si Waterfall"]', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-7.jpg', 1);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 3, 'Pak Ou Caves & Departure', 'Luang Prabang', 'Take a scenic longtail boat cruise upstream along the Mekong to visit Pak Ou Caves, crammed with thousands of Buddha icons. Transfer to airport for departure.', '["Mekong River longtail boat cruise","Explore Pak Ou Caves filled with Buddha statues","Transfer to Luang Prabang Airport"]', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-2.jpg', 2);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Tak Bat Almsgiving', 'Participate or observe silently at dawn as hundreds of saffron-robed monks collect food donations.', 'Compass', 0);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Waterfall Swimming', 'Cool off in the multi-tiered cascades of Kuang Si, surrounded by dense jungle.', 'Droplets', 1);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Keep a respectful distance and avoid camera flashes during the morning almsgiving ceremony.', 0);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Bring swimwear and a towel for the pools at Kuang Si Waterfall.', 1);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-1.jpg', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-7.jpg', 1);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-2.jpg', 2);

-- Package 3: Vang Vieng
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  'vang-vieng', 'Vang Vieng', 'Laos', 'Southeast Asia', 
  'Stunning karst mountains, blue lagoons, and tubing down the Nam Song river', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-3.jpg', 'Vang Vieng is an adventure hub in central Laos, surrounded by dramatic limestone karst landscapes, natural caves, and deep blue springs. Originally known as a party destination, Vang Vieng has matured into a premium outdoor adventure sanctuary offering rock climbing, hot air ballooning, kayaking, and cave exploring, while retaining its laid-back riverside charm.', 
  102.45, 18.93, 'Adventure', 'bg-orange-500', 
  'Dramatic karst mountain landscape, clear blue lagoons, and tubing.', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-3.jpg', 
  'published', '', '2 Days', 
  'Vientiane', 'Laotian Kip (LAK)', 'Tropical monsoon — hot year-round, wet May–October', 'November–February (cool, dry season)', 
  'Lao, English', 'ICT (UTC+7)', 'Right'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = 'vang-vieng');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 1, 'Arrive Vang Vieng & Nam Song Sunset Cruise', 'Vang Vieng', 'Arrive in Vang Vieng from Vientiane or Luang Prabang. Check in to your hotel. Enjoy a relaxing longtail boat ride along the Nam Song River at sunset, flanked by towering karst mountains.', '["Scenic transfer to Vang Vieng"," Nam Song River longtail boat cruise","Sunset views of karst mountains"]', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-3.jpg', 0);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 2, 'Blue Lagoon & Tham Phu Kham Cave', 'Vang Vieng', 'Explore the famous Blue Lagoon, jump into the crystal waters, and hike up to the mystical Tham Phu Kham Cave to see the golden reclining Buddha inside.', '["Swim in the crystal blue lagoon","Hike to Tham Phu Kham golden Buddha cave","Cross the iconic orange bridge"]', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-8.jpg', 1);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Lagoon Jumping', 'Swing from rope swings into the cold blue waters of Vang Vieng''s natural springs.', 'Droplets', 0);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Cave Kayaking', 'Navigate tunnels and waters inside the water-filled Tham Nam cave on an inflatable tube.', 'Compass', 1);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Rent a bicycle or buggy to explore the countryside dirt tracks surrounding Vang Vieng.', 0);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Wear life jackets when tubing or kayaking on the Nam Song River.', 1);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-3.jpg', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-8.jpg', 1);

-- Package 4: Xieng Khuang
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  'xieng-khuang', 'Xieng Khuang', 'Laos', 'Southeast Asia', 
  'Gate to the mysterious Plain of Jars, an archaeological wonder of giant stone vessels', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-4.jpg', 'Xieng Khuang province, centered around Phonsavan town, is a highland region famous for the Plain of Jars — a UNESCO World Heritage site consisting of thousands of giant stone jars scattered across the valleys. Dating back to the Iron Age, these mysterious vessels are believed to have been used in ancient burial rituals. Xieng Khuang also holds deep historical significance as one of the most heavily bombed regions during the Secret War, today standing as a testament to resilience.', 
  103.22, 19.45, 'Historical', 'bg-amber-600', 
  'UNESCO Plain of Jars stone archaeological sites and Secret War history.', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-4.jpg', 
  'published', '', '2 Days', 
  'Vientiane', 'Laotian Kip (LAK)', 'Cooler highland climate, tropical monsoon', 'November–February (dry and cool)', 
  'Lao, English', 'ICT (UTC+7)', 'Right'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = 'xieng-khuang');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 1, 'Arrive Phonsavan & Plain of Jars Site 1', 'Xieng Khuang', 'Arrive in Phonsavan, transfer to hotel. Visit Site 1 of the Plain of Jars, the largest and most famous site, containing over 300 giant stone vessels.', '["Arrive in highland Phonsavan","Explore Plain of Jars Site 1 archeology","See craters left by Secret War bombs"]', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-4.jpg', 0);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 2, 'Plain of Jars Site 2 & Site 3 & MAG Center', 'Xieng Khuang', 'Explore the scenic forest-enveloped Site 2 and Site 3 jars. In the afternoon, visit the Mines Advisory Group (MAG) visitor center to learn about UXO clearance work in Laos.', '["Trek to scenic forest Site 2 and Site 3","Visit MAG UXO center to support clearing operations","Discover local Hmong village crafts"]', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-5.jpg', 1);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Stone Jar Hiking', 'Walk through pine-forested hills to locate ancient stone jars of varying shapes and sizes.', 'Compass', 0);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'MAG Center Visit', 'Learn about the tragicSecret War history and humanitarian demining efforts in Laos.', 'Info', 1);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Always stay on marked paths at Plain of Jars sites, as clearance of UXO is still ongoing in surrounding areas.', 0);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Xieng Khuang is elevated, so it can get chilly; bring a light jacket or sweater.', 1);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-4.jpg', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-5.jpg', 1);

-- Package 5: 6N/7D - Amazing Laos for Honeymooners
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  'laos-1', '6N/7D - Amazing Laos for Honeymooners', 'Laos', 'Southeast Asia', 
  'Explore 6N/7D - Amazing Laos for Honeymooners with daily itineraries, local guides, and highlights', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-1.jpg', 'Experience the beauty of Laos with our special package: 6N/7D - Amazing Laos for Honeymooners. Discover rich culture, stunning scenery, and unforgettable experiences on this day-by-day guided tour.', 
  102.13, 19.89, 'Luxury', 'bg-indigo-500', 
  'Custom package for 6N/7D - Amazing Laos for Honeymooners including accommodation, tours, and transfers.', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-1.jpg', 
  'published', '', '7 Days', 
  'Vientiane', 'Laotian Kip (LAK)', 'Tropical monsoon — hot year-round, wet May–October', 'November–February (cool, dry season)', 
  'Lao, English', 'ICT (UTC+7)', 'Right'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = 'laos-1');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 1, 'VIENTIANE ARRIVAL – CITY TOUR', 'Luang Prabang', 'On arrival in Vientiane, pick up your local tour guide from Wattay airport, transfer to your hotel, and check in at 14h00 (standard check in time, early check in depending on availability).
This afternoon, we will begin the city tour from the city’s oldest temple. Dating back to 1818 (Wat Sisaket), this is the most significant heritage temple currently standing in Laos. This temple houses thousands of Buddha paintings from all over the world, long-lost architectural styles, sculptures, and paintings.
On the way to the famed and sacred structure of that Luang stupa, we will stop to take some photos of the impressive Patuxay Monument (Vientiane’s own Arc de Triumph).
After that, we will enjoy sunset by boat on the Mekong river. After that, continue to visit the former royal temple of Lao monarchy, Wat Prakeo (originally built in 1565 and home of the Emerald Buddha image).
On the perimeter wall of the temple, we will see Buddhist sculptures from 6th-9th centuries (Dvaravati style stone Buddha) and several standing & sitting Buddhas.', '["On arrival in Vientiane, pick up your local tour guide from Wattay airport, transfer to your hotel, and check in at 14h00 (standard check in time, early check in depending on availability).\\nThis afternoon, we will begin the city tour from the city’s oldest temple","Dating back to 1818 (Wat Sisaket), this is the most significant heritage temple currently standing in Laos","This temple houses thousands of Buddha paintings from all over the world, long-lost architectural styles, sculptures, and paintings.\\nOn the way to the famed and sacred structure of that Luang stupa, we will stop to take some photos of the impressive Patuxay Monument (Vientiane’s own Arc de Triumph).\\nAfter that, we will enjoy sunset by boat on the Mekong river"]', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-1.jpg', 0);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 2, 'VIENTIANE – BUDDHA PARK – VANG VIENG (B)', 'Luang Prabang', 'After breakfast and check-in at the hotel, you can visit the Buddha Park, where you can see hundreds of different Buddhist and Hindu sculptures imported from India.
From the Buddha Park, you can leave for Vang Vieng.
On the way, you can visit KM52 hmong market and ban tha heu (dry fish) village.
When you arrive in Vang vieng, you can check in at the hotel and rest for the rest of your day.
You can spend the night in vang vieng.', '["After breakfast and check-in at the hotel, you can visit the Buddha Park, where you can see hundreds of different Buddhist and Hindu sculptures imported from India.\\nFrom the Buddha Park, you can leave for Vang Vieng.\\nOn the way, you can visit KM52 hmong market and ban tha heu (dry fish) village.\\nWhen you arrive in Vang vieng, you can check in at the hotel and rest for the rest of your day.\\nYou can spend the night in vang vieng"]', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-1.jpg', 1);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 3, 'VANG VIENG SIGHTSEEING (B)', 'Luang Prabang', 'After breakfast, we go to the local market before heading to Tham Phukham Cave. After that, we go swimming at Blue Lagoon. In the afternoon, we go on a long tail boat ride on Nam Song river for sightseeing. We also stop at Organic farm to taste mulberry tea. After the visit, we go back to the hotel and spend the night in Vang vieng.', '["After breakfast, we go to the local market before heading to Tham Phukham Cave","After that, we go swimming at Blue Lagoon","In the afternoon, we go on a long tail boat ride on Nam Song river for sightseeing"]', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-1.jpg', 2);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 4, 'VANG VIENG – LUANG PRABANG (B)', 'Luang Prabang', 'Following breakfast and check-out at the hotel, we will take a drive to visit the Tham Yang Cave before starting the uphill trek to Luang prabang. During the hike, we''ll make several stops to visit the local hill tribe settlements and take pictures of the stunning scenery. Upon arrival, we''ll stay at the hotel for the remainder of the day and then spend the night in Luang pprabang.', '["Following breakfast and check-out at the hotel, we will take a drive to visit the Tham Yang Cave before starting the uphill trek to Luang prabang","During the hike, we''ll make several stops to visit the local hill tribe settlements and take pictures of the stunning scenery","Upon arrival, we''ll stay at the hotel for the remainder of the day and then spend the night in Luang pprabang"]', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-1.jpg', 3);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 5, 'LUANG PRABANG CITY TOUR – PAK OU CAVES (B)', 'Luang Prabang', 'After breakfast, we visit the National Museum of the former Royal Palace, where we can see a beautiful collection of artifacts representing the richness of Laotian culture from the time of the early kings to the time of the last sovereign. From there, we walk by many beautiful temples, and traditional houses, until we reach the grand Wat Xiengthong with its low-roofed buildings representing the classic Laotian style.
In the afternoon, we embark on a cruise to visit the mystery Pak Ou Caves, where we will take in the panoramic views of the peaceful countryside as we cruise along the Mekong river. On the way, we will stop at Ban Xang Hai, where rice wine is made, and on arrival, we will visit two linked caves filled with thousands of gold-plated Buddha statues of different shapes and sizes, left by pilgrims.
At the end of the day, we will walk up the 328 steps leading to the summit of Phousi Hill, where we will have the best view of the sunset.
We will spend the night in Luang prabang.
Ban Xang Khong is a village famous for silk-hand-weaving and the traditional Saa paper', '["After breakfast, we visit the National Museum of the former Royal Palace, where we can see a beautiful collection of artifacts representing the richness of Laotian culture from the time of the early kings to the time of the last sovereign","From there, we walk by many beautiful temples, and traditional houses, until we reach the grand Wat Xiengthong with its low-roofed buildings representing the classic Laotian style.\\nIn the afternoon, we embark on a cruise to visit the mystery Pak Ou Caves, where we will take in the panoramic views of the peaceful countryside as we cruise along the Mekong river","On the way, we will stop at Ban Xang Hai, where rice wine is made, and on arrival, we will visit two linked caves filled with thousands of gold-plated Buddha statues of different shapes and sizes, left by pilgrims.\\nAt the end of the day, we will walk up the 328 steps leading to the summit of Phousi Hill, where we will have the best view of the sunset.\\nWe will spend the night in Luang prabang.\\nBan Xang Khong is a village famous for silk-hand-weaving and the traditional Saa paper"]', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-1.jpg', 4);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 6, 'LUANG PRABANG CITY TOUR – KHOANGSI WATERFALL (B)', 'Luang Prabang', 'An optional early start will give us the fantastic opportunity to participate in the daily morning rituals of saffron-clad monks collecting offerings of Alms (ubiquitous sticky rice) from the faithful residents. This tradition is very unique in Laos, being the only Buddhist nation still preserving the procession. Continue to visit the Morning Market, where we will see such diverse offerings as dried buffalo skin, local tea and saltpeter among the chickens, vegetables and hill-tribe weavings.
We then return to the hotel for breakfast and a short rest before we visit Wat Visoun, the holiest temple of the city, which was entirely rebuilt in 1887 after being destroyed by the invading Black Flags from Southern China. In the courtyard of Wat Visoun stands the Watermelon Stupa shaped like the fruit from which it takes its name. Continue visit to The Traditional Arts & Ethnology Centre – the first exhibition space and fair trade store dedicated to the collection, preservation, interpretation, and presentation of Laos’ traditional arts and lifestyles.
This afternoon, we transfer to visit Khouang Si waterfall. On the way, stop to visit Lao ethnic minority groups at Ban Ouay Village, Ban Ou village and Ban Thapene Village. On arrival at the waterfalls, take a leisure trek through the national park, passing by the Asian bear rescue center and many smaller waterfalls. Swimming in the cool and turquoise water is possible. Return to Luang Prabang and relax for the rest of the day. Overnight in Luang Prabang.', '["An optional early start will give us the fantastic opportunity to participate in the daily morning rituals of saffron-clad monks collecting offerings of Alms (ubiquitous sticky rice) from the faithful residents","This tradition is very unique in Laos, being the only Buddhist nation still preserving the procession","Continue to visit the Morning Market, where we will see such diverse offerings as dried buffalo skin, local tea and saltpeter among the chickens, vegetables and hill-tribe weavings.\\nWe then return to the hotel for breakfast and a short rest before we visit Wat Visoun, the holiest temple of the city, which was entirely rebuilt in 1887 after being destroyed by the invading Black Flags from Southern China"]', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-1.jpg', 5);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 7, 'DEPARTURE (B)', 'Luang Prabang', 'After breakfast, have some time to yourself before you check out your hotel and get a transfer to the airport to catch your flight. The hotel check out time is 12:00 pm (late check out on availability).', '["After breakfast, have some time to yourself before you check out your hotel and get a transfer to the airport to catch your flight","The hotel check out time is 12:00 pm (late check out on availability)"]', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-1.jpg', 6);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'English-speaking tour gui', 'English-speaking tour guides', 'Check', 0);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Land transportation by ai', 'Land transportation by air-con vehicles', 'Check', 1);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Accommodation based on Tw', 'Accommodation based on Twin-shared room with breakfast', 'Check', 2);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Meals as mentioned in the', 'Meals as mentioned in the program (no drinks)', 'Check', 3);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Airfare (international and domestic) and airport tax ( on request )', 0);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Visa services (Visa approval letter/Visa stamp fee/ Visa fast track on request)', 1);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Early check-in/late check-out/ room upgrade surcharge', 2);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Other meals, Drinks, and personal expenses (phone call, laundry, tipping etc.)', 3);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Any services not mentioned in the program', 4);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Optional Tours', 5);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-1.jpg', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 'https://images.pexels.com/photos/2412711/pexels-photo-2412711.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 1);

-- Package 6: 4N/5D - Highlight of Luang Prabang & Vientiane
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  'laos-6', '4N/5D - Highlight of Luang Prabang & Vientiane', 'Laos', 'Southeast Asia', 
  'Explore 4N/5D - Highlight of Luang Prabang & Vientiane with daily itineraries, local guides, and highlights', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-6.jpg', 'Experience the beauty of Laos with our special package: 4N/5D - Highlight of Luang Prabang & Vientiane. Discover rich culture, stunning scenery, and unforgettable experiences on this day-by-day guided tour.', 
  102.6, 17.97, 'Spiritual', 'bg-violet-500', 
  'Custom package for 4N/5D - Highlight of Luang Prabang & Vientiane including accommodation, tours, and transfers.', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-6.jpg', 
  'published', '', '5 Days', 
  'Vientiane', 'Laotian Kip (LAK)', 'Tropical monsoon — hot year-round, wet May–October', 'November–February (cool, dry season)', 
  'Lao, English', 'ICT (UTC+7)', 'Right'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = 'laos-6');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 1, 'LUANG PRABANG ARRIVAL - LUANG PRABANG CITY TOUR', 'Vientiane', 'Luang Prabang is one of the best preserved traditional cities in Southeast Asia. It is one of the most peaceful and charming places in Laos, with beautiful natural scenery and cultural attractions.
After a brief rest, we visit Wat Visoun stupa and Wat Aham shrine, Wat Mai. Then, we climb Mount Phousi to explore the sacred, golden stupa and enjoy the sunset view of the town and the Mekong river.
From Mount Phousi, we go to the Night Market where you can buy handmade textiles from the hill tribe and the local people around the town.
You can spend the night in Luang prabang. Standard check in is 14:00, early check in depends on availability of the hotel.', '["Luang Prabang is one of the best preserved traditional cities in Southeast Asia","It is one of the most peaceful and charming places in Laos, with beautiful natural scenery and cultural attractions.\\nAfter a brief rest, we visit Wat Visoun stupa and Wat Aham shrine, Wat Mai","Then, we climb Mount Phousi to explore the sacred, golden stupa and enjoy the sunset view of the town and the Mekong river.\\nFrom Mount Phousi, we go to the Night Market where you can buy handmade textiles from the hill tribe and the local people around the town.\\nYou can spend the night in Luang prabang"]', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-6.jpg', 0);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 2, 'LUANG PRABANG - CITY TOUR - PAK OU CAVE (B)', 'Vientiane', 'After breakfast, we visit The National Museum at the former Royal Palace, which displays a lovely collection of the artifacts reflecting the richness of Lao culture dating from the days of the early kings right through to the last sovereign. Continue to explore some of the major sights in this faboulous city, including the city’s oldest temple of Wat Sene, the magnificent Wat Xiengthong, its exterior architecture is remarkable with decorated guilded stuccoes and doorways, a “tree of life” mosaic pattern set in coloured glass on the back wall and its three tiered roofs sweeping low to the ground representing classical Laotian architecture.
Afternoon we then embark on a cruise upstream on the Mekong River, which also gives us a breathtaking view of the tranquil countryside as well as explore the mysterious Pak Ou Caves, two linked caves crammed with thousands of gold lacquered Buddha statues of various shapes and sizes left by pilgrims.  Along the way, we stop at the village of Ban Xanghai, where they make the local rice wine. On return, we take a short drive to Ban Xangkhong, a village well known for its silk weavings and for its Saa (jute) Papermaking and Ban Phanom, a small village known for its hand weaving. Overnight in Luang Prabang.', '["After breakfast, we visit The National Museum at the former Royal Palace, which displays a lovely collection of the artifacts reflecting the richness of Lao culture dating from the days of the early kings right through to the last sovereign","Continue to explore some of the major sights in this faboulous city, including the city’s oldest temple of Wat Sene, the magnificent Wat Xiengthong, its exterior architecture is remarkable with decorated guilded stuccoes and doorways, a “tree of life” mosaic pattern set in coloured glass on the back wall and its three tiered roofs sweeping low to the ground representing classical Laotian architecture.\\nAfternoon we then embark on a cruise upstream on the Mekong River, which also gives us a breathtaking view of the tranquil countryside as well as explore the mysterious Pak Ou Caves, two linked caves crammed with thousands of gold lacquered Buddha statues of various shapes and sizes left by pilgrims","Along the way, we stop at the village of Ban Xanghai, where they make the local rice wine"]', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-6.jpg', 1);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 3, 'LUANG PRABANG - KUANGSI WATERFALL - VIENTIANE BY FLIGHT (B)', 'Vientiane', 'With an optional early start, you have the amazing chance to take part in the morning rituals where saffron-dressed monks collect Alms (unlimited sticky rice) from local inhabitants. Laos is the only Buddhist nation in the world to still have this tradition.
After breakfast at your hotel, transfer to Khouangsi waterfall, where you can cool down with a refreshing pool or stroll through the forest trails.
From Khouangsi, head to the airport to catch your flight to the capital of Laos, Vientiane. Upon arrival, you will be greeted by our tour guide, and then transfer to your hotel for check in, where you will spend the night.', '["With an optional early start, you have the amazing chance to take part in the morning rituals where saffron-dressed monks collect Alms (unlimited sticky rice) from local inhabitants","Laos is the only Buddhist nation in the world to still have this tradition.\\nAfter breakfast at your hotel, transfer to Khouangsi waterfall, where you can cool down with a refreshing pool or stroll through the forest trails.\\nFrom Khouangsi, head to the airport to catch your flight to the capital of Laos, Vientiane","Upon arrival, you will be greeted by our tour guide, and then transfer to your hotel for check in, where you will spend the night"]', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-6.jpg', 2);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 4, 'VIENTIANE FULL DAY CITY TOUR (B)', 'Vientiane', 'After breakfast we ride 306km uphill on a mountain rim surrounded by stunning natural scenery to the historical site of Xieng khuang which was destroyed by U.S. bombing from 1964 to 1973. Once we arrive, we will be transferred to visit the plain of jars which is an archaeological site with hundreds of big stone jars scattered on the plains. If we have time, we will visit the old capital Muang khuang and nearby villages where Hmong hill tribesmen live with a colorful history and interesting local culture. We will spend an overnight in xiang khuang.', '["After breakfast we ride 306km uphill on a mountain rim surrounded by stunning natural scenery to the historical site of Xieng khuang which was destroyed by U.S","bombing from 1964 to 1973","Once we arrive, we will be transferred to visit the plain of jars which is an archaeological site with hundreds of big stone jars scattered on the plains"]', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-6.jpg', 3);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 5, 'DEPARTURE (B)', 'Vientiane', 'Breakfast at the hotel and check-out. Free time at your own pace until your transfer to the airport for your flight. End of service.', '["Breakfast at the hotel and check-out","Free time at your own pace until your transfer to the airport for your flight","End of service"]', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-6.jpg', 4);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'English-speaking tour gui', 'English-speaking tour guides', 'Check', 0);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Land transportation by ai', 'Land transportation by air-con vehicles', 'Check', 1);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Accommodation based on Tw', 'Accommodation based on Twin-shared room with breakfast', 'Check', 2);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Meals as mentioned in the', 'Meals as mentioned in the program (no drinks)', 'Check', 3);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Airfare (international and domestic) and airport tax ( on request )', 0);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Visa services (Visa approval letter/Visa stamp fee/ Visa fast track on request)', 1);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Early check-in/late check-out/ room upgrade surcharge', 2);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Other meals, Drinks, and personal expenses (phone call, laundry, tipping etc.)', 3);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Any services not mentioned in the program', 4);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Optional Tours', 5);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-6.jpg', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 'https://images.pexels.com/photos/2412711/pexels-photo-2412711.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 1);

-- Package 7: 5N/6D - Mekong Voyage to Luang Prabang
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  'laos-2', '5N/6D - Mekong Voyage to Luang Prabang', 'Laos', 'Southeast Asia', 
  'Explore 5N/6D - Mekong Voyage to Luang Prabang with daily itineraries, local guides, and highlights', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-2.jpg', 'Experience the beauty of Laos with our special package: 5N/6D - Mekong Voyage to Luang Prabang. Discover rich culture, stunning scenery, and unforgettable experiences on this day-by-day guided tour.', 
  102.13, 19.89, 'Nature', 'bg-teal-500', 
  'Custom package for 5N/6D - Mekong Voyage to Luang Prabang including accommodation, tours, and transfers.', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-2.jpg', 
  'published', '', '6 Days', 
  'Vientiane', 'Laotian Kip (LAK)', 'Tropical monsoon — hot year-round, wet May–October', 'November–February (cool, dry season)', 
  'Lao, English', 'ICT (UTC+7)', 'Right'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = 'laos-2');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 1, 'HOUEIXAI – PAKBENG (L)', 'Luang Prabang', 'When you arrive at the border you will meet our guide and then get on the local boat that will take you down the river of the Mekong to the town of Pakbeng
On the way, you will have one stop to see the life of the people living in the villages along the river and to visit minority ethnic communities; your lunch will be served on board and will flow slowly down the river.
You will arrive at Pakbeng just before sunset. You will spend the night at Pakbeng', '["When you arrive at the border you will meet our guide and then get on the local boat that will take you down the river of the Mekong to the town of Pakbeng\\nOn the way, you will have one stop to see the life of the people living in the villages along the river and to visit minority ethnic communities; your lunch will be served on board and will flow slowly down the river.\\nYou will arrive at Pakbeng just before sunset","You will spend the night at Pakbeng"]', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-2.jpg', 0);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 2, 'PAKBENG – PAK OU CAVE – LUANG PRABANG (B/L)', 'Luang Prabang', 'After breakfast (optional: Walk to Pakbeng Market, where people from nearby minority villages trade their goods), get on the boat for the next stage of the boat ride. Make a brief stop to explore Hmong village before lunch on board.
On the way to Pak Ou village, at the mouth of Nam Ou River, you will visit the Pak Ou Caves, also known as the Cave of a thousand Buddhas. You will also make a brief stop to watch the traditional process of making local rice alcohol.
Finally, you will arrive before the time of sunset. You will spend the night in Luang prabang.', '["After breakfast (optional: Walk to Pakbeng Market, where people from nearby minority villages trade their goods), get on the boat for the next stage of the boat ride","Make a brief stop to explore Hmong village before lunch on board.\\nOn the way to Pak Ou village, at the mouth of Nam Ou River, you will visit the Pak Ou Caves, also known as the Cave of a thousand Buddhas","You will also make a brief stop to watch the traditional process of making local rice alcohol.\\nFinally, you will arrive before the time of sunset"]', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-2.jpg', 1);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 3, 'LUANG PRABANG – CITY TOUR – KHOUANGSI WATER FALL (B)', 'Luang Prabang', 'After breakfast, we enjoy a short-guided tour visit the National Museum at the former Royal Palace displays a lovely collection of the artifacts reflecting the richness of Lao culture dating from the days of the early kings right through the last sovereign; then visit Wat Visoun, the holiest temple of the city, which was entirely rebuilt in 1887 after being destroyed by the invading Black Flags from Southern China. In the courtyard of Wat Visoun stands the Watermelon Stupa shaped like the fruit from which it takes its name. Continue past Wat Aham, which was first built in the 1500s and we then to Khouangsi waterfall. On the way, you can stop to visit to the Lao ethnic minority groups – Ban Ouay Village, Ban Ou village and Ban Thapene Village. Once at the waterfalls, take a leisurely hike through the national park towards the Khouangsi waterfall and pass by the Asian bear rescue center. You will enjoy feeling the mist of the cool, turquoise waters of the different waterfalls. Swimming in the refreshing waters is possible. Transfer back to Luang Prabang for climb up 328 steps of Mount Phousi for an enjoyable exploration of the sacred, gilded stupa as well as a beautiful sunset view of the city and the Mekong River. We then will explore the Night Market, where you can find a lovely selection of handmade textiles made by the hill tribe and local people surrounding Luang Prabang. Overnight in Luang Prabang.', '["After breakfast, we enjoy a short-guided tour visit the National Museum at the former Royal Palace displays a lovely collection of the artifacts reflecting the richness of Lao culture dating from the days of the early kings right through the last sovereign; then visit Wat Visoun, the holiest temple of the city, which was entirely rebuilt in 1887 after being destroyed by the invading Black Flags from Southern China","In the courtyard of Wat Visoun stands the Watermelon Stupa shaped like the fruit from which it takes its name","Continue past Wat Aham, which was first built in the 1500s and we then to Khouangsi waterfall"]', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-2.jpg', 2);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 4, 'LUANG PRABANG – LIVING LAND FARM (B/L)', 'Luang Prabang', 'After breakfast, you will spend the morning at a community-based living rice farm in an idyllic countryside surrounded by mountains and surrounded by rice paddies. Try your hand at a few of the activities of a farmer’s life, or just enjoy the view from the comfort of one of our Lao rice house balconies, which overlooks rice terraces and the organic vegetable farm. Everyone can join in the activities, and there are plenty of photo opportunities.
While you are there, you can also spend some time visiting local handicraft workshops, such as bamboo weaving and blacksmith work, or sugar cane processing.
Finally, you can join a tour of our organic garden, which includes an explanation on the use of natural herbs in traditional medicine.
After lunch, you can enjoy a free afternoon at leisure.
You can also spend the night in Luang prabang.', '["After breakfast, you will spend the morning at a community-based living rice farm in an idyllic countryside surrounded by mountains and surrounded by rice paddies","Try your hand at a few of the activities of a farmer’s life, or just enjoy the view from the comfort of one of our Lao rice house balconies, which overlooks rice terraces and the organic vegetable farm","Everyone can join in the activities, and there are plenty of photo opportunities.\\nWhile you are there, you can also spend some time visiting local handicraft workshops, such as bamboo weaving and blacksmith work, or sugar cane processing.\\nFinally, you can join a tour of our organic garden, which includes an explanation on the use of natural herbs in traditional medicine.\\nAfter lunch, you can enjoy a free afternoon at leisure.\\nYou can also spend the night in Luang prabang"]', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-2.jpg', 3);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 5, 'LUANG PRABANG – MAHOUT EXPERIENCE AND BATHING (B/L)', 'Luang Prabang', 'After breakfast, you’ll be picked up from the hotel by your guide. Today you’ll learn how to become a mahout, and then you’ll get ready to jump in the Nam Khan and bathe your personal elephant.
Upon arrival at the elephant village camp, we’ll have a brief briefing on elephants. Then you’ll ride an impressive 3 km elephant on the back (no elephant seat, howdah, or on the neck).
Then you’ll receive a basic training as a mahout on how to manage an elephant.
You’ll have lunch at the Elephant Camp restaurant, and afterwards you’ll take your elephant down the Nam Khan for an exciting and once-in-a-lifetime bathing experience.
Once you’re on board the traditional long boat boat to Tad Sae Falls, you can relax, put your feet in the water, or take a dip in the clear cool water.
Late afternoon, you will be transferred back to the hotel, and you’ll spend the night at the hotel.', '["After breakfast, you’ll be picked up from the hotel by your guide","Today you’ll learn how to become a mahout, and then you’ll get ready to jump in the Nam Khan and bathe your personal elephant.\\nUpon arrival at the elephant village camp, we’ll have a brief briefing on elephants","Then you’ll ride an impressive 3 km elephant on the back (no elephant seat, howdah, or on the neck).\\nThen you’ll receive a basic training as a mahout on how to manage an elephant.\\nYou’ll have lunch at the Elephant Camp restaurant, and afterwards you’ll take your elephant down the Nam Khan for an exciting and once-in-a-lifetime bathing experience.\\nOnce you’re on board the traditional long boat boat to Tad Sae Falls, you can relax, put your feet in the water, or take a dip in the clear cool water.\\nLate afternoon, you will be transferred back to the hotel, and you’ll spend the night at the hotel"]', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-2.jpg', 4);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 6, 'DEPARTURE (B)', 'Luang Prabang', 'After breakfast, free time until your next transfer to the airport for your onward flight.
End of service', '["After breakfast, free time until your next transfer to the airport for your onward flight.\\nEnd of service"]', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-2.jpg', 5);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'English-speaking tour gui', 'English-speaking tour guides', 'Check', 0);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Land transportation by ai', 'Land transportation by air-con vehicles', 'Check', 1);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Accommodation based on Tw', 'Accommodation based on Twin-shared room with breakfast', 'Check', 2);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Meals as mentioned in the', 'Meals as mentioned in the program (no drinks)', 'Check', 3);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Airfare (international and domestic) and airport tax ( on request )', 0);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Visa services (Visa approval letter/Visa stamp fee/ Visa fast track on request)', 1);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Early check-in/late check-out/ room upgrade surcharge', 2);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Other meals, Drinks, and personal expenses (phone call, laundry, tipping etc.)', 3);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Any services not mentioned in the program', 4);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Optional Tours', 5);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-2.jpg', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 'https://images.pexels.com/photos/2412711/pexels-photo-2412711.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 1);

-- Package 8: 4N/5D - Best of Luang Prabang
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  'laos-7', '4N/5D - Best of Luang Prabang', 'Laos', 'Southeast Asia', 
  'Explore 4N/5D - Best of Luang Prabang with daily itineraries, local guides, and highlights', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-7.jpg', 'Experience the beauty of Laos with our special package: 4N/5D - Best of Luang Prabang. Discover rich culture, stunning scenery, and unforgettable experiences on this day-by-day guided tour.', 
  102.13, 19.89, 'Historical', 'bg-amber-600', 
  'Custom package for 4N/5D - Best of Luang Prabang including accommodation, tours, and transfers.', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-7.jpg', 
  'published', '', '5 Days', 
  'Vientiane', 'Laotian Kip (LAK)', 'Tropical monsoon — hot year-round, wet May–October', 'November–February (cool, dry season)', 
  'Lao, English', 'ICT (UTC+7)', 'Right'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = 'laos-7');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 1, 'LUANG PRABANG ARRIVAL - CITY TOUR', 'Luang Prabang', 'Welcome to the most peaceful and charming traditional city of Southeast Asia. This city is one of the best preserved in Laos and is full of natural beauty and cultural attractions. After a short break, we will visit Wat Visoun stupa and Wat Aham shrine Wat Mai. Then, we will climb Mt. Phousi to explore the sacred, gold-studded stupa and enjoy a stunning sunset view over the city and Mekong river. After that, we will visit the Night Market where you can buy handmade textiles from the hill tribe and the local people around Luang prabang. We will spend the night in Luang pprabang. Please note that the standard check-in time is 14.00 but early check-in is possible depending on availability of your hotel.', '["Welcome to the most peaceful and charming traditional city of Southeast Asia","This city is one of the best preserved in Laos and is full of natural beauty and cultural attractions","After a short break, we will visit Wat Visoun stupa and Wat Aham shrine Wat Mai"]', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-7.jpg', 0);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 2, 'LUANG PRABANG - CITY TOUR - PAK OU CAVE (B)', 'Luang Prabang', 'After breakfast, we visit The National Museum at the former Royal Palace, which displays a lovely collection of the artifacts reflecting the richness of Lao culture dating from the days of the early kings right through to the last sovereign. Continue to explore some of the major sights in this faboulous city, including the city’s oldest temple of Wat Sene, the magnificent Wat Xiengthong, its exterior architecture is remarkable with decorated guilded stuccoes and doorways, a “tree of life” mosaic pattern set in coloured glass on the back wall and its three tiered roofs sweeping low to the ground representing classical Laotian architecture.
Afternoon we then embark on a cruise upstream on the Mekong River, which also gives us a breathtaking view of the tranquil countryside as well as explore the mysterious Pak Ou Caves, two linked caves crammed with thousands of gold lacquered Buddha statues of various shapes and sizes left by pilgrims.  Along the way, we stop at the village of Ban Xanghai, where they make the local rice wine. On return, we take a short drive to Ban Xangkhong, a village well known for its silk weavings and for its Saa (jute) Papermaking and Ban Phanom, a small village known for its hand weaving. Overnight in Luang Prabang.', '["After breakfast, we visit The National Museum at the former Royal Palace, which displays a lovely collection of the artifacts reflecting the richness of Lao culture dating from the days of the early kings right through to the last sovereign","Continue to explore some of the major sights in this faboulous city, including the city’s oldest temple of Wat Sene, the magnificent Wat Xiengthong, its exterior architecture is remarkable with decorated guilded stuccoes and doorways, a “tree of life” mosaic pattern set in coloured glass on the back wall and its three tiered roofs sweeping low to the ground representing classical Laotian architecture.\\nAfternoon we then embark on a cruise upstream on the Mekong River, which also gives us a breathtaking view of the tranquil countryside as well as explore the mysterious Pak Ou Caves, two linked caves crammed with thousands of gold lacquered Buddha statues of various shapes and sizes left by pilgrims","Along the way, we stop at the village of Ban Xanghai, where they make the local rice wine"]', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-7.jpg', 1);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 3, 'LUANG PRABANG - KUANGSI WATERFALL (B)', 'Luang Prabang', 'With an optional early start, you have the amazing chance to take part in the morning rituals where saffron-dressed monks collect Alms (rubbish rice) from the loyal locals. Laos is the only Buddhist nation that still follows this tradition.
From the morning market, you will visit the Phosi Market where you will see all kinds of offerings such as dried buffalo skins, local tea, saltpeter from chickens, vegetables and handmade weavings.
Laos is also famous for its traditional handicrafts. Today you will visit the local villages of Laotian ethnic minorities at Ban Ouay village, Hmong village, Ban Ou village Laoloum village, Ban Thapene village Khmu Village and then drive to Khouangsi waterfall where you can swim in the beautiful turquoise pools, or take a stroll through the forest trails.
By late afternoon, you will return to the city to watch the sunset at Wat phabath. You will spend the night in Luang prabang.', '["With an optional early start, you have the amazing chance to take part in the morning rituals where saffron-dressed monks collect Alms (rubbish rice) from the loyal locals","Laos is the only Buddhist nation that still follows this tradition.\\nFrom the morning market, you will visit the Phosi Market where you will see all kinds of offerings such as dried buffalo skins, local tea, saltpeter from chickens, vegetables and handmade weavings.\\nLaos is also famous for its traditional handicrafts","Today you will visit the local villages of Laotian ethnic minorities at Ban Ouay village, Hmong village, Ban Ou village Laoloum village, Ban Thapene village Khmu Village and then drive to Khouangsi waterfall where you can swim in the beautiful turquoise pools, or take a stroll through the forest trails.\\nBy late afternoon, you will return to the city to watch the sunset at Wat phabath"]', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-7.jpg', 2);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 4, 'LUANG PRABANG - ELEPHANT RIDING (B/L)', 'Luang Prabang', 'Start your day with breakfast at your hotel. Your guide will pick you up in the morning and take you to Elephant Village Camp, where you will meet our camp manager and have a brief briefing about elephants. After that, you will be taken on a 3 km ride on the elephant''s neck (no How Dah = Elephant seat). From there, you will take a traditional Lao Long boat to Tad Sae Waterfalls, where you can relax or take a swim in the crystal clear water. Lunch will be at the Elephant village restaurant. In the afternoon, you will visit local villages and pay a visit to Henry Mohout''s grave site. Mohout, a French national, discovered Angkor Wat. Please note that the elephant ride does not include How Dah (elephants seat).', '["Start your day with breakfast at your hotel","Your guide will pick you up in the morning and take you to Elephant Village Camp, where you will meet our camp manager and have a brief briefing about elephants","After that, you will be taken on a 3 km ride on the elephant''s neck (no How Dah = Elephant seat)"]', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-7.jpg', 3);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 5, 'DEPARTURE (B)', 'Luang Prabang', 'Breakfast at the hotel and check-out. Free time before your transfer to the airport for your flight departure. End of service.', '["Breakfast at the hotel and check-out","Free time before your transfer to the airport for your flight departure","End of service"]', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-7.jpg', 4);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'English-speaking tour gui', 'English-speaking tour guides', 'Check', 0);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Land transportation by ai', 'Land transportation by air-con vehicles', 'Check', 1);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Accommodation based on Tw', 'Accommodation based on Twin-shared room with breakfast', 'Check', 2);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Meals as mentioned in the', 'Meals as mentioned in the program (no drinks)', 'Check', 3);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Airfare (international and domestic) and airport tax ( on request )', 0);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Visa services (Visa approval letter/Visa stamp fee/ Visa fast track on request)', 1);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Early check-in/late check-out/ room upgrade surcharge', 2);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Other meals, Drinks, and personal expenses (phone call, laundry, tipping etc.)', 3);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Any services not mentioned in the program', 4);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Optional Tours', 5);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-7.jpg', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 'https://images.pexels.com/photos/2412711/pexels-photo-2412711.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 1);

-- Package 9: 7N/8D - Vientiane, Vang Vieng, Xieng Khuang & Luang Prabang
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  'laos-3', '7N/8D - Vientiane, Vang Vieng, Xieng Khuang & Luang Prabang', 'Laos', 'Southeast Asia', 
  'Explore 7N/8D - Vientiane, Vang Vieng, Xieng Khuang & Luang Prabang with daily itineraries, local guides, and highlights', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-3.jpg', 'Experience the beauty of Laos with our special package: 7N/8D - Vientiane, Vang Vieng, Xieng Khuang & Luang Prabang. Discover rich culture, stunning scenery, and unforgettable experiences on this day-by-day guided tour.', 
  102.45, 18.93, 'Adventure', 'bg-orange-500', 
  'Custom package for 7N/8D - Vientiane, Vang Vieng, Xieng Khuang & Luang Prabang including accommodation, tours, and transfers.', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-3.jpg', 
  'published', '', '8 Days', 
  'Vientiane', 'Laotian Kip (LAK)', 'Tropical monsoon — hot year-round, wet May–October', 'November–February (cool, dry season)', 
  'Lao, English', 'ICT (UTC+7)', 'Right'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = 'laos-3');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 1, 'VIENTIANE ARRIVAL – CITY TOUR', 'Vang Vieng', 'Upon arrival, you will be picked up by your local tour guide from the airport at Wattay and transferred to check in to your hotel. The standard check-in time is at 14h00 but early check-in is available depending on availability.
This afternoon, we will begin our city tour from the city’s oldest temple, Wat sisaket. Built in 1818, this temple is the most significant heritage temple still standing in Laos today. It is home to thousands of Buddha paintings from all over the world, long-lost architectural styles, statues and paintings.
On the way to that Luang stupa, you will stop to take pictures of the impressive Patuxay monument, the Arc de Triumph of Vientiane. Then, you will enjoy sunset by boat trip on Mekong river.
After that, you will continue to visit Wat prakeo. Built in 1565 by the Laotian monarchy, this former royal temple is home to the emerald Buddha image. Along the perimeter wall of the temple, you will see Buddhist sculptures from 6th-9th centuries, including a standing and sitting Buddha and several seated Buddhas.', '["Upon arrival, you will be picked up by your local tour guide from the airport at Wattay and transferred to check in to your hotel","The standard check-in time is at 14h00 but early check-in is available depending on availability.\\nThis afternoon, we will begin our city tour from the city’s oldest temple, Wat sisaket","Built in 1818, this temple is the most significant heritage temple still standing in Laos today"]', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-3.jpg', 0);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 2, 'VIENTIANE – BUDDHA PARK – VANG VIENG (B)', 'Vang Vieng', 'After breakfast and check-in at the hotel, you can visit the Buddha Park, where you can see hundreds of different Buddhist and Hindu sculptures imported from India.
From the Buddha Park, you can leave for Vang Vieng.
On the way, you can visit KM52 hmong market and ban tha heu (dry fish) village.
When you arrive in Vang vieng, you can check in at the hotel and rest for the rest of your day.
You can spend the night in vang vieng.', '["After breakfast and check-in at the hotel, you can visit the Buddha Park, where you can see hundreds of different Buddhist and Hindu sculptures imported from India.\\nFrom the Buddha Park, you can leave for Vang Vieng.\\nOn the way, you can visit KM52 hmong market and ban tha heu (dry fish) village.\\nWhen you arrive in Vang vieng, you can check in at the hotel and rest for the rest of your day.\\nYou can spend the night in vang vieng"]', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-3.jpg', 1);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 3, 'VANG VIENG SIGHTSEEING – XIENG KHUANG (B)', 'Vang Vieng', 'After breakfast and hotel check-out, we visit the local market before heading to the next stop, Tham Phukham Cave, where you can swim at the blue lagoon.
In the afternoon, we will drive to the next destination, Xieng khuang, with a stop at Phou khoun phieng fa Restaurant to take pictures of Green mountain.
Upon arrival, you will check in to your hotel, where you can spend the rest of your day and night.
You can spend the whole day and night in the following place:', '["After breakfast and hotel check-out, we visit the local market before heading to the next stop, Tham Phukham Cave, where you can swim at the blue lagoon.\\nIn the afternoon, we will drive to the next destination, Xieng khuang, with a stop at Phou khoun phieng fa Restaurant to take pictures of Green mountain.\\nUpon arrival, you will check in to your hotel, where you can spend the rest of your day and night.\\nYou can spend the whole day and night in the following place:"]', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-3.jpg', 2);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 4, 'XIENG KHUANG SIGHTSEEING (B)', 'Vang Vieng', 'After breakfast we go to the Central market and UXOMAG Exhibition Room. Then we go to Jar Site 2 and Jar Site 3. Jar Site 1 is the largest and has around 150 jars. It is located at the top of the hill with a great view of the countryside.
We then go to Muang Khun, the old provincial capital. We visit the ruins of several old pagodas with the That Fun Sputa in Lanna style. We also visit the ruined temple where the huge sitting Buddha can be seen.
On the way back from Phonsavan town, we will go to Jar Site 1 which has more than 300 jars.
We will return to our hotel late afternoon. We will spend the night in Xieng khuang.', '["After breakfast we go to the Central market and UXOMAG Exhibition Room","Then we go to Jar Site 2 and Jar Site 3","Jar Site 1 is the largest and has around 150 jars"]', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-3.jpg', 3);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 5, 'XIENG KHUANG – FLY TO LUANG PRABANG (B)', 'Vang Vieng', 'After breakfast, we stay at the hotel at our own pace until the time we have to leave for the airport to take our flight to Luang prabang. Once we arrive in Luang pprabang, we stay at our hotel and rest for the remainder of the day. We are planning to spend the night in Luamp Prabang.', '["After breakfast, we stay at the hotel at our own pace until the time we have to leave for the airport to take our flight to Luang prabang","Once we arrive in Luang pprabang, we stay at our hotel and rest for the remainder of the day","We are planning to spend the night in Luamp Prabang"]', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-3.jpg', 4);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 6, 'LUANG PRABANG CITY TOUR – PAK OU CAVES (B)', 'Vang Vieng', 'After breakfast, we visit the National Museum of the former Royal Palace, where we can see a beautiful collection of artifacts representing the richness of Laotian culture from the time of the early kings to the time of the last sovereign. From there, we walk by many beautiful temples, and traditional houses, until we reach the grand Wat Xiengthong with its low-roofed buildings representing the classic Laotian style.
In the afternoon, we embark on a cruise to visit the mystery Pak Ou Caves, where we will take in the panoramic views of the peaceful countryside as we cruise along the Mekong river. On the way, we will stop at Ban Xang Hai, where rice wine is made, and on arrival, we will visit two linked caves filled with thousands of gold-plated Buddha statues of different shapes and sizes, left by pilgrims.
At the end of the day, we will walk up the 328 steps leading to the summit of Phousi Hill, where we will have the best view of the sunset.
We will spend the night in Luang prabang.
Ban Xang Khong is a village famous for silk-hand-weaving and the traditional Saa paper', '["After breakfast, we visit the National Museum of the former Royal Palace, where we can see a beautiful collection of artifacts representing the richness of Laotian culture from the time of the early kings to the time of the last sovereign","From there, we walk by many beautiful temples, and traditional houses, until we reach the grand Wat Xiengthong with its low-roofed buildings representing the classic Laotian style.\\nIn the afternoon, we embark on a cruise to visit the mystery Pak Ou Caves, where we will take in the panoramic views of the peaceful countryside as we cruise along the Mekong river","On the way, we will stop at Ban Xang Hai, where rice wine is made, and on arrival, we will visit two linked caves filled with thousands of gold-plated Buddha statues of different shapes and sizes, left by pilgrims.\\nAt the end of the day, we will walk up the 328 steps leading to the summit of Phousi Hill, where we will have the best view of the sunset.\\nWe will spend the night in Luang prabang.\\nBan Xang Khong is a village famous for silk-hand-weaving and the traditional Saa paper"]', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-3.jpg', 5);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 7, 'LUANG PRABANG CITY TOUR – KHOANGSI WATERFALL (B)', 'Vang Vieng', 'An optional early start will give us the fantastic opportunity to participate in the daily morning rituals of saffron-clad monks collecting offerings of Alms (ubiquitous sticky rice) from the faithful residents. This tradition is very unique in Laos, being the only Buddhist nation still preserving the procession. Continue to visit the Morning Market, where we will see such diverse offerings as dried buffalo skin, local tea and saltpeter among the chickens, vegetables and hill-tribe weavings.
We then return to the hotel for breakfast and a short rest before we visit Wat Visoun, the holiest temple of the city, which was entirely rebuilt in 1887 after being destroyed by the invading Black Flags from Southern China. In the courtyard of Wat Visoun stands the Watermelon Stupa shaped like the fruit from which it takes its name. Continue visit to The Traditional Arts & Ethnology Centre – the first exhibition space and fair trade store dedicated to the collection, preservation, interpretation, and presentation of Laos’ traditional arts and lifestyles.
This afternoon, we transfer to visit Khouang Si waterfall. On the way, stop to visit Lao ethnic minority groups at Ban Ouay Village, Ban Ou village and Ban Thapene Village. On arrival at the waterfalls, take a leisure trek through the national park, passing by the Asian bear rescue center and many smaller waterfalls. Swimming in the cool and turquoise water is possible. Return to Luang Prabang and relax for the rest of the day. Overnight in Luang Prabang.', '["An optional early start will give us the fantastic opportunity to participate in the daily morning rituals of saffron-clad monks collecting offerings of Alms (ubiquitous sticky rice) from the faithful residents","This tradition is very unique in Laos, being the only Buddhist nation still preserving the procession","Continue to visit the Morning Market, where we will see such diverse offerings as dried buffalo skin, local tea and saltpeter among the chickens, vegetables and hill-tribe weavings.\\nWe then return to the hotel for breakfast and a short rest before we visit Wat Visoun, the holiest temple of the city, which was entirely rebuilt in 1887 after being destroyed by the invading Black Flags from Southern China"]', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-3.jpg', 6);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 8, 'DEPARTURE (B)', 'Vang Vieng', 'After breakfast, at leisure until check out hotel and transfer to the airport for the departure flight. Standard hotel check-out time is 12h00 (late check out upon availability).', '["After breakfast, at leisure until check out hotel and transfer to the airport for the departure flight","Standard hotel check-out time is 12h00 (late check out upon availability)"]', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-3.jpg', 7);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'English-speaking tour gui', 'English-speaking tour guides', 'Check', 0);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Land transportation by ai', 'Land transportation by air-con vehicles', 'Check', 1);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Accommodation based on Tw', 'Accommodation based on Twin-shared room with breakfast', 'Check', 2);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Meals as mentioned in the', 'Meals as mentioned in the program (no drinks)', 'Check', 3);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Airfare (international and domestic) and airport tax ( on request )', 0);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Visa services (Visa approval letter/Visa stamp fee/ Visa fast track on request)', 1);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Early check-in/late check-out/ room upgrade surcharge', 2);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Other meals, Drinks, and personal expenses (phone call, laundry, tipping etc.)', 3);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Any services not mentioned in the program', 4);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Optional Tours', 5);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-3.jpg', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 'https://images.pexels.com/photos/2412711/pexels-photo-2412711.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 1);

-- Package 10: 3N/4D - Exploration of Luang Prabang
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  'laos-8', '3N/4D - Exploration of Luang Prabang', 'Laos', 'Southeast Asia', 
  'Explore 3N/4D - Exploration of Luang Prabang with daily itineraries, local guides, and highlights', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-8.jpg', 'Experience the beauty of Laos with our special package: 3N/4D - Exploration of Luang Prabang. Discover rich culture, stunning scenery, and unforgettable experiences on this day-by-day guided tour.', 
  102.13, 19.89, 'Historical', 'bg-amber-600', 
  'Custom package for 3N/4D - Exploration of Luang Prabang including accommodation, tours, and transfers.', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-8.jpg', 
  'published', '', '4 Days', 
  'Vientiane', 'Laotian Kip (LAK)', 'Tropical monsoon — hot year-round, wet May–October', 'November–February (cool, dry season)', 
  'Lao, English', 'ICT (UTC+7)', 'Right'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = 'laos-8');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 1, 'LUANG PRABANG ARRIVAL - CITY TOUR', 'Luang Prabang', 'Luang Prabang is one of the best preserved traditional cities in Southeast Asia. It is one of the most peaceful and charming places in Laos, with beautiful natural scenery and cultural attractions. After a short break, we visit Wat Visoun stupa and Wat Aham shrine, Wat Mai. Then, we climb Mount Phousi, where we can explore the sacred, gold-studded stupa and enjoy a stunning sunset view of our city and Mekong River. After that, we go to the Night Market where we can find a beautiful collection of handmade textiles handmade by the hill tribe and the local people in the area. We will spend the night in Luang prabang. Standard check in is 14:00, early check in depends on availability of the hotel.', '["Luang Prabang is one of the best preserved traditional cities in Southeast Asia","It is one of the most peaceful and charming places in Laos, with beautiful natural scenery and cultural attractions","After a short break, we visit Wat Visoun stupa and Wat Aham shrine, Wat Mai"]', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-8.jpg', 0);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 2, 'LUANG PRABANG - CITY TOUR - PAK OU CAVE (B)', 'Luang Prabang', 'After breakfast, we visit The National Museum at the former Royal Palace, which displays a lovely collection of the artifacts reflecting the richness of Lao culture dating from the days of the early kings right through to the last sovereign. Continue to explore some of the major sights in this faboulous city, including the city’s oldest temple of Wat Sene, the magnificent Wat Xiengthong, its exterior architecture is remarkable with decorated guilded stuccoes and doorways, a “tree of life” mosaic pattern set in coloured glass on the back wall and its three tiered roofs sweeping low to the ground representing classical Laotian architecture.
Afternoon we then embark on a cruise upstream on the Mekong River, which also gives us a breathtaking view of the tranquil countryside as well as explore the mysterious Pak Ou Caves, two linked caves crammed with thousands of gold lacquered Buddha statues of various shapes and sizes left by pilgrims.  Along the way, we stop at the village of Ban Xanghai, where they make the local rice wine. On return, we take a short drive to Ban Xangkhong, a village well known for its silk weavings and for its Saa (jute) Papermaking and Ban Phanom, a small village known for its hand weaving. Overnight in Luang Prabang.', '["After breakfast, we visit The National Museum at the former Royal Palace, which displays a lovely collection of the artifacts reflecting the richness of Lao culture dating from the days of the early kings right through to the last sovereign","Continue to explore some of the major sights in this faboulous city, including the city’s oldest temple of Wat Sene, the magnificent Wat Xiengthong, its exterior architecture is remarkable with decorated guilded stuccoes and doorways, a “tree of life” mosaic pattern set in coloured glass on the back wall and its three tiered roofs sweeping low to the ground representing classical Laotian architecture.\\nAfternoon we then embark on a cruise upstream on the Mekong River, which also gives us a breathtaking view of the tranquil countryside as well as explore the mysterious Pak Ou Caves, two linked caves crammed with thousands of gold lacquered Buddha statues of various shapes and sizes left by pilgrims","Along the way, we stop at the village of Ban Xanghai, where they make the local rice wine"]', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-8.jpg', 1);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 3, 'LUANG PRABANG - KUANGSI WATERFALL (B)', 'Luang Prabang', 'With an optional early start, you have the amazing chance to take part in the morning rituals of the saffron-dressed monks collecting Alms (rubbish rice) from the loyal inhabitants. Laos is the only Buddhist nation that still follows this tradition.
From the morning market, you will visit the Phosi Market where you will see all kinds of offerings such as dried buffalo skins, local tea, saltpeter from chickens, vegetables and handmade weavings.
Laos is also famous for its traditional handicrafts. Today you will visit the local villages of Laotian ethnic minorities at Ban Ouay village, Hmong village, Ban Ou village Laoloum village, Ban Thapene village Khmu Village, and then drive to Khouangsi waterfall where you can swim in the beautiful turquoise pools, or take a stroll through the forest trails.
By late afternoon, you will return to the city to watch the sunset at wat phabath.', '["With an optional early start, you have the amazing chance to take part in the morning rituals of the saffron-dressed monks collecting Alms (rubbish rice) from the loyal inhabitants","Laos is the only Buddhist nation that still follows this tradition.\\nFrom the morning market, you will visit the Phosi Market where you will see all kinds of offerings such as dried buffalo skins, local tea, saltpeter from chickens, vegetables and handmade weavings.\\nLaos is also famous for its traditional handicrafts","Today you will visit the local villages of Laotian ethnic minorities at Ban Ouay village, Hmong village, Ban Ou village Laoloum village, Ban Thapene village Khmu Village, and then drive to Khouangsi waterfall where you can swim in the beautiful turquoise pools, or take a stroll through the forest trails.\\nBy late afternoon, you will return to the city to watch the sunset at wat phabath"]', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-8.jpg', 2);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 4, 'DEPARTURE (B)', 'Luang Prabang', 'Breakfast at the hotel and check-out. Free time until your transfer to the airport for your flight departure. End of service.', '["Breakfast at the hotel and check-out","Free time until your transfer to the airport for your flight departure","End of service"]', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-8.jpg', 3);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'English-speaking tour gui', 'English-speaking tour guides', 'Check', 0);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Land transportation by ai', 'Land transportation by air-con vehicles', 'Check', 1);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Accommodation based on Tw', 'Accommodation based on Twin-shared room with breakfast', 'Check', 2);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Meals as mentioned in the', 'Meals as mentioned in the program (no drinks)', 'Check', 3);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Airfare (international and domestic) and airport tax ( on request )', 0);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Visa services (Visa approval letter/Visa stamp fee/ Visa fast track on request)', 1);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Early check-in/late check-out/ room upgrade surcharge', 2);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Other meals, Drinks, and personal expenses (phone call, laundry, tipping etc.)', 3);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Any services not mentioned in the program', 4);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Optional Tours', 5);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-8.jpg', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 'https://images.pexels.com/photos/2412711/pexels-photo-2412711.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 1);

-- Package 11: 4N/5D - Highlights of Laos
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  'laos-4', '4N/5D - Highlights of Laos', 'Laos', 'Southeast Asia', 
  'Explore 4N/5D - Highlights of Laos with daily itineraries, local guides, and highlights', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-4.jpg', 'Experience the beauty of Laos with our special package: 4N/5D - Highlights of Laos. Discover rich culture, stunning scenery, and unforgettable experiences on this day-by-day guided tour.', 
  102.6, 17.97, 'Spiritual', 'bg-violet-500', 
  'Custom package for 4N/5D - Highlights of Laos including accommodation, tours, and transfers.', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-4.jpg', 
  'published', '', '5 Days', 
  'Vientiane', 'Laotian Kip (LAK)', 'Tropical monsoon — hot year-round, wet May–October', 'November–February (cool, dry season)', 
  'Lao, English', 'ICT (UTC+7)', 'Right'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = 'laos-4');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 1, 'VIENTIANE ARRIVAL – CITY TOUR', 'Vientiane', 'On arrival, you will be picked up by your local tour guide from Wattay airport, and transferred to check in to your hotel. Check in is at 14h00.
This afternoon, we will begin our city tour from the oldest temple in the city, Wat sisaket. Built in 1818, this temple is the most significant heritage temple in Laos today. It is home to thousands of Buddha pictures from all over the world, long lost architecture styles, sculptures, and paintings.
On the way to That Luang stupa, you will stop to take pictures of the impressive Patuxay monument, the Arc de Triumph of Vientiane, and then enjoy the sunset by boat trip on Mekong river.
After that, you will continue your tour by visiting Wat prakeo, the former royal temple in the Laotian monarchy, originally constructed in 1565 and the home of the emerald Buddha image. Along the perimeter wall of the temple, you will see Buddhist sculptures from the 6th-9th centuries, including a standing and sitting Buddha and several other Buddhas.
You will be able to spend the night in vientiane. Please note that the check in is at 14:00,', '["On arrival, you will be picked up by your local tour guide from Wattay airport, and transferred to check in to your hotel","Check in is at 14h00.\\nThis afternoon, we will begin our city tour from the oldest temple in the city, Wat sisaket","Built in 1818, this temple is the most significant heritage temple in Laos today"]', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-4.jpg', 0);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 2, 'VIENTIANE – BUDDHA PARK – FLY TO LUANG PRABANG (B)', 'Vientiane', 'After breakfast and check-in at your hotel, visit Buddha Park, where you can see hundreds of Buddha and Hindu statues imported from India. After visiting the Buddha Park, you will be transferred to the airport for your flight to Luang prabang.
Upon arrival, you will be picked up by your local tour guide from the airport and transferred to check in to your hotel.
You will spend the night in Luang pprabang.', '["After breakfast and check-in at your hotel, visit Buddha Park, where you can see hundreds of Buddha and Hindu statues imported from India","After visiting the Buddha Park, you will be transferred to the airport for your flight to Luang prabang.\\nUpon arrival, you will be picked up by your local tour guide from the airport and transferred to check in to your hotel.\\nYou will spend the night in Luang pprabang"]', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-4.jpg', 1);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 3, 'LUANG PRABANG CITY TOUR – PAK OU CAVES (B)', 'Vientiane', 'After breakfast, we visit the National Museum of the former Royal Palace, where we can see a beautiful collection of artifacts representing the richness of Laotian culture from the time of the early kings to the time of the last sovereign. From there, we walk by many beautiful temples, and traditional houses, until we reach the grand Wat Xiengthong with its low-roofed buildings representing the classic Laotian style.
In the afternoon, we embark on a cruise to visit the mystery Pak Ou Caves, where we will take in the panoramic views of the peaceful countryside as we cruise along the Mekong river. On the way, we will stop at Ban Xang Hai, where rice wine is made, and on arrival, we will visit two linked caves filled with thousands of gold-plated Buddha statues of different shapes and sizes, left by pilgrims.
At the end of the day, we will walk up the 328 steps leading to the summit of Phousi Hill, where we will have the best view of the sunset.
We will spend the night in Luang prabang.
Ban Xang Khong is a village famous for silk-hand-weaving and the traditional Saa paper', '["After breakfast, we visit the National Museum of the former Royal Palace, where we can see a beautiful collection of artifacts representing the richness of Laotian culture from the time of the early kings to the time of the last sovereign","From there, we walk by many beautiful temples, and traditional houses, until we reach the grand Wat Xiengthong with its low-roofed buildings representing the classic Laotian style.\\nIn the afternoon, we embark on a cruise to visit the mystery Pak Ou Caves, where we will take in the panoramic views of the peaceful countryside as we cruise along the Mekong river","On the way, we will stop at Ban Xang Hai, where rice wine is made, and on arrival, we will visit two linked caves filled with thousands of gold-plated Buddha statues of different shapes and sizes, left by pilgrims.\\nAt the end of the day, we will walk up the 328 steps leading to the summit of Phousi Hill, where we will have the best view of the sunset.\\nWe will spend the night in Luang prabang.\\nBan Xang Khong is a village famous for silk-hand-weaving and the traditional Saa paper"]', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-4.jpg', 2);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 4, 'LUANG PRABANG CITY TOUR – KHOANGSI WATERFALL (B)', 'Vientiane', 'An optional early start will give us the fantastic opportunity to participate in the daily morning rituals of saffron-clad monks collecting offerings of Alms (ubiquitous sticky rice) from the faithful residents. This tradition is very unique in Laos, being the only Buddhist nation still preserving the procession. Continue to visit the Morning Market, where we will see such diverse offerings as dried buffalo skin, local tea and saltpeter among the chickens, vegetables and hill-tribe weavings.
We then return to the hotel for breakfast and a short rest before we visit Wat Visoun, the holiest temple of the city, which was entirely rebuilt in 1887 after being destroyed by the invading Black Flags from Southern China. In the courtyard of Wat Visoun stands the Watermelon Stupa shaped like the fruit from which it takes its name. Continue visit to The Traditional Arts & Ethnology Centre – the first exhibition space and fair trade store dedicated to the collection, preservation, interpretation, and presentation of Laos’ traditional arts and lifestyles.
This afternoon, we transfer to visit Khouang Si waterfall. On the way, stop to visit Lao ethnic minority groups at Ban Ouay Village, Ban Ou village and Ban Thapene Village. On arrival at the waterfalls, take a leisure trek through the national park, passing by the Asian bear rescue center and many smaller waterfalls. Swimming in the cool and turquoise water is possible. Return to Luang Prabang and relax for the rest of the day. Overnight in Luang Prabang.', '["An optional early start will give us the fantastic opportunity to participate in the daily morning rituals of saffron-clad monks collecting offerings of Alms (ubiquitous sticky rice) from the faithful residents","This tradition is very unique in Laos, being the only Buddhist nation still preserving the procession","Continue to visit the Morning Market, where we will see such diverse offerings as dried buffalo skin, local tea and saltpeter among the chickens, vegetables and hill-tribe weavings.\\nWe then return to the hotel for breakfast and a short rest before we visit Wat Visoun, the holiest temple of the city, which was entirely rebuilt in 1887 after being destroyed by the invading Black Flags from Southern China"]', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-4.jpg', 3);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 5, 'DEPARTURE (B)', 'Vientiane', 'After breakfast, have some time to yourself before you check out your hotel and get a transfer to the airport to catch your flight. The hotel check out time is 12:00 pm (late check out on availability).', '["After breakfast, have some time to yourself before you check out your hotel and get a transfer to the airport to catch your flight","The hotel check out time is 12:00 pm (late check out on availability)"]', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-4.jpg', 4);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'English-speaking tour gui', 'English-speaking tour guides', 'Check', 0);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Land transportation by ai', 'Land transportation by air-con vehicles', 'Check', 1);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Accommodation based on Tw', 'Accommodation based on Twin-shared room with breakfast', 'Check', 2);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Meals as mentioned in the', 'Meals as mentioned in the program (no drinks)', 'Check', 3);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Airfare (international and domestic) and airport tax ( on request )', 0);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Visa services (Visa approval letter/Visa stamp fee/ Visa fast track on request)', 1);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Early check-in/late check-out/ room upgrade surcharge', 2);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Other meals, Drinks, and personal expenses (phone call, laundry, tipping etc.)', 3);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Any services not mentioned in the program', 4);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Optional Tours', 5);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-4.jpg', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 'https://images.pexels.com/photos/2412711/pexels-photo-2412711.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 1);

-- Package 12: 12N/13D - Laos at a Glance
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  'laos-5', '12N/13D - Laos at a Glance', 'Laos', 'Southeast Asia', 
  'Explore 12N/13D - Laos at a Glance with daily itineraries, local guides, and highlights', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-5.jpg', 'Experience the beauty of Laos with our special package: 12N/13D - Laos at a Glance. Discover rich culture, stunning scenery, and unforgettable experiences on this day-by-day guided tour.', 
  103.22, 19.45, 'Historical', 'bg-amber-600', 
  'Custom package for 12N/13D - Laos at a Glance including accommodation, tours, and transfers.', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-5.jpg', 
  'published', '', '13 Days', 
  'Vientiane', 'Laotian Kip (LAK)', 'Tropical monsoon — hot year-round, wet May–October', 'November–February (cool, dry season)', 
  'Lao, English', 'ICT (UTC+7)', 'Right'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = 'laos-5');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 1, 'ARRIVAL – LUANG PRABANG (B)', 'Xieng Khuang', 'Upon arrival, you will be greeted by our guide and then transferred to your hotel for check-in and leisurely time. You will spend the night in Luang prabang international airport.', '["Upon arrival, you will be greeted by our guide and then transferred to your hotel for check-in and leisurely time","You will spend the night in Luang prabang international airport"]', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-5.jpg', 0);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 2, 'LUANG PRABANG – CITY TOUR – KHOUANGSI WATER FALL (B)', 'Xieng Khuang', 'After breakfast, we enjoy a short-guided tour visit the National Museum at the former Royal Palace displays a lovely collection of the artifacts reflecting the richness of Lao culture dating from the days of the early kings right through the last sovereign; we will visit Wat Visoun, the holiest temple of the city, which was entirely rebuilt in 1887 after being destroyed by the invading Black Flags from Southern China. In the courtyard of Wat Visoun stands the Watermelon Stupa shaped like the fruit from which it takes its name. Continue past Wat Aham, which was first built in the 1500s and we then to Khouang Si waterfall. On the way, you can visit to the Lao ethnic minority groups-Ban Ouay Village, Ban Ou village and Ban Thapene Village. Once at the waterfalls, take a leisurely hike through the national park towards the Khouangsi waterfall and pass by the Asian bear rescue center. You will enjoy feeling the mist of the cool, turquoise waters of the different waterfalls. Swimming in the refreshing waters is possible. Transfer back to Luang Prabang for climb up 328 steps of Mount Phousi for an enjoyable exploration of the sacred, gilded stupa as well as a beautiful sunset view of the city and the Mekong River. We then will explore the Night Market, where you can find a lovely selection of handmade textiles made by the hill tribe and local people surrounding Luang Prabang. Overnight in Luang Prabang', '["After breakfast, we enjoy a short-guided tour visit the National Museum at the former Royal Palace displays a lovely collection of the artifacts reflecting the richness of Lao culture dating from the days of the early kings right through the last sovereign; we will visit Wat Visoun, the holiest temple of the city, which was entirely rebuilt in 1887 after being destroyed by the invading Black Flags from Southern China","In the courtyard of Wat Visoun stands the Watermelon Stupa shaped like the fruit from which it takes its name","Continue past Wat Aham, which was first built in the 1500s and we then to Khouang Si waterfall"]', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-5.jpg', 1);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 3, 'LUANG PRABANG – PAK OU CAVE (B)', 'Xieng Khuang', 'An optional early start gives you the fantastic opportunity to participate in the daily morning rituals of saffron-clad monks collecting offerings of Alms (ubiquitous sticky rice) from the faithful residents. This tradition is very unique in Laos, being the only Buddhist nation still preserving the procession. We then visit the Morning Market, where you will see such diverse offerings as dried buffalo skin, local tea and saltpeter among the chickens, vegetables and hill-tribe weavings. Then back to hotel for breakfast before visiting the magnificent Wat Xiengthong with its roofs sweeping low to the ground, which represents classical Laotian architecture. We then board a cruise upstream on the Mekong River, which also gives us a panoramic view of the tranquil countryside as well as an interesting visit to the mysterious of Pak Ou Caves, two linked caves crammed with thousands of gold lacquered Buddha statues of various shapes and sizes left by pilgrims. Along the way, we will make a stop at Ban Xang Hai village where rice wine is distilled. We will visit the caves of Tham Ting and Tham Phoum which house hundreds of Buddha statues. We return to Luang Prabang in the afternoon, continue to visit Ban Xang Khong, a village well known for silk hand-weaving and traditional Saa paper-making. Overnight in Luang Prabang', '["An optional early start gives you the fantastic opportunity to participate in the daily morning rituals of saffron-clad monks collecting offerings of Alms (ubiquitous sticky rice) from the faithful residents","This tradition is very unique in Laos, being the only Buddhist nation still preserving the procession. We then visit the Morning Market, where you will see such diverse offerings as dried buffalo skin, local tea and saltpeter among the chickens, vegetables and hill-tribe weavings","Then back to hotel for breakfast before visiting the magnificent Wat Xiengthong with its roofs sweeping low to the ground, which represents classical Laotian architecture"]', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-5.jpg', 2);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 4, 'LUANG PRABANG – XIENG KHUANG (B)', 'Xieng Khuang', 'After breakfast we ride 306km uphill on a mountain rim surrounded by stunning natural scenery to the historical site of Xieng khuang which was destroyed by U.S. bombing from 1964 to 1973. Once we arrive, we will be transferred to visit the plain of jars which is an archaeological site with hundreds of big stone jars scattered on the plains. If we have time, we will visit the old capital Muang khuang and nearby villages where Hmong hill tribesmen live with a colorful history and interesting local culture. We will spend an overnight in xiang khuang.', '["After breakfast we ride 306km uphill on a mountain rim surrounded by stunning natural scenery to the historical site of Xieng khuang which was destroyed by U.S","bombing from 1964 to 1973","Once we arrive, we will be transferred to visit the plain of jars which is an archaeological site with hundreds of big stone jars scattered on the plains"]', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-5.jpg', 3);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 5, 'XIENG KHUANG – VANG VIENG – CITY TOUR (B)', 'Xieng Khuang', 'After breakfast, we will drive to Vang Vieng on the way. Along the way, we will visit the Buddha images at the site of Thampra, which is over 200 years old. We will also visit several Hmong and hill tribe minority villages on the way. After several photo stops, we will continue on the road, taking in the beautiful natural scenery of mountains, forest and landscape. We will drive through mountainous regions until we reach Vang Vieng, where we will stay for a short rest before taking a long tail boat on the Nam Song river for sightseeing and visiting a mulberry farm to taste mulberry tea before returning to our hotel for an overnight stay.', '["After breakfast, we will drive to Vang Vieng on the way","Along the way, we will visit the Buddha images at the site of Thampra, which is over 200 years old","We will also visit several Hmong and hill tribe minority villages on the way"]', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-5.jpg', 4);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 6, 'VANG VIENG – VIENTIANE – HALF DAY TOUR (B)', 'Xieng Khuang', 'After breakfast, we drove 3 hours to Vientiane, stopping at finishing villages at Ban Houimor and Hmong market at KM 52 before arriving at Vientiane, where we stayed at a hotel.
After that, we started to explore the town by visiting the oldest temple in Vientiane, Wat Sisaketo, which has amazing frescoes and amazing Buddha images.
Then, we visited Haw Prakeo which was once the royal temple of the Laos monarchy, which used to be the Emerald Buddha Statue.
Next, we visited the impressive Patuxay Monument which is known as Vientian’s own Arc de Triumph.
Finally, we visited the famous that Luang stupa.
We stayed in Vientiane overnight.', '["After breakfast, we drove 3 hours to Vientiane, stopping at finishing villages at Ban Houimor and Hmong market at KM 52 before arriving at Vientiane, where we stayed at a hotel.\\nAfter that, we started to explore the town by visiting the oldest temple in Vientiane, Wat Sisaketo, which has amazing frescoes and amazing Buddha images.\\nThen, we visited Haw Prakeo which was once the royal temple of the Laos monarchy, which used to be the Emerald Buddha Statue.\\nNext, we visited the impressive Patuxay Monument which is known as Vientian’s own Arc de Triumph.\\nFinally, we visited the famous that Luang stupa.\\nWe stayed in Vientiane overnight"]', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-5.jpg', 5);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 7, 'VIENTIANE – THA KHAEK – BAN NA HIN (B)', 'Xieng Khuang', 'After breakfast, we will leave early in the morning on our way to Khom Moulan Province. We can make several stops along the way to stretch our legs and take beautiful photos of the beautiful scenery. Depending on the road and traffic conditions, we will reach Ban Na Hin, Khong Lor Cave''s entrance by late afternoon. Upon arrival, we will take a short stroll around this charming village to learn more about the locals'' culture and lifestyle. We will spend the night in Ban Na Hin.', '["After breakfast, we will leave early in the morning on our way to Khom Moulan Province","We can make several stops along the way to stretch our legs and take beautiful photos of the beautiful scenery","Depending on the road and traffic conditions, we will reach Ban Na Hin, Khong Lor Cave''s entrance by late afternoon"]', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-5.jpg', 6);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 8, 'BAN NA HIN – KHONG LOR CAVE – BAN NA HIN (B)', 'Xieng Khuang', 'After breakfast this morning, we will take a short drive to Khong Lor cave. Khong Lor cave is the result of the 7.5kms of Hinboun river flowing through the mountains. We will go through the Khong Lor cave in a motorized canoe. This cave is full of limestone formations and a 100m high cave.
On the way back from Khong Lor, we will make a stop at that Mouang and that namsanam waterfalls.
We will spend the night at Ban Na Hin.', '["After breakfast this morning, we will take a short drive to Khong Lor cave","Khong Lor cave is the result of the 7.5kms of Hinboun river flowing through the mountains","We will go through the Khong Lor cave in a motorized canoe"]', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-5.jpg', 7);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 9, 'BAN NA HIN – SAVANNAKET – PAKSE (B)', 'Xieng Khuang', 'Following breakfast, we depart from Ban Na Hin, and make our way further south to southern Laos and Pakse town. On the way, we make a pit stop for lunch in Pakse (Your own account), a fast-developing town that has become a major trade hub between the countries of Vietnam, Laos, and Thailand.
The centre of Pakse town is full of old French colonial structures, and it has an old-world atmosphere. We arrive at Pakse town in the late afternoon, and have plenty of time to walk around and see the town for the first time. We stay overnight in Pakse.', '["Following breakfast, we depart from Ban Na Hin, and make our way further south to southern Laos and Pakse town","On the way, we make a pit stop for lunch in Pakse (Your own account), a fast-developing town that has become a major trade hub between the countries of Vietnam, Laos, and Thailand.\\nThe centre of Pakse town is full of old French colonial structures, and it has an old-world atmosphere","We arrive at Pakse town in the late afternoon, and have plenty of time to walk around and see the town for the first time"]', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-5.jpg', 8);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 10, 'PAKSE – WAT PHU – DON KHONG (B)', 'Xieng Khuang', 'Following breakfast, we drive to the pre-Angkorian ruins in Champassak, where we have a chance to visit Wat Phu. One of Southeast Asia’s most dramatic temple sites, we have plenty of time to visit these fascinating Khmer ruins which are located at the foothills of Mount phu kao.
Wat Phu is recognized by UNESCO as one of Lao’s World Heritage sites. This amazing archaeological site of the Khmer civilization, dating back to the tenth century, predates the well-known Angkor in Cambodia.
From Champassak, we drive by land to the small island of Ban hatxaikhoun, where we cross the mighty Mekong bridge. Don Khong is the largest island of the 4000 islands of the south Mekong river area known as the most beautiful area in Laos. We stay overnight at Don Khong.', '["Following breakfast, we drive to the pre-Angkorian ruins in Champassak, where we have a chance to visit Wat Phu","One of Southeast Asia’s most dramatic temple sites, we have plenty of time to visit these fascinating Khmer ruins which are located at the foothills of Mount phu kao.\\nWat Phu is recognized by UNESCO as one of Lao’s World Heritage sites","This amazing archaeological site of the Khmer civilization, dating back to the tenth century, predates the well-known Angkor in Cambodia.\\nFrom Champassak, we drive by land to the small island of Ban hatxaikhoun, where we cross the mighty Mekong bridge"]', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-5.jpg', 9);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 11, 'DON KHONG – FULL DAY SURROUNDING (B)', 'Xieng Khuang', 'After breakfast, we visit local villages in Ban Khone where you will find a lot of old colonial buildings and traces of old colonial history, including the first Laotian railway with a locomotive.
We continue exploring 4000 islands area at our own pace by tuk tuk at our own pace to visit Liphi waterfall which is one of the best waterfalls in Laos at the border of Laos with Cambodia, also called Samphamith.
If we are lucky, we may see a rare freshwater Irrawaddy Mekong dolphins at Ban hang Khone.
We return to ban nakasang and take a drive to Khon Phapeng famous waterfalls which is the biggest waterfall in Southeast Asia, also called Niagara of the East.
We stay overnight at Don Khong', '["After breakfast, we visit local villages in Ban Khone where you will find a lot of old colonial buildings and traces of old colonial history, including the first Laotian railway with a locomotive.\\nWe continue exploring 4000 islands area at our own pace by tuk tuk at our own pace to visit Liphi waterfall which is one of the best waterfalls in Laos at the border of Laos with Cambodia, also called Samphamith.\\nIf we are lucky, we may see a rare freshwater Irrawaddy Mekong dolphins at Ban hang Khone.\\nWe return to ban nakasang and take a drive to Khon Phapeng famous waterfalls which is the biggest waterfall in Southeast Asia, also called Niagara of the East.\\nWe stay overnight at Don Khong"]', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-5.jpg', 10);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 12, 'DON KHONG – TADLO BOLAVEN PLATEAU – PAKSE (B)', 'Xieng Khuang', 'After breakfast, we proceed to Tadlo via Boloven plateau. Boloven plateau is famous for its cooler temperatures due to its location above the Mekong valley. The high plateau runs off in all directions, and then plunges into lush forests with a series of cascading waterfalls. Taking a trip to the plateau is a great way to take a break from the heat, and you can see the cultivation of rich crops such as coffee, tea, and cardamom, as well as bananas and other crops along the way. This trip gives you the opportunity to explore some of the lesser known areas of Laos, discovering the wild beauty of the southern region.
On the way to Tad lo waterfall, we visit Alak village, Nge village, and Katu village, where ethnic minority groups live. We will return to Pakse late evening. We will spend an overnight in Pakse.', '["After breakfast, we proceed to Tadlo via Boloven plateau","Boloven plateau is famous for its cooler temperatures due to its location above the Mekong valley","The high plateau runs off in all directions, and then plunges into lush forests with a series of cascading waterfalls"]', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-5.jpg', 11);
INSERT INTO `tour_package_itinerary` (`tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 13, 'DEPARTURE (B)', 'Xieng Khuang', 'After breakfast, you are free to roam around until you are picked up at the airport for your onward flight.
End of service', '["After breakfast, you are free to roam around until you are picked up at the airport for your onward flight.\\nEnd of service"]', 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-5.jpg', 12);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'English-speaking tour gui', 'English-speaking tour guides', 'Check', 0);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Land transportation by ai', 'Land transportation by air-con vehicles', 'Check', 1);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Accommodation based on Tw', 'Accommodation based on Twin-shared room with breakfast', 'Check', 2);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) 
VALUES (@pkg_id, 'Meals as mentioned in the', 'Meals as mentioned in the program (no drinks)', 'Check', 3);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Airfare (international and domestic) and airport tax ( on request )', 0);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Visa services (Visa approval letter/Visa stamp fee/ Visa fast track on request)', 1);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Early check-in/late check-out/ room upgrade surcharge', 2);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Other meals, Drinks, and personal expenses (phone call, laundry, tipping etc.)', 3);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Any services not mentioned in the program', 4);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) 
VALUES (@pkg_id, 'Optional Tours', 5);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 'https://mekongvacations.com/wp-content/uploads/2020/09/Laos-5.jpg', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) 
VALUES (@pkg_id, 'https://images.pexels.com/photos/2412711/pexels-photo-2412711.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 1);

