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

export async function processNotification(payload, reqOrigin = null) {
  const notificationRecipient = process.env.NOTIFICATION_EMAIL || 'charan.jamatara24@sasi.ac.in';
  const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

  let subject = '';
  let fromName = 'BFC Website';
  let replyTo = '';
  let text = '';
  let html = '';

  if (payload?.type === 'contact') {
    // Support both flat payload { type, name, email, subject, message }
    // and nested payload { type, data: { name, email, subject, message } }
    const data = payload.data || payload;
    const name = data.name;
    const email = data.email;
    const msgSubject = data.subject;
    const message = data.message;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      throw new Error('Missing contact form fields (name, email, or message)');
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
  const token = process.env.FORMSUBMIT_TOKEN || '6b71ac1f2f98c1c5c78b6be912a3c84d';
  const targets = [];
  if (token) targets.push(token);
  if (notificationRecipient && !targets.includes(notificationRecipient)) {
    targets.push(notificationRecipient);
  }

  const effectiveOrigin = reqOrigin || (process.env.VERCEL ? 'https://brutalityfreecommunity.vercel.app' : 'http://localhost:5174');

  const formSubmitHeaders = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
    'Origin': effectiveOrigin,
    'Referer': `${effectiveOrigin.replace(/\/+$/, '')}/`
  };

  const formSubmitBody = JSON.stringify({
    _subject: subject,
    _replyto: replyTo,
    _captcha: 'false',
    _template: 'box',
    name: payload.name || payload.data?.name || 'Contact Sender',
    email: replyTo,
    Message_Content: text
  });

  let lastError = 'Email delivery failed';

  for (const target of targets) {
    const formSubmitUrl = `https://formsubmit.co/ajax/${encodeURIComponent(target)}`;
    try {
      const fsResponse = await fetch(formSubmitUrl, {
        method: 'POST',
        headers: formSubmitHeaders,
        body: formSubmitBody
      });

      const rawText = await fsResponse.text();
      let fsData = null;
      try {
        fsData = JSON.parse(rawText);
      } catch {
        console.warn(`[FORMSUBMIT] Non-JSON response received from ${formSubmitUrl}: status=${fsResponse.status}`);
      }

      if (fsData && (fsData.success === 'true' || fsData.success === true)) {
        console.log(`[FORMSUBMIT SUCCESS] Dispatched "${subject}" to ${notificationRecipient} via target ${target}:`, fsData);
        return { success: true, method: 'formsubmit', target, data: fsData };
      }

      if (fsData) {
        lastError = fsData.message || fsData.error || `FormSubmit rejected with status ${fsResponse.status}`;
        console.warn(`[FORMSUBMIT WARNING] FormSubmit target ${target} returned:`, fsData);
      } else {
        lastError = `FormSubmit target ${target} returned HTTP ${fsResponse.status}: ${rawText.slice(0, 150).replace(/\s+/g, ' ')}`;
      }
    } catch (fsErr) {
      lastError = fsErr?.message || 'FormSubmit request failed';
      console.error(`[FORMSUBMIT ERROR] Target ${target} request failed:`, lastError);
    }
  }

  return { success: false, error: lastError };
}

export default async function handler(req, res) {
  // Ensure JSON response header
  res.setHeader('Content-Type', 'application/json');

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed. Only POST is accepted.' });
  }

  try {
    let payload = req.body;
    if (typeof payload === 'string') {
      try {
        payload = JSON.parse(payload);
      } catch {
        return res.status(400).json({ success: false, error: 'Invalid JSON payload received.' });
      }
    }

    if (!payload || typeof payload !== 'object') {
      return res.status(400).json({ success: false, error: 'Request body must be a valid JSON object.' });
    }

    const host = req.headers?.['x-forwarded-host'] || req.headers?.host;
    const proto = req.headers?.['x-forwarded-proto'] || (req.headers?.['x-forwarded-ssl'] === 'on' ? 'https' : 'https');
    const reqOrigin = host ? `${proto}://${host}` : null;

    const result = await processNotification(payload, reqOrigin);

    if (!result.success) {
      return res.status(502).json(result);
    }

    return res.status(200).json(result);
  } catch (error) {
    console.error('Serverless notification error:', error?.message || error);
    return res.status(500).json({ success: false, error: error?.message || 'Internal notification dispatch error.' });
  }
}
