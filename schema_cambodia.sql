 -- Cambodia Tour Packages Schema and Data
-- This script creates tables if they do not exist and inserts/updates the 5 Cambodia packages.

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


-- Package 1: 5D/4N - Phnom Penh 2N + Siem Reap 2N
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  '5d-4n-phnom-penh-2n-siem-reap-2n', '5D/4N - Phnom Penh 2N + Siem Reap 2N', 'Cambodia', 'Southeast Asia', 
  'Explore Phnom Penh\'s royal heritage and Siem Reap\'s ancient wonders', '/images/cambodia/3-Cambodia.jpg', 'Experience the best of Cambodia with this 5-day journey. Begin in Phnom Penh, the vibrant capital, where you\'ll visit the Royal Palace, Silver Pagoda, and take a sunset cruise on the Mekong River. Next, travel to Siem Reap to marvel at the magnificent Angkor Wat and the ancient city of Angkor Thom, including Bayon, Ta Prohm, and sunset from Bakheng Mountain. This comprehensive tour blends royal heritage, spiritual architecture, and local life.', 
  104.92, 11.56, 'Historical', 'bg-amber-600', 
  'Explore Phnom Penh\'s royal heritage and Siem Reap\'s ancient wonders.', '/images/dest-5.jpg', 
  'published', '', '5 Days', 
  'Phnom Penh', 'Cambodian Riel (KHR) & US Dollar (USD)', 'Tropical monsoon — hot year-round, wet May–October', 'November–February (cool, dry season)', 
  'Khmer, English', 'ICT (UTC+7)', 'Right'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = '5d-4n-phnom-penh-2n-siem-reap-2n');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 1, 'Phnom Penh Arrival, Transfer In / Free Leisure / No Guide', 'Phnom Penh', 
  'Welcome to Phnom Penh Airport or Bus station, welcome and transfer to hotel by driver, Free at own leisure. (Standard Check in time: 1400, Early Check in up on availability) Overnight in your selected hotel, Phnom Penh.', 
  '["Welcome and pickup from airport or bus station in Phnom Penh","Transfer to hotel by private driver","Free at own leisure to rest or explore the capital city"]', 
  '/images/cambodia/Cambodia-2.jpg', 0
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 2, 'Phnom Penh Sightseeing (B)', 'Phnom Penh', 
  'Visit The Royal Palace, Silver Pagoda, Independence Monument, Wat Phnom, Central Market for shopping, Wat Ounalom, and later, enjoy a one-hour sunset cruise along the Mekong River to enjoy the sunset. Return to hotel and free at your own time.', 
  '["Visit the Royal Palace complex and Silver Pagoda national treasures","Explore the historic Independence Monument and Wat Phnom hill temple","Shopping at the popular Central Market with local eateries","One-hour Mekong River sunset cruise with fresh breeze"]', 
  '/images/cambodia/Cambodia-1.jpg', 1
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 3, 'Phnom Penh Sightseeing – Transfer to Siem Reap, Local Tour (B)', 'Phnom Penh & Siem Reap', 
  'Breakfast in hotel and check out. Transfer to Bus station for leaving to Siem Reap (6 hours drive/ no guide, bus ticket included). Arrival Siem Reap, welcome and transfer to hotel check in. Afternoon, visit Senteurs d\'Angkor Workshop, Wat Bo (one of the oldest Buddhist temples in Siem Reap), Wat Preah Prom Rath, and visit Street food at Street 60 where you can see local people gathering in the evening.', 
  '["6-hour scenic bus transfer from Phnom Penh to Siem Reap (ticket included)","Visit Senteurs d\'Angkor Workshop to see natural plant products","Explore the ancient Wat Bo and beautiful Wat Preah Prom Rath pagodas","Mingle with locals and try evening street food at Street 60"]', 
  '/images/cambodia/Cambodia-4.jpg', 2
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 4, 'Angkor Wat, Angkor Thom City Complex (B)', 'Siem Reap', 
  'With your professional tour guide, go discover the world\'s Greatest Monument - Angkor Wat. Next, explore the Great Angkor City of Khmer Empire. Start at South gate of Angkor Thom. Visit Bayon Temple, Baphuon, the Terrace of the Elephants, and the Terrace of the Leper King. Afternoon visit to the hidden jungle temple of Ta Prohm. Climb Bakheng Mountain to view the most beautiful sunset.', 
  '["Explore the magnificent and grand temple of Angkor Wat","See the South Gate of Angkor Thom and Bayon\'s smiling stone faces","Wander through Ta Prohm, the jungle temple with tree roots","Climb Bakheng Mountain for a panoramic sunset view"]', 
  '/images/cambodia/Cambodia-5.jpg', 3
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 5, 'Transfer to Siem Reap Airport (SAI) (B) / No Guide', 'Siem Reap', 
  'Breakfast in hotel. Free at your own enjoyment till time transfer to airport for flight back home or connecting countries with the unforgettable trip in Cambodia. (A WONDERFUL JOURNEY ☺)', 
  '["Enjoy breakfast at the hotel","Free time for last-minute souvenir shopping in Siem Reap","Driver transfer to Siem Reap Angkor International Airport (SAI)"]', 
  '/images/cambodia/Cambodia-9.jpg', 4
);

INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) VALUES
(@pkg_id, 'Royal Palace & Pagodas', 'Explore the stunning Royal Palace and Silver Pagoda, featuring a floor of 5,329 solid silver tiles and national treasures.', 'Landmark', 0),
(@pkg_id, 'Angkor Temple Exploration', 'Discover Angkor Wat, the largest religious monument in the world, along with Bayon and the jungle temple of Ta Prohm.', 'MapPin', 1),
(@pkg_id, 'Mekong Sunset Cruise', 'Enjoy a peaceful one-hour cruise along the Mekong River, watching the sunset over Phnom Penh\'s riverfront.', 'Waves', 2),
(@pkg_id, 'Local Natural Crafts', 'Visit Senteurs d\'Angkor to learn how local soaps, balms, and oils are made from natural Cambodian plants.', 'ShoppingBag', 3);

INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) VALUES
(@pkg_id, 'Cambodia E-Visa costs US$ 35 and can be processed online, or obtain a Visa-on-arrival for US$ 30 cash (bring 2 passport photos).', 0),
(@pkg_id, 'US Dollars (USD) are widely accepted for most transactions; Cambodian Riel is primarily used as change for amounts under $1.', 1),
(@pkg_id, 'Dress modestly when visiting temples: shoulders and knees must be covered at all times.', 2),
(@pkg_id, 'Keep hydrated during the temple walks; carry bottled water and wear comfortable, sturdy shoes.', 3);

INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) VALUES
(@pkg_id, '/images/cambodia/CB5.jpg', 0),
(@pkg_id, '/images/cambodia/CB3.jpg', 1),
(@pkg_id, '/images/cambodia/3-Cambodia.jpg', 2),
(@pkg_id, '/images/cambodia/Cambodia-2.jpg', 3),
(@pkg_id, '/images/cambodia/Cambodia-4.jpg', 4);


-- Package 2: 3D/2N - Siem Reap 2N
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  '3d-2n-siem-reap-2n', '3D/2N - Siem Reap 2N', 'Cambodia', 'Southeast Asia', 
  'A quick getaway to explore the ancient temples of Angkor', '/images/cambodia/CB4-600x350.jpg', 'Perfect for travelers short on time, this 3-day tour takes you straight to the heart of Angkor. Discover the main highlights of the Angkor Archaeological Park, including the majestic Angkor Wat, Bayon Temple, the Terrace of Elephants, and the root-strangled Ta Prohm. Wrap up your evenings enjoying the lively atmosphere of Siem Reap.', 
  103.86, 13.36, 'Historical', 'bg-amber-600', 
  'A quick getaway to explore the ancient temples of Angkor.', '/images/dest-4.jpg', 
  'published', '', '3 Days', 
  'Phnom Penh', 'Cambodian Riel (KHR) & US Dollar (USD)', 'Tropical monsoon — hot and humid year-round', 'November–March (cool, dry season)', 
  'Khmer, English', 'ICT (UTC+7)', 'Right'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = '3d-2n-siem-reap-2n');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 1, 'Siem Reap Airport (SAI) - Arrival, Transfer In / Free Leisure / No Guide', 'Siem Reap', 
  'Welcome to Siem Reap Angkor International Airport, clear your immigration and head to arrival hall where your driver is waiting with your name tag. We drive from airport to city center (one-hour drive). Hotel check in and free at your own leisure. (Standard Check in time: 1400, Early Check in up on availability) Overnight in Siem Reap.', 
  '["Driver pickup from Siem Reap Angkor International Airport (SAI)","1-hour scenic drive to Siem Reap city center","Free leisure to relax or explore the local Pub Street area"]', 
  '/images/cambodia/Cambodia-Map.jpg', 0
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 2, 'Angkor Wat, Angkor Thom City Complex (B)', 'Siem Reap', 
  'Discover Angkor Wat, the largest temple in the world. Next, explore the Great Angkor City of Khmer Empire. Start at South gate of Angkor Thom. Visit Bayon Temple, Baphuon, the Terrace of the Elephants, and the Terrace of the Leper King. Afternoon visit to the hidden jungle temple of Ta Prohm. Climb Bakheng Mountain to view the most beautiful sunset.', 
  '["Explore the grand Angkor Wat temple with a guide","See the smiling stone faces of Bayon and South Gate of Angkor Thom","Discover Ta Prohm temple, famous for tree roots growing out of ruins","Enjoy panoramic sunset views from Bakheng Mountain"]', 
  '/images/cambodia/Cambodia-5.jpg', 1
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 3, 'Transfer to Siem Reap Airport (SAI) (B) / No Guide', 'Siem Reap', 
  'Breakfast in hotel. Free at your own enjoyment till time transfer to airport for flight back home or connecting countries with the unforgettable trip in Cambodia. (A WONDERFUL JOURNEY ☺)', 
  '["Enjoy breakfast at the hotel","Free morning in Siem Reap for last-minute shopping","Driver transfer to Siem Reap Airport"]', 
  '/images/cambodia/Cambodia-9.jpg', 2
);

INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) VALUES
(@pkg_id, 'Angkor Wat Exploration', 'Explore the legendary 12th-century temple complex, renowned for its massive scale and detailed bas-reliefs.', 'Landmark', 0),
(@pkg_id, 'Bayon Smile Carvings', 'Study the 216 giant smiling stone faces of Bayon, standing tall at the center of ancient Angkor Thom.', 'Smile', 1),
(@pkg_id, 'Ta Prohm Roots', 'Photograph the trees growing out of ancient temple walls at Ta Prohm, left in its natural state.', 'Trees', 2),
(@pkg_id, 'Bakheng Sunset Climb', 'Climb Phnom Bakheng temple hill to witness the sunset over the Angkor plains and Tonle Sap in the distance.', 'Sun', 3);

INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) VALUES
(@pkg_id, 'Obtain your Cambodia E-Visa online in advance to skip the visa-on-arrival queue at the airport.', 0),
(@pkg_id, 'Bring clean, crisp US Dollar bills — banknotes with even tiny tears may be rejected by merchants.', 1),
(@pkg_id, 'Hire a local tuk-tuk for affordable and breeze-filled transport around Siem Reap town.', 2),
(@pkg_id, 'Wear light, breathable clothing and high-factor sunscreen to handle the daytime heat.', 3);

INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) VALUES
(@pkg_id, '/images/cambodia/CB4-600x350.jpg', 0),
(@pkg_id, '/images/cambodia/Cambodia-5.jpg', 1),
(@pkg_id, '/images/cambodia/Cambodia-9.jpg', 2);


