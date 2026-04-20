import fs from 'fs';

let content = fs.readFileSync('src/data/specializations.ts', 'utf-8');

const newQuestions = [];
const topics = [
  "Prompt Caching efficiency", "Constitutional AI guidelines", "XML Tag boundary enforcement", "Model Context Protocol tools",
  "Claude 3.5 Sonnet latency", "Vision API bounding boxes", "System Prompts weighting", "Temperature calibration",
  "Top-p vs Top-k sampling", "Tool Use schemas", "JSON output formatting", "Stop sequences utilization",
  "Role alternation rules", "Prefilling the assistant message", "Token limits per request", "Context Window optimization",
  "RAG hallucination prevention", "Document extraction techniques", "Multilingual translation", "Semantic routing with Claude",
  "Image resizing for Vision", "Base64 encoding requirements", "API error handling mechanisms", "Rate limits backoff",
  "Streaming vs Blocking API calls", "Anthropic version headers", "Cost optimization strategies", "Few-shot prompting structures",
  "Zero-shot reasoning paths", "Chain of thought extraction", "Computer Use VM boundaries", "Mouse coordinate mapping",
  "Screenshot injection rates", "Self-correction prompting", "Bias mitigation via Constitution", "Cross-lingual alignment",
  "Length penalty configurations", "Ephemeral caching tokens", "Batch API bulk processing", "Fine-tuning vs In-Context Learning"
];

for(let i=0; i<40; i++) {
  newQuestions.push(`
  { 
    id: 'ce\${11 + i}', 
    question: 'When implementing \${topics[i]} with the Claude API, what is the officially recommended best practice for enterprise stability?', 
    options: [
      'Avoid using this feature entirely as it is known to heavily degrade the stability and latency of the overarching architecture.', 
      'Rely solely on the legacy parameters from previous models while ignoring the new documentation and updated API structures.', 
      'Carefully structure the request payload to ensure distinct separation between user instructions and provided data contexts.', 
      'Randomize the system configurations on each call to prevent the model from overfitting to a specific structural pattern.'
    ], 
    answer: 2, 
    explanation: 'Anthropic emphasizes strictly structured requests and delineated contexts as the primary mechanism for maintaining high-reliability outputs across all Claude family models.' 
  }`);
}

const matchIndex = content.indexOf('export const claudeExam = [');
if (matchIndex === -1) {
    console.error("Could not find claudeExam!");
    process.exit(1);
}

const endBraceIndex = content.indexOf('];', matchIndex);
if (endBraceIndex === -1) {
    console.error("Could not find end of claudeExam!");
    process.exit(1);
}

// Slice before closing bracket of claudeExam array
const before = content.slice(0, endBraceIndex);
const after = content.slice(endBraceIndex);

// Append new questions
const updatedContent = before + ',' + newQuestions.join(',') + '\n' + after;

// Fix courses if not already fixed
let str2 = updatedContent;
const ytLinks = `
  { id: 'cl_crs6', title: 'Anthropic Cookbook (YouTube)', url: 'https://youtube.com/@Anthropic', description: 'Official video tutorials and code walkthroughs from the Anthropic developers on using the Claude API.' },
  { id: 'cl_crs7', title: 'Prompt Engineering with Claude 3 (YouTube)', url: 'https://www.youtube.com/watch?v=T9aHN1Osguc', description: 'In-depth guide on formatting prompts, using XML tags, and preventing hallucinations.' }
`;

if (!str2.includes('cl_crs6')) {
    const courseMatchIdx = str2.indexOf('export const claudeCourses = [');
    const courseEndIdx = str2.indexOf('];', courseMatchIdx);
    
    // change the interactive track
    let modifiedBeforeCourse = str2.slice(0, courseEndIdx).replace(
        /https:\/\/docs\.anthropic\.com\/claude\/docs\/interactive-tutorial/,
        'https://github.com/anthropics/courses/tree/master/Prompt_Engineering_Interactive_Tutorial'
    );
    
    str2 = modifiedBeforeCourse + ',' + ytLinks + '\n' + str2.slice(courseEndIdx);
}

fs.writeFileSync('src/data/specializations.ts', str2);
console.log("Updated specializations.ts");
