-- Australia Tour Packages Schema and Data
-- This script creates tables if they do not exist and inserts/updates the 12 Australia packages.

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

-- Package: Heritage & Flavours of Sydney, Hobart & Melbourne
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  'heritage-flavours-sydney-hobart-melbourne', 'Heritage & Flavours of Sydney, Hobart & Melbourne', 'Australia', 'Oceania', 
  'Savor the rich culture, history, and culinary delights of Australia''s iconic cities and islands', '/assets/images/australia/1.jpg', 'Embark on an unforgettable 14-day culinary and heritage journey across Sydney, Hobart, and Melbourne. Discover iconic city landmarks, historic neighborhoods, and rugged coastal wonders. Savor fine dining, fresh seafood cruises, and premium wine tastings while staying in premium boutique accommodation. From the sails of the Sydney Opera House to the historic charm of Hobart and the vibrant laneways of Melbourne, this tour captures the refined spirit of Australia.', 
  151.2093, -33.8688, 'Food', 'bg-orange-500', 
  'Savor the rich culture, history, and culinary delights of Australia''s iconic cities and islands', '/assets/images/australia/1.jpg', 
  'published', 'from $7,099 AUD', '14 Days', 
  'Canberra', 'Australian Dollar (AUD)', 'Temperate in the south, warm summers and cool winters', 'September–November & March–May', 
  'English', 'AEST (UTC+10)', 'Left'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = 'heritage-flavours-sydney-hobart-melbourne');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 1, 'Arrival in Sydney', 'Sydney', 
  'Arrive in Sydney for a 4-night stay, then enjoy a VIP tour of the Opera House followed by dinner at Bennelong.', '["Private airport transfer to your luxury hotel", "VIP Sydney Opera House guided tour", "Fine dining at the award-winning Bennelong restaurant"]', '/assets/images/australia/1.jpg', 0
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 2, 'Sydney Sightseeing', 'Sydney', 
  'Explore Sydney’s iconic sights with a guided tour, enjoy lunch by the harbor, and relax at Bondi Beach.', '["Guided tour of historic Rocks district", "See the Harbour Bridge and Royal Botanic Gardens", "Waterfront lunch and relaxation at Bondi Beach"]', '/assets/images/aus/Sydney,  New South Wales.png', 1
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 3, 'Sydney Harbour Lunch Cruise', 'Sydney', 
  'Sail Sydney Harbour in luxury, dining at waterfront icons like Doyles and Balmoral, with landmark views, onboard dessert, and optional swim.', '["Luxury sailing cruise across Sydney Harbour", "Waterfront dining at Doyles or Balmoral", "Stunning harbor views, dessert on board, and optional swim"]', '/assets/images/australia/1.jpg', 2
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 4, 'Hunter Valley Wine Tour', 'Hunter Valley', 
  'Explore Sydney’s historic sites and Ku-ring-gai landscapes en route to Hunter Valley for wine tastings and a gourmet lunch.', '["Drive through Ku-ring-gai Chase National Park", "Premium wine and gin tastings at boutique Hunter Valley estates", "Gourmet vineyard lunch with local wines"]', '/assets/images/australia/1.jpg', 3
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 5, 'Sydney - Hobart', 'Sydney & Hobart', 
  'After breakfast, transfer to Sydney Airport for your flight to Hobart. On arrival, you will be met and transferred to your accommodation for a 5-night stay.', '["Transfer to Sydney Airport and flight to Hobart", "Airport meet-and-greet in Hobart", "Check in to premium Hobart accommodation for 5 nights"]', '/assets/images/aus/Tasmania.png', 4
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 6, 'Bruny Island Experience', 'Hobart & Bruny Island', 
  'Ferry to Bruny Island for a day of scenic beauty, gourmet delights, and wildlife spotting at Fluted Cape.', '["Ferry crossing to Bruny Island", "Gourmet tastings of cheese, oysters, berries, and whiskey", "Scenic wilderness walk and wildlife spotting at Fluted Cape"]', '/assets/images/aus/Tasmania.png', 5
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 7, 'Hobart Historic Walk', 'Hobart', 
  'Spend a relaxed morning in Hobart, then uncover its rich history on a guided walking tour through heritage-listed landmarks and captivating local stories.', '["Morning at leisure to explore Hobart or Salamanca markets", "3-hour guided walking tour of Battery Point and Salamanca", "Fascinating local history and colonial architecture"]', '/assets/images/aus/Tasmania.png', 6
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 8, 'Tasmanian Seafood Cruise', 'Hobart & Bruny Island', 
  'Cruise from Hobart to Bruny Island’s Bull Bay for a half-day seafood feast featuring fresh ocean delicacies, wine, and stunning coastal views.', '["Half-day luxury cruise to Bull Bay on a power catamaran", "Gather and feast on fresh sea urchin, abalone, lobster, and oysters", "Premium Tasmanian wines, cider, and beers included"]', '/assets/images/aus/Tasmania.png', 7
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 9, 'Historic Port Arthur & Richmond', 'Port Arthur & Richmond', 
  'Discover Tasmania’s convict past at Port Arthur, explore the rugged Tasman Peninsula, and visit charming colonial Richmond before returning to Hobart.', '["Guided tour and entry to Port Arthur historic site", "See the dramatic sea cliffs of Tasman Peninsula", "Stroll Richmond''s colonial bridge and sandstone streets"]', '/assets/images/aus/Tasmania.png', 8
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 10, 'Hobart - Melbourne', 'Hobart & Melbourne', 
  'Transfer to Hobart Airport for your flight to Melbourne. On arrival, you will be met and transferred to your accommodation for a 4-night stay.', '["Airport transfer in Hobart and flight to Melbourne", "Bespoke private transfer to your Melbourne hotel", "Settle into premium room for a 4-night stay"]', '/assets/images/aus/Melbourne,  Victoria.png', 9
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 11, 'Great Ocean Road', 'Great Ocean Road', 
  'Depart Melbourne in luxury for a personalized Great Ocean Road adventure featuring Aboriginal culture, wildlife encounters, gourmet meals, and a scenic walk at the Twelve Apostles.', '["Luxury drive along the Great Ocean Road", "Spot wild koalas in Kennett River and hear native dreamtime stories", "Scenic boardwalk at the majestic Twelve Apostles stacks"]', '/assets/images/aus/The Great Ocean Road, Victoria.png', 10
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 12, 'Melbourne Lanes & Arcades', 'Melbourne', 
  'Uncover Melbourne’s hidden gems on a guided lanes and arcades tour featuring historic architecture, street art, chocolate tasting, and local insights.', '["Walking tour of Melbourne''s famous graffiti laneways", "Discover hidden cafes, local designers, and chocolate shops", "Savor a gourmet cafe lunch in a heritage arcade"]', '/assets/images/aus/Melbourne,  Victoria.png', 11
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 13, 'Mornington Peninsula Experience', 'Mornington Peninsula', 
  'Tailor your Mornington Peninsula escape with wildlife encounters, boutique wine tastings, gourmet lunch, and artisan delights amid coastal beauty.', '["Boutique winery tastings in Mornington Peninsula", "Gourmet lunch at a local estate", "Encounter native koalas and kangaroos at a sanctuary"]', '/assets/images/aus/Melbourne,  Victoria.png', 12
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 14, 'Depart Melbourne', 'Melbourne', 
  'After breakfast, transfer to Melbourne Airport for your return flight.', '["Enjoy breakfast at your hotel", "Private transfer to Melbourne Airport for departure"]', '/assets/images/aus/Melbourne,  Victoria.png', 13
);

INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) VALUES
(@pkg_id, 'Sydney Opera House Tour', 'Take a VIP behind-the-scenes guided tour of the iconic Opera House and dine at Bennelong.', 'Landmark', 0);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) VALUES
(@pkg_id, 'Bruny Island Seafood Cruise', 'Savor fresh abalone, lobster, sea urchin, and oysters caught straight from the sea on a premier cruise.', 'Waves', 1);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) VALUES
(@pkg_id, 'Great Ocean Road Drive', 'Witness the dramatic limestone stacks of the Twelve Apostles on a luxury coastal road trip.', 'MapPin', 2);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) VALUES
(@pkg_id, 'Hunter Valley Wine Tasting', 'Sample Shiraz and Semillon at some of Australia''s oldest and most historic vineyards.', 'Wine', 3);

INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) VALUES
(@pkg_id, 'Carry sun protection (SPF 50+) and a wide-brimmed hat at all times.', 0);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) VALUES
(@pkg_id, 'Tipping is not mandatory in Australia, though 10% is appreciated for exceptional service in restaurants.', 1);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) VALUES
(@pkg_id, 'Get an Opal card (Sydney) and myki card (Melbourne) for convenient public transit travel.', 2);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) VALUES
(@pkg_id, 'Tap water is safe and delicious to drink from the tap across Australia.', 3);

INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) VALUES
(@pkg_id, '/assets/images/australia/1.jpg', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) VALUES
(@pkg_id, '/assets/images/aus/Sydney,  New South Wales.png', 1);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) VALUES
(@pkg_id, '/assets/images/aus/Melbourne,  Victoria.png', 2);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) VALUES
(@pkg_id, '/assets/images/aus/The Great Ocean Road, Victoria.png', 3);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) VALUES
(@pkg_id, '/assets/images/aus/Tasmania.png', 4);