-- Package 3: 4D/3N – Siem Reap 3N
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  '4d-3n-siem-reap-3n', '4D/3N – Siem Reap 3N', 'Cambodia', 'Southeast Asia', 
  'Ancient temples of Angkor and the floating world of Tonle Sap', '/images/cambodia/CB3-600x350.jpg', 'Delve deeper into the charm of Siem Reap with this 4-day package. Spend one full day uncovering the architectural wonders of Angkor, including Angkor Wat, Bayon, and Ta Prohm. On the third day, embark on a scenic boat ride on Tonle Sap Lake to visit floating villages, explore the West Baray reservoir, and taste delicious Cambodian street food.', 
  103.86, 13.36, 'Historical', 'bg-amber-600', 
  'Ancient temples of Angkor and the floating world of Tonle Sap.', '/images/dest-6.jpg', 
  'published', '', '4 Days', 
  'Phnom Penh', 'Cambodian Riel (KHR) & US Dollar (USD)', 'Tropical monsoon — hot year-round', 'November–February (cool, dry, pleasant)', 
  'Khmer, English', 'ICT (UTC+7)', 'Right'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = '4d-3n-siem-reap-3n');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 1, 'Siem Reap Airport (SAI) - Arrival, Transfer In / Free Leisure / No Guide', 'Siem Reap', 
  'Welcome to Siem Reap Angkor International Airport, clear your immigration and head to arrival hall where your driver is waiting with your name tag. We drive from airport to city center (one-hour drive). Hotel check in and free at your own leisure. (Standard Check in time: 1400, Early Check in up on availability) Overnight in Siem Reap.', 
  '["Airport pickup by private driver at SAI Airport","1-hour drive through Cambodian countryside to the hotel","Free evening to explore the local night markets or Pub Street"]', 
  '/images/cambodia/Cambodia-Map.jpg', 0
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 2, 'Angkor Wat, Angkor Thom City Complex (B)', 'Siem Reap', 
  'Discover Angkor Wat, the largest temple in the world. Next, explore the Great Angkor City of Khmer Empire. Start at South gate of Angkor Thom. Visit Bayon Temple, Baphuon, the Terrace of the Elephants, and the Terrace of the Leper King. Afternoon visit to the hidden jungle temple of Ta Prohm. Climb Bakheng Mountain to view the most beautiful sunset.', 
  '["Full day tour of Angkor Archaeological Park","Explore the main structures of Angkor Wat and Angkor Thom","See the giant tree roots reclaiming the stone corridors of Ta Prohm","Spectacular sunset from Bakheng Mountain"]', 
  '/images/cambodia/Cambodia-5.jpg', 1
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 3, 'Boat Trip, Local Tour (B)', 'Siem Reap & Tonle Sap', 
  'Breakfast in hotel and start tour at 08:30. Tour guide picks up from hotel lobby. Visit Tonle Sap, the largest freshwater lake in Asia. Get in a wooden boat, visit floating villages of residents, see how they live and make their living on floating houses. Enjoy the view of floating markets, floating schools, pagodas, health centers. Continue to visit Senteurs d\'Angkor Workshop and West Baray, the largest hand-cut water reservoir in Cambodia. In the evening, visit Street food at Street 60.', 
  '["Wooden boat cruise on Tonle Sap Freshwater Lake","See floating villages, schools, and markets of local residents","Visit Senteurs d\'Angkor natural craft workshop","Visit West Baray reservoir and enjoy evening street food at Street 60"]', 
  '/images/cambodia/Cambodia-9.jpg', 2
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 4, 'Transfer to Siem Reap Airport (SAI) (B) / No Guide', 'Siem Reap', 
  'Breakfast in hotel. Free at your own enjoyment till time transfer to airport for flight back home or connecting countries with the unforgettable trip in Cambodia. (A WONDERFUL JOURNEY ☺)', 
  '["Enjoy breakfast at the hotel","Free morning for shopping or exploring town","Transfer to airport by private driver"]', 
  '/images/cambodia/Cambodia-Map.jpg', 3
);

INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) VALUES
(@pkg_id, 'Tonle Sap Boat Cruise', 'Cruise on Southeast Asia\'s largest freshwater lake, visiting stilted homes, floating schools, and floating markets.', 'Waves', 0),
(@pkg_id, 'Angkor Wat & Thom Tour', 'Explore the ancient walled city of Angkor Thom and the massive, beautifully preserved temple of Angkor Wat.', 'Landmark', 1),
(@pkg_id, 'West Baray Reservoir', 'Visit the enormous 11th-century artificial lake, a historic engineering marvel and local weekend retreat.', 'MapPin', 2),
(@pkg_id, 'Street 60 Culinary Tour', 'Taste traditional Cambodian street snacks alongside locals at the bustling Street 60 evening market.', 'Utensils', 3);

INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) VALUES
(@pkg_id, 'Select a community-based boat tour to ensure your visit directly supports the floating village families.', 0),
(@pkg_id, 'Check the weather beforehand; floating village visits are best during high water levels (September to January).', 1),
(@pkg_id, 'Always remove hats and footwear before entering active pagoda prayer halls.', 2),
(@pkg_id, 'Ensure you have cash in small bills ($1, $5, $10 USD) for buying snacks and souvenirs at markets.', 3);

INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) VALUES
(@pkg_id, '/images/cambodia/CB3-600x350.jpg', 0),
(@pkg_id, '/images/cambodia/Cambodia-5.jpg', 1),
(@pkg_id, '/images/cambodia/Cambodia-9.jpg', 2);


