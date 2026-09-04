import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import { sendEnquiryEmail } from '@/lib/email';

// Helper to ensure database table exists on first request
async function ensureEnquiriesTable() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS enquiries (
        id INT AUTO_INCREMENT PRIMARY KEY,
        package_id INT NULL,
        package_name VARCHAR(255) NOT NULL,
        package_slug VARCHAR(255) NULL,
        package_duration VARCHAR(100) NULL,
        package_price VARCHAR(100) NULL,
        user_name VARCHAR(255) NOT NULL,
        user_email VARCHAR(255) NOT NULL,
        user_phone VARCHAR(50) NOT NULL,
        details TEXT NULL,
        status ENUM('pending', 'reviewed', 'contacted', 'archived') NOT NULL DEFAULT 'pending',
        notes TEXT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        INDEX idx_status (status),
        INDEX idx_created_at (created_at)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);
  } catch (err) {
    console.error('Error auto-creating enquiries table:', err);
  }
}

export async function POST(req: Request) {
  try {
    await ensureEnquiriesTable();

    const body = await req.json();
    const {
      userName,
      userEmail,
      userPhone,
      details,
      packageId,
      packageName,
      packageSlug,
      packageDuration,
      packagePrice
    } = body;

    // Basic Validation
    if (!userName || !userName.trim()) {
      return NextResponse.json({ success: false, error: 'Full Name is required' }, { status: 400 });
    }
    if (!userEmail || !userEmail.trim()) {
      return NextResponse.json({ success: false, error: 'Email Address is required' }, { status: 400 });
    }
    if (!userPhone || !userPhone.trim()) {
      return NextResponse.json({ success: false, error: 'Phone Number is required' }, { status: 400 });
    }
    if (!packageName || !packageName.trim()) {
      return NextResponse.json({ success: false, error: 'Package Name is required' }, { status: 400 });
    }

    // Insert into DB
    const [result]: any = await pool.query(
      `INSERT INTO enquiries 
        (package_id, package_name, package_slug, package_duration, package_price, user_name, user_email, user_phone, details, status)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 'pending')`,
      [
        packageId || null,
        packageName.trim(),
        packageSlug || null,
        packageDuration || null,
        packagePrice || null,
        userName.trim(),
        userEmail.trim(),
        userPhone.trim(),
        details ? details.trim() : null
      ]
    );

    const insertedId = result.insertId;

    // Send Email to info@jobiho.com
    await sendEnquiryEmail({
      id: insertedId,
      userName: userName.trim(),
      userEmail: userEmail.trim(),
      userPhone: userPhone.trim(),
      details: details ? details.trim() : '',
      packageName: packageName.trim(),
      packageSlug: packageSlug || '',
      packageDuration: packageDuration || '',
      packagePrice: packagePrice || ''
    });

    return NextResponse.json({
      success: true,
      message: 'Your enquiry has been submitted successfully!',
      id: insertedId
    });
  } catch (error: any) {
    console.error('Error submitting enquiry:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit enquiry. Please try again later.' },
      { status: 500 }
    );
  }
}
