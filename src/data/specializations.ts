export const claudeConcepts = [
  { id: 'cl_con1', title: 'Constitutional AI', description: 'Anthropic\'s alignment technique where the model is trained to critique and revise its own behavior based on a provided "constitution" or set of principles.' },
  { id: 'cl_con2', title: 'XML Tagging', description: 'Claude is deeply trained to understand structures clearly delineated by XML tags (e.g., <instructions>, <document>), which helps prevent prompt injection and improves structured output.' },
  { id: 'cl_con3', title: 'Prompt Caching', description: 'A cost and latency saving feature that allows you to cache large chunks of context (like system instructions or huge documents) so they don\'t need to be recomputed on every turn.' },
  { id: 'cl_con4', title: 'Tool Use (MCP & Functions)', description: 'Claude can output specific structured JSON to trigger external function calls. The Model Context Protocol (MCP) standardizes this connection for seamless zero-glue tool integration.' },
  { id: 'cl_con5', title: 'Model Tiers (Opus, Sonnet, Haiku)', description: 'Haiku is for sub-second, low-latency tasks. Sonnet is the balanced flagship model (and currently best at coding). Opus is the heavy reasoning architect for highly complex logic problems.' },
  { id: 'cl_con6', title: 'Computer Use API', description: 'A beta capability allowing Claude to directly view screenshots, move a mouse cursor, and type on a virtual machine to execute multi-step GUI automations.' },
  { id: 'cl_con7', title: 'Vision & Multimodal', description: 'Claude can interpret base64-encoded images or image URLs alongside text. Prompt engineering for vision requires careful bounding box considerations and awareness of token limits.' },
  { id: 'cl_con8', title: 'Message Alternation Rules', description: 'Anthropic\'s Messages API requires strict alternation between "user" and "assistant" roles. You cannot send two "user" messages in a row without an "assistant" turn in between.' }
];

export const claudeCourses = [
  { id: 'cl_crs1', title: 'Anthropic Prompt Engineering Interactive Tutorial', url: 'https://github.com/anthropics/courses/tree/master/Prompt_Engineering_Interactive_Tutorial', description: 'Hands-on interactive tutorial to master Claude specific techniques.' },
  { id: 'cl_crs2', title: 'Mastering Claude Tool Use', url: 'https://docs.anthropic.com/claude/docs/tool-use', description: 'Deep dive into connecting Claude to external APIs.' },
  { id: 'cl_crs3', title: 'Constitutional AI Paper', url: 'https://arxiv.org/abs/2212.08073', description: 'The foundational research paper describing how Claude is trained and aligned.' },
  { id: 'cl_crs4', title: 'Computer Use Reference Architecture', url: 'https://docs.anthropic.com/en/docs/build-with-claude/computer-use', description: 'How to deploy Claude inside an isolated container to let it use a virtual mouse and keyboard.' },
  { id: 'cl_crs5', title: 'Claude Vision Guide', url: 'https://docs.anthropic.com/en/docs/build-with-claude/vision', description: 'Best practices for multimodal inputs, resizing images, and extracting data from charts.' }
,
  { id: 'cl_crs6', title: 'Anthropic Cookbook (YouTube)', url: 'https://youtube.com/@Anthropic', description: 'Official video tutorials and code walkthroughs from the Anthropic developers on using the Claude API.' },
  { id: 'cl_crs7', title: 'Prompt Engineering with Claude 3 (YouTube)', url: 'https://www.youtube.com/watch?v=T9aHN1Osguc', description: 'In-depth guide on formatting prompts, using XML tags, and preventing hallucinations.' }

];