-- Package 4: 4D/3N – Phnom Penh 1N + Siem Reap 2N
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  '4d-3n-phnom-penh-1n-siem-reap-2n', '4D/3N – Phnom Penh 1N + Siem Reap 2N', 'Cambodia', 'Southeast Asia', 
  'A classic journey spanning the capital and ancient Angkor', '/images/cambodia/CB5-600x350.jpg', 'Embark on a classic Cambodian adventure. Start in Phnom Penh, exploring the Royal Palace, Silver Pagoda, and Wat Phnom. Afterward, take a scenic 6-hour bus ride to Siem Reap, the gateway to Angkor. Dedicate a full day to discovering the breathtaking temples of Angkor Wat, Bayon, Ta Prohm, and watching the sunset from Bakheng Mountain.', 
  104.92, 11.56, 'Historical', 'bg-amber-600', 
  'A classic journey spanning the capital and ancient Angkor.', '/images/dest-11.jpg', 
  'published', '', '4 Days', 
  'Phnom Penh', 'Cambodian Riel (KHR) & US Dollar (USD)', 'Tropical monsoon — hot year-round', 'November–February (cool, dry season)', 
  'Khmer, English', 'ICT (UTC+7)', 'Right'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = '4d-3n-phnom-penh-1n-siem-reap-2n');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 1, 'Phnom Penh Airport (PNH) - Arrival, Transfer In / Free Leisure / No Guide', 'Phnom Penh', 
  'Welcome to Phnom Penh Airport OR Bus station in Phnom Penh, welcome and transfer to hotel by driver, Free at own leisure. (Standard Check in time: 1400, Early Check in up on availability) Overnight in your selected hotel, Phnom Penh.', 
  '["Driver pickup at Phnom Penh Airport or bus station","Transfer to hotel in Phnom Penh","Explore the Riverside promenade at your own pace"]', 
  '/images/cambodia/Cambodia-2.jpg', 0
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 2, 'Phnom Penh Sightseeing – Transfer to Siem Reap (B)', 'Phnom Penh & Siem Reap', 
  'Breakfast in hotel and check out. 08:00: Visit The Royal Palace, Silver Pagoda, Independence Monument, Wat Phnom. Transfer to Bus station for leaving to Siem Reap (6 hours drive / no guide, bus ticket included). Arrival Siem Reap, driver transfer to hotel check in and overnight in Siem Reap.', 
  '["Guided morning tour of Phnom Penh highlights","View the Silver Pagoda and Throne Hall at Royal Palace","6-hour bus transfer to Siem Reap with tickets included","Arrive and check in to Siem Reap hotel"]', 
  '/images/cambodia/Cambodia-1.jpg', 1
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 3, 'Angkor Wat, Angkor Thom City Complex (B)', 'Siem Reap', 
  'Discover Angkor Wat, the largest temple in the world. Next, explore the Great Angkor City of Khmer Empire. Start at South gate of Angkor Thom. Visit Bayon Temple, Baphuon, the Terrace of the Elephants, and the Terrace of the Leper King. Afternoon visit to the hidden jungle temple of Ta Prohm. Climb Bakheng Mountain to view the most beautiful sunset.', 
  '["Guided tour of magnificent Angkor Wat","See the South Gate of Angkor Thom and Bayon\'s giant stone faces","Wander the ruined corridors of Ta Prohm overrun by trees","Watch the sunset from the Bakheng Mountain hill temple"]', 
  '/images/cambodia/Cambodia-5.jpg', 2
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 4, 'Transfer to Siem Reap Airport (SAI) (B) / No Guide', 'Siem Reap', 
  'Breakfast in hotel. Free at your own enjoyment till time transfer to airport for flight back home or connecting countries with the unforgettable trip in Cambodia. (A WONDERFUL JOURNEY ☺)', 
  '["Enjoy breakfast at the hotel","Free morning in Siem Reap for shopping","Transfer to airport by private driver"]', 
  '/images/cambodia/Cambodia-9.jpg', 3
);

INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) VALUES
(@pkg_id, 'Royal Palace Complex', 'Explore the elegant Khmer architecture of Phnom Penh\'s Royal Palace and the adjacent Silver Pagoda.', 'Landmark', 0),
(@pkg_id, 'Angkor Wat Wonders', 'Wander the corridors, courtyards, and libraries of the legendary Angkor Wat temple complex.', 'MapPin', 1),
(@pkg_id, 'Intercity Bus Journey', 'Travel like a local through Cambodia\'s flat agricultural plains on a comfortable bus.', 'Bus', 2),
(@pkg_id, 'Independence Monument', 'Admire the lotus-spire monument constructed in 1958 to celebrate Cambodia\'s independence from France.', 'Award', 3);

INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) VALUES
(@pkg_id, 'The intercity bus ride is approximately 6 hours; carry snacks, water, and headphones.', 0),
(@pkg_id, 'Bring modest attire (covering shoulders and knees) for the Royal Palace and temple tours.', 1),
(@pkg_id, 'Cambodia widely accepts US dollars, but notes must be in pristine condition (no markings or tears).', 2),
(@pkg_id, 'Stay hydrated during temple walks; buy fresh coconuts from vendors outside ruins.', 3);

INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) VALUES
(@pkg_id, '/images/cambodia/CB5-600x350.jpg', 0),
(@pkg_id, '/images/cambodia/Cambodia-2.jpg', 1),
(@pkg_id, '/images/cambodia/Cambodia-1.jpg', 2),
(@pkg_id, '/images/cambodia/Cambodia-5.jpg', 3),
(@pkg_id, '/images/cambodia/Cambodia-9.jpg', 4);


-- Package 5: 6D/5N - Phnom Penh 2N + Siem Reap 3N
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  '6d-5n-phnom-penh-2n-siem-reap-3n', '6D/5N - Phnom Penh 2N + Siem Reap 3N', 'Cambodia', 'Southeast Asia', 
  'The ultimate Cambodian journey with Apsara dance and floating villages', '/images/cambodia/CB1-600x350.jpg', 'Experience the ultimate 6-day Cambodian exploration. Discover the grand capital of Phnom Penh, visiting the Royal Palace, Silver Pagoda, and cruising the Mekong River at sunset. Travel to Siem Reap to witness the legendary Angkor Wat and Angkor Thom complex. Cruise Tonle Sap Lake, visit local craft workshops, and culminate your journey with an unforgettable buffet dinner and traditional Apsara dance performance.', 
  104.92, 11.56, 'Historical', 'bg-amber-600', 
  'The ultimate Cambodian journey with Apsara dance and floating villages.', '/images/dest-11.jpg', 
  'published', '', '6 Days', 
  'Phnom Penh', 'Cambodian Riel (KHR) & US Dollar (USD)', 'Tropical monsoon — hot year-round', 'November–February (cool, dry season)', 
  'Khmer, English', 'ICT (UTC+7)', 'Right'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = '6d-5n-phnom-penh-2n-siem-reap-3n');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 1, 'Phnom Penh Airport - Arrival, Transfer In / Free Leisure / No Guide', 'Phnom Penh', 
  'Welcome to Phnom Penh Airport OR Bus station in Phnom Penh, welcome and transfer to hotel by driver, Free at own leisure. (Standard Check in time: 1400, Early Check in up on availability) Overnight in your selected hotel, Phnom Penh.', 
  '["Driver pickup at airport or bus station in Phnom Penh","Transfer to hotel in capital city","Free leisure to relax or walk along the riverfront"]', 
  '/images/cambodia/Cambodia-2.jpg', 0
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 2, 'Phnom Penh Sightseeing (B)', 'Phnom Penh', 
  'Visit The Royal Palace, Silver Pagoda, Independence Monument, Wat Phnom, Central Market for shopping, Wat Ounalom, and later, enjoy a one-hour sunset cruise along the Mekong River. Overnight in Phnom Penh.', 
  '["Visit the Royal Palace Throne Hall and Silver Pagoda","See Independence Monument and Wat Phnom","Free shopping time at Central Market","1-hour sunset cruise on Mekong River"]', 
  '/images/cambodia/Cambodia-1.jpg', 1
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 3, 'Phnom Penh Sightseeing – Transfer to Siem Reap, Local Tour (B)', 'Phnom Penh & Siem Reap', 
  'Breakfast in hotel and check out. Transfer to Bus station for leaving to Siem Reap (6 hours drive/ no guide, bus ticket included). Arrival Siem Reap, welcome and transfer to hotel check in. Afternoon, visit Wat Bo (one of the oldest temples in Siem Reap) and Wat Preah Prom Rath. Visit Street food at Street 60 where you can see local people gathering.', 
  '["Scenic 6-hour bus ride from Phnom Penh to Siem Reap (tickets included)","Visit Wat Bo pagoda, listed as a cool neighborhood in TimeOut","Visit Wat Preah Prom Rath riverside Buddhist temple","Explore the local evening food market at Street 60"]', 
  '/images/cambodia/Cambodia-4.jpg', 2
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 4, 'Angkor Wat, Angkor Thom City Complex (B)', 'Siem Reap', 
  'Discover Angkor Wat, the largest temple in the world. Next, explore the Great Angkor City of Khmer Empire. Start at South gate of Angkor Thom. Visit Bayon Temple, Baphuon, the Terrace of the Elephants, and the Terrace of the Leper King. Afternoon visit to the hidden jungle temple of Ta Prohm. Climb Bakheng Mountain to view the most beautiful sunset.', 
  '["Guided tour of the world-famous Angkor Wat temple","See the South Gate of Angkor Thom and Bayon\'s giant stone faces","Walk through Ta Prohm jungle temple with tree roots","Sunset from the top of Bakheng Mountain"]', 
  '/images/cambodia/Cambodia-5.jpg', 3
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 5, 'Boat Trip to Floating Village, Dinner with Apsara Dance (B/D)', 'Siem Reap & Tonle Sap', 
  'Breakfast in hotel and start tour at 08:30. Visit Tonle Sap, the largest freshwater lake in Asia. Board a private boat, visit floating villages of residents, see how they live and make their living on floating houses. Continue to "Chantiers Ecoles - Les Artisans d\'Angkor" wood/stone carving workshops, and visit Senteurs d\'Angkor Workshop. Take a short walk near King\'s Residence to see the Main Shrine (Yeay Teap, Preah Ang Chek, and Preah Ang Chorm). Enjoy Buffet Dinner with Apsara Dance.', 
  '["Private boat cruise visiting floating villages on Tonle Sap Lake","Visit Artisans d\'Angkor carving training center","Visit Senteurs d\'Angkor Workshop and Royal Residence Main Shrine","Buffet Dinner with classical Apsara Dance show performance"]', 
  '/images/cambodia/Cambodia-9.jpg', 4
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 6, 'Transfer to Siem Reap Airport (SAI) (B) / No Guide', 'Siem Reap', 
  'Breakfast in hotel. Free at your own enjoyment till time transfer to airport for flight back home or connecting countries with the unforgettable trip in Cambodia. (A WONDERFUL JOURNEY ☺)', 
  '["Enjoy breakfast at the hotel","Free morning in Siem Reap for souvenir shopping","Transfer to SAI airport by private driver"]', 
  '/images/cambodia/Cambodia-Map.jpg', 5
);

INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) VALUES
(@pkg_id, 'Apsara Dance Dinner', 'Enjoy a traditional Khmer buffet dinner while watching classical Apsara dance performances depicting folklore.', 'Music', 0),
(@pkg_id, 'Floating Village Boat Tour', 'Observe stilted houses, schools, and markets of local residents floating on the massive Tonle Sap Lake.', 'Waves', 1),
(@pkg_id, 'Les Artisans d\'Angkor', 'Observe young Cambodian artisans training in wood and stone carving, keeping traditional crafts alive.', 'Award', 2),
(@pkg_id, 'Angkor Wat Temple', 'Explore the architectural grandeur, libraries, and galleries of the world\'s largest religious complex.', 'Landmark', 3);

INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) VALUES
(@pkg_id, 'Apsara dance dinners are highly popular; reserve your table at least a day in advance.', 0),
(@pkg_id, 'Purchase authentic crafts at Les Artisans d\'Angkor to support local training programs.', 1),
(@pkg_id, 'USD is preferred; ensure you have small, crisp bills ($1, $5, $10 USD) for markets.', 2),
(@pkg_id, 'Stay hydrated during the extensive walking tours around the temples.', 3);

INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) VALUES
(@pkg_id, '/images/cambodia/CB1-600x350.jpg', 0),
(@pkg_id, '/images/cambodia/Cambodia-2.jpg', 1),
(@pkg_id, '/images/cambodia/Cambodia-1.jpg', 2),
(@pkg_id, '/images/cambodia/Cambodia-4.jpg', 3),
(@pkg_id, '/images/cambodia/Cambodia-5.jpg', 4),
(@pkg_id, '/images/cambodia/Cambodia-9.jpg', 5);
