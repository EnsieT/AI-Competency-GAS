export const concepts = [
  {
    id: 'mcp',
    title: 'Model Context Protocol (MCP)',
    analogy: 'A universal USB-C cable for AI models.',
    description: 'MCP standardizes how AI models connect to external tools, databases, and APIs. Instead of building custom integrations for every new tool, MCP provides a unified way for models to access context securely and reliably.',
    example: 'Instead of writing a custom Python script to let Claude read your local GitHub repo, you use an MCP server. Claude "plugs in" via MCP and instantly understands how to browse your files, read your code, and propose changes without you writing glue code.'
  },
  {
    id: 'langchain',
    title: 'LangChain',
    analogy: 'A General Contractor for your AI house.',
    description: 'LangChain is a framework that simplifies building applications powered by large language models. It provides standard interfaces for chains, agents, memory, and tools, allowing you to orchestrate complex workflows.',
    example: 'You tell LangChain "I want a chatbot that reads PDFs". LangChain talks to the PDF parser (the plumber), sends the text to the embedding model (the electrician), stores it in a vector DB (the framer), and gives the LLM (the architect) the final context to answer the user.'
  },
  {
    id: 'model-drift',
    title: 'Model Drift',
    analogy: 'A student who memorized the 2020 map of the world failing a geography test in 2026.',
    description: 'Model drift refers to the degradation of a machine learning model\'s predictive power over time due to changes in the real-world environment, user behavior, or underlying data distributions.',
    example: 'An AI trained to detect spam emails in 2022 might fail in 2026 because spammers have invented new phrasing (like bypassing filters with zero-width characters). The model hasn\'t changed, but the world has drifted.'
  },
  {
    id: 'rag',
    title: 'Retrieval-Augmented Generation (RAG)',
    analogy: 'Giving an open-book exam to a student instead of a closed-book one.',
    description: 'RAG improves LLM responses by grounding the model on external sources of knowledge fetched right before answering, rather than relying solely on the internal knowledge embedded in its weights.',
    example: 'When you ask "What is our company\'s Q3 revenue?", the system first searches your internal database for the Q3 report (Retrieval), gives that report to the LLM (Augmented), and asks it to extract the number (Generation).'
  }
];
