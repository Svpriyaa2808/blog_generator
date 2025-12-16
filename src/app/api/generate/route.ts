import { NextRequest, NextResponse } from "next/server";
import { BlogGeneratorAgent } from "@/lib/ai-agent";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { topic, tone, length, keywords } = body;

    // Validate required fields
    if (!topic || !tone || !length) {
      return NextResponse.json(
        { error: "Missing required fields: topic, tone, or length" },
        { status: 400 }
      );
    }

    // Get API key from environment
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "GROQ_API_KEY not configured. Please add it to your .env.local file" },
        { status: 500 }
      );
    }

    // Initialize the AI agent
    const agent = new BlogGeneratorAgent(apiKey);

    // Generate the blog post
    const blogPost = await agent.generateBlogPost({
      topic,
      tone,
      length,
      keywords,
    });

    return NextResponse.json(blogPost);
  } catch (error) {
    console.error("Blog generation error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to generate blog post" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: "Blog Generator API",
    endpoints: {
      POST: "/api/generate - Generate a blog post",
    },
    requiredParams: {
      topic: "string - The topic of the blog post",
      tone: "string - The tone (e.g., professional, casual, friendly)",
      length: "string - The length (short, medium, long)",
      keywords: "string (optional) - Keywords to include",
    },
  });
}
