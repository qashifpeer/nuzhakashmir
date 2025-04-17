// app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, phone, message } = await req.json();

  const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com", // Make sure this matches your Hostinger settings
    port: 465,
    secure: true,
    auth: {
      user: "info@nuzhakashmir.com", // your Hostinger email
      pass: process.env.EMAIL_PASS,  // store password in .env.local
    },
  });

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
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error sending email:", err);
    return NextResponse.json({ success: false, error: err });
  }
}
