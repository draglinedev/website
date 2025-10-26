import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: Request) {
  const form = await request.formData()
  const name = String(form.get('name') ?? '').trim()
  const email = String(form.get('email') ?? '').trim()
  const message = String(form.get('message') ?? '').trim()
  const company = String(form.get('company') ?? '').trim() // honeypot

  // If honeypot is filled, silently succeed
  if (company) {
    return NextResponse.redirect(new URL('/thank-you', request.url), 303)
  }

  // Basic validation safeguard (fields are already required client-side)
  if (!name || !email || !message) {
    return NextResponse.redirect(new URL('/thank-you', request.url), 303)
  }

  const resendApiKey = process.env.RESEND_API_KEY
  if (resendApiKey) {
    const resend = new Resend(resendApiKey)
    const recipientsEnv = process.env.CONTACT_RECIPIENTS
    const recipients = recipientsEnv
      ? recipientsEnv.split(',').map(s => s.trim()).filter(Boolean)
      : ['draglinedevelopers@gmail.com', 'hello@draglinedevelopers.com']
    try {
      await resend.emails.send({
        from: 'contact@draglinedevelopers.com',
        to: recipients,
        replyTo: email,
        subject: `New contact submission from ${name}`,
        html: `
          <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;">
            <h2 style="margin:0 0 8px;">New Contact</h2>
            <p style="margin:0 0 12px;">You received a new message via the website.</p>
            <div style="background:#f7f7f7;padding:12px;border-radius:8px;">
              <p><strong>Name:</strong> ${escapeHtml(name)}</p>
              <p><strong>Email:</strong> ${escapeHtml(email)}</p>
              <p><strong>Message:</strong></p>
              <pre style="white-space:pre-wrap;word-wrap:break-word;margin:0;">${escapeHtml(message)}</pre>
            </div>
          </div>
        `,
        text: `New contact submission\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      })
    } catch (err) {
      console.error('Failed to send contact email', err)
      // Intentionally continue to redirect so the user sees thank-you
    }
  } else {
    console.error('RESEND_API_KEY missing; skipping email send')
  }

  // Redirect to thank-you page after POST
  return NextResponse.redirect(new URL('/thank-you', request.url), 303)
}

function escapeHtml(input: string) {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}