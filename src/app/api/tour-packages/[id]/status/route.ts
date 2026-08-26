import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import { getSession } from '@/lib/auth';

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
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
    const { status } = body;

    if (status !== 'published' && status !== 'draft') {
      return NextResponse.json({ error: 'Status must be published or draft' }, { status: 400 });
    }

    await pool.query('UPDATE tour_packages SET status = ? WHERE id = ?', [status, pkgId]);
    return NextResponse.json({ success: true, status });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
