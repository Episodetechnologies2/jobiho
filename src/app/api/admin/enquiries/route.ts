import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const search = searchParams.get('search') || '';
    const status = searchParams.get('status') || 'all';

    let query = 'SELECT * FROM enquiries WHERE 1=1';
    const params: any[] = [];

    if (status && status !== 'all') {
      query += ' AND status = ?';
      params.push(status);
    }

    if (search && search.trim() !== '') {
      query += ' AND (user_name LIKE ? OR user_email LIKE ? OR user_phone LIKE ? OR package_name LIKE ?)';
      const term = `%${search.trim()}%`;
      params.push(term, term, term, term);
    }

    query += ' ORDER BY created_at DESC';

    const [rows]: any = await pool.query(query, params);

    // Get count statistics
    const [counts]: any = await pool.query(`
      SELECT 
        COUNT(*) as total,
        SUM(CASE WHEN status = 'pending' THEN 1 ELSE 0 END) as pending,
        SUM(CASE WHEN status = 'reviewed' THEN 1 ELSE 0 END) as reviewed,
        SUM(CASE WHEN status = 'contacted' THEN 1 ELSE 0 END) as contacted,
        SUM(CASE WHEN status = 'archived' THEN 1 ELSE 0 END) as archived
      FROM enquiries
    `);

    const stats = counts[0] || { total: 0, pending: 0, reviewed: 0, contacted: 0, archived: 0 };

    return NextResponse.json({
      success: true,
      enquiries: rows,
      stats: {
        total: Number(stats.total) || 0,
        pending: Number(stats.pending) || 0,
        reviewed: Number(stats.reviewed) || 0,
        contacted: Number(stats.contacted) || 0,
        archived: Number(stats.archived) || 0
      }
    });
  } catch (error: any) {
    console.error('Error fetching admin enquiries:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch enquiries' }, { status: 500 });
  }
}
