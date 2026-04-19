export const projects = [
  {
    id: 'proj_embed',
    title: 'Semantic Search Engine',
    topic: 'Embeddings',
    level: 'Beginner',
    description: 'Build a Python or Node script to generate text embeddings for 10 document strings and find the closest match using Cosine Similarity mathematics.',
    tags: ['Math', 'Vectors', 'Search']
  },
  {
    id: 'proj_rag',
    title: 'Chat with your PDF',
    topic: 'RAG',
    level: 'Intermediate',
    description: 'Create a small pipeline that loads a PDF, splits the text into chunks, embeds them into a local ChromaDB, and uses an LLM to answer questions strictly from the document.',
    tags: ['ChromaDB', 'Chunking', 'Context']
  },
  {
    id: 'proj_mcp',
    title: 'Universal Database Connector',
    topic: 'Integration',
    level: 'Intermediate',
    description: 'Set up a basic Model Context Protocol (MCP) server that exposes read-only queries from a local SQLite database directly to Claude Desktop.',
    tags: ['Architecture', 'Networking', 'Tools']
  },
  {
    id: 'proj_drift',
    title: 'Feedback Loop Monitor',
    topic: 'MLOps',
    level: 'Advanced',
    description: 'Simulate a production environment by logging LLM outputs to a dashboard. Introduce noisy data to trigger a simulated "accuracy score drop" mimicking model drift.',
    tags: ['Monitoring', 'Decay', 'Logging']
  },
  {
    id: 'proj_omni',
    title: 'The Omni-Agent',
    topic: 'Agents',
    level: 'Advanced',
    description: 'Combine all concepts into a LangChain agent that uses the MCP protocol to fetch user data, queries a vector DB (RAG) for company policies, and logs its latency (MLOps).',
    tags: ['LangChain', 'Routing', 'Combined']
  },
  {
    id: 'proj_judge',
    title: 'LLM-as-a-Judge Router',
    topic: 'MLOps',
    level: 'Intermediate',
    description: 'Create a system where a small LLM evaluates the output of another LLM for toxicity and relevancy before passing the response back to the user.',
    tags: ['Evaluation', 'Guardrails', 'Routing']
  },
  {
    id: 'proj_local',
    title: 'Local Privacy Assistant',
    topic: 'LLM Fundamentals',
    level: 'Beginner',
    description: 'Install Ollama locally and interact with a small 7B parameter model via a local Node.js server to ensure zero data leaves the machine.',
    tags: ['Ollama', 'Local', 'Privacy']
  },
  {
    id: 'proj_memory',
    title: 'Context-Aware Memory Bot',
    topic: 'Agents',
    level: 'Intermediate',
    description: 'Build a conversational AI that implements a sliding buffer window memory. When the prompt exceeds 4000 tokens, it automatically summarizes the oldest messages to maintain state.',
    tags: ['Memory', 'Summarization', 'Context']
  }
];