-- Package: Signature Spaces in Timeless Places
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  'signature-spaces-timeless-places', 'Signature Spaces in Timeless Places', 'Australia', 'Oceania', 
  'An ultra-luxury journey through Australia''s most iconic hotels and spectacular landscapes', '/assets/images/australia/2.jpg', 'Experience the ultimate in Australian luxury with this curated 17-day journey. Rest in world-renowned boutique hotels, from Sydney''s historic harborside to an underwater suite on the Great Barrier Reef, a converted heritage prison in Melbourne, eco-cabins in the Barossa Valley, and a historic fire station in Adelaide. Blending signature experiences like private wine tours, reef safaris, and wilderness encounters, this tour is designed for the discerning traveler.', 
  151.2093, -33.8688, 'Luxury', 'bg-indigo-500', 
  'An ultra-luxury journey through Australia''s most iconic hotels and spectacular landscapes', '/assets/images/australia/2.jpg', 
  'published', 'from $8,099 AUD', '17 Days', 
  'Canberra', 'Australian Dollar (AUD)', 'Varied, with warm coastal conditions and Mediterranean valleys', 'September–November & March–May', 
  'English', 'AEST & ACST (UTC+10 & UTC+9:30)', 'Left'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = 'signature-spaces-timeless-places');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 1, 'Arrival in Sydney', 'Sydney', 
  'Arrive in Sydney for a three-night stay, then enjoy a VIP Opera House tour followed by a gourmet dinner at Bennelong.', '["Private airport transfer to Harbour Rocks Hotel", "VIP Opera House guided architectural tour", "Custom multi-course dining at Bennelong"]', '/assets/images/australia/2.jpg', 0
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 2, 'Sydney Sightseeing', 'Sydney', 
  'Begin your day with a guided exploration of Sydney’s iconic landmarks, enjoy waterfront dining at the Cruising Yacht Club, and unwind at Bondi Beach.', '["Historic Rocks walking tour", "Gourmet lunch at the Cruising Yacht Club", "Relax and walk the coastal path at Bondi Beach"]', '/assets/images/aus/Sydney,  New South Wales.png', 1
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 3, 'Sydney Harbour Lunch Cruise', 'Sydney', 
  'Indulge in a luxurious Sydney Harbour cruise featuring landmark views, gourmet dining at waterfront icons, and a taste of coastal elegance.', '["Premium harbor cruise on a luxury vessel", "Multi-stop lunch at landmark waterfront restaurants", "Spectacular photo opportunities of Harbour Bridge and Opera House"]', '/assets/images/australia/2.jpg', 2
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 4, 'Wildlife Retreat at Taronga', 'Sydney', 
  'Arrive at the Wildlife Retreat at Taronga by 2PM for an overnight stay, with a guided Sanctuary Tour and dinner at Me-Gal among native animals and serene bushland.', '["Check in to Wildlife Retreat at Taronga Zoo", "Exclusive behind-the-scenes Sanctuary Tour to see koalas and wallabies", "Native-inspired dinner at Me-Gal with panoramic harbor views"]', '/assets/images/australia/2.jpg', 3
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 5, 'Sydney - Hamilton Island', 'Sydney & Hamilton Island', 
  'Wake to the sounds of koalas and lyrebirds, enjoy breakfast at Me-Gal, then fly to Hamilton Island for a sunset BBQ cruise through the Whitsundays.', '["Gourmet retreat breakfast at Taronga Zoo", "Flight to Hamilton Island in the Whitsundays", "Sunset catamaran cruise with island BBQ dinner"]', '/assets/images/aus/Great Barrier Reef, Queensland.png', 4
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 6, 'Great Barrier Reef Over-Night', 'Great Barrier Reef', 
  'Cruise to Hardy Reef for snorkeling, diving, and sunset views, then sleep beneath the sea in Reefworld’s underwater suite.', '["Scenic cruise to Hardy Reef pontoon", "Snorkel and view marine life via semi-submersible", "Sleep in a private suite with glass walls looking into the reef"]', '/assets/images/aus/Great Barrier Reef, Queensland.png', 5
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 7, 'Great Barrier Reef - Hamilton Island', 'Great Barrier Reef & Hamilton Island', 
  'Enjoy a leisurely breakfast and another day snorkeling on the reef before traveling back to Hamilton Island for an overnight stay.', '["Underwater breakfast viewing corals and turtles", "Unlimited snorkeling and reef viewing", "Return cruise to Hamilton Island Reef View Hotel"]', '/assets/images/aus/Great Barrier Reef, Queensland.png', 6
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 8, 'Hamilton Island - Melbourne', 'Hamilton Island & Melbourne', 
  'Fly to Melbourne for an overnight escape at Interlude, where subterranean baths and prison tales await.', '["Transfer and flight to Melbourne", "Stay at The Interlude at Pentridge Prison", "Soak in the historic subterranean thermal baths"]', '/assets/images/aus/Melbourne,  Victoria.png', 7
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 9, 'Pentridge Tour & QT Melbourne', 'Melbourne', 
  'Begin your day with an optional complex tour, then settle into a stylish 3-night stay at QT Melbourne, a reimagined former cinema.', '["Pentridge Prison historic tour", "Transfer to QT Melbourne in the city center", "Leisure time in Melbourne''s fashion precinct"]', '/assets/images/aus/Melbourne,  Victoria.png', 8
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 10, 'Melbourne Creative Soul Tour', 'Melbourne', 
  'Explore Melbourne’s creative soul with a personalized Localing tour through laneways, studios, and vibrant Fitzroy.', '["Localing customized lanes and studios walking tour", "Visit street art blocks and independent artisan workshops", "Trendy cafe lunch in Fitzroy"]', '/assets/images/aus/Melbourne,  Victoria.png', 9
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 11, 'Great Ocean Road', 'Great Ocean Road', 
  'Journey the Great Ocean Road in luxury with wildlife sightings, rainforest strolls, coastal marvels, and a tree planted for you.', '["Bespoke private Great Ocean Road drive", "Ancient temperate rainforest walks", "Eco-conservation contribution: a native tree planted in your name"]', '/assets/images/aus/The Great Ocean Road, Victoria.png', 10
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 12, 'Melbourne - Adelaide - Barossa Valley', 'Melbourne & Barossa Valley', 
  'Fly from Melbourne to Adelaide, then unwind in a luxury eco-cabin in the Barossa Valley—steps from Seppeltsfield’s wines, artisan fare, and vineyard vistas.', '["Flight to Adelaide and transfer to Barossa Valley", "Boutique eco-cabin stay at CABNX Seppeltsfield", "Walk through historic vineyards at sunset"]', '/assets/images/aus/Adelaide,  South Australia.png', 11
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 13, 'Barossa Wine Experience', 'Barossa Valley', 
  'Enjoy a flexible private tour of Barossa Valley with cabin breakfast, premium Shiraz, and gourmet lunch.', '["Cabin breakfast basket of local provisions", "Private tastings of aged Shiraz at historic cellars", "Gourmet lunch at a winery restaurant"]', '/assets/images/aus/Adelaide,  South Australia.png', 12
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 14, 'Barossa Valley - Adelaide', 'Barossa Valley & Adelaide', 
  'Travel to Adelaide for a 3-night stay in a charming 1866 Fire Station, featuring its own vintage fire engine.', '["Scenic drive back to Adelaide", "Check in to the Fire Engine Suite at the Fire Station Inn", "Explore the historic North Adelaide neighborhood"]', '/assets/images/aus/Adelaide,  South Australia.png', 13
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 15, 'Adelaide Central Market Tour', 'Adelaide', 
  'Savor breakfast and tastings on a gourmet tour of Adelaide Central Market, South Australia’s culinary heart.', '["Early morning Central Market tasting tour", "Meet local stallholders and try cheeses, fruits, and pastries", "Gourmet market breakfast with local coffee"]', '/assets/images/aus/Adelaide,  South Australia.png', 14
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 16, 'Kangaroo Island Day Trip', 'Kangaroo Island', 
  'Encounter Kangaroo Island’s wild beauty with sea lions, rare birds, and a gourmet bush picnic.', '["Flight to Kangaroo Island", "See wild sea lions at Seal Bay Conservation Park", "Gourmet outback picnic with local wines"]', '/assets/images/aus/Adelaide,  South Australia.png', 15
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 17, 'Depart Adelaide', 'Adelaide', 
  'Your Australian experience concludes with a private transfer to Adelaide Airport.', '["Enjoy breakfast at the Fire Station Inn", "Private transfer to Adelaide Airport for departure"]', '/assets/images/aus/Adelaide,  South Australia.png', 16
);

INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) VALUES
(@pkg_id, 'Taronga Zoo Stay', 'Sleep among native animals with stunning Sydney Harbour views at the Taronga Wildlife Retreat.', 'Heart', 0);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) VALUES
(@pkg_id, 'Reef Suite Underwater Sleep', 'Spend a night in a luxury underwater suite on the Great Barrier Reef with floor-to-ceiling glass.', 'Eye', 1);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) VALUES
(@pkg_id, 'Barossa Eco-Cabin Retreat', 'Stay at Seppeltsfield in an eco-cabin surrounded by vines and historic Shiraz wineries.', 'Castle', 2);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) VALUES
(@pkg_id, 'Kangaroo Island Wildlife', 'Walk among wild sea lions and spot kangaroos, koalas, and echidnas in their natural habitat.', 'Compass', 3);

INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) VALUES
(@pkg_id, 'Prepare for domestic flights by checking weight limits (usually 23kg check-in).', 0);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) VALUES
(@pkg_id, 'Pack light layers, as weather can vary greatly between Sydney, Whitsundays, and Adelaide.', 1);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) VALUES
(@pkg_id, 'Bring reef-safe sunscreen to protect the fragile corals in the Whitsundays.', 2);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) VALUES
(@pkg_id, 'Rentals and cabs can be scarce in regional areas; pre-booking is recommended.', 3);

INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) VALUES
(@pkg_id, '/assets/images/australia/2.jpg', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) VALUES
(@pkg_id, '/assets/images/aus/Great Barrier Reef, Queensland.png', 1);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) VALUES
(@pkg_id, '/assets/images/aus/Sydney,  New South Wales.png', 2);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) VALUES
(@pkg_id, '/assets/images/aus/Melbourne,  Victoria.png', 3);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) VALUES
(@pkg_id, '/assets/images/aus/Adelaide,  South Australia.png', 4);


