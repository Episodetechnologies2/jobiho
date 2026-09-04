import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await req.json();
    const { status, notes } = body;

    const updates: string[] = [];
    const queryParams: any[] = [];

    if (status) {
      updates.push('status = ?');
      queryParams.push(status);
    }
    if (notes !== undefined) {
      updates.push('notes = ?');
      queryParams.push(notes);
    }

    if (updates.length === 0) {
      return NextResponse.json({ success: false, error: 'No fields to update' }, { status: 400 });
    }

    queryParams.push(id);
    const query = `UPDATE enquiries SET ${updates.join(', ')} WHERE id = ?`;

    await pool.query(query, queryParams);

    return NextResponse.json({ success: true, message: 'Enquiry updated successfully' });
  } catch (error: any) {
    console.error('Error updating enquiry:', error);
    return NextResponse.json({ success: false, error: 'Failed to update enquiry' }, { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await pool.query('DELETE FROM enquiries WHERE id = ?', [id]);
    return NextResponse.json({ success: true, message: 'Enquiry deleted successfully' });
  } catch (error: any) {
    console.error('Error deleting enquiry:', error);
    return NextResponse.json({ success: false, error: 'Failed to delete enquiry' }, { status: 500 });
  }
}