export const claudeExam = [
  { id: 'ce1', question: 'Which formatting technique does Anthropic officially recommend for structuring complex prompts for Claude?', options: ['JSON objects', 'Markdown backticks exclusively', 'XML tags (e.g., <doc> ... </doc>)', 'Whitespace indentation'], answer: 2, explanation: 'Claude is heavily optimized to parse XML tags to separate instructions from variables.' },
  { id: 'ce2', question: 'What is "Constitutional AI"?', options: ['AI legally bound by a country\'s constitution.', 'A method for training AI to safely critique and revise its own responses based on principles.', 'Hard-coded rules an AI cannot bypass.', 'A list of rules placed at the start of a prompt.'], answer: 1, explanation: 'It allows self-correction during training based on a principled constitution.' },
  { id: 'ce3', question: 'How do you enable Prompt Caching in the Claude API?', options: ['By paying a premium subscription fee.', 'By adding a "cache_control": {"type": "ephemeral"} block to specific messages or blocks.', 'By storing the prompt in a local REDIS DB.', 'It is on by default and cannot be controlled.'], answer: 1, explanation: 'Prompt caching requires explicit cache_control blocks defining ephemeral caching in the API payload.' },
  { id: 'ce4', question: 'Why does Claude prefer system prompts to be placed explicitly in the `system` parameter rather than user messages?', options: ['It doesn\'t matter.', 'The API will throw a syntax error otherwise.', 'The `system` parameter ensures higher obedience and resistance to jailbreaks across long conversations.', 'It saves tokens.'], answer: 2, explanation: 'The system parameter has elevated privilege in Claude\'s attention mechanism.' },
  { id: 'ce5', question: 'What is the most effective way to stop Claude from hallucinating when using specialized RAG context?', options: ['Tell it to "think step by step".', 'Provide the context inside <context> tags and explicitly instruct it to only use the provided context.', 'Increase the temperature.', 'Use a smaller model.'], answer: 1, explanation: 'Clear XML boundaries paired with strict bounding instructions dramatically reduces RAG hallucinations with Claude.' },
  { id: 'ce6', question: 'Which model should you choose for high-volume, sub-second latency tasks like categorization or data extraction?', options: ['Claude 3 Opus', 'Claude 3.5 Sonnet', 'Claude 3 Haiku', 'Claude 2.1'], answer: 2, explanation: 'Haiku is specifically engineered as Anthropic\'s fastest, most cost-effective model for rapid, low-latency execution.' },
  { id: 'ce7', question: 'What unique capability allows Claude 3.5 Sonnet to directly interact with a desktop environment?', options: ['The Vision Extractor API', 'The Code Interpreter execution', 'The Computer Use API', 'The WebDriver integration'], answer: 2, explanation: 'The Computer Use API allows Claude to control a mouse, click elements, and type on a virtual keyboard by taking continuous screenshots.' },
  { id: 'ce8', question: 'How do you specify the API version in a raw Anthropic REST API request?', options: ['In the URL path (e.g., /v1/messages)', 'Via the x-api-key header', 'Via the anthropic-version header (e.g., anthropic-version: 2023-06-01)', 'It is passed in the JSON body'], answer: 2, explanation: 'Anthropic requires the `anthropic-version` header to explicitly lock API contracts and avoid breaking changes.' },
  { id: 'ce9', question: 'When constructing an array of messages for the Claude API, what is a strict requirement?', options: ['It must start with an "assistant" message.', 'It must strictly alternate between "user" and "assistant" roles.', 'It must contain at least 3 messages.', 'It cannot contain images.'], answer: 1, explanation: 'The API enforces alternating turns. You cannot send two `user` messages sequentially without an `assistant` reply separating them.' },
  { id: 'ce10', question: 'What is "Prefilling" in the context of Claude?', options: ['Pre-loading the cache.', 'Supplying the leading text of the Assistant\'s response to force Claude to start its answer in a specific format (e.g., "{" for JSON).', 'Injecting the prompt twice.', 'Paying for tokens in advance.'], answer: 1, explanation: 'Prefilling the `assistant` role message allows you to force Claude to begin its response with a specific starting string or bracket.' }
,
  { 
    id: 'ce${11 + i}', 
    question: 'When implementing ${topics[i]} with the Claude API, what is the officially recommended best practice for enterprise stability?', 
    options: [
      'Avoid using this feature entirely as it is known to heavily degrade the stability and latency of the overarching architecture.', 
      'Rely solely on the legacy parameters from previous models while ignoring the new documentation and updated API structures.', 
      'Carefully structure the request payload to ensure distinct separation between user instructions and provided data contexts.', 
      'Randomize the system configurations on each call to prevent the model from overfitting to a specific structural pattern.'
    ], 
    answer: 2, 
    explanation: 'Anthropic emphasizes strictly structured requests and delineated contexts as the primary mechanism for maintaining high-reliability outputs across all Claude family models.' 
  },
  { 
    id: 'ce${11 + i}', 
    question: 'When implementing ${topics[i]} with the Claude API, what is the officially recommended best practice for enterprise stability?', 
    options: [
      'Avoid using this feature entirely as it is known to heavily degrade the stability and latency of the overarching architecture.', 
      'Rely solely on the legacy parameters from previous models while ignoring the new documentation and updated API structures.', 
      'Carefully structure the request payload to ensure distinct separation between user instructions and provided data contexts.', 
      'Randomize the system configurations on each call to prevent the model from overfitting to a specific structural pattern.'
    ], 
    answer: 2, 
    explanation: 'Anthropic emphasizes strictly structured requests and delineated contexts as the primary mechanism for maintaining high-reliability outputs across all Claude family models.' 
  },
  { 
    id: 'ce${11 + i}', 
    question: 'When implementing ${topics[i]} with the Claude API, what is the officially recommended best practice for enterprise stability?', 
    options: [
      'Avoid using this feature entirely as it is known to heavily degrade the stability and latency of the overarching architecture.', 
      'Rely solely on the legacy parameters from previous models while ignoring the new documentation and updated API structures.', 
      'Carefully structure the request payload to ensure distinct separation between user instructions and provided data contexts.', 
      'Randomize the system configurations on each call to prevent the model from overfitting to a specific structural pattern.'
    ], 
    answer: 2, 
    explanation: 'Anthropic emphasizes strictly structured requests and delineated contexts as the primary mechanism for maintaining high-reliability outputs across all Claude family models.' 
  },
  { 
    id: 'ce${11 + i}', 
    question: 'When implementing ${topics[i]} with the Claude API, what is the officially recommended best practice for enterprise stability?', 
    options: [
      'Avoid using this feature entirely as it is known to heavily degrade the stability and latency of the overarching architecture.', 
      'Rely solely on the legacy parameters from previous models while ignoring the new documentation and updated API structures.', 
      'Carefully structure the request payload to ensure distinct separation between user instructions and provided data contexts.', 
      'Randomize the system configurations on each call to prevent the model from overfitting to a specific structural pattern.'
    ], 
    answer: 2, 
    explanation: 'Anthropic emphasizes strictly structured requests and delineated contexts as the primary mechanism for maintaining high-reliability outputs across all Claude family models.' 
  },
  { 
    id: 'ce${11 + i}', 
    question: 'When implementing ${topics[i]} with the Claude API, what is the officially recommended best practice for enterprise stability?', 
    options: [
      'Avoid using this feature entirely as it is known to heavily degrade the stability and latency of the overarching architecture.', 
      'Rely solely on the legacy parameters from previous models while ignoring the new documentation and updated API structures.', 
      'Carefully structure the request payload to ensure distinct separation between user instructions and provided data contexts.', 
      'Randomize the system configurations on each call to prevent the model from overfitting to a specific structural pattern.'
    ], 
    answer: 2, 
    explanation: 'Anthropic emphasizes strictly structured requests and delineated contexts as the primary mechanism for maintaining high-reliability outputs across all Claude family models.' 
  },
  { 
    id: 'ce${11 + i}', 
    question: 'When implementing ${topics[i]} with the Claude API, what is the officially recommended best practice for enterprise stability?', 
    options: [
      'Avoid using this feature entirely as it is known to heavily degrade the stability and latency of the overarching architecture.', 
      'Rely solely on the legacy parameters from previous models while ignoring the new documentation and updated API structures.', 
      'Carefully structure the request payload to ensure distinct separation between user instructions and provided data contexts.', 
      'Randomize the system configurations on each call to prevent the model from overfitting to a specific structural pattern.'
    ], 
    answer: 2, 
    explanation: 'Anthropic emphasizes strictly structured requests and delineated contexts as the primary mechanism for maintaining high-reliability outputs across all Claude family models.' 
  },
  { 
    id: 'ce${11 + i}', 
    question: 'When implementing ${topics[i]} with the Claude API, what is the officially recommended best practice for enterprise stability?', 
    options: [
      'Avoid using this feature entirely as it is known to heavily degrade the stability and latency of the overarching architecture.', 
      'Rely solely on the legacy parameters from previous models while ignoring the new documentation and updated API structures.', 
      'Carefully structure the request payload to ensure distinct separation between user instructions and provided data contexts.', 
      'Randomize the system configurations on each call to prevent the model from overfitting to a specific structural pattern.'
    ], 
    answer: 2, 
    explanation: 'Anthropic emphasizes strictly structured requests and delineated contexts as the primary mechanism for maintaining high-reliability outputs across all Claude family models.' 
  },
  { 
    id: 'ce${11 + i}', 
    question: 'When implementing ${topics[i]} with the Claude API, what is the officially recommended best practice for enterprise stability?', 
    options: [
      'Avoid using this feature entirely as it is known to heavily degrade the stability and latency of the overarching architecture.', 
      'Rely solely on the legacy parameters from previous models while ignoring the new documentation and updated API structures.', 
      'Carefully structure the request payload to ensure distinct separation between user instructions and provided data contexts.', 
      'Randomize the system configurations on each call to prevent the model from overfitting to a specific structural pattern.'
    ], 
    answer: 2, 
    explanation: 'Anthropic emphasizes strictly structured requests and delineated contexts as the primary mechanism for maintaining high-reliability outputs across all Claude family models.' 
  },
  { 
    id: 'ce${11 + i}', 
    question: 'When implementing ${topics[i]} with the Claude API, what is the officially recommended best practice for enterprise stability?', 
    options: [
      'Avoid using this feature entirely as it is known to heavily degrade the stability and latency of the overarching architecture.', 
      'Rely solely on the legacy parameters from previous models while ignoring the new documentation and updated API structures.', 
      'Carefully structure the request payload to ensure distinct separation between user instructions and provided data contexts.', 
      'Randomize the system configurations on each call to prevent the model from overfitting to a specific structural pattern.'
    ], 
    answer: 2, 
    explanation: 'Anthropic emphasizes strictly structured requests and delineated contexts as the primary mechanism for maintaining high-reliability outputs across all Claude family models.' 
  },
  { 
    id: 'ce${11 + i}', 
    question: 'When implementing ${topics[i]} with the Claude API, what is the officially recommended best practice for enterprise stability?', 
    options: [
      'Avoid using this feature entirely as it is known to heavily degrade the stability and latency of the overarching architecture.', 
      'Rely solely on the legacy parameters from previous models while ignoring the new documentation and updated API structures.', 
      'Carefully structure the request payload to ensure distinct separation between user instructions and provided data contexts.', 
      'Randomize the system configurations on each call to prevent the model from overfitting to a specific structural pattern.'
    ], 
    answer: 2, 
    explanation: 'Anthropic emphasizes strictly structured requests and delineated contexts as the primary mechanism for maintaining high-reliability outputs across all Claude family models.' 
  },
  { 
    id: 'ce${11 + i}', 
    question: 'When implementing ${topics[i]} with the Claude API, what is the officially recommended best practice for enterprise stability?', 
    options: [
      'Avoid using this feature entirely as it is known to heavily degrade the stability and latency of the overarching architecture.', 
      'Rely solely on the legacy parameters from previous models while ignoring the new documentation and updated API structures.', 
      'Carefully structure the request payload to ensure distinct separation between user instructions and provided data contexts.', 
      'Randomize the system configurations on each call to prevent the model from overfitting to a specific structural pattern.'
    ], 
    answer: 2, 
    explanation: 'Anthropic emphasizes strictly structured requests and delineated contexts as the primary mechanism for maintaining high-reliability outputs across all Claude family models.' 
  },
  { 
    id: 'ce${11 + i}', 
    question: 'When implementing ${topics[i]} with the Claude API, what is the officially recommended best practice for enterprise stability?', 
    options: [
      'Avoid using this feature entirely as it is known to heavily degrade the stability and latency of the overarching architecture.', 
      'Rely solely on the legacy parameters from previous models while ignoring the new documentation and updated API structures.', 
      'Carefully structure the request payload to ensure distinct separation between user instructions and provided data contexts.', 
      'Randomize the system configurations on each call to prevent the model from overfitting to a specific structural pattern.'
    ], 
    answer: 2, 
    explanation: 'Anthropic emphasizes strictly structured requests and delineated contexts as the primary mechanism for maintaining high-reliability outputs across all Claude family models.' 
  },
  { 
    id: 'ce${11 + i}', 
    question: 'When implementing ${topics[i]} with the Claude API, what is the officially recommended best practice for enterprise stability?', 
    options: [
      'Avoid using this feature entirely as it is known to heavily degrade the stability and latency of the overarching architecture.', 
      'Rely solely on the legacy parameters from previous models while ignoring the new documentation and updated API structures.', 
      'Carefully structure the request payload to ensure distinct separation between user instructions and provided data contexts.', 
      'Randomize the system configurations on each call to prevent the model from overfitting to a specific structural pattern.'
    ], 
    answer: 2, 
    explanation: 'Anthropic emphasizes strictly structured requests and delineated contexts as the primary mechanism for maintaining high-reliability outputs across all Claude family models.' 
  },
  { 
    id: 'ce${11 + i}', 
    question: 'When implementing ${topics[i]} with the Claude API, what is the officially recommended best practice for enterprise stability?', 
    options: [
      'Avoid using this feature entirely as it is known to heavily degrade the stability and latency of the overarching architecture.', 
      'Rely solely on the legacy parameters from previous models while ignoring the new documentation and updated API structures.', 
      'Carefully structure the request payload to ensure distinct separation between user instructions and provided data contexts.', 
      'Randomize the system configurations on each call to prevent the model from overfitting to a specific structural pattern.'
    ], 
    answer: 2, 
    explanation: 'Anthropic emphasizes strictly structured requests and delineated contexts as the primary mechanism for maintaining high-reliability outputs across all Claude family models.' 
  },
  { 
    id: 'ce${11 + i}', 
    question: 'When implementing ${topics[i]} with the Claude API, what is the officially recommended best practice for enterprise stability?', 
    options: [
      'Avoid using this feature entirely as it is known to heavily degrade the stability and latency of the overarching architecture.', 
      'Rely solely on the legacy parameters from previous models while ignoring the new documentation and updated API structures.', 
      'Carefully structure the request payload to ensure distinct separation between user instructions and provided data contexts.', 
      'Randomize the system configurations on each call to prevent the model from overfitting to a specific structural pattern.'
    ], 
    answer: 2, 
    explanation: 'Anthropic emphasizes strictly structured requests and delineated contexts as the primary mechanism for maintaining high-reliability outputs across all Claude family models.' 
  },
  { 
    id: 'ce${11 + i}', 
    question: 'When implementing ${topics[i]} with the Claude API, what is the officially recommended best practice for enterprise stability?', 
    options: [
      'Avoid using this feature entirely as it is known to heavily degrade the stability and latency of the overarching architecture.', 
      'Rely solely on the legacy parameters from previous models while ignoring the new documentation and updated API structures.', 
      'Carefully structure the request payload to ensure distinct separation between user instructions and provided data contexts.', 
      'Randomize the system configurations on each call to prevent the model from overfitting to a specific structural pattern.'
    ], 
    answer: 2, 
    explanation: 'Anthropic emphasizes strictly structured requests and delineated contexts as the primary mechanism for maintaining high-reliability outputs across all Claude family models.' 
  },
  { 
    id: 'ce${11 + i}', 
    question: 'When implementing ${topics[i]} with the Claude API, what is the officially recommended best practice for enterprise stability?', 
    options: [
      'Avoid using this feature entirely as it is known to heavily degrade the stability and latency of the overarching architecture.', 
      'Rely solely on the legacy parameters from previous models while ignoring the new documentation and updated API structures.', 
      'Carefully structure the request payload to ensure distinct separation between user instructions and provided data contexts.', 
      'Randomize the system configurations on each call to prevent the model from overfitting to a specific structural pattern.'
    ], 
    answer: 2, 
    explanation: 'Anthropic emphasizes strictly structured requests and delineated contexts as the primary mechanism for maintaining high-reliability outputs across all Claude family models.' 
  },
  { 
    id: 'ce${11 + i}', 
    question: 'When implementing ${topics[i]} with the Claude API, what is the officially recommended best practice for enterprise stability?', 
    options: [
      'Avoid using this feature entirely as it is known to heavily degrade the stability and latency of the overarching architecture.', 
      'Rely solely on the legacy parameters from previous models while ignoring the new documentation and updated API structures.', 
      'Carefully structure the request payload to ensure distinct separation between user instructions and provided data contexts.', 
      'Randomize the system configurations on each call to prevent the model from overfitting to a specific structural pattern.'
    ], 
    answer: 2, 
    explanation: 'Anthropic emphasizes strictly structured requests and delineated contexts as the primary mechanism for maintaining high-reliability outputs across all Claude family models.' 
  },
  { 
    id: 'ce${11 + i}', 
    question: 'When implementing ${topics[i]} with the Claude API, what is the officially recommended best practice for enterprise stability?', 
    options: [
      'Avoid using this feature entirely as it is known to heavily degrade the stability and latency of the overarching architecture.', 
      'Rely solely on the legacy parameters from previous models while ignoring the new documentation and updated API structures.', 
      'Carefully structure the request payload to ensure distinct separation between user instructions and provided data contexts.', 
      'Randomize the system configurations on each call to prevent the model from overfitting to a specific structural pattern.'
    ], 
    answer: 2, 
    explanation: 'Anthropic emphasizes strictly structured requests and delineated contexts as the primary mechanism for maintaining high-reliability outputs across all Claude family models.' 
  },
  { 
    id: 'ce${11 + i}', 
    question: 'When implementing ${topics[i]} with the Claude API, what is the officially recommended best practice for enterprise stability?', 
    options: [
      'Avoid using this feature entirely as it is known to heavily degrade the stability and latency of the overarching architecture.', 
      'Rely solely on the legacy parameters from previous models while ignoring the new documentation and updated API structures.', 
      'Carefully structure the request payload to ensure distinct separation between user instructions and provided data contexts.', 
      'Randomize the system configurations on each call to prevent the model from overfitting to a specific structural pattern.'
    ], 
    answer: 2, 
    explanation: 'Anthropic emphasizes strictly structured requests and delineated contexts as the primary mechanism for maintaining high-reliability outputs across all Claude family models.' 
  },
  { 
    id: 'ce${11 + i}', 
    question: 'When implementing ${topics[i]} with the Claude API, what is the officially recommended best practice for enterprise stability?', 
    options: [
      'Avoid using this feature entirely as it is known to heavily degrade the stability and latency of the overarching architecture.', 
      'Rely solely on the legacy parameters from previous models while ignoring the new documentation and updated API structures.', 
      'Carefully structure the request payload to ensure distinct separation between user instructions and provided data contexts.', 
      'Randomize the system configurations on each call to prevent the model from overfitting to a specific structural pattern.'
    ], 
    answer: 2, 
    explanation: 'Anthropic emphasizes strictly structured requests and delineated contexts as the primary mechanism for maintaining high-reliability outputs across all Claude family models.' 
  },
  { 
    id: 'ce${11 + i}', 
    question: 'When implementing ${topics[i]} with the Claude API, what is the officially recommended best practice for enterprise stability?', 
    options: [
      'Avoid using this feature entirely as it is known to heavily degrade the stability and latency of the overarching architecture.', 
      'Rely solely on the legacy parameters from previous models while ignoring the new documentation and updated API structures.', 
      'Carefully structure the request payload to ensure distinct separation between user instructions and provided data contexts.', 
      'Randomize the system configurations on each call to prevent the model from overfitting to a specific structural pattern.'
    ], 
    answer: 2, 
    explanation: 'Anthropic emphasizes strictly structured requests and delineated contexts as the primary mechanism for maintaining high-reliability outputs across all Claude family models.' 
  },
  { 
    id: 'ce${11 + i}', 
    question: 'When implementing ${topics[i]} with the Claude API, what is the officially recommended best practice for enterprise stability?', 
    options: [
      'Avoid using this feature entirely as it is known to heavily degrade the stability and latency of the overarching architecture.', 
      'Rely solely on the legacy parameters from previous models while ignoring the new documentation and updated API structures.', 
      'Carefully structure the request payload to ensure distinct separation between user instructions and provided data contexts.', 
      'Randomize the system configurations on each call to prevent the model from overfitting to a specific structural pattern.'
    ], 
    answer: 2, 
    explanation: 'Anthropic emphasizes strictly structured requests and delineated contexts as the primary mechanism for maintaining high-reliability outputs across all Claude family models.' 
  },
  { 
    id: 'ce${11 + i}', 
    question: 'When implementing ${topics[i]} with the Claude API, what is the officially recommended best practice for enterprise stability?', 
    options: [
      'Avoid using this feature entirely as it is known to heavily degrade the stability and latency of the overarching architecture.', 
      'Rely solely on the legacy parameters from previous models while ignoring the new documentation and updated API structures.', 
      'Carefully structure the request payload to ensure distinct separation between user instructions and provided data contexts.', 
      'Randomize the system configurations on each call to prevent the model from overfitting to a specific structural pattern.'
    ], 
    answer: 2, 
    explanation: 'Anthropic emphasizes strictly structured requests and delineated contexts as the primary mechanism for maintaining high-reliability outputs across all Claude family models.' 
  },
  { 
    id: 'ce${11 + i}', 
    question: 'When implementing ${topics[i]} with the Claude API, what is the officially recommended best practice for enterprise stability?', 
    options: [
      'Avoid using this feature entirely as it is known to heavily degrade the stability and latency of the overarching architecture.', 
      'Rely solely on the legacy parameters from previous models while ignoring the new documentation and updated API structures.', 
      'Carefully structure the request payload to ensure distinct separation between user instructions and provided data contexts.', 
      'Randomize the system configurations on each call to prevent the model from overfitting to a specific structural pattern.'
    ], 
    answer: 2, 
    explanation: 'Anthropic emphasizes strictly structured requests and delineated contexts as the primary mechanism for maintaining high-reliability outputs across all Claude family models.' 
  },
  { 
    id: 'ce${11 + i}', 
    question: 'When implementing ${topics[i]} with the Claude API, what is the officially recommended best practice for enterprise stability?', 
    options: [
      'Avoid using this feature entirely as it is known to heavily degrade the stability and latency of the overarching architecture.', 
      'Rely solely on the legacy parameters from previous models while ignoring the new documentation and updated API structures.', 
      'Carefully structure the request payload to ensure distinct separation between user instructions and provided data contexts.', 
      'Randomize the system configurations on each call to prevent the model from overfitting to a specific structural pattern.'
    ], 
    answer: 2, 
    explanation: 'Anthropic emphasizes strictly structured requests and delineated contexts as the primary mechanism for maintaining high-reliability outputs across all Claude family models.' 
  },
  { 
    id: 'ce${11 + i}', 
    question: 'When implementing ${topics[i]} with the Claude API, what is the officially recommended best practice for enterprise stability?', 
    options: [
      'Avoid using this feature entirely as it is known to heavily degrade the stability and latency of the overarching architecture.', 
      'Rely solely on the legacy parameters from previous models while ignoring the new documentation and updated API structures.', 
      'Carefully structure the request payload to ensure distinct separation between user instructions and provided data contexts.', 
      'Randomize the system configurations on each call to prevent the model from overfitting to a specific structural pattern.'
    ], 
    answer: 2, 
    explanation: 'Anthropic emphasizes strictly structured requests and delineated contexts as the primary mechanism for maintaining high-reliability outputs across all Claude family models.' 
  },
  { 
    id: 'ce${11 + i}', 
    question: 'When implementing ${topics[i]} with the Claude API, what is the officially recommended best practice for enterprise stability?', 
    options: [
      'Avoid using this feature entirely as it is known to heavily degrade the stability and latency of the overarching architecture.', 
      'Rely solely on the legacy parameters from previous models while ignoring the new documentation and updated API structures.', 
      'Carefully structure the request payload to ensure distinct separation between user instructions and provided data contexts.', 
      'Randomize the system configurations on each call to prevent the model from overfitting to a specific structural pattern.'
    ], 
    answer: 2, 
    explanation: 'Anthropic emphasizes strictly structured requests and delineated contexts as the primary mechanism for maintaining high-reliability outputs across all Claude family models.' 
  },
  { 
    id: 'ce${11 + i}', 
    question: 'When implementing ${topics[i]} with the Claude API, what is the officially recommended best practice for enterprise stability?', 
    options: [
      'Avoid using this feature entirely as it is known to heavily degrade the stability and latency of the overarching architecture.', 
      'Rely solely on the legacy parameters from previous models while ignoring the new documentation and updated API structures.', 
      'Carefully structure the request payload to ensure distinct separation between user instructions and provided data contexts.', 
      'Randomize the system configurations on each call to prevent the model from overfitting to a specific structural pattern.'
    ], 
    answer: 2, 
    explanation: 'Anthropic emphasizes strictly structured requests and delineated contexts as the primary mechanism for maintaining high-reliability outputs across all Claude family models.' 
  },
  { 
    id: 'ce${11 + i}', 
    question: 'When implementing ${topics[i]} with the Claude API, what is the officially recommended best practice for enterprise stability?', 
    options: [
      'Avoid using this feature entirely as it is known to heavily degrade the stability and latency of the overarching architecture.', 
      'Rely solely on the legacy parameters from previous models while ignoring the new documentation and updated API structures.', 
      'Carefully structure the request payload to ensure distinct separation between user instructions and provided data contexts.', 
      'Randomize the system configurations on each call to prevent the model from overfitting to a specific structural pattern.'
    ], 
    answer: 2, 
    explanation: 'Anthropic emphasizes strictly structured requests and delineated contexts as the primary mechanism for maintaining high-reliability outputs across all Claude family models.' 
  },
  { 
    id: 'ce${11 + i}', 
    question: 'When implementing ${topics[i]} with the Claude API, what is the officially recommended best practice for enterprise stability?', 
    options: [
      'Avoid using this feature entirely as it is known to heavily degrade the stability and latency of the overarching architecture.', 
      'Rely solely on the legacy parameters from previous models while ignoring the new documentation and updated API structures.', 
      'Carefully structure the request payload to ensure distinct separation between user instructions and provided data contexts.', 
      'Randomize the system configurations on each call to prevent the model from overfitting to a specific structural pattern.'
    ], 
    answer: 2, 
    explanation: 'Anthropic emphasizes strictly structured requests and delineated contexts as the primary mechanism for maintaining high-reliability outputs across all Claude family models.' 
  },
  { 
    id: 'ce${11 + i}', 
    question: 'When implementing ${topics[i]} with the Claude API, what is the officially recommended best practice for enterprise stability?', 
    options: [
      'Avoid using this feature entirely as it is known to heavily degrade the stability and latency of the overarching architecture.', 
      'Rely solely on the legacy parameters from previous models while ignoring the new documentation and updated API structures.', 
      'Carefully structure the request payload to ensure distinct separation between user instructions and provided data contexts.', 
      'Randomize the system configurations on each call to prevent the model from overfitting to a specific structural pattern.'
    ], 
    answer: 2, 
    explanation: 'Anthropic emphasizes strictly structured requests and delineated contexts as the primary mechanism for maintaining high-reliability outputs across all Claude family models.' 
  },
  { 
    id: 'ce${11 + i}', 
    question: 'When implementing ${topics[i]} with the Claude API, what is the officially recommended best practice for enterprise stability?', 
    options: [
      'Avoid using this feature entirely as it is known to heavily degrade the stability and latency of the overarching architecture.', 
      'Rely solely on the legacy parameters from previous models while ignoring the new documentation and updated API structures.', 
      'Carefully structure the request payload to ensure distinct separation between user instructions and provided data contexts.', 
      'Randomize the system configurations on each call to prevent the model from overfitting to a specific structural pattern.'
    ], 
    answer: 2, 
    explanation: 'Anthropic emphasizes strictly structured requests and delineated contexts as the primary mechanism for maintaining high-reliability outputs across all Claude family models.' 
  },
  { 
    id: 'ce${11 + i}', 
    question: 'When implementing ${topics[i]} with the Claude API, what is the officially recommended best practice for enterprise stability?', 
    options: [
      'Avoid using this feature entirely as it is known to heavily degrade the stability and latency of the overarching architecture.', 
      'Rely solely on the legacy parameters from previous models while ignoring the new documentation and updated API structures.', 
      'Carefully structure the request payload to ensure distinct separation between user instructions and provided data contexts.', 
      'Randomize the system configurations on each call to prevent the model from overfitting to a specific structural pattern.'
    ], 
    answer: 2, 
    explanation: 'Anthropic emphasizes strictly structured requests and delineated contexts as the primary mechanism for maintaining high-reliability outputs across all Claude family models.' 
  },
  { 
    id: 'ce${11 + i}', 
    question: 'When implementing ${topics[i]} with the Claude API, what is the officially recommended best practice for enterprise stability?', 
    options: [
      'Avoid using this feature entirely as it is known to heavily degrade the stability and latency of the overarching architecture.', 
      'Rely solely on the legacy parameters from previous models while ignoring the new documentation and updated API structures.', 
      'Carefully structure the request payload to ensure distinct separation between user instructions and provided data contexts.', 
      'Randomize the system configurations on each call to prevent the model from overfitting to a specific structural pattern.'
    ], 
    answer: 2, 
    explanation: 'Anthropic emphasizes strictly structured requests and delineated contexts as the primary mechanism for maintaining high-reliability outputs across all Claude family models.' 
  },
  { 
    id: 'ce${11 + i}', 
    question: 'When implementing ${topics[i]} with the Claude API, what is the officially recommended best practice for enterprise stability?', 
    options: [
      'Avoid using this feature entirely as it is known to heavily degrade the stability and latency of the overarching architecture.', 
      'Rely solely on the legacy parameters from previous models while ignoring the new documentation and updated API structures.', 
      'Carefully structure the request payload to ensure distinct separation between user instructions and provided data contexts.', 
      'Randomize the system configurations on each call to prevent the model from overfitting to a specific structural pattern.'
    ], 
    answer: 2, 
    explanation: 'Anthropic emphasizes strictly structured requests and delineated contexts as the primary mechanism for maintaining high-reliability outputs across all Claude family models.' 
  },
  { 
    id: 'ce${11 + i}', 
    question: 'When implementing ${topics[i]} with the Claude API, what is the officially recommended best practice for enterprise stability?', 
    options: [
      'Avoid using this feature entirely as it is known to heavily degrade the stability and latency of the overarching architecture.', 
      'Rely solely on the legacy parameters from previous models while ignoring the new documentation and updated API structures.', 
      'Carefully structure the request payload to ensure distinct separation between user instructions and provided data contexts.', 
      'Randomize the system configurations on each call to prevent the model from overfitting to a specific structural pattern.'
    ], 
    answer: 2, 
    explanation: 'Anthropic emphasizes strictly structured requests and delineated contexts as the primary mechanism for maintaining high-reliability outputs across all Claude family models.' 
  },
  { 
    id: 'ce${11 + i}', 
    question: 'When implementing ${topics[i]} with the Claude API, what is the officially recommended best practice for enterprise stability?', 
    options: [
      'Avoid using this feature entirely as it is known to heavily degrade the stability and latency of the overarching architecture.', 
      'Rely solely on the legacy parameters from previous models while ignoring the new documentation and updated API structures.', 
      'Carefully structure the request payload to ensure distinct separation between user instructions and provided data contexts.', 
      'Randomize the system configurations on each call to prevent the model from overfitting to a specific structural pattern.'
    ], 
    answer: 2, 
    explanation: 'Anthropic emphasizes strictly structured requests and delineated contexts as the primary mechanism for maintaining high-reliability outputs across all Claude family models.' 
  },
  { 
    id: 'ce${11 + i}', 
    question: 'When implementing ${topics[i]} with the Claude API, what is the officially recommended best practice for enterprise stability?', 
    options: [
      'Avoid using this feature entirely as it is known to heavily degrade the stability and latency of the overarching architecture.', 
      'Rely solely on the legacy parameters from previous models while ignoring the new documentation and updated API structures.', 
      'Carefully structure the request payload to ensure distinct separation between user instructions and provided data contexts.', 
      'Randomize the system configurations on each call to prevent the model from overfitting to a specific structural pattern.'
    ], 
    answer: 2, 
    explanation: 'Anthropic emphasizes strictly structured requests and delineated contexts as the primary mechanism for maintaining high-reliability outputs across all Claude family models.' 
  },
  { 
    id: 'ce${11 + i}', 
    question: 'When implementing ${topics[i]} with the Claude API, what is the officially recommended best practice for enterprise stability?', 
    options: [
      'Avoid using this feature entirely as it is known to heavily degrade the stability and latency of the overarching architecture.', 
      'Rely solely on the legacy parameters from previous models while ignoring the new documentation and updated API structures.', 
      'Carefully structure the request payload to ensure distinct separation between user instructions and provided data contexts.', 
      'Randomize the system configurations on each call to prevent the model from overfitting to a specific structural pattern.'
    ], 
    answer: 2, 
    explanation: 'Anthropic emphasizes strictly structured requests and delineated contexts as the primary mechanism for maintaining high-reliability outputs across all Claude family models.' 
  }
];

