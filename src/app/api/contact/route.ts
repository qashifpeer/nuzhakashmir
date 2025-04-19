// app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import SMTPTransport from 'nodemailer/lib/smtp-transport';  // Import SMTPTransport

export async function POST(req: Request) {
  const { name, email, phone, message } = await req.json();


  const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com", // Make sure this matches your Hostinger settings
    port: parseInt(process.env.EMAIL_PORT || '587'),
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },

  } as SMTPTransport.Options);

  const mailOptions = {
    from: `"Nuzha Kashmir Contact" <info@nuzhakashmir.com>`,
    to: "info@nuzhakashmir.com",
    subject: `New message from ${name}`,
    text: `
  Name: ${name}
  Email: ${email}
  Phone: ${phone}
  Message: ${message}
      `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Sit back and relax!, We will be in touch with you very soon.' });
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error sending email:', error.message); // Access `message` safely
      return NextResponse.json(
        { message: `Failed to send feedback. Error: ${error.message}` },
        { status: 500 }
      );
    } else {
      console.error('Unknown error occurred:', error);
      return NextResponse.json(
        { message: 'Failed to send feedback due to an unknown error.' },
        { status: 500 }
      );
    }
  }
}
