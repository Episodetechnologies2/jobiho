import { NextResponse } from 'next/server';
import { getSession } from '@/lib/auth';
import pool from '@/lib/db';

export async function POST(request: Request) {
  try {
    // 1. Verify admin session
    const session = await getSession();
    if (!session || session.role !== 'admin') {
      return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
    }

    // 2. Parse request payload
    const { currentPassword, newPassword } = await request.json();
    if (!currentPassword || !newPassword) {
      return NextResponse.json(
        { success: false, message: 'Current password and new password are required' },
        { status: 400 }
      );
    }

    const email = session.email;
    const fallbackPassword = process.env.ADMIN_PASSWORD || 'admin123';

    // 3. Retrieve current password
    let actualCurrentPassword = fallbackPassword;
    let userExists = false;

    try {
      const [rows]: any = await pool.query('SELECT password FROM users WHERE username = ?', [email]);
      if (rows && rows.length > 0) {
        actualCurrentPassword = rows[0].password;
        userExists = true;
      }
    } catch (dbErr: any) {
      console.error('Database query error in change-password route:', dbErr);
      return NextResponse.json(
        { success: false, message: 'Database query failed: ' + dbErr.message },
        { status: 500 }
      );
    }

    // 4. Verify current password
    if (currentPassword !== actualCurrentPassword) {
      return NextResponse.json({ success: false, message: 'Incorrect current password' }, { status: 400 });
    }

    // 5. Update password in the database
    try {
      if (userExists) {
        await pool.query('UPDATE users SET password = ? WHERE username = ?', [newPassword, email]);
      } else {
        await pool.query('INSERT INTO users (username, password) VALUES (?, ?)', [email, newPassword]);
      }
    } catch (dbErr: any) {
      console.error('Database update error in change-password route:', dbErr);
      return NextResponse.json(
        { success: false, message: 'Failed to update password in database: ' + dbErr.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, message: 'Password changed successfully' });
  } catch (err: any) {
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  }
}
