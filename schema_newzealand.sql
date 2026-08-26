-- New Zealand Tour Packages Schema and Data
-- This script inserts/updates the 9 New Zealand packages and child tables.

-- Package: Essence of New Zealand
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  'essence-of-new-zealand', 'Essence of New Zealand', 'New Zealand', 'Oceania', 
  'Explore New Zealand''s signature highlights from thermal wonders to glacier fjords', '/assets/images/new-zealand/1.jpg', 'Experience the very best of New Zealand on this 10-day journey. Explore Auckland''s volcanic vistas and harbor breezes, see the magical glowing caverns of Waitomo, and immerse in Rotorua''s geothermal wonders and rich Maori cultural history. Finally, fly to Queenstown for a 4-night stay, featuring a full-day guided exploration of Milford Sound and the scenic grandeur of the Remarkables.', 
  174.7633, -36.8485, 'Nature', 'bg-teal-500', 
  'Explore New Zealand''s signature highlights from thermal wonders to glacier fjords', '/assets/images/new-zealand/1.jpg', 
  'published', 'from $3,199 NZD', '10 Days', 
  'Wellington', 'New Zealand Dollar (NZD)', 'Temperate maritime; mild summers and cool alpine winters', 'December–February & March–May', 
  'English, Māori', 'NZST (UTC+12)', 'Left'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = 'essence-of-new-zealand');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 1, 'Arrive Auckland', 'Auckland', 
  'Arrive in Auckland for a 3-night stay, then dive into the All Blacks Experience with immersive game-day excitement and interactive challenges.', '["Private airport transfer to your central hotel", "All Blacks Experience interactive rugby tour", "Settle in to SkyCity Hotel for 3 nights"]', '/assets/images/new-zealand/1.jpg', 0
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 2, 'Auckland City Discovery', 'Auckland', 
  'Spend the morning discovering Auckland’s volcanic landscapes, vibrant neighborhoods, and scenic waterfronts, then enjoy a free afternoon to explore at your own pace.', '["Guided Auckland City Revealed tour", "See Bastion Point, Mt Eden volcano, and waterfronts", "Free afternoon to explore the Viaduct Harbour"]', '/assets/images/nz/Auckland, The City of Sails.png', 1
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 3, 'Auckland Free Day', 'Auckland', 
  'Today is free to explore Auckland and surrounds at your leisure. Ask our Destination Specialists about a wine tour on Waiheke or perhaps a visit to one of the local museums. Experience Auckland’s foodie side or take to new heights at the Skytower.', '["Free day to explore or take optional excursions", "Optional Waiheke Island boutique wine tour", "Visit the Sky Tower for panoramic city views"]', '/assets/images/nz/Auckland, The City of Sails.png', 2
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 4, 'Auckland – Waitomo - Rotorua', 'Waitomo & Rotorua', 
  'Visit Waitomo Glowworm Caves and Rotorua’s geothermal and historic highlights on a full-day tour from Auckland.', '["Scenic drive from Auckland through Waikato", "Guided tour and boat ride under thousands of Waitomo glowworms", "Continue to Rotorua and check in to Sudima Hotel"]', '/assets/images/nz/Rotorua, The Geothermal Wonderland.png', 3
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 5, 'Rotorua Geothermal & Culture', 'Rotorua', 
  'Spend a free day exploring Rotorua’s adventures and hot pools, then enjoy an evening of culture and geysers at Te Puia.', '["Free day for hot pools or adventure park", "Evening Te Po combo tour at Te Puia", "Hangi buffet feast, Maori concert, and illuminated geysers"]', '/assets/images/nz/Rotorua, The Geothermal Wonderland.png', 4
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 6, 'Rotorua - Queenstown', 'Rotorua & Queenstown', 
  'Transfer to Rotorua Airport for your flight to Queenstown. On arrival, you will be met and transferred to your accommodation for a 4-night stay. The remainder of your day is at leisure to relax and explore the town center.', '["Private transfer to Rotorua Airport", "Domestic flight to Queenstown (South Island)", "Stay at QT Queenstown Alpine King Room"]', '/assets/images/nz/Queenstown,  The Adventure Capital.png', 5
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 7, 'Milford Sound Day Cruise', 'Fiordland National Park', 
  'Travel from Queenstown to Milford Sound in a premium van, enjoy a guided nature cruise, then return via Fiordland’s stunning landscapes.', '["Drive along Lake Wakatipu and through the Homer Tunnel", "2-hour Milford Sound boat cruise under cascading waterfalls", "Spot fur seals, penguins, and dolphins in the wild"]', '/assets/images/nz/Milford Sound, The Eighth Wonder of the World.png', 6
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 8, 'Best of Queenstown Tour', 'Queenstown', 
  'Join us for a fully guided sightseeing adventure. Begin with lake lookouts, visit the historic Edith Cavell Bridge, explore charming Arrowtown, and sample local wines in Gibbston Valley before a scenic Lake Wakatipu cruise.', '["Guided tour of Lake Wakatipu lookouts and Arrowtown", "Wine tasting and cheese board in Gibbston Valley", "30-minute scenic lake cruise return to Queenstown wharf"]', '/assets/images/nz/Queenstown,  The Adventure Capital.png', 7
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 9, 'Queenstown Free Day', 'Queenstown', 
  'Today is free to explore Queenstown and surrounds at your leisure. Go Bungy jumping, zip-lining, ride to Gondola, enjoy a wine, beer or gin tasting tour.', '["Free day to explore the adventure capital", "Optional shotover jet boat ride or bungee jump", "Relax at lakefront cafes or local craft breweries"]', '/assets/images/nz/Queenstown,  The Adventure Capital.png', 8
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 10, 'Depart Queenstown', 'Queenstown', 
  'Your New Zealand vacation concludes today when you are transferred to the airport for your flight back.', '["Enjoy hotel breakfast", "Private transfer from hotel to Queenstown Airport"]', '/assets/images/nz/Queenstown,  The Adventure Capital.png', 9
);

INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) VALUES
(@pkg_id, 'Waitomo Glowworms', 'Glide silently in a boat beneath a galaxy of glowing worms in limestone caverns.', 'Waves', 0);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) VALUES
(@pkg_id, 'Te Puia Geothermal Walk', 'Witness Pohutu Geyser erupting up to 30 meters high and explore bubbling mud pools.', 'Flame', 1);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) VALUES
(@pkg_id, 'Milford Sound Fjord Cruise', 'Cruise deep into Milford Sound to see sheer cliffs, seals, and waterfalls.', 'Compass', 2);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) VALUES
(@pkg_id, 'Gibbston Valley Wine', 'Taste world-class cold-climate Pinot Noir inside a subterranean wine cave.', 'Wine', 3);

INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) VALUES
(@pkg_id, 'New Zealand weather can be highly changeable, particularly in Fiordland. Pack layers and waterproofs.', 0);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) VALUES
(@pkg_id, 'Māori culture is central to Rotorua; respect local protocols (tikanga) during cultural shows.', 1);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) VALUES
(@pkg_id, 'Pre-booking domestic flights is included in this package.', 2);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) VALUES
(@pkg_id, 'Tipping is not customary in New Zealand, though appreciated for excellent service.', 3);

INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) VALUES
(@pkg_id, '/assets/images/new-zealand/1.jpg', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) VALUES
(@pkg_id, '/assets/images/nz/Auckland, The City of Sails.png', 1);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) VALUES
(@pkg_id, '/assets/images/nz/Rotorua, The Geothermal Wonderland.png', 2);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) VALUES
(@pkg_id, '/assets/images/nz/Queenstown,  The Adventure Capital.png', 3);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) VALUES
(@pkg_id, '/assets/images/nz/Milford Sound, The Eighth Wonder of the World.png', 4);


-- Package: Untamed New Zealand
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  'untamed-new-zealand', 'Untamed New Zealand', 'New Zealand', 'Oceania', 
  'Discover the wild landscapes and adventure of New Zealand on this 15-day untamed expedition', '/assets/images/new-zealand/2.jpg', 'Discover the wild landscapes and adventure of New Zealand on this 15-day untamed expedition. Blend high-energy jet boating and Funyak rafting in Queenstown with a Doubtful Sound cruise and Kepler Track heli-hike in Te Anau. Drive through Nelson to kayak Pinnacle Island, take a scenic ferry to Wellington for electric biking and Weta movie magic, and finish in Rotorua with white-water rafting, canopy ziplining, and Maori heritage.', 
  168.6626, -45.0312, 'Adventure', 'bg-orange-500', 
  'Discover the wild landscapes and adventure of New Zealand on this 15-day untamed expedition', '/assets/images/new-zealand/2.jpg', 
  'published', 'from $8,099 NZD', '15 Days', 
  'Wellington', 'New Zealand Dollar (NZD)', 'Varied, with temperate north and rugged alpine south', 'December–February (summer for hikes) & June–August (winter for ski)', 
  'English, Māori', 'NZST (UTC+12)', 'Left'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = 'untamed-new-zealand');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 1, 'Arrive Queenstown', 'Queenstown', 
  'Arrive in Queenstown for a 2-night stay and enjoy an exhilarating jet boat ride with stunning alpine views.', '["Private airport transfer to Millennium Hotel", "60-minute thrilling KJET boat ride on Shotover/Kawarau rivers", "Free evening in central Queenstown"]', '/assets/images/new-zealand/2.jpg', 0
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 2, 'Funyaks Safari', 'Dart River & Glenorchy', 
  'Embark on a Dart River adventure with jet boating, Funyak canoeing, forest lunch, and scenic 4WD return.', '["Dart River wilderness jet boat ride", "Inflatable Funyak canoeing in crystal channels", "Gourmet forest buffet lunch included"]', '/assets/images/nz/Queenstown,  The Adventure Capital.png', 1
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 3, 'Queenstown - Te Anau', 'Te Anau', 
  'Enjoy a leisurely morning, then drive through scenic Southland to Te Anau for a 3-night hotel stay.', '["Pick up your intermediate rental SUV", "Scenic road trip to lakeside Te Anau", "Stay at Distinction Te Anau Hotel & Villas"]', '/assets/images/nz/Milford Sound, The Eighth Wonder of the World.png', 2
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 4, 'Doubtful Sound Wilderness Cruise', 'Doubtful Sound', 
  'Take a full-day Doubtful Sound tour with a lake cruise, scenic drive, and guided fjord voyage.', '["Cruise across Lake Manapouri", "Cross Wilmot Pass by coach through dense rainforest", "3-hour wilderness cruise in the deep Doubtful Sound fjord"]', '/assets/images/nz/Milford Sound, The Eighth Wonder of the World.png', 3
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 5, 'Kepler Track Heli-Hike', 'Kepler Track', 
  'Take the Fiordland Heli-Hike from Te Anau with alpine trekking, cave exploration, and scenic lake return.', '["Scenic helicopter flight to Luxmore Hut on the Kepler Track", "Guided alpine ridge hike and limestone cave exploration", "Water taxi return ride across Lake Te Anau"]', '/assets/images/nz/Milford Sound, The Eighth Wonder of the World.png', 4
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 6, 'Te Anau - Nelson', 'Nelson', 
  'After breakfast, fly to Nelson via Queenstown, pick up a rental car, and settle in for a 3-night stay.', '["Drive back to Queenstown and return hire car", "Flight to Nelson (sunny tip of South Island)", "Pick up new hire car and check in to Rutherford Hotel"]', '/assets/images/nz/Christchurch The Garden City.png', 5
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 7, 'Torrent Bay Kayak & Hike', 'Abel Tasman National Park', 
  'Cruise from Kaiteriteri to Torrent Bay, kayak to Pinnacle Island, explore, swim, hike, and return by 6:00 pm.', '["Abel Tasman catamaran cruise to Torrent Bay", "Guided kayak tour to see the seal colony at Pinnacle Island", "Swim in turquoise waters and walk the coastal forest trail"]', '/assets/images/nz/Christchurch The Garden City.png', 6
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 8, 'Spooners Tunnel Cycling', 'Nelson', 
  'Ride downhill from Kohatu to Nelson through forests, tunnels, villages, and end with a brewery visit.', '["Cycle through Spooners Tunnel (longest decommissioned rail tunnel)", "Easy downhill riding along the Great Taste Trail", "Finish with a tasting paddle at a boutique craft brewery"]', '/assets/images/nz/Christchurch The Garden City.png', 7
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 9, 'Nelson - Picton - Wellington', 'Wellington', 
  'Drive to Picton, cruise to Wellington, check in for 3 nights, and explore Te Papa’s cultural exhibitions.', '["Scenic Queen Charlotte Drive to Picton", "Interislander ferry ride through Marlborough Sounds to Wellington", "Stay at Rydges Wellington and visit Te Papa National Museum"]', '/assets/images/nz/Wellington The Cool Capital.png', 8
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 10, 'Electric Bike Tour & Wētā Workshop', 'Wellington', 
  'Begin with an electric bike tour of Wellington’s waterfront, then explore movie magic at Wētā Workshop.', '["Guided E-bike tour of Wellington''s bays and lookouts", "Weta Workshop guided tour of movie prosthetics and props", "Free afternoon in Cuba Street''s creative zone"]', '/assets/images/nz/Wellington The Cool Capital.png', 9
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 11, 'Wellington Foodie Tour', 'Wellington', 
  'Enjoy a gourmet tour of Wellington with tastings of coffee, cheese, chocolate, beer, gin, and more.', '["Guided Taste Buds foodies walking tour", "Try fresh coffee, artisan cheese, and gourmet chocolates", "Gourmet lunch with local craft beers"]', '/assets/images/nz/Wellington The Cool Capital.png', 10
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 12, 'Wellington - Rotorua', 'Rotorua', 
  'After breakfast, transfer to Wellington Airport for your short flight to Rotorua. On arrival, transfer to you hotel for a 3-night stay.', '["Flight from Wellington to Rotorua (North Island)", "Check in to Regent of Rotorua boutique hotel", "Free evening to explore Redwood Forest nightwalk (optional)"]', '/assets/images/nz/Rotorua, The Geothermal Wonderland.png', 11
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 13, 'Kaituna Rafting & Sledging', 'Rotorua', 
  'Experience the Kaituna River with a thrilling rafting and sledging combo through rapids, canyons, and Māori heritage.', '["Raft down the famous 7-meter Tutea Falls (highest commercially rafted waterfall)", "River sledging through narrow rock canyons", "Learn about M\\u0101ori legends of the Kaituna River"]', '/assets/images/nz/Rotorua, The Geothermal Wonderland.png', 12
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 14, 'Zipline Canopy & Te Po', 'Rotorua', 
  'Enjoy a 3.5-hour zipline canopy tour by day, then explore Rotorua’s Māori culture and geothermal wonders by night.', '["Ultimate Canopy zipline tour over native forest", "Guided walk through Te Puia''s geothermal valley", "Hangi feast and cultural show under the geysers"]', '/assets/images/nz/Rotorua, The Geothermal Wonderland.png', 13
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 15, 'Rotorua - Auckland & Depart', 'Auckland', 
  'After breakfast, enjoy the last few hours in Rotorua before heading to Rotorua Airport to return the rental vehicle ahead of boarding your flight to Auckland.', '["Enjoy boutique hotel breakfast", "Drive to Rotorua Airport and return hire car", "Flight to Auckland for your onward journey"]', '/assets/images/nz/Auckland, The City of Sails.png', 14
);

INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) VALUES
(@pkg_id, 'Kepler Heli-Hike', 'Fly by helicopter to the alpine ridgeline of Kepler Track and hike down through beech forests.', 'Compass', 0);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) VALUES
(@pkg_id, 'Abel Tasman Kayaking', 'Paddle double sea kayaks in turquoise lagoons to spot wild fur seals on Pinnacle Island.', 'Waves', 1);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) VALUES
(@pkg_id, 'Cuba Street Food Tour', 'Savor coffee, chocolates, and craft beers in Wellington''s culinary district.', 'Utensils', 2);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) VALUES
(@pkg_id, 'Kaituna Waterfall Rafting', 'Tackle the wild rapids and plunge down the 7-meter waterfall on the Kaituna River.', 'Bot', 3);

INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) VALUES
(@pkg_id, 'Car rentals are included in Nelson and Te Anau; ensure you have a valid driver''s license in English.', 0);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) VALUES
(@pkg_id, 'The Interislander ferry crossing can be rough; take seasickness medication if needed.', 1);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) VALUES
(@pkg_id, 'Strict weight limits apply to the domestic flights included.', 2);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) VALUES
(@pkg_id, 'For the Kepler Heli-Hike, warm layers, waterproof shell, and hiking boots are mandatory.', 3);

INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) VALUES
(@pkg_id, '/assets/images/new-zealand/2.jpg', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) VALUES
(@pkg_id, '/assets/images/nz/Milford Sound, The Eighth Wonder of the World.png', 1);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) VALUES
(@pkg_id, '/assets/images/nz/Christchurch The Garden City.png', 2);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) VALUES
(@pkg_id, '/assets/images/nz/Wellington The Cool Capital.png', 3);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) VALUES
(@pkg_id, '/assets/images/nz/Rotorua, The Geothermal Wonderland.png', 4);


-- Package: Signature Cities of New Zealand
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  'signature-cities-new-zealand', 'Signature Cities of New Zealand', 'New Zealand', 'Oceania', 
  'Journey through New Zealand''s signature destinations on this 13-day city showcase', '/assets/images/new-zealand/3.jpg', 'Journey through New Zealand''s signature destinations on this 13-day city showcase. Explore Queenstown''s alpine charms, cruise Doubtful Sound, and fly to the capital Wellington for a Kapiti Island guided walk and a foodies tour. Travel to Rotorua for a Te Pa Tu Maori evening, then journey through Hobbiton to Auckland to explore Waiheke Island''s premium vineyards.', 
  168.6626, -45.0312, 'City', 'bg-emerald-500', 
  'Journey through New Zealand''s signature destinations on this 13-day city showcase', '/assets/images/new-zealand/3.jpg', 
  'published', 'from $4,869 NZD', '13 Days', 
  'Wellington', 'New Zealand Dollar (NZD)', 'Temperate maritime; comfortable city temperatures and clear alpine air', 'December–February & March–May', 
  'English, Māori', 'NZST (UTC+12)', 'Left'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = 'signature-cities-new-zealand');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 1, 'Arrive Queenstown', 'Queenstown', 
  'After clearing Customs, fly to Queenstown, transfer to your hotel for a 4-night stay, and enjoy free time.', '["Arrive in Queenstown and transfer to hotel", "Stay 4 nights at Heritage Hotel Queenstown", "Free evening to explore the alpine resort town"]', '/assets/images/new-zealand/3.jpg', 0
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 2, 'Best of Queenstown Tour', 'Queenstown', 
  'Discover Queenstown on a half-day tour with scenic lookouts, Arrowtown charm, Gibbston wine tasting, and a Lake Wakatipu cruise.', '["Scenic lookouts of Lake Wakatipu and Remarkables", "Gibbston Valley wine tasting and cheese board", "30-minute cruise on Lake Wakatipu back to town"]', '/assets/images/nz/Queenstown,  The Adventure Capital.png', 1
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 3, 'Doubtful Sound Fjord Journey', 'Doubtful Sound', 
  'Explore the remote Doubtful Sound on a full-day journey with scenic cruises, rainforest views, and native wildlife.', '["Cruising Lake Manapouri and crossing Wilmot Pass", "3-hour catamaran cruise through the silent Doubtful Sound fjord", "Spot fur seals, penguins, and dolphins"]', '/assets/images/nz/Milford Sound, The Eighth Wonder of the World.png', 2
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 4, 'Queenstown Free Day', 'Queenstown', 
  'Enjoy a free day in Queenstown with options like bungy jumping, jet boating, wine tasting, and scenic hikes.', '["Unleash your adventure style on a free day", "Optional shotover jet boat ride", "Ride the Skyline Gondola for panoramic peak views"]', '/assets/images/nz/Queenstown,  The Adventure Capital.png', 3
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 5, 'Queenstown - Wellington', 'Wellington', 
  'Transfer from your hotel to Queenstown Airport for your flight to Wellington. On arrival, transfer to your hotel for a 3-night stay.', '["Private transfer to Queenstown Airport", "Flight to Wellington (North Island)", "Check in to Rydges Wellington Hotel"]', '/assets/images/nz/Wellington The Cool Capital.png', 4
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 6, 'Kapiti Island Nature Tour', 'Kapiti Island', 
  'Explore Kapiti Island’s predator-free sanctuary with a guided nature walk, native bird encounters, and lunch at the Lodge before returning to Wellington.', '["Ferry to Kapiti Island nature reserve", "Guided walk to spot rare takahe, kaka, and weka birds", "Delicious local lunch at Kapiti Island Lodge"]', '/assets/images/nz/Wellington The Cool Capital.png', 5
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 7, 'Wellington Foodie Tour', 'Wellington', 
  'Savor Wellington’s vibrant food scene on a guided tour through Petone’s top culinary spots with tastings and lunch included.', '["Full-day guided culinary walking tour", "Visit local roasters, cheese cellars, and chocolatiers", "Taste the best of New Zealand''s craft foods"]', '/assets/images/nz/Wellington The Cool Capital.png', 6
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 8, 'Wellington - Rotorua & Te Pā Tū', 'Rotorua', 
  'Fly from Wellington to Rotorua, settle in for 2 nights, and enjoy the immersive Te Pā Tū evening of Māori culture, seasonal cuisine, and storytelling.', '["Flight to Rotorua", "Stay at Regent of Rotorua boutique hotel", "Experience Te P\\u0101 T\\u016b M\\u0101ori concert and feast"]', '/assets/images/nz/Rotorua, The Geothermal Wonderland.png', 7
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 9, 'Eco Thermal Park Tour', 'Rotorua', 
  'Tour Rotorua’s top geothermal parks with a guide, then relax in mineral or mud pools.', '["Guided walk at Wai-O-Tapu Thermal Wonderland", "See the Champagne Pool and Lady Knox Geyser", "Optional soak at Hell''s Gate mud baths"]', '/assets/images/nz/Rotorua, The Geothermal Wonderland.png', 8
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 10, 'Rotorua - Hobbiton - Auckland', 'Hobbiton & Auckland', 
  'Travel to the Hobbiton Movie Set for a guided tour, ale at the Green Dragon Inn, buffet lunch, and souvenir shopping before heading to Auckland for a 3-night stay.', '["Guided tour of the 12-acre Hobbiton movie set", "Enjoy a pint of cider at the Green Dragon Inn", "Scenic drive to Auckland and stay at Fable Auckland"]', '/assets/images/nz/Auckland, The City of Sails.png', 9
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 11, 'Auckland City Revealed', 'Auckland', 
  'Discover Auckland’s highlights on a morning city tour, from Queen Street to Mt Victoria, with beach strolls and marina views. Spend the afternoon at leisure.', '["Half-day guided city sightseeing tour", "See Mt Eden volcanic crater and drive Tamaki Drive", "Free afternoon in downtown Auckland"]', '/assets/images/nz/Auckland, The City of Sails.png', 10
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 12, 'Waiheke Island Food & Wine', 'Waiheke Island', 
  'Take a scenic ferry to Waiheke Island for a gourmet food and wine tour across three vineyards, followed by a family-style lunch. Explore Oneroa Village and beach before returning to Auckland.', '["Scenic ferry ride across Hauraki Gulf to Waiheke Island", "Wine tastings at three award-winning vineyards", "Gourmet vineyard lunch and Oneroa beach walk"]', '/assets/images/nz/Auckland, The City of Sails.png', 11
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 13, 'Depart Auckland', 'Auckland', 
  'After breakfast, you have free time until you transfer to Auckland Airport for your return flight back.', '["Enjoy hotel breakfast at Fable Auckland", "Private transfer to Auckland Airport for departure"]', '/assets/images/nz/Auckland, The City of Sails.png', 12
);

INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) VALUES
(@pkg_id, 'Kapiti Island Birdlife', 'Hike the dense forests of Kapiti Island, home to some of New Zealand''s rarest native birds.', 'Compass', 0);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) VALUES
(@pkg_id, 'Te Pa Tu Maori Dinner', 'Experience an award-winning Maori cultural performance and seasonal Hangi feast in Rotorua.', 'Heart', 1);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) VALUES
(@pkg_id, 'Hobbiton Movie Set', 'Explore the real Middle-earth movie set, complete with 44 Hobbit Holes and the Green Dragon Inn.', 'Castle', 2);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) VALUES
(@pkg_id, 'Waiheke Vineyard Tour', 'Taste premium Syrah and oysters on Waiheke Island, just a short ferry ride from Auckland.', 'Wine', 3);

INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) VALUES
(@pkg_id, 'Carry your passport or ID when visiting wineries on Waiheke, as licensing laws are strictly enforced.', 0);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) VALUES
(@pkg_id, 'Wear sturdy closed-toe shoes for the Hobbiton walking tour.', 1);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) VALUES
(@pkg_id, 'Bring binoculars for Kapiti Island to spot high-canopy native birds like Kaka and Stitchbirds.', 2);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) VALUES
(@pkg_id, 'Pre-book ferry spaces for Waiheke Island during the peak summer season (December-February).', 3);

INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) VALUES
(@pkg_id, '/assets/images/new-zealand/3.jpg', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) VALUES
(@pkg_id, '/assets/images/nz/Queenstown,  The Adventure Capital.png', 1);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) VALUES
(@pkg_id, '/assets/images/nz/Milford Sound, The Eighth Wonder of the World.png', 2);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) VALUES
(@pkg_id, '/assets/images/nz/Wellington The Cool Capital.png', 3);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) VALUES
(@pkg_id, '/assets/images/nz/Rotorua, The Geothermal Wonderland.png', 4);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) VALUES
(@pkg_id, '/assets/images/nz/Auckland, The City of Sails.png', 5);


-- Package: A Journey through Nature & Thrill South Island Splendors
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  'nature-thrill-south-island', 'A Journey through Nature & Thrill South Island Splendors', 'New Zealand', 'Oceania', 
  'Embark on a comprehensive 11-day self-drive road trip across New Zealand''s South Island', '/assets/images/new-zealand/4.jpg', 'Embark on a comprehensive 11-day self-drive road trip across New Zealand''s dramatic South Island. Start in Christchurch, stargaze at Lake Tekapo, and see the blue penguin colony in Oamaru. Savor Dunedin''s Larnach Castle, fly over Milford Sound in Queenstown, walk Franz Josef Glacier''s rainforests, and return to Christchurch aboard the world-famous TranzAlpine scenic railway.', 
  172.6362, -43.5321, 'Adventure', 'bg-orange-500', 
  'Embark on a comprehensive 11-day self-drive road trip across New Zealand''s South Island', '/assets/images/new-zealand/4.jpg', 
  'published', 'from $3,869 NZD', '11 Days', 
  'Christchurch', 'New Zealand Dollar (NZD)', 'Cool temperate alpine; cold crisp nights and sunny skies', 'December–February (hiking) & July–September (snow sports)', 
  'English', 'NZST (UTC+12)', 'Left'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = 'nature-thrill-south-island');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 1, 'Arrive Christchurch', 'Christchurch', 
  'Arrive in Christchurch, transfer to your hotel for an overnight stay, and enjoy a free afternoon exploring the city—try punting on the Avon River, strolling through the Botanic Gardens, or riding the Hop-On Hop-Off Tram.', '["Airport transfer to Sudima Christchurch City", "Avon River punting or historic tram ride", "Free afternoon in the rebuilt city center"]', '/assets/images/new-zealand/4.jpg', 0
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 2, 'Christchurch - Lake Tekapo', 'Lake Tekapo', 
  'Drive from Christchurch to Lake Tekapo through stunning alpine scenery, then enjoy an evening of stargazing and astronomy exploration with powerful telescopes and expert insights.', '["Collect your hire car and drive through Canterbury Plains", "See the turquoise waters of Lake Tekapo and Church of Good Shepherd", "Dark Sky Project stargazing experience at Mt John Observatory"]', '/assets/images/nz/Mount Cook  (Aoraki National Park).png', 1
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 3, 'Tekapo - Oamaru', 'Oamaru', 
  'Travel from Lake Tekapo to Oamaru through scenic countryside and coastal views, then visit the charming Blue Penguin Colony.', '["Drive to historic Victorian town of Oamaru", "See the limestone architecture in the historic precinct", "Evening viewing of the wild Blue Penguins return to the beach"]', '/assets/images/nz/Christchurch The Garden City.png', 2
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 4, 'Oamaru Heritage Day', 'Oamaru', 
  'Stay at Pen-Y-Bryn Lodge in Oamaru, a Victorian-era retreat offering heritage charm, modern comfort, and scenic Otago Peninsula views.', '["Breakfast at the historic Pen-y-Bryn estate", "Explore Oamaru''s steampunk museum and craft stores", "Bespoke multi-course dinner prepared by the lodge hosts"]', '/assets/images/nz/Christchurch The Garden City.png', 3
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 5, 'Oamaru - Dunedin', 'Dunedin & Larnach Castle', 
  'Drive from Oamaru to Dunedin through scenic Otago landscapes, then tour Larnach Castle and cruise Taiaroa Head to spot royal albatross, seals, and rare ocean wildlife.', '["Drive to Dunedin (New Zealand''s Scottish city)", "Guided tour of Larnach Castle (New Zealand''s only castle)", "Wildlife cruise off Otago Peninsula to see Royal Albatross"]', '/assets/images/nz/Christchurch The Garden City.png', 4
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 6, 'Dunedin - Queenstown', 'Queenstown', 
  'Drive from Dunedin to Queenstown through coastal, farmland, and alpine scenery, then settle in for a two-night stay.', '["Drive through Central Otago fruit orchards", "Settle into Oasis room at The Dairy Private Hotel", "Stroll Queenstown lakefront dining precinct"]', '/assets/images/nz/Queenstown,  The Adventure Capital.png', 5
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 7, 'Milford Sound Fly & Cruise', 'Milford Sound', 
  'Fly over stunning landscapes to Milford Sound for a nature cruise, then return to Queenstown for free time.', '["Scenic flight from Queenstown over the Southern Alps", "Fjord nature cruise under Mitre Peak", "Return scenic flight landing in Queenstown"]', '/assets/images/nz/Milford Sound, The Eighth Wonder of the World.png', 6
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 8, 'Queenstown - Franz Josef', 'West Coast Glaciers', 
  'Drive from Queenstown to Franz Josef through alpine landscapes, rainforests, and glacier-topped peaks in South Island.', '["Drive via Haast Pass through Mt Aspiring National Park", "See Thunder Creek Falls and rainforest coastal tracks", "Check in to Westwood Lodge forest estate in Franz Josef"]', '/assets/images/nz/Franz Josef & Fox Glaciers  Ice Meets Rainforest.png', 7
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 9, 'Franz Josef Glacier Walk', 'Franz Josef Glacier', 
  'Embark on a guided rainforest walk to Franz Josef Glacier, then explore glacial rivers, forests, and alpine wildlife at your leisure.', '["Guided nature walk to the glacier terminal face", "Explore lush temperate rainforests and glacier valleys", "Soak in local hot pools (optional)"]', '/assets/images/nz/Franz Josef & Fox Glaciers  Ice Meets Rainforest.png', 8
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 10, 'Franz Josef - Greymouth - Christchurch', 'TranzAlpine Railway', 
  'Drive from Franz Josef to Greymouth, then board the scenic TranzAlpine Train to Christchurch for an overnight stay.', '["Drive to Greymouth and return hire car", "Board the world-famous TranzAlpine scenic railway", "Cross Arthur''s Pass and Southern Alps to Christchurch"]', '/assets/images/nz/Christchurch The Garden City.png', 9
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 11, 'Depart Christchurch', 'Christchurch', 
  'After breakfast, you have free time to explore the city before transferring to Christchurch Airport for your return flight.', '["Enjoy hotel breakfast at Sudima", "Private transfer to Christchurch Airport for departure"]', '/assets/images/nz/Christchurch The Garden City.png', 10
);

INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) VALUES
(@pkg_id, 'Stargazing at Mt John', 'Observe pristine night skies inside an international dark sky reserve at Tekapo.', 'Sun', 0);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) VALUES
(@pkg_id, 'Larnach Castle Tour', 'Visit New Zealand''s only castle and stroll its award-winning gardens in Dunedin.', 'Castle', 1);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) VALUES
(@pkg_id, 'Milford Fly and Cruise', 'Fly over glaciers and cruise through Milford Sound fjord for the ultimate scenic combo.', 'Plane', 2);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) VALUES
(@pkg_id, 'TranzAlpine Rail Journey', 'Ride one of the world''s most spectacular train trips across the Southern Alps.', 'Train', 3);

INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) VALUES
(@pkg_id, 'South Island roads are narrow and winding; give yourself plenty of time for self-driving.', 0);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) VALUES
(@pkg_id, 'The TranzAlpine train departs Greymouth in the early afternoon; do not be late for check-in.', 1);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) VALUES
(@pkg_id, 'Stargazing tours are weather-dependent; bring warm windbreakers for Mt John summit.', 2);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) VALUES
(@pkg_id, 'Always carry insect repellent when visiting the West Coast, as sandflies are common.', 3);

INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) VALUES
(@pkg_id, '/assets/images/new-zealand/4.jpg', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) VALUES
(@pkg_id, '/assets/images/nz/Mount Cook  (Aoraki National Park).png', 1);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) VALUES
(@pkg_id, '/assets/images/nz/Christchurch The Garden City.png', 2);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) VALUES
(@pkg_id, '/assets/images/nz/Milford Sound, The Eighth Wonder of the World.png', 3);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) VALUES
(@pkg_id, '/assets/images/nz/Franz Josef & Fox Glaciers  Ice Meets Rainforest.png', 4);