-- Package: Signature Territory Experience
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  'signature-territory-experience', 'Signature Territory Experience', 'Australia', 'Oceania', 
  'Journey into the red heart and tropical north of Australia aboard The Ghan', '/assets/images/australia/3.jpg', 'Explore the vast outback and ancient landscapes of Australia''s Northern Territory on this 15-day expedition. Ride the legendary Ghan railway between Adelaide, Alice Springs, and Darwin. Deeply immerse in the Red Centre with visits to Standley Chasm, Kings Canyon, and the majestic Uluru. Then, venture into Litchfield and Kakadu National Parks to witness cascading waterfalls, saltwater crocodiles, and thousands of years of Indigenous rock art.', 
  133.8807, -23.698, 'Adventure', 'bg-orange-500', 
  'Journey into the red heart and tropical north of Australia aboard The Ghan', '/assets/images/australia/3.jpg', 
  'published', 'from $9,479 AUD', '15 Days', 
  'Darwin', 'Australian Dollar (AUD)', 'Arid desert in the centre; tropical wet/dry in the north', 'May–September (dry season in the north, cooler outback)', 
  'English', 'ACST (UTC+9:30)', 'Left'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = 'signature-territory-experience');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 1, 'Depart Adelaide', 'Adelaide & The Ghan', 
  'Board The Ghan in Adelaide, heading for the Flinders Ranges and beyond. The city streets will give way to rural South Australia before the impressive mountains of the Flinders Ranges come into view. Lunch and dinner will be your introduction to dining on board and set the scene for the meals to come.', '["Board the iconic Ghan train in Adelaide", "See the beautiful Flinders Ranges from the carriage window", "Fine dining and all-inclusive premium drinks on board"]', '/assets/images/australia/3.jpg', 0
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 2, 'The Ghan & Marla Sunrise', 'Marla & Alice Springs', 
  'After a night of fine dining and comfort aboard The Ghan, wake to a breathtaking outback sunrise at remote Marla. Enjoy breakfast, then continue to Alice Springs, where a new journey begins. Meet the Outback Spirit crew for the eight-day Red Centre Explorer tour. Check in to your Alice Springs hotel for a two-night stay, with welcome drinks, a tour briefing, and dinner at the hotel.', '["Breathtaking outback sunrise over the red sand at Marla", "Arrive in Alice Springs and meet your 4WD safari crew", "Welcome drinks and briefing at your Alice Springs hotel"]', '/assets/images/aus/Uluru (Ayers Rock),  Northern Territory.png', 1
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 3, 'Simpsons Gap & Desert Park', 'Alice Springs', 
  'Today, explore the natural beauty of Alice Springs and its surrounds. Start with a walk at Simpsons Gap, a sacred Arrernte site, followed by a visit to Standley Chasm, owned and operated by the local Arrernte community. After morning tea, head to the Alice Springs Desert Park for a guided tour that reveals the richness of desert life. In the evening, enjoy a classic outback BBQ and show under the stars.', '["Walk Simpsons Gap to spot black-footed rock wallabies", "Guided tour of Standley Chasm cultural site", "Outback BBQ dinner and local music under the stars"]', '/assets/images/aus/Uluru (Ayers Rock),  Northern Territory.png', 2
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 4, 'Alice Springs - Kings Canyon', 'West MacDonnell Ranges & Kings Canyon', 
  'Leave Alice Springs and head deeper into the outback. Stop at Ellery Creek for a short walk and morning tea, then visit the striking red cliffs of Ormiston Gorge. After lunch, travel the scenic Mereenie Loop to Kings Canyon in Watarrka National Park. Arrive at Kings Canyon Resort for a two-night stay, with dinner tonight at Carmichael’s, nestled among native bushland—keep an eye out for curious dingoes.', '["Walk Ormiston Gorge and swim in the waterhole", "Drive the rugged Mereenie Loop 4WD track", "Carmichael''s restaurant dinner among wild dingo habitats"]', '/assets/images/aus/Uluru (Ayers Rock),  Northern Territory.png', 3
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 5, 'Kings Canyon Walks', 'Kings Canyon', 
  'This morning, explore Kings Canyon with a choice of two walks—the stunning 6km rim walk or the easier 2.6km creek walk. Optional helicopter flights over the canyon are also available (own expense). After lunch and a rest at the resort, there’s more time for scenic flights or leisure. In the evening, enjoy sunset drinks at the Light-Towers installation, followed by dinner at the Kings Canyon Bar & Grill.', '["Hike the spectacular Kings Canyon Rim Walk", "Optional scenic helicopter flight over the deep sandstone canyon", "Sunset drinks at the Light-Towers light art installation"]', '/assets/images/aus/Uluru (Ayers Rock),  Northern Territory.png', 4
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 6, 'Kings Canyon - Uluru', 'Kings Canyon & Uluru', 
  'Today begins with the Karrke Aboriginal Cultural Experience, where you''ll learn about bush tucker and traditional medicines. We then travel via Kings Creek Station to Curtin Springs for lunch before arriving at Sails in the Desert Hotel. In the evening, enjoy the Wintjiri Wiru Sunset Dinner—a stunning open-air cultural show with drones, lasers, and projections set against Uluru, paired with cocktails and a gourmet hamper under the stars.', '["Karrke Aboriginal cultural talk and bush tucker demo", "Stay at premium Sails in the Desert resort", "Wintjiri Wiru drone show and dinner over Uluru dunes"]', '/assets/images/aus/Uluru (Ayers Rock),  Northern Territory.png', 5
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 7, 'Uluru - Kata Tjuta National Park', 'Kata Tjuta & Field of Light', 
  'Begin with a guided Walpa Gorge walk, explore Uluru’s cultural heart, then toast sunset at Field of Light.', '["Walk through the massive domes of Walpa Gorge", "Toast sunset with bubbles and views of Uluru", "Walk the illuminated Field of Light art installation"]', '/assets/images/aus/Uluru (Ayers Rock),  Northern Territory.png', 6
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 8, 'Mala Walk & Sounds of Silence', 'Uluru', 
  'Start the day with an optional Uluru sunrise, followed by breakfast and the Mala Walk, featuring ancient rock art and the serene Kantju Gorge. Enjoy a free afternoon to relax, explore the resort, or take a scenic flight (own expense). In the evening, experience the Sounds of Silence dinner—canapés, a bush-inspired buffet, and stargazing under the desert sky. Return to Sails in the Desert for your final night.', '["Sunrise at Uluru and guided Mala Walk to Kantju Gorge", "See ancient Indigenous rock paintings", "Gourmet Sounds of Silence dinner and outback stargazing"]', '/assets/images/aus/Uluru (Ayers Rock),  Northern Territory.png', 7
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 9, 'Uluru - Alice Springs', 'Uluru & The Ghan', 
  'Savor a final breakfast before rejoining The Ghan for a scenic northbound journey from Alice Springs in Gold Premium comfort.', '["Final morning at Uluru and transfer to Alice Springs", "Board The Ghan heading north to Darwin", "Gold Premium comfort cabin and fine dining"]', '/assets/images/australia/3.jpg', 8
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 10, 'Nitmiluk Gorge & Darwin', 'Katherine & Darwin', 
  'Cruise through Nitmiluk Gorge or choose a unique outback experience before ending your Ghan journey in Darwin’s vibrant Waterfront Precinct.', '["Morning cruise through spectacular Katherine Gorge", "Arrive in Darwin by evening", "Stay at Darwin Waterfront hotel"]', '/assets/images/aus/darwin.jpg', 9
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 11, 'Darwin - Litchfield - Kakadu', 'Litchfield & Kakadu National Park', 
  'Embark on your Outback Spirit journey from Darwin to Kakadu via Litchfield’s waterfalls and forests, with a stay at the Crocodile Hotel.', '["Venture into Litchfield National Park''s monsoon forests", "Swim in natural spring-fed waterfall pools", "Check in to the unique Crocodile Hotel in Jabiru"]', '/assets/images/aus/darwin.jpg', 10
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 12, 'Kakadu National Park', 'Kakadu', 
  'Take in Kakadu’s grandeur with a scenic flight, Indigenous-guided river cruise, ancient rock art, and sunset serenity.', '["Scenic flight over Kakadu''s escarpments and waterfalls", "Indigenous cruise on the East Alligator River", "View ancient rock art at Ubirr and enjoy a sunset view"]', '/assets/images/aus/darwin.jpg', 11
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 13, 'Kakadu - Darwin', 'Kakadu & Darwin', 
  'Travel from Kakadu through Mary River’s wetlands and Humpty Doo farms, ending your tour in Darwin by evening.', '["Spot giant crocodiles on a Mary River wetlands cruise", "Stop at the Humpty Doo local mango farms", "Check back in to your Darwin hotel"]', '/assets/images/aus/darwin.jpg', 12
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 14, 'Darwin Sunset Cruise', 'Darwin', 
  'Spend a relaxed day in Darwin, capped by a sunset cruise with local seafood and fiery Top End skies.', '["Free day to explore Darwin''s markets or Wave Lagoon", "Gourmet sunset cruise on Darwin Harbour", "Enjoy local barramundi and fresh prawns"]', '/assets/images/aus/darwin.jpg', 13
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 15, 'Depart Darwin', 'Darwin', 
  'Check out this morning, wrapping up your 15-day Ultimate Territory Tour with unforgettable outback memories and cultural insight.', '["Enjoy breakfast overlooking the harbor", "Bespoke private transfer to Darwin Airport"]', '/assets/images/aus/darwin.jpg', 14
);

INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) VALUES
(@pkg_id, 'The Ghan Expedition', 'Ride one of the world''s most legendary trains from Adelaide to Darwin in premium luxury.', 'Train', 0);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) VALUES
(@pkg_id, 'Wintjiri Wiru Show', 'Witness Uluru''s ancient stories told through an award-winning light show of 1,000 drones and lasers.', 'Sun', 1);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) VALUES
(@pkg_id, 'Kakadu Scenic Flight', 'Fly over the massive escarpments and cascading waterfalls of World Heritage Kakadu.', 'Plane', 2);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) VALUES
(@pkg_id, 'Darwin Sunset Sail', 'Sail Darwin Harbour on a luxury catamaran and watch a legendary Top End sunset with fresh seafood.', 'Waves', 3);

INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) VALUES
(@pkg_id, 'Prepare for hot weather and strong sun in the outback and tropical north; bring a fly net and hat.', 0);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) VALUES
(@pkg_id, 'The Ghan train has strict luggage limits; check large bags and take a smaller cabin bag.', 1);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) VALUES
(@pkg_id, 'Always follow crocodile safety signs and swim only in designated safe pools in the NT.', 2);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) VALUES
(@pkg_id, 'Ensure you carry plenty of water (at least 3 liters) when hiking in Uluru or Kings Canyon.', 3);

INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) VALUES
(@pkg_id, '/assets/images/australia/3.jpg', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) VALUES
(@pkg_id, '/assets/images/aus/Uluru (Ayers Rock),  Northern Territory.png', 1);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) VALUES
(@pkg_id, '/assets/images/aus/darwin.jpg', 2);


