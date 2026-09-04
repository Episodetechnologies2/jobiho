import nodemailer from 'nodemailer';

export interface EnquiryEmailData {
  id?: number;
  userName: string;
  userEmail: string;
  userPhone: string;
  details?: string;
  packageName: string;
  packageSlug?: string;
  packageDuration?: string;
  packagePrice?: string;
}

export async function sendEnquiryEmail(data: EnquiryEmailData) {
  const recipientEmail = process.env.ENQUIRY_NOTIFICATION_EMAIL || 'info@jobiho.com';
  
  // Standard SMTP Configuration from env or fallback
  const host = process.env.SMTP_HOST || 'smtp.hostinger.com';
  const port = parseInt(process.env.SMTP_PORT || '465');
  const user = process.env.SMTP_USER || '';
  const pass = process.env.SMTP_PASS || '';
  const from = process.env.SMTP_FROM || (user ? `"Jobiho Enquiries" <${user}>` : `"Jobiho Enquiries" <info@jobiho.com>`);

  const plainTextContent = `
========================================
NEW TOUR PACKAGE ENQUIRY - JOBIHO
========================================

PACKAGE DETAILS:
----------------------------------------
- Package Name: ${data.packageName}
${data.packageDuration ? `- Duration: ${data.packageDuration}\n` : ''}${data.packagePrice ? `- Price: ₹${data.packagePrice}\n` : ''}${data.packageSlug ? `- Slug: ${data.packageSlug}\n` : ''}

CUSTOMER DETAILS:
----------------------------------------
- Name: ${data.userName}
- Email: ${data.userEmail}
- Phone: ${data.userPhone}

ENQUIRY MESSAGE / DETAILS:
----------------------------------------
${data.details || 'No additional details provided.'}

========================================
Received on: ${new Date().toLocaleString()}
  `.trim();

  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Enquiry for ${data.packageName}</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f1f5f9; margin: 0; padding: 24px 12px; color: #1e293b; line-height: 1.5; }
          .container { max-width: 620px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.08), 0 8px 10px -6px rgba(0,0,0,0.01); border: 1px solid #e2e8f0; }
          .header { background: linear-gradient(135deg, #1565C0 0%, #0D47A1 100%); padding: 28px 32px; color: #ffffff; position: relative; }
          .header h1 { margin: 0; font-size: 22px; font-weight: 800; letter-spacing: -0.3px; }
          .header p { margin: 6px 0 0 0; font-size: 13.5px; opacity: 0.9; color: #e0e7ff; }
          .badge { display: inline-block; background-color: #FFC107; color: #0f172a; font-weight: 800; font-size: 12px; padding: 5px 14px; border-radius: 20px; margin-top: 14px; text-transform: uppercase; letter-spacing: 0.5px; }
          .content { padding: 32px; }
          .section-header { font-size: 13px; text-transform: uppercase; color: #1565C0; font-weight: 800; letter-spacing: 0.8px; border-bottom: 2px solid #e0f2fe; padding-bottom: 8px; margin-bottom: 18px; margin-top: 24px; }
          .section-header:first-child { margin-top: 0; }
          .info-table { width: 100%; border-collapse: separate; border-spacing: 0; margin-bottom: 20px; }
          .info-table td { padding: 12px 14px; border-bottom: 1px solid #f1f5f9; font-size: 14px; vertical-align: top; }
          .info-table tr:last-child td { border-bottom: none; }
          .info-table td.label { font-weight: 700; color: #475569; width: 34%; background-color: #f8fafc; border-radius: 6px 0 0 6px; }
          .info-table td.value { color: #0f172a; font-weight: 500; background-color: #ffffff; border-radius: 0 6px 6px 0; }
          .details-box { background-color: #f8fafc; border-left: 4px solid #1565C0; padding: 18px 20px; border-radius: 0 10px 10px 0; font-size: 14.5px; color: #334155; line-height: 1.65; white-space: pre-wrap; word-break: break-word; }
          .reply-btn { display: inline-block; background-color: #1565C0; color: #ffffff !important; font-weight: 700; font-size: 14px; padding: 12px 24px; border-radius: 10px; text-decoration: none; margin-top: 20px; box-shadow: 0 4px 12px rgba(21, 101, 192, 0.25); }
          .footer { background-color: #f8fafc; padding: 22px 32px; text-align: center; font-size: 12.5px; color: #64748b; border-top: 1px solid #e2e8f0; }
          .footer p { margin: 4px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Tour Package Enquiry</h1>
            <p>A new customer inquiry was submitted on Jobiho</p>
            <span class="badge">${data.packageName}</span>
          </div>
          <div class="content">
            <h2 class="section-header">Customer Information</h2>
            <table class="info-table">
              <tr>
                <td class="label">Full Name:</td>
                <td class="value"><strong>${data.userName}</strong></td>
              </tr>
              <tr>
                <td class="label">Email Address:</td>
                <td class="value"><a href="mailto:${data.userEmail}" style="color: #1565C0; text-decoration: none; font-weight: 600;">${data.userEmail}</a></td>
              </tr>
              <tr>
                <td class="label">Phone Number:</td>
                <td class="value"><a href="tel:${data.userPhone}" style="color: #1565C0; text-decoration: none; font-weight: 600;">${data.userPhone}</a></td>
              </tr>
            </table>

            <h2 class="section-header">Package Information</h2>
            <table class="info-table">
              <tr>
                <td class="label">Package Name:</td>
                <td class="value"><strong>${data.packageName}</strong></td>
              </tr>
              ${data.packageDuration ? `
              <tr>
                <td class="label">Duration:</td>
                <td class="value">${data.packageDuration}</td>
              </tr>` : ''}
              ${data.packagePrice ? `
              <tr>
                <td class="label">Price:</td>
                <td class="value">₹${data.packagePrice}</td>
              </tr>` : ''}
              ${data.id ? `
              <tr>
                <td class="label">Enquiry ID:</td>
                <td class="value">#${data.id}</td>
              </tr>` : ''}
            </table>

            <h2 class="section-header">Trip Details & Requirements</h2>
            <div class="details-box">
              ${data.details ? data.details.replace(/</g, '&lt;').replace(/>/g, '&gt;') : 'No extra details provided.'}
            </div>

            <div style="text-align: center; margin-top: 24px;">
              <a href="mailto:${data.userEmail}?subject=Re: Enquiry for ${encodeURIComponent(data.packageName)}" class="reply-btn">
                Reply to ${data.userName} (${data.userEmail})
              </a>
            </div>
          </div>
          <div class="footer">
            <p><strong>Notification Target:</strong> ${recipientEmail}</p>
            <p>This message was automatically dispatched by the Jobiho Enquiry Portal.</p>
            <p>© ${new Date().getFullYear()} Jobiho. All rights reserved.</p>
          </div>
        </div>
      </body>
    </html>
  `;

  console.log(`[Enquiry Mail] Preparing email notification to ${recipientEmail} for enquiry on "${data.packageName}" from ${data.userName} (${data.userEmail})...`);

  // If user and pass are configured, attempt nodemailer send
  if (user && pass) {
    try {
      const transporter = nodemailer.createTransport({
        host,
        port,
        secure: port === 465,
        auth: { user, pass },
      });

      const info = await transporter.sendMail({
        from,
        to: recipientEmail,
        replyTo: data.userEmail,
        subject: `New Package Enquiry: ${data.packageName} - ${data.userName}`,
        text: plainTextContent,
        html: htmlContent,
      });

      console.log(`[Enquiry Mail] Sent successfully to ${recipientEmail}! MessageID: ${info.messageId}`);
      return { success: true, messageId: info.messageId };
    } catch (err: any) {
      console.error(`[Enquiry Mail] Failed to send email via SMTP:`, err);
      return { success: false, error: err.message };
    }
  } else {
    console.log(`[Enquiry Mail] SMTP credentials not set in process.env (SMTP_USER / SMTP_PASS). Email content prepared for ${recipientEmail}.`);
    return { success: true, mocked: true };
  }
}
