import Groq from "groq-sdk";

export interface BlogPostParams {
  topic: string;
  tone: string;
  length: string;
  keywords?: string;
}

export interface BlogPost {
  title: string;
  content: string;
  metadata: {
    generatedAt: string;
    topic: string;
    tone: string;
    length: string;
    wordCount: number;
  };
}

/**
 * AI Agent for Blog Post Generation
 * Uses Groq's free API with Llama 3 model for content generation
 */
export class BlogGeneratorAgent {
  private groq: Groq;
  private model: string = "llama-3.3-70b-versatile";

  constructor(apiKey: string) {
    this.groq = new Groq({ apiKey });
  }

  /**
   * Generate a blog post based on the provided parameters
   */
  async generateBlogPost(params: BlogPostParams): Promise<BlogPost> {
    const { topic, tone, length, keywords } = params;

    // Build the prompt for the AI
    const prompt = this.buildPrompt(topic, tone, length, keywords);

    try {
      // Call Groq API for content generation
      const completion = await this.groq.chat.completions.create({
        messages: [
          {
            role: "system",
            content: `You are an expert blog writer who creates engaging, well-structured, and SEO-optimized blog posts. Your writing is clear, informative, and tailored to the specified tone and audience.`,
          },
          {
            role: "user",
            content: prompt,
          },
        ],
        model: this.model,
        temperature: 0.7,
        max_tokens: this.getMaxTokens(length),
      });

      const generatedContent = completion.choices[0]?.message?.content || "";

      // Parse the generated content to extract title and body
      const { title, content } = this.parseContent(generatedContent);

      return {
        title,
        content,
        metadata: {
          generatedAt: new Date().toISOString(),
          topic,
          tone,
          length,
          wordCount: this.countWords(content),
        },
      };
    } catch (error) {
      throw new Error(`Failed to generate blog post: ${error}`);
    }
  }

  /**
   * Build the prompt for the AI model
   */
  private buildPrompt(
    topic: string,
    tone: string,
    length: string,
    keywords?: string
  ): string {
    const keywordSection = keywords
      ? `\n- Include these keywords naturally: ${keywords}`
      : "";

    return `Write a ${length} blog post about "${topic}" with a ${tone} tone.

Requirements:
- Start with an engaging title on the first line (prefix with "# ")
- Write in markdown format
- Include proper headings (##, ###) for sections
- Add relevant examples and explanations
- Make it engaging and informative${keywordSection}
- Ensure proper structure: introduction, main content, conclusion

Generate the complete blog post now:`;
  }

  /**
   * Parse the AI-generated content to extract title and body
   */
  private parseContent(content: string): { title: string; content: string } {
    const lines = content.trim().split("\n");
    let title = "Untitled Blog Post";
    let bodyContent = content;

    // Try to extract title from the first line if it starts with # or ##
    if (lines[0] && (lines[0].startsWith("# ") || lines[0].startsWith("## "))) {
      title = lines[0].replace(/^#{1,2}\s+/, "").trim();
      bodyContent = lines.slice(1).join("\n").trim();
    }

    return { title, content: bodyContent };
  }

  /**
   * Count words in the content
   */
  private countWords(text: string): number {
    return text.trim().split(/\s+/).length;
  }

  /**
   * Get maximum tokens based on desired length
   */
  private getMaxTokens(length: string): number {
    switch (length.toLowerCase()) {
      case "short":
        return 800;
      case "medium":
        return 1500;
      case "long":
        return 2500;
      default:
        return 1500;
    }
  }

  /**
   * Generate a blog outline (lightweight operation)
   */
  async generateOutline(topic: string): Promise<string[]> {
    try {
      const completion = await this.groq.chat.completions.create({
        messages: [
          {
            role: "system",
            content: "You are a content strategist who creates blog outlines.",
          },
          {
            role: "user",
            content: `Create a blog post outline for the topic: "${topic}". Return only the section headings as a numbered list.`,
          },
        ],
        model: this.model,
        temperature: 0.5,
        max_tokens: 500,
      });

      const outline = completion.choices[0]?.message?.content || "";
      return outline.split("\n").filter((line) => line.trim());
    } catch (error) {
      throw new Error(`Failed to generate outline: ${error}`);
    }
  }
}
