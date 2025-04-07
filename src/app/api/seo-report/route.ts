import { NextResponse } from "next/server";

const API_KEY = "AIzaSyCS-A-493JCXdMd1UNyg_BbtEme2XJ4uuw"; // Replace with your actual API Key
const SITE_URL = "sc-domain:nuzhakashmir.com"; // Replace with your actual site domain

export async function POST(req: Request) {
  try {
    const body = await req.json(); // Parse incoming JSON data

    const response = await fetch(
      `https://www.googleapis.com/webmasters/v3/sites/${SITE_URL}/searchAnalytics/query?key=${API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          startDate: body.startDate || "2024-01-01",
          endDate: body.endDate || "2024-12-31",
          dimensions: ["query"],
        }),
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch data from Google Search Console" },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error", details: error },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: "SEO Report API is working! Use a POST request to get data.",
  });
}