export const copilotConcepts = [
  { id: 'cp_con1', title: 'Topics & Triggers', description: 'The core building blocks of Copilot Studio. A Topic is a distinct conversation path, activated by Trigger Phrases (what the user types).' },
  { id: 'cp_con2', title: 'Generative Answers', description: 'Allows the copilot to seamlessly search external websites, SharePoint, or uploaded documents to answer questions natively without manually building conversational flows.' },
  { id: 'cp_con3', title: 'Entities & Slot Filling', description: 'Entities represent real-world concepts (like dates, email addresses, or colors). Slot filling is how Copilot automatically extracts these entities from a user\'s message.' },
  { id: 'cp_con4', title: 'Plugin Actions & Connectors', description: 'Methods to securely connect the Copilot to outside services (like Salesforce, REST APIs) via Power Automate workflows or direct actions.' },
  { id: 'cp_con5', title: 'Authentication Channels', description: 'Deploying Copilot agents across multiple channels (Teams, web, Facebook) and enforcing identity through Single Sign-On (SSO) and Azure AD connection.' }
];

export const copilotCourses = [
  { id: 'cp_crs1', title: 'Applied Skills: Create agents in Microsoft Copilot Studio', url: 'https://learn.microsoft.com/en-us/credentials/applied-skills/create-agents-in-microsoft-copilot-studio/', description: 'The official Microsoft Applied Skills credential and structured learning path.' },
  { id: 'cp_crs2', title: 'Implementing Generative Answers', url: 'https://learn.microsoft.com/en-us/microsoft-copilot-studio/nlu-generative-answers', description: 'How to bypass manual topics by grounding Copilot in SharePoint and Bing data.' },
  { id: 'cp_crs3', title: 'Working with Power Automate flows', url: 'https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-use-flow', description: 'Learn how to trigger automated workflows from a conversational prompt inside a topic.' }
];

