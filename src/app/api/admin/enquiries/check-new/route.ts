import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const lastIdParam = searchParams.get('lastId');
    const lastId = lastIdParam ? parseInt(lastIdParam, 10) : 0;

    // 1. Get max id and total pending count
    const [statsRows]: any = await pool.query(`
      SELECT 
        COALESCE(MAX(id), 0) as maxId,
        COUNT(CASE WHEN status = 'pending' THEN 1 END) as pendingCount,
        COUNT(*) as totalCount
      FROM enquiries
    `);

    const maxId = Number(statsRows[0]?.maxId) || 0;
    const pendingCount = Number(statsRows[0]?.pendingCount) || 0;
    const totalCount = Number(statsRows[0]?.totalCount) || 0;

    let newEnquiries: any[] = [];
    let hasNew = false;

    // 2. If lastId is provided (> 0), fetch enquiries inserted after lastId
    if (lastId > 0 && maxId > lastId) {
      const [newRows]: any = await pool.query(
        `SELECT id, package_id, package_name, user_name, user_email, user_phone, details, status, created_at
         FROM enquiries 
         WHERE id > ? 
         ORDER BY id DESC`,
        [lastId]
      );
      newEnquiries = newRows || [];
      if (newEnquiries.length > 0) {
        hasNew = true;
      }
    }

    return NextResponse.json({
      success: true,
      maxId,
      pendingCount,
      totalCount,
      hasNew,
      newEnquiries
    });
  } catch (error: any) {
    console.error('Error checking new enquiries:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to check new enquiries' },
      { status: 500 }
    );
  }
}
