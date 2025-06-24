// app/api/contact/route.ts

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("Request Body:", body); // 👈 Log request data

    const { type, name, email, brand, subject, budget, message } = body;

    if (!type || !name || !email || !brand || !subject || !budget || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    if (body.honeypot) {
      return NextResponse.json({ error: "Bot detected" }, { status: 400 });
    }

    const recipient =
      type === "business"
        ? "thughes@shdwfanglabs.com"
        : "revenant@shdwfanglabs.com";

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || "465"),
      secure: process.env.EMAIL_SECURE === "true",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    console.log("Selected recipient:", recipient); // before sendMail()

    await transporter.sendMail({
      from: `"Shadowfang Labs" <${process.env.EMAIL_USER}>`,
      to: recipient,
      replyTo: email,
      subject: `[${type.toUpperCase()}] ${subject} Inquiry - ${new Date().toISOString()}`,
      html: `
        <p><strong>Type:</strong> ${type}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p> 
        <p><strong>Brand/Company Name:</strong> ${brand}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email send error:", err); // 👈 Print full error
    const error = err as Error;
    return NextResponse.json(
      { error: "Email failed to send", details: error.message },
      { status: 500 }
    );
  }
}