-- Package: Wild Wonders Tasmania
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  'wild-wonders-tasmania', 'Wild Wonders Tasmania', 'Australia', 'Oceania', 
  'Encounter rugged wilderness, ancient history, and endemic wildlife in Tasmania', '/assets/images/australia/4.jpg', 'Immerse yourself in the untamed beauty of Australia''s island state on this 8-day wild encounter. Discover Hobart''s historic streets and Salamanca markets, then cruise through pristine waters to Bruny Island for a deep-to-dish seafood feast. Encounter native wildlife at Bonorong Sanctuary, visit the historic ruins of Port Arthur, walk the spectacular granite coastline of Freycinet National Park, and conclude in Launceston.', 
  147.3272, -42.8821, 'Nature', 'bg-teal-500', 
  'Encounter rugged wilderness, ancient history, and endemic wildlife in Tasmania', '/assets/images/australia/4.jpg', 
  'published', 'from $3,939 AUD', '8 Days', 
  'Hobart', 'Australian Dollar (AUD)', 'Cool temperate; clean marine air with four distinct seasons', 'October–April (milder temperatures and longer days)', 
  'English', 'AEST (UTC+10)', 'Left'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = 'wild-wonders-tasmania');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 1, 'Arrival in Hobart', 'Hobart', 
  'On arrival in Hobart, you will be met and transferred to your hotel for a 4-night stay.', '["Private airport transfer in Hobart", "Settle into The Old Woolstore Apartment Hotel", "Explore the historic waterfront at leisure"]', '/assets/images/australia/4.jpg', 0
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 2, 'Hobart Historic Walk', 'Hobart', 
  'This morning, join privately guided walk is the perfect option for those who like to have exclusive access to their guide and have the flexibility to schedule the tour when it suits you. Combining the Hobart Historic Walk with a tour of Salamanca and Battery Point, this 3-hour experience with your local guide will give you indepth insights into Hobart’s past and present.', '["Private guided 3-hour walking tour", "Discover Salamanca Place and Battery Point cottages", "Hear stories of whaling, convicts, and colonial architecture"]', '/assets/images/aus/Tasmania.png', 1
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 3, 'Deep-to-Dish Seafood Cruise', 'Hobart & Bruny Island', 
  'Embark on a half-day Deep-to-Dish Tasmanian Seafood Cruise from Hobart, where you’ll savor the freshest seafood straight from the ocean aboard a premier power catamaran. Cruise through pristine waterways to Bruny Island’s Bull Bay, taking in towering cliffs, secluded beaches, and spotting local sea life like dolphins, whales, and seals. Begin with a seasonal fruit platter and Tasmanian cheeses, paired with premium local wines, before diving into freshly caught periwinkles, sea urchins, abalone, rock lobster, oysters, mussels, and Atlantic salmon—all expertly prepared on board.', '["Luxury power catamaran cruise to Bruny Island", "Feast on abalone, lobster, and oysters caught in front of you", "Sample award-winning Tasmanian cheeses and cold-climate wines"]', '/assets/images/aus/Tasmania.png', 2
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 4, 'Bonorong Wildlife Sanctuary', 'Hobart', 
  'This morning is free to experience Hobart at your leisure. At 04.30 pm, meet your group in the hotel lobby to depart on an evening experience to Bonorong Sanctuary where for a 2.5 hour behind the scenes night-tour where you can get close to many of Tasmania’s endemic animals and get a lot of information first-hand.', '["Free morning in Hobart (visit MONA or Salamanca)", "Behind-the-scenes night tour at Bonorong Sanctuary", "Feed hand-reared kangaroos and see Tasmanian Devils feed"]', '/assets/images/aus/Tasmania.png', 3
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 5, 'Maria Island National Park', 'Maria Island & Bicheno', 
  'This morning, travel to the seaside village of Triabunna and board a ferry to cross the Mercury Passage to Maria Island. This unique island national park sits just off Tasmania’s east coast. Enjoy a day of peaceful walking amongst historic ruins, across sweeping bays, rugged fossil cliffs and imposing mountains. This island sanctuary provides an opportunity to view its resident wildlife, including Wombats, Cape Barren Geese, Tasmanian Pademelons, Forester Kangaroo’s and even the Tasmanian Devil in their natural environment. Later this afternoon, continue your journey along Tasmania’s sunny east-coast to Bicheno.', '["Ferry crossing to Maria Island sanctuary", "Spot wombats, pademelons, and Tasmanian Devils in the wild", "Walk the historic ruins of Darlington convict settlement"]', '/assets/images/aus/Tasmania.png', 4
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 6, 'Freycinet Wineglass Bay Cruise', 'Coles Bay & Wineglass Bay', 
  'After breakfast, travel to Coles Bay and embark on the award-winning 4-hour Wineglass Bay cruise. Cruise the spectacular coastline of Freycinet National Park from Coles Bay to Wineglass Bay. Be enthralled by the stunning granite coastline, including the dramatic pink peaks of the Hazards range. Discover a coast dotted with sparkling white sand beaches, including Cooks and Bryans beaches. Explore the inner passage of remote Schouten Island, home to little penguins, before heading into the Tasman Sea towards Wineglass Bay. At dusk you are invited to an informative tour on a private property to get close to the local colony of fairy penguins nesting and breeding in the dunes.', '["Vista-lounge cruise to iconic Wineglass Bay", "See the pink granite Hazards range and secret sea caves", "Evening guided fairy penguin nesting tour in Bicheno"]', '/assets/images/aus/Tasmania.png', 5
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 7, 'Bay of Fires & Launceston', 'Bay of Fires & Launceston', 
  'Continue your journey along the East Coast and visit the stunning orange-lichen covered granite rocks of the Bay of Fires conservation area. Take the opportunity to wander around, explore the whitest sandy beaches and the turquoise waters. Travel on to the St. Columba Falls, the highest waterfalls in Tasmania and through lush and green valleys before we arrive in Launceston.', '["Explore the orange-lichen rocks of Bay of Fires", "Walk through temperate rainforest to St. Columba Falls", "Settle in to Launceston Grand Chancellor Hotel"]', '/assets/images/aus/Tasmania.png', 6
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 8, 'Cataract Gorge & Departure', 'Launceston', 
  'This morning, enjoy a city introduction of Launceston and visit the stunning Cataract Gorge, where the South Esk river forces its way through sheer granite rocks before the tour ends at midday at the Launceston transit centre. You will be met and transferred to Launceston Airport.', '["Visit Cataract Gorge in Launceston", "Ride the world''s longest single-span chairlift (optional)", "Private transfer to Launceston Airport for departure"]', '/assets/images/aus/Tasmania.png', 7
);

INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) VALUES
(@pkg_id, 'Salamanca Market Walk', 'Stroll the Saturday Salamanca markets for local woolens, woodcrafts, and artisan cheeses.', 'ShoppingBag', 0);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) VALUES
(@pkg_id, 'Seafood Catamaran Cruise', 'Cruise to Bruny Island and feast on lobster, abalone, and oysters gathered fresh from the waters.', 'Waves', 1);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) VALUES
(@pkg_id, 'Maria Island Wilderness', 'Walk among wild wombats and explore convict history on a car-free island sanctuary.', 'Compass', 2);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) VALUES
(@pkg_id, 'Fairy Penguin Tour', 'Watch colonies of little penguins return to their nests in the sand dunes at dusk in Bicheno.', 'Eye', 3);

INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) VALUES
(@pkg_id, 'Tasmania''s weather can change rapidly; always pack a windproof and waterproof jacket.', 0);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) VALUES
(@pkg_id, 'Bring sturdy walking shoes or hiking boots, as the trails in national parks are rocky and uneven.', 1);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) VALUES
(@pkg_id, 'National park entry passes are required; these are typically included in your guided tour package.', 2);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) VALUES
(@pkg_id, 'Tasmania has strict biosecurity laws; do not bring fresh fruit or vegetables onto the island.', 3);

INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) VALUES
(@pkg_id, '/assets/images/australia/4.jpg', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) VALUES
(@pkg_id, '/assets/images/aus/Tasmania.png', 1);


-- Package: Tasmania Uncovered
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  'tasmania-uncovered', 'Tasmania Uncovered', 'Australia', 'Oceania', 
  'A comprehensive self-drive expedition through Tasmania''s spectacular landscapes', '/assets/images/australia/5.jpg', 'Uncover the very best of Tasmania on this 11-day self-drive adventure. Drive through dramatic valleys, historic mining towns, and coastal villages. Discover Hobart''s historic charm, the convict history of Port Arthur, the pink granite peaks of Freycinet, the second-largest city of Launceston, the rugged beauty of Cradle Mountain, and the historic harbor of Strahan. Enjoy the independence of a road trip paired with premium boutique lodgings and curated cruises.', 
  147.3272, -42.8821, 'Adventure', 'bg-orange-500', 
  'A comprehensive self-drive expedition through Tasmania''s spectacular landscapes', '/assets/images/australia/5.jpg', 
  'published', 'from $2,699 AUD', '11 Days', 
  'Hobart', 'Australian Dollar (AUD)', 'Cool temperate; crisp winters and pleasant, sunny summers', 'October–April (spring and summer driving season)', 
  'English', 'AEST (UTC+10)', 'Left'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = 'tasmania-uncovered');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 1, 'Arrival in Hobart', 'Hobart', 
  'Arrive in Hobart for a 2-night stay and enjoy a flexible, private walking tour through its historic heart.', '["Airport pickup and transfer to The Henry Jones Art Hotel", "3-hour private guided walk of Hobart''s historic docks", "Explore the historic waterfront and craft breweries"]', '/assets/images/australia/5.jpg', 0
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 2, 'Bruny Island Safari', 'Hobart & Bruny Island', 
  'Embark on a Bruny Island adventure from Hobart, blending scenic views, gourmet tastings, and lighthouse history.', '["Guided 4WD safari across Bruny Island", "Scenic walks at Adventure Bay and Cape Bruny Lighthouse", "Oyster, cheese, and berry tastings with a local lunch"]', '/assets/images/aus/Tasmania.png', 1
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 3, 'Hobart - Port Arthur - Freycinet', 'Port Arthur & Coles Bay', 
  'Drive from Hobart to Freycinet via Port Arthur’s convict history, coastal wonders, and charming country towns.', '["Pick up your hire car and drive to Port Arthur historic site", "Visit Tasman Arch and the Devil''s Kitchen sea cliffs", "Drive to Coles Bay and check in to Freycinet Lodge"]', '/assets/images/aus/Tasmania.png', 2
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 4, 'Wineglass Bay Cruise', 'Freycinet National Park', 
  'Cruise Freycinet’s stunning coast from Coles Bay to Wineglass Bay, spotting wildlife and sea caves en route.', '["Vista-lounge Wineglass Bay cruise", "See pink granite peaks and white-sand beaches", "Look out for dolphins, sea eagles, and seals"]', '/assets/images/aus/Tasmania.png', 3
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 5, 'Coles Bay - Launceston', 'Launceston', 
  'Drive from Freycinet to Launceston via scenic valleys and historic Evandale, then indulge in wine and lunch at Josef Chromy.', '["Drive through the northern Midlands agricultural belt", "Lunch and estate wine tasting at Josef Chromy", "Settle in to Verge Luxe room at Hotel Verge Launceston"]', '/assets/images/aus/Tasmania.png', 4
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 6, 'Launceston - Cradle Mountain', 'Cradle Mountain', 
  'Journey through Tasmania’s charming villages to Cradle Mountain, then meet Tasmanian Devils up close during After Dark Feeding.', '["Drive through Sheffield, the town of murals", "Settle into Cradle Mountain Hotel", "Guided after-dark Tasmanian Devil feeding tour"]', '/assets/images/aus/Tasmania.png', 5
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 7, 'Cradle Mountain Discovery', 'Cradle Mountain National Park', 
  'Spend a free day exploring Cradle Mountain’s wild beauty—Dove Lake, native wildlife, waterfalls, and stargazing await.', '["Walk the famous Dove Lake Circuit trail under Cradle Mountain", "Spot wombats grazing in the valley at dusk", "Clear night stargazing in the alpine wilderness"]', '/assets/images/aus/Tasmania.png', 6
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 8, 'Cradle Mountain - Strahan', 'Strahan', 
  'Descend from Cradle Mountain through historic mining towns to the charming coastal village of Strahan.', '["Drive through Zeehan and Rosebery historic mining hubs", "Check in to Strahan Village overlooking Macquarie Harbour", "Watch the local play ''The Ship That Never Was'' (optional)"]', '/assets/images/aus/Tasmania.png', 7
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 9, 'Gordon River Cruise', 'Gordon River & Sarah Island', 
  'Cruise the Gordon River aboard Spirit of the Wild, exploring rainforest trails and convict history at Sarah Island.', '["Gordon River cruise aboard the silent Spirit of the Wild", "Walk through ancient temperate rainforests", "Guided tour of Sarah Island''s harsh convict ruins"]', '/assets/images/aus/Tasmania.png', 8
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 10, 'Strahan - Hobart', 'Lyell Highway & Hobart', 
  'Drive from Strahan to Hobart via the scenic Lyell Highway, passing mountains, valleys, and charming country towns.', '["Drive the winding, spectacular Lyell Highway", "Stop at Queenstown''s gravel mountains and Lake St Clair", "Final night at The Henry Jones Art Hotel in Hobart"]', '/assets/images/aus/Tasmania.png', 9
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 11, 'Depart Hobart', 'Hobart', 
  'After breakfast, return your rental vehicle to Hobart Airport prior your departing flight.', '["Enjoy hotel breakfast provisions", "Drive to Hobart Airport and return rental car"]', '/assets/images/aus/Tasmania.png', 10
);

INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) VALUES
(@pkg_id, 'Self-Drive Freedom', 'Navigate Tasmania''s winding, scenic highways with the independence of a premium hire car.', 'Compass', 0);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) VALUES
(@pkg_id, 'Silent Gordon River Cruise', 'Experience Macquarie Harbour and the Gordon River aboard a silent hybrid-propulsion vessel.', 'Waves', 1);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) VALUES
(@pkg_id, 'Dove Lake Walk', 'Hike the 6km Dove Lake loop beneath the dramatic, snow-dusted dolerite columns of Cradle Mountain.', 'MapPin', 2);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) VALUES
(@pkg_id, 'Devils @ Cradle', 'Visit a conservation sanctuary to see and learn about the endangered Tasmanian Devil.', 'Heart', 3);

INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) VALUES
(@pkg_id, 'Hire cars in Tasmania have strict rules against driving on unsealed roads or after dusk (due to wildlife).', 0);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) VALUES
(@pkg_id, 'Fuel stations can be sparse in the Western wilderness; keep your tank topped up.', 1);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) VALUES
(@pkg_id, 'Bring warm clothing even in summer, as Cradle Mountain is an alpine region and cold front storms are common.', 2);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) VALUES
(@pkg_id, 'Buy a Parks Pass online before starting your journey to cover all national park entries.', 3);

INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) VALUES
(@pkg_id, '/assets/images/australia/5.jpg', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) VALUES
(@pkg_id, '/assets/images/aus/Tasmania.png', 1);


-- Package: Trails & Serenity
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  'trails-serenity', 'Trails & Serenity', 'Australia', 'Oceania', 
  'A premium journey of luxury lodges, outback rail, and coastal islands', '/assets/images/australia/6.jpg', 'Embark on a unique 14-day vacation blending luxury lodge stays with the legendary Ghan railway. Settle into Finniss River Lodge near Darwin for outback safaris and airboat wildlife tours. Board The Ghan to travel south through Alice Springs and Coober Pedy to Adelaide. Savor Sequoia Lodge in the Adelaide Hills, then fly to Kangaroo Island for a 3-night stay at the world-renowned Southern Ocean Lodge, surrounded by sea lions and dramatic coastal vistas.', 
  130.8456, -12.4634, 'Luxury', 'bg-indigo-500', 
  'A premium journey of luxury lodges, outback rail, and coastal islands', '/assets/images/australia/6.jpg', 
  'published', 'from $18,529 AUD', '14 Days', 
  'Adelaide', 'Australian Dollar (AUD)', 'Tropical north, hot dry outback, Mediterranean south', 'September–November & May–August', 
  'English', 'ACST (UTC+9:30)', 'Left'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = 'trails-serenity');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 1, 'Darwin - Finniss River Lodge', 'Darwin & Rakula', 
  'This morning, transfer by vehicle from Darwin to Finnis River Lodge (90 minutes). On arrival check-in to your suite and prepare yourself for an unforgettable day of adventure and relaxation.', '["Private transfer from Darwin to Finniss River Lodge", "Check in to a luxury lodge suite on a working cattle station", "Chef-prepared dinner with locally sourced outback ingredients"]', '/assets/images/australia/6.jpg', 0
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 2, 'Rakula Safaris', 'Finniss River wetlands', 
  'Immerse yourself in Finniss River Lodge’s daily guided adventures, from walkabout safaris to airboat wildlife spotting.', '["Airboat tour through freshwater wetlands spotting birds and crocs", "Guided 4WD wildlife safari on the pastoral estate", "Sundowners overlooking the vast black soil floodplains"]', '/assets/images/aus/darwin.jpg', 1
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 3, 'Rakula Leisure & Touring', 'Finniss River wetlands', 
  'Continue exploring the wetland trails, take a helicopter flight to a remote swimming hole (optional), or relax by the pool.', '["Wetland birdwatching and nature walks", "Chef''s tasting menu paired with premium Australian wines", "Afternoon at leisure by the pool overlooking the wetlands"]', '/assets/images/aus/darwin.jpg', 2
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 4, 'Rakula - Darwin', 'Rakula & Darwin', 
  'After a relaxing morning at the Lodge, transfer by vehicle to Darwin for an overnight stay. The remainder of the day is at leisure in Darwin.', '["Morning relaxation at Finniss River", "Transfer back to Darwin", "Stay at Crowne Plaza Darwin near the Waterfront"]', '/assets/images/aus/darwin.jpg', 3
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 5, 'Board The Ghan', 'Darwin & The Ghan', 
  'Board The Ghan in Darwin for a luxurious rail journey through the Top End, featuring gourmet dining and a Nitmiluk Gorge cruise before a restful night on the rails.', '["Board The Ghan Expedition train in Platinum Class", "Afternoon cruise through Katherine''s Nitmiluk Gorge", "Platinum Club dining and drinks on the rails"]', '/assets/images/australia/6.jpg', 4
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 6, 'The Ghan & Alice Springs', 'Alice Springs', 
  'Awaken to outback vistas as The Ghan rolls into Alice Springs. Spend the day exploring cultural sites, desert landscapes, or soaring above Uluru—then dine under the stars in true Ghan style.', '["Wake up to the red sand of Central Australia", "Guided excursion of Alice Springs or Alice Springs Desert Park", "Spectacular dinner under the outback stars at the historic Telegraph Station"]', '/assets/images/aus/Uluru (Ayers Rock),  Northern Territory.png', 5
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 7, 'Coober Pedy Underground', 'Coober Pedy', 
  'Explore Coober Pedy’s underground wonders and opal heritage, then dine below the surface before reboarding The Ghan.', '["Visit an underground home and church in the opal capital", "Guided tour of an active opal mine", "Outback lunch served underground"]', '/assets/images/australia/6.jpg', 6
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 8, 'Adelaide Hills - Sequoia Lodge', 'Adelaide Hills', 
  'Arrive in Adelaide after a scenic rail journey, then unwind at Sequoia Lodge with sunset views and stargazing over Piccadilly Valley.', '["Arrive at Adelaide train terminal and private transfer to Sequoia Lodge", "Check in to your ultra-luxury lodge suite", "Artisan local dinner with sunset views over the valley"]', '/assets/images/aus/Adelaide,  South Australia.png', 7
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 9, 'Sequoia Lodge Experiences', 'Adelaide Hills', 
  'Begin your day with an artisan breakfast and valley views, then choose between nature walks, hot pools, yoga, or garden discovery.', '["Early morning yoga overlooking the valley", "Soak in the spring-fed hot pools", "Guided walk of Mount Lofty Botanic Garden"]', '/assets/images/aus/Adelaide,  South Australia.png', 8
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 10, 'Sequoia Valley Exploration', 'Adelaide Hills', 
  'Savor a second day at leisure, taking in the art of doing nothing or exploring the nearby Cleland Wildlife Park to feed kangaroos.', '["Spend a peaceful day at the lodge", "Cleland Wildlife Park animal feeding tour", "Private valley wine tasting session"]', '/assets/images/aus/Adelaide,  South Australia.png', 9
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 11, 'Adelaide Hills - Kangaroo Island', 'Adelaide & Kangaroo Island', 
  'Fly to Kangaroo Island and settle into Southern Ocean Lodge with coastal walks, gourmet dining, and ocean views.', '["Transfer to Adelaide Airport and flight to Kangaroo Island", "Settle in to Southern Ocean Lodge (restored after bushfires)", "Enjoy open-bar hospitality and a 4-course dinner with matched wines"]', '/assets/images/aus/Adelaide,  South Australia.png', 10
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 12, 'Kangaroo Island Wonders', 'Kangaroo Island', 
  'Discover Kangaroo Island’s wild wonders and native wildlife, then unwind with golden hour drinks and a seasonal feast.', '["Flinders Chase National Park guided tour", "See the iconic Remarkable Rocks and Admirals Arch", "Spot wild fur seals playing in the surf"]', '/assets/images/aus/Adelaide,  South Australia.png', 11
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 13, 'Seal Bay Sea Lions', 'Kangaroo Island', 
  'Meet sea lions at Seal Bay, then explore the underground wonders of Kelly Hill Caves before a relaxing dinner.', '["Walk on the beach among wild Australian sea lions", "Explore the dripping cavern chambers of Kelly Hill Caves", "Final night dining at the Southern Ocean Lodge restaurant"]', '/assets/images/aus/Adelaide,  South Australia.png', 12
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 14, 'Depart Kangaroo Island', 'Kangaroo Island & Adelaide', 
  'Rise early for a self-guided walk or succumb to the comfort of Baillie Bed and watch the sunrise from beneath the covers. Enjoy breakfast before transferring to the Airport for your return flight to Adelaide where your Tracks & Tranquility vacation ends.', '["Watch the sunrise from your glass-walled bedroom", "Flight back to Adelaide Airport", "Connect to your onward flights home"]', '/assets/images/australia/6.jpg', 13
);

INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) VALUES
(@pkg_id, 'Southern Ocean Lodge Stay', 'Stay at Australia''s flagship luxury lodge, perched on a cliff edge on wild Kangaroo Island.', 'Compass', 0);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) VALUES
(@pkg_id, 'The Ghan Platinum Class', 'Travel across the red outback in the ultimate rail comfort, with double beds and a private cabin host.', 'Train', 1);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) VALUES
(@pkg_id, 'Finniss River Safari', 'Skim across remote Darwin floodplains on an airboat to spot giant saltwater crocodiles.', 'Waves', 2);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) VALUES
(@pkg_id, 'Sequoia Hot Pools', 'Soak in artesian mineral spring-fed hot pools overlooking the rolling valleys of Adelaide Hills.', 'Heart', 3);

INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) VALUES
(@pkg_id, 'Southern Ocean Lodge packages are fully inclusive of all premium meals, open bar, and signature touring.', 0);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) VALUES
(@pkg_id, 'Bring warm clothes for Kangaroo Island, as cool Southern Ocean breezes blow constant year-round.', 1);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) VALUES
(@pkg_id, 'Gold and Platinum Ghan guests receive priority boarding and private lounge access at the stations.', 2);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) VALUES
(@pkg_id, 'Pack binoculars for Finniss River and Kangaroo Island to capture the rare birdlife.', 3);

INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) VALUES
(@pkg_id, '/assets/images/australia/6.jpg', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) VALUES
(@pkg_id, '/assets/images/aus/Adelaide,  South Australia.png', 1);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) VALUES
(@pkg_id, '/assets/images/aus/darwin.jpg', 2);


-- Package: Urban Lights & Outback Wonders
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  'urban-lights-outback-wonders', 'Urban Lights & Outback Wonders', 'Australia', 'Oceania', 
  'Discover Australia''s highlights from chic cities to red deserts and tropical reefs', '/assets/images/australia/7.jpg', 'Experience the ultimate Australian showcase on this 14-day journey. Stroll Melbourne''s creative laneways, drive the breathtaking Great Ocean Road, and fly to the spiritual heart of the Red Centre to dine under the stars at Uluru. Next, escape to Port Douglas to cruise the Low Isles on the Great Barrier Reef and soar over the rainforest canopy, before finishing with a luxury harbor cruise and Opera House dinner in spectacular Sydney.', 
  144.9631, -37.8136, 'Nature', 'bg-teal-500', 
  'Discover Australia''s highlights from chic cities to red deserts and tropical reefs', '/assets/images/australia/7.jpg', 
  'published', 'from $5,549 AUD', '14 Days', 
  'Canberra', 'Australian Dollar (AUD)', 'Highly varied, temperate southern coast to desert sands and tropical reefs', 'September–November & March–May (ideal overall weather)', 
  'English', 'AEST & ACST (UTC+10 & UTC+9:30)', 'Left'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = 'urban-lights-outback-wonders');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 1, 'Arrival in Melbourne', 'Melbourne', 
  'Stroll through Melbourne’s hidden laneways and arcades, discovering local artisans, street art, and sweet treats.', '["Private airport transfer to Pan Pacific Melbourne", "Guided afternoon walk through historic laneways and street art blocks", "Taste handmade chocolates and local roasted coffee"]', '/assets/images/australia/7.jpg', 0
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 2, 'Great Ocean Road', 'Great Ocean Road', 
  'Journey along the Great Ocean Road from Torquay to the Twelve Apostles, with wildlife, rainforest walks, and shipwreck tales.', '["Full-day Great Ocean Road guided tour", "Spot wild koalas in Great Otway National Park", "See the Twelve Apostles and walk Loch Ard Gorge"]', '/assets/images/aus/The Great Ocean Road, Victoria.png', 1
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 3, 'Yarra Valley Wine & Gin', 'Yarra Valley', 
  'Escape to the Yarra Valley for a wine tour rich in scenic beauty, family heritage, and local flavor.', '["Private drive to the rolling hills of Yarra Valley", "Wine tastings at historic family vineyards", "Premium gin tasting flight at Four Pillars Distillery"]', '/assets/images/aus/Melbourne,  Victoria.png', 2
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 4, 'Melbourne - Uluru', 'Melbourne & Uluru', 
  'Fly to Ayers Rock and explore Kata Tjuta’s ancient domes on a guided walk through Walpa Gorge.', '["Flight to Ayers Rock Airport and resort transfer", "Stay at premium Sails in the Desert resort", "Guided sunset walk through Walpa Gorge in Kata Tjuta"]', '/assets/images/aus/Uluru (Ayers Rock),  Northern Territory.png', 3
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 5, 'Desert Awakenings & Sounds of Silence', 'Uluru', 
  'Begin your day with Desert Awakenings—breakfast under the stars and a guided Uluru walk—then dine and stargaze in the outback with the magical Sounds of Silence experience.', '["Desert Awakenings outback breakfast and base walk", "See the changing colors of Uluru at sunrise", "Sounds of Silence dinner with telescope stargazing"]', '/assets/images/aus/Uluru (Ayers Rock),  Northern Territory.png', 4
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 6, 'Uluru - Port Douglas', 'Uluru & Port Douglas', 
  'Transfer to Ayers Rock Airport for your flight to Cairns. On arrival, you will be met and transferred to Port Douglas for your 4-night stay. The remainder of your day is free to relax and enjoy the Resort facilities.', '["Flight from Ayers Rock to Cairns via Alice Springs", "Private coastal transfer from Cairns to Port Douglas", "Settle into Thala Beach Nature Reserve jungle bungalow"]', '/assets/images/aus/Cairns,  Queensland.png', 5
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 7, 'Thala Beach Nature Reserve', 'Port Douglas', 
  'Enjoy a free day at Thala’s Nature Reserve, where nature walks, wildlife encounters, and stargazing await amidst rare habitats.', '["Free day to explore the private nature reserve beach", "Guided coconut plantation tour and birdwatching walk", "Evening stargazing at the observatory"]', '/assets/images/aus/Cairns,  Queensland.png', 6
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 8, 'Low Isles Reef Cruise', 'Great Barrier Reef', 
  'Set sail from Port Douglas to the Low Isles with Sailaway VI—snorkel, swim, and unwind with tropical treats before cruising back at sunset.', '["Sail to the Low Isles on a luxury catamaran", "Snorkel the quiet lagoon to spot reef turtles", "Gourmet lunch and afternoon tea on board"]', '/assets/images/aus/Great Barrier Reef, Queensland.png', 7
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 9, 'Kuranda Rainforest Adventure', 'Kuranda & Cairns', 
  'Enjoy a relaxed start before soaring above ancient rainforest on the Skyrail to Kuranda, where markets and cafes await.', '["Ride the Skyrail Rainforest Cableway over the canopy", "Explore the heritage Kuranda rainforest village", "Return via Brett''s Kuranda Day Tour bus"]', '/assets/images/aus/Cairns,  Queensland.png', 8
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 10, 'Port Douglas - Sydney', 'Cairns & Sydney', 
  'After breakfast, transfer to Cairns Airport for your flight to Sydney. On arrival, you will be met and transferred to your hotel for a 4-night stay. Enjoy exploring the city at your leisure for the remainder of the day.', '["Transfer to Cairns Airport and flight to Sydney", "Check in to The Grace Hotel in Sydney CBD", "Free evening to explore Darling Harbour or Circular Quay"]', '/assets/images/aus/Sydney,  New South Wales.png', 9
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 11, 'Sydney Harbour Long Lunch Cruise', 'Sydney', 
  'Savor Sydney Harbour’s elegance on a long lunch cruise—dining at iconic waterfront restaurants, sailing past landmarks, and soaking in coastal charm.', '["Sail Sydney Harbour on a premium yacht", "Multi-course lunch at waterfront restaurants", "Cruise past the Opera House and Harbour Bridge"]', '/assets/images/aus/Sydney,  New South Wales.png', 10
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 12, 'Blue Mountains Private Tour', 'Blue Mountains', 
  'Discover the Blue Mountains’ magic—from cuddling koalas at Calmsley Hill to gazing at waterfalls and legends at Eaglehawk Lookout. Enjoy lunch with a view, then toast the day at Mt Tomah Gardens.', '["Visit Calmsley Hill City Farm to feed kangaroos and koalas", "Admire the Three Sisters from Eaglehawk Lookout", "Stroll through the high-altitude Mt Tomah Botanic Garden"]', '/assets/images/aus/Sydney,  New South Wales.png', 11
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 13, 'Opera House VIP Experience', 'Sydney', 
  'Spend a leisurely day in Sydney, then step into the iconic Opera House for a VIP tour and a refined dinner at Bennelong, where harbor views meet culinary artistry.', '["Free day for shopping or Bondi coastal walk", "1-hour VIP behind-the-scenes Opera House tour", "2-course dining at Bennelong with paired Australian wines"]', '/assets/images/aus/Sydney,  New South Wales.png', 12
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 14, 'Depart Sydney', 'Sydney', 
  'After breakfast, transfer to Sydney Airport for your return flight.', '["Enjoy breakfast at The Grace Hotel", "Private transfer to Sydney Airport for departure"]', '/assets/images/aus/Sydney,  New South Wales.png', 13
);

INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) VALUES
(@pkg_id, 'Twelve Apostles Visit', 'See the iconic limestone rock stacks rising out of the wild Southern Ocean along the Great Ocean Road.', 'MapPin', 0);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) VALUES
(@pkg_id, 'Sounds of Silence Dinner', 'Dine in the open outback under a canopy of stars with views of Uluru and a guided stargazing talk.', 'Sun', 1);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) VALUES
(@pkg_id, 'Great Barrier Reef Sailing', 'Set sail on a luxury catamaran from Port Douglas to snorkel with green sea turtles at the Low Isles.', 'Sailboat', 2);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) VALUES
(@pkg_id, 'Bennelong Dining', 'Savor a premium dining package inside the structural sails of the world-famous Sydney Opera House.', 'Utensils', 3);

INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) VALUES
(@pkg_id, 'This tour covers four distinct climatic zones; check weather forecasts and pack accordingly.', 0);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) VALUES
(@pkg_id, 'The flight from Uluru to Cairns typically connects in Alice Springs; keep transit documents handy.', 1);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) VALUES
(@pkg_id, 'Thala Beach bungalows are built into the forest canopy; keep screen doors closed to keep out insects.', 2);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) VALUES
(@pkg_id, 'Private airport transfers are included in Sydney, Melbourne, and Cairns; look for your driver in Arrivals.', 3);

INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) VALUES
(@pkg_id, '/assets/images/australia/7.jpg', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) VALUES
(@pkg_id, '/assets/images/aus/Sydney,  New South Wales.png', 1);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) VALUES
(@pkg_id, '/assets/images/aus/Melbourne,  Victoria.png', 2);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) VALUES
(@pkg_id, '/assets/images/aus/Uluru (Ayers Rock),  Northern Territory.png', 3);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) VALUES
(@pkg_id, '/assets/images/aus/The Great Ocean Road, Victoria.png', 4);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) VALUES
(@pkg_id, '/assets/images/aus/Cairns,  Queensland.png', 5);


