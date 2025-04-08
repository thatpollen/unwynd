import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const email = body.email;

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    console.log({ email });

    const AUDIENCE_ID = process.env.NEXT_PUBLIC_MAILCHIMP_AUDIENCE_ID;
    const API_KEY = process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY;
    const DATACENTER = process.env.NEXT_PUBLIC_MAILCHIMP_API_SERVER;

    if (!AUDIENCE_ID || !API_KEY || !DATACENTER) {
      return NextResponse.json(
        { error: "Missing environment variables" },
        { status: 500 }
      );
    }

    const data = {
      email_address: email,
      status: "subscribed",
    };

    const response = await fetch(
      `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,
      {
        method: "POST",
        headers: {
          Authorization: `apikey ${API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const responseData = await response.json();

    if (response.status === 400 && responseData.title === "Member Exists") {
      return NextResponse.json(
        { error: "This email is already subscribed." },
        { status: 400 }
      );
    }

    if (response.status >= 400) {
      console.log("Mailchimp error:", responseData);
      return NextResponse.json(
        { error: responseData.detail || "Error subscribing to newsletter" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "Subscription successful" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error subscribing user:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}

// Handle GET requests (for debugging)
export async function GET() {
  return NextResponse.json({ message: "API is working!" }, { status: 200 });
}
