import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate body with Zod
    const result = contactFormSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, email, company, service, message, honeypot } = result.data;

    // Spam check
    if (honeypot && honeypot.length > 0) {
      return NextResponse.json(
        { success: false, message: "Spam rejected" },
        { status: 400 }
      );
    }

    // Server-side logging of legitimate submission
    console.log("[Assestics Contact Submission]", {
      timestamp: new Date().toISOString(),
      name,
      email,
      company: company || "N/A",
      service,
      messageSnippet: message.slice(0, 100),
    });

    // If an email provider key like RESEND_API_KEY is configured in env:
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "Assestics Inquiries <onboarding@resend.dev>",
            to: ["assestics.office@gmail.com"],
            subject: `New Project Inquiry from ${name} (${company || "Individual"})`,
            text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || "N/A"}\nService: ${service}\n\nMessage:\n${message}`,
          }),
        });
      } catch (err) {
        console.error("External email dispatch failed:", err);
      }
    }

    return NextResponse.json({
      success: true,
      message:
        "Thank you. Your project enquiry has been received. Our engineering team will review your specifications and respond within 24 hours.",
    });
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      {
        success: false,
        message:
          "An error occurred while processing your request. Please email us directly at assestics.office@gmail.com.",
      },
      { status: 500 }
    );
  }
}
