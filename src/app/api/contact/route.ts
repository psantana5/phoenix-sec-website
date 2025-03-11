import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, subject, message, recipient } = await request.json();
    
    // Validate the input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Configure email transporter with debug logging
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER || 'smtp.hostinger.com',
      port: parseInt(process.env.EMAIL_PORT || '465'),
      secure: true, // Force secure to true for port 465
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASSWORD
      },
      debug: true, // Enable debug output
      logger: true // Log to console
    });
    
    // Email content
    const mailOptions = {
      from: `"Phoenix Security" <${process.env.EMAIL_FROM || 'admin@phoenix-sec.org'}>`,
      to: recipient || 'admin@phoenix-sec.org',
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #333;">New Contact Form Submission</h2>
  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Subject:</strong> ${subject}</p>
  <div style="margin-top: 20px;">
    <p><strong>Message:</strong></p>
    <p style="white-space: pre-line;">${message}</p>
  </div>
  <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666;">
    <p>This email was sent from the Phoenix Security website contact form.</p>
  </div>
</div>
      `,
    };
    
    // Send email
    await transporter.sendMail(mailOptions);
    
    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { message: 'Failed to send email' },
      { status: 500 }
    );
  }
}