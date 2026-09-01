import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import { getSession } from '@/lib/auth';

const DEFAULT_REGION_OPTIONS = [
  'South Asia',
  'East Asia',
  'Southeast Asia',
  'North Asia',
  'North America',
  'South America',
  'Middle East',
  'Europe',
  'Africa'
];

async function ensureRegionsTable() {
  const connection = await pool.getConnection();
  try {
    // 1. Create table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS regions (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) UNIQUE NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);

    // 2. Check if table is empty
    const [rows]: any = await connection.query('SELECT COUNT(*) as count FROM regions');
    if (rows[0].count === 0) {
      // Seed with default regions
      for (const region of DEFAULT_REGION_OPTIONS) {
        await connection.query('INSERT IGNORE INTO regions (name) VALUES (?)', [region]);
      }
      
      // Also query all unique regions already present in tour_packages and insert them
      try {
        const [existingPackageRegions]: any = await connection.query(
          'SELECT DISTINCT region FROM tour_packages WHERE region IS NOT NULL AND region != ""'
        );
        for (const row of existingPackageRegions) {
          const region = row.region.trim();
          if (region) {
            await connection.query('INSERT IGNORE INTO regions (name) VALUES (?)', [region]);
          }
        }
      } catch (dbErr) {
        console.error('Error seeding regions from tour_packages:', dbErr);
      }
    }
  } finally {
    connection.release();
  }
}

// GET /api/regions
export async function GET() {
  try {
    await ensureRegionsTable();
    const [rows] = await pool.query('SELECT * FROM regions ORDER BY name ASC');
    return NextResponse.json(rows);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// POST /api/regions
export async function POST(request: Request) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await ensureRegionsTable();
    const body = await request.json();
    const { name } = body;

    if (!name || !name.trim()) {
      return NextResponse.json({ error: 'Region name is required' }, { status: 400 });
    }

    const trimmedName = name.trim();

    // Check if exists
    const [existing]: any = await pool.query('SELECT * FROM regions WHERE name = ?', [trimmedName]);
    if (existing.length > 0) {
      return NextResponse.json({ error: 'Region already exists' }, { status: 400 });
    }

    const [result]: any = await pool.query('INSERT INTO regions (name) VALUES (?)', [trimmedName]);
    return NextResponse.json({ success: true, id: result.insertId, name: trimmedName });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
