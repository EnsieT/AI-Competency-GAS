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
  },
  {
    id: 'vector-db',
    title: 'Vector Database',
    analogy: 'A library sorted by meaning instead of alphabetically.',
    description: 'A specialized database that stores numbers (vectors/embeddings) representing the semantic meaning of text. It enables ultra-fast similarity searches to find concepts that mean the same thing, even if they use completely different words.',
    example: 'Searching "Canine doctor" in a regular database fails if the document says "Veterinarian for dogs". A Vector DB knows they map to the same mathematical coordinates and retrieves it instantly.'
  },
  {
    id: 'tokenization',
    title: 'Tokenization',
    analogy: 'Breaking a Lego castle down into its individual blocks before shipping it.',
    description: 'The process of chopping text into smaller sub-word pieces (tokens) that LLMs can process mathematically. A token is typically a few characters long, parsing words into mathematical units.',
    example: 'The word "Unbelievable" might be split into tokens: ["Un", "believ", "able"]. The LLM processes these chunks rather than reading the string character by character.'
  },
  {
    id: 'fine-tuning',
    title: 'Fine-Tuning',
    analogy: 'Sending a general practitioner doctor back to medical school to become a brain surgeon.',
    description: 'Taking a pre-trained foundational model and training it further on a smaller, specialized dataset to adapt it for specific tasks, tones, or domain knowledge.',
    example: 'OpenAI trains GPT-4 on the whole internet (Pre-training), but a law firm might fine-tune an instance of it on 10,000 legal contracts so it learns to speak specifically in precise legal jargon.'
  },
  {
    id: 'system-prompt',
    title: 'System Prompt',
    analogy: 'The director\'s instructions given to an actor right before the camera rolls.',
    description: 'A special instruction set provided to an LLM at the very beginning of a conversation that defines its persona, rules, constraints, and operational guidelines. It heavily biases all subsequent outputs.',
    example: 'Setting the system prompt to "You are a grumpy 18th-century pirate. Never break character." ensures that no matter what the user asks, the LLM will reply with "Arrr" and nautical terms.'
  },
  {
    id: 'chunking',
    title: 'Chunking',
    analogy: 'Cutting a steak into bite-sized pieces before chewing.',
    description: 'In RAG pipelines, breaking large documents (like a 100-page PDF) into smaller overlapping sections (e.g., 500 words each) before sending them to the embedding model, ensuring meaning is preserved without diluting the context.',
    example: 'Instead of searching an entire 500-page Harry Potter book for "Snape\'s potion", the book is chopped into 2,000 paragraphs, allowing the system to retrieve just the 3 specific paragraphs containing the formula.'
  },
  {
    id: 'lora',
    title: 'LoRA (Low-Rank Adaptation)',
    analogy: 'Adding a lightweight mod to a video game rather than rewriting the game engine.',
    description: 'A highly efficient technique for fine-tuning large models by keeping the core weights frozen and only training a tiny, low-rank add-on matrix. It saves massive amounts of GPU VRAM.',
    example: 'Instead of spending $100,000 to fine-tune a 70-Billion parameter model, a solo developer uses LoRA on their laptop to train a 50-Megabyte adapter file that alters the model to speak like Shakespeare.'
  },
  {
    id: 'semantic-routing',
    title: 'Semantic Routing',
    analogy: 'An intelligent receptionist who listens to your problem and forwards you to the right department.',
    description: 'Using embeddings to determine the intent of a user\'s query and automatically routing the prompt to specific sub-systems or specialized LLMs without manually writing endless IF/ELSE statements.',
    example: 'If a user says "Cancel my sub", the router mathematically maps this to the "Billing Agent" flow. If they say "How to reset password", it routes to the "Support Agent" flow.'
  },
  {
    id: 'temperature',
    title: 'Temperature',
    analogy: 'A slider between "Boring Accountant" and "Jazz Musician".',
    description: 'A hyperparameter controlling the randomness of an LLM\'s predictions. A low temperature picks the most likely next word (deterministic/focused), while a high temperature allows for riskier, less probable words (creative/chaotic).',
    example: 'For writing a strictly factual legal document, tempertaure is set to 0.1. For brainstorming wild Sci-Fi movie concepts, temperature is cranked to 0.9.'
  },
  {
    id: 'knowledge-graph',
    title: 'Knowledge Graph',
    analogy: 'A detective\'s string board connecting suspects, places, and motives.',
    description: 'A structural database that maps entities and the explicit relationships between them (e.g., "Steve Jobs [FOUNDED] Apple"). Often used alongside RAG (GraphRAG) to provide higher accuracy than simple vector similarity.',
    example: 'A Vector DB might struggle to answer "Who is the CEO of the company acquired by Google in 2014?" but a Knowledge Graph traces the connections directly: DeepMind -> [ACQUIRED BY] -> Google, Demis Hassabis -> [CEO OF] -> DeepMind.'
  },
  {
    id: 'synthetic-data',
    title: 'Synthetic Data',
    analogy: 'Using a flight simulator to train for bad weather instead of waiting for a real storm.',
    description: 'Artificially generated data created by AI models used to train other AI models. It is utilized when human-made data is too scarce, expensive, or privacy-restricted.',
    example: 'A bank cannot legally use real customer transaction records to train a fraud-detection AI, so they use an LLM generating 10 million realistic but completely fake transaction logs for training.'
  }
];