-- Package: Cairns City Break
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  'cairns-city-break', 'Cairns City Break', 'Australia', 'Oceania', 
  'A tropical gateway to the Great Barrier Reef and ancient rainforests', '/assets/images/australia/Cairns City Break_page-0001.jpg', 'Escape to tropical North Queensland with this 4-day city break in Cairns. Settle into superior accommodations and take a full-day cruise to Green Island on the Great Barrier Reef to snorkel crystal waters and view coral gardens. Next, ride the historic Kuranda Scenic Railway through mountain gorges, explore the rainforest village, and descend over the world-heritage forest canopy on the Skyrail Rainforest Cableway.', 
  145.7781, -16.9186, 'Nature', 'bg-teal-500', 
  'A tropical gateway to the Great Barrier Reef and ancient rainforests', '/assets/images/australia/Cairns City Break_page-0001.jpg', 
  'published', 'from $795 AUD', '4 Days', 
  'Cairns', 'Australian Dollar (AUD)', 'Tropical wet and dry; warm temperatures year-round', 'June–October (dry winter season with low humidity)', 
  'English', 'AEST (UTC+10)', 'Left'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = 'cairns-city-break');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 1, 'Arrive Cairns', 'Cairns', 
  'After clearing Immigration and Customs, meet your driver in the Arrivals Hall for your private transfer to your Cairns accommodation for a 3-night stay. The remainder of the day is at leisure to explore the Esplanade Lagoon, Rusty’s Market or Cairns Night Markets.', '["Meet-and-greet private airport transfer", "Stay 3 nights at Mercure Cairns in a Superior Room", "Leisure time to swim at the Esplanade Lagoon or shop at Rusty''s Markets"]', '/assets/images/australia/Cairns City Break_page-0001.jpg', 0
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 2, 'Green Island Reef Cruise', 'Great Barrier Reef', 
  'Full-day cruise to Green Island on the Great Barrier Reef – snorkel crystal waters, relax on white-sand beaches and view coral gardens through glass bottom boat tours. Enjoy marine life encounters, tropical buffet lunch and unlimited snorkelling equipment amidst UNESCO World Heritage coral reefs.', '["Full-day cruise aboard a premium catamaran to Green Island", "Glass bottom boat coral viewing tour", "Gourmet buffet lunch and unlimited snorkeling equipment"]', '/assets/images/aus/Great Barrier Reef, Queensland.png', 1
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 3, 'Kuranda Rainforest Adventure', 'Kuranda Rainforest', 
  'Journey to Kuranda Village via scenic railway through ancient rainforest gullies, then descend on the Skyrail Rainforest Cableway with glass-floor cabins over Barron Gorge. Explore butterfly sanctuary, markets and indigenous culture before returning through World Heritage Daintree rainforest canopy.', '["Ride the historic Kuranda Scenic Railway through tunnels and gorge views", "Explore Kuranda village markets and butterfly sanctuary", "Descend via Skyrail Rainforest Cableway over Barron Gorge"]', '/assets/images/aus/Cairns,  Queensland.png', 2
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 4, 'Depart Cairns', 'Cairns', 
  'Private transfer to Cairns Airport for your onward journey.', '["Enjoy hotel breakfast", "Private transfer back to Cairns Airport"]', '/assets/images/australia/Cairns City Break_page-0001.jpg', 3
);

INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) VALUES
(@pkg_id, 'Green Island Snorkeling', 'Snorkel straight off the sandy beaches of Green Island to see tropical fish and giant sea turtles.', 'Waves', 0);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) VALUES
(@pkg_id, 'Kuranda Scenic Railway', 'Ride a vintage train along cliffs and water cascades in an ancient rainforest valley.', 'Train', 1);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) VALUES
(@pkg_id, 'Skyrail Cableway', 'Glide in a cable car just meters above the pristine canopy of the Daintree rainforest.', 'Compass', 2);

INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) VALUES
(@pkg_id, 'Apply sunblock before the reef cruise and pack a swimsuit, towel, and change of clothes.', 0);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) VALUES
(@pkg_id, 'Daintree is a tropical wet zone; a light rain poncho is handy even in the dry season.', 1);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) VALUES
(@pkg_id, 'Green Island ferry departures are scheduled from the Reef Fleet Terminal; look for the transfers.', 2);

INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) VALUES
(@pkg_id, '/assets/images/australia/Cairns City Break_page-0001.jpg', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) VALUES
(@pkg_id, '/assets/images/aus/Great Barrier Reef, Queensland.png', 1);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) VALUES
(@pkg_id, '/assets/images/aus/Cairns,  Queensland.png', 2);


-- Package: Gold Coast City Break
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  'gold-coast-city-break', 'Gold Coast City Break', 'Australia', 'Oceania', 
  'Experience the sun, surf, and theme park thrills of the Gold Coast', '/assets/images/australia/Gold Coast City Break_page-0001.jpg', 'Enjoy a high-energy 4-day escape to the Gold Coast, Australia''s premier coastal playground. Stay steps from pristine beaches and enjoy shared transfers to Sea World to meet marine animals and experience thrilling rides. Spend the next day at Warner Bros. Movie World to experience world-class rollercoasters, movie characters, and stunt shows. Perfect for families, couples, and thrill-seekers alike.', 
  153.4, -28.0167, 'Entertainment', 'bg-amber-600', 
  'Experience the sun, surf, and theme park thrills of the Gold Coast', '/assets/images/australia/Gold Coast City Break_page-0001.jpg', 
  'published', 'from $745 AUD', '4 Days', 
  'Gold Coast', 'Australian Dollar (AUD)', 'Subtropical; warm, sunny weather with mild winters', 'May–October (mild temperatures, low rain)', 
  'English', 'AEST (UTC+10)', 'Left'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = 'gold-coast-city-break');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 1, 'Arrive Gold Coast', 'Gold Coast', 
  'After clearing Immigration and Customs, meet your driver in the Arrivals Hall for your private transfer to your Gold Coast accommodation for a 3-night stay. The remainder of the day is at leisure to explore Surfers Paradise Beach, Broadbeach dining precinct or Australia Avenue.', '["Meet-and-greet private airport transfer", "Stay 3 nights at Mantra Gold Coast in a Superior Room", "Free afternoon to walk Surfers Paradise Beach"]', '/assets/images/australia/Gold Coast City Break_page-0001.jpg', 0
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 2, 'Sea World Adventure', 'Gold Coast Sea World', 
  'Full-day shared transfer to Sea World – experience Nickelodeon Land, dolphin presentations, seal shows, Jet Rescue Coaster and the all-new SpongeBob ride. Enjoy marine encounters, water park thrills and behind-the-scenes animal experiences at this Gold Coast family favourite.', '["Shared shuttle transfers to Sea World park", "See dolphin, polar bear, and seal presentations", "Ride the high-speed Jet Rescue Coaster and SpongeBob ride"]', '/assets/images/aus/Gold Coast,  Queensland.png', 1
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 3, 'Movie World Magic', 'Warner Bros. Movie World', 
  'Full-day shared transfer to Warner Bros. Movie World – enjoy world-class rides, rollercoasters, street parades, 4D cinemas and interactive movie character experiences. Discover the southern hemisphere''s biggest collection of thrill rides and family entertainment.', '["Shared shuttle transfers to Movie World park", "Ride DC Rivals HyperCoaster, the tallest and fastest in the Southern Hemisphere", "Watch the Hollywood Stunt Driver live show and Star Parade"]', '/assets/images/aus/Gold Coast,  Queensland.png', 2
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 4, 'Depart Gold Coast', 'Gold Coast', 
  'Private transfer to Gold Coast Airport for your onward journey.', '["Enjoy hotel breakfast", "Private transfer back to Gold Coast Airport"]', '/assets/images/australia/Gold Coast City Break_page-0001.jpg', 3
);

INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) VALUES
(@pkg_id, 'Sea World Marine Shows', 'Watch dolphins, seals, and polar bears in world-class educational presentations.', 'Eye', 0);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) VALUES
(@pkg_id, 'DC Rivals HyperCoaster', 'Ride the southern hemisphere''s tallest, fastest, and longest rollercoaster.', 'Bot', 1);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) VALUES
(@pkg_id, 'Surfers Paradise Beach', 'Stroll or surf along the world-famous golden sands of Surfers Paradise.', 'Waves', 2);

INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) VALUES
(@pkg_id, 'Pre-book theme park tickets to skip the long entry queues.', 0);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) VALUES
(@pkg_id, 'Wear sunscreen, sunglasses, and a hat, as you will spend the entire day outdoors at the parks.', 1);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) VALUES
(@pkg_id, 'Shared transfers depart from your hotel lobby at scheduled times; check with the concierge.', 2);

INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) VALUES
(@pkg_id, '/assets/images/australia/Gold Coast City Break_page-0001.jpg', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) VALUES
(@pkg_id, '/assets/images/aus/Gold Coast,  Queensland.png', 1);


-- Package: Melbourne City Break
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  'melbourne-city-break', 'Melbourne City Break', 'Australia', 'Oceania', 
  'Discover Australia''s cultural capital, coastal roads, and penguin parades', '/assets/images/australia/Melbourne City Break_page-0001.jpg', 'Immerse yourself in Melbourne''s vibrant arts, coffee, and wildlife scene on this 4-day city break. Tour the historic gardens and street art lanes, and enjoy 360-degree views from the Eureka Skydeck. Journey along the iconic Great Ocean Road to see the Twelve Apostles, and spend a magical afternoon at Moonlit Sanctuary before watching the world-famous Penguin Parade on Phillip Island.', 
  144.9631, -37.8136, 'City', 'bg-emerald-500', 
  'Discover Australia''s cultural capital, coastal roads, and penguin parades', '/assets/images/australia/Melbourne City Break_page-0001.jpg', 
  'published', 'from $925 AUD', '4 Days', 
  'Melbourne', 'Australian Dollar (AUD)', 'Temperate oceanic; famously changeable ''four seasons in one day''', 'October–April (warmer weather and outdoor festivals)', 
  'English', 'AEST (UTC+10)', 'Left'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = 'melbourne-city-break');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 1, 'Arrive Melbourne', 'Melbourne', 
  'Private transfer from the airport to your hotel, followed by a guided city tour featuring Royal Botanic Gardens, Fitzroy Gardens, sports precinct and vibrant street art districts. Visit Eureka Skydeck 88 for 360-degree views from Melbourne''s highest vantage with the thrilling Edge experience.', '["Private airport transfer and 3 nights at Avani Jazz Melbourne", "Guided city highlights sightseeing tour", "Tickets to Eureka Skydeck 88 and the glass Edge box"]', '/assets/images/australia/Melbourne City Break_page-0001.jpg', 0
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 2, 'Great Ocean Road', 'Great Ocean Road', 
  'Full-day shared tour (GW Code) along the iconic Great Ocean Road – see the Twelve Apostles, Loch Ard Gorge, London Arch and koala-filled eucalyptus forests. Experience dramatic coastal scenery, surf beaches and shipwreck history with expert guide commentary.', '["Full-day scenic drive along the Great Ocean Road", "Spot wild koalas and parrots in Kennett River", "Walk the boardwalk at the Twelve Apostles and Loch Ard Gorge"]', '/assets/images/aus/The Great Ocean Road, Victoria.png', 1
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 3, 'Phillip Island Penguins', 'Phillip Island', 
  'Spend the morning at leisure in Melbourne. In the afternoon, travel to Phillip Island via Moonlit Sanctuary Wildlife Conservation Park to see koalas, kangaroos, and wallabies. Continue to Phillip Island for the world-famous Penguin Parade at sunset, watching hundreds of Little Penguins waddle ashore.', '["Free morning to shop or explore Melbourne''s coffee laneways", "Hand-feed wallabies at Moonlit Sanctuary", "See the magical sunset Little Penguin Parade on the beach"]', '/assets/images/aus/Melbourne,  Victoria.png', 2
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 4, 'Depart Melbourne', 'Melbourne', 
  'Private transfer to Melbourne Airport for your onward journey.', '["Enjoy hotel breakfast", "Private transfer back to Melbourne Airport"]', '/assets/images/australia/Melbourne City Break_page-0001.jpg', 3
);

INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) VALUES
(@pkg_id, 'Eureka Skydeck Edge', 'Stand in a glass cube projecting 3 meters out from the 88th floor of Eureka Tower.', 'Eye', 0);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) VALUES
(@pkg_id, 'Twelve Apostles Walk', 'Walk along the cliff boardwalks overlooking the Southern Ocean and giant limestone towers.', 'MapPin', 1);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) VALUES
(@pkg_id, 'Phillip Island Penguins', 'Watch the adorable Little Penguins return from the sea to their burrows at dusk.', 'Compass', 2);

INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) VALUES
(@pkg_id, 'Melbourne''s weather is famously unpredictable; always pack an umbrella and light jacket.', 0);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) VALUES
(@pkg_id, 'Bring warm, windproof clothing for the Penguin Parade, as the coastal beach becomes cold and windy after dark.', 1);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) VALUES
(@pkg_id, 'Free tram travel is available within the central business district (CBD) zone.', 2);

INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) VALUES
(@pkg_id, '/assets/images/australia/Melbourne City Break_page-0001.jpg', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) VALUES
(@pkg_id, '/assets/images/aus/Melbourne,  Victoria.png', 1);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) VALUES
(@pkg_id, '/assets/images/aus/The Great Ocean Road, Victoria.png', 2);


-- Package: Perth City Break
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  'perth-city-break', 'Perth City Break', 'Australia', 'Oceania', 
  'Explore Western Australia''s scenic capital and quokka-filled island paradise', '/assets/images/australia/Perth City Break_page-0001.jpg', 'Discover Perth, Western Australia''s sun-drenched capital, on this 4-day escape. Take a private transfer to your hotel and explore the expansive Kings Park and Elizabeth Quay. Board a ferry to the car-free paradise of Rottnest Island to meet the friendly quokkas, cycle to pristine bays, and swim in turquoise waters. Finish with a flexible hop-on hop-off city sightseeing tour.', 
  115.8605, -31.9505, 'Beach', 'bg-blue-500', 
  'Explore Western Australia''s scenic capital and quokka-filled island paradise', '/assets/images/australia/Perth City Break_page-0001.jpg', 
  'published', 'from $649 AUD', '4 Days', 
  'Perth', 'Australian Dollar (AUD)', 'Mediterranean; hot dry summers and mild wet winters', 'September–November (wildflower spring) & March–May', 
  'English', 'AWST (UTC+8)', 'Left'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = 'perth-city-break');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 1, 'Arrive Perth', 'Perth', 
  'After clearing Immigration and Customs, meet your driver in the Arrivals Hall for your private transfer to your Perth accommodation for a 3-night stay. The remainder of the day is at leisure to explore Kings Park, Elizabeth Quay or the Swan River foreshore.', '["Meet-and-greet private airport transfer", "Stay 3 nights at Holiday Inn Perth in a Superior Room", "Leisure time to explore Elizabeth Quay and Kings Park botanic gardens"]', '/assets/images/australia/Perth City Break_page-0001.jpg', 0
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 2, 'Rottnest Island Adventure', 'Rottnest Island', 
  'Full-day ferry and bus tour to Rottnest Island – cycle around the car-free paradise, meet quokkas, snorkel pristine bays and discover Wadjemup Lighthouse. Enjoy beach clubs, salt lakes and Western Australia''s most iconic day trip with all-inclusive commentary and island exploration.', '["Return ferry trip from Perth/Fremantle to Rottnest Island", "Take selfies with the famous, friendly quokkas", "Island explorer bus pass to visit pristine bays and Wadjemup Lighthouse"]', '/assets/images/aus/Perth,  Western Australia.png', 1
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 3, 'Perth Hop On Hop Off', 'Perth & Fremantle', 
  'Discover Perth at your own pace with a 24-hour Hop-On Hop-Off double-decker bus ticket. Visit top attractions including the Perth Mint, Kings Park botanical gardens, Bell Tower, and the historic port town of Fremantle.', '["24-hour double-decker open-top bus ticket", "Listen to guided audio commentary about Perth''s history", "Hop off at Kings Park, Bell Tower, or Perth Mint"]', '/assets/images/aus/Perth,  Western Australia.png', 2
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 4, 'Depart Perth', 'Perth', 
  'Private transfer to Perth Airport for your onward journey.', '["Enjoy hotel breakfast", "Private transfer back to Perth Airport"]', '/assets/images/australia/Perth City Break_page-0001.jpg', 3
);

INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) VALUES
(@pkg_id, 'Meet the Quokkas', 'Encounter the world''s happiest animal, the quokka, in the wild on Rottnest Island.', 'Heart', 0);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) VALUES
(@pkg_id, 'Kings Park Views', 'Walk the tree-top bridge for panoramic views of Perth city skyline and the Swan River.', 'MapPin', 1);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) VALUES
(@pkg_id, 'Fremantle Port Town', 'Explore Fremantle''s historic markets, colonial prison, and craft breweries.', 'Compass', 2);

INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) VALUES
(@pkg_id, 'Rottnest Island is car-free; the best way to get around is by bicycle or the hop-on hop-off shuttle.', 0);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) VALUES
(@pkg_id, 'Bring snorkeling gear to Rottnest, as places like Basin and Little Salmon Bay have excellent marine life.', 1);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) VALUES
(@pkg_id, 'Perth has high UV levels; apply SPF 50+ sunscreen regularly even on cloudy days.', 2);

INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) VALUES
(@pkg_id, '/assets/images/australia/Perth City Break_page-0001.jpg', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) VALUES
(@pkg_id, '/assets/images/aus/Perth,  Western Australia.png', 1);


-- Package: Sydney City Break
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  'sydney-city-break', 'Sydney City Break', 'Australia', 'Oceania', 
  'Experience the harbor city''s iconic sights and dramatic mountain valleys', '/assets/images/australia/Sydney City Break_page-0001.jpg', 'Discover the magic of Sydney on this 4-day city break. Tour the historic Rocks district, photograph the Sydney Opera House and Harbour Bridge, and visit the Sydney Tower Eye. The next day, travel to the World Heritage-listed Blue Mountains to meet native animals at Australia Zoo, view the spectacular Three Sisters rock formation, and explore lush valleys.', 
  151.2093, -33.8688, 'City', 'bg-emerald-500', 
  'Experience the harbor city''s iconic sights and dramatic mountain valleys', '/assets/images/australia/Sydney City Break_page-0001.jpg', 
  'published', 'from $975 AUD', '4 Days', 
  'Sydney', 'Australian Dollar (AUD)', 'Temperate; warm summers and mild, wet winters', 'September–November & March–May (sunny days, mild weather)', 
  'English', 'AEST (UTC+10)', 'Left'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = 'sydney-city-break');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 1, 'Arrive Sydney', 'Sydney', 
  'After clearing Immigration and Customs, meet your driver in the Arrivals Hall for your private transfer to your Sydney accommodation for a 3-night stay. The remainder of the day is at leisure to explore Circular Quay, The Rocks or Darling Harbour.', '["Meet-and-greet private airport transfer", "Stay 3 nights at Metro Aspire Sydney in a Superior Room", "Free afternoon to explore Circular Quay and Darling Harbour at leisure"]', '/assets/images/australia/Sydney City Break_page-0001.jpg', 0
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 2, 'Sydney City & Tower Eye', 'Sydney', 
  'Discover Sydney on a guided city tour featuring Sydney Opera House, Harbour Bridge, The Rocks historic district and Bondi Beach scenic drive. Visit Sydney Tower Eye for breathtaking 360-degree views from the city''s highest public observation deck.', '["Guided city tour of historical Rocks and botanical gardens", "Drive past Bondi Beach and the coastal suburbs", "Entry to Sydney Tower Eye observation deck"]', '/assets/images/aus/Sydney,  New South Wales.png', 1
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 3, 'Blue Mountains & Australia Zoo', 'Blue Mountains', 
  'Full-day shared tour to the Blue Mountains World Heritage Area. Visit the award-winning Australia Zoo to meet native Australian wildlife. Savor stunning mountain lookouts, waterfalls, and explore the charming village of Leura before returning to Sydney.', '["Full-day tour to the scenic Blue Mountains", "See the iconic Three Sisters rock formation from Eaglehawk Lookout", "Meet koalas, kangaroos, and native animals at Australia Zoo"]', '/assets/images/aus/Sydney,  New South Wales.png', 2
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 4, 'Depart Sydney', 'Sydney', 
  'Private transfer to Sydney Airport for your onward journey.', '["Enjoy hotel breakfast", "Private transfer back to Sydney Airport"]', '/assets/images/australia/Sydney City Break_page-0001.jpg', 3
);

INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) VALUES
(@pkg_id, 'Sydney Tower Eye', 'Take in 360-degree views of Sydney''s skyline, harbor, and distant Blue Mountains.', 'Eye', 0);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) VALUES
(@pkg_id, 'Three Sisters Lookout', 'See the spectacular sandstone rock formation in the World Heritage Blue Mountains.', 'MapPin', 1);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) VALUES
(@pkg_id, 'Bondi Beach Coastal Walk', 'Walk the scenic cliff-top path from Bondi to Bronte past ocean pools and sandy coves.', 'Waves', 2);

INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) VALUES
(@pkg_id, 'Bring comfortable walking shoes for the Blue Mountains nature trails.', 0);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) VALUES
(@pkg_id, 'The Rocks district has a fantastic weekend market; visit on Saturday or Sunday morning.', 1);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) VALUES
(@pkg_id, 'Use credit cards or Apple/Google Pay directly on Sydney buses and ferries (tap-on, tap-off).', 2);

INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) VALUES
(@pkg_id, '/assets/images/australia/Sydney City Break_page-0001.jpg', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) VALUES
(@pkg_id, '/assets/images/aus/Sydney,  New South Wales.png', 1);