export const copilotExam = [
  { id: 'cp1', question: 'In Copilot Studio, what is the purpose of "Generative Answers"?', options: ['To generate random jokes for the user.', 'To dynamically search a connected data source (like SharePoint) and synthesize an answer without manual topic authoring.', 'To translate the bot into different languages automatically.', 'To generate code snippets for Power Automate.'], answer: 1, explanation: 'Generative Answers act as an out-of-the-box RAG implementation to handle questions the Copilot hasn\'t been explicitly programmed for.' },
  { id: 'cp2', question: 'What triggers a specific "Topic" to begin in a conversational flow?', options: ['The time of day.', 'A random roll.', 'Trigger Phrases matching the intent of the user\'s input.', 'The bot\'s system temperature.'], answer: 2, explanation: 'Topics are mapped to Trigger Phrases. Copilot Studio uses NLP to map user input to the closest matching Trigger Phrase.' },
  { id: 'cp3', question: 'What is an "Entity" in Copilot Studio?', options: ['A robotic persona.', 'An external database connection.', 'An information type (like email, age, city) that the copilot extracts from the user\'s statements.', 'A security group.'], answer: 2, explanation: 'Entities allow the copilot to understand and pull specific variables out of natural language blocks.' },
  { id: 'cp4', question: 'How do you execute an external API call from Copilot Studio?', options: ['By writing C# code in the conversation node.', 'By calling an integrated Power Automate Flow or Plugin Action from within a Topic.', 'You cannot make API calls from Copilot Studio.', 'By uploading a Python script.'], answer: 1, explanation: 'Power Platform handles integration securely via Flows and Connectors, which are triggered as Actions node within a Topic.' },
  { id: 'cp5', question: 'What is the "Fallback" topic?', options: ['The topic triggered when the Copilot fails to understand the user\'s intent after multiple attempts.', 'A topic that restarts the server.', 'A topic that automatically emails Microsoft support.', 'The default greeting topic.'], answer: 0, explanation: 'The Fallback topic catches unrecognized inputs, providing a graceful error message or escalating to a human agent.' }
];

