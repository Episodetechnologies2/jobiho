import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import { getSession } from '@/lib/auth';

// PATCH /api/regions/[id]
export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    const body = await request.json();
    const { name } = body;

    if (!name || !name.trim()) {
      return NextResponse.json({ error: 'Region name is required' }, { status: 400 });
    }

    const trimmedName = name.trim();
    const regionId = parseInt(id);

    if (isNaN(regionId)) {
      return NextResponse.json({ error: 'Invalid region ID' }, { status: 400 });
    }

    const connection = await pool.getConnection();
    try {
      await connection.beginTransaction();

      // 1. Get old region name
      const [oldRows]: any = await connection.query('SELECT name FROM regions WHERE id = ?', [regionId]);
      if (oldRows.length === 0) {
        return NextResponse.json({ error: 'Region not found' }, { status: 404 });
      }
      const oldName = oldRows[0].name;

      // 2. Check if the new name already exists elsewhere
      const [dupRows]: any = await connection.query('SELECT id FROM regions WHERE name = ? AND id != ?', [trimmedName, regionId]);
      if (dupRows.length > 0) {
        return NextResponse.json({ error: 'Another region with this name already exists' }, { status: 400 });
      }

      // 3. Update region name in regions table
      await connection.query('UPDATE regions SET name = ? WHERE id = ?', [trimmedName, regionId]);

      // 4. Update all tour packages containing the old name
      await connection.query('UPDATE tour_packages SET region = ? WHERE region = ?', [trimmedName, oldName]);

      await connection.commit();
      return NextResponse.json({ success: true, id: regionId, name: trimmedName });
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

// DELETE /api/regions/[id]
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    const regionId = parseInt(id);

    if (isNaN(regionId)) {
      return NextResponse.json({ error: 'Invalid region ID' }, { status: 400 });
    }

    const connection = await pool.getConnection();
    try {
      await connection.beginTransaction();

      // 1. Get old region name
      const [oldRows]: any = await connection.query('SELECT name FROM regions WHERE id = ?', [regionId]);
      if (oldRows.length === 0) {
        return NextResponse.json({ error: 'Region not found' }, { status: 404 });
      }
      const oldName = oldRows[0].name;

      // 2. Delete region from regions table
      await connection.query('DELETE FROM regions WHERE id = ?', [regionId]);

      // 3. Set associated tour packages' region to empty string
      await connection.query('UPDATE tour_packages SET region = "" WHERE region = ?', [oldName]);

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
