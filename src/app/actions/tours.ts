"use server";

import pool from '@/lib/db';

export async function getPublishedToursFromDb() {
  try {
    const [rows]: any = await pool.query(
      "SELECT id, slug, name, country, region, tagline, hero_image, coords_lon, coords_lat, tag, tag_color, short_description, thumbnail_image, status, price, duration, updated_at FROM tour_packages WHERE status = 'published' ORDER BY id DESC"
    );
    return rows.map((tour: any) => ({
      id: tour.id,
      slug: tour.slug,
      name: tour.name,
      country: tour.country,
      region: tour.region,
      tagline: tour.tagline,
      heroImage: tour.hero_image,
      coords: [tour.coords_lon, tour.coords_lat],
      tag: tour.tag,
      tagColor: tour.tag_color,
      shortDescription: tour.short_description,
      thumbnailImage: tour.thumbnail_image,
      status: tour.status,
      price: tour.price,
      duration: tour.duration,
      lastUpdated: tour.updated_at
    }));
  } catch (err) {
    console.error("Error fetching published tours:", err);
    return [];
  }
}

export async function getDestinationFromDb(slug: string) {
  try {
    const [pkgRows]: any = await pool.query(
      'SELECT * FROM tour_packages WHERE slug = ?',
      [slug]
    );

    if (pkgRows.length === 0) {
      return null;
    }

    const tour = pkgRows[0];
    const pkgId = tour.id;

    // Fetch related tables
    const [itinRows]: any = await pool.query(
      'SELECT * FROM tour_package_itinerary WHERE tour_package_id = ? ORDER BY sort_order, day_number',
      [pkgId]
    );

    const [thingsRows]: any = await pool.query(
      'SELECT * FROM tour_package_things_to_do WHERE tour_package_id = ? ORDER BY sort_order',
      [pkgId]
    );

    const [tipRows]: any = await pool.query(
      'SELECT * FROM tour_package_travel_tips WHERE tour_package_id = ? ORDER BY sort_order',
      [pkgId]
    );

    const [imgRows]: any = await pool.query(
      'SELECT * FROM tour_package_images WHERE tour_package_id = ? ORDER BY sort_order',
      [pkgId]
    );

    return {
      id: tour.id,
      slug: tour.slug,
      name: tour.name,
      country: tour.country,
      region: tour.region,
      tagline: tour.tagline,
      heroImage: tour.hero_image,
      overview: tour.overview,
      coords_lon: tour.coords_lon,
      coords_lat: tour.coords_lat,
      tag: tour.tag,
      tagColor: tour.tag_color,
      shortDescription: tour.short_description,
      thumbnailImage: tour.thumbnail_image,
      status: tour.status,
      price: tour.price,
      duration: tour.duration,
      lastUpdated: tour.updated_at,
      quickFacts: {
        capital: tour.quick_fact_capital || undefined,
        currency: tour.quick_fact_currency,
        climate: tour.quick_fact_climate,
        bestSeason: tour.quick_fact_best_season,
        languages: tour.quick_fact_languages,
        timeZone: tour.quick_fact_time_zone,
        drivingSide: tour.quick_fact_driving_side || undefined
      },
      itinerary: itinRows.map((day: any) => ({
        id: day.id,
        day: day.day_number,
        title: day.title,
        location: day.location,
        description: day.description,
        highlights: typeof day.highlights === 'string' ? JSON.parse(day.highlights) : day.highlights,
        image: day.image_url
      })),
      thingsToDo: thingsRows.map((thing: any) => ({
        id: thing.id,
        title: thing.title,
        description: thing.description,
        iconName: thing.icon_name
      })),
      travelTips: tipRows.map((tip: any) => tip.tip),
      gallery: imgRows.map((img: any) => img.image_url)
    };
  } catch (err) {
    console.error(`Error fetching destination detail for slug: ${slug}`, err);
    return null;
  }
}
