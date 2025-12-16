import { NextRequest, NextResponse } from "next/server";
import { BlogGeneratorAgent } from "@/lib/ai-agent";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { topic } = body;

    if (!topic) {
      return NextResponse.json(
        { error: "Missing required field: topic" },
        { status: 400 }
      );
    }

    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "GROQ_API_KEY not configured" },
        { status: 500 }
      );
    }

    const agent = new BlogGeneratorAgent(apiKey);
    const outline = await agent.generateOutline(topic);

    return NextResponse.json({ outline });
  } catch (error) {
    console.error("Outline generation error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to generate outline" },
      { status: 500 }
    );
  }
}
