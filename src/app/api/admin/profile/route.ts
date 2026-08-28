import { NextResponse } from 'next/server';
import { getSession, signToken } from '@/lib/auth';
import pool from '@/lib/db';

export async function GET(request: Request) {
  try {
    const session = await getSession();
    if (!session || session.role !== 'admin') {
      return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
    }

    const email = session.email;

    try {
      const [rows]: any = await pool.query(
        'SELECT name, username as email, role, profile_image as profileImage FROM users WHERE username = ?',
        [email]
      );

      if (rows && rows.length > 0) {
        const user = rows[0];
        return NextResponse.json({
          success: true,
          profile: {
            name: user.name || 'Administrator',
            email: user.email,
            role: user.role || 'Super Administrator',
            profileImage: user.profileImage || null,
            createdDate: 'August 15, 2026' // Fallback static value or default
          }
        });
      }

      // Default fallback if database has no record for this user yet
      return NextResponse.json({
        success: true,
        profile: {
          name: session.name || 'Administrator',
          email: session.email,
          role: session.role === 'admin' ? 'Super Administrator' : session.role,
          profileImage: null,
          createdDate: 'August 15, 2026'
        }
      });
    } catch (dbErr: any) {
      console.error('Database query error in profile GET route:', dbErr);
      return NextResponse.json(
        { success: false, message: 'Database query failed: ' + dbErr.message },
        { status: 500 }
      );
    }
  } catch (err: any) {
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const session = await getSession();
    if (!session || session.role !== 'admin') {
      return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
    }

    const currentEmail = session.email;
    const { name, email: newEmail, role, profileImage } = await request.json();

    if (!name || !newEmail || !role) {
      return NextResponse.json(
        { success: false, message: 'Name, email, and role are required' },
        { status: 400 }
      );
    }

    // 1. Check if the new email is already in use by another user
    try {
      const [existing]: any = await pool.query(
        'SELECT id FROM users WHERE username = ? AND username != ?',
        [newEmail, currentEmail]
      );
      if (existing && existing.length > 0) {
        return NextResponse.json(
          { success: false, message: 'Email address is already in use by another administrator' },
          { status: 400 }
        );
      }
    } catch (dbErr: any) {
      console.error('Database check error in profile PUT route:', dbErr);
      return NextResponse.json(
        { success: false, message: 'Database validation check failed' },
        { status: 500 }
      );
    }

    // 2. Update the user details in the database
    try {
      // Check if user exists in the DB first
      const [rows]: any = await pool.query('SELECT id FROM users WHERE username = ?', [currentEmail]);
      if (rows && rows.length > 0) {
        await pool.query(
          'UPDATE users SET name = ?, username = ?, role = ?, profile_image = ? WHERE username = ?',
          [name, newEmail, role, profileImage, currentEmail]
        );
      } else {
        // Insert new user if it didn't exist in the users table
        await pool.query(
          'INSERT INTO users (name, username, role, profile_image, password) VALUES (?, ?, ?, ?, ?)',
          [name, newEmail, role, profileImage, process.env.ADMIN_PASSWORD || 'admin123']
        );
      }
    } catch (dbErr: any) {
      console.error('Database update error in profile PUT route:', dbErr);
      return NextResponse.json(
        { success: false, message: 'Database update failed: ' + dbErr.message },
        { status: 500 }
      );
    }

    // 3. Re-sign token with updated profile information to update session cookie
    const token = signToken({
      email: newEmail,
      name: name,
      role: 'admin' // Keep internal role as admin for middleware matching
    });

    const response = NextResponse.json({
      success: true,
      message: 'Profile updated successfully',
      profile: {
        name,
        email: newEmail,
        role,
        profileImage
      }
    });

    // Set updated session cookie
    response.cookies.set('admin_session', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 // 24 hours
    });

    return response;
  } catch (err: any) {
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  }
}
