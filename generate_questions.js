import fs from 'fs';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function run() {
  console.log("Generating Claude questions...");
  const prompt = `Generate exactly 40 highly technical multiple choice questions about Anthropic's Claude 3.5 Sonnet/Opus/Haiku, the Claude API, Model Context Protocol (MCP), Computer Use, Constitutional AI, Prompt Caching, and advanced Prompt Engineering (XML tags, etc).

CRITICAL INSTRUCTIONS:
1. Ensure all 4 options (A, B, C, D) for EVERY question are roughly the exact same character length and detail level. The incorrect answer choices MUST be as long, descriptive, and technical-sounding as the correct answer to prevent 'longest answer is right' test-taking strategies.
2. Output purely a JSON array of objects, starting with id "ce11" and ending with "ce50".
3. Structure: { "id": "string", "question": "string", "options": ["string", "string", "string", "string"], "answer": 0 | 1 | 2 | 3, "explanation": "string" }
4. Return ONLY valid JSON, no markdown formatting (\`\`\`).`;

  const response = await ai.models.generateContent({
    model: 'gemini-2.5-pro',
    contents: prompt,
  });

  let text = response.text;
  if (text.startsWith('\`\`\`json')) {
    text = text.substring(7);
    if (text.endsWith('\`\`\`')) text = text.substring(0, text.length - 3);
  } else if (text.startsWith('\`\`\`')) {
    text = text.substring(3);
    if (text.endsWith('\`\`\`')) text = text.substring(0, text.length - 3);
  }
  
  text = text.trim();
  fs.writeFileSync('claude_50.json', text);
  console.log("Generated claude_50.json");
  
  console.log("Fixing option lengths for quiz.ts...");
  const quizPrompt = `I have a list of quiz questions. I need you to rewrite the "options" array for each question so that ALL FOUR options are approximately the same character length and level of detail. The correct answer must remain the same conceptual answer, but expand the incorrect options and/or condense the correct option so they look uniform. Do not change the 'answer' index.

Return a JSON array with the updated options and identical id/topic/question/answer/explanation. Return ONLY valid JSON, no markdown formatting.

Here are the questions:
${fs.readFileSync('src/data/quiz.ts', 'utf-8')}
`;
  // Just taking first 10 questions from quiz.ts to test the concept or maybe all 50.
  // Wait, let's just use Python or Node to pad/trim strings if AI is too slow, or I can do it via prompt. Let's just fix the claude questions first.
}

run().catch(console.error);
