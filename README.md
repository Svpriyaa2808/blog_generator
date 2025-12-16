# 🤖 AI Blog Post Generator

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.2-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Groq](https://img.shields.io/badge/Groq-FREE-orange?style=for-the-badge)

**Generate professional, AI-powered blog posts instantly - 100% FREE**

[Features](#-features) • [Quick Start](#-quick-start) • [Documentation](#-documentation) • [Demo](#-how-it-works)

</div>

---

## 📋 Overview

The **AI Blog Post Generator** is a standalone web application that uses artificial intelligence to create high-quality, well-structured blog posts in seconds. Powered by **Groq's free AI API** (LLaMA 3.3 70B model), this tool offers professional content generation without any cost.

### ✨ Why This Tool?

- **💯 Completely Free**: Uses Groq's free API - no hidden costs, no credit card required
- **⚡ Lightning Fast**: Generate content in 3-5 seconds with Groq's ultra-fast inference
- **🎨 Customizable**: Choose tone, length, and integrate keywords
- **📥 Export Ready**: Download as Markdown or PDF
- **🎯 SEO Friendly**: Naturally integrates keywords for better search rankings
- **🌙 Modern UI**: Beautiful, responsive interface with dark mode support

---

## 🎯 Features

### Core Functionality

| Feature | Description |
|---------|-------------|
| **AI Content Generation** | Creates complete blog posts with titles, structure, and conclusions |
| **7 Tone Styles** | Professional, Casual, Friendly, Formal, Humorous, Inspirational, Educational |
| **3 Length Options** | Short (~500 words), Medium (~1000 words), Long (~1500+ words) |
| **Keyword Integration** | SEO optimization with natural keyword placement |
| **Real-Time Preview** | Live markdown rendering with syntax highlighting |
| **Multiple Export Formats** | Markdown (.md), PDF (.pdf), and Copy to Clipboard |
| **Metadata Display** | Word count, generation time, and applied parameters |
| **Responsive Design** | Works on desktop, tablet, and mobile devices |

### Technical Features

- ⚛️ Built with Next.js 14 (App Router)
- 🔒 Type-safe with TypeScript
- 🎨 Styled with Tailwind CSS 4
- 🤖 Powered by Groq AI (LLaMA 3.3 70B)
- 📝 Markdown support with react-markdown
- 📄 PDF generation with jsPDF
- 🌐 Server-side rendering for better SEO
- ♿ Accessible and user-friendly

---

## 🚀 Quick Start

### Prerequisites

- Node.js 20 or higher
- npm (comes with Node.js)
- A free Groq API key

### 1. Get Your Free Groq API Key

1. Visit [https://console.groq.com](https://console.groq.com)
2. Sign up for a free account (no credit card needed)
3. Go to **API Keys** section
4. Click **"Create API Key"**
5. Copy your API key

### 2. Installation

```bash
# Clone the repository (or download ZIP)
git clone <your-repo-url>
cd blog_generator

# Install dependencies
npm install
```

### 3. Configuration

Create a `.env.local` file in the root directory:

```bash
# Copy the example file
cp .env.example .env.local
```

Open `.env.local` and add your Groq API key:

```env
GROQ_API_KEY=your_groq_api_key_here
```

### 4. Run the Application

```bash
# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for Production (Optional)

```bash
# Build the application
npm run build

# Start production server
npm start
```

---

## 💡 How It Works

### The AI Agent

This application features a **standalone AI agent** that:

1. **Understands Context**: Analyzes your topic and requirements
2. **Engineers Prompts**: Creates optimized prompts for the AI model
3. **Generates Content**: Uses Groq's LLaMA 3.3 70B model for high-quality output
4. **Structures Output**: Formats content with proper headings and markdown
5. **Validates Quality**: Ensures coherent, well-structured blog posts

### Architecture

```
User Input → API Route → AI Agent → Groq API → Content Generation → User
```

**Key Components:**

- **BlogGeneratorAgent** (`src/lib/ai-agent.ts`): Core AI logic
- **API Routes** (`src/app/api/`): Server-side endpoints
- **BlogGenerator** (`src/components/`): React UI component

---

## 📖 Usage Guide

### Basic Usage

1. **Enter a Topic**
   ```
   Example: "The Future of Artificial Intelligence in Healthcare"
   ```

2. **Select Tone**
   - Professional for business blogs
   - Casual for personal content
   - Educational for tutorials

3. **Choose Length**
   - Short: 2-3 minute read
   - Medium: 4-5 minute read
   - Long: 7-10 minute read

4. **Add Keywords (Optional)**
   ```
   Example: innovation, technology, healthcare
   ```

5. **Click "Generate Blog Post"**

6. **Export Your Content**
   - **Markdown**: For GitHub, Medium, Dev.to
   - **PDF**: For printing or sharing
   - **Copy**: For immediate use

### Tips for Best Results

✅ **Do:**
- Be specific with your topic
- Match tone to your audience
- Use 3-5 relevant keywords
- Generate multiple versions to compare

❌ **Avoid:**
- Vague or overly broad topics
- Excessive keywords (keyword stuffing)
- Expecting perfect output on first try

---

## 📚 Documentation

For comprehensive documentation, see **[DOCUMENTATION.md](./DOCUMENTATION.md)**

This includes:
- Detailed architecture explanation
- Step-by-step build process
- AI agent deep dive
- API reference
- Troubleshooting guide
- Advanced customization
- Performance optimization tips

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | Next.js 16 |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS 4 |
| **AI Provider** | Groq (FREE) |
| **AI Model** | LLaMA 3.3 70B Versatile |
| **Markdown** | react-markdown + remark-gfm |
| **PDF Generation** | jsPDF + html2canvas |

---

## 📁 Project Structure

```
blog_generator/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── generate/route.ts    # Blog generation endpoint
│   │   │   └── outline/route.ts     # Outline generation endpoint
│   │   ├── layout.tsx               # Root layout
│   │   ├── page.tsx                 # Main page
│   │   └── globals.css              # Global styles
│   ├── components/
│   │   └── BlogGenerator.tsx        # Main UI component
│   └── lib/
│       └── ai-agent.ts              # AI agent service
├── .env.example                      # Environment template
├── .env.local                        # Your API key (create this)
├── package.json                      # Dependencies
├── tsconfig.json                     # TypeScript config
├── DOCUMENTATION.md                  # Comprehensive guide
└── README.md                         # This file
```

---

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `GROQ_API_KEY` | Your Groq API key from console.groq.com | Yes |

### Customization

**Change AI Model:**
Edit `src/lib/ai-agent.ts`:
```typescript
private model: string = "mixtral-8x7b-32768"; // Alternative model
```

**Adjust Creativity:**
```typescript
temperature: 0.9, // Higher = more creative (0.1-1.0)
```

**Modify Length Limits:**
```typescript
case "short": return 1200;  // tokens
case "medium": return 2000; // tokens
case "long": return 3500;   // tokens
```

---

## 🐛 Troubleshooting

### Common Issues

**"GROQ_API_KEY not configured" Error**
- Ensure `.env.local` file exists in root directory
- Verify API key is correctly pasted (no extra spaces)
- Restart dev server: `npm run dev`

**Slow Generation**
- Check internet connection
- Try shorter length option
- Verify Groq API status

**PDF Export Not Working**
- Check browser popup blocker
- Allow downloads from localhost
- Try different browser

For more troubleshooting, see [DOCUMENTATION.md](./DOCUMENTATION.md#troubleshooting).

---

## 📊 API Reference

### Generate Blog Post

**Endpoint:** `POST /api/generate`

**Request:**
```json
{
  "topic": "Your blog topic",
  "tone": "professional",
  "length": "medium",
  "keywords": "optional, comma, separated"
}
```

**Response:**
```json
{
  "title": "Generated Title",
  "content": "Markdown formatted content...",
  "metadata": {
    "generatedAt": "2025-12-16T...",
    "topic": "Your blog topic",
    "tone": "professional",
    "length": "medium",
    "wordCount": 1234
  }
}
```

---

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Add `GROQ_API_KEY` to environment variables
5. Deploy

### Other Platforms

- **Netlify**: Add environment variables in site settings
- **Railway**: Deploy with Dockerfile
- **Self-hosted**: Run `npm run build && npm start`

---

## 🔒 Security

- ✅ API key stored in environment variables
- ✅ Server-side API calls only
- ✅ Input validation and sanitization
- ✅ No sensitive data in client code
- ✅ Rate limiting via Groq API

---

## 📈 Performance

- **Generation Time**: 3-5 seconds average
- **Bundle Size**: ~250KB (gzipped)
- **Time to First Byte**: <100ms
- **Groq Rate Limits**: 30 requests/min (free tier)

---

## 🎓 Learning Resources

This project demonstrates:
- Next.js App Router and API Routes
- React Server Components
- TypeScript best practices
- AI API integration
- Prompt engineering
- PDF generation in browsers
- Markdown rendering
- Environment variable management

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

## 📝 License

This project is open-source and available for personal and commercial use.

---

## 🎉 Acknowledgments

- **Groq** for providing free, fast AI inference
- **Meta** for the LLaMA 3.3 model
- **Vercel** for Next.js framework
- **Tailwind Labs** for Tailwind CSS

---

## 📞 Support

For detailed documentation and advanced features, see:
- **[DOCUMENTATION.md](./DOCUMENTATION.md)** - Complete technical documentation
- **[Groq Documentation](https://console.groq.com/docs)** - API reference

---

## 🌟 Features Roadmap

Future enhancements planned:
- [ ] Multi-language support
- [ ] Image generation integration
- [ ] SEO score analysis
- [ ] Version history
- [ ] Custom templates
- [ ] CMS integration (WordPress, Medium)
- [ ] Browser extension
- [ ] Team collaboration features

---

<div align="center">

**Made with ❤️ using Next.js and Groq AI**

[⬆ Back to Top](#-ai-blog-post-generator)

</div>