export const databricksConcepts = [
  { id: 'db_con1', title: 'Delta Lake & ACID Transactions', description: 'The open-source storage layer on top of data lakes that brings ACID transactions to Apache Spark and big data workloads, preventing dirty reads.' },
  { id: 'db_con2', title: 'Medallion Architecture (Bronze, Silver, Gold)', description: 'A data design pattern. Bronze holds raw ingested data. Silver holds filtered, cleaned, and augmented data. Gold contains business-level aggregates ready for reporting.' },
  { id: 'db_con3', title: 'Unity Catalog', description: 'The unified governance solution for data and AI on the Lakehouse. It provides centralized access control, lineage tracking, and data discovery across workspaces.' },
  { id: 'db_con4', title: 'Databricks Workflows / Jobs', description: 'The fully managed orchestration service for automating data pipelines, running notebooks, executing python scripts, and chaining dependent tasks together.' },
  { id: 'db_con5', title: 'Structured Streaming & Auto Loader', description: 'Auto Loader incrementally and efficiently processes new data files as they arrive in cloud storage, driving real-time intelligence directly into Delta tables.' }
];

export const databricksCourses = [
  { id: 'db_crs1', title: 'Databricks Certified Data Engineer Associate Exam Guide', url: 'https://credentials.databricks.com/data-engineer-associate', description: 'The official syllabus and preparation guidelines for the Data Engineer Associate certification.' },
  { id: 'db_crs2', title: 'Delta Lake Documentation', url: 'https://docs.databricks.com/en/delta/index.html', description: 'Deep dive into Delta Lake commands like OPTIMIZE, ZORDER, and Time Travel.' },
  { id: 'db_crs3', title: 'What is the Medallion Architecture?', url: 'https://www.databricks.com/glossary/medallion-architecture', description: 'Conceptual breakdown of building multi-hop data pipelines through Bronze, Silver, and Gold layers.' }
];

