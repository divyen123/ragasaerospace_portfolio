import nodemailer from 'nodemailer';

const requiredEnv = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS', 'CONTACT_TO_EMAIL'];

const json = (response, statusCode, body) => {
  response.status(statusCode).json(body);
};

const sanitize = (value) => String(value || '').trim();
const escapeHtml = (value) => sanitize(value)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#039;');

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return json(response, 405, { ok: false, error: 'Method not allowed' });
  }

  const missingEnv = requiredEnv.filter((key) => !process.env[key]);
  if (missingEnv.length > 0) {
    return json(response, 500, {
      ok: false,
      error: `Missing email configuration: ${missingEnv.join(', ')}`,
    });
  }

  const name = sanitize(request.body?.name);
  const email = sanitize(request.body?.email);
  const subject = sanitize(request.body?.subject) || 'General Inquiry';
  const message = sanitize(request.body?.message);

  if (!name || !email || !message) {
    return json(response, 400, {
      ok: false,
      error: 'Name, email, and message are required',
    });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: String(process.env.SMTP_SECURE).toLowerCase() === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const fromEmail = process.env.CONTACT_FROM_EMAIL || process.env.SMTP_USER;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  try {
    const info = await transporter.sendMail({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `Ragas Aerospace Contact: ${subject}`,
      text: [
        message,
        '',
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject}`,
      ].join('\n'),
      html: `
        <h2>New Ragas Aerospace Contact Inquiry</h2>
        <p>${escapeHtml(message).replace(/\n/g, '<br />')}</p>
        <hr />
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
      `,
    });

    return json(response, 200, { ok: true, messageId: info.messageId });
  } catch (error) {
    console.error('SMTP send failed:', error);
    return json(response, 502, {
      ok: false,
      error: 'Email delivery failed',
    });
  }
}