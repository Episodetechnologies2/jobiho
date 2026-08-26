import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import { getSession } from '@/lib/auth';

// GET /api/tour-packages/[id] (can be ID or slug)
export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const isNumeric = /^\d+$/.test(id);

    // 1. Fetch main package details
    let query = 'SELECT * FROM tour_packages WHERE id = ?';
    if (!isNumeric) {
      query = 'SELECT * FROM tour_packages WHERE slug = ?';
    }

    const [pkgRows]: any = await pool.query(query, [isNumeric ? parseInt(id) : id]);
    if (pkgRows.length === 0) {
      return NextResponse.json({ error: 'Tour package not found' }, { status: 404 });
    }

    const tour = pkgRows[0];
    const pkgId = tour.id;

    // 2. Fetch related itinerary
    const [itinRows]: any = await pool.query(
      'SELECT * FROM tour_package_itinerary WHERE tour_package_id = ? ORDER BY sort_order, day_number',
      [pkgId]
    );

    // 3. Fetch related things to do
    const [thingsRows]: any = await pool.query(
      'SELECT * FROM tour_package_things_to_do WHERE tour_package_id = ? ORDER BY sort_order',
      [pkgId]
    );

    // 4. Fetch travel tips
    const [tipRows]: any = await pool.query(
      'SELECT * FROM tour_package_travel_tips WHERE tour_package_id = ? ORDER BY sort_order',
      [pkgId]
    );

    // 5. Fetch gallery images
    const [imgRows]: any = await pool.query(
      'SELECT * FROM tour_package_images WHERE tour_package_id = ? ORDER BY sort_order',
      [pkgId]
    );

    // Map database fields to the exact shape of DestinationPageData
    const detailedTour = {
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
        capital: tour.quick_fact_capital,
        currency: tour.quick_fact_currency,
        climate: tour.quick_fact_climate,
        bestSeason: tour.quick_fact_best_season,
        languages: tour.quick_fact_languages,
        timeZone: tour.quick_fact_time_zone,
        drivingSide: tour.quick_fact_driving_side
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

    return NextResponse.json(detailedTour);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// PUT /api/tour-packages/[id]
export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    const pkgId = parseInt(id);
    if (isNaN(pkgId)) {
      return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
    }

    const body = await request.json();
    const {
      slug, name, country, region, tagline, heroImage, overview,
      coords_lon, coords_lat, tag, tagColor, shortDescription, thumbnailImage,
      status, price, duration,
      quickFacts, itinerary, thingsToDo, travelTips, gallery
    } = body;

    if (!slug || !name || !country || !region) {
      return NextResponse.json({ error: 'Slug, Name, Country, and Region are required' }, { status: 400 });
    }

    const connection = await pool.getConnection();
    try {
      await connection.beginTransaction();

      // 1. Update main package details
      const qf = quickFacts || {};
      await connection.query(
        `UPDATE tour_packages SET 
          slug = ?, name = ?, country = ?, region = ?, tagline = ?, hero_image = ?, overview = ?, 
          coords_lon = ?, coords_lat = ?, tag = ?, tag_color = ?, short_description = ?, thumbnail_image = ?, 
          status = ?, price = ?, duration = ?, 
          quick_fact_capital = ?, quick_fact_currency = ?, quick_fact_climate = ?, quick_fact_best_season = ?, 
          quick_fact_languages = ?, quick_fact_time_zone = ?, quick_fact_driving_side = ?,
          updated_at = CURRENT_TIMESTAMP
        WHERE id = ?`,
        [
          slug, name, country, region, tagline || '', heroImage || '', overview || '',
          coords_lon || 0, coords_lat || 0, tag || '', tagColor || '', shortDescription || '', thumbnailImage || '',
          status || 'published', price || '', duration || '',
          qf.capital || '', qf.currency || '', qf.climate || '', qf.bestSeason || '',
          qf.languages || '', qf.timeZone || '', qf.drivingSide || '',
          pkgId
        ]
      );

      // 2. Clear related lists
      await connection.query('DELETE FROM tour_package_itinerary WHERE tour_package_id = ?', [pkgId]);
      await connection.query('DELETE FROM tour_package_things_to_do WHERE tour_package_id = ?', [pkgId]);
      await connection.query('DELETE FROM tour_package_travel_tips WHERE tour_package_id = ?', [pkgId]);
      await connection.query('DELETE FROM tour_package_images WHERE tour_package_id = ?', [pkgId]);

      // 3. Re-insert Itinerary
      if (itinerary && Array.isArray(itinerary)) {
        let sortOrder = 0;
        for (const day of itinerary) {
          await connection.query(
            `INSERT INTO tour_package_itinerary (
              tour_package_id, day_number, title, location, description, highlights, image_url, sort_order
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
            [
              pkgId, day.day || day.day_number || 1, day.title || '', day.location || '',
              day.description || '', JSON.stringify(day.highlights || []), day.image || day.image_url || '', sortOrder++
            ]
          );
        }
      }

      // 4. Re-insert Things to Do
      if (thingsToDo && Array.isArray(thingsToDo)) {
        let sortOrder = 0;
        for (const thing of thingsToDo) {
          await connection.query(
            `INSERT INTO tour_package_things_to_do (
              tour_package_id, title, description, icon_name, sort_order
            ) VALUES (?, ?, ?, ?, ?)`,
            [pkgId, thing.title || '', thing.description || '', thing.iconName || thing.icon_name || '', sortOrder++]
          );
        }
      }

      // 5. Re-insert Travel Tips
      if (travelTips && Array.isArray(travelTips)) {
        let sortOrder = 0;
        for (const tip of travelTips) {
          const tipText = typeof tip === 'string' ? tip : (tip.tip || '');
          await connection.query(
            `INSERT INTO tour_package_travel_tips (
              tour_package_id, tip, sort_order
            ) VALUES (?, ?, ?)`,
            [pkgId, tipText, sortOrder++]
          );
        }
      }

      // 6. Re-insert Gallery
      if (gallery && Array.isArray(gallery)) {
        let sortOrder = 0;
        for (const image of gallery) {
          const imgUrl = typeof image === 'string' ? image : (image.image_url || '');
          await connection.query(
            `INSERT INTO tour_package_images (
              tour_package_id, image_url, sort_order
            ) VALUES (?, ?, ?)`,
            [pkgId, imgUrl, sortOrder++]
          );
        }
      }

      await connection.commit();
      return NextResponse.json({ success: true });
    } catch (err: any) {
      await connection.rollback();
      throw err;
    } finally {
      connection.release();
    }
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// DELETE /api/tour-packages/[id]
export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    const pkgId = parseInt(id);
    if (isNaN(pkgId)) {
      return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
    }

    await pool.query('DELETE FROM tour_packages WHERE id = ?', [pkgId]);
    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
