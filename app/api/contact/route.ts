import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
    const data = await request.json();

    // Server-side validation
    if (!data.firstName || !data.lastName || !data.email || !data.message) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email format.' },
        { status: 400 }
      );
    }

    // Sanitize input (basic example, in production use a library like DOMPurify or validator)
    const sanitizedData = {
      firstName: data.firstName.replace(/</g, "&lt;").replace(/>/g, "&gt;"),
      lastName: data.lastName.replace(/</g, "&lt;").replace(/>/g, "&gt;"),
      email: data.email.replace(/</g, "&lt;").replace(/>/g, "&gt;"),
      phone: (data.phone || '').replace(/</g, "&lt;").replace(/>/g, "&gt;"),
      interest: data.interest.replace(/</g, "&lt;").replace(/>/g, "&gt;"),
      message: data.message.replace(/</g, "&lt;").replace(/>/g, "&gt;")
    };

    if (!resend || !process.env.CONTACT_EMAIL) {
      console.warn('RESEND_API_KEY or CONTACT_EMAIL is not set. Email delivery is disabled.');
      // Simulate API delay for UI feedback
      await new Promise(resolve => setTimeout(resolve, 1000));
      return NextResponse.json(
        { success: true, message: 'Message received successfully (Stub).' },
        { status: 200 }
      );
    }

    const adminHtml = `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
  <div style="background-color: #0B1221; padding: 24px; text-align: center;">
    <h2 style="color: #f97316; margin: 0;">New Project Inquiry</h2>
    <p style="color: #94a3b8; margin: 8px 0 0 0;">Technic Technologies</p>
  </div>
  <div style="padding: 32px; background-color: #ffffff; color: #1e293b;">
    <h3 style="margin-top: 0; color: #0f172a; border-bottom: 2px solid #f1f5f9; padding-bottom: 12px;">Client Details</h3>
    <p><strong>Name:</strong> ${sanitizedData.firstName} ${sanitizedData.lastName}</p>
    <p><strong>Email:</strong> <a href="mailto:${sanitizedData.email}" style="color: #f97316;">${sanitizedData.email}</a></p>
    <p><strong>Phone:</strong> ${sanitizedData.phone || 'Not provided'}</p>
    <p><strong>Proposal Type:</strong> ${sanitizedData.interest}</p>

    <h3 style="margin-top: 32px; color: #0f172a; border-bottom: 2px solid #f1f5f9; padding-bottom: 12px;">Message</h3>
    <div style="background-color: #f8fafc; padding: 16px; border-radius: 6px; font-style: italic;">
      ${sanitizedData.message.replace(/\n/g, '<br/>')}
    </div>
  </div>
</div>`;

    const userHtml = `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
  <div style="background-color: #0B1221; padding: 24px; text-align: center;">
    <h2 style="color: #f97316; margin: 0;">Technic Technologies</h2>
    <p style="color: #94a3b8; margin: 8px 0 0 0;">Inquiry Received</p>
  </div>
  <div style="padding: 32px; background-color: #ffffff; color: #1e293b;">
    <p>Hi ${sanitizedData.firstName},</p>
    <p>Thank you for reaching out to <strong>Technic Technologies</strong> regarding <strong>${sanitizedData.interest}</strong>.</p>
    <p>We have successfully received your proposal/inquiry and our solution architects are reviewing your requirements. We will get back to you shortly at this email address${sanitizedData.phone ? ` or via phone at ${sanitizedData.phone}` : ''}.</p>
    
    <div style="margin-top: 32px; padding-top: 24px; border-top: 2px solid #f1f5f9; font-size: 14px; color: #64748b;">
      <p><strong>Your Message Copy:</strong></p>
      <div style="background-color: #f8fafc; padding: 16px; border-radius: 6px; font-style: italic; color: #475569;">
        ${sanitizedData.message.replace(/\n/g, '<br/>')}
      </div>
    </div>
    
    <p style="margin-top: 32px; font-size: 14px; color: #94a3b8; text-align: center;">
      &copy; 2026 Technic Technologies. All rights reserved.
    </p>
  </div>
</div>`;

    const { error: adminError } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL as string,
      subject: 'New Project Proposal — Technic Technologies',
      html: adminHtml
    });

    if (adminError) {
      console.error('Resend Admin API Error:', adminError);
      return NextResponse.json(
        { error: 'Unable to submit your message right now. Please try again.' },
        { status: 500 }
      );
    }

    // Try to send auto-reply to the user. This often fails in development if the Resend domain 
    // is unverified (Resend only allows sending to your own email until you verify a domain).
    // We catch and log this so it doesn't break the entire form submission.
    const { error: userError } = await resend.emails.send({
      from: 'Technic Technologies <onboarding@resend.dev>',
      to: sanitizedData.email,
      subject: 'We received your inquiry — Technic Technologies',
      html: userHtml
    });

    if (userError) {
      console.warn('Note: Auto-reply to user failed (usually because domain is unverified on Resend):', userError.message);
    }

    return NextResponse.json(
      { success: true, message: 'Message received successfully.' },
      { status: 200 }
    );
  } catch (err) {
    console.error('Contact API Error:', err);
    // Never expose stack traces or internal server details
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}