-- Package: Two Cities One Journey
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  'two-cities-one-journey', 'Two Cities One Journey', 'New Zealand', 'Oceania', 
  'Experience New Zealand''s two most iconic destinations, Auckland and Queenstown', '/assets/images/new-zealand/5.jpg', 'Experience New Zealand''s two most iconic destinations, Auckland and Queenstown, on this 8-day itinerary. In Auckland, explore the city, visit Hobbiton Movie Set and Waitomo Caves, and explore Weta Workshop Unleashed. Then, fly to Queenstown for a half-day cruise on Lake Wakatipu, a wine tasting in Gibbston, and a spectacular coach tour to Milford Sound.', 
  174.7633, -36.8485, 'City', 'bg-emerald-500', 
  'Experience New Zealand''s two most iconic destinations, Auckland and Queenstown', '/assets/images/new-zealand/5.jpg', 
  'published', 'from $2,799 NZD', '8 Days', 
  'Wellington', 'New Zealand Dollar (NZD)', 'Temperate maritime; mild northern coast and alpine southern lake', 'December–February & March–May', 
  'English', 'NZST (UTC+12)', 'Left'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = 'two-cities-one-journey');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 1, 'Arrive Auckland', 'Auckland', 
  'After you clear Immigration and Customs meet your driver in the Arrivals Hall for your private transfer to your Auckland accommodation for a 3-night stay. This afternoon explore Wētā Workshop Unleashed for interactive film sets focusing on horror, fantasy, and sci-fi.', '["Private airport transfer to Fable Auckland", "Weta Workshop Unleashed guided tour", "Interactive film making experience"]', '/assets/images/new-zealand/5.jpg', 0
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 2, 'Auckland Discovery Tour', 'Auckland', 
  'Discover Auckland on a half-day tour. Drive along scenic Tamaki Drive, visit Bastion Point, Achilles Point and volcanic cones like Mt Eden and One Tree Hill for 360-degree views of the city.', '["Guided city landmarks sightseeing", "Tamaki Drive and Bastion Point lookouts", "See the craters of Mt Eden and One Tree Hill"]', '/assets/images/nz/Auckland, The City of Sails.png', 1
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 3, 'Waitomo Caves & Hobbiton', 'Hobbiton & Waitomo Caves', 
  'This morning head to The Hobbiton Movie Set for a guided tour of the village and hobbit holes with a drink at the Green Dragon Inn. In the afternoon, head to Waitomo Glowworm Cave for a guided boat ride inside the famous underground grotto.', '["Hobbiton movie set tour and drink at Green Dragon Inn", "Waitomo Glowworm Cave boat cruise", "Return transfer to Auckland"]', '/assets/images/nz/Rotorua, The Geothermal Wonderland.png', 2
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 4, 'Auckland – Queenstown', 'Queenstown', 
  'Transfer by private vehicle to Auckland Airport for your flight to Queenstown. On arrival, you will be met and transferred to your accommodation for a 4-night stay. The remainder of your day is free to explore Queenstown at your leisure.', '["Private transfer to Auckland Airport", "Flight to Queenstown in the South Island", "Check in to Hotel St Moritz Queenstown"]', '/assets/images/nz/Queenstown,  The Adventure Capital.png', 3
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 5, 'Best of Queenstown Sightseeing', 'Queenstown', 
  'No trip to Queenstown is complete without taking in some incredible views, visiting Arrowtown, sampling some tasty local wine, and getting out on the water so the top local spots are handpicked and combined into an amazing half-day sightseeing experience.', '["Visit Shotover River lookout and Arrowtown", "Gibbston Valley wine tasting and cheese board", "30-minute scenic Lake Wakatipu boat cruise"]', '/assets/images/nz/Queenstown,  The Adventure Capital.png', 4
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 6, 'Milford Sound Coach & Cruise', 'Milford Sound', 
  'Board the coach in Queenstown and travel alongside Lake Wakatipu and then through farming countryside to Te Anau. From Te Anau, the overland journey to Milford Sound is a showcase of sheer mountains, native rain forest, and cascading waterfalls. Board a modern vessel for a 2-hour Nature Cruise before returning by coach.', '["Scenic coach travel along Lake Wakatipu", "2-hour nature cruise in Milford Sound", "Onboard craft beers and local wine options"]', '/assets/images/nz/Milford Sound, The Eighth Wonder of the World.png', 5
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 7, 'Queenstown Free Day', 'Queenstown', 
  'Today is free to explore Queenstown and surrounds at your leisure. Go Bungy jumping, zip-lining, ride to Gondola, enjoy a wine, beer or gin tasting tour.', '["Free day to explore or shop", "Optional gondola ride or extreme bungee jump", "Concierge desk assistance for bookings"]', '/assets/images/nz/Queenstown,  The Adventure Capital.png', 6
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 8, 'Depart Queenstown', 'Queenstown', 
  'Your New Zealand vacation concludes today when you are transferred to the airport for your flight back.', '["Enjoy lake-view breakfast", "Private transfer to Queenstown Airport for departure"]', '/assets/images/nz/Queenstown,  The Adventure Capital.png', 7
);

INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) VALUES
(@pkg_id, 'Weta Workshop Unleashed', 'Step into interactive horror, sci-fi, and fantasy film sets created by Wellington''s famous designers.', 'Eye', 0);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) VALUES
(@pkg_id, 'Hobbiton Village Tour', 'Walk among the Shire''s hills and step inside a real replica Hobbit Hole.', 'Castle', 1);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) VALUES
(@pkg_id, 'Milford Nature Cruise', 'Cruise the full length of the Milford Sound fiord out to the Tasman Sea.', 'Waves', 2);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) VALUES
(@pkg_id, 'Shotover River Lookout', 'Photograph the deep canyon gorges and famous jet boats on the Shotover River.', 'MapPin', 3);

INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) VALUES
(@pkg_id, 'Private sedan airport transfers are included in both cities.', 0);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) VALUES
(@pkg_id, 'The drive between Queenstown and Milford Sound is approximately 4 hours; coach packages allow you to relax.', 1);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) VALUES
(@pkg_id, 'Check in to the Weta Workshop experience 15 minutes before your booked time slot.', 2);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) VALUES
(@pkg_id, 'Bring cash or card for lunch at the Te Anau stop during the Milford Sound day trip.', 3);

INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) VALUES
(@pkg_id, '/assets/images/new-zealand/5.jpg', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) VALUES
(@pkg_id, '/assets/images/nz/Auckland, The City of Sails.png', 1);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) VALUES
(@pkg_id, '/assets/images/nz/Rotorua, The Geothermal Wonderland.png', 2);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) VALUES
(@pkg_id, '/assets/images/nz/Queenstown,  The Adventure Capital.png', 3);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) VALUES
(@pkg_id, '/assets/images/nz/Milford Sound, The Eighth Wonder of the World.png', 4);


-- Package: Auckland City Break
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  'auckland-city-break', 'Auckland City Break', 'New Zealand', 'Oceania', 
  'Discover Auckland, New Zealand''s largest city, on this 3-day urban harbor escape', '/assets/images/new-zealand/Auckland City Break_page-0001.jpg', 'Discover Auckland, New Zealand''s largest city, on this 3-day urban harbor escape. Enjoy private airport transfers, stay in superior city accommodations, and take a guided city tour highlighting scenic waterfronts and volcanic viewpoints. Top it off with entry to the Sky Tower for panoramic 360-degree views.', 
  174.7633, -36.8485, 'City', 'bg-emerald-500', 
  'Discover Auckland, New Zealand''s largest city, on this 3-day urban harbor escape', '/assets/images/new-zealand/Auckland City Break_page-0001.jpg', 
  'published', 'from $699 NZD', '3 Days', 
  'Auckland', 'New Zealand Dollar (NZD)', 'Subtropical; warm humid summers and mild wet winters', 'November–April (warmer weather and beach days)', 
  'English', 'NZST (UTC+12)', 'Left'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = 'auckland-city-break');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 1, 'Arrive Auckland', 'Auckland', 
  'After clearing Immigration and Customs, meet your driver in the Arrivals Hall for your private transfer to your Auckland accommodation for a 2-night stay. The remainder of the day is at leisure to explore Viaduct Harbour or Queen Street.', '["Meet-and-greet private airport transfer", "Stay 2 nights at Holiday Inn Express Auckland in a Superior Room", "Explore waterfront dining at Viaduct Harbour"]', '/assets/images/new-zealand/Auckland City Break_page-0001.jpg', 0
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 2, 'Auckland City Discovery', 'Auckland', 
  'Discover Auckland on a guided half-day city tour including scenic waterfront suburbs, volcanic viewpoints and panoramic harbour views. Visit the iconic Sky Tower for breathtaking 360-degree views across the city and Hauraki Gulf.', '["Half-day guided city landmarks tour", "Panoramic lookouts of Waitemata Harbour", "Entry tickets to the 328-meter-tall Sky Tower"]', '/assets/images/nz/Auckland, The City of Sails.png', 1
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 3, 'Depart Auckland', 'Auckland', 
  'Private transfer to Auckland Airport for your onward journey.', '["Enjoy hotel breakfast", "Private transfer back to Auckland Airport"]', '/assets/images/new-zealand/Auckland City Break_page-0001.jpg', 2
);

INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) VALUES
(@pkg_id, 'Sky Tower Viewing', 'View Auckland''s skyline and harbors from the highest public viewing platform in New Zealand.', 'Eye', 0);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) VALUES
(@pkg_id, 'Viaduct Harbour', 'Stroll and dine along the lively superyacht marina in downtown Auckland.', 'Waves', 1);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) VALUES
(@pkg_id, 'Mt Eden Volcano', 'Walk to the summit of Auckland''s highest natural volcanic cone for harbor panoramas.', 'MapPin', 2);

INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) VALUES
(@pkg_id, 'The Sky Tower entry tickets are open-dated and can be used at your convenience.', 0);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) VALUES
(@pkg_id, 'The hotel features complimentary Wi-Fi and express breakfast daily.', 1);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) VALUES
(@pkg_id, 'Look for your driver holding a placard in the Arrivals Hall.', 2);

INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) VALUES
(@pkg_id, '/assets/images/new-zealand/Auckland City Break_page-0001.jpg', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) VALUES
(@pkg_id, '/assets/images/nz/Auckland, The City of Sails.png', 1);


-- Package: Christchurch City Break
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  'christchurch-city-break', 'Christchurch City Break', 'New Zealand', 'Oceania', 
  'Explore Christchurch, the South Island''s gateway, on this 3-day city break', '/assets/images/new-zealand/Christchurch City Break_page-0001.jpg', 'Explore Christchurch, the South Island''s gateway, on this 3-day city break. Settle into premium central accommodation and take a city sightseeing tour of Cathedral Square and Avon River. Enjoy entry to the International Antarctic Center for penguin encounters and a Hagglund ride.', 
  172.6362, -43.5321, 'City', 'bg-emerald-500', 
  'Explore Christchurch, the South Island''s gateway, on this 3-day city break', '/assets/images/new-zealand/Christchurch City Break_page-0001.jpg', 
  'published', 'from $699 NZD', '3 Days', 
  'Christchurch', 'New Zealand Dollar (NZD)', 'Cool temperate; pleasant summers and brisk winters', 'November–April (ideal weather)', 
  'English', 'NZST (UTC+12)', 'Left'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = 'christchurch-city-break');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 1, 'Arrive Christchurch', 'Christchurch', 
  'After clearing Immigration and Customs, meet your driver in the Arrivals Hall for your private transfer to your Christchurch accommodation for a 2-night stay. The remainder of the day is at leisure to explore Cathedral Square, New Regent Street or the Botanic Gardens.', '["Meet-and-greet private airport transfer", "Stay 2 nights at Novotel Cathedral Square in a Superior Room", "Walk through the beautiful central botanic gardens"]', '/assets/images/new-zealand/Christchurch City Break_page-0001.jpg', 0
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 2, 'Christchurch Discovery', 'Christchurch', 
  'Discover Christchurch on a guided city tour featuring the transitional Cardboard Cathedral, Avon River punting, and post-earthquake rebuild highlights. Visit the International Antarctic Centre for the Hagglund ride, 4D theatre, and penguin encounter showcasing New Zealand''s polar research legacy.', '["Guided city landmarks sightseeing", "See Cardboard Cathedral and Avon River", "Hagglund vehicle ride at the International Antarctic Centre"]', '/assets/images/nz/Christchurch The Garden City.png', 1
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 3, 'Depart Christchurch', 'Christchurch', 
  'Private transfer to Christchurch Airport for your onward journey.', '["Enjoy hotel breakfast", "Private transfer back to Christchurch Airport"]', '/assets/images/new-zealand/Christchurch City Break_page-0001.jpg', 2
);

INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) VALUES
(@pkg_id, 'International Antarctic Centre', 'Experience an indoor Antarctic storm, ride a Hagglund, and see little blue penguins.', 'Eye', 0);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) VALUES
(@pkg_id, 'Cardboard Cathedral', 'Visit the world''s only cathedral built largely from cardboard tube structures.', 'Landmark', 1);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) VALUES
(@pkg_id, 'Avon River Punting', 'Glise peacefully down the Avon River in a flat-bottomed boat guided by a punter.', 'Waves', 2);

INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) VALUES
(@pkg_id, 'The Antarctic Centre is located next to Christchurch Airport; you can visit during transit if preferred.', 0);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) VALUES
(@pkg_id, 'Christchurch has a fantastic local tram system; hop-on tickets are sold directly on board.', 1);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) VALUES
(@pkg_id, 'The Novotel is located right on Cathedral Square, steps from restaurants and bus hubs.', 2);

INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) VALUES
(@pkg_id, '/assets/images/new-zealand/Christchurch City Break_page-0001.jpg', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) VALUES
(@pkg_id, '/assets/images/nz/Christchurch The Garden City.png', 1);


-- Package: Queenstown City Break
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  'queenstown-city-break', 'Queenstown City Break', 'New Zealand', 'Oceania', 
  'Experience the adventure capital of the South Island with this 4-day city break', '/assets/images/new-zealand/Queenstown City Break_page-0001.jpg', 'Experience the adventure capital of the South Island with this 4-day city break. Settle into superior lake-view accommodations and ride the Skyline Gondola and Luge. Embark on a spectacular small-group tour to Milford Sound, featuring a fjord nature cruise and a gourmet picnic lunch.', 
  168.6626, -45.0312, 'Adventure', 'bg-orange-500', 
  'Experience the adventure capital of the South Island with this 4-day city break', '/assets/images/new-zealand/Queenstown City Break_page-0001.jpg', 
  'published', 'from $825 NZD', '4 Days', 
  'Queenstown', 'New Zealand Dollar (NZD)', 'Alpine; warm summers and crisp snowy winters', 'December–February (summer lake sports) & July–September (skiing)', 
  'English', 'NZST (UTC+12)', 'Left'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = 'queenstown-city-break');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 1, 'Arrive Queenstown', 'Queenstown', 
  'After clearing Immigration and Customs, meet your driver in the Arrivals Hall for your private transfer to your Queenstown accommodation for a 3-night stay. The remainder of the day is at leisure to explore Lake Wakatipu waterfront or Queenstown Gardens.', '["Meet-and-greet private airport transfer", "Stay 3 nights at Holiday Inn Frankton Road in a Superior Room", "Free afternoon to walk central lakefront promenade"]', '/assets/images/new-zealand/Queenstown City Break_page-0001.jpg', 0
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 2, 'Queenstown Gondola & Luge', 'Queenstown', 
  'Ride the Skyline Gondola to Bob''s Peak for panoramic views of Lake Wakatipu and The Remarkables, then thrill with multiple luge rides down the hillside tracks. Afternoon free to explore adventure capital shops, Fergburger, or Lakefront promenade.', '["Skyline Gondola ride up Bob''s Peak", "5 luge rides down the winding hill tracks", "Free afternoon in central shopping district"]', '/assets/images/nz/Queenstown,  The Adventure Capital.png', 1
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 3, 'Milford Sound Cruise', 'Milford Sound', 
  'Travel through Fiordland''s dramatic landscapes to Milford Sound for a premium nature cruise with picnic lunch, spotting seals, dolphins and cascading waterfalls. Return via mirror lakes and Homer Tunnel with stunning alpine scenery.', '["Scenic coach drive through Fiordland National Park", "Fjord nature cruise with picnic lunch box", "See mirror lakes and the Homer Tunnel"]', '/assets/images/nz/Milford Sound, The Eighth Wonder of the World.png', 2
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 4, 'Depart Queenstown', 'Queenstown', 
  'Private transfer to Queenstown Airport for your onward journey.', '["Enjoy hotel breakfast", "Private transfer back to Queenstown Airport"]', '/assets/images/new-zealand/Queenstown City Break_page-0001.jpg', 3
);

INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) VALUES
(@pkg_id, 'Skyline Luge Ride', 'Steer wheeled luge carts down fast, winding gravity tracks on the hillside of Bob''s Peak.', 'Bot', 0);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) VALUES
(@pkg_id, 'Milford Sound Day Trip', 'Take a scenic bus tour to Milford Sound and cruise past towering granite rock peaks.', 'Compass', 1);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) VALUES
(@pkg_id, 'Waterfront Promenade Walk', 'Walk the lakefront trail past botanic gardens and enjoy the famous local Fergburgers.', 'Waves', 2);

INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) VALUES
(@pkg_id, 'Queue early for the famous Fergburger to avoid peak 1-hour wait times.', 0);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) VALUES
(@pkg_id, 'The luge operates in most weather, but check-in early during holiday weekends.', 1);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) VALUES
(@pkg_id, 'The bus to Milford Sound departs early (usually around 7:00 AM); ensure you have a wake-up call.', 2);

INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) VALUES
(@pkg_id, '/assets/images/new-zealand/Queenstown City Break_page-0001.jpg', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) VALUES
(@pkg_id, '/assets/images/nz/Queenstown,  The Adventure Capital.png', 1);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) VALUES
(@pkg_id, '/assets/images/nz/Milford Sound, The Eighth Wonder of the World.png', 2);


-- Package: Rotorua City Break
INSERT INTO `tour_packages` (
  `slug`, `name`, `country`, `region`, `tagline`, `hero_image`, `overview`, 
  `coords_lon`, `coords_lat`, `tag`, `tag_color`, `short_description`, `thumbnail_image`, 
  `status`, `price`, `duration`, 
  `quick_fact_capital`, `quick_fact_currency`, `quick_fact_climate`, `quick_fact_best_season`, 
  `quick_fact_languages`, `quick_fact_time_zone`, `quick_fact_driving_side`
) VALUES (
  'rotorua-city-break', 'Rotorua City Break', 'New Zealand', 'Oceania', 
  'Discover Rotorua''s geothermal wonders and Maori cultural heritage on this 3-day city break', '/assets/images/new-zealand/Rotorua City Break_page-0001.jpg', 'Discover Rotorua''s geothermal wonders and Maori cultural heritage on this 3-day city break. Settle into lakeside accommodation and experience the Te Po Combo at Te Puia—featuring a guided geothermal walk, traditional hangi dinner, and a cultural performance among bubbling geysers.', 
  176.2497, -38.1368, 'Spiritual', 'bg-violet-500', 
  'Discover Rotorua''s geothermal wonders and Maori cultural heritage on this 3-day city break', '/assets/images/new-zealand/Rotorua City Break_page-0001.jpg', 
  'published', 'from $599 NZD', '3 Days', 
  'Rotorua', 'New Zealand Dollar (NZD)', 'Temperate; warm summers and mild damp winters', 'November–April (warm weather and outdoor hiking)', 
  'English, Māori', 'NZST (UTC+12)', 'Left'
) ON DUPLICATE KEY UPDATE 
  `name`=VALUES(`name`), `tagline`=VALUES(`tagline`), `hero_image`=VALUES(`hero_image`), 
  `overview`=VALUES(`overview`), `coords_lon`=VALUES(`coords_lon`), `coords_lat`=VALUES(`coords_lat`), 
  `tag`=VALUES(`tag`), `tag_color`=VALUES(`tag_color`), `short_description`=VALUES(`short_description`), 
  `thumbnail_image`=VALUES(`thumbnail_image`), `status`=VALUES(`status`), `price`=VALUES(`price`), 
  `duration`=VALUES(`duration`), `quick_fact_capital`=VALUES(`quick_fact_capital`), 
  `quick_fact_currency`=VALUES(`quick_fact_currency`), `quick_fact_climate`=VALUES(`quick_fact_climate`), 
  `quick_fact_best_season`=VALUES(`quick_fact_best_season`), `quick_fact_languages`=VALUES(`quick_fact_languages`), 
  `quick_fact_time_zone`=VALUES(`quick_fact_time_zone`), `quick_fact_driving_side`=VALUES(`quick_fact_driving_side`);

SET @pkg_id = (SELECT `id` FROM `tour_packages` WHERE `slug` = 'rotorua-city-break');
DELETE FROM `tour_package_itinerary` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_things_to_do` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_travel_tips` WHERE `tour_package_id` = @pkg_id;
DELETE FROM `tour_package_images` WHERE `tour_package_id` = @pkg_id;

INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 1, 'Arrive Rotorua', 'Rotorua', 
  'After clearing Immigration and Customs, meet your driver in the Arrivals Hall for your private transfer to your Rotorua accommodation for a 2-night stay. The remainder of the day is at leisure to explore the Polynesian Spa hot pools or Lake Rotorua waterfront.', '["Meet-and-greet private airport transfer", "Stay 2 nights at VR Rotorua Lake Resort in a Superior Room", "Optional relaxation at the local Polynesian Spa mud pools"]', '/assets/images/new-zealand/Rotorua City Break_page-0001.jpg', 0
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 2, 'Rotorua Geothermal & Culture', 'Rotorua', 
  'Experience the Te Po Combo at Te Puia – guided geothermal walk, traditional hangi dinner, and captivating Maori cultural performance with geysers and hot springs. Spend the morning exploring Rotorua’s geothermal landscapes and adventure activities at your own pace.', '["Free morning to walk local Redwood Forest or lakefront", "Te Po Combo guided tour at Te Puia valley", "Captivating Maori cultural show and traditional Hangi buffet dinner"]', '/assets/images/nz/Rotorua, The Geothermal Wonderland.png', 1
);
INSERT INTO `tour_package_itinerary` (
  `tour_package_id`, `day_number`, `title`, `location`, `description`, `highlights`, `image_url`, `sort_order`
) VALUES (
  @pkg_id, 3, 'Depart Rotorua', 'Rotorua', 
  'Private transfer to Rotorua Airport for your onward journey.', '["Enjoy resort breakfast", "Private transfer back to Rotorua Airport"]', '/assets/images/new-zealand/Rotorua City Break_page-0001.jpg', 2
);

INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) VALUES
(@pkg_id, 'Te Puia Geothermal Walk', 'Walk among active mud pools and see the world-famous Pohutu Geyser erupting.', 'Flame', 0);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) VALUES
(@pkg_id, 'Maori Hangi Feast', 'Enjoy a traditional meal slow-cooked in subterranean steam ovens at Te Puia.', 'Utensils', 1);
INSERT INTO `tour_package_things_to_do` (`tour_package_id`, `title`, `description`, `icon_name`, `sort_order`) VALUES
(@pkg_id, 'Polynesian Spa Pools', 'Soak in hot acidic and alkaline mineral spring pools overlooking Lake Rotorua.', 'Waves', 2);

INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) VALUES
(@pkg_id, 'The geothermal pools have high sulfur content; remove jewelry before soaking to avoid tarnishing.', 0);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) VALUES
(@pkg_id, 'Te Puia cultural transfers are pre-booked; wait in the lobby at the scheduled time.', 1);
INSERT INTO `tour_package_travel_tips` (`tour_package_id`, `tip`, `sort_order`) VALUES
(@pkg_id, 'VR Rotorua is located on the lakefront; book a lake-view room upgrade if available.', 2);

INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) VALUES
(@pkg_id, '/assets/images/new-zealand/Rotorua City Break_page-0001.jpg', 0);
INSERT INTO `tour_package_images` (`tour_package_id`, `image_url`, `sort_order`) VALUES
(@pkg_id, '/assets/images/nz/Rotorua, The Geothermal Wonderland.png', 1);

