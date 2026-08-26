import { NextResponse } from 'next/server';
import { signToken } from '@/lib/auth';
import pool from '@/lib/db';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    const adminEmail = process.env.ADMIN_EMAIL || 'admin@jobiho.com';
    const fallbackPassword = process.env.ADMIN_PASSWORD || 'admin123';

    let isAuthenticated = false;
    let userName = 'Administrator';
    let userRole = 'Super Administrator';

    try {
      const [rows]: any = await pool.query('SELECT name, role, password FROM users WHERE username = ?', [email]);
      if (rows && rows.length > 0) {
        const dbUser = rows[0];
        if (password === dbUser.password) {
          isAuthenticated = true;
          userName = dbUser.name || 'Administrator';
          userRole = dbUser.role || 'Super Administrator';
        }
      } else {
        // Fallback to env variables if user table doesn't have it
        if (email === adminEmail && password === fallbackPassword) {
          isAuthenticated = true;
        }
      }
    } catch (dbErr) {
      console.error('Database query error in login API route:', dbErr);
      // Fallback to env variables
      if (email === adminEmail && password === fallbackPassword) {
        isAuthenticated = true;
      }
    }

    if (isAuthenticated) {
      const token = signToken({
        email: email,
        name: userName,
        role: 'admin'
      });

      const response = NextResponse.json({ success: true, message: 'Logged in successfully' });

      // Set secure HTTP-only cookie
      response.cookies.set('admin_session', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 24 // 24 hours
      });

      return response;
    }

    return NextResponse.json({ success: false, message: 'Invalid email or password' }, { status: 401 });
  } catch (err: any) {
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  }
}
