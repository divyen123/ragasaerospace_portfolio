const requiredEnv = ['RESEND_API_KEY', 'CONTACT_TO_EMAIL', 'CONTACT_FROM_EMAIL'];

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

  try {
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL,
        to: process.env.CONTACT_TO_EMAIL,
        reply_to: email,
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
      }),
    });

    const result = await resendResponse.json().catch(() => ({}));

    if (!resendResponse.ok) {
      console.error('Resend send failed:', result);
      return json(response, resendResponse.status, {
        ok: false,
        error: result?.message || 'Email delivery failed',
      });
    }

    return json(response, 200, { ok: true, messageId: result?.id });
  } catch (error) {
    console.error('Resend request failed:', error);
    return json(response, 502, {
      ok: false,
      error: 'Email delivery failed',
    });
  }
}