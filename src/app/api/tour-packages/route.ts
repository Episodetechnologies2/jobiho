import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import { getSession } from '@/lib/auth';

// GET /api/tour-packages
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');

    let query = 'SELECT * FROM tour_packages';
    const params: any[] = [];

    if (status) {
      query += ' WHERE status = ?';
      params.push(status);
    }

    query += ' ORDER BY id DESC';

    const [rows] = await pool.query(query, params);
    return NextResponse.json(rows);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// POST /api/tour-packages
export async function POST(request: Request) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
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

      // 1. Insert main package
      const qf = quickFacts || {};
      const [pkgResult]: any = await connection.query(
        `INSERT INTO tour_packages (
          slug, name, country, region, tagline, hero_image, overview, 
          coords_lon, coords_lat, tag, tag_color, short_description, thumbnail_image, 
          status, price, duration, 
          quick_fact_capital, quick_fact_currency, quick_fact_climate, quick_fact_best_season, 
          quick_fact_languages, quick_fact_time_zone, quick_fact_driving_side
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          slug, name, country, region, tagline || '', heroImage || '', overview || '',
          coords_lon || 0, coords_lat || 0, tag || '', tagColor || '', shortDescription || '', thumbnailImage || '',
          status || 'published', price || '', duration || '',
          qf.capital || '', qf.currency || '', qf.climate || '', qf.bestSeason || '',
          qf.languages || '', qf.timeZone || '', qf.drivingSide || ''
        ]
      );

      const tourPackageId = pkgResult.insertId;

      // 2. Insert Itinerary
      if (itinerary && Array.isArray(itinerary)) {
        let sortOrder = 0;
        for (const day of itinerary) {
          await connection.query(
            `INSERT INTO tour_package_itinerary (
              tour_package_id, day_number, title, location, description, highlights, image_url, sort_order
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
            [
              tourPackageId, day.day || day.day_number || 1, day.title || '', day.location || '',
              day.description || '', JSON.stringify(day.highlights || []), day.image || day.image_url || '', sortOrder++
            ]
          );
        }
      }

      // 3. Insert Things to Do
      if (thingsToDo && Array.isArray(thingsToDo)) {
        let sortOrder = 0;
        for (const thing of thingsToDo) {
          await connection.query(
            `INSERT INTO tour_package_things_to_do (
              tour_package_id, title, description, icon_name, sort_order
            ) VALUES (?, ?, ?, ?, ?)`,
            [tourPackageId, thing.title || '', thing.description || '', thing.iconName || thing.icon_name || '', sortOrder++]
          );
        }
      }

      // 4. Insert Travel Tips
      if (travelTips && Array.isArray(travelTips)) {
        let sortOrder = 0;
        for (const tip of travelTips) {
          // tip can be a string or object
          const tipText = typeof tip === 'string' ? tip : (tip.tip || '');
          await connection.query(
            `INSERT INTO tour_package_travel_tips (
              tour_package_id, tip, sort_order
            ) VALUES (?, ?, ?)`,
            [tourPackageId, tipText, sortOrder++]
          );
        }
      }

      // 5. Insert Gallery
      if (gallery && Array.isArray(gallery)) {
        let sortOrder = 0;
        for (const image of gallery) {
          const imgUrl = typeof image === 'string' ? image : (image.image_url || '');
          await connection.query(
            `INSERT INTO tour_package_images (
              tour_package_id, image_url, sort_order
            ) VALUES (?, ?, ?)`,
            [tourPackageId, imgUrl, sortOrder++]
          );
        }
      }

      await connection.commit();
      return NextResponse.json({ success: true, id: tourPackageId });
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