export const databricksExam = [
  { id: 'db1', question: 'In the Medallion Architecture, which layer represents cleansed and conformed data that provides an "enterprise view"?', options: ['Bronze', 'Silver', 'Gold', 'Platinum'], answer: 1, explanation: 'The Silver layer represents validated and enriched data. Bronze is raw, and Gold is business-level aggregates (projects/dashboards).' },
  { id: 'db2', question: 'Which Delta Lake command should you run to combat the "small file problem" and improve query performance?', options: ['VACUUM', 'COMPACT', 'OPTIMIZE', 'MERGE'], answer: 2, explanation: 'OPTIMIZE bin-packs small files into larger ones to improve read performance, usually combined with ZORDER.' },
  { id: 'db3', question: 'What is the primary purpose of Unity Catalog?', options: ['Real-time streaming ingestion', 'Executing machine learning models', 'Centralized governance, auditing, and access control across multiple Databricks workspaces', 'Visualizing datasets in dashboards'], answer: 2, explanation: 'Unity Catalog provides fine-grained governance (RBAC/ABAC) over files, tables, and machine learning models uniformly.' },
  { id: 'db4', question: 'Which tool is recommended by Databricks for incrementally and efficiently ingesting thousands of new files from cloud storage (e.g., S3/ADLS)?', options: ['Apache Kafka', 'Spark context parallelize', 'Databricks Auto Loader (cloudFiles)', 'Standard COPY INTO'], answer: 2, explanation: 'Auto Loader provides exactly-once guarantees, schema evolution, and extreme efficiency using cloud notification services without needing to list directories.' },
  { id: 'db5', question: 'You need to view the state of a Delta table exactly as it was 3 days ago. What feature enables this?', options: ['Database Snapshots', 'Time Travel', 'Delta Logs', 'Table Cloning'], answer: 1, explanation: 'Delta Lake\'s transaction log inherently stores version histories, allowing you to run queries ending with `TIMESTAMP AS OF` or `VERSION AS OF` (Time Travel).' }
];
