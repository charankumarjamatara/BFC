import nodemailer from 'nodemailer';
import crypto from 'crypto';

function escapeHtml(input) {
  if (input === undefined || input === null) return '';
  return String(input)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export function createSmtpTransporter() {
  const host = process.env.SMTP_HOST;
  const port = parseInt(process.env.SMTP_PORT || '587', 10);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;
  const secure = process.env.SMTP_SECURE === 'true' || port === 465;

  if (!host || !user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
    tls: { rejectUnauthorized: false }
  });
}

export async function processNotification(payload) {
  const notificationRecipient = process.env.NOTIFICATION_EMAIL || 'charan.jamatara24@sasi.ac.in';
  const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

  let subject = '';
  let fromName = 'BFC Website';
  let replyTo = '';
  let text = '';
  let html = '';

  if (payload.type === 'contact') {
    const { name, email, subject: msgSubject, message } = payload.data || {};
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      throw new Error('Missing contact form fields');
    }

    subject = `BFC Contact Form: ${msgSubject?.trim() || 'No Subject'}`;
    fromName = 'BFC Contact Form';
    replyTo = email.trim();

    text = [
      'From BFC Contact Form',
      '',
      'CONTACT DETAILS',
      '────────────────────────',
      '',
      'Name:',
      name.trim(),
      '',
      'Email:',
      email.trim(),
      '',
      'Subject:',
      msgSubject?.trim() || 'N/A',
      '',
      'MESSAGE',
      '────────────────────────',
      '',
      message.trim()
    ].join('\n');

    html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; margin: 0; padding: 20px; background-color: #f8fafc; color: #1e293b; }
    .container { max-width: 580px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 10px; overflow: hidden; }
    .header { background: #facc15; padding: 20px; text-align: center; }
    .header h1 { margin: 0; color: #000000; font-size: 20px; font-weight: 800; letter-spacing: 0.5px; }
    .header p { margin: 4px 0 0 0; color: #333333; font-size: 13px; }
    .content { padding: 28px 24px; }
    .section-title { font-size: 13px; font-weight: 700; color: #64748b; letter-spacing: 0.8px; text-transform: uppercase; margin: 24px 0 10px 0; border-bottom: 1px solid #e2e8f0; padding-bottom: 6px; }
    .field-group { margin-bottom: 14px; }
    .field-label { font-size: 11px; font-weight: 700; text-transform: uppercase; color: #94a3b8; margin-bottom: 2px; }
    .field-value { font-size: 15px; color: #0f172a; font-weight: 500; word-break: break-word; }
    .message-box { background: #f8fafc; border: 1px solid #e2e8f0; border-left: 3px solid #facc15; border-radius: 6px; padding: 14px; font-size: 14px; line-height: 1.6; color: #334155; white-space: pre-wrap; margin-top: 8px; }
    .footer { padding: 14px; text-align: center; font-size: 11px; color: #94a3b8; border-top: 1px solid #f1f5f9; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>BRUTALITY FREE COMMUNITY</h1>
      <p>Contact Form Submission</p>
    </div>
    <div class="content">
      <div class="section-title">SENDER DETAILS</div>
      <div class="field-group">
        <div class="field-label">Name</div>
        <div class="field-value">${escapeHtml(name)}</div>
      </div>
      <div class="field-group">
        <div class="field-label">Email</div>
        <div class="field-value"><a href="mailto:${escapeHtml(email)}" style="color: #000000; text-decoration: none;">${escapeHtml(email)}</a></div>
      </div>
      <div class="field-group">
        <div class="field-label">Subject</div>
        <div class="field-value">${escapeHtml(msgSubject || 'N/A')}</div>
      </div>

      <div class="section-title">MESSAGE</div>
      <div class="message-box">${escapeHtml(message)}</div>
    </div>
    <div class="footer">
      Received via Brutality Free Community Website • ${timestamp}
    </div>
  </div>
</body>
</html>`;
  } else {
    throw new Error('Unknown notification type');
  }

  // Generate unique Message-ID
  const messageId = `<${Date.now()}.${crypto.randomBytes(6).toString('hex')}@brutalityfreecommunity.org>`;

  // 1. If SMTP is configured, attempt direct SMTP delivery
  const transporter = createSmtpTransporter();
  if (transporter) {
    try {
      const info = await transporter.sendMail({
        from: `${fromName} <${process.env.SMTP_FROM || process.env.SMTP_USER || 'notifications@brutalityfreecommunity.org'}>`,
        to: notificationRecipient,
        replyTo: replyTo,
        subject: subject,
        text: text,
        html: html,
        headers: {
          'Message-ID': messageId,
          'X-Entity-Ref-ID': messageId
        }
      });
      console.log(`[SMTP SUCCESS] Sent email "${subject}" to ${notificationRecipient} (ID: ${info.messageId})`);
      return { success: true, method: 'smtp', messageId: info.messageId };
    } catch (smtpErr) {
      console.warn('[SMTP WARNING] SMTP dispatch failed, falling back to FormSubmit:', smtpErr?.message || smtpErr);
    }
  }

  // 2. Fallback: Direct email delivery via FormSubmit HTTP API
  const token = process.env.FORMSUBMIT_TOKEN || '6b71ac1f2f98c1c5c78b6be912a3c84d'; // Reused GearStation token as default fallback per instructions
  const formSubmitUrl = `https://formsubmit.co/ajax/${token}`;

  try {
    const fsResponse = await fetch(formSubmitUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Origin': 'http://localhost:5174',
        'Referer': 'http://localhost:5174/'
      },
      body: JSON.stringify({
        _subject: subject,
        _replyto: replyTo,
        _captcha: 'false',
        _template: 'box',
        Message_Content: text
      })
    });

    const fsData = await fsResponse.json();
    console.log(`[FORMSUBMIT SUCCESS] Dispatched "${subject}" to ${notificationRecipient}:`, fsData);
    return { success: true, method: 'formsubmit', data: fsData };
  } catch (fsErr) {
    console.error('[FORMSUBMIT ERROR] FormSubmit dispatch failed:', fsErr?.message || fsErr);
    return { success: false, error: fsErr?.message || 'Email delivery failed' };
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const result = await processNotification(req.body);
    return res.status(200).json(result);
  } catch (error) {
    console.error('Serverless notification error:', error?.message || error);
    return res.status(500).json({ error: error?.message || 'Internal error' });
  }
}
