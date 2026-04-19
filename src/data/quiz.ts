export const quizQuestions = [
  {
    id: 'q1',
    question: 'What is the primary purpose of Retrieval-Augmented Generation (RAG)?',
    options: [
      'To train a model faster on a GPU cluster.',
      'To ground an LLM\'s response using external, up-to-date information.',
      'To compress a large model into a smaller, quantized version.',
      'To prevent model drift automatically.'
    ],
    answer: 1,
    explanation: 'RAG retrieves relevant data from an external database and provides it to the LLM to ground its response generation.'
  },
  {
    id: 'q2',
    question: 'Which best describes "Model Drift"?',
    options: [
      'The tendency of an LLM to hallucinate over long conversations.',
      'The degradation of a model\'s accuracy over time as real-world data changes.',
      'Migrating a model from one cloud provider to another.',
      'Adjusting the temperature parameter to increase creativity.'
    ],
    answer: 1,
    explanation: 'Model drift occurs when the statistical properties of the target variable, which the model is trying to predict, change over time.'
  },
  {
    id: 'q3',
    question: 'In the context of LangChain, what is an "Agent"?',
    options: [
      'An LLM that has access to a suite of tools and decides which to use to answer a prompt.',
      'A customer support representative using an AI dashboard.',
      'The specific API key used to authenticate with OpenAI or Anthropic.',
      'A script that cleans data before it is embedded.'
    ],
    answer: 0,
    explanation: 'An agent uses an LLM as a reasoning engine to determine which actions (tools) to take and in what order.'
  },
  {
    id: 'q4',
    question: 'What is the Model Context Protocol (MCP)?',
    options: [
      'A TCP/IP alternative for faster data transfer.',
      'An Anthropic-specific token tracking algorithm.',
      'An open standard that standardizes how AI models securely connect to local and remote data sources.',
      'A method for fine-tuning models on small datasets.'
    ],
    answer: 2,
    explanation: 'MCP is an open standard introduced to provide a universal, secure method for connecting AI models to multiple data sources.'
  }
];

export const claudeExam = [
  {
    id: 'c1',
    question: 'Which formatting technique does Anthropic officially recommend for structuring complex prompts for Claude?',
    options: [
      'JSON objects',
      'Markdown backticks exclusively',
      'XML tags (e.g., <doc> ... </doc>)',
      'Whitespace indentation (YAML style)'
    ],
    answer: 2,
    explanation: 'Claude was heavily trained to recognize and parse XML tags, making them the most reliable way to structure context and instructions.'
  },
  {
    id: 'c2',
    question: 'What is "Constitutional AI"?',
    options: [
      'An AI system legally bound by a country\'s constitution.',
      'Anthropic\'s method for training AI to be harmless and helpful by critiquing and revising its own responses based on a set of principles.',
      'A rule that an AI cannot generate code that modifies its own core weights.',
      'A prompt engineering technique that lists rules at the start of a conversation.'
    ],
    answer: 1,
    explanation: 'Constitutional AI is Anthropic\'s methodology where the AI uses a set of principles (a "constitution") to evaluate and correct its own behavior during training.'
  }
];
